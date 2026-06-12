import './globals.css';
import { Anton, Epilogue, Space_Grotesk } from 'next/font/google';
import MotionProvider from '@/components/MotionProvider';
import { SITE_URL } from '@/lib/site';
import { altLanguages, organizationLd, graph, abs } from '@/lib/seo';

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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Velocity Wear — Custom Apparel & Wholesale Towels | UK, USA, Canada',
    template: '%s | Velocity Wear',
  },
  description:
    'Premium custom apparel printing & wholesale towels — hoodies, polos, t-shirts, caps, trousers, corporate uniforms & towels for gyms, spas & hotels. Screen print, embroidery, DTF & sublimation. MOQ 20. Worldwide delivery to the UK, USA, Canada & beyond.',
  applicationName: 'Velocity Wear',
  keywords: [
    'custom apparel printing',
    'custom hoodies UK USA Canada',
    'custom t-shirts',
    'custom clothing manufacturer',
    'screen printing',
    'embroidery services',
    'DTF printing',
    'sublimation printing',
    'bulk apparel manufacturing',
    'corporate uniforms',
    'wholesale towels supplier',
    'custom gym spa hotel towels',
    'streetwear printing',
    'private label clothing',
  ],
  authors: [{ name: 'Velocity Wear', url: SITE_URL }],
  creator: 'Velocity Wear',
  publisher: 'Velocity Wear',
  category: 'Custom Apparel & Textiles',
  formatDetection: { email: false, telephone: false, address: false },
  alternates: {
    canonical: abs('/'),
    languages: altLanguages('/'),
  },
  openGraph: {
    title: 'Velocity Wear — Custom Apparel & Wholesale Towels',
    description:
      'Premium custom apparel printing and wholesale towels for gyms, spas & hotels. MOQ 20. Worldwide delivery incl. UK, USA & Canada.',
    url: abs('/'),
    siteName: 'Velocity Wear',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    images: [
      { url: abs('/og-image.png'), width: 1200, height: 630, alt: 'Velocity Wear — Custom Apparel & Wholesale Towels' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velocity Wear — Custom Apparel & Wholesale Towels',
    description:
      'Premium custom apparel & wholesale towels. MOQ 20. Worldwide delivery incl. UK, USA & Canada.',
    images: [abs('/og-image.png')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export const viewport = {
  themeColor: '#04060c',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = graph([
  organizationLd,
  {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: abs('/'),
    name: 'Velocity Wear',
    description:
      'Premium custom apparel printing and wholesale towels, shipped worldwide including the UK, USA and Canada.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
  },
]);

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
