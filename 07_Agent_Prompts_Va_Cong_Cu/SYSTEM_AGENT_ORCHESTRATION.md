# ĐẶC TẢ KIẾN TRÚC ĐIỀU PHỐI ĐA TÁC TỬ (SYSTEM AGENT ORCHESTRATION)

> **Mục đích:** Quy định quy trình làm việc, tiêu chuẩn giao tiếp và ma trận trách nhiệm giữa các AI Agents trong toàn bộ vòng đời phát triển dự án.

---

## 🧭 1. MA TRẬN PHÂN CÔNG TRÁCH NHIỆM (RACI MATRIX)

| Nhiệm vụ / Hạng mục | Research Agent | Curriculum Agent | IF Designer | Story Writer | Frontend Agent | Pedagogy Agent |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Xây dựng cơ sở lý luận & trích dẫn APA | **R/A** | C | C | I | I | C |
| Xác lập Yêu cầu cần đạt SGK Tin 11 | C | **R/A** | C | C | I | C |
| Thiết kế Logic phân nhánh & Cây quyết định | C | C | **R/A** | C | C | I |
| Biên kịch hội thoại & Phân trang truyện | I | C | C | **R/A** | C | I |
| Lập trình Web lật sách HTML5/CSS/JS | I | I | C | C | **R/A** | I |
| Soạn giáo án 3 pha & Rubric đánh giá NLb | C | C | I | I | I | **R/A** |

*(Ghi chú: R = Responsible - Người thực hiện; A = Accountable - Người chịu trách nhiệm chính; C = Consulted - Người tham vấn; I = Informed - Người nhận thông tin)*

---

## 🔄 2. QUY TRÌNH LÀM VIỆC TUẦN TỰ (PIPELINE WORKFLOW)

```
[BƯỚC 1: INPUT NGHIÊN CỨU]
Research Agent tổng hợp các luận điểm từ Wang 2024, Ayeni 2024, Kolb, Rest, Mayer.
        │
        ▼
[BƯỚC 2: KHUNG NỘI DUNG SƯ PHẠM]
Curriculum Agent map các luận điểm vào YCCĐ Chủ đề B và Chủ đề D Tin 11.
        │
        ▼
[BƯỚC 3: KIẾN TRÚC PHÂN NHÁNH]
IF Designer xây dựng sơ đồ phân nhánh cho 4 tình huống với 2 chỉ số CSS và DES.
        │
        ▼
[BƯỚC 4: SÁNG TÁC KỊCH BẢN CHI TIẾT]
Story Writer chấp bút từng trang truyện, lời thoại nhân vật, mô tả hình ảnh.
        │
        ▼
[BƯỚC 5: LẬP TRÌNH VÀ SỐ HÓA WEB]
Frontend Agent nạp dữ liệu vào story_data.js, hoàn thiện giao diện lật sách 3D và âm thanh.
        │
        ▼
[BƯỚC 6: TRIỂN KHAI VÀ ĐÁNH GIÁ SƯ PHẠM]
Pedagogy Agent soạn KHBD chuẩn 5512, phiếu học tập và Rubric đánh giá NLb.
```

---

## ⚖️ 3. NGUYÊN TẮC GIẢI QUYẾT XUNG ĐỘT (CONFLICT RESOLUTION PROTOCOL)

1. **Khi có mâu thuẫn giữa "Tính hấp dẫn của truyện" và "Mục tiêu giáo dục":**  
   -> **Quy tắc ưu tiên:** Mục tiêu giáo dục của `Curriculum Agent` luôn là số 1. Câu chuyện có thể hấp dẫn nhưng không được sai lệch bản chất kỹ thuật an toàn thông tin và quy chuẩn đạo đức.
2. **Khi có mâu thuẫn giữa "Độ phức tạp công nghệ web" và "Trải nghiệm học sinh":**  
   -> **Quy tắc ưu tiên:** Sự đơn giản, trực quan, mượt mà và khả năng chạy offline không giật lag trên máy tính học sinh là ưu tiên cao nhất của `Frontend Agent`.
3. **Khi cần mở rộng thêm tình huống mới:**  
   -> Bắt buộc phải đi qua đủ quy trình: IF Designer dựng nhánh -> Story Writer viết kịch bản -> Frontend số hóa -> Pedagogy Agent cập nhật phiếu học tập.


---

## 4. PIPELINE SÁNG TÁC VÀ MINH HỌA MỚI

Đối với mọi truyện/chương mới, áp dụng pipeline có gate phê duyệt tại STORY_CREATION_WORKFLOW.md:
1. Orchestrator tiếp nhận brief và phạm vi.
2. Research/Curriculum xác minh kiến thức và mục tiêu.
3. Story Planner tạo concept, outline và nhánh.
4. Character Designer/Art Director khóa Character Bible và Visual Style Bible; tạo ảnh mẫu để duyệt.
5. Story Writer viết lời dẫn tiếng Việt cho từng trang.
6. Storyboard Designer lập page card.
7. Illustration Director tạo một prompt cho một ảnh ở mỗi trang.
8. Visual Reviewer và Educational Reviewer kiểm tra trước khi Frontend Agent tích hợp.

### Skills cần nạp
- Story Planner: story-planner.
- Story Writer: story-writer-vi.
- Storyboard Designer: page-storyboard.
- Character Designer: character-canon.
- Illustration Director: illustration-art-director.
- Visual Reviewer: visual-consistency-review.
- Educational Reviewer: educational-story-review.

### Quy tắc đầu ra trang
Một trang = một lời dẫn/thuyết minh tiếng Việt ở đầu trang + đúng một tranh minh họa đơn cảnh bên dưới. Không chữ/bong bóng thoại/panel/collage trong tranh. Nút tương tác (nếu có) do giao diện dựng độc lập.
