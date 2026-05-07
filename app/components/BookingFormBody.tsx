'use client';

import { useState } from 'react';
import { useLang } from './LangProvider';
import { useToast } from './Toast';
import { haptic } from '../lib/haptic';

// === Real brand SVG icons (white, current color, 16px) ===
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
    </svg>
  );
}

function IconZalo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 5.806 2 10.5c0 2.71 1.49 5.118 3.81 6.683L5 22l3.866-2.226c.97.197 1.99.302 3.034.302 5.523 0 10-3.806 10-8.5S17.523 2 12 2zm-3.5 5.5h7v1.5l-4.5 4.5H15.5V15h-7v-1.5L13 9H8.5V7.5z"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const TIMES = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

const today = new Date().toISOString().split('T')[0];

const PHONE_E164 = '84847892052';
const ZALO_PROFILE = `https://zalo.me/${PHONE_E164}`;
const IG_POST = 'https://www.instagram.com/direct/t/17843459925428218/';
const IG_DM = 'https://www.instagram.com/direct/t/17843459925428218/';

// Localized clipboard alerts
const CLIPBOARD_ALERTS: Record<string, string> = {
  VI: '✓ Đã copy nội dung vào clipboard.\n\nVui lòng dán vào ô tin nhắn sau khi ứng dụng mở.',
  EN: '✓ Message copied to clipboard.\n\nPaste it in the chat after the app opens.',
  RU: '✓ Сообщение скопировано в буфер обмена.\n\nВставьте его в чат после открытия приложения.',
  ZH: '✓ 信息已复制到剪贴板。\n\n打开应用后请粘贴到聊天框。',
  JA: '✓ メッセージをクリップボードにコピーしました。\n\nアプリが開いたらメッセージ欄に貼り付けてください。',
  KO: '✓ 메시지가 클립보드에 복사되었습니다.\n\n앱이 열리면 메시지 입력창에 붙여넣어 주세요.',
  FR: "✓ Message copié dans le presse-papiers.\n\nCollez-le dans la conversation une fois l'application ouverte.",
  ES: '✓ Mensaje copiado al portapapeles.\n\nPégalo en el chat después de que se abra la aplicación.',
};

function buildBookingMessage(
  lang: string,
  data: { name: string; phone: string; service: string; date: string; time: string; note: string }
): string {
  const { name, phone, service, date, time, note } = data;
  const blank = (v: string) => v || '—';
  if (lang === 'VI') {
    return (
      `Xin chào CAMI VAN ✨\n\nTôi muốn đặt lịch:\n` +
      `• Họ tên: ${blank(name)}\n` +
      `• SĐT: ${blank(phone)}\n` +
      `• Dịch vụ: ${service}\n` +
      `• Ngày: ${blank(date)}\n` +
      `• Giờ: ${time}\n` +
      (note ? `• Ghi chú: ${note}\n` : '') +
      `\nNhờ chị xác nhận giúp em ạ!`
    );
  }
  return (
    `Hello CAMI VAN ✨\n\nI'd like to book an appointment:\n` +
    `• Name: ${blank(name)}\n` +
    `• Phone: ${blank(phone)}\n` +
    `• Service: ${service}\n` +
    `• Date: ${blank(date)}\n` +
    `• Time: ${time}\n` +
    (note ? `• Note: ${note}\n` : '') +
    `\nPlease confirm — thank you!`
  );
}

type ServiceKey = 'microblading' | 'lip' | 'eyeliner' | 'lash' | 'skin';

interface Props {
  defaultServiceKey?: ServiceKey;
  /** Called after a channel button is clicked successfully (validation passed). */
  onSent?: () => void;
  /** When true, hide the IG sample reel link (e.g., inside modal where space is tight). */
  hideIgPost?: boolean;
}

