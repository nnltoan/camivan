'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import WaFloat from '../../components/WaFloat';
import ScrollReveal from '../../components/ScrollReveal';
import { useLang } from '../../components/LangProvider';
import { SERVICE_DETAILS, getServiceBySlug, pickServiceLang, SLUG_TO_BOOKING_KEY } from '../../lib/servicesContent';
import { getSubServices } from '../../lib/servicesSubMenu';
import BookingModal from '../../components/BookingModal';
import ServiceIcon from '../../components/ServiceIcon';
import StickyStorySection from '../../components/StickyStorySection';
import MagneticButton from '../../components/MagneticButton';
import { WARM_BLUR } from '../../lib/blurDataUrl';

interface Props {
  slug: string;
}

export default function ServiceDetailClient({ slug }: Props) {
  const { t, lang } = useLang();

  const service = slug ? getServiceBySlug(slug) : undefined;
  if (!service) {
    notFound();
  }

  const name = pickServiceLang(service!.name, lang);
  const italic = pickServiceLang(service!.italic, lang);
  const duration = pickServiceLang(service!.duration, lang);
  const description = pickServiceLang(service!.description, lang);
  const benefits = pickServiceLang(service!.benefits, lang);
  const process = pickServiceLang(service!.process, lang);
  const aftercare = pickServiceLang(service!.aftercare, lang);
  const faq = pickServiceLang(service!.faq, lang);
  const subServices = getSubServices(slug, lang);

  const [modalOpen, setModalOpen] = useState(false);
  const bookingKey = SLUG_TO_BOOKING_KEY[slug];

  return (
    <>
      <Nav />

      <article className="pt-28 lg:pt-36 pb-20">
        <header className="px-5 lg:px-20 mb-16 lg:mb-24">
          <ScrollReveal>
            <a href="/#services" className="text-sm text-brand hover:underline mb-6 inline-flex items-center gap-1">
              {t.service_detail.back_to_all}
            </a>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <ScrollReveal>
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-rose to-rose-deep grid place-items-center text-cream mb-6 glow-icon">
                  <ServiceIcon slug={slug} className="w-7 h-7" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-[clamp(40px,7vw,72px)] mb-4">
                  {name}
                  <br />
                  <span className="italic-accent">{italic}</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex gap-6 mb-6 text-sm">
                  <span className="text-brand font-semibold">
                    {t.services.price_from} {service!.price}
                  </span>
                  <span className="text-muted">⏱ {duration}</span>
                </div>
                <p className="text-lg text-muted leading-relaxed mb-8">{description}</p>
                <MagneticButton strength={0.25}>
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="cta-glow inline-flex items-center gap-2 px-8 py-[18px] rounded-full text-[15px] font-medium text-cream whitespace-nowrap cursor-pointer transition-all hover:-translate-y-0.5"
                  >
                    {t.nav.book}
                  </button>
                </MagneticButton>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden shadow-glass-lg">
                <Image
                  src={service!.image}
                  alt={name}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={WARM_BLUR}
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </header>

        <section className="px-5 lg:px-20 py-16">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,48px)] mb-10 text-center">
              {t.service_detail.why_choose} <span className="italic-accent">{name}?</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="h-full">
                <div className="liquid-surface flex items-start gap-3 rounded-2xl p-5 h-full">
                  <span className="relative z-[3] flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-brand to-rose-deep text-cream grid place-items-center shrink-0 glow-icon">✓</span>
                    <span className="text-text">{b}</span>
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {subServices && subServices.length > 0 && (() => {
          // Localized headings for the price-menu section
          const PRICE_TITLE: Record<string, string> = {
            VI: 'Bảng giá', EN: 'Price', JA: '料金', ZH: '价目',
            KO: '가격', RU: 'Цены', FR: 'Tarifs', ES: 'Precios',
          };
          const PRICE_ACCENT: Record<string, string> = {
            VI: 'chi tiết', EN: 'menu', JA: 'メニュー', ZH: '菜单',
            KO: '메뉴', RU: 'меню', FR: 'détaillés', ES: 'detallados',
          };
          const PRICE_NOTE: Record<string, string> = {
            VI: 'Tất cả giá đã bao gồm tư vấn, ủ tê, kit dưỡng cơ bản. Hỏi thêm về combo và ưu đãi qua Zalo.',
            EN: 'All prices include consultation, numbing and a basic care kit. Ask about combos and promotions via Zalo.',
            JA: 'すべての料金にカウンセリング・麻酔・基本ケアキットが含まれます。コンボやプロモーションについては Zalo でお問い合わせください。',
            ZH: '所有价格已包含咨询、麻醉和基本护理套装。如需了解套餐和优惠，请通过 Zalo 咨询。',
            KO: '모든 가격에 상담, 마취, 기본 케어 키트가 포함됩니다. 콤보와 프로모션은 Zalo로 문의해 주세요.',
            RU: 'Все цены включают консультацию, обезболивание и базовый набор для ухода. По комбо и акциям пишите в Zalo.',
            FR: 'Tous les prix incluent la consultation, l\'anesthésie et un kit de soin de base. Pour les combos et promotions, contactez-nous via Zalo.',
            ES: 'Todos los precios incluyen consulta, anestesia y un kit de cuidado básico. Para combos y promociones, contáctanos vía Zalo.',
          };
          const pTitle  = PRICE_TITLE[lang]  ?? PRICE_TITLE.EN;
          const pAccent = PRICE_ACCENT[lang] ?? PRICE_ACCENT.EN;
          const pNote   = PRICE_NOTE[lang]   ?? PRICE_NOTE.EN;
          return (
          <section className="px-5 lg:px-20 py-16">
            <ScrollReveal>
              <h2 className="text-[clamp(28px,4vw,48px)] mb-3 text-center">
                {pTitle} <span className="italic-accent">{pAccent}</span>
              </h2>
              <p className="text-muted text-center mb-12 max-w-2xl mx-auto text-[15px]">
                {pNote}
              </p>
            </ScrollReveal>
            <div className="max-w-5xl mx-auto space-y-8">
              {subServices.map((group, gi) => (
                <ScrollReveal key={gi} delay={gi * 0.05}>
                  <div className="liquid-surface rounded-3xl p-6 lg:p-8">
                    <div className="relative z-[3]">
                      <h3 className="font-fraunces text-xl lg:text-2xl text-brand-deep mb-5 pb-3 border-b border-white/30 dark:border-white/10">
                        {group.group}
                      </h3>
                      <ul className="divide-y divide-white/20 dark:divide-white/5">
                        {group.items.map((item, ii) => (
                          <li key={ii} className="py-4">
                            <div className="flex items-baseline justify-between gap-4 flex-wrap">
                              <span className="text-text text-[15px] font-medium flex-1 min-w-0">
                                {item.name}
                              </span>
                              <span className="font-fraunces italic text-brand text-[17px] whitespace-nowrap">
                                {item.price}
                              </span>
                            </div>
                            {item.desc && (
                              <p className="text-[13px] text-muted leading-relaxed mt-1.5 pr-2">
                                {item.desc}
                              </p>
                            )}
                            {item.note && (
                              <span className="inline-block mt-2 text-[11px] tracking-wider uppercase font-semibold text-brand bg-rose/20 px-2 py-0.5 rounded-full">
                                {item.note}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
          );
        })()}

        <section className="px-5 lg:px-20 py-16 lg:py-24">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,48px)] mb-12 text-center">
              {t.service_detail.process_title} <span className="italic-accent">{t.service_detail.process_accent}</span>
            </h2>
          </ScrollReveal>
          <StickyStorySection
            steps={process}
            asideTitle={t.service_detail.process_title}
            stepLabel={t.ui_v2.step_label}
          />
        </section>

        <section className="px-5 lg:px-20 py-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="liquid-surface rounded-3xl p-8">
                <div className="relative z-[3]">
                  <h2 className="text-2xl lg:text-3xl mb-6">{t.service_detail.aftercare_title}</h2>
                  <ul className="space-y-3">
                    {aftercare.map((a, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-brand shrink-0">•</span>
                        <span className="text-text">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl lg:text-3xl mb-6">{t.service_detail.faq_title}</h2>
              <div className="space-y-3">
                {faq.map((f, i) => (
                  <div key={i} className="liquid-surface rounded-xl p-4">
                    <div className="relative z-[3]">
                      <p className="font-semibold text-brand-deep mb-2">{f.q}</p>
                      <p className="text-sm text-muted">{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-5 lg:px-20 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(32px,5vw,56px)] mb-6">
              {t.service_detail.ready_to} <span className="italic-accent">{name}?</span>
            </h2>
            <p className="text-muted mb-10 max-w-md mx-auto">{t.service_detail.ready_description}</p>
            <MagneticButton strength={0.25}>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="cta-glow inline-flex items-center gap-2 px-8 py-[18px] rounded-full text-[15px] font-medium text-cream whitespace-nowrap cursor-pointer transition-all hover:-translate-y-0.5"
              >
                {t.service_detail.book_now}
              </button>
            </MagneticButton>
          </ScrollReveal>
        </section>
      </article>

      <Footer />
      <WaFloat />

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultServiceKey={bookingKey}
      />
    </>
  );
}
