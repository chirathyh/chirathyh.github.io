import { expect, test } from '@playwright/test';

test('homepage copy, heading sizes and Featured work dividers match the requested edits', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.profile-role')).toHaveText('Machine learning researcher / engineer');
  await expect(page.locator('.intro-summary')).toHaveText(
    'I build sequential decision-making, generative modelling and simulation methods for complex biological systems—from closed-loop insulin delivery to neuromodulation.',
  );
  await expect(page.locator('.research-overview figcaption')).toHaveText(
    'Closed-loop control across (a) insulin delivery and (b) brain stimulation: physiological signals inform a learning algorithm, which selects the next intervention.',
  );

  const titleSize = await page.locator('.intro h1').evaluate((element) => getComputedStyle(element).fontSize);
  await expect(page.locator('#work-title')).toHaveCSS('font-size', titleSize);
  await expect(page.locator('#work .section-heading')).toHaveCSS('border-bottom-width', '0px');
  await expect(page.locator('#work .project-grid')).toHaveCSS('border-top-width', '0px');
});

test('animation autoplays silently in view, pauses offscreen and respects a manual pause', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  const video = page.locator('[data-project-animation]');
  await expect(video).toHaveJSProperty('paused', true);
  await video.scrollIntoViewIfNeeded();
  await expect(video).toHaveJSProperty('muted', true);
  await expect(video).toHaveJSProperty('loop', true);
  await expect(video).toHaveJSProperty('controls', true);
  await expect(video).toHaveJSProperty('paused', false);
  await expect.poll(() => video.evaluate((element) => (element as HTMLVideoElement).currentTime)).toBeGreaterThan(0.1);

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await expect(video).toHaveJSProperty('paused', true);
  await video.scrollIntoViewIfNeeded();
  await expect(video).toHaveJSProperty('paused', false);

  // A native pause event must not be overridden on the next viewport change.
  await video.evaluate((element) => new Promise<void>((resolve) => {
    element.addEventListener('pause', () => resolve(), { once: true });
    (element as HTMLVideoElement).pause();
  }));
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await video.scrollIntoViewIfNeeded();
  await expect(video).toHaveJSProperty('paused', true);
  await video.evaluate((element) => (element as HTMLVideoElement).play());
  await expect(video).toHaveJSProperty('paused', false);
});

test('reduced motion keeps the animation still but permits optional native playback', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const video = page.locator('[data-project-animation]');
  await video.scrollIntoViewIfNeeded();
  await expect(video).toHaveJSProperty('paused', true);
  await expect(video).toHaveJSProperty('currentTime', 0);
  await expect(video).toHaveAttribute('poster', /\.webp$/);
  await expect(video).toHaveJSProperty('controls', true);

  await video.evaluate((element) => (element as HTMLVideoElement).play());
  await expect(video).toHaveJSProperty('paused', false);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(video).toHaveJSProperty('paused', true);
});

test('without JavaScript, the poster and native video controls remain available', async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: testInfo.project.use.viewport });
  try {
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4321/');
    const video = page.locator('[data-project-animation]');
    await video.scrollIntoViewIfNeeded();
    await expect(video).toBeVisible();
    await expect(video).toHaveAttribute('poster', /\.webp$/);
    await expect(video).toHaveJSProperty('controls', true);
    await expect(video).toHaveJSProperty('paused', true);
  } finally {
    await context.close();
  }
});
