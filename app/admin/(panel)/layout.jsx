import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Inbox, Mail, FileText, Settings, LayoutDashboard, ExternalLink } from 'lucide-react';
import { getSession } from '@/lib/auth';
import LogoutButton from '@/components/admin/LogoutButton';

export const dynamic = 'force-dynamic';

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/submissions', label: 'Submissions', icon: Inbox },
  { href: '/admin/subscribers', label: 'Subscribers', icon: Mail },
  { href: '/admin/posts', label: 'Blog Posts', icon: FileText },
  { href: '/admin/content', label: 'Content', icon: Settings },
];

export default async function PanelLayout({ children }) {
  const session = await getSession();
  if (!session) redirect('/admin/login');

  return (
    <div className="flex min-h-[100svh] bg-[#070b16] text-slate-200">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-[100svh] w-60 shrink-0 flex-col border-r border-white/10 bg-[#0a0f1d] p-4 md:flex">
        <div className="px-2 py-3">
          <span className="font-display text-lg uppercase tracking-tight text-white">
            Velocity <span className="text-electric">Admin</span>
          </span>
        </div>
        <nav className="mt-4 flex flex-1 flex-col gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="inline-flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              <n.icon className="h-4 w-4 text-cyan-glow" /> {n.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-1 border-t border-white/10 pt-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ExternalLink className="h-4 w-4" /> View site
          </a>
          <p className="px-3 py-1 text-xs text-slate-500">{session.email}</p>
          <LogoutButton />
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 overflow-x-auto border-b border-white/10 bg-[#0a0f1d] px-4 py-3 md:hidden">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap text-sm font-medium text-slate-300">
              {n.label}
            </Link>
          ))}
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-8 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
