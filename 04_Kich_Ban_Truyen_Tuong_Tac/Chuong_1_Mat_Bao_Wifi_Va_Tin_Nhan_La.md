# CHƯƠNG 1 (TÌNH HUỐNG 1): MẮT BÃO WI-FI VÀ TIN NHẮN LẠ
## Chủ đề SGK: Chủ đề B - Mạng máy tính & An toàn thông tin

> **Mã tình huống:** `CASE_01_WIFI_PHISHING`  
> **Kiến thức trọng tâm:** Rủi ro Wi-Fi công cộng không bảo mật, tấn công giả mạo (Phishing), xác thực hai yếu tố (2FA), mã độc đánh cắp phiên đăng nhập (Session Hijacking).  
> **Nhân vật xuất hiện:** Minh (nhân vật chính), An (bạn thân), Hoàng (bạn cùng lớp), Cố vấn CyberFox.

---

### 📖 TRANG 1: BUỔI CHIỀU TẠI QUÁN TRÀ SỮA STAR-TEA
* **Bối cảnh:** Chiều thứ Bảy, quán trà sữa Star-Tea gần trường THPT. Quán đông nghẹt học sinh đang ngồi làm bài tập nhóm. Tiếng nhạc rộn rã xen lẫn tiếng gõ phím lách cách.
* **Hình ảnh gợi ý:** Minh và An đang mở laptop và smartphone trên bàn gỗ, trước mặt là hai ly trà sữa trân châu. Màn hình laptop của Minh hiện thông báo: *"Dung lượng 4G còn 50MB"*.
* **Nội dung & Lời thoại:**
  - **Minh (nhăn nhó nhìn điện thoại):** "Trời ơi An ơi! Hết sạch dung lượng 4G tốc độ cao rồi! Bài thuyết trình môn Tin học của nhóm mình nặng tới 400MB, tải video tư liệu kiểu này đến tối mất!"
  - **An (vừa chỉnh slide vừa cười):** "Bình tĩnh nào Minh. Quán có Wi-Fi miễn phí của quán mà, nhưng đông người dùng quá nên hơi rùa bò một chút thôi."
  - Đúng lúc đó, Hoàng từ bàn bên cạnh chạy sang, vẻ mặt hào hứng như vừa bắt được vàng.
  - **Hoàng (thì thầm):** "Hai bạn tìm mạng à? Tớ vừa quét thấy một sóng Wi-Fi lạ cực mạnh, tên là `StarTea_VIP_Free_HighSpeed_5G`, không cần mật khẩu gì hết! Tớ vừa vào thử, xem video 4K vèo vèo luôn!"

---

### 📖 TRANG 2: BẪY NGỌT NGÀO VÀ TIN NHẮN BẤT NGỜ
* **Bối cảnh:** Minh mở danh sách mạng Wi-Fi trên điện thoại. Quả thật, cột sóng `StarTea_VIP_Free_HighSpeed_5G` căng đét hiện lên đầu tiên.
* **Hình ảnh gợi ý:** Minh bấm kết nối vào Wi-Fi lạ. Ngay lập tức một cửa sổ trình duyệt bật lên (Captive Portal), hiển thị vòng quay may mắn với dòng chữ nhấp nháy: *"CHÚC MỪNG BẠN ĐÃ TRÚNG VOUCHER 500.000Đ TẠI QUÁN STAR-TEA! Đăng nhập Facebook để nhận mã quà tặng qua SMS"*.
* **Nội dung & Lời thoại:**
  - **Minh (mắt sáng rực):** "Uầy, kết nối cái là nhảy ra trang khuyến mãi luôn này! Voucher 500k uống trà sữa tẹt ga! Chỉ cần đăng nhập tài khoản Facebook để nhận mã thôi An ơi!"
  - **An (ngẩng lên, cau mày nhìn kỹ đường dẫn URL trên màn hình của Minh):** "Khoan đã Minh! Cậu nhìn kỹ thanh địa chỉ xem! Nó là `http://star-tea-voucher-free.online/login.php` chứ đâu phải trang web chính thức của Facebook hay của quán đâu! Giao diện giống Facebook thật đấy nhưng không có biểu tượng ổ khóa HTTPS, tên miền lại rất kỳ lạ!"
  - **Hoàng (xua tay gạt đi):** "Ôi dào, mấy trang khuyến mãi liên kết nó hay dùng tên miền phụ thế mà! Tớ vừa nhập thử tài khoản phụ có sao đâu, voucher xịn đét đấy, không nhận nhanh là hết lượt bây giờ!"

