# Pre-migration audit

Audit date: 3 October 2026 (Australia/Sydney)  
Audited revision: `8b69c1d` on `main`  
Implementation branch: `redesign/2026`

This document records the state of the production Jekyll site before the Astro migration. The production branch was clean and matched `origin/main` when the audit began. No deployment, push, merge, or repository-setting change was made.

## Current structure and build

- The site is a detached Academic Pages / Minimal Mistakes Jekyll fork. It began in September 2021 and has 357 commits.
- Jekyll is configured in `_config.yml`, with GitHub Pages, `jekyll-feed`, `jekyll-sitemap`, and `hawkins` declared in `Gemfile`.
- Page source lives in `_pages`; collection content lives in `_portfolio`, `_publications`, `_talks`, and `_teaching`; old personal posts live in `_posts`.
- The theme implementation is vendored across `_includes`, `_layouts`, `_sass`, `assets/css`, `assets/js`, and `assets/fonts`. It includes jQuery 1.12.4, Font Awesome files, Magnific Popup, Greedy Navigation, Stickyfill, Susy, and Breakpoint.
- The existing `package.json` belongs to the old theme's JavaScript build and supports Node versions as old as 0.10; it is not an application package for the current site.
- There is no `.github/workflows` deployment workflow. Production currently relies on GitHub Pages' Jekyll build behavior.
- The generic Academic Pages README, changelog, contribution guide, sample pages, sample comments, Markdown generators, talk-map generator, and template demonstration assets remain in the repository.

## Current pages and URLs

The live sitemap and direct requests confirm that these important URLs currently return HTTP 200 and should remain valid:

- `/`
- `/publications/`
- `/portfolio/`
- `/talks/`
- `/posters/`
- `/cv/`
- `/404.html`
- `/publication/2009-10-01-paper-title-number-1`
- `/publication/2019-03-13-aime17`
- `/publication/2019-04-01-embc`
- `/portfolio/h-msc/`, `/portfolio/i-flisma/`, `/portfolio/j-clardia/`, `/portfolio/k-skewedDistribution/`, `/portfolio/l-iotScale/`, and `/portfolio/m-rampage/`
- `/talks/2024-04-01-RL-notes`, `/talks/2024-04-02-eigen-values`, and `/talks/2024-07-23-on-policy-rl`
- all existing `/files/*.pdf` paths

The current sitemap also exposes old blog posts, teaching samples, template archives, Markdown examples, and the Markdown generator. These do not support the new project-first portfolio and do not need to remain prominent. The migration should retain the named compatibility sections above and the existing paper PDFs; old personal posts can be removed from the generated site.

## Content worth preserving

- Professional identity and contact metadata: Chirath Hettiarachchi; GitHub `chirathyh`; Google Scholar profile `gvLLPs8AAAAJ`; ORCID `0000-0002-7702-0718`; LinkedIn `chirathyh`; and the public email addresses already present in the repository.
- The concise research through-line across reinforcement learning, adaptive biomedical systems, computational neuroscience, and scientific simulation.
- Public G2P2C / artificial-pancreas descriptions, with explicit in-silico wording.
- The chronological publication entries and stable local PDF links for the 2017 and 2019 papers.
- The current talk list and slide PDFs as a minimal compatibility archive.
- The professional profile portrait in `images/profile.png`, cropped and optimized for the new hero.
- Existing public project imagery for G2P2C, GluCoEnv, and CAPSML, selectively optimized rather than copied wholesale.
- Every PDF currently in `files/`, preserving its public URL even when it is not linked from the new primary navigation.

## Public research sources checked

- `chirathyh/neurostimenv` is public and contains an MIT-licensed framework implementation, public README, public DOI link, framework diagram, sample output, and reproducible configuration/code. Its README supports the claims that the framework integrates NEURON, LFPy, SimNIBS, EEG, transcranial stimulation, RL, MPI/HPC, a detailed depression microcircuit of about 1,000 neurons, and full temporal resolution of 0.025 ms.
- `RL4H/G2P2C`, `RL4H/GluCoEnv`, and `RL4H/RL4T1D` are public. Their documentation supports the software/system descriptions and explicitly frames evaluation as in-silico.
- The NeuroStimEnv preprint DOI `10.21203/rs.3.rs-7958165/v1` resolves to a public Research Square page.
- The G2P2C DOI `10.1016/j.bspc.2023.105839` resolves to the published Biomedical Signal Processing and Control article.
- The 2025 MEDINFO paper DOI `10.3233/SHTI250997` resolves, although its publisher returns an automated-client 403 after the DOI redirect; an open institutional proceedings copy is available.
- No public-safe NeuroStimFlow repository, preprint, or released project asset was found in the supplied repository or the public source repositories inspected. It must not be published in this migration. The third homepage feature should therefore be “Open-source research systems.”

