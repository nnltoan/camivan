import type { Config } from 'tailwindcss';

/* CAMI VAN — Rustic Atelier color preset (nâu rỉ sét) */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nude: '#F5EBDC',
        rose: { DEFAULT: '#CD853F', deep: '#A0522D' },
        brand: { DEFAULT: '#8B4513', deep: '#3E2723' },
        cream: '#FDF5E6',
        text: '#2C1810',
        muted: '#6D4C41',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem', nav: '60px' },
      boxShadow: {
        'soft-sm': '0 10px 40px rgba(139, 69, 19, 0.08)',
        'soft-md': '0 20px 50px -20px rgba(139, 69, 19, 0.2)',
        'soft-lg': '0 40px 80px -30px rgba(139, 69, 19, 0.2)',
        'soft-xl': '0 40px 80px -30px rgba(139, 69, 19, 0.3)',
        btn: '0 20px 40px -20px rgba(139, 69, 19, 0.5)',
        wa: '0 15px 40px rgba(139, 69, 19, 0.4)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
        flip: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
