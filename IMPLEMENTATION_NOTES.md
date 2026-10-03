# Implementation notes

Implementation branch: `redesign/2026`
Production branch affected: no
Push/merge performed: no

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
- No CAPSML usage, user, institution, or country counts are shown because no verified current source was supplied.
- No clinical efficacy, patient outcome, or clinical-validation claim is made for NeuroStimEnv, G2P2C, CAPSML, GluCoEnv or RL4T1D.
- No employment or education chronology was reconstructed from stale biography text. The CV page remains a concise research summary until a current CV is supplied.
- The NeurIPS workshop-paper title was not inferred from the public preprint. The status is described only as “NeurIPS 2026 workshop presenter,” based on the owner's supplied requirement.

## Image provenance and handling

- `src/assets/images/profile.png`: existing public profile image from the previous site. Astro generates a 112 px WebP derivative for the homepage; the 1.56 MB source is not embedded directly.
- `src/assets/images/neurostimenv-framework.png`, `neurostimenv-output.png`, and `neurostimenv-logo.png`: public NeuroStimEnv repository assets. That repository is MIT licensed. The 5.9 MB framework source is processed by Astro into responsive AVIF/WebP outputs and is not shipped directly on ordinary pages.
- `src/assets/images/g2p2c-architecture.png`: public G2P2C repository asset (MIT licensed), used only on the detailed project page and optimized by Astro.
- `src/assets/images/glucoenv.png`: existing site asset also referenced by the public GluCoEnv repository; used for the open-source systems card and optimized by Astro.
- `src/assets/images/capsml-glucose.png`: current public OpenGraph image fetched from `https://capsml.com/assets/glucose.png` during migration. It shows a virtual glucose-control simulation and replaces the old poster as the CAPSML homepage visual.
- `src/assets/images/capsml-poster.jpg`: existing public poster used only on the compatibility poster page and optimized by Astro.
- `public/images/og-card.png`: generated locally from `src/assets/images/og-card-source.svg`; it combines site typography with an abstract state/dynamics network, not a headshot.
- The previous multi-megabyte GIFs, generic/sample theme images, AI-generated G2P2C cover, and 33 slide PNG exports were not migrated.

## Links requiring owner confirmation

- Public contact email: `chirathyh@hotmail.com` (taken from the prior site configuration). Confirm that this is the preferred recruiting/conference contact.
- LinkedIn path: `https://www.linkedin.com/in/chirathyh/`.
- NeurIPS workshop name, event/session date and time, workshop-paper URL, poster PDF URL, and whether the public NeuroStimEnv code is the correct code button for the workshop landing page.
- Confirm the latest Google Scholar and ORCID profiles remain preferred.
- A fresh interactive CAPSML screenshot could not be captured because the connected browser was unavailable. The current public CAPSML social image is used instead and should be replaced if a UI screenshot is preferred.

## CV

- Final path: `public/files/chirath-hettiarachchi-cv.pdf`
- Placeholder instructions: `public/files/PUT_CURRENT_CV_HERE.txt`
- Enable the button by setting `cvAvailable: true` in `src/config/site.ts` after the PDF is reviewed.

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
2. Supply and enable the current CV PDF.
3. Replace the NeurIPS title/paper/poster placeholders and confirm workshop wording.
4. Confirm contact email, social links, vCard fields, publication list and author spelling.
5. Decide whether to replace the current CAPSML simulation image with an approved fresh UI screenshot.
6. Run `npm install`, `npm run build`, link checks, accessibility tests, visual tests and Lighthouse again after content changes.
7. Monitor the current Astro build dependency advisory before merge. `npm audit` reports one high-severity advisory through Astro 7.3.5 → `http-cache-semantics@4.2.0`; no patched npm release was available on the audit date. The deployed site is static and does not run this package server-side.
8. Review `git diff main...redesign/2026` and merge only after approval.
9. In GitHub, select **Settings → Pages → Source → GitHub Actions** immediately before or after the approved merge.
10. Do not change repository settings automatically; do not push this branch unless explicitly requested.
