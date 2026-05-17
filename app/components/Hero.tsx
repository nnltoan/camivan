'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import FloatingPetals from './FloatingPetals';
import MagneticButton from './MagneticButton';
import CursorSpotlight from './CursorSpotlight';
import { useLang } from './LangProvider';

// Hero video playlist — cycles process-reel → video2 → video3 → loop.
const HERO_VIDEOS = ['/process-reel.mp4', '/video2.mp4', '/video3.mp4'] as const;

/* Hero — orchestrated entrance:
 *  - Badge scales in (A.5)
 *  - Title appears line-by-line with cinematic 150ms cascade (A.2)
 *  - Description fades up
 *  - CTA row slides up + primary CTA is magnetic (B.4)
 *  - Cursor spotlight tracks the mouse on desktop (B.2)
 */

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoIdx, setVideoIdx] = useState(0);

  // When the current clip ends, advance to the next one in the playlist (loops).
  // We use onEnded instead of `loop` attribute so each clip plays through once,
  // then we move to the next source. autoPlay+muted+playsInline keeps mobile happy.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    const play = v.play();
    if (play && typeof play.catch === 'function') play.catch(() => { /* ignore autoplay blocks */ });
  }, [videoIdx]);

  // Per-line title reveal — tuned for premium cinematic feel.
  const lineVariants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const lineTransition = (delay: number) => ({ duration: 0.7, delay, ease });

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-5 pt-28 pb-12 sm:px-8 lg:px-20 lg:pt-36 lg:pb-16 min-h-screen overflow-hidden">
      <FloatingPetals />
      <CursorSpotlight />

      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-50 blur-3xl pointer-events-none max-md:hidden" style={{ background: 'radial-gradient(circle, #CD853F 0%, transparent 70%)' }} aria-hidden="true" />
      <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none max-md:hidden" style={{ background: 'radial-gradient(circle, #F5EBDC 0%, transparent 70%)' }} aria-hidden="true" />

      <div className="relative z-10">
        {/* A.5 — Badge scale-in spring */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
          className="liquid-surface inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[13px] text-brand-deep mb-8 font-medium"
        >
          <span className="relative z-[3] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-brand dot-pulse" />
            {t.hero.badge}
          </span>
        </motion.div>

        {/* A.2 — Hero title per-line cascade
            Each line uses an outer SPAN (overflow-hidden, clips slide-up)
            with leading-[1.15] + pb-1 so Vietnamese descenders/diacritics
            (g, p, ệ, ợ, ụ) are NOT clipped at the bottom edge. */}
        <h1 className="text-[clamp(40px,11vw,60px)] lg:text-[clamp(52px,6.5vw,96px)] mb-6 leading-[1.05]">
          <span className="block overflow-hidden leading-[1.15] pb-1">
            <motion.span className="block" variants={lineVariants} initial="hidden" animate="show" transition={lineTransition(0.25)}>
              {t.hero.title_line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden leading-[1.15] pb-1">
            <motion.span className="block italic-accent" variants={lineVariants} initial="hidden" animate="show" transition={lineTransition(0.4)}>
              {t.hero.title_accent}
            </motion.span>
          </span>
          <span className="block overflow-hidden leading-[1.15] pb-1">
            <motion.span className="block" variants={lineVariants} initial="hidden" animate="show" transition={lineTransition(0.55)}>
              {t.hero.title_line2}
            </motion.span>
          </span>
        </h1>

        <ScrollReveal delay={0.2}>
          <p className="text-base lg:text-lg text-muted mb-9 max-w-md">{t.hero.description}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex gap-3 lg:gap-4 items-center flex-wrap">
            {/* B.4 — Primary CTA is magnetic on desktop */}
            <MagneticButton strength={0.25}>
              <a href="#booking" className="cta-glow px-8 py-[18px] rounded-full text-[15px] font-medium text-cream inline-flex items-center gap-2 whitespace-nowrap transition-all hover:-translate-y-0.5">
                {t.hero.cta_book}
              </a>
            </MagneticButton>
            <a href="#gallery" className="liquid-surface px-6 py-[18px] rounded-full text-[15px] font-medium inline-flex items-center gap-2 whitespace-nowrap text-brand-deep hover:-translate-y-0.5 transition-transform">
              <span className="relative z-[3]">{t.hero.cta_view}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2} className="relative z-10">
        {/* Hero video panel */}
        <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden shadow-glass-lg bg-nude">
          <video
            ref={videoRef}
            key={HERO_VIDEOS[videoIdx]}
            autoPlay
            muted
            playsInline
            preload="auto"
            poster="/client-3.jpg"
            onEnded={() => setVideoIdx((i) => (i + 1) % HERO_VIDEOS.length)}
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="CAMI VAN process video"
          >
            <source src={HERO_VIDEOS[videoIdx]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(62,39,35,0.2) 100%)' }} aria-hidden="true" />
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 text-[11px] font-semibold text-cream drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 dot-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            LIVE
          </div>
        </div>

        <div className="liquid-surface absolute top-[10%] -left-10 rounded-[22px] px-5 py-4 z-20 float-bob max-md:hidden">
          <span className="relative z-[3] flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-rose to-rose-deep grid place-items-center text-cream text-xl glow-icon">✦</div>
            <div>
              <div className="font-semibold text-sm whitespace-nowrap text-brand-deep">{t.hero.stat_clients}</div>
              <div className="text-xs text-muted whitespace-nowrap">{t.hero.stat_years}</div>
            </div>
          </span>
        </div>
        <div className="liquid-surface absolute bottom-[15%] -right-10 rounded-[22px] px-5 py-4 z-20 float-bob-delay max-md:hidden">
          <span className="relative z-[3] flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-rose to-rose-deep grid place-items-center text-cream text-xl glow-icon">★</div>
            <div>
              <div className="font-semibold text-sm whitespace-nowrap text-brand-deep">{t.hero.stat_rating}</div>
              <div className="text-xs text-muted whitespace-nowrap">{t.hero.stat_reviews}</div>
            </div>
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
