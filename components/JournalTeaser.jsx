import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import BlogCard from './BlogCard';
import { getAllPosts } from '@/lib/blog';

// Homepage teaser: the three newest Journal posts + a link to the full blog.
export default function JournalTeaser() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="journal" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="The Journal"
        title="Guides From The"
        highlight="Journal"
        subtitle="Practical guides on custom hoodies, denim, printing, branding and selling apparel — with a wholesale lens for brands shipping to the UK, USA and Europe."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={0.05 * i}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <Link
          href="/blogs"
          className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white"
        >
          Read all articles <ArrowRight className="h-4 w-4 text-cyan-glow" />
        </Link>
      </Reveal>
    </section>
  );
}
