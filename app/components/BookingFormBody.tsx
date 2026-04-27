'use client';

import { useState } from 'react';
import { useLang } from './LangProvider';

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

type ServiceKey = 'microblading' | 'lip' | 'eyeliner' | 'lash' | 'nail' | 'skin';

interface Props {
  defaultServiceKey?: ServiceKey;
  /** Called after a channel button is clicked successfully (validation passed). */
  onSent?: () => void;
  /** When true, hide the IG sample reel link (e.g., inside modal where space is tight). */
  hideIgPost?: boolean;
}

export default function BookingFormBody({ defaultServiceKey, onSent, hideIgPost = false }: Props) {
  const { t, lang } = useLang();

  const SERVICE_OPTIONS: { key: ServiceKey; name: string }[] = [
    { key: 'microblading', name: t.services.microblading.name },
    { key: 'lip', name: t.services.lip.name },
    { key: 'eyeliner', name: t.services.eyeliner.name },
    { key: 'lash', name: t.services.lash.name },
    { key: 'nail', name: t.services.nail.name },
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
      return;
    }
    setError('');
    const msg = buildBookingMessage(lang, { name, phone, service: currentService, date, time, note });
    let url = '';
    const clipAlert = CLIPBOARD_ALERTS[lang] || CLIPBOARD_ALERTS.EN;
    if (channel === 'wa') {
      url = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(msg)}`;
    } else if (channel === 'zalo') {
      try { navigator.clipboard?.writeText(msg); } catch {}
      url = ZALO_PROFILE;
      alert(clipAlert);
    } else if (channel === 'ig') {
      try { navigator.clipboard?.writeText(msg); } catch {}
      url = IG_DM;
      alert(clipAlert);
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
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(''); }}
            placeholder="Nguyễn Thị A"
            className="glass-input"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-brand-deep mb-2 block">{t.booking.field_phone}</span>
          <input
            type="tel"
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
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-brand-deep mb-2 block">{t.booking.field_note}</span>
          <textarea
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
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium bg-[#25D366] text-white hover:-translate-y-0.5 hover:shadow-btn transition-all whitespace-nowrap cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
            📱 WhatsApp
          </a>
          <a href="#" onClick={(e) => handleClick(e, 'zalo')}
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium bg-[#0068FF] text-white hover:-translate-y-0.5 hover:shadow-btn transition-all whitespace-nowrap cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
            💬 Zalo
          </a>
          <a href="#" onClick={(e) => handleClick(e, 'ig')}
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] text-white hover:-translate-y-0.5 hover:shadow-btn transition-all whitespace-nowrap cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
            📸 Instagram
          </a>
        </div>
        {!hideIgPost && (
          <div className="text-center text-xs text-muted mt-4">
            <a href={IG_POST} target="_blank" rel="noopener noreferrer" className="text-brand underline hover:text-brand-deep">
              {t.booking.ig_post_link}
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
