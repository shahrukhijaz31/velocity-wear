import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft, Boxes, Briefcase, Crown, Droplets, Layers, Leaf, PenTool, Printer, Shirt, ShoppingBag,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Reveal from '@/components/ui/Reveal';
import BlogCard from '@/components/BlogCard';
import {
  CATEGORIES, CATEGORY_INTRO, categorySlug, getAllCategories, getCategoryBySlug, getPostsByCategory,
} from '@/lib/blog';
import { SITE_URL } from '@/lib/site';
import { altLanguages } from '@/lib/seo';

const ICONS = { ShoppingBag, Boxes, Shirt, Printer, Leaf, PenTool, Layers, Crown, Briefcase, Droplets };

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: categorySlug(c) }));
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.category);
  if (!category) return {};
  const url = `${SITE_URL}/blogs/category/${params.category}`;
  const intro = CATEGORY_INTRO[category] || `Guides on ${category.toLowerCase()} for custom apparel brands.`;
  return {
    title: `${category} Guides — Custom Apparel Journal`,
    description: `${intro} Premium, wholesale custom apparel for the UK, USA and Europe.`,
    alternates: {
      canonical: url,
      languages: altLanguages(`/blogs/category/${params.category}`),
    },
    openGraph: {
      title: `${category} Guides | Velocity Wear`,
      description: intro,
      url,
      siteName: 'Velocity Wear',
      type: 'website',
    },
  };
}

export default function CategoryPage({ params }) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const posts = getPostsByCategory(category);
  const cat = CATEGORIES[category] || { icon: 'ShoppingBag', accent: '#22e0ff' };
  const Icon = ICONS[cat.icon] || ShoppingBag;
  const intro = CATEGORY_INTRO[category] || `Guides on ${category.toLowerCase()}.`;
  const url = `${SITE_URL}/blogs/category/${params.category}`;
  const others = getAllCategories().filter((c) => c !== category);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category} Guides`,
    description: intro,
    url,
    isPartOf: { '@type': 'Blog', name: 'Velocity Wear Journal', url: `${SITE_URL}/blogs` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/blogs/${p.slug}`,
        name: p.title,
      })),
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs` },
      { '@type': 'ListItem', position: 3, name: category, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <ScrollProgress />
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        {/* Back link */}
        <Reveal>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-cyan-glow"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
        </Reveal>

        {/* Hero */}
        <header className="mt-8 flex max-w-3xl flex-col">
          <Reveal>
            <span
              className="chip mb-5 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: cat.accent }}
            >
              <Icon className="h-4 w-4" /> Journal Category
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              {category}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/80 sm:text-lg">
              {intro}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-3 text-sm text-slate-500">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </p>
          </Reveal>
        </header>

        {/* Posts */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={0.04 * (i % 3)}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        {/* Other categories */}
        <Reveal className="mt-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Browse other categories
          </h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {others.map((c) => {
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
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
