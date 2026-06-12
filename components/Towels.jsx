'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight, MessageCircle, Check, Loader2, CheckCircle2, Send,
  Mail, Instagram, MapPin,
} from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import Counter from './ui/Counter';
import Icon from './Icon';
import TowelMockup from './TowelMockup';
import {
  BRAND, TOWEL, TOWEL_USES, TOWEL_SIZES, TOWEL_SPECS, TOWEL_WHY,
  TOWEL_BRANDING, TOWEL_TIERS, TOWEL_TYPES, TOWEL_SIZE_OPTIONS,
} from '@/lib/site';

/* ============================== HERO ============================== */

function FloatCard({ mx, my, depth, className, children }) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={`pointer-events-none absolute ${className}`}>
      {children}
    </motion.div>
  );
}

export function TowelHero() {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set(((e.clientX - r.left) / r.width - 0.5) * 36);
    rawY.set(((e.clientY - r.top) / r.height - 0.5) * 36);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[92svh] w-full items-center overflow-hidden pt-32 sm:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[12%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-electric-600/20 blur-[130px]" />
        <div className="absolute right-[10%] top-[40%] h-72 w-72 rounded-full bg-cyan-glow/15 blur-[110px]" />
      </div>

      {/* floating towels */}
      <FloatCard mx={mx} my={my} depth={1.5} className="left-[4%] top-[20%] hidden w-40 xl:block">
        <div className="glass animate-float rounded-3xl p-3 shadow-glow" style={{ animationDelay: '0.2s' }}>
          <TowelMockup kind="folded" accent="#22e0ff" className="h-40 w-full" />
          <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-widest text-electric">Gym</p>
        </div>
      </FloatCard>
      <FloatCard mx={mx} my={my} depth={2.1} className="right-[5%] top-[16%] hidden w-40 lg:block">
        <div className="glass animate-float rounded-3xl p-3 shadow-glow" style={{ animationDelay: '1s' }}>
          <TowelMockup kind="rolled" accent="#4f9dff" className="h-40 w-full" />
          <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-widest text-electric">Hotel</p>
        </div>
      </FloatCard>
      <FloatCard mx={mx} my={my} depth={1.7} className="bottom-[8%] right-[10%] hidden w-44 xl:block">
        <div className="glass animate-float rounded-3xl p-3 shadow-glow" style={{ animationDelay: '0.6s' }}>
          <TowelMockup kind="stack" accent="#2e7bff" className="h-44 w-full" />
          <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-widest text-electric">Spa</p>
        </div>
      </FloatCard>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="chip mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-glow" />
          Wholesale Towels
          <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
          <span className="hidden text-electric sm:inline">MOQ {TOWEL.moq} pcs</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(2.4rem,7vw,5.2rem)] uppercase leading-[0.92] tracking-tight text-white"
        >
          Wholesale Towels for Gyms, Spas &amp;{' '}
          <span className="text-electric glow-text">Hotels</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-300/85 sm:text-lg"
        >
          Premium combed-cotton towels in{' '}
          <span className="font-semibold text-white">small, medium &amp; large</span> — custom
          embroidered with your brand. Hospitality-grade quality with bulk pricing from just{' '}
          <span className="font-semibold text-white">{TOWEL.moq} pieces</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#quote" className="btn-electric group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-bold sm:w-auto">
            Get a Bulk Quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#sizes" className="btn-ghost inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold text-white sm:w-auto">
            View Sizes
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-400"
        >
          {['400–700 GSM', 'Custom Embroidery', 'Colourfast', 'Worldwide Delivery'].map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================ USE CASES ============================ */

export function TowelUseCases() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Built For"
        title="Towels Tuned to"
        highlight="Your Space"
        subtitle="One supplier for the gym floor, the spa suite and the hotel bathroom — each engineered for how it's actually used."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {TOWEL_USES.map((u, i) => (
          <motion.article
            key={u.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-glow/40"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: `${u.accent}33` }} />
            <div className="relative">
              <div className="relative mb-5 h-44 w-full overflow-hidden rounded-2xl border border-white/5" style={{ background: `radial-gradient(circle at 50% 35%, ${u.accent}1f, transparent 70%)` }}>
                <TowelMockup kind={u.key === 'gym' ? 'folded' : u.key === 'spa' ? 'stack' : 'rolled'} accent={u.accent} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-glow">
                  <Icon name={u.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold text-white">{u.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{u.desc}</p>
              <ul className="mt-4 space-y-2">
                {u.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="h-4 w-4 shrink-0 text-cyan-glow" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ============================== SIZES ============================== */

const REL = { Small: '46%', Medium: '72%', Large: '100%' };

export function TowelSizes() {
  return (
    <section id="sizes" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Size Guide"
        title="Small, Medium"
        highlight="& Large"
        subtitle="Three stock sizes that cover every touchpoint — plus fully custom dimensions on request."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {TOWEL_SIZES.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl glass-strong p-6 transition-all duration-300 hover:-translate-y-1.5"
            style={{ boxShadow: `0 24px 70px -34px ${s.accent}88` }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/4 h-56 w-56 -translate-x-1/2 rounded-full opacity-40 blur-[80px]" style={{ background: s.accent }} />
            <div className="relative flex items-center justify-between">
              <span className="font-display text-2xl uppercase text-white">{s.name}</span>
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-cyan-glow">{s.tag}</span>
            </div>

            <div className="relative mx-auto my-3 h-44 w-full">
              <TowelMockup kind={s.kind} accent={s.accent} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* relative size bar */}
            <div className="relative mb-5 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full rounded-full bg-electric-gradient shadow-glow" style={{ width: REL[s.name] }} />
            </div>

            <dl className="relative grid grid-cols-2 gap-3 text-sm">
              <SizeStat label="Dimensions" value={`${s.dims}`} sub={s.dimsIn} />
              <SizeStat label="Weight (GSM)" value={s.gsm} sub={s.weight} />
            </dl>
            <p className="relative mt-4 flex items-start gap-2 text-sm text-slate-400">
              <Icon name="ruler" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-glow" />
              <span><span className="text-slate-300">Best for:</span> {s.use}</span>
            </p>

            <a href="#quote" className="btn-ghost relative mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-5 py-3 text-sm font-semibold text-white">
              Quote this size <ArrowRight className="h-4 w-4 text-cyan-glow" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* spec table */}
      <Reveal>
        <div className="mt-10 overflow-hidden rounded-2xl glass">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                  <th className="px-5 py-4 font-semibold">Size</th>
                  <th className="px-5 py-4 font-semibold">Dimensions (cm)</th>
                  <th className="px-5 py-4 font-semibold">Dimensions (in)</th>
                  <th className="px-5 py-4 font-semibold">GSM</th>
                  <th className="px-5 py-4 font-semibold">Weight</th>
                  <th className="px-5 py-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {TOWEL_SIZES.map((s) => (
                  <tr key={s.name} className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.03]">
                    <td className="px-5 py-4 font-bold text-white">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.accent }} />
                        {s.name}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-300">{s.dims}</td>
                    <td className="px-5 py-4 text-slate-300">{s.dimsIn}</td>
                    <td className="px-5 py-4 text-cyan-glow">{s.gsm}</td>
                    <td className="px-5 py-4 text-slate-300">{s.weight}</td>
                    <td className="px-5 py-4 text-slate-400">{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SizeStat({ label, value, sub }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="text-[10px] uppercase tracking-wider text-slate-500">{label}</div>
      <div className="font-bold text-white">{value}</div>
      <div className="text-xs text-slate-400">{sub}</div>
    </div>
  );
}

/* ============================== SPECS ============================== */

export function TowelSpecs() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Why Velocity Towels"
        title="Quality You Can"
        highlight="Feel & Measure"
        subtitle="Spec-sheet substance behind every order — the difference between a towel and a towel people remember."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {TOWEL_SPECS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="rounded-2xl glass p-6 text-center"
          >
            <div className="font-display text-4xl text-white sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TOWEL_WHY.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            className="group rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-glow/30"
          >
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-glow transition-transform duration-300 group-hover:scale-110">
              <Icon name={w.icon} className="h-6 w-6" />
            </span>
            <h3 className="text-base font-bold text-white">{w.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{w.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================ BRANDING ============================ */

export function TowelBranding() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Make It Yours"
        title="Custom Branding,"
        highlight="Woven In"
        subtitle="Turn a commodity towel into a branded experience your members and guests notice."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOWEL_BRANDING.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            className="group flex items-start gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:border-cyan-glow/30"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-glow transition-transform duration-300 group-hover:scale-110">
              <Icon name={b.icon} className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-base font-bold text-white">{b.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================== TIERS ============================== */

export function TowelTiers() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <SectionHeading
        eyebrow="Wholesale Pricing"
        title="The More You Order,"
        highlight="The More You Save"
        subtitle="Transparent tiered pricing built for procurement teams. Final quote tailored to size, GSM and branding."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {TOWEL_TIERS.map((t, i) => {
          const featured = i === 1;
          return (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-3xl p-7 text-center transition-all duration-300 hover:-translate-y-1 ${
                featured ? 'glass-strong border-cyan-glow/40 shadow-glow md:-mt-3 md:pb-10' : 'glass'
              }`}
            >
              {featured && (
                <span className="absolute right-4 top-4 rounded-full bg-electric-gradient px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-900">
                  Popular
                </span>
              )}
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow">{t.label}</div>
              <div className="mt-3 font-display text-4xl text-white sm:text-5xl">{t.range}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">pieces / design</div>
              <div className="my-6 h-px bg-white/10" />
              <div className="text-lg font-bold text-white">{t.discount}</div>
              <a href="#quote" className={`mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-5 py-3 text-sm font-bold ${featured ? 'btn-electric' : 'btn-ghost text-white'}`}>
                Request Pricing <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* =============================== CTA =============================== */

export function TowelCTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-24"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(31,95,255,0.18),rgba(34,224,255,0.08)_45%,rgba(8,12,24,0.4))]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[120%] -translate-x-1/2 rounded-full bg-cyan-glow/20 blur-[120px]" />
        <span className="chip mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyan-glow" />
          Stock Up With Confidence
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2rem,5.5vw,4rem)] uppercase leading-[0.95] tracking-tight text-white">
          Ready to Stock Premium <span className="text-electric glow-text">Custom Towels?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-slate-300/85 sm:text-lg">
          Tell us your size, GSM and quantity — get a tailored wholesale quote within hours.
          Minimum order just {TOWEL.moq} pieces.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#quote" className="btn-electric group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-bold sm:w-auto">
            Request a Quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white sm:w-auto">
            <MessageCircle className="h-5 w-5 text-cyan-glow" /> WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================== QUOTE ============================== */

const EMPTY = { name: '', email: '', phone: '', company: '', towelType: '', size: '', gsm: '', quantity: '', message: '' };

const selectStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322e0ff' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
};

export function TowelQuote() {
  const [v, setV] = useState(EMPTY);
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('idle');

  const set = (k, val) => {
    setV((s) => ({ ...s, [k]: val }));
    if (err[k]) setErr((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!v.name.trim()) e.name = 'Please enter your name';
    if (!v.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email';
    if (!v.towelType) e.towelType = 'Select a towel type';
    if (v.quantity && Number(v.quantity) < TOWEL.moq) e.quantity = `Minimum order is ${TOWEL.moq} pieces`;
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErr(e);
    if (Object.keys(e).length) {
      document.querySelector(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1400);
  };

  const base =
    'w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-glow/70 focus:ring-2 focus:ring-cyan-glow/20';

  return (
    <section id="quote" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Request Your"
        highlight="Towel Quote"
        subtitle="Share your spec and we'll come back with pricing, samples options and lead times — fast."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] glass-strong p-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-electric-600/20 blur-[90px]" />
          <div className="relative">
            <h3 className="font-display text-2xl uppercase text-white">Talk towels with us</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">Gyms, spas, hotels & distributors welcome. Samples available on request.</p>
            <ul className="mt-8 space-y-4">
              <Row icon={Mail} label="Email" value={BRAND.email} href={`mailto:${BRAND.email}`} />
              <Row icon={MessageCircle} label="WhatsApp" value={BRAND.whatsapp} href={BRAND.whatsappLink} />
              <Row icon={Instagram} label="Instagram" value="@velocitywear.brand" href={BRAND.instagram} />
              <Row icon={MapPin} label="Delivery" value="Nationwide & Worldwide" />
            </ul>
          </div>
          <div className="relative mt-8 rounded-2xl border border-cyan-glow/20 bg-cyan-glow/5 p-4">
            <div className="font-display text-3xl text-white">MOQ {TOWEL.moq}</div>
            <p className="text-xs text-slate-400">Pieces per design — scale into the thousands.</p>
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-10"
        >
          {status === 'success' ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-electric-gradient text-ink-900 shadow-glow"
              >
                <CheckCircle2 className="h-10 w-10" />
              </motion.div>
              <h3 className="mt-6 font-display text-3xl uppercase text-white">Quote Requested</h3>
              <p className="mt-3 max-w-sm text-slate-400">
                Thanks, {v.name.split(' ')[0] || 'there'}! We'll send your tailored towel quote within a few hours.
              </p>
              <button onClick={() => { setV(EMPTY); setStatus('idle'); }} className="btn-ghost mt-7 rounded-xl px-6 py-3 text-sm font-semibold text-white">
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="name" label="Full Name" required value={v.name} err={err.name} onChange={set} base={base} autoComplete="name" placeholder="Jordan Reyes" />
                <Field name="email" label="Email" type="email" required value={v.email} err={err.email} onChange={set} base={base} autoComplete="email" placeholder="you@brand.com" />
                <Field name="phone" label="Phone" type="tel" value={v.phone} err={err.phone} onChange={set} base={base} autoComplete="tel" placeholder="+1 555 010 2025" />
                <Field name="company" label="Company / Venue" value={v.company} err={err.company} onChange={set} base={base} autoComplete="organization" placeholder="Gym, spa or hotel" />

                <div>
                  <Label htmlFor="towelType" required>Towel Type</Label>
                  <select id="towelType" name="towelType" value={v.towelType} onChange={(e) => set('towelType', e.target.value)} aria-invalid={!!err.towelType} style={selectStyle} className={`${base} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat ${err.towelType ? 'border-red-400/60' : 'border-white/10'}`}>
                    <option value="" disabled className="bg-ink-700">Select a type…</option>
                    {TOWEL_TYPES.map((t) => <option key={t} value={t} className="bg-ink-700">{t}</option>)}
                  </select>
                  <Err msg={err.towelType} />
                </div>

                <div>
                  <Label htmlFor="size">Size</Label>
                  <select id="size" name="size" value={v.size} onChange={(e) => set('size', e.target.value)} style={selectStyle} className={`${base} appearance-none border-white/10 bg-[length:12px] bg-[right_1rem_center] bg-no-repeat`}>
                    <option value="" disabled className="bg-ink-700">Select a size…</option>
                    {TOWEL_SIZE_OPTIONS.map((s) => <option key={s} value={s} className="bg-ink-700">{s}</option>)}
                  </select>
                </div>

                <Field name="gsm" label="Preferred GSM" value={v.gsm} err={err.gsm} onChange={set} base={base} placeholder="e.g. 550 GSM" />

                <div>
                  <Label htmlFor="quantity">Quantity (MOQ {TOWEL.moq})</Label>
                  <input id="quantity" name="quantity" type="number" min={TOWEL.moq} inputMode="numeric" value={v.quantity} onChange={(e) => set('quantity', e.target.value)} placeholder={`${TOWEL.moq}+`} aria-invalid={!!err.quantity} className={`${base} ${err.quantity ? 'border-red-400/60' : 'border-white/10'}`} />
                  <Err msg={err.quantity} />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="message">Project Details</Label>
                  <textarea id="message" name="message" rows={4} value={v.message} onChange={(e) => set('message', e.target.value)} placeholder="Branding, colours, deadlines, sample needs…" className={`${base} resize-none border-white/10`} />
                </div>
              </div>

              <button type="submit" disabled={status === 'loading'} className="btn-electric mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-bold disabled:opacity-70">
                {status === 'loading' ? (<><Loader2 className="h-5 w-5 animate-spin" /> Sending…</>) : (<>Get My Towel Quote <Send className="h-4 w-4" /></>)}
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">No spam, ever. We only use your details to prepare your quote.</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Label({ children, htmlFor, required }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
      {children} {required && <span className="text-cyan-glow">*</span>}
    </label>
  );
}
function Err({ msg }) {
  if (!msg) return null;
  return <p role="alert" className="mt-1.5 text-xs font-medium text-red-300">{msg}</p>;
}
function Field({ name, label, type = 'text', required, value, err, onChange, base, autoComplete, placeholder }) {
  return (
    <div>
      <Label htmlFor={name} required={required}>{label}</Label>
      <input id={name} name={name} type={type} value={value} autoComplete={autoComplete} placeholder={placeholder} onChange={(e) => onChange(name, e.target.value)} aria-invalid={!!err} className={`${base} ${err ? 'border-red-400/60' : 'border-white/10'}`} />
      <Err msg={err} />
    </div>
  );
}
function Row({ icon: Ic, label, value, href }) {
  const inner = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-glow"><Ic className="h-5 w-5" /></span>
      <span className="min-w-0">
        <span className="block text-[11px] uppercase tracking-wider text-slate-500">{label}</span>
        <span className="block truncate text-sm font-medium text-white">{value}</span>
      </span>
    </>
  );
  return href ? (
    <li><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl p-1 transition-colors hover:bg-white/5">{inner}</a></li>
  ) : (
    <li className="flex items-center gap-3 p-1">{inner}</li>
  );
}
