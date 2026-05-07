'use client';

/**
 * CursorSpotlight — soft radial light that follows the cursor inside a
 * container. Mounted as a position:absolute layer; parent must be
 * position:relative + overflow:hidden.
 *
 * - Desktop only (touch devices: returns null).
 * - Throttled with requestAnimationFrame so even rapid moves stay 60fps.
 * - Honors prefers-reduced-motion (returns null).
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <CursorSpotlight />
 *     ...content...
 *   </section>
 */

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Props {
  /** Radius of the spotlight in px. Default 250. */
  size?: number;
  /** Color of the glow center. Default warm rose. */
  color?: string;
  /** Opacity of the spotlight. Default 0.18. */
  opacity?: number;
}

export default function CursorSpotlight({
  size = 250,
  color = 'rgba(205, 133, 63, 1)',
  opacity = 0.18,
}: Props) {
  const reduce = useReducedMotion();
  const [isTouch, setIsTouch] = useState(true); // assume touch until proven otherwise
  const ref = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    // Detect non-touch device once (matches pointer:fine media query)
    if (typeof window !== 'undefined' && window.matchMedia) {
      setIsTouch(!window.matchMedia('(pointer: fine)').matches);
    }
  }, []);

  useEffect(() => {
    if (reduce || isTouch) return;
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const update = (e: MouseEvent) => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const r = parent.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
        ticking.current = false;
      });
    };
    const enter = () => { el.style.opacity = '1'; };
    const leave = () => { el.style.opacity = '0'; };

    parent.addEventListener('mousemove', update);
    parent.addEventListener('mouseenter', enter);
    parent.addEventListener('mouseleave', leave);
    return () => {
      parent.removeEventListener('mousemove', update);
      parent.removeEventListener('mouseenter', enter);
      parent.removeEventListener('mouseleave', leave);
    };
  }, [reduce, isTouch]);

  if (reduce || isTouch) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 z-0"
      style={{
        background: `radial-gradient(circle ${size}px at var(--mx, 50%) var(--my, 50%), ${color} 0%, transparent 70%)`,
        opacity,
        mixBlendMode: 'overlay',
      }}
    />
  );
}
