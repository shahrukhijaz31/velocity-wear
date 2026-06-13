'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Maximize2, ArrowUpRight } from 'lucide-react';
import GarmentMockup from './GarmentMockup';
import SectionHeading from './ui/SectionHeading';
import { useTilt } from './ui/useTilt';
import { GALLERY } from '@/lib/site';

// Explicit bento placement (lg = 3-col). Mobile/tablet fall back to a clean
// 2-col grid. Heights come from the grid row tracks, so nothing overflows.
const PLACE = [
  'lg:col-start-1 lg:row-start-1 lg:row-span-2', // hoodie  (tall, left)
  'lg:col-start-2 lg:row-start-1',               // cap
  'lg:col-start-2 lg:row-start-2',               // uniform
  'lg:col-start-3 lg:row-start-1 lg:row-span-2', // polo    (tall, right)
  'lg:col-start-3 lg:row-start-3',               // tshirt
  'lg:col-start-1 lg:row-start-3 lg:col-span-2', // bulk    (wide banner)
];

const ACCENTS = ['#22e0ff', '#2e7bff', '#4f9dff', '#22e0ff', '#2e7bff', '#1f5fff'];

function GalleryTile({ g, i, onOpen }) {
  const tilt = useTilt(7);
  return (
    <motion.button
      ref={tilt.ref}
      onClick={() => onOpen(i)}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
      style={tilt.style}
      className={`group relative h-full w-full overflow-hidden rounded-2xl glass text-left transition-colors duration-300 will-change-transform [transform-style:preserve-3d] hover:border-cyan-glow/40 ${PLACE[i]}`}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ background: `radial-gradient(circle at 50% 35%, ${ACCENTS[i]}1f, transparent 70%)` }}
      >
        <GarmentMockup kind={g.kind} accent={ACCENTS[i]} className="h-full w-full p-4" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
        <div className="translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-glow">
            {g.cat}
          </span>
          <h3 className="text-base font-bold leading-tight text-white sm:text-lg">{g.title}</h3>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>
      </div>
    </motion.button>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="The Work"
        title="A Gallery of"
        highlight="Finished Drops"
        subtitle="Real categories, real craftsmanship. Tap any piece to view it up close."
      />

      <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[210px] lg:grid-cols-3">
        {GALLERY.map((g, i) => (
          <GalleryTile key={g.title} g={g} i={i} onOpen={setActive} />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] glass-strong p-6 sm:p-10"
              style={{ boxShadow: `0 40px 120px -30px ${ACCENTS[active]}77` }}
            >
              <button
                onClick={() => setActive(null)}
                className="btn-ghost absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div
                className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full opacity-40 blur-[90px]"
                style={{ backgroundColor: ACCENTS[active] }}
              />

              <div className="relative mx-auto h-72 w-full max-w-sm sm:h-96">
                <GarmentMockup
                  kind={GALLERY[active].kind}
                  accent={ACCENTS[active]}
                  className="h-full w-full"
                />
              </div>

              <div className="relative mt-4 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-glow">
                    {GALLERY[active].cat}
                  </span>
                  <h3 className="font-display text-2xl uppercase text-white sm:text-3xl">
                    {GALLERY[active].title}
                  </h3>
                </div>
                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="btn-electric inline-flex items-center gap-1.5 rounded-xl px-5 py-3 text-sm font-bold"
                >
                  Order Similar <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
