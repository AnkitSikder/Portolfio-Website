// Post-build step: writes one HTML file per route with the correct <head> tags.
//
// The site is a client-rendered SPA, so without this every URL would serve the
// home page's title, description and social preview to crawlers and link
// unfurlers (LinkedIn, WhatsApp, Slack…) that don't run JavaScript.
//
// Output (with vercel.json "cleanUrls": true):
//   dist/index.html             → /
//   dist/work/<slug>.html       → /work/<slug>
//   dist/pdf.html               → /pdf            (noindex)
//   dist/404.html               → any unknown URL (served with HTTP 404, noindex)
//   dist/sitemap.xml            → regenerated from the same route list
//
// Run automatically by `npm run build`.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL, routes, getSeoForPath, jsonLd } from '../src/seo/seoConfig.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const START = /<!-- SEO:START[^>]*-->/;
const END = '<!-- SEO:END -->';
if (!START.test(template) || !template.includes(END)) {
  throw new Error('prerender-seo: SEO:START / SEO:END markers missing from dist/index.html');
}

const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
  .replace(/</g, '&lt;').replace(/>/g, '&gt;');

function headFor(path) {
  const seo = getSeoForPath(path);
  const image = `${SITE_URL}${seo.image}`;
  const isHome = seo.canonical === `${SITE_URL}/`;
  const lines = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="robots" content="${seo.robots}" />`,
    seo.canonical && `<link rel="canonical" href="${seo.canonical}" />`,
    `<meta property="og:type" content="${isHome || !seo.canonical ? 'website' : 'article'}" />`,
    seo.canonical && `<meta property="og:url" content="${seo.canonical}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="${esc(seo.imageAlt || seo.title)}" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    seo.schema && `<script type="application/ld+json" id="seo-jsonld">${jsonLd(seo.schema).replace(/</g, '\\u003c')}</script>`,
  ].filter(Boolean);
  return `<!-- SEO:START -->\n    ${lines.join('\n    ')}\n    ${END}`;
}

function render(path) {
  const startIdx = template.search(START);
  const endIdx = template.indexOf(END) + END.length;
  return template.slice(0, startIdx) + headFor(path) + template.slice(endIdx);
}

function write(file, html) {
  const out = join(dist, file);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`prerender-seo: ${file}`);
}

for (const r of routes) {
  write(r.path === '/' ? 'index.html' : `${r.path.slice(1)}.html`, render(r.path));
}
write('pdf.html', render('/pdf'));
write('404.html', render('/__not-found__'));

// Sitemap, generated from the same route list so it can never drift.
const today = new Date().toISOString().slice(0, 10);
const urls = routes.map(r => {
  const loc = r.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${r.path}`;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <image:image><image:loc>${SITE_URL}${r.image}</image:loc></image:image>\n  </url>`;
}).join('\n');
writeFileSync(join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`);
console.log('prerender-seo: sitemap.xml');
