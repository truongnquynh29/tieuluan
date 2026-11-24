# NGĂN 4: KỊCH BẢN TRUYỆN TƯƠNG TÁC (CHƯƠNG, TRANG VÀ TÌNH HUỐNG)

---

## 📖 1. TỔNG QUAN HỆ THỐNG KỊCH BẢN

Kịch bản truyện tương tác mang tên: **"NGƯỜI GÁC ĐỀN KHÔNG GIAN SỐ: HÀNH TRÌNH CỦA MINH VÀ AN"**.

Toàn bộ câu chuyện được chia thành **4 Chương (Chapters)**, mỗi chương đóng gói trọn vẹn **1 Tình huống sư phạm lớn (Case Study)** gắn chặt với học sinh lớp 11:

```
┌────────────────────────────────────────────────────────────────────────┐
│             HÀNH TRÌNH NGƯỜI GÁC ĐỀN KHÔNG GIAN SỐ                     │
├────────────────────────────────┬───────────────────────────────────────┤
│ CHƯƠNG 1 (TÌNH HUỐNG 1):       │ Mắt bão Wi-Fi và Tin nhắn lạ          │
│ Trọng tâm kiến thức:           │ Wi-Fi công cộng, Phishing, 2FA        │
├────────────────────────────────┼───────────────────────────────────────┤
│ CHƯƠNG 2 (TÌNH HUỐNG 2):       │ Cám dỗ AI và Cạm bẫy bản quyền       │
│ Trọng tâm kiến thức:           │ Đạo đức AI, Đạo văn, Creative Commons │
├────────────────────────────────┼───────────────────────────────────────┤
│ CHƯƠNG 3 (TÌNH HUỐNG 3):       │ Bí mật nhóm kín và Vết chân số       │
│ Trọng tâm kiến thức:           │ Quyền riêng tư, Bắt nạt mạng, Netiqu. │
├────────────────────────────────┼───────────────────────────────────────┤
│ CHƯƠNG 4 (TÌNH HUỐNG 4):       │ Khúc cua quyết định: Hội nghị Thách   │
│ Trọng tâm kiến thức:           │ thức số -> 4 Kết thúc đa chiều        │
└────────────────────────────────┴───────────────────────────────────────┘
```

Mỗi Chương được phân thành **nhiều Trang truyện (Pages)** liên tiếp:
- **Trang 1: Khởi nguồn sự việc** (Dẫn dắt bối cảnh học đường gần gũi, mở ra xung đột).
- **Trang 2: Nút thắt kịch tính** (Vấn đề phát sinh, cám dỗ hoặc áp lực xuất hiện).
- **Trang 3: Điểm rẽ tương tác (Decision Point)** (Học sinh chọn Hướng AN TOÀN hoặc Hướng KHÁM PHÁ/RỦI RO).
- **Trang 4A / 4B: Hệ quả phân nhánh** (Trang 4A nếu chọn An toàn, Trang 4B nếu chọn Khám phá).
- **Trang 5: Góc phản tư sư phạm & Cố vấn CyberFox** (Rút ra bài học, giải thích công nghệ và câu hỏi thảo luận).

---

## 🗃️ 2. DANH MỤC CÁC FILE KỊCH BẢN CHI TIẾT
1. `KICH_BAN_TONG_THE.md`: Tuyến nhân vật, thông số chỉ số, sơ đồ phân nhánh tổng thể (Flowchart/Decision Tree).
2. `Chuong_1_Mat_Bao_Wifi_Va_Tin_Nhan_La.md`: Tình huống 1 chi tiết từng trang.
3. `Chuong_2_Cam_Do_AI_Va_Cam_Bay_Ban_Quyen.md`: Tình huống 2 chi tiết từng trang.
4. `Chuong_3_Bi_Mat_Nhom_Kin_Va_Vet_Chan_So.md`: Tình huống 3 chi tiết từng trang.
5. `Chuong_4_Khuc_Cua_Quyet_Dinh_Da_Ket_Thuc.md`: Tình huống 4 chi tiết từng trang & 4 Kết thúc.

---

## 💡 3. NGUYÊN TẮC BIÊN SOẠN & ĐỒNG BỘ CODE
Dữ liệu từ các file kịch bản markdown này được đồng bộ trực tiếp sang file mã nguồn `05_Web_Truyen_Tuong_Tac/js/story_data.js` để hiển thị trên ứng dụng web lật trang. Khi thay đổi kịch bản trong ngăn này, cần cập nhật file JS tương ứng.
