'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
  'Ecommerce', 'Wholesale', 'Custom Hoodies', 'Printing', 'Sustainability',
  'Design', 'Denim', 'Caps', 'T-Shirts', 'Polos', 'Workwear', 'Towels',
];

export default function PostEditor({ post }) {
  const router = useRouter();
  const editing = !!post;
  const [form, setForm] = useState({
    title: post?.title || '',
    slug: post?.slug || '',
    category: post?.category || 'Ecommerce',
    excerpt: post?.excerpt || '',
    keywords: post?.keywords || '',
    readMins: post?.readMins || 5,
    body: post?.body || '',
    published: post?.published || false,
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const save = async (publishOverride) => {
    setError('');
    setSaving(true);
    const payload = { ...form };
    if (publishOverride !== undefined) payload.published = publishOverride;
    try {
      const res = await fetch(editing ? `/api/posts/${post.id}` : '/api/posts', {
        method: editing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Could not save the post.');
        setSaving(false);
        return;
      }
      router.push('/admin/posts');
      router.refresh();
    } catch {
      setError('Network error.');
      setSaving(false);
    }
  };

  const input =
    'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-glow/70';
  const label = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300';

  return (
    <div>
      <h1 className="font-display text-3xl uppercase tracking-tight text-white">
        {editing ? 'Edit Post' : 'New Post'}
      </h1>

      <div className="mt-6 space-y-5">
        <div>
          <label className={label}>Title</label>
          <input className={input} value={form.title} onChange={(e) => update('title', e.target.value)} placeholder="Post title" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label}>Slug {editing ? '' : '(optional — auto from title)'}</label>
            <input className={input} value={form.slug} onChange={(e) => update('slug', e.target.value)} placeholder="my-post" />
          </div>
          <div>
            <label className={label}>Category</label>
            <select className={`${input} appearance-none`} value={form.category} onChange={(e) => update('category', e.target.value)}>
              {CATEGORIES.map((c) => <option key={c} value={c} className="bg-[#0a0f1d]">{c}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className={label}>Excerpt</label>
          <textarea className={`${input} resize-none`} rows={2} value={form.excerpt} onChange={(e) => update('excerpt', e.target.value)} placeholder="Short summary shown on cards." />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label}>Keywords (comma-separated)</label>
            <input className={input} value={form.keywords} onChange={(e) => update('keywords', e.target.value)} placeholder="wholesale hoodies, uk, usa" />
          </div>
          <div>
            <label className={label}>Read time (minutes)</label>
            <input type="number" min={1} className={input} value={form.readMins} onChange={(e) => update('readMins', e.target.value)} />
          </div>
        </div>

        <div>
          <label className={label}>Body (HTML or plain text)</label>
          <textarea className={`${input} resize-y font-mono text-[13px]`} rows={16} value={form.body} onChange={(e) => update('body', e.target.value)} placeholder="<p>Write your article…</p>" />
        </div>

        {error && <p className="text-sm font-medium text-red-300">{error}</p>}

        <div className="flex flex-wrap gap-3">
          <button onClick={() => save(true)} disabled={saving} className="btn-electric inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold disabled:opacity-70">
            {saving ? 'Saving…' : 'Save & Publish'}
          </button>
          <button onClick={() => save(false)} disabled={saving} className="btn-ghost inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white disabled:opacity-70">
            Save as Draft
          </button>
          <button onClick={() => router.push('/admin/posts')} className="inline-flex items-center px-4 py-3 text-sm font-semibold text-slate-400 hover:text-white">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
