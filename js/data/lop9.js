// LỚP 9 – Theo đúng Mục lục SGK Khoa học tự nhiên 9 (Bộ Kết nối tri thức với cuộc sống – Bộ SGK thống nhất toàn quốc theo QĐ 3588/QĐ-BGDĐT).
// Gồm Mở đầu + 14 Chương (Bài 1 → Bài 51 SGK), phân bổ chuẩn Học kì I & Học kì II.
window.KHTN = window.KHTN || [];
KHTN.push(
{ id:'l9-mo-dau', grade:9, order:1, term:'HK1', stage:1, chapCode:'Mở đầu', chapTitle:'Mở đầu môn Khoa học tự nhiên 9', sgk:'Bài 1', subj:'td',
  title:'Nhận biết dụng cụ, hóa chất & thuyết trình vấn đề khoa học', prereq:['l8-thi-nghiem'],
  theory:[
    'Dụng cụ quang học & điện từ ở lớp 9: nguồn sáng laser/đèn chiếu tia hẹp, bản bán trụ thủy tinh (khảo sát khúc xạ, phản xạ toàn phần), lăng kính, thấu kính hội tụ – phân kì, điện trở mẫu, biến trở con chạy, cuộn dây dẫn có đèn LED khảo sát cảm ứng điện từ.',
    'Hóa chất thí nghiệm lớp 9 chia nhóm: kim loại (Na bảo quản trong dầu hỏa, Mg, Al, Zn, Fe, Cu), phi kim & hợp chất vô cơ, hợp chất hữu cơ dễ cháy/bay hơi (ethylic alcohol C₂H₅OH, acetic acid CH₃COOH, hexane/ethylene, dung dịch glucose, hồ tinh bột).',
    'An toàn với hóa chất hữu cơ dễ cháy: đậy kín nắp, để xa nguồn nhiệt, không đun trực tiếp cồn trên ngọn lửa hở.',
    'Cấu trúc bài báo cáo & thuyết trình vấn đề khoa học: (1) Tiêu đề & mục tiêu → (2) Cơ sở lí thuyết / phương pháp → (3) Kết quả & thảo luận số liệu/biểu đồ → (4) Kết luận & kiến nghị.'
  ],
  formulas:[
    'Bố cục báo cáo khoa học chuẩn: Mở đầu (vấn đề, mục tiêu) → Phương pháp nghiên cứu → Kết quả & Thảo luận → Kết luận',
    'Bảo quản kim loại kiềm mạnh (Na, K): Ngâm chìm trong dầu hỏa khan (ngăn phản ứng với O₂ và hơi nước trong không khí)'
  ],
  questions:[
    {d:1,q:'Dụng cụ nào dùng để khảo sát đường truyền tia sáng khúc xạ và phản xạ toàn phần trong phòng thực hành lớp 9?',o:['Bản bán trụ thủy tinh kết hợp bảng chia độ và đèn phát tia sáng hẹp','Ống đong chia độ','Lực kế lò xo','Nhiệt kế rượu'],w:'Bản bán trụ trong suốt gắn trên đĩa tròn chia độ giúp đọc trực tiếp góc tới và góc khúc xạ.'},
    {d:1,q:'Trong phòng thí nghiệm, kim loại Sodium (Na) phải được bảo quản bằng cách nào để đảm bảo an toàn?',o:['Ngâm chìm trong lọ dầu hỏa khan đậy kín','Ngâm trong cốc nước cất','Để hở ngoài không khí ẩm','Ngâm trong dung dịch HCl'],w:'Na phản ứng rất mãnh liệt với nước và oxygen nên phải ngâm trong dầu hỏa.'},
    {d:2,q:'Khi làm thí nghiệm với ethylic alcohol (cồn), quy tắc an toàn nào sau đây là BẮT BUỘC?',o:['Để lọ cồn xa ngọn lửa đèn cồn đang cháy vì cồn rất dễ bay hơi và bắt lửa','Mở nắp lọ cồn đặt sát ngay cạnh ngọn lửa','Đổ cồn trực tiếp thêm vào đèn cồn đang cháy','Dùng miệng thổi tắt đèn cồn'],w:'Hơi cồn rất dễ bốc cháy gây hỏa hoạn.'},
    {d:2,q:'Khi thuyết trình một vấn đề khoa học, việc sử dụng biểu đồ, sơ đồ và hình ảnh trực quan nhằm mục đích chính là gì?',o:['Giúp số liệu trở nên rõ ràng, sinh động và người nghe dễ nắm bắt quy luật chính','Để che giấu kết quả thí nghiệm sai','Để bài báo cáo dài thêm không cần số liệu','Thay thế hoàn toàn phần kết luận'],w:'Biểu đồ giúp so sánh trực quan xu hướng và mối liên hệ giữa các đại lượng.'}
  ]},

{ id:'l9-nang-luong-co', grade:9, order:2, term:'HK1', stage:1, chapCode:'Chương I', chapTitle:'Năng lượng cơ học', sgk:'Bài 2–4', subj:'ly',
  title:'Động năng, Thế năng, Cơ năng, Công và công suất', prereq:['l6-nang-luong','l7-toc-do'],
  theory:[
    'Động năng là năng lượng vật có được do chuyển động: W_đ = ½·m·v² (J). Thế năng trọng trường là năng lượng vật có được khi ở độ cao h so với mốc thế năng: W_t = P·h ≈ 10·m·h (J).',
    'Cơ năng của vật bằng tổng động năng và thế năng: W = W_đ + W_t. Trong quá trình chuyển động, động năng và thế năng có thể chuyển hóa qua lại (khi bỏ qua ma sát/lực cản thì cơ năng được bảo toàn).',
    'Công cơ học (khi lực F không đổi cùng hướng dịch chuyển s): A = F·s (J). Nếu lực vuông góc với hướng dịch chuyển thì lực không sinh công (A = 0).',
    'Công suất đặc trưng cho tốc độ thực hiện công nhanh hay chậm: P = A / t (W – Oát; 1 kW = 1000 W; 1 MW = 10⁶ W; 1 HP ≈ 746 W).'
  ],
  formulas:[
    'Động năng của vật chuyển động: W_đ = \\frac{1}{2} · m · v² || Trong đó: W_đ là động năng (J); m là khối lượng vật (kg); v là tốc độ của vật (m/s).',
    'Thế năng trọng trường: W_t = P · h ≈ 10 · m · h || Trong đó: W_t là thế năng (J); m là khối lượng vật (kg); h là độ cao so với mốc thế năng (m). Cơ năng W = W_đ + W_t.',
    'Công cơ học: A = F · s || Trong đó: A là công cơ học (J); F là lực tác dụng cùng hướng chuyển động (N); s là quãng đường dịch chuyển (m).',
    'Công suất (tốc độ sinh công): P = \\frac{A}{t} || Trong đó: P là công suất (W – Oát; 1 kW = 1000 W); A là công thực hiện (J); t là thời gian thực hiện công (s).'
  ],
  questions:[
    {d:2,q:'Vật khối lượng 2 kg chuyển động với tốc độ 3 m/s. Động năng của vật là bao nhiêu J?',n:9,t:0,u:'J',w:'W_đ = ½·2·3² = 9 J.'},
    {d:2,q:'Vật 2 kg ở độ cao 5 m so với mặt đất. Thế năng trọng trường (lấy P = 10m) là bao nhiêu J?',n:100,t:0,u:'J',w:'W_t = 10·2·5 = 100 J.'},
    {d:2,q:'Lực kéo 50 N làm vật dịch chuyển 4 m cùng hướng lực trong 20 s. Công suất của lực kéo là bao nhiêu W?',n:10,t:0,u:'W',w:'A = 50 × 4 = 200 J; P = 200 / 20 = 10 W.'}
  ]},

{ id:'l9-anh-sang', grade:9, order:3, term:'HK1', stage:1, chapCode:'Chương II', chapTitle:'Ánh sáng', sgk:'Bài 5–10', subj:'ly',
  title:'Khúc xạ ánh sáng, Phản xạ toàn phần, Lăng kính & Thấu kính', prereq:['l7-anh-sang'],
  theory:[
    'Khúc xạ ánh sáng là hiện tượng tia sáng truyền xiên góc qua mặt phân cách hai môi trường trong suốt bị gãy khúc. Chiết suất môi trường n = c / v (≥ 1); truyền từ không khí vào nước/thủy tinh thì góc khúc xạ nhỏ hơn góc tới (r < i); truyền ngược lại thì r > i. Áp dụng định luật Snell: n₁·sin i = n₂·sin r.',
    'Phản xạ toàn phần xảy ra khi ánh sáng truyền từ môi trường chiết suất lớn (n₁) sang chiết suất nhỏ (n₂ < n₁) và góc tới lớn hơn hoặc bằng góc tới hạn (i ≥ i_th, với sin i_th = n₂ / n₁). Ứng dụng trong cáp quang truyền internet và nội soi y học.',
    'Lăng kính tán sắc chùm ánh sáng trắng thành dải màu liên tục từ đỏ đến tím (tia đỏ lệch ít nhất, tia tím lệch nhiều nhất). Vật có màu nào vì phản xạ/tán xạ ánh sáng màu đó tới mắt (vật màu đen hấp thụ hầu hết các ánh sáng màu).',
    'Thấu kính hội tụ (rìa mỏng): vật đặt ngoài khoảng tiêu cự (d > f) cho ảnh thật ngược chiều; vật đặt trong khoảng tiêu cự (d < f) cho ảnh ảo cùng chiều lớn hơn vật (nguyên lí kính lúp). Thấu kính phân kì (rìa dày): vật thật luôn cho ảnh ảo, cùng chiều, nhỏ hơn vật.'
  ],
  formulas:[
    'Định luật khúc xạ ánh sáng: n₁ · sin i = n₂ · sin r || Khi truyền từ không khí (n₁ ≈ 1) vào nước/thủy tinh (n₂ > 1) thì r < i; khi truyền từ nước ra không khí thì r > i.',
    'Điều kiện phản xạ toàn phần: n₁ > n₂  và  i ≥ i_th  (với sin i_th = \\frac{n₂}{n₁}) || Ứng dụng: Cáp sợi quang truyền tín hiệu tốc độ cao hầu như không suy hao.',
    'Tính chất ảnh qua Kính lúp (thấu kính hội tụ tiêu cự ngắn): Đặt vật d < f → Ảnh ảo, cùng chiều, lớn hơn vật'
  ],
  questions:[
    {d:1,q:'Tia sáng chiếu xiên góc từ không khí vào mặt nước tĩnh lặng thì góc khúc xạ r so với góc tới i như thế nào?',o:['Nhỏ hơn góc tới (r < i)','Lớn hơn góc tới (r > i)','Luôn bằng góc tới','Luôn bằng 90°'],w:'Nước có chiết suất lớn hơn không khí nên tia khúc xạ lệch lại gần pháp tuyến hơn (r < i).'},
    {d:1,q:'Kính lúp là loại thấu kính nào và khi quan sát vật nhỏ ta phải đặt vật ở đâu?',o:['Thấu kính hội tụ có tiêu cự ngắn; đặt vật trong khoảng tiêu cự (d < f)','Thấu kính phân kì; đặt vật ngoài tiêu cự','Thấu kính hội tụ; đặt vật rất xa kính','Gương phẳng đặt sát mắt'],w:'Đặt vật trong khoảng tiêu cự của thấu kính hội tụ để thu được ảnh ảo, cùng chiều, lớn hơn vật.'},
    {d:2,q:'Cáp sợi quang dùng truyền dữ liệu Internet tốc độ cao hoạt động dựa trên hiện tượng vật lí nào?',o:['Phản xạ toàn phần','Tán sắc ánh sáng trắng','Sự nở vì nhiệt','Cảm ứng điện từ'],w:'Tia sáng bị phản xạ toàn phần liên tiếp bên trong lõi sợi quang.'}
  ]},

{ id:'l9-dien-ohm', grade:9, order:4, term:'HK1', stage:1, chapCode:'Chương III', chapTitle:'Điện', sgk:'Bài 11–12', subj:'ly',
  title:'Điện trở, Định luật Ohm & Đoạn mạch nối tiếp – song song', prereq:['l8-dien'],
  theory:[
    'Điện trở R (đơn vị Ôm – Ω; 1 kΩ = 1000 Ω, 1 MΩ = 10⁶ Ω) biểu thị mức độ cản trở dòng điện của vật dẫn. Định luật Ohm: Cường độ dòng điện chạy qua đoạn dây dẫn tỉ lệ thuận với hiệu điện thế hai đầu dây và tỉ lệ nghịch với điện trở của nó: I = U / R.',
    'Điện trở của dây dẫn tỉ lệ thuận với chiều dài l, tỉ lệ nghịch với tiết diện S và phụ thuộc vật liệu làm dây (điện trở suất ρ): R = ρ · l / S. Biến trở dùng để điều chỉnh cường độ dòng điện trong mạch.',
    'Đoạn mạch nối tiếp (R₁ nt R₂): I = I₁ = I₂ ; U = U₁ + U₂ ; R_tđ = R₁ + R₂.',
    'Đoạn mạch song song (R₁ // R₂): U = U₁ = U₂ ; I = I₁ + I₂ ; 1/R_tđ = 1/R₁ + 1/R₂ ⇒ R_tđ = (R₁·R₂)/(R₁ + R₂) (các thiết bị điện trong gia đình đều mắc song song vào nguồn 220 V để hoạt động độc lập).'
  ],
  formulas:[
    'Định luật Ohm: I = \\frac{U}{R}  ⇒  U = I · R  ;  R = \\frac{U}{I} || Trong đó: I là cường độ dòng điện (A); U là hiệu điện thế (V); R là điện trở vật dẫn (Ω – Ôm).',
    'Điện trở tương đương mạch nối tiếp & song song: R_nt = R₁ + R₂  ;  R_ss = \\frac{R₁ · R₂}{R₁ + R₂} || Lưu ý: Mắc nối tiếp làm tăng R_tđ; mắc song song làm giảm R_tđ nhỏ hơn từng điện trở thành phần.',
    'Điện trở dây dẫn theo kích thước & chất liệu: R = \\frac{ρ · l}{S} || Trong đó: ρ là điện trở suất (Ω·m); l là chiều dài dây (m); S là tiết diện ngang của dây (m²).'
  ],
  questions:[
    {d:2,q:'Đặt hiệu điện thế U = 12 V vào hai đầu điện trở R = 4 Ω. Cường độ dòng điện qua điện trở là bao nhiêu A?',n:3,t:0,u:'A',w:'I = U / R = 12 / 4 = 3 A.'},
    {d:2,q:'Hai điện trở 6 Ω và 3 Ω mắc song song nhau. Điện trở tương đương của đoạn mạch bằng bao nhiêu Ω?',n:2,t:0,u:'Ω',w:'R_ss = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.'},
    {d:2,q:'Nếu tăng chiều dài dây dẫn lên gấp đôi (giữ nguyên chất liệu và tiết diện) thì điện trở của dây thay đổi thế nào?',o:['Tăng lên gấp đôi','Giảm đi một nửa','Không thay đổi','Tăng lên gấp bốn'],w:'R tỉ lệ thuận với chiều dài l của dây.'}
  ]},

{ id:'l9-nang-luong-dien', grade:9, order:5, term:'HK1', stage:2, chapCode:'Chương III', chapTitle:'Điện', sgk:'Bài 13', subj:'ly',
  title:'Năng lượng của dòng điện và công suất điện', prereq:['l9-dien-ohm','l9-nang-luong-co'],
  theory:[
    'Năng lượng của dòng điện (điện năng tiêu thụ) trên đoạn mạch bằng tích hiệu điện thế, cường độ dòng điện và thời gian dòng điện chạy qua: W = U · I · t (J). Với đoạn mạch thuần điện trở (bàn là, bếp điện): nhiệt lượng tỏa ra Q = I² · R · t.',
    'Công suất điện định mức cho biết tốc độ tiêu thụ điện năng khi dụng cụ hoạt động bình thường ở hiệu điện thế định mức: P = W / t = U · I = I² · R = U² / R (W).',
    'Công tơ điện gia đình đo điện năng theo đơn vị kilôoát giờ (kW·h, còn gọi là "số điện"): 1 kW·h = 1000 W × 3600 s = 3 600 000 J = 3,6 MJ.'
  ],
  formulas:[
    'Công suất điện tiêu thụ: P = U · I = I² · R = \\frac{U²}{R} || Trong đó: P là công suất điện (W); U là hiệu điện thế (V); I là cường độ dòng điện (A); R là điện trở (Ω).',
    'Năng lượng của dòng điện (điện năng tiêu thụ): W = P · t = U · I · t || Nếu P (kW) và t (giờ) thì W ra số điện (kW·h); quy đổi: 1 kW·h = 3 600 000 J.'
  ],
  questions:[
    {d:2,q:'Bóng đèn hoạt động ở hiệu điện thế 220 V với dòng điện 0,5 A. Công suất tiêu thụ của đèn là bao nhiêu W?',n:110,t:0,u:'W',w:'P = U · I = 220 × 0,5 = 110 W.'},
    {d:2,q:'Bếp điện công suất 1000 W (1 kW) sử dụng liên tục trong 3 giờ tiêu thụ bao nhiêu số điện (kW·h)?',n:3,t:0,u:'kW·h',w:'W = 1 kW × 3 h = 3 kW·h.'},
    {d:2,q:'Giả sử giá điện là 2000 đồng / 1 kW·h. Tiêu thụ 3 kW·h điện phải trả bao nhiêu đồng?',n:6000,t:0,u:'đồng',w:'3 × 2000 = 6000 đồng.'}
  ]},

{ id:'l9-cam-ung', grade:9, order:6, term:'HK1', stage:2, chapCode:'Chương IV', chapTitle:'Điện từ', sgk:'Bài 14–15', subj:'ly',
  title:'Cảm ứng điện từ & Dòng điện xoay chiều', prereq:['l7-tu','l9-dien-ohm'],
  theory:[
    'Hiện tượng cảm ứng điện từ: Khi số đường sức từ xuyên qua tiết diện của cuộn dây dẫn kín biến thiên (tăng hoặc giảm) thì trong cuộn dây xuất hiện dòng điện cảm ứng.',
    'Nguyên tắc tạo ra dòng điện xoay chiều: cho khung dây dẫn kín quay đều trong từ trường của nam châm (hoặc cho nam châm quay trước cuộn dây) làm số đường sức từ xuyên qua khung dây luân phiên tăng giảm → sinh ra dòng điện xoay chiều (chiều và cường độ biến đổi tuần hoàn; lưới điện Việt Nam: 220 V – 50 Hz).',
    'Dòng điện xoay chiều có các tác dụng: nhiệt (bếp hồng ngoại, bàn là), phát sáng (đèn LED, đèn huỳnh quang), từ (động cơ điện, quạt điện, nam châm điện xoay chiều hút – nhả chu kì) và tác dụng sinh lí (gây điện giật nguy hiểm, cần tuân thủ an toàn điện). Máy biến áp dùng cảm ứng điện từ để tăng/hạ điện áp xoay chiều.'
  ],
  formulas:[
    'Điều kiện xuất hiện dòng điện cảm ứng: Số đường sức từ xuyên qua tiết diện cuộn dây kín phải BIẾN THIÊN (tăng hoặc giảm)',
    'Hệ thức máy biến áp xoay chiều: \\frac{U₁}{U₂} = \\frac{N₁}{N₂} || Trong đó: U₁, U₂ là điện áp sơ cấp và thứ cấp (V); N₁, N₂ là số vòng dây (truyền tải điện đi xa tăng U cao để giảm hao phí tỏa nhiệt trên đường dây).'
  ],
  questions:[
    {d:1,q:'Điều kiện bắt buộc để xuất hiện dòng điện cảm ứng trong một cuộn dây dẫn kín là gì?',o:['Số đường sức từ xuyên qua tiết diện cuộn dây biến thiên (tăng hoặc giảm)','Chỉ cần đặt một thanh nam châm đứng yên cạnh cuộn dây đứng yên','Cuộn dây phải làm bằng nhựa cách điện','Phải nối cuộn dây vào pin một chiều'],w:'Phải có sự biến thiên số đường sức từ xuyên qua tiết diện cuộn dây.'},
    {d:2,q:'Một máy biến áp có N₁ = 1000 vòng, N₂ = 50 vòng, nối cuộn sơ cấp vào điện áp xoay chiều U₁ = 220 V. Điện áp U₂ lấy ra ở cuộn thứ cấp là bao nhiêu V?',n:11,t:0,u:'V',w:'U₂ = 220 × 50 / 1000 = 11 V.'},
    {d:2,q:'Vì sao khi truyền tải điện năng đi xa trên đường dây cao thế người ta phải dùng máy tăng áp để nâng hiệu điện thế lên rất cao?',o:['Để giảm cường độ dòng điện trên dây, từ đó giảm mạnh điện năng hao phí do tỏa nhiệt','Để làm tăng điện trở của đường dây','Để làm dòng điện xoay chiều biến thành một chiều','Để người dân cắm trực tiếp quạt vào đường dây cao thế'],w:'Công suất hao phí tỉ lệ với I²·R; tăng U giúp giảm I nên giảm hao phí.'}
  ]},

{ id:'l9-nang-luong-song', grade:9, order:7, term:'HK1', stage:2, chapCode:'Chương V', chapTitle:'Năng lượng với cuộc sống', sgk:'Bài 16–17', subj:'td',
  title:'Vòng năng lượng trên Trái Đất, Năng lượng hóa thạch & tái tạo', prereq:['l6-nang-luong'],
  theory:[
    'Mặt Trời là nguồn cung cấp năng lượng chủ yếu cho sự sống và các vòng tuần hoàn năng lượng trên Trái Đất: quang năng chuyển thành hóa năng qua quang hợp (thực vật → chuỗi thức ăn), làm bốc hơi nước tạo vòng tuần hoàn nước (thủy điện) và chênh lệch nhiệt độ tạo gió (điện gió).',
    'Năng lượng hóa thạch (than đá, dầu mỏ, khí thiên nhiên) hình thành từ xác sinh vật chôn vùi hàng trăm triệu năm. Ưu điểm: sẵn công nghệ khai thác, mật độ năng lượng cao, dễ vận chuyển; Nhược điểm: trữ lượng hữu hạn sẽ cạn kiệt, khi đốt phát thải nhiều khí nhà kính CO₂ và khí gây mưa acid (SO₂, NOₓ).',
    'Các dạng năng lượng tái tạo sạch cần ưu tiên phát triển: năng lượng Mặt Trời (pin quang điện, máy nước nóng mặt trời), năng lượng gió (tua-bin gió), năng lượng nước (thủy điện, sóng biển, thủy triều), năng lượng địa nhiệt và năng lượng sinh khối (ethanol sinh học, biogas).'
  ],
  formulas:[
    'Vòng chuyển hóa năng lượng từ Mặt Trời: Quang năng Mặt Trời → Hóa năng (quang hợp) / Cơ năng (gió, vòng tuần hoàn nước) → Điện năng',
    'Chuyển dịch năng lượng xanh: Giảm dần nhiên liệu hóa thạch (than, dầu, khí) → Tăng năng lượng tái tạo (Mặt Trời, gió, sinh khối) giảm phát thải CO₂'
  ],
  questions:[
    {d:1,q:'Nguồn năng lượng khởi đầu chủ yếu duy trì vòng tuần hoàn nước và sự sống trên Trái Đất đến từ đâu?',o:['Năng lượng bức xạ từ Mặt Trời','Ánh sáng phản xạ từ Mặt Trăng','Đèn chiếu sáng đường phố','Từ trường của la bàn'],w:'Ánh sáng và nhiệt từ Mặt Trời giúp thực vật quang hợp, làm bay hơi nước tạo mưa và tạo gió.'},
    {d:1,q:'Nhược điểm lớn nhất của việc đốt nhiều nhiên liệu hóa thạch (than đá, dầu mỏ) là gì?',o:['Nguồn dự trữ có hạn sẽ cạn kiệt và thải lượng lớn khí nhà kính CO₂ gây biến đổi khí hậu','Không tỏa ra nhiệt lượng khi cháy','Tự động tái tạo lại chỉ sau 1 tuần','Làm giảm nhiệt độ Trái Đất xuống đóng băng'],w:'Nhiên liệu hóa thạch không tái tạo và phát thải nhiều khí gây hiệu ứng nhà kính, ô nhiễm không khí.'},
    {d:2,q:'Tấm pin mặt trời (pin quang điện) lắp trên mái nhà chuyển hóa trực tiếp dạng năng lượng nào thành điện năng?',o:['Quang năng (năng lượng ánh sáng Mặt Trời) thành điện năng','Hóa năng của than đá thành điện năng','Năng lượng âm thanh thành điện năng','Thế năng đàn hồi thành điện năng'],w:'Tế bào quang điện biến đổi trực tiếp ánh sáng Mặt Trời thành dòng điện.'},
    {d:3,q:'Xăng sinh học E5 (pha 95% xăng khoáng với 5% ethanol sinh học sản xuất từ sắn, ngô) có lợi ích môi trường nào?',o:['Bổ sung nguồn nhiên liệu sinh khối tái tạo và giảm phát thải khí độc hại so với xăng khoáng thuần túy','Làm xe chạy không cần động cơ','Biến khí thải hoàn toàn thành vàng','Không cần khí oxygen khi cháy'],w:'Ethanol từ thực vật thuộc nguồn năng lượng sinh khối tái tạo, cháy sạch hơn.'}
  ]},

{ id:'l9-kim-loai', grade:9, order:8, term:'HK1', stage:2, chapCode:'Chương VI', chapTitle:'Kim loại. Sự khác nhau cơ bản giữa phi kim và kim loại', sgk:'Bài 18–20', subj:'hoa',
  title:'Tính chất kim loại, Dãy hoạt động hóa học & Hợp kim', prereq:['l8-acid-base'],
  theory:[
    'Tính chất vật lí chung của kim loại (do các electron tự do gây ra): tính dẻo (dát mỏng, kéo sợi: Au dẻo nhất), dẫn điện (Ag > Cu > Au > Al > Fe), dẫn nhiệt và có ánh kim.',
    'Tính chất hóa học chung: tác dụng với phi kim (O₂ tạo oxide như 3Fe + 2O₂ → Fe₃O₄; Cl₂ tạo muối chloride như 2Fe + 3Cl₂ → 2FeCl₃), tác dụng với nước (K, Na, Ca ở nhiệt độ thường tạo kiềm + H₂↑), tác dụng dung dịch acid loãng và dung dịch muối.',
    'Dãy hoạt động hóa học của kim loại: K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au. Ý nghĩa: mức độ hoạt động giảm dần từ trái sang phải; kim loại trước H đẩy được H₂ khỏi HCl/H₂SO₄ loãng; kim loại đứng trước (từ Mg trở đi) đẩy kim loại đứng sau ra khỏi dung dịch muối.',
    'Tách kim loại từ quặng: điện phân nóng chảy cho kim loại mạnh (Al từ Al₂O₃); nhiệt luyện dùng CO, C, H₂ khử oxide kim loại trung bình/yếu ở nhiệt độ cao (luyện Fe từ Fe₂O₃); thủy luyện cho kim loại yếu. Hợp kim (gang chứa 2–5% C; thép chứa < 2% C; inox, duralumin) bền, cứng và chống ăn mòn ưu việt hơn kim loại nguyên chất.'
  ],
  formulas:[
    'Dãy hoạt động hóa học giảm dần: K · Na · Ca · Mg · Al · Zn · Fe · Pb · (H) · Cu · Ag · Au || Lưu ý: Chỉ các kim loại đứng trước H mới tác dụng HCl, H₂SO₄ loãng giải phóng H₂↑.',
    'Kim loại mạnh (từ Mg trở đi) đẩy kim loại yếu khỏi muối: Fe + CuSO₄ → FeSO₄ + Cu↓  ;  Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag↓',
    'Phương pháp tách kim loại chính: Al₂O₃ —(đpnc, cryolite)→ Al + O₂  ;  Fe₂O₃ + 3CO —(t° cao)→ 2Fe + 3CO₂'
  ],
  questions:[
    {d:1,q:'Kim loại nào sau đây đẩy được đồng (Cu) ra khỏi dung dịch muối CuSO₄?',o:['Sắt (Fe)','Bạc (Ag)','Vàng (Au)','Đồng (Cu)'],w:'Fe đứng trước Cu trong dãy hoạt động hóa học nên đẩy được Cu ra khỏi muối.'},
    {d:1,q:'Kim loại nào sau đây KHÔNG phản ứng với dung dịch HCl loãng?',o:['Đồng (Cu)','Kẽm (Zn)','Magnesium (Mg)','Sắt (Fe)'],w:'Cu đứng sau H nên không tác dụng với HCl loãng.'},
    {d:3,q:'Cho 11,2 g Fe (M = 56) tác dụng hết với dung dịch HCl dư. Thể tích khí H₂ thu được ở 25 °C, 1 bar là bao nhiêu lít? (làm tròn 2 chữ số thập phân)',n:4.96,t:0.03,u:'L',w:'n(Fe) = 0,2 mol → n(H₂) = 0,2 mol → V = 0,2 × 24,79 = 4,958 L ≈ 4,96 L.'}
  ]},

{ id:'l9-phi-kim', grade:9, order:9, term:'HK1', stage:2, chapCode:'Chương VI', chapTitle:'Kim loại. Sự khác nhau cơ bản giữa phi kim và kim loại', sgk:'Bài 21', subj:'hoa',
  title:'Sự khác nhau cơ bản giữa phi kim và kim loại (Carbon, Chlorine…)', prereq:['l9-kim-loai'],
  theory:[
    'Các phi kim phổ biến và ứng dụng: Carbon (kim cương làm mũi khoan/trang sức, than chì làm điện cực/ruột bút chì, than hoạt tính hấp phụ khử mùi lọc nước), Sulfur (lưu huỳnh lưu hóa cao su, sản xuất H₂SO₄), Chlorine (Cl₂ khử trùng nước sinh hoạt, sản xuất nhựa PVC, nước Javel).',
    'Sự khác nhau về tính chất vật lí: Kim loại dẫn điện, dẫn nhiệt tốt, có ánh kim, dẻo, nhiệt độ nóng chảy/khối lượng riêng thường cao; còn Phi kim thường KHÔNG dẫn điện (trừ than chì), dẫn nhiệt kém, không có ánh kim, có thể ở thể khí (O₂, Cl₂, N₂), lỏng (Br₂) hoặc rắn giòn (C, S, P).',
    'Sự khác nhau về tính chất hóa học: Trong phản ứng, nguyên tử kim loại có xu hướng nhường electron tạo ion dương, tác dụng O₂ thường tạo OXIDE BASE (Na₂O, CaO, MgO); còn nguyên tử phi kim có xu hướng nhận hoặc góp chung electron, tác dụng O₂ thường tạo OXIDE ACID (CO₂, SO₂, P₂O₅).'
  ],
  formulas:[
    'So sánh sản phẩm đốt trong O₂: Kim loại + O₂ → thường tạo Oxide base (CaO, CuO)  |  Phi kim + O₂ → thường tạo Oxide acid (CO₂, SO₂, P₂O₅)',
    'Phản ứng đặc trưng của Carbon & Chlorine: CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O  ;  2Fe + 3Cl₂ —(t°)→ 2FeCl₃'
  ],
  questions:[
    {d:1,q:'Dùng dung dịch nào sau đây để nhận biết khí CO₂ (sinh ra từ sự đốt cháy carbon)?',o:['Dung dịch nước vôi trong Ca(OH)₂ (bị vẩn đục trắng)','Giấy quỳ tím khô','Dung dịch muối ăn NaCl','Que đóm còn tàn đỏ'],w:'CO₂ là oxide acid tác dụng Ca(OH)₂ tạo kết tủa trắng CaCO₃.'},
    {d:1,q:'Kim cương, than chì và fullerene đều tạo nên từ nguyên tố carbon, chúng được gọi là gì?',o:['Các dạng thù hình của nguyên tố carbon','Các hợp chất hữu cơ khác nhau','Các hỗn hợp kim loại','Các đồng vị của sắt'],w:'Đơn chất khác nhau do cùng một nguyên tố tạo nên là các dạng thù hình.'},
    {d:2,q:'Đốt dây sắt nóng đỏ trong bình khí chlorine (Cl₂) tạo thành sản phẩm muối nào?',o:['Iron(III) chloride (FeCl₃)','Iron(II) chloride (FeCl₂)','Iron(II) oxide (FeO)','Không phản ứng'],w:'Cl₂ là phi kim mạnh oxi hóa Fe lên hóa trị III: 2Fe + 3Cl₂ → 2FeCl₃.'}
  ]},

{ id:'l9-huu-co', grade:9, order:10, term:'HK1', stage:2, chapCode:'Chương VII', chapTitle:'Giới thiệu về chất hữu cơ. Hydrocarbon và nguồn nhiên liệu', sgk:'Bài 22–25', subj:'hoa',
  title:'Hợp chất hữu cơ, Alkane (Methane), Alkene (Ethylene) & Nhiên liệu', prereq:['l9-phi-kim'],
  theory:[
    'Hợp chất hữu cơ là hợp chất của carbon (trừ CO, CO₂, H₂CO₃, muối carbonate, cyanide, carbide…). Trong hợp chất hữu cơ, carbon luôn có hóa trị IV. Chia làm 2 nhóm lớn: Hydrocarbon (chỉ chứa C và H: CH₄, C₂H₄, C₄H₁₀) và Dẫn xuất của hydrocarbon (chứa thêm O, N, Cl… như C₂H₅OH, CH₃COOH, CH₃Cl).',
    'Alkane (hydrocarbon mạch hở chỉ có liên kết đơn C–C, C–H; công thức chung CₙH₂ₙ₊₂ với n ≥ 1): tiêu biểu là Methane (CH₄ – khí thiên nhiên, biogas) và Butane (C₄H₁₀ – gas bật lửa). Các alkane cháy tỏa nhiều nhiệt: CH₄ + 2O₂ → CO₂ + 2H₂O.',
    'Alkene (hydrocarbon mạch hở có 1 liên kết đôi C=C; công thức chung CₙH₂ₙ với n ≥ 2): tiêu biểu là Ethylene (CH₂=CH₂ hay C₂H₄ – chất khí kích thích quả mau chín). Nhờ liên kết đôi C=C, ethylene làm MẤT MÀU dung dịch nước bromine (phản ứng cộng: C₂H₄ + Br₂ → C₂H₄Br₂) và tham gia trùng hợp tạo nhựa PE.',
    'Nguồn nhiên liệu tự nhiên: Dầu mỏ (không có nhiệt độ sôi xác định, chưng cất phân đoạn thu xăng, dầu hỏa, diesel, mazut, nhựa đường), Khí thiên nhiên & Khí mỏ dầu (giàu CH₄, sạch hơn than đá). Đám cháy xăng dầu KHÔNG dập bằng nước (vì xăng nhẹ hơn nổi lên cháy lan) mà phải dùng bình bột/CO₂ hoặc cát, chăn ướt.'
  ],
  formulas:[
    'Công thức dãy đồng đẳng mạch hở: Alkane CₙH₂ₙ₊₂ (n ≥ 1, chỉ liên kết đơn)  |  Alkene CₙH₂ₙ (n ≥ 2, có 1 liên kết đôi C=C)',
    'Phản ứng cháy của Methane: CH₄ + 2O₂ —(t°)→ CO₂ + 2H₂O',
    'Phản ứng nhận biết Ethylene (làm mất màu dung dịch Br₂ da cam): CH₂=CH₂ + Br₂ → BrCH₂–CH₂Br'
  ],
  questions:[
    {d:1,q:'Chất nào sau đây là HỢP CHẤT HỮU CƠ?',o:['Methane (CH₄)','Carbon dioxide (CO₂)','Calcium carbonate (CaCO₃)','Carbon monoxide (CO)'],w:'CH₄ là hydrocarbon hữu cơ; CO, CO₂ và muối carbonate là hợp chất vô cơ.'},
    {d:1,q:'Dẫn khí nào sau đây qua dung dịch nước bromine (màu da cam) thì thấy dung dịch bị MẤT MÀU?',o:['Ethylene (C₂H₄)','Methane (CH₄)','Ethane (C₂H₆)','Nitrogen (N₂)'],w:'Ethylene có liên kết đôi C=C tham gia phản ứng cộng với Br₂ làm mất màu dung dịch bromine.'},
    {d:2,q:'Đốt cháy hoàn toàn 1 mol khí methane (CH₄) thu được bao nhiêu mol khí CO₂?',n:1,t:0,u:'mol',w:'CH₄ + 2O₂ → CO₂ + 2H₂O ⇒ tỉ lệ 1 : 1.'},
    {d:2,q:'Vì sao khi xăng dầu bốc cháy, tuyệt đối KHÔNG dùng nước để tạt dập lửa?',o:['Vì xăng dầu không tan và nhẹ hơn nước nên nổi lên trên mặt nước khiến đám cháy lan rộng hơn','Vì nước tự bốc cháy thành xăng','Vì xăng dầu nặng gấp đôi nước','Vì nước biến xăng thành kim loại'],w:'Phải dùng bình chữa cháy bột/khí CO₂, cát hoặc chăn thấm nước chụp kín ngăn O₂.'}
  ]},

{ id:'l9-ancol-axit', grade:9, order:11, term:'HK2', stage:3, chapCode:'Chương VIII', chapTitle:'Ethylic alcohol và Acetic acid', sgk:'Bài 26–27', subj:'hoa',
  title:'Ethylic alcohol (C₂H₅OH) và Acetic acid (CH₃COOH)', prereq:['l9-huu-co'],
  theory:[
    'Ethylic alcohol (ethanol, công thức C₂H₅OH hay CH₃–CH₂–OH, M = 46) là chất lỏng không màu, sôi ở 78,3 °C, nhẹ hơn nước (D ≈ 0,8 g/mL) và tan vô hạn trong nước. Độ cồn là số mL ethylic alcohol nguyên chất có trong 100 mL dung dịch. Có nhóm –OH nên tác dụng với Na giải phóng H₂ (2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑) và cháy tỏa nhiều nhiệt. Điều chế từ tinh bột/đường lên men hoặc cộng nước vào ethylene. Lạm dụng rượu bia gây hại gan, thần kinh và vi phạm an toàn giao thông.',
    'Acetic acid (CH₃COOH, M = 60) là chất lỏng không màu, vị chua, tan vô hạn trong nước (dung dịch 2% – 5% dùng làm giấm ăn). Nhóm carboxyl (–COOH) quyết định tính acid yếu đầy đủ: làm quỳ tím hóa đỏ, tác dụng kim loại trước H, oxide base, base và muối carbonate (sủi bọt khí CO₂: 2CH₃COOH + CaCO₃ → (CH₃COO)₂Ca + CO₂↑ + H₂O – dùng giấm tẩy cặn ấm đun nước).',
    'Phản ứng ester hóa: Đun nóng ethylic alcohol với acetic acid có H₂SO₄ đặc làm xúc tác thu được ethyl acetate có mùi thơm dễ chịu: CH₃COOH + C₂H₅OH ⇄ CH₃COOC₂H₅ + H₂O (thuận nghịch). Điều chế giấm bằng cách lên men giấm dung dịch rượu nhạt: C₂H₅OH + O₂ —(men giấm)→ CH₃COOH + H₂O.'
  ],
  formulas:[
    'Công thức tính độ cồn (độ rượu): Độ cồn = \\frac{V_(C₂H₅OH nguyên chất)}{V_(dung dịch rượu)} × 100° || Ví dụ: Cồn y tế 70° nghĩa là trong 100 mL cồn có 70 mL C₂H₅OH nguyên chất.',
    'Phản ứng thế H linh động của nhóm –OH với Sodium: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑',
    'Phản ứng của Acetic acid với đá vôi / cặn ấm: 2CH₃COOH + CaCO₃ → (CH₃COO)₂Ca + CO₂↑ + H₂O',
    'Phản ứng ester hóa (tạo mùi thơm ethyl acetate): CH₃COOH + C₂H₅OH ⇄ CH₃COOC₂H₅ + H₂O  (xúc tác H₂SO₄ đặc, t°)'
  ],
  questions:[
    {d:1,q:'Dung dịch acetic acid (CH₃COOH) có nồng độ từ 2% đến 5% được sử dụng phổ biến trong gia đình làm gì?',o:['Giấm ăn','Cồn sát khuẩn vết thương','Xăng chạy xe máy','Nước vôi quét tường'],w:'Dung dịch CH₃COOH 2–5% có vị chua dịu chính là giấm ăn.'},
    {d:1,q:'Nhỏ dung dịch acetic acid (CH₃COOH) lên mẩu giấy quỳ tím thì quỳ tím chuyển sang màu gì?',o:['Màu đỏ (hồng đỏ)','Màu xanh lam','Màu vàng','Không đổi màu'],w:'CH₃COOH có nhóm –COOH mang tính acid nên làm quỳ tím hóa đỏ.'},
    {d:2,q:'Chất nào sau đây vừa tác dụng được với kim loại Na vừa tác dụng được với đá vôi CaCO₃ sủi bọt khí?',o:['Acetic acid (CH₃COOH)','Ethylic alcohol (C₂H₅OH)','Methane (CH₄)','Ethylene (C₂H₄)'],w:'C₂H₅OH chỉ tác dụng Na (không tác dụng CaCO₃); còn CH₃COOH là acid nên tác dụng cả Na và CaCO₃.'},
    {d:2,q:'Trong 200 mL cồn sát khuẩn 70° có chứa bao nhiêu mL ethylic alcohol nguyên chất?',n:140,t:0.1,u:'mL',w:'V(C₂H₅OH) = 200 × 70 / 100 = 140 mL.'},
    {d:3,q:'Đun nóng hỗn hợp acetic acid và ethylic alcohol có H₂SO₄ đặc làm xúc tác tạo ra hợp chất hữu cơ có mùi thơm gọi là gì?',o:['Ethyl acetate (CH₃COOC₂H₅)','Sodium acetate (CH₃COONa)','Khí ethylene (C₂H₄)','Tinh bột'],w:'Phản ứng ester hóa tạo ester ethyl acetate CH₃COOC₂H₅ ít tan và có mùi thơm.'},
    {d:3,q:'Cho 0,2 mol CH₃COOH phản ứng hoàn toàn với lượng dư bột NaHCO₃ (CH₃COOH + NaHCO₃ → CH₃COONa + CO₂↑ + H₂O). Thể tích khí CO₂ thoát ra ở 25 °C, 1 bar là bao nhiêu lít? (làm tròn 2 chữ số thập phân)',n:4.96,t:0.03,u:'L',w:'n(CO₂) = n(CH₃COOH) = 0,2 mol ⇒ V = 0,2 × 24,79 = 4,958 L ≈ 4,96 L.'}
  ]},

{ id:'l9-lipid-carb', grade:9, order:12, term:'HK2', stage:3, chapCode:'Chương IX', chapTitle:'Lipid. Carbohydrate. Protein. Polymer', sgk:'Bài 28–32', subj:'hoa',
  title:'Lipid, Glucose, Saccharose, Tinh bột, Cellulose, Protein & Polymer', prereq:['l9-ancol-axit'],
  theory:[
    'Lipid: chất béo (dầu thực vật lỏng, mỡ động vật rắn) là triester của glycerol C₃H₅(OH)₃ với các acid béo; nhẹ hơn nước, không tan trong nước. Đun chất béo với dung dịch kiềm (NaOH, KOH) tạo glycerol và muối của acid béo dùng làm xà phòng (phản ứng xà phòng hóa).',
    'Glucose (C₆H₁₂O₆, M = 180 – đường nho, có ~0,1% trong máu người) tham gia phản ứng tráng bạc (tác dụng AgNO₃/NH₃ đun nhẹ tạo lớp bạc Ag sáng bóng) và lên men rượu tạo C₂H₅OH + CO₂. Saccharose (C₁₂H₂₂O₁₁, M = 342 – đường mía) thủy phân trong môi trường acid/enzyme tạo glucose + fructose.',
    'Tinh bột và Cellulose đều là polymer thiên nhiên có công thức chung (C₆H₁₀O₅)ₙ nhưng cấu trúc khác nhau: Hồ tinh bột gặp dung dịch Iodine (I₂) tạo màu XANH TÍM đặc trưng; Cellulose là thành phần chính tạo sợi bông, gỗ, tre (dùng dệt vải, sản xuất giấy). Cả hai thủy phân đến cùng đều tạo glucose.',
    'Protein gồm các đơn phân amino acid liên kết bằng liên kết peptide; bị ĐÔNG TỤ khi đun nóng hoặc gặp acid/kiềm/muối kim loại nặng (luộc trứng, nấu riêu cua) và khi đốt có mùi khét như tóc cháy (phân biệt tơ tằm với tơ tổng hợp). Polymer tổng hợp gồm Chất dẻo (PE, PP, PVC), Tơ (nylon-6,6) và Cao su; cần hạn chế rác thải nhựa khó phân hủy.'
  ],
  formulas:[
    'Phản ứng lên men rượu của Glucose: C₆H₁₂O₆ —(enzyme, 30–35 °C)→ 2C₂H₅OH + 2CO₂↑',
    'Nhận biết nhanh các chất hữu cơ: Glucose → Tráng bạc (Ag↓)  |  Tinh bột + I₂ → Màu xanh tím  |  Protein đun nóng → Đông tụ (đốt có mùi khét)',
    'Phản ứng trùng hợp tạo nhựa Polyethylene (PE): n CH₂=CH₂ —(t°, p, xt)→ (–CH₂–CH₂–)ₙ'
  ],
  questions:[
    {d:1,q:'Xà phòng được sản xuất công nghiệp từ phản ứng hóa học nào sau đây?',o:['Thủy phân chất béo trong dung dịch kiềm đun nóng (phản ứng xà phòng hóa)','Đốt cháy hoàn toàn chất béo','Cô cạn nước biển','Trùng hợp khí ethylene'],w:'Chất béo + NaOH (t°) → Glycerol + Muối sodium của acid béo (xà phòng).'},
    {d:1,q:'Nhựa Polyethylene (PE) được tổng hợp trực tiếp từ phản ứng trùng hợp monomer nào?',o:['Ethylene (CH₂=CH₂)','Methane (CH₄)','Glucose (C₆H₁₂O₆)','Acetic acid (CH₃COOH)'],w:'Trùng hợp các phân tử ethylene tạo thành polymer PE.'},
    {d:1,q:'Khi đun nóng lòng trắng trứng gà hoặc nấu nước cua đồng thấy xuất hiện mảng kết tủa nổi lên là hiện tượng của chất nào?',o:['Sự đông tụ của protein dưới tác dụng của nhiệt','Sự bay hơi của tinh bột','Sự nóng chảy của cellulose','Phản ứng tráng bạc của glucose'],w:'Protein bị đông tụ khi gặp nhiệt độ cao.'}
  ]},

{ id:'l9-tai-nguyen', grade:9, order:13, term:'HK2', stage:3, chapCode:'Chương X', chapTitle:'Khai thác tài nguyên từ vỏ Trái Đất', sgk:'Bài 33–35', subj:'td',
  title:'Hóa học vỏ Trái Đất, Đá vôi – Silicate & Chu trình Carbon', prereq:['l9-phi-kim','l9-nang-luong-song'],
  theory:[
    'Thành phần nguyên tố phổ biến nhất trong vỏ Trái Đất theo khối lượng: Oxygen (~46,6%), Silicon (~27,7%), Aluminium (~8,1%), Iron (~5,0%), Calcium… Các khoáng vật, quặng tồn tại chủ yếu ở dạng hợp chất oxide, muối silicate, muối carbonate, muối sulfide.',
    'Khai thác đá vôi (thành phần chính CaCO₃): dùng làm vật liệu xây dựng, sản xuất vôi sống (CaCO₃ —t°→ CaO + CO₂) và xi măng. Công nghiệp silicate từ cát thạch anh (SiO₂) và đất sét dùng sản xuất gốm sứ, thủy tinh và xi măng.',
    'Chu trình Carbon trong tự nhiên luân chuyển carbon giữa khí quyển (CO₂), sinh quyển (quang hợp hấp thụ CO₂, hô hấp trả CO₂), thủy quyển và thạch quyển (đá vôi, nhiên liệu hóa thạch).',
    'Sự ấm lên toàn cầu: Khai thác, đốt quá mức nhiên liệu hóa thạch (than, dầu, khí) và chặt phá rừng làm nồng độ khí nhà kính (CO₂, CH₄) tăng nhanh → Trái Đất nóng lên, băng tan, nước biển dâng, thời tiết cực đoan. Cần tiết kiệm tài nguyên, tái chế và hướng tới phát thải ròng bằng "0" (Net Zero).'
  ],
  formulas:[
    '2 nguyên tố chiếm khối lượng nhiều nhất trong vỏ Trái Đất: Oxygen (~46,6%) đứng thứ nhất · Silicon (~27,7%) đứng thứ hai',
    'Phản ứng nung vôi công nghiệp: CaCO₃ —(900–1000 °C)→ CaO + CO₂↑'
  ],
  questions:[
    {d:1,q:'Khí nào là khí nhà kính chủ yếu phát sinh từ việc đốt nhiên liệu hóa thạch gây hiện tượng ấm lên toàn cầu?',o:['Carbon dioxide (CO₂)','Nitrogen (N₂)','Oxygen (O₂)','Argon (Ar)'],w:'Đốt than đá, xăng dầu thải hàng chục tỉ tấn CO₂ mỗi năm làm tăng hiệu ứng nhà kính.'},
    {d:1,q:'Nguyên tố hóa học nào chiếm tỉ lệ khối lượng LỚN NHẤT trong vỏ Trái Đất?',o:['Oxygen (~46,6%), tiếp đến là Silicon (~27,7%)','Sắt (Iron)','Vàng (Gold)','Hydrogen'],w:'Oxygen và Silicon là hai nguyên tố dồi dào nhất trong vỏ Trái Đất.'},
    {d:2,q:'Ngành công nghiệp sản xuất thủy tinh, đồ gốm sứ và xi măng được gọi chung là ngành công nghiệp gì?',o:['Công nghiệp silicate','Công nghiệp lên men thực phẩm','Công nghiệp dệt nhuộm','Công nghiệp luyện nhôm'],w:'Đều dựa trên nguyên liệu chứa hợp chất của silicon (cát thạch anh SiO₂, đất sét).'},
    {d:3,q:'Nung hoàn toàn 200 kg đá vôi nguyên chất CaCO₃ (M = 100) theo phản ứng CaCO₃ —(t°)→ CaO + CO₂↑. Khối lượng vôi sống CaO (M = 56) thu được là bao nhiêu kg?',n:112,t:0.5,u:'kg',w:'Theo tỉ lệ khối lượng 100 : 56 ⇒ m(CaO) = 200 × 56 / 100 = 112 kg.'}
  ]},

{ id:'l9-di-truyen', grade:9, order:14, term:'HK2', stage:3, chapCode:'Chương XI', chapTitle:'Di truyền học Mendel. Cơ sở phân tử của hiện tượng di truyền', sgk:'Bài 36–41', subj:'sinh',
  title:'Quy luật Mendel, Nucleic acid (DNA, RNA), Gene & Đột biến gene', prereq:['l6-te-bao','l7-cam-ung-sinh-san'],
  theory:[
    'Di truyền là sự truyền đạt tính trạng của bố mẹ cho con cái; biến dị là hiện tượng con sinh ra có đặc điểm khác bố mẹ và khác nhau. Mendel dùng đối tượng đậu Hà Lan tự thụ phấn nghiêm ngặt: Quy luật phân li (lai 1 cặp tính trạng thuần chủng AA × aa → F₁ đồng tính Aa; F₂ phân li kiểu gene 1AA : 2Aa : 1aa, kiểu hình 3 trội : 1 lặn) và Quy luật phân li độc lập (AaBb × AaBb → tỉ lệ kiểu hình F₂ là 9 : 3 : 3 : 1).',
    'Nucleic acid gồm DNA và RNA. DNA cấu tạo theo mô hình xoắn kép 2 mạch ngược chiều từ 4 loại đơn phân nucleotide A, T, G, C liên kết theo Nguyên tắc bổ sung (NTBS): A = T (2 liên kết H), G ≡ C (3 liên kết H) ⇒ tổng số nucleotide N = 2A + 2G. Gene là một đoạn của phân tử DNA mang thông tin mã hóa một chuỗi polypeptide hoặc một phân tử RNA.',
    'Cơ chế truyền thông tin di truyền ở cấp phân tử: (1) Tái bản DNA (nhân đôi theo NTBS và bán bảo toàn: 1 DNA mẹ → 2 DNA con giống hệt nhau); (2) Phiên mã tổng hợp RNA từ mạch khuôn DNA (A_gốc – U, T_gốc – A, G_gốc – C, C_gốc – G); (3) Dịch mã tại ribosome tổng hợp chuỗi polypeptide (mỗi bộ ba codon trên mRNA mã hóa 1 amino acid) → quy định tính trạng.',
    'Đột biến gene là những biến đổi trong cấu trúc của gene liên quan tới một hoặc một số cặp nucleotide (mất, thêm, thay thế cặp nucleotide) – tạo allele mới cung cấp nguyên liệu sơ cấp cho tiến hóa và chọn giống.'
  ],
  formulas:[
    'Nguyên tắc bổ sung trên DNA mạch kép: A = T  ;  G = C  ⇒  Tổng số nucleotide: N = 2A + 2G  (hay %A + %G = 50%) || Chiều dài đoạn DNA: L = \\frac{N}{2} × 3,4 (Å), với 1 nm = 10 Å.',
    'Phép lai Mendel 1 cặp tính trạng trội hoàn toàn: Aa × Aa → Kiểu gene 1AA : 2Aa : 1aa  ⇒  Kiểu hình 3 trội : 1 lặn',
    'Sơ đồ dòng thông tin di truyền trung tâm: DNA —(Phiên mã)→ mRNA —(Dịch mã tại Ribosome)→ Protein → Tính trạng'
  ],
  questions:[
    {d:1,q:'Ở phép lai Aa × Aa (biết allele A trội hoàn toàn so với a), tỉ lệ kiểu hình thu được ở đời con là bao nhiêu?',o:['3 trội : 1 lặn','1 trội : 1 lặn','100% kiểu hình trội','100% kiểu hình lặn'],w:'Kiểu gene 1AA : 2Aa : 1aa cho 3 trội (AA, Aa) và 1 lặn (aa).'},
    {d:1,q:'Gene được định nghĩa chính xác là gì?',o:['Một đoạn của phân tử DNA mang thông tin mã hóa một chuỗi polypeptide hay một phân tử RNA','Một loại phân tử đường đơn','Toàn bộ màng sinh chất của tế bào','Một giọt lipid dự trữ'],w:'Gene là đơn vị mang thông tin di truyền nằm trên DNA.'},
    {d:2,q:'Đơn phân cấu tạo nên phân tử RNA gồm 4 loại nucleotide nào?',o:['A, U, G, C (có Uracil thay cho Thymine)','A, T, G, C','Chỉ có A và T','Glucose và Fructose'],w:'RNA có cấu trúc 1 mạch gồm 4 loại ribonucleotide: A, U, G, C.'},
    {d:3,q:'Một gene có tổng số 3000 nucleotide, trong đó số nucleotide loại Adenine (A) là 600. Số nucleotide loại Guanine (G) của gene đó là bao nhiêu?',n:900,t:0,u:'nucleotide',w:'Theo N = 2A + 2G ⇒ 3000 = 2×600 + 2G ⇒ 2G = 1800 ⇒ G = 900.'}
  ]},

{ id:'l9-nhiem-sac-the', grade:9, order:15, term:'HK2', stage:4, chapCode:'Chương XII–XIII', chapTitle:'Di truyền nhiễm sắc thể & Di truyền học với con người', sgk:'Bài 42–48', subj:'sinh',
  title:'Nhiễm sắc thể, Nguyên phân – Giảm phân, Giới tính & Di truyền người', prereq:['l9-di-truyen'],
  theory:[
    'Nhiễm sắc thể (NST) là cấu trúc mang gene nằm trong nhân tế bào nhân thực (gồm DNA quấn quanh protein histone), nhìn rõ nhất ở kì giữa phân bào. Trong tế bào sinh dưỡng (soma), NST tồn tại thành từng cặp tương đồng (bộ lưỡng bội 2n; ở người 2n = 46 gồm 22 cặp NST thường + 1 cặp NST giới tính: nữ XX, nam XY). Giao tử (trứng, tinh trùng) có bộ đơn bội n (ở người n = 23).',
    'Nguyên phân giúp cơ thể đa bào lớn lên và tái tạo mô: từ 1 tế bào mẹ (2n) tạo ra 2 tế bào con có bộ NST giữ nguyên (2n). Giảm phân xảy ra ở tế bào sinh dục chín: gồm 2 lần phân bào liên tiếp nhưng NST chỉ nhân đôi 1 lần, từ 1 tế bào (2n) tạo 4 tế bào con có bộ NST giảm đi một nửa (n). Thụ tinh (n + n → 2n) khôi phục bộ NST đặc trưng của loài.',
    'Di truyền liên kết (Morgan nghiên cứu trên ruồi giấm): các gene nằm trên cùng 1 NST luôn phân li cùng nhau trong giảm phân tạo thành nhóm gene liên kết, hạn chế biến dị tổ hợp và đảm bảo sự di truyền bền vững của từng nhóm tính trạng tốt.',
    'Đột biến NST gồm đột biến cấu trúc (mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn) và đột biến số lượng (lệch bội, đa bội). Ở người: Hội chứng Down có 3 NST số 21 (2n + 1 = 47 NST); bệnh bạch tạng, câm điếc bẩm sinh do gene lặn; bệnh máu khó đông, mù màu do gene lặn trên NST X. Hôn nhân cận huyết làm tăng nguy cơ con mắc bệnh di truyền lặn; công nghệ gene ứng dụng sản xuất insulin, vaccine và giống cây trồng biến đổi gene.'
  ],
  formulas:[
    'Bộ NST đặc trưng ở người: Tế bào sinh dưỡng 2n = 46 (Nữ: 44A + XX ; Nam: 44A + XY)  |  Giao tử (trứng / tinh trùng): n = 23',
    'Kết quả phân bào từ 1 tế bào mẹ (2n): Nguyên phân (1 lần) → 2 tế bào con (2n)  |  Giảm phân → 4 tế bào đơn bội (n)',
    'Cơ chế xác định tỉ lệ giới tính 1 : 1 ở người: Mẹ cho 1 loại trứng (X) × Bố cho 2 loại tinh trùng ngang nhau (X và Y) → 1 XX (gái) : 1 XY (trai)'
  ],
  questions:[
    {d:1,q:'Tinh trùng hoặc trứng bình thường của người chứa bao nhiêu nhiễm sắc thể (bộ đơn bội n)?',n:23,t:0,u:'NST',w:'Ở người 2n = 46 ⇒ giao tử đơn bội có n = 46 : 2 = 23 NST.'},
    {d:1,q:'Ở người, cặp nhiễm sắc thể giới tính của nữ giới và nam giới bình thường lần lượt kí hiệu là gì?',o:['Nữ là XX, nam là XY','Nữ là XY, nam là XX','Cả nam và nữ đều là XX','Nữ là XO, nam là YY'],w:'Ở người và lớp Thú: nữ tương đồng XX, nam dị giao tử XY.'},
    {d:2,q:'Quá trình phân bào nào tạo ra các giao tử có số lượng nhiễm sắc thể giảm đi một nửa (từ 2n xuống n)?',o:['Giảm phân','Nguyên phân','Thụ tinh','Phiên mã'],w:'Giảm phân làm giảm một nửa số NST để khi thụ tinh (n + n → 2n) bộ NST loài được duy trì ổn định.'},
    {d:2,q:'Người mắc hội chứng Down có bộ nhiễm sắc thể trong tế bào sinh dưỡng như thế nào?',o:['Có 47 NST (thừa 1 NST ở cặp số 21, tức 3 NST số 21)','Chỉ có 23 NST','Có 92 NST','Thiếu hoàn toàn cặp NST số 1'],w:'Hội chứng Down là thể ba nhiễm ở cặp NST số 21 (2n + 1 = 47).'},
    {d:3,q:'Vì sao Luật Hôn nhân và Gia đình nghiêm cấm kết hôn giữa những người có họ trong phạm vi ba đời (hôn nhân cận huyết thống)?',o:['Vì làm tăng mạnh tỉ lệ các allele lặn có hại gặp nhau ở trạng thái đồng hợp lặn (aa) gây bệnh tật di truyền và suy thoái nòi giống','Vì con sinh ra sẽ toàn là con trai','Vì con sinh ra không có DNA','Chỉ vì phong tục chứ không liên quan sinh học'],w:'Kết hôn cận huyết làm tăng xác suất tổ hợp đồng hợp lặn gây dị tật bẩm sinh.'},
    {d:3,q:'Một tế bào sinh dưỡng của người (2n = 46) tiến hành nguyên phân liên tiếp 3 lần bình thường. Tổng số tế bào con được tạo ra là bao nhiêu?',n:8,t:0,u:'tế bào',w:'Số tế bào con sau 3 lần nguyên phân = 2³ = 8 tế bào (mỗi tế bào vẫn có 2n = 46 NST).'}
  ]},

{ id:'l9-tien-hoa', grade:9, order:16, term:'HK2', stage:4, chapCode:'Chương XIV', chapTitle:'Tiến hóa', sgk:'Bài 49–51', subj:'sinh',
  title:'Khái niệm, cơ chế tiến hóa, chọn lọc tự nhiên & Sự sống trên Trái Đất', prereq:['l9-nhiem-sac-the'],
  theory:[
    'Tiến hóa sinh học là quá trình thay đổi đặc tính di truyền của quần thể sinh vật qua các thế hệ nối tiếp nhau, dẫn đến hình thành đặc điểm thích nghi và các loài sinh vật mới từ tổ tiên chung.',
    'Chọn lọc nhân tạo do con người thực hiện theo nhu cầu kinh tế/thẩm mĩ (từ cải dại chọn lọc ra súp lơ, bắp cải, su hào; các giống chó, lúa năng suất cao). Chọn lọc tự nhiên (Darwin) là quá trình phân hóa khả năng sống sót và sinh sản của các cá thể trong quần thể: giữ lại cá thể mang biến dị di truyền thích nghi và đào thải cá thể kém thích nghi.',
    'Theo thuyết tiến hóa tổng hợp hiện đại: Tiến hóa nhỏ diễn ra trong phạm vi quần thể dưới tác động của các nhân tố tiến hóa (Đột biến cung cấp nguyên liệu sơ cấp, Giao phối tạo biến dị tổ hợp, Chọn lọc tự nhiên định hướng thích nghi, Di – nhập gene, Yếu tố ngẫu nhiên) và Cách li sinh sản dẫn tới hình thành loài mới; Tiến hóa lớn hình thành các đơn vị phân loại trên loài (chi, họ, bộ, lớp, ngành).',
    'Sự phát sinh và phát triển sự sống trên Trái Đất trải qua 3 giai đoạn lớn: Tiến hóa hóa học (chất vô cơ → chất hữu cơ đơn giản → đại phân tử) → Tiến hóa tiền sinh học (hình thành tế bào sơ khai đầu tiên trong đại dương nguyên thủy) → Tiến hóa sinh học (từ sinh vật đơn bào nhân sơ → nhân thực → đa bào dưới nước lên cạn qua các đại địa chất đến ngày nay, trong đó có loài người).'
  ],
  formulas:[
    'Cơ chế hình thành đặc điểm thích nghi: Đột biến & Biến dị tổ hợp (nguyên liệu) + Chọn lọc tự nhiên (sàng lọc giữ lại kiểu hình thích nghi) qua nhiều thế hệ',
    '3 giai đoạn phát sinh sự sống trên Trái Đất: Tiến hóa hóa học → Tiến hóa tiền sinh học → Tiến hóa sinh học'
  ],
  questions:[
    {d:1,q:'Thực chất của quá trình Chọn lọc tự nhiên theo Darwin là gì?',o:['Sự sống sót và sinh sản ưu thế của những cá thể mang biến dị thích nghi hơn, đào thải cá thể kém thích nghi','Do con người chủ động lai tạo theo sở thích','Tự sinh ra sinh vật không cần bố mẹ','Làm mọi cá thể trong quần thể giống hệt nhau ngay tức khắc'],w:'Đấu tranh sinh tồn dẫn đến chọn lọc tự nhiên giữ lại cá thể thích nghi.'},
    {d:1,q:'Từ một loài cải hoang dại ban đầu, con người đã tạo ra cải bắp, su hào, súp lơ rất khác nhau. Đây là kết quả của quá trình nào?',o:['Chọn lọc nhân tạo do con người tiến hành theo các hướng nhu cầu khác nhau','Hiện tượng khúc xạ ánh sáng','Sự không hề có biến dị ở thực vật','Quá trình tiến hóa hóa học'],w:'Con người giữ lại các biến dị ở lá (bắp cải), thân (su hào), hoa (súp lơ) qua nhiều thế hệ.'},
    {d:2,q:'Theo quan niệm hiện đại, nhân tố nào cung cấp nguồn NGUYÊN LIỆU SƠ CẤP cho quá trình tiến hóa?',o:['Đột biến (đặc biệt là đột biến gene)','Ánh sáng đèn điện','Cơ quan thoái hóa','Sự tuyệt chủng'],w:'Đột biến tạo ra các allele mới là nguồn nguyên liệu sơ cấp; giao phối tạo biến dị tổ hợp là nguyên liệu thứ cấp.'}
  ]}
);
