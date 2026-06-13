'use client';

import { useRef } from 'react';
import { useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Pointer-driven 3D tilt logic shared by TiltCard and section cards.
 * Returns spring-smoothed rotateX/rotateY MotionValues plus handlers.
 * Transform-only; under prefers-reduced-motion the style is omitted and the
 * handlers no-op, so the element renders flat.
 */
export function useTilt(max = 8) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 190, damping: 18 });
  const sry = useSpring(ry, { stiffness: 190, damping: 18 });

  const onMouseMove = (e) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ry.set(x * max * 2);
    rx.set(-y * max * 2);
  };

  const onMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const style = reduce ? undefined : { rotateX: srx, rotateY: sry, transformPerspective: 1000 };

  return { ref, onMouseMove, onMouseLeave, style, reduce };
}
