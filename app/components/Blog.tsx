'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';
import { POSTS, pickLang } from '../lib/blogPosts';

export default function Blog() {
  const { t, lang } = useLang();

  return (
    <section
      id="blog"
      className="px-5 py-20 lg:px-20 lg:py-28 bg-gradient-to-b from-cream to-nude"
    >
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-cream text-brand px-5 py-2 rounded-full text-sm font-medium mb-4">
            {t.blog.label}
          </span>
          <h2 className="text-[clamp(32px,5vw,56px)] mb-4">
            {t.blog.title} <span className="italic-accent">{t.blog.title_accent}</span>
          </h2>
          <p className="text-muted text-[17px]">{t.blog.description}</p>
        </div>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {POSTS.map((post, i) => {
          const title = pickLang(post.title, lang);
          const category = pickLang(post.category, lang);
          const excerpt = pickLang(post.excerpt, lang);
          const readTime = pickLang(post.readTime, lang);
          const tags = pickLang(post.tags, lang);

          return (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-cream rounded-3xl overflow-hidden border border-nude hover:border-rose hover:-translate-y-1 transition-all hover:shadow-soft-lg h-full flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur px-3 py-1 rounded-full text-[11px] font-semibold text-brand uppercase tracking-wider">
                    {category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted mb-3 whitespace-nowrap">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{readTime}</span>
                  </div>
                  <h3 className="font-fraunces text-xl mb-3 group-hover:text-brand transition-colors leading-tight">
                    {title}
                  </h3>
                  <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-4 flex-1">
                    {excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider bg-nude text-brand-deep px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-brand font-medium text-sm group-hover:gap-3 transition-all whitespace-nowrap">
                    {t.blog.read_more}
                    <span>→</span>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-deep border-b border-brand-deep pb-1 hover:text-brand hover:border-brand transition-colors text-sm font-medium tracking-wider uppercase whitespace-nowrap"
          >
            {t.blog.view_all}
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
