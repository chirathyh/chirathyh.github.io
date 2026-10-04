import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { externalLinksPlugin } from './src/utils/external-links.ts';
import { siteConfig } from './src/config/site.ts';

export default defineConfig({
  site: 'https://chirathyh.github.io',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404.html')
        && (siteConfig.neurips.enabled || !page.endsWith('/neurips-2026/')),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: satteri({ hastPlugins: [externalLinksPlugin] }),
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
