'use client';

import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import BlogCard from './BlogCard';

/**
 * Client-side blog search + listing.
 * Receives a trimmed, serializable list of posts and filters in-browser by
 * title, excerpt, category and keywords. With no query it shows the newest
 * post as a featured card; while searching it shows a uniform results grid.
 */
export default function BlogSearch({ posts = [] }) {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const filtered = useMemo(() => {
    if (!q) return posts;
    return posts.filter((p) => {
      const haystack = [p.title, p.excerpt, p.category, ...(p.keywords || [])]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [q, posts]);

  const [featured, ...rest] = filtered;

  return (
    <div>
      {/* Search box */}
      <div className="mx-auto mt-12 max-w-xl">
        <div className="glass flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 transition-colors focus-within:border-cyan-glow/50">
          <Search className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles — hoodies, denim, wholesale, GSM…"
            aria-label="Search blog articles"
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none sm:text-base"
          />
          {searching && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-cyan-glow/50 hover:text-cyan-glow"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {searching && (
          <p className="mt-3 text-center text-sm text-slate-400">
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'} for “{query.trim()}”
          </p>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mx-auto mt-14 max-w-md text-center">
          <p className="text-lg font-semibold text-white">No articles found</p>
          <p className="mt-2 text-sm text-slate-400">
            Try a different keyword like “hoodies”, “towels”, “denim”, “caps” or “wholesale”.
          </p>
        </div>
      ) : searching ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <>
          {featured && (
            <div className="mt-12">
              <BlogCard post={featured} featured />
            </div>
          )}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
