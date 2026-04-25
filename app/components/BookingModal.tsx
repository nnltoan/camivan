'use client';

import { useEffect } from 'react';
import { useLang } from './LangProvider';
import BookingFormBody from './BookingFormBody';

type ServiceKey = 'microblading' | 'lip' | 'eyeliner' | 'lash' | 'nail' | 'skin';

interface Props {
  open: boolean;
  onClose: () => void;
  defaultServiceKey?: ServiceKey;
}

export default function BookingModal({ open, onClose, defaultServiceKey }: Props) {
  const { t } = useLang();

  // Lock body scroll while modal is open + Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-6 bg-brand-deep/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-cream border border-nude rounded-3xl shadow-soft-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-cream/95 backdrop-blur border-b border-nude px-6 py-4 lg:px-8 flex items-start justify-between gap-4 rounded-t-3xl">
          <div className="min-w-0">
            <span className="inline-block bg-nude text-brand px-3 py-1 rounded-full text-[11px] font-medium mb-1.5">
              {t.booking.label}
            </span>
            <h3 id="booking-modal-title" className="font-fraunces text-2xl lg:text-3xl text-brand-deep">
              {t.booking.title} <span className="italic-accent">{t.booking.title_accent}</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking form"
            className="shrink-0 w-10 h-10 grid place-items-center rounded-full bg-nude hover:bg-rose hover:text-cream text-brand-deep transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 lg:px-8 lg:py-6">
          <p className="text-muted text-sm mb-2">{t.booking.description}</p>
          <p className="text-xs text-muted italic mb-6">{t.booking.note}</p>
          <BookingFormBody defaultServiceKey={defaultServiceKey} onSent={onClose} hideIgPost />
        </div>
      </div>
    </div>
  );
}
