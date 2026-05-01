'use client';

/**
 * RevealMask — glass scrim slides off to reveal the wrapped content.
 *
 * Visual: a `liquid-surface-strong`-styled overlay sits over the child,
 * then translates horizontally out of view with a luxe ease curve.
 * Perfect for hero images, portrait reveals, before/after slabs.
 *
 * - One-shot: triggers when the wrapper enters the viewport.
 * - Direction: 'right' (default), 'left', 'up', 'down'.
 * - Honors prefers-reduced-motion (renders without scrim).
 *
 * Usage:
 *   <RevealMask direction="right">
 *     <Image src="/hero.jpg" ... />
 *   </RevealMask>
 */

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'right' | 'left' | 'up' | 'down';

interface Props {
  children: ReactNode;
  direction?: Direction;
  /** className for the wrapper (e.g., aspect-ratio + rounded). */
  className?: string;
  /** Delay before the wipe starts. Default 0.1s. */
  delay?: number;
  /** Wipe duration. Default 1.0s for a luxe feel. */
  duration?: number;
}

const offMap: Record<Direction, { x?: string; y?: string }> = {
  right: { x: '101%' },
  left:  { x: '-101%' },
  down:  { y: '101%' },
  up:    { y: '-101%' },
};

export default function RevealMask({
  children,
  direction = 'right',
  className = '',
  delay = 0.1,
  duration = 1.0,
}: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={`relative overflow-hidden ${className}`}>{children}</div>;
  }

  const off = offMap[direction];
  const scrimVariants: Variants = {
    hidden: { x: 0, y: 0 },
    show: { ...off, transition: { delay, duration, ease: [0.7, 0, 0.3, 1] } },
  };

  return (
    <motion.div
      className={`relative overflow-hidden isolate ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
      <motion.div
        variants={scrimVariants}
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none liquid-surface-strong"
        style={{ borderRadius: 'inherit' }}
      />
    </motion.div>
  );
}
