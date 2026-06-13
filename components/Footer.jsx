'use client';

import { Instagram, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import LogoMark from './LogoMark';
import NewsletterForm from './NewsletterForm';
import { BRAND, NAV_LINKS } from '@/lib/site';

const COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Custom Hoodies', href: '/#services' },
      { label: 'Custom Denim Jackets', href: '/#services' },
      { label: 'Screen Printing', href: '/#services' },
      { label: 'Embroidery', href: '/#services' },
      { label: 'DTF Printing', href: '/#services' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Wholesale', href: '/wholesale' },
      { label: 'Wholesale Towels', href: '/wholesale-towels' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/#gallery' },
    ],
  },
  {
    title: 'Company',
    links: NAV_LINKS,
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/10 bg-ink-800/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-electric-gradient opacity-60" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <LogoMark className="h-24" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {BRAND.tagline} — premium custom apparel printing & manufacturing for brands that
              refuse to blend in. MOQ {BRAND.moq} pieces.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: BRAND.instagram, label: 'Instagram' },
                { icon: MessageCircle, href: BRAND.whatsappLink, label: 'WhatsApp' },
                { icon: Mail, href: `mailto:${BRAND.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-cyan-glow/50 hover:text-cyan-glow hover:shadow-glow"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <NewsletterForm />
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      <span className="mr-0 h-px w-0 bg-cyan-glow transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. · Crafted for brands in motion.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-white">Privacy</a>
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-white">Terms</a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-cyan-glow/50"
            >
              Back to top <ArrowUp className="h-3.5 w-3.5 text-cyan-glow" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
