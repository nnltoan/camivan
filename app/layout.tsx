import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { LangProvider } from './components/LangProvider';
import { ThemeProvider } from './components/ThemeProvider';
import { ToastProvider } from './components/Toast';
import PageTransition from './components/PageTransition';

const fraunces = Fraunces({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CAMI VAN — PMU & Beauty Studio (Rustic)',
  description: 'Phun xăm thẩm mỹ Rustic Atelier — chân mày, môi, eyeliner, nối mi, chăm sóc da. Studio chị Cẩm Vân.',
  metadataBase: new URL('https://camivan.example.com'),
  openGraph: {
    title: 'CAMI VAN — Rustic Atelier',
    description: 'Nâng niu vẻ đẹp tự nhiên. Microblading, Lip Blush, PMU Eyeliner, Lash, Skin Care.',
    locale: 'vi_VN',
    type: 'website',
    images: ['/client-3.jpg'],
  },
  alternates: { canonical: '/' },
};

const themeScript = "(function(){try{var s=localStorage.getItem('camivan-theme');var d=s==='dark'||(!s&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();";

/* ──────────────────────────────────────────────────────────────────────
 * Schema.org JSON-LD — BeautySalon
 * Helps Google Local Pack, rich snippets, voice search.
 * Update aggregateRating.ratingValue/reviewCount as real reviews come in.
 * ──────────────────────────────────────────────────────────────────────*/
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  '@id': 'https://camivan.example.com/#business',
  name: 'CAMI VAN — PMU & Skin Studio',
  alternateName: 'Cẩm Vân Beauty Studio',
  description:
    'Phun xăm thẩm mỹ Rustic Atelier — chân mày, môi, eyeliner, nối mi, chăm sóc da. Studio chị Cẩm Vân, công nghệ Châu Âu, mực organic, bảo hành 2 năm.',
  url: 'https://camivan.example.com/',
  logo: 'https://camivan.example.com/logo_camvan.png',
  image: [
    'https://camivan.example.com/cami-van-photo.jpg',
    'https://camivan.example.com/show-room.jpg',
    'https://camivan.example.com/client-3.jpg',
  ],
  telephone: '+84-84-789-2052',
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Bank Transfer', 'Momo', 'ZaloPay'],
  currenciesAccepted: 'VND',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '23 An Thượng 18',
    addressLocality: 'Đà Nẵng',
    addressRegion: 'Đà Nẵng',
    postalCode: '550000',
    addressCountry: 'VN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 16.0473,
    longitude: 108.2466,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  founder: {
    '@type': 'Person',
    name: 'Cẩm Vân',
    jobTitle: 'PMU Artist · Founder',
  },
  sameAs: [
    'https://www.instagram.com/cami_van.pmu.dn/',
    'https://wa.me/84847892052',
    'https://zalo.me/84847892052',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dịch vụ phun xăm & chăm sóc',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Microblading chân mày' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lip Blush phun môi' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PMU Eyeliner' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nối mi thẩm mỹ' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chăm sóc da' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '2500',
    bestRating: '5',
    worstRating: '1',
  },
  knowsLanguage: ['vi', 'en', 'ru', 'zh', 'ja', 'ko', 'fr', 'es'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* LCP: preload above-the-fold images so they start downloading before HTML parses further */}
        <link rel="preload" as="image" href="/client-3.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/before-after/microblading-after.webp" fetchPriority="high" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="font-inter text-text antialiased">
        <div className="bg-canvas" aria-hidden="true" />
        <ThemeProvider>
          <LangProvider>
            <ToastProvider><PageTransition>{children}</PageTransition></ToastProvider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
