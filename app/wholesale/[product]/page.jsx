import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import GarmentMockup from '@/components/GarmentMockup';
import { getWholesalePage, relatedWholesale, wholesaleSlugs } from '@/lib/wholesale';
import { BRAND, SITE_URL } from '@/lib/site';
import { ORG_ID, abs, altLanguages, areaServed, breadcrumbLd, faqLd, graph } from '@/lib/seo';

export function generateStaticParams() {
  return wholesaleSlugs().map((product) => ({ product }));
}

export function generateMetadata({ params }) {
  const p = getWholesalePage(params.product);
  if (!p) return {};
  const path = `/wholesale/${p.slug}`;
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: abs(path), languages: altLanguages(path) },
    openGraph: {
      title: `${p.h1} | Velocity Wear`,
      description: p.description,
      url: abs(path),
      siteName: 'Velocity Wear',
      type: 'website',
    },
  };
}

export default function WholesaleProductPage({ params }) {
  const p = getWholesalePage(params.product);
  if (!p) notFound();

  const path = `/wholesale/${p.slug}`;
  const related = relatedWholesale(p.slug, 4);

  const jsonLd = graph([
    {
      '@type': 'Product',
      '@id': `${SITE_URL}${path}#product`,
      name: `Wholesale ${p.name}`,
      description: p.description,
      brand: { '@type': 'Brand', name: 'Velocity Wear' },
      category: 'Wholesale custom apparel',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: abs(path),
        eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 20, unitText: 'pieces' },
        areaServed,
        seller: { '@id': ORG_ID },
      },
    },
    faqLd(p.faq),
    breadcrumbLd([
      { name: 'Home', path: '/' },
      { name: 'Wholesale', path: '/wholesale' },
      { name: p.name, path },
    ]),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollProgress />
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 pb-8 pt-32 sm:px-8 sm:pt-40">
        {/* Breadcrumb */}
        <Reveal>
          <Link
            href="/wholesale"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-cyan-glow"
          >
            <ArrowLeft className="h-4 w-4" /> All wholesale
          </Link>
        </Reveal>

        {/* Hero: visual + copy */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <TiltCard max={9} scale={1.01}>
              <div
                className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-12"
                style={{ boxShadow: `0 30px 90px -30px ${p.accent}66` }}
              >
                <div
                  className="pointer-events-none absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full opacity-50 blur-[90px]"
                  style={{ backgroundColor: p.accent }}
                />
                <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
                  <GarmentMockup kind={p.kind} accent={p.accent} className="h-full w-full drop-shadow-2xl" />
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div>
            <Reveal>
              <span className="chip mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-glow" />
                Wholesale · UK · USA · Europe
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                {p.h1} <span className="text-electric glow-text">for the UK, USA &amp; Europe</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-base leading-relaxed text-slate-300/80 sm:text-lg">{p.intro}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#contact" className="btn-electric inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold">
                  Get a Wholesale Quote
                </a>
                <a href="#wholesale-faq" className="btn-ghost inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white">
                  Read the FAQ
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Specs + decoration */}
        <section className="mt-20 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl glass p-7 sm:p-8">
              <h2 className="font-display text-2xl uppercase tracking-tight text-white">Specification</h2>
              <ul className="mt-5 space-y-3">
                {p.specs.map((s) => (
                  <li key={s} className="flex gap-3 text-[15px] leading-relaxed text-slate-300/85">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-glow" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl glass p-7 sm:p-8">
                <h2 className="font-display text-2xl uppercase tracking-tight text-white">Decoration</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-300/85">{p.decoration}</p>
              </div>
              <div className="rounded-2xl glass p-7 sm:p-8">
                <h2 className="font-display text-2xl uppercase tracking-tight text-white">Who it's for</h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {p.uses.map((u) => (
                    <span key={u} className="chip inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-slate-200">
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Related wholesale ranges */}
        <section className="mt-20">
          <Reveal>
            <h2 className="font-display text-2xl uppercase tracking-tight text-white sm:text-3xl">
              More <span className="text-electric glow-text">wholesale ranges</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={0.04 * i}>
                <Link
                  href={`/wholesale/${r.slug}`}
                  className="group flex h-full flex-col items-center rounded-2xl glass p-5 text-center transition-colors duration-300 hover:border-cyan-glow/40"
                >
                  <div className="h-24 w-full">
                    <GarmentMockup kind={r.kind} accent={r.accent} showStudio={false} className="h-full w-full" />
                  </div>
                  <span className="mt-3 text-sm font-semibold text-white transition-colors group-hover:text-electric">
                    {r.name}
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.04 * related.length}>
              <Link
                href="/wholesale-towels"
                className="group flex h-full flex-col items-center justify-center rounded-2xl glass p-5 text-center transition-colors duration-300 hover:border-cyan-glow/40"
              >
                <span className="text-sm font-semibold text-white transition-colors group-hover:text-electric">
                  Wholesale Towels
                </span>
                <span className="mt-1 text-xs text-slate-400">Gym · Spa · Hotel</span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FAQ (also emitted as FAQ schema) */}
      <FAQ
        eyebrow="Wholesale FAQ"
        title={p.name + ','}
        highlight="Answered"
        subtitle={`Common questions about wholesale ${p.name.toLowerCase()} for the UK, USA and Europe.`}
        items={p.faq}
        id="wholesale-faq"
      />

      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
