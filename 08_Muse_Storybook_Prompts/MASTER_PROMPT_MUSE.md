# MASTER PROMPT — MUSE AI TẠO 10 CUỐN TRUYỆN TỪ CÙNG MỘT NỘI DUNG

> Dùng prompt này trong Muse AI sau khi kết nối GitHub với repository.
> Repository: https://github.com/truongnquynh29/tieuluan
> Bộ prompt phong cách: 08_Muse_Storybook_Prompts/

## VAI TRÒ
Bạn là Orchestrator Agent có quyền đọc/ghi GitHub repository. Nhiệm vụ là tạo **10 phiên bản sách truyện minh họa của cùng một câu chuyện**, mỗi phiên bản có một ngôn ngữ hình ảnh riêng và được phát triển trên **một Git branch độc lập**.

Đây không phải 10 cốt truyện khác nhau. Đây là 10 cuốn sách cùng nội dung, cùng nhân vật, cùng thứ tự trang, cùng lời dẫn và cùng logic tương tác; chỉ khác phong cách minh họa.

## A. KIỂM TRA REPOSITORY VÀ CHỌN BASE
1. Mở repository truongnquynh29/tieuluan và kiểm tra quyền đọc/ghi GitHub.
2. Đọc trạng thái Pull Request #1:
   https://github.com/truongnquynh29/tieuluan/pull/1
3. Nếu PR #1 đã được merge, dùng nhánh main làm base.
4. Nếu PR #1 chưa merge, dùng nhánh feat/story-creation-skills làm base vì nhánh này chứa AGENTS.md, workflow và các skills mới.
5. Lấy chính xác một commit SHA làm BASE_SHA. Tất cả 10 nhánh phải được tạo từ cùng BASE_SHA. Ghi BASE_SHA vào báo cáo.
6. Đọc tối thiểu:
   - AGENTS.md
   - 07_Agent_Prompts_Va_Cong_Cu/STORY_CREATION_WORKFLOW.md
   - 07_Agent_Prompts_Va_Cong_Cu/VISUAL_STYLE_BIBLE.md
   - 07_Agent_Prompts_Va_Cong_Cu/CHARACTER_BIBLE.md
   - 07_Agent_Prompts_Va_Cong_Cu/STORY_PAGE_TEMPLATE.md
   - 04_Kich_Ban_Truyen_Tuong_Tac/KICH_BAN_TONG_THE.md
   - toàn bộ 4 file Chuong_*.md trong 04_Kich_Ban_Truyen_Tuong_Tac/
   - 05_Web_Truyen_Tuong_Tac/js/story_data.js
   - prompt phong cách tương ứng trong 08_Muse_Storybook_Prompts/
7. Không tự ý sửa/xóa nội dung gốc ở các thư mục 00–07. Không ghi trực tiếp lên main.

## B. KHÓA NỘI DUNG — ÁP DỤNG CHO CẢ 10 BRANCH
Câu chuyện nguồn là:
**“Người Gác Đền Không Gian Số: Hành trình trưởng thành trên mạng của Minh và An”**.

Các quy tắc bắt buộc:
- Giữ nguyên tên truyện, bối cảnh, tuyến nhân vật, quan hệ, động cơ và tính cách đã có trong kịch bản.
- Giữ nguyên toàn bộ sự kiện, tình huống, kiến thức Tin học, lựa chọn, hệ quả, chỉ số, điểm số, điều kiện và kết thúc.
- Giữ nguyên thứ tự chương, thứ tự trang, tất cả trang nhánh An toàn/Khám phá và tất cả kết thúc.
- Không thêm chương, không bỏ trang, không cắt sự kiện, không đổi thông điệp giáo dục, không viết lại cốt truyện cho phù hợp một phong cách hình ảnh.
- Chuyển lời thoại và mô tả hiện có thành một đoạn lời dẫn/thuyết minh tiếng Việt cho mỗi trang theo quy chuẩn mới. Việc chuyển thể chỉ được gộp/cô đọng cách kể, không được làm mất bất kỳ sự kiện hoặc thông tin học tập cốt lõi nào.
- Tạo **bản nội dung chuẩn duy nhất** trước khi chia nhánh. Lời dẫn, page_id, tiêu đề trang, cấu trúc lựa chọn, số liệu và nội dung phản tư phải giống hệt nhau trong cả 10 branch. Hãy sao chép cùng một bản nội dung chuẩn, không viết lại độc lập cho từng phong cách.
- Nếu kịch bản Markdown và story_data.js có điểm không khớp, không tự ý đoán hoặc thay đổi logic. Ghi nhận khác biệt trong CONTENT_AUDIT.md; giữ nguyên dữ kiện nguồn và báo rõ cách ánh xạ đã chọn.
- Không đổi thuật ngữ kỹ thuật hoặc diễn giải kiến thức theo hướng sai lệch. Nếu phát hiện nội dung đáng nghi, đánh dấu để người dùng/giáo viên duyệt; không âm thầm chỉnh sửa.

