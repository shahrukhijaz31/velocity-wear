'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | done | error

  const submit = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-glow">
        <CheckCircle2 className="h-4 w-4" /> You’re on the list — thanks!
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mt-6 max-w-xs">
      <label htmlFor="nl-email" className="block text-xs font-semibold uppercase tracking-wider text-white">
        Get drops & offers
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="nl-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder="you@email.com"
          autoComplete="email"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-glow/60"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          aria-label="Subscribe"
          className="btn-electric inline-flex shrink-0 items-center justify-center rounded-xl px-4 text-sm font-bold disabled:opacity-70"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
      {status === 'error' && <p className="mt-1.5 text-xs text-red-300">Please enter a valid email.</p>}
    </form>
  );
}
