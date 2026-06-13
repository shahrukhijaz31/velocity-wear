'use client';

import { motion } from 'framer-motion';
import Icon from './Icon';
import SectionHeading from './ui/SectionHeading';
import { useTilt } from './ui/useTilt';
import { SERVICES } from '@/lib/site';

function ServiceCard({ service, index }) {
  const tilt = useTilt(7);
  return (
    <motion.article
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={tilt.style}
      className="group relative overflow-hidden rounded-2xl glass p-6 transition-colors duration-300 will-change-transform [transform-style:preserve-3d] hover:border-cyan-glow/40"
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-electric-500/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      {/* sheen sweep */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      {service.tag && (
        <span className="absolute right-4 top-4 rounded-full border border-cyan-glow/40 bg-cyan-glow/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-glow">
          {service.tag}
        </span>
      )}

      <div className="relative">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-cyan-glow transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
          <Icon name={service.icon} className="h-7 w-7" />
        </div>
        <h3 className="text-lg font-bold leading-snug text-white">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.desc}</p>

        <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-electric opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          Learn more
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-electric-gradient transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="What We Print"
        title="A Full Custom Apparel"
        highlight="Powerhouse"
        subtitle="From single drops to nationwide rollouts — every technique, every garment, finished to a standard your customers can feel."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
