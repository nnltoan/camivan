'use client';

import ScrollReveal, { staggerContainer, staggerItem } from './ScrollReveal';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from './LangProvider';
import { Lang } from '../lib/i18n';

type L<T> = Record<Lang, T>;

interface Review {
  name: string;
  initials: string;
  rating: number;
  source: 'google';
  date: L<string>;
  service: L<string>;
  text: L<string>;
}

// Real Google reviews — translated faithfully to all 8 languages.
const REVIEWS: Review[] = [
  {
    name: 'Hạnh Nguyễn Thị',
    initials: 'HN',
    rating: 5,
    source: 'google',
    date: { VI: '11 tháng trước', EN: '11 months ago', RU: '11 месяцев назад', ZH: '11 个月前', JA: '11 ヶ月前', KO: '11개월 전', FR: 'Il y a 11 mois', ES: 'Hace 11 meses' },
    service: { VI: 'Phun môi', EN: 'Lip PMU', RU: 'Татуаж губ', ZH: '唇部纹绣', JA: 'リップ PMU', KO: '립 PMU', FR: 'PMU lèvres', ES: 'PMU labios' },
    text: {
      VI: 'Mình mới xăm môi ở đây và rất ưng ý. Màu lên đều, nhìn tự nhiên và môi không bị sưng nhiều. Nhân viên làm nhẹ tay, nhiệt tình nữa.',
      EN: 'I just had my lips done here and I really love it. The color heals evenly, looks natural, and there was barely any swelling. The staff has a gentle touch and is so warm.',
      RU: 'Только что сделала губы здесь — в восторге. Цвет ровный, выглядит натурально, почти без отёка. Мастер работает мягко, очень душевная.',
      ZH: '我刚在这里纹了唇，非常满意。颜色均匀、看起来自然，几乎不肿。师傅手法轻柔，态度也很热情。',
      JA: 'ここでリップ PMU をしてもらい、とても満足。色は均一で自然、ほとんど腫れませんでした。スタッフの手つきは優しく、温かい対応でした。',
      KO: '여기서 입술 PMU를 받았는데 정말 만족스러워요. 색이 고르게 발색되고 자연스러우며, 거의 붓지 않았어요. 직원이 손길이 부드럽고 따뜻해요.',
      FR: "Je viens de faire mes lèvres ici et j'adore. La couleur est uniforme, naturelle, et presque pas de gonflement. Le toucher est tout en douceur et l'accueil chaleureux.",
      ES: 'Acabo de hacer mis labios aquí y me encanta. El color sana parejo, se ve natural y casi sin hinchazón. La técnica es muy suave y el trato cálido.',
    },
  },
  {
    name: 'Ý Trần',
    initials: 'YT',
    rating: 5,
    source: 'google',
    date: { VI: 'Vài ngày trước', EN: 'A few days ago', RU: 'Несколько дней назад', ZH: '几天前', JA: '数日前', KO: '며칠 전', FR: 'Il y a quelques jours', ES: 'Hace unos días' },
    service: { VI: 'Phun môi', EN: 'Lip PMU', RU: 'Татуаж губ', ZH: '唇部纹绣', JA: 'リップ PMU', KO: '립 PMU', FR: 'PMU lèvres', ES: 'PMU labios' },
    text: {
      VI: 'Cô ấy có tay nghề rất tốt. Đã phun cho tôi một đôi môi quyến rũ và tươi trẻ. Cảm ơn bạn!',
      EN: 'She is incredibly skilled. She gave me a pair of alluring, youthful lips. Thank you!',
      RU: 'Очень опытный мастер. Сделала мне соблазнительные, молодые губы. Спасибо!',
      ZH: '她的手艺非常好。给我做了一双迷人又年轻的双唇。谢谢！',
      JA: 'とても腕の良い方です。魅惑的で若々しい唇に仕上げてくれました。ありがとう！',
      KO: '정말 실력이 좋으세요. 매혹적이고 젊은 입술을 만들어 주셨어요. 감사합니다!',
      FR: 'Elle est extrêmement talentueuse. Elle m\'a offert des lèvres séduisantes et rajeunissantes. Merci !',
      ES: 'Tiene muchísimo talento. Me regaló unos labios seductores y rejuvenecedores. ¡Gracias!',
    },
  },
  {
    name: 'Dinh Trang',
    initials: 'DT',
    rating: 5,
    source: 'google',
    date: { VI: 'Một năm trước', EN: 'A year ago', RU: 'Год назад', ZH: '一年前', JA: '1 年前', KO: '1년 전', FR: 'Il y a un an', ES: 'Hace un año' },
    service: { VI: 'Phun mày & môi', EN: 'Brows & Lip PMU', RU: 'Татуаж бровей и губ', ZH: '眉毛和唇部纹绣', JA: '眉とリップ PMU', KO: '눈썹 & 립 PMU', FR: 'PMU sourcils & lèvres', ES: 'PMU cejas y labios' },
    text: {
      VI: 'Chị làm mày và môi rất đẹp, em rất thích ạ.',
      EN: 'She did my brows and lips beautifully — I love it!',
      RU: 'Очень красиво сделала брови и губы — я в восторге!',
      ZH: '老师做的眉毛和嘴唇都非常漂亮，我超喜欢！',
      JA: '眉と唇を本当にきれいに仕上げてくれました。大好きです！',
      KO: '눈썹과 입술 정말 예쁘게 해주셔서 너무 마음에 들어요!',
      FR: "Elle a fait mes sourcils et mes lèvres magnifiquement — j'adore !",
      ES: '¡Me hizo las cejas y los labios preciosos, me encantan!',
    },
  },
  {
    name: 'Secrets Midnight',
    initials: 'SM',
    rating: 5,
    source: 'google',
    date: { VI: '2 tuần trước', EN: '2 weeks ago', RU: '2 недели назад', ZH: '2 周前', JA: '2 週間前', KO: '2주 전', FR: 'Il y a 2 semaines', ES: 'Hace 2 semanas' },
    service: { VI: 'Phun xăm thẩm mỹ', EN: 'PMU service', RU: 'PMU процедура', ZH: 'PMU 服务', JA: 'PMU 施術', KO: 'PMU 시술', FR: 'Soin PMU', ES: 'Servicio PMU' },
    text: {
      VI: 'Thật sự hài lòng! Có thể nhìn thấy sự tự nhiên thật sự. Nỗi lo lắng đã biến mất hoàn toàn 💯',
      EN: 'Truly satisfied! You can really see the natural look. All my anxiety has disappeared completely 💯',
      RU: 'Правда довольна! Виден настоящий естественный результат. Вся тревога ушла полностью 💯',
      ZH: '真的非常满意！可以看到真正的自然感。我的担忧完全消失了 💯',
      JA: '本当に満足！本物の自然さが見えます。不安は完全に消えました 💯',
      KO: '정말 만족스러워요! 진짜 자연스러움이 보여요. 걱정이 완전히 사라졌어요 💯',
      FR: "Vraiment satisfaite ! On voit le naturel authentique. Toute mon angoisse a complètement disparu 💯",
      ES: '¡Verdaderamente satisfecha! Se nota la naturalidad auténtica. Toda mi ansiedad desapareció por completo 💯',
    },
  },
  {
    name: 'Thanh Hương',
    initials: 'TH',
    rating: 5,
    source: 'google',
    date: { VI: 'Một năm trước', EN: 'A year ago', RU: 'Год назад', ZH: '一年前', JA: '1 年前', KO: '1년 전', FR: 'Il y a un an', ES: 'Hace un año' },
    service: { VI: 'Gội đầu, massage & nail', EN: 'Hair, massage & nail', RU: 'Уход, массаж и ногти', ZH: '洗头、按摩 & 美甲', JA: 'シャンプー、マッサージ、ネイル', KO: '두피, 마사지 & 네일', FR: 'Coiffure, massage & ongles', ES: 'Lavado, masaje y uñas' },
    text: {
      VI: 'Chỗ này gội đầu, massage cổ vai gáy cực sướng, giá lại hợp lý. Mình thử làm thêm bộ móng tay gel nữa, rất đẹp. Nói chung rất hài lòng với tay nghề của nhân viên.',
      EN: 'The hair wash and neck-shoulder massage here are absolutely heavenly, and the price is reasonable. I also tried gel nails — gorgeous. Overall, very happy with the staff\'s skills.',
      RU: 'Мойка головы и массаж шеи и плеч здесь невероятно расслабляющие, и цена адекватная. Также сделала гель-маникюр — красота. В целом очень довольна мастерами.',
      ZH: '这家的洗头、肩颈按摩超级享受，价格也合理。我还做了一套凝胶美甲，非常漂亮。总之对员工的手艺很满意。',
      JA: 'シャンプーと首肩マッサージが最高に気持ち良く、価格もお手頃。ジェルネイルも試してみて、とても綺麗でした。総じてスタッフの技術にとても満足しています。',
      KO: '여기 두피 케어와 목·어깨 마사지가 정말 끝내줘요. 가격도 합리적이에요. 젤 네일도 해봤는데 너무 예뻐요. 직원 실력에 전반적으로 만족합니다.',
      FR: "Le lavage de cheveux et le massage cou-épaules sont divins, et les prix raisonnables. J'ai aussi essayé les ongles en gel — superbes. Globalement, très satisfaite du savoir-faire de l'équipe.",
      ES: 'El lavado de pelo y el masaje cuello-hombros son una delicia, y los precios razonables. También probé las uñas en gel — preciosas. En general, muy contenta con la calidad del equipo.',
    },
  },
  {
    name: 'Leslie Crowder',
    initials: 'LC',
    rating: 5,
    source: 'google',
    date: { VI: 'Một năm trước', EN: 'A year ago', RU: 'Год назад', ZH: '一年前', JA: '1 年前', KO: '1년 전', FR: 'Il y a un an', ES: 'Hace un año' },
    service: { VI: 'Massage thư giãn', EN: 'Relaxing massage', RU: 'Расслабляющий массаж', ZH: '放松按摩', JA: 'リラックスマッサージ', KO: '릴랙싱 마사지', FR: 'Massage relaxant', ES: 'Masaje relajante' },
    text: {
      VI: 'Em đã có một giờ massage tuyệt vời. Kỹ thuật viên dùng lực vừa phải và rất chuyên nghiệp. Giá cả cũng rất tốt.',
      EN: 'I had a wonderful 1-hour massage. The technician used a good level of pressure and was very professional. The price was good.',
      RU: 'У меня был замечательный часовой массаж. Мастер использовала правильное давление и была очень профессиональна. Цена хорошая.',
      ZH: '我享受了一小时的精彩按摩。技师力度适中，非常专业。价格也很好。',
      JA: '素晴らしい 1 時間のマッサージを受けました。技術者は適度な圧をかけ、とてもプロフェッショナルでした。価格もリーズナブル。',
      KO: '훌륭한 1시간 마사지를 받았어요. 기사님이 적당한 압력으로 매우 전문적이셨어요. 가격도 좋았어요.',
      FR: "J'ai eu un excellent massage d'une heure. La technicienne a appliqué une bonne pression et était très professionnelle. Le prix était bon.",
      ES: 'Tuve un masaje excelente de 1 hora. La técnica usó una buena presión y fue muy profesional. El precio estuvo bien.',
    },
  },
];

