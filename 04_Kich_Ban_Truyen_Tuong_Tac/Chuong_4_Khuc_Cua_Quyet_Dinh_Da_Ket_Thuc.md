# CHƯƠNG 4 (TÌNH HUỐNG 4): KHÚC CUA QUYẾT ĐỊNH - HỘI NGHỊ THÁCH THỨC SỐ
## Chủ đề SGK: Tổng hợp Chủ đề B & D - Ứng phó sự cố an toàn mạng & Bản lĩnh công dân số

> **Mã tình huống:** `CASE_04_INCIDENT_RESPONSE_ENDINGS`  
> **Kiến thức trọng tâm:** Quy trình ứng phó sự cố an toàn thông tin (Incident Response), phòng chống tấn công từ chối dịch vụ (DDoS), sao lưu phục hồi dữ liệu (Backup & Disaster Recovery), ranh giới giữa Hacker mũ trắng và tội phạm mạng.  
> **Nhân vật xuất hiện:** Minh (Trưởng nhóm kỹ thuật), An (Quản trị an toàn thông tin), Hoàng (Kỹ thuật viên), Thầy Tuấn (Giáo viên phụ trách CNTT), Cố vấn CyberFox.

---

### 📖 TRANG 1: NGÀY HỘI CÔNG NGHỆ VÀ CƠN BÃO TẤN CÔNG BẤT NGỜ
* **Bối cảnh:** Sáng thứ Bảy rực rỡ cờ hoa tại sân trường. Hơn 1.500 học sinh và thầy cô đang hào hứng tham gia *"Ngày hội Chuyển đổi số THPT"*.
* **Hình ảnh gợi ý:** Minh và An ngồi trong phòng điều khiển trung tâm, trước mặt là 4 màn hình lớn hiển thị biểu đồ truy cập thời gian thực của Cổng bình chọn trực tuyến.
* **Nội dung & Lời thoại:**
  - **Minh (phấn khởi):** "An ơi, lượng bình chọn cho các dự án sáng tạo đang tăng vọt! Đã có hơn 1.200 lượt vote thành công rồi!"
  - Đột nhiên, còi báo động trên máy chủ vang lên inh ỏi. Đồ thị lưu lượng mạng trên màn hình dựng đứng như một bức tường thẳng tắp. Tốc độ kết nối rơi tự do từ 100Mbps xuống còn 0Kbps!
  - **An (mặt biến sắc, gõ phím liên hồi kiểm tra log):** "Báo động đỏ Minh ơi! Hệ thống đang bị tấn công từ chối dịch vụ phân tán (DDoS)! Có hơn 50.000 yêu cầu ảo đổ dồn vào Cổng bình chọn mỗi giây từ một mạng máy tính ma (Botnet)!"
  - Màn hình chính của cổng bình chọn bất ngờ chuyển sang màu đen kịt với logo đầu lâu và dòng chữ nhấp nháy: *"MUỐN SỰ KIỆN TIẾP TỤC? HÃY TRUYỀN TẬP TIN ĐỀ THI HỌC KỲ TRÊN MÁY CHỦ CHO CHÚNG TA TRONG 10 PHÚT!"*.

---

### 📖 TRANG 2: CÁM DỖ 'TRẢ ĐŨA HACKER' VÀ ÁP LỰC THỜI GIAN
* **Bối cảnh:** Toàn bộ khán phòng bên ngoài sân trường bắt đầu xôn xao vì màn hình bình chọn lớn bị tê liệt. Thầy Hiệu trưởng đang bước nhanh về phía phòng điều khiển.
* **Hình ảnh gợi ý:** Không khí trong phòng điều khiển nghẹt thở. Hoàng chạy vào, tay cầm một chiếc USB đen.
* **Nội dung & Lời thoại:**
  - **Hoàng (thở hổn hển):** "Tớ lần ra dải IP của kẻ tấn công rồi! Hắn dùng một máy chủ lậu ở nước ngoài! Tớ có sẵn một script mã độc tấn công ngược (Counter-attack exploit) tải trên Dark Web đây! Minh cắm USB này vào máy chủ trường rồi chạy script đi, chúng ta sẽ bắn sập máy chủ của hắn để trả đũa xem ai mới là cao thủ!"
  - **An (ngay lập tức can ngăn quyết liệt):** "Hoàng dừng lại ngay! Luật An ninh mạng nghiêm cấm mọi hành vi tấn công mạng trả đũa! Nếu chúng ta chạy một đoạn mã độc không rõ nguồn gốc từ Dark Web trên máy chủ trường, hệ thống dữ liệu của cả trường sẽ bị nhiễm mã độc tống tiền (Ransomware) ngay lập tức! Chúng ta phải tuân thủ đúng **Quy trình ứng phó sự cố (Incident Response)**: Cô lập phân vùng bị tấn công, kích hoạt bản sao lưu dự phòng đám mây, bật tường lửa lọc IP rác và báo cáo thầy Tuấn!"

