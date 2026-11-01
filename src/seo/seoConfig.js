// Single source of truth for page-level SEO.
// Used at runtime (src/seo/useSeo.js) AND at build time (scripts/prerender-seo.mjs),
// so keep this file plain JS with no JSX or browser-only imports.

export const SITE_URL = 'https://www.ankidesigns.in';
export const SITE_NAME = 'Ankit Sikder';
export const DEFAULT_OG_IMAGE = '/og/home.jpg';

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Ankit Sikder',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/global/portfolio-pic-1.webp`,
  jobTitle: 'Interaction Designer',
  description:
    'Interaction, UI/UX and product designer pursuing a Masters in Interaction Design at IIITDM Jabalpur.',
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Institute of Design, Nirma University' },
    { '@type': 'CollegeOrUniversity', name: 'PDPM IIITDM Jabalpur' },
  ],
  knowsAbout: [
    'Interaction design',
    'UI/UX design',
    'Product design',
    'UX research',
    'Information architecture',
    'Design systems',
    'Enterprise UX',
    'AR/VR experiences',
    'AI prototyping',
  ],
  sameAs: [
    'https://www.linkedin.com/in/ankit-sikder-531388187/',
    'https://www.behance.net/ankitsikder',
  ],
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'Ankit Sikder — Portfolio',
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
};

function caseStudy({ path, name, description, image, keywords }) {
  const url = `${SITE_URL}${path}`;
  return [
    {
      '@type': 'CreativeWork',
      '@id': `${url}#case-study`,
      url,
      name,
      headline: name,
      description,
      image: `${SITE_URL}${image}`,
      keywords,
      inLanguage: 'en',
      author: { '@id': PERSON_ID },
      creator: { '@id': PERSON_ID },
      isPartOf: { '@id': WEBSITE_ID },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name, item: url },
      ],
    },
  ];
}

// Every indexable route. Paths have no trailing slash (Vercel is set to trailingSlash: false).
export const routes = [
  {
    path: '/',
    title: 'Ankit Sikder — Interaction & UI/UX Designer Portfolio',
    description:
      'Portfolio of Ankit Sikder, an interaction, UI/UX and product designer (M.Des, IIITDM Jabalpur). Case studies in enterprise UX, VR and product design.',
    image: '/og/home.jpg',
    imageAlt: 'Ankit Sikder — Interaction and UI/UX Designer portfolio',
    schema: [
      website,
      person,
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profile`,
        url: `${SITE_URL}/`,
        name: 'Ankit Sikder — Interaction & UI/UX Designer Portfolio',
        isPartOf: { '@id': WEBSITE_ID },
        mainEntity: { '@id': PERSON_ID },
        inLanguage: 'en',
      },
    ],
  },
  {
    path: '/work/jio-bp',
    title: 'Jio-bp Incident Management UX Case Study — Ankit Sikder',
    description:
      "How Ankit Sikder redesigned Jio-bp's Incident Management System into a role-based safety ecosystem: research, IA, design system and dashboards.",
    image: '/og/jio-bp.jpg',
    imageAlt: 'Jio-bp Incident Management System dashboard shown on a laptop',
  },
  {
    path: '/work/vrtraffic',
    title: 'Immersive Traffic Command — VR Training UX Case Study',
    description:
      'VR training simulator where traffic personnel practise hand signals, coordination and high-pressure decisions. Interaction design case study by Ankit Sikder.',
    image: '/og/vrtraffic.jpg',
    imageAlt: 'A traffic officer testing the Immersive Traffic Command VR headset prototype',
  },
  {
    path: '/work/makhana-tool',
    title: 'Makhana Seed Collection Tool — Ergonomic Product Design',
    description:
      'Ergonomic hand-tool concept for makhana (fox nut) harvesting that reduces awkward postures, thorns and repetitive effort. Case study by Ankit Sikder.',
    image: '/og/makhana-tool.jpg',
    imageAlt: '3D render of the makhana seed collection tool with a mesh basket and wheel',
  },
  {
    path: '/work/auracharge',
    title: 'Aura Charge Smart Inverter — Industrial Design Case Study',
    description:
      'Aura Charge reimagines home power backup as a smart energy hub with device charging and smart home features. Product design case study by Ankit Sikder.',
    image: '/og/auracharge.jpg',
    imageAlt: 'Render of the Aura Charge smart inverter with a touchscreen and charging ports',
  },
];

// Attach case-study schema to the project routes.
for (const r of routes) {
  if (r.path.startsWith('/work/') && !r.schema) {
    const name = r.title.split(' — ')[0];
    r.schema = caseStudy({
      path: r.path,
      name,
      description: r.description,
      image: r.image,
      keywords: {
        '/work/jio-bp': 'enterprise UX, incident management system, dashboard design, design system, safety reporting',
        '/work/vrtraffic': 'VR interaction design, training simulation, traffic management, spatial design',
        '/work/makhana-tool': 'ergonomic product design, agricultural tool design, makhana harvesting, fox nut',
        '/work/auracharge': 'industrial design, smart inverter, smart home, consumer electronics, product design',
      }[r.path],
    });
  }
}

// Routes that exist but must not be indexed.
export const noindexRoutes = {
  '/pdf': {
    title: 'Portfolio PDF — Ankit Sikder',
    description: 'Printable PDF version of the Ankit Sikder design portfolio.',
  },
  notFound: {
    title: 'Page not found — Ankit Sikder',
    description: 'This page does not exist. Explore the Ankit Sikder design portfolio instead.',
  },
};

export function normalizePath(pathname = '/') {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname || '/';
}

export function getSeoForPath(pathname) {
  const path = normalizePath(pathname);
  const route = routes.find(r => r.path === path);
  if (route) return { ...route, canonical: `${SITE_URL}${route.path === '/' ? '/' : route.path}`, robots: 'index, follow, max-image-preview:large' };
  if (path.startsWith('/admin')) return { ...noindexRoutes.notFound, title: 'Admin — Ankit Sikder', robots: 'noindex, nofollow', image: DEFAULT_OG_IMAGE };
  if (noindexRoutes[path]) return { ...noindexRoutes[path], robots: 'noindex, follow', image: DEFAULT_OG_IMAGE };
  return { ...noindexRoutes.notFound, robots: 'noindex, follow', image: DEFAULT_OG_IMAGE, notFound: true };
}

export function jsonLd(schema) {
  if (!schema) return null;
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': schema });
}
