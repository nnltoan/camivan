/**
 * Full i18n dictionary cho 8 ngôn ngữ — toàn bộ content được dịch.
 * Brand "CAMI VAN", "Cẩm Vân", và địa chỉ Việt Nam giữ nguyên.
 */

export type Lang = 'VI' | 'EN' | 'RU' | 'ZH' | 'JA' | 'KO' | 'FR' | 'ES';

export const SUPPORTED_LANGS: Lang[] = ['VI', 'EN', 'RU', 'ZH', 'JA', 'KO', 'FR', 'ES'];

export const LANG_NAMES: Record<Lang, string> = {
  VI: 'Tiếng Việt',
  EN: 'English',
  RU: 'Русский',
  ZH: '中文',
  JA: '日本語',
  KO: '한국어',
  FR: 'Français',
  ES: 'Español',
};

export interface Dict {
  nav: { services: string; portfolio: string; blog: string; faq: string; about: string; book: string };
  hero: { badge: string; title_line1: string; title_accent: string; title_line2: string; description: string; cta_book: string; cta_view: string; stat_clients: string; stat_years: string; stat_rating: string; stat_reviews: string };
  brands: { microblading: string; lip: string; eyeliner: string; lash: string; nail: string; skin: string };
  services_section: { label: string; title: string; title_accent: string; description: string };
  services: { microblading: { name: string; subtitle: string; desc: string }; lip: { name: string; subtitle: string; desc: string }; eyeliner: { name: string; subtitle: string; desc: string }; lash: { name: string; subtitle: string; desc: string }; nail: { name: string; subtitle: string; desc: string }; skin: { name: string; subtitle: string; desc: string }; price_from: string; view_more: string };
  gallery: { label: string; title: string; title_accent: string; description: string; filter_all: string; filter_brow: string; filter_lip: string; filter_eye: string; filter_lash: string; filter_nail: string };
  about: { label: string; title: string; title_accent: string; greeting: string; intro_p1: string; intro_p2: string; signature_role: string; cert_title: string; cert_desc: string; equip_title: string; equip_desc: string; ink_title: string; ink_desc: string; warranty_title: string; warranty_desc: string };
  reviews: { label: string; title: string; title_accent: string; description: string };
  blog: { label: string; title: string; title_accent: string; description: string; read_more: string; view_all: string; back_to_all: string; author_label: string; cta_heading: string; cta_heading_accent: string; cta_description: string; cta_button: string };
  faq: { label: string; title: string; title_accent: string; description: string; items: { q: string; a: string }[] };
  booking: { label: string; title: string; title_accent: string; description: string; note: string; field_name: string; placeholder_name: string; field_phone: string; field_service: string; field_date: string; field_time: string; field_note: string; field_note_placeholder: string; choose_channel: string; error_name: string; error_phone: string; error_phone_invalid: string; error_date: string };
  cta: { ready: string; ready_accent: string; description: string; book_now: string };
  footer: { tagline: string; about_title: string; services_title: string; contact_title: string; about_us: string; portfolio_link: string; blog_link: string; address: string; copyright: string };
  service_detail: { back_to_all: string; book_via_wa: string; why_choose: string; process_title: string; process_accent: string; aftercare_title: string; faq_title: string; ready_to: string; ready_description: string; book_now: string };
  ui_v2: {
    nav_book_aria: string; nav_theme_toggle: string; nav_haptic_toggle: string;
    hero_consult_chip: string;
    booking_badge_fastest: string; booking_time_tooltip: string;
    ba_label: string; ba_title: string; ba_title_accent: string; ba_description: string;
    ba_before: string; ba_after: string; ba_drag_hint: string; ba_demo_note: string;
    fam_call: string; fam_chat: string; fam_maps: string;
    lb_close: string; lb_prev: string; lb_next: string; lb_viewer: string;
    toast_redirecting: string; toast_error: string; toast_copied: string;
  };
}

const VI: Dict = {
  nav: { services: 'Dịch vụ', portfolio: 'Portfolio', blog: 'Blog', faq: 'FAQ', about: 'Về tôi', book: 'Đặt Lịch ✨' },
  hero: { badge: 'Đang nhận booking tháng 5', title_line1: 'Mỗi khuôn mặt là', title_accent: 'một bông hoa', title_line2: 'riêng biệt.', description: 'CAMI VAN PMU & SKIN — chuẩn công nghệ Châu Âu. Kiến tạo chân mày nhân tướng học, phun môi bông đậm, và đặc biệt phun nốt ruồi phong thủy. Tự nhiên — quyến rũ — độc đáo.', cta_book: 'Đặt lịch tư vấn →', cta_view: 'Xem portfolio ♡', stat_clients: '2.500+ khách hàng', stat_years: 'Trong 7 năm', stat_rating: '4.9/5 đánh giá', stat_reviews: 'Google Reviews' },
  brands: { microblading: 'Microblading', lip: 'Lip Blush', eyeliner: 'PMU Eyeliner', lash: 'Lash Extension', nail: 'Nail Art', skin: 'Skin Care' },
  services_section: { label: '✿ Dịch vụ', title: 'Nâng niu vẻ đẹp theo cách', title_accent: 'dịu dàng nhất', description: '6 dịch vụ chính — mỗi dịch vụ đều được thiết kế để tôn vinh nét đẹp riêng của bạn.' },
  services: {
    microblading: { name: 'Microblading Chân Mày', subtitle: 'Sợi tự nhiên', desc: 'Chân mày tự nhiên từng sợi. Không quá đậm. Không quá nhạt. Đúng chuẩn model.' },
    lip: { name: 'Lip Blush Môi', subtitle: 'Mọng & quyến rũ', desc: 'Đôi môi căng mọng màu tự nhiên, như vừa ăn berry mọng đỏ.' },
    eyeliner: { name: 'Eyeliner PMU', subtitle: 'Mắt có hồn 24/7', desc: 'Đường kẻ mắt mảnh tinh tế. Không cần kẻ mắt mỗi ngày.' },
    lash: { name: 'Nối Mi Thẩm Mỹ', subtitle: 'Cong dày tự nhiên', desc: 'Mi dày cong tự nhiên. Classic, Volume, Hybrid.' },
    nail: { name: 'Nail Art', subtitle: 'Thiết kế độc bản', desc: 'Phong cách tối giản, lãng mạn, bohemian.' },
    skin: { name: 'Chăm Sóc Da', subtitle: 'Glow tự nhiên', desc: 'Facial cao cấp. Da glow tự nhiên, khỏe mạnh.' },
    price_from: 'Từ',
    view_more: 'Xem chi tiết →',
  },
  gallery: { label: '♡ Portfolio', title: 'Tác phẩm', title_accent: 'gần đây', description: 'Lọc theo dịch vụ để xem trước/sau từng loại — tất cả ảnh đều của khách thật tại tiệm.', filter_all: 'Tất cả', filter_brow: 'Chân mày', filter_lip: 'Môi', filter_eye: 'Eyeliner', filter_lash: 'Nối mi', filter_nail: 'Nail' },
  about: { label: '✿ Gặp chị Vân', title: 'Xin chào, tôi là', title_accent: 'Cẩm Vân', greeting: 'Tôi yêu công việc phun xăm thẩm mỹ vì mỗi khuôn mặt phụ nữ đến với tôi đều là một câu chuyện đặc biệt — và nhiệm vụ của tôi là giúp họ cảm thấy đẹp nhất trong chính mình.', intro_p1: 'Sau 7 năm và hơn 2.500 khách hàng, tôi hiểu rằng vẻ đẹp không phải là thay đổi, mà là tôn vinh.', intro_p2: 'Mỗi khách hàng đến CAMI VAN đều được tư vấn 1-1, phân tích khuôn mặt và đề xuất giải pháp phù hợp riêng.', signature_role: 'Founder · PMU Artist · Người yêu nghề', cert_title: 'Chứng chỉ quốc tế', cert_desc: 'IBD, Phibrows, Daria', equip_title: 'Máy móc cao cấp', equip_desc: 'Nhập khẩu Hàn, Đức', ink_title: 'Mực organic', ink_desc: 'An toàn 100%', warranty_title: 'Bảo hành 2 năm', warranty_desc: 'Miễn phí dặm lại' },
  reviews: { label: '★ Đánh giá', title: 'Khách hàng nói', title_accent: 'gì về chúng tôi', description: 'Hơn 2.500 khách đã tin tưởng. Reviews thật từ {GMAPSLINK}.' },
  blog: { label: '📝 Blog', title: 'Chia sẻ', title_accent: 'kiến thức', description: 'Những bài viết chuyên sâu về chăm sóc da, phun xăm thẩm mỹ, và xu hướng làm đẹp 2026.', read_more: 'Đọc tiếp', view_all: 'Xem tất cả bài viết →', back_to_all: '← Tất cả bài viết', author_label: 'Tác giả', cta_heading: 'Còn thắc mắc gì?', cta_heading_accent: 'Hỏi ngay nhé!', cta_description: 'Nhắn em qua WhatsApp/Zalo/Instagram để được tư vấn miễn phí. Phản hồi trong 15 phút.', cta_button: 'Đặt lịch tư vấn ♡' },
  faq: { label: '❓ FAQ', title: 'Câu hỏi', title_accent: 'thường gặp', description: 'Em đã tổng hợp 8 câu hỏi mà chị em hay hỏi nhất. Còn thắc mắc gì cứ nhắn em nhé ♡', items: [
    { q: 'Phun xăm có đau không?', a: 'Em sẽ ủ tê 30 phút trước khi phun, nên cảm giác chỉ hơi tê nhẹ như kiến cắn. Hầu hết khách đều nói ngủ được trong lúc phun.' },
    { q: 'Lông mày phun xong giữ được bao lâu?', a: 'Thông thường 2-3 năm tùy cơ địa và cách chăm sóc. Em bảo hành dặm lại miễn phí 1 năm.' },
    { q: 'Có cần kiêng gì sau phun xăm không?', a: 'Trong 7 ngày đầu cần kiêng nắng, nước, mỹ phẩm trên vùng phun. Em sẽ gửi hướng dẫn chi tiết sau khi làm.' },
    { q: 'Có thể chọn dáng/kiểu phun xăm theo khuôn mặt không?', a: 'Có ạ! Em sẽ tư vấn 1-1 trước khi làm: phân tích khuôn mặt, đề xuất dáng phù hợp, vẽ thử trước khi phun chính thức.' },
    { q: 'Mực phun xăm có an toàn không?', a: 'Em dùng mực organic nhập khẩu Hàn Quốc, có chứng nhận FDA. An toàn tuyệt đối cho da nhạy cảm.' },
    { q: 'Phun xăm xong có lên màu ngay không?', a: 'Sau khi phun, màu sẽ đậm hơn 30-40%. Sau 7-10 ngày da bong nhẹ và lên màu thật. Sau 1 tháng màu ổn định.' },
    { q: 'Đặt cọc bao nhiêu để giữ lịch?', a: 'Đặt cọc 500.000đ qua chuyển khoản. Trừ trực tiếp vào tổng giá khi làm.' },
    { q: 'Tiệm có nhận khách quốc tế không?', a: 'Có ạ! Tiệm chuyên đón khách Nga, Hàn, Nhật. Có hỗ trợ 8 ngôn ngữ và translator nếu cần.' },
  ]},
  booking: { label: '📅 Đặt lịch 1-click', title: 'Hẹn giờ', title_accent: 'tỏa sáng', description: 'Điền form và chọn kênh — hệ thống sẽ mở WhatsApp / Zalo / Instagram với nội dung đặt lịch soạn sẵn. Phản hồi trong 15 phút.', note: '💡 Lưu ý: Zalo và Instagram chưa hỗ trợ tự điền tin nhắn. Nội dung đặt lịch sẽ được tự động copy vào clipboard — chỉ cần dán vào ô tin nhắn sau khi mở ứng dụng.', field_name: 'Họ tên *', placeholder_name: 'Nguyễn Thị Lan', field_phone: 'Số điện thoại *', field_service: 'Dịch vụ', field_date: 'Ngày *', field_time: 'Giờ', field_note: 'Ghi chú (tùy chọn)', field_note_placeholder: 'Em muốn hỏi thêm về...', choose_channel: 'Chọn kênh gửi tin nhắn:', error_name: 'Vui lòng điền họ tên.', error_phone: 'Vui lòng điền số điện thoại.', error_phone_invalid: 'Số điện thoại không hợp lệ. Vui lòng nhập 8-15 chữ số.', error_date: 'Vui lòng chọn ngày.' },
  cta: { ready: 'Sẵn sàng', ready_accent: 'tỏa sáng?', description: 'Đặt lịch tư vấn miễn phí — phản hồi trong 15 phút qua WhatsApp / Zalo / Instagram.', book_now: 'Đặt lịch ngay ♡' },
  footer: { tagline: 'PMU & SKIN — Phun xăm thẩm mỹ & Chăm sóc da. Chuẩn công nghệ Châu Âu, kiến tạo chân mày nhân tướng học, phun môi bông đậm và phun nốt ruồi phong thủy.', about_title: 'Studio', services_title: 'Dịch vụ', contact_title: 'Liên hệ', about_us: 'Về chị Vân', portfolio_link: 'Portfolio', blog_link: 'Blog', address: '23 An Thượng 18, Đà Nẵng, Việt Nam', copyright: '© 2026 CAMI VAN ✿ Developed by {DANALINK}' },
  service_detail: { back_to_all: '← Tất cả dịch vụ', book_via_wa: '📱 Đặt lịch ngay qua WhatsApp', why_choose: 'Tại sao chọn', process_title: 'Quy trình', process_accent: 'làm việc', aftercare_title: '📋 Hướng dẫn chăm sóc sau', faq_title: '❓ Câu hỏi thường gặp', ready_to: 'Sẵn sàng làm', ready_description: 'Đặt lịch tư vấn miễn phí qua WhatsApp / Zalo. Phản hồi trong 15 phút.', book_now: 'Đặt lịch ngay ♡' },
  ui_v2: {
    nav_book_aria: 'Mở form đặt lịch', nav_theme_toggle: 'Chuyển sáng/tối', nav_haptic_toggle: 'Bật/tắt rung phản hồi',
    hero_consult_chip: '💬 Tư vấn miễn phí 1-1',
    booking_badge_fastest: 'Nhanh nhất', booking_time_tooltip: '💡 Chị Cẩm Vân sẽ confirm khung giờ chính xác qua chat.',
    ba_label: '✨ Trước & Sau', ba_title: 'Khoảnh khắc', ba_title_accent: 'biến đổi', ba_description: 'Kéo nhẹ để xem sự khác biệt — mỗi đường nét đều được chăm chút tỉ mỉ.',
    ba_before: 'TRƯỚC', ba_after: 'SAU', ba_drag_hint: 'Kéo để so sánh', ba_demo_note: '📷 Ảnh demo — kết quả thực tế có thể khác nhau tùy cơ địa.',
    fam_call: 'Gọi điện', fam_chat: 'Nhắn tin', fam_maps: 'Bản đồ',
    lb_close: 'Đóng', lb_prev: 'Ảnh trước', lb_next: 'Ảnh sau', lb_viewer: 'Xem ảnh',
    toast_redirecting: 'Đang mở ứng dụng…', toast_error: 'Có lỗi xảy ra. Vui lòng thử lại.', toast_copied: 'Đã copy nội dung — paste vào chat nhé ✨',
  },
};

