'use client';

import { motion } from 'framer-motion';
import { useTilt } from './useTilt';

/**
 * Pointer-driven 3D tilt wrapper built on the shared useTilt hook.
 * Transform-only (rotateX/rotateY/scale); disabled under prefers-reduced-motion.
 */
export default function TiltCard({ children, className = '', max = 9, scale = 1.02, as = 'div' }) {
  const { ref, onMouseMove, onMouseLeave, style, reduce } = useTilt(max);
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      className={`will-change-transform [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </MotionTag>
  );
}
