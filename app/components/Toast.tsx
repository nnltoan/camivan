'use client';

/**
 * ToastProvider — minimal toast/snackbar system.
 * - Stacks multiple, auto-dismiss after `duration` ms (default 5000).
 * - Render in a portal-less aria-live region for screen-reader feedback.
 * - Use `useToast()` from any client component to call `show(message, type)`.
 */

import {
  createContext, useCallback, useContext, useState, ReactNode,
} from 'react';

export type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  show: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((arr) => arr.filter((x) => x.id !== id));
  }, []);

  const show = useCallback(
    (message: string, type: ToastType = 'success', duration = 5000) => {
      const id = Date.now() + Math.random();
      setToasts((arr) => [...arr, { id, message, type }]);
      window.setTimeout(() => dismiss(id), duration);
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ show }}>
      {children}

      {/* aria-live region — tap-resistant overlay so toasts don't block clicks below */}
      <div
        className="fixed top-24 right-4 z-[120] flex flex-col gap-2 pointer-events-none w-[calc(100%-2rem)] max-w-sm"
        aria-live="polite"
        aria-atomic="false"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role={t.type === 'error' ? 'alert' : 'status'}
            className={`pointer-events-auto animate-toast-in flex items-center gap-3 px-4 py-3 rounded-2xl shadow-soft-lg backdrop-blur-md border text-sm
              ${t.type === 'success' ? 'bg-brand/95 text-cream border-brand' : ''}
              ${t.type === 'error'   ? 'bg-rose-deep/95 text-cream border-rose-deep' : ''}
              ${t.type === 'info'    ? 'bg-cream/95 text-brand-deep border-nude' : ''}
            `}
          >
            <span aria-hidden="true" className="shrink-0 text-base">
              {t.type === 'success' ? '✓' : t.type === 'error' ? '⚠' : 'ℹ'}
            </span>
            <span className="flex-1">{t.message}</span>
            <button
              type="button"
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss"
              className="opacity-70 hover:opacity-100 transition-opacity text-base leading-none -mr-1"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  // No-op fallback so components can safely call useToast() even when the provider
  // is not mounted (e.g., during isolated unit tests). Production renders the provider
  // in app/layout.tsx so this fallback never fires.
  return ctx ?? { show: () => {} };
}
