'use client';

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Site-wide decorative SVG layer whose electric "threads" draw, drift and pulse
 * as the page scrolls. Fixed, pointer-events-none and behind content.
 * Fully disabled under prefers-reduced-motion (accessibility-critical).
 * GPU-friendly: only transform (y), opacity and SVG pathLength are animated.
 */
export default function ScrollThreads() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 30, mass: 0.5 });

  const draw = p; // 0 → 1 as you scroll down
  const drawReverse = useTransform(p, (v) => 1 - v);
  const y1 = useTransform(p, [0, 1], ['-4%', '5%']);
  const y2 = useTransform(p, [0, 1], ['4%', '-6%']);
  const pulse = useTransform(p, [0, 0.5, 1], [0.45, 0.85, 0.55]);

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="vw-thread-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22e0ff" stopOpacity="0" />
            <stop offset="45%" stopColor="#22e0ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1f5fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="vw-thread-b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2e7bff" stopOpacity="0" />
            <stop offset="50%" stopColor="#4f9dff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22e0ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.g style={{ y: y1, opacity: pulse }}>
          <motion.path
            d="M-60,190 C300,60 520,360 820,240 S1200,110 1520,300"
            stroke="url(#vw-thread-a)"
            strokeWidth="1.6"
            strokeLinecap="round"
            style={{ pathLength: draw }}
          />
        </motion.g>

        <motion.g style={{ y: y2, opacity: pulse }}>
          <motion.path
            d="M-60,770 C260,640 600,910 900,720 S1300,640 1520,830"
            stroke="url(#vw-thread-b)"
            strokeWidth="1.6"
            strokeLinecap="round"
            style={{ pathLength: drawReverse }}
          />
        </motion.g>

        <motion.g style={{ y: y1 }}>
          <motion.path
            d="M-60,500 C320,390 560,580 880,480 S1240,400 1520,540"
            stroke="url(#vw-thread-a)"
            strokeWidth="1"
            strokeOpacity="0.5"
            strokeLinecap="round"
            style={{ pathLength: draw }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
