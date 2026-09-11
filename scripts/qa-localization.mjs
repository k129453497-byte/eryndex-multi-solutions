// Read-only regression checks for published copy and translated UI attributes.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { parseHTML } from 'linkedom';
import { cnTerms, localizeSimplified } from '../src/data/zh-cn.ts';

try {
  const docs = Object.fromEntries(['zh-tw', 'zh-cn', 'en'].map(lang => {
    const { document } = parseHTML(readFileSync(`dist/${lang}/index.html`, 'utf8'));
    document.querySelectorAll('script, style').forEach(node => node.remove());
    return [lang, document];
  }));
  const cn = docs['zh-cn'];
  const output = cn.documentElement.outerHTML;
  for (const [term] of cnTerms) assert.ok(!output.includes(term), `Unlocalized term: ${term}`);
  assert.ok(cn.querySelector('.hero-description').textContent.includes('访问控制软件'));
  assert.ok(cn.querySelector('#contact-form').getAttribute('data-short').includes('首尾空格'));
  assert.ok(output.includes('共享链接') && output.includes('邮件链接'));
  assert.ok(output.includes('恢复上一版本') && output.includes('恢复为 {to}'));
  assert.ok(!output.includes('回复上一版本') && !output.includes('回复为 {to}'));
  assert.equal(localizeSimplified('已完成 {count} 项示意任务'), '已完成 {count} 项示意任务');
  assert.equal(localizeSimplified('Eryndex Space Files Shield Services'), 'Eryndex Space Files Shield Services');
  for (const document of Object.values(docs)) {
    assert.equal(document.querySelectorAll('[data-demo]').length, 3);
    assert.equal(document.querySelector('[name="message"]').getAttribute('minlength'), '10');
    for (const demo of document.querySelectorAll('[data-demo]')) assert.equal(demo.closest('details'), null);
  }
  assert.ok(docs['zh-tw'].querySelector('.hero-description').textContent.includes('存取管理軟體'));
  assert.ok(docs.en.querySelector('.hero-description').textContent.includes('access control software'));
  console.log('PASS: terminology, localized form/UI attributes, brand names, placeholders and three-language structure. Browser interaction not covered.');
} catch (error) {
  console.error('Localization regression failed:', error.message);
  process.exitCode = 1;
}
