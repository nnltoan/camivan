'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useLang } from './LangProvider';
import { POSTS, pickLang } from '../lib/blogPosts';
import { WARM_BLUR } from '../lib/blurDataUrl';

export default function Blog() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();

  return (
    <section id="blog" className="px-5 py-20 lg:px-20 lg:py-28">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="liquid-surface inline-block px-5 py-2 rounded-full text-sm font-medium mb-4 text-brand-deep"
          >
            <span className="relative z-[3]">{t.blog.label}</span>
          </motion.span>
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
                className="liquid-surface group block rounded-3xl overflow-hidden hover:-translate-y-1 transition-all h-full flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={WARM_BLUR}
                  />
                  <div className="liquid-surface absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold text-brand-deep uppercase tracking-wider">
                    <span className="relative z-[3]">{category}</span>
                  </div>
                </div>
                <div className="relative z-[3] p-6 flex flex-col flex-1">
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
                        className="text-[10px] uppercase tracking-wider bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-white/40 dark:border-white/10 text-brand-deep px-2 py-1 rounded-full"
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

    </section>
  );
}
