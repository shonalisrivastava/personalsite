import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);

const PAGES = [
  'https://www.shonalisrivastava.com/shama',
  'https://www.shonalisrivastava.com/about-shonali',
  'https://www.shonalisrivastava.com/what-we-offer',
  'https://www.shonalisrivastava.com/registercontact',
  'https://www.shonalisrivastava.com/girjasha-global-foundation'
];

const outputDir = path.resolve('data');
const outFile = path.join(outputDir, 'scraped-images.json');

function extractImageUrls(html, pageUrl) {
  const results = new Set();

  for (const match of html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) {
    try {
      results.add(new URL(match[1], pageUrl).href);
    } catch {}
  }

  for (const match of html.matchAll(/background-image\s*:\s*url\((["']?)(.*?)\1\)/gi)) {
    const raw = match[2]?.trim();
    if (!raw || raw.startsWith('data:')) continue;
    try {
      results.add(new URL(raw, pageUrl).href);
    } catch {}
  }

  for (const match of html.matchAll(/https?:\/\/[^\s"')]+\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^\s"')]+)?/gi)) {
    results.add(match[0]);
  }

  return [...results];
}

async function fetchHtml(url) {
  const { stdout } = await run('curl', ['-L', '-s', url], { maxBuffer: 20 * 1024 * 1024 });
  return stdout;
}

async function scrapePage(url) {
  const html = await fetchHtml(url);
  const images = extractImageUrls(html, url);
  return { url, imageCount: images.length, images };
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const pages = [];

  for (const page of PAGES) {
    try {
      const data = await scrapePage(page);
      pages.push(data);
      console.log(`✓ ${page} (${data.imageCount} images)`);
    } catch (error) {
      pages.push({ url: page, imageCount: 0, images: [], error: String(error) });
      console.log(`✗ ${page} (${String(error)})`);
    }
  }

  const uniqueImages = [...new Set(pages.flatMap((p) => p.images || []))].sort();

  const payload = {
    generatedAt: new Date().toISOString(),
    pageCount: pages.length,
    uniqueImageCount: uniqueImages.length,
    pages,
    uniqueImages
  };

  await fs.writeFile(outFile, JSON.stringify(payload, null, 2));
  console.log(`\nWrote ${outFile}`);
  console.log(`Unique images: ${uniqueImages.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
