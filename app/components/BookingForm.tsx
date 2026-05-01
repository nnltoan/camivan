'use client';

import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';
import BookingFormBody from './BookingFormBody';

export default function BookingForm() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  return (
    <section id="booking" className="px-5 py-20 lg:px-20 lg:py-28">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.span
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
              className="liquid-surface inline-block px-5 py-2 rounded-full text-sm font-medium mb-4 text-brand-deep"
            >
              <span className="relative z-[3]">{t.booking.label}</span>
            </motion.span>
            <h2 className="text-[clamp(32px,5vw,56px)] mb-4">
              {t.booking.title} <span className="italic-accent">{t.booking.title_accent}</span>
            </h2>
            <p className="text-muted text-[17px] max-w-xl mx-auto">{t.booking.description}</p>
            <p className="text-xs text-muted mt-3 italic">{t.booking.note}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="liquid-surface-strong rounded-3xl p-6 lg:p-10">
            <div className="relative z-[3]">
              <BookingFormBody />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
