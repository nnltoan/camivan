'use client';

/* FloatingPetals — Motion B
 * 16 SVG petals that drift up across the hero. GPU-only transforms.
 * Auto-disabled on prefers-reduced-motion.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

const PETAL_COLORS = ['#CD853F', '#F5EBDC', '#A0522D', '#D2691E'];

interface PetalProps {
  color?: string;
}

function PetalSvg({ color = '#CD853F' }: PetalProps) {
  return (
    <svg viewBox="0 0 24 32" fill={color} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 0 C 18 8, 24 16, 12 32 C 0 16, 6 8, 12 0 Z" opacity="0.7" />
    </svg>
  );
}

interface Props {
  count?: number;
}

export default function FloatingPetals({ count = 16 }: Props) {
  const reduce = useReducedMotion();

  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100,
      duration: 14 + Math.random() * 11,
      delay: Math.random() * 10,
      size: 16 + Math.random() * 16,
      color: PETAL_COLORS[i % PETAL_COLORS.length],
      rotation: Math.random() * 360,
      driftA: (Math.random() - 0.5) * 200,
      driftB: (Math.random() - 0.5) * 100,
      spinDir: Math.random() > 0.5 ? 1 : -1,
    }));
  }, [count]);

  if (reduce) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]" aria-hidden="true">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.startX}%`,
            top: '-5%',
            width: p.size,
            height: p.size * 1.3,
            willChange: 'transform, opacity',
          }}
          initial={{ y: 0, opacity: 0, rotate: p.rotation }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, p.driftA, p.driftB],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [p.rotation, p.rotation + 360 * p.spinDir],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <PetalSvg color={p.color} />
        </motion.div>
      ))}
    </div>
  );
}
