import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FAQ from '@/components/FAQ';
import {
  TowelHero,
  TowelUseCases,
  TowelSizes,
  TowelSpecs,
  TowelBranding,
  TowelTiers,
  TowelCTA,
  TowelQuote,
} from '@/components/Towels';
import { SITE_URL, FAQ_TOWELS } from '@/lib/site';
import {
  abs, altLanguages, areaServed, breadcrumbLd, faqLd, graph,
} from '@/lib/seo';

const PATH = '/wholesale-towels';

export const metadata = {
  title: 'Wholesale Towels for Gyms, Spas & Hotels — Small, Medium & Large',
  description:
    'Wholesale custom towels for gyms, spas and hotels in the UK, USA, Canada & worldwide. Combed-cotton small, medium & large sizes, 400–700 GSM, custom embroidery & woven labels. Bulk pricing from 50 pieces.',
  keywords: [
    'wholesale towels',
    'wholesale towels UK',
    'wholesale towels USA',
    'wholesale towels Canada',
    'custom gym towels',
    'spa towels bulk',
    'hotel towels supplier',
    'bulk towels',
    'embroidered towels',
    'custom towel manufacturer',
    'small medium large towels',
    'cotton towels wholesale',
  ],
  alternates: { canonical: abs(PATH), languages: altLanguages(PATH) },
  openGraph: {
    title: 'Wholesale Towels for Gyms, Spas & Hotels | Velocity Wear',
    description:
      'Premium combed-cotton towels in small, medium & large — custom embroidered. Bulk pricing from 50 pieces. Worldwide delivery incl. UK, USA & Canada.',
    url: abs(PATH),
    siteName: 'Velocity Wear',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    images: [{ url: abs('/og-towels.png'), width: 1200, height: 630, alt: 'Wholesale Towels for Gyms, Spas & Hotels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Towels for Gyms, Spas & Hotels',
    description: 'Small, medium & large custom towels. 400–700 GSM. Bulk from 50 pcs. Worldwide.',
    images: [abs('/og-towels.png')],
  },
};

const jsonLd = graph([
  {
    '@type': 'Product',
    '@id': `${SITE_URL}${PATH}#product`,
    name: 'Wholesale Custom Towels',
    description:
      'Premium 100% combed-cotton wholesale towels for gyms, spas and hotels in small (40×60 cm), medium (70×140 cm) and large (90×180 cm) sizes, 400–700 GSM, with custom embroidery and woven labels.',
    brand: { '@type': 'Brand', name: 'Velocity Wear' },
    category: 'Towels',
    material: '100% Combed Cotton',
    image: abs('/og-towels.png'),
    audience: { '@type': 'BusinessAudience', name: 'Gyms, spas, hotels, resorts and distributors' },
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 50, unitText: 'pieces' },
      eligibleRegion: areaServed,
      seller: { '@id': `${SITE_URL}/#organization` },
    },
  },
  {
    '@type': 'Service',
    '@id': `${SITE_URL}${PATH}#service`,
    name: 'Wholesale Towel Supply & Custom Branding',
    serviceType: 'Wholesale towel manufacturing',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed,
    description:
      'Bulk supply of custom-branded gym, spa and hotel towels with embroidery, woven labels and tiered wholesale pricing from a 50-piece minimum order.',
  },
  faqLd(FAQ_TOWELS),
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Wholesale Towels', path: PATH },
  ]),
]);

export default function WholesaleTowelsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollProgress />
      <Navbar />
      <main>
        <TowelHero />
        <TowelUseCases />
        <TowelSizes />
        <TowelSpecs />
        <TowelBranding />
        <TowelTiers />
        <TowelCTA />
        <FAQ
          eyebrow="Towel FAQ"
          title="Wholesale Towels,"
          highlight="Answered"
          subtitle="What gyms, spas, hotels and distributors ask before placing a bulk towel order."
          items={FAQ_TOWELS}
        />
        <TowelQuote />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
