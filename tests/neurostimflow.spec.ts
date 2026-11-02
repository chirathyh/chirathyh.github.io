import { expect, test } from '@playwright/test';

test('NeuroStimFlow shows the authentic overview and an accessible full-size image', async ({ page, request }) => {
  await page.goto('/');
  const card = page.locator('article[aria-labelledby="neurostimflow-title"]');
  await expect(card).toBeVisible();
  await expect(card).not.toContainText('placeholder');
  const image = card.locator('img');
  await image.scrollIntoViewIfNeeded();
  await expect(image).toHaveJSProperty('complete', true);
  expect(await image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await expect(image).toHaveAttribute('alt', /biophysical simulations/);
  const fullSize = card.getByRole('link', { name: 'View full-size figure', exact: true });
  const href = await fullSize.getAttribute('href');
  expect(href).toBeTruthy();
  const response = await request.get(href!);
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('image/png');
  await fullSize.focus();
  await expect(fullSize).toBeFocused();
  await fullSize.click();
  await expect(page).toHaveURL(new RegExp('neurostimflow-overview'));
  await page.goBack();
  await expect(card).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
