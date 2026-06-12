'use client';

import { MotionConfig } from 'framer-motion';

// Respect the user's reduced-motion preference across all Framer animations.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
