'use client';

import { useState } from 'react';

const PHONE_E164 = '84847892052';
const IG_DM = 'https://www.instagram.com/direct/t/17843459925428218/';
const ZALO_PROFILE = `https://zalo.me/${PHONE_E164}`;

/* Brand SVG icons — keep stroke/fill colors set to currentColor so they
   inherit the white text color of the orb container. */

function IconWhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0a12 12 0 0 0-10.4 17.9L0 24l6.3-1.6A12 12 0 0 0 24 12a11.9 11.9 0 0 0-3.5-8.5Zm-8.5 18a9.94 9.94 0 0 1-5.1-1.4l-.4-.2-3.7.97 1-3.6-.24-.4A9.97 9.97 0 1 1 12 21.5Zm5.5-7.45c-.3-.15-1.78-.88-2.05-.98s-.48-.15-.68.15-.78.97-.96 1.17-.36.22-.66.07a8.18 8.18 0 0 1-2.4-1.48 9.07 9.07 0 0 1-1.66-2.07c-.18-.3 0-.46.13-.6s.3-.36.45-.54a2.07 2.07 0 0 0 .3-.5.55.55 0 0 0 0-.52c-.07-.15-.66-1.6-.9-2.18s-.48-.5-.66-.5-.36 0-.54 0a1.05 1.05 0 0 0-.77.36 3.2 3.2 0 0 0-1 2.4 5.55 5.55 0 0 0 1.18 3 12.7 12.7 0 0 0 4.85 4.3c.68.3 1.2.47 1.62.6a3.92 3.92 0 0 0 1.78.12 2.93 2.93 0 0 0 1.93-1.36 2.4 2.4 0 0 0 .17-1.36c-.07-.13-.27-.21-.57-.36Z" />
    </svg>
  );
}

function IconZalo() {
  // Zalo doesn't have a public single-glyph logo; use the bold "Z" wordmark
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <text x="16" y="22" textAnchor="middle" fontWeight="800" fontSize="14" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif">Z</text>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function WaFloat() {
  const [open, setOpen] = useState(false);
  const wa = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent('Xin chào CAMI VAN ✨ Tôi muốn tư vấn dịch vụ.')}`;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Mở liên hệ nhanh"
        className="liquid-surface-strong no-glass-shine fixed bottom-6 right-6 z-[90] w-16 h-16 rounded-full grid place-items-center text-2xl text-brand-deep hover:scale-110 transition-transform"
      >
        <span className="relative z-[3]">{open ? '×' : '💬'}</span>
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 z-[90] flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-4">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-surface-soft flex items-center gap-3 px-5 py-3 rounded-full font-medium hover:-translate-y-0.5 transition-transform whitespace-nowrap text-brand-deep"
          >
            <span className="relative z-[3] flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#25D366] grid place-items-center text-white shrink-0">
                <IconWhatsApp />
              </span>
              WhatsApp
            </span>
          </a>
          <a
            href={ZALO_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-surface-soft flex items-center gap-3 px-5 py-3 rounded-full font-medium hover:-translate-y-0.5 transition-transform whitespace-nowrap text-brand-deep"
          >
            <span className="relative z-[3] flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#0068FF] grid place-items-center text-white shrink-0">
                <IconZalo />
              </span>
              Zalo
            </span>
          </a>
          <a
            href={IG_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-surface-soft flex items-center gap-3 px-5 py-3 rounded-full font-medium hover:-translate-y-0.5 transition-transform whitespace-nowrap text-brand-deep"
          >
            <span className="relative z-[3] flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] grid place-items-center text-white shrink-0">
                <IconInstagram />
              </span>
              Instagram
            </span>
          </a>
        </div>
      )}
    </>
  );
}
