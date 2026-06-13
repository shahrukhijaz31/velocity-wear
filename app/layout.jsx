import './globals.css';
import { Anton, Epilogue, Space_Grotesk } from 'next/font/google';
import MotionProvider from '@/components/MotionProvider';
import ScrollThreads from '@/components/ui/ScrollThreads';
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
    default: 'Velocity Wear — Premium Custom Apparel & Wholesale Towels | UK, USA & Europe',
    template: '%s | Velocity Wear',
  },
  description:
    'Premium custom apparel & wholesale towels — hoodies, t-shirts, shirts, caps, trousers, denim jackets, corporate uniforms & towels for gyms, spas & hotels. Screen print, embroidery, DTF & sublimation. MOQ 20. Wholesale delivery to the UK, USA, Europe & worldwide.',
  applicationName: 'Velocity Wear',
  keywords: [
    'custom apparel printing',
    'premium custom hoodies',
    'custom hoodies UK USA Europe',
    'custom t-shirts wholesale',
    'custom caps',
    'custom trousers',
    'custom denim jackets',
    'wholesale clothing UK USA Europe',
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
    title: 'Velocity Wear — Premium Custom Apparel & Wholesale Towels',
    description:
      'Premium custom hoodies, shirts, caps, trousers, denim jackets & wholesale towels. MOQ 20. Wholesale delivery to the UK, USA & Europe.',
    url: abs('/'),
    siteName: 'Velocity Wear',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_IE', 'en_DE', 'en_FR', 'en_CA', 'en_AU'],
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
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#04060c' },
    { media: '(prefers-color-scheme: light)', color: '#eef1f8' },
  ],
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

// Applies the saved/system theme before first paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';}if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${epilogue.variable} ${grotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* No-JS fallback: ensure animated content is never stuck invisible */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <div className="page-bg" aria-hidden />
        <div className="page-grid" aria-hidden />
        <ScrollThreads />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
