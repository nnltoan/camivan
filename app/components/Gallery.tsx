'use client';

/**
 * Gallery — Bento layout (2 large + 6 small) on lg, 2-col on sm.
 * Click any tile → opens Lightbox with prev/next/swipe/keyboard.
 *
 * Styling adopts the Warm Liquid Glass design system:
 *   - liquid-surface for the section label chip and filter chips (idle)
 *   - cta-glow-sm for the active filter chip
 *   - shadow-glass-sm + glass border for tiles (subtle warm-tinted depth)
 * Honors dark mode via the global theme tokens.
 *
 * Filter chips remain — when active, the layout collapses to a uniform grid
 * (bento math doesn't fill 4×4 cells for arbitrary subset counts).
 */

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';
import { WARM_BLUR } from '../lib/blurDataUrl';
import Lightbox, { LightboxImage } from './Lightbox';
import { haptic } from '../lib/haptic';

interface GalleryItem {
  src: string;
  category: 'brow' | 'lip' | 'eye' | 'lash' | 'nail';
  /** Tailwind grid span classes for the bento layout (only honored on lg+ when filter is 'all') */
  bento: string;
  caption?: string;
}

// 8 items, 4-col x 4-row grid (16 cells). 1x(2x2) + 1x(2x2) + 6x(1x1) = 16.
const ITEMS: GalleryItem[] = [
  { src: '/client-3.jpg',  category: 'brow', bento: 'lg:col-span-2 lg:row-span-2', caption: 'Microblading' },
  { src: '/PMU-lip.jpg',   category: 'lip',  bento: 'lg:col-span-1 lg:row-span-1', caption: 'Lip Blush' },
  { src: '/noi-mi.jpg',    category: 'lash', bento: 'lg:col-span-1 lg:row-span-1', caption: 'Lash' },
  { src: '/client-2.jpg',  category: 'brow', bento: 'lg:col-span-1 lg:row-span-1' },
  { src: '/nail.jpg',      category: 'nail', bento: 'lg:col-span-1 lg:row-span-1', caption: 'Nail Art' },
  { src: '/client-3.jpg',  category: 'eye',  bento: 'lg:col-span-2 lg:row-span-2', caption: 'PMU Eyeliner' },
  { src: '/noi-mi.jpg',    category: 'lash', bento: 'lg:col-span-1 lg:row-span-1' },
  { src: '/PMU-lip.jpg',   category: 'lip',  bento: 'lg:col-span-1 lg:row-span-1' },
];

export default function Gallery() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const [filter, setFilter] = useState<string>('all');
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const FILTERS = [
    { value: 'all',  label: t.gallery.filter_all,  icon: '✨' },
    { value: 'brow', label: t.gallery.filter_brow, icon: '✿' },
    { value: 'lip',  label: t.gallery.filter_lip,  icon: '♡' },
    { value: 'eye',  label: t.gallery.filter_eye,  icon: '★' },
    { value: 'lash', label: t.gallery.filter_lash, icon: '✦' },
    { value: 'nail', label: t.gallery.filter_nail, icon: '❀' },
  ];

  const filtered = filter === 'all' ? ITEMS : ITEMS.filter((it) => it.category === filter);
  const isBento = filter === 'all';

  const lbImages: LightboxImage[] = useMemo(
    () => filtered.map((it) => ({ src: it.src, alt: it.caption ?? '', caption: it.caption })),
    [filtered]
  );

  const openLb = (i: number) => { haptic('subtle'); setLbIndex(i); };

  return (
    <section id="gallery" className="px-5 py-20 sm:px-8 lg:px-20 lg:py-30">
      <ScrollReveal>
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="liquid-surface inline-block px-5 py-2 rounded-full text-[13px] font-medium mb-5 text-brand-deep">
            <span className="relative z-[3]">{t.gallery.label}</span>
          </span>
          <h2 className="text-[clamp(40px,5vw,68px)] mb-5">
            {t.gallery.title} <span className="italic-accent">{t.gallery.title_accent}</span>
          </h2>
          <p className="text-muted text-[17px]">{t.gallery.description}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-12 max-w-3xl mx-auto">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => { haptic('subtle'); setFilter(f.value); }}
              className={`px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                filter === f.value
                  ? 'cta-glow-sm text-cream'
                  : 'liquid-surface text-brand-deep hover:-translate-y-0.5'
              }`}
            >
              <span className={filter === f.value ? '' : 'relative z-[3]'}>
                <span className="mr-1.5">{f.icon}</span>{f.label}
              </span>
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Bento grid (filter=all) — fixed 4×4 cells on lg, 2-col on sm.
          When a filter is active, fall back to a uniform 3-col grid. */}
      <motion.div
        layout={!reduce}
        className={`max-w-[1400px] mx-auto grid gap-3 lg:gap-4 ${
          isBento
            ? 'grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 lg:auto-rows-[180px]'
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.button
              type="button"
              key={`${item.src}-${i}-${filter}`}
              layout={!reduce}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLb(i)}
              aria-label={`${t.ui_v2.lb_viewer} - ${item.caption ?? item.category}`}
              className={`group relative overflow-hidden rounded-[24px] cursor-pointer shadow-glass-sm border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-transparent
                ${isBento ? `${item.bento} aspect-square lg:aspect-auto` : 'aspect-[3/4]'}
              `}
            >
              <Image
                src={item.src}
                alt={item.caption ?? ''}
                fill
                sizes={isBento ? '(max-width:1024px) 50vw, 25vw' : '(max-width:768px) 50vw, 25vw'}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder="blur"
                blurDataURL={WARM_BLUR}
              />
              {item.caption && (
                <span className="absolute left-3 bottom-3 text-[11px] tracking-wider uppercase font-semibold liquid-surface text-brand-deep px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="relative z-[3]">{item.caption}</span>
                </span>
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {lbIndex !== null && (
        <Lightbox
          images={lbImages}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onNavigate={setLbIndex}
        />
      )}
    </section>
  );
}