function pickL<T>(field: L<T>, lang: Lang): T {
  return field[lang] ?? field.EN;
}

// Google Maps place URL — opens directly to the CAMI VAN reviews page
const GMAPS_REVIEWS_URL =
  'https://www.google.com/maps/place/CAMI+VAN+PMU+%26+SKIN(+Phun+x%C4%83m+th%E1%BA%ABm+m%E1%BB%B9+%26+Ch%C4%83m+s%C3%B3c+da+)/@16.048958,108.2400309,21z/data=!4m17!1m8!3m7!1s0x31421762e4d4b55f:0xab9e6cdadde9ab86!2zMjMgQW4gVGjGsOG7o25nIDE4LCBC4bqvYyBN4bu5IFBow7osIE5nxakgSMOgbmggU8ahbiwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!3b1!8m2!3d16.0489629!4d108.2401788!16s%2Fg%2F11kmcwf8td!3m7!1s0x3142170c7a15defb:0x9bea27105559940b!8m2!3d16.0489629!4d108.2401788!9m1!1b1!16s%2Fg%2F11v_2nj5c5';

export default function Reviews() {
  const reduce = useReducedMotion();
  const { lang, t } = useLang();

  return (
    <section id="reviews" className="px-5 py-20 sm:px-8 lg:px-20 lg:py-30 bg-cream">
      <ScrollReveal>
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="inline-block bg-nude text-brand px-5 py-2 rounded-full text-[13px] font-medium mb-5">{t.reviews.label}</span>
          <h2 className="text-[clamp(40px,5vw,68px)] mb-5">
            {t.reviews.title}
            <br />
            <span className="italic-accent">{t.reviews.title_accent}</span>
          </h2>
          <p className="text-muted text-[17px]">
            {t.reviews.description.split('{GMAPSLINK}').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <a
                    href={GMAPS_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-deep underline transition-colors font-medium"
                  >
                    Google Maps
                  </a>
                )}
              </span>
            ))}
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto"
        variants={reduce ? undefined : staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {REVIEWS.map((r, i) => (
          <motion.div
            key={i}
            variants={reduce ? undefined : staggerItem}
            className="bg-cream border border-nude rounded-[30px] p-8 relative flex flex-col"
          >
            {/* Header: stars + Google badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-brand text-lg" aria-label={`${r.rating} star rating`}>
                {'★'.repeat(r.rating)}
              </div>
              <div
                className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted"
                title="Google review"
              >
                <span
                  className="w-3.5 h-3.5 rounded-full grid place-items-center text-[9px] font-bold text-white"
                  style={{ background: '#4285F4' }}
                  aria-hidden="true"
                >
                  G
                </span>
                Google
              </div>
            </div>

            {/* Service tag */}
            <div className="text-[10px] uppercase tracking-wider text-brand-deep bg-nude px-3 py-1 rounded-full self-start mb-4">
              {pickL(r.service, lang)}
            </div>

            {/* Review text */}
            <p className="text-text leading-relaxed mb-6 italic flex-1">
              &ldquo;{pickL(r.text, lang)}&rdquo;
            </p>

            {/* Footer: avatar + name + date */}
            <div className="flex items-center gap-3 pt-5 border-t border-nude">
              <div
                className="w-11 h-11 rounded-full grid place-items-center font-semibold text-brand shrink-0"
                style={{ background: 'linear-gradient(135deg, #F5EBDC, #CD853F)' }}
                aria-hidden="true"
              >
                {r.initials}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm truncate">{r.name}</div>
                <div className="text-xs text-muted">{pickL(r.date, lang)}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
