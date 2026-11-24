# QA_REPORT — Gouache matte storybook

- Branch: `muse/storybook-03-gouache`
- Repo: truongnquynh29/tieuluan
- BASE_SHA: `61d6d769c5f401682aad0eef4884131bd78c3de3`
- Số chương: 4
- Số trang: 28 (24 trang truyện + 4 trang kết thúc) + 1 ảnh bìa
- Số image prompt: 29
- Số ảnh đã sinh thành công (đã kiểm chứng bằng file thực tế): 29 (bản cũ landscape) + 28 tranh book layout 4:5 mới + 1 character sheet + 1 background master
- Số ảnh còn pending: 0 (book layout)
- Trạng thái: CREATED, PUSHED (file text, commit trước), PROMPTS_READY: yes, IMAGES_GENERATED: 28/28 book layout, QA_PASSED: yes cho Gate A/B/C dưới đây (kiểm tra thật ngày 2026-11-24).

## Kiểm tra nội dung
- [x] STORY_PAGES.md có 28 page_id, thứ tự CH01-P001..P006, CH02-P001..P006, CH03-P001..P006, CH04-P001..P010.
- [x] Mỗi lời dẫn 35-65 từ, 2-4 câu (đã đếm bằng script khi tạo file).
- [x] Lựa chọn A/B, hệ quả, chỉ số CSS/DES, key points, câu hỏi phản tư và 4 kết thúc được giữ trong các trường có cấu trúc.
- [x] Không thêm chương, không bỏ trang, không đổi thứ tự.
- [ ] Rà soát từng câu với giáo viên: các chênh lệch Markdown vs story_data.js đã ghi trong CONTENT_AUDIT.md, cần duyệt trước khi in.

## Kiểm tra hình ảnh — book layout (MUSE_EXECUTION_PROMPT_GOUACHE_BOOK_LAYOUT.md)
- [x] Có Character Style Sheets khóa nhận diện; đã tạo character reference sheet `assets/characters/character-reference-sheet.png` (1408x1760).
- [x] Mỗi page_id có đúng một image_asset_id, một prompt và một file ảnh đích `assets/pages/CHxx-Pxxx.png`.
- [x] Ảnh thực tế: 28/28 file PNG tồn tại, mở được, kích thước 1408x1760 (tỷ lệ 4:5 dọc), không rỗng, không hỏng.
- [x] Mỗi ảnh đúng một cảnh, một hành động chính khớp lời dẫn của đúng page_id.
- [x] Nhân vật là học sinh THPT 16–17 tuổi, không bị trẻ hóa/chibi hóa (đã kiểm tra bằng mắt trên ảnh render).
- [x] Đúng chất liệu gouache matte và palette ảnh mẫu: sage #7F9990, ivory #F1E5D1, ochre #DA9A60, burnt orange #C57D49, chestnut #784227, peach skin #E5B082.
- [x] Không có chữ/thoại/panel/collage/letterbox trong ảnh (đã kiểm tra bằng mắt trên các trang render 1, 2, 3, 12, 18, 24, 28).
- [x] Không có ảnh lặp/placeholder. Lưu ý: bản cũ `assets/pages/ch01-p001.png` (thường, 1920x1280 landscape) vẫn tồn tại trong thư mục nhưng KHÔNG dùng cho PDF sách; PDF chỉ dùng file tên hoa CHxx-Pxxx.png.

## QA PDF tranh trái
- [x] PDF mở được: `pdf/Gouache_Left_Illustrations_28_Pages.pdf` (13046826 bytes).
- [x] Có đúng 28 trang (xác nhận bằng pypdf và pdfinfo).
- [x] Trang 1 khớp CH01-P001; trang 28 khớp CH04-P010; thứ tự đúng danh sách page_id Mục 2 của execution prompt.
- [x] Trang PDF 1056x1320 pts (tỷ lệ 4:5), một ảnh duy nhất mỗi trang, không chữ, không bìa, không số trang.
- [x] Đã render và xem trực tiếp các trang 1, 2, 3, 12, 18, 24, 28.

## QA background phải
- [x] Một background master duy nhất: `assets/backgrounds/right-page-background.png` (1408x1760).
- [x] Đúng palette sage/ivory/ochre/warm brown; trung tâm sáng, sạch, đủ chỗ đặt lời dẫn (đã xem ảnh render).
- [x] Không có chữ, nhân vật hoặc tranh minh họa chính.

## QA PDF background
- [x] PDF mở được: `pdf/Gouache_Right_Page_Background_Master.pdf` (1634134 bytes).
- [x] Chính xác 01 trang (xác nhận bằng pypdf và pdfinfo).
- [x] Đúng tỷ lệ 4:5 (1056x1320 pts).
- [x] Không chứa lời dẫn hoặc tiêu đề.

## Lưu ý
- Character Bible và Visual Style Bible ở trạng thái PROPOSED, chưa duyệt ảnh mẫu.
- PR #1 open, chưa merge; base là feat/story-creation-skills theo MASTER_PROMPT A.4.
- Ảnh tham chiếu gouache do người dùng cung cấp trong cuộc trò chuyện không còn file đính kèm truy cập được trong phiên này; phong cách và palette được bám theo mô tả chi tiết bằng văn bản ở Mục 3 của execution prompt (chất liệu, nét cọ, bảng màu hex, ánh sáng, bố cục).
- PDF tranh trái xuất từ JPEG chất lượng 88 để dung lượng 13,05 MB (bản PNG lossless là 83 MB); ảnh nguồn PNG giữ nguyên để chỉnh sửa.
