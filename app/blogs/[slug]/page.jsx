import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft, Boxes, Briefcase, Calendar, Clock, Crown, Droplets, Layers, Leaf, PenTool, Printer, Shirt, ShoppingBag,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FAQ from '@/components/FAQ';
import Reveal from '@/components/ui/Reveal';
import BlogContent from '@/components/BlogContent';
import BlogCard from '@/components/BlogCard';
import {
  BLOG_AUTHOR, CATEGORIES, categorySlug, formatDate, getAllPosts,
} from '@/lib/blog';
import { getMergedPost, getMergedRelated } from '@/lib/posts';
import { BRAND, SITE_URL } from '@/lib/site';
import { altLanguages } from '@/lib/seo';

const ICONS = { ShoppingBag, Boxes, Shirt, Printer, Leaf, PenTool, Layers, Crown, Briefcase, Droplets };

// ISR so published CMS posts appear without a redeploy.
export const revalidate = 60;

// Prebuild the static posts; published DB posts render on demand.
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getMergedPost(params.slug);
  if (!post) return {};
  const url = `${SITE_URL}/blogs/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url, languages: altLanguages(`/blogs/${post.slug}`) },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: 'Velocity Wear',
      type: 'article',
      publishedTime: post.date,
      authors: [BLOG_AUTHOR],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getMergedPost(params.slug);
  if (!post) notFound();

  const cat = CATEGORIES[post.category] || { icon: 'ShoppingBag', accent: '#22e0ff' };
  const Icon = ICONS[cat.icon] || ShoppingBag;
  const related = await getMergedRelated(post.slug, 3);
  const url = `${SITE_URL}/blogs/${post.slug}`;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: BLOG_AUTHOR, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Velocity Wear',
      url: SITE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    articleSection: post.category,
    keywords: post.keywords.join(', '),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  const faqLd = post.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <ScrollProgress />
      <Navbar />

      <main>
        <article className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
          {/* Breadcrumb / back */}
          <Reveal>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-cyan-glow"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
          </Reveal>

          {/* Header */}
          <header className="mt-8">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`/blogs/category/${categorySlug(post.category)}`}
                  className="chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-cyan-glow/40"
                  style={{ color: cat.accent }}
                >
                  <Icon className="h-3.5 w-3.5" /> {post.category}
                </Link>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="h-3.5 w-3.5" /> {post.readMins} min read
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 font-display text-3xl uppercase leading-[1.02] tracking-tight text-white sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base text-slate-400">By {BLOG_AUTHOR}</p>
            </Reveal>
          </header>

          <div
            className="mt-8 h-px w-full opacity-60"
            style={{ background: `linear-gradient(90deg, ${cat.accent}, transparent)` }}
            aria-hidden
          />

          {/* Body — CMS posts store HTML; static posts use structured blocks */}
          <Reveal delay={0.05} amount={0.05}>
            {post.source === 'db' ? (
              <div className="cms-prose" dangerouslySetInnerHTML={{ __html: post.body || '' }} />
            ) : (
              <BlogContent blocks={post.content} />
            )}
          </Reveal>
        </article>

        {/* Per-post FAQ (also emitted as FAQ schema above) */}
        {post.faq?.length > 0 && (
          <FAQ
            eyebrow="FAQ"
            title="Quick"
            highlight="Answers"
            subtitle={`Common questions about ${post.category.toLowerCase()} — answered.`}
            items={post.faq}
            id="post-faq"
          />
        )}

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 px-6 py-10 text-center sm:px-10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-electric-gradient opacity-60" />
              <h2 className="font-display text-2xl uppercase leading-tight tracking-tight text-white sm:text-3xl">
                Bring your idea to life
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300/80 sm:text-base">
                Premium custom apparel from a {BRAND.moq}-piece minimum, made and shipped to the
                UK, USA, Europe and worldwide. Send your design for a free, itemised quote.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/#contact"
                  className="btn-electric inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold"
                >
                  Get a Free Quote
                </a>
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <Reveal>
              <h2 className="font-display text-2xl uppercase tracking-tight text-white sm:text-3xl">
                Keep <span className="text-electric glow-text">reading</span>
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={0.04 * i}>
                  <BlogCard post={p} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
