# PRODUCTION_LOG — Gouache book layout (MUSE_EXECUTION_PROMPT_GOUACHE_BOOK_LAYOUT.md)

Ngày: 2026-11-24. Branch: `muse/storybook-03-gouache`. Người thực hiện: Muse (Illustration Production Agent).

## Bối cảnh
- User chỉ ra hướng làm trước đó hiểu sai yêu cầu: nhiệm vụ thật là sản xuất hình ảnh + 2 PDF theo file `09_Storybook_Outputs/gouache/MUSE_EXECUTION_PROMPT_GOUACHE_BOOK_LAYOUT.md` trên branch `muse/storybook-03-gouache`, không làm website/HTML/CSS/JS hay hiệu ứng lật sách.
- Ảnh tham chiếu gouache do user cung cấp trong cuộc trò chuyện không còn file đính kèm truy cập được trong phiên này; đã bám theo mô tả chi tiết bằng văn bản ở Mục 3 của execution prompt (chất liệu gouache matte, nét cọ, palette hex sage/ivory/ochre, ánh sáng tán xạ ấm, nhân vật 16–17 tuổi).

## Các bước đã thực hiện
1. Đọc execution prompt (19.273 ký tự) từ branch qua GitHub MCP; đọc STORY_PAGES.md (28 page_id, lời dẫn và scene_moment từng trang).
2. Tạo character reference sheet: `assets/characters/character-reference-sheet.png` (1408x1760, 4:5) — đủ 6 nhân vật Minh, An, Hoàng, Chi, CyberFox, Thầy Tuấn.
3. Sinh 28 tranh minh họa trang trái, tên file hoa `assets/pages/CH01-P001.png` … `CH04-P010.png`, tất cả 1408x1760 (4:5 dọc), phong cách gouache matte + palette Mục 3, nhân vật 16–17 tuổi, không chữ trong tranh. Các file landscape cũ `ch01-p001.png` (thường) không bị xóa và không dùng cho PDF này.
4. Gate A: đủ 28 PNG thật, đúng thứ tự, mở được, đúng kích thước, đơn cảnh.
5. Xuất PDF tranh trái `pdf/Gouache_Left_Illustrations_28_Pages.pdf`: 28 trang, 1056x1320 pts, 13,05 MB (JPEG q88; bản PNG lossless 83 MB được thay để vừa giới hạn upload). Kiểm tra bằng pypdf + pdfinfo (28 trang) và render xem trực tiếp trang 1, 2, 3, 12, 18, 24, 28.
6. Tạo background master trang phải `assets/backgrounds/right-page-background.png` (1408x1760): nền giấy ivory, wash sage/ochre nhẹ ở rìa, viền mảnh, trung tâm sạch 80% diện tích, không chữ/nhân vật.
7. Xuất PDF background `pdf/Gouache_Right_Page_Background_Master.pdf`: đúng 1 trang, 1056x1320 pts. Kiểm tra bằng pypdf + pdfinfo + render xem trực tiếp.
8. Cập nhật ASSET_MANIFEST.md (bảng book layout), QA_REPORT.md (kết quả kiểm tra thật), PRODUCTION_LOG.md (file này).

## Vấn đề còn tồn tại
- Push file nhị phân (PNG/PDF) lên GitHub: công cụ MCP push_files chỉ nhận nội dung text (UTF-8 snapshot), không đẩy được binary; `gh` CLI chưa đăng nhập. Cần đẩy PNG + PDF bằng GitHub web upload (giới hạn 25 MB/file — PDF trái 13,05 MB và mọi PNG đều dưới giới hạn nên đủ điều kiện) hoặc git với token. File text (manifest/QA/log) đẩy được bằng push_files như trước.
- Bản cũ landscape 1920x1280 vẫn nằm trong `assets/pages/` (tên thường); cần user xác nhận có xóa hay giữ làm bản lưu.
