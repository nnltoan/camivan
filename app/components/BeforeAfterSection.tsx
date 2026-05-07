'use client';

/**
 * BeforeAfterSection — full-width section that wraps BeforeAfter with service
 * tabs so visitors can browse 6 PMU service comparisons.
 *
 * Stock images live under /public/before-after/{slug}-before|after.webp
 * (1200×1500 portrait or 1200×1200 square, WebP q80, ~50–340KB each).
 */

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BeforeAfter from './BeforeAfter';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';
import { haptic } from '../lib/haptic';

interface PairConfig {
  service: string;
  /** label key into t.brands so the tab follows the active language */
  labelKey: 'microblading' | 'lip' | 'eyeliner' | 'lash' | 'skin';
  before: string;
  after: string;
  ratio: string;
}

const PAIRS: PairConfig[] = [
  { service: 'microblading', labelKey: 'microblading', before: '/before-after/microblading-before.webp', after: '/before-after/microblading-after.webp', ratio: '4/5' },
  { service: 'lip-blush',    labelKey: 'lip',          before: '/before-after/lip-blush-before.webp',    after: '/before-after/lip-blush-after.webp',    ratio: '4/5' },
  { service: 'eyeliner',     labelKey: 'eyeliner',     before: '/before-after/eyeliner-before.webp',     after: '/before-after/eyeliner-after.webp',     ratio: '4/5' },
  { service: 'noi-mi',       labelKey: 'lash',         before: '/before-after/noi-mi-before.webp',       after: '/before-after/noi-mi-after.webp',       ratio: '4/5' },
  { service: 'cham-soc-da',  labelKey: 'skin',         before: '/before-after/cham-soc-da-before.webp',  after: '/before-after/cham-soc-da-after.webp',  ratio: '4/5' },
];

export default function BeforeAfterSection() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = PAIRS[activeIndex];
  const activeLabel = t.brands[active.labelKey];

  return (
    <section
      id="before-after"
      className="px-5 py-20 sm:px-8 lg:px-20 lg:py-28"
    >
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="liquid-surface inline-block px-5 py-2 rounded-full text-[13px] font-medium mb-5 text-brand-deep"
          >
            <span className="relative z-[3]">{t.ui_v2.ba_label}</span>
          </motion.span>
          <h2 className="text-[clamp(32px,5vw,56px)] mb-4">
            {t.ui_v2.ba_title} <span className="italic-accent">{t.ui_v2.ba_title_accent}</span>
          </h2>
          <p className="text-muted text-[16px]">{t.ui_v2.ba_description}</p>
        </div>
      </ScrollReveal>

      {/* Service tabs — horizontal scroll on mobile, centered on desktop */}
      <ScrollReveal delay={0.1}>
        <div
          className="flex gap-2 lg:gap-3 overflow-x-auto pt-2 pb-3 mb-8 max-w-5xl mx-auto lg:justify-center scrollbar-thin"
          role="tablist"
          aria-label={t.ui_v2.ba_label}
        >
          {PAIRS.map((p, i) => {
            const label = t.brands[p.labelKey];
            const isActive = i === activeIndex;
            return (
              <button
                key={p.service}
                role="tab"
                aria-selected={isActive}
                aria-controls={`ba-panel-${p.service}`}
                id={`ba-tab-${p.service}`}
                onClick={() => { haptic('subtle'); setActiveIndex(i); }}
                className={`shrink-0 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'cta-glow-sm text-cream'
                    : 'liquid-surface text-brand-deep hover:-translate-y-0.5'
                }`}
              >
                <span className={isActive ? '' : 'relative z-[3]'}>{label}</span>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Slider — keyed by activeIndex so it remounts (resets to 50%) when service changes */}
      <div
        id={`ba-panel-${active.service}`}
        role="tabpanel"
        aria-labelledby={`ba-tab-${active.service}`}
        className="max-w-2xl mx-auto"
      >
        <ScrollReveal key={activeIndex}>
          <BeforeAfter
            beforeSrc={active.before}
            afterSrc={active.after}
            beforeAlt={`${activeLabel} — ${t.ui_v2.ba_before}`}
            afterAlt={`${activeLabel} — ${t.ui_v2.ba_after}`}
            beforeLabel={t.ui_v2.ba_before}
            afterLabel={t.ui_v2.ba_after}
            aspectRatio={active.ratio}
            ariaLabel={`${activeLabel} ${t.ui_v2.ba_drag_hint}`}
            priority={activeIndex === 0}
          />
        </ScrollReveal>

        <p className="text-xs lg:text-sm text-muted text-center mt-4 italic px-2">
          {t.ui_v2.ba_demo_note}
        </p>
      </div>
    </section>
  );
}
