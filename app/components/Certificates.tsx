'use client';

/**
 * Certificates — showcase of training certificates for Cami Van and Aura.
 * 4 cert images, grouped 2-per-master. Click → opens Lightbox to view large.
 * Uses the existing Lightbox component for consistency with Gallery.
 */

import Image from 'next/image';
import { useMemo, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import Lightbox, { LightboxImage } from './Lightbox';
import { useLang } from './LangProvider';
import { WARM_BLUR } from '../lib/blurDataUrl';

interface CertGroup {
  masterVI: string;
  masterEN: string;
  roleVI: string;
  roleEN: string;
  certs: { src: string; titleVI: string; titleEN: string }[];
}

const CERT_GROUPS: CertGroup[] = [
  {
    masterVI: 'Master Cami Van',
    masterEN: 'Master Cami Van',
    roleVI: 'Founder · Lead Master',
    roleEN: 'Founder · Lead Master',
    certs: [
      {
        src: '/camvan-cer1.png',
        titleVI: 'Chứng chỉ Phun · Xăm · Thêu Da (Permanent Make Up)',
        titleEN: 'Permanent Make Up Certificate',
      },
      {
        src: '/camvan-cer2.png',
        titleVI: 'Chứng nhận An toàn Y tế — Phòng chống lây nhiễm tại cơ sở thẩm mỹ',
        titleEN: 'Health Safety Certificate — Aesthetics Center Infection Prevention',
      },
    ],
  },
  {
    masterVI: 'Master Aura',
    masterEN: 'Master Aura',
    roleVI: 'Senior Master · Royal Brows',
    roleEN: 'Senior Master · Royal Brows',
    certs: [
      {
        src: '/an-cer1.png',
        titleVI: 'Chứng chỉ Phun · Xăm · Thêu Da (Permanent Make Up)',
        titleEN: 'Permanent Make Up Certificate',
      },
      {
        src: '/an-cer2.png',
        titleVI: 'Chứng nhận An toàn Y tế — Phòng chống lây nhiễm tại cơ sở thẩm mỹ',
        titleEN: 'Health Safety Certificate — Aesthetics Center Infection Prevention',
      },
    ],
  },
];

export default function Certificates() {
  const { lang, t } = useLang();
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const isVI = lang === 'VI';

  // Flatten all certs into a single list for the Lightbox.
  const flatCerts = useMemo(
    () => CERT_GROUPS.flatMap((g) => g.certs.map((c) => ({ ...c, master: isVI ? g.masterVI : g.masterEN }))),
    [isVI]
  );

  const lbImages: LightboxImage[] = useMemo(
    () =>
      flatCerts.map((c) => ({
        src: c.src,
        alt: isVI ? c.titleVI : c.titleEN,
        caption: `${c.master} — ${isVI ? c.titleVI : c.titleEN}`,
      })),
    [flatCerts, isVI]
  );

  const title = isVI ? 'Chứng chỉ' : 'Certifications';
  const titleAccent = isVI ? '& đào tạo chính quy' : '& formal training';
  const description = isVI
    ? 'Master Cami Van và Master Aura đều được đào tạo và cấp chứng chỉ chính quy bởi Trường Trung cấp Công nghệ và Du lịch (Khánh Hòa) — đảm bảo kỹ thuật chuẩn và an toàn y tế tuyệt đối tại studio.'
    : 'Both Master Cami Van and Master Aura are formally trained and certified by the Intermediate School of Technology and Tourism (Khanh Hoa) — guaranteeing standard technique and medical-grade safety throughout the studio.';
  const label = isVI ? '✿ Chứng chỉ' : '✿ Certifications';
  const viewLabel = t.ui_v2.lb_viewer;

  return (
    <section id="certificates" className="px-5 py-20 sm:px-8 lg:px-20 lg:py-30">
      <ScrollReveal>
        <div className="text-center max-w-[760px] mx-auto mb-14">
          <span className="liquid-surface inline-block px-5 py-2 rounded-full text-[13px] font-medium mb-5 text-brand-deep">
            <span className="relative z-[3]">{label}</span>
          </span>
          <h2 className="text-[clamp(36px,5vw,64px)] mb-5 leading-tight">
            {title}<br />
            <span className="italic-accent">{titleAccent}</span>
          </h2>
          <p className="text-muted text-[16px] leading-relaxed">{description}</p>
        </div>
      </ScrollReveal>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {CERT_GROUPS.map((group, gi) => (
          <ScrollReveal key={gi} delay={gi * 0.1} className="h-full">
            <div className="liquid-surface rounded-[28px] p-5 lg:p-7 h-full">
              <div className="relative z-[3]">
                <div className="mb-5 pb-4 border-b border-white/30 dark:border-white/10">
                  <div className="font-fraunces text-2xl text-brand-deep">
                    {isVI ? group.masterVI : group.masterEN}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted mt-1">
                    {isVI ? group.roleVI : group.roleEN}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                  {group.certs.map((cert, ci) => {
                    const flatIdx = CERT_GROUPS.slice(0, gi).reduce((acc, g) => acc + g.certs.length, 0) + ci;
                    return (
                      <button
                        key={ci}
                        type="button"
                        onClick={() => setLbIndex(flatIdx)}
                        aria-label={`${viewLabel} — ${isVI ? cert.titleVI : cert.titleEN}`}
                        className="group relative flex h-full flex-col rounded-2xl overflow-hidden shadow-glass-sm border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-transparent bg-cream text-left"
                      >
                        {/* Image area — fixed aspect ratio so all 4 frames identical */}
                        <div className="relative aspect-[4/3] w-full shrink-0 bg-nude/40">
                          <Image
                            src={cert.src}
                            alt={isVI ? cert.titleVI : cert.titleEN}
                            fill
                            sizes="(max-width:768px) 100vw, 300px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            placeholder="blur"
                            blurDataURL={WARM_BLUR}
                          />
                        </div>
                        {/* Caption area — fixed min-height + flex-1 so all 4 captions same height */}
                        <div className="flex-1 p-3 text-[12px] text-text leading-snug min-h-[3.5rem] flex items-start">
                          <span className="line-clamp-3">
                            {isVI ? cert.titleVI : cert.titleEN}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {lbIndex !== null && (
        <Lightbox
          images={lbImages}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onNavigate={setLbIndex}
        />
      )}
    </section>
  );
}
