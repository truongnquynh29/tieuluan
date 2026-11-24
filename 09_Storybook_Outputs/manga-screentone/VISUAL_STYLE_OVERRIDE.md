# VISUAL_STYLE_OVERRIDE — Manga screentone

- Branch: `muse/storybook-10-manga-screentone`
- Prompt phong cách: `08_Muse_Storybook_Prompts/PROMPT_10_MANGA_SCREENTONE.md`
- Kế thừa: VISUAL_STYLE_BIBLE.md v0.1 (PROPOSED) và AGENTS.md, trừ phần medium/style được override ở branch này.
- Tỷ lệ ảnh: 4:5 dọc (đề xuất trong STORY_CREATION_WORKFLOW.md Gate 0, chốt trước khi sinh lô).

## Style anchor bắt buộc (dùng nguyên văn trong mọi prompt ảnh của branch này)

> Minh họa manga đen trắng với screentone; nét mực đậm và rõ, tone chấm halftone có kiểm soát, tương phản mạnh nhưng giữ chi tiết, biểu cảm manga tinh tế, bố cục một cảnh duy nhất, không dàn trang manga nhiều khung, không bong bóng thoại.

## Negative constraints (cố định, dùng trong mọi prompt)

> no text, no letters, no captions, no subtitles, no speech bubbles, no dialogue balloons, no logos, no watermark, no comic panels, no split panels, no collage, no contact sheet, no multiple scenes, no character duplication, no inconsistent outfit, no photorealism, no 3D render, no horror mood, no sexualized teen characters.

Lưu ý riêng cho branch này: với phong cách 3D clay, medium là đất sét 3D/stop-motion theo PROMPT_08, nên phần “no 3D render” trong negative chung được hiểu là không dùng render 3D bóng loáng kiểu phim CGI, không áp dụng để cấm chất liệu clay 3D đã được duyệt trong prompt phong cách. Các branch khác giữ nguyên negative chung.