const EN: Dict = {
  nav: { services: 'Services', portfolio: 'Portfolio', blog: 'Blog', faq: 'FAQ', about: 'About', book: 'Book Now ✨' },
  hero: { badge: 'Booking open for May', title_line1: 'Each face is', title_accent: 'a unique flower', title_line2: 'of its own.', description: 'CAMI VAN PMU & SKIN — European-standard technique. Face-reading brow design, signature lip blush, and feng-shui mole tattooing. Natural — alluring — one of a kind.', cta_book: 'Free consultation →', cta_view: 'View portfolio ♡', stat_clients: '2,500+ clients', stat_years: 'In 7 years', stat_rating: '4.9/5 rating', stat_reviews: 'Google Reviews' },
  brands: { microblading: 'Microblading', lip: 'Lip Blush', eyeliner: 'PMU Eyeliner', lash: 'Lash Extension', nail: 'Nail Art', skin: 'Skin Care' },
  services_section: { label: '✿ Services', title: 'Celebrating beauty in', title_accent: 'the gentlest way', description: '6 signature services — each designed to enhance your unique features.' },
  services: {
    microblading: { name: 'Microblading Brows', subtitle: 'Natural strokes', desc: 'Hair-stroke brows that look natural. Not too bold. Not too soft. Model-perfect.' },
    lip: { name: 'Lip Blush', subtitle: 'Plump & alluring', desc: 'Plump lips with natural berry tones, as if you just ate a fresh strawberry.' },
    eyeliner: { name: 'PMU Eyeliner', subtitle: '24/7 captivating eyes', desc: 'Refined eyeliner. No need to apply makeup every morning.' },
    lash: { name: 'Lash Extensions', subtitle: 'Natural curl & volume', desc: 'Full, naturally curled lashes. Classic, Volume, Hybrid.' },
    nail: { name: 'Nail Art', subtitle: 'Custom design', desc: 'Minimalist, romantic, bohemian styles.' },
    skin: { name: 'Skin Care', subtitle: 'Natural glow', desc: 'Premium facial. Healthy, naturally glowing skin.' },
    price_from: 'From',
    view_more: 'Learn more →',
  },
  gallery: { label: '♡ Portfolio', title: 'Recent', title_accent: 'work', description: 'Filter by service to see before/after for each type — all photos from real clients.', filter_all: 'All', filter_brow: 'Brows', filter_lip: 'Lips', filter_eye: 'Eyeliner', filter_lash: 'Lashes', filter_nail: 'Nails' },
  about: { label: '✿ Meet Cẩm Vân', title: 'Hello, I am', title_accent: 'Cẩm Vân', greeting: "I love permanent makeup because every woman who comes to me has a unique story — and my mission is to help her feel her most beautiful self.", intro_p1: "After 7 years and over 2,500 clients, I understand that beauty is not about changing — it's about celebrating.", intro_p2: 'Each client at CAMI VAN gets a 1-on-1 consultation, face analysis, and personalized recommendations.', signature_role: 'Founder · PMU Artist · Beauty enthusiast', cert_title: 'International Certifications', cert_desc: 'IBD, Phibrows, Daria', equip_title: 'Premium Equipment', equip_desc: 'Imported from Korea, Germany', ink_title: 'Organic Ink', ink_desc: '100% safe', warranty_title: '2-year Warranty', warranty_desc: 'Free touch-ups' },
  reviews: { label: '★ Reviews', title: 'What clients', title_accent: 'say about us', description: 'Over 2,500 clients have trusted us. Real reviews from {GMAPSLINK}.' },
  blog: { label: '📝 Blog', title: 'Beauty', title_accent: 'knowledge', description: 'In-depth articles on skincare, permanent makeup, and 2026 beauty trends.', read_more: 'Read more', view_all: 'View all posts →', back_to_all: '← All articles', author_label: 'Author', cta_heading: 'Any questions?', cta_heading_accent: 'Just ask!', cta_description: 'Message me on WhatsApp/Zalo/Instagram for a free consultation. Reply within 15 minutes.', cta_button: 'Book consultation ♡' },
  faq: { label: '❓ FAQ', title: 'Frequently', title_accent: 'asked questions', description: "I've compiled the 8 most common questions. Anything else? Just message me ♡", items: [
    { q: 'Does PMU hurt?', a: 'I apply numbing cream for 30 minutes before, so the sensation is just a mild tingle like an ant bite. Most clients say they could sleep through it.' },
    { q: 'How long does microblading last?', a: 'Typically 2-3 years depending on skin type and aftercare. Free touch-ups within 1 year.' },
    { q: 'Anything to avoid after PMU?', a: "For the first 7 days, avoid sun, water, and cosmetics on the treated area. I'll send detailed aftercare instructions." },
    { q: 'Can I choose the style/shape?', a: 'Yes! I offer 1-on-1 consultation: face analysis, recommended shapes, draw a preview before the actual procedure.' },
    { q: 'Is the ink safe?', a: 'I use organic ink imported from Korea, FDA-certified. Absolutely safe for sensitive skin.' },
    { q: 'Will the color show right after?', a: 'After the procedure, color will look 30-40% darker. After 7-10 days, the skin sheds and the true color appears. After 1 month, color stabilizes.' },
    { q: 'How much deposit to hold a slot?', a: '500,000 VND via bank transfer. Deducted from total when you visit. Refundable if cancelled 24h+ before.' },
    { q: 'Do you accept international clients?', a: 'Yes! I specialize in Russian, Korean, and Japanese clients. 8 languages supported, translator available.' },
  ]},
  booking: { label: '📅 1-click Booking', title: 'Book your', title_accent: 'glow', description: "Fill in the form and pick a channel — you'll be redirected to WhatsApp / Zalo / Instagram with the booking message pre-written. Reply within 15 minutes.", note: "💡 Note: Zalo and Instagram don't support pre-filled messages. The booking text is auto-copied to your clipboard — just paste it into the message box after opening the app.", field_name: 'Full name *', placeholder_name: 'Sarah Johnson', field_phone: 'Phone number *', field_service: 'Service', field_date: 'Date *', field_time: 'Time', field_note: 'Note (optional)', field_note_placeholder: "I'd like to ask about...", choose_channel: 'Choose messaging channel:', error_name: 'Please enter your name.', error_phone: 'Please enter your phone number.', error_phone_invalid: 'Invalid phone number. Please enter 8-15 digits.', error_date: 'Please select a date.' },
  cta: { ready: 'Ready to', ready_accent: 'glow?', description: 'Free consultation booking — reply within 15 minutes via WhatsApp / Zalo / Instagram.', book_now: 'Book now ♡' },
  footer: { tagline: 'PMU & SKIN — Permanent Makeup & Skin Care. European-standard technology, face-reading brow design, signature lip blush, and feng-shui mole tattooing.', about_title: 'Studio', services_title: 'Services', contact_title: 'Contact', about_us: 'About Cẩm Vân', portfolio_link: 'Portfolio', blog_link: 'Blog', address: '23 An Thượng 18, Da Nang, Vietnam', copyright: '© 2026 CAMI VAN ✿ Developed by {DANALINK}' },
  service_detail: { back_to_all: '← All services', book_via_wa: '📱 Book via WhatsApp', why_choose: 'Why choose', process_title: 'How it', process_accent: 'works', aftercare_title: '📋 Aftercare guide', faq_title: '❓ Frequently asked', ready_to: 'Ready for', ready_description: 'Free consultation via WhatsApp / Zalo. Reply within 15 minutes.', book_now: 'Book now ♡' },
  ui_v2: {
    nav_book_aria: 'Open booking form', nav_theme_toggle: 'Toggle light/dark', nav_haptic_toggle: 'Toggle haptic feedback',
    hero_consult_chip: '💬 Free 1-on-1 consultation',
    booking_badge_fastest: 'Fastest', booking_time_tooltip: '💡 Cẩm Vân will confirm the exact time slot via chat.',
    ba_label: '✨ Before & After', ba_title: 'A moment of', ba_title_accent: 'transformation', ba_description: 'Drag to reveal the difference — every detail crafted with care.',
    ba_before: 'BEFORE', ba_after: 'AFTER', ba_drag_hint: 'Drag to compare', ba_demo_note: '📷 Demo image — actual results may vary by skin type.',
    fam_call: 'Call', fam_chat: 'Message', fam_maps: 'Map',
    lb_close: 'Close', lb_prev: 'Previous image', lb_next: 'Next image', lb_viewer: 'Image viewer',
    toast_redirecting: 'Opening app…', toast_error: 'Something went wrong. Please try again.', toast_copied: 'Booking message copied — paste it in chat ✨',
  },
};

