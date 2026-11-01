import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, getSeoForPath, jsonLd } from './seoConfig';

// Keeps <head> in sync with the current route during client-side navigation.
// The first load already gets the right tags from the prerendered HTML
// (scripts/prerender-seo.mjs); this hook covers in-app route changes.

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (value == null) { el?.remove(); return; }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!href) { el?.remove(); return; }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname);
    const image = seo.image ? `${SITE_URL}${seo.image}` : null;

    document.title = seo.title;
    setMeta('name', 'description', seo.description);
    setMeta('name', 'robots', seo.robots);
    setLink('canonical', seo.canonical || null);

    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:url', seo.canonical || null);
    setMeta('property', 'og:type', seo.canonical && seo.canonical !== `${SITE_URL}/` ? 'article' : 'website');
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', seo.imageAlt || seo.title);
    setMeta('name', 'twitter:title', seo.title);
    setMeta('name', 'twitter:description', seo.description);
    setMeta('name', 'twitter:image', image);

    let ld = document.getElementById('seo-jsonld');
    const data = jsonLd(seo.schema);
    if (!data) { ld?.remove(); return; }
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = 'seo-jsonld';
      document.head.appendChild(ld);
    }
    ld.textContent = data;
  }, [pathname]);
}
