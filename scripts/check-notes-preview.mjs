// Run after copying tests/fixtures/note-rendering.md to the notes collection
// and building. Requires a local dist server on port 4321.
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
const browser = await chromium.launch({executablePath:process.env.NOTES_CHROMIUM || '/usr/bin/chromium', headless:true, args:['--no-sandbox']});
await mkdir('artifacts/notes', {recursive:true});
try {
  for (const [name,width,height] of [['desktop',1440,1000],['mobile',390,844]]) {
    const context = await browser.newContext({viewport:{width,height}});
    const page = await context.newPage();
    for (const route of ['/short-notes/','/short-notes/rendering-fixture/']) {
      const response=await page.goto('http://127.0.0.1:4321'+route); assert.equal(response.status(),200);
      assert.equal(await page.locator('h1').count(),1);
      assert(await page.evaluate(()=>document.documentElement.scrollWidth <= window.innerWidth), 'Horizontal overflow');
      const a11y=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
      assert.equal(a11y.violations.length,0,JSON.stringify(a11y.violations.map(x=>({id:x.id,impact:x.impact}))));
      if(route.includes('fixture')) {
        assert.equal(await page.locator('mark').count(),1);
        assert.equal(await page.locator('section[data-footnotes], .footnotes').count(),1);
        await page.locator('summary').click(); assert(await page.locator('details').evaluate(el=>el.open));
      }
      await page.screenshot({path:`artifacts/notes/${name}-${route.includes('fixture')?'article':'index'}.png`,fullPage:true});
      console.log(`${name} ${route}: rendering, overflow, accessibility passed`);
    }
    await context.close();
  }
} finally {await browser.close();}
