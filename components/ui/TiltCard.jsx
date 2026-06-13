'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Pointer-driven 3D tilt wrapper. Rotates on a perspective as the cursor moves
 * across it, with spring smoothing. Transform-only (rotateX/rotateY/scale), so
 * it stays GPU-cheap and never causes layout shift. Disabled under
 * prefers-reduced-motion, where it renders a plain element.
 */
export default function TiltCard({
  children,
  className = '',
  max = 9,
  scale = 1.02,
  as = 'div',
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });

  const MotionTag = motion[as] || motion.div;

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ry.set(x * max * 2);
    rx.set(-y * max * 2);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      className={`will-change-transform [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </MotionTag>
  );
}
