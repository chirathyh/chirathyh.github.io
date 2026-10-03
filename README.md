# Chirath Hettiarachchi — research portfolio

Static Astro website for <https://chirathyh.github.io>. The site is project-first, uses content collections for research systems and publications, and ships no client-side framework or ordinary-page JavaScript. Its compact academic layout is adapted from Academic Portfolio Astro while retaining this site's verified content model and accessibility requirements.

## Stack

- Astro 7 with TypeScript and static output
- Tailwind CSS v4 through the official Vite plugin
- Astro content collections for projects and publications
- `@astrojs/sitemap`
- Astro image optimization for locally stored source images
- Official Astro GitHub Pages action
- npm and Node 24 LTS

## Design provenance

The two-column profile layout and restrained visual direction are adapted from [Academic Portfolio Astro](https://github.com/rubzip/academic-portfolio-astro/). The implementation intentionally omits the reference template's blog, teaching, client-side theme switcher, page transitions and analytics. See `THIRD_PARTY_NOTICES.md` for attribution.

## Local development

Use Node 24 (the `.nvmrc` is included), then:

```bash
nvm use
npm install
npm run dev
```

The development server prints its local URL, normally `http://localhost:4321`.

## Build and preview

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Quality checks

Build before running checks that inspect `dist/`:

```bash
npm run build
npm run test:links
npm run test:a11y
npm run test:visual
npm run test:lighthouse
```

Playwright uses the installed Chrome browser and saves desktop/mobile review screenshots in the gitignored `artifacts/review-screenshots/` directory.

## Content updates

- Global identity, links, CV availability and NeurIPS placeholders: `src/config/site.ts`
- Projects: `src/content/projects/`
- Publications: `src/content/publications/`
- Public static files: `public/`
- Locally optimized image sources: `src/assets/images/`

Project and publication schemas are defined in `src/content.config.ts`.

## CV

No verified current CV PDF was present during migration. Place the reviewed PDF at:

```text
public/files/chirath-hettiarachchi-cv.pdf
```

Then set `cvAvailable: true` in `src/config/site.ts`. Until then, the site displays a visibly disabled PDF action and does not invent a document.

## NeurIPS 2026 QR code

`public/qr/neurips-2026.svg` points to <https://chirathyh.github.io/neurips-2026/>. The SVG can be inserted directly into the workshop poster. Confirm the live destination and scan a printed proof before final poster export.

## GitHub Pages

`.github/workflows/deploy.yml` uses the official Astro Pages action. It runs on pushes to `main` and can also be started manually.

Before the first approved deployment, set:

**Repository Settings → Pages → Source → GitHub Actions**

Do not change the Pages setting or merge this migration until the placeholders and visual review in `IMPLEMENTATION_NOTES.md` are complete.
