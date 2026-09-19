// Read-only regression checks for the three-language corporate identity site.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { parseHTML } from 'linkedom';
import { cnTerms, localizeSimplified } from '../src/data/zh-cn.ts';

try {
  const docs = Object.fromEntries(
    ['zh-tw', 'zh-cn', 'en'].map((lang) => {
      const { document } = parseHTML(readFileSync(`dist/${lang}/index.html`, 'utf8'));
      document.querySelectorAll('script, style').forEach((node) => node.remove());
      return [lang, document];
    }),
  );
  const cn = docs['zh-cn'];
  const output = cn.documentElement.outerHTML;
  for (const [term] of cnTerms) assert.ok(!output.includes(term), `Unlocalized term: ${term}`);
  assert.ok(cn.querySelector('.hero-description').textContent.includes('智序科技'));
  assert.ok(output.includes('公司信息'));
  assert.equal(
    localizeSimplified('Eryndex Space Files Shield Services'),
    'Eryndex Space Files Shield Services',
  );
  for (const document of Object.values(docs)) {
    assert.equal(document.querySelectorAll('.system-product').length, 3);
    assert.equal(document.querySelectorAll('[data-demo]').length, 0);
    assert.equal(document.querySelectorAll('.company-facts > div').length, 6);
    assert.ok(document.querySelector('a[href="mailto:contact@eryndex.com"]'));
  }
  assert.ok(docs['zh-tw'].querySelector('.hero-description').textContent.includes('智序科技'));
  assert.ok(
    docs.en.querySelector('.hero-description').textContent.includes('Eryndex designs systems'),
  );
  console.log(
    'PASS: corporate copy, terminology, company facts, product chapters and three-language structure. Browser interaction not covered.',
  );
} catch (error) {
  console.error('Localization regression failed:', error.message);
  process.exitCode = 1;
}
