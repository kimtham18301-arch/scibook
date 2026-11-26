// Lộ trình Đề Kiểm Tra theo đúng Mục lục SGK KHTN Lớp 6, 7, 8, 9 (Bộ Kết nối tri thức với cuộc sống – Bộ SGK thống nhất toàn quốc theo QĐ 3588/QĐ-BGDĐT).
// Khóa chặt phạm vi kiến thức theo từng giai đoạn Học kì I & Học kì II (Thông tư 22/2021/TT-BGDĐT):
//   [Nửa đầu HK1]  15p Lần 1 -> 15p Lần 2 -> KIỂM TRA GIỮA HỌC KÌ I
//   [Nửa sau HK1]  15p Lần 3 -> 15p Lần 4 -> KIỂM TRA CUỐI HỌC KÌ I
//   [Nửa đầu HK2]  15p Lần 1 -> 15p Lần 2 -> KIỂM TRA GIỮA HỌC KÌ II
//   [Nửa sau HK2]  15p Lần 3 -> 15p Lần 4 -> KIỂM TRA CUỐI HỌC KÌ II
window.KHTN_EXAMS = [
  // =========================================================================
  // LỚP 6 – BÁM SÁT CHƯƠNG I → CHƯƠNG X (BÀI 1 → BÀI 54 SGK)
  // =========================================================================
  {
    id:'l6-tx1-hk1', grade:6, term:'HK1', stage:1, weeks:'Chương I', col:'hk1-tx1', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 1 (HK1): Mở đầu về KHTN & các phép đo',
    scope:'Chương I (Bài 1–8 SGK): An toàn thực hành, kính lúp, kính hiển vi và đo chiều dài, khối lượng, thể tích, thời gian, nhiệt độ',
    topics:['l6-mo-dau']
  },
  {
    id:'l6-tx2-hk1', grade:6, term:'HK1', stage:1, weeks:'Chương II', col:'hk1-tx2', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 2 (HK1): Các thể của chất, Oxygen & Không khí',
    scope:'Chương II (Bài 9–11 SGK): Ba thể của chất, sự chuyển thể, tính chất và vai trò của oxygen, không khí',
    topics:['l6-the-chat','l6-oxy-kk']
  },
  {
    id:'l6-gk1', grade:6, term:'HK1', stage:1, weeks:'Giữa HK1', col:'hk1-gk', coef:2, kind:'gk', minutes:45, count:20,
    title:'Kiểm tra Giữa Học kì I – KHTN Lớp 6',
    scope:'Chương I & Chương II (Bài 1–11 SGK): Mở đầu KHTN, phép đo, các thể của chất, oxygen và không khí',
    topics:['l6-mo-dau','l6-the-chat','l6-oxy-kk']
  },
  {
    id:'l6-tx3-hk1', grade:6, term:'HK1', stage:2, weeks:'Chương III–IV', col:'hk1-tx3', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 3 (HK1): Vật liệu, Nhiên liệu, Thực phẩm & Hỗn hợp',
    scope:'Chương III & IV (Bài 12–17 SGK): Vật liệu, nguyên liệu, nhiên liệu, lương thực – thực phẩm, hỗn hợp và tách chất',
    topics:['l6-vat-lieu','l6-hon-hop']
  },
  {
    id:'l6-tx4-hk1', grade:6, term:'HK1', stage:2, weeks:'Chương V–VI', col:'hk1-tx4', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 4 (HK1): Tế bào & Từ tế bào đến cơ thể',
    scope:'Chương V & VI (Bài 18–24 SGK): Cấu tạo tế bào, sự lớn lên – sinh sản tế bào và các cấp độ tổ chức cơ thể đa bào',
    topics:['l6-te-bao','l6-co-the']
  },
  {
    id:'l6-ck1', grade:6, term:'HK1', stage:2, weeks:'Cuối HK1', col:'hk1-ck', coef:3, kind:'ck', minutes:60, count:24,
    title:'Kiểm tra Cuối Học kì I – KHTN Lớp 6',
    scope:'Trọn Học kì I – Chương I đến Chương VI (Bài 1–24 SGK)',
    topics:['l6-mo-dau','l6-the-chat','l6-oxy-kk','l6-vat-lieu','l6-hon-hop','l6-te-bao','l6-co-the']
  },
  {
    id:'l6-tx1-hk2', grade:6, term:'HK2', stage:3, weeks:'Chương VII', col:'hk2-tx1', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 1 (HK2): Đa dạng thế giới sống',
    scope:'Chương VII (Bài 25–39 SGK): Hệ thống phân loại, khóa lưỡng phân, Vi khuẩn, Virus, Nấm, Thực vật và Động vật',
    topics:['l6-phan-loai']
  },
  {
    id:'l6-tx2-hk2', grade:6, term:'HK2', stage:3, weeks:'Chương VIII', col:'hk2-tx2', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 2 (HK2): Lực trong đời sống',
    scope:'Chương VIII (Bài 40–45 SGK): Biểu diễn lực, biến dạng lò xo, trọng lực P = 10m, lực ma sát và lực cản',
    topics:['l6-luc']
  },
  {
    id:'l6-gk2', grade:6, term:'HK2', stage:3, weeks:'Giữa HK2', col:'hk2-gk', coef:2, kind:'gk', minutes:45, count:20,
    title:'Kiểm tra Giữa Học kì II – KHTN Lớp 6',
    scope:'Chương VII & Chương VIII (Bài 25–45 SGK): Đa dạng thế giới sống và Lực trong đời sống',
    topics:['l6-phan-loai','l6-luc']
  },
  {
    id:'l6-tx3-hk2', grade:6, term:'HK2', stage:4, weeks:'Chương IX', col:'hk2-tx3', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 3 (HK2): Năng lượng & Bảo toàn năng lượng',
    scope:'Chương IX (Bài 46–50 SGK): Các dạng năng lượng, chuyển hóa năng lượng, năng lượng tái tạo và tiết kiệm năng lượng',
    topics:['l6-nang-luong']
  },
  {
    id:'l6-tx4-hk2', grade:6, term:'HK2', stage:4, weeks:'Chương X', col:'hk2-tx4', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 4 (HK2): Trái Đất và bầu trời',
    scope:'Chương X (Bài 51–54 SGK): Chuyển động nhìn thấy của Mặt Trời, Mặt Trăng, nhật thực – nguyệt thực, Hệ Mặt Trời & Ngân Hà',
    topics:['l6-trai-dat']
  },
  {
    id:'l6-ck2', grade:6, term:'HK2', stage:4, weeks:'Cuối HK2', col:'hk2-ck', coef:3, kind:'ck', minutes:60, count:24,
    title:'Kiểm tra Cuối Học kì II – KHTN Lớp 6',
    scope:'Trọn Học kì II – Chương VII đến Chương X (Bài 25–54 SGK)',
    topics:['l6-phan-loai','l6-luc','l6-nang-luong','l6-trai-dat']
  },

  // =========================================================================
  // LỚP 7 – BÁM SÁT MỞ ĐẦU + CHƯƠNG I → CHƯƠNG X (BÀI 1 → BÀI 42 SGK)
  // =========================================================================
  {
    id:'l7-tx1-hk1', grade:7, term:'HK1', stage:1, weeks:'Chương I', col:'hk1-tx1', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 1 (HK1): Nguyên tử & Bảng tuần hoàn',
    scope:'Chương I (Bài 2–4 SGK): Cấu tạo nguyên tử, lớp vỏ electron, nguyên tố hóa học và bảng tuần hoàn',
    topics:['l7-nguyen-tu','l7-bang-tuan-hoan']
  },
  {
    id:'l7-tx2-hk1', grade:7, term:'HK1', stage:1, weeks:'Chương II', col:'hk1-tx2', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 2 (HK1): Phân tử, Liên kết hóa học & Hóa trị',
    scope:'Chương II (Bài 5–7 SGK): Đơn chất, hợp chất, liên kết ion/cộng hóa trị, quy tắc hóa trị và công thức hóa học',
    topics:['l7-phan-tu','l7-hoa-tri']
  },
  {
    id:'l7-15p-hoatri', grade:7, term:'HK1', stage:1, weeks:'Bài 7 SGK', col:null, coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p chuyên đề: Hóa trị, Lập CTHH & % Nguyên tố',
    scope:'Riêng Bài 7 SGK: Rèn kĩ năng lập công thức hóa học và tính phần trăm khối lượng nguyên tố',
    topics:['l7-hoa-tri']
  },
  {
    id:'l7-gk1', grade:7, term:'HK1', stage:1, weeks:'Giữa HK1', col:'hk1-gk', coef:2, kind:'gk', minutes:45, count:20,
    title:'Kiểm tra Giữa Học kì I – KHTN Lớp 7',
    scope:'Mở đầu, Chương I & Chương II (Bài 1–7 SGK): Phương pháp KHTN, Nguyên tử, Bảng tuần hoàn, Phân tử & Hóa trị',
    topics:['l7-phuong-phap','l7-nguyen-tu','l7-bang-tuan-hoan','l7-phan-tu','l7-hoa-tri']
  },
  {
    id:'l7-tx3-hk1', grade:7, term:'HK1', stage:2, weeks:'Chương III', col:'hk1-tx3', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 3 (HK1): Tốc độ & Đồ thị quãng đường – thời gian',
    scope:'Chương III (Bài 8–11 SGK): v = s/t, đổi m/s ↔ km/h, đồ thị s–t và khoảng cách an toàn giao thông',
    topics:['l7-toc-do']
  },
  {
    id:'l7-tx4-hk1', grade:7, term:'HK1', stage:2, weeks:'Chương IV–V', col:'hk1-tx4', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 4 (HK1): Âm thanh & Phản xạ ánh sáng',
    scope:'Chương IV & V (Bài 12–17 SGK): Sóng âm, tần số, biên độ, tiếng vang, định luật phản xạ ánh sáng và gương phẳng',
    topics:['l7-am-thanh','l7-anh-sang']
  },
  {
    id:'l7-ck1', grade:7, term:'HK1', stage:2, weeks:'Cuối HK1', col:'hk1-ck', coef:3, kind:'ck', minutes:60, count:24,
    title:'Kiểm tra Cuối Học kì I – KHTN Lớp 7',
    scope:'Trọn Học kì I – Mở đầu đến hết Chương V (Bài 1–17 SGK)',
    topics:['l7-phuong-phap','l7-nguyen-tu','l7-bang-tuan-hoan','l7-phan-tu','l7-hoa-tri','l7-toc-do','l7-am-thanh','l7-anh-sang']
  },
  {
    id:'l7-tx1-hk2', grade:7, term:'HK2', stage:3, weeks:'Chương VI', col:'hk2-tx1', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 1 (HK2): Nam châm, Từ trường & Nam châm điện',
    scope:'Chương VI (Bài 18–20 SGK): Tương tác từ, đường sức từ, từ trường Trái Đất, la bàn và nam châm điện',
    topics:['l7-tu']
  },
  {
    id:'l7-tx2-hk2', grade:7, term:'HK2', stage:3, weeks:'Chương VII', col:'hk2-tx2', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 2 (HK2): Trao đổi chất, Quang hợp, Hô hấp & Vận chuyển',
    scope:'Chương VII (Bài 21–32 SGK): Quang hợp, hô hấp tế bào, trao đổi khí, nước và chất dinh dưỡng ở sinh vật',
    topics:['l7-trao-doi-chat','l7-dinh-duong-van-chuyen']
  },
  {
    id:'l7-gk2', grade:7, term:'HK2', stage:3, weeks:'Giữa HK2', col:'hk2-gk', coef:2, kind:'gk', minutes:45, count:20,
    title:'Kiểm tra Giữa Học kì II – KHTN Lớp 7',
    scope:'Chương VI & Chương VII (Bài 18–32 SGK): Từ trường, Quang hợp – Hô hấp và Trao đổi khí – nước – dinh dưỡng',
    topics:['l7-tu','l7-trao-doi-chat','l7-dinh-duong-van-chuyen']
  },
  {
    id:'l7-tx3-hk2', grade:7, term:'HK2', stage:4, weeks:'Chương VIII–IX', col:'hk2-tx3', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 3 (HK2): Cảm ứng & Sinh trưởng ở sinh vật',
    scope:'Chương VIII & IX (Bài 33–38 SGK): Cảm ứng thực vật, tập tính động vật, mô phân sinh và vòng đời sinh trưởng',
    topics:['l7-cam-ung','l7-sinh-truong']
  },
  {
    id:'l7-tx4-hk2', grade:7, term:'HK2', stage:4, weeks:'Chương X', col:'hk2-tx4', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 4 (HK2): Sinh sản ở sinh vật & Cơ thể thống nhất',
    scope:'Chương X (Bài 39–42 SGK): Sinh sản vô tính, sinh sản hữu tính và cơ thể sinh vật là một thể thống nhất',
    topics:['l7-cam-ung-sinh-san']
  },
  {
    id:'l7-ck2', grade:7, term:'HK2', stage:4, weeks:'Cuối HK2', col:'hk2-ck', coef:3, kind:'ck', minutes:60, count:24,
    title:'Kiểm tra Cuối Học kì II – KHTN Lớp 7',
    scope:'Trọn Học kì II – Chương VI đến Chương X (Bài 18–42 SGK)',
    topics:['l7-tu','l7-trao-doi-chat','l7-dinh-duong-van-chuyen','l7-cam-ung','l7-sinh-truong','l7-cam-ung-sinh-san']
  },
  {
    id:'l7-nc-hsg', grade:7, term:'Cả năm', stage:5, weeks:'Tổng hợp', col:null, coef:1, kind:'nc', minutes:60, count:20, presetLevel:'advanced',
    title:'Đề Bồi dưỡng Nâng cao cả năm KHTN Lớp 7',
    scope:'Tổng hợp các dạng vận dụng điểm 9–10 toàn bộ 10 chương KHTN Lớp 7',
    topics:['l7-nguyen-tu','l7-bang-tuan-hoan','l7-phan-tu','l7-hoa-tri','l7-toc-do','l7-am-thanh','l7-anh-sang','l7-tu','l7-trao-doi-chat','l7-dinh-duong-van-chuyen','l7-cam-ung','l7-sinh-truong','l7-cam-ung-sinh-san']
  },

  // =========================================================================
  // LỚP 8 – BÁM SÁT MỞ ĐẦU + CHƯƠNG I → CHƯƠNG VIII (BÀI 1 → BÀI 46 SGK)
  // =========================================================================
  {
    id:'l8-tx1-hk1', grade:8, term:'HK1', stage:1, weeks:'Chương I (Đầu)', col:'hk1-tx1', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 1 (HK1): Phản ứng hóa học, BTKL & Mol',
    scope:'Bài 2, 3, 5 SGK: Biến đổi hóa học, bảo toàn khối lượng, cân bằng PTHH, mol, thể tích khí 24,79 L và tỉ khối',
    topics:['l8-phan-ung','l8-mol']
  },
  {
    id:'l8-tx2-hk1', grade:8, term:'HK1', stage:1, weeks:'Chương I (Cuối)', col:'hk1-tx2', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 2 (HK1): Dung dịch (C%, CM), Tính theo PTHH & Tốc độ phản ứng',
    scope:'Bài 4, 6, 7 SGK: Độ tan, nồng độ C% – CM, bài toán tính theo PTHH, hiệu suất và tốc độ phản ứng',
    topics:['l8-dung-dich','l8-tinh-pthh']
  },
  {
    id:'l8-gk1', grade:8, term:'HK1', stage:1, weeks:'Giữa HK1', col:'hk1-gk', coef:2, kind:'gk', minutes:45, count:20,
    title:'Kiểm tra Giữa Học kì I – KHTN Lớp 8',
    scope:'Mở đầu & Trọn Chương I (Bài 1–7 SGK): An toàn thí nghiệm, Phản ứng hóa học, Mol, Dung dịch, PTHH & Tốc độ phản ứng',
    topics:['l8-thi-nghiem','l8-phan-ung','l8-mol','l8-dung-dich','l8-tinh-pthh']
  },
  {
    id:'l8-tx3-hk1', grade:8, term:'HK1', stage:2, weeks:'Chương II', col:'hk1-tx3', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 3 (HK1): Acid – Base – pH – Oxide – Muối – Phân bón',
    scope:'Trọn Chương II (Bài 8–12 SGK): Acid, base, thang pH, 4 loại oxide, muối và phân bón hóa học',
    topics:['l8-acid-base','l8-oxide-muoi']
  },
  {
    id:'l8-tx4-hk1', grade:8, term:'HK1', stage:2, weeks:'Chương III–IV', col:'hk1-tx4', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 4 (HK1): Khối lượng riêng, Áp suất, Archimedes & Đòn bẩy',
    scope:'Chương III & IV (Bài 13–19 SGK): Khối lượng riêng, áp suất rắn – lỏng – khí, lực đẩy Archimedes, moment lực & đòn bẩy',
    topics:['l8-khoi-luong-rieng','l8-archimedes','l8-don-bay']
  },
  {
    id:'l8-ck1', grade:8, term:'HK1', stage:2, weeks:'Cuối HK1', col:'hk1-ck', coef:3, kind:'ck', minutes:60, count:24,
    title:'Kiểm tra Cuối Học kì I – KHTN Lớp 8',
    scope:'Trọn Học kì I – Mở đầu đến hết Chương IV (Bài 1–19 SGK)',
    topics:['l8-thi-nghiem','l8-phan-ung','l8-mol','l8-dung-dich','l8-tinh-pthh','l8-acid-base','l8-oxide-muoi','l8-khoi-luong-rieng','l8-archimedes','l8-don-bay']
  },
  {
    id:'l8-tx1-hk2', grade:8, term:'HK2', stage:3, weeks:'Chương V', col:'hk2-tx1', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 1 (HK2): Điện học (Nhiễm điện, Mạch điện, I & U)',
    scope:'Chương V (Bài 20–25 SGK): Nhiễm điện do cọ xát, dòng điện, sơ đồ mạch điện, tác dụng dòng điện, ampe kế và vôn kế',
    topics:['l8-dien']
  },
  {
    id:'l8-tx2-hk2', grade:8, term:'HK2', stage:3, weeks:'Chương VI–VII', col:'hk2-tx2', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 2 (HK2): Năng lượng nhiệt & Hệ vận động – Tiêu hóa',
    scope:'Chương VI & đầu Chương VII (Bài 26–32 SGK): Nội năng, dẫn nhiệt – đối lưu – bức xạ, nở vì nhiệt, hệ vận động và tiêu hóa',
    topics:['l8-nhiet','l8-van-dong-tieu-hoa']
  },
  {
    id:'l8-gk2', grade:8, term:'HK2', stage:3, weeks:'Giữa HK2', col:'hk2-gk', coef:2, kind:'gk', minutes:45, count:20,
    title:'Kiểm tra Giữa Học kì II – KHTN Lớp 8',
    scope:'Chương V, Chương VI & đầu Chương VII (Bài 20–32 SGK): Điện học, Nhiệt học, Hệ vận động và Tiêu hóa',
    topics:['l8-dien','l8-nhiet','l8-van-dong-tieu-hoa']
  },
  {
    id:'l8-tx3-hk2', grade:8, term:'HK2', stage:4, weeks:'Chương VII (Tiếp)', col:'hk2-tx3', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 3 (HK2): Tuần hoàn, Hô hấp, Bài tiết, Thần kinh & Nội tiết',
    scope:'Chương VII (Bài 33–40 SGK): Máu, nhóm máu ABO, tim mạch, phổi, thận, cung phản xạ, mắt, nội tiết và sinh sản ở người',
    topics:['l8-co-the-nguoi','l8-than-kinh-noi-tiet']
  },
  {
    id:'l8-tx4-hk2', grade:8, term:'HK2', stage:4, weeks:'Chương VIII', col:'hk2-tx4', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 4 (HK2): Quần thể, Quần xã, Hệ sinh thái & Môi trường',
    scope:'Trọn Chương VIII (Bài 41–46 SGK): Nhân tố sinh thái, giới hạn sinh thái, quần thể, quần xã, chuỗi thức ăn & sinh quyển',
    topics:['l8-he-sinh-thai']
  },
  {
    id:'l8-ck2', grade:8, term:'HK2', stage:4, weeks:'Cuối HK2', col:'hk2-ck', coef:3, kind:'ck', minutes:60, count:24,
    title:'Kiểm tra Cuối Học kì II – KHTN Lớp 8',
    scope:'Trọn Học kì II – Chương V đến Chương VIII (Bài 20–46 SGK)',
    topics:['l8-dien','l8-nhiet','l8-van-dong-tieu-hoa','l8-co-the-nguoi','l8-than-kinh-noi-tiet','l8-he-sinh-thai']
  },
  {
    id:'l8-nc-hsg', grade:8, term:'Cả năm', stage:5, weeks:'Tổng hợp', col:null, coef:1, kind:'nc', minutes:60, count:20, presetLevel:'advanced',
    title:'Đề Bồi dưỡng Nâng cao cả năm KHTN Lớp 8',
    scope:'Tổng hợp các dạng bài toán phân loại điểm 9–10 / Học sinh giỏi toàn bộ 8 chương KHTN Lớp 8',
    topics:['l8-phan-ung','l8-mol','l8-dung-dich','l8-tinh-pthh','l8-acid-base','l8-oxide-muoi','l8-khoi-luong-rieng','l8-archimedes','l8-don-bay','l8-dien','l8-nhiet','l8-van-dong-tieu-hoa','l8-co-the-nguoi','l8-than-kinh-noi-tiet','l8-he-sinh-thai']
  },

  // =========================================================================
  // LỚP 9 – BÁM SÁT MỞ ĐẦU + CHƯƠNG I → CHƯƠNG XIV (BÀI 1 → BÀI 51 SGK)
  // =========================================================================
  {
    id:'l9-tx1-hk1', grade:9, term:'HK1', stage:1, weeks:'Chương I–II', col:'hk1-tx1', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 1 (HK1): Năng lượng cơ học & Khúc xạ – Thấu kính',
    scope:'Chương I & II (Bài 2–10 SGK): Động năng, thế năng, công – công suất, khúc xạ ánh sáng, phản xạ toàn phần và thấu kính',
    topics:['l9-nang-luong-co','l9-anh-sang']
  },
  {
    id:'l9-tx2-hk1', grade:9, term:'HK1', stage:1, weeks:'Chương III (Đầu)', col:'hk1-tx2', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 2 (HK1): Điện trở, Định luật Ohm & Mạch điện',
    scope:'Chương III (Bài 11–12 SGK): Định luật Ohm I = U/R, điện trở dây dẫn và đoạn mạch nối tiếp, song song',
    topics:['l9-dien-ohm']
  },
  {
    id:'l9-gk1', grade:9, term:'HK1', stage:1, weeks:'Giữa HK1', col:'hk1-gk', coef:2, kind:'gk', minutes:45, count:20,
    title:'Kiểm tra Giữa Học kì I – KHTN Lớp 9',
    scope:'Mở đầu, Chương I, II & đầu Chương III (Bài 1–12 SGK): Cơ năng, Quang học và Định luật Ohm',
    topics:['l9-mo-dau','l9-nang-luong-co','l9-anh-sang','l9-dien-ohm']
  },
  {
    id:'l9-tx3-hk1', grade:9, term:'HK1', stage:2, weeks:'Chương III–V', col:'hk1-tx3', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 3 (HK1): Công suất điện, Cảm ứng điện từ & Năng lượng',
    scope:'Bài 13–17 SGK: Năng lượng dòng điện, công suất điện, cảm ứng điện từ, dòng điện xoay chiều và năng lượng tái tạo',
    topics:['l9-nang-luong-dien','l9-cam-ung','l9-nang-luong-song']
  },
  {
    id:'l9-tx4-hk1', grade:9, term:'HK1', stage:2, weeks:'Chương VI–VII', col:'hk1-tx4', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 4 (HK1): Kim loại, Phi kim & Hydrocarbon',
    scope:'Chương VI & VII (Bài 18–25 SGK): Tính chất kim loại, dãy hoạt động hóa học, hợp kim, phi kim, alkane, alkene & nhiên liệu',
    topics:['l9-kim-loai','l9-phi-kim','l9-huu-co']
  },
  {
    id:'l9-ck1', grade:9, term:'HK1', stage:2, weeks:'Cuối HK1', col:'hk1-ck', coef:3, kind:'ck', minutes:60, count:24,
    title:'Kiểm tra Cuối Học kì I – KHTN Lớp 9',
    scope:'Trọn Học kì I – Mở đầu đến hết Chương VII (Bài 1–25 SGK)',
    topics:['l9-mo-dau','l9-nang-luong-co','l9-anh-sang','l9-dien-ohm','l9-nang-luong-dien','l9-cam-ung','l9-nang-luong-song','l9-kim-loai','l9-phi-kim','l9-huu-co']
  },
  {
    id:'l9-tx1-hk2', grade:9, term:'HK2', stage:3, weeks:'Chương VIII–IX', col:'hk2-tx1', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 1 (HK2): Alcohol, Acetic acid, Lipid, Carbohydrate, Protein & Polymer',
    scope:'Chương VIII & IX (Bài 26–32 SGK): C₂H₅OH, CH₃COOH, chất béo, glucose, tinh bột, cellulose, protein và polymer',
    topics:['l9-ancol-axit','l9-lipid-carb']
  },
  {
    id:'l9-tx2-hk2', grade:9, term:'HK2', stage:3, weeks:'Chương X–XI', col:'hk2-tx2', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 2 (HK2): Tài nguyên vỏ Trái Đất & Di truyền Mendel – DNA – Gene',
    scope:'Chương X & XI (Bài 33–41 SGK): Đá vôi, công nghiệp silicate, chu trình carbon, quy luật Mendel, DNA, RNA và gene',
    topics:['l9-tai-nguyen','l9-di-truyen']
  },
  {
    id:'l9-gk2', grade:9, term:'HK2', stage:3, weeks:'Giữa HK2', col:'hk2-gk', coef:2, kind:'gk', minutes:45, count:20,
    title:'Kiểm tra Giữa Học kì II – KHTN Lớp 9',
    scope:'Chương VIII đến Chương XI (Bài 26–41 SGK): Dẫn xuất hữu cơ, Polymer, Tài nguyên vỏ Trái Đất & Di truyền phân tử',
    topics:['l9-ancol-axit','l9-lipid-carb','l9-tai-nguyen','l9-di-truyen']
  },
  {
    id:'l9-tx3-hk2', grade:9, term:'HK2', stage:4, weeks:'Chương XII–XIII', col:'hk2-tx3', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 3 (HK2): Nhiễm sắc thể, Nguyên phân – Giảm phân & Di truyền người',
    scope:'Chương XII & XIII (Bài 42–48 SGK): Bộ NST 2n, nguyên phân, giảm phân, giới tính XX/XY, di truyền liên kết & di truyền người',
    topics:['l9-nhiem-sac-the']
  },
  {
    id:'l9-tx4-hk2', grade:9, term:'HK2', stage:4, weeks:'Chương XIV', col:'hk2-tx4', coef:1, kind:'15p', minutes:15, count:10,
    title:'Đề 15p Lần 4 (HK2): Tiến hóa & Sự phát sinh sự sống',
    scope:'Chương XIV (Bài 49–51 SGK): Chọn lọc nhân tạo, chọn lọc tự nhiên, cơ chế tiến hóa và lịch sử phát triển sự sống',
    topics:['l9-tien-hoa']
  },
  {
    id:'l9-ck2', grade:9, term:'HK2', stage:4, weeks:'Cuối HK2', col:'hk2-ck', coef:3, kind:'ck', minutes:60, count:24,
    title:'Kiểm tra Cuối Học kì II – KHTN Lớp 9',
    scope:'Trọn Học kì II – Chương VIII đến Chương XIV (Bài 26–51 SGK)',
    topics:['l9-ancol-axit','l9-lipid-carb','l9-tai-nguyen','l9-di-truyen','l9-nhiem-sac-the','l9-tien-hoa']
  },
  {
    id:'l9-nc-ts10', grade:9, term:'Cả năm', stage:5, weeks:'Ôn thi vào 10', col:null, coef:1, kind:'nc', minutes:60, count:25, presetLevel:'advanced',
    title:'Đề Tổng hợp Ôn thi Tuyển sinh vào Lớp 10 môn KHTN',
    scope:'Tổng hợp toàn diện Vật lí – Hóa học – Sinh học Lớp 9 (Chương I → Chương XIV)',
    topics:['l9-nang-luong-co','l9-anh-sang','l9-dien-ohm','l9-nang-luong-dien','l9-cam-ung','l9-kim-loai','l9-phi-kim','l9-huu-co','l9-ancol-axit','l9-lipid-carb','l9-di-truyen','l9-nhiem-sac-the','l9-tien-hoa']
  }
];
