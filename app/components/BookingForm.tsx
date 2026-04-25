'use client';

import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';
import BookingFormBody from './BookingFormBody';

export default function BookingForm() {
  const { t } = useLang();

  return (
    <section id="booking" className="px-5 py-20 lg:px-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block bg-nude text-brand px-5 py-2 rounded-full text-sm font-medium mb-4">
              {t.booking.label}
            </span>
            <h2 className="text-[clamp(32px,5vw,56px)] mb-4">
              {t.booking.title} <span className="italic-accent">{t.booking.title_accent}</span>
            </h2>
            <p className="text-muted text-[17px] max-w-xl mx-auto">{t.booking.description}</p>
            <p className="text-xs text-muted mt-3 italic">{t.booking.note}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-cream border border-nude rounded-3xl p-6 lg:p-10 shadow-soft-md">
            <BookingFormBody />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
