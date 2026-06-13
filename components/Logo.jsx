'use client';

import { motion, useReducedMotion } from 'framer-motion';

// Official Velocity Wear logo (sourced from velocity-wear.com).
// The artwork is a self-contained wordmark, so no extra text is rendered.
// `reveal` plays a one-time left-to-right wipe (clip-path) when in view —
// a "draw-in" effect for the raster wordmark. Disabled under reduced-motion.
export default function Logo({ className = 'h-11', priority = false, reveal = false }) {
  const reduce = useReducedMotion();

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/velocity-logo.png"
      alt="Velocity Wear"
      width={500}
      height={486}
      draggable={false}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={`site-logo ${className} w-auto select-none`}
    />
  );

  if (!reveal || reduce) return img;

  return (
    <motion.span
      className="inline-block"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {img}
    </motion.span>
  );
}
