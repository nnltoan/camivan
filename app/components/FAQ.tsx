'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-20 lg:px-20 lg:py-28">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-nude text-brand px-5 py-2 rounded-full text-sm font-medium mb-4">
            {t.faq.label}
          </span>
          <h2 className="text-[clamp(32px,5vw,56px)] mb-4">
            {t.faq.title} <span className="italic-accent">{t.faq.title_accent}</span>
          </h2>
          <p className="text-muted text-[17px]">
            {t.faq.description}
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {t.faq.items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="bg-cream border border-nude rounded-2xl overflow-hidden hover:border-rose transition-colors">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                aria-expanded={open === i}
              >
                <span className="font-fraunces text-lg lg:text-xl text-brand-deep">{item.q}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full bg-nude grid place-items-center text-brand transition-transform ${
                    open === i ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted leading-relaxed border-t border-nude pt-4">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
