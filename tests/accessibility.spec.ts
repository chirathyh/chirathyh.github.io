import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

for (const path of ['/', '/projects/neurostimenv/', '/publications/', '/neurips-2026/', '/cv/', '/404.html']) {
  test(`${path} has no automatically detectable accessibility violations`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
    expect(consoleErrors).toEqual([]);
  });
}