## Assets

The repository currently contains approximately 49 MB under `images` and 84 MB under `files`.

Useful image candidates:

- `images/profile.png` — 1254 × 1254, 1.56 MB; suitable as source for a small optimized portrait.
- `images/g2p2c_cover.jpg` — compact existing project cover.
- `images/glucoenv.png` — reusable open-source project graphic.
- `images/glucose.png` and the G2P2C repository's public `img/G2P2C_architecure.png`, `img/glucose.png`, `img/results.png`, `img/reward_curves.png`, and `img/table_results.png` — public project documentation imagery; use sparingly and preserve in-silico context.
- `images/capsml_poster.jpg` — public poster, useful only for the legacy poster archive, not as the preferred homepage image.
- NeuroStimEnv's public `img/neurostimenv2.png` — 5.9 MB source framework figure; requires a small optimized derivative for cards.
- NeuroStimEnv's public `img/sample_output.png` and `img/logo.png` — useful on the detailed project page.

Large or unsuitable assets:

- Slide PDFs include files of about 16.6 MB, 23.4 MB, and 24.4 MB. They should be preserved for URL compatibility but not loaded by ordinary pages.
- `images/gif_aps.gif`, `images/gif_aps_tacs.gif`, `images/gif_tacs.gif`, and `images/gif_glucose.gif` total about 8.5 MB. They should not autoplay on the homepage.
- `images/a2.png`, `images/a3.png`, `images/flow.png`, `images/profile.png`, and `images/sys_lit_cover.png` are individually over 1 MB.
- The 33 exported talk-slide PNGs are redundant with slide PDFs for the new site.
- No duplicate image or PDF file hashes were found. The only exact duplicate hash is the empty/template text pair `files/dummy.text` and `images/slides/slide.txt`.
- A previous G2P2C cover states that it was created with Stable Diffusion; it should not be used because the requested design excludes generic AI imagery.

## Broken, stale, or misleading material

- `/cv/` is currently an empty Jekyll archive shell; no current CV PDF exists in the repository.
- The generic README, `CHANGELOG.md`, `CONTRIBUTING.md`, sample comments, sample teaching pages, sample archives, and Markdown demos describe the Academic Pages template rather than this site.
- The Markdown/talk generators contain example `academicpages.github.io` and `exampleurl.com` links.
- Several `_talks/2024-04-01-RL-notes.md` images reference `../img/...`, but there is no top-level `img` directory in this repository, so those images are broken on the live page.
- Several older pages use insecure `http://chirathyh.github.io/...` links; these should become root-relative HTTPS-served paths.
- The old homepage contains typographical errors, long biography/CV repetition, shield badges loaded from a third party, and several large autoplaying GIFs.
- The existing navigation was partly commented out in July 2026, leaving no coherent project-first information architecture.
- `images/browserconfig.xml` and `images/manifest.json` belong to the old icon setup and are not an intentional modern PWA configuration.
- Some old portfolio and blog links depend on aged Google Drive, YouTube, Wikipedia, NIST, and third-party article URLs. They are not required for the new primary experience and should not be surfaced without re-verification.
- The old `github.com/chirathyh/GluCoEnv` link currently redirects successfully to `github.com/RL4H/GluCoEnv`; new content should use the canonical organization URL.
- ScienceDirect blocks some automated requests with HTTP 403, while the DOI resolves successfully. DOI URLs are the preferred publication links.

## Deployment and migration implications

- Astro must be configured with `site: "https://chirathyh.github.io"` and no `base` because this is the special username Pages repository.
- The official Astro GitHub Pages action is appropriate, with a build job using `withastro/action` and a deploy job using `actions/deploy-pages`.
- The user must change **Settings → Pages → Source → GitHub Actions** only after reviewing and approving the migration.
- The new action may be committed on the redesign branch but must not be pushed or merged as part of this work.
- The old Jekyll implementation remains recoverable from `main` and all prior commits. The migration branch can safely remove the vendored template implementation after this audit is committed.

## Human-verification gaps

- A current CV PDF is absent. The final PDF should be supplied at `public/files/chirath-hettiarachchi-cv.pdf` before launch.
- The exact NeurIPS 2026 workshop name, workshop-paper title, paper URL/PDF, poster PDF, session time, and location are not verified in the repository and must remain explicit placeholders or be omitted until supplied.
- The user states that they are a NeurIPS 2026 workshop presenter; all site wording must preserve “workshop” and must not imply main-track acceptance.
- A fresh CAPSML screenshot could not be captured because no connected browser was available during the audit. The public site responds successfully, but the final screenshot should be visually confirmed or replaced before launch if the interface changes.
- No repository source verifies CAPSML usage or country counts. None should be displayed.
- Public contact details and the professional email to place in the vCard should receive a final owner review before merge.
