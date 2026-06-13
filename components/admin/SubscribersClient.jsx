'use client';

import { useEffect, useState } from 'react';
import { Download, RefreshCw } from 'lucide-react';

export default function SubscribersClient() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState('');

  const load = async () => {
    setError('');
    try {
      const res = await fetch('/api/subscribe');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setItems(data.items || []);
    } catch {
      setError('Could not load subscribers. Is the database connected?');
      setItems([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const exportCsv = () => {
    const rows = [['email', 'date'], ...items.map((s) => [s.email, new Date(s.createdAt).toISOString()])];
    const csv = rows.map((r) => r.join(',')).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subscribers.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl uppercase tracking-tight text-white">Subscribers</h1>
          <p className="mt-2 text-sm text-slate-400">Newsletter / email signups.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={load} className="btn-ghost inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white">
            <RefreshCw className="h-4 w-4" /> Refresh
          </button>
          {items?.length > 0 && (
            <button onClick={exportCsv} className="btn-electric inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold">
              <Download className="h-4 w-4" /> Export CSV
            </button>
          )}
        </div>
      </div>

      {error && <p className="mt-6 rounded-lg border border-amber-400/30 bg-amber-400/5 p-4 text-sm text-amber-200">{error}</p>}
      {items && items.length === 0 && !error && (
        <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-400">No subscribers yet.</p>
      )}

      {items?.length > 0 && (
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.03] text-xs uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Subscribed</th>
              </tr>
            </thead>
            <tbody>
              {items.map((s) => (
                <tr key={s.id} className="border-t border-white/5">
                  <td className="px-4 py-3 text-white">{s.email}</td>
                  <td className="px-4 py-3 text-slate-400">{new Date(s.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
