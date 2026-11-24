# VISUAL_STYLE_OVERRIDE — Webtoon học đường 2D hiện đại

- Branch: `muse/storybook-01-webtoon`
- Prompt phong cách: `08_Muse_Storybook_Prompts/PROMPT_01_WEBTOON_2D.md`
- Kế thừa: VISUAL_STYLE_BIBLE.md v0.1 (PROPOSED) và AGENTS.md, trừ phần medium/style được override ở branch này.
- Tỷ lệ ảnh: 4:5 dọc (đề xuất trong STORY_CREATION_WORKFLOW.md Gate 0, chốt trước khi sinh lô).

## Style anchor bắt buộc (dùng nguyên văn trong mọi prompt ảnh của branch này)

> Minh họa 2D webtoon học đường Việt Nam hiện đại; line art sạch, nét ngoài rõ và ổn định, cel-shading 2 lớp, màu sáng tươi nhưng có kiểm soát, gương mặt biểu cảm tự nhiên, hình khối gọn, phối cảnh rõ. Palette: navy, cobalt blue, teal, coral, sunshine yellow, cream; màu da tự nhiên, tương phản vừa.

## Negative constraints (cố định, dùng trong mọi prompt)

> no text, no letters, no captions, no subtitles, no speech bubbles, no dialogue balloons, no logos, no watermark, no comic panels, no split panels, no collage, no contact sheet, no multiple scenes, no character duplication, no inconsistent outfit, no photorealism, no 3D render, no horror mood, no sexualized teen characters.

Lưu ý riêng cho branch này: với phong cách 3D clay, medium là đất sét 3D/stop-motion theo PROMPT_08, nên phần “no 3D render” trong negative chung được hiểu là không dùng render 3D bóng loáng kiểu phim CGI, không áp dụng để cấm chất liệu clay 3D đã được duyệt trong prompt phong cách. Các branch khác giữ nguyên negative chung.
