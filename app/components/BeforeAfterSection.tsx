'use client';

/**
 * BeforeAfterSection — full-width section that wraps BeforeAfter with service
 * tabs so visitors can browse 6 PMU service comparisons.
 *
 * Stock images live under /public/before-after/{slug}-before|after.jpg
 * (1200×1500 portrait or 1200×1200 square, JPEG q≤85, ≤350KB each).
 */

import { useState } from 'react';
import BeforeAfter from './BeforeAfter';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';
import { haptic } from '../lib/haptic';

interface PairConfig {
  service: string;
  /** label key into t.brands so the tab follows the active language */
  labelKey: 'microblading' | 'lip' | 'eyeliner' | 'lash' | 'nail' | 'skin';
  before: string;
  after: string;
  ratio: string;
}

const PAIRS: PairConfig[] = [
  { service: 'microblading', labelKey: 'microblading', before: '/before-after/microblading-before.jpg', after: '/before-after/microblading-after.jpg', ratio: '4/5' },
  { service: 'lip-blush',    labelKey: 'lip',          before: '/before-after/lip-blush-before.jpg',    after: '/before-after/lip-blush-after.jpg',    ratio: '4/5' },
  { service: 'eyeliner',     labelKey: 'eyeliner',     before: '/before-after/eyeliner-before.jpg',     after: '/before-after/eyeliner-after.jpg',     ratio: '4/5' },
  { service: 'noi-mi',       labelKey: 'lash',         before: '/before-after/noi-mi-before.jpg',       after: '/before-after/noi-mi-after.jpg',       ratio: '4/5' },
  { service: 'nail-art',     labelKey: 'nail',         before: '/before-after/nail-art-before.jpg',     after: '/before-after/nail-art-after.jpg',     ratio: '1/1' },
  { service: 'cham-soc-da',  labelKey: 'skin',         before: '/before-after/cham-soc-da-before.jpg',  after: '/before-after/cham-soc-da-after.jpg',  ratio: '4/5' },
];

export default function BeforeAfterSection() {
  const { t } = useLang();
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
          <span className="inline-block bg-nude text-brand px-5 py-2 rounded-full text-[13px] font-medium mb-5">
            {t.ui_v2.ba_label}
          </span>
          <h2 className="text-[clamp(32px,5vw,56px)] mb-4">
            {t.ui_v2.ba_title} <span className="italic-accent">{t.ui_v2.ba_title_accent}</span>
          </h2>
          <p className="text-muted text-[16px]">{t.ui_v2.ba_description}</p>
        </div>
      </ScrollReveal>

      {/* Service tabs — horizontal scroll on mobile, centered on desktop */}
      <ScrollReveal delay={0.1}>
        <div
          className="flex gap-2 lg:gap-3 overflow-x-auto pb-3 mb-8 max-w-5xl mx-auto lg:justify-center scrollbar-thin"
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
                className={`shrink-0 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-sm font-medium border transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-brand text-cream border-brand shadow-btn'
                    : 'bg-cream text-brand-deep border-nude hover:border-rose hover:-translate-y-0.5'
                }`}
              >
                {label}
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
          />
        </ScrollReveal>

        <p className="text-xs lg:text-sm text-muted text-center mt-4 italic px-2">
          {t.ui_v2.ba_demo_note}
        </p>
      </div>
    </section>
  );
}
