'use client';

import { motion } from 'framer-motion';
import Icon from './Icon';
import Counter from './ui/Counter';
import SectionHeading from './ui/SectionHeading';
import { WHY } from '@/lib/site';

function WhyCard({ item, index, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'glass-strong border-cyan-glow/30 shadow-glow sm:col-span-2 lg:row-span-2'
          : 'glass hover:border-cyan-glow/30'
      }`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-electric-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-glow transition-transform duration-300 group-hover:scale-110">
            <Icon name={item.icon} className="h-6 w-6" />
          </div>
          <div className="text-right">
            <div className="font-display text-3xl leading-none text-white sm:text-4xl">
              <Counter value={item.value} suffix={item.suffix} />
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-electric">
              {item.label}
            </div>
          </div>
        </div>

        <h3 className={`mt-auto pt-8 font-bold text-white ${featured ? 'text-2xl' : 'text-lg'}`}>
          {item.title}
        </h3>
        <p className={`mt-2 leading-relaxed text-slate-400 ${featured ? 'text-base' : 'text-sm'}`}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Why Velocity Wear"
        title="Built to Make You"
        highlight="Look Premium"
        subtitle="Every order is backed by real manufacturing muscle, obsessive quality control, and people who actually pick up the phone."
      />

      <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((item, i) => (
          <WhyCard key={item.title} item={item} index={i} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