## C. QUY TẮC TRANG TRUYỆN
Mỗi trang phải có đúng:
1. Một khối lời dẫn/thuyết minh tiếng Việt ở phía trên đầu trang.
2. Một tranh minh họa đơn cảnh duy nhất ở phía dưới.
3. Các lựa chọn tương tác (nếu có) được giao diện hiển thị riêng bên dưới/ngoài tranh.

Cấm:
- nhiều tranh trên một trang;
- comic strip, panel, split-screen, collage, montage, contact sheet;
- hai thời điểm hoặc nhiều cảnh trong cùng một ảnh;
- bong bóng thoại, phụ đề, tiêu đề, chữ, URL, logo, watermark hoặc giao diện chữ giả trong tranh.

Mỗi page_id có đúng một image_asset_id, một image_prompt và một file ảnh cuối. Điều này áp dụng cả trang phản tư, trang lựa chọn, trang hệ quả và từng kết thúc. Ảnh bìa là asset riêng, không thay thế tranh minh họa trang.

## D. ĐỒNG NHẤT NHÂN VẬT
- Dùng CHARACTER_BIBLE.md làm nguồn nhận diện gốc: Minh, An, Hoàng, CyberFox và Thầy Tuấn.
- Tạo Character Style Sheet riêng trong từng branch theo phong cách được chọn, nhưng không đổi tuổi, giới tính, quan hệ, gương mặt nhận diện, kiểu tóc lõi, vóc dáng, trang phục cơ bản, phụ kiện đặc trưng hoặc màu nhận diện đã định nghĩa.
- Character sheet của từng branch phải được tạo trước loạt ảnh truyện và dùng làm ảnh tham chiếu xuyên suốt branch đó.
- Không được để Minh ở trang này có tóc/áo/màu khác Minh ở trang sau. Không được “đổi diễn viên” giữa các cảnh.
- Cùng một nhân vật có thể được chuyển thể về chất liệu tạo hình theo style branch, nhưng phải nhận ra là cùng một nhân vật.

## E. TẠO 10 BRANCH ĐỘC LẬP
Tạo đúng 10 branch sau, tất cả từ cùng BASE_SHA, không branch nối tiếp branch:

| # | Branch | Prompt phong cách |
|---|---|---|
| 01 | muse/storybook-01-webtoon | PROMPT_01_WEBTOON_2D.md |
| 02 | muse/storybook-02-watercolor-ink | PROMPT_02_WATERCOLOR_INK.md |
| 03 | muse/storybook-03-gouache | PROMPT_03_GOUACHE_STORYBOOK.md |
| 04 | muse/storybook-04-flat-vector | PROMPT_04_FLAT_VECTOR.md |
| 05 | muse/storybook-05-colored-pencil | PROMPT_05_COLORED_PENCIL.md |
| 06 | muse/storybook-06-risograph | PROMPT_06_RISOGRAPH_PRINT.md |
| 07 | muse/storybook-07-pixel-art | PROMPT_07_PIXEL_ART.md |
| 08 | muse/storybook-08-clay-3d | PROMPT_08_CLAY_3D.md |
| 09 | muse/storybook-09-cinematic-anime | PROMPT_09_CINEMATIC_ANIME.md |
| 10 | muse/storybook-10-manga-screentone | PROMPT_10_MANGA_SCREENTONE.md |

Mỗi branch chỉ chứa một phong cách. Không trộn hai phong cách trong cùng cuốn truyện.

## F. CẤU TRÚC ĐẦU RA TRONG MỖI BRANCH
Tạo thư mục riêng:
09_Storybook_Outputs/<style-slug>/

