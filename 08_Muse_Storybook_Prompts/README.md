# 10 PROMPT MUSE AI — 10 PHONG CÁCH, CÙNG MỘT CÂU CHUYỆN

## Mục tiêu
Dùng Muse AI để tạo 10 cuốn truyện minh họa từ cùng một nội dung trong repository. Mỗi phong cách được làm trên một Git branch riêng, không trộn lẫn asset. Cả 10 phiên bản phải giữ cùng nội dung, cùng lời dẫn tiếng Việt, nhân vật, thứ tự trang, lựa chọn, hệ quả và kết thúc.

## Cách dùng
1. Mở repository trong Muse AI với quyền đọc/ghi GitHub.
2. Mở và sao chép toàn bộ nội dung [MASTER_PROMPT_MUSE.md](MASTER_PROMPT_MUSE.md) vào Muse AI.
3. Muse sẽ đọc từng prompt phong cách, tạo 10 branch từ cùng một BASE_SHA, tạo nội dung và minh họa riêng rồi push từng branch.
4. Nếu muốn làm thử một phong cách trước, gửi riêng prompt tương ứng bên dưới cho Muse.

## Danh sách 10 phong cách và branch

| # | Phong cách | Prompt | Branch |
|---|---|---|---|
| 01 | Webtoon học đường 2D hiện đại | [PROMPT_01_WEBTOON_2D.md](PROMPT_01_WEBTOON_2D.md) | `muse/storybook-01-webtoon` |
| 02 | Màu nước và nét mực | [PROMPT_02_WATERCOLOR_INK.md](PROMPT_02_WATERCOLOR_INK.md) | `muse/storybook-02-watercolor-ink` |
| 03 | Gouache matte storybook | [PROMPT_03_GOUACHE_STORYBOOK.md](PROMPT_03_GOUACHE_STORYBOOK.md) | `muse/storybook-03-gouache` |
| 04 | Flat vector hình học | [PROMPT_04_FLAT_VECTOR.md](PROMPT_04_FLAT_VECTOR.md) | `muse/storybook-04-flat-vector` |
| 05 | Bút chì màu và phác nét tay | [PROMPT_05_COLORED_PENCIL.md](PROMPT_05_COLORED_PENCIL.md) | `muse/storybook-05-colored-pencil` |
| 06 | Risograph / in lụa | [PROMPT_06_RISOGRAPH_PRINT.md](PROMPT_06_RISOGRAPH_PRINT.md) | `muse/storybook-06-risograph` |
| 07 | Pixel art 16-bit | [PROMPT_07_PIXEL_ART.md](PROMPT_07_PIXEL_ART.md) | `muse/storybook-07-pixel-art` |
| 08 | 3D clay / stop-motion | [PROMPT_08_CLAY_3D.md](PROMPT_08_CLAY_3D.md) | `muse/storybook-08-clay-3d` |
| 09 | Anime học đường điện ảnh nguyên bản | [PROMPT_09_CINEMATIC_ANIME.md](PROMPT_09_CINEMATIC_ANIME.md) | `muse/storybook-09-cinematic-anime` |
| 10 | Manga mực đen và screentone | [PROMPT_10_MANGA_SCREENTONE.md](PROMPT_10_MANGA_SCREENTONE.md) | `muse/storybook-10-manga-screentone` |

## Quy tắc không được thay đổi
- 10 cuốn là 10 phiên bản hình ảnh của cùng một truyện, không phải 10 cốt truyện khác nhau.
- Một bản STORY_PAGES.md chuẩn được tạo một lần rồi sao chép nguyên văn vào tất cả branch.
- Mỗi trang: một lời dẫn/thuyết minh tiếng Việt ở trên đầu + đúng một tranh đơn cảnh bên dưới.
- Các nút lựa chọn nằm trong UI riêng, không nằm trong hình.
- Character Bible là nguồn nhận diện gốc; mỗi phong cách được tạo hình nhân vật lại theo medium riêng nhưng giữ nhận diện bất biến.
- Mỗi branch xuất ra thư mục `09_Storybook_Outputs/<style-slug>/`.
- Không merge branch tự động. Chỉ push và báo link.
- Phân biệt ảnh đã sinh thật với prompt/asset đang pending.

## Lưu ý về phong cách
Mỗi prompt có quyền thay đổi medium minh họa mặc định trong Visual Style Bible cho branch của chính nó. Ngoài khác biệt về ngôn ngữ tạo hình, toàn bộ quy tắc nội dung, đối tượng học sinh THPT, trang phục/nhận diện nhân vật, bố cục và QA vẫn giữ nguyên.
