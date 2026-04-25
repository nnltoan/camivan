'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';

const SERVICE_KEYS = [
  { key: 'microblading', slug: 'microblading', icon: '✿', price: '3.500.000đ' },
  { key: 'lip', slug: 'lip-blush', icon: '♡', price: '3.000.000đ' },
  { key: 'eyeliner', slug: 'eyeliner', icon: '★', price: '2.500.000đ' },
  { key: 'lash', slug: 'noi-mi', icon: '✦', price: '800.000đ' },
  { key: 'nail', slug: 'nail-art', icon: '❀', price: '500.000đ' },
  { key: 'skin', slug: 'cham-soc-da', icon: '❁', price: '700.000đ' },
] as const;

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="px-5 py-20 sm:px-8 lg:px-20 lg:py-30">
      <ScrollReveal>
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="inline-block bg-nude text-brand px-5 py-2 rounded-full text-[13px] font-medium mb-5">{t.services_section.label}</span>
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
            <ScrollReveal key={s.key} delay={i * 0.05}>
              <Link
                href={`/services/${s.slug}`}
                className="block group bg-cream border border-nude rounded-[30px] p-10 hover:-translate-y-2 hover:shadow-soft-lg hover:border-rose transition-all h-full"
              >
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-nude to-rose grid place-items-center text-3xl text-brand mb-6">{s.icon}</div>
                <h3 className="font-fraunces text-2xl mb-2">{data.name}</h3>
                <p className="text-muted italic text-sm mb-3">{data.subtitle}</p>
                <p className="text-muted text-sm mb-6 leading-relaxed">{data.desc}</p>
                <div className="flex justify-between items-center pt-5 border-t border-nude">
                  <span className="font-fraunces italic text-brand text-lg whitespace-nowrap">
                    {t.services.price_from} {s.price}
                  </span>
                  <span className="text-brand text-sm font-medium whitespace-nowrap group-hover:translate-x-1 transition-transform">
                    {t.services.view_more}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
