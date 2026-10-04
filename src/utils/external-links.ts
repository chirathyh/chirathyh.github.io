import type { HastPluginDefinition } from 'satteri';
import { siteConfig } from '../config/site';

const siteOrigin = new URL(siteConfig.url).origin;

export function isExternalLink(href?: string | URL | null): boolean {
  if (!href) return false;
  try {
    const destination = new URL(href.toString(), siteConfig.url);
    return ['http:', 'https:'].includes(destination.protocol) && destination.origin !== siteOrigin;
  } catch {
    return false;
  }
}

// Apply the same policy to Markdown links during static generation.
export function externalLinksPlugin(): HastPluginDefinition {
  return {
    name: 'external-links',
    element: {
      filter: ['a'],
      visit(node, context) {
        const href = node.properties?.href;
        if (typeof href !== 'string' || !isExternalLink(href)) return;
        const tokens = node.properties?.rel ?? [];
        context.setProperty(node, 'target', '_blank');
        context.setProperty(node, 'rel', [...new Set([...tokens, 'noopener', 'noreferrer'])]);
        context.appendChild(node, {
          type: 'element',
          tagName: 'span',
          properties: { className: ['sr-only'] },
          children: [{ type: 'text', value: ' (opens in a new tab)' }],
        });
      },
    },
  };
}
