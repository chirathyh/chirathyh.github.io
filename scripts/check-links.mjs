import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const htmlFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const filePath = path.join(directory, entry);
    if (statSync(filePath).isDirectory()) walk(filePath);
    else if (filePath.endsWith('.html')) htmlFiles.push(filePath);
  }
}

function resolvesInternal(urlPath) {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  if (!clean || clean === '/') return existsSync(path.join(root, 'index.html'));
  const relative = clean.replace(/^\//, '');
  const candidates = [
    path.join(root, relative),
    path.join(root, relative, 'index.html'),
    path.join(root, `${relative}.html`),
  ];
  return candidates.some((candidate) => existsSync(candidate));
}

walk(root);
const failures = [];
const external = new Set();

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const target = match[1];
    if (/^(?:mailto:|tel:|data:|#)/.test(target)) continue;
    if (/^https?:\/\//.test(target)) {
      external.add(target);
      continue;
    }
    if (target.startsWith('/') && !resolvesInternal(target)) failures.push(`${path.relative(root, file)} -> ${target}`);
  }
}

if (failures.length) {
  console.error(`Broken internal links (${failures.length}):\n${failures.join('\n')}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: no broken internal links.`);
console.log(`Found ${external.size} unique external links; critical research links are listed for manual/network verification in IMPLEMENTATION_NOTES.md.`);
