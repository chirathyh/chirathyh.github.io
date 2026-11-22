import { expect, test } from '@playwright/test';

test('NeuroStimFlow shows the original overview without a full-size link', async ({ page }) => {
  await page.goto('/');
  const card = page.locator('article[aria-labelledby="neurostimflow-title"]');
  await expect(card).toBeVisible();
  await expect(card).not.toContainText('placeholder');
  const image = card.locator('img');
  await image.scrollIntoViewIfNeeded();
  await expect(image).toHaveJSProperty('complete', true);
  expect(await image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await expect(image).toHaveAttribute('alt', /biophysical simulations/);
  const figure = card.locator('figure');
  await expect(figure.getByRole('link')).toHaveCount(0);
  await expect(figure.locator('figcaption')).toHaveText('From biophysical neural-circuit simulations to a conditional flow-matching EEG emulator.');
  await expect(card.getByRole('link', { name: /Paper \(OpenReview\)/ })).toHaveAttribute('href', 'https://openreview.net/forum?id=t1VarRyYPK');
  await expect(card.getByRole('link', { name: /Code \(GitHub\)/ })).toHaveAttribute('href', 'https://github.com/chirathyh/neurostimflow');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
