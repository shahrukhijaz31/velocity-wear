import Link from 'next/link';
import { Inbox, Mail, FileText } from 'lucide-react';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

async function getStats() {
  try {
    const [submissions, newSubmissions, subscribers, posts, publishedPosts] = await Promise.all([
      prisma.submission.count(),
      prisma.submission.count({ where: { status: 'new' } }),
      prisma.subscriber.count(),
      prisma.post.count(),
      prisma.post.count({ where: { published: true } }),
    ]);
    return { submissions, newSubmissions, subscribers, posts, publishedPosts, ok: true };
  } catch {
    return { ok: false };
  }
}

export default async function Dashboard() {
  const s = await getStats();

  if (!s.ok) {
    return (
      <div>
        <h1 className="font-display text-3xl uppercase tracking-tight text-white">Dashboard</h1>
        <div className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 text-sm text-amber-200">
          Could not reach the database. Connect Vercel Postgres and set the environment variables
          (see the setup steps), then run <code className="font-mono">npm run db:push</code>.
        </div>
      </div>
    );
  }

  const cards = [
    { label: 'Submissions', value: s.submissions, sub: `${s.newSubmissions} new`, href: '/admin/submissions', icon: Inbox },
    { label: 'Subscribers', value: s.subscribers, sub: 'newsletter', href: '/admin/subscribers', icon: Mail },
    { label: 'Blog posts', value: s.posts, sub: `${s.publishedPosts} published`, href: '/admin/posts', icon: FileText },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl uppercase tracking-tight text-white">Dashboard</h1>
      <p className="mt-2 text-sm text-slate-400">Overview of your store activity.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-cyan-glow/40"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{c.label}</span>
              <c.icon className="h-4 w-4 text-cyan-glow" />
            </div>
            <div className="mt-3 font-display text-4xl text-white">{c.value}</div>
            <div className="mt-1 text-xs text-slate-500">{c.sub}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
