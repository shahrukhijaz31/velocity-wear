'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [mode, setMode] = useState('login'); // login | register
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        setLoading(false);
        return;
      }
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  const input =
    'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-glow/70';

  return (
    <main className="flex min-h-[100svh] items-center justify-center bg-[#070b16] px-5">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-glass">
        <h1 className="font-display text-2xl uppercase tracking-tight text-white">
          Velocity Wear <span className="text-electric">Admin</span>
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          {mode === 'login' ? 'Sign in to manage your store.' : 'Create the first admin account.'}
        </p>

        <form onSubmit={submit} className="mt-6 space-y-3" noValidate>
          {mode === 'register' && (
            <input
              className={input}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              autoComplete="name"
            />
          )}
          <input
            className={input}
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            autoComplete="email"
            required
          />
          <input
            className={input}
            type="password"
            placeholder={mode === 'register' ? 'Password (8+ characters)' : 'Password'}
            value={form.password}
            onChange={(e) => update('password', e.target.value)}
            autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
            required
          />

          {error && <p className="text-sm font-medium text-red-300">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn-electric inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-bold disabled:opacity-70"
          >
            {loading ? 'Please wait…' : mode === 'login' ? 'Sign In' : 'Create Admin'}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setError('');
            setMode((m) => (m === 'login' ? 'register' : 'login'));
          }}
          className="mt-5 text-xs text-slate-400 transition-colors hover:text-cyan-glow"
        >
          {mode === 'login'
            ? 'First time here? Create the admin account →'
            : '← Back to sign in'}
        </button>
      </div>
    </main>
  );
}
