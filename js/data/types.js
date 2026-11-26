// Danh mục CÁC DẠNG BÀI TẬP CÓ THỂ XUẤT HIỆN TRONG TỪNG BÀI + PHƯƠNG PHÁP & VÍ DỤ MINH HỌA (KHTN 6–9)
// Dùng hiển thị trong từng Bài học, in ra PDF Sổ tay / Tài liệu bài học, và bật/tắt tùy chọn trong Đề kiểm tra.
window.KHTN_TYPES = {
  // =========================================================================
  // LỚP 7 – 13 BÀI TRỌNG TÂM (GDPT 2018)
  // =========================================================================
  'l7-phuong-phap': [
    {
      name:'Dạng 1: Xác định các bước trong phương pháp tìm hiểu tự nhiên & kĩ năng học KHTN',
      method:'Phân biệt 5 bước theo trình tự: Đề xuất vấn đề (câu hỏi từ quan sát) → Đưa ra dự đoán/giả thuyết (nhận định giải thích tạm thời TRƯỚC thí nghiệm) → Lập kế hoạch → Thực hiện thí nghiệm → Báo cáo & kết luận.',
      ex:'Thấy hạt đậu gieo nơi ẩm nảy mầm nhanh hơn nơi khô, bạn Nam nêu: "Độ ẩm đất ảnh hưởng đến tốc độ nảy mầm". Đây là bước nào?',
      sol:'Bước 2: Đưa ra dự đoán (giả thuyết) để giải thích vấn đề vừa quan sát.'
    },
    {
      name:'Dạng 2: Xác định giới hạn đo (GHĐ), độ chia nhỏ nhất (ĐCNN) và cách đọc dụng cụ đo',
      method:'ĐCNN = Giá trị giữa 2 vạch số ghi liền kề chia cho số khoảng chia đều giữa chúng. Đặt mắt vuông góc với vạch chia ngang đáy mặt khum chất lỏng.',
      ex:'Ống đong từ vạch 10 mL đến vạch 20 mL được chia làm 5 khoảng đều nhau. Tìm ĐCNN của ống đong.',
      sol:'ĐCNN = \\frac{20 - 10}{5} = 2 mL.'
    },
    {
      name:'Dạng 3: Đổi đơn vị mili-giây (ms) và tính tốc độ qua cổng quang điện',
      method:'Đổi 1 s = 1000 ms ⇒ t_(giây) = \\frac{t_(ms)}{1000}; tốc độ tấm chắn sáng đi qua 1 cổng: v = \\frac{d_(tấm chắn)}{t}.',
      ex:'Tấm chắn sáng rộng 3 cm gắn trên xe lăn đi qua cổng quang điện hết 150 ms. Tính tốc độ xe theo cm/s.',
      sol:'Đổi t = \\frac{150}{1000} = 0,15 s ⇒ v = \\frac{3}{0,15} = 20 cm/s.'
    }
  ],

  'l7-nguyen-tu': [
    {
      name:'Dạng 1: Tìm số p, n, e, điện tích hạt nhân và phân bố electron theo lớp',
      method:'Nguyên tử trung hòa điện nên p = e = Z. Điền electron lần lượt từ trong ra ngoài: lớp 1 tối đa 2e, lớp 2 tối đa 8e, lớp 3 tối đa 8e (với Z ≤ 20).',
      ex:'Nguyên tử Phosphorus có Z = 15 và 16 neutron. Xác định số p, e, số lớp e và số e lớp ngoài cùng.',
      sol:'p = e = 15; phân bố electron theo lớp là 2 – 8 – 5 ⇒ có 3 lớp e và 5e lớp ngoài cùng.'
    },
    {
      name:'Dạng 2: Tính khối lượng nguyên tử theo đơn vị amu',
      method:'Vì m_e ≈ 0,00055 amu rất nhỏ so với m_p ≈ 1 amu và m_n ≈ 1 amu nên khối lượng nguyên tử xấp xỉ: m_nt ≈ p + n (amu).',
      ex:'Nguyên tử Iron (Fe) có 26 proton, 30 neutron và 26 electron. Khối lượng nguyên tử Fe bằng bao nhiêu amu?',
      sol:'m_Fe ≈ p + n = 26 + 30 = 56 amu (không cộng số electron).'
    },
    {
      name:'Dạng 3: Bài toán tổng số hạt cơ bản S = 2p + n',
      method:'Lập hệ 2 phương trình từ tổng số hạt S = p + n + e = 2p + n và dữ kiện hiệu hạt mang điện với không mang điện: 2p − n = a.',
      ex:'Nguyên tử X có tổng số hạt p, n, e là 34; số hạt mang điện nhiều hơn không mang điện là 10. Tìm p, n, e.',
      sol:'Ta có 2p + n = 34 và 2p − n = 10 ⇒ cộng lại được 4p = 44 ⇒ p = e = 11 (Na), n = 34 − 22 = 12.'
    }
  ],

  'l7-bang-tuan-hoan': [
    {
      name:'Dạng 1: Từ cấu tạo nguyên tử suy ra vị trí (Ô, Chu kì, Nhóm A) trong bảng tuần hoàn',
      method:'Số thứ tự ô = Z = p = e; Số thứ tự chu kì = số lớp electron; Số thứ tự nhóm A (La Mã) = số electron lớp ngoài cùng (trừ He có 2e thuộc nhóm VIIIA).',
      ex:'Nguyên tử Al có Z = 13 (phân bố e: 2, 8, 3). Xác định vị trí của Al trong bảng tuần hoàn.',
      sol:'Ô số 13, Chu kì 3 (có 3 lớp e), Nhóm IIIA (có 3e lớp ngoài cùng).'
    },
    {
      name:'Dạng 2: Từ vị trí trong bảng tuần hoàn suy ngược ra cấu tạo nguyên tử',
      method:'Biết Chu kì k ⇒ có k lớp e (các lớp trong đã bão hòa 2, 8…); biết Nhóm A ⇒ biết số e lớp ngoài cùng ⇒ cộng tổng e = p = Z.',
      ex:'Nguyên tố X ở Chu kì 3, Nhóm VIA. Tìm số proton trong hạt nhân nguyên tử X.',
      sol:'Chu kì 3 có 3 lớp e; Nhóm VIA có 6e ngoài cùng ⇒ phân bố e: 2, 8, 6 ⇒ p = e = 16 (Sulfur – S).'
    },
    {
      name:'Dạng 3: Phân loại nguyên tố Kim loại – Phi kim – Khí hiếm dựa vào lớp ngoài cùng & vị trí',
      method:'1, 2, 3e ngoài cùng thường là Kim loại (trừ H, He, B); 5, 6, 7e ngoài cùng thường là Phi kim; 8e ngoài cùng (nhóm VIIIA, cùng He 2e) là Khí hiếm.',
      ex:'Cho các nguyên tố X (Z=10), Y (Z=12), T (Z=17). Phân loại từng nguyên tố.',
      sol:'X (2, 8): Khí hiếm (Ne); Y (2, 8, 2): Kim loại (Mg); T (2, 8, 7): Phi kim (Cl).'
    }
  ],

  'l7-toc-do': [
    {
      name:'Dạng 1: Tính tốc độ, quãng đường, thời gian và đổi đơn vị m/s ↔ km/h',
      method:'Áp dụng v = \\frac{s}{t}, s = v · t, t = \\frac{s}{v}. Đổi m/s → km/h nhân 3,6; đổi km/h → m/s chia 3,6.',
      ex:'Một vận động viên chạy 100 m hết 10 s. Tính tốc độ theo m/s và km/h.',
      sol:'v = \\frac{100}{10} = 10 m/s = 10 × 3,6 = 36 km/h.'
    },
    {
      name:'Dạng 2: Tính tốc độ trung bình trên nhiều đoạn đường (có hoặc không có thời gian nghỉ)',
      method:'Luôn dùng v_tb = \\frac{s₁ + s₂ + …}{t₁ + t₂ + t_nghỉ}. Tuyệt đối không lấy trung bình cộng các tốc độ!',
      ex:'Xe đạp lên dốc 4 km hết 0,5 h rồi xuống dốc 8 km hết 0,3 h. Tính tốc độ trung bình trên cả đoạn đường.',
      sol:'v_tb = \\frac{4 + 8}{0,5 + 0,3} = \\frac{12}{0,8} = 15 km/h.'
    },
    {
      name:'Dạng 3: Đọc đồ thị quãng đường – thời gian (s–t) và tính khoảng cách an toàn "3 giây"',
      method:'Đồ thị nằm ngang là vật đứng yên; đường xiên thẳng là chuyển động đều (dốc hơn → nhanh hơn). Quy tắc 3 giây: d_(an toàn) = v_(m/s) × 3.',
      ex:'Ô tô chạy tốc độ 90 km/h trên cao tốc. Tính khoảng cách an toàn tối thiểu theo quy tắc 3 giây.',
      sol:'Đổi v = \\frac{90}{3,6} = 25 m/s ⇒ d_(an toàn) = 25 × 3 = 75 m.'
    }
  ],

  'l7-phan-tu': [
    {
      name:'Dạng 1: Phân biệt Đơn chất – Hợp chất và tính Khối lượng phân tử (KLPT)',
      method:'Đơn chất gồm 1 nguyên tố; Hợp chất gồm ≥ 2 nguyên tố. KLPT = tổng (nguyên tử khối × chỉ số) của các nguyên tố (amu).',
      ex:'Phân loại và tính khối lượng phân tử của khí N₂ và muối CaCO₃ (N=14, Ca=40, C=12, O=16).',
      sol:'N₂ là đơn chất, M = 2×14 = 28 amu; CaCO₃ là hợp chất, M = 40 + 12 + 3×16 = 100 amu.'
    },
    {
      name:'Dạng 2: Nhận biết Liên kết ion và Liên kết cộng hóa trị',
      method:'Kim loại điển hình (Na, K, Mg, Ca) + Phi kim điển hình (Cl, O, F) → Liên kết ion (nhường – nhận e). Phi kim + Phi kim → Liên kết cộng hóa trị (dùng chung cặp e).',
      ex:'Xác định loại liên kết trong phân tử MgO và phân tử NH₃.',
      sol:'MgO (kim loại Mg + phi kim O) là hợp chất ion; NH₃ (hai phi kim N và H) là hợp chất cộng hóa trị.'
    },
    {
      name:'Dạng 3: Tìm nguyên tố chưa biết X khi cho khối lượng phân tử của hợp chất',
      method:'Viết biểu thức KLPT theo nguyên tử khối X, giải phương trình tìm X rồi đối chiếu bảng nguyên tử khối.',
      ex:'Hợp chất X₂O₃ có khối lượng phân tử bằng 102 amu (O = 16). Xác định nguyên tố X.',
      sol:'2·X + 3×16 = 102 ⇒ 2·X = 54 ⇒ X = 27 amu (Aluminium – Al).'
    }
  ],

  'l7-hoa-tri': [
    {
      name:'Dạng 1: Tính hóa trị của một nguyên tố trong hợp chất cho trước',
      method:'Với AₓBᵧ (biết hóa trị b của B, thường H(I), O(II), Cl(I), SO₄(II)): áp dụng a · x = b · y ⇒ a = \\frac{b · y}{x}.',
      ex:'Tìm hóa trị của sắt (Fe) trong hợp chất Fe₂(SO₄)₃, biết nhóm SO₄ hóa trị II.',
      sol:'Gọi hóa trị của Fe là a: a × 2 = II × 3 ⇒ a = III.'
    },
    {
      name:'Dạng 2: Lập công thức hóa học của hợp chất theo quy tắc hóa trị',
      method:'Viết dạng chung AₓBᵧ, lập tỉ lệ \\frac{x}{y} = \\frac{b}{a} (tối giản) rồi điền chỉ số (nhóm nhiều nguyên tử có chỉ số > 1 phải đóng ngoặc đơn).',
      ex:'Lập CTHH của hợp chất tạo bởi Al (III) và nhóm SO₄ (II).',
      sol:'\\frac{x}{y} = \\frac{2}{3} ⇒ x = 2, y = 3 ⇒ Công thức đúng là Al₂(SO₄)₃.'
    },
    {
      name:'Dạng 3: Tính % khối lượng nguyên tố từ CTHH và bài toán ngược tìm CTHH từ %',
      method:'Thuận: %A = \\frac{x · M_A}{M_(hợp chất)} × 100%. Ngược: x = \\frac{%A × M_(hợp chất)}{100% × M_A}.',
      ex:'Hợp chất khí gồm S và O có KLPT = 64 amu, trong đó S chiếm 50% khối lượng (S=32, O=16). Lập CTHH.',
      sol:'x = \\frac{50 × 64}{100 × 32} = 1; y = \\frac{50 × 64}{100 × 16} = 2 ⇒ CTHH là SO₂.'
    }
  ],

  'l7-am-thanh': [
    {
      name:'Dạng 1: Tính tần số dao động và so sánh độ cao (bổng – trầm), độ to của âm',
      method:'Đổi thời gian ra giây (s), tính f = \\frac{N}{t} (Hz). Nguồn nào có tần số f lớn hơn thì phát ra âm cao (bổng) hơn; biên độ lớn hơn thì âm to hơn.',
      ex:'Vật A thực hiện 600 dao động trong 2 giây; vật B thực hiện 9000 dao động trong 1 phút. Vật nào phát âm cao hơn?',
      sol:'f_A = \\frac{600}{2} = 300 Hz; f_B = \\frac{9000}{60} = 150 Hz. Vì f_A > f_B nên vật A phát âm cao hơn.'
    },
    {
      name:'Dạng 2: Bài toán tiếng vang và tàu phát sóng siêu âm đo độ sâu (sonar)',
      method:'Âm truyền từ nguồn đến mặt phản xạ rồi quay ngược về chỗ cũ (đi 2 lần khoảng cách d) nên: d = \\frac{v · t}{2}.',
      ex:'Người đứng trước vách núi hét to và nghe được tiếng vang sau 1,5 s (v_không khí = 340 m/s). Tính khoảng cách tới vách núi.',
      sol:'d = \\frac{340 × 1,5}{2} = 255 m.'
    },
    {
      name:'Dạng 3: Phản xạ âm – vật liệu cách âm & biện pháp chống ô nhiễm tiếng ồn',
      method:'Vật cứng, phẳng, nhẵn phản xạ âm tốt; vật mềm, xốp, gồ ghề hấp thụ âm tốt. Ba hướng giảm tiếng ồn: giảm tại nguồn, phân tán trên đường truyền, ngăn trước khi vào tai.',
      ex:'Vì sao tường rạp chiếu phim và phòng thu âm thường làm nhám hoặc bọc mút xốp, treo rèm nhung?',
      sol:'Để hấp thụ âm tốt, làm giảm phản xạ âm gây tiếng vang giúp âm thanh trong rạp rõ nét.'
    }
  ],

  'l7-anh-sang': [
    {
      name:'Dạng 1: Tính góc tới i và góc phản xạ i′ (cẩn thận bẫy góc hợp với mặt gương!)',
      method:'Nếu đề cho góc hợp với pháp tuyến → đó chính là i (i′ = i). Nếu đề cho tia tới hợp với MẶT GƯƠNG góc α → phải tính i = 90° − α.',
      ex:'Tia sáng chiếu tới gương phẳng hợp với mặt gương góc 30°. Tính góc phản xạ i′.',
      sol:'Góc tới i = 90° − 30° = 60° ⇒ góc phản xạ i′ = i = 60°.'
    },
    {
      name:'Dạng 2: Bài toán góc hợp bởi tia tới và tia phản xạ hoặc quay gương phẳng',
      method:'Góc giữa tia tới và tia phản xạ β = i + i′ = 2i ⇒ i = \\frac{β}{2}. Nếu giữ tia tới cố định và quay gương góc φ thì tia phản xạ quay góc 2φ.',
      ex:'Chiếu tia sáng tới gương phẳng sao cho tia phản xạ vuông góc với tia tới. Tìm góc tới i.',
      sol:'2i = 90° ⇒ i = 45°.'
    },
    {
      name:'Dạng 3: Xác định tính chất và khoảng cách ảnh của vật qua gương phẳng',
      method:'Ảnh ảo, lớn bằng vật, d_(ảnh → gương) = d_(vật → gương) và d_(vật → ảnh) = 2 · d_(vật → gương).',
      ex:'Một điểm sáng S đặt cách gương phẳng 1,8 m. Nếu dịch S lại gần gương thêm 0,3 m thì khoảng cách giữa S và ảnh S′ là bao nhiêu?',
      sol:'Khoảng cách mới từ S tới gương: 1,8 − 0,3 = 1,5 m ⇒ khoảng cách S đến S′ là 2 × 1,5 = 3,0 m.'
    }
  ],

  'l7-tu': [
    {
      name:'Dạng 1: Xác định tên từ cực nam châm dựa vào tương tác đẩy – hút & la bàn',
      method:'Hai cực cùng tên (N–N hoặc S–S) đẩy nhau; khác tên (N–S) hút nhau. Kim nam châm tự do luôn chỉ hướng Bắc (N) – Nam (S).',
      ex:'Đưa cực Bắc (N) của thanh nam châm lại gần đầu A của một thanh kim loại thấy chúng đẩy nhau. Kết luận gì về thanh kim loại và đầu A?',
      sol:'Thanh kim loại là một nam châm và đầu A là cực Bắc (N) (vì chỉ hai cực từ cùng tên mới đẩy nhau).'
    },
    {
      name:'Dạng 2: Xác định chiều đường sức từ bên ngoài nam châm',
      method:'Bên ngoài nam châm, đường sức từ luôn có chiều đi RA từ cực Bắc (N) và đi VÀO cực Nam (S); nơi đường sức dày thì từ trường mạnh.',
      ex:'Đặt kim nam châm nhỏ trên đường sức từ nối giữa hai cực của nam châm chữ U, cực Bắc của kim nam châm hướng về cực nào của nam châm chữ U?',
      sol:'Hướng về phía cực Nam (S) của nam châm chữ U (theo chiều đường sức từ vào Nam).'
    },
    {
      name:'Dạng 3: Điều chỉnh lực từ và đổi cực của nam châm điện',
      method:'Tăng lực từ bằng cách tăng dòng điện I hoặc tăng số vòng dây N (dùng lõi sắt non, không dùng lõi thép vì thép bị nhiễm từ vĩnh viễn không nhả vật khi ngắt điện).',
      ex:'Vì sao cần cẩu điện từ trong nhà máy phế liệu dùng lõi sắt non mà không dùng lõi thép?',
      sol:'Vì khi ngắt điện, sắt non mất hết từ tính ngay giúp thả sắt vụn xuống dễ dàng; còn thép vẫn giữ từ tính.'
    }
  ],

  'l7-trao-doi-chat': [
    {
      name:'Dạng 1: Phân biệt nguyên liệu, sản phẩm, bào quan & năng lượng của Quang hợp và Hô hấp tế bào',
      method:'Quang hợp (ở lục lạp, cần ánh sáng): CO₂ + H₂O → Glucose + O₂ (tích lũy năng lượng). Hô hấp tế bào (ở ti thể, ngày đêm): Glucose + O₂ → CO₂ + H₂O + ATP + Nhiệt.',
      ex:'Vì sao ban đêm không nên để nhiều chậu cây xanh lớn trong phòng ngủ đóng kín cửa?',
      sol:'Ban đêm không có ánh sáng nên cây ngừng quang hợp nhưng vẫn hô hấp lấy O₂ và thải CO₂, làm phòng kín thiếu dưỡng khí.'
    },
    {
      name:'Dạng 2: Giải thích thí nghiệm chứng minh quang hợp tạo tinh bột/nhả O₂ và hô hấp thải CO₂',
      method:'Dùng dung dịch Iodine thử tinh bột (hóa xanh tím); dùng que đóm còn tàn đỏ thử O₂ (bùng cháy); dùng nước vôi trong thử CO₂ (vẩn đục trắng).',
      ex:'Bịt băng giấy đen một phần lá khoai lang ngoài nắng rồi tẩy diệp lục và nhỏ dung dịch iodine, phần bị bịt đen có màu gì?',
      sol:'Không chuyển màu xanh tím vì phần bị bịt đen không nhận được ánh sáng nên không quang hợp tổng hợp được tinh bột.'
    },
    {
      name:'Dạng 3: Vận dụng các yếu tố môi trường vào trồng trọt và bảo quản nông sản',
      method:'Muốn tăng năng suất: tăng quang hợp (đủ sáng, nước, phân, trồng đúng mật độ). Muốn bảo quản nông sản lâu hỏng: giảm hô hấp tới mức tối thiểu (phơi khô giảm nước, bảo quản lạnh, tăng CO₂).',
      ex:'Vì sao sau khi thu hoạch lúa, ngô người nông dân phải phơi thật khô trước khi cất vào kho?',
      sol:'Giảm hàm lượng nước trong hạt để ức chế hô hấp tế bào ở mức tối thiểu, tránh hạt nảy mầm, mốc hỏng và hao hụt chất hữu cơ.'
    }
  ],

  'l7-dinh-duong-van-chuyen': [
    {
      name:'Dạng 1: Phân biệt dòng vận chuyển Mạch gỗ và Mạch rây ở thực vật',
      method:'Mạch gỗ: vận chuyển Nước + Muối khoáng từ Rễ → Lá (nhờ lực hút thoát hơi nước). Mạch rây: vận chuyển Chất hữu cơ từ Lá → Thân, Rễ, Củ, Quả.',
      ex:'Khi bóc một khoanh vỏ cây thân gỗ (lấy đi mạch rây), sau một thời gian mép vỏ phía TRÊN vết cắt phình to ra. Giải thích?',
      sol:'Mạch rây bị đứt nên chất hữu cơ tổng hợp từ lá đi xuống bị ứ đọng lại ở mép trên làm mô tại đó phình to.'
    },
    {
      name:'Dạng 2: Xác định cơ quan trao đổi khí của các nhóm động vật và vai trò khí khổng',
      method:'Ruột khoang/Giun đất → qua da ẩm; Côn trùng → hệ thống ống khí; Cá/Tôm → mang; Lưỡng cư → da và phổi; Bò sát/Chim/Thú → phổi.',
      ex:'Vì sao bắt cá lên cạn một lúc cá chết dù trong không khí có nhiều oxygen hơn trong nước?',
      sol:'Trên cạn các phiến mang cá bị khô và dính bết vào nhau làm diện tích trao đổi khí giảm đột ngột khiến cá ngạt thở.'
    },
    {
      name:'Dạng 3: Bài toán cân bằng nước, tưới tiêu hợp lí và nhu cầu nước – dinh dưỡng ở người',
      method:'Nhu cầu nước trung bình ở người khoảng 40 mL trên mỗi kg khối lượng cơ thể/ngày; ăn đủ 4 nhóm chất (bột đường, đạm, béo, vitamin & khoáng).',
      ex:'Một học sinh lớp 7 cân nặng 45 kg cần cung cấp tổng cộng khoảng bao nhiêu lít nước mỗi ngày (tính cả trong thức ăn và đồ uống)?',
      sol:'V = 45 × 40 = 1800 mL = 1,8 lít/ngày.'
    }
  ],

  'l7-cam-ung': [
    {
      name:'Dạng 1: Xác định các kiểu hướng động ở thực vật (hướng sáng, nước, trọng lực, tiếp xúc)',
      method:'Mọc hướng về phía tác nhân là hướng động dương (+); mọc tránh xa là hướng động âm (−). Ngọn hướng sáng (+), rễ hướng đất (+) và hướng nước (+).',
      ex:'Khi trồng cây bí đỏ, bầu, mướp người ta thường làm giàn tre là ứng dụng hình thức cảm ứng nào?',
      sol:'Ứng dụng tính hướng tiếp xúc của tua cuốn giúp cây bám vào giàn vươn cao đón ánh sáng.'
    },
    {
      name:'Dạng 2: Phân biệt Tập tính bẩm sinh và Tập tính học được ở động vật',
      method:'Bẩm sinh: sinh ra đã có, di truyền từ bố mẹ, đặc trưng cho loài (nhện giăng tơ, chim di cư). Học được: hình thành trong đời sống qua rèn luyện, trải nghiệm (khỉ đi xe đạp, cá nổi lên khi gõ kẻng cho ăn).',
      ex:'Gõ kẻng mỗi lần cho cá ăn, sau nhiều ngày chỉ cần nghe tiếng kẻng là đàn cá bơi tới. Đây là tập tính gì?',
      sol:'Tập tính học được (hình thành mối liên hệ mới giữa âm thanh tiếng kẻng và thức ăn).'
    }
  ],

  'l7-cam-ung-sinh-san': [
    {
      name:'Dạng 1: Phân biệt Sinh trưởng và Phát triển; biến thái hoàn toàn & không hoàn toàn',
      method:'Sinh trưởng là tăng kích thước, khối lượng tế bào/cơ thể; Phát triển gồm sinh trưởng + phân hóa tế bào + phát sinh hình thái. Bướm/Ếch/Muỗi có ấu trùng rất khác con trưởng thành (biến thái hoàn toàn).',
      ex:'Muốn diệt muỗi truyền sốt xuất huyết hiệu quả nhất, ta nên tác động vào giai đoạn nào trong vòng đời của muỗi?',
      sol:'Giai đoạn trứng và ấu trùng (bọ gậy/lăng quăng) trong nước đọng bằng cách úp dụng cụ chứa nước, thả cá ăn bọ gậy.'
    },
    {
      name:'Dạng 2: So sánh Sinh sản vô tính (giâm, chiết, ghép, nuôi cấy mô) và Sinh sản hữu tính',
      method:'Vô tính: không có sự kết hợp giao tử, con giữ nguyên 100% đặc tính tốt của mẹ, nhanh ra quả. Hữu tính: có thụ tinh (giao tử đực + cái → hợp tử), tạo đa dạng di truyền giúp thích nghi môi trường thay đổi.',
      ex:'Vì sao nhân giống cây ăn quả quý (nhãn lồng, bưởi ngon) người ta thường chiết hoặc ghép cành thay vì gieo hạt?',
      sol:'Chiết/ghép là sinh sản vô tính giúp giữ nguyên phẩm chất quả ngon của cây mẹ và rút ngắn thời gian thu hoạch.'
    }
  ],

  // =========================================================================
  // LỚP 8 – 16 BÀI TRỌNG TÂM (GDPT 2018)
  // =========================================================================
  'l8-thi-nghiem': [
    {
      name:'Dạng 1: Nhận biết chức năng dụng cụ thí nghiệm Hóa – Lý – Sinh lớp 8',
      method:'Ống nghiệm (lượng nhỏ, lỏng ≤ 1/3 ống, kẹp ở 1/3 từ miệng xuống); bình tam giác (chuẩn độ, lắc không sánh); ống hút nhỏ giọt; biến áp nguồn; joulemeter; đèn LED (chân dài nối +).',
      ex:'Khi đun chất lỏng trong ống nghiệm cần tuân thủ 3 quy tắc an toàn nào?',
      sol:'Lượng lỏng ≤ 1/3 ống; kẹp ở 1/3 từ miệng xuống; hơ đều rồi đun đáy, nghiêng 45° hướng miệng về phía không có người.'
    },
    {
      name:'Dạng 2: Quy tắc an toàn hóa chất & xử lí sự cố (đặc biệt pha loãng H₂SO₄ đặc)',
      method:'Pha loãng H₂SO₄ đặc: Rót từ từ ACID ĐẶC vào NƯỚC và khuấy đều (không làm ngược lại). Hóa chất bắn vào da/mắt: xả ngay dưới vòi nước sạch chảy nhẹ nhiều phút.',
      ex:'Giải thích vì sao tuyệt đối không được rót nước vào lọ chứa H₂SO₄ đặc?',
      sol:'H₂SO₄ đặc tan tỏa nhiệt cực lớn; nước nhẹ hơn nổi trên mặt sẽ sôi bùng tức thì làm bắn các giọt acid đặc gây bỏng nguy hiểm.'
    }
  ],

  'l8-phan-ung': [
    {
      name:'Dạng 1: Phân biệt Biến đổi vật lí – Biến đổi hóa học và Phản ứng tỏa nhiệt – thu nhiệt',
      method:'Có chất mới sinh ra → biến đổi hóa học; chỉ đổi trạng thái/hình dạng → vật lí. Tỏa nhiệt làm nóng môi trường (đốt nhiên liệu, tôi vôi); thu nhiệt cần đun liên tục hoặc làm lạnh dung dịch (nung CaCO₃, hòa viên C sủi).',
      ex:'Đốt nến parafin cháy thành khí CO₂ và hơi nước là quá trình gì, tỏa nhiệt hay thu nhiệt?',
      sol:'Nến nóng chảy là vật lí, nến cháy tạo CO₂ và H₂O là phản ứng hóa học tỏa nhiệt.'
    },
    {
      name:'Dạng 2: Lập phương trình hóa học (cân bằng hệ số nguyên tối giản)',
      method:'Đếm số nguyên tử mỗi nguyên tố hai vế (ưu tiên cân bằng nhóm nguyên tử hoặc nguyên tố có chỉ số lẻ như O trước), đặt hệ số trước CTHH (không sửa chỉ số chân!).',
      ex:'Cân bằng phương trình: Fe + O₂ —(t°)→ Fe₃O₄ và tìm tổng các hệ số.',
      sol:'3Fe + 2O₂ —(t°)→ Fe₃O₄ ⇒ tổng hệ số = 3 + 2 + 1 = 6.'
    },
    {
      name:'Dạng 3: Áp dụng Định luật Bảo toàn khối lượng (BTKL, kể cả khi có tạp chất trơ)',
      method:'Với A + B → C + D: m_A + m_B = m_C + m_D (chỉ tính lượng chất nguyên chất thực sự đã phản ứng!).',
      ex:'Nung 200 g đá vôi chứa 90% CaCO₃ thu được 100,8 g CaO nguyên chất và khí CO₂ (CaCO₃ phản ứng hết). Tính khối lượng CO₂.',
      sol:'m_(CaCO₃ nguyên chất) = 200 × 90% = 180 g ⇒ m_CO₂ = 180 − 100,8 = 79,2 g.'
    }
  ],

  'l8-mol': [
    {
      name:'Dạng 1: Chuyển đổi giữa Số mol (n), Khối lượng (m) và Số hạt vi mô (N)',
      method:'Dùng n = \\frac{m}{M} ⇔ m = n · M và N_hạt = n · 6,022 × 10²³ (lưu ý 1 mol = 1000 mmol).',
      ex:'Tính số mol và khối lượng của 3,011 × 10²³ phân tử NaOH (Na=23, O=16, H=1).',
      sol:'n = \\frac{3,011 × 10²³}{6,022 × 10²³} = 0,5 mol; M_NaOH = 40 g/mol ⇒ m = 0,5 × 40 = 20 g.'
    },
    {
      name:'Dạng 2: Tính thể tích chất khí ở điều kiện chuẩn (25 °C, 1 bar) và ngược lại',
      method:'Chỉ áp dụng cho CHẤT KHÍ ở 25 °C, 1 bar: V_khí = n · 24,79 (L) ⇔ n = \\frac{V_khí}{24,79} (nhớ đổi mL → L trước khi tính).',
      ex:'Tính khối lượng của 7,437 lít khí O₂ ở 25 °C, 1 bar (O = 16).',
      sol:'n_O₂ = \\frac{7,437}{24,79} = 0,3 mol; M_O₂ = 32 g/mol ⇒ m = 0,3 × 32 = 9,6 g.'
    },
    {
      name:'Dạng 3: Tính tỉ khối chất khí (d_A/B, d_A/kk) & chọn cách đặt bình thu khí',
      method:'d_(A/B) = \\frac{M_A}{M_B}; d_(A/kk) = \\frac{M_A}{29}. Nếu M_A > 29 (nặng hơn không khí) → đặt ĐỨNG bình; nếu M_A < 29 (nhẹ hơn) → ÚP NGƯỢC bình.',
      ex:'Cho các khí H₂ (M=2), NH₃ (M=17), CO₂ (M=44). Khí nào thu bằng cách đặt đứng bình?',
      sol:'CO₂ có M = 44 > 29 (d = 44/29 ≈ 1,52 > 1, nặng hơn không khí) nên đặt đứng bình; H₂ và NH₃ nhẹ hơn nên úp bình.'
    },
    {
      name:'Dạng 4: Khối lượng mol trung bình và tỉ khối của hỗn hợp khí',
      method:'Tính M_tb = \\frac{m_hh}{n_hh} = \\frac{n₁·M₁ + n₂·M₂}{n₁ + n₂}, sau đó tính tỉ khối d_(hh/B) = \\frac{M_tb}{M_B}.',
      ex:'Trộn 0,1 mol H₂ (M=2) với 0,4 mol O₂ (M=32). Tính tỉ khối của hỗn hợp so với khí He (M=4).',
      sol:'M_tb = \\frac{0,1×2 + 0,4×32}{0,1 + 0,4} = \\frac{13}{0,5} = 26 g/mol ⇒ d_(hh/He) = \\frac{26}{4} = 6,5.'
    }
  ],

  'l8-khoi-luong-rieng': [
    {
      name:'Dạng 1: Tính khối lượng riêng (D), trọng lượng riêng (d) và đổi đơn vị g/cm³ ↔ kg/m³',
      method:'D = \\frac{m}{V} ⇒ m = D · V; V = \\frac{m}{D}. Quy đổi chuẩn: 1 g/cm³ = 1000 kg/m³; trọng lượng riêng d = 10 · D (N/m³).',
      ex:'Một thỏi sắt đặc thể tích 150 cm³ nặng 1170 g. Tính khối lượng riêng theo g/cm³ và trọng lượng riêng theo N/m³.',
      sol:'D = \\frac{1170}{150} = 7,8 g/cm³ = 7800 kg/m³ ⇒ d = 10 × 7800 = 78 000 N/m³.'
    },
    {
      name:'Dạng 2: Tính áp suất của vật rắn trên mặt sàn ngang (p = F / S)',
      method:'Vật đặt trên sàn ngang có áp lực F = P = 10m (N). Đổi diện tích S ra m² (1 cm² = 10⁻⁴ m²; chú ý nhân số bàn chân/bánh xe!), rồi tính p = \\frac{F}{S} (Pa).',
      ex:'Bàn 4 chân tổng khối lượng 24 kg đặt trên sàn ngang, diện tích tiếp xúc mỗi chân bàn là 15 cm². Tính áp suất lên sàn.',
      sol:'F = 10 × 24 = 240 N; tổng diện tích 4 chân S = 4 × 15 = 60 cm² = 0,006 m² ⇒ p = \\frac{240}{0,006} = 40 000 Pa.'
    },
    {
      name:'Dạng 3: Tính áp suất chất lỏng ở độ sâu h (bẫy cho khoảng cách từ đáy bình!)',
      method:'Áp dụng p = d · h = 10 · D · h, trong đó h BẮT BUỘC tính từ MẶT THOÁNG xuống điểm xét: nếu đề cho điểm cách đáy h_đáy trong bình cao H thì h = H − h_đáy.',
      ex:'Bể sâu 2 m chứa đầy nước (d = 10 000 N/m³). Tính áp suất nước tại điểm K cách đáy bể 0,6 m.',
      sol:'Độ sâu từ mặt nước xuống K là h = 2 − 0,6 = 1,4 m ⇒ p = 10 000 × 1,4 = 14 000 Pa.'
    }
  ],

  'l8-dung-dich': [
    {
      name:'Dạng 1: Tính Độ tan (S) và nồng độ C% của dung dịch bão hòa',
      method:'S = \\frac{m_ct}{m_nước} × 100 (g/100 g H₂O). Liên hệ nhanh với nồng độ dung dịch bão hòa: C%_bh = \\frac{S}{100 + S} × 100%.',
      ex:'Ở 20 °C, hòa tan tối đa 54 g muối X vào 150 g nước được dung dịch bão hòa. Tính độ tan S của X.',
      sol:'S = \\frac{54}{150} × 100 = 36 g/100 g H₂O.'
    },
    {
      name:'Dạng 2: Tính Nồng độ phần trăm (C%) và khối lượng chất tan / dung dịch',
      method:'C% = \\frac{m_ct}{m_dd} × 100% với m_dd = m_ct + m_nước; bài toán ngược: m_ct = \\frac{m_dd · C%}{100%}.',
      ex:'Hòa tan 30 g đường vào 170 g nước. Tính nồng độ phần trăm của dung dịch.',
      sol:'m_dd = 30 + 170 = 200 g ⇒ C% = \\frac{30}{200} × 100% = 15%.'
    },
    {
      name:'Dạng 3: Tính Nồng độ mol (C_M) từ số mol hoặc khối lượng chất tan',
      method:'Đổi thể tích dung dịch ra Lít (V_L = \\frac{V_mL}{1000}), tìm số mol n = \\frac{m}{M}, rồi tính C_M = \\frac{n}{V_L} (M).',
      ex:'Hòa tan 16 g CuSO₄ (M = 160) vào nước thu được 400 mL dung dịch. Tính nồng độ mol C_M.',
      sol:'n = \\frac{16}{160} = 0,1 mol; V = 0,4 L ⇒ C_M = \\frac{0,1}{0,4} = 0,25 M.'
    },
    {
      name:'Dạng 4: Bài toán pha loãng hoặc trộn hai dung dịch cùng chất tan (không phản ứng)',
      method:'Khi thêm nước pha loãng, lượng chất tan giữ nguyên: m_ct(đầu) = m_ct(sau) hay n_đầu = n_sau (C₁·V₁ = C₂·V₂). Khi trộn: cộng tổng chất tan và tổng m_dd (hoặc V_dd).',
      ex:'Cần thêm bao nhiêu mL nước vào 100 mL dung dịch HCl 2 M để được dung dịch HCl 0,5 M?',
      sol:'n_HCl = 0,1 × 2 = 0,2 mol ⇒ V_sau = \\frac{0,2}{0,5} = 0,4 L = 400 mL ⇒ cần thêm 400 − 100 = 300 mL nước.'
    }
  ],

  'l8-tinh-pthh': [
    {
      name:'Dạng 1: Bài toán tính theo PTHH cơ bản (biết 1 chất, tìm chất còn lại)',
      method:'4 bước chuẩn: Đổi dữ kiện ra số mol n → Viết & cân bằng PTHH → Suy tỉ lệ mol trên PTHH → Tính khối lượng m, thể tích khí V (×24,79) hoặc C_M.',
      ex:'Đốt cháy hoàn toàn 2,4 g Mg (M=24) trong khí O₂ dư: 2Mg + O₂ → 2MgO. Tính khối lượng MgO (M=40) tạo thành.',
      sol:'n_Mg = \\frac{2,4}{24} = 0,1 mol ⇒ theo PTHH n_MgO = n_Mg = 0,1 mol ⇒ m_MgO = 0,1 × 40 = 4,0 g.'
    },
    {
      name:'Dạng 2: Bài toán cho số mol cả 2 chất tham gia (Xét chất dư – chất hết)',
      method:'Với aA + bB → sản phẩm: lập tỉ số \\frac{n_A}{a} và \\frac{n_B}{b}. Bên nào NHỎ HƠN thì chất đó HẾT, chất kia dư; tính mọi sản phẩm theo chất HẾT.',
      ex:'Cho 0,25 mol Zn vào dung dịch chứa 0,4 mol HCl (Zn + 2HCl → ZnCl₂ + H₂↑). Tính số mol H₂ thu được.',
      sol:'Ta có \\frac{0,25}{1} = 0,25 > \\frac{0,4}{2} = 0,20 ⇒ HCl phản ứng hết, Zn dư! Tính theo HCl: n_H₂ = \\frac{0,4}{2} = 0,2 mol.'
    },
    {
      name:'Dạng 3: Bài toán Hiệu suất phản ứng (H%) và vận dụng 5 yếu tố tốc độ phản ứng',
      method:'H% = \\frac{m_(thực tế)}{m_(lí thuyết)} × 100%. Thuận (tìm sản phẩm thực tế): nhân với H%; Ngược (tìm nguyên liệu cần dùng): chia cho H%.',
      ex:'Nung 50 g CaCO₃ (M=100) với hiệu suất 80%: CaCO₃ → CaO + CO₂. Tính khối lượng CaO (M=56) thu được.',
      sol:'n_(CaCO₃) = 0,5 mol ⇒ m_(CaO lí thuyết) = 0,5 × 56 = 28 g ⇒ m_(CaO thực tế) = 28 × 80% = 22,4 g.'
    }
  ],

  'l8-archimedes': [
    {
      name:'Dạng 1: Xác định lực đẩy Archimedes qua thí nghiệm lực kế hoặc thể tích chiếm chỗ',
      method:'Qua lực kế: F_A = P − F_nhúng. Theo công thức: F_A = d_lỏng · V_chìm (nhớ đổi cm³ → m³ bằng cách chia 1 000 000!).',
      ex:'Nhúng chìm hoàn toàn quả cầu đặc thể tích 250 cm³ vào nước (d = 10 000 N/m³). Tính F_A.',
      sol:'V = 250 cm³ = 0,00025 m³ ⇒ F_A = 10 000 × 0,00025 = 2,5 N.'
    },
    {
      name:'Dạng 2: Xét trạng thái chìm, lơ lửng, nổi và bài toán vật nổi cân bằng trên mặt thoáng',
      method:'Khi thả vật đặc: D_vật < D_lỏng thì vật nổi lên. Khi đã nổi ĐỨNG YÊN cân bằng trên mặt thoáng: F_A = P_vật ⇔ d_lỏng · V_chìm = d_vật · V_vật.',
      ex:'Cục nước đá có D_đá = 900 kg/m³ nổi trên mặt nước (D_nước = 1000 kg/m³). Tìm phần trăm thể tích đá nhô lên khỏi mặt nước.',
      sol:'Tỉ lệ phần chìm: \\frac{V_chìm}{V_vật} = \\frac{900}{1000} = 90% ⇒ phần nhô trên mặt nước chiếm 100% − 90% = 10%.'
    }
  ],

  'l8-don-bay': [
    {
      name:'Dạng 1: Tính Moment lực đối với trục quay (M = F · d)',
      method:'Đổi cánh tay đòn d (khoảng cách vuông góc từ trục quay đến giá của lực) ra mét (m), rồi tính M = F · d (N·m). Nếu giá lực cắt trục quay thì d = 0 ⇒ M = 0.',
      ex:'Dùng lực 50 N đẩy vuông góc vào tay nắm cửa cách trục bản lề 80 cm. Tính moment lực.',
      sol:'d = 80 cm = 0,8 m ⇒ M = 50 × 0,8 = 40 N·m.'
    },
    {
      name:'Dạng 2: Bài toán cân bằng đòn bẩy F₁ · d₁ = F₂ · d₂ và phân loại đòn bẩy',
      method:'Xác định đúng khoảng cách d₁, d₂ từ ĐIỂM TỰA O đến điểm đặt hai lực (cẩn thận khi đề cho tổng chiều dài thanh AB = OA + OB!).',
      ex:'Thanh nhẹ AB dài 1,5 m có điểm tựa O cách A đoạn 0,3 m. Treo vật 60 kg ở A thì phải ấn ở B lực bao nhiêu N để thanh cân bằng?',
      sol:'F₁ = P_A = 600 N, d₁ = OA = 0,3 m, d₂ = OB = 1,5 − 0,3 = 1,2 m ⇒ F₂ = \\frac{600 × 0,3}{1,2} = 150 N.'
    }
  ],

  'l8-van-dong-tieu-hoa': [
    {
      name:'Dạng 1: Cấu tạo xương – khớp – cơ, vệ sinh hệ vận động & sơ cứu gãy xương',
      method:'Xương bền chắc nhờ muối khoáng (Ca, P), dẻo dai nhờ chất hữu cơ. Sơ cứu gãy xương: đặt nẹp cố định hai khớp trên – dưới chỗ gãy rồi mới chuyển viện.',
      ex:'Vì sao trẻ em thiếu vitamin D dễ bị còi xương còn người cao tuổi dễ bị loãng xương, giòn dễ gãy?',
      sol:'Vitamin D cần để hấp thụ Calcium tạo xương; ở người già tỉ lệ chất hữu cơ giảm làm xương giảm tính dẻo dai nên giòn, dễ gãy.'
    },
    {
      name:'Dạng 2: Quá trình biến đổi thức ăn bằng enzyme và hấp thụ dinh dưỡng ở ruột non',
      method:'Miệng (amylase: tinh bột chín → maltose) → Dạ dày (HCl + pepsin: protein) → Ruột non (tiêu hóa hoàn toàn glucid, protein, lipid và hấp thụ chính).',
      ex:'Vì sao người bị cắt túi mật hoặc tắc ống dẫn mật phải hạn chế ăn nhiều dầu mỡ (lipid)?',
      sol:'Dịch mật giúp nhũ tương hóa lipid thành các giọt nhỏ để enzyme lipase phân giải; thiếu mật làm tiêu hóa mỡ kém, gây đầy bụng khó tiêu.'
    }
  ],

  'l8-acid-base': [
    {
      name:'Dạng 1: Nhận biết dung dịch Acid – Base (Kiềm) – Muối trung tính bằng chất chỉ thị & pH',
      method:'Quỳ tím: Acid (pH < 7) hóa ĐỎ; Kiềm (pH > 7) hóa XANH; Trung tính (pH = 7) không đổi màu. Phenolphthalein: chỉ hóa HỒNG trong dung dịch kiềm.',
      ex:'Sắp xếp theo chiều tính acid giảm dần (pH tăng dần) của 3 dung dịch có pH: A (pH=2), B (pH=7), C (pH=12).',
      sol:'Tính acid giảm dần theo chiều tăng pH: A (acid mạnh) → B (trung tính) → C (kiềm mạnh).'
    },
    {
      name:'Dạng 2: Bài toán hỗn hợp kim loại (có Cu/Ag) tác dụng với dung dịch HCl / H₂SO₄ loãng',
      method:'Lưu ý Cu, Ag, Au đứng sau H nên KHÔNG phản ứng với HCl, H₂SO₄ loãng (chất rắn không tan còn lại chính là Cu/Ag!). Chỉ viết PTHH cho Mg, Al, Zn, Fe.',
      ex:'Cho 10 g hỗn hợp bột Fe và Cu vào HCl dư thu được 2,479 L khí H₂ (25 °C, 1 bar; Fe=56). Tính khối lượng Cu trong hỗn hợp.',
      sol:'Cu không phản ứng; n_H₂ = 0,1 mol ⇒ n_Fe = 0,1 mol ⇒ m_Fe = 5,6 g ⇒ m_Cu = 10 − 5,6 = 4,4 g.'
    },
    {
      name:'Dạng 3: Bài toán phản ứng trung hòa Acid + Base → Muối + H₂O',
      method:'Viết đúng tỉ lệ PTHH (chú ý H₂SO₄ có 2H, Ca(OH)₂ có 2 nhóm OH!), tính số mol n = C_M · V để tìm thể tích hoặc khối lượng muối.',
      ex:'Trung hòa hết 100 mL dung dịch H₂SO₄ 1 M cần bao nhiêu gam NaOH (M = 40)?',
      sol:'n_(H₂SO₄) = 0,1 mol; H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O ⇒ n_NaOH = 0,2 mol ⇒ m_NaOH = 0,2 × 40 = 8 g.'
    }
  ],

  'l8-oxide-muoi': [
    {
      name:'Dạng 1: Phân loại 4 nhóm Oxide và gọi tên Oxide – Muối theo danh pháp quốc tế',
      method:'Oxide base (CaO, CuO, Fe₂O₃); Oxide acid (CO₂, SO₂, SO₃, P₂O₅); Lưỡng tính (Al₂O₃, ZnO); Trung tính (CO, NO). Kim loại đa hóa trị phải kèm số La Mã: FeCl₂ Iron(II) chloride.',
      ex:'Phân loại các oxide: Na₂O, P₂O₅, ZnO, NO.',
      sol:'Na₂O: oxide base; P₂O₅: oxide acid; ZnO: oxide lưỡng tính; NO: oxide trung tính.'
    },
    {
      name:'Dạng 2: Điều kiện phản ứng trao đổi trong dung dịch & bài toán CO₂ sục vào Ca(OH)₂ dư',
      method:'Phản ứng trao đổi chỉ xảy ra khi tạo kết tủa (BaSO₄↓, AgCl↓, CaCO₃↓, Cu(OH)₂↓), khí (CO₂↑, NH₃↑) hoặc H₂O.',
      ex:'Sục 3,7185 L khí CO₂ (25 °C, 1 bar) vào dung dịch Ca(OH)₂ dư. Tính khối lượng kết tủa thu được.',
      sol:'n_CO₂ = \\frac{3,7185}{24,79} = 0,15 mol ⇒ n_(CaCO₃) = 0,15 mol ⇒ m_(CaCO₃) = 0,15 × 100 = 15 g.'
    },
    {
      name:'Dạng 3: Tính hàm lượng dinh dưỡng trong phân bón hóa học (Đạm, Lân, Kali, NPK)',
      method:'Kí hiệu NPK x-y-z cho biết lần lượt % khối lượng N, P₂O₅ và K₂O trong phân bón. Không trộn phân đạm ammonium (NH₄⁺) với vôi vì thất thoát khí NH₃.',
      ex:'Một bao phân NPK 16-16-8 nặng 25 kg chứa bao nhiêu kg nguyên tố Nitrogen (N)?',
      sol:'m_N = 25 × 16% = 4 kg.'
    }
  ],

  'l8-dien': [
    {
      name:'Dạng 1: Giải thích hiện tượng nhiễm điện do cọ xát và quy ước chiều dòng điện',
      method:'Vật nhận thêm electron → nhiễm điện âm (−); mất bớt electron → nhiễm điện dương (+). Cùng dấu đẩy, trái dấu hút. Chiều dòng điện quy ước: từ cực (+) qua thiết bị tới cực (−).',
      ex:'Quả cầu A nhiễm điện dương (+) hút quả cầu B, còn B lại đẩy quả cầu C. Xác định dấu điện tích của C.',
      sol:'B đẩy C nên B và C đều mang điện và cùng dấu; mà A (+) hút B nên B mang điện âm (−) ⇒ C cũng mang điện âm (−).'
    },
    {
      name:'Dạng 2: Cách mắc Ampe kế – Vôn kế và tính I, U trong mạch nối tiếp / song song',
      method:'Mạch nối tiếp: I = I₁ = I₂ và U = U₁ + U₂. Mạch song song: U = U₁ = U₂ và I = I₁ + I₂ (nhớ đổi 1 A = 1000 mA).',
      ex:'Hai đèn mắc song song vào nguồn 6 V; dòng qua đèn 1 là 300 mA, qua đèn 2 là 0,45 A. Tìm U mỗi đèn và số chỉ ampe kế mạch chính.',
      sol:'Song song nên U₁ = U₂ = 6 V; đổi 300 mA = 0,3 A ⇒ I = 0,3 + 0,45 = 0,75 A.'
    }
  ],

  'l8-co-the-nguoi': [
    {
      name:'Dạng 1: Thành phần máu, miễn dịch và sơ đồ truyền máu an toàn hệ ABO',
      method:'Nhóm O không có kháng nguyên A, B trên hồng cầu (truyền được cho 4 nhóm); nhóm AB không có kháng thể α, β trong huyết tương (nhận được cả 4 nhóm). Ưu tiên truyền cùng nhóm.',
      ex:'Người có nhóm máu A có thể nhận máu (lượng nhỏ khi cấp cứu) từ những nhóm máu nào trong hệ ABO?',
      sol:'Nhận được từ nhóm A (cùng nhóm) và nhóm O.'
    },
    {
      name:'Dạng 2: Vòng tuần hoàn máu, trao đổi khí ở phổi và quá trình lọc máu ở cầu thận',
      method:'Mỗi ngày cầu thận lọc khoảng 170 L nước tiểu đầu nhưng ống thận hấp thụ lại ~99% nước, glucose, ion cần thiết nên chỉ thải ~1,5 L nước tiểu chính thức.',
      ex:'Nếu trong nước tiểu chính thức của bệnh nhân xét nghiệm thấy có nhiều đường glucose hoặc protein thì cơ quan nào đang tổn thương?',
      sol:'Có protein do màng lọc cầu thận bị tổn thương; có nhiều glucose thường do đường huyết quá cao vượt ngưỡng tái hấp thụ của ống thận (bệnh tiểu đường).'
    }
  ],

  'l8-nhiet': [
    {
      name:'Dạng 1: Nhận diện và giải thích thực tế 3 hình thức truyền nhiệt (Dẫn nhiệt – Đối lưu – Bức xạ)',
      method:'Chất rắn: dẫn nhiệt; Chất lỏng & khí: đối lưu (nóng đi lên, lạnh đi xuống); Chân không/tia nhiệt: bức xạ nhiệt (vật màu sẫm hấp thụ mạnh, vật sáng bóng phản xạ tốt).',
      ex:'Vì sao đun nước phải đun từ đáy ấm còn làm lạnh thực phẩm lại đặt đá lạnh ở phía trên?',
      sol:'Để tạo dòng đối lưu tự nhiên: nước nóng ở đáy nhẹ hơn nổi lên trên, còn không khí lạnh ở trên nặng hơn chìm xuống làm lạnh đều thực phẩm.'
    },
    {
      name:'Dạng 2: Bài toán tính nhiệt lượng Q = m · c · Δt và ứng dụng sự nở vì nhiệt',
      method:'Đổi khối lượng m ra kg (1 L nước ≈ 1 kg), tính Δt = |t₂ − t₁|, áp dụng Q = m · c · Δt (J; chia 1000 đổi ra kJ). Băng kép khi nóng cong về phía kim loại nở ÍT hơn.',
      ex:'Tính nhiệt lượng (theo kJ) cần cung cấp để đun sôi 2 lít nước từ 25 °C lên 100 °C, cho c_nước = 4200 J/(kg·K).',
      sol:'m = 2 kg, Δt = 100 − 25 = 75 °C ⇒ Q = 2 × 4200 × 75 = 630 000 J = 630 kJ.'
    }
  ],

  'l8-than-kinh-noi-tiet': [
    {
      name:'Dạng 1: Phân tích 5 khâu của cung phản xạ và tật khúc xạ của mắt (Cận thị – Viễn thị)',
      method:'Cận thị (cầu mắt dài / thể thủy tinh quá phồng → ảnh hiện TRƯỚC màng lưới) đeo kính PHÂN KÌ; Viễn thị (ảnh hiện SAU màng lưới) đeo kính HỘI TỤ.',
      ex:'Học sinh ngồi bàn cuối nhìn bảng bị nhòe nhưng đưa sách lại sát mắt thì đọc rõ. Học sinh đó mắc tật gì và đeo kính gì?',
      sol:'Mắc tật cận thị; cần đeo kính cận là thấu kính phân kì có tiêu cự phù hợp.'
    },
    {
      name:'Dạng 2: Vai trò các tuyến nội tiết (Tuyến yên, Tuyến giáp, Tuyến tụy điều hòa đường huyết)',
      method:'Sau bữa ăn đường huyết tăng → Tuyến tụy tiết Insulin chuyển glucose thành glycogen dự trữ ở gan; khi đói đường huyết hạ → tiết Glucagon phân giải glycogen thành glucose.',
      ex:'Thiếu hormone nào của tuyến tụy gây ra bệnh đái tháo đường (tiểu đường)?',
      sol:'Thiếu hormone Insulin (hoặc tế bào giảm đáp ứng với insulin) làm glucose trong máu không chuyển hóa được thành glycogen.'
    }
  ],

  'l8-he-sinh-thai': [
    {
      name:'Dạng 1: Phân biệt Quần thể – Quần xã – Hệ sinh thái và các mối quan hệ sinh thái',
      method:'Quần thể gồm các cá thể CÙNG LOÀI; Quần xã gồm NHIỀU quần thể khác loài; Hệ sinh thái = Quần xã + Sinh cảnh vô sinh.',
      ex:'Tất cả các con cá chép sống trong Hồ Tây tạo thành cấp độ tổ chức nào? Còn toàn bộ sinh vật trong Hồ Tây là cấp độ nào?',
      sol:'Các con cá chép cùng loài là một Quần thể; toàn bộ sinh vật các loài trong hồ là một Quần xã.'
    },
    {
      name:'Dạng 2: Lập chuỗi thức ăn, xác định bậc dinh dưỡng & mắt xích chung trong lưới thức ăn',
      method:'Chuỗi thức ăn bắt đầu bằng Sinh vật sản xuất (thực vật/tảo quang hợp) → Sinh vật tiêu thụ bậc 1 (ăn cỏ) → bậc 2 → bậc 3 → Sinh vật phân giải.',
      ex:'Cho các sinh vật: Lúa, Châu chấu, Ếch đồng, Rắn hổ mang, Vi sinh vật. Hãy sắp xếp thành 1 chuỗi thức ăn hợp lí.',
      sol:'Lúa → Châu chấu → Ếch đồng → Rắn hổ mang → Vi sinh vật phân giải.'
    }
  ],

  // =========================================================================
  // LỚP 6 & LỚP 9 – TÓM TẮT CÁC DẠNG BÀI CỐT LÕI
  // =========================================================================
  'l6-mo-dau': [
    { name:'Dạng 1: Đổi đơn vị đo chiều dài, khối lượng, thời gian và nhiệt độ', method:'1 m = 100 cm = 1000 mm; 1 kg = 1000 g; 1 h = 3600 s; t_(°F) = t_(°C) × 1,8 + 32.', ex:'Đổi 37 °C (thân nhiệt người) sang độ °F.', sol:'37 × 1,8 + 32 = 98,6 °F.' }
  ],
  'l6-the-chat': [
    { name:'Dạng 1: Xác định tên quá trình chuyển thể của chất', method:'Rắn → Lỏng (nóng chảy); Lỏng → Rắn (đông đặc); Lỏng → Khí (bay hơi/sôi); Khí → Lỏng (ngưng tụ).', ex:'Sương đọng trên lá cây vào buổi sáng sớm là sự chuyển thể nào?', sol:'Sự ngưng tụ (hơi nước trong không khí lạnh đi chuyển thành giọt nước lỏng).' }
  ],
  'l6-oxy-kk': [
    { name:'Dạng 1: Thành phần không khí và nhận biết khí Oxygen', method:'Không khí gồm ~78% N₂, 21% O₂, 1% khí khác. Nhận biết O₂ bằng que đóm còn tàn đỏ (bùng cháy).', ex:'Úp cốc thủy tinh kín lên ngọn nến đang cháy, vì sao một lát sau nến tắt?', sol:'Khi lượng O₂ trong cốc bị đốt cạn hết thì sự cháy không duy trì được nữa.' }
  ],
  'l6-vat-lieu': [
    { name:'Dạng 1: Phân biệt Vật liệu – Nguyên liệu – Nhiên liệu – Lương thực, thực phẩm & sử dụng an toàn', method:'Kim loại dẫn điện/nhiệt; nhựa, cao su cách điện; đá vôi, quặng là nguyên liệu; than, xăng, gas là nhiên liệu. Cung cấp đủ O₂ để nhiên liệu cháy hoàn toàn.', ex:'Vì sao không được đốt than tổ ong trong phòng kín?', sol:'Cháy thiếu O₂ sinh ra khí độc CO không màu, không mùi gây ngạt nguy hiểm.' }
  ],
  'l6-hon-hop': [
    { name:'Dạng 1: Lựa chọn phương pháp tách chất ra khỏi hỗn hợp', method:'Không tan trong lỏng → Lọc; Tan không bay hơi (muối) → Cô cạn; Hai chất lỏng không tan vào nhau (dầu + nước) → Chiết bằng phễu chiết.', ex:'Làm thế nào tách riêng dầu ăn ra khỏi hỗn hợp dầu ăn lẫn nước?', sol:'Dùng phễu chiết (dầu ăn nhẹ hơn nổi lên lớp trên, xả lớp nước ở dưới ra trước).' }
  ],
  'l6-te-bao': [
    { name:'Dạng 1: Tính số tế bào con tạo thành sau k lần phân chia', method:'Từ a tế bào ban đầu sau k lần phân chia liên tiếp tạo ra: N = a · 2ᵏ tế bào.', ex:'Từ 1 tế bào sau 4 lần phân chia liên tiếp tạo ra bao nhiêu tế bào con?', sol:'N = 2⁴ = 16 tế bào.' }
  ],
  'l6-co-the': [
    { name:'Dạng 1: Phân biệt cơ thể đơn bào – đa bào và 5 cấp độ tổ chức cơ thể đa bào', method:'Đơn bào gồm 1 tế bào (vi khuẩn, trùng roi). Đa bào sắp xếp từ nhỏ đến lớn: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.', ex:'Lá cây, dạ dày, quả tim thuộc cấp độ tổ chức nào của cơ thể đa bào?', sol:'Thuộc cấp độ Cơ quan (cấu tạo từ nhiều mô cùng thực hiện chức năng).' }
  ],
  'l7-sinh-truong': [
    { name:'Dạng 1: Phân biệt mô phân sinh đỉnh – mô phân sinh bên và vòng đời biến thái', method:'Mô phân sinh đỉnh làm cây dài ra; mô phân sinh bên làm thân cây gỗ to ngang. Ếch, bướm, muỗi phát triển qua biến thái hoàn toàn.', ex:'Vì sao nông dân bấm ngọn cây bầu, bí khi cây đã leo giàn?', sol:'Loại bỏ ưu thế đỉnh để chồi nách mọc nhiều nhánh bên ra nhiều hoa, quả.' }
  ],
  'l6-phan-loai': [
    { name:'Dạng 1: Sắp xếp 7 bậc phân loại sinh vật và nhận diện 5 giới sinh vật', method:'Từ lớn đến nhỏ: Giới → Ngành → Lớp → Bộ → Họ → Chi → Loài. Virus chưa có cấu tạo tế bào.', ex:'Nấm men, nấm rơm thuộc giới sinh vật nào?', sol:'Giới Nấm (không có lục lạp, sống dị dưỡng hoại sinh).' }
  ],
  'l6-luc': [
    { name:'Dạng 1: Tính trọng lượng từ khối lượng (P = 10m) và phân biệt ma sát lợi – hại', method:'Đổi khối lượng m ra kg rồi nhân 10: P = 10 · m (N).', ex:'Một bao gạo nặng 15 kg có trọng lượng khoảng bao nhiêu N?', sol:'P = 10 × 15 = 150 N.' }
  ],
  'l6-nang-luong': [
    { name:'Dạng 1: Nhận biết sự chuyển hóa năng lượng và nguồn năng lượng tái tạo', method:'Bảo toàn năng lượng: năng lượng chuyển từ dạng này sang dạng khác. Gió, mặt trời, nước chảy là năng lượng tái tạo.', ex:'Khi bật quạt điện, điện năng đã chuyển hóa chủ yếu thành dạng năng lượng có ích nào?', sol:'Chuyển hóa chủ yếu thành cơ năng (động năng cánh quạt) và một phần nhỏ nhiệt năng.' }
  ],
  'l6-trai-dat': [
    { name:'Dạng 1: Giải thích ngày – đêm, các pha Mặt Trăng và Nhật thực – Nguyệt thực', method:'Trái Đất tự quay sinh ra ngày – đêm; Nhật thực khi Mặt Trăng che Mặt Trời; Nguyệt thực khi Trái Đất che Mặt Trăng.', ex:'Nguyệt thực xảy ra vào đêm trăng nào và vị trí 3 thiên thể ra sao?', sol:'Đêm rằm (trăng tròn), khi Trái Đất nằm giữa Mặt Trời và Mặt Trăng.' }
  ],
  'l9-nang-luong-co': [
    { name:'Dạng 1: Tính động năng, thế năng, cơ năng, công và công suất cơ học', method:'W_đ = \\frac{1}{2}mv²; W_t = 10mh; A = F·s; P = \\frac{A}{t} (nhớ đổi đơn vị về kg, m, s).', ex:'Cần cẩu nâng vật 200 kg lên cao 6 m trong 10 s. Tính công và công suất.', sol:'P_trọng = 2000 N ⇒ A = 2000 × 6 = 12 000 J; công suất P = \\frac{12000}{10} = 1200 W.' }
  ],
  'l9-anh-sang': [
    { name:'Dạng 1: Khúc xạ ánh sáng, phản xạ toàn phần và ảnh qua thấu kính', method:'Truyền từ không khí vào nước: r < i. Thấu kính hội tụ: d > f cho ảnh thật ngược chiều; d < f cho ảnh ảo cùng chiều lớn hơn vật.', ex:'Vật đặt trước thấu kính hội tụ có tiêu cự f = 12 cm ở khoảng cách d = 8 cm cho ảnh tính chất gì?', sol:'Vì d < f nên cho ảnh ảo, cùng chiều và lớn hơn vật (nguyên lí kính lúp).' }
  ],
  'l9-dien-ohm': [
    { name:'Dạng 1: Áp dụng định luật Ohm và tính điện trở tương đương mạch nối tiếp – song song', method:'I = \\frac{U}{R}; nối tiếp R_nt = R₁ + R₂; song song R_ss = \\frac{R₁·R₂}{R₁ + R₂}; dây dẫn R = \\frac{ρ·l}{S}.', ex:'Mắc song song R₁ = 6 Ω và R₂ = 12 Ω vào nguồn U = 12 V. Tính R_tđ và dòng điện mạch chính.', sol:'R_tđ = \\frac{6×12}{6+12} = 4 Ω ⇒ I = \\frac{12}{4} = 3 A.' }
  ],
  'l9-nang-luong-dien': [
    { name:'Dạng 1: Tính công suất điện, điện năng tiêu thụ (kW·h) và tiền điện', method:'P = U·I (W); điện năng theo số điện: A_(kW·h) = P_(kW) · t_(giờ).', ex:'Ấm điện 220 V – 1100 W đun mỗi ngày 0,5 giờ trong 30 ngày. Tính số kW·h điện tiêu thụ.', sol:'P = 1,1 kW; tổng t = 15 h ⇒ A = 1,1 × 15 = 16,5 kW·h.' }
  ],
  'l9-cam-ung': [
    { name:'Dạng 1: Bài toán máy biến áp và truyền tải điện năng đi xa', method:'\\frac{U₁}{U₂} = \\frac{N₁}{N₂} ⇒ U₂ = U₁ · \\frac{N₂}{N₁}. N₂ > N₁ là máy tăng áp; N₂ < N₁ là máy hạ áp.', ex:'Cuộn sơ cấp có 2200 vòng nối điện 220 V, muốn lấy ra U₂ = 12 V thì cuộn thứ cấp cần bao nhiêu vòng?', sol:'N₂ = 2200 × \\frac{12}{220} = 120 vòng.' }
  ],
  'l9-kim-loai': [
    { name:'Dạng 1: Dãy hoạt động hóa học của kim loại (tác dụng acid và đẩy muối)', method:'Kim loại trước H tác dụng HCl/H₂SO₄ loãng; kim loại mạnh hơn (từ Mg trở đi) đẩy kim loại yếu hơn ra khỏi muối.', ex:'Ngâm đinh sắt dư vào 100 mL dung dịch CuSO₄ 1 M. Tính khối lượng đồng bám ra (Cu=64).', sol:'Fe + CuSO₄ → FeSO₄ + Cu↓; n_Cu = 0,1 mol ⇒ m_Cu = 6,4 g.' }
  ],
  'l9-phi-kim': [
    { name:'Dạng 1: Tính chất của Carbon, CO₂, Chlorine và hợp chất Silicate', method:'Cl₂ oxi hóa mạnh kim loại lên hóa trị cao (2Fe + 3Cl₂ → 2FeCl₃); CO₂ làm đục nước vôi trong.', ex:'Đốt cháy hoàn toàn 5,6 g Fe (M=56) trong khí Cl₂ dư thu được bao nhiêu gam FeCl₃ (M=162,5)?', sol:'n_Fe = 0,1 mol ⇒ n_(FeCl₃) = 0,1 mol ⇒ m = 16,25 g.' }
  ],
  'l9-huu-co': [
    { name:'Dạng 1: Nhận biết Methane, Ethylene, Ethanol, Acetic acid & bài toán đốt cháy', method:'Ethylene làm mất màu dung dịch Br₂; Acetic acid làm quỳ hóa đỏ và tác dụng Na, CaCO₃, C₂H₅OH.', ex:'Đốt cháy hoàn toàn 0,2 mol CH₄ cần bao nhiêu lít O₂ ở 25 °C, 1 bar?', sol:'CH₄ + 2O₂ → CO₂ + 2H₂O ⇒ n_O₂ = 0,4 mol ⇒ V = 0,4 × 24,79 = 9,916 L.' }
  ],
  'l9-lipid-carb': [
    { name:'Dạng 1: Phản ứng xà phòng hóa chất béo, lên men glucose và trùng hợp polymer', method:'Glucose C₆H₁₂O₆ lên men tạo 2C₂H₅OH + 2CO₂; tinh bột gặp iodine hóa xanh tím; lòng trắng trứng đông tụ khi đun nóng.', ex:'Lên men hoàn toàn 180 g glucose (M=180) thu được tối đa bao nhiêu gam ethanol C₂H₅OH (M=46)?', sol:'n_glucose = 1 mol ⇒ n_ethanol = 2 mol ⇒ m = 2 × 46 = 92 g.' }
  ],
  'l9-di-truyen': [
    { name:'Dạng 1: Phép lai một cặp tính trạng của Mendel và bài toán bộ NST 2n', method:'Aa × Aa → 1AA : 2Aa : 1aa (3 trội : 1 lặn); Aa × aa → 1Aa : 1aa (1 trội : 1 lặn).', ex:'Ở đậu Hà Lan hạt vàng (A) trội hoàn toàn so với hạt xanh (a). Lai đậu hạt vàng dị hợp với hạt xanh thu được tỉ lệ kiểu hình nào?', sol:'Aa × aa → 1Aa : 1aa ⇒ 50% hạt vàng : 50% hạt xanh.' }
  ],
  'l9-tien-hoa': [
    { name:'Dạng 1: Cơ chế chọn lọc tự nhiên và các bằng chứng tiến hóa', method:'Biến dị cá thể xuất hiện ngẫu nhiên → Chọn lọc tự nhiên giữ lại kiểu hình thích nghi, đào thải kém thích nghi.', ex:'Vì sao lạm dụng thuốc kháng sinh làm vi khuẩn kháng thuốc ngày càng phổ biến?', sol:'Thuốc kháng sinh là nhân tố chọn lọc giữ lại các vi khuẩn sẵn mang đột biến kháng thuốc tiếp tục sinh sản nhân nhanh.' }
  ],
  'l9-mo-dau': [
    { name:'Dạng 1: Quy tắc an toàn hóa chất hữu cơ dễ cháy & cấu trúc bài thuyết trình khoa học', method:'Na bảo quản trong dầu hỏa; cồn C₂H₅OH dễ bay hơi bắt lửa nên để xa nguồn nhiệt. Báo cáo khoa học gồm: Mở đầu → Phương pháp → Kết quả & thảo luận → Kết luận.', ex:'Vì sao kim loại Sodium (Na) phải ngâm chìm trong dầu hỏa khan?', sol:'Ngăn Na tiếp xúc và phản ứng mãnh liệt với oxygen và hơi nước trong không khí.' }
  ],
  'l9-nang-luong-song': [
    { name:'Dạng 1: So sánh năng lượng hóa thạch và các nguồn năng lượng tái tạo sạch', method:'Hóa thạch (than, dầu, khí) hữu hạn và phát thải CO₂ gây hiệu ứng nhà kính; Năng lượng tái tạo (Mặt Trời, gió, nước, sinh khối) bền vững, ít ô nhiễm.', ex:'Pin mặt trời chuyển hóa trực tiếp dạng năng lượng nào thành điện năng?', sol:'Chuyển hóa trực tiếp quang năng (ánh sáng Mặt Trời) thành điện năng.' }
  ],
  'l9-ancol-axit': [
    { name:'Dạng 1: Tính độ cồn, nhận biết C₂H₅OH – CH₃COOH và phản ứng ester hóa', method:'Độ cồn = (V_rượu / V_dd) × 100°. CH₃COOH làm quỳ tím hóa đỏ và sủi bọt CO₂ với CaCO₃/NaHCO₃; đun với C₂H₅OH (xt H₂SO₄ đặc) tạo ester mùi thơm CH₃COOC₂H₅.', ex:'Tính thể tích C₂H₅OH nguyên chất có trong 250 mL cồn 70°.', sol:'V = 250 × 70 / 100 = 175 mL.' }
  ],
  'l9-nhiem-sac-the': [
    { name:'Dạng 1: So sánh Nguyên phân – Giảm phân, cơ chế xác định giới tính XX/XY và bệnh di truyền người', method:'Ở người 2n = 46, giao tử n = 23. Nguyên phân giữ nguyên 2n (k lần tạo 2ᵏ tế bào); Giảm phân tạo 4 tế bào đơn bội n. Hội chứng Down có 3 NST số 21 (47 NST).', ex:'Từ 1 tế bào sinh dưỡng người (2n = 46) nguyên phân 3 lần tạo bao nhiêu tế bào con?', sol:'N = 2³ = 8 tế bào con (mỗi tế bào vẫn mang 2n = 46 NST).' }
  ],
  'l9-tai-nguyen': [
    { name:'Dạng 1: Khai thác bền vững tài nguyên, chu trình Carbon và giảm phát thải khí nhà kính', method:'Giảm đốt nhiên liệu hóa thạch (than, dầu, khí), chuyển sang năng lượng tái tạo và trồng rừng hấp thụ CO₂.', ex:'Giải thích mối liên hệ giữa chặt phá rừng và hiện tượng nóng lên toàn cầu.', sol:'Mất rừng làm giảm lượng CO₂ được quang hợp hấp thụ, khiến nồng độ CO₂ khí quyển tăng gây hiệu ứng nhà kính mạnh hơn.' }
  ]
};

window.KHTNTypes = {
  getForTopic: function(topic){
    if (!topic) return [];
    var list = window.KHTN_TYPES && window.KHTN_TYPES[topic.id];
    if (list && list.length) return list;
    if (topic.examples && topic.examples.length) {
      return topic.examples.map(function(ex, i){
        return {
          name: 'Dạng ' + (i + 1) + ': Vận dụng trọng tâm bài học',
          method: (topic.formulas && topic.formulas[i]) ? String(topic.formulas[i]).split(' || ')[0] : '',
          ex: ex.q,
          sol: (ex.steps || []).join(' → ') + (ex.ans ? ' ⇒ Đáp số: ' + ex.ans : '')
        };
      });
    }
    return [];
  },

  getForTopics: function(topics){
    var out = [];
    (topics || []).forEach(function(t){
      if (!t) return;
      var ts = window.KHTNTypes.getForTopic(t);
      if (ts.length) {
        out.push({ id: t.id, grade: t.grade, title: t.title, types: ts });
      }
    });
    return out;
  }
};
