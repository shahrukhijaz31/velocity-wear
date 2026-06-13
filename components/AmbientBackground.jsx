'use client';

import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';

// Client-only (no SSR) so the WebGL canvas never runs on the server.
const AmbientScene = dynamic(() => import('./AmbientScene'), { ssr: false });

/**
 * Site-wide ambient 3D background — a single flowing wave mesh behind all
 * content for premium depth. Fixed, pointer-events-none, low opacity (the glass
 * sections frost it further). Skipped entirely under prefers-reduced-motion.
 */
export default function AmbientBackground() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-[1] opacity-[0.6]" aria-hidden>
      <AmbientScene />
    </div>
  );
}
