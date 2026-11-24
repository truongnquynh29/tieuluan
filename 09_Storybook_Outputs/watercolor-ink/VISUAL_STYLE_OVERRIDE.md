# VISUAL_STYLE_OVERRIDE — Màu nước và nét mực truyện tranh

- Branch: `muse/storybook-02-watercolor-ink`
- Prompt phong cách: `08_Muse_Storybook_Prompts/PROMPT_02_WATERCOLOR_INK.md`
- Kế thừa: VISUAL_STYLE_BIBLE.md v0.1 (PROPOSED) và AGENTS.md, trừ phần medium/style được override ở branch này.
- Tỷ lệ ảnh: 4:5 dọc (đề xuất trong STORY_CREATION_WORKFLOW.md Gate 0, chốt trước khi sinh lô).

## Style anchor bắt buộc (dùng nguyên văn trong mọi prompt ảnh của branch này)

> Minh họa truyện sách bằng màu nước kỹ thuật số kết hợp nét mực mảnh; mảng màu loang mềm có kiểm soát, viền mực thanh thoát, giấy có hạt nhẹ, lớp màu trong và ánh sáng dịu. Nhân vật vẫn rõ biểu cảm, một khoảnh khắc tĩnh hoặc chuyển động nhẹ, nền loang màu tinh tế, nhân vật là tiêu điểm.

## Negative constraints (cố định, dùng trong mọi prompt)

> no text, no letters, no captions, no subtitles, no speech bubbles, no dialogue balloons, no logos, no watermark, no comic panels, no split panels, no collage, no contact sheet, no multiple scenes, no character duplication, no inconsistent outfit, no photorealism, no 3D render, no horror mood, no sexualized teen characters.

Lưu ý riêng cho branch này: với phong cách 3D clay, medium là đất sét 3D/stop-motion theo PROMPT_08, nên phần “no 3D render” trong negative chung được hiểu là không dùng render 3D bóng loáng kiểu phim CGI, không áp dụng để cấm chất liệu clay 3D đã được duyệt trong prompt phong cách. Các branch khác giữ nguyên negative chung.
