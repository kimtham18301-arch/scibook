// LỚP 6 – Theo đúng Mục lục SGK Khoa học tự nhiên 6 (Bộ Kết nối tri thức với cuộc sống – Bộ SGK thống nhất toàn quốc theo QĐ 3588/QĐ-BGDĐT).
// Gồm 10 Chương (Bài 1 → Bài 54 SGK), phân bổ chuẩn Học kì I & Học kì II.
window.KHTN = window.KHTN || [];
KHTN.push(
{ id:'l6-mo-dau', grade:6, order:1, term:'HK1', stage:1, chapCode:'Chương I', chapTitle:'Mở đầu về Khoa học tự nhiên', sgk:'Bài 1–8', subj:'td',
  title:'Giới thiệu KHTN, an toàn thực hành & các phép đo', prereq:[],
  theory:[
    'Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng tự nhiên và quy luật của chúng (Vật lí, Hóa học, Sinh học, Khoa học Trái Đất và bầu trời).',
    'Quy tắc an toàn phòng thực hành: đeo kính bảo hộ, găng tay khi làm việc với hóa chất/nhiệt; không ăn uống, không nếm hoặc ngửi trực tiếp hóa chất; báo ngay giáo viên khi có sự cố.',
    'Dụng cụ quan sát: kính lúp cầm tay (phóng to vật nhỏ như gân lá, côn trùng) và kính hiển vi quang học (quan sát vật rất nhỏ như tế bào).',
    'Các phép đo cơ bản: chiều dài (m, thước), khối lượng (kg, cân), thể tích chất lỏng (mL/L, ống đong), thời gian (s, đồng hồ), nhiệt độ (°C, nhiệt kế). Xác định Giới hạn đo (GHĐ) và Độ chia nhỏ nhất (ĐCNN) trước khi đo; đặt mắt nhìn vuông góc với vạch chia.'
  ],
  formulas:[
    'Đổi đơn vị chiều dài: 1 km = 1000 m  ;  1 m = 10 dm = 100 cm = 1000 mm || Ý nghĩa: Đơn vị đo chiều dài chuẩn SI là mét (m); mỗi bậc liền kề hơn kém nhau 10 lần.',
    'Đổi đơn vị khối lượng: 1 tấn = 1000 kg  ;  1 kg = 1000 g || Ý nghĩa: Đơn vị khối lượng chuẩn SI là kilôgam (kg).',
    'Đổi đơn vị thời gian: 1 h = 60 min = 3600 s || Trong đó: h là giờ; min là phút; s là giây (đơn vị thời gian chuẩn SI).',
    'Đổi nhiệt độ Celsius sang Fahrenheit: t_(°F) = t_(°C) × 1,8 + 32 || Trong đó: ở áp suất thường, nước đá đang tan là 0 °C (32 °F), nước đang sôi là 100 °C (212 °F).'
  ],
  questions:[
    {d:1,q:'Dụng cụ nào dùng để đo thể tích chất lỏng trong phòng thực hành?',o:['Ống đong','Cân đồng hồ','Thước cuộn','Nhiệt kế'],w:'Ống đong hoặc bình chia độ dùng để đo thể tích chất lỏng (mL).'},
    {d:1,q:'Khi không may bị hóa chất dính vào da tay, việc đầu tiên cần làm là gì?',o:['Rửa ngay dưới vòi nước sạch chảy nhẹ và báo cho giáo viên','Lau khô bằng khăn giấy rồi làm tiếp','Tự lấy hóa chất khác bôi lên','Chờ hết tiết học mới đi rửa'],w:'Rửa ngay bằng nhiều nước sạch giúp làm loãng và trôi hóa chất, sau đó báo giáo viên xử lí.'},
    {d:1,q:'Muốn quan sát cấu tạo tế bào vảy hành, học sinh cần sử dụng dụng cụ nào?',o:['Kính hiển vi quang học','Kính lúp cầm tay','Ống nhòm','Gương phẳng'],w:'Tế bào rất nhỏ không nhìn rõ bằng mắt thường hay kính lúp, phải dùng kính hiển vi.'},
    {d:2,q:'Đổi chiều dài 1,5 m sang đơn vị xăng-ti-mét (cm).',n:150,t:0,u:'cm',w:'1,5 × 100 = 150 cm.'},
    {d:3,q:'Dùng bình chia độ đang chứa 40 mL nước, thả chìm hoàn toàn một hòn sỏi vào bình thì mực nước dâng lên vạch 65 mL. Thể tích hòn sỏi là bao nhiêu cm³ (biết 1 mL = 1 cm³)?',n:25,t:0,u:'cm³',w:'V_sỏi = V₂ − V₁ = 65 − 40 = 25 mL = 25 cm³.'}
  ]},

{ id:'l6-the-chat', grade:6, order:2, term:'HK1', stage:1, chapCode:'Chương II', chapTitle:'Chất quanh ta', sgk:'Bài 9–10', subj:'hoa',
  title:'Sự đa dạng, các thể của chất & sự chuyển thể', prereq:['l6-mo-dau'],
  theory:[
    'Chất có ở khắp nơi xung quanh ta (trong vật thể tự nhiên, vật thể nhân tạo, vật hữu sinh và vật vô sinh).',
    'Ba thể cơ bản của chất: Thể rắn (hình dạng và thể tích xác định, rất khó nén); Thể lỏng (thể tích xác định, hình dạng theo phần vật chứa, khó nén); Thể khí/hơi (không có hình dạng và thể tích xác định, lan tỏa và dễ nén).',
    'Tính chất vật lí (thể, màu sắc, mùi vị, tính tan, nhiệt độ nóng chảy, nhiệt độ sôi, tính dẫn điện/nhiệt) không tạo chất mới; tính chất hóa học là khả năng biến đổi thành chất mới (cháy, gỉ, phân hủy).',
    'Các quá trình chuyển thể: Nóng chảy (rắn → lỏng), Đông đặc (lỏng → rắn), Bay hơi / Sôi (lỏng → khí), Ngưng tụ (khí → lỏng). Trong suốt thời gian đang nóng chảy hoặc đang sôi, nhiệt độ của chất tinh khiết giữ không đổi.'
  ],
  formulas:[
    'Sơ đồ chuyển thể thuận nghịch: Rắn ⇄ Lỏng (Nóng chảy / Đông đặc)  ;  Lỏng ⇄ Khí (Bay hơi, Sôi / Ngưng tụ) || Lưu ý: Bay hơi chỉ xảy ra trên mặt thoáng ở mọi nhiệt độ; còn Sôi xảy ra cả trên mặt thoáng và trong lòng chất lỏng ở nhiệt độ sôi xác định.'
  ],
  questions:[
    {d:1,q:'Quá trình chất chuyển từ thể lỏng sang thể khí (hơi) gọi là gì?',o:['Sự bay hơi (hoặc sự sôi)','Sự đông đặc','Sự nóng chảy','Sự ngưng tụ'],w:'Lỏng → khí là sự bay hơi hoặc sự sôi.'},
    {d:1,q:'Chất ở thể rắn có đặc điểm nào sau đây?',o:['Có hình dạng và thể tích xác định, các hạt liên kết rất chặt chẽ','Không có hình dạng xác định','Rất dễ bị nén nhỏ','Luôn tự chảy tràn trên mặt bàn'],w:'Ở thể rắn các hạt xếp sát nhau nên có hình dạng và thể tích xác định.'},
    {d:2,q:'Ở áp suất thường, nước đá tinh khiết nóng chảy ở bao nhiêu độ C?',n:0,t:0,u:'°C',w:'Nhiệt độ nóng chảy của nước đá (và đông đặc của nước) là 0 °C.'},
    {d:2,q:'Hiện tượng nào sau đây thể hiện TÍNH CHẤT HÓA HỌC của chất?',o:['Đinh sắt để ngoài không khí ẩm lâu ngày bị gỉ sét màu nâu đỏ','Nước đun đến 100 °C thì sôi','Dây đồng dẫn điện tốt','Đường kính tan trong nước tạo vị ngọt'],w:'Sắt biến đổi thành gỉ sắt (chất mới) là tính chất hóa học.'}
  ]},

{ id:'l6-oxy-kk', grade:6, order:3, term:'HK1', stage:1, chapCode:'Chương II', chapTitle:'Chất quanh ta', sgk:'Bài 11', subj:'hoa',
  title:'Oxygen và không khí', prereq:['l6-the-chat'],
  theory:[
    'Oxygen (O₂) ở điều kiện thường là chất khí không màu, không mùi, không vị, ít tan trong nước, nặng hơn không khí; duy trì sự sống (hô hấp) và duy trì sự cháy.',
    'Thành phần không khí khô sạch theo thể tích: khoảng 78% khí nitrogen (N₂), 21% khí oxygen (O₂) và 1% các khí khác (carbon dioxide CO₂, hơi nước, khí hiếm…).',
    'Ba điều kiện để sự cháy xảy ra: có chất cháy, có đủ khí oxygen và đạt đến nhiệt độ cháy. Muốn dập tắt đám cháy cần hạ nhiệt độ xuống dưới nhiệt độ cháy và cách li chất cháy khỏi oxygen.',
    'Bảo vệ môi trường không khí: trồng nhiều cây xanh, sử dụng phương tiện công cộng và năng lượng sạch, xử lí khí thải nhà máy, không đốt rác bừa bãi.'
  ],
  formulas:[
    'Thành phần thể tích không khí: 78% Nitrogen (N₂) + 21% Oxygen (O₂) + 1% khí khác (CO₂, hơi nước, khí hiếm) || Cách thử O₂: Đưa que đóm còn tàn đỏ vào lọ chứa khí oxygen thì que đóm bùng cháy thành ngọn lửa.'
  ],
  questions:[
    {d:1,q:'Chất khí nào chiếm khoảng 78% thể tích của không khí?',o:['Nitrogen (N₂)','Oxygen (O₂)','Carbon dioxide (CO₂)','Hydrogen (H₂)'],w:'Nitrogen chiếm lớn nhất (~78%), tiếp theo là Oxygen (~21%).'},
    {d:1,q:'Dấu hiệu nhận biết lọ chứa khí oxygen tinh khiết là gì?',o:['Đưa que đóm còn tàn đỏ vào thì bùng cháy sáng','Làm vẩn đục nước vôi trong','Có màu vàng lục mùi hắc','Dập tắt ngay ngọn nến đang cháy'],w:'Oxygen duy trì sự cháy mạnh nên làm que đóm còn tàn đỏ bùng cháy.'},
    {d:2,q:'Biện pháp nào sau đây góp phần làm GIẢM ô nhiễm không khí?',o:['Trồng nhiều cây xanh và chuyển sang dùng năng lượng mặt trời, gió','Đốt rơm rạ và rác nhựa ngoài đường','Xả thẳng khói lò gạch chưa xử lí ra khu dân cư','Phá rừng lấy đất trống'],w:'Cây xanh hấp thụ CO₂, chắn bụi và nhả khí O₂.'}
  ]},

{ id:'l6-vat-lieu', grade:6, order:4, term:'HK1', stage:2, chapCode:'Chương III', chapTitle:'Một số vật liệu, nguyên liệu, nhiên liệu, lương thực – thực phẩm thông dụng', sgk:'Bài 12–15', subj:'hoa',
  title:'Vật liệu, nguyên liệu, nhiên liệu & lương thực – thực phẩm', prereq:['l6-oxy-kk'],
  theory:[
    'Vật liệu là chất hoặc hỗn hợp một số chất được con người dùng để chế tạo ra đồ vật, công trình (kim loại, nhựa, gỗ, thủy tinh, gốm sứ, cao su, vật liệu mới nano/composite). Sử dụng vật liệu theo hướng 3R: Giảm thiểu – Tái sử dụng – Tái chế.',
    'Nguyên liệu là vật chất tự nhiên chưa qua xử lí cần chuyển hóa để tạo ra sản phẩm: đá vôi (sản xuất vôi sống, xi măng), quặng bauxite (luyện nhôm), cát thạch anh (nấu thủy tinh), nước biển (làm muối, xút – clo).',
    'Nhiên liệu (chất đốt) khi cháy đều tỏa nhiệt và phát sáng: nhiên liệu rắn (than đá, củi), lỏng (xăng, dầu hỏa, cồn), khí (gas LPG, khí thiên nhiên, biogas). Cần cung cấp đủ không khí/oxygen để nhiên liệu cháy hoàn toàn, tiết kiệm và giảm khí độc CO.',
    'Lương thực (gạo, ngô, khoai, sắn – giàu tinh bột/carbohydrate cung cấp năng lượng chính) và thực phẩm (thịt, cá, trứng, sữa giàu protein; dầu mỡ giàu lipid; rau quả giàu vitamin, chất xơ & khoáng chất). Cần bảo quản đúng cách và ăn chín uống sôi để phòng ngộ độc.'
  ],
  formulas:[
    'Quy tắc sử dụng vật liệu bền vững (3R): Reduce (Giảm thiểu) · Reuse (Tái sử dụng) · Recycle (Tái chế)',
    '4 nhóm dinh dưỡng chính trong khẩu phần ăn: Carbohydrate (tinh bột, đường) · Protein (chất đạm) · Lipid (chất béo) · Vitamin & Chất khoáng'
  ],
  questions:[
    {d:1,q:'Vật liệu nào sau đây dẫn điện, dẫn nhiệt tốt nên thường dùng làm lõi dây điện và đáy nồi đun nấu?',o:['Kim loại (đồng, nhôm, inox)','Thủy tinh trong suốt','Nhựa dẻo','Cao su tự nhiên'],w:'Kim loại dẫn điện và dẫn nhiệt tốt; nhựa, cao su, thủy tinh cách điện.'},
    {d:1,q:'Đá vôi khai thác từ núi đá tự nhiên dùng để sản xuất xi măng và vôi sống được gọi là gì?',o:['Nguyên liệu','Nhiên liệu','Lương thực','Thực phẩm'],w:'Đá vôi là nguyên liệu đầu vào cho ngành công nghiệp sản xuất xi măng, vôi.'},
    {d:1,q:'Nhóm lương thực như gạo, ngô, khoai, sắn chứa hàm lượng lớn nhất chất dinh dưỡng nào?',o:['Carbohydrate (tinh bột) cung cấp năng lượng chính','Vitamin C','Chỉ có muối ăn','Kim loại nặng'],w:'Lương thực giàu tinh bột (carbohydrate) là nguồn năng lượng chủ yếu cho cơ thể.'},
    {d:2,q:'Vì sao vỏ bọc ngoài của dây dẫn điện thường làm bằng nhựa hoặc cao su mà không làm bằng kim loại?',o:['Vì nhựa và cao su không dẫn điện (cách điện), đảm bảo an toàn chống điện giật','Vì nhựa dẫn điện mạnh hơn đồng','Vì kim loại trong suốt không nhìn thấy','Vì nhựa tự phát ra dòng điện'],w:'Vỏ nhựa/cao su cách điện ngăn dòng điện truyền ra ngoài gây giật.'},
    {d:2,q:'Để bếp củi hoặc bếp than cháy hiệu quả, tiết kiệm nhiên liệu và đỡ khói độc, ta cần làm gì?',o:['Chẻ nhỏ củi vừa phải, xếp thoáng để không khí (oxygen) lưu thông tiếp xúc đều với nhiên liệu','Bịt kín hết các cửa gió của bếp','Tưới thật nhiều nước lên củi khô','Đốt trong phòng ngủ đóng kín cửa'],w:'Đủ oxygen và tăng diện tích tiếp xúc giúp nhiên liệu cháy hoàn toàn.'},
    {d:3,q:'Vì sao tuyệt đối KHÔNG được đốt bếp than tổ ong hoặc chạy máy phát điện xăng dầu trong phòng kín để sưởi ấm?',o:['Vì cháy thiếu oxygen sinh ra khí CO (carbon monoxide) rất độc không màu, không mùi gây ngạt tử vong','Vì làm phòng sáng quá không ngủ được','Vì than đá tạo ra quá nhiều khí oxygen','Vì làm nhiệt độ phòng hạ xuống âm độ'],w:'Cháy trong phòng kín làm cạn O₂ và sinh khí độc CO, CO₂ cực kì nguy hiểm.'},
    {d:3,q:'Một khẩu phần ăn cân đối gồm 200 g cơm trắng (cung cấp 260 kcal), 100 g ức gà (165 kcal) và một đĩa rau luộc (45 kcal). Tổng năng lượng của bữa ăn này là bao nhiêu kcal?',n:470,t:0,u:'kcal',w:'Tổng năng lượng = 260 + 165 + 45 = 470 kcal.'}
  ]},

{ id:'l6-hon-hop', grade:6, order:5, term:'HK1', stage:2, chapCode:'Chương IV', chapTitle:'Hỗn hợp. Tách chất ra khỏi hỗn hợp', sgk:'Bài 16–17', subj:'hoa',
  title:'Chất tinh khiết, hỗn hợp & tách chất', prereq:['l6-the-chat'],
  theory:[
    'Chất tinh khiết (chất nguyên chất) chỉ tạo ra từ một chất duy nhất, có tính chất vật lí và hóa học xác định (VD: nước cất sôi đúng 100 °C). Hỗn hợp gồm hai hay nhiều chất trộn lẫn vào nhau.',
    'Hỗn hợp đồng nhất (dung dịch: nước đường, nước muối lọc trong) có thành phần giống nhau tại mọi vị trí. Hỗn hợp không đồng nhất gồm: huyền phù (các hạt rắn lơ lửng trong chất lỏng như nước phù sa, nước bột sắn dây sống) và nhũ tương (các giọt chất lỏng lơ lửng trong chất lỏng khác không tan như dầu ăn lắc với nước, sữa).',
    'Dung dịch gồm chất tan + dung môi. Muốn chất rắn tan nhanh hơn trong nước: khuấy đều, đun nóng dung môi và nghiền nhỏ chất rắn.',
    'Các phương pháp tách chất vật lí: Lắng – gạn – lọc (tách chất rắn không tan khỏi chất lỏng); Cô cạn (tách chất rắn tan không bay hơi khỏi dung dịch); Chiết bằng phễu chiết (tách hai chất lỏng không tan vào nhau và phân lớp).'
  ],
  formulas:[
    'Khối lượng dung dịch: m_(dung dịch) = m_(chất tan) + m_(dung môi) || Ví dụ: Hòa tan 15 g đường (chất tan) vào 85 g nước (dung môi) được 100 g dung dịch nước đường.',
    'Chọn nhanh phương pháp tách chất: Rắn không tan trong lỏng → Lọc  |  Rắn tan không bay hơi → Cô cạn  |  Hai chất lỏng phân lớp → Chiết'
  ],
  questions:[
    {d:1,q:'Hỗn hợp nào sau đây là hỗn hợp ĐỒNG NHẤT (dung dịch)?',o:['Nước muối ăn đã hòa tan hoàn toàn trong suốt','Nước sông đục ngầu phù sa','Hỗn hợp dầu ăn và nước','Cát trộn lẫn sỏi'],w:'Muối ăn tan hoàn toàn vào nước tạo dung dịch đồng nhất.'},
    {d:1,q:'Để tách các hạt cát không tan ra khỏi cốc nước lẫn cát, ta dùng phương pháp nào?',o:['Lọc qua phễu có lót giấy lọc','Cô cạn đến khô','Dùng nam châm hút cát','Khuấy cho cát tan'],w:'Lọc giúp giữ lại chất rắn không tan trên giấy lọc.'},
    {d:2,q:'Người dân vùng biển dẫn nước biển vào ruộng muối rồi phơi nắng gió để thu muối ăn kết tinh là ứng dụng phương pháp nào?',o:['Bay hơi / Cô cạn','Lọc bằng giấy lọc','Chiết bằng phễu chiết','Dùng nam châm'],w:'Nước bay hơi đi còn muối ăn không bay hơi kết tinh lại.'},
    {d:2,q:'Hòa tan hết 20 g đường vào 130 g nước sạch. Khối lượng dung dịch nước đường thu được là bao nhiêu gam?',n:150,t:0,u:'g',w:'m_dd = 20 + 130 = 150 g.'},
    {d:2,q:'Biện pháp nào sau đây giúp hòa tan một viên đường phèn vào cốc nước NHANH HƠN?',o:['Nghiền nhỏ viên đường, dùng nước ấm và khuấy đều','Để nguyên viên đường to trong nước đá lạnh không khuấy','Đậy kín nắp cốc rồi đặt vào tủ lạnh','Đổ thêm dầu ăn vào cốc'],w:'Nghiền nhỏ tăng diện tích tiếp xúc, nước ấm và khuấy đều làm tăng tốc độ hòa tan.'}
  ]},

{ id:'l6-te-bao', grade:6, order:6, term:'HK1', stage:2, chapCode:'Chương V', chapTitle:'Tế bào', sgk:'Bài 18–21', subj:'sinh',
  title:'Tế bào – đơn vị cơ bản của sự sống', prereq:['l6-mo-dau'],
  theory:[
    'Mọi cơ thể sinh vật đều được cấu tạo từ tế bào. Tế bào là đơn vị cấu trúc và chức năng cơ bản của sự sống (thực hiện trao đổi chất, lớn lên và phân chia).',
    'Ba thành phần chính của mọi tế bào: Màng tế bào (bảo vệ và kiểm soát các chất ra vào), Tế bào chất (nơi diễn ra các hoạt động sống) và Nhân tế bào (ở tế bào nhân thực) hoặc Vùng nhân (ở tế bào nhân sơ như vi khuẩn) điều khiển mọi hoạt động sống.',
    'Điểm khác biệt của tế bào thực vật so với tế bào động vật: tế bào thực vật có Thành tế bào (giúp tế bào cứng cáp), Lục lạp (chứa diệp lục thực hiện quang hợp) và không bào trung tâm lớn.',
    'Sự lớn lên và sinh sản (phân chia) của tế bào là cơ sở giúp sinh vật lớn lên và thay thế các tế bào già, tổn thương. Từ 1 tế bào sau mỗi lần phân chia tạo ra 2 tế bào con.'
  ],
  formulas:[
    'Số tế bào con tạo ra từ 1 tế bào sau k lần phân chia: N = 2ᵏ || Trong đó: k là số lần phân chia liên tiếp (VD: k = 1 → 2 tế bào; k = 2 → 4 tế bào; k = 3 → 8 tế bào; tổng quát từ a tế bào ban đầu: N = a · 2ᵏ).'
  ],
  questions:[
    {d:1,q:'Đơn vị cấu trúc và chức năng cơ bản của mọi cơ thể sống là gì?',o:['Tế bào','Mô','Cơ quan','Nguyên tử sắt'],w:'Tế bào là đơn vị cơ bản của sự sống.'},
    {d:1,q:'Bào quan nào chỉ có ở tế bào thực vật và thực hiện chức năng quang hợp?',o:['Lục lạp','Màng tế bào','Nhân tế bào','Tế bào chất'],w:'Lục lạp chứa diệp lục hấp thụ năng lượng ánh sáng để quang hợp.'},
    {d:2,q:'Một tế bào tiến hành phân chia liên tiếp 3 lần. Số tế bào con được tạo ra là bao nhiêu?',n:8,t:0,u:'tế bào',w:'N = 2³ = 8 tế bào.'}
  ]},

{ id:'l6-co-the', grade:6, order:7, term:'HK1', stage:2, chapCode:'Chương VI', chapTitle:'Từ tế bào đến cơ thể', sgk:'Bài 22–24', subj:'sinh',
  title:'Cơ thể đơn bào & các cấp độ tổ chức cơ thể đa bào', prereq:['l6-te-bao'],
  theory:[
    'Cơ thể sống thực hiện các quá trình sống cơ bản: cảm ứng, dinh dưỡng, hô hấp, bài tiết, vận động, sinh trưởng và sinh sản.',
    'Cơ thể đơn bào chỉ cấu tạo từ MỘT tế bào duy nhất nhưng vẫn thực hiện đầy đủ các chức năng sống (VD: vi khuẩn E. coli, trùng roi, trùng giày, trùng biến hình, tảo lục đơn bào).',
    'Cơ thể đa bào cấu tạo từ nhiều tế bào phối hợp hoạt động (VD: cây phượng, cây lúa, con thỏ, con người).',
    'Các cấp độ tổ chức trong cơ thể đa bào từ thấp đến cao: Tế bào → Mô (tập hợp các tế bào cùng hình dạng, cùng thực hiện một chức năng) → Cơ quan (gồm nhiều mô, VD: lá, rễ, dạ dày, tim) → Hệ cơ quan (VD: hệ chồi, hệ rễ ở cây; hệ tiêu hóa, hệ tuần hoàn ở người) → Cơ thể.'
  ],
  formulas:[
    'Sơ đồ cấp độ tổ chức cơ thể đa bào (từ nhỏ đến lớn): Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể || Ví dụ ở người: Tế bào cơ tim → Mô cơ tim → Tim (cơ quan) → Hệ tuần hoàn (hệ cơ quan) → Cơ thể người.'
  ],
  questions:[
    {d:1,q:'Sinh vật nào sau đây có cấu tạo CƠ THỂ ĐƠN BÀO (chỉ gồm 1 tế bào)?',o:['Trùng roi và vi khuẩn','Cây hoa hồng','Con chim sẻ','Con cá chép'],w:'Trùng roi, trùng giày, vi khuẩn là các cơ thể đơn bào.'},
    {d:1,q:'Thứ tự ĐÚNG về các cấp độ tổ chức từ thấp đến cao trong cơ thể đa bào là gì?',o:['Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể','Mô → Tế bào → Cơ quan → Hệ cơ quan → Cơ thể','Cơ thể → Hệ cơ quan → Cơ quan → Mô → Tế bào','Tế bào → Cơ quan → Mô → Cơ thể'],w:'Nhiều tế bào tạo thành mô → nhiều mô tạo cơ quan → hệ cơ quan → cơ thể.'},
    {d:2,q:'Ở cơ thể thực vật có hoa, lá cây, thân cây và hoa thuộc cấp độ tổ chức nào?',o:['Cơ quan','Tế bào','Mô','Cơ thể đơn bào'],w:'Rễ, thân, lá, hoa, quả, hạt là các cơ quan của thực vật.'},
    {d:2,q:'Tập hợp các tế bào biểu bì lá xếp sát nhau cùng thực hiện chức năng bảo vệ lá được gọi là gì?',o:['Mô (mô biểu bì)','Hệ cơ quan','Cơ thể','Bào quan'],w:'Tập hợp các tế bào giống nhau cùng thực hiện một chức năng gọi là mô.'},
    {d:3,q:'Trong cơ thể người, miệng, thực quản, dạ dày, ruột non, ruột già, gan và tụy phối hợp tiêu hóa thức ăn tạo thành cấp độ tổ chức nào?',o:['Hệ cơ quan (Hệ tiêu hóa)','Một tế bào duy nhất','Một mô đơn lẻ','Sinh vật đơn bào'],w:'Nhiều cơ quan cùng phối hợp thực hiện chức năng tiêu hóa tạo thành Hệ tiêu hóa.'}
  ]},

{ id:'l6-phan-loai', grade:6, order:8, term:'HK2', stage:3, chapCode:'Chương VII', chapTitle:'Đa dạng thế giới sống', sgk:'Bài 25–39', subj:'sinh',
  title:'Phân loại thế giới sống: Vi khuẩn, Virus, Nấm, Thực vật & Động vật', prereq:['l6-co-the'],
  theory:[
    'Các bậc phân loại sinh vật từ lớn đến nhỏ: Giới → Ngành → Lớp → Bộ → Họ → Chi (Giống) → Loài (Loài là bậc phân loại cơ bản nhất). Khóa lưỡng phân giúp định danh sinh vật dựa trên từng cặp đặc điểm đối lập.',
    'Năm giới sinh vật: Khởi sinh (Vi khuẩn – đơn bào nhân sơ; có lợi làm sữa chua, phân giải chất hữu cơ; có hại gây bệnh, dùng kháng sinh đúng chỉ định), Nguyên sinh (trùng roi, trùng sốt rét, tảo), Nấm (nhân thực, dị dưỡng, không có lục lạp: nấm men, nấm rơm, nấm mốc), Thực vật và Động vật. Lưu ý: VIRUS chưa có cấu tạo tế bào, sống kí sinh nội bào bắt buộc (phòng bằng vaccine).',
    'Thực vật chia 4 nhóm chính: Rêu (chưa có mạch dẫn, chưa có rễ thật) → Dương xỉ (có mạch dẫn, sinh sản bằng bào tử) → Hạt trần (thông, vạn tuế – có hạt nằm lộ trên lá noãn hở, chưa có hoa/quả) → Hạt kín (cam, lúa, phượng – có hoa, hạt nằm trong quả, đa dạng nhất).',
    'Động vật chia 2 nhóm lớn: Không xương sống (Ruột khoang, Giun, Thân mềm, Chân khớp như tôm – nhện – côn trùng) và Có xương sống (Cá → Lưỡng cư → Bò sát → Chim → Thú/Động vật có vú). Cần bảo vệ đa dạng sinh học, chống săn bắt trái phép và phá rừng.'
  ],
  formulas:[
    '7 bậc phân loại sinh vật (từ cao đến thấp): Giới → Ngành → Lớp → Bộ → Họ → Chi → Loài',
    'Tiến hóa 4 nhóm Thực vật: Rêu → Dương xỉ → Hạt trần (chưa có hoa, quả) → Hạt kín (có hoa, quả bảo vệ hạt)',
    '5 lớp Động vật có xương sống: Cá · Lưỡng cư (ếch) · Bò sát (thằn lằn, cá sấu) · Chim · Thú (đẻ con, nuôi con bằng sữa)'
  ],
  questions:[
    {d:1,q:'Bậc phân loại cơ bản và nhỏ nhất trong 7 bậc phân loại chính của thế giới sống là gì?',o:['Loài','Chi','Họ','Giới'],w:'Loài là bậc phân loại cơ bản nhất.'},
    {d:1,q:'Đối tượng nào sau đây CHƯA CÓ cấu tạo tế bào và chỉ nhân lên được trong tế bào vật chủ?',o:['Virus (như virus cúm, SARS-CoV-2)','Vi khuẩn làm sữa chua','Nấm rơm','Trùng giày'],w:'Virus chưa có cấu tạo tế bào (chỉ gồm lõi vật chất di truyền và vỏ protein).'},
    {d:2,q:'Cây thông có nón, hạt nằm lộ bên ngoài và chưa có hoa, quả thật sự thuộc nhóm thực vật nào?',o:['Thực vật Hạt trần','Thực vật Hạt kín','Ngành Rêu','Ngành Dương xỉ'],w:'Thông, tùng, bách, vạn tuế thuộc nhóm Hạt trần.'},
    {d:2,q:'Ếch đồng vừa sống dưới nước vừa sống trên cạn, da trần ẩm ướt thuộc lớp động vật nào?',o:['Lớp Lưỡng cư','Lớp Bò sát','Lớp Cá','Lớp Thú'],w:'Ếch đồng là đại diện điển hình của lớp Lưỡng cư.'}
  ]},

{ id:'l6-luc', grade:6, order:9, term:'HK2', stage:3, chapCode:'Chương VIII', chapTitle:'Lực trong đời sống', sgk:'Bài 40–45', subj:'ly',
  title:'Lực, biến dạng lò xo, trọng lực, ma sát & lực cản', prereq:['l6-mo-dau'],
  theory:[
    'Tác dụng đẩy hoặc kéo của vật này lên vật khác gọi là lực (kí hiệu F, đơn vị đo là Niutơn – N, đo bằng lực kế). Lực có thể làm vật thay đổi tốc độ, thay đổi hướng chuyển động hoặc làm vật bị biến dạng. Biểu diễn lực bằng mũi tên (gốc tại điểm đặt, hướng theo chiều lực, độ dài theo tỉ xích độ lớn).',
    'Lực tiếp xúc xuất hiện khi hai vật chạm nhau (đá bóng, đẩy xe, lực đàn hồi lò xo, lực ma sát); lực không tiếp xúc xuất hiện không cần chạm nhau (trọng lực Trái Đất hút quả táo rơi, lực từ nam châm).',
    'Biến dạng lò xo: trong giới hạn đàn hồi, độ dãn của lò xo (Δl = l − l₀) tỉ lệ thuận với trọng lượng vật treo. Trọng lực là lực hút của Trái Đất tác dụng lên vật (phương thẳng đứng, chiều từ trên xuống), độ lớn gọi là trọng lượng: P ≈ 10 · m.',
    'Lực ma sát (ma sát trượt, ma sát nghỉ) xuất hiện ở bề mặt tiếp xúc cản trở chuyển động: vừa có lợi (giúp cầm nắm, đi lại không trượt, phanh xe dừng lại) vừa có hại (làm mòn lốp, xích máy – khắc phục bằng tra dầu mỡ, ổ bi). Vật chuyển động trong nước/không khí chịu lực cản phụ thuộc hình dạng vật.'
  ],
  formulas:[
    'Liên hệ giữa trọng lượng và khối lượng vật trên Trái Đất: P ≈ 10 · m  ⇒  m ≈ \\frac{P}{10} || Trong đó: P là trọng lượng vật (N – Niutơn); m là khối lượng của vật bắt buộc đổi ra kilôgam (kg).',
    'Độ biến dạng (độ dãn) của lò xo treo thẳng đứng: Δl = l − l₀ || Trong đó: l₀ là chiều dài tự nhiên ban đầu khi chưa treo vật; l là chiều dài lò xo khi treo vật (cùng đơn vị cm hoặc m).'
  ],
  questions:[
    {d:1,q:'Đơn vị đo lực trong hệ đo lường quốc tế SI là gì?',o:['Niutơn (N)','Kilôgam (kg)','Mét (m)','Jun (J)'],w:'Lực đo bằng đơn vị Niutơn (kí hiệu N).'},
    {d:2,q:'Một kiện hàng có khối lượng 5 kg thì có trọng lượng khoảng bao nhiêu Niutơn?',n:50,t:0,u:'N',w:'P ≈ 10 · m = 10 × 5 = 50 N.'},
    {d:2,q:'Trường hợp nào sau đây lực ma sát CÓ LỢI cho con người?',o:['Ma sát giữa má phanh và vành bánh xe giúp xe dừng lại an toàn','Ma sát làm mòn đế giày và lốp xe','Ma sát làm nóng và mòn trục máy','Ma sát cản trở việc đẩy tủ nặng trên sàn'],w:'Không có ma sát ở phanh và lốp xe thì xe không thể hãm dừng lại được.'},
    {d:3,q:'Vì sao thân tàu ngầm, tàu cao tốc và máy bay đều được thiết kế đầu thuôn nhọn (hình khí động học)?',o:['Để giảm lực cản của nước và không khí khi chuyển động nhanh','Để làm tăng lực cản của không khí','Để làm khối lượng tàu nặng gấp đôi','Chỉ để sơn màu cho dễ'],w:'Hình dạng thuôn nhọn giúp giảm tối đa lực cản của chất lỏng và chất khí.'}
  ]},

{ id:'l6-nang-luong', grade:6, order:10, term:'HK2', stage:4, chapCode:'Chương IX', chapTitle:'Năng lượng', sgk:'Bài 46–50', subj:'ly',
  title:'Năng lượng, sự chuyển hóa & tiết kiệm năng lượng', prereq:['l6-luc'],
  theory:[
    'Mọi hoạt động sống và vận hành máy móc đều cần năng lượng (đơn vị chuẩn SI là Jun – J; trên bao bì thực phẩm còn dùng calo/kcal). Các dạng năng lượng phổ biến: động năng, thế năng, nhiệt năng, điện năng, quang năng, năng lượng âm, hóa năng (trong thức ăn, pin, nhiên liệu).',
    'Định luật bảo toàn năng lượng: Năng lượng không tự nhiên sinh ra cũng không tự nhiên mất đi; nó chỉ truyền từ vật này sang vật khác hoặc chuyển hóa từ dạng này sang dạng khác.',
    'Khi sử dụng thiết bị luôn có phần năng lượng có ích và phần năng lượng hao phí (thường tỏa ra dưới dạng nhiệt năng, VD: bóng đèn nóng lên).',
    'Năng lượng tái tạo (mặt trời, gió, thủy triều, nước chảy, sinh khối) liên tục được bổ sung và ít gây ô nhiễm; năng lượng không tái tạo (than đá, dầu mỏ, khí đốt tự nhiên) mất hàng triệu năm hình thành, sẽ cạn kiệt và phát thải khí nhà kính. Cần tiết kiệm năng lượng trong sinh hoạt hằng ngày.'
  ],
  formulas:[
    'Đổi đơn vị năng lượng: 1 kJ = 1000 J  ;  1 cal ≈ 4,2 J || Định luật bảo toàn: W_(toàn phần cung cấp) = W_(có ích) + W_(hao phí).'
  ],
  questions:[
    {d:1,q:'Đơn vị đo năng lượng trong hệ đo lường quốc tế SI là gì?',o:['Jun (J)','Niutơn (N)','Mét trên giây (m/s)','Độ Celsius (°C)'],w:'Đơn vị của năng lượng là Jun (kí hiệu J).'},
    {d:1,q:'Phát biểu nào đúng với Định luật bảo toàn năng lượng?',o:['Năng lượng không tự sinh ra hoặc tự mất đi, chỉ chuyển hóa hoặc truyền đi','Năng lượng có thể tự sinh ra từ hư không','Năng lượng dùng xong biến mất hoàn toàn','Các dạng năng lượng không thể chuyển đổi cho nhau'],w:'Tổng năng lượng luôn được bảo toàn.'},
    {d:1,q:'Nguồn năng lượng nào sau đây thuộc nhóm NĂNG LƯỢNG TÁI TẠO?',o:['Năng lượng ánh sáng Mặt Trời và năng lượng gió','Than đá khai thác mỏ','Dầu mỏ','Khí đốt tự nhiên'],w:'Năng lượng mặt trời, gió, nước chảy là nguồn năng lượng sạch tái tạo.'}
  ]},

{ id:'l6-trai-dat', grade:6, order:11, term:'HK2', stage:4, chapCode:'Chương X', chapTitle:'Trái Đất và bầu trời', sgk:'Bài 51–54', subj:'td',
  title:'Chuyển động nhìn thấy của Mặt Trời, Mặt Trăng, Hệ Mặt Trời & Ngân Hà', prereq:[],
  theory:[
    'Trái Đất tự quay quanh trục của nó theo chiều từ Tây sang Đông hết khoảng 24 giờ (1 ngày đêm) → sinh ra hiện tượng ngày và đêm luân phiên, đồng thời làm ta nhìn thấy Mặt Trời "mọc" ở hướng Đông và "lặn" ở hướng Tây (chuyển động nhìn thấy/biểu kiến).',
    'Mặt Trăng không tự phát sáng mà phản chiếu ánh sáng Mặt Trời tới mắt ta; Mặt Trăng quay quanh Trái Đất tạo ra các pha Mặt Trăng (Không trăng, Trăng lưỡi liềm, Bán nguyệt, Trăng tròn vào ngày rằm âm lịch).',
    'Nhật thực xảy ra khi Mặt Trăng nằm giữa Mặt Trời và Trái Đất (che ánh sáng Mặt Trời). Nguyệt thực xảy ra khi Trái Đất nằm giữa Mặt Trời và Mặt Trăng (Mặt Trăng đi vào bóng tối Trái Đất).',
    'Hệ Mặt Trời gồm ngôi sao Mặt Trời ở trung tâm (tự phát sáng) và 8 hành tinh chuyển động xung quanh theo thứ tự từ trong ra ngoài: Thủy tinh – Kim tinh – Trái Đất – Hỏa tinh – Mộc tinh – Thổ tinh – Thiên Vương tinh – Hải Vương tinh (cùng tiểu hành tinh, sao chổi). Hệ Mặt Trời chỉ là một phần nhỏ nằm ở rìa của thiên hà Ngân Hà (Milky Way).'
  ],
  formulas:[
    'Thứ tự 8 hành tinh từ gần Mặt Trời ra xa: Thủy – Kim – Trái Đất – Hỏa – Mộc – Thổ – Thiên Vương – Hải Vương || Trong đó: 4 hành tinh vòng trong cấu tạo chủ yếu bằng đá; 4 hành tinh vòng ngoài là hành tinh khí/băng khổng lồ.'
  ],
  questions:[
    {d:1,q:'Hệ Mặt Trời có tất cả bao nhiêu hành tinh quay xung quanh Mặt Trời?',n:8,t:0,u:'hành tinh',w:'Gồm 8 hành tinh: Thủy, Kim, Trái Đất, Hỏa, Mộc, Thổ, Thiên Vương, Hải Vương.'},
    {d:1,q:'Hiện tượng NHẬT THỰC xảy ra khi ba thiên thể nằm ở vị trí nào?',o:['Mặt Trăng nằm ở giữa Mặt Trời và Trái Đất','Trái Đất nằm ở giữa Mặt Trời và Mặt Trăng','Mặt Trời nằm ở giữa Trái Đất và Mặt Trăng','Sao Hỏa che khuất Mặt Trăng'],w:'Mặt Trăng che khuất ánh sáng Mặt Trời chiếu xuống một vùng trên Trái Đất.'},
    {d:1,q:'Nguyên nhân sinh ra hiện tượng ngày và đêm luân phiên nhau trên khắp Trái Đất là gì?',o:['Do Trái Đất có dạng hình cầu và tự quay quanh trục từ Tây sang Đông','Do Mặt Trời quay quanh Trái Đất 24 giờ một vòng','Do Mặt Trăng che khuất Mặt Trời mỗi tối','Do Ngân Hà tắt sáng vào ban đêm'],w:'Trái Đất tự quay nên mọi nơi trên bề mặt lần lượt được Mặt Trời chiếu sáng (ngày) rồi khuất sáng (đêm).'},
    {d:2,q:'Thiên thể nào sau đây là NGÔI SAO (tự phát ra ánh sáng)?',o:['Mặt Trời','Mặt Trăng','Trái Đất','Sao Hỏa (Hỏa tinh)'],w:'Mặt Trời là ngôi sao duy nhất trong Hệ Mặt Trời tự phát sáng; các hành tinh và vệ tinh chỉ phản xạ ánh sáng.'}
  ]}
);
