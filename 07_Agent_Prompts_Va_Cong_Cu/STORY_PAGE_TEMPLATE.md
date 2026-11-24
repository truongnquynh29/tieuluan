# TEMPLATE — MỘT TRANG TRUYỆN MINH HỌA

Dùng một bản cho mỗi trang. Metadata không nhất thiết hiển thị cho độc giả.

## Page card

### Metadata
- page_id:
- chapter_id:
- page_type: opening | story | decision | consequence | reflection | ending
- page_title_internal:
- character_bible_version:
- visual_style_version:
- image_asset_id: (chỉ một ID)
- image_status: planned | prompt_ready | generated | approved | revise

### Lời dẫn ở đầu trang (tiếng Việt)
> 35–65 từ, khoảng 2–4 câu. Đây là phần chữ hiển thị ở đầu trang.

### Khoảnh khắc minh họa duy nhất
- scene_moment:
- characters_present:
- setting_and_time:
- key_props:
- action_and_emotion:
- composition_and_camera:
- continuity_notes:
- alt_text_vi:

### Prompt ảnh
- style_anchor:
- character_canon:
- scene_prompt:
- composition:
- lighting_and_palette:
- negative_constraints:

### Tương tác (nếu có; UI hiển thị riêng)
- question:
- choices:
  - option_id:
  - label:
  - consequence:
  - state_change:

## Wireframe bắt buộc

```
┌──────────────────────────────────────────────┐
│ LỜI DẪN / THUYẾT MINH TIẾNG VIỆT              │
│ 2–4 câu ngắn ở đầu trang                      │
├──────────────────────────────────────────────┤
│                                              │
│       MỘT TRANH MINH HỌA ĐƠN CẢNH             │
│       (một canvas / một tệp ảnh)              │
│                                              │
├──────────────────────────────────────────────┤
│ Nút lựa chọn tương tác (nếu có, do UI dựng)   │
└──────────────────────────────────────────────┘
```

Không đặt hội thoại dạng bong bóng, chú thích hoặc chữ lên trong ảnh. Không tạo thêm tranh riêng cho từng lựa chọn.
