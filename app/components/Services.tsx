'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import ServiceIcon from './ServiceIcon';
import { useLang } from './LangProvider';

// Top-level "from" prices. VI gets the discounted PMU prices (-1tr) per the menu spec;
// EN and other languages display the international (undiscounted) price.
// Lash/Brow/Plasma/Spa giá giống nhau giữa 2 ngôn ngữ.
const SERVICE_KEYS = [
  { key: 'microblading', slug: 'microblading', icon: '✿', priceVI: '2.800.000đ', priceEN: '3.800.000đ' },
  { key: 'lip',          slug: 'lip-blush',    icon: '♡', priceVI: '4.000.000đ', priceEN: '5.000.000đ' },
  { key: 'eyeliner',     slug: 'eyeliner',     icon: '★', priceVI: '2.500.000đ', priceEN: '3.500.000đ' },
  { key: 'mens',         slug: 'mens-pmu',     icon: '♂', priceVI: '4.500.000đ', priceEN: '5.500.000đ' },
  { key: 'lash',         slug: 'noi-mi',       icon: '✦', priceVI: '199.000đ',   priceEN: '199.000đ' },
  { key: 'skin',         slug: 'cham-soc-da',  icon: '❁', priceVI: '99.000đ',    priceEN: '99.000đ' },
] as const;

export default function Services() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();

  return (
    <section id="services" className="px-5 py-20 sm:px-8 lg:px-20 lg:py-30">
      <ScrollReveal>
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="liquid-surface inline-block px-5 py-2 rounded-full text-[13px] font-medium mb-5 text-brand-deep"
          >
            <span className="relative z-[3]">{t.services_section.label}</span>
          </motion.span>
          <h2 className="text-[clamp(40px,5vw,68px)] mb-5">
            {t.services_section.title}<br />
            <span className="italic-accent">{t.services_section.title_accent}</span>
          </h2>
          <p className="text-muted text-[17px]">{t.services_section.description}</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
        {SERVICE_KEYS.map((s, i) => {
          const data = t.services[s.key as keyof typeof t.services] as { name: string; subtitle: string; desc: string };
          return (
            <ScrollReveal key={s.key} delay={i * 0.05} className="h-full">
              <Link
                href={`/services/${s.slug}`}
                className="liquid-surface block group rounded-[30px] p-10 hover:-translate-y-2 transition-all h-full"
              >
                <div className="relative z-[3] flex flex-col h-full">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-rose to-rose-deep grid place-items-center text-cream mb-6 glow-icon">
                    <ServiceIcon slug={s.slug} className="w-7 h-7" />
                  </div>
                  <h3 className="font-fraunces text-2xl mb-2 text-brand-deep">{data.name}</h3>
                  <p className="text-muted italic text-sm mb-3">{data.subtitle}</p>
                  <p className="text-muted text-sm mb-6 leading-relaxed flex-1">{data.desc}</p>
                  <div className="flex justify-between items-center pt-5 border-t border-white/30 dark:border-white/10">
                    <span className="font-fraunces italic text-brand text-lg whitespace-nowrap">
                      {t.services.price_from} {lang === 'VI' ? s.priceVI : s.priceEN}
                    </span>
                    <span className="text-brand text-sm font-medium whitespace-nowrap group-hover:translate-x-1 transition-transform">
                      {t.services.view_more}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
