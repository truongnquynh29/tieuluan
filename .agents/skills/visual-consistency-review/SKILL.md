---
name: visual-consistency-review
description: Audit generated story illustrations for character drift, style drift, composition violations, and one-image-per-page compliance. Use after image generation or before publishing a chapter.
---

# Visual Consistency Reviewer

## Kiểm tra từng trang
- Chỉ một cảnh và một tranh hoàn chỉnh.
- Không panel, frame, collage, contact sheet, montage hoặc ảnh inset.
- Không chữ, nhãn, phụ đề, logo, watermark, bong bóng thoại hoặc UI giả trong ảnh.
- Đúng số lượng và đúng danh tính nhân vật.
- Đúng kiểu tóc, gương mặt, tỷ lệ, trang phục, màu nhận diện, phụ kiện.
- Biểu cảm phù hợp tình huống và học sinh THPT.
- Đúng line art, shading, palette, ánh sáng và texture.
- Bối cảnh/đạo cụ/góc máy khớp storyboard.
- Không có lỗi giải phẫu nổi bật hoặc chi tiết gây hiểu nhầm.

## Kiểm tra toàn chương
- Tất cả trang thuộc cùng một cuốn truyện.
- Nhân vật không “đổi diễn viên” giữa trang.
- Palette, tỷ lệ khung hình và độ tương phản nhất quán.
- Nhịp hình có thay đổi vừa đủ nhưng không đổi style.
- Nhánh khám phá không tự biến thành thể loại kinh dị/gritty.

## Kết quả
- PASS: đạt chuẩn.
- REVISE: lỗi có thể sửa bằng prompt/chỉnh ảnh.
- REGENERATE: lệch nhận diện hoặc cấu trúc nghiêm trọng.

Báo cáo lỗi theo page_id, mức ảnh hưởng, quy tắc vi phạm và cách sửa; không chỉ nhận xét “đẹp/xấu” chung chung.
