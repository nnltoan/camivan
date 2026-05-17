/**
 * Sub-services menu — chi tiết bảng giá mỗi danh mục theo Cami_Van_PMU_Menu_v7.
 *
 * Quy tắc giá (theo PROJECT_BRIEF):
 *   - 21 dịch vụ PMU (signature, brows premium, lips premium, lip correction,
 *     men's PMU, eyeliner) ở bản VI đã giảm -1.000.000đ so với giá gốc EN/quốc tế.
 *   - Các dịch vụ Lash, Brow grooming, Plasma, Spa và Touch-Up không giảm.
 *   - Định dạng: ≥1tr ghi đầy đủ '4.500.000đ', <1tr ghi '450.000đ' (không dùng "K").
 *
 * Mỗi item có:
 *   - name: tên dịch vụ (giữ tiếng Anh universal cho tên kỹ thuật/brand)
 *   - price: theo ngôn ngữ (VI thấp hơn 1tr cho PMU)
 *   - desc: 1-2 câu chú thích đa ngôn ngữ
 *   - note?: badge đặc biệt (Best Value, Đi kèm gói, ...)
 */

import { Lang } from './i18n';

export type L<T> = Record<Lang, T>;

export interface SubServiceItem {
  name: string;
  price: string;
  desc?: string;
  note?: string;
}
export interface SubServiceGroup {
  group: string;
  items: SubServiceItem[];
}

// Helper: build full 8-language map. Required keys: VI, EN. Others fall back to EN if missing.
function L<T>(map: { VI: T; EN: T; RU?: T; ZH?: T; JA?: T; KO?: T; FR?: T; ES?: T }): L<T> {
  return {
    VI: map.VI, EN: map.EN,
    RU: map.RU ?? map.EN, ZH: map.ZH ?? map.EN, JA: map.JA ?? map.EN,
    KO: map.KO ?? map.EN, FR: map.FR ?? map.EN, ES: map.ES ?? map.EN,
  };
}

