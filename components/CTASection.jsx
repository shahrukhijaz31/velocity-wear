'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/site';

export default function CTASection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-24"
      >
        {/* layered glow bg */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(31,95,255,0.18),rgba(34,224,255,0.08)_45%,rgba(8,12,24,0.4))]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[120%] -translate-x-1/2 rounded-full bg-cyan-glow/20 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, #000, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, #000, transparent)',
          }}
        />

        <span className="chip mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyan-glow" />
          Let’s Build Your Brand
        </span>

        <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[0.95] tracking-tight text-white">
          Ready to Create Custom Apparel <span className="text-electric glow-text">for Your Brand?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base text-slate-300/85 sm:text-lg">
          Get a free, no-obligation quote in hours. Minimum order just {BRAND.moq} pieces —
          premium quality, fast turnaround, nationwide delivery.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="btn-electric group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-bold sm:w-auto"
          >
            Request a Quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white sm:w-auto"
          >
            <MessageCircle className="h-5 w-5 text-cyan-glow" />
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
