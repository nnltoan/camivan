'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';

const ITEMS = [
  { src: '/client-3.jpg', category: 'brow' },
  { src: '/PMU-lip.jpg', category: 'lip' },
  { src: '/noi-mi.jpg', category: 'lash' },
  { src: '/client-2.jpg', category: 'brow' },
  { src: '/nail.jpg', category: 'nail' },
  { src: '/client-3.jpg', category: 'eye' },
  { src: '/noi-mi.jpg', category: 'lash' },
  { src: '/PMU-lip.jpg', category: 'lip' },
] as const;

export default function Gallery() {
  const reduce = useReducedMotion();
  const { t } = useLang();
  const [filter, setFilter] = useState<string>('all');

  const FILTERS = [
    { value: 'all', label: t.gallery.filter_all, icon: '✨' },
    { value: 'brow', label: t.gallery.filter_brow, icon: '✿' },
    { value: 'lip', label: t.gallery.filter_lip, icon: '♡' },
    { value: 'eye', label: t.gallery.filter_eye, icon: '★' },
    { value: 'lash', label: t.gallery.filter_lash, icon: '✦' },
    { value: 'nail', label: t.gallery.filter_nail, icon: '❀' },
  ];

  const filtered = filter === 'all' ? ITEMS : ITEMS.filter((it) => it.category === filter);

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
              onClick={() => setFilter(f.value)}
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

      <motion.div layout={!reduce} className="columns-2 md:columns-3 lg:columns-4 gap-3 lg:gap-5 max-w-[1400px] mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={`${item.src}-${i}`}
              layout={!reduce}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid mb-3 lg:mb-5 rounded-[24px] overflow-hidden hover:scale-[1.02] transition-transform shadow-glass-sm border border-white/30 dark:border-white/10"
            >
              <Image src={item.src} alt="" width={600} height={800} sizes="(max-width:768px) 50vw, 25vw" className="w-full h-auto block" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
