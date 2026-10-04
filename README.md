# Chirath Hettiarachchi — research portfolio

Static Astro website for <https://chirathyh.github.io>. The site is project-first, uses content collections for research systems and publications, and ships no client-side framework. A small script manages accessible video autoplay on the homepage and portfolio; other pages ship no JavaScript. Its compact academic layout is adapted from Academic Portfolio Astro while retaining this site's verified content model and accessibility requirements.

## Stack

- Astro 7 with TypeScript and static output
- Tailwind CSS v4 through the official Vite plugin
- Astro content collections for projects, publications and the CV summary
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
- CV summary: `src/content/cv/profile.md`
- Public static files: `public/`
- Locally optimized image sources: `src/assets/images/`

Project, publication and CV schemas are defined in `src/content.config.ts`.

The homepage keeps the research overview, featured work, capabilities and contact. Publications and professional history live on their dedicated Papers and CV pages.

External HTTP/HTTPS links open in a new tab with `rel="noopener noreferrer"` and a screen-reader notice. Use `src/components/Link.astro` for template links; the matching Markdown transformation is configured in `astro.config.mjs`. This policy is applied during static generation and requires no client JavaScript. Internal links, email links and local downloads keep their normal behavior.

Projects may include an optional `homepageVisual` with an image, descriptive alt text and caption. Adding `video.mp4` and `video.webm` provides a native video player with the image as its poster. Animations autoplay silently and loop when visible, pause offscreen or in a hidden tab, and respect a visitor's manual pause. Reduced-motion preferences disable autoplay; native controls still allow optional playback. Without JavaScript or when autoplay is blocked, the poster and manual playback controls remain available.

## CV

The `/cv/` page is a short summary of the owner's supplied October 2026 Overleaf CV resources. Its native download button uses the two-page **Industry-CV-2026** PDF, not either academic CV or the template/example PDFs.

Edit the HTML summary in `src/content/cv/profile.md`. To update the downloadable CV, replace:

```text
public/files/Industry-CV-2026.pdf
```

The download is enabled through `cvAvailable: true` in `src/config/site.ts`. Overleaf source archives and intermediate LaTeX files are not deployed. The website keeps `chirathyh@hotmail.com` as explicitly requested; the supplied industry CV retains its original Gmail contact.

## NeurIPS 2026 QR code

`public/qr/neurips-2026.svg` points to <https://chirathyh.github.io/neurips-2026/>. The SVG can be inserted directly into the workshop poster. Confirm the live destination and scan a printed proof before final poster export.

## GitHub Pages

`.github/workflows/deploy.yml` uses the official Astro Pages action. It runs on pushes to `main` and can also be started manually.

Before the first approved deployment, set:

**Repository Settings → Pages → Source → GitHub Actions**

Do not change the Pages setting or merge this migration until the placeholders and visual review in `IMPLEMENTATION_NOTES.md` are complete.