---

### 📖 TRANG 3: ĐIỂM RẼ TƯƠNG TÁC (QUYẾT ĐỊNH CỦA MINH)
* **Bối cảnh:** Minh đang cầm điện thoại trên tay, ngón tay đặt trên màn hình. Một bên là sự tò mò muốn nhận voucher 500k và mạng tốc độ cao để tải xong bài tập nhanh chóng; một bên là linh cảm bất an và lời cảnh báo xác đáng của An.
* **Hình ảnh gợi ý:** Màn hình phân đôi với hiệu ứng ánh sáng. Biểu tượng khiên bảo vệ màu xanh bên trái và biểu tượng tia chớp mạo hiểm màu vàng bên phải.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        BẠN CHỌN HƯỚNG ĐI NÀO?                          │
├──────────────────────────────────┬─────────────────────────────────────┤
│ 🛡️ LỰA CHỌN A: HƯỚNG AN TOÀN    │ ⚡ LỰA CHỌN B: HƯỚNG KHÁM PHÁ / MẠO │
│ "Dừng lại kiểm chứng, bảo vệ     │ "Tò mò thử nghiệm, chấp nhận rủi ro │
│ dữ liệu cá nhân"                 │ để xem cơ chế voucher"              │
│                                  │                                     │
│ • Ngắt kết nối Wi-Fi lạ ngay.    │ • Bấm nút đăng nhập tài khoản để    │
│ • Bật xác thực 2 bước (2FA) cho  │   khám phá xem trang web này thu    │
│   tài khoản.                     │   thập dữ liệu thế nào và liệu có   │
│ • Hỏi trực tiếp nhân viên quán   │   nhận được voucher thật không.     │
│   về mạng Wi-Fi chính thống.     │                                     │
└──────────────────────────────────┴─────────────────────────────────────┘
```

---

### 📖 TRANG 4A: HỆ QUẢ NHÁNH AN TOÀN (LỰA CHỌN A)
* **Chỉ số biến thiên:** 🛡️ **CSS: +15** (Lên 65) | 💡 **DES: +10** (Lên 60)
* **Hình ảnh gợi ý:** Minh mỉm cười gập tab trình duyệt, đứng dậy hỏi bạn nhân viên quầy thu ngân. Màn hình điện thoại hiển thị thông báo đã bật xác thực 2 bước (Google Authenticator).
* **Nội dung:**
  - Minh hít một hơi sâu và nói với Hoàng: "Thôi Hoàng ơi, không có bữa trưa nào miễn phí cả. Mạng không mật khẩu mà yêu cầu đăng nhập tài khoản mạng xã hội thì 99% là bẫy Phishing lừa đảo rồi."
  - Minh lập tức ngắt kết nối với mạng lạ, bước lại quầy order hỏi chị thu ngân. Chị nhân viên giật mình: "Quán chị chỉ có mạng `StarTea_Coffee_Guest` có pass trên hóa đơn thôi em! Mạng kia chắc do ai đó đặt thiết bị phát giả mạo (Evil Twin AP) để câu trộm tài khoản khách đấy, chị báo quản lý ngay!"
  - Quay lại bàn, Minh còn cẩn thận vào phần cài đặt bảo mật Facebook, bật tính năng Xác thực 2 yếu tố (2FA) qua ứng dụng tạo mã. An gật đầu tán thưởng: "Xử lý chuẩn điểm 10 an toàn số đấy bạn tôi!"
  - Bài học: Minh bảo toàn được tài khoản cá nhân, bảo vệ được nhóm bạn và giúp quán trà sữa phát hiện điểm phát sóng lừa đảo.

---

### 📖 TRANG 4B: HỆ QUẢ NHÁNH KHÁM PHÁ (LỰA CHỌN B)
* **Chỉ số biến thiên:** 🛡️ **CSS: -15** (Xuống 35) | 💡 **DES: -5** (Xuống 45)
* **Hình ảnh gợi ý:** Màn hình điện thoại của Minh hiện lên bảng mã code lạ, sau đó văng ra khỏi ứng dụng Messenger. Điện thoại rung liên hồi với hàng loạt tin nhắn từ người thân.
* **Nội dung:**
  - Vì quá tò mò xem hệ thống voucher hoạt động ra sao, Minh gõ tài khoản và mật khẩu Facebook vào trang web rồi bấm "Đăng nhập".
  - Màn hình xoay tròn một lúc rồi báo lỗi: *"Mã khuyến mãi đã hết hạn"*. Minh hụt hẫng tắt trình duyệt.
  - Nhưng chỉ 15 phút sau, bi kịch ập đến! Điện thoại của Minh liên tục rung lên. Bạn bè và người thân gọi tới tấp: *"Minh ơi, sao tự nhiên cậu nhắn tin vay tiền gấp 2 triệu qua tài khoản lạ thế này?"*.
  - Minh hoảng loạn mở lại Facebook thì đã bị đăng xuất hoàn toàn. Kẻ tấn công (Man-in-the-Middle) trên mạng Wi-Fi giả mạo vừa thu thập thông tin đăng nhập và chiếm quyền điều khiển tài khoản của Minh để đi lừa đảo bạn bè trong danh bạ!
  - Minh tái mặt, toát mồ hôi hột tìm cách báo cáo sự cố và đổi mật khẩu trong sự ân hận tột cùng.

---

### 📖 TRANG 5: GÓC PHẢN TƯ SƯ PHẠM VÀ CỐ VẤN CYBERFOX
* **Hình ảnh minh họa:** Chú cáo CyberFox đeo kính công nghệ cao, tay cầm chiếc khiên điện tử phát sáng đứng cạnh bảng tóm tắt bài học.
* **Cố vấn CyberFox chia sẻ:**
  > *"Chào các bạn học sinh lớp 11! Tình huống các bạn vừa trải qua là một đòn tấn công kinh điển mang tên **Điểm truy cập song sinh ác quỷ (Evil Twin Access Point)** kết hợp **Trang lừa đảo giả mạo (Phishing Portal)**."*
* **3 Quy tắc vàng cần ghi nhớ (Kiến thức SGK Tin học 11 - Chủ đề B):**
  1. **Không bao giờ tin Wi-Fi mở không mật khẩu:** Kẻ xấu có thể bắt trọn gói tin (Sniffing) và đọc trộm mọi dữ liệu không được mã hóa truyền qua mạng này.
  2. **Soi kỹ thanh địa chỉ URL:** Kiểm tra giao thức bảo mật `https://` và tên miền chính thức. Kẻ lừa đảo thường dùng tên miền gần giống (như `faceb00k.com`, `login-security.net`) để đánh lừa mắt thường.
  3. **Bật xác thực 2 bước (2FA):** Luôn kích hoạt 2FA (qua SMS hoặc app Authenticator). Khi có 2FA, dù kẻ xấu biết mật khẩu cũng không thể đăng nhập được nếu không có mã xác thực bước hai.
* **Câu hỏi thảo luận phản tư (Debriefing Question):**
  * *"Nếu một ngày tài khoản mạng xã hội của em bị kẻ xấu chiếm đoạt và nhắn tin mượn tiền khắp mọi người, em sẽ xử lý khủng hoảng này theo những bước nào trong vòng 30 phút đầu tiên?"*
