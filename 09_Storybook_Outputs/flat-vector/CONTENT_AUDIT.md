# CONTENT_AUDIT — Đối chiếu nội dung chuẩn với kịch bản nguồn

- Repo: truongnquynh29/tieuluan
- BASE_SHA: `61d6d769c5f401682aad0eef4884131bd78c3de3` (nhánh feat/story-creation-skills, PR #1 open, chưa merge, mergeable_state clean)
- Nguồn chính: `04_Kich_Ban_Truyen_Tuong_Tac/KICH_BAN_TONG_THE.md` và 4 file `Chuong_*.md`; `05_Web_Truyen_Tuong_Tac/js/story_data.js`
- Số chương: 4
- Số trang: 28 (24 trang truyện + 4 trang kết thúc) + 1 ảnh bìa riêng

## 1. Ánh xạ page_id

Mỗi chương trong story_data.js có pageNumber 1, 2, 3, 4 (hai nhánh SAFE/EXPLORE), 5. Trong STORY_PAGES.md, các bản ghi này được đánh số riêng để mỗi page_id có đúng một ảnh: P001=Trang 1, P002=Trang 2, P003=Trang 3 (quyết định), P004=Trang 4A (SAFE), P005=Trang 4B (EXPLORE), P006=Trang 5 (phản tư / tổng kết). Chương 4 có thêm P007-P010 là 4 trang kết thúc, vì trong Markdown Chương 4 Trang 5 liệt kê cả 4 kết thúc, còn trong story_data.js các kết thúc nằm trong map `endings` riêng, không phải là page. Việc tách 4 kết thúc thành 4 trang giúp mỗi kết thúc có đúng một image_asset_id theo MASTER_PROMPT C.

## 2. Chênh lệch Markdown vs story_data.js (không tự ý đoán, ghi rõ để giáo viên duyệt)

- Tiêu đề trang: một số tiêu đề trong JS ngắn gọn hoặc khác cách đặt so với Markdown, ví dụ C2P2 Markdown là 'Bài luận hoàn hảo và dấu vết ảo giác' còn JS là 'Bài luận hoàn hảo và Những hạt sạn vô hình'; C3P1 Markdown là 'Làn sóng thị phi và nhóm chat ẩn danh' còn JS là 'Cơn bão thị phi giờ ra chơi'. STORY_PAGES.md dùng tiêu đề Markdown làm chuẩn, ghi JS vào đây để đối chiếu.
- Câu hỏi phản tư: C1 Markdown hỏi xử lý khủng hoảng trong 30 phút đầu tiên, JS hỏi hướng dẫn 3 bước cấp bách khi phát hiện bạn bè/người thân bị chiếm tài khoản; C2 Markdown hỏi ranh giới hỗ trợ vs gian lận AI, JS hỏi học sinh dùng ChatGPT viết toàn bộ bài văn đã đánh mất kỹ năng nào; C3 Markdown hỏi sẽ làm gì khi phát hiện nhóm chat nói xấu bạn, JS hỏi sẽ phản ứng thế nào nếu bản thân bị chụp lén và chế ảnh. STORY_PAGES.md dùng câu hỏi Markdown làm chuẩn; câu hỏi JS được ghi ở đây, chưa hợp nhất âm thầm.
- Lời dẫn (narration): JS có trường narration ngắn cho một số trang, Markdown có lời thoại và mô tả dài. STORY_PAGES.md viết lại thành lời dẫn 35-65 từ theo AGENTS.md, giữ sự kiện và thông tin cốt lõi; chi tiết đầy đủ (lựa chọn, hệ quả, chỉ số, key points, kết thúc) nằm trong các trường có cấu trúc của từng trang, không bị mất.
- Chỉ số: Markdown Chương 2 Trang 4A ghi CSS +10 lên 75, DES +15 lên 75; Chương 3 Trang 4A ghi CSS +10 lên 85, DES +15 lên 90; các giá trị tuyệt đối này là tích lũy theo đường toàn An toàn. STORY_PAGES.md giữ delta (+10/+15) trong trường state_change và giữ giá trị tuyệt đối trong phần này; đường toàn Khám phá tương ứng là C1 35/45, C2 25/30, C3 15/15, C4 -20/-20 cho Trang 4B.
- Nhân vật Chi: có trong Chương 3 và story_data.js, nhưng không có hồ sơ riêng trong CHARACTER_BIBLE.md v0.1. Đã bổ sung hồ sơ Chi trong CHARACTER_STYLE_SHEETS.md và ghi rõ nguồn, cần duyệt.
- Thầy Tuấn: trong Markdown Chương 4 là giáo viên phụ trách CNTT, trong JS là teacher với tên Thầy Tuấn; giữ nguyên tên và vai trò này.

## 3. Những gì được giữ nguyên

- Tên truyện, 4 chương, thứ tự trang, nhân vật, quan hệ, tính cách, sự kiện, kiến thức Tin học, lựa chọn A/B, hệ quả, chỉ số CSS/DES, điều kiện và 4 kết thúc.
- Không thêm chương, không bỏ trang, không cắt sự kiện, không đổi thông điệp giáo dục.
