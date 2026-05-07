'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';
import { haptic } from '../lib/haptic';

export default function FAQ() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-20 lg:px-20 lg:py-28">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="liquid-surface inline-block px-5 py-2 rounded-full text-sm font-medium mb-4 text-brand-deep"
          >
            <span className="relative z-[3]">{t.faq.label}</span>
          </motion.span>
          <h2 className="text-[clamp(32px,5vw,56px)] mb-4">
            {t.faq.title} <span className="italic-accent">{t.faq.title_accent}</span>
          </h2>
          <p className="text-muted text-[17px]">{t.faq.description}</p>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {t.faq.items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="liquid-surface rounded-2xl overflow-hidden">
              <button
                onClick={() => { haptic('subtle'); setOpen(open === i ? null : i); }}
                className="relative z-[3] w-full text-left px-4 py-4 lg:px-6 lg:py-5 flex justify-between items-center gap-3 lg:gap-4 min-h-[60px] lg:min-h-0"
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span className="font-fraunces text-base lg:text-xl text-brand-deep">{item.q}</span>
                <span
                  className={`shrink-0 inline-flex items-center justify-center w-11 h-11 lg:w-9 lg:h-9 rounded-full text-lg transition-all border ${
                    open === i
                      ? 'bg-brand text-cream border-brand rotate-45'
                      : 'bg-white/40 dark:bg-white/5 text-brand-deep border-white/40 dark:border-white/10'
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-[3] overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted leading-relaxed border-t border-white/30 dark:border-white/10 pt-4">
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