const RU: Dict = {
  nav: { services: 'Услуги', portfolio: 'Портфолио', blog: 'Блог', faq: 'Вопросы', about: 'Обо мне', book: 'Записаться ✨' },
  hero: { badge: 'Запись на май открыта', title_line1: 'Каждое лицо —', title_accent: 'уникальный цветок', title_line2: 'своего рода.', description: 'CAMI VAN PMU & SKIN — европейский стандарт. Дизайн бровей по физиогномике, фирменная техника губ "ягода", и особенно — татуаж родинок по фэн-шуй. Естественно — притягательно — уникально.', cta_book: 'Бесплатная консультация →', cta_view: 'Портфолио ♡', stat_clients: '2 500+ клиентов', stat_years: 'За 7 лет', stat_rating: 'Рейтинг 4.9/5', stat_reviews: 'Отзывы Google' },
  brands: { microblading: 'Микроблейдинг', lip: 'Татуаж губ', eyeliner: 'Татуаж стрелок', lash: 'Наращивание ресниц', nail: 'Дизайн ногтей', skin: 'Уход за кожей' },
  services_section: { label: '✿ Услуги', title: 'Воспеть красоту', title_accent: 'самым нежным способом', description: '6 фирменных услуг — каждая создана, чтобы подчеркнуть ваши уникальные черты.' },
  services: {
    microblading: { name: 'Микроблейдинг бровей', subtitle: 'Натуральные волоски', desc: 'Брови волосок к волоску, выглядят естественно. Не слишком ярко. Не слишком мягко. Идеально как у моделей.' },
    lip: { name: 'Татуаж губ', subtitle: 'Сочные и манящие', desc: 'Сочные губы натурального ягодного оттенка, словно вы только что съели свежую клубнику.' },
    eyeliner: { name: 'Татуаж стрелок PMU', subtitle: 'Выразительные глаза 24/7', desc: 'Деликатная стрелка. Не нужно наносить макияж каждое утро.' },
    lash: { name: 'Наращивание ресниц', subtitle: 'Естественный изгиб и объём', desc: 'Густые, естественно изогнутые ресницы. Classic, Volume, Hybrid.' },
    nail: { name: 'Дизайн ногтей', subtitle: 'Индивидуальный дизайн', desc: 'Минималистичный, романтичный, бохо стиль.' },
    skin: { name: 'Уход за кожей', subtitle: 'Естественное сияние', desc: 'Премиум-уход за лицом. Здоровая, естественно сияющая кожа.' },
    price_from: 'От',
    view_more: 'Подробнее →',
  },
  gallery: { label: '♡ Портфолио', title: 'Недавние', title_accent: 'работы', description: 'Фильтруйте по услуге, чтобы увидеть результаты «до/после» — все фото от реальных клиентов.', filter_all: 'Все', filter_brow: 'Брови', filter_lip: 'Губы', filter_eye: 'Стрелки', filter_lash: 'Ресницы', filter_nail: 'Ногти' },
  about: { label: '✿ Знакомьтесь, Cẩm Vân', title: 'Здравствуйте, я', title_accent: 'Cẩm Vân', greeting: 'Я люблю перманентный макияж, потому что у каждой женщины, которая приходит ко мне, своя история — и моя задача помочь ей почувствовать себя самой красивой.', intro_p1: 'За 7 лет и более 2 500 клиентов я поняла: красота — это не про изменения, а про то, чтобы её воспеть.', intro_p2: 'Каждый клиент CAMI VAN получает индивидуальную консультацию, анализ лица и персональные рекомендации.', signature_role: 'Основатель · PMU-мастер · Энтузиаст красоты', cert_title: 'Международные сертификаты', cert_desc: 'IBD, Phibrows, Daria', equip_title: 'Премиум оборудование', equip_desc: 'Импорт из Кореи, Германии', ink_title: 'Органические пигменты', ink_desc: '100% безопасно', warranty_title: 'Гарантия 2 года', warranty_desc: 'Бесплатная коррекция' },
  reviews: { label: '★ Отзывы', title: 'Что говорят', title_accent: 'наши клиенты', description: 'Нам доверяют более 2 500 клиентов. Настоящие отзывы в {GMAPSLINK}.' },
  blog: { label: '📝 Блог', title: 'Знания', title_accent: 'о красоте', description: 'Подробные статьи об уходе за кожей, перманентном макияже и трендах красоты 2026.', read_more: 'Читать далее', view_all: 'Все статьи →', back_to_all: '← Все статьи', author_label: 'Автор', cta_heading: 'Остались вопросы?', cta_heading_accent: 'Просто спросите!', cta_description: 'Напишите мне в WhatsApp/Zalo/Instagram для бесплатной консультации. Ответ в течение 15 минут.', cta_button: 'Записаться на консультацию ♡' },
  faq: { label: '❓ Вопросы', title: 'Часто задаваемые', title_accent: 'вопросы', description: 'Я собрала 8 самых частых вопросов. Что-то ещё? Просто напишите мне ♡', items: [
    { q: 'PMU — это больно?', a: 'Я наношу обезболивающий крем за 30 минут до процедуры, так что ощущение лишь лёгкое покалывание, как укус муравья. Большинство клиентов говорят, что могли бы заснуть.' },
    { q: 'Как долго держится микроблейдинг?', a: 'Обычно 2–3 года в зависимости от типа кожи и ухода. Бесплатная коррекция в течение 1 года.' },
    { q: 'Что нужно избегать после PMU?', a: 'В первые 7 дней избегайте солнца, воды и косметики на обработанной зоне. Я отправлю подробные инструкции.' },
    { q: 'Можно ли выбрать форму?', a: 'Да! Индивидуальная консультация: анализ лица, рекомендация формы, эскиз перед процедурой.' },
    { q: 'Безопасны ли пигменты?', a: 'Я использую органические пигменты из Кореи, сертифицированные FDA. Полностью безопасны для чувствительной кожи.' },
    { q: 'Цвет проявится сразу?', a: 'После процедуры цвет на 30–40% ярче. Через 7–10 дней кожа обновляется и появляется истинный цвет. Через 1 месяц цвет стабилизируется.' },
    { q: 'Какой залог для бронирования?', a: '500 000 донгов через банковский перевод. Вычитается из общей суммы при визите. Возврат при отмене за 24+ часа.' },
    { q: 'Принимаете ли международных клиентов?', a: 'Да! Специализируюсь на русских, корейских и японских клиентах. Поддержка 8 языков, переводчик доступен.' },
  ]},
  booking: { label: '📅 Запись в 1 клик', title: 'Запишитесь', title_accent: 'на сияние', description: 'Заполните форму и выберите канал — откроется WhatsApp / Zalo / Instagram с готовым сообщением о записи. Ответ в течение 15 минут.', note: '💡 Примечание: Zalo и Instagram не поддерживают автозаполнение сообщений. Текст записи автоматически копируется в буфер обмена — просто вставьте его в окно сообщения после открытия приложения.', field_name: 'Полное имя *', placeholder_name: 'Anna Ivanova', field_phone: 'Номер телефона *', field_service: 'Услуга', field_date: 'Дата *', field_time: 'Время', field_note: 'Заметка (необязательно)', field_note_placeholder: 'Я хочу спросить о...', choose_channel: 'Выберите канал связи:', error_name: 'Пожалуйста, введите имя.', error_phone: 'Пожалуйста, введите номер телефона.', error_phone_invalid: 'Неверный номер телефона. Введите 8-15 цифр.', error_date: 'Пожалуйста, выберите дату.' },
  cta: { ready: 'Готовы', ready_accent: 'сиять?', description: 'Бесплатная консультация — ответ в течение 15 минут через WhatsApp / Zalo / Instagram.', book_now: 'Записаться ♡' },
  footer: { tagline: 'PMU & SKIN — Перманентный макияж и уход за кожей. Европейский стандарт, дизайн бровей по физиогномике, фирменная техника губ и татуаж родинок по фэн-шуй.', about_title: 'Студия', services_title: 'Услуги', contact_title: 'Контакты', about_us: 'О Cẩm Vân', portfolio_link: 'Портфолио', blog_link: 'Блог', address: '23 An Thượng 18, Đà Nẵng, Vietnam', copyright: '© 2026 CAMI VAN ✿ Разработано {DANALINK}' },
  service_detail: { back_to_all: '← Все услуги', book_via_wa: '📱 Записаться через WhatsApp', why_choose: 'Почему выбирают', process_title: 'Как это', process_accent: 'работает', aftercare_title: '📋 Уход после процедуры', faq_title: '❓ Частые вопросы', ready_to: 'Готовы к', ready_description: 'Бесплатная консультация через WhatsApp / Zalo. Ответ в течение 15 минут.', book_now: 'Записаться ♡' },
  ui_v2: {
    nav_book_aria: 'Открыть форму записи', nav_theme_toggle: 'Светлая/тёмная тема', nav_haptic_toggle: 'Включить/выключить вибрацию',
    hero_consult_chip: '💬 Бесплатная консультация 1-на-1',
    booking_badge_fastest: 'Быстрее всех', booking_time_tooltip: '💡 Cẩm Vân подтвердит точное время в чате.',
    ba_label: '✨ До и После', ba_title: 'Момент', ba_title_accent: 'преображения', ba_description: 'Перетащите, чтобы увидеть разницу — каждая деталь продумана с заботой.',
    ba_before: 'ДО', ba_after: 'ПОСЛЕ', ba_drag_hint: 'Перетащите для сравнения', ba_demo_note: '📷 Демо-изображение — фактический результат может зависеть от типа кожи.',
    fam_call: 'Позвонить', fam_chat: 'Написать', fam_maps: 'Карта',
    lb_close: 'Закрыть', lb_prev: 'Предыдущее фото', lb_next: 'Следующее фото', lb_viewer: 'Просмотр фото',
    toast_redirecting: 'Открываем приложение…', toast_error: 'Произошла ошибка. Попробуйте ещё раз.', toast_copied: 'Текст записи скопирован — вставьте его в чат ✨',
  },
};

