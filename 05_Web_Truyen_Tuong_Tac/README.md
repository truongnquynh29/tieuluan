# NGĂN 5: MÃ NGUỒN ỨNG DỤNG WEB TRUYỆN LẬT TƯƠNG TÁC (INTERACTIVE FLIPBOOK WEB APP)

---

## 💻 1. TỔNG QUAN CÔNG NGHỆ VÀ TÍNH NĂNG ỨNG DỤNG

ỨNG DỤNG **"NGƯỜI GÁC ĐỀN KHÔNG GIAN SỐ"** được phát triển dưới dạng **Web App lật sách tương tác đa phương tiện (Interactive Multi-page Flipbook / Visual Novel)**, tương thích hoàn toàn trên máy tính (Desktop/Laptop), máy tính bảng (Tablet) và điện thoại thông minh (Mobile).

### Các tính năng công nghệ nổi bật:
1. 📖 **Hiệu ứng lật trang sách 3D (3D Page-Flip Animation):**
   - Mô phỏng cảm giác lật mở trang sách thật với độ cong, đổ bóng chân thực.
   - Hỗ trợ thao tác lật trang linh hoạt: bấm nút điều hướng, phím mũi tên bàn phím (`←` / `→`), hoặc vuốt ngón tay trên màn hình cảm ứng.
2. 🔀 **Cơ chế rẽ nhánh tương tác (Interactive Decision Hub):**
   - Tại trang quyết định của mỗi chương, giao diện hiển thị 2 thẻ lựa chọn nổi bật:
     + 🛡️ **Hướng AN TOÀN (Safe Choice):** Cảnh giác, tuân thủ nguyên tắc, bảo vệ bản thân và người khác.
     + ⚡ **Hướng KHÁM PHÁ (Discovery Choice):** Tò mò công nghệ, liều lĩnh, khám phá cơ chế tiềm ẩn.
   - Khi chọn, trang sách sẽ tự động lật chuyển đến trang hệ quả tương ứng kèm hiệu ứng âm thanh sống động.
3. 📊 **Bảng theo dõi chỉ số kép thời gian thực (Dual Metrics Dashboard):**
   - Thanh hiển thị Điểm An toàn thông tin (CSS) và Điểm Đạo đức số (DES) cập nhật ngay sau mỗi lựa chọn.
4. ⏪ **Tính năng Tua lại & Thử nghiệm (Rollback & Replay Engine):**
   - Học sinh có thể nhấn nút **"Thử lựa chọn khác" (Replay Branch)** để khám phá kịch bản còn lại mà không cần tải lại trang.
5. 🔊 **Hiệu ứng âm thanh đa giác quan (Web Audio API Synthesizer):**
   - Tiếng lật trang giấy xào xạc nhẹ nhàng, tiếng chuông thông báo an toàn, tiếng còi cảnh báo rủi ro (được tạo trực tiếp bằng Web Audio API, không phụ thuộc file mp3 ngoài, chạy mượt trên mọi trình duyệt).
6. 🏆 **Trang Tổng kết & Đa kết thúc (Multiple Endings Screen):**
   - Đánh giá xếp loại cuối truyện (Hiệp sĩ An toàn số, Nhà thám hiểm liều lĩnh, Chuyên gia ích kỷ, Báo động đỏ), hiển thị bảng phản tư và chứng nhận hoàn thành.

---

## 📁 2. CẤU TRÚC THƯ MỤC SOURCE CODE

```
05_Web_Truyen_Tuong_Tac/
├── index.html              # Trang chủ ứng dụng, khung giao diện cuốn sách và bảng điều khiển
├── css/
│   └── style.css           # Toàn bộ định kiểu CSS3, hiệu ứng 3D flip, responsive, bảng màu neon/học đường
├── js/
│   ├── story_data.js       # Cơ sở dữ liệu kịch bản JSON (4 chương, các trang truyện, điểm số)
│   └── book.js             # Engine xử lý lật sách, sự kiện bấm nút, tính điểm, âm thanh Web Audio
└── assets/                 # Thư mục tài nguyên mở rộng (icon, hình minh họa)
```

---

## 🚀 3. HƯỚNG DẪN KHỞI CHẠY (LOCAL & PRODUCTION)

### 3.1. Chạy trực tiếp (Không cần cài đặt)
Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào:
- Nhấp đúp chuột vào file `index.html`.
- Hoặc kéo thả file `index.html` vào cửa sổ Google Chrome, Safari, Microsoft Edge hoặc Cốc Cốc.

### 3.2. Chạy qua Local Web Server (Khuyến nghị cho giảng dạy trên lớp):
Mở terminal và chạy lệnh:
```bash
# Sử dụng Python 3 có sẵn
python3 -m http.server 8080 --directory 05_Web_Truyen_Tuong_Tac
```
Mở trình duyệt truy cập: `http://localhost:8080`

### 3.3. Đưa lên GitHub Pages (Miễn phí)
Trang web được thiết kế dạng tĩnh (Static Web App), hoàn toàn tương thích với GitHub Pages. Chỉ cần bật GitHub Pages trỏ vào nhánh `main` là học sinh toàn trường có thể quét mã QR để đọc truyện trên điện thoại.
