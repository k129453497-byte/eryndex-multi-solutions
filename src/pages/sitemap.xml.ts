import { locales, routes, href } from '../data/content';
import type { APIRoute } from 'astro';
const escape = (s: string) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
export const GET: APIRoute = ({ site }) => {
  const urls = locales.flatMap((lang) =>
    routes.map((route) => {
      const alternates = locales
        .map(
          (l) =>
            '<xhtml:link rel="alternate" hreflang="' +
            (l === 'zh-tw' ? 'zh-Hant' : l === 'zh-cn' ? 'zh-Hans' : 'en') +
            '" href="' +
            escape(new URL(href(l, route), site).href) +
            '"/>',
        )
        .join('');
      return (
        '<url><loc>' +
        escape(new URL(href(lang, route), site).href) +
        '</loc>' +
        alternates +
        '</url>'
      );
    }),
  );
  return new Response(
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' +
      urls.join('') +
      '</urlset>',
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
