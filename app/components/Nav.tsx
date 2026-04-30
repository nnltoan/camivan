'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { useTheme } from './ThemeProvider';
import { LANG_NAMES, Lang } from '../lib/i18n';
import BookingModal from './BookingModal';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [menuFits, setMenuFits] = useState(true);

  const { lang, setLang, t } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';

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

  // === Menu fit detection (preserved from original) ===
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const measureRef = useRef<HTMLUListElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const measure = () => {
      const measurer = measureRef.current;
      const logo = logoRef.current;
      const cluster = clusterRef.current;
      if (!measurer || !logo || !cluster) return;
      const logoW = logo.offsetWidth;
      const menuW = measurer.scrollWidth;
      const clusterW = cluster.scrollWidth;
      const BAR_INTERNAL = 56;
      const SIDE_MARGINS = 24;
      const need = logoW + menuW + clusterW + BAR_INTERNAL;
      const have = window.innerWidth - SIDE_MARGINS;
      const HYSTERESIS = 40;
      const fits = need <= have;
      const fitsWithHeadroom = need + HYSTERESIS <= have;
      setMenuFits((prev) => (prev ? fits : fitsWithHeadroom));
    };
    measure();
    const timers = [50, 200, 600, 1500].map((ms) => setTimeout(measure, ms));
    window.addEventListener('resize', measure);
    let ro: ResizeObserver | null = null;
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(measure);
      if (logoRef.current) ro.observe(logoRef.current);
      if (clusterRef.current) ro.observe(clusterRef.current);
      if (measureRef.current) ro.observe(measureRef.current);
      if (navRef.current) ro.observe(navRef.current);
    }
    return () => {
      window.removeEventListener('resize', measure);
      timers.forEach(clearTimeout);
      ro?.disconnect();
    };
  }, [lang, t]);

  const LINKS = [
    { href: '/#services', label: t.nav.services },
    { href: '/#gallery', label: t.nav.portfolio },
    { href: '/#blog', label: t.nav.blog },
    { href: '/#faq', label: t.nav.faq },
    { href: '/#about', label: t.nav.about },
  ];

  // CTA button — gradient brand → rose-deep with inset highlight
  const bookButtonClass =
    'shrink-0 px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-[12px] lg:text-[13px] font-medium whitespace-nowrap cursor-pointer text-cream transition-all hover:-translate-y-0.5 ' +
    'bg-gradient-to-br from-brand to-rose-deep ' +
    'shadow-[0_12px_30px_-10px_rgba(139,69,19,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] ' +
    'hover:shadow-[0_18px_40px_-10px_rgba(139,69,19,0.7),inset_0_1px_0_rgba(255,255,255,0.45)]';

  const renderBookButton = () =>
    isHome ? (
      <a href="#booking" className={bookButtonClass}>
        {t.nav.book}
      </a>
    ) : (
      <button type="button" onClick={() => setBookingOpen(true)} className={bookButtonClass}>
        {t.nav.book}
      </button>
    );

  return (
    <>
      {/* === GLASS PILL NAV — frosted with specular edge === */}
      <nav
        ref={navRef}
        className="liquid-surface fixed top-3 left-1/2 -translate-x-1/2 z-[100] w-max flex items-center gap-3 lg:gap-4 pl-2 pr-3 py-1.5 rounded-full whitespace-nowrap"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link ref={logoRef} href="/" aria-label="CAMI VAN home" className="shrink-0 -my-1.5 block">
          <Image
            src="/logo_camvan.png"
            alt="CAMI VAN"
            width={850}
            height={711}
            className="h-[72px] lg:h-20 w-auto"
            priority
          />
        </Link>

        {/* Hidden measurer */}
        <ul
          ref={measureRef}
          aria-hidden="true"
          className="absolute top-0 left-0 -translate-y-[200%] opacity-0 pointer-events-none flex gap-3 lg:gap-5 list-none whitespace-nowrap"
        >
          {LINKS.map((l) => (
            <li key={`measure-${l.href}`}>
              <span className="text-sm font-medium">{l.label}</span>
            </li>
          ))}
        </ul>

        {/* Visible inline menu */}
        {menuFits && (
          <ul className="hidden lg:flex shrink-0 gap-3 lg:gap-5 list-none whitespace-nowrap">
            {LINKS.map((l) => (
              <li key={l.href} className="shrink-0">
                <a
                  href={l.href}
                  className="text-sm font-medium text-text hover:text-brand transition-colors whitespace-nowrap"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Right cluster */}
        <div ref={clusterRef} className="flex items-center gap-1.5 lg:gap-2 shrink-0">
          {/* Theme toggle (light/dark) */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-8 h-8 lg:w-9 lg:h-9 grid place-items-center rounded-full text-brand-deep hover:bg-white/40 dark:hover:bg-white/10 transition-colors text-sm"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          {/* Language switcher */}
          <div ref={langRef} className="relative max-md:hidden">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 px-2.5 py-2 rounded-full text-xs font-semibold text-brand-deep hover:bg-white/40 dark:hover:bg-white/10 transition-colors whitespace-nowrap"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              🌐 {lang}
              <span className="text-[10px]">▾</span>
            </button>
            {langOpen && (
              <ul
                className="liquid-surface-strong absolute right-0 top-full mt-2 rounded-2xl min-w-[160px] py-2 z-50"
                role="listbox"
              >
                {(Object.keys(LANG_NAMES) as Lang[]).map((code) => (
                  <li key={code}>
                    <button
                      onClick={() => {
                        setLang(code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-white/40 dark:hover:bg-white/10 transition-colors whitespace-nowrap ${
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

          {/* Book button */}
          {renderBookButton()}

          {/* Hamburger */}
          <button
            className={`${menuFits ? 'lg:hidden' : ''} ml-0.5 w-9 h-9 grid place-items-center`}
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

      {/* Mobile/overflow menu drawer — full-screen glass */}
      {open && (
        <div className="liquid-surface-strong fixed inset-0 z-[99] pt-28 px-8 flex flex-col gap-5 overflow-y-auto rounded-none">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-fraunces text-3xl text-brand-deep border-b border-white/30 dark:border-white/10 pb-3 hover:italic"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          {isHome ? (
            <a
              href="#booking"
              className="font-fraunces text-3xl text-brand-deep border-b border-white/30 dark:border-white/10 pb-3 hover:italic"
              onClick={() => setOpen(false)}
            >
              {t.nav.book}
            </a>
          ) : (
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setBookingOpen(true);
              }}
              className="text-left font-fraunces text-3xl text-brand-deep border-b border-white/30 dark:border-white/10 pb-3 hover:italic"
            >
              {t.nav.book}
            </button>
          )}
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
                  lang === code
                    ? 'bg-brand text-cream border-brand'
                    : 'bg-white/40 dark:bg-white/5 text-brand-deep border-white/40 dark:border-white/10'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Booking modal on detail pages */}
      {!isHome && (
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      )}
    </>
  );
}
