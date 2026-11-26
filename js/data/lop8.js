window.KHTN = window.KHTN || [];
// LỚP 8 – Theo đúng Mục lục SGK Khoa học tự nhiên 8 (Bộ Kết nối tri thức với cuộc sống – Bộ SGK thống nhất toàn quốc theo QĐ 3588/QĐ-BGDĐT).
// Điều kiện chuẩn chất khí: 25 °C, 1 bar ⇒ 1 mol khí chiếm 24,79 L.
// Cấu trúc củng cố từ Dễ đến Khó: d=1 Nhận biết (Dễ), d=2 Thông hiểu (TB), d=3 Vận dụng (Khá), d=4 Vận dụng cao (Khó).
KHTN.push(
{ id:'l8-thi-nghiem', grade:8, term:'HK1', stage:1, weeks:'Tuần 1', periods:4, order:1, chapCode:'Mở đầu', chapTitle:'Mở đầu môn Khoa học tự nhiên 8', sgk:'Bài 1', subj:'td', title:'Sử dụng hóa chất, thiết bị cơ bản & an toàn phòng thí nghiệm', prereq:['l6-mo-dau'],
  theory:[
    'Dụng cụ thí nghiệm hóa – sinh phổ biến ở lớp 8: ống nghiệm (làm phản ứng lượng nhỏ), bình tam giác (chuẩn độ, lắc dung dịch không sánh), cốc thủy tinh, ống đong (đo thể tích), phễu lọc, ống hút nhỏ giọt (lấy lượng nhỏ chất lỏng), kẹp gỗ (kẹp ở vị trí 1/3 ống nghiệm tính từ miệng xuống).',
    'Thiết bị điện và nhiệt ở lớp 8: biến áp nguồn (cung cấp điện áp một chiều DC và xoay chiều AC an toàn 3 V – 12 V), ampe kế, vôn kế, công tắc, biến trở, đèn LED (chỉ cho dòng điện đi theo 1 chiều vào cực dương dài hơn), joulemeter (đo năng lượng điện/nhiệt).',
    'Quy tắc lấy hóa chất: KHÔNG dùng tay trực tiếp cầm hóa chất, không đổ hóa chất thừa ngược lại lọ gốc; lấy hóa chất rắn dạng bột bằng thìa thủy tinh/nhựa, dạng hạt bằng panh gắp; đậy đúng nắp lọ ngay sau khi lấy.',
    'Đun nóng ống nghiệm: hơ đều cả ống trên ngọn lửa đèn cồn trước rồi mới đun tập trung ở đáy, nghiêng ống khoảng 45°, hướng miệng ống về phía KHÔNG có người, lượng chất lỏng không quá 1/3 thể tích ống nghiệm.',
    'Quy tắc vàng khi pha loãng sulfuric acid đặc (H₂SO₄ đặc): RÓT TỪ TỪ ACID ĐẶC VÀO NƯỚC và khuấy nhẹ bằng đũa thủy tinh; TUYỆT ĐỐI KHÔNG rót nước vào acid đặc (vì tỏa nhiệt rất mạnh làm nước sôi đột ngột bắn acid gây bỏng nặng).'
  ],
  formulas:[
    'Kẹp ống nghiệm: tại vị trí 1/3 chiều dài tính từ miệng ống xuống; chất lỏng ≤ 1/3 ống',
    'Pha loãng H₂SO₄ đặc: Rót từ từ ACID ĐẶC → vào NƯỚC (khuấy đều), KHÔNG làm ngược lại',
    'Đèn LED: bản cực chân dài nối cực dương (+), chân ngắn nối cực âm (−)'
  ],
  examples:[
    {
      q:'(Cơ bản) Sau khi lấy dung dịch HCl từ lọ ra ống nghiệm nhưng lỡ lấy hơi dư, học sinh có nên đổ phần dư trở lại lọ hóa chất ban đầu không? Vì sao?',
      steps:[
        'Quy tắc phòng thí nghiệm nghiêm cấm đổ hóa chất thừa trở lại lọ gốc.',
        'Lí do: hóa chất đã ra ngoài có thể bị lẫn tạp chất từ ống nghiệm/không khí, làm hỏng cả lọ hóa chất tinh khiết.'
      ],
      ans:'Không được đổ lại lọ gốc; phải thu gom xử lí theo hướng dẫn của giáo viên.'
    },
    {
      q:'(Vận dụng) Khi muốn pha loãng dung dịch H₂SO₄ đặc an toàn, em phải thao tác theo thứ tự nào?',
      steps:[
        'Chuẩn bị cốc thủy tinh chịu nhiệt đã chứa sẵn lượng nước cất cần thiết.',
        'Rót rất từ từ dòng nhỏ H₂SO₄ đặc theo đũa thủy tinh vào nước và khuấy đều liên tục để tản nhiệt.'
      ],
      ans:'Rót từ từ H₂SO₄ đặc vào nước và khuấy đều (tuyệt đối không rót nước vào acid đặc).'
    }
  ],
  questions:[
    {d:1,q:'Dụng cụ nào dùng để lấy từng giọt nhỏ dung dịch hóa chất lỏng trong phòng thí nghiệm?',o:['Ống hút nhỏ giọt (pipette nhỏ giọt)','Thìa xúc hóa chất','Panh gắp','Lưới tản nhiệt'],w:'Ống hút nhỏ giọt có đầu bóp cao su giúp lấy lượng nhỏ chất lỏng an toàn.'},
    {d:1,q:'Khi kẹp ống nghiệm bằng kẹp gỗ để đun nóng, ta kẹp ở vị trí nào là đúng quy tắc?',o:['Cách miệng ống nghiệm khoảng 1/3 chiều dài ống','Ngay sát đáy ống nghiệm','Ngay mép trên cùng miệng ống','Chính giữa đáy ống'],w:'Kẹp ở 1/3 từ miệng xuống giúp giữ chắc và tránh cháy kẹp gỗ.'},
    {d:1,q:'Thiết bị nào cung cấp nguồn điện áp thấp an toàn (3 V, 6 V, 9 V, 12 V) cho thí nghiệm điện học lớp 8?',o:['Biến áp nguồn','Ổ cắm điện lưới 220 V trực tiếp','Nhiệt kế điện tử','Cổng quang điện'],w:'Biến áp nguồn hạ điện áp 220 V xuống mức thấp an toàn cho học sinh.'},
    {d:2,q:'Khi đun nóng chất lỏng trong ống nghiệm trên ngọn lửa đèn cồn, hướng miệng ống nghiệm phải đặt như thế nào?',o:['Nghiêng và hướng về phía KHÔNG có người','Hướng thẳng vào mặt người làm để dễ nhìn','Hướng về phía bạn đối diện','Bịt kín nút cao su rồi đun thật mạnh'],w:'Tránh chất lỏng sôi phụt ra gây bỏng cho mình và người xung quanh.'},
    {d:2,q:'Cách pha loãng dung dịch sulfuric acid (H₂SO₄) đặc nào sau đây là AN TOÀN?',o:['Rót từ từ acid đặc vào nước và khuấy đều','Rót thật nhanh nước vào lọ acid đặc','Đổ đồng thời nước vào cốc đang chứa acid đặc','Lắc mạnh bình đậy kín chứa acid đặc và nước'],w:'Rót từ từ acid đặc vào nước để nhiệt tỏa ra được nước hấp thụ dần, không bắn tung tóe.'},
    {d:2,q:'Để đèn LED phát sáng trong mạch điện một chiều, cách mắc nào là đúng?',o:['Chân dài (cực dương) nối với cực dương của nguồn, chân ngắn nối cực âm','Chân ngắn nối cực dương, chân dài nối cực âm','Cả hai chân nối cùng vào cực dương','Mắc chiều nào đèn LED cũng sáng như nhau'],w:'Đèn LED chỉ cho dòng điện đi qua theo một chiều từ cực dương (+) sang cực âm (−).'},
    {d:3,q:'Khi dập tắt ngọn lửa đèn cồn sau thí nghiệm, thao tác nào là ĐÚNG và an toàn?',o:['Đậy nắp chụp đèn cồn lại để ngăn oxygen','Dùng miệng thổi mạnh vào ngọn lửa','Đổ nước lạnh trực tiếp vào bấc đèn đang cháy','Nghiêng đèn cồn cho cồn chảy ra ngoài'],w:'Thổi bằng miệng dễ làm lửa tạt ngược vào bầu cồn gây nổ; phải dùng nắp chụp đậy kín.'},
    {d:3,q:'Lượng chất lỏng cho vào ống nghiệm khi đun nóng chỉ nên chiếm tối đa bao nhiêu phần thể tích ống nghiệm?',o:['Không quá 1/3 thể tích ống nghiệm','Đầy sát miệng ống nghiệm','Khoảng 4/5 thể tích ống nghiệm','Đúng 9/10 thể tích ống nghiệm'],w:'Chỉ chứa tối đa 1/3 ống để khi sôi chất lỏng không trào bắn ra ngoài.'},
    {d:4,q:'Nếu chẳng may bị giọt dung dịch acid loãng bắn vào da tay trong phòng thực hành, bước sơ cứu ĐẦU TIÊN đúng nhất là gì?',o:['Xả rửa ngay vùng da dưới vòi nước sạch chảy nhẹ trong vài phút rồi báo giáo viên','Dùng dung dịch NaOH đặc bôi ngay lên da','Lấy khăn khô chà mạnh cho thấm vào da','Đợi làm xong bài thí nghiệm mới đi rửa'],w:'Rửa nhiều nước sạch làm loãng và trôi nhanh hóa chất; tuyệt đối không bôi kiềm mạnh gây bỏng kép.'},
    {d:4,q:'Trong thí nghiệm đo năng lượng nhiệt cung cấp cho nước bằng dây điện trở nhúng trong bình nhiệt lượng kế, thiết bị hiện số mắc giữa nguồn điện và dây điện trở để đo trực tiếp năng lượng điện (theo đơn vị J) là gì?',o:['Joulemeter (oat-giây kế / jun kế)','Ống đong chia độ','Lực kế lò xo','Tốc kế'],w:'Joulemeter hiển thị trực tiếp năng lượng điện đã truyền (J).'}
  ]},

{ id:'l8-phan-ung', grade:8, term:'HK1', stage:1, weeks:'Tuần 2–3', periods:8, order:2, chapCode:'Chương I', chapTitle:'Phản ứng hóa học', sgk:'Bài 2 & 5', subj:'hoa', title:'Phản ứng hóa học, Định luật bảo toàn khối lượng & PTHH', prereq:['l7-hoa-tri'],
  theory:[
    'Biến đổi vật lí là hiện tượng chất biến đổi về trạng thái, hình dạng, kích thước… nhưng KHÔNG tạo ra chất mới (nước đá tan, hòa tan muối, uốn dây sắt). Biến đổi hóa học (phản ứng hóa học) là quá trình biến đổi từ chất này thành chất mới khác.',
    'Trong phản ứng hóa học: liên kết giữa các nguyên tử thay đổi làm phân tử này biến đổi thành phân tử khác, còn SỐ NGUYÊN TỬ của mỗi nguyên tố trước và sau phản ứng luôn giữ nguyên. Dấu hiệu nhận biết: đổi màu, sủi bọt khí, xuất hiện kết tủa, tỏa nhiệt hoặc phát sáng.',
    'Năng lượng trong phản ứng: Phản ứng TỎA NHIỆT giải phóng năng lượng dưới dạng nhiệt ra môi trường làm nóng xung quanh (đốt than, cồn, xăng, tôi vôi sống CaO + H₂O); Phản ứng THU NHIỆT nhận nhiệt từ môi trường trong suốt quá trình phản ứng (nung đá vôi CaCO₃, hòa tan viên C sủi làm nước mát đi).',
    'Định luật bảo toàn khối lượng (BTKL): Trong một phản ứng hóa học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng (lưu ý chỉ tính phần chất thực sự đã phản ứng!).',
    'Lập phương trình hóa học (PTHH): viết sơ đồ → cân bằng hệ số sao cho số nguyên tử mỗi nguyên tố hai vế bằng nhau (không được tự ý sửa chỉ số trong CTHH!) → viết dấu mũi tên "→" và ghi điều kiện phản ứng (t°, xt).'
  ],
  formulas:[
    'Định luật bảo toàn khối lượng (với A + B → C + D): m_A + m_B = m_C + m_D || Trong đó: m_A, m_B là khối lượng các chất tham gia thực sự đã phản ứng (g hoặc kg; không tính phần dư hay tạp chất); m_C, m_D là khối lượng các sản phẩm tạo thành.',
    'Bảo toàn khối lượng khi nung đá vôi (thu nhiệt): CaCO₃ —(t°)→ CaO + CO₂↑  ⇒  m_(CaCO₃ phản ứng) = m_CaO + m_CO₂ || Ý nghĩa: Khối lượng chất rắn giảm đi sau khi nung chính bằng khối lượng khí CO₂ đã bay ra khỏi lò.',
    'Bảo toàn khối lượng khi đốt kim loại trong oxygen: m_oxide = m_(kim loại phản ứng) + m_(O₂ phản ứng) || Ý nghĩa: Khối lượng chất rắn tăng thêm sau khi nung ngoài không khí chính bằng khối lượng khí O₂ đã hóa hợp.'
  ],
  examples:[
    {
      q:'(Cơ bản) Cân bằng PTHH: Al + O₂ —(t°)→ Al₂O₃ và cho biết tỉ lệ số nguyên tử Al : số phân tử O₂ : số phân tử Al₂O₃.',
      steps:[
        'Bên trái có 2 nguyên tử O, bên phải có 3 nguyên tử O → bội chung nhỏ nhất là 6: đặt hệ số 3 trước O₂ và 2 trước Al₂O₃.',
        'Khi đó vế phải có 2 × 2 = 4 nguyên tử Al → đặt hệ số 4 trước Al: 4Al + 3O₂ —(t°)→ 2Al₂O₃.',
        'Tỉ lệ là 4 : 3 : 2.'
      ],
      ans:'4Al + 3O₂ → 2Al₂O₃; tỉ lệ 4 : 3 : 2.'
    },
    {
      q:'(Vận dụng cao) Nung một mẫu đá vôi chứa 80% CaCO₃ (còn lại là tạp chất trơ không bị phân hủy) có khối lượng 125 g. Sau phản ứng hoàn toàn thu được 56 g CaO (cùng tạp chất) và khí CO₂ thoát ra. Tính khối lượng khí CO₂ thu được.',
      steps:[
        'Khối lượng CaCO₃ nguyên chất tham gia phản ứng: m(CaCO₃) = 80% × 125 = 100 g.',
        'Áp dụng định luật BTKL cho phản ứng CaCO₃ → CaO + CO₂: m(CaCO₃) = m(CaO) + m(CO₂).',
        'm(CO₂) = 100 − 56 = 44 g.'
      ],
      ans:'44 g CO₂.'
    }
  ],
  questions:[
    {d:1,q:'Hiện tượng nào sau đây là BIẾN ĐỔI HÓA HỌC?',o:['Đinh sắt để lâu trong không khí ẩm bị gỉ nâu đỏ','Nước đá để ngoài không khí tan thành nước lỏng','Hòa tan muối ăn vào nước ấm','Kéo sợi đồng thành dây điện mảnh'],w:'Gỉ sắt là hợp chất mới tạo thành do sắt tác dụng oxygen và hơi nước.'},
    {d:1,q:'Trong một phản ứng hóa học, đại lượng nào sau đây LUÔN ĐƯỢC BẢO TOÀN (không thay đổi)?',o:['Số nguyên tử của mỗi nguyên tố','Số phân tử của các chất','Liên kết giữa các nguyên tử','Tính chất của các chất'],w:'Chỉ liên kết thay đổi làm phân tử biến đổi, còn số nguyên tử mỗi nguyên tố giữ nguyên.'},
    {d:1,q:'Quá trình đốt cháy khí gas (hoặc cồn, than củi) để đun nấu thuộc loại phản ứng nào?',o:['Phản ứng tỏa nhiệt','Phản ứng thu nhiệt','Biến đổi vật lí thuần túy','Sự bay hơi không kèm phản ứng'],w:'Đốt cháy nhiên liệu giải phóng nhiều nhiệt ra môi trường → phản ứng tỏa nhiệt.'},
    {d:2,q:'Cân bằng phương trình Fe + O₂ —(t°)→ Fe₃O₄ với các hệ số nguyên tối giản. Tổng tất cả các hệ số (chất đầu + sản phẩm) bằng bao nhiêu?',n:6,t:0,u:'',w:'3Fe + 2O₂ → 1Fe₃O₄ ⇒ tổng hệ số = 3 + 2 + 1 = 6.'},
    {d:2,q:'Cho phản ứng Fe + S —(t°)→ FeS. Nếu 5,6 g Fe phản ứng vừa đủ với 3,2 g S thì khối lượng FeS thu được là bao nhiêu gam?',n:8.8,t:0.01,u:'g',w:'Theo BTKL: m(FeS) = 5,6 + 3,2 = 8,8 g.'},
    {d:2,q:'Cân bằng phương trình Al + HCl → AlCl₃ + H₂ với các hệ số nguyên tối giản. Hệ số của HCl bằng bao nhiêu?',n:6,t:0,u:'',w:'2Al + 6HCl → 2AlCl₃ + 3H₂ ⇒ hệ số của HCl là 6.'},
    {d:3,q:'Đốt cháy hoàn toàn 4,8 g kim loại Magnesium (Mg) trong khí oxygen thu được 8,0 g Magnesium oxide (MgO). Khối lượng khí oxygen đã phản ứng là bao nhiêu gam?',n:3.2,t:0.01,u:'g',w:'BTKL: m(Mg) + m(O₂) = m(MgO) ⇒ m(O₂) = 8,0 − 4,8 = 3,2 g.'},
    {d:3,q:'Nung nóng 100 g đá vôi CaCO₃ nguyên chất thu được 56 g vôi sống CaO và khí CO₂ thoát ra. Khối lượng CO₂ thoát ra là bao nhiêu gam?',n:44,t:0.1,u:'g',w:'m(CO₂) = 100 − 56 = 44 g.'},
    {d:4,q:'Nung một mẫu đá vôi nặng 150 g, sau một thời gian thấy khối lượng chất rắn còn lại trong lò là 106 g (chỉ có khí CO₂ bay đi). Khối lượng khí CO₂ đã thoát ra là bao nhiêu gam?',n:44,t:0.1,u:'g',w:'Độ giảm khối lượng của chất rắn chính bằng khối lượng khí CO₂ thoát ra: 150 − 106 = 44 g.'},
    {d:4,q:'Cân bằng phương trình đốt cháy C₂H₆O + O₂ —(t°)→ CO₂ + H₂O với hệ số nguyên tối giản. Hệ số của O₂ là bao nhiêu?',n:3,t:0,u:'',w:'1C₂H₆O + 3O₂ → 2CO₂ + 3H₂O (vế phải có 2×2 + 3×1 = 7 nguyên tử O; C₂H₆O đã có 1 O nên cần 6 O = 3O₂).'}
  ]},

{ id:'l8-mol', grade:8, term:'HK1', stage:1, weeks:'Tuần 4–5', periods:6, order:3, chapCode:'Chương I', chapTitle:'Phản ứng hóa học', sgk:'Bài 3', subj:'hoa', title:'Mol, thể tích mol chất khí & tỉ khối chất khí', prereq:['l8-phan-ung'],
  theory:[
    'Mol là lượng chất có chứa N_A = 6,022 × 10²³ hạt vi mô (nguyên tử, phân tử, ion) của chất đó. Hằng số Avogadro N_A = 6,022 × 10²³ mol⁻¹.',
    'Khối lượng mol (kí hiệu M, đơn vị g/mol) của một chất là khối lượng tính bằng gam của N_A nguyên tử hoặc phân tử chất đó; có trị số bằng khối lượng nguyên tử hoặc khối lượng phân tử tính theo amu.',
    'Thể tích mol của chất khí là thể tích chiếm bởi 1 mol phân tử chất khí đó. Ở điều kiện chuẩn (25 °C và 1 bar), 1 mol của BẤT KÌ chất khí nào đều chiếm thể tích bằng nhau là 24,79 lít.',
    'Tỉ khối của khí A đối với khí B cho biết khí A nặng hay nhẹ hơn khí B bao nhiêu lần: d_(A/B) = M_A / M_B. Khối lượng mol trung bình của không khí xấp xỉ 29 g/mol ⇒ d_(A/kk) = M_A / 29.',
    'Lưu ý hay nhầm: Công thức V = n × 24,79 (L) CHỈ áp dụng cho CHẤT KHÍ ở điều kiện chuẩn (25 °C, 1 bar), tuyệt đối không dùng cho chất rắn hay chất lỏng!'
  ],
  formulas:[
    'Tính số mol theo khối lượng chất: n = \\frac{m}{M}  ⇒  m = n · M  ;  M = \\frac{m}{n} || Trong đó: n là số mol chất (mol); m là khối lượng chất (g); M là khối lượng mol (g/mol, có trị số bằng khối lượng nguyên tử/phân tử amu).',
    'Thể tích mol chất khí ở điều kiện chuẩn (25 °C, 1 bar): V_khí = n · 24,79  ⇒  n = \\frac{V_khí}{24,79} || Trong đó: V_khí là thể tích chất khí ở 25 °C, 1 bar (L; 1 L = 1000 mL); n là số mol khí (mol); 24,79 (L/mol) là thể tích của 1 mol mọi chất khí ở đkc (chỉ áp dụng cho chất khí!).',
    'Số hạt vi mô (nguyên tử hoặc phân tử) trong n mol chất: N_hạt = n · 6,022 × 10²³ || Trong đó: N_hạt là tổng số nguyên tử hoặc phân tử; n là số mol chất (mol); 6,022 × 10²³ là hằng số Avogadro (N_A) – số hạt có trong đúng 1 mol chất.',
    'Tỉ khối của khí A đối với khí B và không khí: d_(A/B) = \\frac{M_A}{M_B}  ;  d_(A/không khí) = \\frac{M_A}{29} || Trong đó: d_(A/B) cho biết khí A nặng hay nhẹ hơn khí B bao nhiêu lần (d > 1 là nặng hơn, d < 1 là nhẹ hơn); M_A, M_B là khối lượng mol (g/mol); 29 là khối lượng mol trung bình của không khí.'
  ],
  examples:[
    {
      q:'(Cơ bản) Tính số mol và thể tích ở điều kiện chuẩn (25 °C, 1 bar) của 8,8 g khí CO₂ (C=12, O=16).',
      steps:[
        'Khối lượng mol M(CO₂) = 12 + 2×16 = 44 g/mol.',
        'Số mol CO₂: n = m / M = 8,8 / 44 = 0,2 mol.',
        'Thể tích khí ở 25 °C, 1 bar: V = 0,2 × 24,79 = 4,958 L (≈ 4,96 L).'
      ],
      ans:'n = 0,2 mol; V = 4,958 L.'
    },
    {
      q:'(Vận dụng cao) Hỗn hợp khí X gồm 0,2 mol O₂ (M=32) và 0,3 mol CO₂ (M=44). Tính khối lượng mol trung bình của hỗn hợp X và tỉ khối của X so với khí H₂ (M=2).',
      steps:[
        'Tổng số mol hỗn hợp: n_hh = 0,2 + 0,3 = 0,5 mol.',
        'Tổng khối lượng hỗn hợp: m_hh = 0,2×32 + 0,3×44 = 6,4 + 13,2 = 19,6 g.',
        'M_tb = 19,6 / 0,5 = 39,2 g/mol ⇒ d_(X/H₂) = 39,2 / 2 = 19,6.'
      ],
      ans:'M_tb = 39,2 g/mol; d_(X/H₂) = 19,6.'
    }
  ],
  questions:[
    {d:1,q:'Ở điều kiện chuẩn (25 °C, 1 bar), 1 mol của bất kì chất khí nào đều chiếm thể tích bao nhiêu lít?',n:24.79,t:0.01,u:'L',w:'Theo chuẩn GDPT 2018 (25 °C, 1 bar), thể tích 1 mol khí là 24,79 L.'},
    {d:1,q:'Khối lượng mol (M) của nước H₂O là bao nhiêu g/mol? (H = 1, O = 16)',n:18,t:0,u:'g/mol',w:'M(H₂O) = 2×1 + 16 = 18 g/mol.'},
    {d:1,q:'Muốn biết khí A nặng hay nhẹ hơn không khí bao nhiêu lần, ta dùng công thức nào?',o:['d_(A/kk) = M_A / 29','d_(A/kk) = 29 / M_A','d_(A/kk) = M_A × 24,79','d_(A/kk) = M_A + 29'],w:'Khối lượng mol trung bình của không khí xấp xỉ 29 g/mol.'},
    {d:2,q:'Có bao nhiêu mol phân tử trong 11 g khí CO₂? (C = 12, O = 16)',n:0.25,t:0.005,u:'mol',w:'M(CO₂) = 44 g/mol ⇒ n = 11 / 44 = 0,25 mol.'},
    {d:2,q:'0,5 mol khí oxygen ở 25 °C, 1 bar có thể tích là bao nhiêu lít? (làm tròn 2 chữ số thập phân)',n:12.4,t:0.02,u:'L',w:'V = 0,5 × 24,79 = 12,395 L ≈ 12,40 L.'},
    {d:2,q:'Tỉ khối của khí CO₂ (M = 44) đối với khí H₂ (M = 2) bằng bao nhiêu?',n:22,t:0,u:'',w:'d = 44 / 2 = 22.'},
    {d:3,q:'Khí nào sau đây NHẸ HƠN không khí (thu bằng cách đặt úp bình)? (biết H=1, C=12, N=14, O=16, S=32)',o:['Khí ammonia NH₃ (M = 17)','Khí carbon dioxide CO₂ (M = 44)','Khí sulfur dioxide SO₂ (M = 64)','Khí oxygen O₂ (M = 32)'],w:'M(NH₃) = 17 < 29 nên nhẹ hơn không khí.'},
    {d:3,q:'Khối lượng của 4,958 lít khí N₂ (ở 25 °C, 1 bar; biết N = 14) là bao nhiêu gam?',n:5.6,t:0.02,u:'g',w:'n = 4,958 / 24,79 = 0,2 mol; M(N₂) = 28 g/mol ⇒ m = 0,2 × 28 = 5,6 g.'},
    {d:4,q:'Khí X có tỉ khối đối với khí O₂ (M = 32) bằng 2. Khối lượng mol của khí X là bao nhiêu g/mol?',n:64,t:0,u:'g/mol',w:'M_X = 2 × 32 = 64 g/mol (ví dụ SO₂).'},
    {d:4,q:'Hỗn hợp khí gồm 0,2 mol O₂ (M = 32) và 0,3 mol CO₂ (M = 44) có tỉ khối so với khí H₂ (M = 2) bằng bao nhiêu?',n:19.6,t:0.05,u:'',w:'m_hh = 0,2×32 + 0,3×44 = 19,6 g; n_hh = 0,5 mol ⇒ M_tb = 39,2 ⇒ d/H₂ = 39,2 / 2 = 19,6.'}
  ]},

{ id:'l8-dung-dich', grade:8, term:'HK1', stage:1, weeks:'Tuần 6–7', periods:6, order:4, chapCode:'Chương I', chapTitle:'Phản ứng hóa học', sgk:'Bài 4', subj:'hoa', title:'Dung dịch, độ tan & nồng độ dung dịch (C%, CM)', prereq:['l8-mol'],
  theory:[
    'Dung dịch là hỗn hợp đồng nhất của dung môi và chất tan. Ở một nhiệt độ xác định: dung dịch chưa bão hòa còn có thể hòa tan thêm chất tan; dung dịch bão hòa không thể hòa tan thêm chất tan.',
    'Độ tan (S) của một chất trong nước ở nhiệt độ xác định là số gam chất đó hòa tan tối đa trong 100 gam nước để tạo thành dung dịch bão hòa. Hầu hết chất rắn tăng độ tan khi tăng nhiệt độ; chất khí tăng độ tan khi giảm nhiệt độ và tăng áp suất.',
    'Nồng độ phần trăm (C%) cho biết số gam chất tan có trong 100 gam dung dịch: C% = (m_ct / m_dd) × 100%, với m_dd = m_ct + m_dung môi (khi không có khí/kết tủa thoát ra).',
    'Nồng độ mol (C_M, đơn vị mol/L hay M) cho biết số mol chất tan có trong 1 lít dung dịch: C_M = n / V_dd (lưu ý: V_dd bắt buộc đổi ra LÍT, 1 L = 1000 mL).',
    'Khi pha loãng dung dịch bằng nước nguyên chất, lượng chất tan (m_ct và n_ct) trước và sau khi pha luôn KHÔNG ĐỔI: C₁·V₁ = C₂·V₂ hoặc m_dd1·C%₁ = m_dd2·C%₂.'
  ],
  formulas:[
    'Độ tan của một chất trong nước: S = \\frac{m_ct}{m_nước} × 100 || Trong đó: S là độ tan (số gam chất đó hòa tan tối đa trong 100 g nước để tạo dung dịch bão hòa ở nhiệt độ xác định); m_ct là khối lượng chất tan (g); m_nước là khối lượng nước (g).',
    'Nồng độ phần trăm của dung dịch: C% = \\frac{m_ct}{m_dd} × 100%  ⇒  m_ct = \\frac{m_dd · C%}{100%} || Trong đó: C% là số gam chất tan có trong 100 g dung dịch (%); m_ct là khối lượng chất tan (g); m_dd = m_ct + m_nước là khối lượng dung dịch (g).',
    'Nồng độ mol của dung dịch: C_M = \\frac{n}{V_dd}  ⇒  n = C_M · V_dd || Trong đó: C_M là số mol chất tan có trong 1 lít dung dịch (mol/L hay M); n là số mol chất tan (mol); V_dd là thể tích dung dịch bắt buộc đổi ra LÍT (1 L = 1000 mL).',
    'Liên hệ giữa nồng độ C% dung dịch bão hòa và độ tan S: C%_bh = \\frac{S}{100 + S} × 100% || Ý nghĩa: Trong dung dịch bão hòa, cứ 100 g nước hòa tan tối đa S gam chất tan tạo thành (100 + S) gam dung dịch.'
  ],
  examples:[
    {
      q:'(Cơ bản) Ở 25 °C, hòa tan tối đa 36 g NaCl vào 100 g nước thu được dung dịch bão hòa. Tìm độ tan S và nồng độ C% của dung dịch bão hòa này.',
      steps:[
        'Theo định nghĩa, hòa tan tối đa 36 g trong 100 g nước ⇒ độ tan S = 36 g/100 g H₂O.',
        'Khối lượng dung dịch bão hòa: m_dd = 36 + 100 = 136 g.',
        'Nồng độ phần trăm: C% = (36 / 136) × 100% ≈ 26,47%.'
      ],
      ans:'S = 36 g; C% ≈ 26,47%.'
    },
    {
      q:'(Vận dụng) Cần thêm bao nhiêu gam nước vào 200 g dung dịch NaOH 15% để pha loãng thành dung dịch NaOH 10%?',
      steps:[
        'Khối lượng chất tan NaOH ban đầu: m_ct = 200 × 15% = 30 g (giữ nguyên khi thêm nước).',
        'Khối lượng dung dịch lúc sau (10%): m_dd2 = 30 / 10% = 300 g.',
        'Khối lượng nước cần thêm: m_H₂O = 300 − 200 = 100 g.'
      ],
      ans:'100 g nước.'
    }
  ],
  questions:[
    {d:1,q:'Dung dịch không thể hòa tan thêm chất tan ở một nhiệt độ xác định được gọi là gì?',o:['Dung dịch bão hòa','Dung dịch chưa bão hòa','Huyền phù','Nhũ tương'],w:'Dung dịch đã chứa lượng chất tan tối đa ở nhiệt độ đó là dung dịch bão hòa.'},
    {d:1,q:'Công thức tính nồng độ mol (C_M) của dung dịch là gì?',o:['C_M = n / V (V tính bằng lít)','C_M = m_ct / m_dd × 100%','C_M = n × V','C_M = m / M'],w:'Nồng độ mol bằng số mol chất tan chia thể tích dung dịch (L).'},
    {d:1,q:'Độ tan của chất khí (như CO₂ trong nước ngọt có gas) tăng lên trong điều kiện nào?',o:['Hạ thấp nhiệt độ và tăng áp suất','Đun sôi dung dịch và mở nắp chai','Tăng nhiệt độ thật cao','Giảm áp suất xuống gần 0'],w:'Ướp lạnh và nén áp suất cao giúp CO₂ tan nhiều; khi mở nắp giảm áp suất khí sủi bọt thoát ra.'},
    {d:2,q:'Hòa tan hoàn toàn 20 g muối ăn vào 180 g nước. Nồng độ phần trăm (C%) của dung dịch thu được là bao nhiêu %?',n:10,t:0,u:'%',w:'m_dd = 20 + 180 = 200 g ⇒ C% = (20 / 200) × 100% = 10%.'},
    {d:2,q:'Hòa tan 0,5 mol NaCl vào nước thu được 250 mL dung dịch. Nồng độ mol của dung dịch là bao nhiêu M?',n:2,t:0,u:'M',w:'V = 250 mL = 0,25 L ⇒ C_M = 0,5 / 0,25 = 2 M.'},
    {d:2,q:'Ở 20 °C, hòa tan tối đa 72 g KNO₃ vào 200 g nước thì thu được dung dịch bão hòa. Độ tan S của KNO₃ ở 20 °C là bao nhiêu g/100 g nước?',n:36,t:0.01,u:'g',w:'S = (72 / 200) × 100 = 36 g.'},
    {d:3,q:'Trong 300 g dung dịch CuSO₄ 16% có chứa bao nhiêu gam chất tan CuSO₄?',n:48,t:0.01,u:'g',w:'m_ct = 300 × 16 / 100 = 48 g.'},
    {d:3,q:'Cần bao nhiêu gam NaOH rắn (M = 40 g/mol) để pha được 500 mL dung dịch NaOH 0,4 M?',n:8,t:0.01,u:'g',w:'n = C_M · V = 0,4 × 0,5 = 0,2 mol ⇒ m = 0,2 × 40 = 8 g.'},
    {d:4,q:'Cần thêm bao nhiêu gam nước vào 200 g dung dịch đường 15% để thu được dung dịch đường 10%?',n:100,t:0.1,u:'g',w:'m_ct = 30 g ⇒ m_dd mới = 30 / 0,10 = 300 g ⇒ m_nước thêm = 300 − 200 = 100 g.'},
    {d:4,q:'Trộn 200 mL dung dịch HCl 1 M với 300 mL dung dịch HCl 2 M (coi thể tích không đổi). Nồng độ mol của dung dịch sau khi trộn là bao nhiêu M?',n:1.6,t:0.01,u:'M',w:'Tổng n = 0,2×1 + 0,3×2 = 0,8 mol; Tổng V = 0,5 L ⇒ C_M = 0,8 / 0,5 = 1,6 M.'}
  ]},

{ id:'l8-tinh-pthh', grade:8, term:'HK1', stage:1, weeks:'Tuần 8–9', periods:8, order:5, chapCode:'Chương I', chapTitle:'Phản ứng hóa học', sgk:'Bài 6–7', subj:'hoa', title:'Tính theo phương trình hóa học, tốc độ phản ứng & chất xúc tác', prereq:['l8-dung-dich'],
  theory:[
    'Các bước tính theo PTHH: (1) Đổi dữ kiện đề bài ra số mol → (2) Viết và cân bằng PTHH → (3) Dựa vào tỉ lệ hệ số PTHH để tìm số mol chất cần tính → (4) Chuyển số mol sang khối lượng, thể tích hoặc nồng độ.',
    'Bài toán chất dư – chất hết (cho biết số mol của cả 2 chất tham gia aA + bB → sản phẩm): lập tỉ số n_A / a và n_B / b. Tỉ số nào NHỎ HƠN thì chất đó phản ứng HẾT, và MỌI tính toán sản phẩm phải tính theo chất phản ứng hết!',
    'Hiệu suất phản ứng (H%, luôn ≤ 100%): H% = (Lượng sản phẩm thực tế thu được / Lượng sản phẩm lí thuyết tính theo PTHH) × 100% = (Lượng chất đầu thực tế đã phản ứng / Lượng chất đầu lấy ban đầu) × 100%.',
    'Tốc độ phản ứng đặc trưng cho sự nhanh hay chậm của phản ứng hóa học. Có 5 yếu tố làm tăng tốc độ phản ứng: (1) Tăng nồng độ chất phản ứng, (2) Tăng nhiệt độ, (3) Tăng áp suất (với chất khí), (4) Tăng diện tích bề mặt tiếp xúc (đập nhỏ, nghiền mịn chất rắn), (5) Dùng chất xúc tác.',
    'Chất xúc tác làm tăng tốc độ phản ứng nhưng giữ nguyên khối lượng và tính chất hóa học sau khi phản ứng kết thúc (VD: MnO₂ xúc tác phân hủy H₂O₂; enzyme sinh học). Chất ức chế làm giảm tốc độ phản ứng (bảo quản thực phẩm).'
  ],
  formulas:[
    'Quy tắc tìm chất phản ứng hết – chất còn dư (aA + bB → sản phẩm): So sánh \\frac{n_A}{a} với \\frac{n_B}{b} || Trong đó: n_A, n_B là số mol ban đầu của A và B; a, b là hệ số cân bằng trên PTHH. Tỉ số bên nào NHỎ HƠN thì chất đó phản ứng HẾT (mọi sản phẩm phải tính theo chất hết!).',
    'Hiệu suất phản ứng hóa học: H% = \\frac{m_(thực tế)}{m_(lí thuyết)} × 100%  ⇒  m_(sp thực tế) = m_(sp lí thuyết) × \\frac{H%}{100%} || Trong đó: H% là hiệu suất phản ứng (≤ 100%); m_(lí thuyết) là lượng sản phẩm tính theo PTHH; m_(thực tế) là lượng thực tế thu được.',
    '5 yếu tố làm tăng tốc độ phản ứng: Nồng độ ↑ · Nhiệt độ ↑ · Áp suất khí ↑ · Diện tích tiếp xúc ↑ · Chất xúc tác || Ý nghĩa: Tăng các yếu tố này giúp các hạt va chạm hiệu quả nhiều hơn nên phản ứng nhanh hơn; ngược lại hạ nhiệt độ giúp bảo quản thực phẩm lâu hỏng.'
  ],
  examples:[
    {
      q:'(Cơ bản) Hòa tan hoàn toàn 6,5 g Zn (M=65) vào dung dịch HCl dư: Zn + 2HCl → ZnCl₂ + H₂↑. Tính thể tích khí H₂ thu được ở 25 °C, 1 bar.',
      steps:[
        'Số mol Zn: n(Zn) = 6,5 / 65 = 0,1 mol.',
        'Theo PTHH: n(H₂) = n(Zn) = 0,1 mol.',
        'Thể tích H₂ (25 °C, 1 bar): V = 0,1 × 24,79 = 2,479 L (≈ 2,48 L).'
      ],
      ans:'2,479 L (≈ 2,48 L).'
    },
    {
      q:'(Vận dụng cao) Cho 0,3 mol Fe tác dụng với 0,2 mol khí O₂ nung nóng theo sơ đồ: 3Fe + 2O₂ —(t°)→ Fe₃O₄ (giả sử phản ứng hoàn toàn). Chất nào còn dư và thu được bao nhiêu gam Fe₃O₄? (Fe=56, O=16)',
      steps:[
        'So sánh tỉ lệ: n(Fe)/3 = 0,3/3 = 0,10; còn n(O₂)/2 = 0,2/2 = 0,10? Nếu cho 0,4 mol Fe và 0,2 mol O₂: 0,4/3 > 0,2/2 ⇒ O₂ hết; còn với 0,3 mol Fe và 0,25 mol O₂: 0,3/3 = 0,1 < 0,25/2 = 0,125 ⇒ Fe hết, O₂ dư 0,05 mol.',
        'Với 0,3 mol Fe phản ứng vừa hết: n(Fe₃O₄) = 0,3 / 3 = 0,1 mol.',
        'M(Fe₃O₄) = 3×56 + 4×16 = 232 g/mol ⇒ m(Fe₃O₄) = 0,1 × 232 = 23,2 g.'
      ],
      ans:'23,2 g Fe₃O₄.'
    }
  ],
  questions:[
    {d:1,q:'Vì sao chẻ nhỏ củi hoặc đục các lỗ thông gió trên viên than tổ ong lại giúp củi, than cháy nhanh hơn?',o:['Vì làm tăng diện tích bề mặt tiếp xúc với khí oxygen','Vì làm giảm nhiệt độ của bếp','Vì làm giảm nồng độ khí oxygen','Vì gỗ biến thành chất xúc tác'],w:'Diện tích tiếp xúc giữa chất rắn và khí O₂ càng lớn thì tốc độ phản ứng cháy càng nhanh.'},
    {d:1,q:'Chất làm tăng tốc độ phản ứng nhưng KHÔNG bị tiêu hao sau khi phản ứng kết thúc gọi là gì?',o:['Chất xúc tác','Chất sản phẩm','Dung môi','Chất chỉ thị màu'],w:'Đó là định nghĩa chất xúc tác (ví dụ MnO₂ khi phân hủy H₂O₂).'},
    {d:1,q:'Cất thực phẩm tươi vào tủ lạnh giúp thực phẩm lâu ôi thiu là ứng dụng yếu tố nào ảnh hưởng đến tốc độ phản ứng?',o:['Giảm nhiệt độ để làm chậm các phản ứng phân hủy','Tăng diện tích bề mặt tiếp xúc','Tăng áp suất chất khí','Thêm chất xúc tác kim loại'],w:'Nhiệt độ thấp làm giảm mạnh tốc độ phản ứng oxi hóa và hoạt động của vi sinh vật.'},
    {d:2,q:'Cho PTHH: Zn + 2HCl → ZnCl₂ + H₂. Để hòa tan hết 0,15 mol Zn cần vừa đủ bao nhiêu mol HCl?',n:0.3,t:0.001,u:'mol',w:'Theo tỉ lệ 1 : 2 ⇒ n(HCl) = 2 × 0,15 = 0,3 mol.'},
    {d:2,q:'Cho 0,1 mol Zn tác dụng hết với dung dịch HCl dư (Zn + 2HCl → ZnCl₂ + H₂). Thể tích khí H₂ thu được ở 25 °C, 1 bar là bao nhiêu lít? (làm tròn 2 chữ số thập phân)',n:2.48,t:0.02,u:'L',w:'n(H₂) = 0,1 mol ⇒ V = 0,1 × 24,79 = 2,479 L ≈ 2,48 L.'},
    {d:2,q:'Theo lí thuyết phản ứng tạo ra 50 g sản phẩm, nhưng thực tế chỉ thu được 40 g. Hiệu suất phản ứng (H%) bằng bao nhiêu %?',n:80,t:0.1,u:'%',w:'H% = (40 / 50) × 100% = 80%.'},
    {d:3,q:'Hòa tan hoàn toàn 5,6 g Fe (M = 56) vào 200 mL dung dịch HCl vừa đủ: Fe + 2HCl → FeCl₂ + H₂. Nồng độ mol của dung dịch HCl đã dùng là bao nhiêu M?',n:1,t:0.01,u:'M',w:'n(Fe) = 0,1 mol ⇒ n(HCl) = 0,2 mol ⇒ C_M = 0,2 / 0,2 = 1 M.'},
    {d:3,q:'Nung 1 mol CaCO₃ (M = 100 g/mol) với hiệu suất phản ứng đạt 85%: CaCO₃ —(t°)→ CaO + CO₂. Khối lượng vôi sống CaO (M = 56 g/mol) thực tế thu được là bao nhiêu gam?',n:47.6,t:0.1,u:'g',w:'m(CaO lí thuyết) = 56 g ⇒ m(thực tế) = 56 × 85% = 47,6 g.'},
    {d:4,q:'Đốt 0,3 mol H₂ với 0,2 mol O₂ trong bình kín theo phản ứng: 2H₂ + O₂ —(t°)→ 2H₂O (phản ứng hoàn toàn). Khối lượng nước (M = 18) tạo thành là bao nhiêu gam?',n:5.4,t:0.05,u:'g',w:'So tỉ lệ: 0,3/2 = 0,15 < 0,2/1 = 0,20 ⇒ H₂ hết, O₂ dư! Tính theo H₂: n(H₂O) = n(H₂) = 0,3 mol ⇒ m = 0,3 × 18 = 5,4 g.'},
    {d:4,q:'Tổng hợp NH₃ theo phản ứng N₂ + 3H₂ ⇄ 2NH₃. Từ 1 mol N₂ và lượng dư H₂, hiệu suất đạt 25% thì thu được bao nhiêu mol NH₃?',n:0.5,t:0.01,u:'mol',w:'n(NH₃ lí thuyết) = 2 mol ⇒ n(NH₃ thực tế) = 2 × 25% = 0,5 mol.'}
  ]},

{ id:'l8-acid-base', grade:8, term:'HK1', stage:2, weeks:'Tuần 10–11', periods:8, order:6, chapCode:'Chương II', chapTitle:'Một số hợp chất thông dụng', sgk:'Bài 8–9', subj:'hoa', title:'Acid, Base & Thang pH', prereq:['l8-tinh-pthh'],
  theory:[
    'Acid là những hợp chất trong phân tử có nguyên tử H liên kết với gốc acid; khi tan trong nước phân li tạo ra ion H⁺ (VD: HCl, H₂SO₄, HNO₃, CH₃COOH). Tính chất chung của dung dịch acid: làm quỳ tím hóa ĐỎ, không làm đổi màu phenolphthalein; tác dụng với kim loại hoạt động đứng trước H (Mg, Al, Zn, Fe — trừ Cu, Ag, Au) giải phóng H₂; tác dụng với base và oxide base tạo muối + nước.',
    'Base là hợp chất trong phân tử có nguyên tử kim loại liên kết với một hay nhiều nhóm hydroxide (–OH); khi tan trong nước tạo ra ion OH⁻. Base chia 2 loại: Base tan trong nước gọi là KIỀM (NaOH, KOH, Ca(OH)₂, Ba(OH)₂) và Base không tan (Cu(OH)₂ xanh lam, Fe(OH)₃ nâu đỏ, Mg(OH)₂ trắng).',
    'Dung dịch kiềm làm quỳ tím hóa XANH và làm dung dịch phenolphthalein không màu chuyển sang màu HỒNG. Phản ứng giữa acid và base tạo muối và nước gọi là phản ứng TRUNG HÒA (tất cả cả kiềm lẫn base không tan đều tác dụng với acid!).',
    'Thang pH (từ 1 đến 14) biểu thị độ acid / base của dung dịch: pH < 7 môi trường acid (pH càng nhỏ tính acid càng mạnh); pH = 7 trung tính (nước cất, dung dịch NaCl); pH > 7 môi trường base/kiềm (pH càng lớn tính kiềm càng mạnh).',
    'Ứng dụng thực tế: Dịch vị dạ dày có HCl (pH ≈ 1,5 – 3,5), thừa acid dùng thuốc kháng acid chứa Mg(OH)₂ hoặc NaHCO₃; đất chua (pH < 6) bón vôi bột CaO / Ca(OH)₂ để khử chua; mưa acid (pH < 5,6) do khí thải SO₂, NOₓ.'
  ],
  formulas:[
    'Phản ứng của kim loại với dung dịch acid loãng: Kim loại (đứng trước H) + HCl / H₂SO₄ loãng → Muối + H₂↑ || Lưu ý: Chỉ các kim loại hoạt động đứng trước H (như Mg, Al, Zn, Fe) mới phản ứng giải phóng khí H₂; các kim loại Cu, Ag, Au KHÔNG phản ứng.',
    'Phản ứng trung hòa giữa acid và base: Acid + Base → Muối + H₂O || Ví dụ: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O (mọi base tan hay không tan đều phản ứng được với dung dịch acid).',
    'Ý nghĩa thang đo pH (từ 1 đến 14): pH < 7 (Acid, quỳ hóa đỏ)  |  pH = 7 (Trung tính)  |  pH > 7 (Base/kiềm, quỳ hóa xanh, PP hóa hồng) || Ý nghĩa: pH càng nhỏ tính acid càng mạnh; pH càng lớn tính kiềm càng mạnh (PP là dung dịch phenolphthalein không màu).'
  ],
  examples:[
    {
      q:'(Cơ bản) Có 3 lọ mất nhãn chứa các dung dịch không màu: HCl, NaOH và NaCl. Chỉ dùng giấy quỳ tím, hãy nhận biết từng lọ.',
      steps:[
        'Lấy mẫu thử mỗi lọ nhỏ lên giấy quỳ tím.',
        'Mẫu làm quỳ tím hóa đỏ là HCl (acid); mẫu làm quỳ tím hóa xanh là NaOH (kiềm); mẫu không làm đổi màu quỳ tím là NaCl (trung tính, pH = 7).'
      ],
      ans:'Đỏ: HCl; Xanh: NaOH; Không đổi màu: NaCl.'
    },
    {
      q:'(Vận dụng) Trung hòa hoàn toàn 200 mL dung dịch H₂SO₄ 0,5 M cần bao nhiêu mL dung dịch NaOH 1 M?',
      steps:[
        'Số mol H₂SO₄ = 0,2 × 0,5 = 0,1 mol.',
        'PTHH: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O ⇒ n(NaOH) = 2 × 0,1 = 0,2 mol.',
        'Thể tích dung dịch NaOH: V = n / C_M = 0,2 / 1 = 0,2 L = 200 mL.'
      ],
      ans:'200 mL.'
    }
  ],
  questions:[
    {d:1,q:'Khi tan trong nước, các acid đều tạo ra ion nào làm quỳ tím hóa đỏ?',o:['Ion H⁺','Ion OH⁻','Ion Na⁺','Ion Cl⁻'],w:'Ion H⁺ quyết định tính chất hóa học đặc trưng của dung dịch acid.'},
    {d:1,q:'Dung dịch có giá trị pH = 9 mang tính chất môi trường nào?',o:['Base (kiềm)','Acid mạnh','Trung tính','Acid yếu'],w:'pH > 7 là môi trường base (kiềm).'},
    {d:1,q:'Nhỏ vài giọt dung dịch phenolphthalein không màu vào dung dịch NaOH thì dung dịch chuyển sang màu gì?',o:['Màu hồng','Màu xanh lam','Màu vàng','Vẫn không màu'],w:'Dung dịch kiềm làm phenolphthalein hóa hồng, quỳ tím hóa xanh.'},
    {d:2,q:'Kim loại nào sau đây KHÔNG phản ứng với dung dịch HCl và H₂SO₄ loãng?',o:['Đồng (Cu)','Kẽm (Zn)','Sắt (Fe)','Nhôm (Al)'],w:'Cu đứng sau H trong dãy hoạt động hóa học nên không đẩy được H₂ ra khỏi acid loãng.'},
    {d:2,q:'Chất nào sau đây là base KHÔNG TAN trong nước (có màu xanh lam)?',o:['Cu(OH)₂','NaOH','KOH','Ba(OH)₂'],w:'Cu(OH)₂ là kết tủa màu xanh lam không tan trong nước.'},
    {d:2,q:'Để cải tạo đất nông nghiệp bị nhiễm chua (pH thấp), người nông dân thường bón chất nào sau đây?',o:['Vôi bột CaO hoặc Ca(OH)₂','Dung dịch H₂SO₄','Giấm ăn CH₃COOH','Muối ăn NaCl'],w:'Vôi tạo môi trường kiềm trung hòa acid trong đất chua, nâng pH đất.'},
    {d:3,q:'Trung hòa vừa đủ 0,1 mol H₂SO₄ cần bao nhiêu mol KOH theo phản ứng H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O?',n:0.2,t:0.001,u:'mol',w:'Tỉ lệ 1 : 2 ⇒ n(KOH) = 2 × 0,1 = 0,2 mol.'},
    {d:3,q:'Hiện tượng mưa acid (pH < 5,6) ăn mòn công trình đá vôi chủ yếu do sự phát thải quá mức các khí nào vào khí quyển?',o:['SO₂ và các oxide của nitrogen (NO, NO₂)','O₂ và N₂','H₂ và khí hiếm He','Hơi nước tinh khiết'],w:'SO₂ và NOₓ hòa tan với O₂ và nước mưa tạo H₂SO₄, HNO₃ gây mưa acid.'},
    {d:4,q:'Trung hòa 100 mL dung dịch HCl 1,5 M bằng 150 mL dung dịch NaOH 1 M. Giá trị pH của dung dịch thu được sau phản ứng bằng bao nhiêu?',n:7,t:0,u:'',w:'n(HCl) = 0,1×1,5 = 0,15 mol; n(NaOH) = 0,15×1 = 0,15 mol ⇒ hai chất phản ứng vừa đủ tạo NaCl trung tính có pH = 7.'},
    {d:4,q:'Hòa tan hoàn toàn 11,2 g Fe (M = 56) và 6,4 g Cu (M = 64) vào dung dịch HCl dư. Sau phản ứng thu được bao nhiêu lít khí H₂ ở 25 °C, 1 bar? (làm tròn 2 chữ số thập phân)',n:4.96,t:0.03,u:'L',w:'Cu không tác dụng với HCl! Chỉ có Fe phản ứng: n(Fe) = 11,2/56 = 0,2 mol ⇒ n(H₂) = 0,2 mol ⇒ V = 0,2 × 24,79 = 4,958 L ≈ 4,96 L.'}
  ]},

{ id:'l8-oxide-muoi', grade:8, term:'HK1', stage:2, weeks:'Tuần 12–13', periods:9, order:7, chapCode:'Chương II', chapTitle:'Một số hợp chất thông dụng', sgk:'Bài 10–12', subj:'hoa', title:'Oxide, Muối & Phân bón hóa học', prereq:['l8-acid-base'],
  theory:[
    'Oxide là hợp chất của hai nguyên tố, trong đó có một nguyên tố là oxygen. Chia làm 4 loại: (1) Oxide base (Na₂O, CaO, CuO, Fe₂O₃) tác dụng với acid tạo muối + nước; (2) Oxide acid (CO₂, SO₂, SO₃, P₂O₅) tác dụng với dung dịch kiềm tạo muối + nước; (3) Oxide lưỡng tính (Al₂O₃, ZnO) tác dụng được với cả acid lẫn kiềm; (4) Oxide trung tính (CO, NO) không tạo muối.',
    'Muối là hợp chất gồm ion kim loại (hoặc ion ammonium NH₄⁺) liên kết với gốc acid (VD: NaCl, CaCO₃, CuSO₄, NaHCO₃, NH₄NO₃). Cách gọi tên muối: Tên kim loại (kèm hóa trị La Mã nếu đa hóa trị) + tên gốc acid (-Cl: chloride, =SO₄: sulfate, -NO₃: nitrate, =CO₃: carbonate, ≡PO₄: phosphate).',
    'Điều kiện để phản ứng trao đổi trong dung dịch xảy ra (Muối + Acid, Muối + Kiềm, Muối + Muối): sản phẩm tạo thành PHẢI có chất KẾT TỦA (không tan, VD: BaSO₄↓ trắng, AgCl↓ trắng, CaCO₃↓ trắng, Cu(OH)₂↓ xanh), hoặc CHẤT KHÍ (CO₂↑, SO₂↑, NH₃↑), hoặc nước.',
    'Phân bón hóa học cung cấp các nguyên tố dinh dưỡng đa lượng thiết yếu cho cây trồng: Phân đạm cung cấp Nitrogen (N – giúp cây phát triển thân lá xanh tốt: urea CO(NH₂)₂, NH₄NO₃); Phân lân cung cấp Phosphorus (P – kích thích rễ, hoa, chống rét); Phân kali cung cấp Potassium (K – giúp cây cứng cáp, tích đường/tinh bột: KCl); Phân hỗn hợp NPK chứa cả N, P, K.',
    'Bón phân theo nguyên tắc "4 đúng" (đúng loại, đúng liều, đúng lúc, đúng cách) để tăng năng suất và tránh gây phú dưỡng nguồn nước, thoái hóa đất.'
  ],
  formulas:[
    'Phản ứng nhận biết khí CO₂ (oxide acid + kiềm): CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O || Hiện tượng: Xuất hiện kết tủa CaCO₃ màu trắng không tan làm vẩn đục dung dịch nước vôi trong.',
    'Phản ứng hòa tan gỉ kim loại (oxide base + acid): Oxide base + Acid → Muối + H₂O || Ví dụ: CuO (đen) + 2HCl → CuCl₂ (dung dịch xanh lam) + H₂O.',
    'Phản ứng trao đổi tạo kết tủa đặc trưng của muối: BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl  ;  AgNO₃ + NaCl → AgCl↓ + NaNO₃ || Điều kiện xảy ra: Phản ứng trao đổi trong dung dịch chỉ xảy ra khi sản phẩm có chất kết tủa (↓), chất khí (↑) hoặc H₂O.',
    'Ý nghĩa thành phần dinh dưỡng phân bón hóa học: Đạm cung cấp N · Lân cung cấp P · Kali cung cấp K · NPK cung cấp cả 3 nguyên tố || Ý nghĩa: Đạm (N) tốt cho thân lá; Lân (P) kích thích rễ, hoa; Kali (K) giúp cây cứng cáp, tạo củ ngọt (trên bao NPK 20-20-15 là % khối lượng N, P₂O₅, K₂O).'
  ],
  examples:[
    {
      q:'(Cơ bản) Phân loại các oxide sau vào 4 nhóm (oxide base, oxide acid, oxide lưỡng tính, oxide trung tính): CaO, SO₂, Al₂O₃, CO.',
      steps:[
        'CaO của kim loại Ca tác dụng với acid → Oxide base.',
        'SO₂ của phi kim S tác dụng với kiềm → Oxide acid.',
        'Al₂O₃ vừa tác dụng acid vừa tác dụng kiềm → Oxide lưỡng tính; CO không tác dụng acid/kiềm tạo muối → Oxide trung tính.'
      ],
      ans:'CaO (oxide base); SO₂ (oxide acid); Al₂O₃ (lưỡng tính); CO (trung tính).'
    },
    {
      q:'(Vận dụng) Sục từ từ 0,1 mol khí CO₂ vào dung dịch nước vôi trong Ca(OH)₂ dư. Tính khối lượng kết tủa trắng thu được (Ca=40, C=12, O=16).',
      steps:[
        'Vì Ca(OH)₂ dư nên toàn bộ CO₂ chuyển thành kết tủa: CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O.',
        'n(CaCO₃) = n(CO₂) = 0,1 mol; M(CaCO₃) = 100 g/mol.',
        'Khối lượng kết tủa: m = 0,1 × 100 = 10 g.'
      ],
      ans:'10 g kết tủa CaCO₃.'
    }
  ],
  questions:[
    {d:1,q:'Chất nào sau đây thuộc loại OXIDE ACID?',o:['CO₂','CaO','CuO','Fe₂O₃'],w:'CO₂ (carbon dioxide) tác dụng với dung dịch kiềm tạo muối carbonate và nước.'},
    {d:1,q:'Phân đạm cung cấp nguyên tố dinh dưỡng chính nào giúp cây trồng ra nhiều cành, lá xanh tốt?',o:['Nitrogen (N)','Phosphorus (P)','Potassium (K)','Iron (Fe)'],w:'Phân đạm cung cấp N; phân lân cung cấp P; phân kali cung cấp K.'},
    {d:1,q:'Muối FeCl₃ có tên gọi theo danh pháp chuẩn quốc tế (IUPAC) là gì?',o:['Iron(III) chloride','Iron(II) chloride','Iron chloride','Ferric sulfate'],w:'Fe đa hóa trị nên cần ghi kèm hóa trị (III) sau tên kim loại: Iron(III) chloride.'},
    {d:2,q:'Oxide nào sau đây là OXIDE TRUNG TÍNH (không tác dụng với acid hay base để tạo muối)?',o:['CO (carbon monoxide)','SO₃','Na₂O','Al₂O₃'],w:'CO và NO là các oxide trung tính.'},
    {d:2,q:'Cặp dung dịch nào sau đây xảy ra phản ứng trao đổi tạo kết tủa trắng khi trộn lẫn?',o:['BaCl₂ và Na₂SO₄','NaCl và KNO₃','HCl và CuSO₄','KOH và NaCl'],w:'BaCl₂ + Na₂SO₄ → BaSO₄↓ (kết tủa trắng bền) + 2NaCl.'},
    {d:2,q:'Hòa tan bột CuO màu đen vào dung dịch HCl dư (CuO + 2HCl → CuCl₂ + H₂O) thì thu được dung dịch có màu gì?',o:['Màu xanh lam','Màu đỏ gạch','Không màu','Màu tím'],w:'Muối đồng(II) trong dung dịch nước có màu xanh lam đặc trưng.'},
    {d:3,q:'Sục 2,479 lít khí CO₂ (ở 25 °C, 1 bar) vào lượng dư dung dịch nước vôi trong Ca(OH)₂. Khối lượng kết tủa CaCO₃ (M = 100) thu được là bao nhiêu gam?',n:10,t:0.1,u:'g',w:'n(CO₂) = 2,479 / 24,79 = 0,1 mol ⇒ n(CaCO₃) = 0,1 mol ⇒ m = 10 g.'},
    {d:3,q:'Vì sao KHÔNG được trộn chung phân đạm ammonium (như NH₄NO₃, (NH₄)₂SO₄) với vôi bột Ca(OH)₂ khi bón cho cây?',o:['Vì phản ứng sinh ra khí NH₃ bay đi làm thất thoát đạm','Vì tạo ra chất nổ ngay lập tức','Vì vôi biến thành đá không tan','Vì làm cây bị ngập úng nước'],w:'Ion NH₄⁺ gặp OH⁻ của vôi giải phóng khí NH₃↑ bay mất đạm.'},
    {d:4,q:'Hòa tan hết 8 g CuO (M = 80) bằng lượng vừa đủ dung dịch H₂SO₄ 1 M. Thể tích dung dịch H₂SO₄ cần dùng là bao nhiêu mL?',n:100,t:0.5,u:'mL',w:'n(CuO) = 8/80 = 0,1 mol; CuO + H₂SO₄ → CuSO₄ + H₂O ⇒ n(H₂SO₄) = 0,1 mol ⇒ V = 0,1 L = 100 mL.'},
    {d:4,q:'Trên bao bì một loại phân bón NPK ghi kí hiệu "NPK 20-20-15". Trong 50 kg phân bón này có chứa bao nhiêu kg dinh dưỡng N nguyên chất?',n:10,t:0.1,u:'kg',w:'Chỉ số đầu tiên 20 nghĩa là chứa 20% khối lượng N ⇒ m(N) = 50 × 20% = 10 kg.'}
  ]},

{ id:'l8-khoi-luong-rieng', grade:8, term:'HK1', stage:2, weeks:'Tuần 14–15', periods:10, order:8, chapCode:'Chương III', chapTitle:'Khối lượng riêng và áp suất', sgk:'Bài 13–16', subj:'ly', title:'Khối lượng riêng & Áp suất (rắn, lỏng, khí quyển)', prereq:['l6-luc'],
  theory:[
    'Khối lượng riêng của một chất là khối lượng của một đơn vị thể tích chất đó: D = m / V. Đơn vị chuẩn SI: kg/m³; đơn vị thường dùng: g/cm³ (hoặc g/mL). Quy đổi quan trọng: 1 g/cm³ = 1000 kg/m³ (nước nguyên chất có D ≈ 1 g/cm³ = 1000 kg/m³).',
    'Trọng lượng riêng (d, đơn vị N/m³) là trọng lượng của một mét khối chất đó: d = P / V = 10 · D (với nước d ≈ 10 000 N/m³).',
    'Áp lực (F) là lực ép có phương vuông góc với mặt bị ép. Áp suất (p) là độ lớn của áp lực trên một đơn vị diện tích bị ép: p = F / S (đơn vị Pascal: 1 Pa = 1 N/m²). Muốn TĂNG áp suất: tăng F hoặc giảm S (mài sắc lưỡi dao, đầu đinh nhọn); muốn GIẢM áp suất: giảm F hoặc tăng S (bánh xích xe tăng, kê ván rộng trên đất lầy).',
    'Chất lỏng gây ra áp suất theo mọi phương lên đáy bình, thành bình và các vật ở trong lòng nó. Áp suất chất lỏng tại độ sâu h (tính từ MẶT THOÁNG chất lỏng xuống điểm xét): p = d · h = 10 · D · h. Trong bình thông nhau chứa cùng một chất lỏng đứng yên, các mặt thoáng luôn ở cùng một độ cao.',
    'Trái Đất được bao bọc bởi khí quyển nên mọi vật đều chịu áp suất khí quyển theo mọi phương (càng lên cao không khí càng loãng nên áp suất khí quyển càng giảm; ứng dụng giác mút, ống hút, lỗ nhỏ trên nắp bình nước mắm).'
  ],
  formulas:[
    'Khối lượng riêng & trọng lượng riêng: D = \\frac{m}{V}  ;  d = 10 · D || Trong đó: D là khối lượng riêng (kg/m³ hoặc g/cm³, quy đổi 1 g/cm³ = 1000 kg/m³); m là khối lượng vật (kg hoặc g); V là thể tích vật (m³ hoặc cm³); d là trọng lượng riêng (N/m³).',
    'Áp suất của áp lực trên bề mặt bị ép: p = \\frac{F}{S}  ⇒  F = p · S || Trong đó: p là áp suất (Pa, với 1 Pa = 1 N/m²; 1 kPa = 1000 Pa); F là áp lực ép vuông góc với mặt bị ép (N; vật đặt trên sàn ngang có F = P = 10m); S là diện tích bị ép (m²; 1 cm² = 10⁻⁴ m²).',
    'Áp suất chất lỏng gây ra tại độ sâu h: p = d · h = 10 · D · h || Trong đó: p là áp suất chất lỏng (Pa); d là trọng lượng riêng chất lỏng (N/m³); D là khối lượng riêng chất lỏng (kg/m³); h là độ sâu tính từ MẶT THOÁNG chất lỏng xuống điểm đang xét (m).'
  ],
  examples:[
    {
      q:'(Cơ bản) Một khối nhôm đặc có khối lượng 540 g và thể tích 200 cm³. Tính khối lượng riêng của nhôm theo g/cm³ và kg/m³.',
      steps:[
        'D = m / V = 540 / 200 = 2,7 g/cm³.',
        'Đổi sang kg/m³: 2,7 × 1000 = 2700 kg/m³.'
      ],
      ans:'2,7 g/cm³ hay 2700 kg/m³.'
    },
    {
      q:'(Vận dụng cao) Một thùng cao 1,2 m đựng đầy nước (d = 10 000 N/m³). Tính áp suất của nước tác dụng lên một điểm A cách ĐÁY thùng 0,4 m.',
      steps:[
        'Lưu ý: h trong công thức p = d · h phải là độ sâu tính từ MẶT THOÁNG xuống điểm A!',
        'Độ sâu của điểm A: h_A = 1,2 − 0,4 = 0,8 m.',
        'Áp suất tại A: p_A = 10 000 × 0,8 = 8000 Pa.'
      ],
      ans:'8000 Pa.'
    }
  ],
  questions:[
    {d:1,q:'Đổi đơn vị: Khối lượng riêng của nước là 1 g/cm³ thì bằng bao nhiêu kg/m³?',n:1000,t:0,u:'kg/m³',w:'1 g/cm³ = 1000 kg/m³.'},
    {d:1,q:'Đơn vị đo áp suất Pascal (Pa) tương ứng với biểu thức đơn vị nào?',o:['1 Pa = 1 N/m²','1 Pa = 1 N·m','1 Pa = 1 kg/m³','1 Pa = 1 N/cm³'],w:'Áp suất p = F / S nên 1 Pa = 1 N/m².'},
    {d:1,q:'Vì sao xe tăng nặng hàng chục tấn lại dùng bánh xích bản rộng thay vì bánh lốp hẹp như ô tô?',o:['Để tăng diện tích mặt bị ép, giúp giảm áp suất lên mặt đất nên không bị lún','Để tăng áp suất lên mặt đất cho xe bám chặt','Để làm giảm khối lượng xe tăng','Để giảm ma sát tới 0'],w:'Tăng diện tích S giúp giảm áp suất p = F / S.'},
    {d:2,q:'Một khối đá có khối lượng 270 g và thể tích 100 cm³. Khối lượng riêng của đá là bao nhiêu g/cm³?',n:2.7,t:0.01,u:'g/cm³',w:'D = 270 / 100 = 2,7 g/cm³.'},
    {d:2,q:'Áp lực 600 N tác dụng vuông góc lên diện tích 0,03 m². Áp suất gây ra bằng bao nhiêu Pa?',n:20000,t:0,u:'Pa',w:'p = 600 / 0,03 = 20 000 Pa.'},
    {d:2,q:'Thợ lặn ở độ sâu 5 m dưới mặt nước (d = 10 000 N/m³) chịu áp suất của nước là bao nhiêu Pa?',n:50000,t:0,u:'Pa',w:'p = d · h = 10 000 × 5 = 50 000 Pa.'},
    {d:3,q:'Một người có khối lượng 50 kg đứng bằng cả hai bàn chân trên sàn ngang, diện tích tiếp xúc của MỖI bàn chân là 0,0125 m². Áp suất người đó tác dụng lên sàn là bao nhiêu Pa?',n:20000,t:1,u:'Pa',w:'F = P = 10×50 = 500 N; tổng diện tích 2 bàn chân S = 2 × 0,0125 = 0,025 m² ⇒ p = 500 / 0,025 = 20 000 Pa.'},
    {d:3,q:'Một bình cao 1,5 m chứa đầy nước (d = 10 000 N/m³). Áp suất nước tại điểm M cách ĐÁY bình 0,3 m bằng bao nhiêu Pa?',n:12000,t:1,u:'Pa',w:'Độ sâu từ mặt thoáng xuống M là h = 1,5 − 0,3 = 1,2 m ⇒ p = 10 000 × 1,2 = 12 000 Pa.'},
    {d:4,q:'Vì sao trên nắp ấm pha trà hoặc bình nước mắm thường có một lỗ thông khí nhỏ?',o:['Để áp suất không khí trong ấm cân bằng với khí quyển bên ngoài, giúp rót nước chảy ra dễ dàng','Để hơi nước thoát hết cho trà nguội ngay','Để bụi rơi vào lắng cặn trà','Chỉ để trang trí cho đẹp'],w:'Nếu bịt kín lỗ này, khi rót nước ra không khí trong ấm giãn ra làm áp suất trong nhỏ hơn áp suất khí quyển ngoài nên khí quyển chặn dòng nước lại.'},
    {d:4,q:'Đổ vào bình trụ một lớp nước cao 20 cm (d₁ = 10 000 N/m³) và phía trên là một lớp dầu không tan cao 15 cm (d₂ = 8000 N/m³). Áp suất tổng cộng do hai chất lỏng gây ra tại đáy bình là bao nhiêu Pa?',n:3200,t:1,u:'Pa',w:'p = d₁·h₁ + d₂·h₂ = 10 000×0,20 + 8000×0,15 = 2000 + 1200 = 3200 Pa.'}
  ]},

{ id:'l8-archimedes', grade:8, term:'HK1', stage:2, weeks:'Tuần 16', periods:5, order:9, chapCode:'Chương III', chapTitle:'Khối lượng riêng và áp suất', sgk:'Bài 17', subj:'ly', title:'Lực đẩy Archimedes & điều kiện vật nổi', prereq:['l8-khoi-luong-rieng'],
  theory:[
    'Mọi vật nhúng vào chất lỏng (hoặc chất khí) đều chịu một lực đẩy tác dụng từ dưới lên theo phương thẳng đứng gọi là lực đẩy Archimedes (F_A).',
    'Độ lớn lực đẩy Archimedes bằng trọng lượng của phần chất lỏng bị vật chiếm chỗ: F_A = d_lỏng · V_chìm = 10 · D_lỏng · V_chìm (lưu ý: V_chìm là thể tích PHẦN VẬT CHÌM trong chất lỏng tính bằng m³, d_lỏng là trọng lượng riêng của CHẤT LỎNG chứ không phải của vật!).',
    'Đo lực đẩy Archimedes bằng lực kế: treo vật ngoài không khí lực kế chỉ P; nhúng vật vào chất lỏng lực kế chỉ F_nhúng ⇒ F_A = P − F_nhúng.',
    'Điều kiện nổi của vật khi thả vào chất lỏng: Vật CHÌM xuống đáy khi P > F_A (với vật đặc: D_vật > D_lỏng); Vật LƠ LỬNG trong lòng chất lỏng khi P = F_A (D_vật = D_lỏng); Vật NỔI lên mặt thoáng khi F_A > P (D_vật < D_lỏng).',
    'Lưu ý cực kì quan trọng: Khi vật ĐÃ NỔI CÂN BẰNG trên mặt chất lỏng và đứng yên thì lực đẩy Archimedes lúc cân bằng đúng bằng trọng lượng của vật: F_A(cân bằng) = P_vật!'
  ],
  formulas:[
    'Độ lớn lực đẩy Archimedes: F_A = d_lỏng · V_chìm = 10 · D_lỏng · V_chìm || Trong đó: F_A là lực đẩy hướng thẳng đứng từ dưới lên (N); d_lỏng là trọng lượng riêng của CHẤT LỎNG (N/m³); D_lỏng là khối lượng riêng chất lỏng (kg/m³); V_chìm là thể tích phần vật chìm trong chất lỏng (m³; 1 cm³ = 10⁻⁶ m³).',
    'Đo lực đẩy Archimedes bằng lực kế: F_A = P − F_nhúng || Trong đó: P là số chỉ lực kế khi treo vật ngoài không khí (trọng lượng vật, N); F_nhúng là số chỉ lực kế khi nhúng vật trong chất lỏng (N).',
    'Điều kiện chìm – nổi của vật đặc: D_vật > D_lỏng (chìm)  |  D_vật = D_lỏng (lơ lửng)  |  D_vật < D_lỏng (nổi) || Ý nghĩa: So sánh khối lượng riêng trung bình của vật (D_vật) với khối lượng riêng chất lỏng (D_lỏng) để biết vật chìm hay nổi.',
    'Khi vật đang nổi cân bằng đứng yên trên mặt chất lỏng: F_A = P_vật = d_lỏng · V_chìm || Ý nghĩa: Khi tàu thuyền hoặc khối gỗ đã nổi đứng yên trên mặt nước, lực đẩy Archimedes lúc đó đúng bằng trọng lượng của vật.'
  ],
  examples:[
    {
      q:'(Cơ bản) Treo một quả nặng vào lực kế ngoài không khí lực kế chỉ 12 N. Khi nhúng chìm hoàn toàn quả nặng vào nước (d = 10 000 N/m³) lực kế chỉ 7 N. Tính lực đẩy Archimedes và thể tích quả nặng.',
      steps:[
        'Lực đẩy Archimedes: F_A = P − F_nhúng = 12 − 7 = 5 N.',
        'Vì vật chìm hoàn toàn: V = F_A / d_nước = 5 / 10 000 = 0,0005 m³ = 500 cm³.'
      ],
      ans:'F_A = 5 N; V = 500 cm³.'
    },
    {
      q:'(Vận dụng cao) Một khối gỗ hình hộp đặc có khối lượng riêng D_gỗ = 600 kg/m³ được thả nổi tự do trên mặt nước (D_nước = 1000 kg/m³). Hỏi phần thể tích chìm trong nước chiếm bao nhiêu phần trăm thể tích cả khối gỗ?',
      steps:[
        'Khi khối gỗ nổi cân bằng đứng yên: F_A = P ⇔ 10 · D_nước · V_chìm = 10 · D_gỗ · V_vật.',
        'Tỉ lệ chìm: V_chìm / V_vật = D_gỗ / D_nước = 600 / 1000 = 0,6 = 60%.'
      ],
      ans:'60% thể tích khối gỗ chìm trong nước.'
    }
  ],
  questions:[
    {d:1,q:'Lực đẩy Archimedes tác dụng lên vật nhúng trong chất lỏng có phương và chiều như thế nào?',o:['Phương thẳng đứng, chiều từ dưới lên trên','Phương thẳng đứng, chiều từ trên xuống dưới','Phương nằm ngang, chiều từ trái sang phải','Vuông góc với thành bình'],w:'Lực đẩy Archimedes luôn thẳng đứng hướng từ dưới lên, ngược chiều trọng lực.'},
    {d:1,q:'Một vật ĐẶC sẽ nổi lên trên mặt nước khi nào?',o:['Khối lượng riêng của vật nhỏ hơn khối lượng riêng của nước','Khối lượng riêng của vật lớn hơn khối lượng riêng của nước','Khối lượng của vật lớn hơn 1 kg','Thể tích của vật rất nhỏ'],w:'Vật đặc nổi khi D_vật < D_lỏng.'},
    {d:1,q:'Khi một vật đang lơ lửng đứng yên trong lòng chất lỏng thì mối quan hệ giữa lực đẩy F_A và trọng lượng P là gì?',o:['F_A = P','F_A > P','F_A < P','F_A = 0'],w:'Vật cân bằng đứng yên khi hai lực ngược chiều có cùng độ lớn: F_A = P.'},
    {d:2,q:'Một vật chiếm chỗ 0,002 m³ nước (d = 10 000 N/m³). Độ lớn lực đẩy Archimedes tác dụng lên vật là bao nhiêu N?',n:20,t:0,u:'N',w:'F_A = 10 000 × 0,002 = 20 N.'},
    {d:2,q:'Treo một vật vào lực kế ngoài không khí chỉ 15 N; khi nhúng chìm hoàn toàn vật trong nước lực kế chỉ 9 N. Lực đẩy Archimedes bằng bao nhiêu N?',n:6,t:0,u:'N',w:'F_A = 15 − 9 = 6 N.'},
    {d:2,q:'Vì sao tàu thủy làm bằng thép (D_thép > D_nước) rất nặng nhưng vẫn nổi được trên mặt biển?',o:['Vì tàu có cấu tạo rỗng bên trong nên khối lượng riêng trung bình của tàu nhỏ hơn của nước','Vì nước biển không có trọng lực','Vì thép nhẹ hơn nước biển','Vì chân vịt quay nâng tàu bay lên'],w:'Khoang rỗng lớn giúp tăng thể tích chiếm nước V, làm D trung bình của tàu nhỏ hơn D nước.'},
    {d:3,q:'Nhúng chìm hoàn toàn một quả cầu thể tích 400 cm³ vào dầu hỏa (d_dầu = 8000 N/m³). Lực đẩy Archimedes tác dụng lên quả cầu là bao nhiêu N?',n:3.2,t:0.01,u:'N',w:'Đổi V = 400 cm³ = 0,0004 m³ ⇒ F_A = 8000 × 0,0004 = 3,2 N.'},
    {d:3,q:'Một chiếc xà lan có tổng khối lượng cả hàng là 40 tấn (40 000 kg) đang nổi đứng yên trên sông. Độ lớn lực đẩy Archimedes tác dụng lên xà lan lúc đó là bao nhiêu kN (kilô-niutơn, 1 kN = 1000 N)?',n:400,t:0.1,u:'kN',w:'Khi nổi đứng yên: F_A = P = 10 · m = 400 000 N = 400 kN.'},
    {d:4,q:'Một khối gỗ đặc có khối lượng riêng 600 kg/m³ thả nổi trên mặt nước (D = 1000 kg/m³). Phần thể tích gỗ NỔI phía trên mặt nước chiếm bao nhiêu % thể tích cả khối gỗ?',n:40,t:0.1,u:'%',w:'V_chìm / V = 600 / 1000 = 60% ⇒ phần nổi phía trên chiếm 100% − 60% = 40%.'},
    {d:4,q:'Một tàu thủy đi từ sông (nước ngọt D = 1000 kg/m³) ra biển (nước mặn D = 1030 kg/m³), giả sử khối lượng tàu không đổi. Độ chìm của thân tàu thay đổi thế nào?',o:['Thân tàu nhô cao lên (thể tích phần chìm giảm đi)','Thân tàu chìm sâu thêm xuống nước','Mức mớn nước hoàn toàn không đổi','Lực đẩy Archimedes tăng vọt lớn hơn trọng lượng tàu'],w:'Cả ở sông và biển F_A đều bằng P_tàu (không đổi); ra biển d_nước tăng nên V_chìm = P / d_nước giảm → tàu nhô cao hơn.'}
  ]},

{ id:'l8-don-bay', grade:8, term:'HK1', stage:2, weeks:'Tuần 17', periods:6, order:10, chapCode:'Chương IV', chapTitle:'Tác dụng làm quay của lực', sgk:'Bài 18–19', subj:'ly', title:'Tác dụng làm quay của lực, Moment lực & Đòn bẩy', prereq:['l6-luc'],
  theory:[
    'Lực có thể làm quay vật quanh một trục cố định khi giá của lực KHÔNG cắt và KHÔNG song song với trục quay. Tác dụng làm quay của lực được đặc trưng bởi đại lượng Moment lực (M).',
    'Moment lực đối với một trục quay bằng tích độ lớn của lực F với cánh tay đòn d: M = F · d (đơn vị: N·m). Cánh tay đòn d là khoảng cách vuông góc từ trục quay đến GIÁ của lực (nếu giá của lực đi qua trục quay thì d = 0 ⇒ M = 0, lực không gây tác dụng làm quay).',
    'Đòn bẩy là một thanh cứng có thể quay quanh một điểm tựa O. Điều kiện cân bằng của đòn bẩy: F₁ · d₁ = F₂ · d₂ (lực tác dụng tỉ lệ nghịch với cánh tay đòn).',
    'Ba loại đòn bẩy: Loại 1 có điểm tựa O nằm giữa hai lực (bập bênh, cái kéo, xà beng tì lên hòn kê – có thể đổi hướng lực và lợi lực khi d_người > d_vật); Loại 2 có vật cản nằm giữa điểm tựa O và lực tác dụng (xe cút kít, kẹp hạt dẻ – luôn cho lợi về lực); Loại 3 có lực tác dụng nằm giữa điểm tựa O và vật (đũa gắp thức ăn, cần câu cá – thiệt về lực nhưng lợi về đường đi/tốc độ).',
    'Trong cơ thể người có nhiều hệ thống xương – khớp – cơ hoạt động như đòn bẩy: đầu ngửa trên đốt sống cổ (loại 1), kiễng gót bàn chân nâng cơ thể (loại 2), cơ nhị đầu cánh tay gập cẳng tay nâng tạ (loại 3).'
  ],
  formulas:[
    'Công thức tính Moment lực: M = F · d || Trong đó: M là moment lực đặc trưng cho tác dụng làm quay (N·m); F là độ lớn lực tác dụng (N); d là cánh tay đòn – khoảng cách vuông góc từ trục quay đến giá của lực (m).',
    'Điều kiện cân bằng của đòn bẩy: F₁ · d₁ = F₂ · d₂  ⇒  \\frac{F₁}{F₂} = \\frac{d₂}{d₁} || Trong đó: F₁, F₂ là độ lớn hai lực tác dụng lên đòn bẩy (N); d₁, d₂ là cánh tay đòn từ điểm tựa O đến giá của F₁, F₂ (m). Cánh tay đòn gấp mấy lần thì lực nhỏ đi bấy nhiêu lần.',
    'Điều kiện để đòn bẩy cho lợi về lực: d_người > d_vật  ⇒  F_người < F_vật || Ý nghĩa: Khoảng cách từ điểm tựa đến tay người càng lớn hơn khoảng cách từ điểm tựa đến vật cản thì nâng vật càng nhẹ.'
  ],
  examples:[
    {
      q:'(Cơ bản) Dùng cờ-lê vặn đai ốc với lực 40 N vuông góc với thân cờ-lê tại vị trí cách tâm đai ốc 25 cm. Tính moment của lực đó.',
      steps:[
        'Đổi cánh tay đòn sang mét: d = 25 cm = 0,25 m.',
        'Moment lực: M = F · d = 40 × 0,25 = 10 N·m.'
      ],
      ans:'10 N·m.'
    },
    {
      q:'(Vận dụng cao) Một thanh cứng nhẹ AB dài 1,2 m có điểm tựa O cách đầu A 0,3 m. Treo vào đầu A một vật nặng khối lượng 18 kg. Phải tác dụng vào đầu B một lực thẳng đứng hướng xuống bằng bao nhiêu N để thanh nằm ngang cân bằng?',
      steps:[
        'Trọng lượng vật ở A: F₁ = P_A = 10 × 18 = 180 N; cánh tay đòn d₁ = OA = 0,3 m.',
        'Cánh tay đòn tại B: d₂ = OB = AB − OA = 1,2 − 0,3 = 0,9 m.',
        'Áp dụng cân bằng đòn bẩy: F₁ · d₁ = F₂ · d₂ ⇒ F₂ = (180 × 0,3) / 0,9 = 60 N.'
      ],
      ans:'60 N.'
    }
  ],
  questions:[
    {d:1,q:'Đơn vị của moment lực trong hệ SI là gì?',o:['N·m (niutơn nhân mét)','N/m (niutơn trên mét)','N/m² (pascal)','J/s (oát)'],w:'M = F · d nên đơn vị là N·m.'},
    {d:1,q:'Vì sao tay nắm cửa luôn được lắp ở mép xa bản lề nhất chứ không lắp gần bản lề?',o:['Để tăng cánh tay đòn của lực, giúp mở cửa nhẹ nhàng với lực nhỏ hơn','Để giảm cánh tay đòn của lực','Để cánh cửa nặng hơn','Để khóa cửa không bị gỉ'],w:'Cánh tay đòn d lớn thì chỉ cần lực F nhỏ vẫn tạo đủ moment quay mở cửa.'},
    {d:1,q:'Trường hợp nào sau đây lực tác dụng KHÔNG làm cánh cửa quay quanh bản lề?',o:['Đẩy lực có giá đi xuyên qua trục bản lề','Đẩy vuông góc vào tay nắm cửa từ phía ngoài','Kéo vuông góc tay nắm cửa từ phía trong','Đẩy nghiêng vào giữa cánh cửa'],w:'Giá của lực cắt trục quay thì d = 0 ⇒ M = 0.'},
    {d:2,q:'Tác dụng lực 20 N có cánh tay đòn 0,5 m đối với trục quay. Moment lực bằng bao nhiêu N·m?',n:10,t:0,u:'N·m',w:'M = 20 × 0,5 = 10 N·m.'},
    {d:2,q:'Một đòn bẩy cân bằng khi F₁ = 20 N, d₁ = 0,3 m và d₂ = 0,1 m. Độ lớn lực F₂ bằng bao nhiêu N?',n:60,t:0,u:'N',w:'F₂ = (20 × 0,3) / 0,1 = 60 N.'},
    {d:2,q:'Dụng cụ nào sau đây luôn cho LỢI VỀ LỰC (vật cản nằm giữa điểm tựa và lực nâng)?',o:['Xe cút kít đẩy vật liệu xây dựng','Đũa gắp thức ăn','Cần câu cá khi giật cá','Chổi quét nhà cầm ở đầu trên'],w:'Xe cút kít có trục bánh xe là điểm tựa, thùng hàng ở giữa, tay nâng ở xa nên d_tay > d_hàng.'},
    {d:3,q:'Hai bạn nhỏ chơi bập bênh. Bạn An nặng 40 kg ngồi cách trục quay 1,2 m. Bạn Bình nặng 30 kg phải ngồi phía bên kia cách trục quay bao nhiêu mét để bập bênh cân bằng nằm ngang?',n:1.6,t:0.01,u:'m',w:'400 × 1,2 = 300 × d₂ ⇒ d₂ = 480 / 300 = 1,6 m.'},
    {d:3,q:'Dùng xà beng bẩy một tảng đá có lực cản F_cản = 1200 N. Khoảng cách từ điểm tựa đến điểm tì vào đá là 15 cm, từ điểm tựa đến tay người ấn là 1,5 m. Lực tối thiểu tay cần ấn là bao nhiêu N?',n:120,t:0.5,u:'N',w:'Đổi 15 cm = 0,15 m ⇒ F_người = (1200 × 0,15) / 1,5 = 120 N (lợi 10 lần về lực!).'},
    {d:4,q:'Thanh nhẹ AB dài 1,2 m có trục quay O cách A một đoạn 0,3 m. Treo vật khối lượng 18 kg vào A. Lực thẳng đứng cần tác dụng vào đầu B để thanh cân bằng nằm ngang là bao nhiêu N?',n:60,t:0.1,u:'N',w:'OB = 1,2 − 0,3 = 0,9 m; P_A = 180 N ⇒ F_B = 180 × 0,3 / 0,9 = 60 N.'},
    {d:4,q:'Khi gập cẳng tay nâng quả tạ trong lòng bàn tay: khớp khuỷu tay là điểm tựa, cơ nhị đầu bám sát khuỷu tay kéo lên, còn quả tạ ở xa tại bàn tay. Đòn bẩy cẳng tay này có đặc điểm gì?',o:['Không lợi về lực (lực cơ lớn hơn trọng lượng tạ) nhưng lợi về quãng đường và tốc độ chuyển động của bàn tay','Cho lợi về lực gấp 10 lần','Điểm tựa nằm ở giữa cơ và tạ','Cánh tay đòn của cơ dài hơn cánh tay đòn của tạ'],w:'Đây là đòn bẩy loại 3: d_cơ < d_tạ nên thiệt lực nhưng giúp bàn tay di chuyển nhanh và linh hoạt.'}
  ]},

{ id:'l8-dien', grade:8, term:'HK2', stage:3, weeks:'Tuần 19–21', periods:12, order:11, chapCode:'Chương V', chapTitle:'Điện', sgk:'Bài 20–25', subj:'ly', title:'Nhiễm điện, Dòng điện, Mạch điện, Cường độ & Hiệu điện thế', prereq:['l7-tu'],
  theory:[
    'Nhiều vật sau khi bị cọ xát có khả năng hút các vật nhẹ (vụn giấy) hoặc phóng tia lửa điện, gọi là vật nhiễm điện (mang điện tích). Có 2 loại điện tích: dương (+) và âm (−). Vật nhận thêm electron nhiễm điện âm; vật mất bớt electron nhiễm điện dương. Hai điện tích cùng loại đẩy nhau, khác loại hút nhau.',
    'Dòng điện là dòng chuyển dời có hướng của các hạt mang điện (trong kim loại là dòng các electron tự do). Nguồn điện (pin, ắc quy) tạo ra và duy trì dòng điện lâu dài. Chiều dòng điện quy ước: đi từ cực DƯƠNG (+) qua dây dẫn và thiết bị tiêu thụ tới cực ÂM (−) của nguồn điện (ngược chiều dịch chuyển của electron!).',
    'Vật dẫn điện cho dòng điện đi qua (đồng, bạc, nhôm, than chì, dung dịch muối/acid/kiềm); vật cách điện không cho dòng điện đi qua ở điều kiện thường (nhựa, cao su, sứ, thủy tinh, nước cất nguyên chất).',
    'Bốn tác dụng tiêu biểu của dòng điện: tác dụng nhiệt (bàn là, nồi cơm điện, cầu chì), tác dụng phát sáng (đèn LED, đèn bút thử điện), tác dụng hóa học (mạ điện, điện phân dung dịch muối đồng), tác dụng sinh lí (cơ co giật khi bị điện giật; ứng dụng máy kích tim, điện châm).',
    'Cường độ dòng điện I (đơn vị Ampe – A, 1 A = 1000 mA) đo bằng AMPE KẾ mắc NỐI TIẾP. Hiệu điện thế U (đơn vị Vôn – V, 1 kV = 1000 V) đo bằng VÔN KẾ mắc SONG SONG giữa hai đầu đoạn mạch cần đo (chốt + của dụng cụ đo luôn nối về phía cực + của nguồn). Cầu chì / aptomat tự ngắt mạch khi dòng điện tăng quá mức an toàn (đoản mạch).'
  ],
  formulas:[
    'Đổi đơn vị cường độ dòng điện & hiệu điện thế: 1 A = 1000 mA  ;  1 V = 1000 mV  ;  1 kV = 1000 V || Trong đó: I là cường độ dòng điện đo bằng Ampe (A) hoặc mili-ampe (mA); U là hiệu điện thế đo bằng Vôn (V), mili-vôn (mV) hoặc kilô-vôn (kV).',
    'Quy tắc mắc dụng cụ đo điện: Ampe kế mắc NỐI TIẾP  |  Vôn kế mắc SONG SONG || Lưu ý: Chốt (+) của dụng cụ đo luôn nối về phía cực dương (+) của nguồn điện; không mắc trực tiếp hai chốt ampe kế vào hai cực nguồn.',
    'Mạch điện mắc nối tiếp hai bóng đèn: I = I₁ = I₂  ;  U = U₁ + U₂ || Trong đó: I₁, I₂ là dòng điện qua từng đèn (luôn bằng nhau); U là hiệu điện thế cả mạch bằng tổng hiệu điện thế trên mỗi đèn.',
    'Mạch điện mắc song song hai bóng đèn: U = U₁ = U₂  ;  I = I₁ + I₂ || Trong đó: U₁, U₂ là hiệu điện thế hai đầu mỗi nhánh (luôn bằng nhau); I là dòng điện mạch chính bằng tổng dòng điện qua các nhánh rẽ.'
  ],
  examples:[
    {
      q:'(Cơ bản) Cọ xát thanh nhựa sẫm màu vào mảnh vải khô thì thanh nhựa nhận thêm electron. Hỏi thanh nhựa và mảnh vải nhiễm điện tích loại gì?',
      steps:[
        'Electron mang điện tích âm (−).',
        'Thanh nhựa nhận thêm electron nên thừa electron → nhiễm điện âm (−).',
        'Mảnh vải mất bớt electron cho thanh nhựa → nhiễm điện dương (+).'
      ],
      ans:'Thanh nhựa nhiễm điện âm (−); mảnh vải nhiễm điện dương (+).'
    },
    {
      q:'(Vận dụng) Hai bóng đèn Đ₁ và Đ₂ mắc nối tiếp vào nguồn điện có hiệu điện thế U = 9 V. Vôn kế mắc hai đầu đèn Đ₁ chỉ 3,5 V; ampe kế mắc trong mạch chỉ 250 mA. Tìm cường độ dòng điện qua mỗi đèn (theo A) và hiệu điện thế hai đầu Đ₂.',
      steps:[
        'Đổi I = 250 mA = 0,25 A. Vì mạch nối tiếp nên I₁ = I₂ = I = 0,25 A.',
        'Hiệu điện thế tổng U = U₁ + U₂ ⇒ U₂ = 9 − 3,5 = 5,5 V.'
      ],
      ans:'I₁ = I₂ = 0,25 A; U₂ = 5,5 V.'
    }
  ],
  questions:[
    {d:1,q:'Để đo cường độ dòng điện chạy qua bóng đèn, ta dùng dụng cụ nào và mắc như thế nào?',o:['Dùng ampe kế, mắc nối tiếp với bóng đèn','Dùng vôn kế, mắc nối tiếp với bóng đèn','Dùng ampe kế, mắc song song với bóng đèn','Dùng nhiệt kế, đặt cạnh bóng đèn'],w:'Ampe kế đo cường độ dòng điện và phải mắc nối tiếp vào đoạn mạch.'},
    {d:1,q:'Hai vật nhiễm điện CÙNG LOẠI đặt gần nhau thì tương tác như thế nào?',o:['Đẩy nhau','Hút nhau','Không có lực tương tác','Truyền ánh sáng cho nhau'],w:'Cùng dấu đẩy nhau, trái dấu hút nhau.'},
    {d:1,q:'Ở điều kiện thường, vật liệu nào sau đây là VẬT CÁCH ĐIỆN?',o:['Vỏ nhựa bọc dây điện, găng tay cao su khô','Dây đồng','Ruột bút chì (than chì)','Dung dịch nước muối ăn'],w:'Nhựa và cao su khô không có hạt mang điện tự do nên cách điện.'},
    {d:2,q:'Đổi giá trị cường độ dòng điện 2500 mA sang đơn vị Ampe (A).',n:2.5,t:0.001,u:'A',w:'2500 : 1000 = 2,5 A.'},
    {d:2,q:'Theo quy ước, chiều dòng điện trong mạch điện kín có chiều như thế nào?',o:['Đi từ cực dương qua dây dẫn và thiết bị điện tới cực âm của nguồn điện','Đi từ cực âm qua dây dẫn tới cực dương của nguồn điện','Cùng chiều chuyển động có hướng của electron tự do','Đổi chiều ngẫu nhiên trong pin một chiều'],w:'Chiều dòng điện quy ước từ (+) sang (−), ngược chiều dịch chuyển của electron.'},
    {d:2,q:'Người ta ứng dụng tác dụng nào của dòng điện để mạ một lớp vàng hoặc bạc mỏng lên vỏ đồng hồ?',o:['Tác dụng hóa học','Tác dụng nhiệt','Tác dụng phát sáng','Tác dụng sinh lí'],w:'Dòng điện đi qua dung dịch muối kim loại tách kim loại bám lên vật cần mạ (tác dụng hóa học).'},
    {d:3,q:'Hai bóng đèn Đ₁ và Đ₂ mắc NỐI TIẾP vào nguồn điện 12 V. Biết hiệu điện thế giữa hai đầu Đ₁ là 4,5 V. Hiệu điện thế giữa hai đầu Đ₂ là bao nhiêu V?',n:7.5,t:0.01,u:'V',w:'Mạch nối tiếp: U = U₁ + U₂ ⇒ U₂ = 12 − 4,5 = 7,5 V.'},
    {d:3,q:'Hai bóng đèn Đ₁ và Đ₂ mắc SONG SONG. Dòng điện qua Đ₁ là 0,3 A, qua Đ₂ là 0,45 A. Ampe kế mắc ở mạch chính chỉ bao nhiêu A?',n:0.75,t:0.005,u:'A',w:'Mạch song song: I = I₁ + I₂ = 0,3 + 0,45 = 0,75 A.'},
    {d:4,q:'Thiết bị an toàn như cầu chì hoặc aptomat được mắc nối tiếp trên dây dẫn chính trong nhà nhằm mục đích gì?',o:['Tự động ngắt mạch khi cường độ dòng điện tăng quá lớn (đoản mạch/quá tải), chống cháy nổ','Làm tăng hiệu điện thế từ 220 V lên 500 V','Giúp đèn sáng gấp đôi bình thường','Tích trữ điện năng khi mất điện'],w:'Khi quá tải/chập mạch, dòng điện lớn làm nóng chảy cầu chì hoặc nhảy aptomat để bảo vệ mạch.'},
    {d:4,q:'Có 3 quả cầu nhẹ nhiễm điện A, B, C treo bằng sợi chỉ tơ mảnh. Biết A đẩy B, còn B hút C (C đã mang điện tích, không trung hòa). Nếu A nhiễm điện dương (+) thì C mang điện tích gì?',o:['C mang điện tích âm (−)','C mang điện tích dương (+)','C không mang điện','Không thể xác định được dấu của C'],w:'A (+) đẩy B ⇒ B cùng dấu A nên B (+); B (+) hút C (đã nhiễm điện) ⇒ C trái dấu B nên C (−).'}
  ]},

{ id:'l8-nhiet', grade:8, term:'HK2', stage:3, weeks:'Tuần 22–24', periods:10, order:12, chapCode:'Chương VI', chapTitle:'Nhiệt', sgk:'Bài 26–29', subj:'ly', title:'Năng lượng nhiệt (Nội năng), Truyền nhiệt & Sự nở vì nhiệt', prereq:['l6-nang-luong'],
  theory:[
    'Các phân tử cấu tạo nên vật chuyển động hỗn độn không ngừng: nhiệt độ của vật càng cao thì các phân tử chuyển động càng nhanh. Tổng động năng và thế năng của các phân tử cấu tạo nên vật gọi là NỘI NĂNG của vật. Phần năng lượng nhiệt vật nhận thêm hay mất bớt trong quá trình truyền nhiệt gọi là nhiệt lượng (Q, đơn vị Jun – J).',
    'Ba hình thức truyền nhiệt: (1) Dẫn nhiệt là truyền nhiệt năng trực tiếp từ phần này sang phần khác của vật (chủ yếu ở CHẤT RẮN: kim loại dẫn nhiệt rất tốt; gỗ, nhựa, len, không khí dẫn nhiệt kém nên dùng cách nhiệt); (2) Đối lưu là truyền nhiệt bằng các dòng chất lưu nóng nổi lên, lạnh chìm xuống (hình thức chính ở CHẤT LỎNG và CHẤT KHÍ, không xảy ra ở chất rắn và chân không); (3) Bức xạ nhiệt là truyền nhiệt bằng các tia nhiệt đi thẳng (truyền được cả trong CHÂN KHÔNG; vật sẫm màu nhám hấp thụ tia nhiệt tốt hơn vật sáng bóng).',
    'Hiệu ứng nhà kính khí quyển giúp Trái Đất ấm áp, nhưng lượng CO₂, CH₄ tăng quá mức giữ lại bức xạ nhiệt gây nóng lên toàn cầu và biến đổi khí hậu.',
    'Sự nở vì nhiệt: hầu hết các chất nở ra (tăng thể tích) khi nóng lên và co lại khi lạnh đi. Mức độ nở vì nhiệt: CHẤT KHÍ nở nhiều hơn CHẤT LỎNG, chất lỏng nở nhiều hơn CHẤT RẮN (các chất khí khác nhau nở vì nhiệt giống nhau; các chất rắn/lỏng khác nhau nở khác nhau). Riêng nước có sự nở đặc biệt từ 0 °C đến 4 °C (khối lượng riêng lớn nhất ở 4 °C).',
    'Khi sự co giãn vì nhiệt của vật rắn bị ngăn cản, nó gây ra lực rất lớn (khe hở đường ray tàu hỏa, gối đỡ cầu thép, băng kép tự đóng ngắt bàn là điện khi đủ nóng). Nhiệt lượng đun nóng vật: Q = m · c · Δt.'
  ],
  formulas:[
    'Công thức tính nhiệt lượng vật thu vào hay tỏa ra: Q = m · c · Δt || Trong đó: Q là nhiệt lượng (J; 1 kJ = 1000 J); m là khối lượng vật bắt buộc đổi ra kg; c là nhiệt dung riêng của chất (J/(kg·K), nước c ≈ 4200 J/(kg·K)); Δt là độ tăng/giảm nhiệt độ (°C).',
    'Khả năng dẫn nhiệt của các chất: Kim loại > Rắn phi kim > Lỏng > Khí || Ý nghĩa: Kim loại dẫn nhiệt tốt dùng làm nồi đun; gỗ, nhựa, không khí dẫn nhiệt kém dùng cách nhiệt (chân không không dẫn nhiệt và không đối lưu).',
    'Mức độ nở vì nhiệt của các thể: Chất khí > Chất lỏng > Chất rắn || Lưu ý: Khi bị đun nóng, băng kép luôn cong về phía thanh kim loại nở vì nhiệt ÍT hơn.'
  ],
  examples:[
    {
      q:'(Cơ bản) Vì sao nồi, chảo đun nấu thường làm bằng nhôm, inox (kim loại) còn tay cầm lại bọc nhựa cứng hoặc gỗ?',
      steps:[
        'Thân nồi bằng kim loại dẫn nhiệt tốt giúp truyền nhiệt nhanh từ bếp vào thức ăn.',
        'Tay cầm bằng nhựa/gỗ dẫn nhiệt rất kém (cách nhiệt) giúp người cầm không bị bỏng.'
      ],
      ans:'Thân kim loại dẫn nhiệt tốt để nấu nhanh; cán nhựa/gỗ cách nhiệt chống bỏng.'
    },
    {
      q:'(Vận dụng) Tính nhiệt lượng cần cung cấp để đun nóng 2,5 lít nước (khối lượng 2,5 kg) từ 20 °C lên tới 100 °C, biết nhiệt dung riêng của nước c = 4200 J/(kg·K). Đổi kết quả ra kJ.',
      steps:[
        'Độ tăng nhiệt độ: Δt = 100 − 20 = 80 °C.',
        'Nhiệt lượng cần thu: Q = m · c · Δt = 2,5 × 4200 × 80 = 840 000 J.',
        'Đổi ra kJ: 840 000 : 1000 = 840 kJ.'
      ],
      ans:'840 kJ.'
    }
  ],
  questions:[
    {d:1,q:'Năng lượng nhiệt từ Mặt Trời truyền qua khoảng chân không vũ trụ tới Trái Đất bằng hình thức nào?',o:['Bức xạ nhiệt','Dẫn nhiệt','Đối lưu','Truyền âm'],w:'Trong chân không không có dẫn nhiệt và đối lưu, chỉ có bức xạ nhiệt truyền được.'},
    {d:1,q:'Hình thức truyền nhiệt chủ yếu trong CHẤT LỎNG và CHẤT KHÍ là gì?',o:['Đối lưu','Dẫn nhiệt','Phản xạ gương','Nhiễm điện'],w:'Chất lỏng và khí truyền nhiệt chủ yếu nhờ các dòng đối lưu.'},
    {d:1,q:'So sánh sự nở vì nhiệt của các thể chất nào sau đây là ĐÚNG?',o:['Chất khí nở vì nhiệt nhiều hơn chất lỏng, chất lỏng nở nhiều hơn chất rắn','Chất rắn nở vì nhiệt nhiều nhất, chất khí nở ít nhất','Ba thể rắn, lỏng, khí nở vì nhiệt bằng hệt nhau','Chất khí co lại khi nóng lên'],w:'Liên kết phân tử khí rất yếu nên chất khí nở vì nhiệt mạnh nhất.'},
    {d:2,q:'Vì sao khi lắp đặt dàn lạnh máy điều hòa không khí trong phòng, người ta luôn lắp ở trên cao gần trần nhà?',o:['Vì không khí lạnh nặng hơn chìm xuống dưới, không khí nóng nhẹ hơn bay lên tạo dòng đối lưu làm mát đều cả phòng','Chỉ để tránh trẻ em chạm vào','Vì không khí lạnh nhẹ hơn nên bay lên trần','Vì trên cao không có trọng lực'],w:'Dòng đối lưu tự nhiên giúp làm mát toàn bộ phòng nhanh chóng.'},
    {d:2,q:'Cần cung cấp bao nhiêu kJ nhiệt lượng để làm 2 kg nước nóng thêm 10 °C? (cho c_nước = 4200 J/(kg·K), 1 kJ = 1000 J)',n:84,t:0.1,u:'kJ',w:'Q = 2 × 4200 × 10 = 84 000 J = 84 kJ.'},
    {d:2,q:'Vì sao vào mùa hè trời nắng gắt, mặc áo màu trắng / sáng màu lại cảm thấy mát hơn mặc áo màu đen?',o:['Vì bề mặt màu trắng phản xạ bức xạ nhiệt tốt và hấp thụ nhiệt ít hơn màu đen','Vì vải màu đen dày hơn gấp đôi','Vì màu trắng tự sinh ra khí lạnh','Vì màu đen dẫn điện mạnh'],w:'Vật sẫm màu hấp thụ tia bức xạ nhiệt mạnh hơn nhiều so với vật sáng màu.'},
    {d:3,q:'Đun nóng 1,5 kg nước từ 25 °C đến khi sôi ở 100 °C (c = 4200 J/(kg·K)). Nhiệt lượng nước đã thu vào là bao nhiêu kJ?',n:472.5,t:0.5,u:'kJ',w:'Q = 1,5 × 4200 × (100 − 25) = 472 500 J = 472,5 kJ.'},
    {d:3,q:'Một băng kép gồm hai thanh kim loại đồng và thép tán chặt vào nhau (biết đồng nở vì nhiệt NHIỀU hơn thép). Khi đun nóng băng kép thì nó cong về phía nào?',o:['Cong về phía thanh thép (kim loại nở ít hơn)','Cong về phía thanh đồng (kim loại nở nhiều hơn)','Không hề bị cong, chỉ dài thẳng ra','Gãy đôi ngay lập tức'],w:'Đồng giãn dài hơn nên nằm ở vòng cung ngoài, ôm lấy thanh thép ở vòng cung trong.'},
    {d:4,q:'Vì sao khi rót nước thật sôi vào cốc thủy tinh DÀY thì cốc dễ bị nứt vỡ hơn cốc thủy tinh MỎNG?',o:['Thành trong nóng nở ra ngay trong khi thành ngoài của cốc dày chưa kịp truyền nhiệt tới nên chưa nở, gây lực căng làm vỡ cốc','Vì thủy tinh dày mềm hơn thủy tinh mỏng','Vì nước sôi phản ứng hóa học hòa tan thủy tinh dày','Vì cốc mỏng không hề nở vì nhiệt'],w:'Thủy tinh dẫn nhiệt kém; cốc mỏng nóng đều cả trong lẫn ngoài nhanh nên ít nứt vỡ.'},
    {d:4,q:'Phích (bình thủy) giữ nước nóng lâu gồm vỏ hai lớp thủy tinh có hút chân không ở giữa và tráng bạc mặt trong. Lớp chân không và lớp tráng bạc lần lượt ngăn cản hình thức truyền nhiệt nào?',o:['Chân không ngăn dẫn nhiệt & đối lưu; lớp tráng bạc phản xạ ngăn bức xạ nhiệt','Chân không ngăn bức xạ nhiệt; lớp tráng bạc ngăn đối lưu','Cả hai chỉ ngăn dẫn nhiệt','Lớp tráng bạc tự đun nóng nước'],w:'Thiết kế phích nước triệt tiêu đồng thời cả 3 hình thức truyền nhiệt.'}
  ]},

{ id:'l8-van-dong-tieu-hoa', grade:8, term:'HK2', stage:3, weeks:'Tuần 25–26', periods:9, order:13, chapCode:'Chương VII', chapTitle:'Sinh học cơ thể người', sgk:'Bài 30–32', subj:'sinh', title:'Khái quát cơ thể người, Hệ vận động & Dinh dưỡng – Tiêu hóa', prereq:['l7-dinh-duong-van-chuyen'],
  theory:[
    'Hệ vận động gồm bộ xương (khoảng 206 xương ở người trưởng thành, nối với nhau bởi các khớp động, bán động, bất động) và hệ cơ (khoảng 600 cơ vân bám vào xương). Xương có tính bền chắc nhờ muối khoáng (chủ yếu calcium) và tính mềm dẻo nhờ chất hữu cơ (collagen).',
    'Bảo vệ hệ vận động: ngồi học đúng tư thế ngay ngắn, mang cặp đều hai vai để chống cong vẹo cột sống; bổ sung calcium và vitamin D chống còi xương (trẻ em) và loãng xương (người già). Khi sơ cứu người gãy xương: phải CỐ ĐỊNH xương gãy bằng nẹp trước khi di chuyển, không tự ý nắn bóp.',
    'Hệ tiêu hóa gồm ống tiêu hóa (Khoang miệng → Hầu → Thực quản → Dạ dày → Ruột non → Ruột già → Trực tràng → Hậu môn) và các tuyến tiêu hóa (tuyến nước bọt, tuyến vị, gan tiết mật, tuyến tụy, tuyến ruột).',
    'Biến đổi thức ăn: ở khoang miệng enzyme amylase trong nước bọt biến đổi một phần tinh bột chín thành đường maltose; ở dạ dày (môi trường HCl acid) enzyme pepsin phân giải protein; RUỘT NON là nơi tiêu hóa hoàn toàn mọi loại thức ăn (glucid → đường đơn, protein → amino acid, lipid → glycerol + acid béo nhờ dịch mật nhũ tương hóa và lipase) đồng thời HẤP THỤ chủ yếu chất dinh dưỡng nhờ mạng lưới nếp gấp, lông ruột và vi nhung mao cực lớn.',
    'An toàn vệ sinh thực phẩm & phòng bệnh tiêu hóa: ăn chín uống sôi, rửa tay sạch, không ăn thực phẩm ôi thiu/nấm mốc (độc tố aflatoxin), ăn nhiều chất xơ chống táo bón, phòng vi khuẩn Helicobacter pylori (HP) gây viêm loét dạ dày.'
  ],
  formulas:[
    'Thành phần xương: Chất hữu cơ (tạo độ dẻo dai) + Chất khoáng Calcium/Phosphorus (tạo độ rắn chắc)',
    'Đường đi thức ăn: Miệng → Hầu → Thực quản → Dạ dày → Ruột non (hấp thụ chính) → Ruột già (hấp thụ lại nước) → Hậu môn',
    'Biến đổi hóa học chính: Tinh bột → Đường đơn  ;  Protein → Amino acid  ;  Lipid → Acid béo + Glycerol'
  ],
  examples:[
    {
      q:'(Cơ bản) Vì sao khi nhai kĩ cơm trắng trong miệng một lúc lâu ta lại cảm thấy có vị ngọt?',
      steps:[
        'Trong cơm có chứa nhiều tinh bột đã nấu chín (chưa có vị ngọt).',
        'Khi nhai kĩ, enzyme amylase trong nước bọt biến đổi một phần tinh bột thành đường maltose có vị ngọt.'
      ],
      ans:'Do enzyme amylase trong nước bọt biến đổi tinh bột chín thành đường maltose.'
    },
    {
      q:'(Vận dụng) Vì sao người bị cắt bỏ túi mật hoặc tắc ống dẫn mật thường được bác sĩ khuyên hạn chế ăn thức ăn nhiều dầu mỡ (lipid)?',
      steps:[
        'Dịch mật (do gan tiết ra, dự trữ ở túi mật) có vai trò nhũ tương hóa lipid (phân nhỏ giọt mỡ lớn thành giọt siêu nhỏ) giúp enzyme lipase tiêu hóa mỡ dễ dàng.',
        'Thiếu dịch mật đổ xuống tá tràng (đầu ruột non), dầu mỡ khó tiêu hóa gây đầy bụng, rối loạn tiêu hóa.'
      ],
      ans:'Thiếu dịch mật làm giảm khả năng nhũ tương hóa và tiêu hóa chất béo ở ruột non.'
    }
  ],
  questions:[
    {d:1,q:'Thành phần hóa học nào giúp xương có tính BỀN CHẮC, chịu lực tốt?',o:['Các chất khoáng (chủ yếu là muối calcium, phosphorus)','Chất hữu cơ cốt giao (collagen)','Nước tự do','Chất béo dự trữ'],w:'Muối khoáng tạo độ cứng chắc, còn chất hữu cơ tạo độ mềm dẻo cho xương.'},
    {d:1,q:'Cơ quan nào trong ống tiêu hóa là nơi HẤP THỤ CHỦ YẾU các chất dinh dưỡng vào máu và bạch huyết?',o:['Ruột non','Dạ dày','Thực quản','Khoang miệng'],w:'Ruột non dài, có nhiều nếp gấp, lông ruột và vi nhung mao tạo diện tích hấp thụ rất lớn.'},
    {d:1,q:'Enzyme amylase có trong nước bọt ở khoang miệng có tác dụng biến đổi chất nào?',o:['Biến đổi một phần tinh bột chín thành đường maltose','Biến đổi hoàn toàn chất đạm thành amino acid','Phân giải chất xơ cellulose','Hòa tan xương cá'],w:'Amylase nước bọt hoạt động ở pH gần trung tính, thủy phân tinh bột chín.'},
    {d:2,q:'Thói quen nào sau đây dễ dẫn đến tật CONG VẸO CỘT SỐNG ở học sinh?',o:['Ngồi học cúi gập lệch người, thường xuyên đeo cặp nặng lệch một bên vai','Ngồi thẳng lưng, hai chân chạm sàn thoải mái','Tập thể dục thể thao vừa sức đều đặn','Đeo ba lô đều trên cả hai vai'],w:'Tư thế lệch kéo dài khi xương đang phát triển làm biến dạng cột sống.'},
    {d:2,q:'Khi gặp người bị tai nạn nghi gãy xương cẳng tay hoặc cẳng chân, việc sơ cứu ĐÚNG cần làm trước khi đưa đi viện là gì?',o:['Dùng nẹp và băng cố định tạm thời chỗ xương gãy, không tự ý kéo nắn','Cố gắng bẻ nắn mạnh cho xương thẳng lại ngay tại chỗ','Cho nạn nhân tự đứng dậy đi bộ kiểm tra','Chườm nước thật sôi lên vết thương'],w:'Cố định bằng nẹp giúp đầu xương gãy không đâm rách mạch máu, dây thần kinh.'},
    {d:2,q:'Vai trò chính của RUỘT GIÀ trong hệ tiêu hóa người là gì?',o:['Hấp thụ lại nước và cô đặc chất bã tạo thành phân','Tiêu hóa toàn bộ chất đạm và tinh bột','Tiết acid HCl diệt khuẩn','Bơm máu đi nuôi cơ thể'],w:'Ruột già tái hấp thụ nước và điện giải; nếu hấp thụ quá ít gây tiêu chảy, quá lâu gây táo bón.'},
    {d:3,q:'Vitamin nào giúp cơ thể hấp thụ hiệu quả Calcium ở ruột để phòng bệnh còi xương ở trẻ em và loãng xương ở người lớn?',o:['Vitamin D','Vitamin C','Vitamin B1','Vitamin A'],w:'Thiếu vitamin D làm cơ thể không hấp thụ đủ calcium dù khẩu phần ăn có sữa.'},
    {d:3,q:'Loại vi khuẩn nào sống được trong lớp nhầy niêm mạc dạ dày và là tác nhân hàng đầu gây bệnh viêm loét dạ dày – tá tràng?',o:['Vi khuẩn Helicobacter pylori (HP)','Vi khuẩn lao Mycobacterium','Virus cúm A','Trùng sốt rét'],w:'Vi khuẩn HP tiết urease trung hòa acid quanh nó và gây tổn thương niêm mạc dạ dày.'},
    {d:4,q:'Ngâm một chiếc xương đùi ếch vào cốc dung dịch HCl 10% khoảng 15 – 20 phút (hòa tan hết muối khoáng calcium). Sau đó lấy ra uốn thử thì xương có hiện tượng gì?',o:['Xương rất mềm dẻo, có thể uốn cong dễ dàng mà không gãy','Xương giòn tan, chạm nhẹ là vỡ vụn như vôi','Xương cứng gấp đôi ban đầu','Xương tự phát sáng'],w:'Muối khoáng bị HCl hòa tan hết, chỉ còn lại chất hữu cơ (collagen) nên xương rất mềm dẻo (ngược lại nếu đốt cháy hết chất hữu cơ thì xương giòn bở).'},
    {d:4,q:'Dịch mật do gan tiết ra KHÔNG chứa enzyme tiêu hóa nhưng lại rất quan trọng đối với tiêu hóa lipid vì sao?',o:['Muối mật nhũ tương hóa chất béo thành các giọt nhỏ li ti, tăng diện tích tiếp xúc cho enzyme lipase phân giải','Dịch mật biến chất béo thành đường glucose ngay lập tức','Dịch mật tạo môi trường acid cực mạnh pH = 1','Dịch mật tiêu hóa tinh bột sống'],w:'Nhũ tương hóa làm tăng diện tích bề mặt tiếp xúc giữa lipid không tan trong nước với enzyme lipase.'}
  ]},

{ id:'l8-co-the-nguoi', grade:8, term:'HK2', stage:4, weeks:'Tuần 27–29', periods:10, order:14, chapCode:'Chương VII', chapTitle:'Sinh học cơ thể người', sgk:'Bài 33–36', subj:'sinh', title:'Máu, Hệ tuần hoàn, Hô hấp, Bài tiết & Cân bằng môi trường trong', prereq:['l8-van-dong-tieu-hoa'],
  theory:[
    'Máu gồm huyết tương (lỏng, màu vàng nhạt, ~55% thể tích, vận chuyển chất dinh dưỡng, hormone, chất thải) và các tế bào máu (~45%): Hồng cầu (không nhân, hình đĩa lõm hai mặt, chứa sắc tố hemoglobin Hb vận chuyển O₂ và CO₂), Bạch cầu (có nhân, bảo vệ cơ thể bằng thực bào, tạo kháng thể miễn dịch), Tiểu cầu (tham gia cơ chế đông máu bịt kín vết thương).',
    'Hệ nhóm máu ABO có 4 nhóm máu: O, A, B, AB. Nhóm máu O không có kháng nguyên A, B trên hồng cầu nên truyền được cho cả 4 nhóm (nhóm chuyên cho); nhóm AB không có kháng thể α, β trong huyết tương nên nhận được từ cả 4 nhóm (nhóm chuyên nhận). Tiêm vaccine là đưa kháng nguyên đã làm yếu/bất hoạt vào cơ thể để kích thích tạo miễn dịch chủ động đặc hiệu.',
    'Tim người có 4 ngăn (tâm nhĩ trái, tâm thất trái chứa máu đỏ tươi giàu O₂; tâm nhĩ phải, tâm thất phải chứa máu đỏ thẫm giàu CO₂) cùng hệ van tim giúp máu chảy một chiều. Vòng tuần hoàn nhỏ đưa máu qua phổi trao đổi khí; vòng tuần hoàn lớn đưa máu giàu O₂ đi nuôi toàn bộ cơ thể.',
    'Hệ hô hấp gồm đường dẫn khí (Mũi → Hầu → Thanh quản → Khí quản → Phế quản, có nhiệm vụ làm ẩm, làm ấm và lọc sạch không khí) và hai lá phổi gồm hàng trăm triệu phế nang (nơi trao đổi khí O₂ và CO₂ với mao mạch máu). Khói thuốc lá chứa chất độc CO (chiếm chỗ O₂ trên hồng cầu), nicotine và hắc ín gây ung thư phổi.',
    'Hệ bài tiết nước tiểu gồm: 2 quả thận (mỗi thận có khoảng 1 triệu đơn vị chức năng nephron lọc máu tạo nước tiểu đầu rồi tái hấp thụ tạo nước tiểu chính thức) → ống dẫn nước tiểu → bóng đái → ống đái. Nhờ bài tiết, môi trường trong cơ thể giữ được cân bằng nội môi (pH, áp suất thẩm thấu, nồng độ glucose, urea).'
  ],
  formulas:[
    'Máu = Huyết tương (55%) + Tế bào máu (45%: Hồng cầu chở khí · Bạch cầu miễn dịch · Tiểu cầu đông máu)',
    'Truyền máu hệ ABO: O truyền được cho O, A, B, AB  ;  AB nhận được từ O, A, B, AB (ưu tiên truyền cùng nhóm)',
    'Lọc máu ở thận: Máu → Cầu thận (Nước tiểu đầu ~170 L/ngày) → Ống thận tái hấp thụ → Nước tiểu chính thức (~1,5 L/ngày)'
  ],
  examples:[
    {
      q:'(Cơ bản) Vì sao người sống ở vùng núi cao (không khí loãng, phân áp O₂ thấp) thường có số lượng hồng cầu trong máu cao hơn người sống ở đồng bằng?',
      steps:[
        'Ở vùng núi cao lượng O₂ trong mỗi lít không khí hít vào ít hơn.',
        'Cơ thể thích nghi bằng cách tủy xương tăng sản sinh hồng cầu để đảm bảo vận chuyển đủ O₂ cho tế bào.'
      ],
      ans:'Tăng số lượng hồng cầu để bù đắp lượng O₂ thấp trong không khí loãng.'
    },
    {
      q:'(Vận dụng) Một bệnh nhân nhóm máu B cần truyền máu gấp. Ngoài máu cùng nhóm B, trong trường hợp khẩn cấp (lượng nhỏ) có thể truyền nhóm máu nào của hệ ABO mà không gây kết dính hồng cầu người cho?',
      steps:[
        'Người nhận nhóm B có kháng thể α (chống A) trong huyết tương → tuyệt đối không truyền nhóm A hay AB.',
        'Nhóm máu O không có cả kháng nguyên A lẫn B trên màng hồng cầu nên không bị kháng thể người nhận làm ngưng kết.'
      ],
      ans:'Có thể truyền nhóm máu B (tốt nhất) hoặc nhóm máu O.'
    }
  ],
  questions:[
    {d:1,q:'Thành phần tế bào máu nào chứa hemoglobin (huyết sắc tố) làm nhiệm vụ vận chuyển khí O₂ và CO₂?',o:['Hồng cầu','Bạch cầu','Tiểu cầu','Huyết tương'],w:'Hồng cầu chứa Hb kết hợp lỏng lẻo với O₂ (máu đỏ tươi) và CO₂.'},
    {d:1,q:'Trong hệ hô hấp người, sự trao đổi khí giữa không khí và máu diễn ra trực tiếp tại đâu?',o:['Các phế nang ở phổi','Khoang mũi','Khí quản','Thanh quản'],w:'Phế nang có thành cực mỏng (1 lớp tế bào) được bao quanh bởi mạng mao mạch dày đặc.'},
    {d:1,q:'Cơ quan nào đóng vai trò chủ đạo lọc máu để loại bỏ urea, uric acid và tạo thành nước tiểu?',o:['Hai quả thận','Dạ dày','Tim','Tuyến nước bọt'],w:'Thận lọc khoảng 90% sản phẩm bài tiết hòa tan trong máu (trừ CO₂ qua phổi).'},
    {d:2,q:'Trong 4 ngăn của tim người trưởng thành khỏe mạnh, những ngăn nào chứa máu ĐỎ TƯƠI (giàu O₂)?',o:['Tâm nhĩ trái và tâm thất trái','Tâm nhĩ phải và tâm thất phải','Tâm nhĩ phải và tâm nhĩ trái','Cả 4 ngăn đều chứa máu đỏ thẫm'],w:'Nửa bên trái của tim nhận máu giàu O₂ từ phổi về và bơm đi nuôi cơ thể.'},
    {d:2,q:'Tiêm vaccine phòng bệnh (sởi, viêm gan B, uốn ván…) tạo cho cơ thể loại miễn dịch nào?',o:['Miễn dịch nhân tạo chủ động (cơ thể tự sinh kháng thể và tế bào nhớ)','Miễn dịch bẩm sinh tự nhiên không đặc hiệu','Làm tiêu diệt toàn bộ bạch cầu','Chỉ cung cấp vitamin dinh dưỡng'],w:'Vaccine chứa kháng nguyên suy yếu giúp bạch cầu tập dượt tạo kháng thể và trí nhớ miễn dịch lâu dài.'},
    {d:2,q:'Thói quen nào sau đây GÂY HẠI trực tiếp cho thận và hệ bài tiết nước tiểu?',o:['Ăn quá mặn, uống ít nước và thường xuyên nhịn tiểu lâu','Uống đủ nước sạch chia đều trong ngày','Ăn nhạt vừa phải, hạn chế đồ chế biến sẵn nhiều muối','Đi tiểu đúng lúc khi có nhu cầu'],w:'Ăn mặn và nhịn tiểu làm lắng đọng muối khoáng gây sỏi thận và viêm đường tiết niệu.'},
    {d:3,q:'Trong hệ nhóm máu ABO, nhóm máu nào KHÔNG có kháng nguyên A và B trên hồng cầu (nhóm chuyên cho)?',o:['Nhóm máu O','Nhóm máu AB','Nhóm máu A','Nhóm máu B'],w:'Hồng cầu nhóm O không mang kháng nguyên A, B nên không bị kháng thể người nhận kết dính.'},
    {d:3,q:'Vì sao sưởi ấm bằng bếp than tổ ong, than củi trong phòng đóng kín cửa lại cực kì nguy hiểm, dễ gây tử vong do ngạt khí?',o:['Do sinh ra khí CO kết hợp rất chặt với hemoglobin của hồng cầu, ngăn hồng cầu vận chuyển O₂','Do than hút hết khí nitrogen trong phòng','Do nhiệt độ phòng giảm lạnh đột ngột','Do khói than làm đông đặc tiểu cầu ngay lập tức'],w:'Khí CO không màu, không mùi, ái lực với Hb mạnh gấp ~200 lần O₂ gây ngạt tế bào cấp tính.'},
    {d:4,q:'Mỗi ngày hai quả thận lọc tạo khoảng 170 lít "nước tiểu đầu", nhưng lượng "nước tiểu chính thức" thải ra chỉ khoảng 1,5 lít. Nhờ quá trình nào ở ống thận mà cơ thể không bị mất nước và glucose?',o:['Quá trình hấp thụ lại nước, glucose và các ion cần thiết từ ống thận trả về máu','Quá trình bốc hơi nước qua da mặt','Quá trình đốt cháy nước ở bóng đái','Nước tiểu đầu tự biến thành hồng cầu'],w:'Ống thận tái hấp thụ >99% nước, toàn bộ glucose (ở người khỏe mạnh) và các muối cần thiết.'},
    {d:4,q:'Nếu kết quả xét nghiệm nước tiểu chính thức của một người liên tục có nhiều đường GLUCOSE thì người đó có nguy cơ mắc bệnh lí rối loạn nội môi nào?',o:['Bệnh đái tháo đường (tiểu đường) do thiếu hoặc giảm tác dụng hormone insulin','Bệnh cận thị bẩm sinh','Bệnh còi xương thiếu vitamin D','Bệnh bướu cổ thiếu iodine'],w:'Đường huyết tăng quá ngưỡng thận khiến ống thận không tái hấp thụ hết glucose, thải ra nước tiểu.'}
  ]},

{ id:'l8-than-kinh-noi-tiet', grade:8, term:'HK2', stage:4, weeks:'Tuần 30–32', periods:10, order:15, chapCode:'Chương VII', chapTitle:'Sinh học cơ thể người', sgk:'Bài 37–40', subj:'sinh', title:'Hệ thần kinh, Giác quan, Nội tiết, Da & Sinh sản ở người', prereq:['l8-co-the-nguoi'],
  theory:[
    'Hệ thần kinh gồm bộ phận trung ương (não bộ và tủy sống) và bộ phận ngoại biên (các dây thần kinh và hạch thần kinh). Đơn vị cấu tạo là tế bào thần kinh (neuron) có chức năng cảm ứng và dẫn truyền xung thần kinh. Một cung phản xạ gồm 5 khâu: Cơ quan thụ cảm → Neuron hướng tâm (cảm giác) → Trung ương thần kinh → Neuron li tâm (vận động) → Cơ quan phản ứng.',
    'Phản xạ không điều kiện là bẩm sinh, bền vững (rụt tay khi chạm vật nóng, trẻ sơ sinh bú mẹ); Phản xạ có điều kiện hình thành qua học tập, rèn luyện (dừng xe trước đèn đỏ, tiết nước bọt khi nhìn thấy quả chanh). Cần ngủ đủ giấc, không dùng chất kích thích/ma túy để bảo vệ hệ thần kinh.',
    'Cơ quan phân tích thị giác (mắt): ảnh của vật hiện rõ trên MÀNG LƯỚI (võng mạc). Tật CẬN THỊ nhìn rõ vật ở gần nhưng không nhìn rõ vật ở xa (ảnh hiện trước màng lưới, do cầu mắt dài hoặc thể thủy tinh quá phồng → đeo kính PHÂN KÌ/kính cận để khắc phục); VIỄN THỊ ảnh hiện sau màng lưới → đeo kính HỘI TỤ. Tai thu nhận sóng âm làm rung màng nhĩ → chuỗi xương tai → ốc tai.',
    'Hệ nội tiết gồm các tuyến không có ống dẫn, tiết HORMONE ngấm thẳng vào máu điều hòa quá trình sinh lí: Tuyến yên (chỉ huy nhiều tuyến khác, tiết GH tăng trưởng), Tuyến giáp (tiết thyroxine cần nguyên tố iodine – thiếu gây bướu cổ), Tuyến tụy (tiết insulin làm GIẢM đường huyết khi đường máu cao và glucagon làm TĂNG đường huyết khi đường máu thấp), Tuyến thượng thận (adrenaline), Tuyến sinh dục (testosterone ở nam, estrogen ở nữ gây dậy thì).',
    'Sinh sản ở người: Tinh hoàn sản sinh tinh trùng, buồng trứng sản sinh trứng. Sự thụ tinh diễn ra ở 1/3 phía ngoài ỐNG DẪN TRỨNG tạo hợp tử rồi di chuyển xuống làm tổ ở niêm mạc TỬ CUNG. Cần hiểu biết sức khỏe sinh sản vị thành niên, phòng tránh mang thai ngoài ý muốn và các bệnh lây truyền qua đường tình dục (HIV/AIDS, lậu, giang mai).'
  ],
  formulas:[
    'Cung phản xạ (5 khâu): Thụ quan → Neuron cảm giác → Trung ương TK → Neuron vận động → Cơ quan phản ứng',
    'Cận thị: ảnh rơi TRƯỚC màng lưới → đeo thấu kính PHÂN KÌ  |  Viễn thị: ảnh rơi SAU màng lưới → kính HỘI TỤ',
    'Điều hòa đường huyết (Tuyến tụy): Đường máu cao → tiết Insulin (chuyển glucose → glycogen dự trữ ở gan) · Đường máu thấp → tiết Glucagon'
  ],
  examples:[
    {
      q:'(Cơ bản) Vì sao Nhà nước khuyến khích toàn dân sử dụng muối i-ốt (iodine) trong bữa ăn hằng ngày?',
      steps:[
        'Iodine là thành phần không thể thiếu để tuyến giáp tổng hợp hormone thyroxine.',
        'Thiếu iodine làm tuyến giáp phải phình to để hoạt động bù → gây bệnh bướu cổ, chậm phát triển trí tuệ và thể chất ở trẻ em.'
      ],
      ans:'Bổ sung iodine cho tuyến giáp tổng hợp thyroxine, phòng bệnh bướu cổ và thiểu năng trí tuệ.'
    },
    {
      q:'(Vận dụng) Sau bữa ăn nhiều tinh bột, nồng độ glucose trong máu tăng lên. Cơ thể điều hòa đưa đường huyết về mức ổn định bằng cơ chế nào?',
      steps:[
        'Tuyến tụy phát hiện nồng độ glucose máu tăng cao sẽ tăng tiết hormone INSULIN vào máu.',
        'Insulin kích thích tế bào nhận glucose và chuyển glucose dư thừa thành glycogen dự trữ ở gan và cơ, đưa đường huyết hạ về mức bình thường.'
      ],
      ans:'Tuyến tụy tiết hormone insulin chuyển glucose dư thành glycogen dự trữ ở gan và cơ.'
    }
  ],
  questions:[
    {d:1,q:'Bộ phận trung ương của hệ thần kinh ở người gồm những cơ quan nào?',o:['Não bộ và tủy sống','Tim và phổi','Các dây thần kinh ở tay chân','Tuyến giáp và tuyến tụy'],w:'Não nằm trong hộp sọ và tủy sống nằm trong ống xương sống hợp thành hệ thần kinh trung ương.'},
    {d:1,q:'Ở mắt bình thường, ảnh của vật cần quan sát phải hiện rõ nét trên bộ phận nào thì ta mới nhìn rõ?',o:['Màng lưới (võng mạc)','Giác mạc','Con ngươi (đồng tử)','Lông mi'],w:'Màng lưới chứa các tế bào thụ cảm ánh sáng (tế bào nón và tế bào que).'},
    {d:1,q:'Hormone INSULIN do tuyến nội tiết nào tiết ra và có tác dụng chính là gì?',o:['Tuyến tụy; làm hạ đường huyết về mức bình thường','Tuyến giáp; làm tăng đường huyết','Tuyến thượng thận; làm xương dài ra','Tuyến nước bọt; tiêu hóa tinh bột'],w:'Đảo tụy tiết insulin giúp chuyển hóa glucose thành glycogen, hạ đường huyết.'},
    {d:2,q:'Người bị tật CẬN THỊ có đặc điểm nhìn như thế nào và cần đeo loại kính gì?',o:['Chỉ nhìn rõ vật ở gần, không rõ vật ở xa; đeo kính phân kì','Chỉ nhìn rõ vật ở xa; đeo kính hội tụ','Nhìn rõ mọi khoảng cách; đeo kính phẳng','Mất hoàn toàn thị lực; không đeo kính được'],w:'Cận thị có ảnh của vật ở xa hiện trước màng lưới → dùng thấu kính phân kì đưa ảnh lùi về đúng màng lưới.'},
    {d:2,q:'Thiếu nguyên tố khoáng nào trong khẩu phần ăn sẽ dẫn đến rối loạn hoạt động tuyến giáp gây bệnh bướu cổ?',o:['Iodine (i-ốt)','Sắt (Iron)','Kẽm (Zinc)','Sodium (Natri)'],w:'Iodine là nguyên liệu cấu tạo hormone thyroxine của tuyến giáp.'},
    {d:2,q:'Ở cơ thể người nữ, sự thụ tinh giữa tinh trùng và trứng thường diễn ra ở vị trí nào?',o:['Ở ống dẫn trứng (1/3 phía ngoài gần buồng trứng)','Ở trong khoang dạ dày','Ở ngoài cơ thể','Ngay tại cổ tử cung'],w:'Trứng rụng gặp tinh trùng thụ tinh tại ống dẫn trứng rồi mới di chuyển vào tử cung làm tổ.'},
    {d:3,q:'Phản xạ nào sau đây là PHẢN XẠ CÓ ĐIỀU KIỆN (hình thành trong đời sống qua học tập)?',o:['Người tham gia giao thông dừng xe lại khi thấy đèn tín hiệu màu đỏ','Rụt tay lại ngay khi vô tình chạm vào cốc nước sôi','Chớp mắt khi có bụi bay vào mắt','Trẻ mới sinh khóc và biết bú sữa mẹ'],w:'Nhận biết ý nghĩa đèn đỏ phải qua học tập quy tắc giao thông.'},
    {d:3,q:'Bộ phận nào của tai thu nhận trực tiếp sóng âm từ ống tai truyền vào và bắt đầu dao động đầu tiên?',o:['Màng nhĩ','Dây thần kinh thị giác','Vành tai ngoài cùng','Vòi nhĩ thông xuống hầu'],w:'Sóng âm qua ống tai làm rung màng nhĩ → chuỗi xương tai giữa → ốc tai.'},
    {d:4,q:'Virus HIV gây hội chứng suy giảm miễn dịch mắc phải (AIDS) KHÔNG lây truyền qua con đường nào sau đây?',o:['Giao tiếp thông thường: bắt tay, ôm, học chung lớp, ăn uống chung mâm, muỗi đốt','Truyền máu hoặc dùng chung bơm kim tiêm nhiễm HIV','Quan hệ tình dục không an toàn với người nhiễm HIV','Từ mẹ nhiễm HIV sang con khi mang thai, sinh nở hoặc cho con bú'],w:'HIV chỉ lây qua 3 đường: đường máu, đường tình dục và từ mẹ sang con; không lây qua tiếp xúc sinh hoạt thông thường hay côn trùng đốt.'},
    {d:4,q:'Khi xa bữa ăn nhiều giờ hoặc vận động mạnh làm nồng độ glucose trong máu hạ thấp, tuyến tụy sẽ tiết hormone nào để phân giải glycogen ở gan thành glucose trả lại máu?',o:['Glucagon','Insulin','Thyroxine','Estrogen'],w:'Cặp hormone đối kháng Insulin (hạ đường huyết) và Glucagon (tăng đường huyết) giữ đường máu luôn ổn định.'}
  ]},

{ id:'l8-he-sinh-thai', grade:8, term:'HK2', stage:4, weeks:'Tuần 33–35', periods:10, order:16, chapCode:'Chương VIII', chapTitle:'Sinh vật và môi trường', sgk:'Bài 41–46', subj:'sinh', title:'Môi trường, Quần thể, Quần xã, Hệ sinh thái, Sinh quyển & Bảo vệ môi trường', prereq:['l6-phan-loai'],
  theory:[
    'Môi trường sống của sinh vật gồm 4 loại chính: môi trường cạn (mặt đất – không khí), môi trường nước, môi trường trong đất và môi trường sinh vật. Các nhân tố sinh thái chia làm: Nhân tố vô sinh (ánh sáng, nhiệt độ, độ ẩm, đất, nước, gió) và Nhân tố hữu sinh (các sinh vật khác và con người). Giới hạn sinh thái là khoảng giá trị xác định của một nhân tố sinh thái mà trong đó sinh vật có thể tồn tại và phát triển ổn định.',
    'Quần thể sinh vật là tập hợp các cá thể CÙNG LOÀI, cùng sinh sống trong một khoảng không gian xác định, vào một thời điểm nhất định và có khả năng sinh sản tạo thế hệ mới (các đặc trưng: tỉ lệ giới tính, nhóm tuổi, mật độ cá thể, kích thước quần thể).',
    'Quần xã sinh vật là tập hợp nhiều quần thể sinh vật thuộc CÁC LOÀI KHÁC NHAU cùng sống trong một không gian xác định, có mối quan hệ gắn bó với nhau (hỗ trợ: cộng sinh, hợp tác, hội sinh; đối kháng: cạnh tranh, kí sinh, sinh vật này ăn sinh vật khác; đặc trưng: độ đa dạng và thành phần loài).',
    'Hệ sinh thái bao gồm quần xã sinh vật và môi trường vô sinh của quần xã (sinh cảnh), trong đó các sinh vật luôn tác động qua lại với nhau và với môi trường tạo thành hệ thống hoàn chỉnh. Ba nhóm sinh vật trong hệ sinh thái: Sinh vật sản xuất (thực vật, tảo quang hợp) → Sinh vật tiêu thụ (động vật ăn thực vật bậc 1, ăn thịt bậc 2, 3…) → Sinh vật phân giải (nấm, vi khuẩn phân hủy xác hữu cơ thành chất vô cơ trả lại môi trường).',
    'Chuỗi thức ăn là một dãy nhiều loài sinh vật có quan hệ dinh dưỡng "loài trước làm thức ăn cho loài sau"; nhiều chuỗi thức ăn có mắt xích chung tạo thành LƯỚI THỨC ĂN. Toàn bộ các hệ sinh thái trên Trái Đất hợp thành SINH QUYỂN. Bảo vệ môi trường, trồng rừng và bảo tồn đa dạng sinh học giúp giữ vững cân bằng tự nhiên.'
  ],
  formulas:[
    'Hệ sinh thái = Quần xã sinh vật (hữu sinh) + Sinh cảnh (môi trường vô sinh)',
    'Chuỗi thức ăn điển hình: Sinh vật sản xuất (Cỏ/Lúa) → Tiêu thụ bậc 1 (Châu chấu) → Tiêu thụ bậc 2 (Ếch) → Tiêu thụ bậc 3 (Rắn) → Sinh vật phân giải (Vi khuẩn/Nấm)',
    'Cấp độ tổ chức sống lớn dần: Cá thể → Quần thể → Quần xã → Hệ sinh thái → Sinh quyển'
  ],
  examples:[
    {
      q:'(Cơ bản) Phân biệt đâu là Quần thể và đâu là Quần xã trong hai tập hợp sau: (A) Các cây tràm sống trong rừng tràm Trà Sư; (B) Các loài cá, tôm, rong, cua sống trong một cái hồ tự nhiên.',
      steps:[
        '(A) Gồm các cá thể CÙNG LOÀI cây tràm sống cùng khu vực và sinh sản được với nhau → là một Quần thể sinh vật.',
        '(B) Gồm nhiều quần thể thuộc CÁC LOÀI KHÁC NHAU (cá, tôm, rong, cua) cùng sống trong hồ → là một Quần xã sinh vật.'
      ],
      ans:'(A) Quần thể; (B) Quần xã.'
    },
    {
      q:'(Vận dụng) Cho chuỗi thức ăn trên đồng ruộng: Lúa → Sâu ăn lá → Chim sâu → Đại bàng. Điều gì xảy ra ngay trong vụ đó nếu con người săn bắt hết chim sâu?',
      steps:[
        'Chim sâu là thiên địch khống chế số lượng sâu ăn lá.',
        'Mất chim sâu, quần thể sâu ăn lá mất kẻ thù tự nhiên sẽ sinh sôi bùng phát mạnh, tàn phá làm giảm năng suất lúa; đồng thời đại bàng mất nguồn thức ăn cũng giảm số lượng hoặc bỏ đi.'
      ],
      ans:'Mất cân bằng sinh thái: sâu ăn lá bùng phát phá hại lúa, đại bàng suy giảm.'
    }
  ],
  questions:[
    {d:1,q:'Tập hợp các cá thể CÙNG LOÀI, cùng sống trong một không gian xác định, vào một thời điểm nhất định và có khả năng sinh sản tạo thế hệ mới gọi là gì?',o:['Quần thể sinh vật','Quần xã sinh vật','Sinh cảnh','Nhân tố vô sinh'],w:'Cùng loài + cùng không gian, thời gian + sinh sản được = Quần thể.'},
    {d:1,q:'Trong chuỗi thức ăn "Cỏ → Châu chấu → Ếch → Rắn", loài nào đóng vai trò là SINH VẬT SẢN XUẤT?',o:['Cỏ','Châu chấu','Ếch','Rắn'],w:'Cỏ là thực vật quang hợp tự tổng hợp chất hữu cơ từ chất vô cơ.'},
    {d:1,q:'Một hệ sinh thái hoàn chỉnh bao gồm những thành phần cấu trúc nào?',o:['Quần xã sinh vật và môi trường sống vô sinh của chúng (sinh cảnh)','Chỉ gồm các loài thực vật xanh','Chỉ gồm ánh sáng, nhiệt độ và đất đá','Chỉ gồm một loài động vật ăn thịt duy nhất'],w:'Hệ sinh thái = Quần xã + Sinh cảnh.'},
    {d:2,q:'Nhân tố nào sau đây thuộc nhóm NHÂN TỐ SINH THÁI VÔ SINH?',o:['Ánh sáng, nhiệt độ và độ ẩm không khí','Vi khuẩn cố định đạm','Cây cỏ cạnh tranh dinh dưỡng','Chim ăn sâu'],w:'Các yếu tố vật lí, hóa học không sống của môi trường là nhân tố vô sinh.'},
    {d:2,q:'Nhóm sinh vật nào giữ vai trò phân hủy xác chết và chất thải hữu cơ thành chất khoáng vô cơ trả lại đất?',o:['Sinh vật phân giải (vi khuẩn hoại sinh, nấm)','Sinh vật sản xuất (lúa, ngô)','Động vật ăn cỏ','Chim săn mồi'],w:'Sinh vật phân giải khép kín vòng tuần hoàn vật chất trong tự nhiên.'},
    {d:2,q:'Cá rô phi ở Việt Nam sống được trong khoảng nhiệt độ từ 5,6 °C đến 42 °C, phát triển tốt nhất ở 30 °C. Khoảng 5,6 °C – 42 °C được gọi là gì?',o:['Giới hạn sinh thái về nhiệt độ của cá rô phi','Mật độ cá thể của quần thể','Tỉ lệ giới tính của cá rô phi','Chuỗi thức ăn dưới nước'],w:'Khoảng giá trị nhân tố sinh thái mà sinh vật tồn tại được là giới hạn sinh thái.'},
    {d:3,q:'Mối quan hệ giữa vi khuẩn Rhizobium sống trong nốt sần rễ cây họ Đậu (vi khuẩn cố định đạm cho cây, cây cấp chất hữu cơ cho vi khuẩn; cả hai đều có lợi và gắn bó chặt chẽ) là quan hệ gì?',o:['Cộng sinh','Kí sinh – vật chủ','Cạnh tranh khác loài','Sinh vật này ăn sinh vật khác'],w:'Hai loài sống gắn bó và cả hai đều có lợi thiết yếu là quan hệ cộng sinh.'},
    {d:3,q:'Trong chuỗi thức ăn "Lúa → Châu chấu → Ếch đồng → Rắn hổ hành", loài Ếch đồng thuộc bậc tiêu thụ thứ mấy?',o:['Sinh vật tiêu thụ bậc 2','Sinh vật sản xuất','Sinh vật tiêu thụ bậc 1','Sinh vật phân giải'],w:'Lúa (SX) → Châu chấu (tiêu thụ bậc 1) → Ếch đồng (tiêu thụ bậc 2) → Rắn (tiêu thụ bậc 3).'},
    {d:4,q:'Trên một cánh đồng lúa, nếu người dân lạm dụng đánh bắt tận diệt rắn và ếch nhái thì hệ quả sinh thái nào dễ xảy ra nhất?',o:['Chuột đồng và sâu bọ côn trùng mất thiên địch sẽ tăng mạnh, phá hoại mùa màng','Cây lúa tự động tăng gấp đôi năng suất','Số lượng đại bàng ăn rắn tăng vọt gấp 10 lần','Không ảnh hưởng gì đến lưới thức ăn'],w:'Mất mắt xích thiên địch phá vỡ cân bằng tự nhiên, làm sinh vật gây hại bùng phát.'},
    {d:4,q:'Cấp độ tổ chức sống lớn nhất bao gồm toàn bộ các hệ sinh thái trên bề mặt Trái Đất (khí quyển thấp, thủy quyển, thạch quyển trên) được gọi là gì?',o:['Sinh quyển','Quần xã rừng mưa nhiệt đới','Quần thể người','Hệ Mặt Trời'],w:'Sinh quyển là cấp tổ chức sống lớn nhất trên hành tinh Trái Đất.'}
  ]}
);
