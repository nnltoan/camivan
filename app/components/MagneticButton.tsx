'use client';

/**
 * MagneticButton — wrapped child gently follows the cursor on hover.
 *
 * - Desktop only (touch devices: child renders as-is, no transform).
 * - Strength tunable; default 0.3 means the child moves 30% of the
 *   distance from its center to the cursor.
 * - Snaps back smoothly on mouseleave.
 * - Honors prefers-reduced-motion (renders without follow).
 *
 * Usage:
 *   <MagneticButton>
 *     <a className="cta-glow ...">Đặt lịch</a>
 *   </MagneticButton>
 */

import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
  /** Pull factor (0–1). Default 0.3. */
  strength?: number;
  /** Wrapper className. */
  className?: string;
}

export default function MagneticButton({
  children,
  strength = 0.3,
  className = 'inline-block',
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Springs make the follow feel organic and the snap-back smooth.
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  if (reduce) return <div className={className}>{children}</div>;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
