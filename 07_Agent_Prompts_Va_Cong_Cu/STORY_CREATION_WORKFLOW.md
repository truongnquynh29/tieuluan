# WORKFLOW TẠO TRUYỆN VÀ MINH HỌA ĐA AGENT

## 1. Mục tiêu
Tạo truyện cho học sinh THPT Việt Nam (15–18 tuổi), nội dung đúng, vui vẻ, dễ đồng cảm. Mỗi trang có lời dẫn tiếng Việt ở đầu và đúng một tranh đơn cảnh bên dưới. Tất cả trang dùng chung phong cách và thiết kế nhân vật đã duyệt.

## 2. Vai trò, skill và đầu ra

| Agent | Skill/prompt | Đầu vào | Đầu ra |
|---|---|---|---|
| Orchestrator | AGENTS.md + workflow | Yêu cầu người dùng | Brief, phân công, gate |
| Research/Curriculum | Prompt ngăn 1 và 2 | Chủ đề, mục tiêu | Bảng kiến thức và nguồn |
| Story Planner | story-planner | Brief + kiến thức | Concept, outline, nhánh |
| Character Designer | character-canon | Outline | Character Bible, character sheets |
| Story Writer | story-writer-vi | Outline đã duyệt | Lời dẫn từng trang |
| Storyboard Designer | page-storyboard | Lời dẫn + canon | Page cards |
| Illustration Director | illustration-art-director | Page cards + references | Prompt ảnh từng trang |
| Visual Reviewer | visual-consistency-review | Ảnh + canon | PASS/REVISE/REGENERATE |
| Educational Reviewer | educational-story-review | Kịch bản + curriculum map | Blocker/Major/Minor |
| Frontend Agent | prompt frontend hiện có | Kịch bản đã duyệt | Dữ liệu web và giao diện |

Agent có thể gộp khi dự án nhỏ, nhưng không bỏ bước duyệt nội dung, canon hình ảnh và QA cuối.

## 3. Pipeline và cổng kiểm soát

### Gate 0 — Brief
Ghi độc giả/lớp, chủ đề, mục tiêu học tập, độ dài, số chương/trang, thông điệp, giới hạn nội dung, nền tảng, tỷ lệ ảnh và nhân vật có sẵn. Nếu chưa có tỷ lệ, lấy theo khung đích; chưa có khung thì đề xuất 4:5 dọc và chốt trước khi sinh lô.

Đầu ra: STORY_BRIEF.md.

### Gate 1 — Kiểm chứng và concept
Research/Curriculum kiểm chứng kiến thức trong repo. Story Planner tạo logline, câu hỏi cảm xúc, chủ đề, tuyến nhân vật, xung đột, tóm tắt chương.

Đầu ra: STORY_CONCEPT.md, CURRICULUM_MAP.md. Không viết tiếp nếu kiến thức trọng tâm còn mơ hồ.

### Gate 2 — Outline và nhánh
Story Planner xây cấu trúc chương, nhịp trang, điểm rẽ, hệ quả. Ưu tiên nhánh ít nhưng có ý nghĩa; dùng foldback/delayed consequence để tránh bùng nổ. Reviewer kiểm tra lựa chọn và safe-fail.

Đầu ra: STORY_OUTLINE.md, BRANCH_MAP.md.

### Gate 3 — Khóa Character Bible và Visual Style Bible
Character Designer tạo ID, ngoại hình, kiểu tóc, trang phục, palette, biểu cảm và continuity. Art Director khóa style anchor, palette, line art, shading, ánh sáng và tỷ lệ ảnh. Tạo character sheet và ảnh mẫu; yêu cầu người dùng/đạo diễn duyệt.

Đầu ra: CHARACTER_BIBLE.md, VISUAL_STYLE_BIBLE.md, reference đã duyệt. Thay đổi canon cần ghi phiên bản.

### Gate 4 — Lời dẫn và storyboard
Story Writer viết lời dẫn tiếng Việt. Storyboard Designer chọn đúng một khoảnh khắc cho một tranh và hoàn thành page template. Lời dẫn nằm ở đầu trang, tranh đơn cảnh bên dưới; choices là control UI riêng.

Đầu ra: STORY_PAGES.md hoặc một Markdown/chương.

### Gate 5 — Prompt ảnh và ảnh mẫu
Art Director tạo một prompt cho mỗi page_id, lặp style anchor và mô tả canon của nhân vật xuất hiện. Sinh một trang đại diện để kiểm tra và duyệt trước khi tạo hàng loạt.

Đầu ra: IMAGE_PROMPTS.md và ảnh mẫu đã duyệt. Nếu không có công cụ tạo ảnh thì bàn giao prompt pack, không giả định ảnh đã sinh.

### Gate 6 — Tạo ảnh lô và kiểm tra
Sinh từng ảnh bằng cùng reference, style anchor, tỷ lệ và thiết lập. Visual Reviewer kiểm tra ảnh riêng lẻ và chuỗi. Ảnh lệch phải REVISE/REGENERATE trước khi tiếp tục trang phụ thuộc continuity.

Đầu ra: một asset/page, alt text, báo cáo consistency.

### Gate 7 — Rà soát và tích hợp
Educational Reviewer kiểm tra kiến thức, độ tuổi, lời dẫn, lựa chọn và bài học. Frontend Agent đặt lời dẫn ở phần trên, ảnh ở phần dưới, lựa chọn trong UI riêng. Không để text/UI giả lọt vào ảnh.

Đầu ra: kịch bản duyệt, dữ liệu tích hợp, checklist QA và nhật ký thay đổi.

## 4. Quy tắc dữ liệu
- page_id ổn định, ví dụ CH01-P001.
- Mỗi trang chỉ một image_asset_id và một image_prompt.
- Sửa lời dẫn không đổi image_asset_id nếu cảnh không đổi.
- Ghi version Character Bible và Visual Style Bible.
- Lưu prompt và báo cáo QA trong Markdown.
- Thay đổi nội dung đã duyệt phải quay về đúng gate để phê duyệt.

## 5. Definition of Done
Một chương chỉ hoàn tất khi kiến thức được kiểm chứng; mọi trang có lời dẫn trên + một tranh đơn cảnh dưới; không có chữ/panel/collage trong tranh; nhân vật và style khớp reference; nhánh có hệ quả hợp lý; không còn Blocker/Major; assets và Markdown liên kết đúng.
