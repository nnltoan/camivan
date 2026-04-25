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
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-brand text-cream grid place-items-center shadow-wa hover:scale-110 transition-transform text-2xl"
      >
        {open ? '✕' : '💬'}
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-[90] flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-4">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full font-medium shadow-soft-md hover:-translate-y-0.5 transition-transform whitespace-nowrap"
          >
            📱 WhatsApp
          </a>
          <a
            href={ZALO_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#0068FF] text-white px-5 py-3 rounded-full font-medium shadow-soft-md hover:-translate-y-0.5 transition-transform whitespace-nowrap"
          >
            💬 Zalo
          </a>
          <a
            href={IG_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] text-white px-5 py-3 rounded-full font-medium shadow-soft-md hover:-translate-y-0.5 transition-transform whitespace-nowrap"
          >
            📸 Instagram
          </a>
        </div>
      )}
    </>
  );
}
