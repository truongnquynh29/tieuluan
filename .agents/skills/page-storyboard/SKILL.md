---
name: page-storyboard
description: Convert an approved story outline into page-by-page visual plans with exactly one standalone illustration and Vietnamese narration above it on every page. Use when splitting a story into pages.
---

# Page Storyboard

## Luật bố cục
Mỗi trang có đúng một vùng lời dẫn tiếng Việt ở đầu và một tranh đơn cảnh duy nhất ở bên dưới. Nút lựa chọn (nếu có) là thành phần UI riêng. Cấm comic strip, nhiều panel, collage, montage, contact sheet, ảnh lồng ảnh, bong bóng thoại và chữ trong tranh.

## Quy trình
1. Đọc outline, Character Bible và Visual Style Bible.
2. Chọn một khoảnh khắc có ý nghĩa thị giác cho mỗi trang; không gộp nhiều thời điểm.
3. Bảo đảm mỗi trang có chức năng tự sự riêng và nhịp hợp lý.
4. Mỗi trang một hành động thị giác chính; tối đa 1–4 nhân vật khi cảnh cho phép đọc rõ.
5. Viết lời dẫn trước, rồi mô tả khoảnh khắc ảnh. Không ép ảnh kể toàn bộ nội dung.
6. Ghi continuity: trang phục, đạo cụ, thời gian, ánh sáng, hướng nhìn, vị trí.
7. Với trang lựa chọn, ghi choices thành dữ liệu UI riêng.

## Trường dữ liệu
page_id, chapter_id, page_type, page_title_internal, narration_vi, scene_moment, characters_present, setting_and_time, key_props, composition_and_camera, continuity_notes, image_asset_id (một ID), image_prompt (một prompt), alt_text_vi, choices (optional).

## Kiểm tra
Số trang phải bằng số image_asset_id. Mỗi page_id chỉ có một ảnh và một prompt. Cụm “split screen”, “panels”, “comic strip”, “multiple scenes”, “collage” chỉ được xuất hiện trong negative prompt nhằm cấm chúng.