const ZH: Dict = {
  nav: { services: '服务', portfolio: '作品集', blog: '博客', faq: '常见问题', about: '关于', book: '立即预约 ✨' },
  hero: { badge: '5月预约开放中', title_line1: '每张脸都是', title_accent: '独一无二的花朵', title_line2: '。', description: 'CAMI VAN PMU & SKIN — 欧洲标准技术。面相学眉形设计、招牌咬唇唇釉、特别的风水痣纹绣。自然 — 迷人 — 独一无二。', cta_book: '免费咨询 →', cta_view: '查看作品 ♡', stat_clients: '2,500+ 客户', stat_years: '7年经验', stat_rating: '4.9/5 评分', stat_reviews: 'Google 评价' },
  brands: { microblading: '雾眉', lip: '唇釉', eyeliner: '美瞳线', lash: '种睫毛', nail: '美甲艺术', skin: '皮肤护理' },
  services_section: { label: '✿ 服务', title: '以最温柔的方式', title_accent: '赞美美丽', description: '6项标志性服务 — 每项都旨在突出您的独特之美。' },
  services: {
    microblading: { name: '雾眉 / 微刺眉', subtitle: '自然眉丝', desc: '一根根自然眉丝。不太浓，不太淡。完美如模特。' },
    lip: { name: '唇釉纹绣', subtitle: '丰润迷人', desc: '丰润双唇带有自然莓果色，仿佛刚吃过新鲜草莓。' },
    eyeliner: { name: '美瞳线 PMU', subtitle: '24/7 迷人双眸', desc: '精致眼线。无需每天化妆。' },
    lash: { name: '种睫毛', subtitle: '自然卷翘饱满', desc: '饱满自然卷翘的睫毛。Classic、Volume、Hybrid。' },
    nail: { name: '美甲艺术', subtitle: '定制设计', desc: '极简、浪漫、波西米亚风格。' },
    skin: { name: '皮肤护理', subtitle: '自然光泽', desc: '高级护肤。健康自然光泽肌肤。' },
    price_from: '起价',
    view_more: '了解更多 →',
  },
  gallery: { label: '♡ 作品集', title: '近期', title_accent: '作品', description: '按服务筛选查看每种类型的对比图 — 所有照片均来自真实客户。', filter_all: '全部', filter_brow: '眉毛', filter_lip: '唇部', filter_eye: '眼线', filter_lash: '睫毛', filter_nail: '美甲' },
  about: { label: '✿ 认识 Cẩm Vân', title: '您好，我是', title_accent: 'Cẩm Vân', greeting: '我热爱半永久化妆，因为每位来到我这里的女性都有独特的故事 — 我的使命是帮助她感受到最美的自己。', intro_p1: '7年时间和2,500多位客户后，我明白美不在于改变 — 而在于赞美。', intro_p2: '每位 CAMI VAN 客户都享有一对一咨询、面部分析和个性化建议。', signature_role: '创始人 · PMU 艺术家 · 美容爱好者', cert_title: '国际认证', cert_desc: 'IBD、Phibrows、Daria', equip_title: '高端设备', equip_desc: '韩国、德国进口', ink_title: '有机色乳', ink_desc: '100% 安全', warranty_title: '2年保修', warranty_desc: '免费补色' },
  reviews: { label: '★ 评价', title: '客户', title_accent: '评价', description: '超过 2,500 位客户的信任。{GMAPSLINK} 真实评价。' },
  blog: { label: '📝 博客', title: '美容', title_accent: '知识', description: '关于护肤、半永久化妆和 2026 美容趋势的深度文章。', read_more: '阅读更多', view_all: '查看所有文章 →', back_to_all: '← 所有文章', author_label: '作者', cta_heading: '还有疑问？', cta_heading_accent: '马上咨询！', cta_description: '通过 WhatsApp/Zalo/Instagram 联系我获取免费咨询。15 分钟内回复。', cta_button: '预约咨询 ♡' },
  faq: { label: '❓ 常见问题', title: '常见', title_accent: '问题', description: '我整理了 8 个最常见的问题。还有其他疑问？随时联系我 ♡', items: [
    { q: 'PMU 痛吗？', a: '我会在术前 30 分钟敷麻膏，所以感觉只是轻微刺痛，像蚂蚁咬一样。大多数客户说他们可以睡过去。' },
    { q: '雾眉能维持多久？', a: '通常 2-3 年，取决于肤质和护理方式。1 年内免费补色。' },
    { q: 'PMU 后需要避免什么？', a: '前 7 天避免阳光、水和化妆品接触术后区域。我会发送详细的术后护理说明。' },
    { q: '可以选择眉形吗？', a: '可以！我提供一对一咨询：面部分析、推荐眉形、术前预先描画。' },
    { q: '色乳安全吗？', a: '我使用韩国进口的有机色乳，FDA 认证。对敏感肌肤绝对安全。' },
    { q: '术后立即上色吗？', a: '术后颜色会比最终效果深 30-40%。7-10 天后皮肤脱皮，呈现真实颜色。1 个月后颜色稳定。' },
    { q: '保留预约需要多少押金？', a: '500,000 越南盾通过银行转账。访问时从总价中扣除。提前 24 小时以上取消可退款。' },
    { q: '接受国际客户吗？', a: '是的！我专门接待俄罗斯、韩国和日本客户。支持 8 种语言，可提供翻译。' },
  ]},
  booking: { label: '📅 一键预约', title: '预约您的', title_accent: '光彩', description: '填写表格并选择联系渠道 — 系统将打开 WhatsApp / Zalo / Instagram，预约消息已预先填写。15 分钟内回复。', note: '💡 注意：Zalo 和 Instagram 暂不支持消息预填充。预约内容将自动复制到剪贴板 — 打开应用后粘贴到聊天框即可。', field_name: '全名 *', placeholder_name: 'Li Mei', field_phone: '电话号码 *', field_service: '服务', field_date: '日期 *', field_time: '时间', field_note: '备注（选填）', field_note_placeholder: '我想咨询关于...', choose_channel: '选择联系渠道：', error_name: '请输入您的姓名。', error_phone: '请输入您的电话号码。', error_phone_invalid: '电话号码无效。请输入 8-15 位数字。', error_date: '请选择日期。' },
  cta: { ready: '准备好', ready_accent: '绽放了吗？', description: '免费咨询预约 — 15 分钟内通过 WhatsApp / Zalo / Instagram 回复。', book_now: '立即预约 ♡' },
  footer: { tagline: 'PMU & SKIN — 半永久化妆和皮肤护理。欧洲标准技术、面相学眉形设计、招牌唇釉和风水痣纹绣。', about_title: '工作室', services_title: '服务', contact_title: '联系', about_us: '关于 Cẩm Vân', portfolio_link: '作品集', blog_link: '博客', address: '23 An Thượng 18, 岘港, 越南', copyright: '© 2026 CAMI VAN ✿ 由 {DANALINK} 开发' },
  service_detail: { back_to_all: '← 所有服务', book_via_wa: '📱 通过 WhatsApp 预约', why_choose: '为什么选择', process_title: '工作', process_accent: '流程', aftercare_title: '📋 术后护理指南', faq_title: '❓ 常见问题', ready_to: '准备好做', ready_description: '通过 WhatsApp / Zalo 免费咨询。15 分钟内回复。', book_now: '立即预约 ♡' },
  ui_v2: {
    nav_book_aria: '打开预约表单', nav_theme_toggle: '切换浅色/深色', nav_haptic_toggle: '开启/关闭触感反馈',
    hero_consult_chip: '💬 免费一对一咨询',
    booking_badge_fastest: '回复最快', booking_time_tooltip: '💡 Cẩm Vân 老师会在聊天中确认具体时间。',
    ba_label: '✨ 前后对比', ba_title: '蜕变的', ba_title_accent: '瞬间', ba_description: '滑动查看差异 — 每一处细节都精心打造。',
    ba_before: '前', ba_after: '后', ba_drag_hint: '滑动比较', ba_demo_note: '📷 示意图 — 实际效果因肤质而异。',
    fam_call: '电话', fam_chat: '消息', fam_maps: '地图',
    lb_close: '关闭', lb_prev: '上一张', lb_next: '下一张', lb_viewer: '图片预览',
    toast_redirecting: '正在打开应用…', toast_error: '出错了，请重试。', toast_copied: '预约内容已复制 — 在聊天中粘贴即可 ✨',
  },
};

