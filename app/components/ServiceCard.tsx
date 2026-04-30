'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { WARM_BLUR } from '../lib/blurDataUrl';

export interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ServiceCard({ icon, name, description, price, image }: ServiceCardProps) {
  const [flipped, setFlipped] = useState(false);
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <article className="liquid-surface relative w-full aspect-[3/4] rounded-[30px] p-9 flex flex-col">
        <div className="relative z-[3] flex flex-col h-full">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-rose to-rose-deep flex items-center justify-center text-3xl text-cream mb-6 glow-icon">
            {icon}
          </div>
          <h3 className="font-fraunces text-2xl mb-3 text-brand-deep">{name}</h3>
          <p className="text-muted text-sm mb-6 flex-1">{description}</p>
          <div className="flex items-center justify-between border-t border-white/30 dark:border-white/10 pt-5">
            <span className="font-fraunces italic text-brand text-lg">{price}</span>
            <span className="text-xs text-muted">→</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div
      className="relative w-full aspect-[3/4] cursor-pointer"
      style={{ perspective: '1200px' }}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          className="liquid-surface absolute inset-0 rounded-[30px] p-9 flex flex-col"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' } as any}
        >
          <div className="relative z-[3] flex flex-col h-full">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-rose to-rose-deep flex items-center justify-center text-3xl text-cream mb-6 glow-icon">
              {icon}
            </div>
            <h3 className="font-fraunces text-2xl mb-3 text-brand-deep">{name}</h3>
            <p className="text-muted text-sm mb-6 flex-1">{description}</p>
            <div className="flex items-center justify-between border-t border-white/30 dark:border-white/10 pt-5">
              <span className="font-fraunces italic text-brand text-lg">{price}</span>
              <span className="text-xs text-muted">Hover để xem ✿</span>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-[30px] overflow-hidden shadow-glass-lg"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          } as any}
        >
          <Image
            src={image}
            alt={`${name} — tác phẩm thực tế`}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={WARM_BLUR}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-7 bg-gradient-to-t from-brand-deep/85 via-brand/30 to-transparent">
            <p className="text-cream text-sm mb-3 opacity-90">Tác phẩm thực tế</p>
            <button
              type="button"
              className="liquid-surface w-full rounded-full py-3.5 font-medium text-sm text-brand-deep hover:-translate-y-0.5 transition-transform"
            >
              <span className="relative z-[3]">Đặt lịch ngay ♡</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
