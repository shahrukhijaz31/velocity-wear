'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Vectorized "VELOCITY WEAR" wordmark.
 * - Filled base text is always visible (electric gradient + theme-aware
 *   currentColor for "WEAR"), so the logo reads correctly in light and dark.
 * - A stroke-only overlay "draws in" on view via animated strokeDashoffset —
 *   a true vector stroke draw-in (disabled under prefers-reduced-motion).
 */
export default function LogoMark({ className = 'h-16' }) {
  const reduce = useReducedMotion();

  const textProps = {
    fontFamily: 'var(--font-anton), Impact, sans-serif',
    fontWeight: 400,
    letterSpacing: '1.5',
  };

  const drawTransition = { duration: 1.6, ease: [0.22, 1, 0.36, 1] };

  return (
    <svg
      viewBox="0 0 340 156"
      role="img"
      aria-label="Velocity Wear"
      className={`${className} w-auto select-none drop-shadow-[0_0_14px_rgba(34,224,255,0.22)]`}
    >
      <defs>
        <linearGradient id="vw-wordmark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22e0ff" />
          <stop offset="55%" stopColor="#2e7bff" />
          <stop offset="100%" stopColor="#1f5fff" />
        </linearGradient>
      </defs>

      {/* Filled base — always visible, theme-aware */}
      <g className="text-white" {...textProps}>
        <text x="6" y="66" fontSize="62" fill="url(#vw-wordmark)">VELOCITY</text>
        <text x="8" y="140" fontSize="62" fill="currentColor">WEAR</text>
      </g>

      {/* Stroke draw-in overlay */}
      {!reduce && (
        <g fill="none" stroke="#22e0ff" strokeWidth="1.1" {...textProps}>
          <motion.text
            x="6" y="66" fontSize="62"
            strokeDasharray="900"
            initial={{ strokeDashoffset: 900, opacity: 0.9 }}
            whileInView={{ strokeDashoffset: 0, opacity: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={drawTransition}
          >
            VELOCITY
          </motion.text>
          <motion.text
            x="8" y="140" fontSize="62"
            strokeDasharray="540"
            initial={{ strokeDashoffset: 540, opacity: 0.9 }}
            whileInView={{ strokeDashoffset: 0, opacity: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ...drawTransition, delay: 0.15 }}
          >
            WEAR
          </motion.text>
        </g>
      )}
    </svg>
  );
}
