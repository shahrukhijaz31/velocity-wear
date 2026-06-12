'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { TESTIMONIALS } from '@/lib/site';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (next) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1);
      setIndex((next + count) % count);
    },
    [index, count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  const t = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        eyebrow="Client Stories"
        title="Brands That"
        highlight="Trust Velocity"
        subtitle="Founders, marketers and operations leads — here's what partnering with us feels like."
      />

      <div
        className="relative mx-auto mt-14 max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative min-h-[320px] sm:min-h-[280px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: dir * -60, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-12"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-electric-600/20 blur-[80px]" />
              <Quote className="h-10 w-10 text-cyan-glow/50" />

              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-cyan-glow text-cyan-glow" />
                ))}
              </div>

              <blockquote className="mt-5 text-lg font-medium leading-relaxed text-slate-100 sm:text-xl">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-electric-gradient font-display text-lg text-ink-900">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-7 flex items-center justify-center gap-5">
          <button
            onClick={() => go(index - 1)}
            className="btn-ghost inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-electric-gradient' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            className="btn-ghost inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
