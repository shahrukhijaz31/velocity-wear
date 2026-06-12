import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
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

const SITE_URL = 'https://velocity-wear.com';

export const metadata = {
  title: 'Wholesale Towels for Gyms, Spas & Hotels — Small, Medium & Large',
  description:
    'Premium wholesale custom towels for gyms, spas and hotels. Combed-cotton in small, medium & large sizes, 400–700 GSM, custom embroidery & woven labels. Bulk pricing from 50 pieces, nationwide & worldwide delivery.',
  keywords: [
    'wholesale towels',
    'custom gym towels',
    'spa towels bulk',
    'hotel towels supplier',
    'bulk towels',
    'embroidered towels',
    'custom towel manufacturer',
    'small medium large towels',
    'cotton towels wholesale',
  ],
  alternates: { canonical: `${SITE_URL}/wholesale-towels` },
  openGraph: {
    title: 'Wholesale Towels for Gyms, Spas & Hotels | Velocity Wear',
    description:
      'Premium combed-cotton towels in small, medium & large — custom embroidered. Bulk pricing from 50 pieces.',
    url: `${SITE_URL}/wholesale-towels`,
    siteName: 'Velocity Wear',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Wholesale Custom Towels',
  description:
    'Premium combed-cotton wholesale towels for gyms, spas and hotels in small, medium and large sizes with custom embroidery.',
  brand: { '@type': 'Brand', name: 'Velocity Wear' },
  category: 'Towels',
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 50, unitText: 'pieces' },
  },
};

export default function WholesaleTowelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <TowelQuote />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
