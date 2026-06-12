'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import GarmentMockup from './GarmentMockup';
import SectionHeading from './ui/SectionHeading';
import { PRODUCTS } from '@/lib/site';

const FEATURES = ['Print or Embroidery', 'Custom Branding', 'MOQ 20 pcs'];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const product = PRODUCTS[active];

  return (
    <section id="products" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Product Showcase"
          title="The Lineup, Rendered"
          highlight="In Detail"
          subtitle="Studio-grade presentation for every silhouette. Hover, explore, and picture your brand on it."
        />

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Stage */}
          <div className="group relative order-2 lg:order-1">
            <div
              className="relative overflow-hidden rounded-[2rem] glass-strong p-6 sm:p-10"
              style={{ boxShadow: `0 30px 90px -30px ${product.accent}66` }}
            >
              {/* accent glow */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full opacity-50 blur-[90px] transition-colors duration-500"
                style={{ backgroundColor: product.accent }}
              />
              <div
                className="pointer-events-none absolute inset-0 animate-spin-slow opacity-[0.07]"
                style={{
                  background: `conic-gradient(from 0deg, transparent, ${product.accent}, transparent)`,
                }}
              />

              <div className="relative flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-xs tracking-widest text-slate-300">
                  {product.code}
                </span>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-cyan-glow">
                  {product.spec}
                </span>
              </div>

              <div className="relative mx-auto my-2 h-[320px] w-full max-w-md sm:h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, scale: 0.9, rotateY: 18 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.92, rotateY: -18 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  >
                    <GarmentMockup
                      kind={product.kind}
                      accent={product.accent}
                      className="h-full w-full drop-shadow-2xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div>
                  <h3 className="font-display text-3xl uppercase text-white sm:text-4xl">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    {FEATURES.map((f) => (
                      <span key={f} className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <Check className="h-3.5 w-3.5 text-cyan-glow" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#contact"
                  className="btn-electric inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-5 py-3 text-sm font-bold sm:w-auto"
                >
                  Customize <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Selector */}
          <div className="order-1 flex gap-3 overflow-x-auto pb-2 no-scrollbar lg:order-2 lg:flex-col lg:overflow-visible">
            {PRODUCTS.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.name}
                  onClick={() => setActive(i)}
                  className={`group flex min-w-[150px] flex-1 items-center gap-4 rounded-2xl border p-3 text-left transition-all duration-300 lg:min-w-0 ${
                    isActive
                      ? 'glass-strong border-cyan-glow/40 shadow-glow'
                      : 'glass border-white/10 hover:border-white/25'
                  }`}
                  aria-pressed={isActive}
                >
                  <div
                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl transition-transform duration-300 ${
                      isActive ? 'scale-105' : 'group-hover:scale-105'
                    }`}
                    style={{ background: `radial-gradient(circle at 50% 40%, ${p.accent}22, transparent 70%)` }}
                  >
                    <GarmentMockup kind={p.kind} accent={p.accent} showStudio={false} className="h-full w-full" />
                  </div>
                  <div className="min-w-0">
                    <div className={`font-bold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                      {p.name}
                    </div>
                    <div className="truncate text-xs text-slate-400">{p.spec}</div>
                  </div>
                  <span
                    className={`ml-auto hidden h-2.5 w-2.5 shrink-0 rounded-full transition-all lg:block ${
                      isActive ? 'bg-cyan-glow shadow-glow' : 'bg-white/15'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
