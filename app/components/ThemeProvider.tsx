'use client';

/* ThemeProvider — Warm Liquid Glass dark/light mode
 * Persists choice in localStorage, syncs with prefers-color-scheme on first visit.
 * Adds .dark class on <html> for Tailwind darkMode:'class' to pick up.
 */

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface Ctx {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
  ready: boolean;
}

const ThemeContext = createContext<Ctx | null>(null);

const STORAGE_KEY = 'camivan-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let initial: Theme = 'light';
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored === 'light' || stored === 'dark') {
        initial = stored;
      } else if (typeof window !== 'undefined' && window.matchMedia) {
        initial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
    } catch {}
    setThemeState(initial);
    applyTheme(initial);
    setReady(true);
  }, []);

  const applyTheme = (t: Theme) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (t === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    applyTheme(t);
    try { localStorage.setItem(STORAGE_KEY, t); } catch {}
  };

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle, ready }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