const JA: Dict = {
  nav: { services: 'サービス', portfolio: 'ポートフォリオ', blog: 'ブログ', faq: 'よくある質問', about: '私について', book: '予約する ✨' },
  hero: { badge: '5月の予約受付中', title_line1: 'すべての顔は', title_accent: '唯一無二の花', title_line2: 'です。', description: 'CAMI VAN PMU & SKIN — ヨーロッパ基準の技術。人相学に基づく眉デザイン、シグネチャーリップブラッシュ、そして特別な風水ほくろアートメイク。自然で — 魅力的で — 唯一無二。', cta_book: '無料相談 →', cta_view: 'ポートフォリオ ♡', stat_clients: '2,500人以上のお客様', stat_years: '7年の実績', stat_rating: '4.9/5 評価', stat_reviews: 'Google レビュー' },
  brands: { microblading: 'マイクロブレーディング', lip: 'リップブラッシュ', eyeliner: 'PMUアイライン', lash: 'まつげエクステ', nail: 'ネイルアート', skin: 'スキンケア' },
  services_section: { label: '✿ サービス', title: '最も優しい方法で', title_accent: '美を讃える', description: '6つのシグネチャーサービス — それぞれがあなたのユニークな特徴を引き立てます。' },
  services: {
    microblading: { name: 'マイクロブレーディング眉', subtitle: '自然な毛流れ', desc: '一本一本自然な眉毛。濃すぎず、薄すぎず。モデルのように完璧。' },
    lip: { name: 'リップブラッシュ', subtitle: 'ふっくら魅力的', desc: '自然なベリー色のふっくらした唇 — まるで新鮮ないちごを食べたばかりのよう。' },
    eyeliner: { name: 'PMUアイライン', subtitle: '24時間魅惑の瞳', desc: '繊細なアイライン。毎朝メイクする必要なし。' },
    lash: { name: 'まつげエクステ', subtitle: '自然なカール＆ボリューム', desc: 'ふさふさで自然にカールしたまつげ。Classic、Volume、Hybrid。' },
    nail: { name: 'ネイルアート', subtitle: 'カスタムデザイン', desc: 'ミニマル、ロマンチック、ボヘミアンスタイル。' },
    skin: { name: 'スキンケア', subtitle: '自然なツヤ', desc: 'プレミアムフェイシャル。健康的で自然に輝く肌。' },
    price_from: 'から',
    view_more: '詳細を見る →',
  },
  gallery: { label: '♡ ポートフォリオ', title: '最近の', title_accent: '作品', description: 'サービスでフィルターしてビフォー/アフターを表示 — すべて実際のお客様の写真です。', filter_all: 'すべて', filter_brow: '眉', filter_lip: '唇', filter_eye: 'アイライン', filter_lash: 'まつげ', filter_nail: 'ネイル' },
  about: { label: '✿ Cẩm Vânに会う', title: 'こんにちは、私は', title_accent: 'Cẩm Vân', greeting: 'パーマネントメイクを愛するのは、私のもとに来るすべての女性に固有の物語があるから — そして私の使命は、彼女が最も美しい自分を感じられるようにすること。', intro_p1: '7年と2,500人以上のお客様を経て、美しさは変えることではなく、讃えることだと理解しました。', intro_p2: 'CAMI VANのお客様一人ひとりに、1対1のカウンセリング、顔分析、パーソナライズされた提案を行います。', signature_role: '創設者 · PMUアーティスト · 美容愛好家', cert_title: '国際認定', cert_desc: 'IBD、Phibrows、Daria', equip_title: 'プレミアム機器', equip_desc: '韓国・ドイツ製', ink_title: 'オーガニックインク', ink_desc: '100%安全', warranty_title: '2年保証', warranty_desc: '無料リタッチ' },
  reviews: { label: '★ レビュー', title: 'お客様の', title_accent: '声', description: '2,500人以上のお客様にご信頼いただいています。{GMAPSLINK} の本物のレビュー。' },
  blog: { label: '📝 ブログ', title: '美容', title_accent: '知識', description: 'スキンケア、パーマネントメイク、2026年の美容トレンドに関する詳細な記事。', read_more: '続きを読む', view_all: 'すべての記事を見る →', back_to_all: '← すべての記事', author_label: '著者', cta_heading: 'ご質問は？', cta_heading_accent: 'お気軽にどうぞ！', cta_description: 'WhatsApp/Zalo/Instagramでご連絡ください。無料相談、15分以内に返信。', cta_button: '相談を予約 ♡' },
  faq: { label: '❓ よくある質問', title: 'よくある', title_accent: '質問', description: '8つのよくある質問をまとめました。他にご質問は？お気軽にメッセージを ♡', items: [
    { q: 'PMUは痛いですか？', a: '施術前に30分間麻酔クリームを塗布するので、感覚は蟻に刺されたような軽い痺れだけです。ほとんどのお客様が眠れたとおっしゃいます。' },
    { q: 'マイクロブレーディングはどのくらい持ちますか？', a: '通常2〜3年、肌質とアフターケアによります。1年以内のリタッチは無料。' },
    { q: 'PMU後の注意点は？', a: '最初の7日間は施術部位への日光、水、化粧品を避けてください。詳しいアフターケア手順をお送りします。' },
    { q: '形は選べますか？', a: 'はい！1対1のカウンセリングを提供：顔分析、推奨形状、施術前のプレビュー描画。' },
    { q: 'インクは安全ですか？', a: '韓国から輸入されたFDA認証のオーガニックインクを使用。敏感肌にも完全に安全。' },
    { q: '施術後すぐ色は出ますか？', a: '施術後、色は最終仕上がりの30〜40%濃く見えます。7〜10日後に皮膚が剥けて本来の色が現れ、1ヶ月後に色が安定します。' },
    { q: '予約に必要な前金は？', a: '500,000ベトナムドンを銀行振込で。来店時に総額から差し引かれます。24時間以上前のキャンセルは返金可能。' },
    { q: '海外のお客様も受け付けていますか？', a: 'はい！ロシア、韓国、日本のお客様を専門としています。8言語対応、通訳もご利用可能。' },
  ]},
  booking: { label: '📅 1クリック予約', title: 'あなたの', title_accent: '輝きを予約', description: 'フォームに記入してチャネルを選択すると、ご予約内容が事前入力された WhatsApp / Zalo / Instagram が開きます。15 分以内に返信いたします。', note: '💡 ご注意：Zalo と Instagram はメッセージの事前入力に対応していません。ご予約内容は自動的にクリップボードにコピーされますので、アプリを開いた後にメッセージ欄に貼り付けてください。', field_name: '氏名 *', placeholder_name: 'Sakura Tanaka', field_phone: '電話番号 *', field_service: 'サービス', field_date: '日付 *', field_time: '時間', field_note: 'メモ（任意）', field_note_placeholder: 'お問い合わせ内容...', choose_channel: '連絡チャンネルを選択：', error_name: '氏名を入力してください。', error_phone: '電話番号を入力してください。', error_phone_invalid: '電話番号が無効です。8〜15桁の数字を入力してください。', error_date: '日付を選択してください。' },
  cta: { ready: '輝く', ready_accent: '準備はできましたか？', description: '無料相談予約 — WhatsApp / Zalo / Instagramで15分以内に返信。', book_now: '今すぐ予約 ♡' },
  footer: { tagline: 'PMU & SKIN — パーマネントメイク＆スキンケア。ヨーロッパ基準の技術、人相学眉デザイン、シグネチャーリップブラッシュ、風水ほくろアートメイク。', about_title: 'スタジオ', services_title: 'サービス', contact_title: 'お問い合わせ', about_us: 'Cẩm Vânについて', portfolio_link: 'ポートフォリオ', blog_link: 'ブログ', address: '23 An Thượng 18, ダナン, ベトナム', copyright: '© 2026 CAMI VAN ✿ {DANALINK} が開発' },
  service_detail: { back_to_all: '← すべてのサービス', book_via_wa: '📱 WhatsAppで予約', why_choose: 'なぜ選ぶ', process_title: '施術', process_accent: 'プロセス', aftercare_title: '📋 アフターケアガイド', faq_title: '❓ よくある質問', ready_to: '受ける準備', ready_description: 'WhatsApp / Zaloで無料相談。15分以内に返信。', book_now: '今すぐ予約 ♡' },
  ui_v2: {
    nav_book_aria: '予約フォームを開く', nav_theme_toggle: 'ライト/ダーク切替', nav_haptic_toggle: '触覚フィードバック切替',
    hero_consult_chip: '💬 無料1対1カウンセリング',
    booking_badge_fastest: '最速返信', booking_time_tooltip: '💡 Cẩm Vânがチャットで正確な時間を確認します。',
    ba_label: '✨ ビフォー＆アフター', ba_title: '変身の', ba_title_accent: '瞬間', ba_description: 'ドラッグして違いを確認 — どの細部もこだわって仕上げました。',
    ba_before: 'BEFORE', ba_after: 'AFTER', ba_drag_hint: 'ドラッグして比較', ba_demo_note: '📷 デモ画像 — 実際の結果は肌質により異なります。',
    fam_call: '電話', fam_chat: 'メッセージ', fam_maps: '地図',
    lb_close: '閉じる', lb_prev: '前の画像', lb_next: '次の画像', lb_viewer: '画像ビューア',
    toast_redirecting: 'アプリを開いています…', toast_error: 'エラーが発生しました。もう一度お試しください。', toast_copied: '予約内容をコピーしました — チャットに貼り付けてください ✨',
  },
};

