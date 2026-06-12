'use client';

const ITEMS = [
  'Screen Printing',
  'Embroidery',
  'DTF Printing',
  'Sublimation',
  'Bulk Manufacturing',
  'Corporate Uniforms',
  'Ecommerce Merch',
  'Private Label',
  'Premium Fabric',
  'Fast Turnaround',
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-white/[0.02] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-display text-xl uppercase tracking-wide text-slate-400/70 transition-colors hover:text-white sm:text-2xl">
              {t}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-cyan-glow/80 shadow-glow" />
          </div>
        ))}
      </div>
    </div>
  );
}
