import { SITE_URL, HREFLANG, COUNTRIES_SERVED, BRAND } from './site';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function abs(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

// hreflang map for metadata.alternates.languages (same English content per region)
export function altLanguages(path = '/') {
  const url = abs(path);
  const languages = { 'x-default': url };
  for (const l of HREFLANG) languages[l] = url;
  return languages;
}

const COUNTRY_ISO = {
  'United Kingdom': 'GB',
  'United States': 'US',
  Canada: 'CA',
  Australia: 'AU',
  'United Arab Emirates': 'AE',
  Ireland: 'IE',
  Germany: 'DE',
  France: 'FR',
  'New Zealand': 'NZ',
  'Saudi Arabia': 'SA',
};

export const areaServed = COUNTRIES_SERVED.map((name) => ({ '@type': 'Country', name }));
export const areaServedISO = COUNTRIES_SERVED.map((name) => COUNTRY_ISO[name]).filter(Boolean);

// Reusable Organization node (referenced by @id elsewhere).
export const organizationLd = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND.name,
  legalName: 'Velocity Wear',
  url: abs('/'),
  logo: { '@type': 'ImageObject', url: abs('/velocity-logo.png'), width: 500, height: 486 },
  image: abs('/og-image.png'),
  description:
    'Premium custom apparel printing and wholesale towels for gyms, spas and hotels — shipped worldwide including the UK, USA and Canada.',
  slogan: BRAND.tagline,
  email: BRAND.email,
  sameAs: [BRAND.instagram],
  areaServed,
  knowsAbout: [
    'Custom apparel printing',
    'Custom hoodies',
    'Screen printing',
    'Embroidery',
    'DTF printing',
    'Sublimation printing',
    'Wholesale towels',
    'Corporate uniforms',
    'Bulk apparel manufacturing',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: BRAND.email,
    telephone: BRAND.phone,
    areaServed: areaServedISO,
    availableLanguage: ['English'],
  },
};

export function breadcrumbLd(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

export function faqLd(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function graph(nodes) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
