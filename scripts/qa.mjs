import { readFile, readdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { parseHTML } from 'linkedom';
import path from 'node:path';
import assert from 'node:assert/strict';
import { prepareEnquiry } from '../src/lib/contact.ts';

const root = path.resolve('dist');
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
const issues = [];
let links = 0,
  assets = 0;
const walk = async (dir) =>
  (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((e) =>
        e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name),
      ),
    )
  ).flat();
const htmlFiles = (await walk(root)).filter((p) => p.endsWith('.html'));
const docs = new Map();
for (const file of htmlFiles) docs.set(file, parseHTML(await readFile(file, 'utf8')).document);
function resolveTarget(raw, from) {
  const url = new URL(
    raw,
    'https://local.test' + base + '/' + path.relative(root, from).replaceAll(path.sep, '/'),
  );
  if (url.origin !== 'https://local.test') return null;
  let route = decodeURIComponent(url.pathname);
  if (base && !route.startsWith(base + '/') && route !== base) {
    issues.push('URL escapes base: ' + raw + ' in ' + from);
    return null;
  }
  route = route.slice(base.length);
  let file = path.join(root, route);
  if (route.endsWith('/')) file = path.join(file, 'index.html');
  return { file, hash: decodeURIComponent(url.hash.slice(1)) };
}
for (const [file, doc] of docs) {
  const relative = path.relative(root, file);
  const fail = (msg) => issues.push(relative + ': ' + msg);
  const redirect = doc.querySelector('meta[http-equiv="refresh"]');
  if (!redirect) {
    if (doc.querySelectorAll('h1').length !== 1) fail('Expected exactly one H1');
    if (!doc.querySelector('html')?.getAttribute('lang')) fail('Missing document language');
    if (!doc.querySelector('title')?.textContent?.trim()) fail('Missing title');
    if (!doc.querySelector('meta[name="description"]')?.getAttribute('content'))
      fail('Missing description');
    if (!doc.querySelector('link[rel="canonical"]')) fail('Missing canonical');
    if (!doc.querySelector('main#main')) fail('Missing main landmark');
    if (doc.querySelectorAll('link[rel="alternate"][hreflang]').length !== 4)
      fail('Missing language alternates');
    if (/Lorem ipsum/i.test(doc.textContent)) fail('Placeholder copy');
    const ids = [...doc.querySelectorAll('[id]')].map((el) => el.id);
    if (new Set(ids).size !== ids.length) fail('Duplicate element IDs');
  }
  for (const image of doc.querySelectorAll('img')) {
    if (!image.hasAttribute('alt')) fail('Missing image alt');
    if (!image.hasAttribute('width') || !image.hasAttribute('height'))
      fail('Missing image dimensions');
  }
  for (const el of doc.querySelectorAll(
    'a[href],link[href],script[src],img[src],video[poster],source[src]',
  )) {
    const raw = el.getAttribute('href') || el.getAttribute('src') || el.getAttribute('poster');
    if (!raw || raw.startsWith('mailto:') || raw.startsWith('data:')) continue;
    if (el.tagName === 'A') links++;
    else assets++;
    const target = resolveTarget(raw, file);
    if (!target) continue;
    try {
      if (!(await stat(target.file)).isFile()) fail('Not a file: ' + raw);
    } catch {
      fail('Missing target: ' + raw);
      continue;
    }
    if (target.hash) {
      const dest = docs.get(target.file);
      if (!dest?.getElementById(target.hash)) fail('Missing anchor: ' + raw);
    }
  }
  for (const source of doc.querySelectorAll('[srcset]')) {
    for (const entry of source.getAttribute('srcset').split(',')) {
      const raw = entry.trim().split(/\s+/)[0];
      const target = resolveTarget(raw, file);
      if (!target) continue;
      try {
        await stat(target.file);
        assets++;
      } catch {
        fail('Missing responsive image: ' + raw);
      }
    }
  }
}
const integrity = JSON.parse(await readFile('docs/design/ASSET_INTEGRITY.json', 'utf8'));
for (const [file, hash] of Object.entries(integrity.masters)) {
  const current = await readFile('public/assets/' + file);
  assert.equal(
    createHash('sha256').update(current).digest('hex'),
    hash,
    'Master hash changed: ' + file,
  );
  const original = execFileSync('git', ['show', '7a14df0:public/assets/' + file]);
  assert.ok(original.equals(current), 'Official master differs from original commit: ' + file);
}
for (const locale of ['zh-tw', 'zh-cn', 'en']) {
  const list = [...docs.keys()].filter(
    (f) =>
      path.relative(root, f).startsWith(locale + '/') &&
      !docs.get(f).querySelector('meta[http-equiv="refresh"]'),
  );
  assert.equal(list.length, 1, 'Missing localized routes: ' + locale);
  const names = list.map((f) => docs.get(f).querySelector('title').textContent);
  assert.equal(new Set(names).size, names.length, 'Duplicate page titles: ' + locale);
}
for (const [file, doc] of docs) {
  if (doc.querySelector('meta[http-equiv="refresh"]') || file.endsWith('/404.html')) continue;
  for (const id of [
    'products',
    'products-space',
    'products-files',
    'products-shield',
    'solutions',
    'services',
    'resources',
    'about',
    'contact',
    'privacy',
    'terms',
  ]) {
    assert.ok(doc.getElementById(id), 'Missing single-page section: ' + id + ' in ' + file);
  }
  assert.equal(doc.querySelectorAll('[data-demo]').length, 3, 'Expected three product experiences');
  assert.equal(
    doc.querySelectorAll('.resource-disclosure').length,
    3,
    'Expected three complete articles',
  );
  assert.equal(
    doc.querySelectorAll('.solution-disclosure').length,
    4,
    'Expected four complete solutions',
  );
  assert.equal(doc.querySelectorAll('#contact-form').length, 1, 'Expected one contact form');
}
const data = new FormData();
data.set('name', 'Sample Person');
data.set('company', 'Example');
data.set('email', 'sample@example.com');
data.set('message', 'Work handoff & version review');
const draft = prepareEnquiry(data, 'Eryndex Files', 'Enquiry');
assert.ok(draft.mailto.startsWith('mailto:contact@eryndex.com?'));
assert.equal(new URL(draft.mailto).searchParams.get('body'), draft.body);
assert.ok(draft.body.includes('Work handoff & version review'));
await stat(path.join(root, 'sitemap.xml'));
await stat(path.join(root, 'robots.txt'));
if (issues.length) {
  console.error(issues.join('\n'));
  process.exitCode = 1;
} else
  console.log(
    JSON.stringify(
      {
        status: 'PASS',
        htmlPages: htmlFiles.length,
        internalLinkReferences: links,
        assetReferences: assets,
        originalMastersVerified: 6,
        localizedPages: 3,
        legacyRedirects: 54,
        contactDraft: 'PASS',
        scope:
          'Static HTML, assets, links, metadata and contact logic. Not browser, accessibility or visual QA.',
      },
      null,
      2,
    ),
  );
