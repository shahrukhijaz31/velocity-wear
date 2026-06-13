import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import BlogSearch from '@/components/BlogSearch';
import { CATEGORIES, categorySlug } from '@/lib/blog';
import { getMergedCategories, getMergedPosts } from '@/lib/posts';
import { SITE_URL } from '@/lib/site';
import { altLanguages } from '@/lib/seo';

// Revalidate so newly published CMS posts appear without a redeploy.
export const revalidate = 60;

export const metadata = {
  title: 'Blogs — Custom Apparel, Hoodies & Ecommerce Insights',
  description:
    'Guides and insights on custom hoodies, denim jackets, apparel printing, ecommerce and wholesale to the UK, USA and Europe — from starting a brand to GSM, MOQs, eco fabrics, pricing and shipping.',
  keywords: [
    'custom hoodie blog',
    'apparel printing guides',
    'ecommerce clothing brand tips',
    'wholesale hoodies UK USA Europe',
    'custom apparel insights',
    'streetwear manufacturing',
  ],
  alternates: { canonical: `${SITE_URL}/blogs`, languages: altLanguages('/blogs') },
  openGraph: {
    title: 'Velocity Wear Blogs — Custom Apparel & Ecommerce Insights',
    description:
      'Guides on custom hoodies, denim jackets, apparel printing, ecommerce and wholesale to the UK, USA and Europe.',
    url: `${SITE_URL}/blogs`,
    siteName: 'Velocity Wear',
    type: 'website',
  },
};

export default async function BlogIndexPage() {
  const posts = await getMergedPosts();
  const categories = await getMergedCategories();

  // Trimmed, serializable list for the client-side search component.
  const cards = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    readMins: p.readMins,
    keywords: p.keywords,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Velocity Wear Blog',
    description:
      'Guides and insights on custom hoodies, denim jackets, apparel printing, ecommerce and wholesale to the UK, USA and Europe.',
    url: `${SITE_URL}/blogs`,
    publisher: { '@type': 'Organization', name: 'Velocity Wear', url: SITE_URL },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${SITE_URL}/blogs/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        {/* Hero */}
        <header className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="chip mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-glow" />
              The Velocity Journal
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              Custom Apparel & <span className="text-electric glow-text">Ecommerce</span> Insights
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/80 sm:text-lg">
              Practical guides on custom hoodies, denim, printing, branding and selling apparel —
              with a wholesale lens for brands shipping to the UK, USA and Europe.
            </p>
          </Reveal>
        </header>

        {/* Browse by category */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((c) => {
              const oc = CATEGORIES[c] || { accent: '#22e0ff' };
              return (
                <Link
                  key={c}
                  href={`/blogs/category/${categorySlug(c)}`}
                  className="chip inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-glow/40 hover:text-white"
                  style={{ borderColor: `${oc.accent}33` }}
                >
                  {c}
                </Link>
              );
            })}
          </div>
        </Reveal>

        {/* Search + listing (client) */}
        <BlogSearch posts={cards} />

        {/* CTA */}
        <Reveal className="mt-20">
          <div className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 px-6 py-12 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-electric-gradient opacity-60" />
            <h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-white sm:text-4xl">
              Ready to make it real?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300/80">
              Turn any of these ideas into product. Premium fabric, a 20-piece minimum and
              tracked delivery to the UK, USA, Europe and worldwide.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#contact"
                className="btn-electric inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold"
              >
                Get a Free Quote
              </a>
              <a
                href="/wholesale-towels"
                className="btn-ghost inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white"
              >
                Explore Wholesale Towels
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
