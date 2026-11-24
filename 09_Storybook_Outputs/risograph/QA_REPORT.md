# QA_REPORT — Risograph / in lụa nghệ thuật

- Branch: `muse/storybook-06-risograph`
- Repo: truongnquynh29/tieuluan
- BASE_SHA: `61d6d769c5f401682aad0eef4884131bd78c3de3`
- Số chương: 4
- Số trang: 28 (24 trang truyện + 4 trang kết thúc) + 1 ảnh bìa
- Số image prompt: 29
- Số ảnh đã sinh thành công (đã kiểm chứng bằng file thực tế): 29
- Số ảnh còn pending: 0
- Trạng thái: CREATED (nội dung + prompt), PUSHED: chưa (xem báo cáo bàn giao), PROMPTS_READY: yes, IMAGES_GENERATED: 29 (cover), QA_PASSED: chưa — chỉ qua kiểm tra nội dung, prompt và 1 ảnh bìa.

## Kiểm tra nội dung
- [x] STORY_PAGES.md có 28 page_id, thứ tự CH01-P001..P006, CH02-P001..P006, CH03-P001..P006, CH04-P001..P010.
- [x] Mỗi lời dẫn 35-65 từ, 2-4 câu (đã đếm bằng script khi tạo file).
- [x] Lựa chọn A/B, hệ quả, chỉ số CSS/DES, key points, câu hỏi phản tư và 4 kết thúc được giữ trong các trường có cấu trúc.
- [x] Không thêm chương, không bỏ trang, không đổi thứ tự.
- [ ] Rà soát từng câu với giáo viên: các chênh lệch Markdown vs story_data.js đã ghi trong CONTENT_AUDIT.md, cần duyệt trước khi in.

## Kiểm tra hình ảnh
- [x] Có Character Style Sheets khóa nhận diện, có style anchor và negative constraints trong mọi prompt.
- [x] Mỗi page_id có đúng một image_asset_id, một prompt và một file ảnh đích.
- [x] Ảnh thực tế: 1/29 đã sinh (cover.png, 1920x1280, landscape — chưa đúng tỷ lệ 4:5 dọc đề xuất, cần ghi nhận). Các ảnh còn lại đang pending, KHÔNG được ghi là hoàn tất.
- [ ] Đồng bộ nét vẽ và continuity: chỉ kiểm chứng được sau khi có ảnh mẫu (ít nhất 1 trang mở đầu, 1 trang nhánh, 1 trang kết thúc) và ảnh character sheet đã duyệt.

## Lưu ý
- Character Bible và Visual Style Bible ở trạng thái PROPOSED, chưa duyệt ảnh mẫu.
- PR #1 open, chưa merge; base là feat/story-creation-skills theo MASTER_PROMPT A.4.
