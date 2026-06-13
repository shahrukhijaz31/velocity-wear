import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Icon from '@/components/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import {
  BRAND, COUNTRIES_SERVED, FAQ_WHOLESALE, PROCESS, SITE_URL,
  WHOLESALE, WHOLESALE_PRODUCTS, WHOLESALE_TIERS, WHOLESALE_WHY,
} from '@/lib/site';
import {
  ORG_ID, abs, altLanguages, areaServed, breadcrumbLd, faqLd, graph,
} from '@/lib/seo';

const PATH = '/wholesale';

export const metadata = {
  title: 'Wholesale Custom Apparel — Hoodies, Tees, Caps & More | UK, USA & Europe',
  description:
    'Wholesale custom apparel for the UK, USA & Europe — bulk hoodies, t-shirts, polos, caps, trousers, denim jackets, uniforms & towels. Low 20-piece MOQ, tiered pricing up to 40% off, custom branding & tracked delivery.',
  keywords: [
    'wholesale custom apparel',
    'wholesale hoodies UK USA Europe',
    'wholesale t-shirts',
    'wholesale clothing supplier',
    'bulk custom apparel UK USA Europe',
    'wholesale clothing manufacturer',
    'private label apparel',
    'bulk hoodies wholesale',
    'wholesale streetwear',
    'custom apparel wholesale Europe',
  ],
  alternates: { canonical: abs(PATH), languages: altLanguages(PATH) },
  openGraph: {
    title: 'Wholesale Custom Apparel | UK, USA & Europe | Velocity Wear',
    description:
      'Bulk custom hoodies, tees, polos, caps, trousers, denim jackets, uniforms & towels. 20-piece MOQ, up to 40% off at volume, tracked delivery to the UK, USA & Europe.',
    url: abs(PATH),
    siteName: 'Velocity Wear',
    type: 'website',
  },
};

const jsonLd = graph([
  {
    '@type': 'Service',
    '@id': `${SITE_URL}/#wholesale-service`,
    name: 'Wholesale Custom Apparel Manufacturing',
    serviceType: 'Wholesale custom apparel',
    provider: { '@id': ORG_ID },
    areaServed,
    description:
      'Wholesale custom apparel for the UK, USA and Europe — bulk hoodies, t-shirts, polos, caps, trousers, denim jackets, corporate uniforms and towels with a 20-piece minimum, tiered bulk pricing and custom branding.',
    offers: {
      '@type': 'Offer',
      eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 20, unitText: 'pieces' },
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Wholesale Custom Apparel',
      itemListElement: WHOLESALE_PRODUCTS.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: `Wholesale ${p.name}` },
      })),
    },
  },
  faqLd(FAQ_WHOLESALE),
  breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Wholesale', path: PATH }]),
]);

export default function WholesalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollProgress />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Reveal>
              <span className="chip mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-glow" />
                Wholesale · UK · USA · Europe
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
                Wholesale Custom Apparel for the{' '}
                <span className="text-electric glow-text">UK, USA &amp; Europe</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/80 sm:text-lg">
                {WHOLESALE.tagline} Low {BRAND.moq}-piece minimum, tiered pricing up to 40% off,
                full custom branding and tracked delivery.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="#contact" className="btn-electric inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold">
                  Get a Wholesale Quote
                </a>
                <a href="#wholesale-products" className="btn-ghost inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white">
                  See What We Supply
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Products */}
        <section id="wholesale-products" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="What We Supply"
            title="Wholesale Across the"
            highlight="Full Range"
            subtitle="One partner for your entire range — apparel and towels, made to a premium standard and shipped in bulk to the UK, USA and Europe."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHOLESALE_PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={0.04 * (i % 4)}>
                <TiltCard max={8} className="h-full">
                  <Link
                    href={p.href}
                    className="group block h-full rounded-2xl glass p-6 transition-colors duration-300 hover:border-cyan-glow/40"
                  >
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-cyan-glow transition-transform duration-300 group-hover:scale-110">
                      <Icon name={p.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-white transition-colors group-hover:text-electric">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                    <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-cyan-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View wholesale →
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Bulk Pricing"
            title="The More You Order,"
            highlight="The Less You Pay"
            subtitle="Transparent, tiered wholesale pricing. Start with a low 20-piece test run, then scale into deeper discounts."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHOLESALE_TIERS.map((t, i) => (
              <Reveal key={t.label} delay={0.05 * i}>
                <div className="relative h-full overflow-hidden rounded-2xl glass-strong p-7 text-center">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-electric-gradient opacity-60" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">{t.label}</span>
                  <div className="mt-3 font-display text-3xl uppercase text-white">{t.range}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">pieces</div>
                  <p className="mt-4 text-sm font-semibold text-cyan-glow">{t.discount}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Why wholesale with us */}
        <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Why Velocity Wear"
            title="Built for"
            highlight="Bulk Buyers"
            subtitle="Everything brands, retailers and teams need to buy custom apparel in bulk with confidence."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHOLESALE_WHY.map((w, i) => (
              <Reveal key={w.title} delay={0.04 * (i % 3)}>
                <div className="flex h-full gap-4 rounded-2xl glass p-6">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-glow">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Markets served */}
        <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Markets We Serve"
            title="Wholesale Delivery"
            highlight="Worldwide"
            subtitle="Tracked freight with landed-cost and duty guidance, led by our core UK, USA and European markets."
          />
          <Reveal className="mt-12">
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
              {COUNTRIES_SERVED.map((c) => (
                <span
                  key={c}
                  className="chip inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Process */}
        <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="How It Works"
            title="From Brief to"
            highlight="Bulk Delivery"
            subtitle="A simple, transparent process from your first enquiry to a tracked wholesale delivery."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((s, i) => (
              <Reveal key={s.step} delay={0.05 * i}>
                <div className="relative h-full rounded-2xl glass p-6">
                  <span className="font-display text-3xl text-electric">{s.step}</span>
                  <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-glow">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ (also emitted as FAQ schema above) */}
        <FAQ
          eyebrow="Wholesale FAQ"
          title="Wholesale,"
          highlight="Answered"
          subtitle="The questions brands and retailers in the UK, USA and Europe ask before ordering wholesale."
          items={FAQ_WHOLESALE}
          id="wholesale-faq"
        />

        {/* Quote form */}
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
