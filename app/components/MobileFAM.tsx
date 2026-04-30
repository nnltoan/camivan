'use client';

/**
 * MobileFAM — Floating Action Menu for mobile (≤lg).
 * 3 quick actions: Call (tel:), Chat (WhatsApp), Maps.
 * - Auto-hide on scroll-down, re-appear on scroll-up.
 * - Always visible while in the top 200px.
 * - Stays under modal/lightbox by using z-40 (modal/lightbox use z-100+).
 */

import { useEffect, useRef, useState } from 'react';
import { haptic } from '../lib/haptic';
import { useLang } from './LangProvider';

const PHONE_E164 = '84847892052';
const PHONE_TEL = `tel:+${PHONE_E164}`;
const WA_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent('Xin chào CAMI VAN ✨ Tôi muốn được tư vấn dịch vụ.')}`;
const MAPS_URL = 'https://www.google.com/maps?q=23+An+Thuong+18,+Da+Nang,+Vietnam';

const SCROLL_LOCK_TOP = 200; // always visible above this scrollY
const SCROLL_DELTA = 8;      // ignore noise

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconChat() {
  // WhatsApp official mark, simplified
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0a12 12 0 0 0-10.4 17.9L0 24l6.3-1.6A12 12 0 0 0 24 12a11.9 11.9 0 0 0-3.5-8.5Zm-8.5 18a9.94 9.94 0 0 1-5.1-1.4l-.4-.2-3.7.97 1-3.6-.24-.4A9.97 9.97 0 1 1 12 21.5Zm5.5-7.45c-.3-.15-1.78-.88-2.05-.98s-.48-.15-.68.15-.78.97-.96 1.17-.36.22-.66.07a8.18 8.18 0 0 1-2.4-1.48 9.07 9.07 0 0 1-1.66-2.07c-.18-.3 0-.46.13-.6s.3-.36.45-.54a2.07 2.07 0 0 0 .3-.5.55.55 0 0 0 0-.52c-.07-.15-.66-1.6-.9-2.18s-.48-.5-.66-.5-.36 0-.54 0a1.05 1.05 0 0 0-.77.36 3.2 3.2 0 0 0-1 2.4 5.55 5.55 0 0 0 1.18 3 12.7 12.7 0 0 0 4.85 4.3c.68.3 1.2.47 1.62.6a3.92 3.92 0 0 0 1.78.12 2.93 2.93 0 0 0 1.93-1.36 2.4 2.4 0 0 0 .17-1.36c-.07-.13-.27-.21-.57-.36Z" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function MobileFAM() {
  const { t } = useLang();
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    lastY.current = window.scrollY;
    let ticking = false;

    const handle = () => {
      const y = window.scrollY;
      const dy = y - lastY.current;
      if (Math.abs(dy) < SCROLL_DELTA) { ticking = false; return; }
      if (y < SCROLL_LOCK_TOP) setVisible(true);
      else if (dy > 0) setVisible(false);   // scrolling down → hide
      else setVisible(true);                // scrolling up → show
      lastY.current = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handle);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      role="navigation"
      aria-label="Quick contact"
      className={`fixed bottom-4 left-1/2 z-40 lg:hidden flex gap-2 px-2 py-2 rounded-full bg-cream/92 backdrop-blur-xl shadow-soft-lg border border-nude transition-transform duration-300 ${
        visible ? 'fam-visible' : 'fam-hidden'
      }`}
    >
      <a
        href={PHONE_TEL}
        onClick={() => haptic('tap')}
        aria-label={t.ui_v2.fam_call}
        className="w-12 h-12 rounded-full bg-brand text-cream grid place-items-center hover:bg-brand-deep transition-colors"
      >
        <IconPhone />
      </a>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => haptic('tap')}
        aria-label={t.ui_v2.fam_chat}
        className="w-12 h-12 rounded-full bg-[#25D366] text-white grid place-items-center hover:bg-[#1fb858] transition-colors"
      >
        <IconChat />
      </a>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => haptic('tap')}
        aria-label={t.ui_v2.fam_maps}
        className="w-12 h-12 rounded-full bg-rose text-white grid place-items-center hover:bg-rose-deep transition-colors"
      >
        <IconPin />
      </a>
    </div>
  );
}
