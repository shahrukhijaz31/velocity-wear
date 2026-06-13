import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/Icon';
import { BRAND, COUNTRIES_SERVED, STATS, WHY } from '@/lib/site';
import { ORG_ID, abs, altLanguages, breadcrumbLd, graph } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

const PATH = '/about';

export const metadata = {
  title: 'About Velocity Wear — Premium Custom Apparel & Wholesale Manufacturer',
  description:
    'Velocity Wear is a premium custom apparel printing and wholesale manufacturer serving brands, retailers and teams across the UK, USA and Europe — hoodies, t-shirts, caps, denim jackets, uniforms and towels, with a low 20-piece minimum.',
  keywords: [
    'about velocity wear',
    'custom apparel manufacturer',
    'wholesale clothing manufacturer',
    'custom clothing company UK USA Europe',
    'premium apparel printing',
  ],
  alternates: { canonical: abs(PATH), languages: altLanguages(PATH) },
  openGraph: {
    title: 'About Velocity Wear | Custom Apparel & Wholesale Manufacturer',
    description:
      'Who we are: a premium custom apparel and wholesale manufacturer for the UK, USA and Europe.',
    url: abs(PATH),
    siteName: 'Velocity Wear',
    type: 'website',
  },
};

const jsonLd = graph([
  {
    '@type': 'AboutPage',
    '@id': `${SITE_URL}${PATH}#aboutpage`,
    name: 'About Velocity Wear',
    description:
      'Velocity Wear is a premium custom apparel printing and wholesale manufacturer for the UK, USA and Europe.',
    url: abs(PATH),
    mainEntity: { '@id': ORG_ID },
    isPartOf: { '@id': `${SITE_URL}/#website` },
  },
  breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'About', path: PATH }]),
]);

const CAPABILITIES = [
  { icon: 'factory', title: 'In-house manufacturing', desc: 'Cut-and-sew production and decoration under one roof for tight quality control.' },
  { icon: 'screen', title: 'Every print method', desc: 'Screen printing, DTF, embroidery, 3D puff and sublimation — matched to your design.' },
  { icon: 'gem', title: 'Premium, verified fabric', desc: 'GSM-checked, pre-shrunk and colour-locked across every garment.' },
  { icon: 'box', title: 'Low 20-piece MOQ', desc: 'Test before you scale, then unlock tiered bulk pricing up to 40% off.' },
  { icon: 'sparkles', title: 'Full private label', desc: 'Woven labels, custom tags and packaging so orders ship retail-ready under your brand.' },
  { icon: 'truck', title: 'UK, USA & Europe delivery', desc: 'Tracked freight with clear landed-cost and duty guidance.' },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollProgress />
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        {/* Hero */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="chip mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-glow" />
              About Us
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              The Team Behind <span className="text-electric glow-text">Velocity Wear</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-slate-300/80 sm:text-lg">
              {BRAND.name} is a premium custom apparel printing and wholesale manufacturer. We help
              brands, retailers, gyms and teams across the UK, USA and Europe bring apparel to life —
              from a first 20-piece test run to full wholesale production.
            </p>
          </Reveal>
        </div>

        {/* Story */}
        <section className="mx-auto mt-16 max-w-3xl">
          <Reveal>
            <div className="blog-prose space-y-5 text-[15px] leading-relaxed text-slate-300/85 sm:text-base">
              <p>
                We started Velocity Wear on a simple belief: a new brand should be able to launch
                premium, custom apparel without committing to thousands of units or sacrificing
                quality. That is why our minimum order is just {BRAND.moq} pieces per design — one of
                the lowest premium MOQs in the industry — so you can test ideas, prove what sells, and
                scale into volume with confidence.
              </p>
              <p>
                Today we manufacture and decorate the full range — hoodies, t-shirts, polos, caps,
                trousers and joggers, denim jackets, corporate uniforms and wholesale towels — using
                screen printing, DTF, embroidery and sublimation. Everything is held to one premium
                standard: verified GSM, pre-shrunk and colour-locked fabric, reinforced construction,
                and branding that ships retail-ready.
              </p>
              <p>
                Our customers are streetwear and ecommerce brands, gyms and studios, events,
                corporates and resellers — and we ship to them with tracked delivery and clear landed
                costs across the UK, USA, Europe and worldwide.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Stats */}
        <section className="mt-16">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.05 * i}>
                <div className="rounded-2xl glass p-5 text-center">
                  <div className="font-display text-3xl text-white">{s.value}{s.suffix}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-400">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* What we do */}
        <section className="mt-20">
          <SectionHeading
            eyebrow="What We Do"
            title="A Full Apparel"
            highlight="Partner"
            subtitle="Everything you need to design, produce and reorder premium custom apparel — in one place."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={0.04 * (i % 3)}>
                <div className="flex h-full gap-4 rounded-2xl glass p-6">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-glow">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Markets */}
        <section className="mt-20">
          <SectionHeading
            eyebrow="Where We Ship"
            title="Markets We"
            highlight="Serve"
            subtitle="Led by our core UK, USA and European markets, with worldwide tracked delivery."
          />
          <Reveal className="mt-10">
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
              {COUNTRIES_SERVED.map((c) => (
                <span key={c} className="chip inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-slate-200">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal className="mt-20">
          <div className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 px-6 py-12 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-electric-gradient opacity-60" />
            <h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-white sm:text-4xl">
              Let’s make something
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300/80">
              Tell us what you’re building. We reply within hours with transparent pricing and a mockup plan.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="/#contact" className="btn-electric inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold">
                Get a Free Quote
              </a>
              <a href="/wholesale" className="btn-ghost inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white">
                Explore Wholesale
              </a>
            </div>
          </div>
        </Reveal>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
