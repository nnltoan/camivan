'use client';

/**
 * Gallery — masonry layout (CSS columns) on lg, 2-col on sm.
 * Click any tile → opens Lightbox with prev/next/swipe/keyboard.
 *
 * Why masonry instead of bento:
 *   The Cami Van portfolio mixes portrait (3:4) and square images. Bento
 *   grids force each cell to a fixed aspect (landscape on large hero cells),
 *   which crops faces severely. CSS columns preserve each image's natural
 *   aspect ratio so faces/details aren't lost.
 *
 * Styling adopts the Warm Liquid Glass design system:
 *   - liquid-surface for the section label chip and filter chips (idle)
 *   - cta-glow-sm for the active filter chip
 *   - shadow-glass-sm + glass border for tiles (subtle warm-tinted depth)
 * Honors dark mode via the global theme tokens.
 */

import Image from 'next/image';
import { forwardRef, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';
import { WARM_BLUR } from '../lib/blurDataUrl';
import Lightbox, { LightboxImage } from './Lightbox';
import { haptic } from '../lib/haptic';

/* GalleryTile — single tile with subtle Y-axis parallax tied to scroll
 * position. Image translates ±15px as it passes through the viewport
 * for a "floating" feel. Disabled by prefers-reduced-motion. */
interface GalleryTileProps {
  item: { src: string; category: string; width: number; height: number; caption?: string };
  i: number; filter: string;
  openLb: (i: number) => void;
  lbViewerLabel: string;
}

const GalleryTile = forwardRef<HTMLButtonElement, GalleryTileProps>(function GalleryTile(
  { item, i, filter, openLb, lbViewerLabel },
  forwardedRef
) {
  const reduce = useReducedMotion();
  const localRef = useRef<HTMLButtonElement | null>(null);
  // Bridge the forwarded ref (used by Framer's AnimatePresence) and our local
  // ref (used by useScroll). Both point to the same button element.
  const setRefs = (el: HTMLButtonElement | null) => {
    localRef.current = el;
    if (typeof forwardedRef === 'function') forwardedRef(el);
    else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = el;
  };
  const { scrollYProgress } = useScroll({ target: localRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-15, 15]);

  return (
    <motion.button
      ref={setRefs}
      type="button"
      layout={!reduce}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3 }}
      onClick={() => openLb(i)}
      aria-label={`${lbViewerLabel} - ${item.caption ?? item.category}`}
      className="group relative block w-full break-inside-avoid mb-3 lg:mb-5 rounded-[24px] overflow-hidden cursor-pointer shadow-glass-sm border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-transparent"
    >
      <motion.div style={{ y }} className="will-change-transform">
        <Image
          src={item.src}
          alt={item.caption ?? ''}
          width={item.width}
          height={item.height}
          sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
          className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          blurDataURL={WARM_BLUR}
        />
      </motion.div>
      {item.caption && (
        <span className="absolute left-3 bottom-3 text-[11px] tracking-wider uppercase font-semibold liquid-surface text-brand-deep px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="relative z-[3]">{item.caption}</span>
        </span>
      )}
    </motion.button>
  );
});

interface GalleryItem {
  src: string;
  category: 'brow' | 'lip' | 'eye' | 'lash' | 'nail';
  /** Intrinsic dimensions — passed to next/image so we can render at native ratio. */
  width: number;
  height: number;
  caption?: string;
}

// Each entry uses the actual file dimensions so masonry preserves natural aspect.
const ITEMS: GalleryItem[] = [
  { src: '/client-3.jpg', category: 'brow', width: 526,  height: 701,  caption: 'Microblading' },
  { src: '/PMU-lip.jpg',  category: 'lip',  width: 1200, height: 1200, caption: 'Lip Blush' },
  { src: '/noi-mi.jpg',   category: 'lash', width: 1284, height: 1396, caption: 'Lash' },
  { src: '/client-2.jpg', category: 'brow', width: 472,  height: 590 },
  { src: '/nail.jpg',     category: 'nail', width: 1080, height: 1080, caption: 'Nail Art' },
  { src: '/client-3.jpg', category: 'eye',  width: 526,  height: 701,  caption: 'PMU Eyeliner' },
  { src: '/noi-mi.jpg',   category: 'lash', width: 1284, height: 1396 },
  { src: '/PMU-lip.jpg',  category: 'lip',  width: 1200, height: 1200 },
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

  const lbImages: LightboxImage[] = useMemo(
    () => filtered.map((it) => ({ src: it.src, alt: it.caption ?? '', caption: it.caption })),
    [filtered]
  );

  const openLb = (i: number) => { haptic('subtle'); setLbIndex(i); };

  return (
    <section id="gallery" className="px-5 py-20 sm:px-8 lg:px-20 lg:py-30">
      <ScrollReveal>
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="liquid-surface inline-block px-5 py-2 rounded-full text-[13px] font-medium mb-5 text-brand-deep"
          >
            <span className="relative z-[3]">{t.gallery.label}</span>
          </motion.span>
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

      {/* Masonry — CSS columns preserve natural image aspects. break-inside-avoid
          keeps each tile in one column. Click → Lightbox. */}
      <div className="relative columns-2 md:columns-3 lg:columns-4 gap-3 lg:gap-5 max-w-[1400px] mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <GalleryTile
              key={`${item.src}-${i}-${filter}`}
              item={item}
              i={i}
              filter={filter}
              openLb={openLb}
              lbViewerLabel={t.ui_v2.lb_viewer}
            />
          ))}
        </AnimatePresence>
      </div>

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
