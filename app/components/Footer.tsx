'use client';

import Link from 'next/link';
import { useLang } from './LangProvider';

const PHONE_E164 = '84847892052';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=23+An+Thuong+18,+Da+Nang';
const IG_URL = 'https://www.instagram.com/cami_van.pmu.dn/';
const FB_URL = 'https://www.facebook.com/profile.php?id=61573529484893';
const ZALO_URL = `https://zalo.me/${PHONE_E164}`;
const WA_URL = `https://wa.me/${PHONE_E164}`;

// === Real brand SVG icons ===
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function IconZalo() {
  // Stylized "Z" inside a chat bubble
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2C6.477 2 2 5.806 2 10.5c0 2.71 1.49 5.118 3.81 6.683L5 22l3.866-2.226c.97.197 1.99.302 3.034.302 5.523 0 10-3.806 10-8.5S17.523 2 12 2zm-3.5 5.5h7v1.5l-4.5 4.5H15.5V15h-7v-1.5L13 9H8.5V7.5z"/>
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// Reusable icon orb — gradient rose with inset highlight
function IconOrb({ children, ariaLabel }: { children: React.ReactNode; ariaLabel?: string }) {
  return (
    <span
      aria-label={ariaLabel}
      className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-rose to-rose-deep grid place-items-center text-cream glow-icon"
    >
      {children}
    </span>
  );
}

export default function Footer() {
  const { t } = useLang();

  const socialLinks = [
    { href: WA_URL, label: 'WhatsApp', Icon: IconWhatsApp },
    { href: ZALO_URL, label: 'Zalo', Icon: IconZalo },
    { href: IG_URL, label: 'Instagram', Icon: IconInstagram },
    { href: FB_URL, label: 'Facebook', Icon: IconFacebook },
  ];

  return (
    <footer className="relative pt-16 pb-8 px-5 lg:px-12 border-t border-white/30 dark:border-white/10 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-x-16 lg:gap-y-12 mb-10">

        {/* === Column 1 — Brand identity (typographic, no logo) === */}
        <div className="lg:pr-4">
          <Link href="/" aria-label="CAMI VAN home" className="inline-block mb-3 group no-underline">
            <h3 className="font-fraunces text-[44px] lg:text-[52px] leading-none tracking-[-0.02em] text-brand-deep">
              Cami<span className="italic-accent">Van</span>
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-[1px] w-8 bg-rose-deep" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-rose-deep font-semibold">
                Rustic Atelier
              </span>
            </div>
          </Link>
          <p className="font-fraunces italic text-[14px] text-brand leading-relaxed max-w-[280px] mt-4">
            {t.footer.tagline}
          </p>
        </div>

        {/* === Column 2 — About === */}
        <div>
          <h4 className="font-semibold text-brand-deep mb-4 text-[11px] uppercase tracking-[0.15em]">{t.footer.about_title}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/#about" className="text-muted hover:text-brand transition-colors no-underline">{t.footer.about_us}</a></li>
            <li><a href="/#gallery" className="text-muted hover:text-brand transition-colors no-underline">{t.footer.portfolio_link}</a></li>
            <li><a href="/#blog" className="text-muted hover:text-brand transition-colors no-underline">{t.footer.blog_link}</a></li>
            <li><a href="/#faq" className="text-muted hover:text-brand transition-colors no-underline">{t.nav.faq}</a></li>
          </ul>
        </div>

        {/* === Column 3 — Services === */}
        <div>
          <h4 className="font-semibold text-brand-deep mb-4 text-[11px] uppercase tracking-[0.15em]">{t.footer.services_title}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/microblading" className="text-muted hover:text-brand transition-colors no-underline">{t.services.microblading.name}</Link></li>
            <li><Link href="/services/lip-blush" className="text-muted hover:text-brand transition-colors no-underline">{t.services.lip.name}</Link></li>
            <li><Link href="/services/eyeliner" className="text-muted hover:text-brand transition-colors no-underline">{t.services.eyeliner.name}</Link></li>
            <li><Link href="/services/noi-mi" className="text-muted hover:text-brand transition-colors no-underline">{t.services.lash.name}</Link></li>
            <li><Link href="/services/nail-art" className="text-muted hover:text-brand transition-colors no-underline">{t.services.nail.name}</Link></li>
            <li><Link href="/services/cham-soc-da" className="text-muted hover:text-brand transition-colors no-underline">{t.services.skin.name}</Link></li>
          </ul>
        </div>

        {/* === Column 4 — Contact === */}
        <div>
          <h4 className="font-semibold text-brand-deep mb-4 text-[11px] uppercase tracking-[0.15em]">{t.footer.contact_title}</h4>

          {/* Primary contacts */}
          <div className="space-y-3.5 mb-3.5">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-sm text-muted hover:text-brand transition-colors no-underline"
            >
              <IconOrb ariaLabel="Address"><IconPin /></IconOrb>
              <span className="leading-snug pt-0.5">{t.footer.address}</span>
            </a>
            <a
              href="tel:+84847892052"
              className="flex items-center gap-2.5 text-sm text-muted hover:text-brand transition-colors no-underline"
            >
              <IconOrb ariaLabel="Phone"><IconPhone /></IconOrb>
              <span>0847 892 052</span>
            </a>
          </div>

          {/* Social links */}
          <div className="space-y-3.5">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted hover:text-brand transition-colors no-underline"
              >
                <IconOrb ariaLabel={label}><Icon /></IconOrb>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Bottom bar === */}
      {/* === Bottom bar === */}
      <div className="max-w-[1400px] mx-auto text-center text-xs text-muted pt-6 border-t border-white/30 dark:border-white/10">
        {t.footer.copyright.split('{DANALINK}').map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && (
              <a
                href="https://danaexperts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-deep underline transition-colors"
              >
                Danaexperts.com
              </a>
            )}
          </span>
        ))}
      </div>
    </footer>
  );
}
