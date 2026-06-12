import Link from 'next/link';
import { ArrowUpRight, Boxes, Clock, Leaf, PenTool, Printer, Shirt, ShoppingBag } from 'lucide-react';
import { CATEGORIES, formatDate } from '@/lib/blog';

const ICONS = { ShoppingBag, Boxes, Shirt, Printer, Leaf, PenTool };

export default function BlogCard({ post, featured = false }) {
  const cat = CATEGORIES[post.category] || { icon: 'ShoppingBag', accent: '#22e0ff' };
  const Icon = ICONS[cat.icon] || ShoppingBag;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group glass relative flex flex-col overflow-hidden rounded-3xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-glow/40 sm:p-7 ${
        featured ? 'lg:flex-row lg:items-stretch lg:gap-8' : ''
      }`}
    >
      {/* Accent glow that follows the category colour */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-25 blur-3xl transition-opacity duration-300 group-hover:opacity-50"
        style={{ background: cat.accent }}
      />

      <div
        className={`relative flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] ${
          featured ? 'mb-6 h-44 lg:mb-0 lg:h-auto lg:w-2/5' : 'mb-6 h-32'
        }`}
      >
        <Icon
          className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
          style={{ color: cat.accent }}
          strokeWidth={1.5}
        />
      </div>

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center gap-3">
          <span
            className="chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: cat.accent }}
          >
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
            <Clock className="h-3.5 w-3.5" /> {post.readMins} min read
          </span>
        </div>

        <h3
          className={`mt-4 font-display uppercase leading-[1.05] tracking-tight text-white transition-colors group-hover:text-electric ${
            featured ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {post.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-300/80 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-xs text-slate-500">{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-white transition-colors group-hover:text-cyan-glow">
            Read article
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
