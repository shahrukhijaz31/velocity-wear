'use client';

import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="chip mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-glow" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}{' '}
          {highlight && <span className="text-electric glow-text">{highlight}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/80 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
