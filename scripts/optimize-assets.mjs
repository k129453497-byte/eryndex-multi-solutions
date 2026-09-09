import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
const root = path.resolve('public/assets');
const items = [
  ['brand/hero/eryndex-hero-master.png', 'hero', [672, 1344]],
  ['products/space/eryndex-space-master.png', 'space', [664, 1328]],
  ['products/files/eryndex-files-master.png', 'files', [664, 1328]],
  ['products/shield/eryndex-shield-master.png', 'shield', [664, 1328]],
];
const report = [];
try {
  await mkdir(path.join(root, 'web'), { recursive: true });
  for (const [source, name, widths] of items) {
    const input = path.join(root, source);
    const before = await readFile(input);
    for (const width of widths) {
      const output = path.join(root, 'web', name + '-' + width + '.webp');
      await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 88, effort: 6 })
        .toFile(output);
      report.push({
        source,
        output: path.relative(root, output),
        bytes: (await readFile(output)).length,
      });
    }
    if (!before.equals(await readFile(input))) throw new Error('Master changed: ' + source);
  }
  const masters = [
    ...items.map((i) => i[0]),
    'brand/logo/eryndex-logo.webp',
    'brand/hero/eryndex-hero-h3-source.mp4',
  ];
  const hashes = {};
  for (const source of masters)
    hashes[source] = createHash('sha256')
      .update(await readFile(path.join(root, source)))
      .digest('hex');
  await writeFile(
    'docs/design/ASSET_INTEGRITY.json',
    JSON.stringify({ masters: hashes, derivatives: report }, null, 2) + '\n',
  );
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  console.error('Asset optimization failed:', error);
  process.exitCode = 1;
}
