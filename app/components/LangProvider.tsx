'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { DICT, Lang, Dict, detectBrowserLang, getStoredLang, setStoredLang } from '../lib/i18n';

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  ready: boolean;
}

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  // Default EN (NOT Vietnamese) for SSR + before hydration
  const [lang, setLangState] = useState<Lang>('EN');
  const [ready, setReady] = useState(false);

  // After mount, check localStorage first, then browser language
  useEffect(() => {
    const stored = getStoredLang();
    if (stored) {
      setLangState(stored);
    } else {
      // First-time visitor — detect browser language
      const browserLang = detectBrowserLang();
      setLangState(browserLang);
      setStoredLang(browserLang); // Save initial detection
    }
    setReady(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    setStoredLang(l);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l.toLowerCase();
    }
  };

  // Update html lang on lang change
  useEffect(() => {
    if (typeof document !== 'undefined' && ready) {
      document.documentElement.lang = lang.toLowerCase();
    }
  }, [lang, ready]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: DICT[lang], ready }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
