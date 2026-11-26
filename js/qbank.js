(function(){
'use strict';

// Ngân hàng câu hỏi mở rộng + Bộ sinh biến thể tham số động (Parametric Question Generator)
// Đảm bảo mỗi lần bấm vào bài học hoặc đề kiểm tra đều sinh bộ câu hỏi ngẫu nhiên mới, chuẩn xác 100% theo GDPT 2018.

function pick(arr){ return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }
function round(v, dec){ var f = Math.pow(10, dec || 0); return Math.round(v * f) / f; }
function fmt(n){ return String(n).replace('.', ','); }
function shuffle(a){
  a = a.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

// ============================================================================
// 1. NGÂN HÀNG CÂU HỎI TĨNH BỔ SUNG CHO CÁC BÀI LÍ THUYẾT / SINH HỌC / THỰC HÀNH
// ============================================================================
var EXTRA_STATIC = {
  'l7-nguyen-tu': [
    {"d":1,"cat":"lt","q":"Trong nguyên tử, hạt mang điện tích âm (−1) chuyển động xung quanh hạt nhân là hạt nào?","o":["Electron","Proton","Neutron","Hạt nhân"],"w":"Lớp vỏ nguyên tử chứa các hạt electron mang điện tích −1."},
    {"d":1,"cat":"lt","q":"Vì sao nguyên tử luôn trung hòa về điện ở trạng thái bình thường?","o":["Vì số proton (+1) trong hạt nhân luôn bằng số electron (−1) ở lớp vỏ","Vì nguyên tử chỉ chứa toàn hạt neutron","Vì proton và neutron có điện tích trái dấu nhau","Vì các electron đứng yên trong hạt nhân"],"w":"Tổng điện tích dương của các proton cân bằng đúng với tổng điện tích âm của các electron."},
    {"d":2,"cat":"lt","q":"Theo mô hình nguyên tử Rutherford – Bohr, lớp electron thứ hai (tính từ trong ra ngoài) chứa tối đa bao nhiêu electron?","o":["8 electron","2 electron","4 electron","18 electron"],"w":"Lớp thứ nhất chứa tối đa 2e, lớp thứ hai chứa tối đa 8e."},
    {"d":2,"cat":"lt","q":"Đơn vị khối lượng nguyên tử (amu) được dùng vì lí do nào sau đây?","o":["Vì khối lượng nguyên tử tính bằng gam hoặc kilôgam quá nhỏ, rất bất tiện khi ghi chép","Vì nguyên tử không có khối lượng","Vì 1 amu đúng bằng 1 kilôgam","Vì chỉ dùng để đo thể tích chất khí"],"w":"1 amu ≈ 1,6605 × 10⁻²⁴ g giúp biểu diễn khối lượng nguyên tử gọn và dễ so sánh."},
    {"d":1,"sec":"lt","q":"Trong nguyên tử, loại hạt nào mang điện tích âm (−1) và chuyển động quanh hạt nhân?","o":["Electron","Proton","Neutron","Hạt nhân"],"w":"Vỏ nguyên tử gồm các electron mang điện tích −1."},
    {"d":1,"sec":"lt","q":"Vì sao nguyên tử luôn trung hòa về điện?","o":["Vì số proton (+1) luôn bằng số electron (−1)","Vì số proton luôn bằng số neutron","Vì trong nguyên tử không có hạt mang điện","Vì neutron trung hòa hết điện tích proton"],"w":"Tổng điện tích dương của các proton triệt tiêu vừa đủ với tổng điện tích âm của các electron."},
    {"d":2,"sec":"lt","q":"Lớp electron thứ hai (kể từ hạt nhân ra ngoài) chứa tối đa bao nhiêu electron?","o":["8 electron","2 electron","18 electron","4 electron"],"w":"Lớp thứ nhất chứa tối đa 2e, lớp thứ hai chứa tối đa 8e."},
    {"d":2,"sec":"lt","q":"Đơn vị khối lượng nguyên tử chuẩn được kí hiệu là gì?","o":["amu","mol/L","Pa","Hz"],"w":"Khối lượng nguyên tử và phân tử rất nhỏ nên đo bằng đơn vị amu."}
  ],
  'l7-phan-tu': [
    {"d":1,"cat":"lt","q":"Dãy chất nào sau đây chỉ gồm toàn các HỢP CHẤT?","o":["H₂O, CO₂, NaCl, NH₃","O₂, H₂, N₂, Fe","H₂O, O₂, Cu, NaCl","Cl₂, O₃, He, Al"],"w":"Hợp chất được tạo nên từ 2 nguyên tố hóa học trở lên."},
    {"d":2,"cat":"lt","q":"Tính chất chung điển hình của các hợp chất ion (như muối ăn NaCl, MgO) ở điều kiện thường là gì?","o":["Là chất rắn ở điều kiện thường, nhiệt độ nóng chảy và nhiệt độ sôi cao","Luôn là chất khí ở điều kiện thường","Rất dễ bay hơi ở nhiệt độ phòng","Không tan trong bất kì dung môi nào"],"w":"Lực hút tĩnh điện giữa các ion ngược dấu rất bền nên hợp chất ion là chất rắn khó nóng chảy."},
    {"d":2,"cat":"lt","q":"Bản chất của liên kết cộng hóa trị trong các phân tử như H₂, O₂, H₂O, CO₂ là gì?","o":["Sự dùng chung một hay nhiều cặp electron giữa hai nguyên tử","Sự nhường hẳn electron của kim loại cho khí hiếm","Lực hút từ trường giữa hai cực nam châm","Sự trộn lẫn cơ học không có liên kết"],"w":"Các nguyên tử phi kim góp chung electron tạo thành các cặp e dùng chung."},
    {"d":1,"sec":"lt","q":"Hợp chất được cấu tạo bởi bao nhiêu nguyên tố hóa học?","o":["Từ hai nguyên tố hóa học trở lên","Chỉ duy nhất một nguyên tố hóa học","Chỉ gồm các nguyên tử khí hiếm","Không chứa nguyên tử nào"],"w":"Đơn chất từ 1 nguyên tố; hợp chất từ 2 nguyên tố trở lên."},
    {"d":2,"sec":"lt","q":"Ở điều kiện thường, các hợp chất ion (như muối ăn NaCl) thường có đặc điểm nào?","o":["Là chất rắn kết tinh, nhiệt độ nóng chảy và nhiệt độ sôi cao, tan trong nước tạo dung dịch dẫn điện","Luôn ở thể khí và rất dễ bay hơi","Không bao giờ tan trong nước","Nóng chảy ngay ở 0 °C"],"w":"Lực hút tĩnh điện giữa các ion trái dấu rất bền nên hợp chất ion khó nóng chảy, khó bay hơi."},
    {"d":2,"sec":"lt","q":"Liên kết cộng hóa trị được hình thành bằng cách nào?","o":["Bằng một hay nhiều cặp electron dùng chung giữa hai nguyên tử","Do kim loại nhường hẳn electron cho khí hiếm","Do hai hạt nhân gộp làm một","Do lực hấp dẫn trọng trường"],"w":"Hai nguyên tử (thường là phi kim) góp chung electron tạo cặp e dùng chung."}
  ],
  'l7-toc-do': [
    {"d":1,"cat":"lt","q":"Đơn vị đo tốc độ hợp pháp trong hệ đo lường quốc tế SI là gì?","o":["Mét trên giây (m/s)","Kilômét nhân giờ (km·h)","Giây trên mét (s/m)","Niutơn trên mét (N/m)"],"w":"Quãng đường chuẩn SI là mét (m), thời gian là giây (s) nên đơn vị tốc độ là m/s."},
    {"d":2,"cat":"lt","q":"Trên cùng một hệ trục đồ thị quãng đường – thời gian (s – t) của hai xe chuyển động đều, đường biểu diễn của xe A dốc hơn xe B cho biết điều gì?","o":["Tốc độ của xe A lớn hơn tốc độ của xe B","Xe A đi chậm hơn xe B","Xe A đang đứng yên","Hai xe có tốc độ bằng nhau"],"w":"Trong cùng khoảng thời gian t, đường dốc hơn đi được quãng đường s lớn hơn nên tốc độ lớn hơn."},
    {"d":2,"cat":"lt","q":"Vì sao khi trời mưa đường trơn trượt, người lái xe phải GIẢM tốc độ và TĂNG khoảng cách an toàn với xe phía trước?","o":["Vì lực ma sát giảm làm quãng đường phanh dài hơn, dễ xảy ra va chạm nếu đi sát","Vì trời mưa làm khối lượng xe giảm đi một nửa","Vì đồng hồ đo tốc độ không hoạt động khi trời mưa","Để xe tiêu tốn nhiều xăng hơn"],"w":"Đường trơn giảm ma sát bám đường nên xe trượt dài hơn khi phanh gấp."},
    {"d":2,"sec":"lt","q":"Trên đồ thị quãng đường – thời gian của hai xe chuyển động thẳng đều cùng xuất phát từ gốc tọa độ, đường biểu diễn nào dốc hơn cho biết điều gì?","o":["Xe đó có tốc độ chuyển động lớn hơn","Xe đó có tốc độ nhỏ hơn","Xe đó đang đứng yên","Xe đó đi ngược lại"],"w":"Trong cùng thời gian t, đường dốc hơn đi được quãng đường s lớn hơn nên tốc độ v lớn hơn."},
    {"d":2,"sec":"lt","q":"Vì sao khi trời mưa đường trơn ướt, người lái xe phải giảm tốc độ và giữ khoảng cách xa hơn so với khi đường khô ráo?","o":["Vì lực ma sát giảm làm quãng đường phanh tăng dài hơn, dễ xảy ra va chạm","Vì trời mưa làm xe nhẹ đi một nửa","Vì đồng hồ tốc độ ngừng chạy khi mưa","Vì mưa làm tăng ma sát gấp mười lần"],"w":"Đường trơn giảm ma sát bám đường khiến quãng đường hãm phanh kéo dài."}
  ],
  'l7-anh-sang': [
    {"d":1,"cat":"lt","q":"Trong môi trường trong suốt và đồng tính, ánh sáng truyền đi theo đường nào?","o":["Theo đường thẳng","Theo đường gấp khúc bất kì","Theo đường xoắn ốc","Theo đường tròn khép kín"],"w":"Định luật truyền thẳng của ánh sáng trong môi trường trong suốt và đồng tính."},
    {"d":2,"cat":"lt","q":"Hiện tượng NHẬT THỰC toàn phần quan sát được ở nơi trên Trái Đất nằm trong vùng nào?","o":["Vùng bóng tối của Mặt Trăng in trên mặt đất (khi Mặt Trăng nằm giữa Mặt Trời và Trái Đất)","Vùng bóng tối của Trái Đất che Mặt Trăng","Nơi đang là ban đêm trên Trái Đất","Khi Mặt Trời nằm giữa Trái Đất và Mặt Trăng"],"w":"Mặt Trăng che khuất hoàn toàn ánh sáng Mặt Trời chiếu tới vùng bóng tối trên Trái Đất."},
    {"d":2,"cat":"lt","q":"Phát biểu nào sau đây ĐÚNG về đường pháp tuyến tại điểm tới trên gương phẳng?","o":["Là đường thẳng vuông góc với mặt gương phẳng tại điểm tới","Là đường thẳng nằm trùng với mặt gương","Là tia sáng chiếu từ nguồn sáng tới gương","Luôn hợp với mặt gương một góc 45°"],"w":"Pháp tuyến luôn vuông góc (90°) với mặt gương tại điểm tới I."},
    {"d":1,"sec":"lt","q":"Hiện tượng nguyệt thực xảy ra khi vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng như thế nào?","o":["Trái Đất nằm giữa Mặt Trời và Mặt Trăng, che khuất ánh sáng chiếu tới Mặt Trăng","Mặt Trăng nằm giữa Mặt Trời và Trái Đất","Mặt Trời nằm giữa Trái Đất và Mặt Trăng","Ba thiên thể tạo thành tam giác đều"],"w":"Mặt Trăng đi vào vùng bóng tối phía sau Trái Đất gây nguyệt thực."},
    {"d":2,"sec":"lt","q":"Theo định luật phản xạ ánh sáng, tia phản xạ nằm trong mặt phẳng nào?","o":["Mặt phẳng chứa tia tới và đường pháp tuyến của gương tại điểm tới","Mặt phẳng trùng với mặt gương","Mặt phẳng vuông góc với pháp tuyến","Bất kì mặt phẳng nào trong không gian"],"w":"Tia phản xạ đồng phẳng với tia tới và pháp tuyến, ở bên kia pháp tuyến so với tia tới."}
  ],
  'l8-phan-ung': [
    {"d":1,"cat":"lt","q":"Dấu hiệu nào sau đây chứng tỏ chắc chắn ĐÃ XẢY RA phản ứng hóa học khi cho viên kẽm vào dung dịch HCl?","o":["Có các bọt khí không màu sủi lên trên bề mặt viên kẽm và viên kẽm tan dần","Dung dịch vẫn trong suốt ở trong ống nghiệm thủy tinh","Ống nghiệm được kẹp trên giá đỡ","Viên kẽm chìm xuống đáy ống nghiệm do nặng hơn nước"],"w":"Xuất hiện chất khí mới (H₂↑) và kẽm biến đổi thành muối tan là dấu hiệu phản ứng hóa học."},
    {"d":2,"cat":"lt","q":"Khi lập phương trình hóa học, thao tác nào sau đây bị NGHIÊM CẤM?","o":["Tự ý thay đổi các chỉ số nguyên tử có sẵn trong công thức hóa học của chất","Đặt hệ số nguyên trước công thức hóa học các chất","Kiểm tra lại số nguyên tử mỗi nguyên tố ở hai vế","Thay dấu nét đứt bằng dấu mũi tên sau khi cân bằng xong"],"w":"Sửa chỉ số chân sẽ làm biến đổi chất đó thành một chất khác sai công thức hóa học."},
    {"d":2,"cat":"lt","q":"Phản ứng nào sau đây là phản ứng THU NHIỆT?","o":["Nung nóng để phân hủy đá vôi (CaCO₃) thành vôi sống và khí CO₂","Đốt cháy than đá trong lò nhiệt điện","Đốt cháy cồn y tế trong đèn cồn","Tôi vôi sống (CaO tác dụng với nước tỏa hơi nóng)"],"w":"Nung đá vôi phải cung cấp nhiệt liên tục; ngừng đun phản ứng dừng ngay."},
    {"d":1,"sec":"lt","q":"Dấu hiệu nào sau đây chứng tỏ chắc chắn đã có PHẢN ỨNG HÓA HỌC xảy ra?","o":["Xuất hiện chất kết tủa mới, sủi bọt khí hoặc đổi màu sắc đặc trưng","Chất rắn bị nghiền nhỏ thành bột mịn","Nước lỏng bay hơi thành hơi nước","Hòa tan đường cát vào nước ấm"],"w":"Tạo thành chất mới thể hiện qua kết tủa, khí thoát ra, đổi màu hoặc tỏa/thu nhiệt rõ rệt."},
    {"d":2,"sec":"lt","q":"Quá trình nung đá vôi CaCO₃ cần phải cung cấp nhiệt liên tục, nếu ngừng đun thì phản ứng dừng lại. Đó là loại phản ứng gì?","o":["Phản ứng thu nhiệt","Phản ứng tỏa nhiệt","Sự nóng chảy vật lí","Sự ngưng tụ"],"w":"Phản ứng cần hấp thụ năng lượng nhiệt trong suốt quá trình diễn ra là phản ứng thu nhiệt."},
    {"d":2,"sec":"lt","q":"Khi cân bằng phương trình hóa học, thao tác nào sau đây bị NGHIÊM CẤM?","o":["Tự ý thay đổi các chỉ số nguyên tử ở chân công thức hóa học của chất","Đặt hệ số nguyên trước công thức hóa học","Kiểm tra lại số nguyên tử mỗi nguyên tố ở hai vế","Viết điều kiện phản ứng trên mũi tên"],"w":"Sửa chỉ số chân sẽ làm biến đổi chất này thành chất khác sai bản chất hóa học."}
  ],
  'l8-mol': [
    {"d":1,"cat":"lt","q":"1 mol nguyên tử sắt (Fe) và 1 mol phân tử nước (H₂O) có cùng đại lượng nào sau đây?","o":["Cùng chứa 6,022 × 10²³ hạt vi mô (nguyên tử Fe / phân tử H₂O)","Cùng có khối lượng bằng 56 gam","Cùng chiếm thể tích 24,79 lít ở 25 °C, 1 bar","Cùng là đơn chất kim loại"],"w":"Theo định nghĩa mol, 1 mol bất kì chất nào cũng chứa N_A = 6,022 × 10²³ hạt đại diện."},
    {"d":1,"cat":"lt","q":"Đơn vị của khối lượng mol (kí hiệu M) là gì?","o":["Gam trên mol (g/mol)","Gam trên lít (g/L)","Mol trên lít (mol/L)","Lít trên mol (L/mol)"],"w":"Khối lượng mol M là khối lượng tính bằng gam của 1 mol chất, đơn vị g/mol."},
    {"d":2,"cat":"lt","q":"Vì sao KHÔNG ĐƯỢC áp dụng công thức V = n × 24,79 (L) để tính thể tích của 1 mol nước lỏng (H₂O lỏng) ở 25 °C, 1 bar?","o":["Vì công thức V = n × 24,79 chỉ đúng cho CHẤT KHÍ, còn nước lỏng 1 mol (18 g) chỉ có thể tích khoảng 18 mL","Vì nước lỏng không có khối lượng mol","Vì nước lỏng nhẹ hơn khí hydrogen","Vì 1 mol nước lỏng chiếm tới 1000 lít"],"w":"Khoảng cách giữa các phân tử lỏng rất nhỏ so với chất khí nên 24,79 L/mol chỉ áp dụng cho chất khí."},
    {"d":2,"cat":"lt","q":"Trong phòng thí nghiệm, muốn thu một chất khí NẶNG HƠN không khí (như CO₂, O₂) bằng phương pháp đẩy không khí, ta phải đặt ống nghiệm thu khí như thế nào?","o":["Đặt đứng ống nghiệm (miệng hướng lên trên)","Đặt úp ngược ống nghiệm (miệng hướng xuống dưới)","Bịt kín hoàn toàn không cho ống dẫn khí vào","Phải nhúng ngập trong dầu ăn"],"w":"Khí nặng hơn không khí (d > 1) sẽ chìm xuống đáy bình và đẩy không khí nhẹ hơn ra ngoài miệng trên."},
    {"d":1,"sec":"lt","q":"1 mol của bất kì chất nào cũng chứa bao nhiêu hạt vi mô (nguyên tử hoặc phân tử) của chất đó?","o":["6,022 × 10²³ hạt (số Avogadro)","24,79 hạt","1000 hạt","29 hạt"],"w":"Theo định nghĩa mol, 1 mol chứa N_A = 6,022 × 10²³ hạt vi mô."},
    {"d":2,"sec":"lt","q":"Công thức tính thể tích V = 24,79 · n (L) ở 25 °C và 1 bar chỉ được áp dụng cho chất ở thể nào?","o":["Chỉ áp dụng cho chất khí","Áp dụng cho cả chất rắn, chất lỏng và chất khí","Chỉ áp dụng cho kim loại rắn","Chỉ áp dụng cho nước lỏng"],"w":"24,79 L/mol là thể tích mol của chất khí ở điều kiện chuẩn (25 °C, 1 bar)."},
    {"d":2,"sec":"lt","q":"Để thu một chất khí NẶNG HƠN không khí (có M > 29 g/mol) bằng phương pháp đẩy không khí, ta phải đặt miệng bình thu như thế nào?","o":["Đặt ĐỨNG bình thu khí (miệng bình hướng lên trên)","Đặt ÚP NGƯỢC bình thu khí","Bắt buộc đặt chìm dưới đáy chậu dầu","Đặt nằm ngang rồi đậy kín trước khi dẫn khí"],"w":"Khí nặng hơn không khí chìm xuống đáy bình và đẩy không khí nhẹ hơn ra ở miệng trên."}
  ],
  'l8-dung-dich': [
    {"d":1,"cat":"lt","q":"Trong dung dịch nước đường (hòa tan đường kính trắng vào cốc nước cất), chất nào đóng vai trò là DUNG MÔI?","o":["Nước cất","Đường kính trắng","Cốc thủy tinh","Không khí trên mặt cốc"],"w":"Nước hòa tan đường nên nước là dung môi, đường là chất tan."},
    {"d":2,"cat":"lt","q":"Khi tăng nhiệt độ của nước thì độ tan của phần lớn các chất rắn (như đường, muối KNO₃) thay đổi như thế nào?","o":["Độ tan tăng lên (hòa tan được nhiều chất rắn hơn)","Độ tan giảm về 0","Không bao giờ thay đổi","Chất rắn biến hết thành chất khí"],"w":"Phần lớn chất rắn tan nhiều hơn trong nước nóng so với nước lạnh."},
    {"d":2,"cat":"lt","q":"Khi rót thêm nước cất vào một cốc dung dịch muối ăn để pha loãng, đại lượng nào sau đây KHÔNG THAY ĐỔI?","o":["Khối lượng và số mol chất tan (muối ăn) có trong cốc","Khối lượng dung dịch trong cốc","Nồng độ phần trăm (C%) của dung dịch","Nồng độ mol (C_M) của dung dịch"],"w":"Chỉ thêm dung môi nước nên lượng muối chất tan giữ nguyên, còn nồng độ giảm xuống."},
    {"d":1,"sec":"lt","q":"Trong dung dịch nước đường (hòa tan đường kính trắng vào nước cất), chất nào đóng vai trò là DUNG MÔI?","o":["Nước cất","Đường kính","Cả đường và nước đều là chất tan","Không khí trên mặt cốc"],"w":"Nước hòa tan đường tạo dung dịch đồng nhất nên nước là dung môi, đường là chất tan."},
    {"d":2,"sec":"lt","q":"Khi rót thêm nước cất vào một dung dịch muối ăn để pha loãng, đại lượng nào sau đây KHÔNG THAY ĐỔI?","o":["Khối lượng và số mol chất tan có trong dung dịch","Khối lượng của cả dung dịch","Nồng độ phần trăm C% của dung dịch","Nồng độ mol C_M của dung dịch"],"w":"Thêm nước chỉ tăng lượng dung môi làm giảm nồng độ, còn lượng chất tan ban đầu giữ nguyên."}
  ],
  'l8-tinh-pthh': [
    {"d":1,"cat":"lt","q":"Khi cho viên sủi vitamin C vào cốc nước ấm thấy sủi bọt mạnh và tan nhanh hơn hẳn so với cho vào cốc nước đá lạnh. Yếu tố nào đã làm tăng tốc độ phản ứng?","o":["Nhiệt độ","Áp suất khí quyển","Chất ức chế","Khối lượng cốc thủy tinh"],"w":"Nhiệt độ cao làm các hạt chuyển động nhanh, va chạm hiệu quả nhiều hơn nên phản ứng nhanh hơn."},
    {"d":2,"cat":"lt","q":"Trong bài toán cho biết số mol của cả hai chất tham gia phản ứng (có 1 chất dư), khối lượng sản phẩm tạo thành PHẢI được tính theo chất nào?","o":["Tính theo chất phản ứng HẾT","Tính theo chất còn DƯ nhiều hơn","Tính theo trung bình cộng số mol hai chất","Cộng số mol cả hai chất lại rồi tính"],"w":"Khi chất hết đã dùng cạn kiệt thì phản ứng dừng lại ngay, nên lượng sản phẩm phụ thuộc hoàn toàn vào chất hết."},
    {"d":2,"cat":"lt","q":"Vì sao trong thực tế sản xuất hóa học, hiệu suất phản ứng (H%) thường nhỏ hơn 100%?","o":["Do phản ứng không hoàn toàn, có phản ứng phụ hoặc hao hụt trong quá trình thu gom sản phẩm","Vì định luật bảo toàn khối lượng không đúng trong nhà máy","Vì chất xúc tác làm mất sản phẩm","Vì khối lượng mol thay đổi theo mùa"],"w":"Sự thất thoát và phản ứng thuận nghịch làm lượng thực tế thu được nhỏ hơn lí thuyết."},
    {"d":1,"sec":"lt","q":"Trong phương trình hóa học 2H₂ + O₂ —(t°)→ 2H₂O, tỉ lệ số mol giữa khí H₂ : khí O₂ : hơi nước H₂O là bao nhiêu?","o":["2 : 1 : 2","1 : 1 : 1","2 : 2 : 1","1 : 2 : 2"],"w":"Tỉ lệ số mol các chất phản ứng và tạo thành đúng bằng tỉ lệ các hệ số cân bằng trên PTHH."},
    {"d":2,"sec":"lt","q":"Khi đề bài cho biết số mol ban đầu của cả 2 chất tham gia phản ứng mà có 1 chất còn dư, lượng sản phẩm tạo thành phải tính theo chất nào?","o":["Tính theo chất phản ứng HẾT","Tính theo chất còn DƯ","Lấy trung bình cộng số mol hai chất","Tính theo chất có khối lượng mol lớn hơn"],"w":"Khi chất thiếu phản ứng hết thì phản ứng dừng lại nên sản phẩm phụ thuộc hoàn toàn vào chất hết."}
  ],
  'l8-khoi-luong-rieng': [
    {"d":1,"cat":"lt","q":"Áp lực là lực có đặc điểm nào sau đây?","o":["Là lực ép có phương vuông góc với mặt bị ép","Là mọi lực song song với mặt đất","Là lực đẩy Archimedes của nước","Chỉ là lực từ của nam châm"],"w":"Áp lực phải là lực ép vuông góc với diện tích bị ép."},
    {"d":2,"cat":"lt","q":"Vì sao người ta phải mài thật mỏng và sắc lưỡi dao, lưỡi kéo hoặc vót nhọn đầu đinh?","o":["Để giảm diện tích bị ép S, giúp tăng mạnh áp suất p chỉ với lực tác dụng vừa phải","Để làm tăng diện tích bị ép S","Để làm giảm áp suất xuống nhỏ nhất","Để dao nặng thêm nhiều kilôgam"],"w":"Theo p = F / S, diện tích S càng nhỏ thì áp suất p càng lớn giúp cắt gọt, đóng đinh dễ dàng."},
    {"d":2,"cat":"lt","q":"Trong bình thông nhau chứa cùng một chất lỏng đang đứng yên, mực mặt thoáng của chất lỏng ở các nhánh khác nhau có đặc điểm gì?","o":["Luôn nằm trên cùng một mặt phẳng ngang (cùng độ cao)","Nhánh nào to hơn thì mực nước thấp hơn","Nhánh nào hẹp hơn thì mực nước cao gấp đôi","Phụ thuộc vào hình dạng cong hay thẳng của ống"],"w":"Quy tắc bình thông nhau: cùng một chất lỏng đứng yên thì các mặt thoáng ở cùng một độ cao."},
    {"d":1,"sec":"lt","q":"Áp lực là lực ép có phương như thế nào đối với mặt bị ép?","o":["Có phương vuông góc với mặt bị ép","Có phương song song với mặt bị ép","Có phương bất kì không cần tiếp xúc","Luôn hướng thẳng đứng từ dưới lên"],"w":"Định nghĩa áp lực: lực ép có phương vuông góc với diện tích mặt bị ép."},
    {"d":2,"sec":"lt","q":"Vì sao lưỡi dao, lưỡi kéo thường được mài thật mỏng và sắc bén?","o":["Để giảm diện tích mặt bị ép, từ đó làm tăng áp suất giúp cắt gọt vật dễ dàng","Để làm giảm áp suất tác dụng lên vật","Để tăng khối lượng riêng của thép","Để không có lực ma sát"],"w":"Theo p = F / S, giữ nguyên lực F mà giảm nhỏ diện tích S thì áp suất p tăng lên rất lớn."},
    {"d":2,"sec":"lt","q":"Khi càng lên cao (như leo lên đỉnh núi cao Phan-xi-păng), áp suất khí quyển thay đổi như thế nào?","o":["Áp suất khí quyển càng giảm do lớp không khí loãng dần và mỏng đi","Áp suất khí quyển tăng lên gấp đôi","Áp suất khí quyển giữ nguyên không đổi","Áp suất khí quyển biến mất hoàn toàn ở độ cao 500 m"],"w":"Càng lên cao mật độ phân tử khí và bề dày cột khí quyển phía trên càng giảm nên áp suất giảm."}
  ],
  'l8-archimedes': [
    {"d":2,"cat":"lt","q":"Độ lớn của lực đẩy Archimedes tác dụng lên một vật nhúng chìm hoàn toàn trong nước PHỤ THUỘC vào những yếu tố nào?","o":["Trọng lượng riêng của chất lỏng và thể tích của phần vật chìm trong chất lỏng","Khối lượng riêng của chất làm vật và độ sâu nhúng vật","Hình dạng tròn hay vuông của vật","Khối lượng của bình chứa nước"],"w":"Theo F_A = d_lỏng · V_chìm, lực đẩy chỉ phụ thuộc bản chất chất lỏng và thể tích phần chìm."},
    {"d":2,"sec":"lt","q":"Độ lớn của lực đẩy Archimedes tác dụng lên vật nhúng trong chất lỏng phụ thuộc vào những yếu tố nào?","o":["Trọng lượng riêng của chất lỏng và thể tích của phần chất lỏng bị vật chiếm chỗ","Khối lượng riêng của vật và độ sâu nhúng vật (khi đã chìm hẳn)","Hình dạng của bình chứa chất lỏng","Màu sắc và nhiệt độ nóng chảy của vật"],"w":"Theo F_A = d_lỏng · V_chìm, F_A chỉ phụ thuộc bản chất chất lỏng và phần thể tích chìm."}
  ],
  'l8-don-bay': [
    {"d":2,"cat":"lt","q":"Cánh tay đòn của lực đối với trục quay O được xác định như thế nào?","o":["Là khoảng cách vuông góc từ trục quay O đến giá của lực","Là tổng chiều dài của cả thanh đòn bẩy","Là khoảng cách từ tay người đến mặt đất","Là trọng lượng của thanh đòn bẩy"],"w":"Cánh tay đòn d luôn là đoạn hạ vuông góc từ tâm quay O tới đường thẳng chứa lực (giá của lực)."},
    {"d":2,"sec":"lt","q":"Cánh tay đòn của lực đối với trục quay O là khoảng cách nào?","o":["Khoảng cách vuông góc từ trục quay O đến giá của lực","Chiều dài toàn bộ thanh đòn bẩy","Khoảng cách từ điểm đặt lực đến mặt đất","Độ lớn của lực nhân với khối lượng thanh"],"w":"Cánh tay đòn d luôn là đoạn hạ vuông góc từ tâm quay O tới đường thẳng chứa lực (giá của lực)."}
  ],
  'l6-mo-dau': [
    {"d":1,"cat":"lt","q":"Hoạt động nào sau đây là hoạt động nghiên cứu Khoa học tự nhiên?","o":["Tìm hiểu sự phát triển của mầm đậu xanh dưới ánh sáng Mặt Trời","Sáng tác bài thơ mùa thu","Dịch truyện cổ tích sang tiếng Anh","Luyện tập hát hợp xướng"],"w":"Nghiên cứu quy luật thế giới tự nhiên và vật sống thuộc lĩnh vực KHTN."},
    {"d":2,"cat":"bt","q":"Đổi khối lượng 2,4 kg sang đơn vị gam (g).","n":2400,"t":0,"u":"g","w":"2,4 × 1000 = 2400 g."},
    {"d":2,"cat":"bt","q":"Đổi khoảng thời gian 15 phút sang đơn vị giây (s).","n":900,"t":0,"u":"s","w":"15 × 60 = 900 s."},
    {"d":3,"cat":"bt","q":"Nhiệt độ cơ thể người khỏe mạnh là 37 °C thì tương ứng bao nhiêu độ Fahrenheit (°F)? (biết °F = °C × 1,8 + 32)","n":98.6,"t":0.1,"u":"°F","w":"37 × 1,8 + 32 = 98,6 °F."},
    {"d":1,"sec":"lt","q":"Đơn vị đo khối lượng chuẩn trong hệ đo lường quốc tế SI là gì?","o":["Kilôgam (kg)","Gam (g)","Lít (L)","Mét (m)"],"w":"Đơn vị khối lượng chuẩn SI là kilôgam (kg)."},
    {"d":2,"sec":"bt","q":"Đổi khối lượng 2,5 kg sang đơn vị gam (g).","n":2500,"t":0,"u":"g","w":"2,5 × 1000 = 2500 g."},
    {"d":3,"sec":"bt","q":"Nhiệt kế chỉ 25 °C thì tương ứng bao nhiêu độ °F? (biết °F = °C × 1,8 + 32)","n":77,"t":0.1,"u":"°F","w":"25 × 1,8 + 32 = 45 + 32 = 77 °F."}
  ],
  'l6-the-chat': [
    {"d":1,"cat":"lt","q":"Hiện tượng sương đọng thành giọt nước trên lá cây vào buổi sáng sớm là quá trình chuyển thể nào?","o":["Sự ngưng tụ (hơi nước trong không khí lạnh đi thành nước lỏng)","Sự nóng chảy","Sự đông đặc","Sự sôi"],"w":"Hơi nước (thể khí) gặp lạnh chuyển thành giọt sương (thể lỏng) gọi là sự ngưng tụ."},
    {"d":2,"cat":"bt","q":"Ở áp suất thường, nước tinh khiết sôi ở bao nhiêu °C và trong suốt thời gian đang sôi nhiệt độ nước thay đổi thế nào?","o":["Sôi ở 100 °C và nhiệt độ giữ không đổi ở 100 °C trong suốt lúc đang sôi","Sôi ở 100 °C rồi tăng vọt lên 200 °C","Sôi ở 50 °C","Sôi ở 0 °C"],"w":"Trong suốt quá trình sôi, nhiệt độ của chất lỏng không thay đổi."},
    {"d":3,"cat":"bt","q":"Phơi quần áo ướt ở nơi nắng ấm, thoáng gió và căng rộng quần áo ra giúp nước bay hơi nhanh hơn vì sao?","o":["Vì tăng đồng thời nhiệt độ, gió và diện tích mặt thoáng của nước","Vì làm nước đông đặc thành đá","Vì ngăn không cho không khí tiếp xúc","Vì làm tăng độ ẩm không khí"],"w":"Tốc độ bay hơi phụ thuộc nhiệt độ, gió và diện tích mặt thoáng."},
    {"d":1,"sec":"lt","q":"Sự chuyển từ thể hơi (khí) sang thể lỏng được gọi là gì?","o":["Sự ngưng tụ","Sự bay hơi","Sự nóng chảy","Sự đông đặc"],"w":"Hơi nước gặp lạnh đọng thành giọt nước là sự ngưng tụ."},
    {"d":2,"sec":"bt","q":"Ở áp suất thường, nước tinh khiết sôi ở nhiệt độ bao nhiêu °C?","n":100,"t":0,"u":"°C","w":"Nhiệt độ sôi chuẩn của nước tinh khiết là 100 °C."},
    {"d":3,"sec":"bt","q":"Đun nóng một cục nước đá đang tan ở 0 °C. Khi đá chưa tan hết thành nước lỏng thì nhiệt độ của hỗn hợp bằng bao nhiêu °C?","n":0,"t":0,"u":"°C","w":"Trong suốt thời gian nóng chảy, nhiệt độ của chất rắn kết tinh giữ không đổi ở 0 °C."}
  ],
  'l6-oxy-kk': [
    {"d":1,"cat":"lt","q":"Ba điều kiện cần thiết để sự cháy phát sinh và duy trì là gì?","o":["Chất cháy, khí oxygen và nhiệt độ đạt tới điểm cháy","Chất cháy, khí nitrogen và nước lạnh","Khí carbon dioxide, cát và gió","Ánh sáng đèn pin và nước"],"w":"Thiếu 1 trong 3 yếu tố (chất cháy, O₂, nhiệt độ đủ cao) thì đám cháy sẽ tắt."},
    {"d":2,"cat":"bt","q":"Trong 500 lít không khí khô sạch có chứa khoảng bao nhiêu lít khí oxygen (biết O₂ chiếm khoảng 21% thể tích không khí)?","n":105,"t":1,"u":"L","w":"V(O₂) = 500 × 21% = 105 lít."},
    {"d":3,"cat":"bt","q":"Khi chảo dầu ăn trên bếp bốc cháy, vì sao người ta đậy kín vung nồi và tắt bếp thay vì tạt nước vào?","o":["Đậy vung giúp ngăn khí oxygen tiếp xúc với dầu đang cháy và tắt bếp hạ nhiệt; tạt nước làm dầu bắn bùng to hơn","Vì vung nồi sinh ra khí oxygen","Vì nước là chất dễ cháy","Để dầu sôi nhanh hơn"],"w":"Ngăn nguồn O₂ và không dùng nước với đám cháy xăng dầu."},
    {"d":2,"sec":"bt","q":"Khí oxygen chiếm khoảng bao nhiêu phần trăm thể tích không khí khô?","n":21,"t":0,"u":"%","w":"Không khí có khoảng 78% N₂, 21% O₂ và 1% các khí khác."},
    {"d":3,"sec":"bt","q":"Một căn phòng kín có thể tích 60 m³ không khí. Thể tích khí oxygen trong phòng khoảng bao nhiêu m³? (lấy O₂ chiếm 21% thể tích)","n":12.6,"t":0.1,"u":"m³","w":"V_O₂ = 60 × 21% = 12,6 m³."},
    {"d":1,"sec":"lt","q":"Khi càng lên cao trên núi cao, người leo núi cảm thấy khó thở hơn vì sao?","o":["Không khí càng lên cao càng loãng, lượng khí oxygen giảm","Trên núi cao có toàn khí độc","Trên núi cao không có trọng lực","Nhiệt độ trên núi bằng 100 °C"],"w":"Càng lên cao mật độ không khí càng loãng nên phân áp O₂ thấp."},
    {"d":2,"sec":"bt","q":"Trong 200 lít không khí khô sạch có chứa khoảng bao nhiêu lít khí nitrogen (biết N₂ chiếm 78% thể tích)?","n":156,"t":1,"u":"L","w":"V(N₂) = 200 × 78% = 156 lít."}
  ],
  'l6-hon-hop': [
    {"d":1,"cat":"lt","q":"Nước cất y tế (chỉ gồm các phân tử H₂O) được xếp vào loại nào?","o":["Chất tinh khiết","Hỗn hợp không đồng nhất","Huyền phù","Nhũ tương"],"w":"Chất tinh khiết chỉ gồm duy nhất 1 chất, không lẫn chất khác."},
    {"d":2,"cat":"bt","q":"Dầu ăn và nước không tan vào nhau mà tách thành hai lớp riêng biệt trong bình. Dùng dụng cụ và phương pháp nào để tách riêng dầu ăn ra khỏi nước?","o":["Dùng phễu chiết theo phương pháp chiết","Dùng nam châm hút dầu ăn","Dùng giấy lọc thông thường","Để ngoài nắng cho dầu ăn hóa rắn"],"w":"Chiết dùng để tách hai chất lỏng không hòa tan vào nhau."},
    {"d":3,"cat":"bt","q":"Một hỗn hợp bột gồm bột sắt (Fe), muối ăn (NaCl) và cát mịn. Thứ tự các bước hợp lí nhất để tách riêng cả 3 chất là gì?","o":["Dùng nam châm hút sắt → hòa tan phần còn lại vào nước rồi lọc lấy cát → cô cạn nước lọc thu muối ăn","Đun chảy cả 3 chất ở 100 °C","Chỉ dùng giấy lọc khô","Đổ dầu ăn vào khuấy đều"],"w":"Sắt có từ tính hút bằng nam châm; cát không tan tách bằng lọc; muối tan thu bằng cô cạn."},
    {"d":2,"sec":"bt","q":"Hòa tan 15 g muối ăn vào 85 g nước sạch được bao nhiêu gam dung dịch nước muối?","n":100,"t":0,"u":"g","w":"m_dung dịch = m_chất tan + m_dung môi = 15 + 85 = 100 g."},
    {"d":3,"sec":"bt","q":"Hỗn hợp dầu ăn bị lẫn vào nước thuộc loại hỗn hợp gì và tách bằng dụng cụ nào?","o":["Nhũ tương (không đồng nhất); tách bằng phễu chiết","Dung dịch đồng nhất; tách bằng giấy lọc","Chất tinh khiết; tách bằng nam châm","Huyền phù; không thể tách"],"w":"Dầu ăn không tan và nhẹ hơn nước, dùng phễu chiết tách hai lớp chất lỏng."}
  ],
  'l6-te-bao': [
    {"d":1,"cat":"lt","q":"Thành phần nào có ở tế bào thực vật giúp tế bào có hình dạng cứng cáp ổn định nhưng KHÔNG có ở tế bào động vật?","o":["Thành tế bào bằng cellulose","Màng tế bào","Tế bào chất","Nhân tế bào"],"w":"Tế bào thực vật có thành tế bào và lục lạp mà tế bào động vật không có."},
    {"d":2,"cat":"bt","q":"Một tế bào vi khuẩn tiến hành phân chia liên tiếp 4 lần. Số tế bào con tạo thành là bao nhiêu?","n":16,"t":0,"u":"tế bào","w":"N = 2⁴ = 16 tế bào."},
    {"d":3,"cat":"bt","q":"Từ 3 tế bào ban đầu cùng phân chia liên tiếp 3 lần như nhau thì tổng số tế bào con thu được là bao nhiêu?","n":24,"t":0,"u":"tế bào","w":"Mỗi tế bào tạo 2³ = 8 tế bào con ⇒ 3 tế bào tạo 3 × 8 = 24 tế bào."},
    {"d":1,"sec":"lt","q":"Thành phần nào chỉ có ở tế bào thực vật mà KHÔNG có ở tế bào động vật?","o":["Thành tế bào cellulose và lục lạp","Màng tế bào","Tế bào chất","Nhân tế bào"],"w":"Tế bào thực vật có thành tế bào cứng cáp và lục lạp quang hợp."},
    {"d":3,"sec":"bt","q":"Từ 1 tế bào vi khuẩn sau 5 lần phân chia liên tiếp tạo ra bao nhiêu tế bào con?","n":32,"t":0,"u":"tế bào","w":"N = 2⁵ = 32 tế bào."},
    {"d":2,"sec":"lt","q":"Vi khuẩn thuộc nhóm tế bào nhân sơ vì đặc điểm cấu tạo nào?","o":["Chưa có màng nhân bao bọc vật chất di truyền (chỉ có vùng nhân)","Không có màng tế bào","Không có tế bào chất","Có nhiều lục lạp lớn"],"w":"Tế bào nhân sơ chưa có nhân hoàn chỉnh có màng nhân."},
    {"d":3,"sec":"bt","q":"Thành phần nào của tế bào điều khiển mọi hoạt động sống của tế bào nhân thực?","o":["Nhân tế bào","Không bào","Thành cellulose","Lông bơi"],"w":"Nhân tế bào chứa vật chất di truyền điều khiển hoạt động sống."}
  ],
  'l6-phan-loai': [
    {"d":1,"cat":"lt","q":"Sinh vật nào sau đây thuộc giới KHỞI SINH (cấu tạo tế bào nhân sơ)?","o":["Vi khuẩn","Nấm rơm","Cây lúa","Con mèo"],"w":"Vi khuẩn có cấu tạo đơn bào nhân sơ thuộc giới Khởi sinh."},
    {"d":2,"cat":"bt","q":"Cá voi sống dưới biển nhưng nuôi con bằng sữa mẹ và hô hấp bằng phổi. Cá voi được xếp vào lớp động vật nào?","o":["Lớp Thú (Động vật có vú)","Lớp Cá","Lớp Lưỡng cư","Động vật không xương sống"],"w":"Đẻ con và nuôi con bằng sữa là đặc điểm đặc trưng của lớp Thú."},
    {"d":3,"cat":"bt","q":"Nhóm thực vật nào đã có mạch dẫn trong thân rễ, sinh sản bằng bào tử và chưa có hoa, hạt?","o":["Dương xỉ","Rêu tường","Thông (Hạt trần)","Cam, bưởi (Hạt kín)"],"w":"Dương xỉ có mạch dẫn nhưng sinh sản bằng bào tử, chưa có hạt."},
    {"d":2,"sec":"bt","q":"Sắp xếp nào sau đây đúng thứ tự từ bậc phân loại lớn đến nhỏ?","o":["Giới → Ngành → Lớp → Bộ → Họ → Chi → Loài","Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới","Giới → Lớp → Ngành → Họ → Bộ → Chi → Loài","Ngành → Giới → Bộ → Lớp → Chi → Họ → Loài"],"w":"Thứ tự chuẩn: Giới – Ngành – Lớp – Bộ – Họ – Chi – Loài."},
    {"d":3,"sec":"bt","q":"Cá voi và cá heo sống dưới biển nhưng được xếp vào lớp Thú (không phải lớp Cá) vì đặc điểm nào?","o":["Hô hấp bằng phổi, đẻ con và nuôi con bằng sữa mẹ","Bơi bằng vây và thở bằng mang","Đẻ trứng dưới cát biển","Có lớp vảy sừng như thằn lằn"],"w":"Đẻ con và nuôi con bằng sữa mẹ là đặc điểm quyết định của lớp Thú."},
    {"d":1,"sec":"lt","q":"Bệnh cúm, sốt xuất huyết, thủy đậu ở người do tác nhân nào gây ra?","o":["Virus","Nấm men","Thực vật hạt trần","Rêu"],"w":"Cúm, sốt xuất huyết, thủy đậu đều do virus gây nên."},
    {"d":2,"sec":"lt","q":"Vi khuẩn Lactobacillus được con người ứng dụng có lợi vào việc gì?","o":["Lên men sữa làm sữa chua và muối dưa cà","Làm rỉ sét tàu biển","Gây bệnh lao phổi","Sản xuất thủy tinh"],"w":"Vi khuẩn lactic lên men đường thành lactic acid tạo vị chua dịu cho sữa chua."}
  ],
  'l6-luc': [
    {"d":1,"cat":"lt","q":"Dụng cụ dùng để đo độ lớn của lực trong phòng thí nghiệm là gì?","o":["Lực kế lò xo","Cân Rô-béc-van","Ống đong","Thước kẹp"],"w":"Lực kế đo độ lớn lực theo đơn vị Niutơn (N)."},
    {"d":2,"cat":"bt","q":"Một túi gạo có trọng lượng đo được là 35 N. Khối lượng của túi gạo đó khoảng bao nhiêu kg?","n":3.5,"t":0.05,"u":"kg","w":"m = P / 10 = 35 / 10 = 3,5 kg."},
    {"d":3,"cat":"bt","q":"Treo quả nặng vào một lò xo thẳng đứng có chiều dài tự nhiên 12 cm thì lò xo dãn ra tới chiều dài 15 cm. Độ biến dạng (độ dãn) của lò xo là bao nhiêu cm?","n":3,"t":0,"u":"cm","w":"Δl = l − l₀ = 15 − 12 = 3 cm."},
    {"d":3,"sec":"bt","q":"Một lực kế treo quả nặng chỉ 35 N. Khối lượng của quả nặng đó khoảng bao nhiêu kg?","n":3.5,"t":0.05,"u":"kg","w":"m ≈ P / 10 = 35 / 10 = 3,5 kg."},
    {"d":1,"sec":"lt","q":"Trọng lực tác dụng lên một vật trên Trái Đất luôn có phương và chiều như thế nào?","o":["Phương thẳng đứng, chiều từ trên xuống dưới","Phương nằm ngang, chiều từ trái sang phải","Phương thẳng đứng, chiều từ dưới lên trên","Phương xiên bất kì"],"w":"Trọng lực hướng về tâm Trái Đất nên có phương thẳng đứng, chiều từ trên xuống."},
    {"d":2,"sec":"bt","q":"Treo quả nặng 100 g làm lò xo dãn thêm 2 cm. Nếu treo quả nặng 300 g (trong giới hạn đàn hồi) thì lò xo dãn thêm bao nhiêu cm?","n":6,"t":0,"u":"cm","w":"Độ dãn tỉ lệ thuận với khối lượng vật treo: (300 / 100) × 2 = 6 cm."}
  ],
  'l6-nang-luong': [
    {"d":1,"cat":"lt","q":"Khi bật quạt điện hoạt động, điện năng đã chuyển hóa chủ yếu thành dạng năng lượng có ích nào?","o":["Cơ năng (động năng của cánh quạt tạo gió)","Hóa năng","Quang năng phát sáng","Năng lượng hạt nhân"],"w":"Quạt biến đổi điện năng chủ yếu thành cơ năng quay cánh quạt và một phần nhỏ nhiệt năng hao phí."},
    {"d":2,"cat":"bt","q":"Một khẩu phần sữa cung cấp năng lượng 650 kJ. Đổi giá trị năng lượng này sang đơn vị Jun (J).","n":650000,"t":0,"u":"J","w":"650 × 1000 = 650 000 J."},
    {"d":3,"cat":"bt","q":"Một bóng đèn sợi đốt nhận 100 J điện năng nhưng chỉ tạo ra 12 J quang năng chiếu sáng, phần còn lại tỏa nhiệt. Năng lượng nhiệt hao phí bằng bao nhiêu J?","n":88,"t":0,"u":"J","w":"Theo bảo toàn năng lượng: W_hao phí = 100 − 12 = 88 J."},
    {"d":2,"sec":"bt","q":"Một hộp sữa cung cấp 650 kJ năng lượng, tương ứng bao nhiêu Jun (J)?","n":650000,"t":0,"u":"J","w":"650 × 1000 = 650 000 J."},
    {"d":3,"sec":"bt","q":"Khi quả bóng cao su rơi từ trên cao xuống đất, dạng năng lượng nào giảm dần và chuyển hóa thành động năng?","o":["Thế năng hấp dẫn giảm dần, chuyển thành động năng","Điện năng giảm dần","Quang năng tăng dần","Hóa năng nhiên liệu tăng"],"w":"Độ cao giảm nên thế năng hấp dẫn chuyển hóa thành động năng."},
    {"d":1,"sec":"lt","q":"Pin mặt trời lắp trên mái nhà chuyển hóa dạng năng lượng nào thành điện năng?","o":["Quang năng (năng lượng ánh sáng)","Năng lượng âm thanh","Thế năng đàn hồi","Hóa năng thực phẩm"],"w":"Pin quang điện biến đổi trực tiếp quang năng thành điện năng."},
    {"d":2,"sec":"bt","q":"Đổi 2,5 kJ sang đơn vị Jun (J).","n":2500,"t":0,"u":"J","w":"2,5 × 1000 = 2500 J."}
  ],
  'l6-trai-dat': [
    {"d":1,"cat":"lt","q":"Vì sao hằng ngày ta nhìn thấy Mặt Trời mọc ở đằng Đông và lặn ở đằng Tây?","o":["Do Trái Đất tự quay quanh trục theo chiều từ Tây sang Đông","Do Mặt Trời quay quanh Trái Đất mỗi ngày 1 vòng","Do Mặt Trăng đẩy Mặt Trời đi","Do Ngân Hà đứng yên"],"w":"Trái Đất tự quay từ Tây sang Đông nên ta thấy biểu kiến Mặt Trời chuyển động từ Đông sang Tây."},
    {"d":2,"cat":"bt","q":"Hiện tượng NGUYỆT THỰC xảy ra khi ba thiên thể sắp xếp theo vị trí nào?","o":["Trái Đất nằm ở giữa Mặt Trời và Mặt Trăng (Mặt Trăng đi vào bóng tối của Trái Đất)","Mặt Trăng nằm giữa Mặt Trời và Trái Đất","Sao Hỏa che khuất Mặt Trời","Ban ngày khi Trăng non"],"w":"Trái Đất cản ánh sáng Mặt Trời chiếu tới Mặt Trăng gây hiện tượng nguyệt thực."},
    {"d":3,"cat":"bt","q":"Trái Đất tự quay hết 1 vòng (360°) quanh trục mất khoảng 24 giờ. Vậy trong 1 giờ Trái Đất quay được một góc khoảng bao nhiêu độ?","n":15,"t":0,"u":"°","w":"360° : 24 = 15° (tương ứng 1 múi giờ trên Trái Đất rộng 15° kinh tuyến)."},
    {"d":2,"sec":"bt","q":"Trái Đất tự quay hết 1 vòng quanh trục của nó mất khoảng bao nhiêu giờ?","n":24,"t":0,"u":"giờ","w":"Một chu kì tự quay của Trái Đất ứng với 1 ngày đêm ≈ 24 giờ."},
    {"d":3,"sec":"bt","q":"Vì sao đứng trên Trái Đất ta thấy Mặt Trời mọc ở hướng Đông và lặn ở hướng Tây?","o":["Vì Trái Đất tự quay quanh trục theo chiều từ Tây sang Đông","Vì Mặt Trời quay quanh Trái Đất mỗi ngày 1 vòng","Vì Mặt Trăng đẩy Mặt Trời đi","Vì Trái Đất đứng yên trong vũ trụ"],"w":"Trái Đất tự quay từ Tây sang Đông tạo chuyển động biểu kiến của Mặt Trời từ Đông sang Tây."},
    {"d":1,"sec":"lt","q":"Vào đêm Rằm (ngày 15 âm lịch hằng tháng, trời quang mây), ta nhìn thấy Mặt Trăng có hình dạng gì?","o":["Trăng tròn","Không trăng (tối hoàn toàn)","Trăng lưỡi liềm rất mảnh","Hình vuông"],"w":"Giữa tháng âm lịch phần Mặt Trăng hướng về Trái Đất được Mặt Trời chiếu sáng trọn vẹn."},
    {"d":2,"sec":"lt","q":"Thiên hà chứa Hệ Mặt Trời và Trái Đất của chúng ta có tên gọi là gì?","o":["Ngân Hà (Milky Way)","Sao Thủy","Sao chổi Halley","Mặt Trăng"],"w":"Hệ Mặt Trời nằm ở một nhánh xoắn ốc của thiên hà Ngân Hà."}
  ],
  'l9-nang-luong-co': [
    {"d":1,"cat":"lt","q":"Động năng của một vật phụ thuộc vào những đại lượng nào?","o":["Khối lượng và tốc độ chuyển động của vật","Chỉ phụ thuộc độ cao của vật","Màu sắc và nhiệt độ của vật","Thể tích bình chứa"],"w":"Theo W_đ = ½mv², động năng phụ thuộc khối lượng m và tốc độ v."},
    {"d":1,"cat":"lt","q":"Đơn vị đo công suất trong hệ SI là gì?","o":["Oát (W)","Jun (J)","Niutơn (N)","Ampe (A)"],"w":"Công suất P = A / t có đơn vị J/s gọi là Oát (W)."},
    {"d":2,"cat":"lt","q":"Khi thả một quả bóng rơi tự do từ trên cao xuống đất (bỏ qua sức cản không khí), sự chuyển hóa cơ năng diễn ra như thế nào?","o":["Thế năng trọng trường giảm dần, động năng tăng dần","Động năng giảm dần, thế năng tăng dần","Cả động năng và thế năng đều giảm về 0","Cơ năng tăng lên gấp đôi"],"w":"Độ cao h giảm làm thế năng giảm, tốc độ v tăng làm động năng tăng."},
    {"d":3,"cat":"bt","q":"Cần cẩu nâng đều kiện hàng khối lượng 500 kg lên cao 6 m trong thời gian 15 giây (lấy P = 10m). Công suất của cần cẩu là bao nhiêu kW?","n":2,"t":0.05,"u":"kW","w":"F = P = 5000 N ⇒ A = 5000 × 6 = 30 000 J ⇒ P = 30 000 / 15 = 2000 W = 2 kW."},
    {"d":1,"sec":"lt","q":"Đơn vị đo công suất cơ học trong hệ SI là gì?","o":["Oát (W)","Jun (J)","Niutơn (N)","Ampe (A)"],"w":"Công suất P = A / t có đơn vị J/s hay Oát (W)."},
    {"d":2,"sec":"bt","q":"Một quả dừa nặng 1,5 kg ở trên cây cao 6 m so với mặt đất. Thế năng trọng trường của quả dừa (lấy P = 10m) là bao nhiêu J?","n":90,"t":0,"u":"J","w":"W_t = 10 × 1,5 × 6 = 90 J."},
    {"d":3,"sec":"bt","q":"Xe đạp có tổng khối lượng cả người là 50 kg chuyển động với tốc độ 4 m/s. Động năng của xe và người là bao nhiêu J?","n":400,"t":0,"u":"J","w":"W_đ = ½ · 50 · 4² = 400 J."}
  ],
  'l9-anh-sang': [
    {"d":1,"cat":"lt","q":"Khi chiếu chùm ánh sáng trắng hẹp đi qua lăng kính thủy tinh thì chùm sáng tách thành dải màu từ đỏ đến tím. Hiện tượng này gọi là gì?","o":["Sự tán sắc ánh sáng","Phản xạ gương phẳng","Truyền thẳng ánh sáng","Nhiễm điện ánh sáng"],"w":"Ánh sáng trắng là tập hợp nhiều ánh sáng đơn sắc bị lệch khác nhau qua lăng kính."},
    {"d":2,"cat":"bt","q":"Đặt vật sáng ngoài khoảng tiêu cự (d > f) trước một thấu kính hội tụ thì thu được ảnh có tính chất gì?","o":["Ảnh thật, ngược chiều với vật (hứng được trên màn chắn)","Ảnh ảo, cùng chiều và nhỏ hơn vật","Không tạo ra ảnh nào","Luôn là ảnh ảo lớn gấp 10 lần"],"w":"Vật đặt ngoài tiêu cự thấu kính hội tụ luôn cho ảnh thật ngược chiều."},
    {"d":3,"cat":"bt","q":"Một kính lúp trên vành ghi kí hiệu \"5x\" (biết G = 25 / f với f tính bằng cm). Tiêu cự f của kính lúp này là bao nhiêu cm?","n":5,"t":0,"u":"cm","w":"f = 25 / 5 = 5 cm."},
    {"d":2,"sec":"bt","q":"Chiếu một tia sáng vuông góc với mặt phân cách từ không khí vào mặt nước phẳng lặng (i = 0°). Góc khúc xạ r bằng bao nhiêu độ?","n":0,"t":0,"u":"°","w":"Tia sáng vuông góc mặt phân cách truyền thẳng không bị gãy khúc nên r = 0°."},
    {"d":3,"sec":"bt","q":"Chiếu chùm ánh sáng trắng hẹp đi qua lăng kính thủy tinh thì chùm sáng tách thành dải màu biến thiên liên tục từ đỏ đến tím. Đó là hiện tượng gì?","o":["Tán sắc ánh sáng","Phản xạ toàn phần","Giao thoa sóng âm","Nhiễm từ"],"w":"Lăng kính phân tách ánh sáng trắng thành phổ từ đỏ đến tím (tán sắc)."},
    {"d":2,"sec":"bt","q":"Thấu kính có phần rìa dày hơn phần chính giữa là loại thấu kính gì và cho ảnh của vật thật có tính chất nào?","o":["Thấu kính phân kì; luôn cho ảnh ảo, cùng chiều và nhỏ hơn vật","Thấu kính hội tụ; luôn cho ảnh thật","Gương cầu lõm; cho ảnh ngược chiều","Lăng kính tán sắc"],"w":"Thấu kính phân kì (rìa dày) luôn tạo ảnh ảo nhỏ hơn vật."},
    {"d":3,"sec":"bt","q":"Ánh sáng truyền từ không khí (n₁ ≈ 1) vào thủy tinh có chiết suất n₂ = 1,5. Nếu chiếu ngược từ thủy tinh ra không khí thì hiện tượng phản xạ toàn phần có thể xảy ra vì sao?","o":["Vì ánh sáng đi từ môi trường chiết suất lớn (1,5) sang môi trường chiết suất nhỏ hơn (1)","Vì thủy tinh biến thành kim loại","Vì góc khúc xạ luôn bằng 0°","Vì ánh sáng không truyền qua thủy tinh"],"w":"Điều kiện cần của phản xạ toàn phần là n₁ > n₂."}
  ],
  'l9-dien-ohm': [
    {"d":1,"cat":"lt","q":"Phát biểu nào sau đây đúng với nội dung định luật Ohm?","o":["Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây","Cường độ dòng điện tỉ lệ thuận với điện trở của dây","Điện trở của dây dẫn tỉ lệ thuận với cường độ dòng điện","Hiệu điện thế luôn bằng 0 khi có điện trở"],"w":"I = U / R (điện trở R chỉ phụ thuộc bản chất dây dẫn và nhiệt độ, không phụ thuộc U, I)."},
    {"d":1,"cat":"lt","q":"Đơn vị đo điện trở là gì?","o":["Ôm (Ω)","Vôn (V)","Ampe (A)","Oát (W)"],"w":"Điện trở đo bằng đơn vị Ôm (kí hiệu Ω)."},
    {"d":3,"cat":"bt","q":"Mắc nối tiếp hai điện trở R₁ = 8 Ω và R₂ = 12 Ω vào hiệu điện thế U = 10 V. Cường độ dòng điện chạy trong mạch là bao nhiêu A?","n":0.5,"t":0.01,"u":"A","w":"R_nt = 8 + 12 = 20 Ω ⇒ I = U / R_nt = 10 / 20 = 0,5 A."},
    {"d":1,"sec":"lt","q":"Theo định luật Ohm, cường độ dòng điện chạy qua một dây dẫn có mối quan hệ thế nào với hiệu điện thế và điện trở?","o":["Tỉ lệ thuận với hiệu điện thế U và tỉ lệ nghịch với điện trở R","Tỉ lệ thuận với cả U và R","Tỉ lệ nghịch với U, tỉ lệ thuận với R","Không phụ thuộc vào U"],"w":"Hệ thức định luật Ohm: I = U / R."},
    {"d":1,"sec":"lt","q":"Đơn vị đo điện trở trong hệ SI là gì?","o":["Ôm (Ω)","Oát (W)","Ampe (A)","Jun (J)"],"w":"Điện trở đo bằng đơn vị Ôm (Ω)."},
    {"d":2,"sec":"bt","q":"Hai điện trở R₁ = 10 Ω và R₂ = 15 Ω mắc nối tiếp nhau. Điện trở tương đương của đoạn mạch bằng bao nhiêu Ω?","n":25,"t":0,"u":"Ω","w":"R_nt = R₁ + R₂ = 10 + 15 = 25 Ω."},
    {"d":3,"sec":"bt","q":"Đặt hiệu điện thế U = 24 V vào hai đầu đoạn mạch gồm R₁ = 6 Ω mắc song song với R₂ = 12 Ω. Cường độ dòng điện chạy trong mạch chính là bao nhiêu A?","n":6,"t":0,"u":"A","w":"R_tđ = (6×12)/(6+12) = 4 Ω ⇒ I = U / R_tđ = 24 / 4 = 6 A."},
    {"d":3,"sec":"bt","q":"Hai dây đồng cùng chiều dài, dây thứ nhất có tiết diện lớn gấp 3 lần dây thứ hai (S₁ = 3S₂). Điện trở R₁ so với R₂ như thế nào?","o":["R₁ nhỏ hơn R₂ ba lần (R₁ = R₂ / 3)","R₁ lớn gấp 3 lần R₂","R₁ bằng R₂","R₁ lớn gấp 9 lần R₂"],"w":"Theo R = ρ·l/S, điện trở tỉ lệ nghịch với tiết diện S."},
    {"d":4,"sec":"bt","q":"Một dây dẫn bằng nicrom dài l = 10 m, tiết diện S = 0,5 mm² (tức 0,5 × 10⁻⁶ m²), điện trở suất ρ = 1,1 × 10⁻⁶ Ω·m. Điện trở của dây dẫn này là bao nhiêu Ω?","n":22,"t":0.1,"u":"Ω","w":"R = ρ·l/S = (1,1×10⁻⁶ × 10) / (0,5×10⁻⁶) = 22 Ω."}
  ],
  'l9-nang-luong-dien': [
    {"d":1,"cat":"lt","q":"Số ghi \"220 V – 1000 W\" trên vỏ một bàn là điện cho biết điều gì?","o":["Hiệu điện thế định mức 220 V và công suất tiêu thụ định mức 1000 W khi hoạt động bình thường","Bàn là chỉ dùng được ở 1000 V","Điện trở của bàn là bằng 1000 Ω","Cường độ dòng điện định mức là 220 A"],"w":"220 V là điện áp định mức; 1000 W là công suất định mức khi mắc đúng vào 220 V."},
    {"d":1,"cat":"lt","q":"Công tơ điện lắp ở mỗi hộ gia đình dùng để đo đại lượng nào?","o":["Điện năng tiêu thụ (tính bằng kW·h hay \"số điện\")","Cường độ dòng điện tức thời","Hiệu điện thế của pin","Nhiệt độ dây điện"],"w":"Mỗi số đếm trên công tơ điện ứng với 1 kW·h điện năng tiêu thụ."},
    {"d":2,"cat":"lt","q":"Biện pháp nào sau đây vừa tiết kiệm điện năng vừa an toàn hiệu quả trong gia đình?","o":["Thay đèn sợi đốt bằng đèn LED và tắt các thiết bị điện khi không sử dụng","Bật điều hòa 16 °C suốt ngày và mở toang cửa sổ","Dùng dây đồng to thay cho cầu chì","Cắm chung thật nhiều bếp điện công suất lớn vào một ổ cắm nhỏ"],"w":"Đèn LED có hiệu suất phát sáng cao, ít tỏa nhiệt hao phí."},
    {"d":3,"cat":"bt","q":"Một máy nước nóng công suất 2 kW sử dụng trung bình mỗi ngày 0,5 giờ. Trong 30 ngày máy tiêu thụ bao nhiêu kW·h điện năng?","n":30,"t":0.1,"u":"kW·h","w":"A = P · t = 2 × (0,5 × 30) = 2 × 15 = 30 kW·h."},
    {"d":1,"sec":"lt","q":"Số đếm trên công tơ điện ở mỗi hộ gia đình cho biết đại lượng nào?","o":["Điện năng tiêu thụ tính theo đơn vị kW·h","Cường độ dòng điện tức thời (A)","Hiệu điện thế lưới điện (V)","Điện trở của dây dẫn (Ω)"],"w":"Mỗi \"số điện\" trên công tơ bằng 1 kW·h điện năng đã sử dụng."},
    {"d":1,"sec":"lt","q":"Trên bóng đèn LED có ghi \"220 V – 12 W\". Con số 12 W cho biết ý nghĩa gì?","o":["Công suất điện định mức của đèn khi hoạt động bình thường ở hiệu điện thế 220 V","Điện trở của đèn là 12 Ω","Cường độ dòng điện qua đèn là 12 A","Đèn dùng được tối đa 12 giờ"],"w":"12 W là công suất tiêu thụ định mức của bóng đèn."},
    {"d":2,"sec":"bt","q":"Một nồi cơm điện có công suất 800 W hoạt động liên tục trong 30 phút (1800 giây). Điện năng tiêu thụ tính theo đơn vị kJ là bao nhiêu?","n":1440,"t":1,"u":"kJ","w":"W = P · t = 800 × 1800 = 1 440 000 J = 1440 kJ."},
    {"d":3,"sec":"bt","q":"Một bóng đèn ghi 220 V – 44 W khi sáng bình thường ở mạng điện 220 V thì có cường độ dòng điện chạy qua là bao nhiêu A?","n":0.2,"t":0.01,"u":"A","w":"I = P / U = 44 / 220 = 0,2 A."}
  ],
  'l9-cam-ung': [
    {"d":1,"cat":"lt","q":"Dòng điện trong mạng điện sinh hoạt gia đình ở Việt Nam là dòng điện loại gì?","o":["Dòng điện xoay chiều có hiệu điện thế hiệu dụng 220 V, tần số 50 Hz","Dòng điện một chiều không đổi 220 V","Dòng điện một chiều 12 V","Dòng điện xoay chiều 5 V"],"w":"Mạng điện dân dụng Việt Nam chuẩn 220 V – 50 Hz."},
    {"d":3,"cat":"bt","q":"Một máy biến áp hạ áp có số vòng cuộn sơ cấp N₁ = 2200 vòng, nối vào điện áp xoay chiều U₁ = 220 V. Muốn lấy ra ở cuộn thứ cấp U₂ = 12 V thì N₂ phải có bao nhiêu vòng?","n":120,"t":0,"u":"vòng","w":"N₂ = N₁ · (U₂ / U₁) = 2200 × 12 / 220 = 120 vòng."},
    {"d":3,"sec":"bt","q":"Máy biến áp có cuộn sơ cấp N₁ = 500 vòng, cuộn thứ cấp N₂ = 2500 vòng. Đặt vào hai đầu cuộn sơ cấp hiệu điện thế xoay chiều U₁ = 110 V thì U₂ thu được là bao nhiêu V?","n":550,"t":0.5,"u":"V","w":"U₂ = U₁ · (N₂ / N₁) = 110 × (2500 / 500) = 550 V (máy tăng áp)."},
    {"d":1,"sec":"lt","q":"Tần số của dòng điện xoay chiều trong mạng điện sinh hoạt ở Việt Nam là bao nhiêu Hz?","n":50,"t":0,"u":"Hz","w":"Lưới điện dân dụng Việt Nam có U = 220 V, tần số f = 50 Hz."},
    {"d":2,"sec":"lt","q":"Bộ phận chính của máy phát điện xoay chiều đơn giản gồm những gì?","o":["Nam châm và cuộn dây dẫn (một trong hai bộ phận quay gọi là rôto, bộ phận đứng yên gọi là stato)","Chỉ gồm hai thanh nhựa cọ xát","Một viên pin khô và bóng đèn","Một bình điện phân dung dịch muối"],"w":"Máy phát điện xoay chiều gồm nam châm và cuộn dây dẫn tạo cảm ứng điện từ."},
    {"d":2,"sec":"lt","q":"Tác dụng nào của dòng điện xoay chiều làm kim nam châm hay lõi sắt chịu lực hút – đẩy biến đổi liên tục tạo dao động trong loa điện?","o":["Tác dụng từ","Tác dụng hóa học đúc đồng","Sự khúc xạ ánh sáng","Sự bay hơi"],"w":"Dòng điện xoay chiều đi qua cuộn dây tạo từ trường biến thiên (tác dụng từ)."},
    {"d":3,"sec":"bt","q":"Máy biến áp có N₁ = 4400 vòng nối điện áp 220 V, cuộn thứ cấp có N₂ = 120 vòng để sạc ắc quy. Điện áp đầu ra U₂ bằng bao nhiêu V?","n":6,"t":0.1,"u":"V","w":"U₂ = 220 × (120 / 4400) = 6 V."}
  ],
  'l9-kim-loai': [
    {"d":1,"cat":"lt","q":"Kim loại nào dẫn điện tốt nhất trong tất cả các kim loại?","o":["Bạc (Ag), sau đó đến Đồng (Cu), Vàng (Au), Nhôm (Al)","Sắt (Fe)","Chì (Pb)","Thủy ngân (Hg)"],"w":"Thứ tự dẫn điện giảm dần: Ag > Cu > Au > Al > Fe."},
    {"d":2,"cat":"bt","q":"Để làm sạch dung dịch FeSO₄ có lẫn tạp chất muối CuSO₄, ta ngâm dư kim loại nào vào dung dịch rồi lọc bỏ chất rắn?","o":["Bột sắt (Fe)","Lá bạc (Ag)","Dây đồng (Cu)","Đinh vàng (Au)"],"w":"Fe đẩy hết Cu ra khỏi CuSO₄ tạo thêm chính FeSO₄ tinh khiết: Fe + CuSO₄ → FeSO₄ + Cu↓."},
    {"d":3,"cat":"bt","q":"Ngâm một đinh sắt dư vào 100 mL dung dịch CuSO₄ 1 M. Sau khi phản ứng hoàn toàn (Fe + CuSO₄ → FeSO₄ + Cu↓), khối lượng đồng (M = 64) bám ra là bao nhiêu gam?","n":6.4,"t":0.05,"u":"g","w":"n(CuSO₄) = 0,1 × 1 = 0,1 mol ⇒ n(Cu) = 0,1 mol ⇒ m(Cu) = 6,4 g."},
    {"d":2,"sec":"bt","q":"Ngâm một lá kẽm (Zn) dư vào dung dịch chứa 0,1 mol CuSO₄ (Zn + CuSO₄ → ZnSO₄ + Cu↓). Khối lượng đồng kim loại (Cu = 64) bám ra là bao nhiêu gam?","n":6.4,"t":0.05,"u":"g","w":"n_Cu = n_(CuSO₄) = 0,1 mol ⇒ m_Cu = 0,1 × 64 = 6,4 g."},
    {"d":1,"sec":"lt","q":"Tính chất vật lí nào của kim loại giúp người ta rèn sắt thành nông cụ và dát vàng thành lá cực mỏng?","o":["Tính dẻo","Tính giòn dễ vỡ","Tính cách nhiệt","Tính tan trong nước"],"w":"Các lớp ion kim loại trượt lên nhau nhờ electron tự do tạo nên tính dẻo."},
    {"d":2,"sec":"lt","q":"Hợp kim sắt với carbon trong đó hàm lượng carbon dưới 2% (kèm một số nguyên tố khác, rất bền dẻo dùng trong xây dựng) được gọi là gì?","o":["Thép","Gang xám (2–5% C)","Nhôm nguyên chất","Đá vôi"],"w":"Thép chứa < 2% C; gang chứa 2–5% C."},
    {"d":2,"sec":"lt","q":"Trong công nghiệp, kim loại nhôm (Al – hoạt động hóa học mạnh) được tách từ quặng bauxite (Al₂O₃) bằng phương pháp nào?","o":["Điện phân nóng chảy Al₂O₃ (có mặt cryolite)","Dùng khí CO khử Al₂O₃ ở lò cao","Ngâm đồng vào dung dịch muối nhôm","Phơi nắng quặng ngoài trời"],"w":"Kim loại mạnh (K, Na, Ca, Mg, Al) bắt buộc điều chế bằng điện phân nóng chảy."},
    {"d":3,"sec":"bt","q":"Khử hoàn toàn 16 g bột Fe₂O₃ (M = 160) bằng khí CO dư ở nhiệt độ cao (Fe₂O₃ + 3CO → 2Fe + 3CO₂). Khối lượng sắt (Fe = 56) thu được là bao nhiêu gam?","n":11.2,"t":0.1,"u":"g","w":"n(Fe₂O₃) = 0,1 mol ⇒ n(Fe) = 0,2 mol ⇒ m(Fe) = 0,2 × 56 = 11,2 g."}
  ],
  'l9-phi-kim': [
    {"d":2,"cat":"lt","q":"Vì sao than hoạt tính được dùng làm lõi lọc nước uống và mặt nạ phòng độc?","o":["Vì than hoạt tính có cấu trúc xốp rỗng với khả năng hấp phụ rất mạnh chất màu, mùi và khí độc","Vì than hoạt tính tan hoàn toàn vào nước tạo vị ngọt","Vì than hoạt tính phản ứng nổ với nước","Vì than hoạt tính là kim loại nặng"],"w":"Tính hấp phụ bề mặt cao là đặc trưng ứng dụng của than hoạt tính."},
    {"d":2,"cat":"bt","q":"Đốt cháy hoàn toàn 6 g carbon nguyên chất (M = 12) trong khí oxygen dư (C + O₂ —(t°)→ CO₂). Thể tích khí CO₂ thu được ở 25 °C, 1 bar là bao nhiêu lít? (làm tròn 2 chữ số thập phân)","n":12.4,"t":0.03,"u":"L","w":"n(C) = 6/12 = 0,5 mol ⇒ n(CO₂) = 0,5 mol ⇒ V = 0,5 × 24,79 = 12,395 L ≈ 12,40 L."},
    {"d":3,"cat":"bt","q":"Dẫn 0,2 mol khí CO₂ vào dung dịch Ca(OH)₂ dư. Khối lượng kết tủa CaCO₃ (M = 100) tạo thành là bao nhiêu gam?","n":20,"t":0.1,"u":"g","w":"n(CaCO₃) = n(CO₂) = 0,2 mol ⇒ m = 0,2 × 100 = 20 g."},
    {"d":2,"sec":"bt","q":"Sục 0,15 mol khí CO₂ vào dung dịch nước vôi trong Ca(OH)₂ dư (CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O). Khối lượng kết tủa CaCO₃ (M = 100) thu được là bao nhiêu gam?","n":15,"t":0.1,"u":"g","w":"n_(CaCO₃) = n_(CO₂) = 0,15 mol ⇒ m = 0,15 × 100 = 15 g."},
    {"d":3,"sec":"bt","q":"Đốt cháy hoàn toàn 0,2 mol bột sắt trong khí chlorine dư (2Fe + 3Cl₂ → 2FeCl₃). Số mol khí Cl₂ đã tham gia phản ứng là bao nhiêu mol?","n":0.3,"t":0.01,"u":"mol","w":"Theo PTHH: n_(Cl₂) = (3 / 2) × n_Fe = 1,5 × 0,2 = 0,3 mol."},
    {"d":1,"sec":"lt","q":"Ở điều kiện thường, đơn chất phi kim nào sau đây tồn tại ở THỂ LỎNG (màu nâu đỏ)?","o":["Bromine (Br₂)","Carbon (C)","Oxygen (O₂)","Sulfur (S)"],"w":"Bromine là phi kim duy nhất ở thể lỏng trong điều kiện thường."},
    {"d":2,"sec":"lt","q":"Khác biệt hóa học cơ bản giữa kim loại và phi kim khi phản ứng với oxygen là gì?","o":["Kim loại thường tạo oxide base, còn phi kim thường tạo oxide acid","Cả hai chỉ tạo ra muối ăn","Phi kim luôn tạo ra kiềm mạnh","Kim loại không bao giờ tác dụng với oxygen"],"w":"Ví dụ Ca → CaO (oxide base), còn S → SO₂ và P → P₂O₅ (oxide acid)."}
  ],
  'l9-huu-co': [
    {"d":1,"cat":"lt","q":"Thành phần chính của khí thiên nhiên và khí hầm biogas là hydrocarbon nào?","o":["Methane (CH₄)","Acetic acid (CH₃COOH)","Ethylic alcohol (C₂H₅OH)","Glucose (C₆H₁₂O₆)"],"w":"CH₄ chiếm phần lớn trong khí thiên nhiên và khí sinh học biogas."},
    {"d":2,"cat":"bt","q":"Trên nhãn chai cồn y tế ghi \"Cồn 70°\". Điều đó có ý nghĩa gì?","o":["Trong 100 mL dung dịch cồn có chứa 70 mL ethylic alcohol nguyên chất","Cồn sôi ở đúng 70 °C","Trong 100 g cồn có 70 mol nước","Nghiêng chai góc 70° mới rót được"],"w":"Độ cồn là số mL ethylic alcohol nguyên chất có trong 100 mL dung dịch rượu/cồn."},
    {"d":3,"cat":"bt","q":"Trong 250 mL cồn y tế 70° có chứa bao nhiêu mL ethylic alcohol nguyên chất?","n":175,"t":0.1,"u":"mL","w":"V_rượu = 250 × 70 / 100 = 175 mL."},
    {"d":3,"sec":"bt","q":"Cho 6 g acetic acid CH₃COOH (M = 60) tác dụng hết với dung dịch NaHCO₃ dư (CH₃COOH + NaHCO₃ → CH₃COONa + CO₂↑ + H₂O). Thể tích khí CO₂ ở 25 °C, 1 bar là bao nhiêu lít? (làm tròn 2 chữ số thập phân)","n":2.48,"t":0.03,"u":"L","w":"n_acid = 6/60 = 0,1 mol ⇒ n_CO₂ = 0,1 mol ⇒ V = 0,1 × 24,79 ≈ 2,48 L."},
    {"d":1,"sec":"lt","q":"Công thức phân tử của khí Butane (có trong bình gas bật lửa, thuộc dãy alkane CₙH₂ₙ₊₂ với n = 4) là gì?","o":["C₄H₁₀","C₄H₈","C₂H₄","CH₄"],"w":"Thay n = 4 vào CₙH₂ₙ₊₂ được C₄H₁₀."},
    {"d":2,"sec":"bt","q":"Dẫn 0,1 mol khí ethylene (C₂H₄) qua bình đựng dung dịch nước bromine dư (C₂H₄ + Br₂ → C₂H₄Br₂). Số mol Br₂ đã phản ứng là bao nhiêu mol?","n":0.1,"t":0.005,"u":"mol","w":"Phản ứng cộng tỉ lệ 1 : 1 ⇒ n(Br₂) = 0,1 mol."}
  ],
  'l9-lipid-carb': [
    {"d":1,"cat":"lt","q":"Nhỏ vài giọt dung dịch iodine (i-ốt) lên mặt cắt củ khoai lang hoặc cơm trắng thì xuất hiện màu gì?","o":["Màu xanh tím đặc trưng","Màu đỏ gạch","Màu hồng nhạt","Vẫn không màu"],"w":"Hồ tinh bột gặp iodine tạo hợp chất màu xanh tím đặc trưng."},
    {"d":2,"cat":"bt","q":"Lên men hoàn toàn 0,5 mol glucose theo phản ứng C₆H₁₂O₆ —(men)→ 2C₂H₅OH + 2CO₂↑. Số mol CO₂ thu được là bao nhiêu mol?","n":1,"t":0,"u":"mol","w":"Theo tỉ lệ 1 : 2 ⇒ n(CO₂) = 2 × 0,5 = 1 mol."},
    {"d":3,"cat":"bt","q":"Đun nóng chất béo với dung dịch kiềm NaOH thu được glycerol và muối sodium của acid béo dùng làm xà phòng. Phản ứng này gọi là gì?","o":["Phản ứng xà phòng hóa","Phản ứng trùng hợp","Phản ứng tráng bạc","Phản ứng nhiệt phân đá vôi"],"w":"Thủy phân chất béo trong môi trường kiềm là phản ứng xà phòng hóa."},
    {"d":2,"sec":"bt","q":"Nhỏ vài giọt dung dịch iodine (i-ốt) loãng lên mặt cắt củ khoai lang tươi (chứa nhiều tinh bột) thì xuất hiện màu gì?","o":["Màu xanh tím đặc trưng","Màu đỏ gạch","Màu hồng nhạt","Không có màu gì"],"w":"Hồ tinh bột kết hợp với iodine tạo hợp chất màu xanh tím."},
    {"d":3,"sec":"bt","q":"Lên men 90 g glucose C₆H₁₂O₆ (M = 180) với hiệu suất 100% theo sơ đồ C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Số mol rượu C₂H₅OH thu được là bao nhiêu mol?","n":1,"t":0.01,"u":"mol","w":"n_glucose = 90/180 = 0,5 mol ⇒ n_(C₂H₅OH) = 2 × 0,5 = 1 mol."},
    {"d":1,"sec":"lt","q":"Sợi bông may quần áo thoáng mát có thành phần chính là hợp chất carbohydrate thiên nhiên nào?","o":["Cellulose","Glucose","Saccharose","Chất béo"],"w":"Bông nõn chứa gần 98% là cellulose tinh khiết."},
    {"d":2,"sec":"lt","q":"Làm cách nào đơn giản nhất để phân biệt sợi tơ tằm tự nhiên (bản chất protein) với sợi tơ nylon tổng hợp?","o":["Đốt thử: tơ tằm cháy có mùi khét như tóc cháy, còn nylon vón cục không có mùi tóc cháy","Nhúng vào nước lạnh xem sợi nào tan","Đo chiều dài sợi vải","Chiếu đèn pin qua sợi vải"],"w":"Protein khi cháy luôn có mùi khét đặc trưng giống tóc/sừng cháy."}
  ],
  'l9-di-truyen': [
    {"d":1,"cat":"lt","q":"Theo nguyên tắc bổ sung trên phân tử DNA mạch kép, nucleotide loại Adenine (A) trên mạch này luôn liên kết với loại nào trên mạch kia?","o":["Thymine (T)","Cytosine (C)","Guanine (G)","Uracil (U)"],"w":"Nguyên tắc bổ sung trong DNA: A liên kết với T (2 liên kết H), G liên kết với C (3 liên kết H)."},
    {"d":2,"cat":"bt","q":"Một đoạn phân tử DNA có tổng cộng 2400 nucleotide, trong đó số nucleotide loại A = 700. Số nucleotide loại T bằng bao nhiêu?","n":700,"t":0,"u":"nucleotide","w":"Theo nguyên tắc bổ sung: T = A = 700 nucleotide."},
    {"d":3,"cat":"bt","q":"Ở đậu Hà Lan, hạt vàng (A) trội hoàn toàn so với hạt xanh (a). Phép lai phân tích Aa × aa cho tỉ lệ kiểu hình đời con là bao nhiêu % cây hạt xanh?","n":50,"t":0,"u":"%","w":"Aa × aa → 1Aa (vàng) : 1aa (xanh) ⇒ hạt xanh chiếm 50%."},
    {"d":3,"sec":"bt","q":"Một đoạn phân tử DNA có tổng cộng 2400 nucleotide, trong đó số nucleotide loại Adenine (A) là 500. Theo nguyên tắc bổ sung (A = T, G = C), số nucleotide loại Thymine (T) bằng bao nhiêu?","n":500,"t":0,"u":"nucleotide","w":"Theo nguyên tắc bổ sung trên DNA mạch kép: T = A = 500 nucleotide."},
    {"d":1,"sec":"lt","q":"Đối tượng thực vật chính được Mendel lựa chọn để tiến hành thí nghiệm phát hiện các quy luật di truyền là cây gì?","o":["Đậu Hà Lan (tự thụ phấn nghiêm ngặt, có nhiều cặp tính trạng tương phản rõ)","Cây dương xỉ","Cây rêu tường","Nấm rơm"],"w":"Đậu Hà Lan dễ trồng, vòng đời ngắn và tự thụ phấn chặt chẽ."},
    {"d":2,"sec":"bt","q":"Quá trình tổng hợp phân tử RNA dựa trên một mạch khuôn của gene (DNA) được gọi là quá trình gì?","o":["Phiên mã","Dịch mã","Đột biến NST","Thụ tinh"],"w":"DNA làm khuôn tổng hợp RNA gọi là phiên mã; mRNA tổng hợp chuỗi polypeptide gọi là dịch mã."}
  ],
  'l9-tien-hoa': [
    {"d":2,"cat":"bt","q":"Sâu ăn lá rau thường có màu xanh lục giống hệt màu lá rau nên chim ăn sâu khó phát hiện. Theo học thuyết tiến hóa hiện đại, đặc điểm thích nghi này hình thành như thế nào?","o":["Trong quần thể sâu xuất hiện các biến dị màu sắc khác nhau; chim ăn thịt đào thải các cá thể màu nổi bật, giữ lại sâu màu xanh sống sót và sinh sản qua nhiều thế hệ","Do sâu tự sơn màu xanh lên da trong 1 ngày","Do lá rau biến thành con sâu","Do không có bất kì biến dị nào xảy ra"],"w":"Biến dị di truyền phát sinh ngẫu nhiên, chọn lọc tự nhiên sàng lọc giữ lại kiểu hình thích nghi."},
    {"d":3,"cat":"bt","q":"Vì sao khi sử dụng thuốc kháng sinh điều trị vi khuẩn gây bệnh, người bệnh KHÔNG được tự ý ngưng thuốc sớm hoặc dùng liều quá thấp?","o":["Vì làm các vi khuẩn mang gene đột biến kháng thuốc sống sót và nhân lên nhanh thành chủng kháng kháng sinh nguy hiểm","Vì kháng sinh làm tăng chiều cao ngay lập tức","Vì vi khuẩn biến thành virus","Vì thuốc kháng sinh là đường glucose"],"w":"Chọn lọc tự nhiên giữ lại các cá thể vi khuẩn kháng thuốc nếu không tiêu diệt triệt để."},
    {"d":2,"sec":"bt","q":"Chi trước của mèo, cánh của dơi và tay của người có cấu tạo xương giống nhau nhưng đảm nhận chức năng khác nhau. Đó là loại bằng chứng tiến hóa nào?","o":["Cơ quan tương đồng (phản ánh nguồn gốc chung)","Cơ quan tương tự (nguồn gốc khác nhau)","Hóa thạch cổ sinh vật","Bằng chứng địa lí sinh vật học"],"w":"Cùng nguồn gốc phôi thai nhưng phân hóa chức năng khác nhau là cơ quan tương đồng."},
    {"d":3,"sec":"bt","q":"Quần thể sâu ăn lá ban đầu có 98% cá thể mẫn cảm thuốc trừ sâu và 2% cá thể mang đột biến kháng thuốc. Sau nhiều đợt phun cùng một loại thuốc trừ sâu, tỉ lệ sâu kháng thuốc tăng lên 85%. Nhân tố nào đã định hướng sự thay đổi này?","o":["Chọn lọc tự nhiên (thông qua tác nhân thuốc trừ sâu giữ lại kiểu hình kháng thuốc)","Các con sâu tự ý biến đổi DNA ngay khi thấy bình thuốc","Ánh sáng mặt trời làm thuốc biến thành thức ăn","Sự giao phối làm mất hết sâu kháng thuốc"],"w":"Thuốc trừ sâu đóng vai trò nhân tố chọn lọc đào thải cá thể mẫn cảm, giữ lại cá thể có sẵn gene kháng thuốc."},
    {"d":1,"sec":"lt","q":"Hóa thạch khủng long, cá cổ đại tìm thấy trong các lớp đất đá trầm tích là loại bằng chứng tiến hóa nào?","o":["Bằng chứng hóa thạch (bằng chứng trực tiếp về lịch sử phát triển sinh giới)","Cơ quan tương tự","Chọn lọc nhân tạo","Đột biến nhân tạo"],"w":"Hóa thạch là di tích của sinh vật cổ đại để lại trong các lớp đất đá."},
    {"d":2,"sec":"lt","q":"Trong 3 giai đoạn phát sinh sự sống trên Trái Đất, giai đoạn hình thành các chất hữu cơ đơn giản từ các chất vô cơ dưới tác dụng nguồn năng lượng tự nhiên gọi là gì?","o":["Tiến hóa hóa học","Tiến hóa tiền sinh học","Chọn lọc nhân tạo hiện đại","Di truyền liên kết"],"w":"Tiến hóa hóa học tổng hợp chất hữu cơ từ khí quyển nguyên thủy chưa có sinh vật."},
    {"d":3,"sec":"bt","q":"Theo thuyết tiến hóa hiện đại, đơn vị cơ bản nhỏ nhất diễn ra quá trình tiến hóa (tiến hóa nhỏ) là cấp độ nào?","o":["Quần thể sinh vật","Một phân tử nước","Một bào quan ti thể","Toàn bộ Hệ Mặt Trời"],"w":"Quần thể là đơn vị tồn tại, sinh sản và biến đổi cấu trúc di truyền qua các thế hệ."}
  ],
  'l9-tai-nguyen': [
    {"d":2,"cat":"bt","q":"Hành động nào sau đây thực hiện đúng nguyên tắc phát triển bền vững \"Tiết giảm – Tái sử dụng – Tái chế (3R)\"?","o":["Mang túi vải dùng nhiều lần khi đi chợ và phân loại chai nhựa, giấy phế liệu để tái chế","Đốt toàn bộ túi nilon và vỏ nhựa ngoài sân","Xả thẳng pin hỏng vào nguồn nước sinh hoạt","Khai thác cạn kiệt rừng đầu nguồn"],"w":"Giảm rác thải nhựa dùng một lần và phân loại tái chế bảo vệ tài nguyên môi trường."},
    {"d":3,"cat":"bt","q":"Một hệ thống điện mặt trời áp mái mỗi ngày tạo ra trung bình 12 kW·h điện sạch. Trong 1 năm (365 ngày) hệ thống cung cấp bao nhiêu kW·h điện?","n":4380,"t":0,"u":"kW·h","w":"12 × 365 = 4380 kW·h."},
    {"d":2,"sec":"bt","q":"Nguyên tố hóa học nào chiếm tỉ lệ khối lượng lớn thứ hai trong vỏ Trái Đất (chỉ sau Oxygen, có nhiều trong cát thạch anh SiO₂)?","o":["Silicon (Si)","Gold (Au)","Mercury (Hg)","Helium (He)"],"w":"Vỏ Trái Đất chứa khoảng 46% Oxygen và 28% Silicon."},
    {"d":3,"sec":"bt","q":"Một hộ gia đình lắp hệ thống điện mặt trời mái nhà giảm được 1,5 tấn khí thải CO₂ mỗi năm. Trong 6 năm hoạt động, hệ thống giúp giảm phát thải bao nhiêu tấn CO₂?","n":9,"t":0.1,"u":"tấn","w":"1,5 × 6 = 9 tấn CO₂."},
    {"d":1,"sec":"lt","q":"Thành phần hóa học chính của núi đá vôi tự nhiên dùng sản xuất xi măng và vôi sống là chất nào?","o":["Calcium carbonate (CaCO₃)","Sodium chloride (NaCl)","Ethylic alcohol (C₂H₅OH)","Khí methane (CH₄)"],"w":"Đá vôi chứa thành phần chính là muối CaCO₃."},
    {"d":2,"sec":"bt","q":"Quá trình tự nhiên nào của thảm thực vật rừng đóng vai trò HẤP THỤ lượng lớn khí CO₂ từ khí quyển, giúp giảm hiệu ứng nhà kính?","o":["Quang hợp của cây xanh và tảo đại dương","Đốt cháy rừng","Núi lửa phun trào","Hô hấp của động vật"],"w":"Quang hợp thu nhận CO₂ chuyển thành chất hữu cơ tích trữ carbon."}
  ],
  'l7-phuong-phap': [
    {"d":1,"q":"Dụng cụ nào dùng để quan sát cấu tạo tế bào biểu bì vảy hành trong phòng thí nghiệm?","o":["Kính hiển vi quang học","Kính thiên văn","Ống nhòm","Nhiệt kế thủy ngân"],"w":"Tế bào có kích thước hiển vi nên cần quan sát bằng kính hiển vi quang học."},
    {"d":1,"q":"Khi đọc mực chất lỏng trong ống đong, ta cần đặt mắt như thế nào?","o":["Ngang bằng với đáy vạch cong của mặt chất lỏng","Nhìn xiên từ trên cao xuống","Nhìn xiên từ dưới thấp lên","Nhắm một mắt nhìn từ xa 2 m"],"w":"Đặt mắt vuông góc ngang tầm vạch chia đáy mặt khum để tránh sai số thị sai."},
    {"d":2,"q":"Bước cuối cùng của tiến trình tìm hiểu tự nhiên là gì?","o":["Viết báo cáo, trình bày và rút ra kết luận","Đưa ra dự đoán ban đầu","Quan sát hiện tượng","Chuẩn bị hóa chất"],"w":"Sau khi kiểm tra giả thuyết bằng thí nghiệm, nhà nghiên cứu báo cáo và kết luận."},
    {"d":2,"q":"Đổi khoảng thời gian 1,25 giây sang mili-giây (ms).","n":1250,"t":0,"u":"ms","w":"1,25 × 1000 = 1250 ms."},
    {"d":3,"q":"Xe lăn gắn tấm cản quang rộng 4 cm đi qua cổng quang điện trong 0,08 s. Tốc độ xe qua cổng là bao nhiêu cm/s?","n":50,"t":0.1,"u":"cm/s","w":"v = 4 : 0,08 = 50 cm/s."},
    {"d":4,"q":"Khoảng cách giữa hai cổng quang điện A và B là 60 cm. Đồng hồ hiện số ở chế độ A↔B chỉ 1,200 s. Tốc độ trung bình của xe trên đoạn AB là bao nhiêu m/s?","n":0.5,"t":0.01,"u":"m/s","w":"Đổi 60 cm = 0,6 m ⇒ v = 0,6 / 1,2 = 0,5 m/s."}
  ],
  'l7-tu': [
    {"d":1,"q":"Trên thanh nam châm thẳng thường sơn hai màu và kí hiệu N, S. Kí hiệu S chỉ cực nào của nam châm?","o":["Cực Nam (South)","Cực Bắc (North)","Vùng trung hòa","Cực Đông"],"w":"N là cực Bắc (North), S là cực Nam (South)."},
    {"d":1,"q":"Vật nào sau đây KHÔNG bị nam châm hút?","o":["Thước nhựa và dây đồng","Đinh sắt","Ghim giấy bằng thép","Mảnh niken"],"w":"Nhựa và đồng không phải vật liệu có từ tính."},
    {"d":2,"q":"Hình ảnh các đường cong tạo bởi mạt sắt xung quanh nam châm được gọi là gì?","o":["Từ phổ","Quang phổ","Đồ thị quãng đường","Sơ đồ mạch điện"],"w":"Mạt sắt sắp xếp dọc theo đường sức từ tạo thành từ phổ."},
    {"d":2,"q":"Trên thanh nam châm thẳng, vùng nào có từ tính YẾU NHẤT?","o":["Phần chính giữa thanh nam châm","Đầu cực Bắc (N)","Đầu cực Nam (S)","Hai đầu cực mạnh bằng vùng giữa"],"w":"Từ tính tập trung mạnh nhất ở hai từ cực và rất yếu ở chính giữa (miền trung hòa)."},
    {"d":3,"q":"Khi đưa cực Bắc của nam châm lại gần một đầu cuộn dây có dòng điện thì thấy chúng ĐẨY NHAU. Đầu cuộn dây đó là cực từ gì?","o":["Cực Bắc (N)","Cực Nam (S)","Không có cực từ","Cực âm điện"],"w":"Hai cực cùng tên đẩy nhau nên đầu cuộn dây đó là cực Bắc (N)."},
    {"d":3,"q":"Thiết bị nào sau đây có bộ phận chính là nam châm điện?","o":["Chuông điện và rơ-le điện từ","Gương chiếu hậu xe máy","Nhiệt kế y tế","Ống đong thủy tinh"],"w":"Chuông điện, cần cẩu từ, loa điện động và rơ-le đều hoạt động nhờ nam châm điện."},
    {"d":4,"q":"Một tàu thám hiểm ở Bắc Bán Cầu nhìn la bàn thấy đầu kim sơn đỏ chỉ thẳng về phía trước mặt. Phía bên tay phải của người cầm la bàn là hướng địa lí nào?","o":["Hướng Đông","Hướng Tây","Hướng Nam","Hướng Bắc"],"w":"Trước mặt là Bắc, sau lưng là Nam, bên phải là Đông, bên trái là Tây."}
  ],
  'l7-trao-doi-chat': [
    {"d":1,"q":"Bào quan thực hiện chức năng quang hợp ở tế bào lá cây xanh là gì?","o":["Lục lạp","Ti thể","Nhân tế bào","Màng sinh chất"],"w":"Lục lạp chứa chất diệp lục hấp thụ năng lượng ánh sáng."},
    {"d":1,"q":"Nguyên liệu trực tiếp của quá trình quang hợp ở thực vật gồm những chất nào?","o":["Khí carbon dioxide (CO₂) và nước (H₂O)","Khí oxygen (O₂) và glucose","Nitrogen (N₂) và tinh bột","Protein và muối khoáng"],"w":"Cây lấy H₂O từ rễ và CO₂ qua khí khổng để quang hợp."},
    {"d":2,"q":"Nhiệt độ quá cao (trên 45 – 50 °C) làm tốc độ quang hợp và hô hấp tế bào giảm mạnh vì sao?","o":["Làm biến tính và mất hoạt tính các enzyme xúc tác trong tế bào","Làm cây biến thành động vật","Làm ánh sáng biến mất","Làm nước đông thành đá"],"w":"Quang hợp và hô hấp đều do hệ enzyme protein xúc tác, rất nhạy cảm với nhiệt độ cao."},
    {"d":2,"q":"Loài cây nào sau đây thuộc nhóm CÂY ƯA BÓNG (sống tốt nơi ánh sáng yếu, dưới tán rừng hoặc trong nhà)?","o":["Cây lá lốt, trầu bà, lan ý","Cây lúa nước","Cây ngô (bắp)","Cây phi lao ngoài bãi biển"],"w":"Lá lốt, trầu bà có phiến lá mỏng, màu xanh sẫm thích nghi ánh sáng tán xạ yếu."},
    {"d":3,"q":"Trong thí nghiệm chứng minh hạt đang nảy mầm hô hấp, người ta dẫn khí trong bình chứa hạt nảy mầm vào ống nghiệm đựng nước vôi trong thì thấy hiện tượng gì?","o":["Nước vôi trong bị vẩn đục trắng do hạt hô hấp thải ra nhiều khí CO₂","Nước vôi trong chuyển sang màu đỏ tươi","Que đóm tắt bùng cháy mãnh liệt","Bình hạt tự đóng băng"],"w":"Hạt nảy mầm hô hấp mạnh thải CO₂ làm đục nước vôi trong Ca(OH)₂."},
    {"d":4,"q":"Khi ủ hạt thóc giống ẩm trong đống kín để nảy mầm, sờ tay vào đống thóc thấy ẤM NÓNG lên. Nguyên nhân của hiện tượng này là gì?","o":["Hạt đang nảy mầm hô hấp tế bào rất mạnh, một phần năng lượng giải phóng dưới dạng nhiệt","Hạt đang quang hợp tạo ra lửa","Ánh sáng trong kho chiếu vào làm nóng","Nước tự phân hủy thành khí hydrogen"],"w":"Hô hấp tế bào phân giải chất hữu cơ tạo ATP và tỏa nhiều nhiệt năng."}
  ],
  'l7-dinh-duong-van-chuyen': [
    {"d":1,"q":"Ở lá của phần lớn cây thân gỗ trên cạn, khí khổng thường tập trung nhiều hơn ở đâu?","o":["Biểu bì mặt dưới của lá","Biểu bì mặt trên của lá","Trong lõi gỗ của thân","Ở chóp rễ dưới đất"],"w":"Mặt dưới lá ít bị nắng chiếu trực tiếp giúp giảm mất nước quá mức qua khí khổng."},
    {"d":1,"q":"Ếch đồng trưởng thành trao đổi khí qua những cơ quan nào?","o":["Qua phổi và qua lớp da ẩm ướt","Chỉ qua hệ thống ống khí","Chỉ qua mang ngoài","Qua khí khổng"],"w":"Lưỡng cư (ếch) hô hấp bằng phổi kết hợp trao đổi khí mạnh qua da ẩm."},
    {"d":2,"q":"Động lực chính giúp kéo cột nước và muối khoáng từ rễ lên tới ngọn những cây cao hàng chục mét là gì?","o":["Lực hút đầu trên do quá trình thoát hơi nước ở lá kết hợp lực đẩy của rễ","Do gió thổi từ dưới lên","Do mạch rây bơm ngược lên","Do trọng lực hút lên trên"],"w":"Thoát hơi nước qua khí khổng tạo sức hút lớn kéo dòng mạch gỗ liên tục đi lên."},
    {"d":2,"q":"Bệnh BƯỚU CỔ ở người chủ yếu liên quan đến sự thiếu hụt nguyên tố vi lượng nào trong chế độ dinh dưỡng?","o":["Iodine (i-ốt)","Calcium","Vitamin C","Chất xơ"],"w":"Thiếu iodine làm tuyến giáp không tổng hợp đủ hormone."},
    {"d":3,"q":"Vì sao đất trồng cây trên cạn cần được xới xáo tơi xốp và tiêu nước kịp thời khi ngập úng lâu ngày?","o":["Để rễ cây có đủ khí oxygen trong các khe đất thực hiện hô hấp tế bào, hút nước và khoáng tốt","Để rễ cây nhận được ánh sáng quang hợp","Để tiêu diệt toàn bộ giun đất","Để làm đứt hết lông hút của cây"],"w":"Ngập úng lâu làm thiếu O₂, rễ hô hấp kị khí sinh chất độc làm thối rễ, cây héo chết."},
    {"d":4,"q":"Trong một ngày nắng ráo mùa hè, vào khoảng 12 giờ trưa nắng gắt nhất, nhiều cây trên cạn lại có hiện tượng giảm nhẹ thoát hơi nước (\"ngủ trưa\"). Vì sao?","o":["Nhiệt độ quá cao và thiếu nước tạm thời làm tế bào khí khổng đóng bớt lại để bảo vệ cây khỏi héo","Vì 12 giờ trưa không có ánh sáng Mặt Trời","Vì mạch gỗ biến mất vào buổi trưa","Vì rễ cây ngừng sống vào buổi trưa"],"w":"Cơ chế tự vệ đóng bớt khí khổng giữa trưa nắng gắt giúp cây tránh mất nước nguy kịch."}
  ],
  'l7-cam-ung': [
    {"d":1,"q":"Khi chạm nhẹ tay vào lá cây trinh nữ (xấu hổ), lá cụp ngay xuống. Đây là biểu hiện của hiện tượng nào?","o":["Cảm ứng ở thực vật","Quang hợp","Hô hấp tế bào","Thoát hơi nước"],"w":"Lá trinh nữ phản ứng với kích thích cơ học do thay đổi sức trương nước ở thể gối."},
    {"d":1,"q":"Tập tính nào sau đây là tập tính HỌC ĐƯỢC ở động vật?","o":["Chó chạy ra cửa đón chủ khi nghe tiếng xe quen thuộc","Nhện giăng tơ","Ve sầu kêu vào mùa hè","Ếch đực kêu gọi bạn tình"],"w":"Nhận biết tiếng xe quen hình thành qua trải nghiệm sống lặp lại."},
    {"d":2,"q":"Hoa hướng dương luôn hướng về phía Mặt Trời là biểu hiện của tính cảm ứng nào?","o":["Hướng sáng dương","Hướng nước dương","Hướng tiếp xúc","Hướng trọng lực dương"],"w":"Phản ứng hướng về nguồn chiếu sáng là hướng sáng dương."},
    {"d":2,"q":"Chim én bay từ phương Bắc về phương Nam tránh rét vào mùa đông là loại tập tính gì?","o":["Tập tính di cư bẩm sinh","Tập tính học được do con người dạy","Hướng động tiếp xúc","Phản xạ có điều kiện mới học"],"w":"Di cư theo mùa của chim én là tập tính bẩm sinh di truyền."},
    {"d":3,"q":"Trong nông nghiệp, việc dựng bù nhìn rơm trên ruộng lúa mới gieo nhằm ứng dụng điều gì?","o":["Tác động vào thị giác để xua đuổi chim ăn hạt theo tập tính cảnh giác","Giúp lúa hướng sáng mạnh hơn","Làm tăng độ ẩm cho đất","Kích thích giun đất sinh sản"],"w":"Chim thấy hình dáng giống người nên né tránh theo tập tính bảo vệ."},
    {"d":4,"q":"Nếu để bù nhìn rơm đứng yên một chỗ quá lâu không thay đổi, đàn chim không còn sợ nữa mà đậu ngay lên bù nhìn. Hiện tượng này giải thích thế nào?","o":["Chim hình thành tập tính quen nhờn khi kích thích lặp lại nhiều lần mà không kèm nguy hiểm thực sự","Vì chim bị mất thị giác","Vì bù nhìn biến thành thức ăn","Vì tập tính bẩm sinh của chim biến mất hoàn toàn ở thế hệ sau"],"w":"Quen nhờn là hình thức học tập đơn giản khi kích thích vô hại lặp đi lặp lại."}
  ],
  'l7-cam-ung-sinh-san': [
    {"d":1,"q":"Khi chạm nhẹ tay vào lá cây trinh nữ (cây xấu hổ), lá lập tức cụp lại. Đây là hiện tượng gì?","o":["Cảm ứng (ứng động tiếp xúc) ở thực vật","Quang hợp của lá","Sinh sản vô tính","Hô hấp tế bào"],"w":"Sức trương nước ở thể gối cuống lá giảm đột ngột làm lá cụp lại."},
    {"d":1,"q":"Loài động vật nào sau đây sinh sản vô tính bằng hình thức NẢY CHỒI?","o":["Thủy tức","Chó nhà","Chim bồ câu","Cá chép"],"w":"Cơ thể con mọc chồi từ thân thủy tức mẹ rồi tách ra sống độc lập."},
    {"d":2,"q":"Rễ cây luôn mọc đâm sâu xuống đất (cùng chiều trọng lực) là kiểu hướng động nào?","o":["Hướng trọng lực dương (hướng đất dương)","Hướng sáng dương","Hướng trọng lực âm","Hướng tiếp xúc"],"w":"Rễ hướng trọng lực dương để bám đất và tìm nước; thân hướng trọng lực âm."},
    {"d":2,"q":"Sự chuyển hạt phấn từ nhị tới đầu nhụy của hoa được gọi là quá trình gì?","o":["Thụ phấn","Thụ tinh","Nảy mầm","Nguyên phân"],"w":"Thụ phấn xảy ra trước, sau đó ống phấn mọc tới noãn mới diễn ra thụ tinh."},
    {"d":3,"q":"Người dân dùng đèn bẫy côn trùng vào ban đêm để diệt sâu bướm hại lúa là ứng dụng hiện tượng nào?","o":["Tập tính hướng sáng của nhiều loài côn trùng hoạt động ban đêm","Tập tính di cư tránh đông","Sinh sản vô tính của sâu bướm","Quang hợp của côn trùng"],"w":"Nhiều loài bướm đêm có tập tính lao vào nguồn sáng."},
    {"d":4,"q":"Khi ghép cành bưởi diễn (quả ngọt) lên gốc cây bưởi dại (rễ khỏe, chịu hạn tốt), quả mọc ra trên cành ghép sẽ mang đặc điểm vị của cây nào?","o":["Ngọt thơm giống cây bưởi diễn cho cành ghép","Chua đắng giống gốc bưởi dại","Nửa quả ngọt nửa quả đắng","Biến thành quả cam"],"w":"Cành ghép phát triển bằng nguyên phân giữ nguyên kiểu gene của cây cho cành, còn gốc ghép cung cấp nước và khoáng."}
  ],
  'l8-thi-nghiem': [
    {"d":1,"q":"Dụng cụ thủy tinh có cổ hẹp, đáy rộng phẳng (dùng lắc dung dịch khi chuẩn độ mà không bị sánh ra ngoài) gọi là gì?","o":["Bình tam giác (Erlenmeyer)","Ống nghiệm","Mặt kính đồng hồ","Đũa thủy tinh"],"w":"Bình tam giác có thành nghiêng thu hẹp ở cổ giúp lắc trộn an toàn."},
    {"d":2,"q":"Kí hiệu cảnh báo hình đầu lâu xương chéo trên nhãn lọ hóa chất cho biết ý nghĩa gì?","o":["Hóa chất độc hại nguy hiểm","Hóa chất dễ ăn mòn","Chất phóng xạ","Dụng cụ thủy tinh dễ vỡ"],"w":"Biểu tượng đầu lâu xương chéo cảnh báo hóa chất độc cấp tính."},
    {"d":3,"q":"Khi dùng biến áp nguồn trong thí nghiệm điện lớp 8, thao tác nào cần thực hiện TRƯỚC KHI cắm điện và bật công tắc nguồn?","o":["Kiểm tra sơ đồ mạch đúng chưa và vặn núm chọn điện áp về mức nhỏ nhất phù hợp","Chập hai đầu dây đầu ra lại với nhau để thử lửa","Tháo cầu chì bảo vệ của biến áp nguồn","Nhúng biến áp nguồn vào chậu nước làm mát"],"w":"Luôn kiểm tra mạch hở/ngắn mạch và đặt mức điện áp thấp đúng yêu cầu trước khi cấp nguồn."},
    {"d":4,"q":"Vì sao không dùng nước để dập đám cháy do xăng, dầu hỏa trong phòng thí nghiệm mà phải dùng cát hoặc bình chữa cháy bột/CO₂?","o":["Xăng dầu nhẹ hơn nước và không tan trong nước nên nổi lên trên mặt nước khiến đám cháy loang rộng hơn","Vì nước tác dụng hóa học với xăng tạo khí nổ","Vì nước nặng hơn cát gấp 10 lần","Vì xăng dầu làm đóng băng nước"],"w":"D_xăng < D_nước nên phun nước làm xăng nổi tràn lan, lửa càng cháy rộng."}
  ],
  'l8-van-dong-tieu-hoa': [
    {"d":1,"q":"Khớp xương nào sau đây thuộc loại KHỚP ĐỘNG (cử động linh hoạt rộng rãi)?","o":["Khớp đầu gối, khớp khuỷu tay, khớp vai","Khớp hộp sọ","Khớp giữa các đốt sống thắt lưng","Khớp xương chậu cố định"],"w":"Khớp động có sụn đầu khớp và dịch khớp giúp cử động dễ dàng."},
    {"d":2,"q":"Ở dạ dày người, loại enzyme nào hoạt động trong môi trường acid HCl để bước đầu phân giải protein thành chuỗi ngắn?","o":["Enzyme pepsin","Enzyme amylase nước bọt","Hormone insulin","Sắc tố hemoglobin"],"w":"Tuyến vị tiết HCl hoạt hóa pepsinogen thành pepsin tiêu hóa protein."},
    {"d":3,"q":"Thực phẩm lạc (đậu phộng), ngô bị mốc xanh mốc vàng tuyệt đối không được ăn vì chứa độc tố nguy hiểm nào gây ung thư gan?","o":["Độc tố Aflatoxin do nấm mốc Aspergillus tiết ra","Vitamin B12","Muối khoáng Calcium","Đường maltose"],"w":"Aflatoxin rất bền với nhiệt (đun sôi thường không phân hủy hết) và gây ung thư gan."},
    {"d":4,"q":"Khi vận động chạy bền quá sức, bắp cơ bị mỏi và đau nhức chủ yếu do sự tích tụ chất nào khi tế bào cơ thiếu oxygen?","o":["Lactic acid","Đường saccharose","Khí nitrogen","Tinh bột"],"w":"Hô hấp kị khí ở tế bào cơ thiếu O₂ sinh ra lactic acid gây mỏi cơ."}
  ],
  'l8-co-the-nguoi': [
    {"d":1,"q":"Thành phần nào của máu giữ vai trò chính trong quá trình ĐÔNG MÁU bảo vệ cơ thể khỏi mất máu khi đứt tay?","o":["Tiểu cầu","Hồng cầu","Kháng thể nhóm ABO","Nước tiểu đầu"],"w":"Tiểu cầu vỡ giải phóng enzyme tạo mạng sợi tơ máu (fibrin) giữ tế bào máu thành cục máu đông."},
    {"d":2,"q":"Ở người trưởng thành bình thường lúc nghỉ ngơi, nhịp tim trung bình khoảng bao nhiêu lần mỗi phút?","o":["Khoảng 70 – 75 nhịp/phút","Khoảng 10 – 12 nhịp/phút","Khoảng 250 nhịp/phút","Đúng 5 nhịp/phút"],"w":"Một chu kì tim kéo dài khoảng 0,8 s ⇒ 60 / 0,8 = 75 nhịp/phút."},
    {"d":3,"q":"Một bệnh nhân có nhóm máu AB cần truyền máu. Theo quy tắc truyền máu hệ ABO, bệnh nhân này có thể nhận máu từ nhóm nào mà không bị ngưng kết hồng cầu?","o":["Nhận được từ cả 4 nhóm O, A, B, AB (tốt nhất là cùng nhóm AB)","Chỉ nhận được duy nhất nhóm O","Chỉ nhận được nhóm A","Không nhận được nhóm nào"],"w":"Huyết tương nhóm AB không có kháng thể α và β nên là nhóm chuyên nhận."},
    {"d":4,"q":"Cơ chế hít vào bình thường ở người diễn ra như thế nào?","o":["Cơ liên sườn ngoài và cơ hoành co làm thể tích lồng ngực tăng, áp suất trong phổi giảm nhỏ hơn khí quyển nên không khí tràn vào phổi","Tim bơm không khí vào phổi làm lồng ngực phồng lên","Phế nang tự nở ra hút xương sườn đi vào","Cơ hoành dãn nâng lên làm thể tích lồng ngực giảm"],"w":"Thể tích lồng ngực tăng → áp suất phế nang giảm → không khí đi từ ngoài vào phổi."}
  ],
  'l8-than-kinh-noi-tiet': [
    {"d":1,"q":"Tiểu não ở não bộ người có chức năng quan trọng nhất là gì?","o":["Điều hòa, phối hợp các cử động phức tạp và giữ thăng bằng cơ thể","Lọc máu tạo nước tiểu","Tiết dịch mật tiêu hóa mỡ","Thu nhận ánh sáng tạo ảnh"],"w":"Tổn thương tiểu não làm người đi đứng loạng choạng, mất thăng bằng."},
    {"d":2,"q":"Người già hoặc người có cầu mắt quá ngắn thường mắc tật VIỄN THỊ (ảnh hiện sau màng lưới). Để nhìn rõ vật ở gần cần đeo kính gì?","o":["Kính lão là thấu kính hội tụ","Thấu kính phân kì","Gương cầu lồi","Kính râm không độ"],"w":"Thấu kính hội tụ kéo ảnh từ phía sau tiến về đúng trên màng lưới."},
    {"d":3,"q":"Khi gặp tình huống nguy hiểm bất ngờ (như chó dữ đuổi), tuyến thượng thận tiết nhanh hormone nào làm tim đập nhanh, tăng huyết áp và đường huyết để cơ thể phản ứng tức thời?","o":["Adrenaline","Estrogen","Amylase","Pepsin"],"w":"Adrenaline huy động năng lượng khẩn cấp cho phản ứng \"chiến đấu hay bỏ chạy\"."},
    {"d":4,"q":"Tuyến tụy được gọi là TUYẾN PHA vì lí do nào sau đây?","o":["Vừa thực hiện chức năng ngoại tiết (tiết dịch tụy đổ vào ruột non tiêu hóa), vừa nội tiết (tiết insulin và glucagon ngấm thẳng vào máu)","Vì nằm pha trộn ở trong tim","Vì chỉ hoạt động vào mùa xuân","Vì vừa lọc nước tiểu vừa trao đổi khí"],"w":"Tuyến tụy và tuyến sinh dục đều là các tuyến pha (vừa nội tiết vừa ngoại tiết)."}
  ],
  'l8-he-sinh-thai': [
    {"d":1,"q":"Các cây thông nhựa mọc gần nhau trong rừng có hiện tượng rễ liền nhau giúp chia sẻ nước và muối khoáng, chống chịu gió bão tốt hơn. Đây là mối quan hệ gì?","o":["Hỗ trợ cùng loài","Cạnh tranh khác loài","Kí sinh cùng loài","Sinh vật này ăn sinh vật khác"],"w":"Các cây thông cùng loài hỗ trợ nhau vượt qua điều kiện bất lợi."},
    {"d":2,"q":"Mối quan hệ giữa cây tầm gửi sống bám trên thân cây nhãn, hút nước và chất dinh dưỡng của cây nhãn làm cây nhãn suy yếu là quan hệ gì?","o":["Kí sinh – vật chủ","Cộng sinh đôi bên cùng lợi","Hội sinh","Hợp tác"],"w":"Một loài có lợi còn loài chủ bị hại là quan hệ kí sinh."},
    {"d":3,"q":"Trong một lưới thức ăn tự nhiên ở rừng, vì sao hệ sinh thái rừng mưa nhiệt đới lại có tính ổn định cân bằng sinh học cao hơn hệ sinh thái đồng ruộng độc canh?","o":["Vì rừng có độ đa dạng loài rất cao, lưới thức ăn phức tạp nên nếu 1 loài biến động thì loài khác thay thế mắt xích dễ dàng","Vì rừng không có sinh vật phân giải","Vì đồng ruộng có nhiều loài hổ báo hơn","Vì rừng không chịu tác động của ánh sáng"],"w":"Độ đa dạng sinh học càng cao, lưới thức ăn càng nhiều mắt xích chung thì hệ sinh thái càng bền vững."},
    {"d":4,"q":"Cho chuỗi thức ăn: Tảo lục → Giáp xác nhỏ → Cá mương → Cá quả (cá lóc). Nếu nguồn nước bị nhiễm kim loại nặng khó phân hủy sinh học (như thủy ngân) ở nồng độ thấp, loài nào trong chuỗi sẽ tích lũy độc chất ở nồng độ CAO NHẤT?","o":["Cá quả (bậc dinh dưỡng cao nhất cuối chuỗi)","Tảo lục","Giáp xác nhỏ","Cả 4 loài có nồng độ bằng hệt nhau"],"w":"Hiện tượng khuếch đại sinh học: chất độc khó phân hủy tích lũy tăng dần lên bậc dinh dưỡng cao nhất."}
  ],
  'l7-bang-tuan-hoan': [
    {"d":1,"sec":"lt","q":"Các nguyên tố trong bảng tuần hoàn được sắp xếp theo chiều tăng dần của đại lượng nào?","o":["Điện tích hạt nhân nguyên tử","Số neutron trong hạt nhân","Độ cứng của đơn chất","Nhiệt độ nóng chảy"],"w":"Nguyên tắc đầu tiên: sắp xếp theo chiều tăng dần điện tích hạt nhân Z."},
    {"d":2,"sec":"lt","q":"Các nguyên tố xếp trong cùng một hàng ngang (chu kì) có đặc điểm chung nào về cấu tạo nguyên tử?","o":["Có cùng số lớp electron","Có cùng số electron lớp ngoài cùng","Có cùng số neutron","Đều là khí hiếm"],"w":"Số thứ tự chu kì bằng số lớp electron trong nguyên tử."}
  ],
  'l7-hoa-tri': [
    {"d":1,"sec":"lt","q":"Trong các hợp chất hóa học, nguyên tố Hydrogen (H) và Oxygen (O) được quy ước lần lượt có hóa trị mấy?","o":["H hóa trị I, O hóa trị II","H hóa trị II, O hóa trị I","Cả H và O đều hóa trị II","H hóa trị I, O hóa trị III"],"w":"Quy ước H làm đơn vị (hóa trị I), O có hóa trị II."},
    {"d":2,"sec":"lt","q":"Khi viết công thức hóa học có chứa nhiều hơn 1 nhóm nguyên tử (như nhóm OH, SO₄, NO₃), ta phải trình bày như thế nào?","o":["Đặt nhóm nguyên tử trong dấu ngoặc đơn rồi ghi chỉ số ở chân bên phải ngoặc","Không cần dấu ngoặc đơn","Ghi chỉ số đằng trước công thức","Cộng dồn tất cả nguyên tử vào nhau"],"w":"Ví dụ Ca(OH)₂, Al₂(SO₄)₃."}
  ],
  'l7-am-thanh': [
    {"d":1,"sec":"lt","q":"Tai người bình thường có thể nghe được âm thanh có tần số nằm trong khoảng nào?","o":["Từ 20 Hz đến 20 000 Hz","Dưới 20 Hz (hạ âm)","Trên 20 000 Hz (siêu âm)","Chỉ đúng 100 Hz"],"w":"Ngưỡng nghe của tai người từ 20 Hz đến 20 000 Hz."},
    {"d":2,"sec":"lt","q":"Biện pháp trồng nhiều dải cây xanh xung quanh bệnh viện và trường học giúp giảm tiếng ồn theo hướng nào?","o":["Phân tán sóng âm trên đường truyền trước khi tới tai","Làm nguồn âm ngừng dao động","Bịt kín tai người nghe","Tăng biên độ dao động của còi xe"],"w":"Tán lá cây phản xạ âm theo nhiều hướng khác nhau, phân tán năng lượng âm trên đường truyền."}
  ],
  'l6-vat-lieu': [
    {"d":1,"sec":"lt","q":"Vật liệu nào sau đây có tính đàn hồi cao, không thấm nước, dùng chế tạo lốp xe và găng tay bảo hộ?","o":["Cao su","Gốm đất nung","Đá vôi","Gỗ khô"],"w":"Cao su có tính đàn hồi tốt, cách điện và không thấm nước."},
    {"d":2,"sec":"bt","q":"Nhiên liệu nào sau đây là nhiên liệu KHÍ sạch hơn than đá, phổ biến trong đun nấu gia đình?","o":["Khí gas hóa lỏng (LPG) và khí sinh học biogas","Than đá cục","Củi ướt","Dầu mazut đặc"],"w":"Gas và biogas là nhiên liệu khí dễ cháy hoàn toàn, ít khói bụi."},
    {"d":2,"sec":"lt","q":"Dấu hiệu nào cho biết thực phẩm đã bị ôi thiu, biến chất KHÔNG ĐƯỢC sử dụng?","o":["Đổi màu lạ, nổi nấm mốc, chảy nhớt hoặc có mùi chua thối","Rau xanh tươi mới rửa sạch","Gạo khô trắng thơm tự nhiên","Sữa hộp còn hạn sử dụng bảo quản tốt"],"w":"Thực phẩm nấm mốc, biến mùi chứa vi khuẩn và độc tố gây ngộ độc."}
  ],
  'l6-co-the': [
    {"d":1,"sec":"lt","q":"Cơ thể con người, cây cam, con thỏ thuộc nhóm cơ thể nào?","o":["Cơ thể đa bào (cấu tạo từ rất nhiều tế bào)","Cơ thể đơn bào","Chưa có cấu tạo tế bào","Chỉ gồm một mô duy nhất"],"w":"Động vật và thực vật bậc cao đều là cơ thể đa bào."},
    {"d":1,"sec":"lt","q":"Ở thực vật có hoa, hai hệ cơ quan chính cấu tạo nên cơ thể cây là gì?","o":["Hệ chồi (thân, lá, hoa, quả) và hệ rễ","Hệ tuần hoàn và hệ thần kinh","Hệ tiêu hóa và hệ hô hấp","Chỉ có hệ lá"],"w":"Cơ thể thực vật chia thành hệ rễ (dưới đất) và hệ chồi (trên mặt đất)."},
    {"d":2,"sec":"bt","q":"Cấp độ tổ chức ngay trên cấp độ \"Mô\" và ngay dưới cấp độ \"Hệ cơ quan\" là gì?","o":["Cơ quan","Tế bào","Cơ thể","Quần thể"],"w":"Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể."},
    {"d":3,"sec":"bt","q":"Quả tim, hai lá phổi, dạ dày trong cơ thể người được xếp vào cấp độ tổ chức nào?","o":["Cơ quan","Tế bào","Hệ cơ quan","Cơ thể đơn bào"],"w":"Tim là một cơ quan thuộc hệ tuần hoàn; phổi là cơ quan thuộc hệ hô hấp."},
    {"d":3,"sec":"bt","q":"Trùng biến hình và trùng giày trong giọt nước ao có đặc điểm chung nào?","o":["Cơ thể chỉ gồm 1 tế bào duy nhất nhưng vẫn thực hiện đủ dinh dưỡng, vận động, sinh sản","Cấu tạo từ hàng tỉ tế bào thần kinh","Tự quang hợp nhờ lá xanh","Thuộc nhóm thực vật hạt kín"],"w":"Cả hai đều là sinh vật nguyên sinh có cấu tạo cơ thể đơn bào."}
  ],
  'l7-sinh-truong': [
    {"d":1,"sec":"lt","q":"Sự biến đổi bao gồm sinh trưởng, phân hóa tế bào và phát sinh hình thái cơ quan mới gọi là gì?","o":["Phát triển","Hô hấp","Thoát hơi nước","Bài tiết"],"w":"Phát triển là toàn bộ biến đổi sinh trưởng, phân hóa và phát sinh hình thái."},
    {"d":2,"sec":"lt","q":"Nhân tố bên ngoài nào ảnh hưởng rõ rệt đến thời điểm ra hoa của cây thanh long, hoa cúc?","o":["Ánh sáng (thời gian chiếu sáng ngày – đêm) và nhiệt độ","Tiếng ồn giao thông","Từ trường nam châm","Áp suất khí hiếm"],"w":"Quang chu kì và nhiệt độ chi phối sự phân hóa mầm hoa."},
    {"d":2,"sec":"bt","q":"Vòng đời phát triển của loài châu chấu (Trứng → Ấu trùng gần giống trưởng thành nhưng chưa đủ cánh → Trưởng thành) thuộc kiểu nào?","o":["Phát triển qua biến thái không hoàn toàn","Phát triển không qua biến thái","Phát triển qua biến thái hoàn toàn có giai đoạn nhộng","Sinh sản phân đôi"],"w":"Ấu trùng châu chấu lột xác nhiều lần thành con trưởng thành không qua giai đoạn nhộng."},
    {"d":3,"sec":"bt","q":"Mùa đông trời giá rét, người chăn nuôi cần làm gì để gia súc, gia cầm non không bị chậm lớn?","o":["Che chắn chuồng ấm áp và tăng khẩu phần thức ăn giàu năng lượng","Tắm nước đá lạnh mỗi sáng","Giảm một nửa lượng thức ăn","Nhốt ngoài trời mưa gió"],"w":"Trời lạnh vật nuôi tốn nhiều năng lượng giữ ấm thân nhiệt nên cần sưởi ấm và ăn đủ chất."}
  ],
  'l9-mo-dau': [
    {"d":1,"sec":"lt","q":"Thiết bị nào biến đổi điện áp xoay chiều 220 V xuống mức điện áp thấp an toàn (6 V, 12 V) cho các bài thực hành lớp 9?","o":["Biến áp nguồn","Nhiệt kế thủy ngân","Lăng kính thủy tinh","Ống nghiệm"],"w":"Biến áp nguồn cung cấp nguồn AC/DC điện áp thấp an toàn."},
    {"d":1,"sec":"lt","q":"Trong bài thuyết trình khoa học, phần nêu lí do chọn đề tài và câu hỏi nghiên cứu nằm ở mục nào?","o":["Phần Mở đầu (Đặt vấn đề)","Phần Tài liệu tham khảo cuối cùng","Phần Phụ lục bảng số","Sau phần Kết luận"],"w":"Phần Mở đầu giới thiệu vấn đề và mục tiêu nghiên cứu."},
    {"d":2,"sec":"lt","q":"Khi sử dụng đèn chiếu laser trong thí nghiệm khúc xạ ánh sáng lớp 9, quy tắc an toàn quan trọng nhất là gì?","o":["Tuyệt đối KHÔNG chiếu tia laser trực tiếp vào mắt mình hoặc mắt người khác","Nhìn thẳng vào lỗ phát tia laser để căn chỉnh","Nhúng đèn laser vào cốc nước muối","Đập vỡ thấu kính của đèn"],"w":"Chùm tia laser hội tụ năng lượng cao có thể gây tổn thương võng mạc mắt."},
    {"d":2,"sec":"bt","q":"Hóa chất nào sau đây là chất lỏng hữu cơ bay hơi nhanh, dùng làm nhiên liệu đèn cồn phòng thí nghiệm?","o":["Ethylic alcohol (C₂H₅OH)","Dung dịch muối ăn (NaCl)","Nước vôi trong Ca(OH)₂","Bột sắt (Fe)"],"w":"Cồn C₂H₅OH cháy êm, không khói đen và tỏa nhiều nhiệt."},
    {"d":3,"sec":"bt","q":"Một nhóm học sinh đo hiệu điện thế và cường độ dòng điện qua điện trở ở 5 mức khác nhau rồi muốn biểu diễn sự phụ thuộc tuyến tính của I vào U trên slide thuyết trình. Dạng biểu đồ nào phù hợp nhất?","o":["Đồ thị đường thẳng trên hệ trục tọa độ I – U","Biểu đồ hình tròn phần trăm","Bản đồ địa hình","Sơ đồ phả hệ"],"w":"Đồ thị đường biểu diễn I theo U minh họa trực quan định luật Ohm."},
    {"d":3,"sec":"bt","q":"Nhãn lọ hóa chất có hình ngọn lửa đang cháy cảnh báo tính chất nguy hiểm nào?","o":["Chất dễ cháy, bắt lửa nhanh","Chất phóng xạ hạt nhân","Dụng cụ đo điện","Chất dinh dưỡng an toàn"],"w":"Biểu tượng ngọn lửa cảnh báo hóa chất dễ cháy (như ethanol, hexane, acetone)."}
  ],
  'l9-nang-luong-song': [
    {"d":1,"sec":"lt","q":"Dạng năng lượng nào sau đây thuộc nhóm NHIÊN LIỆU HÓA THẠCH (không tái tạo)?","o":["Than đá, dầu mỏ và khí thiên nhiên","Năng lượng gió biển","Ánh sáng Mặt Trời","Năng lượng thủy triều"],"w":"Than đá, dầu mỏ, khí thiên nhiên hình thành qua hàng triệu năm và không tái tạo kịp."},
    {"d":2,"sec":"lt","q":"Nhà máy thủy điện sản xuất ra điện nhờ chuyển hóa trực tiếp dạng năng lượng nào của dòng nước từ hồ chứa trên cao đổ xuống?","o":["Cơ năng (thế năng và động năng của dòng nước) làm quay tua-bin","Hóa năng của than đá","Năng lượng hạt nhân","Năng lượng âm thanh"],"w":"Nước trên cao có thế năng lớn chuyển thành động năng quay tua-bin máy phát điện."},
    {"d":2,"sec":"bt","q":"Ưu điểm nổi bật của năng lượng gió và năng lượng Mặt Trời so với nhiệt điện đốt than là gì?","o":["Tái tạo liên tục và hầu như không phát thải khí nhà kính CO₂ trong quá trình vận hành phát điện","Chỉ hoạt động được dưới lòng đất sâu","Tạo ra rất nhiều khói bụi mịn","Làm cạn kiệt nguồn nước ngầm"],"w":"Điện gió và điện mặt trời là năng lượng sạch, không đốt nhiên liệu hóa thạch."},
    {"d":3,"sec":"bt","q":"Một trang trại lắp đặt 10 tấm pin mặt trời, mỗi tấm tạo ra trung bình 1,8 kW·h điện mỗi ngày. Trong 10 ngày cả hệ thống tạo ra bao nhiêu kW·h điện năng?","n":180,"t":0.5,"u":"kW·h","w":"W = 10 × 1,8 × 10 = 180 kW·h."},
    {"d":3,"sec":"bt","q":"Khí sinh học (biogas) thu được từ việc ủ kín chất thải chăn nuôi để đun nấu thuộc nguồn năng lượng nào?","o":["Năng lượng sinh khối (năng lượng tái tạo)","Nhiên liệu hạt nhân","Năng lượng địa nhiệt","Năng lượng thủy triều"],"w":"Biogas tận dụng phụ phẩm hữu cơ sinh học (sinh khối), vừa tạo chất đốt vừa giảm ô nhiễm chuồng trại."},
    {"d":4,"sec":"bt","q":"Biện pháp nào giúp sử dụng năng lượng hiệu quả và bền vững ở hộ gia đình?","o":["Tận dụng ánh sáng và thông gió tự nhiên, dùng thiết bị dán nhãn tiết kiệm năng lượng 5 sao","Bật bình nóng lạnh và điều hòa liên tục 24/24 giờ kể cả khi đi vắng","Dùng bóng đèn sợi đốt công suất lớn thay cho đèn LED","Đốt lốp cao su cũ để đun nước"],"w":"Thiết bị hiệu suất cao và thói quen tắt khi không dùng giúp tiết kiệm điện và giảm phát thải."}
  ],
  'l9-ancol-axit': [
    {"d":1,"sec":"lt","q":"Nhóm nguyên tử nào trong phân tử ethylic alcohol (CH₃–CH₂–OH) gây ra phản ứng đặc trưng với kim loại Na giải phóng khí H₂?","o":["Nhóm –OH (hydroxyl)","Nhóm –CH₃","Nhóm –COOH","Liên kết ba"],"w":"Nguyên tử H linh động trong nhóm –OH bị Na thế tạo khí H₂."},
    {"d":2,"sec":"lt","q":"Để làm sạch lớp cặn đá vôi (CaCO₃) bám dưới đáy ấm đun nước lâu ngày một cách an toàn tại nhà, ta nên ngâm ấm bằng dung dịch gì?","o":["Giấm ăn (dung dịch acetic acid 2–5%)","Dầu ăn","Cồn y tế 90°","Nước muối loãng"],"w":"Acetic acid hòa tan cặn CaCO₃ tạo muối calcium acetate tan trong nước."},
    {"d":2,"sec":"bt","q":"Hòa tan 45 mL ethylic alcohol nguyên chất với nước cất thu được 100 mL dung dịch rượu. Độ cồn của dung dịch này bằng bao nhiêu độ?","n":45,"t":0.1,"u":"°","w":"Độ cồn = (45 / 100) × 100° = 45°."},
    {"d":3,"sec":"bt","q":"Cho 9,2 g ethylic alcohol C₂H₅OH (M = 46) tác dụng hết với kim loại Na dư (2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑). Số mol khí H₂ thu được là bao nhiêu mol?","n":0.1,"t":0.005,"u":"mol","w":"n(rượu) = 9,2 / 46 = 0,2 mol ⇒ n(H₂) = 0,2 / 2 = 0,1 mol."}
  ],
  'l9-nhiem-sac-the': [
    {"d":1,"sec":"lt","q":"Ở ruồi giấm có bộ nhiễm sắc thể lưỡng bội 2n = 8. Tế bào sinh dưỡng bình thường của ruồi giấm có bao nhiêu NST?","n":8,"t":0,"u":"NST","w":"Tế bào sinh dưỡng mang bộ NST lưỡng bội 2n = 8."},
    {"d":1,"sec":"lt","q":"Hiện tượng các gene nằm trên cùng một nhiễm sắc thể phân li cùng nhau trong quá trình phân bào được Morgan gọi là gì?","o":["Di truyền liên kết","Phân li độc lập","Đột biến đa bội","Chọn lọc nhân tạo"],"w":"Các gene trên cùng 1 NST tạo thành một nhóm gene liên kết."},
    {"d":2,"sec":"lt","q":"Bệnh mù màu đỏ – lục và bệnh máu khó đông ở người do gene lặn nằm trên nhiễm sắc thể nào quy định (nên nam giới dễ mắc hơn nữ giới)?","o":["Nhiễm sắc thể giới tính X (không có allele tương ứng trên Y)","Nhiễm sắc thể số 21","Nhiễm sắc thể trong ti thể","Không do gene quy định"],"w":"Nam giới (XY) chỉ cần 1 allele lặn trên X đã biểu hiện bệnh, còn nữ (XX) phải có 2 allele lặn."},
    {"d":3,"sec":"bt","q":"Một tế bào sinh tinh chín (2n) giảm phân bình thường tạo ra bao nhiêu tinh trùng đơn bội (n)?","n":4,"t":0,"u":"tinh trùng","w":"Từ 1 tế bào sinh tinh qua giảm phân (2 lần phân bào) tạo ra 4 tinh trùng đơn bội n."}
  ]
};

// ============================================================================
// 2. BỘ SINH CÂU HỎI ĐỘNG THEO THAM SỐ (PARAMETRIC GENERATORS) CHO LỚP 7 & LỚP 8
// ============================================================================
var ELEMENTS_20 = [
  {z:3,sym:'Li',name:'Lithium',n:4,p:2,g:'IA',type:'Kim loại'},
  {z:4,sym:'Be',name:'Beryllium',n:5,p:2,g:'IIA',type:'Kim loại'},
  {z:6,sym:'C',name:'Carbon',n:6,p:2,g:'IVA',type:'Phi kim'},
  {z:7,sym:'N',name:'Nitrogen',n:7,p:2,g:'VA',type:'Phi kim'},
  {z:8,sym:'O',name:'Oxygen',n:8,p:2,g:'VIA',type:'Phi kim'},
  {z:9,sym:'F',name:'Fluorine',n:10,p:2,g:'VIIA',type:'Phi kim'},
  {z:10,sym:'Ne',name:'Neon',n:10,p:2,g:'VIIIA',type:'Khí hiếm'},
  {z:11,sym:'Na',name:'Sodium',n:12,p:3,g:'IA',type:'Kim loại'},
  {z:12,sym:'Mg',name:'Magnesium',n:12,p:3,g:'IIA',type:'Kim loại'},
  {z:13,sym:'Al',name:'Aluminium',n:14,p:3,g:'IIIA',type:'Kim loại'},
  {z:14,sym:'Si',name:'Silicon',n:14,p:3,g:'IVA',type:'Phi kim'},
  {z:15,sym:'P',name:'Phosphorus',n:16,p:3,g:'VA',type:'Phi kim'},
  {z:16,sym:'S',name:'Sulfur',n:16,p:3,g:'VIA',type:'Phi kim'},
  {z:17,sym:'Cl',name:'Chlorine',n:18,p:3,g:'VIIA',type:'Phi kim'},
  {z:18,sym:'Ar',name:'Argon',n:22,p:3,g:'VIIIA',type:'Khí hiếm'},
  {z:19,sym:'K',name:'Potassium',n:20,p:4,g:'IA',type:'Kim loại'},
  {z:20,sym:'Ca',name:'Calcium',n:20,p:4,g:'IIA',type:'Kim loại'}
];

function outerElectrons(z){
  if (z <= 2) return z;
  if (z <= 10) return z - 2;
  if (z <= 18) return z - 10;
  return z - 18;
}

var COMPOUNDS = [
  {f:'Na₂O', M:62, el:'Na', x:2, Mx:23, hint:'Na=23, O=16'},
  {f:'K₂O', M:94, el:'K', x:2, Mx:39, hint:'K=39, O=16'},
  {f:'MgO', M:40, el:'Mg', x:1, Mx:24, hint:'Mg=24, O=16'},
  {f:'CaO', M:56, el:'Ca', x:1, Mx:40, hint:'Ca=40, O=16'},
  {f:'Al₂O₃', M:102, el:'Al', x:2, Mx:27, hint:'Al=27, O=16'},
  {f:'FeO', M:72, el:'Fe', x:1, Mx:56, hint:'Fe=56, O=16'},
  {f:'Fe₂O₃', M:160, el:'Fe', x:2, Mx:56, hint:'Fe=56, O=16'},
  {f:'CuO', M:80, el:'Cu', x:1, Mx:64, hint:'Cu=64, O=16'},
  {f:'SO₂', M:64, el:'S', x:1, Mx:32, hint:'S=32, O=16'},
  {f:'SO₃', M:80, el:'S', x:1, Mx:32, hint:'S=32, O=16'},
  {f:'P₂O₅', M:142, el:'P', x:2, Mx:31, hint:'P=31, O=16'},
  {f:'CaCO₃', M:100, el:'Ca', x:1, Mx:40, hint:'Ca=40, C=12, O=16'},
  {f:'MgSO₄', M:120, el:'Mg', x:1, Mx:24, hint:'Mg=24, S=32, O=16'},
  {f:'CuSO₄', M:160, el:'Cu', x:1, Mx:64, hint:'Cu=64, S=32, O=16'},
  {f:'NaOH', M:40, el:'Na', x:1, Mx:23, hint:'Na=23, O=16, H=1'},
  {f:'Ca(OH)₂', M:74, el:'Ca', x:1, Mx:40, hint:'Ca=40, O=16, H=1'},
  {f:'Fe₂(SO₄)₃', M:400, el:'Fe', x:2, Mx:56, hint:'Fe=56, S=32, O=16'}
];

var GASES = [
  {f:'H₂', M:2, hint:'H = 1'},
  {f:'CH₄', M:16, hint:'C = 12, H = 1'},
  {f:'NH₃', M:17, hint:'N = 14, H = 1'},
  {f:'N₂', M:28, hint:'N = 14'},
  {f:'CO', M:28, hint:'C = 12, O = 16'},
  {f:'O₂', M:32, hint:'O = 16'},
  {f:'CO₂', M:44, hint:'C = 12, O = 16'},
  {f:'SO₂', M:64, hint:'S = 32, O = 16'}
];

var GENERATORS = {
  'l7-nguyen-tu': function(){
    var out = [];
    var e1 = pick(ELEMENTS_20), e2 = pick(ELEMENTS_20), e3 = pick(ELEMENTS_20), e4 = pick(ELEMENTS_20);
    out.push({
      d:1, q:'Nguyên tử ' + e1.name + ' (' + e1.sym + ') có ' + e1.z + ' proton trong hạt nhân. Số electron ở vỏ nguyên tử này là bao nhiêu?',
      n:e1.z, t:0, u:'electron', w:'Nguyên tử trung hòa về điện nên số e = số p = ' + e1.z + '.'
    });
    out.push({
      d:2, q:'Nguyên tử ' + e2.name + ' (' + e2.sym + ') có ' + e2.z + ' proton và ' + e2.n + ' neutron. Khối lượng nguyên tử xấp xỉ bao nhiêu amu?',
      n:e2.z + e2.n, t:0, u:'amu', w:'Khối lượng nguyên tử ≈ p + n = ' + e2.z + ' + ' + e2.n + ' = ' + (e2.z + e2.n) + ' amu.'
    });
    out.push({
      d:2, q:'Nguyên tử ' + e3.name + ' có Z = ' + e3.z + ' electron. Số electron ở lớp ngoài cùng của nguyên tử này là bao nhiêu?',
      n:outerElectrons(e3.z), t:0, u:'electron', w:'Phân bố ' + e3.z + 'e vào các lớp (tối đa 2, 8, 8…) ⇒ lớp ngoài cùng có ' + outerElectrons(e3.z) + 'e.'
    });
    var S = 2 * e4.z + e4.n;
    out.push({
      d:3, q:'Tổng số hạt (p, n, e) trong nguyên tử X là ' + S + ', biết số hạt không mang điện là ' + e4.n + '. Số proton của X là bao nhiêu?',
      n:e4.z, t:0, u:'proton', w:'2p + ' + e4.n + ' = ' + S + ' ⇒ 2p = ' + (2 * e4.z) + ' ⇒ p = ' + e4.z + '.'
    });
    var diff = 2 * e2.z - e2.n;
    out.push({
      d:4, q:'Nguyên tử R có tổng số hạt (p, n, e) là ' + (2*e2.z + e2.n) + ', trong đó số hạt mang điện nhiều hơn số hạt không mang điện là ' + diff + '. Khối lượng nguyên tử R là bao nhiêu amu?',
      n:e2.z + e2.n, t:0, u:'amu', w:'Hệ 2p + n = ' + (2*e2.z + e2.n) + ' và 2p − n = ' + diff + ' ⇒ p = ' + e2.z + ', n = ' + e2.n + ' ⇒ khối lượng = ' + (e2.z + e2.n) + ' amu.'
    });
    return out;
  },

  'l7-bang-tuan-hoan': function(){
    var out = [];
    var e1 = pick(ELEMENTS_20), e2 = pick(ELEMENTS_20.filter(function(x){ return x.p <= 3 && x.g !== 'VIIIA'; }));
    out.push({
      d:1, q:'Nguyên tố ' + e1.name + ' (' + e1.sym + ') đứng ở ô số ' + e1.z + ' trong bảng tuần hoàn. Điện tích hạt nhân có bao nhiêu proton?',
      n:e1.z, t:0, u:'proton', w:'Số thứ tự ô = số hiệu nguyên tử Z = số proton = ' + e1.z + '.'
    });
    out.push({
      d:2, q:'Nguyên tử của nguyên tố ' + e1.sym + ' (Z = ' + e1.z + ') có ' + e1.p + ' lớp electron. Nguyên tố này nằm ở chu kì mấy?',
      n:e1.p, t:0, u:'', w:'Số thứ tự chu kì đúng bằng số lớp electron = ' + e1.p + '.'
    });
    var wrongTypes = ['Kim loại','Phi kim','Khí hiếm'].filter(function(t){ return t !== e1.type; });
    out.push({
      d:3, q:'Nguyên tố ' + e1.name + ' (' + e1.sym + ', thuộc chu kì ' + e1.p + ', nhóm ' + e1.g + ') được phân loại là gì?',
      o:[e1.type, wrongTypes[0], wrongTypes[1], 'Hợp chất hữu cơ'],
      w:e1.sym + ' thuộc nhóm ' + e1.g + ' nên là ' + e1.type.toLowerCase() + '.'
    });
    out.push({
      d:4, q:'Nguyên tố X nằm ở chu kì ' + e2.p + ', nhóm ' + e2.g + '. Số hiệu nguyên tử Z của X bằng bao nhiêu?',
      n:e2.z, t:0, u:'', w:'Chu kì ' + e2.p + ' có ' + e2.p + ' lớp e, nhóm ' + e2.g + ' có ' + outerElectrons(e2.z) + 'e lớp ngoài cùng ⇒ tổng e = Z = ' + e2.z + '.'
    });
    return out;
  },

  'l7-phan-tu': function(){
    var out = [];
    var c1 = pick(COMPOUNDS), c2 = pick(COMPOUNDS.filter(function(c){ return c.f !== c1.f; }));
    out.push({
      d:2, q:'Tính khối lượng phân tử của hợp chất ' + c1.f + ' (' + c1.hint + ').',
      n:c1.M, t:0, u:'amu', w:'Cộng khối lượng các nguyên tử trong ' + c1.f + ' ta được ' + c1.M + ' amu.'
    });
    var k = pick([
      {f:'XO₂', M:44, O:2, X:12, sym:'C'},
      {f:'XO₃', M:80, O:3, X:32, sym:'S'},
      {f:'X₂O₃', M:102, O:3, X:27, sym:'Al'},
      {f:'X₂O', M:94, O:1, X:39, sym:'K'},
      {f:'XO', M:56, O:1, X:40, sym:'Ca'}
    ]);
    var xCount = k.f.indexOf('X₂') === 0 ? 2 : 1;
    out.push({
      d:3, q:'Hợp chất ' + k.f + ' có khối lượng phân tử bằng ' + k.M + ' amu (biết O = 16). Nguyên tử khối của X là bao nhiêu amu?',
      n:k.X, t:0, u:'amu', w:xCount + '·X + ' + (k.O*16) + ' = ' + k.M + ' ⇒ X = ' + k.X + ' amu (' + k.sym + ').'
    });
    var mult = pick([1.5, 2, 2.5]);
    var Mbase = 32; // O2
    var targetM = mult * Mbase;
    out.push({
      d:4, q:'Một phân tử hợp chất khí A nặng gấp ' + fmt(mult) + ' lần phân tử khí oxygen O₂ (O = 16). Khối lượng phân tử của A là bao nhiêu amu?',
      n:targetM, t:0.1, u:'amu', w:'M(O₂) = 32 amu ⇒ M(A) = ' + fmt(mult) + ' × 32 = ' + fmt(targetM) + ' amu.'
    });
    return out;
  },

  'l7-hoa-tri': function(){
    var out = [];
    var c = pick(COMPOUNDS);
    var pctVal = round((c.x * c.Mx / c.M) * 100, 1);
    out.push({
      d:3, q:'Tính phần trăm khối lượng của nguyên tố ' + c.el + ' trong hợp chất ' + c.f + ' (' + c.hint + '; làm tròn đến 1 chữ số thập phân nếu lẻ).',
      n:pctVal, t:0.15, u:'%', w:'M(' + c.f + ') = ' + c.M + ' ⇒ %' + c.el + ' = (' + (c.x * c.Mx) + ' / ' + c.M + ') × 100% ≈ ' + fmt(pctVal) + '%.'
    });
    var ox = pick([
      {f:'SO₂', v:'IV', wrong:['II','VI','I'], w:'1 · a = 2 · II ⇒ a = IV.'},
      {f:'SO₃', v:'VI', wrong:['IV','II','III'], w:'1 · a = 3 · II ⇒ a = VI.'},
      {f:'P₂O₅', v:'V', wrong:['III','II','IV'], w:'2 · a = 5 · II ⇒ a = V.'},
      {f:'Cr₂O₃', v:'III', wrong:['II','VI','I'], w:'2 · a = 3 · II ⇒ a = III.'},
      {f:'MnO₂', v:'IV', wrong:['II','VII','III'], w:'1 · a = 2 · II ⇒ a = IV.'}
    ]);
    out.push({
      d:2, q:'Theo quy tắc hóa trị (O hóa trị II), hóa trị của nguyên tố đứng trước O trong hợp chất ' + ox.f + ' là bao nhiêu?',
      o:[ox.v].concat(ox.wrong), w:ox.w
    });
    var fm = pick([
      {q:'Fe (II) và nhóm SO₄ (II)', ans:'FeSO₄', w:['Fe₂(SO₄)₃','Fe(SO₄)₂','Fe₂SO₄']},
      {q:'Fe (III) và Cl (I)', ans:'FeCl₃', w:['FeCl₂','Fe₃Cl','FeCl']},
      {q:'Al (III) và nhóm SO₄ (II)', ans:'Al₂(SO₄)₃', w:['AlSO₄','Al₃(SO₄)₂','Al(SO₄)₃']},
      {q:'Ba (II) và nhóm NO₃ (I)', ans:'Ba(NO₃)₂', w:['BaNO₃','Ba₂NO₃','BaNO₆']}
    ]);
    out.push({
      d:2, q:'Công thức hóa học đúng của hợp chất tạo bởi ' + fm.q + ' là gì?',
      o:[fm.ans].concat(fm.w), w:'Áp dụng quy tắc chéo hóa trị và tối giản chỉ số ta được ' + fm.ans + '.'
    });
    var det = pick([
      {el1:'Fe', m1:56, el2:'O', m2:16, M:160, p1:70, sum:5, f:'Fe₂O₃'},
      {el1:'Cu', m1:64, el2:'O', m2:16, M:80, p1:80, sum:2, f:'CuO'},
      {el1:'S', m1:32, el2:'O', m2:16, M:80, p1:40, sum:4, f:'SO₃'},
      {el1:'Al', m1:27, el2:'O', m2:16, M:102, p1:52.94, sum:5, f:'Al₂O₃'}
    ]);
    out.push({
      d:4, q:'Một oxide của ' + det.el1 + ' có khối lượng phân tử ' + det.M + ' amu, trong đó ' + det.el1 + ' chiếm khoảng ' + fmt(det.p1) + '% về khối lượng (' + det.el1 + '=' + det.m1 + ', O=16). Tổng số nguyên tử trong 1 phân tử oxide này là bao nhiêu?',
      n:det.sum, t:0, u:'nguyên tử', w:'Từ % khối lượng và M = ' + det.M + ' tìm được công thức ' + det.f + ', có tổng cộng ' + det.sum + ' nguyên tử.'
    });
    return out;
  },

  'l7-toc-do': function(){
    var out = [];
    var vMs = pick([5, 10, 12, 15, 20, 25]);
    var vKmh = round(vMs * 3.6, 1);
    out.push({
      d:2, q:'Đổi tốc độ ' + fmt(vKmh) + ' km/h sang đơn vị m/s.',
      n:vMs, t:0.05, u:'m/s', w:fmt(vKmh) + ' : 3,6 = ' + vMs + ' m/s.'
    });
    var tH = pick([0.5, 1.5, 2, 2.5]);
    var vCar = pick([40, 48, 50, 60, 70]);
    var sKm = round(vCar * tH, 1);
    out.push({
      d:2, q:'Một ô tô chuyển động trên quãng đường ' + fmt(sKm) + ' km hết ' + fmt(tH) + ' giờ. Tốc độ trung bình của xe là bao nhiêu km/h?',
      n:vCar, t:0.1, u:'km/h', w:'v = s / t = ' + fmt(sKm) + ' : ' + fmt(tH) + ' = ' + vCar + ' km/h.'
    });
    var t1 = 0.5, v1 = pick([30, 40, 50]), t2 = 1.5, v2 = pick([50, 60, 70]);
    var sTot = round(t1 * v1 + t2 * v2, 1);
    out.push({
      d:3, q:'Một xe đi ' + fmt(t1) + ' giờ đầu với tốc độ ' + v1 + ' km/h, sau đó đi tiếp ' + fmt(t2) + ' giờ với tốc độ ' + v2 + ' km/h. Tổng quãng đường xe đi được là bao nhiêu km?',
      n:sTot, t:0.1, u:'km', w:'s = ' + v1 + '×' + fmt(t1) + ' + ' + v2 + '×' + fmt(t2) + ' = ' + fmt(sTot) + ' km.'
    });
    var va = pick([30, 35, 40]), vb = pick([20, 25, 30]), meetT = pick([1.5, 2, 2.5]);
    var distAB = (va + vb) * meetT;
    out.push({
      d:4, q:'Hai xe khởi hành cùng lúc từ A và B cách nhau ' + fmt(distAB) + ' km đi ngược chiều nhau với tốc độ ' + va + ' km/h và ' + vb + ' km/h. Sau bao nhiêu giờ hai xe gặp nhau?',
      n:meetT, t:0.05, u:'giờ', w:'t = s / (v₁ + v₂) = ' + fmt(distAB) + ' / (' + va + ' + ' + vb + ') = ' + fmt(meetT) + ' giờ.'
    });
    return out;
  },

  'l7-am-thanh': function(){
    var out = [];
    var f = pick([50, 80, 120, 250, 440]), sec = pick([10, 15, 20, 30]);
    var N = f * sec;
    out.push({
      d:2, q:'Một vật dao động thực hiện được ' + N + ' dao động trong ' + sec + ' giây. Tần số dao động của vật bằng bao nhiêu Hz?',
      n:f, t:0.1, u:'Hz', w:'f = N / t = ' + N + ' / ' + sec + ' = ' + f + ' Hz.'
    });
    var tEcho = pick([0.8, 1.2, 1.5, 2.4]);
    var dAir = round(340 * tEcho / 2, 1);
    out.push({
      d:3, q:'Đứng trước vách núi hét to, người ta nghe thấy tiếng vang sau ' + fmt(tEcho) + ' giây (biết v_âm trong không khí = 340 m/s). Khoảng cách đến vách núi là bao nhiêu mét?',
      n:dAir, t:0.2, u:'m', w:'d = v · t / 2 = 340 × ' + fmt(tEcho) + ' / 2 = ' + fmt(dAir) + ' m.'
    });
    var tSea = pick([0.6, 1.0, 1.4, 2.0, 2.8]);
    var dSea = round(1500 * tSea / 2, 1);
    out.push({
      d:3, q:'Tàu khảo sát phát siêu âm xuống đáy biển và nhận âm phản xạ sau ' + fmt(tSea) + ' giây (v_âm trong nước biển = 1500 m/s). Độ sâu đáy biển là bao nhiêu mét?',
      n:dSea, t:0.5, u:'m', w:'d = 1500 × ' + fmt(tSea) + ' / 2 = ' + fmt(dSea) + ' m.'
    });
    return out;
  },

  'l7-anh-sang': function(){
    var out = [];
    var alpha = pick([20, 25, 30, 40, 50, 65]);
    var inc = 90 - alpha;
    out.push({
      d:2, q:'Chiếu một tia sáng hợp với MẶT GƯƠNG PHẲNG một góc ' + alpha + '°. Góc phản xạ bằng bao nhiêu độ?',
      n:inc, t:0, u:'°', w:'Góc tới hợp với pháp tuyến: i = 90° − ' + alpha + '° = ' + inc + '° ⇒ góc phản xạ i′ = ' + inc + '°.'
    });
    var twoI = pick([60, 80, 90, 120, 130, 140]);
    out.push({
      d:3, q:'Chiếu tia sáng tới gương phẳng sao cho góc hợp bởi tia tới và tia phản xạ bằng ' + twoI + '°. Góc tới bằng bao nhiêu độ?',
      n:twoI / 2, t:0, u:'°', w:'i + i′ = 2i = ' + twoI + '° ⇒ i = ' + (twoI / 2) + '°.'
    });
    var d0 = pick([1.8, 2.2, 2.5, 3.0]), step = pick([0.4, 0.5, 0.7]);
    var dNew = round((d0 - step) * 2, 2);
    out.push({
      d:3, q:'Một người đứng cách gương phẳng ' + fmt(d0) + ' m, sau đó bước tiến lại gần gương thêm ' + fmt(step) + ' m. Lúc này người đó cách ảnh của mình bao nhiêu mét?',
      n:dNew, t:0.02, u:'m', w:'Khoảng cách mới tới gương = ' + fmt(d0) + ' − ' + fmt(step) + ' = ' + fmt(round(d0 - step, 2)) + ' m ⇒ cách ảnh = ' + fmt(dNew) + ' m.'
    });
    var rot = pick([10, 12, 18, 20, 25]);
    out.push({
      d:4, q:'Giữ cố định tia sáng tới, nếu quay gương phẳng một góc ' + rot + '° quanh điểm tới thì tia phản xạ quay đi một góc bao nhiêu độ?',
      n:rot * 2, t:0, u:'°', w:'Khi gương quay góc α thì tia phản xạ quay một góc 2α = 2 × ' + rot + '° = ' + (rot * 2) + '°.'
    });
    return out;
  },

  'l8-phan-ung': function(){
    var out = [];
    var k = pick([0.1, 0.15, 0.2, 0.25, 0.3]);
    var mMg = round(24 * k, 2), mO2 = round(16 * k, 2), mMgO = round(40 * k, 2);
    out.push({
      d:2, q:'Đốt cháy hoàn toàn ' + fmt(mMg) + ' g kim loại Mg trong không khí thu được ' + fmt(mMgO) + ' g MgO (2Mg + O₂ → 2MgO). Khối lượng khí O₂ đã tham gia phản ứng là bao nhiêu gam?',
      n:mO2, t:0.05, u:'g', w:'Theo định luật BTKL: m(O₂) = m(MgO) − m(Mg) = ' + fmt(mMgO) + ' − ' + fmt(mMg) + ' = ' + fmt(mO2) + ' g.'
    });
    var molCa = pick([0.5, 0.8, 1.2, 1.5, 2.0]);
    var mCaCO3 = round(100 * molCa, 1), mCaO = round(56 * molCa, 1), mCO2 = round(44 * molCa, 1);
    out.push({
      d:3, q:'Nung hoàn toàn ' + fmt(mCaCO3) + ' g CaCO₃ nguyên chất thu được ' + fmt(mCaO) + ' g vôi sống CaO và khí CO₂ thoát ra. Khối lượng CO₂ thu được là bao nhiêu gam?',
      n:mCO2, t:0.1, u:'g', w:'BTKL: m(CO₂) = ' + fmt(mCaCO3) + ' − ' + fmt(mCaO) + ' = ' + fmt(mCO2) + ' g.'
    });
    var eq = pick([
      {s:'P + O₂ —(t°)→ P₂O₅', sum:9, w:'4P + 5O₂ → 2P₂O₅ ⇒ tổng hệ số = 4 + 5 + 2 = 11', fix:11},
      {s:'Fe(OH)₃ —(t°)→ Fe₂O₃ + H₂O', sum:6, w:'2Fe(OH)₃ → 1Fe₂O₃ + 3H₂O ⇒ tổng hệ số = 2 + 1 + 3 = 6', fix:6},
      {s:'Al + H₂SO₄ → Al₂(SO₄)₃ + H₂', sum:9, w:'2Al + 3H₂SO₄ → 1Al₂(SO₄)₃ + 3H₂ ⇒ tổng hệ số = 2 + 3 + 1 + 3 = 9', fix:9},
      {s:'KClO₃ —(t°, xt)→ KCl + O₂', sum:7, w:'2KClO₃ → 2KCl + 3O₂ ⇒ tổng hệ số = 2 + 2 + 3 = 7', fix:7}
    ]);
    out.push({
      d:3, q:'Cân bằng phương trình hóa học: ' + eq.s + ' với hệ số nguyên tối giản. Tổng tất cả các hệ số trong phương trình bằng bao nhiêu?',
      n:eq.fix, t:0, u:'', w:eq.w + '.'
    });
    var mRock = pick([150, 200, 250]), pur = pick([80, 85, 90]);
    var pureCa = mRock * pur / 100;
    var co2Out = round(pureCa * 0.44, 2);
    out.push({
      d:4, q:'Nung hoàn toàn ' + mRock + ' g đá vôi chứa ' + pur + '% CaCO₃ (còn lại là tạp chất trơ; biết 100 g CaCO₃ phân hủy tạo 56 g CaO và 44 g CO₂). Khối lượng khí CO₂ thu được là bao nhiêu gam?',
      n:co2Out, t:0.1, u:'g', w:'m(CaCO₃ nguyên chất) = ' + mRock + ' × ' + pur + '% = ' + fmt(pureCa) + ' g ⇒ m(CO₂) = ' + fmt(co2Out) + ' g.'
    });
    return out;
  },

  'l8-mol': function(){
    var out = [];
    // Dạng 1 (Mức 1 - Dễ): Đổi đơn vị mol <-> mmol, L <-> mL, số hạt Avogadro
    var mmol = pick([150, 250, 400, 500, 750, 1200]);
    out.push({
      d:1, q:'Đổi đơn vị lượng chất: ' + mmol + ' mmol (mili-mol) bằng bao nhiêu mol? (biết 1 mol = 1000 mmol)',
      n:round(mmol / 1000, 3), t:0.001, u:'mol', w:mmol + ' : 1000 = ' + fmt(round(mmol / 1000, 3)) + ' mol.'
    });
    var vMlGas = pick([2479, 4958, 7437, 12395]);
    var nFromMl = round((vMlGas / 1000) / 24.79, 2);
    out.push({
      d:2, q:'Đổi đơn vị và tính số mol: ' + vMlGas + ' mL một chất khí ở điều kiện chuẩn (25 °C, 1 bar) tương ứng với bao nhiêu mol khí? (1 L = 1000 mL)',
      n:nFromMl, t:0.005, u:'mol', w:'Đổi V = ' + fmt(vMlGas/1000) + ' L ⇒ n = ' + fmt(vMlGas/1000) + ' / 24,79 = ' + fmt(nFromMl) + ' mol.'
    });
    // Dạng 2 (Mức 2 - TB): Tính số mol từ khối lượng m
    var g1 = pick(GASES.filter(function(g){ return g.M >= 16; }));
    var n1 = pick([0.1, 0.15, 0.2, 0.25, 0.4, 0.5]);
    var m1 = round(n1 * g1.M, 2);
    out.push({
      d:2, q:'Tính số mol phân tử có trong ' + fmt(m1) + ' gam khí ' + g1.f + ' (' + g1.hint + ').',
      n:n1, t:0.005, u:'mol', w:'M(' + g1.f + ') = ' + g1.M + ' g/mol ⇒ n = ' + fmt(m1) + ' / ' + g1.M + ' = ' + fmt(n1) + ' mol.'
    });
    // Dạng 3 (Mức 2 - TB): Tính thể tích khí ở 25 °C, 1 bar
    var n2 = pick([0.1, 0.2, 0.3, 0.4, 0.6, 0.8]);
    var v2 = round(n2 * 24.79, 2);
    out.push({
      d:2, q:'Ở điều kiện chuẩn (25 °C, 1 bar), ' + fmt(n2) + ' mol khí chiếm thể tích bao nhiêu lít? (làm tròn đến 2 chữ số thập phân)',
      n:v2, t:0.03, u:'L', w:'V = ' + fmt(n2) + ' × 24,79 = ' + fmt(round(n2 * 24.79, 3)) + ' L ≈ ' + fmt(v2) + ' L.'
    });
    // Dạng 4 (Mức 3 - Khá): Tính khối lượng từ thể tích khí hoặc tỉ khối
    var g3 = pick([{f:'O₂',M:32,h:'O=16'},{f:'CO₂',M:44,h:'C=12, O=16'},{f:'N₂',M:28,h:'N=14'},{f:'SO₂',M:64,h:'S=32, O=16'}]);
    var n3 = pick([0.1, 0.2, 0.25, 0.5]);
    var v3 = round(n3 * 24.79, 3);
    var m3 = round(n3 * g3.M, 2);
    out.push({
      d:3, q:'Khối lượng của ' + fmt(v3) + ' lít khí ' + g3.f + ' đo ở 25 °C, 1 bar (' + g3.h + ') là bao nhiêu gam?',
      n:m3, t:0.05, u:'g', w:'n = ' + fmt(v3) + ' / 24,79 = ' + fmt(n3) + ' mol ⇒ m = ' + fmt(n3) + ' × ' + g3.M + ' = ' + fmt(m3) + ' g.'
    });
    var gHeavy = pick([{f:'O₂',M:32},{f:'CO₂',M:44},{f:'SO₂',M:64},{f:'CH₄',M:16}]);
    out.push({
      d:3, q:'Tỉ khối của khí ' + gHeavy.f + ' (M = ' + gHeavy.M + ') đối với khí H₂ (M = 2) bằng bao nhiêu?',
      n:gHeavy.M / 2, t:0.01, u:'', w:'d = ' + gHeavy.M + ' / 2 = ' + (gHeavy.M / 2) + '.'
    });
    // Dạng 5 (Mức 4 - Khó): Hỗn hợp khí & tìm M từ tỉ khối
    var na = pick([0.1, 0.2, 0.3]), nb = pick([0.2, 0.3]);
    var Mtb = round((na * 28 + nb * 32) / (na + nb), 2);
    out.push({
      d:4, q:'Hỗn hợp khí gồm ' + fmt(na) + ' mol N₂ (M = 28) và ' + fmt(nb) + ' mol O₂ (M = 32). Khối lượng mol trung bình của hỗn hợp là bao nhiêu g/mol? (làm tròn 2 chữ số thập phân)',
      n:Mtb, t:0.05, u:'g/mol', w:'M_tb = (' + fmt(na) + '×28 + ' + fmt(nb) + '×32) / (' + fmt(round(na+nb,2)) + ') ≈ ' + fmt(Mtb) + ' g/mol.'
    });
    return out;
  },

  'l8-dung-dich': function(){
    var out = [];
    var mct = pick([15, 20, 25, 30, 40, 50]), mdd = pick([200, 250, 400, 500]);
    var mH2O = mdd - mct;
    var cPct = round((mct / mdd) * 100, 2);
    out.push({
      d:2, q:'Hòa tan hoàn toàn ' + mct + ' g đường vào ' + mH2O + ' g nước. Nồng độ phần trăm (C%) của dung dịch thu được là bao nhiêu %?',
      n:cPct, t:0.05, u:'%', w:'m_dd = ' + mct + ' + ' + mH2O + ' = ' + mdd + ' g ⇒ C% = (' + mct + '/' + mdd + ') × 100% = ' + fmt(cPct) + '%.'
    });
    var mol = pick([0.1, 0.2, 0.3, 0.45, 0.6]), vMl = pick([200, 250, 500]);
    var cm = round(mol / (vMl / 1000), 2);
    out.push({
      d:2, q:'Hòa tan ' + fmt(mol) + ' mol chất tan vào nước thu được ' + vMl + ' mL dung dịch. Nồng độ mol (C_M) là bao nhiêu M?',
      n:cm, t:0.02, u:'M', w:'Đổi V = ' + (vMl/1000) + ' L ⇒ C_M = ' + fmt(mol) + ' / ' + fmt(vMl/1000) + ' = ' + fmt(cm) + ' M.'
    });
    var mdd1 = pick([150, 200, 300]), c1 = pick([12, 15, 20, 25]), c2 = pick([5, 6, 10]);
    var mdd2 = (mdd1 * c1) / c2;
    var addW = round(mdd2 - mdd1, 1);
    out.push({
      d:4, q:'Cần thêm bao nhiêu gam nước vào ' + mdd1 + ' g dung dịch muối ' + c1 + '% để pha loãng thành dung dịch ' + c2 + '%?',
      n:addW, t:0.2, u:'g', w:'m_ct = ' + fmt(mdd1*c1/100) + ' g ⇒ m_dd sau = ' + fmt(mdd2) + ' g ⇒ nước cần thêm = ' + fmt(mdd2) + ' − ' + mdd1 + ' = ' + fmt(addW) + ' g.'
    });
    return out;
  },

  'l8-tinh-pthh': function(){
    var out = [];
    var met = pick([
      {sym:'Mg', M:24}, {sym:'Zn', M:65}, {sym:'Fe', M:56}
    ]);
    var nM = pick([0.05, 0.1, 0.15, 0.2, 0.25]);
    var mM = round(nM * met.M, 2);
    var vH2 = round(nM * 24.79, 2);
    out.push({
      d:3, q:'Hòa tan hoàn toàn ' + fmt(mM) + ' g ' + met.sym + ' (M = ' + met.M + ') vào dung dịch HCl dư (' + met.sym + ' + 2HCl → ' + met.sym + 'Cl₂ + H₂↑). Thể tích khí H₂ ở 25 °C, 1 bar là bao nhiêu lít? (làm tròn 2 chữ số thập phân)',
      n:vH2, t:0.03, u:'L', w:'n(' + met.sym + ') = ' + fmt(nM) + ' mol ⇒ n(H₂) = ' + fmt(nM) + ' mol ⇒ V = ' + fmt(nM) + ' × 24,79 ≈ ' + fmt(vH2) + ' L.'
    });
    var mTheory = pick([40, 50, 80, 120]), eff = pick([75, 80, 85, 90]);
    var mReal = round(mTheory * eff / 100, 1);
    out.push({
      d:3, q:'Theo tính toán lí thuyết một phản ứng thu được ' + mTheory + ' g sản phẩm, nhưng hiệu suất thực tế đạt ' + eff + '%. Khối lượng sản phẩm thực tế thu được là bao nhiêu gam?',
      n:mReal, t:0.1, u:'g', w:'m_thực tế = ' + mTheory + ' × ' + eff + '% = ' + fmt(mReal) + ' g.'
    });
    var nZn = pick([0.15, 0.2, 0.3]), nHCl = pick([0.2, 0.3]);
    // Zn + 2HCl -> ZnCl2 + H2: compare nZn/1 vs nHCl/2
    var nH2Lim = Math.min(nZn, nHCl / 2);
    var vH2Lim = round(nH2Lim * 24.79, 2);
    out.push({
      d:4, q:'Cho ' + fmt(nZn) + ' mol Zn vào dung dịch chứa ' + fmt(nHCl) + ' mol HCl (Zn + 2HCl → ZnCl₂ + H₂↑). Sau khi phản ứng kết thúc, thu được bao nhiêu lít H₂ (25 °C, 1 bar; làm tròn 2 chữ số thập phân)?',
      n:vH2Lim, t:0.03, u:'L', w:'Xét tỉ lệ: n(Zn)/1 = ' + fmt(nZn) + ' và n(HCl)/2 = ' + fmt(nHCl/2) + ' ⇒ tính theo chất nhỏ hơn, n(H₂) = ' + fmt(nH2Lim) + ' mol ⇒ V ≈ ' + fmt(vH2Lim) + ' L.'
    });
    return out;
  },

  'l8-acid-base': function(){
    var out = [];
    var nAcid = pick([0.05, 0.1, 0.15, 0.2, 0.25]);
    var vNaOH = round((2 * nAcid / 1) * 1000, 0);
    out.push({
      d:3, q:'Trung hòa hoàn toàn ' + fmt(nAcid) + ' mol H₂SO₄ bằng dung dịch NaOH 1 M (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O). Thể tích dung dịch NaOH cần dùng là bao nhiêu mL?',
      n:vNaOH, t:1, u:'mL', w:'n(NaOH) = 2 × ' + fmt(nAcid) + ' = ' + fmt(2*nAcid) + ' mol ⇒ V = ' + fmt(2*nAcid) + ' L = ' + vNaOH + ' mL.'
    });
    var ph = pick([2, 3, 7, 11, 13]);
    var env = ph < 7 ? 'Môi trường acid (làm quỳ tím hóa đỏ)' : (ph === 7 ? 'Môi trường trung tính (quỳ tím không đổi màu)' : 'Môi trường base/kiềm (làm quỳ tím hóa xanh)');
    var wrongs = [
      'Môi trường acid (làm quỳ tím hóa đỏ)',
      'Môi trường trung tính (quỳ tím không đổi màu)',
      'Môi trường base/kiềm (làm quỳ tím hóa xanh)',
      'Không dẫn điện và không xác định được'
    ].filter(function(x){ return x !== env; });
    out.push({
      d:2, q:'Một mẫu dung dịch đo được pH = ' + ph + '. Kết luận nào sau đây là ĐÚNG?',
      o:[env].concat(wrongs), w:'Với pH = ' + ph + ' → ' + env + '.'
    });
    return out;
  },

  'l8-oxide-muoi': function(){
    var out = [];
    var nCO2 = pick([0.05, 0.08, 0.12, 0.15, 0.25]);
    var vCO2 = round(nCO2 * 24.79, 3);
    var mKetTua = round(nCO2 * 100, 1);
    out.push({
      d:3, q:'Sục ' + fmt(vCO2) + ' lít khí CO₂ (ở 25 °C, 1 bar) vào dung dịch Ca(OH)₂ dư. Khối lượng kết tủa CaCO₃ (M = 100) thu được là bao nhiêu gam?',
      n:mKetTua, t:0.15, u:'g', w:'n(CO₂) = ' + fmt(nCO2) + ' mol ⇒ n(CaCO₃) = ' + fmt(nCO2) + ' mol ⇒ m = ' + fmt(mKetTua) + ' g.'
    });
    var bagKg = pick([25, 40, 50]), nPct = pick([16, 18, 20]), pPct = pick([16, 20]), kPct = pick([8, 15]);
    var mN = round(bagKg * nPct / 100, 2);
    out.push({
      d:4, q:'Một bao phân bón hỗn hợp nặng ' + bagKg + ' kg có ghi kí hiệu "NPK ' + nPct + '-' + pPct + '-' + kPct + '". Khối lượng nguyên tố dinh dưỡng N tính quy đổi trong bao phân này là bao nhiêu kg?',
      n:mN, t:0.05, u:'kg', w:'Chỉ số đầu là %N = ' + nPct + '% ⇒ m(N) = ' + bagKg + ' × ' + nPct + '% = ' + fmt(mN) + ' kg.'
    });
    return out;
  },

  'l8-khoi-luong-rieng': function(){
    var out = [];
    var mat = pick([
      {name:'nhôm', D:2.7}, {name:'sắt', D:7.8}, {name:'đồng', D:8.9}, {name:'đá hoa cương', D:2.6}
    ]);
    var Vcm = pick([50, 100, 150, 200]);
    var mg = round(mat.D * Vcm, 1);
    out.push({
      d:2, q:'Một vật đặc bằng ' + mat.name + ' có thể tích ' + Vcm + ' cm³ và khối lượng ' + fmt(mg) + ' g. Khối lượng riêng của vật là bao nhiêu g/cm³?',
      n:mat.D, t:0.02, u:'g/cm³', w:'D = m / V = ' + fmt(mg) + ' / ' + Vcm + ' = ' + fmt(mat.D) + ' g/cm³.'
    });
    var F = pick([300, 450, 600, 900, 1200]), S = pick([0.02, 0.03, 0.05, 0.06]);
    var p = round(F / S, 0);
    out.push({
      d:2, q:'Áp lực ' + F + ' N tác dụng vuông góc lên mặt sàn có diện tích tiếp xúc ' + fmt(S) + ' m². Áp suất gây ra là bao nhiêu Pa?',
      n:p, t:1, u:'Pa', w:'p = F / S = ' + F + ' / ' + fmt(S) + ' = ' + p + ' Pa.'
    });
    var H = pick([1.5, 1.8, 2.0, 2.5]), fromBot = pick([0.3, 0.4, 0.5]);
    var hReal = round(H - fromBot, 2);
    var pLiq = round(10000 * hReal, 0);
    out.push({
      d:3, q:'Một bồn cao ' + fmt(H) + ' m chứa đầy nước (d = 10 000 N/m³). Áp suất nước tại một điểm cách ĐÁY bồn ' + fmt(fromBot) + ' m bằng bao nhiêu Pa?',
      n:pLiq, t:1, u:'Pa', w:'Độ sâu từ mặt thoáng là h = ' + fmt(H) + ' − ' + fmt(fromBot) + ' = ' + fmt(hReal) + ' m ⇒ p = 10 000 × ' + fmt(hReal) + ' = ' + pLiq + ' Pa.'
    });
    return out;
  },

  'l8-archimedes': function(){
    var out = [];
    var Pair = pick([12, 15, 18, 24, 30]), Fsub = pick([7, 9, 10]);
    var FA = Pair - Fsub;
    out.push({
      d:2, q:'Treo một vật vào lực kế ngoài không khí chỉ ' + Pair + ' N. Khi nhúng chìm vật vào nước lực kế chỉ ' + Fsub + ' N. Lực đẩy Archimedes bằng bao nhiêu N?',
      n:FA, t:0.01, u:'N', w:'F_A = P − F_nhúng = ' + Pair + ' − ' + Fsub + ' = ' + FA + ' N.'
    });
    var Vcm3 = pick([200, 350, 500, 800]), dLiq = pick([8000, 10000]);
    var liqName = dLiq === 10000 ? 'nước (d = 10 000 N/m³)' : 'dầu (d = 8000 N/m³)';
    var faCalc = round(dLiq * (Vcm3 / 1000000), 2);
    out.push({
      d:3, q:'Nhúng chìm hoàn toàn một vật đặc thể tích ' + Vcm3 + ' cm³ vào ' + liqName + '. Lực đẩy Archimedes tác dụng lên vật là bao nhiêu N?',
      n:faCalc, t:0.02, u:'N', w:'Đổi V = ' + (Vcm3/1000000) + ' m³ ⇒ F_A = ' + dLiq + ' × ' + (Vcm3/1000000) + ' = ' + fmt(faCalc) + ' N.'
    });
    var Dwood = pick([400, 500, 600, 750, 800]);
    var pctAbove = round(100 - (Dwood / 1000) * 100, 1);
    out.push({
      d:4, q:'Một khối gỗ đặc có khối lượng riêng ' + Dwood + ' kg/m³ thả nổi cân bằng trên mặt nước (D = 1000 kg/m³). Phần thể tích gỗ NỔI trên mặt nước chiếm bao nhiêu % thể tích cả khối gỗ?',
      n:pctAbove, t:0.1, u:'%', w:'Phần chìm chiếm ' + Dwood + '/1000 = ' + (Dwood/10) + '% ⇒ phần nổi phía trên chiếm 100% − ' + (Dwood/10) + '% = ' + fmt(pctAbove) + '%.'
    });
    return out;
  },

  'l8-don-bay': function(){
    var out = [];
    var F = pick([25, 30, 40, 50, 80]), dCm = pick([20, 25, 30, 40, 50]);
    var M = round(F * (dCm / 100), 2);
    out.push({
      d:2, q:'Tác dụng lực ' + F + ' N có cánh tay đòn ' + dCm + ' cm đối với trục quay. Moment của lực đó bằng bao nhiêu N·m?',
      n:M, t:0.02, u:'N·m', w:'Đổi d = ' + fmt(dCm/100) + ' m ⇒ M = ' + F + ' × ' + fmt(dCm/100) + ' = ' + fmt(M) + ' N·m.'
    });
    var F1 = pick([600, 800, 1000, 1500]), d1 = 0.2, d2 = pick([1.0, 1.6, 2.0]);
    var F2 = round((F1 * d1) / d2, 1);
    out.push({
      d:3, q:'Dùng đòn bẩy nâng vật có trọng lượng F₁ = ' + F1 + ' N đặt cách điểm tựa d₁ = ' + fmt(d1) + ' m. Tay người ấn cách điểm tựa d₂ = ' + fmt(d2) + ' m thì cần lực tối thiểu bao nhiêu N?',
      n:F2, t:0.1, u:'N', w:'F₂ = (F₁ · d₁) / d₂ = (' + F1 + ' × ' + fmt(d1) + ') / ' + fmt(d2) + ' = ' + fmt(F2) + ' N.'
    });
    return out;
  },

  'l8-dien': function(){
    var out = [];
    var mA = pick([150, 350, 450, 800, 1200, 1800]);
    out.push({
      d:2, q:'Đổi giá trị cường độ dòng điện ' + mA + ' mA sang đơn vị Ampe (A).',
      n:round(mA / 1000, 3), t:0.001, u:'A', w:mA + ' : 1000 = ' + fmt(round(mA / 1000, 3)) + ' A.'
    });
    var Utot = pick([6, 9, 12, 24]), U1 = pick([2.5, 3.5, 4.2]);
    var U2 = round(Utot - U1, 2);
    out.push({
      d:3, q:'Hai đèn mắc NỐI TIẾP vào nguồn ' + Utot + ' V. Vôn kế đo hai đầu đèn 1 chỉ ' + fmt(U1) + ' V. Hiệu điện thế hai đầu đèn 2 là bao nhiêu V?',
      n:U2, t:0.02, u:'V', w:'Mạch nối tiếp: U₂ = U − U₁ = ' + Utot + ' − ' + fmt(U1) + ' = ' + fmt(U2) + ' V.'
    });
    var I1 = pick([0.2, 0.25, 0.35, 0.4]), I2 = pick([0.3, 0.45, 0.55]);
    out.push({
      d:3, q:'Hai đèn mắc SONG SONG có dòng điện qua mỗi đèn lần lượt là ' + fmt(I1) + ' A và ' + fmt(I2) + ' A. Cường độ dòng điện mạch chính là bao nhiêu A?',
      n:round(I1 + I2, 2), t:0.01, u:'A', w:'Mạch song song: I = I₁ + I₂ = ' + fmt(I1) + ' + ' + fmt(I2) + ' = ' + fmt(round(I1 + I2, 2)) + ' A.'
    });
    return out;
  },

  'l8-nhiet': function(){
    var out = [];
    var mKg = pick([0.5, 1, 1.5, 2, 3]), t0 = pick([20, 25, 30]), t1 = pick([70, 80, 100]);
    var QkJ = round(mKg * 4.2 * (t1 - t0), 1);
    out.push({
      d:3, q:'Tính nhiệt lượng cần cung cấp (theo kJ) để đun nóng ' + fmt(mKg) + ' kg nước từ ' + t0 + ' °C lên ' + t1 + ' °C (biết c_nước = 4200 J/(kg·K), 1 kJ = 1000 J).',
      n:QkJ, t:0.2, u:'kJ', w:'Q = m·c·Δt = ' + fmt(mKg) + ' × 4200 × ' + (t1 - t0) + ' = ' + (QkJ * 1000) + ' J = ' + fmt(QkJ) + ' kJ.'
    });
    return out;
  }
};

// Phân loại câu hỏi rõ ràng thành 2 phần trong mỗi bài học:
//   - 'lt': Phần A – Trắc nghiệm lí thuyết trọng tâm (khái niệm, định luật, tính chất, hiện tượng, quy tắc)
//   - 'bt': Phần B – Bài tập bổ sung củng cố bài học (tính toán định lượng, giải quyết tình huống vận dụng, thực nghiệm)
function classifySection(q, d){
  if (!q) return 'bt';
  if (q.sec === 'lt' || q.sec === 'bt') return q.sec;
  if (q.n != null) return 'bt';
  if (d >= 3) return 'bt';
  // Check if an MC question at d=2 is actually a quantitative / formula-solving exercise
  if (/\b(tính|bao nhiêu|hóa trị của .* trong|công thức hóa học đúng của hợp chất tạo bởi|cân bằng)\b/i.test(q.q || '')) {
    return 'bt';
  }
  return 'lt';
}

// ============================================================================
// 3. API LẤY BỘ CÂU HỎI ĐẦY ĐỦ & LẤY MẪU NGẪU NHIÊN MỖI LẦN MỞ
// ============================================================================
function getExpandedTopicPool(topic, variantRounds){
  if (!topic) return [];
  var pool = [];
  var seen = {};

  function addQ(q, staticIdx){
    if (!q || !q.q || seen[q.q]) return;
    seen[q.q] = true;
    var dVal = (q.d === 1 || q.d === 2 || q.d === 3 || q.d === 4) ? q.d : (q.n != null ? 2 : 1);
    pool.push({
      q: q,
      staticIdx: typeof staticIdx === 'number' ? staticIdx : null,
      d: dVal,
      sec: classifySection(q, dVal)
    });
  }

  // 1. Original static questions in js/data/lop*.js
  (topic.questions || []).forEach(function(q, i){ addQ(q, i); });

  // 2. Extra static conceptual & consolidation bank
  if (EXTRA_STATIC[topic.id]) {
    EXTRA_STATIC[topic.id].forEach(function(q){ addQ(q, null); });
  }

  // 3. Fresh parametric variants
  var gen = GENERATORS[topic.id];
  if (typeof gen === 'function') {
    var rounds = variantRounds || 4;
    for (var r = 0; r < rounds; r++) {
      var batch = gen() || [];
      batch.forEach(function(q){ addQ(q, null); });
    }
  }

  return pool;
}

window.KHTNBank = {
  classifySection: classifySection,

  // Total rich pool for a single lesson (static + extra + fresh parametric variants)
  getPoolForTopic: function(topic, variantRounds){
    return getExpandedTopicPool(topic, variantRounds || 5);
  },

  // Draw a balanced, fresh randomized workout for a Lesson:
  // Always includes BOTH:
  //   - Phần A: Trắc nghiệm lí thuyết trọng tâm (5–8 câu)
  //   - Phần B: Bài tập bổ sung củng cố bài học (6–10 câu, sắp xếp từ Dễ -> Khó)
  sampleLessonSet: function(topic, perLevel){
    var pool = getExpandedTopicPool(topic, 3);
    var ltPool = shuffle(pool.filter(function(it){ return it.sec === 'lt'; }));
    var btPool = pool.filter(function(it){ return it.sec === 'bt'; });

    var pickedLt = ltPool.slice(0, Math.min(6, ltPool.length)).sort(function(a, b){ return a.d - b.d; });

    var pickedBt = [];
    var btPerLv = perLevel ? Math.max(2, Math.ceil(perLevel * 0.75)) : 3;
    [1, 2, 3, 4].forEach(function(lv){
      var bucket = shuffle(btPool.filter(function(it){ return it.d === lv; }));
      bucket.slice(0, btPerLv).forEach(function(it){ pickedBt.push(it); });
    });
    if (pickedBt.length < Math.min(6, btPool.length)) {
      var usedBt = {};
      pickedBt.forEach(function(x){ usedBt[x.q.q] = true; });
      shuffle(btPool).forEach(function(x){
        if (!usedBt[x.q.q] && pickedBt.length < 8) { usedBt[x.q.q] = true; pickedBt.push(x); }
      });
      pickedBt.sort(function(a, b){ return a.d - b.d; });
    }

    var out = pickedLt.concat(pickedBt);
    return {
      totalAvailable: pool.length,
      ltCount: pickedLt.length,
      btCount: pickedBt.length,
      items: out
    };
  },

  // Count estimated total rich bank size across topics
  estimateTotalQuestions: function(topics){
    var sum = 0;
    (topics || []).forEach(function(t){
      sum += getExpandedTopicPool(t, 5).length;
    });
    return sum;
  }
};
})();