export const SUB_SERVICES: Record<string, L<SubServiceGroup[]>> = {

  // ====================== BROWS ARTISTRY ======================
  microblading: L({
    VI: [
      { group: 'Phun Mày Cao Cấp', items: [
        { name: 'Mày Hoàng Gia Aura', price: '5.500.000đ', desc: 'Signature độc quyền của Master Aura — kết hợp sợi siêu thực với tán bóng vương giả, dáng "Hoàng Gia" tôn khí chất.', note: 'Signature Master Aura' },
        { name: 'Combo Hybrid Brows', price: '4.800.000đ', desc: 'Kết hợp điêu khắc sợi + phun bột — sợi thật ở đầu mày, bột tán bóng ở đuôi mày. Tự nhiên & nét.' },
        { name: 'Điêu Khắc Sợi Nano', price: '4.500.000đ', desc: 'Điêu khắc từng sợi siêu mảnh bằng máy nano, mô phỏng lông thật. Phù hợp khách thích vẻ siêu tự nhiên.' },
        { name: 'Phun Bột Ombre', price: '3.500.000đ', desc: 'Phun bột tán bóng ombre — đầu nhạt, đuôi đậm. Hoàn hảo cho khách mê style "make-up sẵn".' },
        { name: 'Phun Mày Shading', price: '2.800.000đ', desc: 'Phun mày bóng mờ classic — dáng đơn giản, tone đều, phù hợp khách lần đầu thử PMU.' },
      ]},
      { group: 'Chỉnh Sửa & Tái Tạo', items: [
        { name: 'Sửa Mày Cũ', price: '2.500.000đ', desc: 'Xử lý mày cũ trổ màu xanh/đỏ/xám, làm sạch nền trước khi phủ lớp màu mới chuẩn tone.' },
        { name: 'Tư Vấn & Vẽ Phom Mày', price: '300.000đ', desc: 'Phân tích nhân tướng học, vẽ phom mày phù hợp khuôn mặt. Trừ vào giá nếu chốt làm PMU.' },
        { name: 'Dặm Màu Lần 1', price: 'Miễn phí', desc: 'Dặm màu lần 2 sau 30-45 ngày — giúp tone lên chuẩn, sửa các điểm chưa đều.', note: 'Đi kèm mọi gói phun mày' },
      ]},
    ],
    EN: [
      { group: 'Premium Brows', items: [
        { name: 'Aura Royal Brows', price: '6.500.000đ', desc: "Master Aura's exclusive signature — hyper-realistic strokes blended with royal shading. The \"Royal\" shape elevates your presence.", note: 'Master Aura Signature' },
        { name: 'Combo Hybrid Brows', price: '5.800.000đ', desc: 'Strokes at the front, powder shading at the tail — natural and crisp at once.' },
        { name: 'Nano Hairstroke', price: '5.500.000đ', desc: 'Ultra-fine hair-by-hair strokes using a nano machine — mimics real hair. Ideal for the most natural look.' },
        { name: 'Ombre Powder Brows', price: '4.500.000đ', desc: 'Ombre powder shading — soft front, defined tail. Perfect for clients who love the "always made up" look.' },
        { name: 'Shading Brows', price: '3.800.000đ', desc: 'Classic soft shading — simple shape, even tone, great for first-time PMU clients.' },
      ]},
      { group: 'Correction & Restoration', items: [
        { name: 'Brow Correction', price: '3.500.000đ', desc: 'Neutralize old PMU that has turned blue/red/grey before applying the new on-tone color.' },
        { name: 'Brow Design Consultation', price: '300.000đ', desc: 'Face-reading analysis and shape sketching matched to your features. Deductible if you proceed with PMU.' },
        { name: 'First Touch-Up', price: 'Complimentary', desc: 'Day 30-45 retouch — perfect the tone and refine any uneven spots.', note: 'Included with every brow package' },
      ]},
    ],
    JA: [
      { group: 'プレミアム眉', items: [
        { name: 'オーラ・ロイヤル・ブロウ', price: '6.500.000đ', desc: 'マスター・オーラの独占シグネチャー — ハイパーリアルなストロークと高貴なシェーディングの融合。「ロイヤル」フォルムが品格を引き立てます。', note: 'Master Aura シグネチャー' },
        { name: 'ハイブリッド眉 コンボ', price: '5.800.000đ', desc: '前方はストローク、尾はパウダーシェーディング — 自然さとシャープさを同時に。' },
        { name: 'ナノ・ヘアストローク', price: '5.500.000đ', desc: 'ナノマシンによる極細の一本一本ストローク — 本物の毛のような最も自然な仕上がり。' },
        { name: 'オンブレ・パウダー眉', price: '4.500.000đ', desc: 'オンブレパウダーシェーディング — 柔らかな前方、くっきりした尾。「常にメイク済み」の印象に最適。' },
        { name: 'シェーディング眉', price: '3.800.000đ', desc: 'クラシックなソフトシェーディング — シンプルな形、均一なトーン、初めての方に最適。' },
      ]},
      { group: '修正 & 再生', items: [
        { name: '眉修正', price: '3.500.000đ', desc: '青/赤/グレーに変色した古い PMU を中和してから、新しいオントーンの色をのせます。' },
        { name: '眉デザイン相談', price: '300.000đ', desc: '人相学に基づく分析と顔立ちに合わせたシェイプスケッチ。PMU 施術をされる場合は料金から差し引かれます。' },
        { name: '初回リタッチ', price: '無料', desc: '30-45日目のリタッチ — トーンを完璧に仕上げ、ムラを整えます。', note: 'すべての眉パッケージに含む' },
      ]},
    ],
    ZH: [
      { group: '高端眉部', items: [
        { name: 'Aura 皇家眉', price: '6.500.000đ', desc: 'Master Aura 独家签名 — 超写实眉丝结合贵族雾粉。"皇家"轮廓凸显您的气质。', note: 'Master Aura 签名' },
        { name: '混合眉 Combo', price: '5.800.000đ', desc: '前端眉丝 + 尾部雾粉 — 同时拥有自然与立体感。' },
        { name: 'Nano 眉丝雕刻', price: '5.500.000đ', desc: '使用纳米机器逐根勾勒超细眉丝 — 模拟真毛，最自然的效果。' },
        { name: 'Ombre 雾粉眉', price: '4.500.000đ', desc: '雾粉渐变 — 前端柔和、尾部清晰。完美呈现"自带妆容"效果。' },
        { name: '雾眉 Shading', price: '3.800.000đ', desc: '经典柔和雾眉 — 简洁眉形、色调均匀，适合首次尝试 PMU 的客户。' },
      ]},
      { group: '修正 & 重塑', items: [
        { name: '旧眉修正', price: '3.500.000đ', desc: '中和已变色（蓝/红/灰）的旧 PMU，再覆盖新色调。' },
        { name: '眉形设计咨询', price: '300.000đ', desc: '面相学分析 + 个性化眉形草图。如选择 PMU 服务可抵扣此费用。' },
        { name: '首次补色', price: '免费', desc: '30-45 天补色 — 完美调整色调并修补不均匀处。', note: '所有眉部套餐均含' },
      ]},
    ],
    KO: [
      { group: '프리미엄 눈썹', items: [
        { name: 'Aura 로열 브로우', price: '6.500.000đ', desc: 'Master Aura 독점 시그니처 — 하이퍼리얼 스트로크와 로열 셰이딩의 조화. "로열" 셰이프가 품격을 더해줍니다.', note: 'Master Aura 시그니처' },
        { name: '하이브리드 콤보 눈썹', price: '5.800.000đ', desc: '앞쪽은 스트로크, 꼬리는 파우더 셰이딩 — 자연스러움과 또렷함을 동시에.' },
        { name: '나노 헤어스트로크', price: '5.500.000đ', desc: '나노 머신을 사용한 한 올 한 올 초정밀 스트로크 — 실제 모발 같은 가장 자연스러운 룩.' },
        { name: '옴브레 파우더 눈썹', price: '4.500.000đ', desc: '옴브레 파우더 셰이딩 — 앞쪽은 부드럽고, 꼬리는 또렷. "메이크업한 듯한" 룩에 완벽.' },
        { name: '쉐이딩 눈썹', price: '3.800.000đ', desc: '클래식 소프트 셰이딩 — 심플한 모양, 균일한 톤. PMU 첫 시도 고객에게 적합.' },
      ]},
      { group: '교정 & 복원', items: [
        { name: '눈썹 교정', price: '3.500.000đ', desc: '파랑/빨강/회색으로 변색된 오래된 PMU를 중화한 후 새 컬러를 덮어씌웁니다.' },
        { name: '눈썹 디자인 상담', price: '300.000đ', desc: '관상학 분석 + 얼굴에 맞춘 형태 스케치. PMU 시술 시 비용에서 차감됩니다.' },
        { name: '첫 리터치', price: '무료', desc: '30-45일 차 리터치 — 톤을 완벽하게 다듬고 불균일한 부분을 보정.', note: '모든 눈썹 패키지 포함' },
      ]},
    ],
    RU: [
      { group: 'Премиум брови', items: [
        { name: 'Aura Royal Brows', price: '6.500.000đ', desc: 'Эксклюзивная сигнатура Мастера Auraе — гиперреалистичные волоски в сочетании с королевской растушёвкой. Форма «Royal» подчёркивает статус.', note: 'Сигнатура Master Aura' },
        { name: 'Combo Hybrid Brows', price: '5.800.000đ', desc: 'Волоски спереди, пудровая растушёвка к хвосту — естественно и чётко одновременно.' },
        { name: 'Nano Hairstroke', price: '5.500.000đ', desc: 'Сверхтонкая прорисовка волоск-к-волоску нано-машинкой — имитирует натуральные волосы.' },
        { name: 'Ombre Powder Brows', price: '4.500.000đ', desc: 'Омбре-пудра — мягкое начало, чёткий хвост. Эффект «уже накрашенных» бровей.' },
        { name: 'Shading Brows', price: '3.800.000đ', desc: 'Классическая мягкая растушёвка — простая форма, ровный тон. Подходит новичкам в PMU.' },
      ]},
      { group: 'Коррекция и восстановление', items: [
        { name: 'Коррекция бровей', price: '3.500.000đ', desc: 'Нейтрализация старого PMU, ставшего синим/красным/серым, перед нанесением нового цвета.' },
        { name: 'Консультация по форме бровей', price: '300.000đ', desc: 'Анализ по физиогномике + эскиз формы под лицо. Вычитается из стоимости PMU.' },
        { name: 'Первая коррекция', price: 'Бесплатно', desc: 'Коррекция на 30-45 день — доводит тон до идеала и устраняет неровности.', note: 'Включено во все пакеты' },
      ]},
    ],
    FR: [
      { group: 'Sourcils Premium', items: [
        { name: 'Aura Royal Brows', price: '6.500.000đ', desc: "Signature exclusive de Master Aura — traits hyper-réalistes mêlés à un ombré royal. La forme « Royal » sublime votre prestance.", note: 'Signature Master Aura' },
        { name: 'Combo Hybrid Brows', price: '5.800.000đ', desc: 'Traits à l\'avant, ombré poudré à la pointe — naturel et net à la fois.' },
        { name: 'Nano Hairstroke', price: '5.500.000đ', desc: 'Traits ultra-fins poil par poil avec machine nano — imite les poils réels, look le plus naturel.' },
        { name: 'Ombre Powder Brows', price: '4.500.000đ', desc: 'Ombré poudré — début doux, pointe définie. Parfait pour le look « toujours maquillé ».' },
        { name: 'Shading Brows', price: '3.800.000đ', desc: 'Ombré doux classique — forme simple, ton uniforme. Idéal pour un premier PMU.' },
      ]},
      { group: 'Correction & Restauration', items: [
        { name: 'Correction des Sourcils', price: '3.500.000đ', desc: "Neutralise le PMU ancien devenu bleu/rouge/gris avant d'appliquer la nouvelle couleur." },
        { name: 'Consultation Design des Sourcils', price: '300.000đ', desc: 'Analyse physiognomique + esquisse adaptée. Déductible si vous procédez au PMU.' },
        { name: 'Première Retouche', price: 'Offerte', desc: 'Retouche à J30-45 — perfectionne le ton et harmonise les zones inégales.', note: 'Incluse dans chaque forfait' },
      ]},
    ],
    ES: [
      { group: 'Cejas Premium', items: [
        { name: 'Aura Royal Brows', price: '6.500.000đ', desc: 'Signature exclusiva de Master Aura — trazos hiperrealistas con sombreado real. La forma "Royal" eleva tu presencia.', note: 'Signature Master Aura' },
        { name: 'Combo Hybrid Brows', price: '5.800.000đ', desc: 'Trazos al frente, sombreado polvo en la cola — natural y nítido a la vez.' },
        { name: 'Nano Hairstroke', price: '5.500.000đ', desc: 'Trazos ultrafinos pelo a pelo con máquina nano — imita el pelo real, el look más natural.' },
        { name: 'Ombre Powder Brows', price: '4.500.000đ', desc: 'Sombreado ombre — inicio suave, cola definida. Perfecto para el look "siempre maquillada".' },
        { name: 'Shading Brows', price: '3.800.000đ', desc: 'Sombreado suave clásico — forma simple, tono uniforme. Ideal para principiantes en PMU.' },
      ]},
      { group: 'Corrección y Restauración', items: [
        { name: 'Corrección de Cejas', price: '3.500.000đ', desc: 'Neutraliza PMU antiguo que viró a azul/rojo/gris antes de aplicar el nuevo color.' },
        { name: 'Consulta de Diseño de Cejas', price: '300.000đ', desc: 'Análisis fisonómico + boceto de forma. Deducible si procedes con PMU.' },
        { name: 'Primer Retoque', price: 'Gratis', desc: 'Retoque al día 30-45 — perfecciona el tono y armoniza zonas irregulares.', note: 'Incluido en cada paquete' },
      ]},
    ],
  }),

  // ====================== LIPS ARTISTRY ======================
  'lip-blush': L({
    VI: [
      { group: 'Phun Môi Signature & Tone Tươi', items: [
        { name: 'Môi Ngọc Trai Cami', price: '5.800.000đ', desc: 'Signature độc quyền Master Cami — phun nền + tán ngọc trai, môi căng mọng ánh hồng pearl độc đáo.', note: 'Signature Master Cami' },
        { name: 'Môi Cherry', price: '4.800.000đ', desc: 'Tone cherry đỏ tươi căng mọng — gợi cảm, trẻ trung. Hot-pick cho khách 25-40 tuổi.' },
        { name: 'Môi Mận Velvet', price: '4.500.000đ', desc: 'Tone mận velvet cá tính — trầm sang, hợp khách thích phong cách high-fashion.' },
        { name: 'Môi Cam Đào Coral', price: '4.200.000đ', desc: 'Tone cam đào hoàng hôn ấm áp — phù hợp da ngăm, làm khuôn mặt rạng rỡ tự nhiên.' },
        { name: 'Môi Hồng Baby Tự Nhiên', price: '4.000.000đ', desc: 'Hồng baby tự nhiên — chuẩn "no make-up makeup". Hoàn hảo cho khách văn phòng.' },
      ]},
      { group: 'Tái Tạo Nền Môi', items: [
        { name: 'Khử Thâm Môi Chuyên Sâu', price: '5.000.000đ', desc: 'Khử thâm môi chuyên sâu 2 lớp — trung hoà sắc tố tối trước khi phủ tone mới.' },
        { name: 'Làm Mờ Môi Phun Cũ', price: '3.500.000đ', desc: 'Làm mờ môi phun cũ bằng kỹ thuật laser-soft, không tổn thương mô môi.' },
        { name: 'Pha Màu Cá Nhân', price: '+ 500.000đ', desc: 'Pha màu cá nhân theo tone da & sở thích — cộng vào giá gói phun môi gốc.', note: 'Cộng vào giá gốc' },
      ]},
    ],
    EN: [
      { group: 'Signature & Fresh-Tone Lips', items: [
        { name: 'Cami Pearl Lips', price: '6.800.000đ', desc: "Master Cami's exclusive signature — base layer + pearl shading creates plump, uniquely pearl-pink lips.", note: 'Master Cami Signature' },
        { name: 'Cherry Lips', price: '5.800.000đ', desc: 'Fresh cherry-red tone — sensual, youthful. Hot pick for clients aged 25-40.' },
        { name: 'Berry Velvet Lips', price: '5.500.000đ', desc: 'Deep velvet plum — chic and luxurious, perfect for high-fashion lovers.' },
        { name: 'Coral Sunset Lips', price: '5.200.000đ', desc: 'Warm coral sunset — flatters tan/olive skin, brightens the whole face naturally.' },
        { name: 'Natural Pink Lips', price: '5.000.000đ', desc: 'Natural baby pink — true "no make-up makeup". Ideal for office professionals.' },
      ]},
      { group: 'Lip Base Restoration', items: [
        { name: 'Dark Lip Neutralization', price: '6.000.000đ', desc: 'Deep two-layer dark-lip neutralization — balances dark pigments before applying the new tone.' },
        { name: 'Lip Fade Treatment', price: '4.500.000đ', desc: 'Soft-laser fading of old lip tattoo — no damage to lip tissue.' },
        { name: 'Custom Color Design', price: '+ 500.000đ', desc: 'Custom pigment blend matched to your skin tone & preference — added to the base lip package price.', note: 'Add-on price' },
      ]},
    ],
    JA: [
      { group: 'シグネチャー & フレッシュトーン', items: [
        { name: 'カミ・パール・リップ', price: '6.800.000đ', desc: 'マスター・カミの独占シグネチャー — ベースレイヤー＋パールシェーディングで、ふっくらしたユニークなパールピンクの唇に。', note: 'Master Cami シグネチャー' },
        { name: 'チェリー・リップ', price: '5.800.000đ', desc: 'フレッシュなチェリーレッド — 官能的で若々しい。25-40 歳のお客様に大人気。' },
        { name: 'ベリー・ベルベット・リップ', price: '5.500.000đ', desc: '深みのあるベルベットプラム — 上品で贅沢、ハイファッション好きに最適。' },
        { name: 'コーラル・サンセット・リップ', price: '5.200.000đ', desc: '暖かいコーラルサンセット — 小麦色・オリーブ肌に映え、顔全体を自然に明るく。' },
        { name: 'ナチュラル・ピンク・リップ', price: '5.000.000đ', desc: '自然なベビーピンク — 本物の「ノーメイクメイク」。オフィスのプロフェッショナルに最適。' },
      ]},
      { group: '唇のベース再生', items: [
        { name: '濃い唇の中和', price: '6.000.000đ', desc: '濃い唇の深い 2 層中和 — 新しいトーンを適用する前に暗い色素のバランスを整えます。' },
        { name: '古いリップ・フェード', price: '4.500.000đ', desc: '古いリップタトゥーのソフトレーザーフェード — 唇組織にダメージなし。' },
        { name: 'カスタムカラーデザイン', price: '+ 500.000đ', desc: '肌色と好みに合わせたカスタム顔料ブレンド — リップパッケージ料金に追加。', note: '追加料金' },
      ]},
    ],
    ZH: [
      { group: '招牌唇 & 鲜色调', items: [
        { name: 'Cami 珍珠唇', price: '6.800.000đ', desc: 'Master Cami 独家签名 — 底色铺垫 + 珍珠雾粉，呈现独特的丰盈珍珠粉色唇。', note: 'Master Cami 签名' },
        { name: '樱桃唇', price: '5.800.000đ', desc: '清新樱桃红 — 性感、年轻。25-40 岁客户的热门选择。' },
        { name: '莓果天鹅绒唇', price: '5.500.000đ', desc: '深邃天鹅绒梅子色 — 高雅奢华，适合高级时尚爱好者。' },
        { name: '珊瑚日落唇', price: '5.200.000đ', desc: '温暖珊瑚日落色 — 衬托小麦肤/橄榄肤，自然提亮整张脸。' },
        { name: '自然婴儿粉唇', price: '5.000.000đ', desc: '自然婴儿粉 — 真正的"无妆胜有妆"。适合办公专业人士。' },
      ]},
      { group: '唇部底色修复', items: [
        { name: '深唇去黑', price: '6.000.000đ', desc: '深唇双层去黑 — 在覆盖新色调前平衡深色色素。' },
        { name: '旧唇褪色', price: '4.500.000đ', desc: '软激光淡化旧唇纹绣 — 不损伤唇组织。' },
        { name: '定制色彩设计', price: '+ 500.000đ', desc: '根据您的肤色和喜好定制颜料混合 — 加入到基础唇部套餐价格中。', note: '附加费用' },
      ]},
    ],
    KO: [
      { group: '시그니처 & 프레시 톤', items: [
        { name: 'Cami 펄 립', price: '6.800.000đ', desc: 'Master Cami의 독점 시그니처 — 베이스 레이어 + 펄 셰이딩으로 도톰하고 독특한 펄 핑크 입술 완성.', note: 'Master Cami 시그니처' },
        { name: '체리 립', price: '5.800.000đ', desc: '신선한 체리 레드 — 관능적이고 젊은 분위기. 25-40세 고객에게 인기.' },
        { name: '베리 벨벳 립', price: '5.500.000đ', desc: '깊고 벨벳 같은 자두색 — 세련되고 럭셔리, 하이패션 애호가에게 완벽.' },
        { name: '코랄 선셋 립', price: '5.200.000đ', desc: '따뜻한 코랄 선셋 — 구릿빛/올리브 피부에 어울리며 얼굴 전체를 자연스럽게 밝힘.' },
        { name: '내추럴 핑크 립', price: '5.000.000đ', desc: '자연스러운 베이비 핑크 — 진정한 "노메이크업 메이크업". 오피스 전문가에게 이상적.' },
      ]},
      { group: '입술 베이스 복원', items: [
        { name: '다크 립 중화', price: '6.000.000đ', desc: '다크 립 2층 중화 — 새로운 톤 적용 전에 어두운 색소를 균형있게 조정.' },
        { name: '오래된 입술 페이드', price: '4.500.000đ', desc: '오래된 입술 문신의 소프트 레이저 페이드 — 입술 조직 손상 없음.' },
        { name: '맞춤 컬러 디자인', price: '+ 500.000đ', desc: '피부톤과 선호도에 맞춘 맞춤 색소 블렌드 — 기본 립 패키지 가격에 추가.', note: '추가 요금' },
      ]},
    ],
    RU: [
      { group: 'Signature и свежие тона', items: [
        { name: 'Cami Pearl Lips', price: '6.800.000đ', desc: 'Эксклюзивная сигнатура Мастера Cami — базовый слой + жемчужная растушёвка для пухлых, уникально жемчужно-розовых губ.', note: 'Сигнатура Master Cami' },
        { name: 'Вишнёвые губы', price: '5.800.000đ', desc: 'Свежий вишнёво-красный — чувственный, молодёжный. Хит для клиентов 25-40 лет.' },
        { name: 'Бархатно-сливовые губы', price: '5.500.000đ', desc: 'Глубокий бархатно-сливовый — шик и роскошь, для любителей high-fashion.' },
        { name: 'Коралловый закат', price: '5.200.000đ', desc: 'Тёплый коралловый закат — выгодно подчёркивает смуглую/оливковую кожу, осветляет лицо.' },
        { name: 'Натуральные розовые губы', price: '5.000.000đ', desc: 'Натуральный baby pink — настоящий «макияж без макияжа». Идеально для офисных профессионалов.' },
      ]},
      { group: 'Восстановление губ', items: [
        { name: 'Нейтрализация тёмных губ', price: '6.000.000đ', desc: 'Глубокая двухслойная нейтрализация тёмных губ — балансирует тёмный пигмент перед нанесением нового тона.' },
        { name: 'Осветление старого татуажа губ', price: '4.500.000đ', desc: 'Мягкое лазерное осветление старого татуажа — без повреждения ткани губ.' },
        { name: 'Индивидуальный цвет', price: '+ 500.000đ', desc: 'Индивидуальный подбор пигмента под тон кожи и предпочтения — добавляется к стоимости базового пакета.', note: 'Дополнительно' },
      ]},
    ],
    FR: [
      { group: 'Signature & Tons Frais', items: [
        { name: 'Cami Pearl Lips', price: '6.800.000đ', desc: "Signature exclusive de Master Cami — couche de base + ombré perle pour des lèvres pulpeuses au rose perle unique.", note: 'Signature Master Cami' },
        { name: 'Lèvres Cerise', price: '5.800.000đ', desc: 'Rouge cerise frais — sensuel, jeune. Choix populaire pour la clientèle 25-40 ans.' },
        { name: 'Lèvres Prune Velours', price: '5.500.000đ', desc: 'Prune velours profond — chic et luxueux, parfait pour les amateurs de haute couture.' },
        { name: 'Lèvres Coucher Corail', price: '5.200.000đ', desc: "Coucher de soleil corail chaleureux — sublime les peaux halées/olives, illumine naturellement le visage." },
        { name: 'Lèvres Rose Naturel', price: '5.000.000đ', desc: 'Rose bébé naturel — véritable « maquillage sans maquillage ». Idéal pour les professionnelles.' },
      ]},
      { group: 'Restauration des Lèvres', items: [
        { name: 'Neutralisation Lèvres Foncées', price: '6.000.000đ', desc: "Neutralisation profonde deux-couches des lèvres foncées — équilibre les pigments sombres avant la nouvelle teinte." },
        { name: 'Fade des Lèvres Anciennes', price: '4.500.000đ', desc: 'Estompage doux au laser des anciens tatouages — sans abîmer le tissu labial.' },
        { name: 'Couleur Personnalisée', price: '+ 500.000đ', desc: 'Mélange pigmentaire personnalisé selon votre teint et vos préférences — ajouté au prix du forfait lèvres.', note: 'Supplément' },
      ]},
    ],
    ES: [
      { group: 'Signature & Tonos Frescos', items: [
        { name: 'Cami Pearl Lips', price: '6.800.000đ', desc: 'Signature exclusiva de Master Cami — capa base + sombreado perla para labios voluminosos en un rosa perla único.', note: 'Signature Master Cami' },
        { name: 'Labios Cereza', price: '5.800.000đ', desc: 'Rojo cereza fresco — sensual y juvenil. Elección popular para clientas de 25-40 años.' },
        { name: 'Labios Ciruela Terciopelo', price: '5.500.000đ', desc: 'Ciruela terciopelo profundo — chic y lujoso, perfecto para amantes de la alta moda.' },
        { name: 'Labios Atardecer Coral', price: '5.200.000đ', desc: 'Atardecer coral cálido — favorece pieles morenas/oliva, ilumina el rostro naturalmente.' },
        { name: 'Labios Rosa Natural', price: '5.000.000đ', desc: 'Rosa bebé natural — auténtico "maquillaje sin maquillaje". Ideal para profesionales de oficina.' },
      ]},
      { group: 'Restauración de Labios', items: [
        { name: 'Neutralización de Labios Oscuros', price: '6.000.000đ', desc: 'Neutralización profunda en dos capas de labios oscuros — equilibra pigmentos oscuros antes del nuevo tono.' },
        { name: 'Aclarado de Labios Antiguos', price: '4.500.000đ', desc: 'Aclarado suave con láser del tatuaje anterior — sin dañar el tejido labial.' },
        { name: 'Color Personalizado', price: '+ 500.000đ', desc: 'Mezcla pigmentaria personalizada según tu tono de piel y preferencias — se suma al precio del paquete base.', note: 'Cargo adicional' },
      ]},
    ],
  }),

  // ====================== EYELINER ======================
  eyeliner: L({
    VI: [
      { group: 'Eyeliner 4 Kiểu', items: [
        { name: 'Mí Khói Smokey', price: '4.000.000đ', desc: 'Khói gradient mềm mại tan vào mí — quyến rũ huyền bí, hợp mắt 2 mí sâu.' },
        { name: 'Mí Đuôi Dài Extended', price: '3.800.000đ', desc: 'Đuôi vuốt dài dramatic — nâng tầm thần thái, dáng mắt phượng sang chảnh.' },
        { name: 'Mí Đuôi Vuốt Classic', price: '3.200.000đ', desc: 'Đuôi vuốt nhẹ classic — dáng mèo điệu đà phù hợp mọi khuôn mặt, đi tiệc hay đi làm đều OK.' },
        { name: 'Mí Tự Nhiên Natural', price: '2.500.000đ', desc: 'Mí tự nhiên sát chân mi — làm mắt to hơn 30% mà không ai nhận ra đã phun.' },
      ]},
    ],
    EN: [
      { group: 'Eyeliner — 4 Styles', items: [
        { name: 'Smokey Shaded', price: '5.000.000đ', desc: 'Soft smokey gradient melting into the lid — mysterious and seductive, ideal for deep-set eyes.' },
        { name: 'Extended Wing', price: '4.800.000đ', desc: 'Long dramatic wing tail — lifts your gaze into an elegant phoenix-eye shape.' },
        { name: 'Classic Wing', price: '4.200.000đ', desc: 'Subtle classic flick — feline shape that suits every face, works for both office and night out.' },
        { name: 'Natural Line', price: '3.500.000đ', desc: 'Natural lash-line enhancement — makes eyes look 30% bigger without anyone noticing the PMU.' },
      ]},
    ],
    JA: [
      { group: 'アイライン 4 スタイル', items: [
        { name: 'スモーキー・シェード', price: '5.000.000đ', desc: '柔らかなスモーキーグラデーションがまぶたに溶け込む — 神秘的で官能的、奥目に最適。' },
        { name: 'エクステンデッド・ウィング', price: '4.800.000đ', desc: '長くドラマチックなウィングテール — 上品なフェニックスアイの形に視線を引き上げます。' },
        { name: 'クラシック・ウィング', price: '4.200.000đ', desc: '繊細なクラシックフリック — どんな顔にも合う猫目フォルム、オフィスでも夜のお出かけでも OK。' },
        { name: 'ナチュラル・ライン', price: '3.500.000đ', desc: 'ナチュラルなまつげ際強調 — PMU だと気づかれずに目を 30% 大きく見せます。' },
      ]},
    ],
    ZH: [
      { group: '眼线 4 款', items: [
        { name: '烟熏渐变', price: '5.000.000đ', desc: '柔和的烟熏渐变融入眼睑 — 神秘性感，适合深邃眼型。' },
        { name: '延长翼眼线', price: '4.800.000đ', desc: '修长戏剧化的尾翼 — 提升眼神，呈现优雅凤眼。' },
        { name: '经典上扬眼线', price: '4.200.000đ', desc: '细腻经典上扬 — 适合各种脸型的猫眼线，办公约会都合适。' },
        { name: '自然睫毛根', price: '3.500.000đ', desc: '自然睫毛根强化 — 让眼睛看起来大 30%，无人察觉是 PMU。' },
      ]},
    ],
    KO: [
      { group: '아이라이너 — 4가지 스타일', items: [
        { name: '스모키 셰이드', price: '5.000.000đ', desc: '눈꺼풀에 스며드는 부드러운 스모키 그라데이션 — 신비롭고 관능적, 깊은 눈에 이상적.' },
        { name: '익스텐디드 윙', price: '4.800.000đ', desc: '길고 드라마틱한 윙 테일 — 우아한 봉황 눈으로 시선을 들어 올립니다.' },
        { name: '클래식 윙', price: '4.200.000đ', desc: '섬세한 클래식 플릭 — 모든 얼굴형에 맞는 캣아이, 사무실과 외출 모두 OK.' },
        { name: '내추럴 라인', price: '3.500.000đ', desc: '자연스러운 속눈썹선 강화 — PMU를 눈치채지 못하게 눈을 30% 크게 보이게 합니다.' },
      ]},
    ],
    RU: [
      { group: 'Стрелки — 4 стиля', items: [
        { name: 'Смоки-градиент', price: '5.000.000đ', desc: 'Мягкий смоки-градиент, перетекающий в веко — загадочный и соблазнительный, идеален для глубоко посаженных глаз.' },
        { name: 'Удлинённая стрелка', price: '4.800.000đ', desc: 'Длинный драматичный хвостик — поднимает взгляд в элегантную форму глаз феникса.' },
        { name: 'Классическая стрелка', price: '4.200.000đ', desc: 'Деликатный классический изгиб — кошачья форма, подходит под любое лицо, для офиса и вечера.' },
        { name: 'Натуральная линия', price: '3.500.000đ', desc: 'Натуральное подчёркивание линии ресниц — глаза выглядят на 30% больше, татуаж незаметен.' },
      ]},
    ],
    FR: [
      { group: 'Eyeliner — 4 Styles', items: [
        { name: 'Smokey Ombré', price: '5.000.000đ', desc: 'Dégradé smoky doux fondu dans la paupière — mystérieux et séduisant, idéal pour les yeux enfoncés.' },
        { name: 'Pointe Allongée', price: '4.800.000đ', desc: 'Pointe dramatique allongée — élève le regard en forme élégante d\'œil de phénix.' },
        { name: 'Pointe Classique', price: '4.200.000đ', desc: 'Trait classique subtil — forme féline adaptée à tous les visages, bureau ou soirée.' },
        { name: 'Ligne Naturelle', price: '3.500.000đ', desc: 'Renforcement naturel du ras des cils — agrandit les yeux de 30 % sans révéler le PMU.' },
      ]},
    ],
    ES: [
      { group: 'Delineador — 4 Estilos', items: [
        { name: 'Smokey Sombreado', price: '5.000.000đ', desc: 'Degradado smoky suave que se funde con el párpado — misterioso y seductor, ideal para ojos profundos.' },
        { name: 'Cola Extendida', price: '4.800.000đ', desc: 'Cola alargada dramática — eleva la mirada hacia una forma elegante de ojo de fénix.' },
        { name: 'Cola Clásica', price: '4.200.000đ', desc: 'Trazo clásico sutil — forma felina que sienta bien a todo rostro, oficina o noche.' },
        { name: 'Línea Natural', price: '3.500.000đ', desc: 'Realce natural de la línea de pestañas — agranda los ojos 30 % sin que se note el PMU.' },
      ]},
    ],
  }),

  // ====================== MEN'S PMU BROWS ======================
  'mens-pmu': L({
    VI: [
      { group: 'Phun Mày Cho Phái Mạnh', items: [
        { name: 'Mày Shadow Nam Signature', price: '6.000.000đ', desc: 'Dáng shadow nam độc quyền — kết hợp nét sợi + tán bóng nhẹ, mạnh mẽ tự nhiên cho gương mặt trưởng thành.', note: 'Cao cấp nhất cho nam' },
        { name: 'Điêu Khắc Sợi HD', price: '5.200.000đ', desc: 'Điêu khắc từng sợi HD bằng máy chuyên dụng — mô phỏng lông mày thật siêu chân thực, phù hợp doanh nhân.' },
        { name: 'Mày Nam Tự Nhiên', price: '4.500.000đ', desc: 'Sculpting form mày nam tự nhiên — chỉ định hình & lấp khoảng trống, giữ vẻ ngoài "không ai biết đã làm".' },
      ]},
    ],
    EN: [
      { group: "Men's PMU Brows", items: [
        { name: 'Signature Shadow Brow', price: '7.000.000đ', desc: 'Exclusive masculine shadow brow — combines strokes + soft shading. Confident and natural for the mature gentleman.', note: 'Premium for men' },
        { name: 'Micro-Stroking HD', price: '6.200.000đ', desc: 'HD hair-by-hair micro-stroking using a precision machine — hyper-realistic, perfect for executives.' },
        { name: 'Natural Brow Sculpting', price: '5.500.000đ', desc: 'Natural brow sculpting — shapes and fills gaps only. The "no one will know I had it done" look.' },
      ]},
    ],
    JA: [
      { group: 'メンズ PMU 眉', items: [
        { name: 'シグネチャー・シャドウ・ブロウ', price: '7.000.000đ', desc: '独占の男性的シャドウブロウ — ストロークとソフトシェーディングの組み合わせ。成熟した紳士に自信と自然さを。', note: 'メンズ最上級' },
        { name: 'マイクロストローク HD', price: '6.200.000đ', desc: '精密機械による HD 毛流マイクロストローキング — エグゼクティブに最適な超リアルな仕上がり。' },
        { name: 'ナチュラル・ブロウ・スカルプティング', price: '5.500.000đ', desc: 'ナチュラルブロウ造形 — 形を整え隙間を埋めるだけ。「施術したことがバレない」ルック。' },
      ]},
    ],
    ZH: [
      { group: '男士 PMU 眉部', items: [
        { name: '招牌暗影眉', price: '7.000.000đ', desc: '独家男士暗影眉 — 眉丝结合柔和雾粉。为成熟绅士带来自信与自然感。', note: '男士顶级' },
        { name: 'HD 微眉丝绣', price: '6.200.000đ', desc: '使用精密机器的 HD 逐根眉丝绣 — 超写实，适合高管。' },
        { name: '自然眉部塑形', price: '5.500.000đ', desc: '自然眉部塑形 — 仅塑形并填补空隙。"无人察觉做过"的效果。' },
      ]},
    ],
    KO: [
      { group: '남성 PMU 눈썹', items: [
        { name: '시그니처 섀도우 브로우', price: '7.000.000đ', desc: '독점 남성 섀도우 브로우 — 스트로크와 소프트 셰이딩 조합. 성숙한 신사에게 자신감과 자연스러움을.', note: '남성 프리미엄' },
        { name: '마이크로 스트로킹 HD', price: '6.200.000đ', desc: '정밀 기계를 사용한 HD 한 올 한 올 마이크로 스트로킹 — 임원에게 완벽한 초사실적 마감.' },
        { name: '내추럴 눈썹 조각', price: '5.500.000đ', desc: '자연스러운 눈썹 조각 — 형태 잡고 빈 공간만 메움. "시술한 줄 모르는" 룩.' },
      ]},
    ],
    RU: [
      { group: 'Мужские брови PMU', items: [
        { name: 'Signature Shadow Brow', price: '7.000.000đ', desc: 'Эксклюзивная мужская теневая бровь — волоски + мягкая растушёвка. Уверенность и естественность для зрелого мужчины.', note: 'Премиум для мужчин' },
        { name: 'Micro-Stroking HD', price: '6.200.000đ', desc: 'HD прорисовка волосок-к-волоску прецизионной машинкой — гиперреалистично, идеально для руководителей.' },
        { name: 'Natural Brow Sculpting', price: '5.500.000đ', desc: 'Натуральная скульптура бровей — только форма и заполнение пробелов. Эффект «никто не догадается».' },
      ]},
    ],
    FR: [
      { group: 'PMU Homme — Sourcils', items: [
        { name: 'Signature Shadow Brow', price: '7.000.000đ', desc: "Sourcil shadow masculin exclusif — traits + ombré doux. Confiance et naturel pour le gentleman mûr.", note: 'Premium homme' },
        { name: 'Micro-Stroking HD', price: '6.200.000đ', desc: 'Micro-traits HD poil par poil à la machine de précision — hyper-réaliste, parfait pour les cadres.' },
        { name: 'Sculpture Naturelle des Sourcils', price: '5.500.000đ', desc: 'Sculpture naturelle des sourcils — forme et comble les vides seulement. Effet « personne ne saura ».' },
      ]},
    ],
    ES: [
      { group: 'PMU Hombre — Cejas', items: [
        { name: 'Signature Shadow Brow', price: '7.000.000đ', desc: 'Ceja shadow masculina exclusiva — trazos + sombreado suave. Confianza y naturalidad para el caballero maduro.', note: 'Premium para hombre' },
        { name: 'Micro-Stroking HD', price: '6.200.000đ', desc: 'Microtrazos HD pelo a pelo con máquina de precisión — hiperrealista, perfecto para ejecutivos.' },
        { name: 'Esculpido Natural de Cejas', price: '5.500.000đ', desc: 'Esculpido natural de cejas — solo da forma y rellena huecos. Look "nadie sabrá que me lo hice".' },
      ]},
    ],
  }),

  // ====================== LASH · BROW · PLASMA (same price across langs) ======================
  'noi-mi': L({
    VI: [
      { group: 'Lash Lift · Tint · Extension', items: [
        { name: 'Nối Mi Volume 3D-6D', price: '1.200.000đ', desc: 'Nối mi volume 3D-6D — mỗi mi thật được gắn 3-6 sợi giả, hiệu ứng dày phồng tự nhiên.' },
        { name: 'Nối Mi Lai Hybrid', price: '850.000đ', desc: 'Kết hợp Classic + Volume — đầu mi mảnh, giữa mi dày, hiệu ứng độ sâu tự nhiên.' },
        { name: 'Nối Mi Classic Tự Nhiên', price: '600.000đ', desc: 'Nối từng sợi 1:1 — mi dày tự nhiên, gọn nhẹ, phù hợp lần đầu nối.' },
        { name: 'Combo Uốn + Nhuộm Mi', price: '590.000đ', desc: 'Uốn collagen + nhuộm đen — mi cong dài đậm, không cần mascara mỗi sáng.' },
        { name: 'Uốn Mi Collagen', price: '450.000đ', desc: 'Uốn mi collagen — đẩy mi thẳng đứng cong tự nhiên, không phá cấu trúc mi.' },
        { name: 'Nhuộm Mi', price: '199.000đ', desc: 'Nhuộm mi đen tự nhiên — phù hợp khách có mi nhạt màu, mềm.' },
      ]},
      { group: 'Brow Architecture — Định Hình & Nhuộm', items: [
        { name: 'Duỗi Mày Lamination', price: '750.000đ', desc: 'Duỗi mày Ý — duỗi sợi mày đứng theo hướng mong muốn, dáng mày dày bồng bềnh.' },
        { name: 'Combo Tỉa + Nhuộm Mày', price: '550.000đ', desc: 'Tỉa định hình + nhuộm màu mày — tone đậm tự nhiên, giữ 4-6 tuần.' },
        { name: 'Nhuộm Màu Mày', price: '350.000đ', desc: 'Nhuộm mày theo tone tóc — phù hợp khách hay đổi màu tóc.' },
        { name: 'Tỉa & Định Hình Mày', price: '250.000đ', desc: 'Tỉa & định hình dáng mày chuẩn nhân tướng học — không nhuộm.' },
      ]},
      { group: 'Highlight — Ultimate Gaze Combo', items: [
        { name: 'Combo Mi + Mày 4-in-1', price: '1.500.000đ', desc: '4-in-1: uốn mi, nhuộm mi, tỉa mày, duỗi mày — combo hoàn hảo cho cô dâu hoặc dịp đặc biệt.', note: 'Best Value · tiết kiệm 450.000đ' },
      ]},
      { group: 'Plasma Technology — Không Xâm Lấn', items: [
        { name: 'Tạo Mí Không Phẫu Thuật', price: '8.900.000đ', desc: 'Tạo mí mắt không phẫu thuật bằng plasma pen — kết quả 2-3 năm, không downtime kéo dài.' },
        { name: 'Xử Lý Hạt Fordyce', price: '3.900.000đ', desc: 'Xử lý hạt Fordyce trên môi/da bằng tia plasma — sạch sẽ, không sẹo.' },
        { name: 'Trẻ Hoá Da Plasma', price: '3.500.000đ', desc: 'Trẻ hoá da bằng plasma — se khít lỗ chân lông, mờ nếp nhăn, sáng đều màu da.' },
        { name: 'Xoá Nốt Ruồi & Sẹo', price: 'từ 1.500.000đ', desc: 'Xoá nốt ruồi & sẹo nhỏ bằng plasma — giá theo kích thước & vị trí, tư vấn trực tiếp.' },
      ]},
    ],
    EN: [
      { group: 'Lash Lift · Tint · Extension', items: [
        { name: 'Volume 3D-6D Extensions', price: '1.200.000đ', desc: '3D-6D volume extensions — each natural lash carries 3-6 fine fans for plush, natural fullness.' },
        { name: 'Hybrid Texture', price: '850.000đ', desc: 'Classic + Volume blend — fine at the tip, fuller in the middle, natural depth.' },
        { name: 'Classic Natural Extension', price: '600.000đ', desc: '1:1 lash-by-lash extensions — natural fullness, lightweight, perfect for first-timers.' },
        { name: 'Combo Lift + Tint', price: '590.000đ', desc: 'Collagen lift + black tint — long, defined lashes with no daily mascara.' },
        { name: 'Keratin Lift', price: '450.000đ', desc: 'Collagen lash lift — pushes lashes upright into a natural curl without damaging structure.' },
        { name: 'Lash Tint', price: '199.000đ', desc: 'Natural black tint — perfect for clients with light or soft natural lashes.' },
      ]},
      { group: 'Brow Architecture — Shaping & Tint', items: [
        { name: 'Brow Lamination', price: '750.000đ', desc: 'Italian brow lamination — straightens brow hairs in your desired direction for a fuller, fluffy shape.' },
        { name: 'Combo Shape + Tint', price: '550.000đ', desc: 'Shape + tint — natural defined tone, lasts 4-6 weeks.' },
        { name: 'Brow Tinting', price: '350.000đ', desc: 'Tint to match your hair color — ideal for clients who change hair color frequently.' },
        { name: 'Expert Brow Shaping', price: '250.000đ', desc: 'Expert shaping based on face-reading principles — no tint included.' },
      ]},
      { group: 'Highlight — Ultimate Gaze Combo', items: [
        { name: 'Lash Lift + Tint + Brow Shape + Lamination', price: '1.500.000đ', desc: '4-in-1: lash lift, lash tint, brow shape, lamination — perfect combo for brides or special occasions.', note: 'Best Value — saves 450.000đ' },
      ]},
      { group: 'Plasma Technology — Non-Invasive', items: [
        { name: 'Non-Surgical Eyelid', price: '8.900.000đ', desc: 'Non-surgical upper-eyelid lift via plasma pen — results last 2-3 years with minimal downtime.' },
        { name: 'Fordyce Spots', price: '3.900.000đ', desc: 'Plasma treatment of Fordyce spots on lips/skin — clean removal, no scarring.' },
        { name: 'Plasma Rejuvenation', price: '3.500.000đ', desc: 'Plasma skin rejuvenation — tighten pores, fade wrinkles, even out skin tone.' },
        { name: 'Mole & Scar Removal', price: 'from 1.500.000đ', desc: 'Removal of small moles & scars via plasma — price by size & location, on-site consultation.' },
      ]},
    ],
    JA: [
      { group: 'まつげ Lift · Tint · エクステ', items: [
        { name: 'ボリューム 3D-6D エクステ', price: '1.200.000đ', desc: '3D-6D ボリュームエクステ — 各自まつげに 3-6 本のファンを装着、自然なふっくらボリューム。' },
        { name: 'ハイブリッド・テクスチャ', price: '850.000đ', desc: 'Classic と Volume のブレンド — 先端は繊細、中間はしっかり、自然な奥行き。' },
        { name: 'クラシック・ナチュラル・エクステ', price: '600.000đ', desc: '1:1 一本一本エクステ — 自然なボリューム、軽量、初心者に最適。' },
        { name: 'コンボ・リフト + ティント', price: '590.000đ', desc: 'コラーゲンリフト + ブラックティント — 長く際立つまつげ、毎日のマスカラ不要。' },
        { name: 'ケラチン・リフト', price: '450.000đ', desc: 'コラーゲンラッシュリフト — まつげを構造を傷めずに自然なカールに立ち上げます。' },
        { name: 'ラッシュ・ティント', price: '199.000đ', desc: 'ナチュラルブラックティント — 薄い色や柔らかい自まつげのお客様に最適。' },
      ]},
      { group: '眉アーキテクチャ — 整形 & ティント', items: [
        { name: '眉ラミネーション', price: '750.000đ', desc: 'イタリアン眉ラミネーション — お好みの方向に眉毛をまっすぐにし、ふっくらふわふわの形に。' },
        { name: 'コンボ シェイプ + ティント', price: '550.000đ', desc: '整形 + ティント — 自然で際立つトーン、4-6 週間持続。' },
        { name: '眉ティント', price: '350.000đ', desc: '髪色に合わせたティント — 頻繁に髪色を変えるお客様に最適。' },
        { name: 'エキスパート眉カット', price: '250.000đ', desc: '人相学に基づく専門整形 — ティントなし。' },
      ]},
      { group: 'ハイライト — Ultimate Gaze Combo', items: [
        { name: 'ラッシュ + 眉 4-in-1 コンボ', price: '1.500.000đ', desc: '4-in-1: ラッシュリフト、ラッシュティント、眉整形、ラミネーション — 花嫁様や特別な日に最適。', note: 'ベストバリュー — 450.000đ お得' },
      ]},
      { group: 'プラズマ — 非侵襲', items: [
        { name: '非外科上まぶたリフト', price: '8.900.000đ', desc: 'プラズマペンによる非外科上まぶたリフト — 結果は 2-3 年持続、ダウンタイム最小限。' },
        { name: 'フォアダイス顆粒除去', price: '3.900.000đ', desc: '唇/肌のフォアダイス顆粒のプラズマ処理 — クリーン除去、傷跡なし。' },
        { name: 'プラズマ若返り', price: '3.500.000đ', desc: 'プラズマ肌若返り — 毛穴引き締め、シワ軽減、肌トーン均一化。' },
        { name: 'ほくろ・傷の除去', price: '1.500.000đ から', desc: 'プラズマによる小さなほくろ & 傷の除去 — 大きさと場所により料金、現地相談。' },
      ]},
    ],
    ZH: [
      { group: '睫毛 Lift · Tint · 接睫', items: [
        { name: '3D-6D 浓密接睫', price: '1.200.000đ', desc: '3D-6D 浓密接睫 — 每根天然睫毛承载 3-6 个细扇，自然蓬松浓密。' },
        { name: '混合质感', price: '850.000đ', desc: 'Classic + Volume 混合 — 末端纤细，中段饱满，自然深度。' },
        { name: '经典自然接睫', price: '600.000đ', desc: '1:1 逐根接睫 — 自然丰盈、轻盈，适合初次嫁接。' },
        { name: 'Lift + Tint 套餐', price: '590.000đ', desc: '胶原翘睫 + 黑色染色 — 长长上扬的睫毛，无需每日睫毛膏。' },
        { name: '胶原翘睫', price: '450.000đ', desc: '胶原翘睫 — 让睫毛自然上翘，不损伤结构。' },
        { name: '睫毛染色', price: '199.000đ', desc: '自然黑色染色 — 适合天然睫毛颜色浅、柔软的客户。' },
      ]},
      { group: '眉部架构 — 修形 & 染色', items: [
        { name: '眉部层压', price: '750.000đ', desc: '意大利眉部层压 — 按所需方向拉直眉毛，呈现丰盈蓬松的形状。' },
        { name: '修形 + 染色套餐', price: '550.000đ', desc: '修形 + 染色 — 自然有型的色调，持续 4-6 周。' },
        { name: '眉部染色', price: '350.000đ', desc: '配合发色染眉 — 适合常换发色的客户。' },
        { name: '专业修眉', price: '250.000đ', desc: '基于面相学的专业修眉 — 不含染色。' },
      ]},
      { group: '亮点 — Ultimate Gaze Combo', items: [
        { name: '睫毛 + 眉部 4 合 1 套餐', price: '1.500.000đ', desc: '4 合 1: 翘睫、染睫、修眉、眉部层压 — 新娘或特殊场合的完美组合。', note: '最划算 — 节省 450.000đ' },
      ]},
      { group: '等离子技术 — 非侵入', items: [
        { name: '非手术上眼皮', price: '8.900.000đ', desc: '等离子笔非手术上眼皮提升 — 效果持续 2-3 年，停工时间极少。' },
        { name: 'Fordyce 斑去除', price: '3.900.000đ', desc: '等离子治疗唇/皮肤的 Fordyce 斑 — 清洁清除，无疤痕。' },
        { name: '等离子嫩肤', price: '3.500.000đ', desc: '等离子皮肤焕新 — 收紧毛孔、淡化皱纹、均匀肤色。' },
        { name: '痣 & 疤痕清除', price: '从 1.500.000đ', desc: '等离子去除小痣和疤痕 — 根据大小和位置定价，现场咨询。' },
      ]},
    ],
    KO: [
      { group: '속눈썹 Lift · Tint · 연장', items: [
        { name: '볼륨 3D-6D 연장', price: '1.200.000đ', desc: '3D-6D 볼륨 연장 — 각 자연 속눈썹에 3-6개의 부드러운 팬 부착, 자연스러운 풍성함.' },
        { name: '하이브리드 텍스처', price: '850.000đ', desc: 'Classic + Volume 혼합 — 끝은 가늘게, 중간은 풍성하게, 자연스러운 깊이.' },
        { name: '클래식 내추럴 연장', price: '600.000đ', desc: '1:1 한 올씩 연장 — 자연스러운 풍성함, 가볍고, 첫 시술자에게 완벽.' },
        { name: '리프트 + 틴트 콤보', price: '590.000đ', desc: '콜라겐 리프트 + 블랙 틴트 — 길고 또렷한 속눈썹, 매일 마스카라 불필요.' },
        { name: '케라틴 리프트', price: '450.000đ', desc: '콜라겐 속눈썹 리프트 — 구조 손상 없이 자연스러운 컬로 속눈썹을 세웁니다.' },
        { name: '래쉬 틴트', price: '199.000đ', desc: '자연스러운 블랙 틴트 — 색이 옅거나 부드러운 자연 속눈썹 고객에게 완벽.' },
      ]},
      { group: '눈썹 아키텍처 — 정리 & 틴팅', items: [
        { name: '눈썹 라미네이션', price: '750.000đ', desc: '이탈리아식 눈썹 라미네이션 — 원하는 방향으로 눈썹털을 펴서 풍성하고 폭신한 모양으로.' },
        { name: '셰이프 + 틴트 콤보', price: '550.000đ', desc: '정리 + 틴트 — 자연스럽고 또렷한 톤, 4-6주 지속.' },
        { name: '눈썹 틴팅', price: '350.000đ', desc: '머리색에 맞춘 틴트 — 머리색을 자주 바꾸는 고객에게 이상적.' },
        { name: '전문 눈썹 정리', price: '250.000đ', desc: '관상학에 기반한 전문 정리 — 틴트 없음.' },
      ]},
      { group: '하이라이트 — Ultimate Gaze Combo', items: [
        { name: '래쉬 + 눈썹 4-in-1 콤보', price: '1.500.000đ', desc: '4-in-1: 속눈썹 리프트, 틴트, 눈썹 정리, 라미네이션 — 신부나 특별한 날에 완벽한 콤보.', note: '베스트 밸류 — 450.000đ 절약' },
      ]},
      { group: '플라즈마 기술 — 비침습', items: [
        { name: '비수술 쌍꺼풀', price: '8.900.000đ', desc: '플라즈마 펜을 통한 비수술 상안검 리프트 — 결과 2-3년 지속, 다운타임 최소.' },
        { name: '포다이스 반점 제거', price: '3.900.000đ', desc: '입술/피부의 포다이스 반점 플라즈마 치료 — 깨끗한 제거, 흉터 없음.' },
        { name: '플라즈마 리쥬버네이션', price: '3.500.000đ', desc: '플라즈마 피부 리쥬버네이션 — 모공 수축, 주름 개선, 피부톤 균일화.' },
        { name: '점 & 흉터 제거', price: '1.500.000đ 부터', desc: '플라즈마로 작은 점과 흉터 제거 — 크기와 위치에 따라 가격, 현장 상담.' },
      ]},
    ],
    RU: [
      { group: 'Ресницы — Lift · Tint · Extension', items: [
        { name: 'Volume 3D-6D', price: '1.200.000đ', desc: 'Объёмное наращивание 3D-6D — на каждую родную ресницу 3-6 тонких вееров, естественный пышный объём.' },
        { name: 'Hybrid Texture', price: '850.000đ', desc: 'Сочетание Classic + Volume — тонко на кончиках, плотно в середине, естественная глубина.' },
        { name: 'Classic Natural Extension', price: '600.000đ', desc: 'Поресничное 1:1 наращивание — естественная густота, лёгкость, идеально для новичков.' },
        { name: 'Combo Lift + Tint', price: '590.000đ', desc: 'Коллагеновый лифт + чёрный тинт — длинные выразительные ресницы без ежедневной туши.' },
        { name: 'Кератиновый лифт', price: '450.000đ', desc: 'Коллагеновый ламинирование — поднимает ресницы в естественный изгиб без повреждения структуры.' },
        { name: 'Тинт ресниц', price: '199.000đ', desc: 'Натуральный чёрный тинт — идеален для светлых или мягких натуральных ресниц.' },
      ]},
      { group: 'Архитектура бровей', items: [
        { name: 'Ламинирование бровей', price: '750.000đ', desc: 'Итальянское ламинирование бровей — выпрямляет волоски в нужном направлении, объёмная пушистая форма.' },
        { name: 'Форма + Тинт', price: '550.000đ', desc: 'Форма + тинт — естественный чёткий тон, держится 4-6 недель.' },
        { name: 'Тинт бровей', price: '350.000đ', desc: 'Тинт под цвет волос — идеально для клиентов, часто меняющих цвет.' },
        { name: 'Экспертная коррекция', price: '250.000đ', desc: 'Экспертная коррекция формы по физиогномике — без тинта.' },
      ]},
      { group: 'Хайлайт — Ultimate Gaze Combo', items: [
        { name: 'Ресницы + Брови 4-в-1', price: '1.500.000đ', desc: '4-в-1: лифт ресниц, тинт ресниц, форма бровей, ламинирование — идеально для невест и особых случаев.', note: 'Best Value — экономия 450.000đ' },
      ]},
      { group: 'Плазма — неинвазивно', items: [
        { name: 'Безоперационная подтяжка века', price: '8.900.000đ', desc: 'Безоперационная подтяжка верхнего века плазма-ручкой — результат 2-3 года, минимальная реабилитация.' },
        { name: 'Гранулы Фордайса', price: '3.900.000đ', desc: 'Плазменная обработка гранул Фордайса на губах/коже — чистое удаление без рубцов.' },
        { name: 'Плазма-омоложение', price: '3.500.000đ', desc: 'Плазменное омоложение кожи — сужает поры, разглаживает морщины, выравнивает тон.' },
        { name: 'Удаление родинок и шрамов', price: 'от 1.500.000đ', desc: 'Удаление мелких родинок и шрамов плазмой — цена по размеру и месту, очная консультация.' },
      ]},
    ],
    FR: [
      { group: 'Cils — Lift · Tint · Extensions', items: [
        { name: 'Volume 3D-6D Extensions', price: '1.200.000đ', desc: 'Extensions volume 3D-6D — chaque cil naturel porte 3-6 fins éventails pour un volume pulpeux et naturel.' },
        { name: 'Texture Hybride', price: '850.000đ', desc: 'Mélange Classic + Volume — fin à la pointe, plus dense au milieu, profondeur naturelle.' },
        { name: 'Extensions Naturelles Classic', price: '600.000đ', desc: 'Extensions cil par cil 1:1 — volume naturel, légèreté, parfait pour les débutantes.' },
        { name: 'Combo Lift + Teinture', price: '590.000đ', desc: 'Lifting collagène + teinture noire — cils longs et définis, sans mascara quotidien.' },
        { name: 'Lifting Kératine', price: '450.000đ', desc: 'Lifting des cils à la kératine — relève les cils en courbe naturelle sans abîmer la structure.' },
        { name: 'Teinture des Cils', price: '199.000đ', desc: 'Teinture noire naturelle — idéal pour cils naturels clairs ou souples.' },
      ]},
      { group: 'Architecture des sourcils', items: [
        { name: 'Lamination des Sourcils', price: '750.000đ', desc: 'Lamination italienne — redresse les poils dans la direction souhaitée, forme pleine et fluffy.' },
        { name: 'Combo Forme + Teinture', price: '550.000đ', desc: 'Forme + teinture — ton naturel défini, tient 4-6 semaines.' },
        { name: 'Teinture des Sourcils', price: '350.000đ', desc: 'Teinture assortie à votre couleur de cheveux — idéale si vous changez souvent de couleur.' },
        { name: 'Mise en Forme Experte', price: '250.000đ', desc: 'Mise en forme experte basée sur la physiognomonie — sans teinture.' },
      ]},
      { group: 'Highlight — Ultimate Gaze Combo', items: [
        { name: 'Cils + Sourcils 4-en-1', price: '1.500.000đ', desc: '4-en-1 : lifting cils, teinture cils, forme sourcils, lamination — combo parfait pour mariées ou occasions spéciales.', note: 'Meilleur prix — 450.000đ économisés' },
      ]},
      { group: 'Plasma — non invasif', items: [
        { name: 'Paupière Non-Chirurgicale', price: '8.900.000đ', desc: "Lifting de paupière non chirurgical au stylo plasma — résultats 2-3 ans, temps d'arrêt minimal." },
        { name: 'Grains de Fordyce', price: '3.900.000đ', desc: 'Traitement plasma des grains de Fordyce sur lèvres/peau — retrait propre, sans cicatrice.' },
        { name: 'Rajeunissement Plasma', price: '3.500.000đ', desc: 'Rajeunissement cutané plasma — resserre les pores, atténue les rides, uniformise le teint.' },
        { name: 'Retrait Grains de Beauté & Cicatrices', price: 'à partir de 1.500.000đ', desc: 'Retrait de petits grains de beauté & cicatrices au plasma — prix selon taille et localisation, consultation sur place.' },
      ]},
    ],
    ES: [
      { group: 'Pestañas — Lift · Tint · Extensiones', items: [
        { name: 'Volume 3D-6D Extensiones', price: '1.200.000đ', desc: 'Extensiones volumen 3D-6D — cada pestaña natural lleva 3-6 abanicos finos para volumen suntuoso y natural.' },
        { name: 'Textura Híbrida', price: '850.000đ', desc: 'Mezcla Classic + Volume — fino en la punta, más denso al centro, profundidad natural.' },
        { name: 'Extensiones Naturales Classic', price: '600.000đ', desc: 'Extensiones pelo a pelo 1:1 — volumen natural, ligero, perfecto para principiantes.' },
        { name: 'Combo Lift + Tinte', price: '590.000đ', desc: 'Lifting de colágeno + tinte negro — pestañas largas y definidas, sin máscara diaria.' },
        { name: 'Lifting de Keratina', price: '450.000đ', desc: 'Lifting de pestañas con colágeno — eleva las pestañas en una curva natural sin dañar la estructura.' },
        { name: 'Tinte de Pestañas', price: '199.000đ', desc: 'Tinte negro natural — perfecto para pestañas naturales claras o suaves.' },
      ]},
      { group: 'Arquitectura de cejas', items: [
        { name: 'Lamination de Cejas', price: '750.000đ', desc: 'Lamination italiana — endereza el vello en la dirección deseada, forma plena y esponjosa.' },
        { name: 'Combo Forma + Tinte', price: '550.000đ', desc: 'Forma + tinte — tono natural definido, dura 4-6 semanas.' },
        { name: 'Tinte de Cejas', price: '350.000đ', desc: 'Tinte que combina con tu color de cabello — ideal si cambias de color con frecuencia.' },
        { name: 'Perfilado Experto', price: '250.000đ', desc: 'Perfilado experto basado en fisiognomía — sin tinte.' },
      ]},
      { group: 'Highlight — Ultimate Gaze Combo', items: [
        { name: 'Pestañas + Cejas 4-en-1', price: '1.500.000đ', desc: '4-en-1: lifting de pestañas, tinte, perfilado, lamination — combo perfecto para novias u ocasiones especiales.', note: 'Mejor valor — ahorra 450.000đ' },
      ]},
      { group: 'Plasma — no invasivo', items: [
        { name: 'Párpado No Quirúrgico', price: '8.900.000đ', desc: 'Lifting de párpado superior no quirúrgico con pluma de plasma — resultados 2-3 años, tiempo de recuperación mínimo.' },
        { name: 'Granos de Fordyce', price: '3.900.000đ', desc: 'Tratamiento de plasma para granos de Fordyce en labios/piel — eliminación limpia, sin cicatrices.' },
        { name: 'Rejuvenecimiento Plasma', price: '3.500.000đ', desc: 'Rejuvenecimiento cutáneo con plasma — cierra poros, atenúa arrugas, uniforma el tono de piel.' },
        { name: 'Eliminación de Lunares y Cicatrices', price: 'desde 1.500.000đ', desc: 'Eliminación de lunares pequeños y cicatrices con plasma — precio por tamaño y ubicación, consulta in situ.' },
      ]},
    ],
  }),

  // ====================== BEAUTY RELAX & SPA (same price across langs) ======================
  'cham-soc-da': L({
    VI: [
      { group: 'Beauty Relax & Spa Menu', items: [
        { name: 'Massage Tinh Dầu Toàn Thân', price: '299.000đ', desc: 'Massage toàn thân với tinh dầu thiên nhiên — giảm căng cơ, thư giãn sâu sau ngày làm việc.' },
        { name: 'Facial 20 Bước', price: '199.000đ', desc: 'Liệu trình facial 20 bước cá nhân hoá — soi da, làm sạch, mặt nạ phù hợp tình trạng da hiện tại.' },
        { name: 'Mặt Nạ Môi Dưỡng Sâu', price: '150.000đ', desc: 'Mặt nạ môi dưỡng sâu 30 phút — làm hồng môi tự nhiên, dưỡng ẩm chuyên sâu.' },
        { name: 'Gội Đầu Thảo Dược', price: '99.000đ', desc: 'Gội thảo dược thanh mát — thư giãn da đầu, giảm gàu & rụng tóc tự nhiên.' },
      ]},
    ],
    EN: [
      { group: 'Beauty Relax & Spa Menu', items: [
        { name: 'Aroma Body Massage', price: '299.000đ', desc: 'Full-body aromatherapy massage with natural essential oils — releases muscle tension after a long day.' },
        { name: 'Bespoke Facial — 20 Steps', price: '199.000đ', desc: 'Personalized 20-step facial — skin scan, deep cleanse, treatment mask matched to your current condition.' },
        { name: 'Lip Mask Treatment', price: '150.000đ', desc: '30-minute deep-conditioning lip mask — naturally pink, deeply hydrated lips.' },
        { name: 'Herbal Hair Wash', price: '99.000đ', desc: 'Cooling herbal hair wash — relaxes the scalp, naturally reduces dandruff and hair fall.' },
      ]},
    ],
    JA: [
      { group: 'Beauty Relax & Spa メニュー', items: [
        { name: 'アロマ・ボディ・マッサージ', price: '299.000đ', desc: '天然エッセンシャルオイルによる全身アロマセラピーマッサージ — 長い一日の後の筋肉の緊張を解放。' },
        { name: '20 ステップ・カスタムフェイシャル', price: '199.000đ', desc: 'パーソナライズされた 20 ステップフェイシャル — 肌スキャン、ディープクレンジング、現在の肌状態に合ったマスク。' },
        { name: 'リップマスク・トリートメント', price: '150.000đ', desc: '30 分のディープコンディショニングリップマスク — 自然なピンク、深く保湿された唇。' },
        { name: 'ハーブ・シャンプー', price: '99.000đ', desc: '冷却効果のあるハーブシャンプー — 頭皮をリラックスさせ、自然にフケと抜け毛を減らします。' },
      ]},
    ],
    ZH: [
      { group: 'Beauty Relax & Spa 菜单', items: [
        { name: '芳香身体按摩', price: '299.000đ', desc: '使用天然精油的全身芳香疗法按摩 — 释放一天劳累后的肌肉紧张。' },
        { name: '定制 20 步面部护理', price: '199.000đ', desc: '个性化 20 步面部护理 — 肌肤检测、深层清洁、根据您当前肤况定制面膜。' },
        { name: '唇膜护理', price: '150.000đ', desc: '30 分钟深度护理唇膜 — 自然粉嫩、深度滋润的双唇。' },
        { name: '草本洗发', price: '99.000đ', desc: '清凉草本洗发 — 放松头皮，自然减少头屑和脱发。' },
      ]},
    ],
    KO: [
      { group: 'Beauty Relax & Spa 메뉴', items: [
        { name: '아로마 바디 마사지', price: '299.000đ', desc: '천연 에센셜 오일을 사용한 전신 아로마테라피 마사지 — 긴 하루 후 근육 긴장을 풀어줍니다.' },
        { name: '맞춤 20단계 페이셜', price: '199.000đ', desc: '맞춤형 20단계 페이셜 — 피부 스캔, 딥 클렌징, 현재 상태에 맞춘 트리트먼트 마스크.' },
        { name: '립 마스크 트리트먼트', price: '150.000đ', desc: '30분 딥 컨디셔닝 립 마스크 — 자연스럽게 핑크빛, 깊이 수분 공급된 입술.' },
        { name: '허브 샴푸', price: '99.000đ', desc: '시원한 허브 샴푸 — 두피를 진정시키고 자연스럽게 비듬과 탈모를 줄입니다.' },
      ]},
    ],
    RU: [
      { group: 'Beauty Relax & Spa', items: [
        { name: 'Ароматический массаж тела', price: '299.000đ', desc: 'Полный ароматерапевтический массаж тела с натуральными эфирными маслами — снимает мышечное напряжение после долгого дня.' },
        { name: '20-шаговый уход за лицом', price: '199.000đ', desc: 'Персонализированный 20-шаговый уход за лицом — диагностика, глубокая очистка, лечебная маска под состояние кожи.' },
        { name: 'Маска для губ', price: '150.000đ', desc: '30-минутная глубокая маска для губ — естественно розовые, глубоко увлажнённые губы.' },
        { name: 'Травяной шампунь', price: '99.000đ', desc: 'Освежающий травяной шампунь — расслабляет кожу головы, естественно уменьшает перхоть и выпадение волос.' },
      ]},
    ],
    FR: [
      { group: 'Beauty Relax & Spa', items: [
        { name: 'Massage Corporel Aromathérapie', price: '299.000đ', desc: 'Massage corporel aromathérapie aux huiles essentielles naturelles — libère les tensions musculaires après une longue journée.' },
        { name: 'Soin Facial 20 Étapes', price: '199.000đ', desc: 'Soin facial personnalisé en 20 étapes — analyse de peau, nettoyage profond, masque adapté à votre état actuel.' },
        { name: 'Soin Masque Lèvres', price: '150.000đ', desc: 'Masque lèvres conditionneur profond de 30 minutes — lèvres naturellement roses et profondément hydratées.' },
        { name: 'Shampoing aux Herbes', price: '99.000đ', desc: 'Shampoing aux herbes rafraîchissant — détend le cuir chevelu, réduit naturellement pellicules et chute de cheveux.' },
      ]},
    ],
    ES: [
      { group: 'Beauty Relax & Spa', items: [
        { name: 'Masaje Corporal Aromaterapia', price: '299.000đ', desc: 'Masaje corporal completo de aromaterapia con aceites esenciales naturales — libera la tensión muscular tras un día largo.' },
        { name: 'Facial 20 Pasos a Medida', price: '199.000đ', desc: 'Facial personalizado de 20 pasos — análisis de piel, limpieza profunda, mascarilla según tu estado actual.' },
        { name: 'Mascarilla Labial', price: '150.000đ', desc: 'Mascarilla labial de acondicionamiento profundo de 30 minutos — labios naturalmente rosados y profundamente hidratados.' },
        { name: 'Lavado Herbal', price: '99.000đ', desc: 'Lavado herbal refrescante — relaja el cuero cabelludo, reduce naturalmente caspa y caída de cabello.' },
      ]},
    ],
  }),
};

export function getSubServices(slug: string, lang: Lang): SubServiceGroup[] | undefined {
  const entry = SUB_SERVICES[slug];
  if (!entry) return undefined;
  return entry[lang] ?? entry.EN;
}
