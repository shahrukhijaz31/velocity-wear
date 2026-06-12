'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

export default function FAQ({
  eyebrow = 'FAQ',
  title = 'Questions,',
  highlight = 'Answered',
  subtitle,
  items = [],
  id = 'faq',
}) {
  const [open, setOpen] = useState(0);

  return (
    <section id={id} className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} subtitle={subtitle} />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                isOpen ? 'glass-strong border-cyan-glow/30' : 'glass border-white/10'
              }`}
            >
              <h3 className="m-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-base font-semibold text-white sm:text-lg">{it.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 border-cyan-glow/50 bg-cyan-glow/10 text-cyan-glow'
                        : 'border-white/15 text-slate-300'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
              </h3>
              {/* Answer stays in the DOM (height-animated) so it is crawlable for SEO/AEO */}
              <motion.div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-slate-300/85">{it.a}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
