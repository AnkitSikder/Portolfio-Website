import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../seo/seoConfig';

// Rendered for unknown URLs. Vercel serves this via dist/404.html with a real
// 404 status, and the page carries noindex (see src/seo/useSeo.js).
export default function NotFound() {
  const caseStudies = routes.filter(r => r.path.startsWith('/work/'));

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
      <p className="font-clash text-sm uppercase tracking-[0.2em] text-primary">Error 404</p>
      <h1 className="font-franchise text-[22vw] md:text-[12rem] leading-[0.8] uppercase text-[#f5f0e6] mt-4">
        Lost?
      </h1>
      <p className="mt-6 max-w-md text-[#c9c4d4] text-lg">
        This page doesn't exist. Head back home or jump into one of these case studies.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-full bg-[#ff5f1f] px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
      >
        Back to home
      </Link>
      <ul className="mt-10 flex flex-wrap justify-center gap-3">
        {caseStudies.map(r => (
          <li key={r.path}>
            <Link
              to={r.path}
              className="block rounded-full border border-white/15 px-4 py-2 text-sm text-[#c9c4d4] transition-colors hover:border-[#ff5f1f] hover:text-white"
            >
              {r.title.split(' — ')[0]}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
