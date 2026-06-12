'use client';

import { motion } from 'framer-motion';
import Counter from './ui/Counter';
import { STATS } from '@/lib/site';

export default function TrustStats() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-12">
        <div className="pointer-events-none absolute -left-20 top-0 h-60 w-60 rounded-full bg-electric-600/30 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-cyan-glow/20 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 bg-electric-radial opacity-60" />

        <div className="relative grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative px-4 text-center lg:border-r lg:border-white/10 lg:last:border-r-0"
            >
              <div className="font-display text-4xl text-white sm:text-5xl md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-sm">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
