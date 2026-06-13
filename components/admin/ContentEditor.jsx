'use client';

import { useEffect, useState } from 'react';

const KEYS = [
  { key: 'wholesaleIntro', label: 'Wholesale intro' },
  { key: 'products', label: 'Products' },
  { key: 'announcement', label: 'Site announcement' },
];

export default function ContentEditor() {
  const [key, setKey] = useState(KEYS[0].key);
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const load = async (k) => {
    setStatus('');
    setLoading(true);
    try {
      const res = await fetch(`/api/content?key=${encodeURIComponent(k)}`);
      const data = await res.json().catch(() => ({}));
      setText(data.value ? JSON.stringify(data.value, null, 2) : '');
    } catch {
      setStatus('Could not load content.');
    }
    setLoading(false);
  };

  useEffect(() => {
    load(key);
  }, [key]);

  const save = async () => {
    setStatus('');
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value: text }),
      });
      const data = await res.json().catch(() => ({}));
      setStatus(res.ok ? 'Saved.' : data.error || 'Could not save.');
    } catch {
      setStatus('Network error.');
    }
  };

  const input =
    'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-glow/70';

  return (
    <div>
      <h1 className="font-display text-3xl uppercase tracking-tight text-white">Content</h1>
      <p className="mt-2 text-sm text-slate-400">
        Editable site content stored as JSON. (Wire these keys into pages to make them live — see setup notes.)
      </p>

      <div className="mt-6 max-w-sm">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">Content key</label>
        <select className={`${input} appearance-none`} value={key} onChange={(e) => setKey(e.target.value)}>
          {KEYS.map((k) => <option key={k.key} value={k.key} className="bg-[#0a0f1d]">{k.label}</option>)}
        </select>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">Value (JSON)</label>
        <textarea
          className={`${input} resize-y font-mono text-[13px]`}
          rows={16}
          value={loading ? 'Loading…' : text}
          onChange={(e) => setText(e.target.value)}
          placeholder={'{\n  "headline": "..."\n}'}
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button onClick={save} className="btn-electric inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold">Save</button>
        {status && <span className="text-sm text-slate-300">{status}</span>}
      </div>
    </div>
  );
}
