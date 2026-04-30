'use client';

import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';

export default function CTA() {
  const { t } = useLang();
  return (
    <section id="contact" className="px-4 lg:px-10 py-16 lg:py-24">
      <ScrollReveal>
        <div
          className="relative rounded-[30px] lg:rounded-[50px] py-24 px-6 sm:py-28 lg:py-36 lg:px-16 text-center overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at 25% 25%, rgba(205, 133, 63, 0.65), transparent 60%),' +
              'radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.6), transparent 60%),' +
              'linear-gradient(135deg, #A0522D 0%, #8B4513 50%, #3E2723 100%)',
          }}
        >
          <div className="liquid-surface-strong relative max-w-2xl mx-auto rounded-[28px] lg:rounded-[36px] py-14 px-8 lg:py-16 lg:px-12">
            <div className="relative z-[3]">
              <h2 className="text-[clamp(32px,5.5vw,64px)] text-brand-deep mb-6">
                {t.cta.ready}
                <br />
                <span className="italic-accent">{t.cta.ready_accent}</span>
              </h2>
              <p className="text-muted max-w-[480px] mx-auto mb-10 text-[16px]">
                {t.cta.description}
              </p>
              <a
                href="#booking"
                className="cta-glow inline-flex items-center gap-2 px-8 py-[18px] rounded-full text-[15px] font-medium text-cream whitespace-nowrap transition-all hover:-translate-y-0.5"
              >
                {t.cta.book_now}
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
