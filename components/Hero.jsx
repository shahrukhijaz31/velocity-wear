'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Star, MousePointerClick } from 'lucide-react';
import GarmentMockup from './GarmentMockup';
import { BRAND } from '@/lib/site';

const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => null,
});

const HEADLINE = ['Custom', 'Apparel', 'That', 'Makes', 'Your', 'Brand'];

const STATS = [
  { v: '500+', l: 'Happy Clients' },
  { v: '50K+', l: 'Products Printed' },
  { v: '98%', l: 'Satisfaction' },
];

const BADGES = ['Premium Fabric', 'Fast Turnaround', 'Eco Inks', 'Nationwide Delivery'];

function FloatingCard({ mx, my, depth, className, children }) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={`pointer-events-none absolute ${className}`}>
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set(((e.clientX - r.left) / r.width - 0.5) * 40);
    rawY.set(((e.clientY - r.top) / r.height - 0.5) * 40);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* 3D canvas layer */}
      <div className="absolute inset-0 -z-10 opacity-90">
        <Hero3D />
      </div>
      <div className="hero-vignette pointer-events-none absolute inset-0 -z-10" />

      {/* Floating garment mockups (parallax) */}
      <FloatingCard mx={mx} my={my} depth={1.4} className="left-[3%] top-[18%] hidden w-44 xl:block">
        <div className="glass animate-float rounded-3xl p-3 shadow-glow" style={{ animationDelay: '0.2s' }}>
          <GarmentMockup kind="hoodie" accent="#22e0ff" className="h-44 w-full" />
          <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-widest text-electric">Hoodies</p>
        </div>
      </FloatingCard>

      <FloatingCard mx={mx} my={my} depth={2.1} className="right-[4%] top-[14%] hidden w-40 lg:block">
        <div className="glass animate-float rounded-3xl p-3 shadow-glow" style={{ animationDelay: '1.1s' }}>
          <GarmentMockup kind="cap" accent="#2e7bff" className="h-40 w-full" />
          <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-widest text-electric">Caps</p>
        </div>
      </FloatingCard>

      <FloatingCard mx={mx} my={my} depth={1.7} className="bottom-[10%] right-[8%] hidden w-44 xl:block">
        <div className="glass animate-float rounded-3xl p-3 shadow-glow" style={{ animationDelay: '0.6s' }}>
          <GarmentMockup kind="tshirt" accent="#4f9dff" className="h-44 w-full" />
          <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-widest text-electric">Tees</p>
        </div>
      </FloatingCard>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="chip mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200"
          >
            <Sparkles className="h-4 w-4 text-cyan-glow" />
            Premium Custom Apparel Printing
            <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
            <span className="hidden text-electric sm:inline">MOQ {BRAND.moq} pcs</span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.6rem,8vw,6rem)] uppercase leading-[0.92] tracking-tight text-white">
            <span className="sr-only">
              Custom Apparel That Makes Your Brand Impossible to Ignore
            </span>
            <span aria-hidden className="flex flex-wrap justify-center gap-x-4">
              {HEADLINE.map((w, i) => (
                <motion.span
                  key={w + i}
                  initial={{ opacity: 0, y: 24, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span
              aria-hidden
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-1 block text-electric glow-text"
            >
              Impossible to Ignore
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-300/85 sm:text-lg"
          >
            Premium hoodies, polos, t-shirts, caps, trousers &amp; bulk custom printing —
            engineered for brands that refuse to blend in. Minimum order of just{' '}
            <span className="font-semibold text-white">20 pieces</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="btn-electric group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-bold sm:w-auto"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="btn-ghost group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold text-white sm:w-auto"
            >
              View Products
              <MousePointerClick className="h-5 w-5 text-cyan-glow" />
            </a>
          </motion.div>

          {/* trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-400"
          >
            {BADGES.map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
                {b}
              </span>
            ))}
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mx-auto mt-10 grid max-w-xl grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl glass"
          >
            {STATS.map((s) => (
              <div key={s.l} className="px-3 py-4">
                <div className="font-display text-2xl text-white sm:text-3xl">{s.v}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-slate-400">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-cyan-glow" />
        </motion.div>
      </div>
    </section>
  );
}
