'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Scroll parallax wrapper: translates its children as the element passes through
 * the viewport, creating depth. Spring-smoothed and transform-only.
 * `speed` is the px travel range (positive drifts up on scroll). Disabled under
 * prefers-reduced-motion.
 */
export default function Parallax({ children, speed = 40, axis = 'y', className = '' }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const raw = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [speed, -speed]);
  const value = useSpring(raw, { stiffness: 90, damping: 30, mass: 0.3 });
  const style = axis === 'x' ? { x: value } : { y: value };

  return (
    <motion.div ref={ref} style={reduce ? undefined : style} className={className}>
      {children}
    </motion.div>
  );
}
