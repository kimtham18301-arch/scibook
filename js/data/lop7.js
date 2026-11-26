window.KHTN = window.KHTN || [];
// LỚP 7 – Theo đúng Mục lục SGK Khoa học tự nhiên 7 (Bộ Kết nối tri thức với cuộc sống – Bộ SGK thống nhất toàn quốc theo QĐ 3588/QĐ-BGDĐT).
// Gồm Bài mở đầu + 10 Chương (Bài 1 → Bài 42 SGK), phân bổ chuẩn Học kì I & Học kì II.
KHTN.push(
{ id:'l7-phuong-phap', grade:7, term:'HK1', stage:1, weeks:'Tuần 1–2', periods:6, order:1, chapCode:'Mở đầu', chapTitle:'Phương pháp và kĩ năng học tập môn KHTN', sgk:'Bài 1', subj:'td', title:'Phương pháp & kĩ năng học tập môn Khoa học tự nhiên', prereq:['l6-mo-dau'],
  theory:[
    'Phương pháp tìm hiểu tự nhiên gồm 5 bước: (1) Đề xuất vấn đề cần tìm hiểu → (2) Đưa ra dự đoán (giả thuyết) → (3) Lập kế hoạch kiểm tra dự đoán → (4) Thực hiện kế hoạch (thí nghiệm, thu thập dữ liệu) → (5) Viết báo cáo, thảo luận và kết luận.',
    'Các kĩ năng tiến trình khoa học cơ bản: quan sát (bằng giác quan hoặc thiết bị), phân loại (nhóm các đối tượng cùng đặc điểm), liên kết (kết nối dữ liệu), đo (xác định độ lớn đại lượng) và dự báo (nhận định điều sẽ xảy ra dựa trên quy luật).',
    'Thiết bị đo hiện đại trong KHTN 7: cổng quang điện nối với đồng hồ đo thời gian hiện số giúp đo thời gian chuyển động chính xác tới phần nghìn giây (0,001 s); cảm biến nhiệt độ, cảm biến ánh sáng, cảm biến pH.',
    'Khi đọc kết quả đo phải đặt mắt vuông góc với vạch chia và ghi kết quả theo độ chia nhỏ nhất (ĐCNN) của dụng cụ.',
    'Lưu ý hay nhầm: "Dự đoán (giả thuyết)" được đưa ra TRƯỚC khi làm thí nghiệm kiểm chứng; nếu thí nghiệm bác bỏ giả thuyết thì cần điều chỉnh lại giả thuyết.'
  ],
  formulas:[
    '5 bước phương pháp tìm hiểu tự nhiên: Vấn đề → Giả thuyết → Kế hoạch → Thực hiện → Kết luận || Ý nghĩa: Giả thuyết là câu dự đoán tạm thời đưa ra TRƯỚC khi làm thí nghiệm kiểm chứng.',
    '7 kĩ năng học tập KHTN: Quan sát · Phân loại · Liên kết · Đo · Dự báo · Thuyết trình · Viết báo cáo || Ý nghĩa: Các kĩ năng tiến trình giúp thu thập, xử lí số liệu và rút ra quy luật khoa học.',
    'Đổi đơn vị thời gian trên đồng hồ hiện số: 1 s = 1000 ms  ⇒  t_(giây) = \\frac{t_(ms)}{1000} || Trong đó: s là giây; ms là mili-giây đo từ cổng quang điện (VD: 250 ms = 0,25 s).'
  ],
  examples:[
    {
      q:'(Cơ bản) Thấy cây đậu trồng cạnh cửa sổ nghiêng về phía ngoài sáng, bạn An suy nghĩ: "Có lẽ ánh sáng làm ngọn cây mọc hướng về phía nó". Suy nghĩ này thuộc bước nào trong phương pháp tìm hiểu tự nhiên?',
      steps:[
        'Câu hỏi xuất phát từ quan sát là bước Đề xuất vấn đề.',
        'Câu nhận định giải thích tạm thời "Có lẽ ánh sáng làm ngọn cây mọc hướng về phía nó" là bước Đưa ra dự đoán (giả thuyết).'
      ],
      ans:'Bước 2: Đưa ra dự đoán (giả thuyết).'
    },
    {
      q:'(Vận dụng) Đồng hồ đo thời gian hiện số ở chế độ A↔B ghi nhận xe lăn đi từ cổng quang điện A đến B mất 450 ms. Đổi thời gian này ra giây (s).',
      steps:[
        'Ta có 1 s = 1000 ms (1 ms = 0,001 s).',
        'Thời gian t = 450 : 1000 = 0,45 s.'
      ],
      ans:'0,45 s.'
    }
  ],
  questions:[
    {d:1,q:'Bước đầu tiên trong phương pháp tìm hiểu tự nhiên là gì?',o:['Đề xuất vấn đề cần tìm hiểu','Viết báo cáo kết quả','Làm thí nghiệm ngay lập tức','Mua dụng cụ đo'],w:'Từ quan sát thực tế, ta đặt câu hỏi / đề xuất vấn đề trước tiên.'},
    {d:1,q:'Kĩ năng sắp xếp các sinh vật hoặc các chất có cùng đặc điểm vào từng nhóm gọi là kĩ năng gì?',o:['Kĩ năng phân loại','Kĩ năng đo','Kĩ năng dự báo','Kĩ năng thuyết trình'],w:'Nhóm các đối tượng theo tiêu chí chung là kĩ năng phân loại.'},
    {d:1,q:'Dụng cụ nào thường kết hợp với đồng hồ đo thời gian hiện số để đo thời gian vật chuyển động trong phòng thí nghiệm lớp 7?',o:['Cổng quang điện','Nhiệt kế rượu','Ống đong','Cân điện tử'],w:'Cổng quang điện phát và thu tia hồng ngoại để bật/tắt bộ đếm tự động.'},
    {d:2,q:'Thấy bầu trời nhiều mây đen và gió lạnh, ta nhận định trời sắp mưa dựa vào những lần quan sát trước. Đó là kĩ năng nào?',o:['Kĩ năng dự báo','Kĩ năng phân loại','Kĩ năng đo','Kĩ năng viết báo cáo'],w:'Dự báo là nêu điều có thể xảy ra dựa trên quy luật đã quan sát.'},
    {d:2,q:'Trong đồng hồ đo thời gian hiện số, chế độ đo "A ↔ B" dùng để đo khoảng thời gian nào?',o:['Thời gian vật đi từ cổng quang điện A đến cổng quang điện B','Thời gian vật chắn cổng A','Tổng thời gian mở điện trong ngày','Nhiệt độ của hai cổng A và B'],w:'Chế độ A ↔ B bắt đầu đếm khi vật tới cổng A và dừng khi vật tới cổng B.'},
    {d:2,q:'Đổi khoảng thời gian 250 ms (mili-giây) sang đơn vị giây (s).',n:0.25,t:0.001,u:'s',w:'250 : 1000 = 0,25 s.'},
    {d:3,q:'Khi kết quả thí nghiệm lặp lại nhiều lần đều KHÔNG đúng với giả thuyết ban đầu, người nghiên cứu cần làm gì?',o:['Xem xét lại và đề xuất giả thuyết mới phù hợp thực nghiệm','Sửa số liệu thí nghiệm cho khớp giả thuyết','Bỏ qua kết quả thí nghiệm','Kết luận giả thuyết ban đầu vẫn đúng'],w:'Khoa học tôn trọng số liệu trung thực; giả thuyết sai phải được điều chỉnh.'},
    {d:3,q:'Một thước thẳng có giới hạn đo 20 cm, khoảng cách từ vạch 0 đến vạch 1 cm được chia làm 10 khoảng đều nhau. Độ chia nhỏ nhất (ĐCNN) của thước là bao nhiêu cm?',n:0.1,t:0.001,u:'cm',w:'1 cm chia 10 khoảng đều → ĐCNN = 1 : 10 = 0,1 cm (hay 1 mm).'},
    {d:3,q:'Để kiểm tra giả thuyết "Nhiệt độ nước càng cao thì đường tan càng nhanh", yếu tố nào CẦN GIỮ NGUYÊN ở hai cốc thí nghiệm?',o:['Khối lượng đường, thể tích nước và tốc độ khuấy','Nhiệt độ của nước ở hai cốc','Cốc một dùng đường phèn, cốc hai dùng đường cát mịn','Một cốc khuấy mạnh, một cốc để yên'],w:'Thí nghiệm đối chứng chỉ thay đổi biến nhiệt độ, giữ nguyên các yếu tố còn lại.'},
    {d:4,q:'Một tấm chắn sáng dài 5 cm gắn trên xe lăn đi qua một cổng quang điện mất 0,25 s. Tốc độ tức thời của xe khi qua cổng là bao nhiêu cm/s?',n:20,t:0.01,u:'cm/s',w:'v = d / t = 5 : 0,25 = 20 cm/s.'}
  ]},

{ id:'l7-nguyen-tu', grade:7, term:'HK1', stage:1, weeks:'Tuần 3–4', periods:8, order:2, chapCode:'Chương I', chapTitle:'Nguyên tử. Sơ lược về bảng tuần hoàn các nguyên tố hóa học', sgk:'Bài 2', subj:'hoa', title:'Nguyên tử & cấu tạo lớp vỏ electron', prereq:['l6-hon-hop'],
  theory:[
    'Nguyên tử là hạt vô cùng nhỏ, trung hòa về điện, cấu tạo gồm hạt nhân ở tâm (chứa proton mang điện tích +1 và neutron không mang điện) và lớp vỏ gồm các electron mang điện tích −1.',
    'Nguyên tử luôn trung hòa về điện nên: số proton (p) = số electron (e). Số đơn vị điện tích hạt nhân Z = số p.',
    'Theo mô hình Rutherford – Bohr, electron chuyển động quanh hạt nhân theo từng lớp từ trong ra ngoài: lớp 1 tối đa 2e, lớp 2 tối đa 8e, lớp 3 (với 20 nguyên tố đầu) điền tối đa 8e lớp ngoài cùng.',
    'Khối lượng 1 proton ≈ 1 amu, 1 neutron ≈ 1 amu, khối lượng 1 electron ≈ 0,00055 amu (rất nhỏ, không đáng kể) → Khối lượng nguyên tử tập trung ở hạt nhân và xấp xỉ bằng (p + n) amu.',
    'Lưu ý hay nhầm: Tổng số hạt cơ bản trong nguyên tử = p + n + e = 2p + n; còn khối lượng nguyên tử theo amu ≈ p + n (tuyệt đối không cộng số e vào khối lượng amu).'
  ],
  formulas:[
    'Điều kiện nguyên tử trung hòa điện: p = e = Z || Trong đó: p là số hạt proton (+1) trong hạt nhân; e là số hạt electron (−1) ở vỏ; Z là số đơn vị điện tích hạt nhân.',
    'Tổng số hạt cơ bản trong nguyên tử: S = p + n + e = 2p + n || Trong đó: S là tổng số hạt; p là số proton; n là số neutron (không mang điện); vì p = e nên tổng hạt mang điện (p + e) = 2p.',
    'Hiệu số hạt mang điện và không mang điện: (p + e) − n = 2p − n || Ý nghĩa: Kết hợp với phương trình 2p + n = S để giải nhanh bài toán tìm số hạt p, n, e của nguyên tử.',
    'Khối lượng nguyên tử xấp xỉ: m_nt ≈ p + n (amu) || Trong đó: 1 proton ≈ 1 amu, 1 neutron ≈ 1 amu; khối lượng electron rất nhỏ (≈ 0,00055 amu) nên bỏ qua (1 amu ≈ 1,6605 × 10⁻²⁴ g).'
  ],
  examples:[
    {
      q:'(Cơ bản) Nguyên tử Nitrogen có 7 proton và 7 neutron. Xác định số electron, số electron lớp ngoài cùng và khối lượng nguyên tử.',
      steps:[
        'Nguyên tử trung hòa điện → số e = số p = 7.',
        'Phân bố electron: lớp 1 có 2e, lớp 2 còn lại 7 − 2 = 5e → lớp ngoài cùng có 5e.',
        'Khối lượng nguyên tử ≈ 7 + 7 = 14 amu.'
      ],
      ans:'7e; 5e lớp ngoài cùng; khối lượng 14 amu.'
    },
    {
      q:'(Vận dụng) Nguyên tử X có tổng số hạt (p, n, e) là 52, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 16. Tìm số p, số n và khối lượng nguyên tử X.',
      steps:[
        'Ta có hệ: 2p + n = 52 và 2p − n = 16.',
        'Cộng hai vế: 4p = 68 ⇒ p = 17 (Chlorine); suy ra e = 17 và n = 52 − 34 = 18.',
        'Khối lượng nguyên tử X ≈ 17 + 18 = 35 amu.'
      ],
      ans:'p = e = 17; n = 18; khối lượng nguyên tử = 35 amu.'
    }
  ],
  questions:[
    {d:1,q:'Hạt nào KHÔNG mang điện trong hạt nhân nguyên tử?',o:['Neutron','Proton','Electron','Ion'],w:'Hạt nhân gồm proton (+) và neutron (không mang điện).'},
    {d:1,q:'Phần nào chiếm gần như toàn bộ khối lượng của nguyên tử?',o:['Hạt nhân','Lớp vỏ electron','Khoảng không gian trống','Hạt nhân và vỏ nặng ngang nhau'],w:'Electron có khối lượng rất nhỏ (≈ 0,00055 amu) so với proton và neutron.'},
    {d:1,q:'Lớp electron thứ nhất (trong cùng, gần hạt nhân nhất) chứa tối đa bao nhiêu electron?',n:2,t:0,u:'electron',w:'Lớp thứ nhất chứa tối đa 2 electron; lớp thứ hai tối đa 8 electron.'},
    {d:2,q:'Nguyên tử Sodium (Na) có 11 proton và 12 neutron. Số electron ở vỏ nguyên tử Na là bao nhiêu?',n:11,t:0,u:'electron',w:'Số e = số p = 11.'},
    {d:2,q:'Nguyên tử Aluminium (Al) có 13 proton và 14 neutron. Khối lượng nguyên tử Al xấp xỉ bao nhiêu amu?',n:27,t:0,u:'amu',w:'Khối lượng nguyên tử ≈ p + n = 13 + 14 = 27 amu.'},
    {d:2,q:'Nguyên tử Oxygen có 8 electron. Lớp ngoài cùng của nguyên tử Oxygen có bao nhiêu electron?',n:6,t:0,u:'electron',w:'Lớp 1 có 2e → lớp 2 (ngoài cùng) có 8 − 2 = 6e.'},
    {d:3,q:'Tổng số hạt p, n, e trong một nguyên tử là 40, biết số neutron là 14. Số proton của nguyên tử đó là bao nhiêu?',n:13,t:0,u:'proton',w:'2p + 14 = 40 ⇒ 2p = 26 ⇒ p = 13.'},
    {d:3,q:'Nguyên tử Y có 3 lớp electron, lớp ngoài cùng có 2 electron (hai lớp trong đã bão hòa). Hạt nhân Y có bao nhiêu proton?',n:12,t:0,u:'proton',w:'Số e = 2 + 8 + 2 = 12 ⇒ số p = 12 (Magnesium).'},
    {d:4,q:'Nguyên tử X có tổng số hạt (p, n, e) bằng 52; số hạt mang điện nhiều hơn số hạt không mang điện là 16. Số proton của X là bao nhiêu?',n:17,t:0,u:'proton',w:'2p + n = 52 và 2p − n = 16 ⇒ 4p = 68 ⇒ p = 17.'},
    {d:4,q:'Nguyên tử R có tổng số hạt là 36, trong đó số hạt không mang điện bằng một nửa số hạt mang điện (n = p). Khối lượng nguyên tử R là bao nhiêu amu?',n:24,t:0,u:'amu',w:'2p + n = 36 và n = p ⇒ 3p = 36 ⇒ p = n = 12 ⇒ khối lượng ≈ 12 + 12 = 24 amu (Mg).'}
  ]},

{ id:'l7-bang-tuan-hoan', grade:7, term:'HK1', stage:1, weeks:'Tuần 5–6', periods:10, order:3, chapCode:'Chương I', chapTitle:'Nguyên tử. Sơ lược về bảng tuần hoàn các nguyên tố hóa học', sgk:'Bài 3–4', subj:'hoa', title:'Nguyên tố hóa học & sơ lược bảng tuần hoàn', prereq:['l7-nguyen-tu'],
  theory:[
    'Nguyên tố hóa học là tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân. Số proton là số đặc trưng duy nhất xác định nguyên tố hóa học.',
    'Kí hiệu hóa học gồm 1 hoặc 2 chữ cái (chữ cái đầu viết in hoa, chữ cái thứ hai nếu có viết thường): H, He, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, K, Ca, Fe, Cu, Zn, Ag…',
    'Nguyên tắc sắp xếp bảng tuần hoàn: theo chiều tăng dần của điện tích hạt nhân nguyên tử; các nguyên tố có cùng số lớp e xếp cùng một hàng (chu kì); các nguyên tố có tính chất hóa học tương tự xếp cùng một cột (nhóm).',
    'Cấu trúc bảng tuần hoàn: Ô nguyên tố (số thứ tự ô = Z = p = e); 7 Chu kì (số thứ tự chu kì = số lớp electron); Nhóm A (số thứ tự nhóm IA → VIIIA = số e lớp ngoài cùng, riêng He có 2e vẫn thuộc nhóm VIIIA vì là khí hiếm).',
    'Phân loại: Kim loại (>80%, thường có 1, 2, 3e lớp ngoài cùng, trừ H, He, B); Phi kim (thường có 5, 6, 7e lớp ngoài cùng); Khí hiếm (nhóm VIIIA, vỏ bền vững 8e hoặc 2e với He, hầu như không phản ứng).'
  ],
  formulas:[
    'Ý nghĩa số thứ tự ô nguyên tố: Số thứ tự ô = Z = p = e || Ý nghĩa: Biết số thứ tự ô suy ra ngay điện tích hạt nhân Z, số proton trong hạt nhân và số electron ở lớp vỏ.',
    'Ý nghĩa số thứ tự chu kì (hàng ngang): Số thứ tự chu kì = Số lớp electron || Ý nghĩa: Nguyên tử có mấy lớp electron thì nằm ở chu kì bấy nhiêu (VD: có 3 lớp e → thuộc Chu kì 3).',
    'Ý nghĩa số thứ tự nhóm A (cột dọc La Mã): Số thứ tự nhóm A = Số electron lớp ngoài cùng || Ý nghĩa: Cho biết tính chất hóa học (1, 2, 3e thường là kim loại; 5, 6, 7e thường là phi kim; 8e nhóm VIIIA là khí hiếm bền vững, riêng He có 2e vẫn thuộc VIIIA).'
  ],
  examples:[
    {
      q:'(Cơ bản) Ô nguyên tố Calcium (Ca) có số hiệu nguyên tử là 20. Xác định số proton, số lớp electron (biết phân bố e: 2, 8, 8, 2), chu kì và nhóm của Ca.',
      steps:[
        'Số thứ tự ô = 20 ⇒ số p = số e = 20.',
        'Có 4 lớp electron (2, 8, 8, 2) ⇒ thuộc chu kì 4.',
        'Có 2e lớp ngoài cùng ⇒ thuộc nhóm IIA, là kim loại.'
      ],
      ans:'20p; chu kì 4, nhóm IIA (kim loại).'
    },
    {
      q:'(Vận dụng) Nguyên tố X nằm ở chu kì 3, nhóm VA. Hãy tìm số hiệu nguyên tử của X và cho biết X là kim loại hay phi kim.',
      steps:[
        'Chu kì 3 ⇒ có 3 lớp electron (2 lớp trong đã đủ 2e và 8e).',
        'Nhóm VA ⇒ lớp ngoài cùng (lớp 3) có 5 electron.',
        'Tổng số e = 2 + 8 + 5 = 15 ⇒ Z = 15 (Phosphorus – P), có 5e lớp ngoài cùng nên là phi kim.'
      ],
      ans:'Z = 15 (Phosphorus), là phi kim.'
    }
  ],
  questions:[
    {d:1,q:'Kí hiệu hóa học của nguyên tố sắt (Iron) là gì?',o:['Fe','S','F','Si'],w:'Fe bắt nguồn từ tên La-tinh Ferrum.'},
    {d:1,q:'Các nguyên tố ở nhóm VIIIA (cột cuối cùng bên phải bảng tuần hoàn) thuộc loại nào?',o:['Khí hiếm','Kim loại kiềm','Phi kim mạnh','Kim loại chuyển tiếp'],w:'Nhóm VIIIA gồm He, Ne, Ar… là các nguyên tố khí hiếm.'},
    {d:1,q:'Các nguyên tử thuộc cùng một nguyên tố hóa học luôn có cùng đại lượng nào?',o:['Số proton trong hạt nhân','Số neutron trong hạt nhân','Khối lượng nguyên tử','Số phân tử'],w:'Số proton đặc trưng cho nguyên tố hóa học.'},
    {d:2,q:'Nguyên tố Oxygen ở ô số 8 trong bảng tuần hoàn có bao nhiêu proton?',n:8,t:0,u:'proton',w:'Số thứ tự ô = số proton = 8.'},
    {d:2,q:'Nguyên tử có 3 lớp electron thì thuộc chu kì mấy trong bảng tuần hoàn?',o:['Chu kì 3','Chu kì 1','Chu kì 2','Chu kì 4'],w:'Số thứ tự chu kì bằng số lớp electron.'},
    {d:2,q:'Nguyên tố Magnesium (Z = 12, phân bố e: 2, 8, 2) nằm ở nhóm nào?',o:['Nhóm IIA','Nhóm IA','Nhóm IIIA','Nhóm VIIIA'],w:'Có 2 electron lớp ngoài cùng → nhóm IIA.'},
    {d:3,q:'Nguyên tố X ở chu kì 3, nhóm VA. Số proton trong hạt nhân của X là bao nhiêu?',n:15,t:0,u:'proton',w:'Chu kì 3 (3 lớp e), nhóm VA (5e ngoài cùng) → 2 + 8 + 5 = 15.'},
    {d:3,q:'Nguyên tố Chlorine có Z = 17 (phân bố e: 2, 8, 7). Phát biểu nào sau đây ĐÚNG?',o:['Là phi kim, thuộc chu kì 3, nhóm VIIA','Là kim loại, thuộc chu kì 3, nhóm IA','Là khí hiếm, thuộc chu kì 3, nhóm VIIIA','Là phi kim, thuộc chu kì 2, nhóm VIIA'],w:'3 lớp e → chu kì 3; 7e lớp ngoài cùng → nhóm VIIA, là phi kim.'},
    {d:4,q:'Hai nguyên tử X (8p, 8n) và Y (8p, 10n) được xếp vào mấy ô trong bảng tuần hoàn?',n:1,t:0,u:'ô',w:'Cùng có 8 proton nên cùng thuộc 1 nguyên tố Oxygen → xếp chung vào 1 ô số 8.'},
    {d:4,q:'Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một chu kì nhỏ và có tổng số proton là 25. Số hiệu nguyên tử của nguyên tố lớn hơn là bao nhiêu?',n:13,t:0,u:'proton',w:'Đứng kế tiếp nhau nên Z_B − Z_A = 1; kết hợp Z_A + Z_B = 25 ⇒ Z_A = 12 (Mg), Z_B = 13 (Al).'}
  ]},

{ id:'l7-phan-tu', grade:7, term:'HK1', stage:1, weeks:'Tuần 7–8', periods:9, order:4, chapCode:'Chương II', chapTitle:'Phân tử. Liên kết hóa học', sgk:'Bài 5–6', subj:'hoa', title:'Phân tử – Đơn chất – Hợp chất & Liên kết hóa học', prereq:['l7-bang-tuan-hoan'],
  theory:[
    'Phân tử là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hóa học của chất (riêng khí hiếm có hạt đại diện là nguyên tử đơn lẻ).',
    'Đơn chất tạo nên từ 1 nguyên tố hóa học (O₂, H₂, N₂, Cl₂, Fe, Cu, C). Hợp chất tạo nên từ 2 nguyên tố hóa học trở lên (H₂O, CO₂, NaCl, H₂SO₄, CaCO₃).',
    'Nguyên tử các nguyên tố có xu hướng nhường, nhận hoặc dùng chung electron để đạt lớp vỏ bền vững của khí hiếm gần nhất (8e lớp ngoài cùng, hoặc 2e giống Helium).',
    'Liên kết ion: hình thành bởi lực hút tĩnh điện giữa ion dương (kim loại nhường e, VD: Na⁺, Mg²⁺) và ion âm (phi kim nhận e, VD: Cl⁻, O²⁻). Hợp chất ion (NaCl, MgO, CaCl₂) là chất rắn ở điều kiện thường, khó nóng chảy, khó bay hơi, tan trong nước tạo dung dịch dẫn điện.',
    'Liên kết cộng hóa trị: hình thành do sự dùng chung một hay nhiều cặp electron (thường giữa các phi kim: H₂, O₂, N₂, H₂O, CO₂, NH₃, CH₄). Chất cộng hóa trị có thể ở thể rắn, lỏng, khí; nhiệt độ nóng chảy/sôi thường thấp và không dẫn điện.'
  ],
  formulas:[
    'Tính khối lượng phân tử (KLPT): M_pt = Tổng khối lượng các nguyên tử trong phân tử (amu) || Cách tính: Cộng tích (nguyên tử khối × chỉ số chân) của mọi nguyên tố trong phân tử (VD: M_(H₂SO₄) = 2×1 + 32 + 4×16 = 98 amu).',
    'Nguyên tử khối (amu) thường gặp: H=1, C=12, N=14, O=16, Na=23, Mg=24, Al=27, P=31, S=32, Cl=35,5, K=39, Ca=40, Fe=56, Cu=64, Zn=65, Ag=108, Ba=137 || Ý nghĩa: Trị số nguyên tử khối (amu) dùng tính KLPT ở lớp 7 và cũng chính là khối lượng mol M (g/mol) ở lớp 8.',
    'Dấu hiệu nhận biết liên kết ion: Kim loại điển hình + Phi kim điển hình → Liên kết ion (NaCl, KCl, MgO, CaO) || Bản chất: Kim loại nhường e thành ion dương (+), phi kim nhận e thành ion âm (−) rồi hút nhau bằng lực tĩnh điện.',
    'Dấu hiệu nhận biết liên kết cộng hóa trị: Phi kim + Phi kim → Liên kết cộng hóa trị (H₂, O₂, H₂O, CO₂, NH₃, HCl) || Bản chất: Các nguyên tử phi kim góp chung một hay nhiều cặp electron để cùng đạt vỏ khí hiếm bền vững.'
  ],
  examples:[
    {
      q:'(Cơ bản) Giải thích sự tạo thành liên kết trong phân tử Sodium chloride (NaCl), biết Na (Z=11) và Cl (Z=17).',
      steps:[
        'Nguyên tử Na (2, 8, 1) nhường 1e lớp ngoài cùng tạo thành ion dương Na⁺ (2, 8 bền như Ne).',
        'Nguyên tử Cl (2, 8, 7) nhận 1e đó tạo thành ion âm Cl⁻ (2, 8, 8 bền như Ar).',
        'Hai ion trái dấu Na⁺ và Cl⁻ hút nhau bằng lực hút tĩnh điện tạo liên kết ion trong NaCl.'
      ],
      ans:'Liên kết ion giữa Na⁺ và Cl⁻.'
    },
    {
      q:'(Vận dụng) Hợp chất A có công thức R₂(SO₄)₃ có khối lượng phân tử là 342 amu (S = 32, O = 16). Tìm nguyên tử khối của R.',
      steps:[
        'Khối lượng nhóm SO₄ = 32 + 4 × 16 = 96 amu.',
        'Ta có: 2 × R + 3 × 96 = 342 ⇒ 2R + 288 = 342.',
        '2R = 54 ⇒ R = 27 amu (Aluminium – Al).'
      ],
      ans:'R = 27 amu (Al).'
    }
  ],
  questions:[
    {d:1,q:'Chất nào sau đây là ĐƠN CHẤT?',o:['Khí oxygen (O₂)','Nước tinh khiết (H₂O)','Khí carbon dioxide (CO₂)','Muối ăn (NaCl)'],w:'O₂ chỉ do 1 nguyên tố oxygen tạo nên.'},
    {d:1,q:'Khối lượng phân tử của nước (H₂O) là bao nhiêu amu? (H = 1, O = 16)',n:18,t:0,u:'amu',w:'2 × 1 + 16 = 18 amu.'},
    {d:1,q:'Liên kết hóa học trong phân tử muối ăn (NaCl) thuộc loại liên kết nào?',o:['Liên kết ion','Liên kết cộng hóa trị','Liên kết kim loại','Không có liên kết'],w:'Na nhường e cho Cl tạo ion Na⁺ và Cl⁻ hút nhau.'},
    {d:2,q:'Trong phân tử khí oxygen (O₂), mỗi nguyên tử O (có 6e lớp ngoài cùng) góp chung mấy electron để đạt vỏ 8e bền vững?',n:2,t:0,u:'electron',w:'Cần thêm 2e để đủ 8e nên mỗi nguyên tử O góp chung 2e (tạo 2 cặp e dùng chung).'},
    {d:2,q:'Tính khối lượng phân tử của H₂SO₄ (H = 1, S = 32, O = 16).',n:98,t:0,u:'amu',w:'2×1 + 32 + 4×16 = 98 amu.'},
    {d:2,q:'Chất nào sau đây là hợp chất cộng hóa trị?',o:['Carbon dioxide (CO₂)','Magnesium oxide (MgO)','Sodium chloride (NaCl)','Calcium chloride (CaCl₂)'],w:'C và O đều là phi kim nên liên kết bằng cặp e dùng chung.'},
    {d:3,q:'Hợp chất X₂O có khối lượng phân tử là 62 amu (O = 16). Nguyên tử khối của X là bao nhiêu amu?',n:23,t:0,u:'amu',w:'2X + 16 = 62 ⇒ 2X = 46 ⇒ X = 23 (Na).'},
    {d:3,q:'Tính khối lượng phân tử của hợp chất Ca(NO₃)₂ (Ca = 40, N = 14, O = 16).',n:164,t:0,u:'amu',w:'40 + 2 × (14 + 3×16) = 40 + 2 × 62 = 164 amu.'},
    {d:4,q:'Hợp chất R₂(SO₄)₃ có khối lượng phân tử là 342 amu (S = 32, O = 16). Nguyên tử khối của kim loại R bằng bao nhiêu amu?',n:27,t:0,u:'amu',w:'2R + 3×96 = 342 ⇒ 2R = 54 ⇒ R = 27 (Al).'},
    {d:4,q:'Phân tử hợp chất khí XH₃ nặng hơn phân tử khí H₂ là 8,5 lần (H = 1). Nguyên tử khối của nguyên tố X là bao nhiêu amu?',n:14,t:0,u:'amu',w:'M(XH₃) = 8,5 × 2 = 17 amu ⇒ X + 3×1 = 17 ⇒ X = 14 (Nitrogen).'}
  ]},

{ id:'l7-hoa-tri', grade:7, term:'HK1', stage:1, weeks:'Tuần 8–9', periods:9, order:5, chapCode:'Chương II', chapTitle:'Phân tử. Liên kết hóa học', sgk:'Bài 7', subj:'hoa', title:'Hóa trị và công thức hóa học', prereq:['l7-phan-tu'],
  theory:[
    'Hóa trị là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác. Quy ước: H có hóa trị I, O có hóa trị II.',
    'Hóa trị các nguyên tố & nhóm nguyên tử cần thuộc: Hóa trị I (H, Na, K, Ag, Cl, nhóm OH, nhóm NO₃); Hóa trị II (O, Mg, Ca, Ba, Zn, Cu, nhóm SO₄, nhóm CO₃); Hóa trị III (Al, nhóm PO₄); Fe có hóa trị II và III; S có II, IV, VI; N có III, V; C có II, IV.',
    'Quy tắc hóa trị: Trong hợp chất AₓBᵧ (với a, b lần lượt là hóa trị của A và B), tích chỉ số và hóa trị của nguyên tố này bằng tích chỉ số và hóa trị của nguyên tố kia: a · x = b · y.',
    'Phần trăm khối lượng nguyên tố X trong hợp chất AₓBᵧ: %X = (x · M_X / M_hợp chất) × 100%. Tổng phần trăm các nguyên tố trong hợp chất luôn bằng 100%.',
    'Tìm công thức hóa học khi biết % khối lượng và khối lượng phân tử M: tìm khối lượng mỗi nguyên tố trong 1 phân tử m_X = (%X · M) / 100% ⇒ suy ra chỉ số x = m_X / M_X.'
  ],
  formulas:[
    'Quy tắc hóa trị cho hợp chất AₓBᵧ: a · x = b · y  ⇒  \\frac{x}{y} = \\frac{b}{a} || Trong đó: x, y là chỉ số nguyên tử của A và B; a, b là hóa trị của A và B (rút gọn tỉ số b/a về phân số tối giản để suy ra x và y).',
    'Phần trăm khối lượng nguyên tố trong hợp chất AₓBᵧ: %A = \\frac{x · M_A}{M_(AₓBᵧ)} × 100% || Trong đó: %A là phần trăm khối lượng của nguyên tố A; x là chỉ số nguyên tử A; M_A là nguyên tử khối của A; M_(AₓBᵧ) là khối lượng phân tử hợp chất (tổng % các nguyên tố = 100%).',
    'Tìm chỉ số nguyên tử khi biết % khối lượng và KLPT: x = \\frac{%A × M_(hợp chất)}{100% × M_A} || Ý nghĩa: Dùng xác định số nguyên tử x của mỗi nguyên tố để tìm ra công thức hóa học của hợp chất.'
  ],
  examples:[
    {
      q:'(Cơ bản) Lập công thức hóa học của hợp chất tạo bởi Calcium (II) và nhóm phosphate PO₄ (III), rồi tính khối lượng phân tử (Ca=40, P=31, O=16).',
      steps:[
        'Gọi công thức chung: Caₓ(PO₄)ᵧ. Theo quy tắc hóa trị: II · x = III · y ⇒ x/y = 3/2.',
        'Chọn x = 3, y = 2 ⇒ Công thức là Ca₃(PO₄)₂.',
        'Khối lượng phân tử = 3×40 + 2×(31 + 4×16) = 120 + 2×95 = 310 amu.'
      ],
      ans:'Ca₃(PO₄)₂; khối lượng phân tử 310 amu.'
    },
    {
      q:'(Vận dụng cao) Một oxide của sắt có khối lượng phân tử là 160 amu, trong đó sắt chiếm 70% về khối lượng (Fe=56, O=16). Xác định công thức hóa học của oxide.',
      steps:[
        'Khối lượng Fe trong 1 phân tử = 70% × 160 = 112 amu ⇒ số nguyên tử Fe: x = 112 / 56 = 2.',
        'Khối lượng O trong 1 phân tử = 160 − 112 = 48 amu ⇒ số nguyên tử O: y = 48 / 16 = 3.',
        'Công thức hóa học của oxide là Fe₂O₃.'
      ],
      ans:'Fe₂O₃.'
    }
  ],
  questions:[
    {d:1,q:'Hóa trị của Fe trong hợp chất Fe₂O₃ là bao nhiêu?',o:['III','II','I','IV'],w:'2 · a = 3 · II ⇒ a = III.'},
    {d:1,q:'Công thức hóa học đúng của hợp chất tạo bởi Al (III) và O (II) là gì?',o:['Al₂O₃','AlO','Al₃O₂','Al₂O'],w:'Chéo hóa trị III và II được Al₂O₃.'},
    {d:1,q:'Nhóm nguyên tử SO₄ (sulfate) có hóa trị mấy?',o:['II','I','III','IV'],w:'Trong H₂SO₄ có 2 nguyên tử H (I) liên kết 1 nhóm SO₄ → hóa trị II.'},
    {d:2,q:'Hóa trị của nguyên tố N trong hợp chất N₂O₅ là bao nhiêu?',o:['V','III','II','IV'],w:'2 · a = 5 · II ⇒ a = V.'},
    {d:2,q:'Công thức hóa học đúng của hợp chất tạo bởi Ca (II) và nhóm OH (I) là gì?',o:['Ca(OH)₂','CaOH','Ca₂OH','CaOH₂'],w:'Nhóm nhiều nguyên tử có chỉ số > 1 phải đặt trong ngoặc đơn: Ca(OH)₂.'},
    {d:2,q:'Khối lượng phân tử của CaCO₃ là bao nhiêu amu? (Ca = 40, C = 12, O = 16)',n:100,t:0,u:'amu',w:'40 + 12 + 3×16 = 100 amu.'},
    {d:3,q:'Phần trăm khối lượng của nguyên tố Fe trong Fe₂O₃ là bao nhiêu %? (Fe = 56, O = 16)',n:70,t:0.1,u:'%',w:'M = 160 ⇒ %Fe = (2×56 / 160) × 100% = 70%.'},
    {d:3,q:'Phần trăm khối lượng của nguyên tố N trong phân đạm urea CO(NH₂)₂ là bao nhiêu %? (C=12, O=16, N=14, H=1; làm tròn 2 chữ số thập phân)',n:46.67,t:0.05,u:'%',w:'M = 12 + 16 + 2×(14 + 2) = 60 amu; có 2N = 28 ⇒ %N = 28/60 × 100% ≈ 46,67%.'},
    {d:4,q:'Hợp chất khí gồm C và H có khối lượng phân tử 16 amu, trong đó C chiếm 75% khối lượng (C=12, H=1). Tổng số nguyên tử trong 1 phân tử hợp chất này là bao nhiêu?',n:5,t:0,u:'nguyên tử',w:'m_C = 75%×16 = 12 (1C); m_H = 4 (4H) → CH₄ có 1 + 4 = 5 nguyên tử.'},
    {d:4,q:'Một oxide có công thức XO₂ trong đó oxygen chiếm 50% về khối lượng (O = 16). Nguyên tử khối của X là bao nhiêu amu?',n:32,t:0,u:'amu',w:'2 nguyên tử O nặng 32 amu chiếm 50% ⇒ X cũng chiếm 50% nên X = 32 amu (Sulfur – S).'}
  ]},

{ id:'l7-toc-do', grade:7, term:'HK1', stage:2, weeks:'Tuần 10–12', periods:10, order:6, chapCode:'Chương III', chapTitle:'Tốc độ', sgk:'Bài 8–11', subj:'ly', title:'Tốc độ chuyển động, đồ thị quãng đường – thời gian & an toàn giao thông', prereq:['l6-luc'],
  theory:[
    'Tốc độ chuyển động cho biết mức độ nhanh hay chậm của chuyển động, xác định bằng thương số giữa quãng đường đi được và thời gian đi quãng đường đó: v = s / t.',
    'Đơn vị tốc độ trong hệ SI là m/s; ngoài ra thường dùng km/h, cm/s. Quy tắc đổi: 1 m/s = 3,6 km/h (đổi m/s → km/h nhân 3,6; đổi km/h → m/s chia 3,6).',
    'Đồ thị quãng đường – thời gian (trục tung s, trục hoành t): đường thẳng xiên góc đi lên là chuyển động đều (độ dốc càng lớn thì tốc độ càng lớn); đoạn thẳng nằm ngang song song trục thời gian là vật đang đứng yên.',
    'An toàn giao thông: tốc độ càng cao thì quãng đường phanh càng dài và hậu quả va chạm càng nghiêm trọng. Quy tắc "3 giây" giúp ước tính khoảng cách an toàn tối thiểu: d_an toàn (m) ≈ v (m/s) × 3 (s).',
    'Lưu ý hay nhầm: Tốc độ trung bình trên nhiều đoạn đường luôn tính bằng Tổng quãng đường chia Tổng thời gian (kể cả thời gian dừng nghỉ): v_tb = (s₁ + s₂) / (t₁ + t₂).'
  ],
  formulas:[
    'Công thức tính tốc độ chuyển động: v = \\frac{s}{t}  ⇒  s = v · t  ;  t = \\frac{s}{v} || Trong đó: v là tốc độ cho biết sự nhanh chậm (m/s hoặc km/h); s là quãng đường đi được (m hoặc km); t là thời gian đi hết quãng đường đó (s hoặc h).',
    'Quy tắc đổi đơn vị tốc độ: 1 m/s = 3,6 km/h || Cách đổi: Từ m/s sang km/h nhân với 3,6; từ km/h sang m/s chia cho 3,6 (VD: 72 km/h = 72 : 3,6 = 20 m/s).',
    'Tốc độ trung bình trên nhiều đoạn đường: v_tb = \\frac{s₁ + s₂ + …}{t₁ + t₂ + …} || Trong đó: Tử số là tổng quãng đường các đoạn; mẫu số là tổng thời gian đi hết các đoạn (tính cả thời gian nghỉ nếu có; tuyệt đối không lấy trung bình cộng của v₁ và v₂).',
    'Khoảng cách an toàn giao thông theo quy tắc "3 giây": d_(an toàn) = v × 3 || Trong đó: d_(an toàn) là khoảng cách tối thiểu tới xe chạy trước (m); v là tốc độ xe bắt buộc đổi ra m/s; 3 (s) là thời gian phản xạ phanh.'
  ],
  examples:[
    {
      q:'(Cơ bản) Trên cao tốc, một ô tô chạy với tốc độ 72 km/h. Theo quy tắc "3 giây", khoảng cách an toàn tối thiểu tới xe phía trước là bao nhiêu mét?',
      steps:[
        'Đổi tốc độ sang m/s: v = 72 : 3,6 = 20 m/s.',
        'Khoảng cách an toàn tối thiểu: d = v × 3 = 20 × 3 = 60 m.'
      ],
      ans:'60 m.'
    },
    {
      q:'(Vận dụng cao) Một người đi bộ nửa quãng đường đầu với tốc độ v₁ = 6 km/h và nửa quãng đường sau với tốc độ v₂ = 4 km/h. Tính tốc độ trung bình trên cả quãng đường.',
      steps:[
        'Gọi cả quãng đường là s ⇒ mỗi nửa dài s/2.',
        'Thời gian đi: t₁ = (s/2)/6 = s/12; t₂ = (s/2)/4 = s/8 ⇒ tổng thời gian t = s/12 + s/8 = 5s/24.',
        'Tốc độ trung bình: v_tb = s / (5s/24) = 24 / 5 = 4,8 km/h (khác với trung bình cộng 5 km/h!).'
      ],
      ans:'4,8 km/h.'
    }
  ],
  questions:[
    {d:1,q:'Công thức tính tốc độ chuyển động là gì?',o:['v = s / t','v = s · t','v = t / s','v = s − t'],w:'Tốc độ bằng quãng đường chia cho thời gian.'},
    {d:1,q:'Trên đồ thị quãng đường – thời gian, đoạn thẳng nằm ngang song song với trục thời gian biểu diễn trạng thái nào?',o:['Vật đứng yên','Vật chuyển động đều','Vật tăng tốc','Vật giảm tốc'],w:'Thời gian trôi qua mà quãng đường không đổi → vật đứng yên.'},
    {d:1,q:'Thiết bị nào cảnh sát giao thông dùng để kiểm tra tốc độ phương tiện trên đường?',o:['Thiết bị bắn tốc độ','Cổng quang điện phòng thí nghiệm','Nhiệt kế hồng ngoại','Ampe kế'],w:'Súng bắn tốc độ ghi nhận tốc độ tức thời của xe.'},
    {d:2,q:'Một ô tô đi quãng đường 90 km trong 1,5 giờ. Tốc độ trung bình của ô tô là bao nhiêu km/h?',n:60,t:0,u:'km/h',w:'v = 90 : 1,5 = 60 km/h.'},
    {d:2,q:'Đổi tốc độ 54 km/h sang đơn vị m/s.',n:15,t:0,u:'m/s',w:'54 : 3,6 = 15 m/s.'},
    {d:2,q:'Xe chạy trên cao tốc với tốc độ 72 km/h. Theo quy tắc "3 giây", khoảng cách an toàn tối thiểu là bao nhiêu mét?',n:60,t:0,u:'m',w:'72 km/h = 20 m/s ⇒ d = 20 × 3 = 60 m.'},
    {d:3,q:'Một xe chạy 30 phút đầu với tốc độ 40 km/h, rồi chạy tiếp 1,5 giờ sau với tốc độ 60 km/h. Tổng quãng đường xe đi được là bao nhiêu km?',n:110,t:0,u:'km',w:'s = 40×0,5 + 60×1,5 = 20 + 90 = 110 km.'},
    {d:3,q:'Một người đạp xe 6 km hết 0,5 giờ, dừng nghỉ 0,5 giờ, rồi đi tiếp 14 km hết 1 giờ. Tốc độ trung bình trên toàn hành trình là bao nhiêu km/h?',n:10,t:0,u:'km/h',w:'v_tb = (6 + 14) / (0,5 + 0,5 + 1) = 20 / 2 = 10 km/h.'},
    {d:4,q:'Hai xe xuất phát cùng lúc từ A và B cách nhau 120 km đi ngược chiều nhau với tốc độ 35 km/h và 25 km/h. Sau bao nhiêu giờ hai xe gặp nhau?',n:2,t:0,u:'giờ',w:'t = 120 / (35 + 25) = 2 giờ.'},
    {d:4,q:'Một người đi nửa quãng đường đầu với tốc độ 6 km/h và nửa quãng đường còn lại với tốc độ 4 km/h. Tốc độ trung bình trên cả quãng đường là bao nhiêu km/h?',n:4.8,t:0.02,u:'km/h',w:'v_tb = 1 / (0,5/6 + 0,5/4) = 24 / 5 = 4,8 km/h.'}
  ]},

{ id:'l7-am-thanh', grade:7, term:'HK1', stage:2, weeks:'Tuần 13–15', periods:9, order:7, chapCode:'Chương IV', chapTitle:'Âm thanh', sgk:'Bài 12–14', subj:'ly', title:'Sóng âm, độ to và độ cao của âm & phản xạ âm', prereq:['l7-toc-do'],
  theory:[
    'Nguồn âm là các vật dao động phát ra âm. Sóng âm truyền được trong chất rắn, chất lỏng, chất khí; KHÔNG truyền được trong chân không. Tốc độ truyền âm: v(rắn) > v(lỏng) > v(khí) (không khí ≈ 340 m/s, nước ≈ 1500 m/s, thép ≈ 6100 m/s).',
    'Tần số dao động f = N / t (Hz) là số dao động trong 1 giây. Tần số càng lớn → âm nghe càng cao (bổng); tần số càng nhỏ → âm nghe càng thấp (trầm). Tai người nghe được âm từ 20 Hz đến 20 000 Hz (dưới 20 Hz là hạ âm, trên 20 000 Hz là siêu âm).',
    'Biên độ dao động là độ lệch lớn nhất của vật dao động so với vị trí cân bằng. Biên độ càng lớn → âm nghe càng to (mức cường độ âm đo bằng đề-xi-ben, dB).',
    'Phản xạ âm: vật cứng, bề mặt phẳng nhẵn phản xạ âm tốt (gây vang); vật mềm, xốp, gồ ghề hấp thụ âm tốt. Tiếng vang nghe được khi âm phản xạ tới tai chậm hơn âm trực tiếp ít nhất 1/15 s (khoảng cách tới tường phản xạ trong không khí từ 11,3 m trở lên).',
    'Chống ô nhiễm tiếng ồn: tác động vào nguồn âm (giảm to, cấm còi), phân tán âm trên đường truyền (trồng cây xanh, xây tường chắn), ngăn âm truyền tới tai (kính hai lớp, nút tai).'
  ],
  formulas:[
    'Tần số dao động của nguồn âm: f = \\frac{N}{t} || Trong đó: f là tần số dao động (Hz – Héc; tần số càng lớn âm nghe càng cao/bổng); N là số dao động thực hiện được; t là thời gian dao động tính bằng giây (s).',
    'Đo khoảng cách bằng tiếng vang hoặc sóng siêu âm (sonar): d = \\frac{v · t}{2} || Trong đó: d là khoảng cách từ nguồn âm đến vách phản xạ/đáy biển (m); v là tốc độ truyền âm trong môi trường đó (m/s); t là thời gian cả đi lẫn về của âm (s) nên phải chia 2.',
    'Khoảng cách tối thiểu để nghe thấy tiếng vang trong không khí: d_min = \\frac{340}{2 × 15} ≈ 11,3 m || Ý nghĩa: Tai người tách được tiếng vang khi âm phản xạ đến chậm hơn âm trực tiếp ít nhất 1/15 giây (với v_(không khí) ≈ 340 m/s).'
  ],
  examples:[
    {
      q:'(Cơ bản) Con ong mật khi bay đập cánh 19 800 lần trong 1 phút, còn con muỗi đập cánh 600 lần trong 1 giây. Con nào phát ra âm cao hơn?',
      steps:[
        'Tần số đập cánh của ong: f₁ = 19 800 / 60 = 330 Hz.',
        'Tần số đập cánh của muỗi: f₂ = 600 / 1 = 600 Hz.',
        'Vì f₂ > f₁ nên âm do cánh muỗi phát ra cao (bổng) hơn.'
      ],
      ans:'Con muỗi phát ra âm cao hơn (600 Hz > 330 Hz).'
    },
    {
      q:'(Vận dụng) Tàu khảo sát phát siêu âm thẳng đứng xuống đáy biển, sau 1,6 giây thu được âm phản xạ. Tính độ sâu đáy biển, biết tốc độ siêu âm trong nước biển là 1500 m/s.',
      steps:[
        'Sóng siêu âm đi từ tàu xuống đáy biển rồi phản xạ ngược lên tàu nên quãng đường đi được là 2d.',
        'Độ sâu đáy biển: d = (v · t) / 2 = (1500 × 1,6) / 2 = 1200 m.'
      ],
      ans:'1200 m.'
    }
  ],
  questions:[
    {d:1,q:'Âm thanh KHÔNG truyền được trong môi trường nào sau đây?',o:['Chân không','Nước biển','Không khí','Thanh sắt'],w:'Chân không không có hạt vật chất để truyền dao động âm.'},
    {d:1,q:'Độ cao (bổng hay trầm) của âm phụ thuộc vào yếu tố nào?',o:['Tần số dao động','Biên độ dao động','Tốc độ truyền âm','Thời gian nghe'],w:'Tần số lớn → âm cao; tần số nhỏ → âm trầm.'},
    {d:1,q:'Độ to của âm phụ thuộc vào đại lượng nào của nguồn âm?',o:['Biên độ dao động','Tần số dao động','Khối lượng vật','Màu sắc vật'],w:'Biên độ dao động càng lớn thì âm càng to.'},
    {d:2,q:'Một vật thực hiện 1500 dao động trong 25 giây. Tần số dao động của vật là bao nhiêu Hz?',n:60,t:0,u:'Hz',w:'f = 1500 / 25 = 60 Hz.'},
    {d:2,q:'So sánh tốc độ truyền âm trong các môi trường nào sau đây là ĐÚNG?',o:['Chất rắn > Chất lỏng > Chất khí','Chất khí > Chất lỏng > Chất rắn','Chất lỏng > Chất rắn > Chất khí','Ba môi trường truyền âm nhanh như nhau'],w:'Âm truyền nhanh nhất trong chất rắn, chậm nhất trong chất khí.'},
    {d:2,q:'Vật liệu nào sau đây hấp thụ âm tốt, thường dùng lót tường phòng thu âm?',o:['Mút xốp gồ ghề, rèm nhung dày','Gạch men bóng','Tấm kính phẳng','Tấm kim loại nhẵn'],w:'Vật mềm, xốp, gồ ghề hấp thụ âm tốt và giảm phản xạ âm.'},
    {d:3,q:'Một người đứng trước vách đá hét to và nghe tiếng vang sau 2 giây (v_âm = 340 m/s). Người đó cách vách đá bao nhiêu mét?',n:340,t:0,u:'m',w:'d = 340 × 2 / 2 = 340 m.'},
    {d:3,q:'Tàu phát sóng siêu âm xuống đáy biển và nhận tín hiệu phản xạ sau 1,2 giây (v = 1500 m/s). Độ sâu đáy biển là bao nhiêu mét?',n:900,t:0,u:'m',w:'d = 1500 × 1,2 / 2 = 900 m.'},
    {d:4,q:'Để nghe được tiếng vang trong không khí (v = 340 m/s), âm phản xạ phải đến tai chậm hơn âm trực tiếp ít nhất 1/15 s. Khoảng cách ngắn nhất tới tường phản xạ là bao nhiêu mét? (làm tròn 1 chữ số thập phân)',n:11.3,t:0.1,u:'m',w:'d_min = (340 × 1/15) / 2 = 340 / 30 ≈ 11,3 m.'},
    {d:4,q:'Gõ búa vào một đầu ống thép dài. Ở đầu kia, tai nghe được 2 tiếng gõ cách nhau 1,6 giây. Biết tốc độ âm trong không khí là 340 m/s và trong thép nhanh gấp 17 lần trong không khí (5780 m/s). Chiều dài ống thép là bao nhiêu mét?',n:578,t:1,u:'m',w:'L/340 − L/5780 = 1,6 ⇒ 16L / 5780 = 1,6 ⇒ L = 578 m.'}
  ]},

{ id:'l7-anh-sang', grade:7, term:'HK1', stage:2, weeks:'Tuần 16–17', periods:9, order:8, chapCode:'Chương V', chapTitle:'Ánh sáng', sgk:'Bài 15–17', subj:'ly', title:'Năng lượng ánh sáng, sự phản xạ ánh sáng & ảnh qua gương phẳng', prereq:['l7-toc-do'],
  theory:[
    'Trong môi trường trong suốt và đồng tính, ánh sáng truyền đi theo đường thẳng. Biểu diễn đường truyền ánh sáng bằng tia sáng (đường thẳng có mũi tên chỉ chiều). Ba loại chùm sáng: song song, hội tụ, phân kì.',
    'Vùng tối (bóng tối) không nhận được ánh sáng từ nguồn sáng; vùng nửa tối chỉ nhận được ánh sáng từ một phần của nguồn sáng rộng. Hiện tượng nhật thực, nguyệt thực là hệ quả của sự truyền thẳng ánh sáng.',
    'Định luật phản xạ ánh sáng: Tia phản xạ nằm trong mặt phẳng chứa tia tới và pháp tuyến tại điểm tới; góc phản xạ bằng góc tới (i′ = i). Phản xạ gương xảy ra trên mặt phẳng nhẵn bóng; phản xạ khuếch tán (tán xạ) xảy ra trên mặt nhám.',
    'Tính chất ảnh của vật tạo bởi gương phẳng: là ảnh ảo (không hứng được trên màn chắn), lớn bằng vật và đối xứng với vật qua mặt gương (khoảng cách từ ảnh tới gương bằng khoảng cách từ vật tới gương).',
    'Lưu ý hay nhầm: Góc tới i luôn tính từ tia tới đến ĐƯỜNG PHÁP TUYẾN (vuông góc với gương). Nếu tia tới hợp với mặt gương góc α thì góc tới i = 90° − α.'
  ],
  formulas:[
    'Định luật phản xạ ánh sáng: i′ = i || Trong đó: i là góc tới (hợp bởi tia tới và pháp tuyến vuông góc với gương); i′ là góc phản xạ (hợp bởi tia phản xạ và pháp tuyến), đơn vị độ (°).',
    'Tính góc tới khi đề cho góc hợp với mặt gương: i = i′ = 90° − α || Trong đó: α là góc hợp bởi tia sáng tới với MẶT GƯƠNG (°); vì pháp tuyến vuông góc mặt gương nên lấy 90° − α.',
    'Góc hợp bởi tia tới và tia phản xạ: β = i + i′ = 2i || Ý nghĩa: Biết góc giữa tia tới và tia phản xạ là β, chia đôi (β / 2) sẽ được góc tới i.',
    'Tính chất khoảng cách ảnh qua gương phẳng: d_(ảnh → gương) = d_(vật → gương)  ⇒  d_(vật → ảnh) = 2 · d_(vật → gương) || Ý nghĩa: Ảnh ảo lớn bằng vật và đối xứng với vật qua mặt gương phẳng.'
  ],
  examples:[
    {
      q:'(Cơ bản) Chiếu một tia sáng hợp với mặt gương phẳng một góc 40°. Tính góc tới và góc hợp bởi tia tới với tia phản xạ.',
      steps:[
        'Pháp tuyến vuông góc mặt gương nên góc tới i = 90° − 40° = 50°.',
        'Góc phản xạ i′ = i = 50° ⇒ góc giữa tia tới và tia phản xạ = 50° + 50° = 100°.'
      ],
      ans:'Góc tới 50°; góc giữa tia tới và tia phản xạ là 100°.'
    },
    {
      q:'(Vận dụng cao) Chiếu tia sáng mặt trời hợp với phương nằm ngang góc 30° xuống đất. Phải đặt gương phẳng hợp với phương nằm ngang một góc bao nhiêu độ để tia phản xạ chiếu thẳng đứng xuống giếng?',
      steps:[
        'Tia tới hợp phương ngang 30° đi xuống, tia phản xạ thẳng đứng đi xuống (90° so với phương ngang, cùng phía hoặc lệch góc): góc giữa tia tới và tia phản xạ là 90° − 30° = 60° (nếu tia tới đi từ trên chếch xuống và đổi hướng thẳng xuống) hoặc 90° + 30° = 120° (nếu hắt từ trên xuống).',
        'Với tia sáng từ bầu trời chếch 30° so với phương ngang chiếu vào gương đặt nghiêng hướng xuống giếng: góc giữa hướng đi tới của tia sáng và hướng thẳng đứng đi xuống là 90° + 30° = 120° ⇒ 2i = 120° ⇒ i = 60°; suy ra mặt gương hợp với phương thẳng đứng 30°, tức hợp với phương ngang góc 60°.'
      ],
      ans:'60° so với phương nằm ngang.'
    }
  ],
  questions:[
    {d:1,q:'Tia tới hợp với đường pháp tuyến tại điểm tới một góc 30°. Góc phản xạ bằng bao nhiêu độ?',n:30,t:0,u:'°',w:'Góc phản xạ luôn bằng góc tới: i′ = i = 30°.'},
    {d:1,q:'Ảnh của một vật tạo bởi gương phẳng có đặc điểm nào sau đây?',o:['Ảnh ảo, không hứng được trên màn và lớn bằng vật','Ảnh thật, hứng được trên màn và lớn bằng vật','Ảnh ảo, nhỏ hơn vật','Ảnh thật, ngược chiều với vật'],w:'Ảnh qua gương phẳng là ảnh ảo, bằng vật và đối xứng qua gương.'},
    {d:1,q:'Khi chiếu chùm sáng song song lên mặt tờ giấy trắng hơi nhám, ta nhìn thấy tờ giấy từ mọi phía là nhờ hiện tượng gì?',o:['Phản xạ khuếch tán','Phản xạ gương','Ánh sáng tự phát từ giấy','Sự hấp thụ hoàn toàn ánh sáng'],w:'Mặt giấy nhám làm các tia sáng phản xạ theo mọi hướng.'},
    {d:2,q:'Một vật đặt cách gương phẳng 2,5 m. Khoảng cách từ vật đến ảnh của nó là bao nhiêu mét?',n:5,t:0,u:'m',w:'Ảnh cũng cách gương 2,5 m ⇒ vật cách ảnh 2,5 × 2 = 5 m.'},
    {d:2,q:'Chiếu tia sáng hợp với MẶT GƯƠNG PHẲNG một góc 35°. Góc phản xạ bằng bao nhiêu độ?',n:55,t:0,u:'°',w:'i = 90° − 35° = 55° ⇒ i′ = 55°.'},
    {d:2,q:'Khi chiếu một tia sáng vuông góc với mặt gương phẳng thì góc tới bằng bao nhiêu độ?',n:0,t:0,u:'°',w:'Tia tới trùng với đường pháp tuyến nên góc tới i = 0° (tia phản xạ bật ngược lại).'},
    {d:3,q:'Góc hợp bởi tia tới và tia phản xạ trên gương phẳng là 110°. Góc tới bằng bao nhiêu độ?',n:55,t:0,u:'°',w:'2i = 110° ⇒ i = 55°.'},
    {d:3,q:'Một người đứng cách gương phẳng 2 m, sau đó lùi ra xa gương thêm 0,5 m. Lúc này người đó cách ảnh của mình bao nhiêu mét?',n:5,t:0,u:'m',w:'Khoảng cách mới tới gương = 2 + 0,5 = 2,5 m ⇒ cách ảnh = 2,5 × 2 = 5 m.'},
    {d:4,q:'Chiếu tia sáng nằm ngang tới gương phẳng. Muốn tia phản xạ đi thẳng đứng lên trên (hoặc xuống dưới) thì góc tới phải bằng bao nhiêu độ?',n:45,t:0,u:'°',w:'Tia tới vuông góc tia phản xạ ⇒ 2i = 90° ⇒ i = 45°.'},
    {d:4,q:'Giữ nguyên tia tới, nếu quay gương phẳng một góc 15° quanh điểm tới thì tia phản xạ sẽ quay đi một góc bao nhiêu độ?',n:30,t:0,u:'°',w:'Khi gương quay góc α thì pháp tuyến quay α ⇒ tia phản xạ quay góc 2α = 2 × 15° = 30°.'}
  ]},

{ id:'l7-tu', grade:7, term:'HK2', stage:3, weeks:'Tuần 19–21', periods:12, order:9, chapCode:'Chương VI', chapTitle:'Từ', sgk:'Bài 18–20', subj:'ly', title:'Nam châm, từ trường & chế tạo nam châm điện đơn giản', prereq:['l6-luc'],
  theory:[
    'Nam châm có tính chất hút các vật bằng sắt, thép, niken, coban (vật liệu từ). Mỗi nam châm luôn có 2 cực: cực Bắc (N – North, thường sơn đỏ) và cực Nam (S – South, sơn xanh/trắng). Dù cắt đôi thanh nam châm vẫn thu được nam châm mới có đủ 2 cực N và S.',
    'Tương tác giữa hai nam châm: hai cực cùng tên (N–N hoặc S–S) đẩy nhau; hai cực khác tên (N–S) hút nhau.',
    'Không gian xung quanh nam châm và xung quanh dây dẫn mang dòng điện tồn tại từ trường (thí nghiệm Oersted). Đường sức từ là các đường cong khép kín, ở bên ngoài thanh nam châm có chiều đi ra từ cực Bắc (N) và đi vào cực Nam (S). Chỗ đường sức từ càng dày thì từ trường càng mạnh.',
    'Trái Đất là một nam châm khổng lồ: cực Nam từ trường Trái Đất nằm gần cực Bắc địa lí, còn cực Bắc từ trường nằm gần cực Nam địa lí. Nhờ đó kim nam châm của la bàn luôn định hướng Bắc – Nam.',
    'Nam châm điện gồm ống dây dẫn có dòng điện chạy qua và lõi sắt non bên trong. Lực từ tăng khi tăng cường độ dòng điện hoặc tăng số vòng dây; đổi chiều dòng điện thì hai cực từ đổi chỗ; ngắt điện thì sắt non mất từ tính ngay.'
  ],
  formulas:[
    'Quy luật tương tác từ giữa hai nam châm: Cùng cực đẩy nhau · Khác cực hút nhau || Trong đó: Mỗi nam châm luôn có 2 cực Bắc (N – North, sơn đỏ) và Nam (S – South, sơn xanh/trắng).',
    'Chiều đường sức từ bên ngoài thanh nam châm: Đi ra từ cực Bắc (N) → đi vào cực Nam (S) || Ý nghĩa: Càng gần hai đầu cực nam châm, các đường sức từ càng dày đặc nên từ trường càng mạnh.',
    'Cách làm tăng lực từ của nam châm điện: Tăng cường độ dòng điện I hoặc tăng số vòng dây N || Lưu ý: Khi ngắt dòng điện (I = 0) thì lõi sắt non mất từ tính ngay; đổi chiều dòng điện thì hai cực N – S của nam châm điện đổi chỗ cho nhau.'
  ],
  examples:[
    {
      q:'(Cơ bản) Đưa một đầu thanh kim loại X lại gần cực Bắc của kim nam châm thì thấy kim bị hút. Đổi đầu kia của thanh X lại gần cực Bắc kim nam châm vẫn thấy bị hút. Hỏi thanh X là nam châm hay thanh sắt chưa nhiễm từ?',
      steps:[
        'Nếu X là nam châm thì một đầu phải hút cực Bắc và đầu kia phải ĐẨY cực Bắc.',
        'Vì cả hai đầu của X đều hút cực Bắc của kim nam châm nên X chỉ là thanh sắt (hoặc thép) chưa nhiễm từ.'
      ],
      ans:'Thanh X là thanh sắt (vật liệu từ) chưa nhiễm từ.'
    },
    {
      q:'(Vận dụng) Một kim nam châm thử đặt trên đường sức từ ngay sát một đầu ống dây có dòng điện thì cực Nam (S) của kim nam châm quay về phía đầu ống dây đó. Đầu ống dây đó là cực từ nào?',
      steps:[
        'Hai cực khác tên hút nhau.',
        'Vì cực Nam (S) của kim nam châm bị hút quay về phía đầu ống dây, nên đầu ống dây đó là cực Bắc (N).'
      ],
      ans:'Cực Bắc (N).'
    }
  ],
  questions:[
    {d:1,q:'Hai cực cùng tên của hai thanh nam châm đặt gần nhau sẽ tương tác như thế nào?',o:['Đẩy nhau','Hút nhau','Không tương tác','Ban đầu hút sau đó đẩy'],w:'Hai cực cùng tên luôn đẩy nhau.'},
    {d:1,q:'Kim loại nào sau đây bị nam châm hút mạnh?',o:['Sắt (Fe)','Nhôm (Al)','Đồng (Cu)','Vàng (Au)'],w:'Sắt, thép, niken, coban là các vật liệu có từ tính.'},
    {d:1,q:'Bộ phận chính của la bàn dùng để xác định phương hướng là gì?',o:['Kim nam châm có thể quay tự do trên trục nhọn','Thanh đồng mảnh','Cuộn dây không có nguồn điện','Tấm gương phẳng nhỏ'],w:'Kim nam châm định hướng theo từ trường Trái Đất.'},
    {d:2,q:'Ở bên ngoài thanh nam châm thẳng, đường sức từ có chiều như thế nào?',o:['Đi ra từ cực Bắc (N) và đi vào cực Nam (S)','Đi ra từ cực Nam (S) và đi vào cực Bắc (N)','Đi từ giữa thanh ra hai cực','Không có chiều quy ước'],w:'Quy ước chiều đường sức từ bên ngoài nam châm: ra Bắc – vào Nam.'},
    {d:2,q:'Muốn đổi tên hai cực từ của một nam châm điện đang hoạt động, ta làm cách nào?',o:['Đổi chiều dòng điện chạy qua ống dây','Tăng thêm số vòng dây','Rút bớt dòng điện','Thay lõi sắt non bằng lõi gỗ'],w:'Chiều từ trường của ống dây phụ thuộc chiều dòng điện.'},
    {d:2,q:'Thí nghiệm Oersted (đặt dây dẫn song song phía trên kim nam châm rồi cho dòng điện chạy qua) chứng tỏ điều gì?',o:['Xung quanh dòng điện tồn tại từ trường','Dòng điện chỉ có tác dụng nhiệt','Kim nam châm bị nhiễm điện do cọ xát','Trái Đất không có từ trường'],w:'Kim nam châm lệch khỏi hướng Bắc – Nam chứng tỏ dòng điện sinh ra từ trường.'},
    {d:3,q:'Vì sao lõi nam châm điện trong cần cẩu bốc dỡ sắt vụn phải làm bằng sắt non mà không dùng thép?',o:['Vì sắt non mất từ tính ngay khi ngắt điện nên dễ nhả sắt vụn ra','Vì sắt non không bị nam châm hút','Vì thép không thể nhiễm từ','Vì sắt non nhẹ hơn nhôm'],w:'Thép bị từ hóa sẽ thành nam châm vĩnh cửu, không nhả vật khi ngắt điện.'},
    {d:3,q:'Gần cực Bắc địa lí của Trái Đất thực chất là cực từ nào của "nam châm Trái Đất"?',o:['Cực Nam địa từ','Cực Bắc địa từ','Điểm không có từ trường','Cực Đông từ'],w:'Cực Bắc kim la bàn chỉ về hướng Bắc địa lí vì bị cực Nam địa từ ở đó hút.'},
    {d:4,q:'Nếu một thanh nam châm thẳng không may bị gãy làm đôi ở chính giữa, ta thu được gì?',o:['Hai nam châm mới, mỗi nửa đều có đủ cả hai cực Bắc và Nam','Một nửa chỉ có cực Bắc, một nửa chỉ có cực Nam','Hai thanh sắt mất hoàn toàn từ tính','Hai thanh chỉ còn cực Bắc'],w:'Mọi nam châm dù nhỏ đến đâu cũng luôn tồn tại hai cực N và S.'},
    {d:4,q:'Có hai thanh kim loại giống hệt nhau về hình dáng: một thanh sắt thường và một thanh nam châm thẳng (không đánh dấu). KHÔNG dùng thêm vật nào khác, làm sao phân biệt được?',o:['Đưa đầu thanh A chạm vào chính giữa thanh B: nếu hút mạnh thì A là nam châm, nếu hầu như không hút thì B là nam châm','Cân hai thanh bằng tay','Đưa hai đầu chạm nhau xem có hút không','Để cả hai thanh nằm im trên bàn gỗ'],w:'Ở chính giữa thanh nam châm (vùng trung hòa) từ tính rất yếu; đầu thanh nam châm lại có từ tính mạnh nhất.'}
  ]},

{ id:'l7-trao-doi-chat', grade:7, term:'HK2', stage:3, weeks:'Tuần 22–24', periods:12, order:10, chapCode:'Chương VII', chapTitle:'Trao đổi chất và chuyển hóa năng lượng ở sinh vật', sgk:'Bài 21–27', subj:'sinh', title:'Khái quát trao đổi chất, Quang hợp ở thực vật & Hô hấp tế bào', prereq:['l6-te-bao'],
  theory:[
    'Trao đổi chất và chuyển hóa năng lượng là đặc trưng cơ bản của sự sống: sinh vật lấy các chất từ môi trường, biến đổi chúng tạo chất xây dựng cơ thể & năng lượng, đồng thời thải chất bã ra ngoài. Ngừng trao đổi chất thì sinh vật chết.',
    'Quang hợp diễn ra tại lục lạp (chứa sắc tố diệp lục, chủ yếu ở tế bào thịt lá): sử dụng H₂O và CO₂ nhờ năng lượng ánh sáng tạo thành chất hữu cơ (glucose → tinh bột) và giải phóng khí O₂ (chuyển quang năng thành hóa năng).',
    'Lá cây thích nghi với quang hợp: phiến lá dẹt và rộng để hứng nhiều ánh sáng, mạng gân lá dày dẫn nước/sản phẩm, nhiều lục lạp và có nhiều khí khổng trao đổi khí.',
    'Hô hấp tế bào diễn ra chủ yếu tại ti thể: sử dụng O₂ phân giải chất hữu cơ (glucose) thành CO₂, H₂O và giải phóng năng lượng (ATP + nhiệt) cung cấp cho mọi hoạt động sống. Xảy ra liên tục ngày đêm ở mọi tế bào sống.',
    'Các yếu tố ảnh hưởng và bảo quản nông sản: ánh sáng, CO₂, nước, nhiệt độ. Bảo quản nông sản (phơi khô hạt, giữ lạnh rau quả, hút chân không/tăng CO₂) nhằm GIẢM cường độ hô hấp tế bào tới mức tối thiểu mà không làm chết tế bào.'
  ],
  formulas:[
    'Quang hợp (lục lạp): Nước + Carbon dioxide —(ánh sáng, diệp lục)→ Glucose + Oxygen',
    'Hô hấp tế bào (ti thể): Glucose + Oxygen → Carbon dioxide + Nước + Năng lượng (ATP + nhiệt)',
    'Quang hợp tích lũy chất hữu cơ & năng lượng ⇄ Hô hấp phân giải chất hữu cơ & giải phóng năng lượng'
  ],
  examples:[
    {
      q:'(Cơ bản) Trong thí nghiệm phát hiện tinh bột ở lá cây xanh khi có ánh sáng, người ta nhỏ dung dịch iodine (iốt) lên phần lá đã tẩy diệp lục. Phần lá nhận được ánh sáng chuyển sang màu gì?',
      steps:[
        'Phần lá được chiếu sáng thực hiện quang hợp tạo ra tinh bột; phần bị bịt băng đen không tạo được tinh bột.',
        'Tinh bột tác dụng với dung dịch iodine tạo màu xanh tím đặc trưng.'
      ],
      ans:'Chuyển sang màu xanh tím.'
    },
    {
      q:'(Vận dụng) Vì sao rau tươi bảo quản trong ngăn mát tủ lạnh và đựng trong túi có lỗ thoáng nhỏ lại giữ tươi lâu hơn để ngoài nhiệt độ phòng?',
      steps:[
        'Nhiệt độ thấp trong ngăn mát làm giảm cường độ hô hấp tế bào và giảm thoát hơi nước, hạn chế phân giải chất hữu cơ.',
        'Túi vẫn giúp giữ ẩm vừa phải, tránh rau bị úng kị khí hoặc khô héo nhanh.'
      ],
      ans:'Nhiệt độ thấp làm giảm hô hấp tế bào, giữ được chất dinh dưỡng và độ tươi lâu.'
    }
  ],
  questions:[
    {d:1,q:'Sản phẩm của quá trình quang hợp ở cây xanh gồm những chất nào?',o:['Chất hữu cơ (glucose) và khí oxygen','Khí carbon dioxide và nước','Chỉ có nước và khoáng','Khí nitrogen và tinh bột'],w:'Quang hợp dùng CO₂ và H₂O tạo glucose và giải phóng O₂.'},
    {d:1,q:'Hô hấp tế bào diễn ra chủ yếu ở bào quan nào?',o:['Ti thể','Lục lạp','Nhân tế bào','Màng tế bào'],w:'Ti thể là trung tâm giải phóng năng lượng của tế bào.'},
    {d:1,q:'Trong quá trình quang hợp, năng lượng đã chuyển hóa từ dạng nào sang dạng nào?',o:['Từ quang năng sang hóa năng','Từ hóa năng sang quang năng','Từ cơ năng sang điện năng','Từ nhiệt năng sang quang năng'],w:'Ánh sáng (quang năng) được tích lũy trong liên kết hóa học của glucose (hóa năng).'},
    {d:2,q:'Thuốc thử nào dùng để nhận biết tinh bột tạo thành trong lá cây sau quang hợp (hiện màu xanh tím)?',o:['Dung dịch iodine (iốt)','Nước vôi trong','Nước muối sinh lí','Cồn 90 độ'],w:'Hồ tinh bột gặp iodine chuyển màu xanh tím.'},
    {d:2,q:'Quá trình hô hấp tế bào ở cây xanh diễn ra khi nào?',o:['Liên tục cả ban ngày và ban đêm','Chỉ diễn ra vào ban đêm','Chỉ diễn ra khi có nắng gắt','Chỉ diễn ra khi rụng lá'],w:'Tế bào sống luôn cần năng lượng ATP mọi lúc nên hô hấp diễn ra suốt ngày đêm.'},
    {d:2,q:'Que đóm còn tàn đỏ khi đưa vào ống nghiệm thu khí thoát ra từ cành rong đuôi chó ngoài nắng sẽ như thế nào?',o:['Bùng cháy thành ngọn lửa','Tắt ngay lập tức','Không có hiện tượng gì','Làm đục ống nghiệm'],w:'Rong quang hợp giải phóng khí O₂ làm tàn đóm đỏ bùng cháy.'},
    {d:3,q:'Vì sao ban đêm không nên để nhiều chậu cây xanh hoặc hoa lớn trong phòng ngủ đóng kín cửa?',o:['Cây ngừng quang hợp nhưng vẫn hô hấp, hút O₂ và thải CO₂ gây ngạt','Cây thải quá nhiều khí O₂ gây mất ngủ','Cây làm nhiệt độ phòng giảm xuống 0 °C','Cây hút hết hơi nước trong phòng'],w:'Thiếu ánh sáng cây chỉ hô hấp, làm giảm O₂ và tăng CO₂ trong phòng kín.'},
    {d:3,q:'Phơi khô hạt thóc, hạt ngô trước khi cất vào kho nhằm mục đích sinh học chính là gì?',o:['Giảm hàm lượng nước để ức chế hô hấp tế bào ở mức tối thiểu','Làm hạt quang hợp mạnh hơn','Tiêu diệt hoàn toàn phôi sống trong hạt','Tăng khối lượng của hạt'],w:'Hạt khô có cường độ hô hấp rất thấp nên không bị nóng, mốc hay hao hụt chất dự trữ.'},
    {d:4,q:'Tại sao KHÔNG dùng phương pháp phơi khô để bảo quản rau xanh, quả tươi mà phải bảo quản mát?',o:['Phơi khô làm mất nước quá mức khiến tế bào rau quả chết và mất chất tươi','Vì rau quả không hề hô hấp tế bào','Vì phơi khô làm rau quả quang hợp quá nhanh','Vì rau quả không chứa nước'],w:'Rau quả có hàm lượng nước cao, phơi khô sẽ làm hỏng cấu trúc tươi sống nên dùng nhiệt độ thấp (ngăn mát) để giảm hô hấp.'},
    {d:4,q:'Khi trồng cây trong nhà kính nông nghiệp công nghệ cao, người ta thường tăng nhẹ nồng độ CO₂ (tới khoảng 0,06% – 0,1%) vào ban ngày để làm gì?',o:['Tăng cường độ quang hợp giúp cây tổng hợp nhiều chất hữu cơ, tăng năng suất','Giúp cây ngừng thoát hơi nước','Giúp cây ngừng hô hấp tế bào','Làm giảm nhiệt độ lá cây'],w:'CO₂ là nguyên liệu trực tiếp của quang hợp; tăng hợp lí trong giới hạn bão hòa giúp tăng năng suất.'}
  ]},

{ id:'l7-dinh-duong-van-chuyen', grade:7, term:'HK2', stage:3, weeks:'Tuần 25–26', periods:12, order:11, chapCode:'Chương VII', chapTitle:'Trao đổi chất và chuyển hóa năng lượng ở sinh vật', sgk:'Bài 28–32', subj:'sinh', title:'Trao đổi khí, nước và chất dinh dưỡng ở thực vật & động vật', prereq:['l7-trao-doi-chat'],
  theory:[
    'Trao đổi khí ở sinh vật thực hiện theo cơ chế khuếch tán (khí đi từ nơi có nồng độ cao đến nơi có nồng độ thấp): ở thực vật chủ yếu qua khí khổng trên lá; ở động vật qua bề mặt cơ thể (giun đất), hệ thống ống khí (côn trùng), mang (cá, tôm) hoặc phổi (bò sát, chim, thú, người).',
    'Khí khổng gồm hai tế bào hình hạt đậu xếp úp vào nhau: khi tế bào hạt đậu trương nước thì khí khổng MỞ (thoát hơi nước và trao đổi khí mạnh); khi mất nước thì khí khổng ĐÓNG để hạn chế mất nước.',
    'Ở thực vật: rễ hút nước và muối khoáng hòa tan nhờ tế bào lông hút. Dòng mạch gỗ vận chuyển nước và muối khoáng từ rễ lên thân, lá; dòng mạch rây vận chuyển chất hữu cơ từ lá xuống nuôi các cơ quan.',
    'Thoát hơi nước ở lá (98% lượng nước rễ hút vào) không hề lãng phí vì: (1) tạo lực hút đầu trên kéo nước & khoáng từ rễ lên ngọn cây cao, (2) làm mát lá dưới nắng nóng, (3) giúp khí khổng mở cho CO₂ khuếch tán vào lá để quang hợp.',
    'Ở động vật và người: quá trình dinh dưỡng gồm 4 giai đoạn (thu nhận thức ăn → tiêu hóa → hấp thụ chất dinh dưỡng vào máu → đồng hóa và thải bã). Cần uống đủ nước và ăn cân đối các nhóm chất (carbohydrate, protein, lipid, vitamin & chất khoáng).'
  ],
  formulas:[
    'Mạch gỗ (gồm tế bào chết hóa gỗ): Rễ → Thân → Lá (chở nước & muối khoáng)',
    'Mạch rây (tế bào sống): Lá → Thân, Rễ, Quả, Củ (chở chất hữu cơ)',
    'Cơ quan trao đổi khí: Da ẩm (giun đất) · Ống khí (châu chấu) · Mang (cá) · Phổi (ếch trưởng thành, bò sát, chim, thú)'
  ],
  examples:[
    {
      q:'(Cơ bản) Cắm một cành hoa hồng trắng vào cốc nước pha màu thực phẩm đỏ. Sau vài giờ cánh hoa chuyển sang phớt đỏ. Thí nghiệm này chứng minh chức năng của bộ phận nào?',
      steps:[
        'Nước màu được hút từ gốc cành lên thẳng thân và cánh hoa.',
        'Bộ phận dẫn nước và chất hòa tan đi từ dưới lên ở thân cây là mạch gỗ.'
      ],
      ans:'Chứng minh mạch gỗ vận chuyển nước từ dưới lên lá và hoa.'
    },
    {
      q:'(Vận dụng) Nếu khoanh bóc bỏ một vòng vỏ cây thân gỗ (chứa mạch rây, giữ nguyên phần gỗ bên trong), sau một thời gian mép vỏ phía TRÊN vết cắt phình to ra. Giải thích vì sao?',
      steps:[
        'Mạch gỗ nằm sâu bên trong vẫn nguyên vẹn nên nước và muối khoáng vẫn lên lá để quang hợp bình thường.',
        'Mạch rây nằm ở phần vỏ bị đứt nên chất hữu cơ từ lá đi xuống bị ứ đọng tại mép trên vết cắt, kích thích tế bào phân chia làm mép trên phình to (ứng dụng trong chiết cành!).'
      ],
      ans:'Chất hữu cơ từ lá đi xuống theo mạch rây bị ứ lại ở mép trên vết khoanh vỏ.'
    }
  ],
  questions:[
    {d:1,q:'Ở thực vật trên cạn, nước và muối khoáng được rễ hấp thụ chủ yếu qua tế bào nào?',o:['Tế bào lông hút','Khí khổng','Lục lạp','Tế bào vỏ già hóa bần'],w:'Lông hút có thành mỏng, diện tích tiếp xúc lớn để hút nước và khoáng.'},
    {d:1,q:'Bộ phận nào vận chuyển nước và muối khoáng từ rễ lên lá?',o:['Mạch gỗ','Mạch rây','Biểu bì lá','Chóp rễ'],w:'Mạch gỗ dẫn dòng nước và muối khoáng đi ngược chiều trọng lực lên lá.'},
    {d:1,q:'Cá chép trao đổi khí với môi trường nước qua cơ quan nào?',o:['Mang','Phổi','Hệ thống ống khí','Khí khổng'],w:'Cá hô hấp bằng mang có nhiều phiến mang giàu mao mạch máu.'},
    {d:2,q:'Mạch rây trong thân cây có vai trò gì?',o:['Vận chuyển chất hữu cơ từ lá đến các cơ quan dự trữ và sử dụng','Vận chuyển nước từ đất lên ngọn','Thoát hơi nước ra không khí','Hấp thụ ánh sáng Mặt Trời'],w:'Mạch rây dẫn đường (saccharose) và chất hữu cơ đi từ lá tới rễ, củ, quả.'},
    {d:2,q:'Châu chấu và các loài côn trùng trao đổi khí nhờ cơ quan nào?',o:['Hệ thống ống khí thông với lỗ thở trên thành bụng','Phổi có phế nang','Mang','Da trơn ẩm'],w:'Côn trùng trao đổi khí qua hệ thống ống khí phân nhánh tới tận tế bào.'},
    {d:2,q:'Khi tế bào hình hạt đậu của khí khổng hút no nước (trương nước) thì khí khổng ở trạng thái nào?',o:['Mở rộng ra, tăng thoát hơi nước và trao đổi khí','Đóng kín hoàn toàn','Rụng khỏi lá','Biến thành lông hút'],w:'Thành trong dày, thành ngoài mỏng nên khi trương nước tế bào hạt đậu cong lại làm lỗ khí mở.'},
    {d:3,q:'Khi bứng cây đi trồng nơi khác, người ta thường cắt tỉa bớt cành lá và trồng vào lúc trời mát nhằm mục đích gì?',o:['Giảm thoát hơi nước qua lá khi bộ rễ bị tổn thương chưa hút kịp nước','Để cây không cần tưới nước nữa','Để mạch rây ngừng hoạt động mãi mãi','Giúp cây hấp thụ nhiều bụi hơn'],w:'Giữ cân bằng nước, tránh cây héo chết trước khi mọc lông hút mới.'},
    {d:3,q:'Vì sao bón phân hóa học quá liều đậm đặc trực tiếp vào gốc lại làm cây bị "xót rễ" và héo rũ?',o:['Nồng độ chất tan ngoài đất quá cao làm rễ không hút được nước mà còn mất nước','Phân bón làm tắc khí khổng trên lá','Phân bón che mất ánh sáng của lá','Cây ngừng hô hấp ngay lập tức'],w:'Môi trường đất quá ưu trương khiến lông hút mất nước, chết rễ.'},
    {d:4,q:'Khi khoanh bóc một vòng vỏ cây thân gỗ (lấy đi mạch rây, giữ nguyên phần gỗ), sau vài tuần hiện tượng nào xảy ra?',o:['Mép vỏ phía trên vết khoanh phình to do ứ đọng chất hữu cơ từ lá chuyển xuống','Mép vỏ phía dưới vết khoanh phình to hơn mép trên','Phần ngọn phía trên héo khô ngay sau 1 giờ vì mất mạch gỗ','Cây ngừng quang hợp ngay lập tức'],w:'Mạch gỗ vẫn dẫn nước lên lá, còn chất hữu cơ theo mạch rây đi xuống bị chặn ở mép trên.'},
    {d:4,q:'Vì sao khi bắt giun đất để lên mặt sân khô ráo dưới nắng thì giun đất nhanh chóng bị chết?',o:['Da giun bị khô làm O₂ và CO₂ không khuếch tán qua da được, giun chết ngạt','Giun đất bị mù vì ánh sáng','Giun không tìm được lá cây để quang hợp','Phổi giun bị vỡ'],w:'Giun đất trao đổi khí qua da; da phải ẩm ướt thì khí mới hòa tan và khuếch tán được.'}
  ]},

{ id:'l7-cam-ung', grade:7, term:'HK2', stage:4, weeks:'Tuần 27–29', periods:10, order:12, chapCode:'Chương VIII', chapTitle:'Cảm ứng ở sinh vật', sgk:'Bài 33–35', subj:'sinh', title:'Cảm ứng ở sinh vật và tập tính ở động vật', prereq:['l7-dinh-duong-van-chuyen'],
  theory:[
    'Cảm ứng là khả năng cơ thể sinh vật tiếp nhận và phản ứng thích nghi với các kích thích từ môi trường (ánh sáng, nhiệt độ, nước, hóa chất, tiếp xúc), giúp sinh vật tồn tại và phát triển.',
    'Cảm ứng ở thực vật thường diễn ra chậm, biểu hiện qua sự vận động sinh trưởng hướng về hoặc tránh xa nguồn kích thích (hướng sáng dương của ngọn, hướng nước dương và hướng trọng lực dương của rễ, hướng tiếp xúc của tua cuốn) hoặc vận động không sinh trưởng (lá trinh nữ cụp lại khi chạm).',
    'Cảm ứng ở động vật diễn ra nhanh và đa dạng hơn nhờ hệ thần kinh. Tập tính là chuỗi những phản ứng của động vật trả lời kích thích từ môi trường bên trong hoặc bên ngoài.',
    'Hai loại tập tính: Tập tính bẩm sinh (sinh ra đã có, di truyền từ bố mẹ, đặc trưng cho loài: nhện giăng tơ, chim di cư, tò vò đào hang) và Tập tính học được (hình thành trong đời sống cá thể qua học tập, rèn luyện: gà chạy lại khi nghe tiếng gọi cho ăn, người dừng đèn đỏ).',
    'Ứng dụng cảm ứng và tập tính trong thực tiễn: làm giàn cho bầu bí leo (hướng tiếp xúc), tưới nước rãnh để rễ lan rộng (hướng nước), dùng đèn bẫy côn trùng ban đêm, dùng bù nhìn đuổi chim, huấn luyện chó nghiệp vụ.'
  ],
  formulas:[
    'Cảm ứng thực vật: Hướng sáng (ngọn +) · Hướng nước (rễ +) · Hướng trọng lực (rễ +) · Hướng tiếp xúc (tua cuốn)',
    'Tập tính động vật = Tập tính bẩm sinh (di truyền, bền vững) + Tập tính học được (rèn luyện, thay đổi được)'
  ],
  examples:[
    {
      q:'(Cơ bản) Phân biệt hiện tượng cảm ứng nào là hướng động sinh trưởng và hiện tượng nào không do sinh trưởng: (A) Ngọn cây đậu mọc cong về phía cửa sổ có nắng; (B) Lá cây xấu hổ cụp xuống ngay khi tay chạm vào.',
      steps:[
        '(A) Ngọn cây mọc cong về phía sáng do tế bào phía tối lớn nhanh hơn phía sáng → cảm ứng do sinh trưởng (hướng sáng).',
        '(B) Lá xấu hổ cụp nhanh do thay đổi sức trương nước ở thể gối cuống lá, không phải do phân chia tế bào → vận động cảm ứng không sinh trưởng.'
      ],
      ans:'(A) Hướng sáng (sinh trưởng); (B) Ứng động tiếp xúc (không sinh trưởng).'
    },
    {
      q:'(Vận dụng) Vì sao khi trồng bí đao, mướp, dưa leo nông dân thường cắm cọc làm giàn ngay khi cây bắt đầu vươn ngọn?',
      steps:[
        'Các cây thân leo có tua cuốn mang tính hướng tiếp xúc rất nhạy.',
        'Làm giàn giúp tua cuốn quấn bám chắc để vươn cao đón ánh sáng quang hợp tốt, thoáng khí và quả không chạm đất ẩm thối.'
      ],
      ans:'Ứng dụng tính hướng tiếp xúc của tua cuốn để cây leo giàn đón nắng, tăng năng suất.'
    }
  ],
  questions:[
    {d:1,q:'Khả năng sinh vật tiếp nhận và phản ứng thích nghi với các kích thích từ môi trường được gọi là gì?',o:['Cảm ứng','Quang hợp','Bài tiết','Đột biến'],w:'Đó là định nghĩa khái niệm cảm ứng ở sinh vật.'},
    {d:1,q:'Ngọn cây trồng cạnh cửa sổ mọc cong hướng ra phía có ánh sáng là hiện tượng gì?',o:['Hướng sáng dương','Hướng trọng lực dương','Hướng nước','Hướng hóa'],w:'Ngọn cây vươn về phía nguồn sáng là hướng sáng dương.'},
    {d:1,q:'Hiện tượng nào sau đây là tập tính BẨM SINH ở động vật?',o:['Nhện tự biết giăng tơ bắt mồi ngay từ nhỏ','Chó làm xiếc nhảy qua vòng lửa','Vẹt bắt chước nói tiếng người','Cá cảnh bơi lên mặt bể khi nghe tiếng vỗ tay'],w:'Nhện giăng tơ là bản năng di truyền đặc trưng cho loài.'},
    {d:2,q:'Tua cuốn của cây mướp, cây bầu quấn chặt quanh cọc giàn là biểu hiện của kiểu cảm ứng nào?',o:['Hướng tiếp xúc','Hướng nước','Hướng sáng âm','Hướng hóa'],w:'Tua cuốn phản ứng với tác nhân tiếp xúc cơ học.'},
    {d:2,q:'Rễ cây luôn đâm sâu xuống lòng đất và hướng tới vùng đất ẩm có nguồn nước là biểu hiện của những tính hướng nào?',o:['Hướng trọng lực dương và hướng nước dương','Hướng sáng dương và hướng trọng lực âm','Hướng tiếp xúc và hướng sáng dương','Hướng nước âm'],w:'Rễ mọc theo chiều trọng lực (hướng đất dương) và tìm nguồn nước (hướng nước dương).'},
    {d:2,q:'Đặc điểm của cảm ứng ở thực vật so với cảm ứng ở động vật có hệ thần kinh là gì?',o:['Thường diễn ra chậm hơn và khó nhận thấy ngay tức khắc','Luôn diễn ra nhanh gấp trăm lần động vật','Thực vật có não bộ điều khiển phản xạ','Thực vật không có khả năng cảm ứng'],w:'Thực vật không có hệ thần kinh nên phản ứng chủ yếu bằng hormone sinh trưởng chậm.'},
    {d:3,q:'Biện pháp dùng đèn thắp sáng trên đồng ruộng ban đêm để thu hút và tiêu diệt sâu bướm hại lúa dựa trên cơ sở khoa học nào?',o:['Dựa vào tập tính hướng sáng của nhiều loài côn trùng hoạt động ban đêm','Để lúa quang hợp suốt ban đêm','Để làm khô hết nước trên mặt ruộng','Để sưởi ấm cho sâu bướm sinh sản'],w:'Côn trùng đêm có tập tính bay vào nguồn sáng (bẫy đèn sinh học an toàn).'},
    {d:3,q:'Khi trồng cây ăn quả, người ta thường đào rãnh hoặc bón phân hữu cơ quanh tán lá (hơi xa gốc) thay vì đổ sát cổ rễ nhằm mục đích gì?',o:['Ứng dụng tính hướng hóa và hướng nước để kích thích bộ rễ lan rộng, bám đất chắc và hút nhiều dinh dưỡng','Để rễ cây không chạm tới phân bón','Để làm đứt rễ cọc của cây','Để lá cây tự rụng bớt'],w:'Đầu rễ có tính hướng hóa dương và hướng nước dương sẽ vươn dài ra vùng có phân ẩm.'},
    {d:4,q:'Một học sinh đặt hạt đậu vừa nảy mầm nằm ngang trên đĩa xoay quay đều liên tục (loại bỏ tác động một chiều của trọng lực) trong hộp tối. Rễ mầm sẽ mọc theo hướng nào?',o:['Mọc thẳng tiếp theo hướng ban đầu mà không cong xuống','Vẫn cong gập thẳng đứng xuống đất','Cong ngược lên nắp hộp','Xoắn tròn thành lò xo'],w:'Khi lực tác động đều từ mọi phía do đĩa quay, rễ không nhận kích thích trọng lực một chiều nên mọc thẳng.'},
    {d:4,q:'Hằng ngày người nuôi cá gõ nhẹ vào thành bể trước khi rải thức ăn. Sau vài tuần, chỉ cần gõ nhẹ thành bể là đàn cá đã bơi tụ lại dù chưa có thức ăn. Tập tính này có đặc điểm gì?',o:['Là tập tính học được, nếu gõ nhiều lần liên tiếp mà không cho ăn nữa thì tập tính này sẽ mai một dần','Là tập tính bẩm sinh di truyền cho mọi đời con','Không bao giờ thay đổi suốt đời cá','Do cá tự quang hợp khi nghe tiếng động'],w:'Tập tính học được hình thành do liên kết kích thích mới và có thể mất đi nếu không được củng cố.'}
  ]},

{ id:'l7-sinh-truong', grade:7, term:'HK2', stage:4, weeks:'Tuần 30–31', periods:8, order:13, chapCode:'Chương IX', chapTitle:'Sinh trưởng và phát triển ở sinh vật', sgk:'Bài 36–38', subj:'sinh', title:'Khái quát và ứng dụng sinh trưởng, phát triển ở sinh vật', prereq:['l7-cam-ung'],
  theory:[
    'Sinh trưởng là sự tăng lên về kích thước và khối lượng cơ thể do sự tăng lên về số lượng và kích thước tế bào. Phát triển là những biến đổi diễn ra trong đời sống cá thể bao gồm ba quá trình liên quan mật thiết: sinh trưởng, phân hóa tế bào và phát sinh hình thái cơ quan, cơ thể.',
    'Ở thực vật, sự sinh trưởng diễn ra tại mô phân sinh: mô phân sinh đỉnh (ở chồi ngọn, chồi nách, đỉnh rễ) giúp thân và rễ dài ra; mô phân sinh bên (ở cây hai lá mầm thân gỗ) giúp thân và rễ tăng đường kính bề ngang hằng năm.',
    'Vòng đời phát triển của động vật có thể trải qua biến thái (con non khác hẳn con trưởng thành như ếch: Trứng → Nòng nọc → Ếch; bướm: Trứng → Sâu → Nhộng → Bướm; hoặc biến thái không hoàn toàn như châu chấu) hoặc không qua biến thái (gà, chó, mèo, người).',
    'Các nhân tố ảnh hưởng đến sinh trưởng và phát triển: nhân tố bên trong (di truyền, hormone) và bên ngoài (nhiệt độ, ánh sáng, nước, dinh dưỡng). Ứng dụng: bấm ngọn bầu bí kích thích chồi bên, thắp đèn thanh long ra hoa trái vụ, diệt muỗi ở giai đoạn bọ gậy/lăng quăng.'
  ],
  formulas:[
    'Mô phân sinh ở thực vật: Mô phân sinh đỉnh → tăng chiều dài  |  Mô phân sinh bên → tăng đường kính thân, rễ',
    'Vòng đời biến thái hoàn toàn (Bướm, Muỗi, Ếch): Trứng → Ấu trùng (sâu / bọ gậy / nòng nọc) → Nhộng (ở côn trùng) → Trưởng thành'
  ],
  questions:[
    {d:1,q:'Sự tăng lên về kích thước và khối lượng của cơ thể sinh vật do tế bào lớn lên và phân chia được gọi là gì?',o:['Sinh trưởng','Cảm ứng','Thoát hơi nước','Quang hợp'],w:'Sinh trưởng là sự tăng kích thước và khối lượng cơ thể.'},
    {d:1,q:'Ở cây thân gỗ hai lá mầm, loại mô phân sinh nào làm thân và rễ cây to ra theo chiều ngang hằng năm?',o:['Mô phân sinh bên','Mô phân sinh đỉnh chồi','Lục lạp ở lá','Khí khổng'],w:'Mô phân sinh đỉnh giúp cây cao dài ra; mô phân sinh bên giúp thân to ngang.'},
    {d:2,q:'Loài động vật nào sau đây có vòng đời phát triển QUA BIẾN THÁI (hình thái con non khác hẳn con trưởng thành)?',o:['Ếch đồng và bướm cải','Con chó và con mèo','Con gà và chim bồ câu','Con bò và con ngựa'],w:'Nòng nọc sống dưới nước thở bằng mang, biến thái thành ếch sống trên cạn.'},
    {d:2,q:'Vì sao khi trồng cây lấy quả như bầu, bí, mướp nông dân thường bấm ngọn chính khi cây đạt độ dài nhất định?',o:['Để chồi nách phát triển ra nhiều nhánh bên mang nhiều hoa cái và đậu nhiều quả','Để cây ngừng hút nước hoàn toàn','Để lá cây rụng hết','Để rễ cây nổi lên mặt đất'],w:'Bấm ngọn loại bỏ ưu thế đỉnh giúp mô phân sinh chồi bên phát triển mạnh.'},
    {d:3,q:'Trong chiến dịch phòng chống sốt xuất huyết, biện pháp thả cá bảy màu vào bể nước và lật úp các chum vại đọng nước nhằm tiêu diệt muỗi ở giai đoạn nào?',o:['Giai đoạn trứng và ấu trùng (lăng quăng / bọ gậy) sống trong nước','Giai đoạn muỗi trưởng thành đang bay trên cây cao','Giai đoạn nhộng của bướm tằm','Giai đoạn trưởng thành trên khô'],w:'Diệt bọ gậy ở nguồn nước đọng là cách dễ và triệt để nhất để cắt đứt vòng đời muỗi.'},
    {d:3,q:'Cây tre trưởng thành nếu bị gãy mất phần ngọn trên cùng sẽ không thể cao vọt thêm ở thân đó nhưng vẫn cao lên từ đốt ở măng non là nhờ loại mô nào?',o:['Mô phân sinh lóng (ở các mắt đốt của cây một lá mầm)','Mô phân sinh bên hóa gỗ','Lông hút ở rễ','Mạch gỗ chết'],w:'Tre, lúa, ngô (một lá mầm) có mô phân sinh lóng giúp lóng thân vươn dài.'}
  ]},

{ id:'l7-cam-ung-sinh-san', grade:7, term:'HK2', stage:4, weeks:'Tuần 32–35', periods:10, order:14, chapCode:'Chương X', chapTitle:'Sinh sản ở sinh vật', sgk:'Bài 39–42', subj:'sinh', title:'Sinh sản vô tính, sinh sản hữu tính & Cơ thể là một thể thống nhất', prereq:['l7-sinh-truong'],
  theory:[
    'Cảm ứng là khả năng sinh vật tiếp nhận và phản ứng thích nghi với các kích thích từ môi trường. Ở thực vật gọi là hướng động (hướng sáng, hướng nước, hướng trọng lực, hướng hóa, hướng tiếp xúc) hoặc ứng động (hoa nở theo giờ, lá trinh nữ cụp lại khi chạm).',
    'Tập tính ở động vật gồm: tập tính bẩm sinh (sinh ra đã có, di truyền từ bố mẹ, đặc trưng cho loài: nhện giăng tơ, tò vò xây tổ, ếch đực kêu mùa sinh sản) và tập tính học được (hình thành trong đời sống qua học tập, rút kinh nghiệm: chim non tập bay, người dừng đèn đỏ).',
    'Sinh trưởng là sự tăng lên về kích thước và khối lượng cơ thể do tế bào lớn lên và phân chia; Phát triển gồm sinh trưởng, phân hóa tế bào và phát sinh hình thái cơ quan mới (VD: vòng đời bướm trải qua biến thái: Trứng → Sâu → Nhộng → Bướm). Ở thực vật, sinh trưởng dài ra nhờ mô phân sinh đỉnh, to ngang nhờ mô phân sinh bên.',
    'Sinh sản vô tính: không có sự kết hợp giao tử, con sinh ra từ một phần cơ thể mẹ và giống hệt mẹ (phân đôi, nảy chồi, bào tử; giâm cành, chiết cành, ghép mắt/cành, nuôi cấy mô tế bào giúp nhân nhanh giống sạch bệnh).',
    'Sinh sản hữu tính: có sự kết hợp giao tử đực và giao tử cái (thụ tinh) tạo hợp tử → tạo sự đa dạng di truyền, thích nghi tốt với môi trường biến đổi. Ở thực vật có hoa: hạt phấn rơi trên đầu nhụy (thụ phấn) → thụ tinh → noãn thành hạt, bầu nhụy thành quả. Cơ thể đa bào là một thể thống nhất giữa tế bào – mô – cơ quan – hệ cơ quan – môi trường.'
  ],
  formulas:[
    'Vòng đời phát triển có biến thái của bướm: Trứng → Ấu trùng (sâu) → Nhộng → Bướm trưởng thành',
    'Sinh sản hữu tính ở thực vật có hoa: Thụ phấn → Thụ tinh (Giao tử đực + Giao tử cái → Hợp tử) → Hạt (từ noãn) & Quả (từ bầu nhụy)',
    'Tính thống nhất cơ thể: Tế bào ⇄ Mô ⇄ Cơ quan ⇄ Hệ cơ quan ⇄ Cơ thể ⇄ Môi trường'
  ],
  examples:[
    {
      q:'(Cơ bản) Cho các hiện tượng: (1) rễ cây mọc hướng về nguồn nước, (2) tua cuốn cây bí quấn vào giàn, (3) gà con mới nở chạy theo gà mẹ, (4) chó làm toán theo hiệu lệnh. Phân loại cảm ứng thực vật và tập tính động vật.',
      steps:[
        '(1) Hướng nước và (2) Hướng tiếp xúc là cảm ứng ở thực vật.',
        '(3) Tập tính in vết / bẩm sinh kết hợp học sớm ở gà con; (4) Chó làm toán là tập tính học được qua huấn luyện.'
      ],
      ans:'(1, 2) cảm ứng thực vật; (3, 4) tập tính động vật (4 là tập tính học được).'
    },
    {
      q:'(Vận dụng) Trong nông nghiệp, muốn nhân nhanh hàng vạn cây phong lan quý hiếm sạch virus và đồng nhất về màu hoa trong thời gian ngắn, người ta dùng phương pháp nào?',
      steps:[
        'Gieo hạt (hữu tính) dễ phân li tính trạng làm đổi màu hoa.',
        'Giâm/chiết thông thường hệ số nhân giống thấp.',
        'Nuôi cấy mô tế bào thực vật (nhân giống vô tính in vitro) từ đỉnh sinh trưởng tạo hàng vạn cây con đồng nhất và sạch bệnh.'
      ],
      ans:'Phương pháp nuôi cấy mô tế bào thực vật (sinh sản vô tính).'
    }
  ],
  questions:[
    {d:1,q:'Quá trình tăng lên về kích thước và khối lượng của cơ thể sinh vật do tế bào lớn lên và phân chia gọi là gì?',o:['Sinh trưởng','Cảm ứng','Bài tiết','Hô hấp'],w:'Sinh trưởng là sự tăng kích thước và khối lượng cơ thể.'},
    {d:1,q:'Hình thức nào sau đây là sinh sản VÔ TÍNH ở thực vật?',o:['Giâm cành rau muống, mía, sắn','Sự tạo hạt ở cây lúa sau thụ phấn','Gieo hạt đậu xanh','Ong thụ phấn cho hoa nhãn'],w:'Giâm cành tạo cây con từ đoạn thân mà không có sự kết hợp giao tử.'},
    {d:1,q:'Bản chất của quá trình thụ tinh trong sinh sản hữu tính là gì?',o:['Sự kết hợp giữa giao tử đực và giao tử cái tạo thành hợp tử','Sự bay của hạt phấn trong gió','Sự rụng cánh hoa','Sự chín của quả'],w:'Giao tử đực (n) + Giao tử cái (n) → Hợp tử (2n).'},
    {d:2,q:'Ở cây thân gỗ hai lá mầm, bộ phận mô phân sinh nào giúp thân và rễ cây TĂNG ĐƯỜNG KÍNH (lớn to bề ngang) hằng năm?',o:['Mô phân sinh bên','Mô phân sinh đỉnh ngọn','Biểu bì lá','Lông hút'],w:'Mô phân sinh đỉnh làm cây dài ra; mô phân sinh bên làm thân, rễ to ngang.'},
    {d:2,q:'Ở thực vật có hoa, sau khi thụ tinh thì bộ phận nào phát triển thành QUẢ và bộ phận nào thành HẠT?',o:['Bầu nhụy thành quả; noãn đã thụ tinh thành hạt','Noãn thành quả; bầu nhụy thành hạt','Đài hoa thành quả; nhị thành hạt','Cánh hoa thành quả; cuống hoa thành hạt'],w:'Bầu nhụy biến đổi thành quả chứa hạt phát triển từ noãn.'},
    {d:2,q:'Vòng đời phát triển của loài động vật nào sau đây KHÔNG QUA BIẾN THÁI (con non mới sinh có hình thái tương tự con trưởng thành)?',o:['Gà, chó, mèo và người','Bướm cải','Ếch đồng','Muỗi vằn'],w:'Chim, thú, người phát triển không qua biến thái; ếch, bướm, muỗi phát triển qua biến thái.'},
    {d:3,q:'Trong vòng đời của bướm ăn lá cải (Trứng → Sâu → Nhộng → Bướm), giai đoạn nào phá hại mùa màng mạnh nhất?',o:['Giai đoạn sâu (ấu trùng)','Giai đoạn trứng','Giai đoạn nhộng','Giai đoạn bướm trưởng thành'],w:'Sâu non ăn rất nhiều lá để tích lũy chất dinh dưỡng trước khi hóa nhộng.'},
    {d:3,q:'Vì sao nông dân thường bấm ngọn (cắt đỉnh sinh trưởng ngọn) cho cây bầu, bí, mướp, đậu?',o:['Để kích thích mô phân sinh chồi bên phát triển nhiều nhánh, cho nhiều hoa quả','Để rễ cây ngừng hút nước','Để cây chuyển sang sinh sản vô tính','Để lá cây không thoát hơi nước'],w:'Mất ưu thế đỉnh giúp chồi nách mọc nhiều nhánh mang hoa cái.'},
    {d:4,q:'Ưu thế nổi bật của phương pháp nuôi cấy mô tế bào trong nhân giống cây trồng (chuối, phong lan, khoai tây) là gì?',o:['Nhân nhanh số lượng rất lớn cây con đồng nhất về đặc tính tốt và sạch bệnh','Tạo ra các cá thể con có kiểu gene khác hoàn toàn cây mẹ','Thực hiện ngay ngoài ruộng không cần điều kiện vô trùng','Chỉ áp dụng được cho động vật có xương sống'],w:'Nuôi cấy mô nhân giống vô tính với hệ số nhân cao và loại sạch mầm bệnh virus.'},
    {d:4,q:'Tại sao trồng thanh long vào mùa đông (ngày ngắn), nông dân thường thắp đèn chiếu sáng ban đêm ở vườn?',o:['Điều chỉnh thời gian chiếu sáng (quang chu kì) để kích thích thanh long ra hoa trái vụ','Chỉ để sưởi ấm gốc cây lên 50 °C','Để đuổi ong bướm không cho thụ phấn','Để quả thanh long đổi thành màu xanh'],w:'Thanh long là cây ngày dài; thắp đèn ban đêm đánh thức cảm ứng ánh sáng giúp cây ra hoa trái vụ.'}
  ]}
);
