'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Icon from './Icon';
import SectionHeading from './ui/SectionHeading';
import { PROCESS } from '@/lib/site';

export default function Process() {
  const root = useRef(null);
  const lineH = useRef(null);
  const lineV = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      if (lineH.current) lineH.current.style.transform = 'scaleX(1)';
      if (lineV.current) lineV.current.style.transform = 'scaleY(1)';
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (lineH.current) {
        gsap.fromTo(
          lineH.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top 60%', end: 'bottom 75%', scrub: 0.6 },
          }
        );
      }
      if (lineV.current) {
        gsap.fromTo(
          lineV.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top 70%', end: 'bottom 85%', scrub: 0.6 },
          }
        );
      }
    }, root);
    return () => ctx.revert();
  }, []);

  const StepNode = ({ s, i }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-glow/30 bg-ink-700 text-cyan-glow shadow-glow"
    >
      <Icon name={s.icon} className="h-6 w-6" />
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-electric-gradient font-mono text-[10px] font-bold text-ink-900">
        {i + 1}
      </span>
    </motion.div>
  );

  return (
    <section id="process" ref={root} className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="How It Works"
        title="Five Steps From Idea"
        highlight="To Delivered"
        subtitle="A frictionless, transparent workflow designed to get premium apparel into your hands — fast."
      />

      {/* Desktop horizontal */}
      <div className="mt-20 hidden lg:block">
        <div className="relative">
          <div className="absolute left-0 right-0 top-7 h-[3px] -translate-y-1/2 rounded-full bg-white/10" />
          <div
            ref={lineH}
            className="absolute left-0 right-0 top-7 h-[3px] origin-left -translate-y-1/2 rounded-full bg-electric-gradient shadow-glow"
            style={{ transform: 'scaleX(0)' }}
          />
          <div className="relative grid grid-cols-5 gap-4">
            {PROCESS.map((s, i) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <StepNode s={s} i={i} />
                <h3 className="mt-6 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile vertical */}
      <div className="mt-14 lg:hidden">
        <div className="relative pl-4">
          <div className="absolute bottom-2 left-[31px] top-2 w-[3px] rounded-full bg-white/10" />
          <div
            ref={lineV}
            className="absolute bottom-2 left-[31px] top-2 w-[3px] origin-top rounded-full bg-electric-gradient shadow-glow"
            style={{ transform: 'scaleY(0)' }}
          />
          <div className="flex flex-col gap-9">
            {PROCESS.map((s, i) => (
              <div key={s.step} className="flex items-start gap-5">
                <StepNode s={s} i={i} />
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