const KO: Dict = {
  nav: { services: '서비스', portfolio: '포트폴리오', blog: '블로그', faq: 'FAQ', about: '소개', book: '예약하기 ✨' },
  hero: { badge: '5월 예약 진행 중', title_line1: '모든 얼굴은', title_accent: '고유한 꽃', title_line2: '입니다.', description: 'CAMI VAN PMU & SKIN — 유럽 표준 기술. 관상학 기반 눈썹 디자인, 시그니처 립 블러쉬, 그리고 특별한 풍수 점 문신. 자연스럽고 — 매혹적이며 — 독특합니다.', cta_book: '무료 상담 →', cta_view: '포트폴리오 ♡', stat_clients: '2,500+ 고객', stat_years: '7년 경력', stat_rating: '4.9/5 평점', stat_reviews: '구글 리뷰' },
  brands: { microblading: '마이크로블레이딩', lip: '립 블러쉬', eyeliner: '아이라이너 PMU', lash: '속눈썹 연장', nail: '네일 아트', skin: '피부 관리' },
  services_section: { label: '✿ 서비스', title: '가장 부드러운 방식으로', title_accent: '아름다움을 기리다', description: '6가지 시그니처 서비스 — 각각 당신만의 특징을 돋보이게 합니다.' },
  services: {
    microblading: { name: '마이크로블레이딩 눈썹', subtitle: '자연스러운 결', desc: '한 올 한 올 자연스러운 눈썹. 너무 진하지도 너무 흐리지도 않게. 모델처럼 완벽하게.' },
    lip: { name: '립 블러쉬', subtitle: '도톰하고 매혹적', desc: '자연스러운 베리 톤의 도톰한 입술 — 마치 신선한 딸기를 막 먹은 듯한 느낌.' },
    eyeliner: { name: 'PMU 아이라이너', subtitle: '24/7 매혹적인 눈', desc: '섬세한 아이라인. 매일 화장할 필요 없음.' },
    lash: { name: '속눈썹 연장', subtitle: '자연스러운 컬과 볼륨', desc: '풍성하고 자연스럽게 컬링된 속눈썹. Classic, Volume, Hybrid.' },
    nail: { name: '네일 아트', subtitle: '맞춤 디자인', desc: '미니멀, 로맨틱, 보헤미안 스타일.' },
    skin: { name: '피부 관리', subtitle: '자연스러운 광채', desc: '프리미엄 페이셜. 건강하고 자연스럽게 빛나는 피부.' },
    price_from: '시작가',
    view_more: '자세히 보기 →',
  },
  gallery: { label: '♡ 포트폴리오', title: '최근', title_accent: '작업', description: '서비스별로 필터링하여 비포/애프터를 확인하세요 — 모든 사진은 실제 고객의 사진입니다.', filter_all: '전체', filter_brow: '눈썹', filter_lip: '입술', filter_eye: '아이라이너', filter_lash: '속눈썹', filter_nail: '네일' },
  about: { label: '✿ Cẩm Vân 만나기', title: '안녕하세요, 저는', title_accent: 'Cẩm Vân', greeting: '저에게 오는 모든 여성에게는 고유한 이야기가 있기에 반영구 메이크업을 사랑합니다 — 그리고 제 사명은 그녀가 가장 아름다운 자신을 느끼도록 돕는 것입니다.', intro_p1: '7년과 2,500명 이상의 고객을 거치며, 아름다움은 변화시키는 것이 아니라 기리는 것임을 깨달았습니다.', intro_p2: 'CAMI VAN의 모든 고객은 1:1 상담, 얼굴 분석, 맞춤형 추천을 받습니다.', signature_role: '창립자 · PMU 아티스트 · 뷰티 애호가', cert_title: '국제 인증', cert_desc: 'IBD, Phibrows, Daria', equip_title: '프리미엄 장비', equip_desc: '한국, 독일 수입', ink_title: '유기농 잉크', ink_desc: '100% 안전', warranty_title: '2년 보증', warranty_desc: '무료 리터치' },
  reviews: { label: '★ 리뷰', title: '고객들의', title_accent: '진심 어린 후기', description: '2,500명 이상의 고객이 신뢰합니다. {GMAPSLINK}의 진짜 리뷰.' },
  blog: { label: '📝 블로그', title: '뷰티', title_accent: '지식', description: '피부 관리, 반영구 메이크업, 2026 뷰티 트렌드에 대한 심층 기사.', read_more: '자세히 보기', view_all: '모든 게시물 보기 →', back_to_all: '← 모든 게시물', author_label: '저자', cta_heading: '궁금한 점이 있나요?', cta_heading_accent: '바로 문의하세요!', cta_description: 'WhatsApp/Zalo/Instagram으로 메시지 주시면 무료 상담해드립니다. 15분 이내 답변.', cta_button: '상담 예약 ♡' },
  faq: { label: '❓ FAQ', title: '자주 묻는', title_accent: '질문', description: '가장 자주 묻는 8가지 질문을 정리했습니다. 다른 궁금한 점이 있으면 메시지 주세요 ♡', items: [
    { q: 'PMU는 아픈가요?', a: '시술 30분 전에 마취 크림을 발라드리므로 개미에게 물린 듯한 가벼운 느낌만 있습니다. 대부분의 고객이 잠들 수 있을 정도라고 말씀하십니다.' },
    { q: '마이크로블레이딩은 얼마나 지속되나요?', a: '피부 타입과 관리에 따라 일반적으로 2-3년. 1년 이내 무료 리터치 제공.' },
    { q: 'PMU 후 피해야 할 것은?', a: '첫 7일간은 시술 부위에 햇빛, 물, 화장품 접촉을 피하세요. 자세한 사후 관리 안내를 보내드립니다.' },
    { q: '눈썹 모양을 선택할 수 있나요?', a: '네! 1:1 상담 제공: 얼굴 분석, 추천 모양, 시술 전 미리 그려보기.' },
    { q: '잉크는 안전한가요?', a: '한국 수입 유기농 FDA 인증 잉크 사용. 민감성 피부에도 완전 안전.' },
    { q: '시술 후 바로 색이 보이나요?', a: '시술 후 색상은 최종보다 30-40% 진하게 보입니다. 7-10일 후 피부가 벗겨지고 진짜 색이 나타나며, 1개월 후 색이 안정됩니다.' },
    { q: '예약 보증금은?', a: '계좌이체로 50만 동. 방문 시 총액에서 차감. 24시간 이상 전 취소 시 환불.' },
    { q: '해외 고객도 받나요?', a: '네! 러시아, 한국, 일본 고객 전문. 8개 언어 지원, 통역사 가능.' },
  ]},
  booking: { label: '📅 원클릭 예약', title: '당신의', title_accent: '빛남을 예약', description: '양식을 작성하고 채널을 선택하면 예약 메시지가 미리 작성된 WhatsApp / Zalo / Instagram이 열립니다. 15분 이내 답변드립니다.', note: '💡 안내: Zalo와 Instagram은 메시지 자동 채우기를 지원하지 않습니다. 예약 내용이 클립보드에 자동 복사되므로 앱을 연 후 메시지 입력창에 붙여넣어 주세요.', field_name: '성함 *', placeholder_name: 'Kim Min-ji', field_phone: '전화번호 *', field_service: '서비스', field_date: '날짜 *', field_time: '시간', field_note: '메모 (선택)', field_note_placeholder: '문의하고 싶은 내용...', choose_channel: '메시지 채널 선택:', error_name: '성함을 입력해주세요.', error_phone: '전화번호를 입력해주세요.', error_phone_invalid: '잘못된 전화번호입니다. 8-15자리 숫자를 입력해주세요.', error_date: '날짜를 선택해주세요.' },
  cta: { ready: '빛날', ready_accent: '준비되셨나요?', description: '무료 상담 예약 — WhatsApp / Zalo / Instagram을 통해 15분 이내 답변.', book_now: '지금 예약 ♡' },
  footer: { tagline: 'PMU & SKIN — 반영구 메이크업 & 피부 관리. 유럽 표준 기술, 관상학 눈썹 디자인, 시그니처 립 블러쉬, 풍수 점 문신.', about_title: '스튜디오', services_title: '서비스', contact_title: '문의', about_us: 'Cẩm Vân 소개', portfolio_link: '포트폴리오', blog_link: '블로그', address: '23 An Thượng 18, 다낭, 베트남', copyright: '© 2026 CAMI VAN ✿ {DANALINK} 개발' },
  service_detail: { back_to_all: '← 모든 서비스', book_via_wa: '📱 WhatsApp으로 예약', why_choose: '왜 선택', process_title: '시술', process_accent: '과정', aftercare_title: '📋 사후 관리 가이드', faq_title: '❓ 자주 묻는 질문', ready_to: '받을 준비', ready_description: 'WhatsApp / Zalo로 무료 상담. 15분 이내 답변.', book_now: '지금 예약 ♡' },
  ui_v2: {
    nav_book_aria: '예약 양식 열기', nav_theme_toggle: '라이트/다크 전환', nav_haptic_toggle: '햅틱 피드백 켜기/끄기',
    hero_consult_chip: '💬 무료 1:1 상담',
    booking_badge_fastest: '가장 빠름', booking_time_tooltip: '💡 Cẩm Vân님이 채팅으로 정확한 시간을 확인해 드립니다.',
    ba_label: '✨ 비포 & 애프터', ba_title: '변신의', ba_title_accent: '순간', ba_description: '드래그하여 차이를 확인하세요 — 모든 디테일을 정성껏 다듬었습니다.',
    ba_before: '비포', ba_after: '애프터', ba_drag_hint: '드래그하여 비교', ba_demo_note: '📷 데모 이미지 — 실제 결과는 피부 타입에 따라 다를 수 있습니다.',
    fam_call: '전화', fam_chat: '메시지', fam_maps: '지도',
    lb_close: '닫기', lb_prev: '이전 사진', lb_next: '다음 사진', lb_viewer: '이미지 뷰어',
    toast_redirecting: '앱을 여는 중…', toast_error: '오류가 발생했습니다. 다시 시도해 주세요.', toast_copied: '예약 내용이 복사되었습니다 — 채팅에 붙여넣으세요 ✨',
  },
};

