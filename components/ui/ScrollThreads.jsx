'use client';

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Site-wide decorative SVG layer with VERTICAL scroll motion: glowing nodes
 * travel up/down vertical "rails" and dashed light streams flow vertically as
 * the page scrolls, plus a flowing accent thread. Fixed, pointer-events-none,
 * behind content. Fully disabled under prefers-reduced-motion.
 * GPU-friendly: only transform, opacity, strokeDashoffset, pathLength and the
 * cy attribute are animated — never layout properties.
 */
export default function ScrollThreads() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 30, mass: 0.5 });

  // Vertical dash flow along the rails (continuous vertical travel).
  const dashShift = useTransform(p, [0, 1], [0, -520]);
  // Glowing nodes travelling vertically with scroll (cy in viewBox units).
  const nodeDown = useTransform(p, [0, 1], [40, 1000]);
  const nodeUp = useTransform(p, [0, 1], [1000, 40]);
  const nodeMid = useTransform(p, [0, 1], [220, 900]);
  // A flowing diagonal accent thread for richness.
  const draw = p;
  const drift = useTransform(p, [0, 1], ['-3%', '4%']);
  const pulse = useTransform(p, [0, 0.5, 1], [0.4, 0.8, 0.5]);

  if (reduce) return null;

  const rails = [
    { x: 210, node: nodeDown, grad: 'vw-rail-a' },
    { x: 720, node: nodeMid, grad: 'vw-rail-b' },
    { x: 1230, node: nodeUp, grad: 'vw-rail-a' },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="vw-rail-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22e0ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#22e0ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1f5fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="vw-rail-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2e7bff" stopOpacity="0" />
            <stop offset="50%" stopColor="#4f9dff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22e0ff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="vw-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22e0ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22e0ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Vertical rails with downward-flowing dashes + travelling glow nodes */}
        {rails.map((r, i) => (
          <g key={i}>
            <line
              x1={r.x} y1="-40" x2={r.x} y2="1064"
              stroke={`url(#${r.grad})`} strokeWidth="1" strokeOpacity="0.3"
            />
            <motion.line
              x1={r.x} y1="-40" x2={r.x} y2="1064"
              stroke={`url(#${r.grad})`} strokeWidth="1.6"
              strokeDasharray="24 260"
              style={{ strokeDashoffset: dashShift }}
            />
            <motion.circle cx={r.x} r="28" fill="url(#vw-node)" cy={r.node} />
            <motion.circle cx={r.x} r="3.2" fill="#bff4ff" cy={r.node} />
          </g>
        ))}

        {/* Flowing diagonal accent thread */}
        <motion.g style={{ y: drift, opacity: pulse }}>
          <motion.path
            d="M-60,320 C320,200 560,440 900,320 S1300,240 1520,400"
            stroke="url(#vw-rail-b)" strokeWidth="1.4" strokeLinecap="round"
            style={{ pathLength: draw }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
