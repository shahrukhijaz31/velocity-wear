'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Trash2, Pencil, ExternalLink } from 'lucide-react';

export default function PostsClient() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState('');

  const load = async () => {
    setError('');
    try {
      const res = await fetch('/api/posts');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setItems(data.items || []);
    } catch {
      setError('Could not load posts. Is the database connected?');
      setItems([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    if (!confirm('Delete this post?')) return;
    setItems((arr) => arr.filter((p) => p.id !== id));
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
  };

  const togglePublish = async (p) => {
    const published = !p.published;
    setItems((arr) => arr.map((x) => (x.id === p.id ? { ...x, published } : x)));
    await fetch(`/api/posts/${p.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published }),
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl uppercase tracking-tight text-white">Blog Posts</h1>
          <p className="mt-2 text-sm text-slate-400">Create and manage posts published to /blogs.</p>
        </div>
        <Link href="/admin/posts/new" className="btn-electric inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold">
          <Plus className="h-4 w-4" /> New post
        </Link>
      </div>

      {error && <p className="mt-6 rounded-lg border border-amber-400/30 bg-amber-400/5 p-4 text-sm text-amber-200">{error}</p>}
      {items && items.length === 0 && !error && (
        <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-400">
          No posts yet. Click “New post” to write your first one.
        </p>
      )}

      <div className="mt-6 space-y-2">
        {items?.map((p) => (
          <div key={p.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="truncate font-semibold text-white">{p.title}</span>
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase ${p.published ? 'bg-cyan-glow/15 text-cyan-glow' : 'bg-white/10 text-slate-400'}`}>
                  {p.published ? 'Published' : 'Draft'}
                </span>
              </div>
              <div className="mt-0.5 text-xs text-slate-500">/blogs/{p.slug} · {p.category || 'Uncategorised'}</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => togglePublish(p)} className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:border-cyan-glow/40 hover:text-white">
                {p.published ? 'Unpublish' : 'Publish'}
              </button>
              {p.published && (
                <a href={`/blogs/${p.slug}`} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 p-1.5 text-slate-400 hover:text-white" aria-label="View">
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <Link href={`/admin/posts/${p.id}`} className="rounded-lg border border-white/10 p-1.5 text-slate-400 hover:text-white" aria-label="Edit">
                <Pencil className="h-4 w-4" />
              </Link>
              <button onClick={() => remove(p.id)} className="rounded-lg border border-white/10 p-1.5 text-slate-400 hover:border-red-400/50 hover:text-red-300" aria-label="Delete">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
