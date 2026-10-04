import { expect, test } from '@playwright/test';
import { isExternalLink } from '../src/utils/external-links';

test('external link classification preserves on-site, email and download navigation', () => {
  for (const href of ['https://github.com/chirathyh', 'http://example.com/paper', '//doi.org/10.1234/example']) {
    expect(isExternalLink(href)).toBe(true);
  }
  for (const href of [
    '/publications/', '/files/Industry-CV-2026.pdf', '#work',
    'https://chirathyh.github.io/cv/', 'mailto:chirathyh@hotmail.com',
    'tel:+123456789', '', null, undefined,
  ]) {
    expect(isExternalLink(href)).toBe(false);
  }
  expect(isExternalLink(new URL('https://github.com/chirathyh'))).toBe(true);
});

for (const path of [
  '/', '/publications/', '/projects/neurostimenv/', '/projects/capsml/',
  '/projects/open-source-systems/', '/portfolio/', '/neurips-2026/', '/cv/',
]) {
  test(`${path} opens external websites in new tabs without changing internal navigation`, async ({ page }) => {
    await page.goto(path);
    const links = await page.locator('a[href]').evaluateAll((elements) => elements.map((element) => ({
      href: element.getAttribute('href')!,
      target: element.getAttribute('target'),
      rel: element.getAttribute('rel')?.split(/\s+/) ?? [],
      notice: element.querySelector('.sr-only')?.textContent?.trim(),
    })));
    const external = links.filter((link) => isExternalLink(link.href));
    expect(external.length).toBeGreaterThan(0);
    for (const link of external) {
      expect(link.target, link.href).toBe('_blank');
      expect(link.rel, link.href).toEqual(expect.arrayContaining(['noopener', 'noreferrer']));
      expect(link.notice, link.href).toBe('(opens in a new tab)');
    }
    for (const link of links.filter((link) => !isExternalLink(link.href))) {
      expect(link.target, link.href).not.toBe('_blank');
    }
  });
}

test('Markdown resource links receive the same policy as page buttons', async ({ page }) => {
  await page.goto('/projects/capsml/');
  const link = page.locator('.prose a[href="https://github.com/RL4H/G2P2C"]');
  await expect(link).toHaveAttribute('target', '_blank');
  await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  await expect(link.locator('.sr-only')).toHaveText('(opens in a new tab)');
});

test('open-source systems describes CAPSML without the obsolete assistant branding', async ({ page }) => {
  await page.goto('/projects/open-source-systems/');
  await expect(page.locator('main')).not.toContainText('CAPSML Assistant');
  await expect(page.locator('.prose').getByRole('heading', { name: 'CAPSML', exact: true })).toBeVisible();
  await expect(page.locator('.prose')).toContainText('compare dosing strategies');
  await expect(page.locator('.prose')).toContainText('in-silico experiments');
  const link = page.locator('.prose a[href="https://capsml.com/"]');
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('target', '_blank');
  await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  await expect(link.locator('.sr-only')).toHaveText('(opens in a new tab)');

  await page.goto('/');
  await expect(page.locator('main')).not.toContainText('CAPSML Assistant');
});

test('opening GitHub keeps the portfolio tab in place and isolates the new tab', async ({ page, context }) => {
  // Avoid a network dependency while testing a real browser popup.
  await context.route('https://github.com/chirathyh', (route) => route.fulfill({
    contentType: 'text/html',
    body: '<!doctype html><html lang="en"><title>External destination</title><body>GitHub destination</body></html>',
  }));
  await page.goto('/');
  const portfolioUrl = page.url();
  const newTab = page.waitForEvent('popup');
  await page.locator('.intro .button-row a[href="https://github.com/chirathyh"]').click();
  const popup = await newTab;
  await popup.waitForLoadState();
  expect(popup.url()).toBe('https://github.com/chirathyh');
  expect(await popup.evaluate(() => window.opener)).toBeNull();
  expect(page.url()).toBe(portfolioUrl);
  await popup.close();
});
