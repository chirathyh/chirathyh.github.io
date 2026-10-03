import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortTitle: z.string(),
      subtitle: z.string(),
      summary: z.string(),
      secondary: z.string(),
      featured: z.boolean().default(false),
      order: z.number(),
      status: z.enum(['public', 'hidden']).default('public'),
      tags: z.array(z.string()),
      thumbnail: image(),
      thumbnailAlt: z.string(),
      links: z.object({
        paper: z.url().optional(),
        code: z.url().optional(),
        demo: z.url().optional(),
        poster: z.string().optional(),
        neurips: z.string().optional(),
        g2p2c: z.url().optional(),
        glucoenv: z.url().optional(),
        rl4t1d: z.url().optional(),
      }),
      technicalHighlights: z.array(z.string()),
    }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    venue: z.string(),
    type: z.enum(['preprint', 'journal', 'conference', 'chapter']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    topics: z.array(z.string()),
    doi: z.string().optional(),
    paper: z.url().optional(),
    localPdf: z.string().optional(),
    note: z.string().optional(),
  }),
});

export const collections = { projects, publications };
