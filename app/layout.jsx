import './globals.css';
import { Anton, Epilogue, Space_Grotesk } from 'next/font/google';
import MotionProvider from '@/components/MotionProvider';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-epilogue',
  display: 'swap',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
});

const SITE_URL = 'https://velocity-wear.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Velocity Wear — Custom Apparel That Makes Your Brand Impossible to Ignore',
    template: '%s | Velocity Wear',
  },
  description:
    'Premium custom apparel printing — hoodies, polos, t-shirts, caps, trousers & bulk merchandising. Screen printing, embroidery, DTF & sublimation. Minimum order 20 pieces. Fast turnaround, nationwide delivery.',
  keywords: [
    'custom apparel printing',
    'custom hoodies',
    'custom t-shirts',
    'screen printing',
    'embroidery',
    'DTF printing',
    'sublimation printing',
    'bulk apparel manufacturing',
    'corporate uniforms',
    'streetwear printing',
  ],
  authors: [{ name: 'Velocity Wear' }],
  openGraph: {
    title: 'Velocity Wear — Custom Apparel That Makes Your Brand Impossible to Ignore',
    description:
      'Premium custom apparel printing with a minimum order of just 20 pieces. Hoodies, polos, tees, caps, trousers & bulk custom printing.',
    url: SITE_URL,
    siteName: 'Velocity Wear',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velocity Wear — Custom Apparel Printing',
    description:
      'Premium custom apparel that makes your brand impossible to ignore. MOQ 20 pieces.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#04060c',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Velocity Wear',
  description:
    'Premium custom apparel printing and manufacturing — hoodies, polos, t-shirts, caps, trousers, corporate uniforms and bulk orders.',
  url: SITE_URL,
  slogan: 'Create It. Wear It. Own It.',
  sameAs: ['https://www.instagram.com/velocitywear.brand/'],
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Custom Apparel Printing',
    },
    eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 20, unitText: 'pieces' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${epilogue.variable} ${grotesk.variable}`}
    >
      <body className="font-sans antialiased">
        {/* No-JS fallback: ensure animated content is never stuck invisible */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <div className="page-bg" aria-hidden />
        <div className="page-grid" aria-hidden />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
