'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { LANG_NAMES, Lang } from '../lib/i18n';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  // Click-outside + Esc-to-close for the language dropdown
  const langRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!langOpen) return;
    const handlePointer = (e: MouseEvent | TouchEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLangOpen(false);
    };
    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('touchstart', handlePointer);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('touchstart', handlePointer);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [langOpen]);

  const LINKS = [
    { href: '#services', label: t.nav.services },
    { href: '#gallery', label: t.nav.portfolio },
    { href: '#blog', label: t.nav.blog },
    { href: '#faq', label: t.nav.faq },
    { href: '#about', label: t.nav.about },
  ];

  return (
    <>
      <nav
        className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 lg:gap-4 pl-2 pr-3 py-1.5 rounded-full bg-cream/90 backdrop-blur-xl shadow-soft-sm border border-rose/30 max-w-[calc(100vw-1rem)] whitespace-nowrap"
        aria-label="Primary"
      >
        {/* Logo - extends full nav height via negative margin */}
        <Link href="/" aria-label="CAMI VAN home" className="shrink-0 -my-1.5 block">
          <Image
            src="/logo_camvan.png"
            alt="CAMI VAN"
            width={260}
            height={104}
            className="h-[72px] lg:h-20 w-auto"
            priority
          />
        </Link>

        {/* Center menu - shrinks if total exceeds viewport */}
        <ul className="flex gap-3 lg:gap-5 list-none min-w-0 overflow-hidden max-lg:hidden whitespace-nowrap">
          {LINKS.map((l) => (
            <li key={l.href} className="shrink-0">
              <Link
                href={l.href}
                className="text-sm font-medium text-text hover:text-brand transition-colors whitespace-nowrap"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right cluster - never shrinks */}
        <div className="flex items-center gap-1.5 lg:gap-2 shrink-0">
          {/* Language switcher (desktop only) */}
          <div ref={langRef} className="relative max-md:hidden">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 px-2.5 py-2 rounded-full text-xs font-semibold text-brand-deep hover:bg-nude transition-colors whitespace-nowrap"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              🌐 {lang}
              <span className="text-[10px]">▾</span>
            </button>
            {langOpen && (
              <ul
                className="absolute right-0 top-full mt-2 bg-cream rounded-2xl shadow-soft-md border border-nude min-w-[160px] py-2 z-50"
                role="listbox"
              >
                {(Object.keys(LANG_NAMES) as Lang[]).map((code) => (
                  <li key={code}>
                    <button
                      onClick={() => {
                        setLang(code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-nude transition-colors whitespace-nowrap ${
                        lang === code ? 'text-brand font-semibold' : 'text-text'
                      }`}
                      role="option"
                      aria-selected={lang === code}
                    >
                      <span className="font-mono text-xs mr-2 opacity-60">{code}</span>
                      {LANG_NAMES[code]}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Book button - never shrinks, always inside the bar */}
          <Link
            href="#booking"
            className="shrink-0 bg-brand text-cream px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-[12px] lg:text-[13px] font-medium hover:bg-brand-deep hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            {t.nav.book}
          </Link>

          {/* Hamburger (mobile/tablet only) */}
          <button
            className="lg:hidden ml-0.5 w-9 h-9 grid place-items-center"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block w-5 h-[2px] bg-brand">
              <span className={`absolute left-0 w-5 h-[2px] bg-brand transition-transform ${open ? 'rotate-45 top-0' : '-top-1.5'}`} />
              <span className={`absolute left-0 w-5 h-[2px] bg-brand transition-transform ${open ? '-rotate-45 top-0' : 'top-1.5'}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div className="fixed inset-0 z-[99] bg-cream pt-28 px-8 flex flex-col gap-5 lg:hidden overflow-y-auto">
          {[...LINKS, { href: '#booking', label: t.nav.book }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-fraunces text-3xl text-brand-deep border-b border-nude pb-3 hover:italic"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-dashed border-rose/50 pb-8">
            <span className="w-full text-xs uppercase tracking-wider text-muted mb-2">Ngôn ngữ / Language</span>
            {(Object.keys(LANG_NAMES) as Lang[]).map((code) => (
              <button
                key={code}
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border whitespace-nowrap ${
                  lang === code ? 'bg-brand text-cream border-brand' : 'bg-nude text-brand-deep border-nude'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
