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
 *   - name: tên dịch vụ
 *   - price: theo ngôn ngữ (VI thấp hơn 1tr cho PMU)
 *   - desc: 1-2 câu chú thích/giải thích cho khách hiểu cụ thể
 *   - note?: badge đặc biệt (ví dụ "Best Value", "Đi kèm gói").
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

// Helper: fallback EN cho RU/ZH/JA/KO/FR/ES để giữ data nhẹ.
function lang8<T>(vi: T, en: T): L<T> {
  return { VI: vi, EN: en, RU: en, ZH: en, JA: en, KO: en, FR: en, ES: en };
}

export const SUB_SERVICES: Record<string, L<SubServiceGroup[]>> = {
  // ====================== BROWS ARTISTRY ======================
  microblading: lang8<SubServiceGroup[]>(
    [
      {
        group: 'Phun Mày Cao Cấp',
        items: [
          {
            name: 'Aura Royal Brows',
            price: '5.500.000đ',
            desc: 'Signature độc quyền của Master Aura — kết hợp sợi siêu thực với tán bóng vương giả, dáng "Hoàng Gia" tôn khí chất.',
            note: 'Signature Master Aura',
          },
          {
            name: 'Combo Hybrid Brows',
            price: '4.800.000đ',
            desc: 'Kết hợp điêu khắc sợi + phun bột — sợi thật ở đầu mày, bột tán bóng ở đuôi mày. Tự nhiên & nét.',
          },
          {
            name: 'Nano Hairstroke',
            price: '4.500.000đ',
            desc: 'Điêu khắc từng sợi siêu mảnh bằng máy nano, mô phỏng lông thật. Phù hợp khách thích vẻ siêu tự nhiên.',
          },
          {
            name: 'Ombre Powder Brows',
            price: '3.500.000đ',
            desc: 'Phun bột tán bóng ombre — đầu nhạt, đuôi đậm. Hoàn hảo cho khách mê style "make-up sẵn".',
          },
          {
            name: 'Shading Brows',
            price: '2.800.000đ',
            desc: 'Phun mày bóng mờ classic — dáng đơn giản, tone đều, phù hợp khách lần đầu thử PMU.',
          },
        ],
      },
      {
        group: 'Chỉnh Sửa & Tái Tạo',
        items: [
          {
            name: 'Brow Correction',
            price: '2.500.000đ',
            desc: 'Xử lý mày cũ trổ màu xanh/đỏ/xám, làm sạch nền trước khi phủ lớp màu mới chuẩn tone.',
          },
          {
            name: 'Brow Design Consultation',
            price: '300.000đ',
            desc: 'Phân tích nhân tướng học, vẽ phom mày phù hợp khuôn mặt. Trừ vào giá nếu chốt làm PMU.',
          },
          {
            name: 'First Touch-Up',
            price: 'Miễn phí',
            desc: 'Dặm màu lần 2 sau 30-45 ngày — giúp tone lên chuẩn, sửa các điểm chưa đều.',
            note: 'Đi kèm mọi gói phun mày',
          },
        ],
      },
    ],
    [
      {
        group: 'Premium Brows',
        items: [
          {
            name: 'Aura Royal Brows',
            price: '6.500.000đ',
            desc: 'Master Aura\'s exclusive signature — hyper-realistic strokes blended with royal shading. The "Royal" shape elevates your presence.',
            note: 'Master Aura Signature',
          },
          {
            name: 'Combo Hybrid Brows',
            price: '5.800.000đ',
            desc: 'Strokes at the front, powder shading at the tail — natural and crisp at once.',
          },
          {
            name: 'Nano Hairstroke',
            price: '5.500.000đ',
            desc: 'Ultra-fine hair-by-hair strokes using a nano machine — mimics real hair. Ideal for the most natural look.',
          },
          {
            name: 'Ombre Powder Brows',
            price: '4.500.000đ',
            desc: 'Ombre powder shading — soft front, defined tail. Perfect for clients who love the "always made up" look.',
          },
          {
            name: 'Shading Brows',
            price: '3.800.000đ',
            desc: 'Classic soft shading — simple shape, even tone, great for first-time PMU clients.',
          },
        ],
      },
      {
        group: 'Correction & Restoration',
        items: [
          {
            name: 'Brow Correction',
            price: '3.500.000đ',
            desc: 'Neutralize old PMU that has turned blue/red/grey before applying the new on-tone color.',
          },
          {
            name: 'Brow Design Consultation',
            price: '300.000đ',
            desc: 'Face-reading analysis and shape sketching matched to your features. Deductible if you proceed with PMU.',
          },
          {
            name: 'First Touch-Up',
            price: 'Complimentary',
            desc: 'Day 30-45 retouch — perfect the tone and refine any uneven spots.',
            note: 'Included with every brow package',
          },
        ],
      },
    ],
  ),

  // ====================== LIPS ARTISTRY ======================
  'lip-blush': lang8<SubServiceGroup[]>(
    [
      {
        group: 'Phun Môi Signature & Tone Tươi',
        items: [
          {
            name: 'Cami Pearl Lips',
            price: '5.800.000đ',
            desc: 'Signature độc quyền Master Cami — phun nền + tán ngọc trai, môi căng mọng ánh hồng pearl độc đáo.',
            note: 'Signature Master Cami',
          },
          {
            name: 'Cherry Lips',
            price: '4.800.000đ',
            desc: 'Tone cherry đỏ tươi căng mọng — gợi cảm, trẻ trung. Hot-pick cho khách 25-40 tuổi.',
          },
          {
            name: 'Berry Velvet Lips',
            price: '4.500.000đ',
            desc: 'Tone mận velvet cá tính — trầm sang, hợp khách thích phong cách high-fashion.',
          },
          {
            name: 'Coral Sunset Lips',
            price: '4.200.000đ',
            desc: 'Tone cam đào hoàng hôn ấm áp — phù hợp da ngăm, làm khuôn mặt rạng rỡ tự nhiên.',
          },
          {
            name: 'Natural Pink Lips',
            price: '4.000.000đ',
            desc: 'Hồng baby tự nhiên — chuẩn "no make-up makeup". Hoàn hảo cho khách văn phòng.',
          },
        ],
      },
      {
        group: 'Tái Tạo Nền Môi',
        items: [
          {
            name: 'Dark Lip Neutralization',
            price: '5.000.000đ',
            desc: 'Khử thâm môi chuyên sâu 2 lớp — trung hoà sắc tố tối trước khi phủ tone mới.',
          },
          {
            name: 'Lip Fade Treatment',
            price: '3.500.000đ',
            desc: 'Làm mờ môi phun cũ bằng kỹ thuật laser-soft, không tổn thương mô môi.',
          },
          {
            name: 'Custom Color Design',
            price: '+ 500.000đ',
            desc: 'Pha màu cá nhân theo tone da & sở thích — cộng vào giá gói phun môi gốc.',
            note: 'Cộng vào giá gốc',
          },
        ],
      },
    ],
    [
      {
        group: 'Signature & Fresh-Tone Lips',
        items: [
          {
            name: 'Cami Pearl Lips',
            price: '6.800.000đ',
            desc: 'Master Cami\'s exclusive signature — base layer + pearl shading creates plump, uniquely pearl-pink lips.',
            note: 'Master Cami Signature',
          },
          {
            name: 'Cherry Lips',
            price: '5.800.000đ',
            desc: 'Fresh cherry-red tone — sensual, youthful. Hot pick for clients aged 25-40.',
          },
          {
            name: 'Berry Velvet Lips',
            price: '5.500.000đ',
            desc: 'Deep velvet plum — chic and luxurious, perfect for high-fashion lovers.',
          },
          {
            name: 'Coral Sunset Lips',
            price: '5.200.000đ',
            desc: 'Warm coral sunset — flatters tan/olive skin, brightens the whole face naturally.',
          },
          {
            name: 'Natural Pink Lips',
            price: '5.000.000đ',
            desc: 'Natural baby pink — true "no make-up makeup". Ideal for office professionals.',
          },
        ],
      },
      {
        group: 'Lip Base Restoration',
        items: [
          {
            name: 'Dark Lip Neutralization',
            price: '6.000.000đ',
            desc: 'Deep two-layer dark-lip neutralization — balances dark pigments before applying the new tone.',
          },
          {
            name: 'Lip Fade Treatment',
            price: '4.500.000đ',
            desc: 'Soft-laser fading of old lip tattoo — no damage to lip tissue.',
          },
          {
            name: 'Custom Color Design',
            price: '+ 500.000đ',
            desc: 'Custom pigment blend matched to your skin tone & preference — added to the base lip package price.',
            note: 'Add-on price',
          },
        ],
      },
    ],
  ),

  // ====================== EYELINER ======================
  eyeliner: lang8<SubServiceGroup[]>(
    [
      {
        group: 'Eyeliner 4 Kiểu',
        items: [
          {
            name: 'Smokey Shaded',
            price: '4.000.000đ',
            desc: 'Khói gradient mềm mại tan vào mí — quyến rũ huyền bí, hợp mắt 2 mí sâu.',
          },
          {
            name: 'Extended Wing',
            price: '3.800.000đ',
            desc: 'Đuôi vuốt dài dramatic — nâng tầm thần thái, dáng mắt phượng sang chảnh.',
          },
          {
            name: 'Classic Wing',
            price: '3.200.000đ',
            desc: 'Đuôi vuốt nhẹ classic — dáng mèo điệu đà phù hợp mọi khuôn mặt, đi dự tiệc hay đi làm đều OK.',
          },
          {
            name: 'Natural Line',
            price: '2.500.000đ',
            desc: 'Mí tự nhiên sát chân mi — làm mắt to hơn 30% mà không ai nhận ra đã phun.',
          },
        ],
      },
    ],
    [
      {
        group: 'Eyeliner — 4 Styles',
        items: [
          {
            name: 'Smokey Shaded',
            price: '5.000.000đ',
            desc: 'Soft smokey gradient melting into the lid — mysterious and seductive, ideal for deep-set eyes.',
          },
          {
            name: 'Extended Wing',
            price: '4.800.000đ',
            desc: 'Long dramatic wing tail — lifts your gaze into an elegant phoenix-eye shape.',
          },
          {
            name: 'Classic Wing',
            price: '4.200.000đ',
            desc: 'Subtle classic flick — feline shape that suits every face, works for both office and night out.',
          },
          {
            name: 'Natural Line',
            price: '3.500.000đ',
            desc: 'Natural lash-line enhancement — makes eyes look 30% bigger without anyone noticing the PMU.',
          },
        ],
      },
    ],
  ),

  // ====================== MEN'S PMU BROWS ======================
  'mens-pmu': lang8<SubServiceGroup[]>(
    [
      {
        group: 'Phun Mày Cho Phái Mạnh',
        items: [
          {
            name: 'Signature Shadow Brow',
            price: '6.000.000đ',
            desc: 'Dáng shadow nam độc quyền — kết hợp nét sợi + tán bóng nhẹ, mạnh mẽ tự nhiên cho gương mặt trưởng thành.',
            note: 'Cao cấp nhất cho nam',
          },
          {
            name: 'Micro-Stroking HD',
            price: '5.200.000đ',
            desc: 'Điêu khắc từng sợi HD bằng máy chuyên dụng — mô phỏng lông mày thật siêu chân thực, phù hợp doanh nhân.',
          },
          {
            name: 'Natural Brow Sculpting',
            price: '4.500.000đ',
            desc: 'Sculpting form mày nam tự nhiên — chỉ định hình & lấp khoảng trống, giữ vẻ ngoài "không ai biết đã làm".',
          },
        ],
      },
    ],
    [
      {
        group: "Men's PMU Brows",
        items: [
          {
            name: 'Signature Shadow Brow',
            price: '7.000.000đ',
            desc: 'Exclusive masculine shadow brow — combines strokes + soft shading. Confident and natural for the mature gentleman.',
            note: 'Premium for men',
          },
          {
            name: 'Micro-Stroking HD',
            price: '6.200.000đ',
            desc: 'HD hair-by-hair micro-stroking using a precision machine — hyper-realistic, perfect for executives.',
          },
          {
            name: 'Natural Brow Sculpting',
            price: '5.500.000đ',
            desc: 'Natural brow sculpting — shapes and fills gaps only. The "no one will know I had it done" look.',
          },
        ],
      },
    ],
  ),

  // ====================== LASH · BROW · PLASMA (same price both langs) ======================
  'noi-mi': lang8<SubServiceGroup[]>(
    [
      {
        group: 'Lash Lift · Tint · Extension',
        items: [
          { name: 'Volume 3D-6D Mi Volume', price: '1.200.000đ', desc: 'Nối mi volume 3D-6D — mỗi mi thật được gắn 3-6 sợi giả, hiệu ứng dày phồng tự nhiên.' },
          { name: 'Hybrid Texture',          price: '850.000đ',   desc: 'Kết hợp Classic + Volume — đầu mi mảnh, giữa mi dày, hiệu ứng độ sâu tự nhiên.' },
          { name: 'Classic Natural Extension', price: '600.000đ', desc: 'Nối từng sợi 1:1 — mi dày tự nhiên, gọn nhẹ, phù hợp lần đầu nối.' },
          { name: 'Combo Lift + Tint',       price: '590.000đ',   desc: 'Uốn collagen + nhuộm đen — mi cong dài đậm, không cần mascara mỗi sáng.' },
          { name: 'Keratin Lift',            price: '450.000đ',   desc: 'Uốn mi collagen — đẩy mi thẳng đứng cong tự nhiên, không phá cấu trúc mi.' },
          { name: 'Lash Tint',               price: '199.000đ',   desc: 'Nhuộm mi đen tự nhiên — phù hợp khách có mi nhạt màu, mềm.' },
        ],
      },
      {
        group: 'Brow Architecture — Định Hình & Nhuộm',
        items: [
          { name: 'Brow Lamination',     price: '750.000đ', desc: 'Duỗi mày Ý — duỗi sợi mày đứng theo hướng mong muốn, dáng mày dày bồng bềnh.' },
          { name: 'Combo Shape + Tint',  price: '550.000đ', desc: 'Tỉa định hình + nhuộm màu mày — tone đậm tự nhiên, giữ 4-6 tuần.' },
          { name: 'Brow Tinting',        price: '350.000đ', desc: 'Nhuộm mày theo tone tóc — phù hợp khách hay đổi màu tóc.' },
          { name: 'Expert Brow Shaping', price: '250.000đ', desc: 'Tỉa & định hình dáng mày chuẩn nhân tướng học — không nhuộm.' },
        ],
      },
      {
        group: 'Highlight — Ultimate Gaze Combo',
        items: [
          { name: 'Lash Lift + Tint + Brow Shape + Lamination', price: '1.500.000đ',
            desc: '4-in-1: uốn mi, nhuộm mi, tỉa mày, duỗi mày — combo hoàn hảo cho cô dâu hoặc dịp đặc biệt.',
            note: 'Best Value · tiết kiệm 450.000đ' },
        ],
      },
      {
        group: 'Plasma Technology — Không Xâm Lấn',
        items: [
          { name: 'Non-Surgical Eyelid', price: '8.900.000đ',     desc: 'Tạo mí mắt không phẫu thuật bằng plasma pen — kết quả 2-3 năm, không downtime kéo dài.' },
          { name: 'Fordyce Spots',       price: '3.900.000đ',     desc: 'Xử lý hạt Fordyce trên môi/da bằng tia plasma — sạch sẽ, không sẹo.' },
          { name: 'Plasma Rejuvenation', price: '3.500.000đ',     desc: 'Trẻ hoá da bằng plasma — se khít lỗ chân lông, mờ nếp nhăn, sáng đều màu da.' },
          { name: 'Mole & Scar Removal', price: 'từ 1.500.000đ',  desc: 'Xoá nốt ruồi & sẹo nhỏ bằng plasma — giá theo kích thước & vị trí, tư vấn trực tiếp.' },
        ],
      },
    ],
    [
      {
        group: 'Lash Lift · Tint · Extension',
        items: [
          { name: 'Volume 3D-6D Extensions', price: '1.200.000đ', desc: '3D-6D volume extensions — each natural lash carries 3-6 fine fans for plush, natural fullness.' },
          { name: 'Hybrid Texture',          price: '850.000đ',   desc: 'Classic + Volume blend — fine at the tip, fuller in the middle, natural depth.' },
          { name: 'Classic Natural Extension', price: '600.000đ', desc: '1:1 lash-by-lash extensions — natural fullness, lightweight, perfect for first-timers.' },
          { name: 'Combo Lift + Tint',       price: '590.000đ',   desc: 'Collagen lift + black tint — long, defined lashes with no daily mascara.' },
          { name: 'Keratin Lift',            price: '450.000đ',   desc: 'Collagen lash lift — pushes lashes upright into a natural curl without damaging structure.' },
          { name: 'Lash Tint',               price: '199.000đ',   desc: 'Natural black tint — perfect for clients with light or soft natural lashes.' },
        ],
      },
      {
        group: 'Brow Architecture — Shaping & Tint',
        items: [
          { name: 'Brow Lamination',     price: '750.000đ', desc: 'Italian brow lamination — straightens brow hairs in your desired direction for a fuller, fluffy shape.' },
          { name: 'Combo Shape + Tint',  price: '550.000đ', desc: 'Shape + tint — natural defined tone, lasts 4-6 weeks.' },
          { name: 'Brow Tinting',        price: '350.000đ', desc: 'Tint to match your hair color — ideal for clients who change hair color frequently.' },
          { name: 'Expert Brow Shaping', price: '250.000đ', desc: 'Expert shaping based on face-reading principles — no tint included.' },
        ],
      },
      {
        group: 'Highlight — Ultimate Gaze Combo',
        items: [
          { name: 'Lash Lift + Tint + Brow Shape + Lamination', price: '1.500.000đ',
            desc: '4-in-1: lash lift, lash tint, brow shape, lamination — perfect combo for brides or special occasions.',
            note: 'Best Value — saves 450.000đ' },
        ],
      },
      {
        group: 'Plasma Technology — Non-Invasive',
        items: [
          { name: 'Non-Surgical Eyelid', price: '8.900.000đ',     desc: 'Non-surgical upper-eyelid lift via plasma pen — results last 2-3 years with minimal downtime.' },
          { name: 'Fordyce Spots',       price: '3.900.000đ',     desc: 'Plasma treatment of Fordyce spots on lips/skin — clean removal, no scarring.' },
          { name: 'Plasma Rejuvenation', price: '3.500.000đ',     desc: 'Plasma skin rejuvenation — tighten pores, fade wrinkles, even out skin tone.' },
          { name: 'Mole & Scar Removal', price: 'from 1.500.000đ', desc: 'Removal of small moles & scars via plasma — price by size & location, on-site consultation.' },
        ],
      },
    ],
  ),

  // ====================== BEAUTY RELAX & SPA (same price both langs) ======================
  'cham-soc-da': lang8<SubServiceGroup[]>(
    [
      {
        group: 'Beauty Relax & Spa Menu',
        items: [
          { name: 'Aroma Body Massage',       price: '299.000đ', desc: 'Massage toàn thân với tinh dầu thiên nhiên — giảm căng cơ, thư giãn sâu sau ngày làm việc.' },
          { name: 'Bespoke Facial 20 Steps',  price: '199.000đ', desc: 'Liệu trình facial 20 bước cá nhân hoá — soi da, làm sạch, mặt nạ phù hợp tình trạng da hiện tại.' },
          { name: 'Lip Mask Treatment',       price: '150.000đ', desc: 'Mặt nạ môi dưỡng sâu 30 phút — làm hồng môi tự nhiên, dưỡng ẩm chuyên sâu.' },
          { name: 'Herbal Hair Wash',         price: '99.000đ',  desc: 'Gội thảo dược thanh mát — thư giãn da đầu, giảm gàu & rụng tóc tự nhiên.' },
        ],
      },
    ],
    [
      {
        group: 'Beauty Relax & Spa Menu',
        items: [
          { name: 'Aroma Body Massage',         price: '299.000đ', desc: 'Full-body aromatherapy massage with natural essential oils — releases muscle tension after a long day.' },
          { name: 'Bespoke Facial — 20 Steps',  price: '199.000đ', desc: 'Personalized 20-step facial — skin scan, deep cleanse, treatment mask matched to your current condition.' },
          { name: 'Lip Mask Treatment',         price: '150.000đ', desc: '30-minute deep-conditioning lip mask — naturally pink, deeply hydrated lips.' },
          { name: 'Herbal Hair Wash',           price: '99.000đ',  desc: 'Cooling herbal hair wash — relaxes the scalp, naturally reduces dandruff and hair fall.' },
        ],
      },
    ],
  ),
};

export function getSubServices(slug: string, lang: Lang): SubServiceGroup[] | undefined {
  const entry = SUB_SERVICES[slug];
  if (!entry) return undefined;
  return entry[lang] ?? entry.EN;
}
