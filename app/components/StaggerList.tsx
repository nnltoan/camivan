'use client';

/**
 * StaggerList — wraps children so each one cascades in with a small delay.
 * Children become motion.div siblings with shared variants.
 *
 * Usage:
 *   <StaggerList>
 *     <Card />
 *     <Card />
 *     <Card />
 *   </StaggerList>
 *
 * - Each child fades + slides up sequentially (default 80ms apart).
 * - Honors prefers-reduced-motion (renders without animation).
 * - First fires when the WRAPPER enters viewport (single IntersectionObserver
 *   trigger, more efficient than per-item ScrollReveal).
 */

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Children, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** Delay between each child in seconds. Default 0.08 (80ms). */
  staggerDelay?: number;
  /** Initial delay before the first child. Default 0.05 (50ms). */
  startDelay?: number;
  /** Vertical offset in px. Default 24. */
  y?: number;
  /** className applied to the wrapper. */
  className?: string;
  /** Viewport intersection threshold. Default 0.15. */
  amount?: number;
}

export default function StaggerList({
  children,
  staggerDelay = 0.08,
  startDelay = 0.05,
  y = 24,
  className = '',
  amount = 0.15,
}: Props) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: staggerDelay, delayChildren: startDelay } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
    >
      {Children.map(children, (child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
