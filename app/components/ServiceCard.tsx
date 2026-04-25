'use client';

/* ServiceCard — Motion E (3D flip)
 * Hover (desktop) / tap (mobile) → rotateY 0↔180.
 * Front: icon + name + desc + price. Back: real-work photo + CTA.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

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

  // Reduced-motion fallback — render front face only with image as a side-by-side accent
  if (reduce) {
    return (
      <article className="relative w-full aspect-[3/4] bg-cream border border-nude rounded-[30px] p-9 flex flex-col">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-nude to-rose flex items-center justify-center text-3xl text-brand mb-6">
          {icon}
        </div>
        <h3 className="font-fraunces text-2xl mb-3">{name}</h3>
        <p className="text-muted text-sm mb-6 flex-1">{description}</p>
        <div className="flex items-center justify-between border-t border-nude pt-5">
          <span className="font-fraunces italic text-brand text-lg">{price}</span>
          <span className="text-xs text-muted">→</span>
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
        {/* Front face */}
        <div
          className="absolute inset-0 bg-cream border border-nude rounded-[30px] p-9 flex flex-col"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' } as any}
        >
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-nude to-rose flex items-center justify-center text-3xl text-brand mb-6">
            {icon}
          </div>
          <h3 className="font-fraunces text-2xl mb-3">{name}</h3>
          <p className="text-muted text-sm mb-6 flex-1">{description}</p>
          <div className="flex items-center justify-between border-t border-nude pt-5">
            <span className="font-fraunces italic text-brand text-lg">{price}</span>
            <span className="text-xs text-muted">Hover để xem ✿</span>
          </div>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 rounded-[30px] overflow-hidden"
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
          />
          <div className="absolute inset-0 flex flex-col justify-end p-7 bg-gradient-to-t from-brand-deep/90 via-brand/40 to-transparent">
            <p className="text-cream text-sm mb-3 opacity-90">Tác phẩm thực tế</p>
            <button
              type="button"
              className="w-full bg-cream text-brand rounded-full py-3.5 font-medium text-sm hover:bg-nude transition-colors"
            >
              Đặt lịch ngay ♡
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