---

### 📖 TRANG 3: ĐIỂM RẼ TƯƠNG TÁC (BẢN LĨNH CÔNG DÂN SỐ)
* **Bối cảnh:** Đồng hồ đếm ngược của kẻ tống tiền chỉ còn 3 phút. Mọi quyết định của Minh lúc này sẽ định đoạt thành bại của toàn bộ Ngày hội công nghệ và tương lai số của nhà trường.
* **Hình ảnh gợi ý:** Minh đứng giữa chiếc USB mã độc của Hoàng và bàn phím điều khiển hệ thống phòng thủ mạng của An.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        BẠN CHỌN HƯỚNG ĐI NÀO?                          │
├──────────────────────────────────┬─────────────────────────────────────┤
│ 🛡️ LỰA CHỌN A: HƯỚNG AN TOÀN    │ ⚡ LỰA CHỌN B: HƯỚNG KHÁM PHÁ / MẠO │
│ "Quy trình ứng phó chuẩn mực,    │ "Tự ý làm hacker trả đũa, mạo hiểm  │
│ làm chủ giải pháp chuyên nghiệp" │ chạy script tấn công ngược"         │
│                                  │                                     │
│ • Không nhượng bộ kẻ tống tiền.  │ • Cắm USB chứa mã độc của Hoàng.    │
│ • Kích hoạt tường lửa đám mây    │ • Chạy script tấn công ngược vào    │
│   (Cloudflare) lọc lưu lượng ảo. │   dải IP của kẻ tống tiền để 'thử   │
│ • Chuyển cổng vote sang máy chủ  │   tay nghề hacker'.                 │
│   dự phòng và báo cáo thầy Tuấn. │                                     │
└──────────────────────────────────┴─────────────────────────────────────┘
```

---

### 📖 TRANG 4A: HỆ QUẢ NHÁNH AN TOÀN (LỰA CHỌN A)
* **Chỉ số biến thiên:** 🛡️ **CSS: +15** | 💡 **DES: +10**
* **Hình ảnh gợi ý:** Cổng thông tin xanh rực trở lại, biểu đồ DDoS bị chặn đứng; thầy Tuấn và thầy Hiệu trưởng bắt tay khen ngợi Minh và An trước toàn trường.
* **Nội dung:**
  - Minh bình tĩnh từ chối chiếc USB của Hoàng: "Chúng ta là những người bảo vệ không gian số, không phải tội phạm mạng trả đũa mù quáng!"
  - Minh và An phối hợp nhịp nhàng:
    1. Ngắt kết nối phân vùng lưu trữ đề thi nhạy cảm để cô lập an toàn 100%.
    2. Kích hoạt bộ lọc chống DDoS trên nền tảng đám mây, loại bỏ 99% các truy vấn bot rác.
    3. Đồng bộ dữ liệu bình chọn từ bản sao lưu dự phòng (Cloud Backup) cách đó 5 phút.
  - Chỉ sau 4 phút, Cổng bình chọn sáng đèn trở lại trong tiếng hò reo vang dội ngoài sân trường! Thầy Tuấn bước vào, vỗ vai Minh và An đầy tự hào: "Các em đã xử lý sự cố cực kỳ chuyên nghiệp, đúng quy trình an toàn thông tin quốc tế!"
  - Minh và An cảm nhận sâu sắc sức mạnh của tri thức bảo mật chân chính.

---

### 📖 TRANG 4B: HỆ QUẢ NHÁNH KHÁM PHÁ (LỰA CHỌN B)
* **Chỉ số biến thiên:** 🛡️ **CSS: -20** | 💡 **DES: -20**
* **Hình ảnh gợi ý:** Màn hình máy chủ trường biến thành màu đỏ rực với biểu tượng ổ khóa; toàn bộ dữ liệu điểm số và học bạ của 1.500 học sinh bị mã hóa tống tiền.
* **Nội dung:**
  - Muốn thử cảm giác "hacker ngầu", Minh giật chiếc USB của Hoàng cắm vào máy chủ và nhấn lệnh chạy script tấn công ngược.
  - Một tia sáng lóe lên trên màn hình rồi... TẤT CẢ TẮT LỊM!
  - Script trên Dark Web thực chất là một con ngựa thành Troia (Trojan) chứa mã độc tống tiền (Ransomware) cực kỳ nguy hiểm. Khi Minh kích hoạt, nó không những không tấn công được kẻ thù mà còn mở toang cửa hậu máy chủ trường, mã hóa toàn bộ cơ sở dữ liệu học bạ, điểm số và thông tin cá nhân của toàn trường!
  - Sự kiện sụp đổ hoàn toàn. Cảnh sát An ninh mạng (A05) được mời đến hiện trường để điều tra hành vi sử dụng mã độc trái phép gây hậu quả nghiêm trọng trên hạ tầng mạng giáo dục.
  - Minh và Hoàng đứng chết lặng giữa đống đổ nát của hệ thống mạng, nhận ra cái giá quá đắt của sự mạo hiểm thiếu hiểu biết.

---

### 📖 TRANG 5: MỞ KHÓA 4 KẾT THÚC ĐA CHIỀU (MULTIPLE ENDINGS)

Dựa trên tổng điểm **🛡️ Điểm An toàn thông tin (CSS)** và **💡 Điểm Đạo đức số (DES)** tích lũy qua cả 4 chương, hệ thống sẽ mở ra trang kết cục của bạn:

---

#### 🏆 KẾT CỤC 1: HIỆP SĨ AN TOÀN SỐ (Digital Guardian)
*(Điều kiện: CSS ≥ 70 và DES ≥ 70)*
* **Danh hiệu:** 🛡️ **ĐẠI SỨ CÔNG DÂN SỐ XUẤT SẮC**
* **Đánh giá:** Bạn là hình mẫu lý tưởng của một công dân số thời đại mới! Bạn không chỉ nắm vững các kỹ thuật phòng thủ mạng, mật khẩu mạnh, 2FA, nhận diện lừa đảo mà còn sở hữu trái tim nhân văn, biết bảo vệ bạn bè trước bạo lực mạng và giữ gìn liêm chính học thuật. Bạn được trao tặng danh hiệu "Hiệp sĩ Không gian số" của trường!

---

#### ⚠️ KẾT CỤC 2: NHÀ THÁM HIỂM LIỀU LĨNH (Reckless Explorer)
*(Điều kiện: CSS < 70 và DES ≥ 70)*
* **Danh hiệu:** ⚡ **NGƯỜI TỐT NHƯNG THIẾU KHIÊN BẢO VỆ**
* **Đánh giá:** Bạn có phẩm chất đạo đức tuyệt vời, luôn muốn giúp đỡ người khác và ứng xử văn minh. Tuy nhiên, sự ngây thơ và thiếu cẩn trọng về mặt kỹ thuật khiến bạn dễ sập bẫy Wi-Fi giả, mã độc hoặc phishing. Hãy nhớ: *"Lòng tốt trên mạng chỉ có thể tỏa sáng khi bạn biết tự bảo vệ chính mình!"*.

---

#### 🧩 KẾT CỤC 3: KỸ THUẬT GIA ÍCH KỶ (Pragmatic Techie)
*(Điều kiện: CSS ≥ 70 và DES < 70)*
* **Danh hiệu:** 💻 **CHUYÊN GIA KỸ THUẬT THIẾU ĐẠO ĐỨC**
* **Đánh giá:** Kỹ năng công nghệ của bạn rất đáng nể, bạn biết cách bảo vệ máy tính và tài khoản của mình an toàn. Nhưng bạn lại bàng quan trước việc bạn bè bị tổn thương trên mạng, sẵn sàng dùng AI thiếu trung thực để lấy điểm cao. Hãy nhớ: *"Công nghệ chỉ là công cụ, đạo đức mới là kim chỉ nam định hình con người bạn!"*.

---

#### 🚨 KẾT CỤC 4: BÁO ĐỘNG ĐỎ KHÔNG GIAN SỐ (Digital Vulnerability)
*(Điều kiện: CSS < 70 và DES < 70)*
* **Danh hiệu:** 🔴 **NẠN NHÂN CỦA KHÔNG GIAN MẠNG**
* **Đánh giá:** Bạn đã để sự tò mò và áp lực nhất thời dẫn dắt vào những sai lầm nghiêm trọng: tài khoản bị xâm nhập, máy tính nhiễm mã độc, vướng vào thị phi và vi phạm bản quyền. Đừng nản lòng! Đây là môi trường mô phỏng an toàn để bạn học hỏi. Hãy nhấn nút **"Chơi lại từ đầu" (Replay)** để đưa ra những quyết định sáng suốt hơn!