export default function BookingFormBody({ defaultServiceKey, onSent, hideIgPost = false }: Props) {
  const { t, lang } = useLang();
  const toast = useToast();

  const SERVICE_OPTIONS: { key: ServiceKey; name: string }[] = [
    { key: 'microblading', name: t.services.microblading.name },
    { key: 'lip', name: t.services.lip.name },
    { key: 'eyeliner', name: t.services.eyeliner.name },
    { key: 'lash', name: t.services.lash.name },
    { key: 'skin', name: t.services.skin.name },
  ];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceKey, setServiceKey] = useState<ServiceKey>(defaultServiceKey ?? SERVICE_OPTIONS[0].key);
  const [date, setDate] = useState('');
  const [time, setTime] = useState(TIMES[0]);
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const currentService = SERVICE_OPTIONS.find((s) => s.key === serviceKey)?.name || SERVICE_OPTIONS[0].name;

  const validate = () => {
    if (!name.trim()) return t.booking.error_name;
    if (!phone.trim()) return t.booking.error_phone;
    const phoneTrimmed = phone.trim();
    if (!/^[+\d\s\-().]+$/.test(phoneTrimmed)) return t.booking.error_phone_invalid;
    const digitsOnly = phoneTrimmed.replace(/[^\d]/g, '');
    if (digitsOnly.length < 8 || digitsOnly.length > 15) return t.booking.error_phone_invalid;
    if (!date) return t.booking.error_date;
    return '';
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, channel: 'wa' | 'zalo' | 'ig') => {
    const err = validate();
    if (err) {
      e.preventDefault();
      setError(err);
      haptic('warn');
      toast.show(err, 'error');
      return;
    }
    setError('');
    haptic('success');
    const msg = buildBookingMessage(lang, { name, phone, service: currentService, date, time, note });
    let url = '';
    if (channel === 'wa') {
      url = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(msg)}`;
    } else if (channel === 'zalo') {
      try { navigator.clipboard?.writeText(msg); } catch {/* ignore */}
      url = ZALO_PROFILE;
      toast.show(t.ui_v2.toast_copied, 'success');
    } else if (channel === 'ig') {
      try { navigator.clipboard?.writeText(msg); } catch {/* ignore */}
      url = IG_DM;
      toast.show(t.ui_v2.toast_copied, 'success');
    }
    if (channel === 'wa') {
      toast.show(t.ui_v2.toast_redirecting, 'info', 3000);
    }
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
    onSent?.();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-brand-deep mb-2 block">{t.booking.field_name}</span>
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(''); }}
            placeholder={t.booking.placeholder_name}
            className="glass-input"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-brand-deep mb-2 block">{t.booking.field_phone}</span>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setError(''); }}
            placeholder="0912 345 678"
            className="glass-input"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-brand-deep mb-2 block">{t.booking.field_service}</span>
          <select
            id="booking-service"
            name="service"
            value={serviceKey}
            onChange={(e) => setServiceKey(e.target.value as ServiceKey)}
            className="glass-input"
          >
            {SERVICE_OPTIONS.map((s) => (
              <option key={s.key} value={s.key}>{s.name}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-brand-deep mb-2 block">{t.booking.field_date}</span>
          <input
            id="booking-date"
            name="date"
            type="date"
            value={date}
            min={today}
            onChange={(e) => { setDate(e.target.value); setError(''); }}
            className="glass-input"
            required
          />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-brand-deep mb-2 block">{t.booking.field_time}</span>
          <div className="flex flex-wrap gap-2">
            {TIMES.map((tm) => (
              <button
                key={tm}
                type="button"
                onClick={() => setTime(tm)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  time === tm
                    ? 'bg-gradient-to-br from-brand to-rose-deep text-cream shadow-[0_8px_20px_-8px_rgba(139,69,19,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]'
                    : 'bg-white/55 dark:bg-white/8 backdrop-blur-sm border border-white/55 dark:border-white/15 text-brand-deep hover:-translate-y-0.5'
                }`}
              >
                {tm}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted leading-relaxed">{t.ui_v2.booking_time_tooltip}</p>
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-brand-deep mb-2 block">{t.booking.field_note}</span>
          <textarea
            id="booking-note"
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder={t.booking.field_note_placeholder}
            className="glass-input resize-none"
          />
        </label>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-700 bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl px-4 py-3">
          ⚠️ {error}
        </p>
      )}

      <div className="mt-8 pt-6 border-t border-white/30 dark:border-white/10">
        <p className="text-center text-sm text-muted mb-4">{t.booking.choose_channel}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a href="#" onClick={(e) => handleClick(e, 'wa')}
            className="relative flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium bg-[#25D366] text-white hover:-translate-y-0.5 hover:shadow-btn transition-all whitespace-nowrap cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
            <IconWhatsApp /> WhatsApp
            <span className="absolute -top-2 -right-2 bg-rose text-cream text-[10px] px-2 py-0.5 rounded-full font-semibold shadow-soft-sm">
              {t.ui_v2.booking_badge_fastest}
            </span>
          </a>
          <a href="#" onClick={(e) => handleClick(e, 'zalo')}
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium bg-[#0068FF] text-white hover:-translate-y-0.5 hover:shadow-btn transition-all whitespace-nowrap cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
            <IconZalo /> Zalo
          </a>
          <a href="#" onClick={(e) => handleClick(e, 'ig')}
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] text-white hover:-translate-y-0.5 hover:shadow-btn transition-all whitespace-nowrap cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
            <IconInstagram /> Instagram
          </a>
        </div>
      </div>
    </form>
  );
}
