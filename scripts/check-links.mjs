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
const navigationFailures = [];
const siteOrigin = 'https://chirathyh.github.io';
let externalAnchorCount = 0;

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
  // Generated HTML has quoted attributes. Audit every page, including archives.
  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    const attributes = Object.fromEntries(
      [...match[1].matchAll(/\b([\w:-]+)=["']([^"']*)["']/g)].map((attribute) => [attribute[1], attribute[2]]),
    );
    if (!attributes.href) continue;
    const destination = new URL(attributes.href, siteOrigin);
    const isExternal = ['http:', 'https:'].includes(destination.protocol) && destination.origin !== siteOrigin;
    const label = `${path.relative(root, file)} -> ${attributes.href}`;
    if (isExternal) {
      externalAnchorCount += 1;
      const relations = attributes.rel?.split(/\s+/) ?? [];
      if (attributes.target !== '_blank' || !relations.includes('noopener') || !relations.includes('noreferrer')) {
        navigationFailures.push(`${label}: missing safe new-tab attributes`);
      }
      if (!match[2].includes('(opens in a new tab)')) navigationFailures.push(`${label}: missing accessible notice`);
    } else if (attributes.target === '_blank') {
      navigationFailures.push(`${label}: internal/email/download navigation should remain in the current tab`);
    }
  }
}

if (failures.length) {
  console.error(`Broken internal links (${failures.length}):\n${failures.join('\n')}`);
  process.exit(1);
}

if (navigationFailures.length) {
  console.error(`Incorrect link behavior (${navigationFailures.length}):\n${navigationFailures.join('\n')}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: no broken internal links.`);
console.log(`Checked ${externalAnchorCount} external anchors: safe new tabs and accessible notices; internal navigation unchanged.`);
console.log(`Found ${external.size} unique external links; critical research links are listed for manual/network verification in IMPLEMENTATION_NOTES.md.`);
