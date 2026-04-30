'use client';

/**
 * BeforeAfter — drag-to-reveal comparison slider.
 * - Pointer Events (mouse + touch + pen) with setPointerCapture so the drag
 *   continues even when the cursor leaves the element.
 * - Click anywhere on the image jumps the handle to that x-position.
 * - Keyboard: ←/→ adjust by 5%, Home/End jump to 0/100, with proper ARIA roles.
 */

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { WARM_BLUR } from '../lib/blurDataUrl';

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** CSS aspect-ratio string e.g. '4/5', '1/1', '16/9'. */
  aspectRatio?: string;
  /** ARIA label for the slider thumb. */
  ariaLabel?: string;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  aspectRatio = '4/5',
  ariaLabel = 'Before / After comparison',
}: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPos(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); setPos((p) => Math.max(0, p - 5)); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); setPos((p) => Math.min(100, p + 5)); }
    else if (e.key === 'Home') { e.preventDefault(); setPos(0); }
    else if (e.key === 'End') { e.preventDefault(); setPos(100); }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-3xl select-none cursor-ew-resize touch-none shadow-soft-xl"
      style={{ aspectRatio }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* AFTER (full width, background) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(max-width:768px) 100vw, 700px"
        className="object-cover pointer-events-none"
        placeholder="blur"
        blurDataURL={WARM_BLUR}
      />

      {/* BEFORE (clipped to the left of the handle) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width:768px) 100vw, 700px"
          className="object-cover"
          placeholder="blur"
          blurDataURL={WARM_BLUR}
        />
      </div>

      {/* Labels — small badges, non-interactive */}
      <span className="absolute top-4 left-4 bg-black/55 text-white text-[11px] font-semibold tracking-widest px-3 py-1.5 rounded-full pointer-events-none backdrop-blur">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 bg-brand text-cream text-[11px] font-semibold tracking-widest px-3 py-1.5 rounded-full pointer-events-none">
        {afterLabel}
      </span>

      {/* Divider line — follows the handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        aria-hidden="true"
      />

      {/* Handle — keyboard-focusable slider thumb */}
      <div
        role="slider"
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-soft-lg grid place-items-center text-brand text-xl ring-1 ring-brand/30 outline-none focus:ring-2 focus:ring-brand"
        style={{ left: `${pos}%` }}
      >
        ⇆
      </div>
    </div>
  );
}
