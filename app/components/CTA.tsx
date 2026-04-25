'use client';

import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';

export default function CTA() {
  const { t } = useLang();
  return (
    <section id="contact" className="px-4 lg:px-10 py-16 lg:py-24">
      <ScrollReveal>
        <div
          className="rounded-[30px] lg:rounded-[50px] py-24 px-6 sm:py-28 lg:py-36 lg:px-16 text-center"
          style={{ background: 'linear-gradient(135deg, #CD853F 0%, #F5EBDC 100%)' }}
        >
          <h2 className="text-[clamp(32px,5.5vw,72px)] text-brand-deep mb-6">
            {t.cta.ready}
            <br />
            <span className="italic-accent">{t.cta.ready_accent}</span>
          </h2>
          <p className="text-brand max-w-[560px] mx-auto mb-10 text-[17px]">
            {t.cta.description}
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-brand text-cream px-8 py-[18px] rounded-full text-[15px] font-medium hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-btn transition-all whitespace-nowrap"
          >
            {t.cta.book_now}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
