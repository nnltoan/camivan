'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';

export default function About() {
  const { t } = useLang();

  const FEATURES = [
    { icon: '✓', title: t.about.cert_title, desc: t.about.cert_desc },
    { icon: '✓', title: t.about.equip_title, desc: t.about.equip_desc },
    { icon: '✓', title: t.about.ink_title, desc: t.about.ink_desc },
    { icon: '✓', title: t.about.warranty_title, desc: t.about.warranty_desc },
  ];

  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-20 lg:py-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="relative">
            {/* Main portrait */}
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden">
              <Image
                src="/cami-van-photo.jpg"
                alt="Cẩm Vân — Founder"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute inset-5 -z-10 rounded-[40px] bg-gradient-to-br from-rose to-nude translate-x-5 translate-y-5"
              aria-hidden="true"
            />

            {/* Floating studio space thumbnail */}
            <div className="absolute -bottom-8 -right-4 lg:-right-12 w-40 h-32 lg:w-56 lg:h-44 rounded-3xl overflow-hidden shadow-soft-xl border-4 border-cream rotate-3 hover:rotate-0 transition-transform duration-500 max-md:hidden">
              <Image
                src="/show-room.jpg"
                alt="CAMI VAN studio space"
                fill
                sizes="(max-width:1024px) 30vw, 220px"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <span className="inline-block bg-nude text-brand px-5 py-2 rounded-full text-[13px] font-medium mb-5">{t.about.label}</span>
          <h2 className="text-[clamp(40px,5vw,64px)] leading-tight mb-6">
            {t.about.title}<br />
            <span className="italic-accent">{t.about.title_accent}</span>
          </h2>
          <p className="text-muted mb-5 text-[16px] leading-relaxed">{t.about.greeting}</p>
          <p className="text-muted mb-5 text-[16px] leading-relaxed">{t.about.intro_p1}</p>
          <p className="text-muted mb-8 text-[16px] leading-relaxed">{t.about.intro_p2}</p>

          <div className="grid grid-cols-2 gap-5 mt-8">
            {FEATURES.map((f, i) => (
              <div key={i} className="p-5 bg-nude rounded-[20px]">
                <div className="w-10 h-10 rounded-full bg-cream grid place-items-center mb-3 text-xl">{f.icon}</div>
                <div className="font-semibold mb-1">{f.title}</div>
                <div className="text-xs text-muted">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-nude">
            <div className="text-xs uppercase tracking-wider text-muted">— {t.about.signature_role}</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
