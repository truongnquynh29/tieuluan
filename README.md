# DỰ ÁN TIỂU LUẬN: THIẾT KẾ TRUYỆN TƯƠNG TÁC (INTERACTIVE FICTION / VISUAL NOVEL) GIÁO DỤC CHỦ ĐỀ AN TOÀN THÔNG TIN VÀ ĐẠO ĐỨC SỐ CHO HỌC SINH LỚP 11

> **Tác giả:** Trương Thị Như Quỳnh  
> **Chuyên ngành:** Sư phạm Tin học / Giáo dục học  
> **Chương trình đào tạo:** Chương trình GDPT 2018 môn Tin học (Cấp THPT - Lớp 11)  
> **Kho lưu trữ:** [https://github.com/truongnquynh29/tieuluan](https://github.com/truongnquynh29/tieuluan)

---

## 📌 1. TỔNG QUAN DỰ ÁN

Dự án này tập trung nghiên cứu, thiết kế và phát triển học liệu số thế hệ mới: **Truyện lật tương tác (Interactive Flipbook / Visual Novel)** nhằm giáo dục nhận thức, kỹ năng và thái độ ứng xử an toàn, văn minh trên không gian số cho học sinh lớp 11.

Sản phẩm kết hợp giữa:
1. **Chương trình GDPT 2018 môn Tin học:** Trọng tâm là **Chủ đề B** (*Mạng máy tính và Internet - An toàn thông tin*) và **Chủ đề D** (*Đạo đức, pháp luật và văn hóa trong môi trường số - Sử dụng AI có trách nhiệm, bản quyền, liêm chính học thuật, phòng chống bạo lực mạng*).
2. **Hệ thống lý thuyết sư phạm vững chắc:** Thuyết Kiến tạo (Constructivism), Học tập trải nghiệm (Kolb), Mô hình 4 thành tố đạo đức (Rest), Lý thuyết Đa phương tiện (Mayer) và Kỹ thuật Giàn giáo hỗ trợ nhận thức (Scaffolding).
3. **Cơ chế Phân nhánh Lựa chọn (Branching Narrative):** Tại mỗi bước ngoặt của tình huống, học sinh được trao quyền tự chủ (Learner Agency) để đưa ra quyết định giữa hướng **AN TOÀN** (phòng ngừa rủi ro, tuân thủ nguyên tắc) hoặc hướng **KHÁM PHÁ** (tò mò công nghệ, thử nghiệm, mạo hiểm), từ đó trải nghiệm hệ quả chân thực mà không phải chịu tổn thất ngoài đời thực.
4. **Trang Web truyện lật tương tác (Web Interactive Flipbook):** Ứng dụng web trực quan, hiệu ứng lật trang 3D sống động, hỗ trợ đa nền tảng (PC/Tablet/Smartphone), tích hợp cơ chế tính điểm trạng thái, nhật ký lựa chọn và đa kết thúc (Multiple Endings).

---

## 🗂️ 2. BẢN ĐỒ PHÂN HOẠCH CÁC NGĂN (COMPARTMENTS MAP)

Kho tài liệu và mã nguồn được cấu trúc hóa thành **8 ngăn chức năng độc lập nhưng liên kết chặt chẽ**:

```
tieuluan/
├── README.md                                  # Hướng dẫn tổng quan toàn dự án (File này)
│
├── 00_Dinh_Huong_De_Tai/                      # Ngăn 0: Định hướng nghiên cứu & hồ sơ tác giả
│   ├── Báo cáo tổng quan tài liệu...docx       # Bản báo cáo tiến độ và đề cương gốc
│   └── README.md                              # Tóm lược định hướng, mục tiêu và khoảng trống nghiên cứu
│
├── 01_Co_So_Ly_Luan_Va_Phuong_Phap/           # Ngăn 1: Cơ sở lý thuyết giáo dục & PPDH Tin học
│   ├── Quoc_Te/                               # Các bài báo ISI/Scopus về AIED, Adaptive Learning, Scaffolding
│   ├── Trong_Nuoc/                            # Các bài báo Tạp chí Giáo dục, ĐHSP về dạy học Tin học
│   ├── Giao_Trinh_PP_Day_Hoc/                 # Bài giảng PPTX phương pháp dạy học Tin học (Chương 2 - 6)
│   ├── README.md                              # Hướng dẫn khai thác lý luận dạy học
│   └── PROMPT_RESEARCH_AGENT.md               # Prompt chuyên dụng cho Research Agent
│
├── 02_Chuong_Trinh_Va_SGK_Tin11/              # Ngăn 2: Chương trình GDPT 2018 & SGK Tin học 11
│   ├── 11-tin-hoc-11-tin-hoc-ung-dung...pdf   # SGK Tin học 11 (Chủ đề B & Chủ đề D)
│   ├── README.md                              # Chuẩn đầu ra, YCCĐ và Ma trận năng lực số NLb
│   └── PROMPT_CURRICULUM_AGENT.md             # Prompt chuyên dụng cho Curriculum Agent
│
├── 03_Nghien_Cuu_Truyen_Tuong_Tac_IF_VN/      # Ngăn 3: Phương pháp luận Interactive Fiction / Visual Novel
│   ├── README.md                              # Nguyên lý cấu trúc 9 thành phần tình huống và phân nhánh
│   └── PROMPT_IF_DESIGNER_AGENT.md            # Prompt chuyên dụng cho IF Designer Agent
│
├── 04_Kich_Ban_Truyen_Tuong_Tac/              # Ngăn 4: Kịch bản truyện hoàn chỉnh theo từng trang & chương
│   ├── KICH_BAN_TONG_THE.md                   # Tổng quan nhân vật, cốt truyện, chỉ số và cây quyết định
│   ├── Chuong_1_Mat_Bao_Wifi_Va_Tin_Nhan_La.md # Tình huống 1: An toàn mạng & Phishing (Chủ đề B)
│   ├── Chuong_2_Cam_Do_AI_Va_Cam_Bay_Ban_Quyen.md # Tình huống 2: Đạo đức AI & Bản quyền (Chủ đề D)
│   ├── Chuong_3_Bi_Mat_Nhom_Kin_Va_Vet_Chan_So.md # Tình huống 3: Quyền riêng tư & Bắt nạt mạng (Chủ đề D/B)
│   ├── Chuong_4_Khuc_Cua_Quyet_Dinh_Da_Ket_Thuc.md # Tình huống 4: Thử thách tổng hợp & 4 Kết thúc
│   ├── README.md                              # Hướng dẫn đọc, kiểm thử và biên tập kịch bản
│   └── PROMPT_STORY_WRITER_AGENT.md           # Prompt chuyên dụng cho Story Writer Agent
│
├── 05_Web_Truyen_Tuong_Tac/                   # Ngăn 5: Mã nguồn ứng dụng Web lật trang tương tác
│   ├── index.html                             # Giao diện chính truyện lật tương tác HTML5
│   ├── css/style.css                          # Hiệu ứng sách 3D, flipbook visual novel hiện đại
│   ├── js/book.js                             # Engine lật trang, âm thanh, tính điểm, rollback logic
│   ├── js/story_data.js                       # CSDL kịch bản chuẩn hóa JSON
│   ├── README.md                              # Hướng dẫn cài đặt, khởi chạy và tùy biến Web
│   └── PROMPT_FRONTEND_AGENT.md               # Prompt chuyên dụng cho Frontend Developer Agent
│
├── 06_Ke_Hoach_Bai_Day_Va_Danh_Gia/           # Ngăn 6: Sư phạm ứng dụng - Kế hoạch dạy học & Đánh giá
│   ├── Ke_Hoach_Bai_Day_Chu_De_B_va_D.md      # Giáo án 3 pha (Trước - Trong - Sau tương tác) mẫu 5512
│   ├── Phieu_Hoc_Tap_Va_Nhat_Ky_Tuong_Tac.md  # Nhật ký quyết định của học sinh & Câu hỏi phản tư
│   ├── Rubric_Danh_Gia_Nang_Luc_So_NLb.md     # Ma trận và Rubric định lượng năng lực số NLb
│   ├── README.md                              # Hướng dẫn triển khai thực tế trên lớp học
│   └── PROMPT_PEDAGOGY_AGENT.md               # Prompt chuyên dụng cho Pedagogy & Assessment Agent
│
└── 07_Agent_Prompts_Va_Cong_Cu/               # Ngăn 7: Hệ thống điều phối đa tác tử AI (Multi-Agent System)
    ├── SYSTEM_AGENT_ORCHESTRATION.md          # Bản đồ quy trình cộng tác giữa các AI Agents
    ├── AGENT_PROMPT_LIBRARY.md                # Thư viện toàn bộ Master Prompts chuẩn hóa
    └── README.md                              # Hướng dẫn kích hoạt và vận hành Agent workflow
```

---

## 🚀 3. HƯỚNG DẪN BẮT ĐẦU NHANH (QUICK START)

### 3.1. Dành cho người đọc nghiên cứu & viết tiểu luận:
1. Đọc tóm tắt định hướng tại `00_Dinh_Huong_De_Tai/README.md`.
2. Tham chiếu cơ sở lý thuyết tại `01_Co_So_Ly_Luan_Va_Phuong_Phap/README.md`.
3. Kiểm tra mục tiêu đầu ra năng lực số tại `02_Chuong_Trinh_Va_SGK_Tin11/README.md`.
4. Xem toàn bộ kịch bản và các nhánh lựa chọn tại `04_Kich_Ban_Truyen_Tuong_Tac/`.

### 3.2. Dành cho giáo viên Tin học muốn sử dụng dạy học:
1. Đọc giáo án mẫu tại `06_Ke_Hoach_Bai_Day_Va_Danh_Gia/Ke_Hoach_Bai_Day_Chu_De_B_va_D.md`.
2. In hoặc phát trực tuyến phiếu học tập tại `06_Ke_Hoach_Bai_Day_Va_Danh_Gia/Phieu_Hoc_Tap_Va_Nhat_Ky_Tuong_Tac.md`.
3. Mở trang web truyện tại `05_Web_Truyen_Tuong_Tac/index.html` trên máy tính hoặc máy chiếu cho học sinh tương tác.

### 3.3. Dành cho lập trình viên & người phát triển Web:
1. Truy cập thư mục `05_Web_Truyen_Tuong_Tac/`.
2. Mở trực tiếp file `index.html` trên trình duyệt web bất kỳ (Chrome, Safari, Edge, Firefox).
3. Hoặc chạy local server:
   ```bash
   python3 -m http.server 8000 --directory 05_Web_Truyen_Tuong_Tac
   ```
   Truy cập: `http://localhost:8000`

### 3.4. Dành cho các AI Agents tiếp quản dự án:
Mỗi ngăn đều được trang bị tệp `PROMPT_*.md` tương ứng. Đọc tệp tổng quan tại `07_Agent_Prompts_Va_Cong_Cu/SYSTEM_AGENT_ORCHESTRATION.md` để hiểu chuỗi mắt xích công việc.


---

## 4. WORKFLOW TẠO TRUYỆN VÀ MINH HỌA ĐA AGENT

Hệ thống tạo truyện mới được chuẩn hóa tại:
- [Quy tắc agent](AGENTS.md)
- [Workflow tạo truyện](07_Agent_Prompts_Va_Cong_Cu/STORY_CREATION_WORKFLOW.md)
- [Visual Style Bible](07_Agent_Prompts_Va_Cong_Cu/VISUAL_STYLE_BIBLE.md)
- [Character Bible](07_Agent_Prompts_Va_Cong_Cu/CHARACTER_BIBLE.md)
- [Template một trang truyện](07_Agent_Prompts_Va_Cong_Cu/STORY_PAGE_TEMPLATE.md)
- [Khảo sát skill GitHub](07_Agent_Prompts_Va_Cong_Cu/SKILL_RESEARCH_AND_REFERENCES.md)

Các skill portable đặt tại `.agents/skills/`. Quy tắc bố cục bắt buộc: mỗi trang có một lời dẫn tiếng Việt ở đầu trang và đúng một tranh minh họa đơn cảnh ở dưới; lựa chọn tương tác (nếu có) do giao diện dựng riêng, không nằm trong ảnh.


---

## 5. MUSE AI — 10 PHIÊN BẢN TRUYỆN CÙNG NỘI DUNG

Thư mục [08_Muse_Storybook_Prompts/](08_Muse_Storybook_Prompts/README.md) chứa 10 prompt Markdown, mỗi prompt khóa một phong cách minh họa riêng. Dùng [MASTER_PROMPT_MUSE.md](08_Muse_Storybook_Prompts/MASTER_PROMPT_MUSE.md) để yêu cầu Muse AI tạo 10 branch độc lập, mỗi branch là một phiên bản sách truyện. Nội dung, lời dẫn tiếng Việt, nhân vật, nhánh lựa chọn, hệ quả và kết thúc phải giống nhau; chỉ phong cách minh họa thay đổi.
