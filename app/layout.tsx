import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { LangProvider } from './components/LangProvider';
import { ThemeProvider } from './components/ThemeProvider';

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
  title: 'CAMI VAN — PMU & Nail Beauty Studio (Rustic)',
  description: 'Phun xăm thẩm mỹ Rustic Atelier — chân mày, môi, eyeliner, nối mi, nail. Studio chị Cẩm Vân.',
  metadataBase: new URL('https://camivan.example.com'),
  openGraph: {
    title: 'CAMI VAN — Rustic Atelier',
    description: 'Nâng niu vẻ đẹp tự nhiên. Microblading, Lip Blush, PMU Eyeliner, Lash, Nail Art.',
    locale: 'vi_VN',
    type: 'website',
    images: ['/client-3.jpg'],
  },
  alternates: { canonical: '/' },
};

const themeScript = "(function(){try{var s=localStorage.getItem('camivan-theme');var d=s==='dark'||(!s&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-inter text-text antialiased">
        <div className="bg-canvas" aria-hidden="true" />
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
