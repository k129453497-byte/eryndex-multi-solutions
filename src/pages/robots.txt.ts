import type { APIRoute } from 'astro';
import { base } from '../data/content';
export const GET: APIRoute = ({ site }) =>
  new Response(
    'User-agent: *\nAllow: /\nSitemap: ' + new URL(base + '/sitemap.xml', site).href + '\n',
    { headers: { 'Content-Type': 'text/plain' } },
  );