Tối thiểu gồm:
- README.md — mô tả phong cách, branch, BASE_SHA, số chương/trang, trạng thái.
- CONTENT_AUDIT.md — đối chiếu nội dung chuẩn với kịch bản nguồn, ghi mọi chênh lệch.
- STORY_PAGES.md — cùng một nội dung chuẩn được dùng cho cả 10 branch.
- VISUAL_STYLE_OVERRIDE.md — quy chuẩn hình ảnh riêng của branch, kế thừa các quy tắc chung.
- CHARACTER_STYLE_SHEETS.md — thiết kế chuyển thể nhân vật theo style, có ghi nhận diện bất biến.
- IMAGE_PROMPTS.md — một prompt riêng cho mỗi page_id, lặp style anchor và mô tả nhân vật đầy đủ.
- ASSET_MANIFEST.md — ánh xạ page_id -> image_asset_id -> đường dẫn file -> trạng thái.
- QA_REPORT.md — kiểm tra nội dung, trang, ảnh, continuity và style.

Ảnh:
- Ảnh bìa: assets/cover.png (hoặc định dạng ảnh thích hợp).
- Một ảnh duy nhất cho mỗi trang: assets/pages/<page_id>.png.
- Một file ảnh tham chiếu riêng cho mỗi character sheet nếu công cụ sinh ảnh hỗ trợ.
- Không dùng placeholder trông như ảnh đã hoàn tất. Nếu chưa tạo được ảnh, để trạng thái pending và vẫn có IMAGE_PROMPTS.md đầy đủ.

Nếu ứng dụng có thể chạy workflow sinh ảnh, hãy thật sự sinh ảnh và kiểm tra chúng. Nếu môi trường không có image-generation tool/quota, không được giả vờ đã tạo ảnh; ghi rõ phần nào mới là prompt, phần nào là ảnh đã sinh.

## G. QUY TRÌNH THỰC HIỆN CHO MỖI BRANCH
1. Tạo branch từ BASE_SHA.
2. Đọc đúng PROMPT_XX tương ứng và dựng VISUAL_STYLE_OVERRIDE.md.
3. Tạo Character Style Sheets cho các nhân vật xuất hiện.
4. Tạo STORY_PAGES.md từ bản nội dung chuẩn; không viết lại riêng.
5. Tạo một IMAGE_PROMPT cho mỗi page_id; prompt phải chứa style anchor, nhân vật, cảnh, bố cục, ánh sáng, palette và negative constraints.
6. Sinh ảnh bìa, ảnh tham chiếu, sau đó sinh từng ảnh trang. Mỗi ảnh một cảnh.
7. Chạy kiểm tra: số trang = số image_asset_id = số prompt ảnh = số asset ảnh hoàn tất (hoặc ghi pending rõ).
8. Kiểm tra ít nhất 3 ảnh đầu/cuối/nhánh để phát hiện trôi phong cách; nếu phát hiện thì sửa prompt và tạo lại.
9. Hoàn thiện QA_REPORT.md.
10. Commit và push branch; không merge tự động.

Có thể chia công việc thành nhiều commit trong cùng branch. Không được đưa asset của style khác vào branch hiện tại.

## H. KIỂM TRA CHÉO 10 BẢN
Trước khi báo cáo hoàn tất:
- So sánh STORY_PAGES.md của cả 10 branch: nội dung phải giống hệt từng ký tự (ngoại trừ metadata branch/style không được đặt trong phần nội dung truyện).
- So sánh page_id, số trang, thứ tự trang, lựa chọn, hệ quả và kết thúc: phải giống nhau.
- Kiểm tra mỗi branch chỉ có một style.
- Kiểm tra ảnh của mỗi page_id là đúng một ảnh đơn cảnh.
- Kiểm tra character continuity bên trong từng branch.
- Không merge 10 branch vào nhau hoặc merge vào main.

## I. BÁO CÁO CUỐI
Trả về bảng 10 branch gồm:
- Tên phong cách;
- branch URL;
- commit SHA;
- số chương;
- số trang;
- số ảnh đã sinh thật;
- số prompt ảnh;
- số asset đang pending;
- trạng thái QA.

Phân biệt rõ:
- CREATED: branch đã tạo;
- PUSHED: branch đã push;
- PROMPTS_READY: prompt ảnh đã có;
- IMAGES_GENERATED: ảnh đã sinh thật;
- QA_PASSED: QA đã qua.

Không nói đã hoàn tất 10 cuốn nếu mới tạo 10 branch hoặc 10 prompt. Không merge branch nếu chưa được người dùng yêu cầu.
