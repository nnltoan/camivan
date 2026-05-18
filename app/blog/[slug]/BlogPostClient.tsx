'use client';

import { ReactNode, useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import WaFloat from '../../components/WaFloat';
import ScrollReveal from '../../components/ScrollReveal';
import BookingModal from '../../components/BookingModal';
import MagneticButton from '../../components/MagneticButton';
import { WARM_BLUR } from '../../lib/blurDataUrl';
import { useLang } from '../../components/LangProvider';
import type { Lang } from '../../lib/i18n';
import { pickLang, getPostBySlug } from '../../lib/blogPosts';

/* Hex → friendly color name dictionary (per language).
 * Used by renderRichText to label color swatches in blog list items.
 * Hex keys must be UPPERCASE 6-digit (no shorthand). */
const HEX_COLOR_NAMES: Record<string, Record<Lang, string>> = {
  '#C97C75': { VI: 'Hồng đất sáng', EN: 'Light earth pink', RU: 'Светло-розовый земляной', ZH: '浅大地玫瑰', JA: 'ライトアースピンク', KO: '라이트 어스 핑크', FR: 'Rose terre clair', ES: 'Rosa tierra claro' },
  '#B85F5C': { VI: 'Hồng đất đậm', EN: 'Deep earth pink', RU: 'Тёмно-розовый земляной', ZH: '深大地玫瑰', JA: 'ディープアースピンク', KO: '딥 어스 핑크', FR: 'Rose terre foncé', ES: 'Rosa tierra oscuro' },
  '#D63A47': { VI: 'Đỏ Cherry', EN: 'Cherry red', RU: 'Вишнёвый красный', ZH: '樱桃红', JA: 'チェリーレッド', KO: '체리 레드', FR: 'Rouge cerise', ES: 'Rojo cereza' },
  '#8E3A5C': { VI: 'Berry tím', EN: 'Berry purple', RU: 'Ягодный фиолетовый', ZH: '莓紫', JA: 'ベリーパープル', KO: '베리 퍼플', FR: 'Baie violette', ES: 'Baya violeta' },
};

/* Render a blog list item string into React nodes, replacing:
 *   - **text**   → <strong>text</strong>
 *   - #XXXXXX    → inline chip with color swatch + friendly name + hex code
 * Falls back to the bare hex if the code is not in HEX_COLOR_NAMES. */
function renderRichText(text: string, lang: Lang): ReactNode[] {
  const tokenRegex = /(#[0-9A-Fa-f]{6}|\*\*[^*]+\*\*)/g;
  const parts = text.split(tokenRegex);
  return parts.map((part, i) => {
    const hexMatch = part.match(/^#([0-9A-Fa-f]{6})$/);
    if (hexMatch) {
      const hex = '#' + hexMatch[1].toUpperCase();
      const name = HEX_COLOR_NAMES[hex]?.[lang];
      return (
        <span
          key={i}
          className="inline-flex items-center gap-1.5 align-middle mx-0.5 px-2 py-0.5 rounded-md bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-sm"
        >
          <span
            aria-hidden
            className="inline-block w-3.5 h-3.5 rounded-[4px] border border-black/15"
            style={{ backgroundColor: hex }}
          />
          {name && <span className="text-[13px]">{name}</span>}
          <span className="font-mono text-[11px] text-muted">{hex}</span>
        </span>
      );
    }
    const boldMatch = part.match(/^\*\*(.+)\*\*$/);
    if (boldMatch) return <strong key={i}>{boldMatch[1]}</strong>;
    return <span key={i}>{part}</span>;
  });
}

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
        <header className="px-5 lg:px-20 max-w-4xl mx-auto mb-12">
          <ScrollReveal>
            <a href="/#blog" className="text-sm text-brand hover:underline mb-6 inline-flex items-center gap-1">
              {t.blog.back_to_all}
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="liquid-surface inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 text-brand-deep">
              <span className="relative z-[3]">{category}</span>
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
                  className="text-xs uppercase tracking-wider bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-white/40 dark:border-white/10 text-brand-deep px-3 py-1.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </header>

        <ScrollReveal delay={0.25}>
          <div className="px-5 lg:px-20 mb-12">
            <div className="relative aspect-[16/9] rounded-[30px] overflow-hidden max-w-5xl mx-auto shadow-glass-lg">
              <Image src={post!.image} alt={title} fill sizes="(max-width:1024px) 100vw, 80vw" className="object-cover" placeholder="blur" blurDataURL={WARM_BLUR} priority />
            </div>
          </div>
        </ScrollReveal>

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
                        <span>{renderRichText(item, lang)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.warning && (
                  <div className="liquid-surface rounded-2xl p-5 my-5" style={{ borderColor: 'rgba(220, 38, 38, 0.25)' }}>
                    <span className="relative z-[3] block text-red-900 dark:text-red-300">{section.warning}</span>
                  </div>
                )}
                {section.tip && (
                  <div className="liquid-surface rounded-2xl p-5 my-5 text-brand-deep">
                    <span className="relative z-[3] block">{section.tip}</span>
                  </div>
                )}
                {section.quote && (
                  <blockquote className="border-l-4 border-brand pl-6 py-4 my-6 italic font-fraunces text-xl text-brand-deep">
                    {section.quote}
                  </blockquote>
                )}
                {section.image && (
                  <figure className="my-8">
                    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-glass-lg">
                      <Image
                        src={section.image}
                        alt={section.imageAlt ?? section.heading ?? ''}
                        fill
                        sizes="(max-width:768px) 100vw, 720px"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={WARM_BLUR}
                      />
                    </div>
                    {section.imageAlt && (
                      <figcaption className="text-center text-muted text-sm italic mt-3">
                        {section.imageAlt}
                      </figcaption>
                    )}
                  </figure>
                )}
              </section>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <div className="liquid-surface-strong rounded-3xl p-8 lg:p-12 mt-12 text-center">
              <div className="relative z-[3]">
                <h3 className="font-fraunces text-2xl lg:text-3xl mb-4">
                  {t.blog.cta_heading} <span className="italic-accent">{t.blog.cta_heading_accent}</span>
                </h3>
                <p className="text-muted mb-6">{t.blog.cta_description}</p>
                <MagneticButton strength={0.25}>
                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="cta-glow inline-flex items-center gap-2 px-8 py-[18px] rounded-full text-[15px] font-medium text-cream whitespace-nowrap cursor-pointer transition-all hover:-translate-y-0.5"
                  >
                    {t.blog.cta_button}
                  </button>
                </MagneticButton>
              </div>
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
