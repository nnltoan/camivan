'use client';

import { useState } from 'react';

const PHONE_E164 = '84847892052';
const IG_DM = 'https://www.instagram.com/direct/t/17843459925428218/';
const ZALO_PROFILE = `https://zalo.me/${PHONE_E164}`;

export default function WaFloat() {
  const [open, setOpen] = useState(false);
  const wa = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent('Xin chào CAMI VAN ✨ Tôi muốn tư vấn dịch vụ.')}`;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Mở liên hệ nhanh"
        className="liquid-surface-strong fixed bottom-6 right-6 z-[90] w-16 h-16 rounded-full grid place-items-center text-2xl text-brand-deep hover:scale-110 transition-transform"
      >
        <span className="relative z-[3]">{open ? '×' : '💬'}</span>
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 z-[90] flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-4">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-surface flex items-center gap-3 px-5 py-3 rounded-full font-medium hover:-translate-y-0.5 transition-transform whitespace-nowrap text-brand-deep"
          >
            <span className="relative z-[3] flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#25D366] grid place-items-center text-white text-sm shrink-0">📱</span>
              WhatsApp
            </span>
          </a>
          <a
            href={ZALO_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-surface flex items-center gap-3 px-5 py-3 rounded-full font-medium hover:-translate-y-0.5 transition-transform whitespace-nowrap text-brand-deep"
          >
            <span className="relative z-[3] flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#0068FF] grid place-items-center text-white text-sm shrink-0">💬</span>
              Zalo
            </span>
          </a>
          <a
            href={IG_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-surface flex items-center gap-3 px-5 py-3 rounded-full font-medium hover:-translate-y-0.5 transition-transform whitespace-nowrap text-brand-deep"
          >
            <span className="relative z-[3] flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] grid place-items-center text-white text-sm shrink-0">📸</span>
              Instagram
            </span>
          </a>
        </div>
      )}
    </>
  );
}
