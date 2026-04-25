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
import BookingModal from '../../components/BookingModal';

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

  const [modalOpen, setModalOpen] = useState(false);
  const bookingKey = SLUG_TO_BOOKING_KEY[slug];

  return (
    <>
      <Nav />

      <article className="pt-28 lg:pt-36 pb-20">
        {/* Hero */}
        <header className="px-5 lg:px-20 mb-16 lg:mb-24">
          <ScrollReveal>
            <a href="/#services" className="text-sm text-brand hover:underline mb-6 inline-flex items-center gap-1">
              {t.service_detail.back_to_all}
            </a>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <ScrollReveal>
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-nude to-rose grid place-items-center text-3xl text-brand mb-6">
                  {service!.icon}
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
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-brand text-cream px-8 py-4 rounded-full font-medium hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-btn transition-all whitespace-nowrap cursor-pointer"
                >
                  {t.nav.book}
                </button>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden shadow-soft-xl">
                <Image
                  src={service!.image}
                  alt={name}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </header>

        {/* Benefits */}
        <section className="px-5 lg:px-20 py-16 bg-nude/40">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,48px)] mb-10 text-center">
              {t.service_detail.why_choose} <span className="italic-accent">{name}?</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-cream rounded-2xl p-5 border border-nude">
                  <span className="w-8 h-8 rounded-full bg-brand text-cream grid place-items-center shrink-0">✓</span>
                  <span className="text-text">{b}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="px-5 lg:px-20 py-16 lg:py-24">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,48px)] mb-12 text-center">
              {t.service_detail.process_title} <span className="italic-accent">{t.service_detail.process_accent}</span>
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-5 bg-cream border border-nude rounded-2xl p-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-brand text-cream grid place-items-center font-fraunces text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-fraunces text-xl text-brand-deep mb-1">{p.step}</h3>
                    <p className="text-muted">{p.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Aftercare + FAQ */}
        <section className="px-5 lg:px-20 py-16 bg-nude/40">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-3xl mb-6">{t.service_detail.aftercare_title}</h2>
              <ul className="space-y-3">
                {aftercare.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand shrink-0">•</span>
                    <span className="text-text">{a}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl lg:text-3xl mb-6">{t.service_detail.faq_title}</h2>
              <div className="space-y-4">
                {faq.map((f, i) => (
                  <div key={i} className="bg-cream rounded-xl p-4 border border-nude">
                    <p className="font-semibold text-brand-deep mb-2">{f.q}</p>
                    <p className="text-sm text-muted">{f.a}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 lg:px-20 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(32px,5vw,56px)] mb-6">
              {t.service_detail.ready_to} <span className="italic-accent">{name}?</span>
            </h2>
            <p className="text-muted mb-10 max-w-md mx-auto">{t.service_detail.ready_description}</p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-brand text-cream px-8 py-4 rounded-full font-medium hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-btn transition-all whitespace-nowrap cursor-pointer"
            >
              {t.service_detail.book_now}
            </button>
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
