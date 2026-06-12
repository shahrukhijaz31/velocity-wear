import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProductShowcase from '@/components/ProductShowcase';
import Process from '@/components/Process';
import TrustStats from '@/components/TrustStats';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { SITE_URL, FAQ_HOME } from '@/lib/site';
import {
  abs, altLanguages, areaServed, breadcrumbLd, faqLd, graph,
} from '@/lib/seo';

export const metadata = {
  title: 'Custom Apparel Printing & Wholesale Towels',
  description:
    'Velocity Wear designs & prints premium custom apparel — hoodies, t-shirts, polos, caps, trousers, denim jackets, uniforms — plus wholesale towels for gyms, spas & hotels. MOQ 20. Screen print, embroidery, DTF & sublimation. Wholesale delivery to the UK, USA, Europe & more.',
  alternates: { canonical: abs('/'), languages: altLanguages('/') },
};

const jsonLd = graph([
  {
    '@type': 'Service',
    '@id': `${SITE_URL}/#apparel-service`,
    name: 'Custom Apparel Printing & Manufacturing',
    serviceType: 'Custom apparel printing',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed,
    description:
      'Premium custom printed and embroidered hoodies, t-shirts, polos, caps, trousers, denim jackets, corporate uniforms and bulk merchandise with a 20-piece minimum order, shipped to the UK, USA and Europe.',
    offers: {
      '@type': 'Offer',
      eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 20, unitText: 'pieces' },
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Custom Apparel Services',
      itemListElement: [
        'Custom Hoodies', 'Custom T-Shirts', 'Custom Polo Shirts', 'Custom Caps',
        'Custom Trousers', 'Custom Denim Jackets', 'Corporate Uniforms', 'Screen Printing',
        'Embroidery', 'DTF Printing', 'Sublimation Printing',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  },
  faqLd(FAQ_HOME),
  breadcrumbLd([{ name: 'Home', path: '/' }]),
]);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyChooseUs />
        <ProductShowcase />
        <Process />
        <TrustStats />
        <Gallery />
        <Testimonials />
        <CTASection />
        <FAQ
          eyebrow="Questions"
          title="Custom Apparel,"
          highlight="Answered"
          subtitle="Everything brands, gyms and businesses in the UK, USA, Europe and worldwide ask before ordering."
          items={FAQ_HOME}
        />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
