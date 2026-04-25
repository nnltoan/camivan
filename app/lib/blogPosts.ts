/**
 * Blog posts content — full 8-language i18n.
 */

import { Lang } from './i18n';

type L<T> = Record<Lang, T>;

export interface BlogSection {
  heading?: string;
  subheading?: string;
  paragraphs?: string[];
  list?: string[];
  quote?: string;
  warning?: string;
  tip?: string;
}

export interface BlogPost {
  slug: string;
  image: string;
  date: string;
  category: L<string>;
  title: L<string>;
  excerpt: L<string>;
  readTime: L<string>;
  intro: L<string>;
  tags: L<string[]>;
  sections: L<BlogSection[]>;
}

export const POSTS: BlogPost[] = [
  {
    slug: 'cham-soc-sau-phun-xam',
    image: '/PMU-lip.jpg',
    date: '15/04/2026',
    category: { VI: 'Chăm sóc', EN: 'Aftercare', RU: 'Уход', ZH: '术后护理', JA: 'アフターケア', KO: '사후 관리', FR: 'Soins', ES: 'Cuidados' },
    title: {
      VI: 'Cách chăm sóc sau phun xăm để màu lên đẹp nhất',
      EN: 'Aftercare tips for the best PMU color result',
      RU: 'Уход после PMU: как добиться лучшего цвета',
      ZH: '术后护理：让 PMU 颜色完美呈现',
      JA: 'PMU 後のアフターケア：最高の発色のために',
      KO: 'PMU 후 관리: 최고의 발색을 위한 팁',
      FR: 'Conseils post-PMU pour un meilleur résultat couleur',
      ES: 'Consejos post-PMU para el mejor color',
    },
    excerpt: {
      VI: '7 ngày đầu sau phun là thời điểm vàng quyết định màu lên đẹp hay xấu. Mình chia sẻ chi tiết quy trình 24h đầu, ngày 2-7, và sau 1 tháng tái khám — đầy đủ những gì cần kiêng và làm.',
      EN: 'The first 7 days after PMU are the golden window that decides whether the color heals beautifully. I share the detailed routine for the first 24h, days 2–7, and the 1-month touch-up — everything to avoid and to do.',
      RU: 'Первые 7 дней после PMU — золотое время, решающее, как ляжет цвет. Делюсь подробной рутиной: первые 24 часа, дни 2–7, и контроль через месяц — всё, что нужно делать и избегать.',
      ZH: 'PMU 后的前 7 天是决定颜色是否美丽的黄金期。我分享 24 小时、2-7 天和 1 个月复诊的详细流程 — 应避免和应做的一切。',
      JA: 'PMU 後の最初の 7 日間は発色の良し悪しを決める黄金期。最初の 24 時間、2〜7 日目、1 ヶ月後のリタッチまで詳しく解説 — 避けるべきこと、やるべきこと全て。',
      KO: 'PMU 후 첫 7일은 발색의 아름다움을 결정하는 황금기. 24시간, 2-7일, 1개월 후 리터치까지 자세한 루틴 — 피해야 할 것과 해야 할 것 모두 공유.',
      FR: "Les 7 premiers jours après le PMU sont la fenêtre dorée. Je partage la routine détaillée des premières 24h, des jours 2-7, et de la retouche d'1 mois — tout ce qu'il faut éviter et faire.",
      ES: 'Los primeros 7 días tras el PMU son la ventana dorada para el color. Comparto la rutina detallada de las primeras 24h, días 2-7, y retoque al mes — todo lo que evitar y hacer.',
    },
    readTime: { VI: '8 phút đọc', EN: '8 min read', RU: '8 мин чтения', ZH: '8 分钟阅读', JA: '8 分で読了', KO: '8분 분량', FR: '8 min de lecture', ES: '8 min de lectura' },
    tags: {
      VI: ['PMU', 'Chăm sóc', 'Sau phun xăm', 'Microblading'],
      EN: ['PMU', 'Aftercare', 'Post-procedure', 'Microblading'],
      RU: ['PMU', 'Уход', 'После процедуры', 'Микроблейдинг'],
      ZH: ['PMU', '护理', '术后', '雾眉'],
      JA: ['PMU', 'アフターケア', '術後', 'マイクロブレーディング'],
      KO: ['PMU', '사후 관리', '시술 후', '마이크로블레이딩'],
      FR: ['PMU', 'Après-soin', 'Post-procédure', 'Microblading'],
      ES: ['PMU', 'Cuidados', 'Post-procedimiento', 'Microblading'],
    },
    intro: {
      VI: '7 ngày đầu sau phun xăm là thời điểm vàng quyết định màu lên đẹp hay xấu. Nhiều khách hàng chia sẻ với mình rằng họ "không biết phải làm gì" trong tuần đầu — và kết quả màu lên không đều, bong sai cách, thậm chí phải dặm lại nhiều lần. Bài viết này tổng hợp toàn bộ quy trình chăm sóc 30 ngày — đầy đủ những gì cần kiêng và làm.',
      EN: 'The first 7 days after PMU are the golden window that decides whether the color heals beautifully. Many clients have told me they "didn\'t know what to do" in the first week — leading to uneven color, improper peeling, and even multiple touch-ups. This article covers the complete 30-day aftercare routine — everything to avoid and everything to do.',
      RU: 'Первые 7 дней после PMU — золотое время, решающее, ляжет ли цвет красиво. Многие клиенты говорили: "не знала, что делать" в первую неделю — отсюда неровный цвет, неправильное шелушение, повторные коррекции. В этой статье — полная 30-дневная рутина: всё, что делать и не делать.',
      ZH: 'PMU 后前 7 天是决定颜色是否美丽的黄金期。许多客户告诉我她们"不知道怎么做"，结果颜色不均、脱皮错误，甚至多次补色。本文介绍完整的 30 天护理流程 — 要避免和要做的一切。',
      JA: 'PMU 後の最初の 7 日間は発色を左右する黄金期。多くのお客様が「最初の週に何をすべきかわからなかった」と話してくれました — 結果、色ムラ、誤った剥がれ、複数回のリタッチに。この記事では完全な 30 日間のアフターケアを — 避けるべきこと、やるべきことを全て解説します。',
      KO: 'PMU 후 첫 7일은 발색의 아름다움을 결정하는 황금기. 많은 고객들이 "첫 주에 어떻게 해야 할지 몰랐다"고 말씀하셨고, 결과는 색 불균형, 잘못된 탈각, 여러 번 리터치. 이 글은 완전한 30일 사후 관리 루틴 — 피해야 할 것과 해야 할 것 모두를 다룹니다.',
      FR: "Les 7 premiers jours après le PMU sont la fenêtre dorée. Beaucoup de clientes m'ont dit ne pas savoir quoi faire la première semaine — d'où couleur inégale, desquamation incorrecte, et plusieurs retouches. Cet article présente la routine complète de 30 jours — tout à éviter et tout à faire.",
      ES: 'Los primeros 7 días tras el PMU son la ventana dorada del color. Muchas clientas me han dicho que "no sabían qué hacer" la primera semana — color desigual, descamación incorrecta, varios retoques. Este artículo cubre la rutina completa de 30 días — todo lo que evitar y hacer.',
    },
    sections: {
      VI: [
        {
          heading: 'Vì sao 7 ngày đầu lại quan trọng?',
          paragraphs: [
            'Khi mực được đưa vào lớp biểu bì, cơ thể sẽ phản ứng tự nhiên: vùng phun sẽ sưng nhẹ trong 2-3 ngày đầu, sau đó bắt đầu khô và bong vảy mỏng từ ngày 5-7. Đây là quá trình da tự "lành lại" và đẩy mực đi sâu vào lớp dưới — quyết định 80% kết quả cuối cùng.',
            'Nếu can thiệp sai (gãi, lột vảy, không bôi dưỡng đúng), màu sẽ lên không đều, có chỗ nhạt chỗ đậm. Nếu chăm sóc đúng, màu lên rất đều, tự nhiên, và bền 2-3 năm.',
          ],
        },
        {
          heading: '24 giờ đầu — Quan trọng nhất',
          subheading: 'Đây là giai đoạn da còn "tươi" — phải tuyệt đối cẩn trọng.',
          list: [
            'Tuyệt đối không để vùng phun xăm tiếp xúc với nước, mồ hôi, kem chống nắng.',
            'Không trang điểm, không bôi mỹ phẩm lên vùng đó (kể cả kem dưỡng thông thường).',
            'Tránh nằm sấp, để vùng phun chạm gối — sẽ làm trầy xước da non.',
            'Có thể chườm đá lạnh nhẹ qua khăn sạch để giảm sưng (không chườm trực tiếp).',
            'Tránh thức ăn cay nóng, rượu bia, cà phê — làm tăng phản ứng viêm.',
          ],
          warning: '⚠️ KHÔNG được rửa mặt vùng phun trong 24h đầu. Có thể lau nhẹ bằng tăm bông tẩm nước muối sinh lý nếu cần.',
        },
        {
          heading: 'Ngày 2-7 — Giai đoạn bong nhẹ',
          subheading: 'Da bắt đầu khô và bong vảy mỏng. Đừng hoảng — đây là dấu hiệu tốt.',
          list: [
            'Bôi dưỡng được phát mỗi 4-6 tiếng/lần.',
            'Vùng phun sẽ bong nhẹ — TUYỆT ĐỐI KHÔNG được gãi/cào/lột vảy.',
            'Tránh phơi nắng trực tiếp, đội mũ rộng vành khi ra ngoài.',
            'Không tắm hồ bơi, xông hơi, sauna trong cả tuần.',
            'Hạn chế tập thể dục cường độ cao gây ra mồ hôi nhiều.',
          ],
          tip: '💡 Nếu thấy ngứa nhẹ, đó là dấu hiệu da đang lành. Đừng gãi — chỉ cần bôi thêm dưỡng để giảm khô.',
        },
        {
          heading: 'Ngày 8-30 — Giai đoạn ổn định màu',
          paragraphs: [
            'Sau khi bong hoàn toàn, màu sẽ nhạt đi 30-40% so với ngày đầu. Đừng lo — đây là màu "tạm" trong giai đoạn da đang stabilize.',
            'Khoảng ngày 14-21, mực sẽ "hiện" lại từ lớp dưới lên. Đến ngày 30, màu mới thực sự ổn định.',
          ],
          list: [
            'Bôi kem chống nắng SPF 50+ vùng phun mỗi ngày.',
            'Có thể trang điểm bình thường từ ngày 10.',
            'Vẫn tránh tẩy tế bào chết / peel da vùng phun trong tháng đầu.',
            'Uống nhiều nước, ăn nhiều rau xanh.',
          ],
        },
        {
          heading: 'Sau 1 tháng — Tái khám',
          paragraphs: [
            'Đây là lúc bạn quay lại tiệm để mình kiểm tra kết quả. Nếu màu chưa ưng, mình sẽ dặm lại MIỄN PHÍ trong gói bảo hành 1 năm.',
            'Tỷ lệ cần dặm lại: khoảng 30% khách. Đừng lo — đây là quy trình hoàn toàn bình thường.',
          ],
          quote: '"Em đã từng làm 3 chỗ trước khi đến CAMI VAN — nhưng đây là lần đầu tiên em được hướng dẫn chi tiết từng ngày. Lông mày lên màu đẹp như vẽ luôn!" — Minh Anh, Hà Nội',
        },
        {
          heading: 'Sai lầm phổ biến — Tránh tuyệt đối',
          list: [
            '❌ Lột vảy khi đang bong → để lại sẹo, mất màu vĩnh viễn vùng đó.',
            '❌ Bôi quá nhiều dưỡng → làm bí da, dễ nhiễm trùng.',
            '❌ Đi xông mặt / spa trong tuần đầu → mực bị "thoát" ra ngoài.',
            '❌ Phơi nắng không che chắn → mực phai nhanh hơn 2x.',
            '❌ Dùng mỹ phẩm có acid (BHA, AHA, retinol) → kích ứng vùng phun.',
          ],
        },
      ],
      EN: [
        {
          heading: 'Why are the first 7 days so important?',
          paragraphs: [
            'Once pigment is deposited into the epidermis, the body reacts naturally: the area swells slightly for 2–3 days, then dries and gently peels from days 5–7. This is the skin "self-healing" and pushing pigment into the deeper layer — it determines 80% of the final result.',
            'Wrong care (scratching, picking the scab, missing aftercare balm) leads to uneven color with light and dark patches. Proper care gives you even, natural color that lasts 2–3 years.',
          ],
        },
        {
          heading: 'First 24 hours — The most critical',
          subheading: 'The skin is still "fresh" — be absolutely careful.',
          list: [
            'Keep the area absolutely away from water, sweat, and sunscreen.',
            'No makeup or skincare on the treated zone (not even basic moisturizer).',
            'Avoid sleeping face-down so the area does not touch the pillow.',
            'You may apply a clean ice pack wrapped in cloth lightly to reduce swelling.',
            'Skip spicy food, alcohol, and coffee — they increase inflammation.',
          ],
          warning: '⚠️ DO NOT wash the treated area for the first 24h. Lightly wipe with a saline-soaked cotton swab if needed.',
        },
        {
          heading: 'Days 2–7 — Gentle peeling phase',
          subheading: "The skin begins to dry and peel thinly. Don't panic — this is a good sign.",
          list: [
            'Apply the provided balm every 4–6 hours.',
            'The area will peel — DO NOT scratch, rub, or pick the scab.',
            'Avoid direct sun, wear a wide-brim hat outdoors.',
            'No swimming pool, steam room, or sauna for the whole week.',
            'Limit high-intensity workouts that cause heavy sweating.',
          ],
          tip: "💡 Mild itching is a sign the skin is healing. Don't scratch — just apply a little more balm to relieve dryness.",
        },
        {
          heading: 'Days 8–30 — Color stabilization',
          paragraphs: [
            'After full peeling, color fades 30–40% from day-one intensity. Don\'t worry — this is the "in-between" color while the skin stabilizes.',
            'Around days 14–21, the pigment "rises" from the deeper layer. By day 30 the color is fully stable.',
          ],
          list: [
            'Apply SPF 50+ sunscreen on the area daily.',
            'You may wear normal makeup again from day 10.',
            'Still avoid exfoliants/peels on the area for the first month.',
            'Drink plenty of water, eat leafy greens.',
          ],
        },
        {
          heading: 'After 1 month — Touch-up visit',
          paragraphs: [
            'This is when you come back to the studio for me to check the result. If color is not perfect, I do a FREE touch-up under the 1-year warranty.',
            'Touch-up rate: about 30% of clients. Don\'t worry — it is a completely normal step.',
          ],
          quote: '"I had PMU done at 3 places before CAMI VAN — but this was the first time I got day-by-day guidance. My brows healed perfectly!" — Minh Anh, Hanoi',
        },
        {
          heading: 'Common mistakes — Avoid completely',
          list: [
            '❌ Picking the scab while peeling → permanent scarring and color loss.',
            '❌ Over-applying balm → suffocates the skin, infection risk.',
            '❌ Facials/spas in the first week → pigment "leaks" out.',
            '❌ Unprotected sun exposure → fades 2x faster.',
            '❌ Acid skincare (BHA, AHA, retinol) → irritates the treated area.',
          ],
        },
      ],
      RU: [
        {
          heading: 'Почему первые 7 дней так важны?',
          paragraphs: [
            'Когда пигмент попадает в эпидермис, тело реагирует естественно: зона слегка отекает 2–3 дня, затем сохнет и слегка шелушится с 5-го по 7-й день. Это самозаживление кожи и продвижение пигмента в более глубокий слой — это определяет 80% конечного результата.',
            'Неправильный уход (расчёсывание, отрывание корочки, отсутствие бальзама) приводит к неровному цвету. Правильный уход — ровный, естественный цвет на 2–3 года.',
          ],
        },
        {
          heading: 'Первые 24 часа — Самое важное',
          subheading: 'Кожа ещё "свежая" — абсолютная осторожность.',
          list: [
            'Полностью избегайте воды, пота, солнцезащитного крема в зоне.',
            'Никакого макияжа или ухода в зоне (даже базового крема).',
            'Не спите лицом вниз — зона не должна касаться подушки.',
            'Можно прикладывать чистый лёд через ткань для уменьшения отёка.',
            'Без острого, алкоголя, кофе — повышают воспаление.',
          ],
          warning: '⚠️ НЕ мойте зону первые 24 часа. При необходимости — ватная палочка с физраствором.',
        },
        {
          heading: 'Дни 2–7 — Лёгкое шелушение',
          subheading: 'Кожа сохнет и слегка шелушится. Не паникуйте — это хороший знак.',
          list: [
            'Наносите бальзам каждые 4–6 часов.',
            'Зона будет шелушиться — НЕ чешите, не трите, не отрывайте.',
            'Избегайте прямого солнца, носите широкополую шляпу.',
            'Без бассейна, парной, сауны всю неделю.',
            'Ограничьте интенсивные тренировки.',
          ],
          tip: '💡 Лёгкий зуд — признак заживления. Не чешите — просто нанесите бальзам.',
        },
        {
          heading: 'Дни 8–30 — Стабилизация цвета',
          paragraphs: [
            'После полного шелушения цвет блекнет на 30–40% от первого дня. Не волнуйтесь — это промежуточный цвет.',
            'Примерно на 14–21 день пигмент "поднимается" из глубокого слоя. К 30-му дню цвет полностью стабилен.',
          ],
          list: [
            'Наносите SPF 50+ ежедневно.',
            'Обычный макияж разрешён с 10-го дня.',
            'Избегайте эксфолиантов/пилингов первый месяц.',
            'Пейте много воды, ешьте зелень.',
          ],
        },
        {
          heading: 'Через 1 месяц — Контрольный визит',
          paragraphs: [
            'Возвращаетесь в студию для проверки результата. Если цвет не идеален, делаю БЕСПЛАТНУЮ коррекцию по 1-летней гарантии.',
            'Около 30% клиентов нуждаются в коррекции — это нормально.',
          ],
          quote: '"Я делала PMU в 3 разных местах до CAMI VAN — но впервые получила пошаговое руководство. Брови зажили идеально!" — Минь Ань, Ханой',
        },
        {
          heading: 'Частые ошибки — Полностью избегайте',
          list: [
            '❌ Отрывание корочки → постоянные шрамы и потеря цвета.',
            '❌ Слишком много бальзама → удушает кожу, риск инфекции.',
            '❌ Чистки/spa в первую неделю → пигмент "вытекает".',
            '❌ Незащищённое солнце → блекнет в 2 раза быстрее.',
            '❌ Кислоты (BHA, AHA, ретинол) → раздражают зону.',
          ],
        },
      ],
      ZH: [
        {
          heading: '为什么前 7 天如此重要？',
          paragraphs: [
            '当色乳进入表皮，身体会自然反应：区域会轻微肿胀 2-3 天，然后从第 5-7 天开始干燥并轻微脱皮。这是皮肤"自我愈合"并将色乳推入更深层 — 决定 80% 最终结果。',
            '错误护理（抓挠、撕痂、缺少护肤膏）会导致颜色不均。正确护理 — 均匀自然的颜色持续 2-3 年。',
          ],
        },
        {
          heading: '前 24 小时 — 最关键',
          subheading: '皮肤还"新鲜" — 必须绝对小心。',
          list: [
            '完全避免水、汗、防晒霜接触该区域。',
            '该区域不化妆、不护肤（甚至基础保湿霜）。',
            '不要趴睡，避免该区域接触枕头。',
            '可用干净冰袋隔布轻敷以减轻肿胀。',
            '避免辛辣、酒精、咖啡 — 加重炎症。',
          ],
          warning: '⚠️ 前 24 小时禁止洗治疗区域。需要时可用生理盐水棉签轻擦。',
        },
        {
          heading: '第 2-7 天 — 轻微脱皮期',
          subheading: '皮肤开始干燥并轻微脱皮。别慌 — 这是好迹象。',
          list: [
            '每 4-6 小时涂抹护肤膏。',
            '区域会脱皮 — 严禁抓、揉、撕痂。',
            '避免直射阳光，外出戴宽边帽。',
            '整周禁止游泳池、蒸汽浴、桑拿。',
            '限制大量出汗的高强度运动。',
          ],
          tip: '💡 轻微瘙痒是愈合迹象。别挠 — 多涂护肤膏即可。',
        },
        {
          heading: '第 8-30 天 — 颜色稳定期',
          paragraphs: [
            '完全脱皮后，颜色会比第一天淡 30-40%。别担心 — 这是稳定期的"过渡"颜色。',
            '约第 14-21 天，色乳从深层"显现"出来。第 30 天颜色完全稳定。',
          ],
          list: [
            '每天涂 SPF 50+ 防晒。',
            '第 10 天起可正常化妆。',
            '第一个月仍避免去角质/果酸。',
            '多喝水、吃绿叶菜。',
          ],
        },
        {
          heading: '1 个月后 — 复诊',
          paragraphs: [
            '回工作室让我检查结果。如颜色不完美，我会在 1 年保修内免费补色。',
            '约 30% 客户需要补色 — 完全正常。',
          ],
          quote: '"在 CAMI VAN 之前我在 3 家做过 PMU — 但这是第一次得到日复一日的指导。我的眉毛愈合完美！" — Minh Anh，河内',
        },
        {
          heading: '常见错误 — 完全避免',
          list: [
            '❌ 脱皮时撕痂 → 永久疤痕和褪色。',
            '❌ 过度涂膏 → 闷皮肤，感染风险。',
            '❌ 第一周做面部护理/spa → 色乳"流失"。',
            '❌ 无防护晒太阳 → 褪色快 2 倍。',
            '❌ 酸性护肤（BHA、AHA、视黄醇）→ 刺激区域。',
          ],
        },
      ],
      JA: [
        {
          heading: 'なぜ最初の 7 日が重要？',
          paragraphs: [
            '色素が表皮に入ると、体は自然に反応：2〜3 日軽く腫れ、5〜7 日目から乾燥・軽い剥がれ。これは皮膚の"自己治癒"で色素を深層に押し込むプロセス — 最終結果の 80% を決定。',
            '誤ったケア（掻く・剥がす・バーム不足）は色ムラの原因。正しいケアで 2〜3 年もつ均一で自然な色に。',
          ],
        },
        {
          heading: '最初の 24 時間 — 最重要',
          subheading: '肌はまだ"新鮮" — 絶対の注意を。',
          list: [
            '部位への水・汗・日焼け止め接触を完全回避。',
            'メイクやスキンケア禁止（基本保湿剤も）。',
            'うつ伏せで枕に部位を当てない。',
            '清潔な氷を布で包み軽く当てて腫れ軽減。',
            '辛い物・アルコール・コーヒーは炎症増。',
          ],
          warning: '⚠️ 最初の 24 時間は施術部位を洗わない。必要なら生理食塩水の綿棒で軽く拭く。',
        },
        {
          heading: '2〜7 日目 — 軽い剥がれ期',
          subheading: '乾燥して薄く剥けます。慌てないで — 良い兆候。',
          list: [
            '4〜6 時間ごとにバーム塗布。',
            '剥がれます — 絶対に掻く・擦る・剥がさない。',
            '直射日光回避、外出時は広つば帽子。',
            '1 週間プール・スチーム・サウナ禁止。',
            '大量に汗をかく激しい運動を控える。',
          ],
          tip: '💡 軽いかゆみは治癒のサイン。掻かず、バームを塗り直して。',
        },
        {
          heading: '8〜30 日目 — 色の安定期',
          paragraphs: [
            '完全に剥がれた後、色は 1 日目より 30〜40% 薄くなります。心配無用 — 安定期の"中間"色。',
            '14〜21 日頃、色素が深層から"浮き上がり"。30 日目に完全に安定。',
          ],
          list: [
            '毎日 SPF 50+ を部位に塗る。',
            '10 日目から普通のメイク OK。',
            '最初の 1 ヶ月は角質ケア/ピール禁止。',
            '水分補給、緑黄色野菜を多く。',
          ],
        },
        {
          heading: '1 ヶ月後 — リタッチ来店',
          paragraphs: [
            'スタジオに戻って結果を確認します。色が完璧でなければ、1 年保証で無料リタッチ。',
            'リタッチ率：約 30% — 完全に普通です。',
          ],
          quote: '"CAMI VAN の前に 3 つの店で PMU を受けましたが、日々のガイダンスをもらったのは初めて。眉毛が完璧に治りました！" — Minh Anh、ハノイ',
        },
        {
          heading: 'よくあるミス — 完全に避けて',
          list: [
            '❌ 剥がれ中にかさぶたを剥がす → 永久的な傷跡と色抜け。',
            '❌ バーム塗りすぎ → 肌を窒息させ感染リスク。',
            '❌ 最初の週にフェイシャル/スパ → 色素が"漏れる"。',
            '❌ 無防備な日光 → 退色 2 倍速い。',
            '❌ 酸性スキンケア（BHA、AHA、レチノール）→ 部位を刺激。',
          ],
        },
      ],
      KO: [
        {
          heading: '왜 첫 7일이 중요한가요?',
          paragraphs: [
            '색소가 표피에 침착되면 신체는 자연스럽게 반응합니다: 2-3일간 가볍게 붓고, 5-7일째부터 건조하며 가볍게 벗겨집니다. 이는 피부의 "자가 치유" 과정으로 색소를 더 깊은 층으로 밀어 넣어 — 최종 결과의 80%를 결정합니다.',
            '잘못된 관리(긁기, 딱지 떼기, 밤 부족)는 색 불균형을 초래합니다. 올바른 관리로 2-3년 지속되는 균일하고 자연스러운 색.',
          ],
        },
        {
          heading: '첫 24시간 — 가장 중요',
          subheading: '피부가 아직 "신선" — 절대적 주의 필요.',
          list: [
            '부위에 물, 땀, 자외선 차단제 접촉 완전 차단.',
            '부위에 메이크업/스킨케어 금지(기본 보습제도).',
            '엎드려 자며 부위가 베개에 닿지 않도록.',
            '깨끗한 얼음을 천에 싸서 가볍게 대어 부기 완화.',
            '매운 음식, 술, 커피 금지 — 염증 증가.',
          ],
          warning: '⚠️ 첫 24시간 시술 부위 세안 금지. 필요시 생리식염수 면봉으로 가볍게.',
        },
        {
          heading: '2-7일 — 가벼운 탈각기',
          subheading: '피부가 마르고 가볍게 벗겨짐. 당황 금지 — 좋은 신호.',
          list: [
            '4-6시간마다 밤 도포.',
            '벗겨짐 — 절대 긁기/문지르기/딱지 떼기 금지.',
            '직사광선 피하고, 외출 시 챙 넓은 모자.',
            '1주간 수영장/사우나/찜질 금지.',
            '땀 많이 나는 격한 운동 자제.',
          ],
          tip: '💡 가벼운 가려움은 치유 신호. 긁지 말고 밤을 더 발라주세요.',
        },
        {
          heading: '8-30일 — 색 안정기',
          paragraphs: [
            '완전히 벗겨진 후 색은 첫날보다 30-40% 옅어집니다. 걱정 마세요 — 안정기의 "중간" 색.',
            '14-21일경 색소가 깊은 층에서 "올라옵니다". 30일째 색이 완전히 안정.',
          ],
          list: [
            '매일 SPF 50+ 자외선 차단제 도포.',
            '10일째부터 일반 메이크업 가능.',
            '첫 달은 각질/필링 피하기.',
            '수분 섭취, 녹황색 채소 많이.',
          ],
        },
        {
          heading: '1개월 후 — 리터치 방문',
          paragraphs: [
            '스튜디오로 돌아와 결과 확인. 색이 완벽하지 않으면 1년 보증 내 무료 리터치.',
            '리터치 비율: 약 30% — 완전히 정상.',
          ],
          quote: '"CAMI VAN 전에 3곳에서 PMU를 받았지만, 일일 가이드를 받은 건 처음. 눈썹이 완벽하게 치유되었어요!" — Minh Anh, 하노이',
        },
        {
          heading: '흔한 실수 — 절대 피하기',
          list: [
            '❌ 탈각 중 딱지 떼기 → 영구 흉터와 색 손실.',
            '❌ 밤 과도 도포 → 피부 막힘, 감염 위험.',
            '❌ 첫 주 페이셜/스파 → 색소 "유출".',
            '❌ 무방비 햇빛 → 2배 빨리 퇴색.',
            '❌ 산성 스킨케어(BHA, AHA, 레티놀) → 부위 자극.',
          ],
        },
      ],
      FR: [
        {
          heading: 'Pourquoi les 7 premiers jours sont si importants ?',
          paragraphs: [
            "Une fois le pigment déposé dans l'épiderme, le corps réagit : zone légèrement gonflée 2-3 jours, puis sèche et pèle entre les jours 5-7. C'est l'auto-cicatrisation qui pousse le pigment plus profond — 80% du résultat final.",
            'Mauvais soins (gratter, arracher la croûte, oublier le baume) → couleur inégale. Bons soins → couleur uniforme et naturelle pendant 2-3 ans.',
          ],
        },
        {
          heading: 'Premières 24 heures — Le plus critique',
          subheading: 'La peau est encore "fraîche" — prudence absolue.',
          list: [
            'Pas de contact avec eau, sueur, ou crème solaire.',
            'Pas de maquillage ou soin sur la zone (même hydratant basique).',
            'Ne dormez pas face contre oreiller.',
            "Glace propre dans un linge, application légère pour réduire l'œdème.",
            "Évitez épices, alcool, café — augmentent l'inflammation.",
          ],
          warning: "⚠️ NE LAVEZ PAS la zone les 24 premières heures. Si nécessaire, coton-tige avec sérum physiologique.",
        },
        {
          heading: 'Jours 2-7 — Phase de desquamation',
          subheading: 'La peau sèche et pèle finement. Ne paniquez pas — bon signe.',
          list: [
            'Appliquez le baume toutes les 4-6 heures.',
            'La zone va peler — NE PAS gratter, frotter, ou arracher.',
            'Évitez le soleil direct, chapeau à large bord.',
            'Pas de piscine, hammam, sauna pendant la semaine.',
            'Limitez les sports intenses qui font transpirer.',
          ],
          tip: '💡 Démangeaison légère = signe de cicatrisation. Ne grattez pas — appliquez plus de baume.',
        },
        {
          heading: 'Jours 8-30 — Stabilisation couleur',
          paragraphs: [
            "Après desquamation totale, la couleur s'estompe de 30-40% par rapport au jour 1. Pas d'inquiétude — couleur intermédiaire.",
            'Vers le jour 14-21, le pigment "remonte". Au jour 30, couleur complètement stable.',
          ],
          list: [
            'SPF 50+ tous les jours sur la zone.',
            'Maquillage normal possible dès le jour 10.',
            'Pas d\'exfoliant/peeling le premier mois.',
            "Buvez beaucoup d'eau, légumes verts.",
          ],
        },
        {
          heading: 'Après 1 mois — Retouche',
          paragraphs: [
            'Vous revenez au studio pour le contrôle. Si la couleur n\'est pas parfaite, retouche GRATUITE sous garantie 1 an.',
            'Taux de retouche : environ 30% — complètement normal.',
          ],
          quote: "\"J'avais fait du PMU dans 3 endroits avant CAMI VAN — mais c'est la première fois que j'ai eu un guide jour par jour. Mes sourcils ont parfaitement cicatrisé !\" — Minh Anh, Hanoï",
        },
        {
          heading: 'Erreurs fréquentes — À éviter absolument',
          list: [
            '❌ Arracher la croûte → cicatrices permanentes et perte de couleur.',
            "❌ Trop de baume → suffocation, risque d'infection.",
            '❌ Soin/spa la première semaine → le pigment "fuit".',
            '❌ Soleil sans protection → s\'estompe 2x plus vite.',
            '❌ Acides (BHA, AHA, rétinol) → irritent la zone.',
          ],
        },
      ],
      ES: [
        {
          heading: '¿Por qué los primeros 7 días son tan importantes?',
          paragraphs: [
            'Cuando el pigmento entra en la epidermis, el cuerpo reacciona naturalmente: zona ligeramente hinchada 2-3 días, luego seca y descama entre los días 5-7. Es la "auto-cicatrización" que empuja el pigmento más profundo — 80% del resultado final.',
            'Malos cuidados (rascar, quitar costra, falta de bálsamo) → color desigual. Buenos cuidados → color uniforme y natural por 2-3 años.',
          ],
        },
        {
          heading: 'Primeras 24 horas — Lo más crítico',
          subheading: 'La piel aún está "fresca" — precaución absoluta.',
          list: [
            'Sin contacto con agua, sudor o protector solar.',
            'Sin maquillaje ni skincare en la zona (ni hidratante básica).',
            'No duermas boca abajo con la zona en la almohada.',
            'Hielo limpio envuelto en paño para reducir hinchazón.',
            'Evita picante, alcohol, café — aumentan la inflamación.',
          ],
          warning: '⚠️ NO laves la zona las primeras 24h. Si es necesario, hisopo con suero fisiológico.',
        },
        {
          heading: 'Días 2-7 — Fase de descamación',
          subheading: 'La piel se seca y descama finamente. No te asustes — buena señal.',
          list: [
            'Aplica el bálsamo cada 4-6 horas.',
            'La zona descamará — NO rasques, frotes ni quites costras.',
            'Evita el sol directo, sombrero de ala ancha al salir.',
            'Sin piscina, vapor, sauna durante la semana.',
            'Limita ejercicio intenso que provoque mucho sudor.',
          ],
          tip: '💡 Picor leve = señal de cicatrización. No rasques — aplica más bálsamo.',
        },
        {
          heading: 'Días 8-30 — Estabilización del color',
          paragraphs: [
            'Tras la descamación total, el color se aclara 30-40% del día 1. No te preocupes — color intermedio.',
            'Hacia los días 14-21, el pigmento "sube". Al día 30, color completamente estable.',
          ],
          list: [
            'SPF 50+ a diario en la zona.',
            'Maquillaje normal desde el día 10.',
            'Sin exfoliantes/peelings el primer mes.',
            'Bebe mucha agua, hojas verdes.',
          ],
        },
        {
          heading: 'Tras 1 mes — Visita de retoque',
          paragraphs: [
            'Vuelves al estudio para verificar el resultado. Si el color no es perfecto, retoque GRATIS dentro de la garantía de 1 año.',
            'Tasa de retoque: ~30% de clientes — totalmente normal.',
          ],
          quote: '"Hice PMU en 3 lugares antes de CAMI VAN — pero fue la primera vez que tuve guía día por día. ¡Mis cejas sanaron perfectas!" — Minh Anh, Hanói',
        },
        {
          heading: 'Errores comunes — Evita totalmente',
          list: [
            '❌ Quitar la costra → cicatrices permanentes y pérdida de color.',
            '❌ Demasiado bálsamo → sofoca la piel, riesgo de infección.',
            '❌ Facial/spa la primera semana → el pigmento "se fuga".',
            '❌ Sol sin protección → desvanece 2x más rápido.',
            '❌ Ácidos (BHA, AHA, retinol) → irritan la zona.',
          ],
        },
      ],
    },
  },
  {
    slug: 'chon-kieu-long-may',
    image: '/client-3.jpg',
    date: '10/04/2026',
    category: { VI: 'Tư vấn', EN: 'Consultation', RU: 'Консультация', ZH: '咨询', JA: 'カウンセリング', KO: '상담', FR: 'Consultation', ES: 'Consulta' },
    title: {
      VI: 'Chọn kiểu lông mày phù hợp với khuôn mặt: Hướng dẫn từ A đến Z',
      EN: 'Choosing brow shapes for your face: An A-to-Z guide',
      RU: 'Форма бровей под ваше лицо: гид от А до Я',
      ZH: '根据脸型选择眉形：从 A 到 Z 完全指南',
      JA: '顔型に合う眉形の選び方：A から Z まで完全ガイド',
      KO: '얼굴형에 맞는 눈썹 모양 선택: A부터 Z까지 가이드',
      FR: 'Choisir la forme de sourcils selon votre visage : guide A à Z',
      ES: 'Elegir la forma de cejas según tu rostro: guía de A a Z',
    },
    excerpt: {
      VI: 'Khuôn mặt tròn nên chọn arch sắc, mặt vuông cần cong tự nhiên, mặt dài thì thẳng nhẹ, mặt oval gần như hợp tất cả. Bài này mình đi sâu phân tích 4 dáng mặt + chọn microblading hay ombre, kèm hình minh họa thực tế.',
      EN: 'Round faces look best with a sharp arch, square faces need a natural curve, long faces want a slight straight line, and oval faces work with almost everything. This article dives deep into 4 face shapes + microblading vs ombre, with real examples.',
      RU: 'Круглое лицо — острая арка, квадратное — естественный изгиб, удлинённое — слегка прямая, овальное — почти всё подходит. Глубокий разбор 4 форм + микроблейдинг vs омбре с реальными примерами.',
      ZH: '圆脸适合尖拱，方脸需自然弯曲，长脸要微直，鹅蛋脸几乎适合一切。本文深入分析 4 种脸型 + 雾眉 vs 渐变眉，附真实案例。',
      JA: '丸顔はシャープなアーチ、四角顔は自然なカーブ、面長は軽く直線、卵型はほぼ何でも。4 つの顔型 + マイクロブレーディング vs オンブレを実例つきで解説。',
      KO: '둥근 얼굴은 날카로운 아치, 각진 얼굴은 자연스러운 곡선, 긴 얼굴은 살짝 직선, 계란형은 거의 모두 어울림. 4가지 얼굴형 + 마이크로블레이딩 vs 옴브레, 실제 예시와 함께.',
      FR: "Visage rond = arche prononcée, carré = courbe naturelle, long = ligne légèrement droite, ovale = presque tout. Analyse approfondie de 4 formes + microblading vs ombré, avec exemples réels.",
      ES: 'Rostro redondo = arco marcado, cuadrado = curva natural, alargado = línea ligeramente recta, ovalado = casi todo. Análisis profundo de 4 formas + microblading vs ombré, con ejemplos reales.',
    },
    readTime: { VI: '10 phút đọc', EN: '10 min read', RU: '10 мин чтения', ZH: '10 分钟阅读', JA: '10 分で読了', KO: '10분 분량', FR: '10 min de lecture', ES: '10 min de lectura' },
    tags: {
      VI: ['Lông mày', 'Tư vấn', 'Khuôn mặt', 'Microblading', 'Ombre'],
      EN: ['Brows', 'Consultation', 'Face shape', 'Microblading', 'Ombre'],
      RU: ['Брови', 'Консультация', 'Форма лица', 'Микроблейдинг', 'Омбре'],
      ZH: ['眉毛', '咨询', '脸型', '雾眉', '渐变眉'],
      JA: ['眉', 'カウンセリング', '顔型', 'マイクロブレーディング', 'オンブレ'],
      KO: ['눈썹', '상담', '얼굴형', '마이크로블레이딩', '옴브레'],
      FR: ['Sourcils', 'Consultation', 'Visage', 'Microblading', 'Ombré'],
      ES: ['Cejas', 'Consulta', 'Rostro', 'Microblading', 'Ombré'],
    },
    intro: {
      VI: 'Chân mày là "khung tranh" cho khuôn mặt — chọn đúng dáng sẽ nâng tầm nhan sắc lên 30%, ngược lại chọn sai sẽ làm khuôn mặt cứng/dài/nặng nề. Sau 7 năm và 2.500+ khách, mình tổng kết hướng dẫn chi tiết theo 4 dáng mặt + cách chọn microblading vs ombre.',
      EN: 'Brows are the "frame" of the face — the right shape lifts your beauty by 30%, the wrong one makes the face look stiff, long, or heavy. After 7 years and 2,500+ clients, here\'s my complete guide based on 4 face shapes + how to choose microblading vs ombre.',
      RU: 'Брови — "рамка" лица. Правильная форма поднимает красоту на 30%, неправильная делает лицо жёстким, длинным или тяжёлым. После 7 лет и 2 500+ клиентов — гид по 4 формам + микроблейдинг vs омбре.',
      ZH: '眉毛是脸的"画框" — 选对形状美丽提升 30%，选错让脸僵硬、长、笨重。7 年经验和 2,500+ 客户的完整指南：4 种脸型 + 雾眉 vs 渐变眉。',
      JA: '眉は顔の"額縁" — 正しい形は美しさを 30% 高め、間違った形は顔を硬く・長く・重く見せる。7 年と 2,500+ のお客様からの完全ガイド：4 つの顔型 + マイクロブレーディング vs オンブレ。',
      KO: '눈썹은 얼굴의 "프레임" — 올바른 모양은 미를 30% 높이고, 잘못된 모양은 얼굴을 딱딱하고, 길고, 무겁게. 7년과 2,500+ 고객의 완전한 가이드: 4가지 얼굴형 + 마이크로블레이딩 vs 옴브레.',
      FR: "Les sourcils sont le \"cadre\" du visage — la bonne forme rehausse la beauté de 30%, la mauvaise rend le visage rigide, long ou lourd. Après 7 ans et 2 500+ clientes, voici mon guide complet : 4 formes + microblading vs ombré.",
      ES: 'Las cejas son el "marco" del rostro — la forma correcta eleva la belleza 30%, la equivocada lo hace rígido, largo o pesado. Tras 7 años y 2.500+ clientas, mi guía completa: 4 formas + microblading vs ombré.',
    },
    sections: {
      VI: [
        { heading: 'Bước 1: Xác định khuôn mặt', paragraphs: ['Trước khi chọn dáng mày, bạn cần biết khuôn mặt mình thuộc dáng nào. Buộc tóc lên, soi gương, đo: chiều dài (chân tóc đến cằm), chiều rộng (má-má), so sánh tỷ lệ.'], list: ['Mặt tròn: dài ≈ rộng. Cằm tròn, má phồng.', 'Mặt vuông: dài ≈ rộng. Cằm vuông, hàm rõ.', 'Mặt dài: dài > rộng. Trán cao, cằm dài.', 'Mặt oval: cân đối nhất. Hợp hầu hết các kiểu.'] },
        { heading: 'Mặt tròn', subheading: 'Mục tiêu: tạo cảm giác mặt thon, có chiều sâu.', list: ['✓ Arch sắc — tạo điểm nhấn dọc.', '✓ Đuôi mày hơi nhọn và kéo dài.', '✓ Microblading kiểu Hàn rất hợp.', '✗ Tránh mày thẳng — làm mặt tròn hơn.', '✗ Tránh mày quá ngắn.'], tip: '💡 Tham khảo: Lisa BlackPink — arch sắc rất hiệu quả.' },
        { heading: 'Mặt vuông', subheading: 'Mục tiêu: mềm mại các góc cứng của hàm.', list: ['✓ Mày cong tự nhiên, đỉnh arch hơi tròn.', '✓ Đuôi mày kéo dài thanh thoát.', '✓ Ombre Brows soft là lựa chọn tốt.', '✗ Tránh mày quá dày.', '✗ Tránh arch quá sắc.'] },
        { heading: 'Mặt dài', subheading: 'Mục tiêu: tạo cảm giác mặt rộng hơn.', list: ['✓ Mày thẳng hoặc arch nhẹ.', '✓ Mày có độ dày vừa phải.', '✗ Tránh đuôi mày dài.', '✗ Tránh arch cao.', '✓ Microblading Châu Âu hợp.'], tip: '💡 Tham khảo: Bella Hadid — mày thẳng nhẹ.' },
        { heading: 'Mặt oval', subheading: 'May mắn nhất — phù hợp hầu hết các dáng.', list: ['✓ Có thể thử nhiều style khác nhau.', '✓ Combo Brows cho hiệu ứng tối đa.', '✓ Lựa chọn dựa trên phong cách.'] },
        { heading: 'Microblading vs Ombre — Chọn cái nào?', paragraphs: ['Hai kỹ thuật phổ biến nhất, mỗi loại có ưu/nhược riêng:'], list: ['**Microblading**: dao 3D từng sợi. Tự nhiên. Bền 1.5-2 năm. Hợp da khô, mày thưa.', '**Ombre Brows**: phun phấn mềm. Bền 2-3 năm. Hợp da dầu.', '**Combo Brows**: kết hợp cả 2. Tự nhiên + bền lâu. Giá cao hơn.'], quote: '"Mình tư vấn theo: dáng mặt + tone da + cấu trúc mày + lifestyle. Không có công thức chung." — Cẩm Vân' },
        { heading: 'Quy trình tư vấn tại CAMI VAN', list: ['1. Phân tích khuôn mặt bằng phần mềm (5 phút).', '2. Đề xuất 2-3 dáng mày + so sánh.', '3. Vẽ thử bằng bút mỹ phẩm.', '4. Chọn tone màu phù hợp.', '5. Chốt phong cách + đặt lịch.'] },
      ],
      EN: [
        { heading: 'Step 1: Identify your face shape', paragraphs: ['Before picking a brow shape, know your face shape. Tie hair back, mirror, measure: length (hairline to chin), width (cheek to cheek), compare ratio.'], list: ['Round: length ≈ width. Round chin, full cheeks.', 'Square: length ≈ width. Defined jawline.', 'Long: length much greater than width. High forehead, long chin.', 'Oval: most balanced. Suits almost any brow style.'] },
        { heading: 'Round face', subheading: 'Goal: Add length and depth.', list: ['✓ Sharp arch — vertical accent.', '✓ Slightly tapered, longer tail.', '✓ Korean-style microblading works well.', '✗ Avoid straight brows.', '✗ Avoid short brows.'], tip: '💡 Reference: Lisa BlackPink — sharp arch works perfectly.' },
        { heading: 'Square face', subheading: 'Goal: Soften the strong jaw angles.', list: ['✓ Naturally curved brows, slightly rounded peak.', '✓ Long, graceful tail without sharp point.', '✓ Soft Ombre Brows — gentle gradient.', '✗ Avoid overly thick brows.', '✗ Avoid an aggressive arch.'] },
        { heading: 'Long face', subheading: 'Goal: Create width without adding length.', list: ['✓ Straight or low-arch brows.', '✓ Medium thickness.', '✗ Avoid a long tail.', '✗ Avoid a high arch.', '✓ European-style microblading suits.'], tip: '💡 Reference: Bella Hadid — slightly straight, controlled tail.' },
        { heading: 'Oval face', subheading: 'The luckiest — suits almost every shape.', list: ['✓ Try different styles depending on mood.', '✓ Combo Brows gives the maximum effect.', '✓ Style by personality.'] },
        { heading: 'Microblading vs Ombre — Which one?', paragraphs: ['The two most popular techniques:'], list: ['**Microblading**: hair-stroke 3D blade. Natural. 1.5–2 years. Dry/normal skin, sparse brows.', '**Ombre Brows**: soft powder shading. 2–3 years. Oily skin.', '**Combo Brows**: both combined. Natural + long-lasting. Higher price.'], quote: '"I tailor each consultation around face shape + skin tone + natural brow structure + lifestyle. No one-size-fits-all." — Cẩm Vân' },
        { heading: 'Consultation process at CAMI VAN', list: ['1. Face analysis using dedicated software (5 min).', '2. Recommend 2–3 brow shapes + comparison.', '3. Sketch with cosmetic pencil.', '4. Choose the right tone.', '5. Confirm + book.'] },
      ],
      RU: [
        { heading: 'Шаг 1: Определите форму лица', paragraphs: ['Прежде чем выбирать форму бровей, узнайте форму лица. Соберите волосы, зеркало, измерьте: длина (линия волос-подбородок), ширина (щека-щека), сравните пропорции.'], list: ['Круглое: длина ≈ ширина. Округлый подбородок, полные щёки.', 'Квадратное: длина ≈ ширина. Чёткий подбородок.', 'Удлинённое: длина >> ширины. Высокий лоб.', 'Овальное: самое сбалансированное. Подходит всё.'] },
        { heading: 'Круглое лицо', subheading: 'Цель: добавить длину и глубину.', list: ['✓ Острая арка — вертикальный акцент.', '✓ Слегка сужающийся длинный хвост.', '✓ Корейский микроблейдинг.', '✗ Избегайте прямых бровей.', '✗ Избегайте коротких бровей.'], tip: '💡 Пример: Лиса BlackPink — острая арка отлично.' },
        { heading: 'Квадратное лицо', subheading: 'Цель: смягчить углы челюсти.', list: ['✓ Естественно изогнутые брови, чуть округлый пик.', '✓ Длинный изящный хвост.', '✓ Мягкое омбре — нежный градиент.', '✗ Избегайте слишком густых.', '✗ Избегайте резкой арки.'] },
        { heading: 'Удлинённое лицо', subheading: 'Цель: создать ширину без длины.', list: ['✓ Прямые или с лёгкой аркой.', '✓ Средняя толщина.', '✗ Избегайте длинного хвоста.', '✗ Избегайте высокой арки.', '✓ Европейский микроблейдинг.'], tip: '💡 Пример: Белла Хадид — слегка прямые.' },
        { heading: 'Овальное лицо', subheading: 'Самое удачное — подходит почти всё.', list: ['✓ Можно пробовать разные стили.', '✓ Combo Brows для максимума.', '✓ Выбор по стилю.'] },
        { heading: 'Микроблейдинг vs омбре — Что выбрать?', paragraphs: ['Две самые популярные техники:'], list: ['**Микроблейдинг**: 3D-лезвие. Натурально. 1.5–2 года. Сухая/нормальная кожа.', '**Омбре**: мягкая пудра. 2–3 года. Жирная кожа.', '**Combo Brows**: оба. Натурально + долго. Дороже.'], quote: '"Я подбираю под форму лица + тон кожи + структуру бровей + образ жизни. Универсального нет." — Cẩm Vân' },
        { heading: 'Процесс консультации в CAMI VAN', list: ['1. Анализ лица (5 минут).', '2. Предложение 2-3 форм + сравнение.', '3. Эскиз карандашом.', '4. Подбор тона.', '5. Подтверждение + запись.'] },
      ],
      ZH: [
        { heading: '第一步：确定脸型', paragraphs: ['选眉形前，先知道脸型。扎起头发，对镜测量：长度（发际线到下巴）、宽度（颊到颊），对比比例。'], list: ['圆脸：长 ≈ 宽。下巴圆，脸颊饱满。', '方脸：长 ≈ 宽。下颌分明。', '长脸：长 >> 宽。额头高。', '鹅蛋脸：最平衡。几乎适合所有形状。'] },
        { heading: '圆脸', subheading: '目标：增加长度和深度。', list: ['✓ 尖拱 — 纵向重点。', '✓ 略尖且较长的眉尾。', '✓ 韩式雾眉合适。', '✗ 避免直眉。', '✗ 避免短眉。'], tip: '💡 参考：BlackPink Lisa — 尖拱效果好。' },
        { heading: '方脸', subheading: '目标：柔化下颌的硬角。', list: ['✓ 自然弯曲眉，圆顶峰。', '✓ 优雅长尾，无尖。', '✓ 柔和渐变眉 — 温柔渐层。', '✗ 避免太厚。', '✗ 避免锋利拱。'] },
        { heading: '长脸', subheading: '目标：增加宽度而非长度。', list: ['✓ 直眉或低拱眉。', '✓ 中等粗细。', '✗ 避免长尾。', '✗ 避免高拱。', '✓ 欧式雾眉合适。'], tip: '💡 参考：Bella Hadid — 略直。' },
        { heading: '鹅蛋脸', subheading: '最幸运 — 几乎适合所有形状。', list: ['✓ 可尝试不同风格。', '✓ 组合眉效果最大。', '✓ 按个性选择。'] },
        { heading: '雾眉 vs 渐变眉 — 选哪个？', paragraphs: ['两种最流行的技术：'], list: ['**雾眉/微刺眉**：3D 刀片。自然。1.5-2 年。干性/中性皮肤。', '**渐变眉**：柔和粉末。2-3 年。油性皮肤。', '**组合眉**：两者结合。自然 + 持久。价格更高。'], quote: '"我根据脸型 + 肤色 + 眉毛结构 + 生活方式量身定制。没有通用方案。" — Cẩm Vân' },
        { heading: 'CAMI VAN 咨询流程', list: ['1. 面部分析（5 分钟）。', '2. 推荐 2-3 种眉形 + 对比。', '3. 化妆笔预画。', '4. 选合适色调。', '5. 确认 + 预约。'] },
      ],
      JA: [
        { heading: 'ステップ 1: 顔型を判定', paragraphs: ['眉形選びの前に顔型を知る。髪を結び、鏡の前で測定：長さ（生え際〜あご）、幅（頬〜頬）、比率を比較。'], list: ['丸顔：長さ ≈ 幅。丸い顎、ふっくら頬。', '四角顔：長さ ≈ 幅。明確な顎。', '面長：長さ >> 幅。高い額。', '卵型：最もバランス良い。ほぼ全形に合う。'] },
        { heading: '丸顔', subheading: '目的：長さと深みを加える。', list: ['✓ シャープなアーチ — 垂直アクセント。', '✓ 細く長めのテール。', '✓ 韓国式マイクロブレーディング。', '✗ 直線眉を避ける。', '✗ 短い眉を避ける。'], tip: '💡 参考：BlackPink Lisa — シャープアーチが効果的。' },
        { heading: '四角顔', subheading: '目的：強い顎角を柔らかく。', list: ['✓ 自然なカーブ、丸いピーク。', '✓ 優雅な長いテール。', '✓ ソフトオンブレ。', '✗ 太すぎる眉を避ける。', '✗ 鋭いアーチを避ける。'] },
        { heading: '面長', subheading: '目的：長さを足さず幅を出す。', list: ['✓ 直線または低アーチ。', '✓ 中程度の太さ。', '✗ 長いテールを避ける。', '✗ 高アーチを避ける。', '✓ ヨーロッパ式が合う。'], tip: '💡 参考：Bella Hadid — やや直線的。' },
        { heading: '卵型', subheading: '最も恵まれた — ほぼ全形が合う。', list: ['✓ 様々なスタイル試せる。', '✓ コンボブロウ効果最大。', '✓ 個性で選ぶ。'] },
        { heading: 'マイクロブレーディング vs オンブレ — どっち？', paragraphs: ['最も人気の 2 技術：'], list: ['**マイクロブレーディング**：3D ブレード。自然。1.5〜2 年。乾燥/普通肌。', '**オンブレ**：ソフトパウダー。2〜3 年。脂性肌。', '**コンボブロウ**：両方の組み合わせ。自然 + 持続。価格高め。'], quote: '"顔型 + 肌色 + 眉構造 + ライフスタイルに合わせます。万能解なし。" — Cẩm Vân' },
        { heading: 'CAMI VAN カウンセリングの流れ', list: ['1. 顔分析（5 分）。', '2. 2〜3 の眉形提案 + 比較。', '3. 化粧鉛筆で下書き。', '4. 適切な色選び。', '5. 確認 + 予約。'] },
      ],
      KO: [
        { heading: '1단계: 얼굴형 파악', paragraphs: ['눈썹 모양 선택 전 얼굴형 파악. 머리 묶고 거울 보며 측정: 길이(헤어라인-턱), 너비(볼-볼), 비율 비교.'], list: ['둥근형: 길이 ≈ 너비. 둥근 턱, 풍만한 볼.', '각진형: 길이 ≈ 너비. 뚜렷한 턱선.', '긴형: 길이 >> 너비. 높은 이마.', '계란형: 가장 균형. 거의 모든 모양 적합.'] },
        { heading: '둥근 얼굴', subheading: '목표: 길이와 깊이 추가.', list: ['✓ 날카로운 아치 — 수직 강조.', '✓ 가늘고 긴 꼬리.', '✓ 한국식 마이크로블레이딩.', '✗ 직선 눈썹 피하기.', '✗ 짧은 눈썹 피하기.'], tip: '💡 참고: 블랙핑크 리사 — 날카로운 아치 효과적.' },
        { heading: '각진 얼굴', subheading: '목표: 강한 턱각 부드럽게.', list: ['✓ 자연 곡선, 둥근 정점.', '✓ 우아한 긴 꼬리.', '✓ 부드러운 옴브레.', '✗ 너무 두꺼운 눈썹 피하기.', '✗ 날카로운 아치 피하기.'] },
        { heading: '긴 얼굴', subheading: '목표: 길이 추가 없이 너비 추가.', list: ['✓ 직선 또는 낮은 아치.', '✓ 중간 두께.', '✗ 긴 꼬리 피하기.', '✗ 높은 아치 피하기.', '✓ 유럽식 적합.'], tip: '💡 참고: 벨라 하디드 — 약간 직선.' },
        { heading: '계란형 얼굴', subheading: '가장 운 좋은 — 거의 모두 적합.', list: ['✓ 다양한 스타일 시도 가능.', '✓ 콤보 브로우 최대 효과.', '✓ 개성에 따라 선택.'] },
        { heading: '마이크로블레이딩 vs 옴브레 — 어느 것?', paragraphs: ['가장 인기 있는 두 기법:'], list: ['**마이크로블레이딩**: 3D 블레이드. 자연스러움. 1.5-2년. 건성/보통 피부.', '**옴브레**: 부드러운 파우더. 2-3년. 지성 피부.', '**콤보 브로우**: 둘 결합. 자연 + 지속. 가격 높음.'], quote: '"얼굴형 + 피부톤 + 눈썹 구조 + 라이프스타일에 맞춤. 만능 해법 없음." — Cẩm Vân' },
        { heading: 'CAMI VAN 상담 절차', list: ['1. 얼굴 분석(5분).', '2. 2-3가지 눈썹 모양 추천 + 비교.', '3. 화장 펜으로 그림.', '4. 적절한 톤 선택.', '5. 확인 + 예약.'] },
      ],
      FR: [
        { heading: 'Étape 1 : Identifier votre visage', paragraphs: ["Avant de choisir une forme, identifiez votre visage. Cheveux attachés, miroir, mesurez : longueur (cheveux-menton), largeur (joue-joue), comparez ratio."], list: ['Rond : longueur ≈ largeur. Menton rond, joues pleines.', 'Carré : longueur ≈ largeur. Mâchoire définie.', 'Long : longueur >> largeur. Front haut.', 'Ovale : le plus équilibré. Tout style.'] },
        { heading: 'Visage rond', subheading: 'Objectif : ajouter longueur et profondeur.', list: ['✓ Arche prononcée — accent vertical.', '✓ Queue effilée et longue.', '✓ Microblading style coréen.', '✗ Évitez sourcils droits.', '✗ Évitez sourcils courts.'], tip: '💡 Référence : Lisa BlackPink — arche prononcée parfaite.' },
        { heading: 'Visage carré', subheading: 'Objectif : adoucir les angles.', list: ['✓ Sourcils naturellement courbés, pic arrondi.', '✓ Queue gracieuse, sans pointe.', '✓ Ombré doux — dégradé léger.', '✗ Évitez trop épais.', '✗ Évitez arche trop forte.'] },
        { heading: 'Visage long', subheading: 'Objectif : ajouter largeur sans longueur.', list: ['✓ Sourcils droits ou arche basse.', '✓ Épaisseur moyenne.', '✗ Évitez queue longue.', '✗ Évitez arche haute.', '✓ Microblading européen.'], tip: '💡 Référence : Bella Hadid — légèrement droits.' },
        { heading: 'Visage ovale', subheading: 'Le plus chanceux — convient à presque tout.', list: ['✓ Différents styles possibles.', '✓ Combo Brows pour effet maximal.', '✓ Choix selon personnalité.'] },
        { heading: 'Microblading vs ombré — Lequel ?', paragraphs: ['Les deux techniques les plus populaires :'], list: ['**Microblading** : lame 3D poil par poil. Naturel. 1,5-2 ans. Peau sèche/normale.', '**Ombré** : poudre douce. 2-3 ans. Peau grasse.', '**Combo Brows** : les deux. Naturel + durable. Plus cher.'], quote: '"Je personnalise selon visage + peau + structure des sourcils + style de vie. Pas de solution unique." — Cẩm Vân' },
        { heading: 'Processus de consultation chez CAMI VAN', list: ['1. Analyse du visage (5 min).', '2. Proposition de 2-3 formes + comparaison.', '3. Esquisse au crayon.', '4. Choix du ton.', '5. Confirmation + réservation.'] },
      ],
      ES: [
        { heading: 'Paso 1: Identifica tu rostro', paragraphs: ['Antes de elegir forma, conoce tu rostro. Pelo recogido, espejo, mide: largo (raíz-mentón), ancho (mejilla-mejilla), compara proporción.'], list: ['Redondo: largo ≈ ancho. Mentón redondo, mejillas llenas.', 'Cuadrado: largo ≈ ancho. Mandíbula definida.', 'Alargado: largo >> ancho. Frente alta.', 'Ovalado: más balanceado. Todo estilo.'] },
        { heading: 'Rostro redondo', subheading: 'Objetivo: añadir largo y profundidad.', list: ['✓ Arco marcado — acento vertical.', '✓ Cola afilada y larga.', '✓ Microblading estilo coreano.', '✗ Evita cejas rectas.', '✗ Evita cejas cortas.'], tip: '💡 Referencia: Lisa BlackPink — arco marcado funciona.' },
        { heading: 'Rostro cuadrado', subheading: 'Objetivo: suavizar los ángulos.', list: ['✓ Cejas naturalmente curvas, pico redondeado.', '✓ Cola larga grácil, sin punta.', '✓ Ombré suave — degradado tenue.', '✗ Evita demasiado gruesas.', '✗ Evita arco agresivo.'] },
        { heading: 'Rostro alargado', subheading: 'Objetivo: ancho sin añadir largo.', list: ['✓ Cejas rectas o arco bajo.', '✓ Grosor medio.', '✗ Evita cola larga.', '✗ Evita arco alto.', '✓ Microblading europeo.'], tip: '💡 Referencia: Bella Hadid — ligeramente rectas.' },
        { heading: 'Rostro ovalado', subheading: 'El más afortunado — casi todo.', list: ['✓ Estilos variados posibles.', '✓ Combo Brows máximo efecto.', '✓ Elige según personalidad.'] },
        { heading: 'Microblading vs ombré — ¿Cuál?', paragraphs: ['Las dos técnicas más populares:'], list: ['**Microblading**: cuchilla 3D pelo a pelo. Natural. 1,5-2 años. Piel seca/normal.', '**Ombré**: polvo suave. 2-3 años. Piel grasa.', '**Combo Brows**: ambos. Natural + duradero. Más caro.'], quote: '"Personalizo según rostro + tono de piel + estructura de cejas + estilo de vida. Sin solución única." — Cẩm Vân' },
        { heading: 'Proceso de consulta en CAMI VAN', list: ['1. Análisis facial (5 min).', '2. Propuesta de 2-3 formas + comparación.', '3. Boceto a lápiz.', '4. Elección del tono.', '5. Confirmación + reserva.'] },
      ],
    },
  },
  {
    slug: 'xu-huong-moi-2026',
    image: '/client-2.jpg',
    date: '02/04/2026',
    category: { VI: 'Xu hướng', EN: 'Trends', RU: 'Тренды', ZH: '趋势', JA: 'トレンド', KO: '트렌드', FR: 'Tendances', ES: 'Tendencias' },
    title: {
      VI: 'Top 5 xu hướng phun môi 2026: Từ Lip Blush đến Bare Lips',
      EN: 'Top 5 lip PMU trends for 2026: From Lip Blush to Bare Lips',
      RU: 'Топ-5 трендов татуажа губ 2026: от Lip Blush до Bare Lips',
      ZH: '2026 唇部 PMU 五大趋势：从 Lip Blush 到 Bare Lips',
      JA: '2026 リップ PMU トップ 5 トレンド：Lip Blush から Bare Lips まで',
      KO: '2026 입술 PMU 톱 5 트렌드: Lip Blush부터 Bare Lips까지',
      FR: 'Top 5 tendances PMU lèvres 2026 : du Lip Blush aux Bare Lips',
      ES: 'Top 5 tendencias PMU labios 2026: de Lip Blush a Bare Lips',
    },
    excerpt: {
      VI: '2026 là năm của môi tự nhiên — không xăm đậm, không outline đen. Mình review chi tiết 5 xu hướng đang được yêu thích: Lip Blush hồng đất, Aqua Lip mọng nước, Cherry Lip Hàn Quốc, Berry Lip sang chảnh, và Bare Lips tối giản.',
      EN: '2026 is the year of natural lips — no bold tattoo, no dark outlines. I review the 5 most-loved trends: earth-pink Lip Blush, juicy Aqua Lip, Korean Cherry Lip, sophisticated Berry Lip, and minimalist Bare Lips.',
      RU: '2026 — год натуральных губ — без яркого татуажа, без чёрного контура. Обзор 5 любимых трендов: Lip Blush земля-розовый, сочный Aqua Lip, корейский Cherry Lip, изысканный Berry Lip, минималистичный Bare Lips.',
      ZH: '2026 是自然唇的一年 — 不浓不黑线。回顾最受喜爱的 5 大趋势：大地玫瑰 Lip Blush、水润 Aqua Lip、韩式 Cherry Lip、精致 Berry Lip、极简 Bare Lips。',
      JA: '2026 はナチュラルリップの年 — 濃いタトゥー、黒輪郭なし。最も愛される 5 トレンド：アースピンクの Lip Blush、ジューシーな Aqua Lip、韓国の Cherry Lip、洗練された Berry Lip、ミニマルな Bare Lips。',
      KO: '2026은 자연스러운 입술의 해 — 진한 문신도, 검은 외곽선도 없음. 가장 사랑받는 5가지 트렌드 리뷰: 어스 핑크 Lip Blush, 촉촉한 Aqua Lip, 한국식 Cherry Lip, 세련된 Berry Lip, 미니멀 Bare Lips.',
      FR: "2026 est l'année des lèvres naturelles — pas de tatouage marqué, pas de contour noir. Revue des 5 tendances : Lip Blush rose terre, Aqua Lip juteux, Cherry Lip coréen, Berry Lip raffiné, Bare Lips minimaliste.",
      ES: '2026 es el año de los labios naturales — sin tatuaje marcado, sin contorno negro. Reseña de las 5 tendencias: Lip Blush rosa tierra, Aqua Lip jugoso, Cherry Lip coreano, Berry Lip sofisticado, Bare Lips minimalista.',
    },
    readTime: { VI: '9 phút đọc', EN: '9 min read', RU: '9 мин чтения', ZH: '9 分钟阅读', JA: '9 分で読了', KO: '9분 분량', FR: '9 min de lecture', ES: '9 min de lectura' },
    tags: {
      VI: ['Môi', 'Xu hướng', '2026', 'Lip Blush', 'Beauty'],
      EN: ['Lips', 'Trends', '2026', 'Lip Blush', 'Beauty'],
      RU: ['Губы', 'Тренды', '2026', 'Lip Blush', 'Красота'],
      ZH: ['唇部', '趋势', '2026', 'Lip Blush', '美容'],
      JA: ['リップ', 'トレンド', '2026', 'Lip Blush', 'ビューティー'],
      KO: ['입술', '트렌드', '2026', 'Lip Blush', '뷰티'],
      FR: ['Lèvres', 'Tendances', '2026', 'Lip Blush', 'Beauté'],
      ES: ['Labios', 'Tendencias', '2026', 'Lip Blush', 'Belleza'],
    },
    intro: {
      VI: '2026 đánh dấu sự thoái lui của trào lưu "xăm môi đậm như tô son" — thay vào đó là trend môi tự nhiên, mọng nước, và đa dạng tone. Cùng mình review 5 xu hướng đang được yêu thích nhất, cách chọn tone phù hợp + giá thị trường tại Việt Nam.',
      EN: '2026 marks the retreat of the "bold lipstick-style tattoo" trend — replaced by natural, juicy lips in diverse tones. Let\'s review the 5 most-loved trends, how to pick the right shade, and current market prices in Vietnam.',
      RU: '2026 — отступление тренда "татуаж как помада" — на смену пришли натуральные сочные губы в разных тонах. Обзор 5 любимых трендов, как выбрать тон, и текущие цены во Вьетнаме.',
      ZH: '2026 标志着"如涂口红的浓纹绣"趋势的退场 — 取而代之的是自然水润、色调多样的双唇。回顾 5 大热门趋势、选色技巧和越南市场价格。',
      JA: '2026 は「口紅のような濃いタトゥー」トレンドの撤退 — 代わりに自然でジューシー、多彩な色合いの唇。最も愛される 5 トレンド、色選び、ベトナム市場価格を解説。',
      KO: '2026은 "립스틱처럼 진한 문신" 트렌드의 후퇴 — 자연스럽고 촉촉하며 다양한 톤으로 대체됨. 가장 사랑받는 5 트렌드, 톤 선택법, 베트남 현재 시장 가격 리뷰.',
      FR: "2026 marque le recul de la tendance \"tatouage type rouge à lèvres\" — remplacée par des lèvres naturelles, juteuses, et variées. Revue des 5 tendances, choix de teinte, et prix actuels au Vietnam.",
      ES: '2026 marca el retroceso de la tendencia "tatuaje tipo lápiz labial" — reemplazada por labios naturales, jugosos y variados. Reseña de las 5 tendencias, elección de tono y precios actuales en Vietnam.',
    },
    sections: {
      VI: [
        { heading: '1. Lip Blush hồng đất — "Vẫn ngon nhất"', subheading: 'Tone hồng pha nâu đất, hợp 90% khách hàng.', paragraphs: ['Lip Blush hồng đất vẫn là vua 2026. Hợp mọi tone da, mọi tuổi, mọi phong cách. Hiệu ứng "vừa cắn quả mọng".'], list: ['Phù hợp: Mọi tone da.', 'Tone phổ biến: #C97C75, #B85F5C.', 'Bền màu: 2-3 năm.', 'Giá CAMI VAN: 3.000.000đ.'], tip: '💡 An toàn nhất nếu lần đầu phun môi.' },
        { heading: '2. Aqua Lip mọng nước — Trend Hàn Quốc', subheading: 'Hiệu ứng môi căng mọng như được dưỡng ẩm liên tục.', paragraphs: ['Mực mỏng + tinh chất dưỡng ẩm sâu, môi luôn "ướt" và mọng. Hợp người môi khô, mỏng, thâm.'], list: ['Phù hợp: Da nhạy cảm, môi khô/mỏng.', 'Tone: Hồng nhạt + ánh bóng.', 'Bền: 2 năm.', 'Giá CAMI VAN: 3.500.000đ.'] },
        { heading: '3. Cherry Lip Hàn Quốc — Đỏ tự nhiên', subheading: 'Đỏ cherry pha hồng, không quá đậm.', paragraphs: ['Trào lưu từ K-Drama. "Vừa cắn cherry" — đỏ tươi nhưng không artificial. Hợp da trắng và mặt nhỏ.'], list: ['Phù hợp: Da trắng, mặt nhỏ, 20-35 tuổi.', 'Tone: #D63A47.', 'Bền: 2.5 năm.', 'Giá CAMI VAN: 3.200.000đ.'] },
        { heading: '4. Berry Lip — Sang chảnh', subheading: 'Đỏ tím nhẹ, sang trọng quyến rũ.', paragraphs: ['Hợp phụ nữ 30+ — chín chắn, thanh lịch. Hiệu ứng việt quất / dâu rừng.'], list: ['Phù hợp: 30+, da trắng/trắng vàng.', 'Tone: #8E3A5C.', 'Bền: 3 năm.', 'Giá CAMI VAN: 3.500.000đ.'], quote: '"Berry Lip là tone yêu thích của khách Nga và 35+." — Cẩm Vân' },
        { heading: '5. Bare Lips / Nude Lip — Tối giản', subheading: 'Gần như không màu — chỉ enhance.', paragraphs: ['Xu hướng mới 2026, dành cho người thích "no makeup makeup". Lớp nude rất nhẹ — giảm thâm, đều màu.', 'Hiệu ứng: "vừa thức dậy mà môi đã đẹp".'], list: ['Phù hợp: Tối giản, công sở.', 'Tone: Nude pink rất nhạt.', 'Bền: 1.5-2 năm.', 'Giá CAMI VAN: 2.800.000đ.'] },
        { heading: 'Cách chọn tone — Quy tắc 80/20', list: ['**80% theo tone da**: Trắng → Cherry/Berry. Vàng → Hồng đất. Ngăm → Berry deep.', '**20% theo phong cách**: Năng động → Cherry. Sang → Berry. Tối giản → Nude.', 'Tránh ngược undertone — sẽ làm mặt bệch.'], warning: '⚠️ Đừng chọn theo trend — hãy chọn theo BẠN.' },
      ],
      EN: [
        { heading: '1. Earth-pink Lip Blush — "Still the best"', subheading: 'Pink-brown shade for 90% of clients.', paragraphs: ['Still king of 2026 trends. Suits every skin tone, age, style. The "just bit a berry" effect.'], list: ['Suitable for: All skin tones.', 'Common shades: #C97C75, #B85F5C.', 'Longevity: 2–3 years.', 'CAMI VAN price: 3,000,000 VND.'], tip: '💡 Safest choice for first-timers.' },
        { heading: '2. Juicy Aqua Lip — From Korea', subheading: 'Lips that look constantly hydrated.', paragraphs: ['Thin pigment + deep hydration serum — permanent "wet" plump look. Great for dry, thin, pigmented lips.'], list: ['Suitable for: Sensitive, dry, thin lips.', 'Shade: Light pink with sheen.', 'Longevity: 2 years.', 'CAMI VAN price: 3,500,000 VND.'] },
        { heading: '3. Korean Cherry Lip — Natural red', subheading: 'Cherry-pink red, not as bold.', paragraphs: ['From K-Drama actresses. "Just bit a cherry" — bright red, never artificial. Best for fair skin and small faces.'], list: ['Suitable for: Fair skin, smaller face, 20–35.', 'Shade: #D63A47.', 'Longevity: 2.5 years.', 'CAMI VAN price: 3,200,000 VND.'] },
        { heading: '4. Berry Lip — Sophisticated', subheading: 'Subtle red-purple, elegant and alluring.', paragraphs: ['Suits women 30+ — mature, graceful. Like blueberries / wild raspberries.'], list: ['Suitable for: 30+, fair to warm skin.', 'Shade: #8E3A5C.', 'Longevity: 3 years.', 'CAMI VAN price: 3,500,000 VND.'], quote: '"Berry Lip is the favorite among Russian clients and 35+." — Cẩm Vân' },
        { heading: '5. Bare Lips / Nude Lip — Most minimal', subheading: 'Almost no color — just enhances.', paragraphs: ['Newest 2026 trend for "no makeup makeup" style. Very light nude — reduces darkness, evens tone.', 'Effect: "just woke up and lips already beautiful".'], list: ['Suitable for: Minimal style, office.', 'Shade: Very light nude pink.', 'Longevity: 1.5–2 years.', 'CAMI VAN price: 2,800,000 VND.'] },
        { heading: 'How to pick — The 80/20 rule', list: ['**80% by skin tone**: Fair → Cherry/Berry. Yellow → Earth pink. Deep → Deep berry.', '**20% by style**: Energetic → Cherry. Sophisticated → Berry. Minimal → Nude.', 'Avoid going against undertone.'], warning: "⚠️ Don't pick by trend — pick what suits YOU." },
      ],
      RU: [
        { heading: '1. Earth-pink Lip Blush — "Всё ещё лучший"', subheading: 'Розово-коричневый — для 90% клиентов.', paragraphs: ['Король трендов 2026. Подходит всем тонам кожи, возрастам, стилям. Эффект "только укусили ягоду".'], list: ['Подходит: всем тонам кожи.', 'Оттенки: #C97C75, #B85F5C.', 'Стойкость: 2-3 года.', 'Цена CAMI VAN: 3 000 000 VND.'], tip: '💡 Самый безопасный выбор для новичков.' },
        { heading: '2. Сочный Aqua Lip — Из Кореи', subheading: 'Губы выглядят постоянно увлажнёнными.', paragraphs: ['Тонкий пигмент + сыворотка глубокого увлажнения — постоянный "влажный" вид. Для сухих, тонких, пигментированных губ.'], list: ['Подходит: чувствительные, сухие, тонкие губы.', 'Оттенок: светло-розовый с блеском.', 'Стойкость: 2 года.', 'Цена CAMI VAN: 3 500 000 VND.'] },
        { heading: '3. Корейский Cherry Lip — Натуральный красный', subheading: 'Вишнёво-розовый, не слишком яркий.', paragraphs: ['Из K-Drama. "Только укусили вишню" — яркий, но не искусственный. Лучше для светлой кожи и маленьких лиц.'], list: ['Подходит: светлая кожа, маленькое лицо, 20-35.', 'Оттенок: #D63A47.', 'Стойкость: 2.5 года.', 'Цена CAMI VAN: 3 200 000 VND.'] },
        { heading: '4. Berry Lip — Изысканный', subheading: 'Тонкий красно-фиолетовый, элегантный.', paragraphs: ['Для женщин 30+ — зрелые, грациозные. Как голубика / лесная малина.'], list: ['Подходит: 30+, светлая/тёплая кожа.', 'Оттенок: #8E3A5C.', 'Стойкость: 3 года.', 'Цена CAMI VAN: 3 500 000 VND.'], quote: '"Berry Lip — любимый у русских клиентов и 35+." — Cẩm Vân' },
        { heading: '5. Bare Lips / Nude Lip — Минимализм', subheading: 'Почти без цвета — только усиление.', paragraphs: ['Новейший тренд 2026 для "no makeup makeup". Очень светлый nude — уменьшает темноту, выравнивает тон.', 'Эффект: "только проснулась и губы уже красивые".'], list: ['Подходит: минимализм, офис.', 'Оттенок: очень светлый nude pink.', 'Стойкость: 1.5-2 года.', 'Цена CAMI VAN: 2 800 000 VND.'] },
        { heading: 'Как выбрать — Правило 80/20', list: ['**80% по тону кожи**: светлая → Cherry/Berry. Жёлтая → Earth pink. Тёмная → Deep berry.', '**20% по стилю**: энергичная → Cherry. Изысканная → Berry. Минимализм → Nude.', 'Не идите против подтона.'], warning: '⚠️ Не выбирайте по тренду — по себе.' },
      ],
      ZH: [
        { heading: '1. 大地玫瑰 Lip Blush — "依然最佳"', subheading: '粉棕色调 — 90% 客户适用。', paragraphs: ['仍是 2026 趋势之王。适合所有肤色、年龄、风格。"刚咬过浆果"效果。'], list: ['适合：所有肤色。', '常见色调：#C97C75、#B85F5C。', '持久：2-3 年。', 'CAMI VAN 价：3,000,000 越南盾。'], tip: '💡 初次纹唇最安全选择。' },
        { heading: '2. 水润 Aqua Lip — 韩国趋势', subheading: '双唇看起来持续保湿。', paragraphs: ['薄色乳 + 深层保湿精华 — 持久"湿润"丰满。适合干燥、薄、暗沉双唇。'], list: ['适合：敏感、干燥、薄唇。', '色调：浅粉带光泽。', '持久：2 年。', 'CAMI VAN 价：3,500,000 越南盾。'] },
        { heading: '3. 韩式 Cherry Lip — 自然红', subheading: '樱桃粉红色，不太浓。', paragraphs: ['来自韩剧女演员。"刚咬过樱桃" — 鲜红但不假。适合白皮肤、小脸。'], list: ['适合：白皮肤、小脸、20-35 岁。', '色调：#D63A47。', '持久：2.5 年。', 'CAMI VAN 价：3,200,000 越南盾。'] },
        { heading: '4. Berry Lip — 精致', subheading: '微妙红紫，优雅迷人。', paragraphs: ['适合 30+ 女性 — 成熟优雅。如蓝莓 / 野莓效果。'], list: ['适合：30+，白/暖肤。', '色调：#8E3A5C。', '持久：3 年。', 'CAMI VAN 价：3,500,000 越南盾。'], quote: '"Berry Lip 是俄罗斯客户和 35+ 客户的最爱。" — Cẩm Vân' },
        { heading: '5. Bare Lips / Nude Lip — 极简', subheading: '几乎无色 — 仅增强。', paragraphs: ['2026 最新趋势，适合"无妆妆"风格。极轻 nude — 减暗沉、均色。', '效果："刚醒来唇就美"。'], list: ['适合：极简、办公室。', '色调：极浅 nude pink。', '持久：1.5-2 年。', 'CAMI VAN 价：2,800,000 越南盾。'] },
        { heading: '如何选择 — 80/20 法则', list: ['**80% 看肤色**：白 → Cherry/Berry。黄 → 大地玫瑰。深 → Deep berry。', '**20% 看风格**：活力 → Cherry。精致 → Berry。极简 → Nude。', '避免反底色调。'], warning: '⚠️ 别按趋势选 — 按你自己选。' },
      ],
      JA: [
        { heading: '1. アースピンク Lip Blush — "やはり最強"', subheading: 'ピンクブラウン — 90% のお客様に。', paragraphs: ['2026 トレンドの王者。あらゆる肌色、年齢、スタイルに合う。"ベリーを噛んだばかり"効果。'], list: ['対象：全ての肌色。', '一般色：#C97C75、#B85F5C。', '持続：2〜3 年。', 'CAMI VAN 価格：3,000,000 ベトナムドン。'], tip: '💡 初心者に最も安全。' },
        { heading: '2. ジューシー Aqua Lip — 韓国発', subheading: '常に潤った唇に見える。', paragraphs: ['薄い色素 + 深層保湿セラム — 永続的な"濡れた"ふっくら感。乾燥・薄い・色素沈着唇に最適。'], list: ['対象：敏感、乾燥、薄い唇。', '色調：ライトピンク + 光沢。', '持続：2 年。', 'CAMI VAN 価格：3,500,000 ベトナムドン。'] },
        { heading: '3. 韓国 Cherry Lip — 自然な赤', subheading: 'チェリーピンクレッド、控えめ。', paragraphs: ['K-Drama 女優から。"チェリーを噛んだばかり" — 明るい赤だが人工的でない。色白と小顔向き。'], list: ['対象：色白、小顔、20〜35 歳。', '色調：#D63A47。', '持続：2.5 年。', 'CAMI VAN 価格：3,200,000 ベトナムドン。'] },
        { heading: '4. Berry Lip — 洗練', subheading: '微妙な赤紫、エレガントで魅惑的。', paragraphs: ['30+ の女性に — 成熟、優雅。ブルーベリー / 野いちごのよう。'], list: ['対象：30+、色白〜暖色肌。', '色調：#8E3A5C。', '持続：3 年。', 'CAMI VAN 価格：3,500,000 ベトナムドン。'], quote: '"Berry Lip はロシアのお客様と 35+ のお気に入り。" — Cẩm Vân' },
        { heading: '5. Bare Lips / Nude Lip — ミニマル', subheading: 'ほぼ無色 — 強調のみ。', paragraphs: ['2026 最新トレンド、"ノーメイクメイク"向け。極薄ヌード — 暗さ軽減、均一な色。', '効果："起きたばかりなのに唇は美しい"。'], list: ['対象：ミニマル、オフィス。', '色調：極薄ヌードピンク。', '持続：1.5〜2 年。', 'CAMI VAN 価格：2,800,000 ベトナムドン。'] },
        { heading: '色選び — 80/20 ルール', list: ['**80% 肌色基準**：色白 → Cherry/Berry。黄み → アースピンク。濃い → Deep berry。', '**20% スタイル基準**：エネルギッシュ → Cherry。洗練 → Berry。ミニマル → Nude。', 'アンダートーンに逆らわない。'], warning: '⚠️ トレンドではなく、あなたに合うものを選んで。' },
      ],
      KO: [
        { heading: '1. 어스 핑크 Lip Blush — "여전히 최고"', subheading: '핑크-브라운 톤 — 90% 고객에게 적합.', paragraphs: ['여전히 2026 트렌드의 왕. 모든 피부톤, 연령, 스타일에 적합. "베리를 막 베어 문" 효과.'], list: ['적합: 모든 피부톤.', '일반 톤: #C97C75, #B85F5C.', '지속: 2-3년.', 'CAMI VAN 가격: 3,000,000 동.'], tip: '💡 첫 시술자에게 가장 안전.' },
        { heading: '2. 촉촉한 Aqua Lip — 한국 트렌드', subheading: '입술이 지속적으로 보습된 듯.', paragraphs: ['얇은 색소 + 깊은 보습 세럼 — 영구적인 "촉촉한" 도톰함. 건조하고 얇고 어두운 입술에 좋음.'], list: ['적합: 민감, 건조, 얇은 입술.', '톤: 라이트 핑크 + 광택.', '지속: 2년.', 'CAMI VAN 가격: 3,500,000 동.'] },
        { heading: '3. 한국 Cherry Lip — 자연스러운 빨강', subheading: '체리 핑크 레드, 너무 진하지 않음.', paragraphs: ['K-드라마 여배우들로부터. "체리를 막 베어 문" — 밝은 빨강이지만 인위적이지 않음. 흰 피부와 작은 얼굴에 최적.'], list: ['적합: 흰 피부, 작은 얼굴, 20-35세.', '톤: #D63A47.', '지속: 2.5년.', 'CAMI VAN 가격: 3,200,000 동.'] },
        { heading: '4. Berry Lip — 세련', subheading: '미묘한 레드-퍼플, 우아하고 매혹적.', paragraphs: ['30대 이상 여성에게 — 성숙, 우아. 블루베리 / 산딸기 같은 효과.'], list: ['적합: 30+, 흰/따뜻한 피부.', '톤: #8E3A5C.', '지속: 3년.', 'CAMI VAN 가격: 3,500,000 동.'], quote: '"Berry Lip은 러시아 고객과 35+의 즐겨찾기." — Cẩm Vân' },
        { heading: '5. Bare Lips / Nude Lip — 가장 미니멀', subheading: '거의 무색 — 강조만.', paragraphs: ['"노메이크업 메이크업" 스타일을 위한 2026 최신 트렌드. 매우 가벼운 누드 — 어두움 감소, 톤 균일.', '효과: "일어나자마자 입술이 이미 아름다움".'], list: ['적합: 미니멀, 사무실.', '톤: 매우 가벼운 누드 핑크.', '지속: 1.5-2년.', 'CAMI VAN 가격: 2,800,000 동.'] },
        { heading: '톤 선택 — 80/20 규칙', list: ['**80% 피부톤**: 흰 → Cherry/Berry. 노랑 → 어스 핑크. 깊은 → Deep berry.', '**20% 스타일**: 활력 → Cherry. 세련 → Berry. 미니멀 → Nude.', '언더톤에 반대 가지 마세요.'], warning: '⚠️ 트렌드가 아닌, 당신에게 맞는 것을 선택.' },
      ],
      FR: [
        { heading: '1. Lip Blush rose terre — "Toujours le meilleur"', subheading: 'Rose-brun — pour 90% des clientes.', paragraphs: ["Toujours roi des tendances 2026. Convient à tous les tons, âges, styles. Effet \"juste mordu une baie\"."], list: ['Convient : Tous tons de peau.', 'Tons courants : #C97C75, #B85F5C.', 'Tenue : 2-3 ans.', 'Prix CAMI VAN : 3 000 000 VND.'], tip: '💡 Le plus sûr pour les débutantes.' },
        { heading: '2. Aqua Lip juteux — Tendance Corée', subheading: 'Lèvres semblent constamment hydratées.', paragraphs: ['Pigment fin + sérum hydratant — effet "humide" pulpeux permanent. Idéal pour lèvres sèches, fines, pigmentées.'], list: ['Convient : Sensibles, sèches, fines.', 'Ton : Rose clair brillant.', 'Tenue : 2 ans.', 'Prix CAMI VAN : 3 500 000 VND.'] },
        { heading: '3. Cherry Lip coréen — Rouge naturel', subheading: 'Rouge cerise-rose, jamais trop marqué.', paragraphs: ["Des actrices K-Drama. \"Juste mordu une cerise\" — rouge vif jamais artificiel. Idéal teint clair et petit visage."], list: ['Convient : Teint clair, petit visage, 20-35 ans.', 'Ton : #D63A47.', 'Tenue : 2,5 ans.', 'Prix CAMI VAN : 3 200 000 VND.'] },
        { heading: '4. Berry Lip — Raffiné', subheading: 'Rouge-violet subtil, élégant.', paragraphs: ['Pour femmes 30+ — mature, gracieux. Comme myrtilles / framboises sauvages.'], list: ['Convient : 30+, peau claire/chaude.', 'Ton : #8E3A5C.', 'Tenue : 3 ans.', 'Prix CAMI VAN : 3 500 000 VND.'], quote: '"Berry Lip est le favori de mes clientes russes et 35+." — Cẩm Vân' },
        { heading: '5. Bare Lips / Nude Lip — Le plus minimaliste', subheading: "Quasi sans couleur — juste rehaussé.", paragraphs: ['Tendance 2026 pour "no makeup makeup". Nude très léger — réduit obscurcissement, uniformise.', "Effet : \"juste réveillée et lèvres déjà belles\"."], list: ['Convient : Style minimal, bureau.', 'Ton : Nude pink très clair.', 'Tenue : 1,5-2 ans.', 'Prix CAMI VAN : 2 800 000 VND.'] },
        { heading: 'Choisir le ton — Règle 80/20', list: ["**80% par teint** : Clair → Cherry/Berry. Jaune → Rose terre. Foncé → Deep berry.", '**20% par style** : Énergique → Cherry. Raffiné → Berry. Minimal → Nude.', 'Évitez de contrer le sous-ton.'], warning: '⚠️ Ne choisissez pas par tendance — par VOUS.' },
      ],
      ES: [
        { heading: '1. Lip Blush rosa tierra — "Aún el mejor"', subheading: 'Rosa-marrón — para 90% de clientas.', paragraphs: ['Sigue siendo el rey de tendencias 2026. Apto para todos los tonos, edades, estilos. Efecto "recién mordí una baya".'], list: ['Apto: Todos los tonos.', 'Tonos comunes: #C97C75, #B85F5C.', 'Duración: 2-3 años.', 'Precio CAMI VAN: 3.000.000 VND.'], tip: '💡 Lo más seguro para principiantes.' },
        { heading: '2. Aqua Lip jugoso — Tendencia coreana', subheading: 'Labios parecen siempre hidratados.', paragraphs: ['Pigmento fino + sérum hidratante — efecto "húmedo" voluminoso permanente. Ideal para labios secos, finos, pigmentados.'], list: ['Apto: Sensibles, secos, finos.', 'Tono: Rosa claro con brillo.', 'Duración: 2 años.', 'Precio CAMI VAN: 3.500.000 VND.'] },
        { heading: '3. Cherry Lip coreano — Rojo natural', subheading: 'Cereza-rosa rojo, nunca demasiado.', paragraphs: ['De actrices K-Drama. "Recién mordí una cereza" — rojo vivo nunca artificial. Ideal piel clara y rostro pequeño.'], list: ['Apto: Piel clara, rostro pequeño, 20-35 años.', 'Tono: #D63A47.', 'Duración: 2,5 años.', 'Precio CAMI VAN: 3.200.000 VND.'] },
        { heading: '4. Berry Lip — Sofisticado', subheading: 'Rojo-violeta sutil, elegante.', paragraphs: ['Para mujeres 30+ — maduro, grácil. Como arándanos / frambuesas silvestres.'], list: ['Apto: 30+, piel clara/cálida.', 'Tono: #8E3A5C.', 'Duración: 3 años.', 'Precio CAMI VAN: 3.500.000 VND.'], quote: '"Berry Lip es el favorito de mis clientas rusas y 35+." — Cẩm Vân' },
        { heading: '5. Bare Lips / Nude Lip — Lo más minimal', subheading: 'Casi sin color — solo realza.', paragraphs: ['Tendencia 2026 para "no makeup makeup". Nude muy ligero — reduce oscurecimiento, uniforma.', 'Efecto: "recién despertada y labios ya hermosos".'], list: ['Apto: Estilo minimal, oficina.', 'Tono: Nude pink muy claro.', 'Duración: 1,5-2 años.', 'Precio CAMI VAN: 2.800.000 VND.'] },
        { heading: 'Cómo elegir tono — Regla 80/20', list: ['**80% por tono de piel**: Clara → Cherry/Berry. Amarilla → Rosa tierra. Oscura → Deep berry.', '**20% por estilo**: Energética → Cherry. Sofisticada → Berry. Minimal → Nude.', 'Evita contrarrestar el subtono.'], warning: '⚠️ No elijas por tendencia — por TI.' },
      ],
    },
  },
];

export function pickLang<T>(field: Record<Lang, T>, lang: Lang): T {
  return field[lang] ?? field.EN;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
