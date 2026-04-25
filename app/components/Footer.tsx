'use client';

import Link from 'next/link';
import { useLang } from './LangProvider';

export default function Footer() {
  const { t } = useLang();
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=23+An+Thuong+18,+Da+Nang';

  return (
    <footer className="bg-cream pt-20 pb-10 px-5 lg:px-20 border-t border-nude">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-fraunces text-3xl text-brand mb-2">CAMI VAN ✿</h3>
          <p className="text-xs text-brand-deep font-semibold tracking-wider uppercase mb-3">PMU &amp; SKIN</p>
          <p className="text-muted text-sm leading-relaxed mb-4">{t.footer.tagline}</p>
          <p className="text-xs text-muted mb-1.5">
            📍{' '}
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
              {t.footer.address}
            </a>
          </p>
          <p className="text-xs text-muted">
            ☎️{' '}
            <a href="tel:+84847892052" className="hover:text-brand transition-colors">
              0847 892 052
            </a>
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-brand-deep mb-4 text-sm uppercase tracking-wider">{t.footer.about_title}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/#about" className="text-muted hover:text-brand transition-colors">{t.footer.about_us}</a></li>
            <li><a href="/#gallery" className="text-muted hover:text-brand transition-colors">{t.footer.portfolio_link}</a></li>
            <li><a href="/#blog" className="text-muted hover:text-brand transition-colors">{t.footer.blog_link}</a></li>
            <li><a href="/#faq" className="text-muted hover:text-brand transition-colors">{t.nav.faq}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-brand-deep mb-4 text-sm uppercase tracking-wider">{t.footer.services_title}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/microblading" className="text-muted hover:text-brand transition-colors">{t.services.microblading.name}</Link></li>
            <li><Link href="/services/lip-blush" className="text-muted hover:text-brand transition-colors">{t.services.lip.name}</Link></li>
            <li><Link href="/services/eyeliner" className="text-muted hover:text-brand transition-colors">{t.services.eyeliner.name}</Link></li>
            <li><Link href="/services/noi-mi" className="text-muted hover:text-brand transition-colors">{t.services.lash.name}</Link></li>
            <li><Link href="/services/nail-art" className="text-muted hover:text-brand transition-colors">{t.services.nail.name}</Link></li>
            <li><Link href="/services/cham-soc-da" className="text-muted hover:text-brand transition-colors">{t.services.skin.name}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-brand-deep mb-4 text-sm uppercase tracking-wider">{t.footer.contact_title}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://wa.me/84847892052" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand transition-colors">WhatsApp</a></li>
            <li><a href="https://zalo.me/84847892052" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand transition-colors">Zalo</a></li>
            <li><a href="https://www.instagram.com/direct/t/17843459925428218/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand transition-colors">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61573529484893" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand transition-colors">Facebook</a></li>
            <li><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand transition-colors">Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-muted pt-8 border-t border-nude">
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
