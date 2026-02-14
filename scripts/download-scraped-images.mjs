import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);

const scrapedPath = path.resolve('data/scraped-images.json');
const outDir = path.resolve('public/images/scraped');
const manifestPath = path.resolve('data/scraped-image-manifest.json');

function extFromUrl(url) {
  const clean = url.split('?')[0];
  const m = clean.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i);
  if (m) return m[1].toLowerCase();
  return 'jpg';
}

async function main() {
  const raw = await fs.readFile(scrapedPath, 'utf8');
  const data = JSON.parse(raw);
  const urls = (data.uniqueImages || []).filter((u) => u.includes('googleusercontent.com')).slice(0, 8);

  await fs.mkdir(outDir, { recursive: true });

  const manifest = [];
  for (let i = 0; i < urls.length; i += 1) {
    const url = urls[i];
    const ext = extFromUrl(url);
    const filename = `shonali-${String(i + 1).padStart(2, '0')}.${ext}`;
    const abs = path.join(outDir, filename);

    await run('curl', ['-L', '-s', '-o', abs, url], { maxBuffer: 10 * 1024 * 1024 });
    manifest.push({ source: url, localPath: `/images/scraped/${filename}` });
    console.log(`✓ ${filename}`);
  }

  await fs.writeFile(manifestPath, JSON.stringify({ generatedAt: new Date().toISOString(), images: manifest }, null, 2));
  console.log(`\nWrote ${manifestPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
