# Implementation notes

Implementation branch: `redesign/2026`
Production branch affected: no
Push/merge performed: no

## Minimal academic template adaptation

- The visual system was rebuilt around the compact two-column structure of [Academic Portfolio Astro](https://github.com/rubzip/academic-portfolio-astro/) at commit `6f296c22bd2dc1712d39545835dc9cd4e4f4854b`.
- The current site keeps its original Astro content collections, verified research claims, project routes, compatibility pages, image pipeline, metadata and deployment workflow.
- Template features outside the portfolio's scope—blogging, teaching, page transitions, analytics, LaTeX packages, third-party fonts and the JavaScript theme switcher—were intentionally not imported.
- The homepage now uses a sticky profile rail, compact navigation, a readable central column, project summaries and simple typographic dividers. Featured projects expose their system overview and concrete technical points directly on the homepage, followed by explanatory figures where available. On mobile, the profile becomes a short masthead and all primary navigation remains visible without JavaScript.
- License attribution is recorded in `THIRD_PARTY_NOTICES.md`.
- At the owner's request, About, Background and experience, and Selected papers were removed from the homepage. The publications, CV and About compatibility pages remain available; no publication content or paper PDFs were deleted.
- External HTTP/HTTPS links now open in a new tab with `noopener noreferrer` and an accessible notice. A shared Astro link component handles templates, and a build-time Markdown transformation handles project prose. Internal routes, anchors, email actions and local downloads are unchanged; no client script was added for link behavior.
- Homepage/link validation on 4 October 2026: all 25 generated pages were checked for broken internal links and safe new-tab behavior on all 153 external anchors. All 51 desktop/mobile browser tests passed (one mobile-only test is intentionally skipped on desktop), including a real new-tab click, Markdown links, accessibility, navigation, animation and CV-download regression checks. Lighthouse meets all four 95-point targets on `/`, `/neurips-2026/` and `/cv/` across two runs per page. Updated homepage screenshots are in the gitignored `artifacts/review-screenshots/` directory.

## Verified publication and system claims

- The title, authors, 20 February 2026 preprint date, DOI, and preprint status for “Simulating closed-loop transcranial brain stimulation for reinforcement learning-based treatment discovery” were checked through Crossref and the public Research Square record.
- The NeuroStimEnv integration of NEURON, LFPy and SimNIBS is documented by the public repository and preprint.
- The NeuroStimEnv preprint explicitly reports a 1,000-neuron depression case study at 0.025 ms resolution using 624 CPU processes. The site describes these as computational simulation scale only.
- The G2P2C title, authors, 2024 journal venue, article number, and DOI were checked through Crossref. The paper and public repository describe in-silico evaluation.
- The title, authors, 2025 MEDINFO venue, and DOI for “Comparing Deterministic and Stochastic Reinforcement Learning for Glucose Regulation in Type 1 Diabetes” were checked through Crossref and an open institutional proceedings copy. The site labels the work as in-silico.
- The 2022 action-space and IEEE EMBC publication metadata were checked through Crossref.
- The NeuroStimEnv, G2P2C, GluCoEnv and RL4T1D repositories were public and reachable during implementation.
- CAPSML returned HTTP 200 and exposed current metadata describing it as a virtual glucose-control research platform.

## Claims intentionally omitted

- No NeuroStimFlow/scientific-generative-modelling project is public because no public-safe repository, preprint, released figure or explicit publication evidence was found. It was replaced by the requested open-source research systems feature.
- No unpublished figures, numerical generative-modelling results, or inferred publication titles were used.
- No CAPSML usage, user, institution, or country counts or citation metrics are added to the HTML pages. These vary between the supplied CV versions and were not independently verified; the owner-selected industry PDF retains its supplied wording and metrics.
- No clinical efficacy, patient outcome, or clinical-validation claim is made for NeuroStimEnv, G2P2C, CAPSML, GluCoEnv or RL4T1D.
- No employment or education chronology was reconstructed from stale biography text. The CV summary now uses the owner's October 2026 Overleaf resources, with the industry CV as the primary source.
- The NeurIPS workshop-paper title was not inferred from the public preprint. The status is described only as “NeurIPS 2026 workshop presenter,” based on the owner's supplied requirement.

## Image provenance and handling

- `src/assets/images/profile.png`: replaced on 4 October 2026 with the owner's supplied `CFDB5599-04DD-47D1-86C6-E16318C04A90.PNG`. Astro generates 112 px and 224 px WebP derivatives for the profile sidebar and mobile masthead; the original PNG is not served directly.
- `src/assets/images/research-overview.png`: the owner's supplied `clt2.png`, replaced with the revised 2218 × 1197 image on 4 October 2026. It compares the closed-loop insulin-delivery and brain-stimulation research directions and appears immediately before Featured work. Astro generates responsive AVIF/WebP derivatives, with descriptive alt text and a concise explanatory caption. The revised source is approximately 406 kB, replacing the previous 4.2 MB source; the original PNG is not served directly.
- `src/assets/images/neurostimenv-framework.png` and `neurostimenv-output.png`: public NeuroStimEnv repository assets. That repository is MIT licensed. The framework matches the owner's supplied reference and is shown at a readable width on the homepage as well as the detail page. Astro generates responsive AVIF/WebP outputs rather than serving the 5.9 MB source.
- `src/assets/images/g2p2c-architecture.png`: public G2P2C repository asset (MIT licensed), used only on the detailed project page and optimized by Astro.
- `src/assets/images/glucoenv.png`: existing site asset also referenced by the public GluCoEnv repository; used on the open-source systems detail page and optimized by Astro.
- `src/assets/images/capsml-glucose.png`: current public OpenGraph image fetched from `https://capsml.com/assets/glucose.png` during migration. It shows a virtual glucose-control simulation and is used on the CAPSML detail page.
- `src/assets/images/glucose-demo-poster.png` and `public/media/glucose-control.{webm,mp4}`: derived from the owner's existing public `https://chirathyh.github.io/images/gif_glucose.gif`, explicitly supplied for homepage use. The 39.12-second GIF is converted to silent 15 fps MP4 (145,507 bytes) and WebM (240,365 bytes). Its 24-second frame provides an optimized static preview showing meal disturbances, simulated glucose and insulin delivery. At the owner's request, the player now starts silently and loops when visible. A small script pauses playback offscreen or in a hidden tab, respects manual pauses, and disables autoplay when reduced motion is preferred. Native playback controls and the static poster remain available without JavaScript or if autoplay is blocked. `preload="none"` avoids fetching the video before it enters view or a visitor chooses playback. The animation is illustrative simulation evidence, not clinical data or a claim about a particular algorithm's performance.
- `src/assets/images/capsml-poster.jpg`: existing public poster used only on the compatibility poster page and optimized by Astro.
- `public/images/og-card.png`: generated locally from `src/assets/images/og-card-source.svg`; it combines site typography with an abstract state/dynamics network, not a headshot.
- Other legacy GIFs, generic/sample theme images, AI-generated G2P2C cover, and 33 slide PNG exports were not migrated.

## Links requiring owner confirmation

- Public contact email: `chirathyh@hotmail.com`, explicitly confirmed by the owner on 4 October 2026. The supplied industry CV uses Gmail; that document's contact was not silently changed.
- LinkedIn path: `https://www.linkedin.com/in/chirathyh/`.
- NeurIPS workshop name, event/session date and time, workshop-paper URL, poster PDF URL, and whether the public NeuroStimEnv code is the correct code button for the workshop landing page.
- Confirm the latest Google Scholar and ORCID profiles remain preferred.
- A fresh interactive CAPSML screenshot could not be captured because the connected browser was unavailable. The current public CAPSML social image is used instead and should be replaced if a UI screenshot is preferred.

## CV

- Download path: `public/files/Industry-CV-2026.pdf`, enabled in `src/config/site.ts`. The native download filename is `Industry-CV-2026.pdf`.
- Source: `Industry-CV-2026.zip/main.tex` inside the owner's supplied `Overleaf Projects (3 items).zip`, exported 3 October 2026. Industry archive SHA-256: `0ff81430032e4f751ecc9a7429756e06829ade6ff592842ed0bd9e3daa496453`.
- The two-page PDF was compiled using pdfLaTeX with shell escape disabled. Only the missing `datetime` package/`monthyeardate` definition and PDF title/author metadata were added; substantive source text and the chosen CV's Gmail address are unchanged. Both pages were rendered and visually checked.
- HTML content: `src/content/cv/profile.md`, validated through an Astro content collection. It includes selected employment, three research/engineering degrees, technical strengths and three awards. Dates and qualifications were cross-checked against the supplied academic versions, not inferred from old site copy.
- Detailed student supervision records, referees, personal phone numbers, unpublished titles, grant/citation statistics, usage counts, long training lists and template/example CVs were not copied into the HTML summary or deployed as source files. Earlier roles and CIMA remain in the full industry PDF.
- The SMP ECR award year differs between the industry (2024) and academic (2025) versions, so it is omitted from the HTML summary. Confirm that date and the PDF's owner-supplied usage metrics before public launch.
- The obsolete `PUT_CURRENT_CV_HERE.txt` placeholder was removed. Existing paper and talk PDFs were preserved.
- Validation: production build and all internal links pass; 27 desktop/mobile browser tests pass (one desktop-only mobile-navigation test is intentionally skipped). The industry download is checked byte-for-byte against the selected PDF. Lighthouse scores 100 for performance, accessibility, best practices and SEO on `/`, `/neurips-2026/` and `/cv/`. CV screenshots are saved in the gitignored `artifacts/review-screenshots/` directory. The CV page ships no client JavaScript.

## NeurIPS 2026 placeholders

The exact workshop-paper title, paper link and poster link are centralized in `src/config/site.ts`. The page deliberately displays pending states rather than guessing. Before launch:

1. replace `paperTitle`;
2. set `paperUrl` and `posterUrl`;
3. confirm `codeUrl`;
4. add workshop/session details if public;
5. rescan `public/qr/neurips-2026.svg` from a print proof.

The QR SVG is intended for direct insertion into the poster and points to `https://chirathyh.github.io/neurips-2026/`.

## Legacy Jekyll files removed on this branch

- Jekyll configuration and Ruby dependencies: `_config.yml`, `_config.dev.yml`, `Gemfile`.
- Vendored theme: `_includes`, `_layouts`, `_sass`, legacy `assets/css`, legacy `assets/js`, and bundled icon fonts.
- Template/demo content: sample comments, teaching samples, archive/demo pages, Markdown demos, generic README/changelog/contributing files, and generator notebooks/scripts.
- Old `_posts`, `_portfolio`, `_publications`, and `_talks` source trees. Required high-level URLs and externally linked project/publication/talk URLs now have lean Astro compatibility pages.
- Old `images` directory. Only the seven used source images were migrated; large GIFs, exported slide PNGs and unrelated portfolio/blog images were removed.
- Talk map notebooks, scripts, map HTML and vendored Leaflet assets.
- The old npm package for Minimal Mistakes JavaScript compilation.

All 19 existing PDF files were moved to `public/files/` so their `/files/...` URLs remain unchanged. The only removed item from the old `files` directory was the empty template `dummy.text`.

## Before merging to main

1. Review the desktop and mobile screenshots in `artifacts/review-screenshots/`.
2. Review the supplied industry CV's wording, usage metrics and differing SMP ECR award year before launch; confirm whether its Gmail contact should remain in the downloadable PDF.
3. Replace the NeurIPS title/paper/poster placeholders and confirm workshop wording.
4. Confirm contact email, social links, vCard fields, publication list and author spelling.
5. Decide whether to replace the current CAPSML simulation image with an approved fresh UI screenshot.
6. Run `npm install`, `npm run build`, link checks, accessibility tests, visual tests and Lighthouse again after content changes.
7. Monitor the current Astro build dependency advisory before merge. `npm audit` reports one high-severity advisory through Astro 7.3.5 → `http-cache-semantics@4.2.0`; no patched npm release was available on the audit date. The deployed site is static and does not run this package server-side.
8. Review `git diff main...redesign/2026` and merge only after approval.
9. In GitHub, select **Settings → Pages → Source → GitHub Actions** immediately before or after the approved merge.
10. Do not change repository settings automatically; do not push this branch unless explicitly requested.
