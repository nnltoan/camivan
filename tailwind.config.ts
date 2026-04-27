import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
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
        glass: {
          warm:        'rgba(253, 245, 230, 0.42)',
          'warm-strong':'rgba(253, 245, 230, 0.62)',
          'warm-soft': 'rgba(253, 245, 230, 0.28)',
          rose:        'rgba(205, 133, 63, 0.18)',
          brown:       'rgba(139, 69, 19, 0.12)',
          'edge-light':'rgba(255, 255, 255, 0.55)',
          'edge-warm': 'rgba(245, 235, 220, 0.35)',
          'tint-bottom':'rgba(139, 69, 19, 0.10)',
        },
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
        'glass-sm': '0 10px 30px -10px rgba(139, 69, 19, 0.18), inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(139,69,19,0.06)',
        'glass-md': '0 24px 60px -25px rgba(139, 69, 19, 0.30), inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -1px 0 rgba(139,69,19,0.10)',
        'glass-lg': '0 40px 90px -30px rgba(62, 39, 35, 0.40), inset 0 1.5px 0 rgba(255,255,255,0.75), inset 0 -1px 0 rgba(139,69,19,0.12)',
        'glass-orb':'0 16px 40px -10px rgba(139, 69, 19, 0.35), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -1px 0 rgba(139,69,19,0.1)',
      },
      backdropBlur: {
        glass: '28px',
        'glass-lg': '40px',
      },
      backdropSaturate: {
        glass: '180%',
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
