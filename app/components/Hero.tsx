'use client';

import ScrollReveal from './ScrollReveal';
import FloatingPetals from './FloatingPetals';
import { useLang } from './LangProvider';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-5 pt-28 pb-12 sm:px-8 lg:px-20 lg:pt-36 lg:pb-16 min-h-screen overflow-hidden">
      <FloatingPetals />

      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-50 blur-3xl pointer-events-none max-md:hidden" style={{ background: 'radial-gradient(circle, #CD853F 0%, transparent 70%)' }} aria-hidden="true" />
      <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none max-md:hidden" style={{ background: 'radial-gradient(circle, #F5EBDC 0%, transparent 70%)' }} aria-hidden="true" />

      <div className="relative z-10">
        <ScrollReveal>
          <div className="liquid-surface inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[13px] text-brand-deep mb-8 font-medium">
            <span className="relative z-[3] flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-brand dot-pulse" />
              {t.hero.badge}
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-[clamp(40px,11vw,60px)] lg:text-[clamp(52px,6.5vw,96px)] mb-6">
            {t.hero.title_line1}<br />
            <span className="italic-accent">{t.hero.title_accent}</span><br />
            {t.hero.title_line2}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-base lg:text-lg text-muted mb-9 max-w-md">{t.hero.description}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex gap-4 items-center flex-wrap">
            <a href="#booking" className="cta-glow px-8 py-[18px] rounded-full text-[15px] font-medium text-cream inline-flex items-center gap-2 whitespace-nowrap transition-all hover:-translate-y-0.5">
              {t.hero.cta_book}
            </a>
            <a href="#gallery" className="liquid-surface px-6 py-[18px] rounded-full text-[15px] font-medium inline-flex items-center gap-2 whitespace-nowrap text-brand-deep hover:-translate-y-0.5 transition-transform">
              <span className="relative z-[3]">{t.hero.cta_view}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2} className="relative z-10">
        <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden shadow-glass-lg bg-nude">
          <video autoPlay muted loop playsInline preload="auto" poster="/client-3.jpg" className="absolute inset-0 w-full h-full object-cover" aria-label="CAMI VAN process video">
            <source src="/process-reel.mp4" type="video/mp4" />
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
