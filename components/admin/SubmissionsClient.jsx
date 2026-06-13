'use client';

import { useEffect, useState } from 'react';
import { Trash2, RefreshCw } from 'lucide-react';

const STATUS_STYLES = {
  new: 'bg-cyan-glow/15 text-cyan-glow',
  read: 'bg-white/10 text-slate-300',
  archived: 'bg-white/5 text-slate-500',
};

export default function SubmissionsClient() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState('');

  const load = async () => {
    setError('');
    try {
      const res = await fetch('/api/submissions');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setItems(data.items || []);
    } catch {
      setError('Could not load submissions. Is the database connected?');
      setItems([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const setStatus = async (id, status) => {
    setItems((arr) => arr.map((s) => (s.id === id ? { ...s, status } : s)));
    await fetch(`/api/submissions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
  };

  const remove = async (id) => {
    if (!confirm('Delete this submission?')) return;
    setItems((arr) => arr.filter((s) => s.id !== id));
    await fetch(`/api/submissions/${id}`, { method: 'DELETE' });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl uppercase tracking-tight text-white">Submissions</h1>
          <p className="mt-2 text-sm text-slate-400">Quote & contact requests from your site.</p>
        </div>
        <button onClick={load} className="btn-ghost inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white">
          <RefreshCw className="h-4 w-4" /> Refresh
        </button>
      </div>

      {error && <p className="mt-6 rounded-lg border border-amber-400/30 bg-amber-400/5 p-4 text-sm text-amber-200">{error}</p>}
      {items === null && <p className="mt-6 text-sm text-slate-400">Loading…</p>}
      {items && items.length === 0 && !error && (
        <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-400">
          No submissions yet. They’ll appear here when someone submits the quote form.
        </p>
      )}

      <div className="mt-6 space-y-3">
        {items?.map((s) => (
          <div key={s.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-white">{s.name}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase ${STATUS_STYLES[s.status] || ''}`}>
                    {s.status}
                  </span>
                </div>
                <a href={`mailto:${s.email}`} className="block text-sm text-cyan-glow hover:underline">{s.email}</a>
                <div className="mt-1 flex flex-wrap gap-x-4 text-xs text-slate-400">
                  {s.company && <span>{s.company}</span>}
                  {s.phone && <span>{s.phone}</span>}
                  {s.productType && <span>{s.productType}</span>}
                  {s.quantity && <span>Qty: {s.quantity}</span>}
                  <span>{new Date(s.createdAt).toLocaleString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={s.status}
                  onChange={(e) => setStatus(s.id, e.target.value)}
                  className="rounded-lg border border-white/10 bg-[#0a0f1d] px-2 py-1.5 text-xs text-white"
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="archived">Archived</option>
                </select>
                <button onClick={() => remove(s.id)} aria-label="Delete" className="rounded-lg border border-white/10 p-1.5 text-slate-400 hover:border-red-400/50 hover:text-red-300">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            {s.message && <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-300/85">{s.message}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
