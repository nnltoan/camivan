'use client';

/**
 * Lightbox modal — fullscreen image viewer with prev/next, keyboard nav, swipe.
 * - Focus trap, body scroll lock, restores focus on close.
 * - Touch swipe (≥50px) navigates, ESC closes, ←/→ navigate.
 * - Caller passes `images[]` and the index of the clicked image.
 */

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { haptic } from '../lib/haptic';
import { WARM_BLUR } from '../lib/blurDataUrl';
import { useLang } from './LangProvider';

export interface LightboxImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface Props {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: Props) {
  const { t } = useLang();
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const len = images.length;
  const safeIndex = ((index % len) + len) % len;
  const current = images[safeIndex];

  const next = useCallback(() => {
    haptic('subtle');
    onNavigate((safeIndex + 1) % len);
  }, [onNavigate, safeIndex, len]);

  const prev = useCallback(() => {
    haptic('subtle');
    onNavigate((safeIndex - 1 + len) % len);
  }, [onNavigate, safeIndex, len]);

  // Keyboard handlers + focus trap + body scroll lock
  useEffect(() => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      else if (e.key === 'Tab') {
        // simple focus trap: cycle through dialog's focusable buttons
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      lastFocusedRef.current?.focus?.();
    };
  }, [next, prev, onClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(diff) < 50) return;
    diff > 0 ? prev() : next();
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.ui_v2.lb_viewer}
      tabIndex={-1}
      className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex items-center justify-center outline-none"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t.ui_v2.lb_close}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center text-xl backdrop-blur transition-colors"
      >
        ✕
      </button>

      {len > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label={t.ui_v2.lb_prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center text-2xl backdrop-blur transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label={t.ui_v2.lb_next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center text-2xl backdrop-blur transition-colors"
          >
            ›
          </button>
        </>
      )}

      <div className="relative w-full h-full max-w-5xl max-h-[88vh] mx-4 my-4">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt ?? ''}
          fill
          sizes="100vw"
          className="object-contain"
          placeholder="blur"
          blurDataURL={WARM_BLUR}
          priority
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 backdrop-blur px-4 py-2 rounded-full">
        <span className="tabular-nums">{safeIndex + 1} / {len}</span>
        {current.caption && <span className="ml-3 opacity-80">{current.caption}</span>}
      </div>
    </div>
  );
}
