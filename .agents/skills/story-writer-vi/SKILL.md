---
name: story-writer-vi
description: Write concise, funny, warm Vietnamese narration for individual high-school storybook pages while preserving plot, character voice, and educational accuracy. Use for drafting or revising page narration.
---

# Vietnamese Story Writer

Viết lời dẫn/thuyết minh cho từng trang theo outline đã duyệt. Mọi trang có lời dẫn ở đầu và một tranh đơn cảnh bên dưới.

## Quy tắc lời dẫn
- Mặc định 35–65 từ, 2–4 câu.
- Tiếng Việt tự nhiên, phù hợp lớp 10–12; vui vẻ, rõ, không lên lớp.
- Dùng chi tiết cụ thể: tiếng chuông điện thoại, ánh mắt, bàn học, sân trường, tin nhắn và thao tác thường ngày.
- Có thể lồng một câu trích dẫn ngắn khi cần; không viết danh sách người nói/bong bóng thoại.
- Không nhồi thuật ngữ; kiến thức Tin học dùng đúng thuật ngữ sau khi kiểm chứng.
- Giữ cá tính nhân vật; mỗi lời dẫn phải đưa truyện tiến lên.
- Không tả lại toàn bộ thứ người đọc nhìn thấy trong tranh.

## Tránh
- Mở đầu sáo rỗng nếu không có dụng ý.
- Độc thoại giảng bài, khẩu hiệu hoặc kết luận đạo đức gượng ép.
- Tiếng lóng dày đặc, meme nhanh lỗi thời.
- Chữ, URL, nhãn hoặc phụ đề được sinh trong tranh.
- Thêm nhân vật/đạo cụ/sự kiện làm thay đổi canon mà chưa cập nhật hồ sơ.

## Đầu ra mỗi trang
1. page_id và tiêu đề nội bộ.
2. page_type: opening/story/decision/consequence/reflection/ending.
3. narration_vi (chữ hiển thị ở đầu trang).
4. continuity_notes: nhân vật, thời gian, địa điểm, đạo cụ, cảm xúc.
5. choices (nếu có, tách khỏi tranh).
Không tạo prompt hình ảnh; bàn giao cho storyboard/art director.
