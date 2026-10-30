# Short notes integration

The `/short-notes/` index groups paper summaries, technical notes and engineering
notes. The article route renders approved Markdown exports using existing Satteri
and the existing site shell. It includes dates, tags, source links, backlinks,
footnotes, highlighted `<mark>` text, blockquote takeaways and collapsible details.
GFM footnotes are enabled by Satteri's default configuration. LaTeX math is not
configured: use Unicode notation/code blocks for now. No remark plugin was added.

Only public, reviewed content belongs in `src/content/notes/*.md`. Its frontmatter
is strictly limited to title, description, type, date, updated, tags, related and
sources. There is no private-draft folder or private-draft flag in this repository.

The companion private research-notes workbench prepares and reviews notes. Its
export command copies only an approved exact revision and explicitly listed raster
assets. Keep approval records, source PDFs, discussion, caches and annotated-code
source bundles in the private workbench. Never copy the whole workbench here.

This branch adds infrastructure only. No article is published. After review, build
with `npm ci && npm run build`, run `npm run test:links`, and inspect mobile/desktop.
Deployment needs separate owner approval: a push to main triggers GitHub Pages.

Synthetic rendering check (no private article needed):

```sh
cp tests/fixtures/note-rendering.md src/content/notes/rendering-fixture.md
ASTRO_TELEMETRY_DISABLED=1 npm run build
# In another terminal: node scripts/serve-dist.mjs
node scripts/check-notes-preview.mjs
rm src/content/notes/rendering-fixture.md
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run test:links
```

The browser check uses `/usr/bin/chromium` by default; set NOTES_CHROMIUM to a
local Chromium executable if needed. It checks both 390px and 1440px viewports,
footnotes, highlights, disclosure controls, horizontal overflow and WCAG A/AA.
Screenshots stay in ignored artifacts/. Never leave the synthetic fixture in the
content collection when committing or publishing.