const FR: Dict = {
  nav: { services: 'Services', portfolio: 'Portfolio', blog: 'Blog', faq: 'FAQ', about: 'À propos', book: 'Réserver ✨' },
  hero: { badge: 'Réservations de mai ouvertes', title_line1: 'Chaque visage est', title_accent: 'une fleur unique', title_line2: 'à part entière.', description: "CAMI VAN PMU & SKIN — technique aux normes européennes. Design des sourcils selon la physiognomonie, lip blush signature, et tatouage des grains de beauté selon le feng shui. Naturel — séduisant — unique.", cta_book: 'Consultation gratuite →', cta_view: 'Voir portfolio ♡', stat_clients: '2 500+ clients', stat_years: 'En 7 ans', stat_rating: 'Note 4,9/5', stat_reviews: 'Avis Google' },
  brands: { microblading: 'Microblading', lip: 'Lip Blush', eyeliner: 'Eyeliner PMU', lash: 'Extensions de cils', nail: 'Nail Art', skin: 'Soin de la peau' },
  services_section: { label: '✿ Services', title: 'Célébrer la beauté', title_accent: 'avec douceur', description: '6 services signature — chacun conçu pour mettre en valeur vos traits uniques.' },
  services: {
    microblading: { name: 'Microblading des sourcils', subtitle: 'Traits naturels', desc: 'Sourcils poil par poil, naturels. Ni trop foncés. Ni trop doux. Parfaits comme un mannequin.' },
    lip: { name: 'Lip Blush', subtitle: 'Pulpeux et séduisant', desc: 'Lèvres pulpeuses aux tons baies naturels, comme si vous veniez de manger une fraise fraîche.' },
    eyeliner: { name: 'Eyeliner PMU', subtitle: 'Yeux captivants 24/7', desc: 'Eyeliner raffiné. Plus besoin de se maquiller chaque matin.' },
    lash: { name: 'Extensions de cils', subtitle: 'Courbe et volume naturels', desc: 'Cils pleins, naturellement courbés. Classic, Volume, Hybrid.' },
    nail: { name: 'Nail Art', subtitle: 'Design personnalisé', desc: 'Styles minimalistes, romantiques, bohèmes.' },
    skin: { name: 'Soin de la peau', subtitle: 'Éclat naturel', desc: 'Soin facial premium. Peau saine et naturellement éclatante.' },
    price_from: 'À partir de',
    view_more: 'En savoir plus →',
  },
  gallery: { label: '♡ Portfolio', title: 'Travaux', title_accent: 'récents', description: 'Filtrez par service pour voir le avant/après — toutes les photos sont de vraies clientes.', filter_all: 'Tout', filter_brow: 'Sourcils', filter_lip: 'Lèvres', filter_eye: 'Eyeliner', filter_lash: 'Cils', filter_nail: 'Ongles' },
  about: { label: '✿ Rencontrer Cẩm Vân', title: 'Bonjour, je suis', title_accent: 'Cẩm Vân', greeting: "J'aime le maquillage permanent car chaque femme qui vient à moi a une histoire unique — et ma mission est de l'aider à se sentir la plus belle version d'elle-même.", intro_p1: "Après 7 ans et plus de 2 500 clientes, je comprends que la beauté ne consiste pas à changer — mais à célébrer.", intro_p2: 'Chaque cliente de CAMI VAN bénéficie d\'une consultation 1:1, d\'une analyse du visage et de recommandations personnalisées.', signature_role: 'Fondatrice · Artiste PMU · Passionnée de beauté', cert_title: 'Certifications internationales', cert_desc: 'IBD, Phibrows, Daria', equip_title: 'Équipement premium', equip_desc: 'Importé de Corée, Allemagne', ink_title: 'Encre organique', ink_desc: '100% sûre', warranty_title: 'Garantie 2 ans', warranty_desc: 'Retouches gratuites' },
  reviews: { label: '★ Avis', title: 'Ce que disent', title_accent: 'nos clientes', description: "Plus de 2 500 clientes nous font confiance. Vrais avis sur {GMAPSLINK}." },
  blog: { label: '📝 Blog', title: 'Connaissances', title_accent: 'beauté', description: 'Articles approfondis sur les soins de la peau, le maquillage permanent et les tendances beauté 2026.', read_more: 'Lire la suite', view_all: 'Voir tous les articles →', back_to_all: '← Tous les articles', author_label: 'Auteur', cta_heading: 'Des questions ?', cta_heading_accent: 'Demandez !', cta_description: "Contactez-moi sur WhatsApp/Zalo/Instagram pour une consultation gratuite. Réponse en 15 minutes.", cta_button: 'Réserver une consultation ♡' },
  faq: { label: '❓ FAQ', title: 'Questions', title_accent: 'fréquentes', description: "J'ai compilé les 8 questions les plus fréquentes. Autre chose ? Envoyez-moi un message ♡", items: [
    { q: 'Le PMU est-il douloureux ?', a: "J'applique une crème anesthésiante pendant 30 minutes avant — la sensation est juste un léger picotement comme une morsure de fourmi. La plupart des clientes disent qu'elles pourraient s'endormir." },
    { q: 'Combien de temps dure le microblading ?', a: 'Généralement 2-3 ans selon le type de peau et les soins. Retouches gratuites dans l\'année.' },
    { q: 'Que faut-il éviter après le PMU ?', a: "Pendant les 7 premiers jours, évitez le soleil, l'eau et les cosmétiques sur la zone traitée. J'enverrai des instructions détaillées." },
    { q: 'Puis-je choisir le style/la forme ?', a: "Oui ! Je propose une consultation 1:1 : analyse du visage, formes recommandées, dessin d'aperçu avant la procédure." },
    { q: "L'encre est-elle sûre ?", a: "J'utilise de l'encre organique importée de Corée, certifiée FDA. Absolument sûre pour les peaux sensibles." },
    { q: 'La couleur apparaîtra-t-elle tout de suite ?', a: 'Après la procédure, la couleur paraîtra 30-40% plus foncée. Après 7-10 jours, la peau pèle et la vraie couleur apparaît. Après 1 mois, la couleur se stabilise.' },
    { q: 'Combien pour réserver un créneau ?', a: '500 000 VND par virement bancaire. Déduit du total à votre visite. Remboursable si annulé 24h+ avant.' },
    { q: 'Acceptez-vous les clientes internationales ?', a: 'Oui ! Je me spécialise dans les clientes russes, coréennes et japonaises. 8 langues supportées, traducteur disponible.' },
  ]},
  booking: { label: '📅 Réservation 1-clic', title: 'Réservez votre', title_accent: 'éclat', description: "Remplissez le formulaire et choisissez un canal — WhatsApp / Zalo / Instagram s'ouvrira avec votre message de réservation pré-rempli. Réponse en 15 minutes.", note: "💡 Note : Zalo et Instagram ne supportent pas le pré-remplissage. Le message de réservation est automatiquement copié dans votre presse-papiers — il suffit de le coller dans la zone de message après avoir ouvert l'application.", field_name: 'Nom complet *', placeholder_name: 'Marie Dubois', field_phone: 'Numéro de téléphone *', field_service: 'Service', field_date: 'Date *', field_time: 'Heure', field_note: 'Note (optionnel)', field_note_placeholder: "Je voudrais demander à propos de...", choose_channel: 'Choisir le canal :', error_name: 'Veuillez entrer votre nom.', error_phone: 'Veuillez entrer votre numéro.', error_phone_invalid: 'Numéro invalide. Entrez 8 à 15 chiffres.', error_date: 'Veuillez sélectionner une date.' },
  cta: { ready: 'Prête à', ready_accent: 'briller ?', description: 'Consultation gratuite — réponse en 15 minutes via WhatsApp / Zalo / Instagram.', book_now: 'Réserver ♡' },
  footer: { tagline: "PMU & SKIN — Maquillage permanent et soin de la peau. Technologie aux normes européennes, design des sourcils selon la physiognomonie, lip blush signature, et tatouage des grains de beauté feng shui.", about_title: 'Studio', services_title: 'Services', contact_title: 'Contact', about_us: 'À propos de Cẩm Vân', portfolio_link: 'Portfolio', blog_link: 'Blog', address: '23 An Thượng 18, Đà Nẵng, Vietnam', copyright: '© 2026 CAMI VAN ✿ Développé par {DANALINK}' },
  service_detail: { back_to_all: '← Tous les services', book_via_wa: '📱 Réserver via WhatsApp', why_choose: 'Pourquoi choisir', process_title: 'Comment ça', process_accent: 'fonctionne', aftercare_title: '📋 Guide post-procédure', faq_title: '❓ Questions fréquentes', ready_to: 'Prête pour', ready_description: 'Consultation gratuite via WhatsApp / Zalo. Réponse en 15 minutes.', book_now: 'Réserver ♡' },
  ui_v2: {
    nav_book_aria: 'Ouvrir le formulaire de réservation', nav_theme_toggle: 'Basculer clair/sombre', nav_haptic_toggle: 'Activer/désactiver le retour haptique',
    hero_consult_chip: '💬 Consultation gratuite 1-à-1',
    booking_badge_fastest: 'Le plus rapide', booking_time_tooltip: "💡 Cẩm Vân confirmera l'horaire exact via le chat.",
    ba_label: '✨ Avant & Après', ba_title: 'Un instant de', ba_title_accent: 'transformation', ba_description: 'Faites glisser pour révéler la différence — chaque détail soigneusement façonné.',
    ba_before: 'AVANT', ba_after: 'APRÈS', ba_drag_hint: 'Glisser pour comparer', ba_demo_note: '📷 Image démo — les résultats réels peuvent varier selon le type de peau.',
    fam_call: 'Appeler', fam_chat: 'Message', fam_maps: 'Carte',
    lb_close: 'Fermer', lb_prev: 'Image précédente', lb_next: 'Image suivante', lb_viewer: "Visionneuse d'images",
    toast_redirecting: "Ouverture de l'application…", toast_error: 'Une erreur est survenue. Réessayez.', toast_copied: 'Message de réservation copié — collez-le dans le chat ✨',
  },
};

