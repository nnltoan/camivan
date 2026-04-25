'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import WaFloat from '../../components/WaFloat';
import ScrollReveal from '../../components/ScrollReveal';
import BookingModal from '../../components/BookingModal';
import { useLang } from '../../components/LangProvider';
import { pickLang, getPostBySlug } from '../../lib/blogPosts';

interface Props {
  slug: string;
}

export default function BlogPostClient({ slug }: Props) {
  const { t, lang } = useLang();
  const [bookingOpen, setBookingOpen] = useState(false);

  const post = slug ? getPostBySlug(slug) : undefined;
  if (!post) {
    notFound();
  }

  const title = pickLang(post!.title, lang);
  const category = pickLang(post!.category, lang);
  const readTime = pickLang(post!.readTime, lang);
  const intro = pickLang(post!.intro, lang);
  const tags = pickLang(post!.tags, lang);
  const sections = pickLang(post!.sections, lang);

  return (
    <>
      <Nav />
      <article className="pt-28 lg:pt-36 pb-20">
        {/* Header */}
        <header className="px-5 lg:px-20 max-w-4xl mx-auto mb-12">
          <ScrollReveal>
            <a href="/#blog" className="text-sm text-brand hover:underline mb-6 inline-flex items-center gap-1">
              {t.blog.back_to_all}
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="inline-block bg-nude text-brand px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              {category}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="text-[clamp(32px,5vw,56px)] mb-6 leading-tight">{title}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-4 text-sm text-muted mb-6 flex-wrap">
              <span>{post!.date}</span>
              <span>·</span>
              <span>{readTime}</span>
              <span>·</span>
              <span>
                {t.blog.author_label}: <strong className="text-brand">Cẩm Vân</strong>
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider bg-nude text-brand-deep px-3 py-1.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </header>

        {/* Hero image */}
        <ScrollReveal delay={0.25}>
          <div className="px-5 lg:px-20 mb-12">
            <div className="relative aspect-[16/9] rounded-[30px] overflow-hidden max-w-5xl mx-auto shadow-soft-xl">
              <Image src={post!.image} alt={title} fill sizes="(max-width:1024px) 100vw, 80vw" className="object-cover" priority />
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="px-5 lg:px-20 max-w-3xl mx-auto">
          <ScrollReveal delay={0.3}>
            <p
              className="text-lg lg:text-xl text-text leading-relaxed mb-12 italic"
              style={{ borderLeft: '3px solid #CD853F', paddingLeft: '1.5rem' }}
            >
              {intro}
            </p>
          </ScrollReveal>

          {sections.map((section, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <section className="mb-12">
                {section.heading && (
                  <h2 className="font-fraunces text-2xl lg:text-3xl text-brand-deep mb-3">{section.heading}</h2>
                )}
                {section.subheading && (
                  <p className="text-muted italic mb-5 text-lg">{section.subheading}</p>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-text leading-relaxed mb-4">{p}</p>
                ))}
                {section.list && (
                  <ul className="space-y-3 my-5">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-text leading-relaxed">
                        <span className="text-brand shrink-0 mt-1.5">•</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                )}
                {section.warning && (
                  <div className="bg-red-50 border border-red-200 text-red-900 rounded-2xl p-5 my-5">
                    {section.warning}
                  </div>
                )}
                {section.tip && (
                  <div className="bg-nude border border-rose/40 text-brand-deep rounded-2xl p-5 my-5">
                    {section.tip}
                  </div>
                )}
                {section.quote && (
                  <blockquote className="border-l-4 border-brand pl-6 py-4 my-6 italic font-fraunces text-xl text-brand-deep">
                    {section.quote}
                  </blockquote>
                )}
              </section>
            </ScrollReveal>
          ))}

          {/* CTA — opens BookingModal directly (no scroll/navigate) */}
          <ScrollReveal>
            <div className="bg-nude/40 rounded-3xl p-8 lg:p-12 mt-12 text-center border border-nude">
              <h3 className="font-fraunces text-2xl lg:text-3xl mb-4">
                {t.blog.cta_heading} <span className="italic-accent">{t.blog.cta_heading_accent}</span>
              </h3>
              <p className="text-muted mb-6">{t.blog.cta_description}</p>
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center gap-2 bg-brand text-cream px-8 py-3.5 rounded-full font-medium hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-btn transition-all whitespace-nowrap cursor-pointer"
              >
                {t.blog.cta_button}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </article>

      <Footer />
      <WaFloat />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
