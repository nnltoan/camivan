'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { LANG_NAMES, Lang } from '../lib/i18n';
import BookingModal from './BookingModal';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  // Whether the inline menu fits the current viewport. Default true so server-rendered HTML
  // shows the menu; the JS effect below re-measures and toggles to hamburger if needed.
  const [menuFits, setMenuFits] = useState(true);

  const { lang, setLang, t } = useLang();
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

  // === Menu fit detection ===
  // Strategy: combine TWO methods so the Book button is never forced outside the bar.
  //   (a) Direct overflow check on the rendered bar: if scrollWidth > clientWidth, the
  //       visible content (logo + menu + cluster including Book) doesn't fit → hide menu.
  //   (b) Hidden measurer to compute the hypothetical full-menu width, with hysteresis
  //       so we only switch back to "show menu" when there is comfortable headroom.
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const measureRef = useRef<HTMLUListElement>(null); // hidden, off-screen, always measures full menu
  const clusterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measure = () => {
      const measurer = measureRef.current;
      const logo = logoRef.current;
      const cluster = clusterRef.current;
      if (!measurer || !logo || !cluster) return;

      // Bar grows naturally with its content (no max-w cap). We only need to make sure the
      // total bar content (logo + menu + cluster including Book) stays within the viewport
      // with a small margin on each side. If yes → bar shows full menu. If not → hamburger.
      const logoW = logo.offsetWidth;
      const menuW = measurer.scrollWidth;
      const clusterW = cluster.scrollWidth;
      // Bar internals: pl-2 (8) + pr-3 (12) + 2 main flex gaps (gap-3 lg:gap-4 = 16 each on lg)
      // + 2px border. Use slightly conservative 56 to absorb sub-pixel rounding.
      const BAR_INTERNAL = 56;
      // Side margins so bar doesn't touch viewport edges (12px on each side).
      const SIDE_MARGINS = 24;

      const need = logoW + menuW + clusterW + BAR_INTERNAL;
      const have = window.innerWidth - SIDE_MARGINS;

      // Hysteresis: switch to hamburger if it doesn't fit; switch back only if there's
      // 40px headroom, preventing oscillation when text width sits right on the threshold.
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

  const bookButtonClass =
    'shrink-0 bg-brand text-cream px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-[12px] lg:text-[13px] font-medium hover:bg-brand-deep hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer';

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
      {/* Bar — width follows content (no max-w cap), but JS hides menu before it overflows. */}
      <nav ref={navRef}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] w-max  flex items-center gap-3 lg:gap-4 pl-2 pr-3 py-1.5 rounded-full bg-cream/90 backdrop-blur-xl shadow-soft-sm border border-rose/30 whitespace-nowrap"
        aria-label="Primary"
      >
        {/* Logo — shrink-0 (always full size) */}
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

        {/* Hidden measurer — off-screen, always rendered to give us the menu's true width */}
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

        {/* Visible inline menu — only when menu fits */}
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

        {/* Right cluster — shrink-0, always fully visible */}
        <div ref={clusterRef} className="flex items-center gap-1.5 lg:gap-2 shrink-0">
          {/* Language switcher (hidden on very narrow screens but measured for fit calc) */}
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

          {/* Book button — anchor on home, modal trigger on detail pages */}
          {renderBookButton()}

          {/* Hamburger — visible on mobile/tablet OR when desktop menu doesn't fit */}
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

      {/* Mobile/overflow menu drawer */}
      {open && (
        <div className="fixed inset-0 z-[99] bg-cream pt-28 px-8 flex flex-col gap-5 overflow-y-auto">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-fraunces text-3xl text-brand-deep border-b border-nude pb-3 hover:italic"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          {/* Book entry — same path-aware behavior */}
          {isHome ? (
            <a
              href="#booking"
              className="font-fraunces text-3xl text-brand-deep border-b border-nude pb-3 hover:italic"
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
              className="text-left font-fraunces text-3xl text-brand-deep border-b border-nude pb-3 hover:italic"
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
                  lang === code ? 'bg-brand text-cream border-brand' : 'bg-nude text-brand-deep border-nude'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Booking modal — only mounted on detail pages where Book button opens it */}
      {!isHome && (
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      )}
    </>
  );
}
