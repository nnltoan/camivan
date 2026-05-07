'use client';

/**
 * StickyStorySection — premium vertical timeline.
 *
 * NEW DESIGN (replaces the previous duplicating layout):
 *
 *   Desktop (lg+):
 *   ┌──────────────────────┬──────────────────────────────────┐
 *   │  STICKY LEFT         │  TIMELINE RIGHT                  │
 *   │  Large counter 02/05 │   ●━━━ ① Step 1: Consultation    │
 *   │  Animated progress   │   │      Detail body...          │
 *   │  bar (smooth fill)   │   │                              │
 *   │  Decorative icon     │   ●━━━ ② Step 2: Vẽ thử (ACTIVE) │
 *   │                      │   │      Detail body... (glow)   │
 *   │                      │   │                              │
 *   │  (NO duplicate of    │   ●━━━ ③ Step 3                  │
 *   │   step text — user   │   │      Detail body...          │
 *   │   reads the timeline │   │                              │
 *   │   directly)          │   ●━━━ ④ Step 4                  │
 *   │                      │            Detail body...        │
 *   └──────────────────────┴──────────────────────────────────┘
 *
 *   Mobile (default): just the timeline column — sticky aside hidden.
 *
 * Improvements over previous version:
 *   - No duplicate step text between aside and cards.
 *   - Smooth scroll-driven progress bar (not just discrete dots).
 *   - Visual timeline connector line ties the steps together as a journey.
 *   - Active step has scale + bright glass + glowing number badge.
 *   - Honors prefers-reduced-motion.
 */

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export interface StickyStep {
  step: string;
  detail: string;
}

interface Props {
  steps: StickyStep[];
  /** Heading rendered above the counter in the sticky aside. */
  asideTitle?: ReactNode;
  /** Localized label like "Bước" / "Step" — shown in counter + cards. */
  stepLabel?: string;
}

export default function StickyStorySection({ steps, asideTitle, stepLabel = 'Step' }: Props) {
  const reduce = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Smooth progress bar driven by scroll position through the section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 60%', 'end 40%'],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // IntersectionObserver tracks which step is currently in focus.
  useEffect(() => {
    if (reduce) return;
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && e.intersectionRatio > 0.4) {
              setActiveIdx(i);
            }
          });
        },
        { threshold: [0, 0.4, 0.8], rootMargin: '-25% 0px -35% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [reduce, steps.length]);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-16 max-w-5xl mx-auto lg:items-start"
    >
      {/* ────────────── STICKY ASIDE (lg+ only) ────────────── */}
      <aside className="hidden lg:block lg:sticky lg:top-32 lg:self-start">
        <div className="liquid-surface rounded-2xl p-5">
          <div className="relative z-[3]">
            {/* Compact counter — small enough to keep aside ~160px tall so
                sticky stays visible through the entire timeline scroll. */}
            <div className="font-fraunces leading-none mb-4 flex items-baseline gap-1">
              {asideTitle && (
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-inter mr-2 self-center">
                  {asideTitle}
                </span>
              )}
              <motion.span
                key={activeIdx}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl text-brand tabular-nums inline-block"
              >
                {String(activeIdx + 1).padStart(2, '0')}
              </motion.span>
              <span className="text-xl text-muted tabular-nums">
                /{String(steps.length).padStart(2, '0')}
              </span>
            </div>

            {/* Smooth scroll-driven progress bar */}
            <div
              className="relative h-1.5 rounded-full bg-nude/60 overflow-hidden"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(((activeIdx + 1) / steps.length) * 100)}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand to-rose-deep rounded-full"
                style={{ width: progressHeight }}
              />
            </div>
          </div>
        </div>
      </aside>

      {/* ────────────── TIMELINE COLUMN ────────────── */}
      <div className="relative">
        {/* Vertical connector line — runs down the left edge of the timeline.
            On mobile: aligns with the number badges. On desktop: same. */}
        <div
          aria-hidden="true"
          className="absolute left-[19px] lg:left-[23px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-rose/40 via-nude to-rose/20 dark:from-rose/30 dark:via-white/10 dark:to-rose/20"
        />

        <ol className="flex flex-col gap-7 lg:gap-9">
          {steps.map((s, i) => {
            const isActive = i === activeIdx;
            return (
              <li
                key={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="relative pl-14 lg:pl-16"
              >
                {/* Number badge — sits ON the connector line */}
                <motion.div
                  aria-hidden="true"
                  animate={
                    reduce
                      ? {}
                      : isActive
                      ? { scale: 1.15 }
                      : { scale: 1 }
                  }
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                  className={`absolute left-0 top-1 w-10 h-10 lg:w-12 lg:h-12 rounded-full grid place-items-center font-fraunces text-base lg:text-lg text-cream shrink-0 transition-shadow duration-500 ${
                    isActive
                      ? 'bg-gradient-to-br from-brand to-rose-deep shadow-[0_0_0_4px_rgba(205,133,63,0.18),0_8px_24px_-6px_rgba(139,69,19,0.55)]'
                      : 'bg-gradient-to-br from-rose to-rose-deep/80 shadow-[0_4px_12px_-4px_rgba(139,69,19,0.35)]'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.div>

                {/* Step card */}
                <motion.div
                  animate={
                    reduce
                      ? {}
                      : isActive
                      ? { y: 0, opacity: 1 }
                      : { y: 0, opacity: 0.85 }
                  }
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`liquid-surface rounded-2xl p-5 lg:p-6 transition-all duration-500 ${
                    isActive ? 'lg:scale-[1.02] shadow-[0_18px_40px_-15px_rgba(139,69,19,0.35)]' : ''
                  }`}
                >
                  <div className="relative z-[3]">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-brand font-semibold">
                        {stepLabel} {i + 1}
                      </span>
                      <h3 className="font-fraunces text-lg lg:text-xl text-brand-deep leading-tight">
                        {s.step}
                      </h3>
                    </div>
                    <p className="text-muted text-[15px] leading-relaxed">{s.detail}</p>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
