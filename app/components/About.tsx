'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';
import { WARM_BLUR } from '../lib/blurDataUrl';

export default function About() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const FEATURES = [
    { icon: 'check', title: t.about.cert_title, desc: t.about.cert_desc },
    { icon: 'check', title: t.about.equip_title, desc: t.about.equip_desc },
    { icon: 'check', title: t.about.ink_title, desc: t.about.ink_desc },
    { icon: 'check', title: t.about.warranty_title, desc: t.about.warranty_desc },
  ];

  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-20 lg:py-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-glass-lg">
              <Image
                src="/cami-van-photo.jpg"
                alt="Cẩm Vân — Founder"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={WARM_BLUR}
              />
            </div>
            <div
              className="absolute inset-5 -z-10 rounded-[40px] bg-gradient-to-br from-rose to-nude translate-x-5 translate-y-5"
              aria-hidden="true"
            />
            <div className="liquid-surface-strong absolute -bottom-8 -right-4 lg:-right-12 w-40 h-32 lg:w-56 lg:h-44 rounded-3xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 max-md:hidden p-1">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <Image
                  src="/show-room.jpg"
                  alt="CAMI VAN studio space"
                  fill
                  sizes="(max-width:1024px) 30vw, 220px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={WARM_BLUR}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="liquid-surface inline-block px-5 py-2 rounded-full text-[13px] font-medium mb-5 text-brand-deep"
          >
            <span className="relative z-[3]">{t.about.label}</span>
          </motion.span>
          <h2 className="text-[clamp(40px,5vw,64px)] leading-tight mb-6">
            {t.about.title}<br />
            <span className="italic-accent">{t.about.title_accent}</span>
          </h2>
          <p className="text-muted mb-5 text-[16px] leading-relaxed">{t.about.greeting}</p>
          <p className="text-muted mb-5 text-[16px] leading-relaxed">{t.about.intro_p1}</p>
          <p className="text-muted mb-8 text-[16px] leading-relaxed">{t.about.intro_p2}</p>

          <div className="grid grid-cols-2 gap-5 mt-8">
            {FEATURES.map((f, i) => (
              <div key={i} className="liquid-surface p-5 rounded-[20px]">
                <div className="relative z-[3]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose to-rose-deep grid place-items-center mb-3 text-xl text-cream glow-icon">✓</div>
                  <div className="font-semibold mb-1 text-brand-deep">{f.title}</div>
                  <div className="text-xs text-muted">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/30 dark:border-white/10">
            <div className="text-xs uppercase tracking-wider text-muted">— {t.about.signature_role}</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
