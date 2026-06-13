'use client';

import { motion, useReducedMotion } from 'framer-motion';

const DIRS = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 0.3,
  as = 'div',
  depth = false,
}) {
  const reduce = useReducedMotion();
  const offset = reduce ? DIRS.none : DIRS[direction] || DIRS.up;
  const use3d = depth && !reduce;
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      style={use3d ? { transformPerspective: 1000 } : undefined}
      initial={{ opacity: 0, ...offset, ...(use3d ? { rotateX: -16, scale: 0.97 } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...(use3d ? { rotateX: 0, scale: 1 } : {}) }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