const ES: Dict = {
  nav: { services: 'Servicios', portfolio: 'Portfolio', blog: 'Blog', faq: 'FAQ', about: 'Sobre mí', book: 'Reservar ✨' },
  hero: { badge: 'Reservas de mayo abiertas', title_line1: 'Cada rostro es', title_accent: 'una flor única', title_line2: 'en sí mismo.', description: "CAMI VAN PMU & SKIN — técnica de estándar europeo. Diseño de cejas según fisiognomía, lip blush distintivo y tatuaje de lunares feng shui. Natural — seductor — único.", cta_book: 'Consulta gratis →', cta_view: 'Ver portfolio ♡', stat_clients: '2.500+ clientes', stat_years: 'En 7 años', stat_rating: 'Valoración 4,9/5', stat_reviews: 'Reseñas de Google' },
  brands: { microblading: 'Microblading', lip: 'Lip Blush', eyeliner: 'Delineador PMU', lash: 'Extensiones de pestañas', nail: 'Nail Art', skin: 'Cuidado de la piel' },
  services_section: { label: '✿ Servicios', title: 'Celebrar la belleza', title_accent: 'de la manera más suave', description: '6 servicios distintivos — cada uno diseñado para realzar tus rasgos únicos.' },
  services: {
    microblading: { name: 'Microblading de cejas', subtitle: 'Trazos naturales', desc: 'Cejas pelo a pelo, con aspecto natural. Ni demasiado intensas. Ni demasiado suaves. Perfectas como las de una modelo.' },
    lip: { name: 'Lip Blush', subtitle: 'Voluminoso y seductor', desc: 'Labios voluminosos en tonos baya naturales, como si acabaras de comer una fresa fresca.' },
    eyeliner: { name: 'Delineador PMU', subtitle: 'Ojos cautivadores 24/7', desc: 'Delineador refinado. No necesitas maquillarte cada mañana.' },
    lash: { name: 'Extensiones de pestañas', subtitle: 'Curvatura y volumen naturales', desc: 'Pestañas tupidas, naturalmente curvadas. Classic, Volume, Hybrid.' },
    nail: { name: 'Nail Art', subtitle: 'Diseño personalizado', desc: 'Estilos minimalistas, románticos, bohemios.' },
    skin: { name: 'Cuidado de la piel', subtitle: 'Brillo natural', desc: 'Tratamiento facial premium. Piel sana, naturalmente luminosa.' },
    price_from: 'Desde',
    view_more: 'Saber más →',
  },
  gallery: { label: '♡ Portfolio', title: 'Trabajos', title_accent: 'recientes', description: 'Filtra por servicio para ver el antes/después de cada tipo — todas las fotos son de clientas reales.', filter_all: 'Todo', filter_brow: 'Cejas', filter_lip: 'Labios', filter_eye: 'Delineador', filter_lash: 'Pestañas', filter_nail: 'Uñas' },
  about: { label: '✿ Conoce a Cẩm Vân', title: 'Hola, soy', title_accent: 'Cẩm Vân', greeting: 'Amo el maquillaje permanente porque cada mujer que viene a mí tiene una historia única — y mi misión es ayudarle a sentirse la más bella versión de sí misma.', intro_p1: 'Después de 7 años y más de 2.500 clientas, entiendo que la belleza no se trata de cambiar — sino de celebrar.', intro_p2: 'Cada clienta en CAMI VAN recibe una consulta 1:1, análisis facial y recomendaciones personalizadas.', signature_role: 'Fundadora · Artista PMU · Apasionada de la belleza', cert_title: 'Certificaciones internacionales', cert_desc: 'IBD, Phibrows, Daria', equip_title: 'Equipamiento premium', equip_desc: 'Importado de Corea, Alemania', ink_title: 'Tinta orgánica', ink_desc: '100% segura', warranty_title: 'Garantía de 2 años', warranty_desc: 'Retoques gratis' },
  reviews: { label: '★ Reseñas', title: 'Lo que dicen', title_accent: 'nuestras clientas', description: 'Más de 2.500 clientas nos han confiado. Reseñas reales en {GMAPSLINK}.' },
  blog: { label: '📝 Blog', title: 'Conocimiento', title_accent: 'de belleza', description: 'Artículos en profundidad sobre cuidado de la piel, maquillaje permanente y tendencias de belleza 2026.', read_more: 'Leer más', view_all: 'Ver todos los artículos →', back_to_all: '← Todos los artículos', author_label: 'Autora', cta_heading: '¿Alguna pregunta?', cta_heading_accent: '¡Pregunta ya!', cta_description: 'Escríbeme por WhatsApp/Zalo/Instagram para una consulta gratis. Respuesta en 15 minutos.', cta_button: 'Reservar consulta ♡' },
  faq: { label: '❓ FAQ', title: 'Preguntas', title_accent: 'frecuentes', description: 'He recopilado las 8 preguntas más comunes. ¿Algo más? Envíame un mensaje ♡', items: [
    { q: '¿Duele el PMU?', a: 'Aplico crema anestésica durante 30 minutos antes, así que la sensación es solo un leve hormigueo como la picadura de una hormiga. La mayoría de clientas dicen que podrían dormirse.' },
    { q: '¿Cuánto dura el microblading?', a: 'Normalmente 2-3 años según el tipo de piel y el cuidado. Retoques gratis durante 1 año.' },
    { q: '¿Qué evitar después del PMU?', a: 'Durante los primeros 7 días, evita el sol, el agua y los cosméticos en la zona tratada. Enviaré instrucciones detalladas.' },
    { q: '¿Puedo elegir el estilo/forma?', a: '¡Sí! Ofrezco consulta 1:1: análisis facial, formas recomendadas, dibujo previo antes del procedimiento.' },
    { q: '¿Es segura la tinta?', a: 'Uso tinta orgánica importada de Corea, certificada por la FDA. Totalmente segura para piel sensible.' },
    { q: '¿Aparecerá el color enseguida?', a: 'Tras el procedimiento, el color se ve 30-40% más oscuro. A los 7-10 días la piel se descama y aparece el color real. Al mes, el color se estabiliza.' },
    { q: '¿Cuánta señal para reservar?', a: '500.000 VND por transferencia bancaria. Se descuenta del total al venir. Reembolsable si se cancela 24h+ antes.' },
    { q: '¿Aceptan clientas internacionales?', a: '¡Sí! Me especializo en clientas rusas, coreanas y japonesas. 8 idiomas soportados, traductor disponible.' },
  ]},
  booking: { label: '📅 Reserva en 1 clic', title: 'Reserva tu', title_accent: 'brillo', description: 'Rellena el formulario y elige un canal — se abrirá WhatsApp / Zalo / Instagram con tu mensaje de reserva pre-rellenado. Respuesta en 15 minutos.', note: '💡 Nota: Zalo e Instagram no admiten mensajes pre-rellenados. El contenido de la reserva se copia automáticamente al portapapeles — solo pégalo en el chat después de abrir la aplicación.', field_name: 'Nombre completo *', placeholder_name: 'María García', field_phone: 'Número de teléfono *', field_service: 'Servicio', field_date: 'Fecha *', field_time: 'Hora', field_note: 'Nota (opcional)', field_note_placeholder: 'Quisiera preguntar sobre...', choose_channel: 'Elige el canal:', error_name: 'Por favor, introduce tu nombre.', error_phone: 'Por favor, introduce tu teléfono.', error_phone_invalid: 'Número inválido. Introduce 8-15 dígitos.', error_date: 'Por favor, selecciona una fecha.' },
  cta: { ready: '¿Lista para', ready_accent: 'brillar?', description: 'Consulta gratis — respuesta en 15 minutos vía WhatsApp / Zalo / Instagram.', book_now: 'Reservar ♡' },
  footer: { tagline: 'PMU & SKIN — Maquillaje permanente y cuidado de la piel. Tecnología de estándar europeo, diseño de cejas según fisiognomía, lip blush distintivo y tatuaje de lunares feng shui.', about_title: 'Estudio', services_title: 'Servicios', contact_title: 'Contacto', about_us: 'Sobre Cẩm Vân', portfolio_link: 'Portfolio', blog_link: 'Blog', address: '23 An Thượng 18, Đà Nẵng, Vietnam', copyright: '© 2026 CAMI VAN ✿ Desarrollado por {DANALINK}' },
  service_detail: { back_to_all: '← Todos los servicios', book_via_wa: '📱 Reservar por WhatsApp', why_choose: 'Por qué elegir', process_title: 'Cómo', process_accent: 'funciona', aftercare_title: '📋 Guía post-tratamiento', faq_title: '❓ Preguntas frecuentes', ready_to: '¿Lista para', ready_description: 'Consulta gratis vía WhatsApp / Zalo. Respuesta en 15 minutos.', book_now: 'Reservar ♡' },
  ui_v2: {
    nav_book_aria: 'Abrir formulario de reserva', nav_theme_toggle: 'Cambiar claro/oscuro', nav_haptic_toggle: 'Activar/desactivar vibración',
    hero_consult_chip: '💬 Consulta gratis 1-a-1',
    booking_badge_fastest: 'Más rápido', booking_time_tooltip: '💡 Cẩm Vân confirmará la hora exacta por chat.',
    ba_label: '✨ Antes y Después', ba_title: 'Un momento de', ba_title_accent: 'transformación', ba_description: 'Arrastra para revelar la diferencia — cada detalle cuidado con esmero.',
    ba_before: 'ANTES', ba_after: 'DESPUÉS', ba_drag_hint: 'Arrastra para comparar', ba_demo_note: '📷 Imagen demo — los resultados reales pueden variar según el tipo de piel.',
    fam_call: 'Llamar', fam_chat: 'Mensaje', fam_maps: 'Mapa',
    lb_close: 'Cerrar', lb_prev: 'Imagen anterior', lb_next: 'Imagen siguiente', lb_viewer: 'Visor de imágenes',
    toast_redirecting: 'Abriendo aplicación…', toast_error: 'Algo salió mal. Inténtalo de nuevo.', toast_copied: 'Mensaje de reserva copiado — pégalo en el chat ✨',
  },
};

export const DICT: Record<Lang, Dict> = { VI, EN, RU, ZH, JA, KO, FR, ES };

const STORAGE_KEY = 'camivan_lang';

/** Detect browser language → return matching Lang or 'EN' as fallback */
export function detectBrowserLang(): Lang {
  if (typeof navigator === 'undefined') return 'EN';

  const browserLangs = (navigator.languages?.length ? navigator.languages : [navigator.language]).map((l) => l.toLowerCase());

  const prefixMap: Record<string, Lang> = {
    vi: 'VI', en: 'EN', ru: 'RU', zh: 'ZH', ja: 'JA', ko: 'KO', fr: 'FR', es: 'ES',
  };

  for (const bl of browserLangs) {
    const prefix = bl.split('-')[0];
    if (prefix in prefixMap) return prefixMap[prefix];
  }

  return 'EN';
}

export function getStoredLang(): Lang | null {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  return null;
}

export function setStoredLang(lang: Lang) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, lang);
  }
}
