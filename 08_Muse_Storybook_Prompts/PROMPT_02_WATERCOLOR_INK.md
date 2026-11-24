# MÀU NƯỚC VÀ NÉT MỰC TRUYỆN TRANH — PROMPT TẠO MỘT PHIÊN BẢN TRUYỆN

> Prompt độc lập cho Muse AI. Dùng cùng MASTER_PROMPT_MUSE.md.
> Một nội dung truyện, một bộ nhân vật; chỉ đổi ngôn ngữ minh họa.

## VAI TRÒ
Bạn là Storybook Art Director và Image Production Agent. Hãy tạo đúng một phiên bản minh họa của truyện nguồn với phong cách được khóa dưới đây.



## 1. BRANCH VÀ THƯ MỤC
- Branch đích: `muse/storybook-02-watercolor-ink`.
- Tạo branch từ đúng BASE_SHA do MASTER_PROMPT_MUSE.md xác định; không tạo từ một style branch khác.
- Thư mục đầu ra: `09_Storybook_Outputs/02-watercolor-ink/`.
- Đây là một cuốn truyện riêng biệt. Không commit asset của phong cách khác vào branch này.

## 2. KHÓA NỘI DUNG
Dùng nguyên truyện “Người Gác Đền Không Gian Số: Hành trình trưởng thành trên mạng của Minh và An” từ các file gốc ở `04_Kich_Ban_Truyen_Tuong_Tac/` và logic trong `05_Web_Truyen_Tuong_Tac/js/story_data.js`.
Giữ nguyên tuyệt đối:
- tên và vai trò nhân vật, sự kiện, mối quan hệ, bối cảnh;
- tất cả 4 chương, mọi trang, điểm rẽ, nhánh An toàn/Khám phá, hệ quả, CSS/DES, điểm số và kết thúc;
- thứ tự trang, page_id, nội dung kiến thức, câu hỏi phản tư;
- lời dẫn tiếng Việt dùng chung cho cả 10 branch.
Không sáng tác thêm, không cắt hoặc thay đổi nội dung để “hợp” phong cách ảnh. Chỉ thay đổi cách tạo hình.

Trước khi tạo ảnh, dựng một bản STORY_PAGES.md chuẩn từ nội dung gốc. Lời thoại có thể chuyển thành lời dẫn 35–65 từ/trang theo chuẩn repo nhưng không được làm mất dữ kiện/sự kiện. Bản này phải được sao chép nguyên văn sang cả 10 branch.

## 3. NHÂN VẬT VÀ TÍNH NHẤT QUÁN
- Đọc `07_Agent_Prompts_Va_Cong_Cu/CHARACTER_BIBLE.md`.
- Tạo Character Style Sheets riêng theo style này nhưng giữ nguyên nhận diện bất biến của Minh, An, Hoàng, CyberFox và Thầy Tuấn.
- Tạo character sheet trước; dùng sheet đó làm reference cho mọi ảnh trong branch.
- Giữ nguyên tuổi THPT, tóc, mặt, vóc dáng, trang phục lõi, phụ kiện và màu nhận diện.

## 4. PHONG CÁCH RIÊNG CỦA BRANCH
**Tên phong cách:** Màu nước và nét mực truyện tranh

**Style anchor bắt buộc:**
> Minh họa truyện sách bằng màu nước kỹ thuật số kết hợp nét mực mảnh; mảng màu loang mềm có kiểm soát, viền mực thanh thoát, giấy có hạt nhẹ, lớp màu trong và ánh sáng dịu. Nhân vật vẫn rõ biểu cảm, không bị nhòe; tổng thể ấm áp, có chất kể chuyện và hơi thơ.

**Palette:**
xanh lam bụi, xanh ngọc nhạt, san hô, vàng nắng nhạt, kem giấy và nâu mực.

**Bố cục:**
một khoảnh khắc tĩnh hoặc chuyển động nhẹ, nền loang màu tinh tế, nhân vật là tiêu điểm.

**Tránh:**
màu nước lem làm mất nhận diện, nền quá trừu tượng, màu bùn, chữ, panel, collage, nhiều cảnh.

Phong cách này được phép override medium/style mặc định trong VISUAL_STYLE_BIBLE.md chỉ ở branch này. Tất cả quy tắc chung về nội dung, bố cục một ảnh/trang, tuổi nhân vật, tính nhất quán và an toàn vẫn phải giữ.

## 5. BỐ CỤC MỖI TRANG
- Một lời dẫn/thuyết minh tiếng Việt ở đầu trang.
- Chính xác một tranh đơn cảnh bên dưới.
- Lựa chọn tương tác do UI hiển thị riêng.
- Không chữ, logo, watermark, subtitle, giao diện, bong bóng thoại bên trong ảnh.
- Không panel, split-screen, collage, montage, contact sheet hoặc nhiều thời điểm trong một ảnh.

## 6. ĐẦU RA
Tạo:
- `README.md`
- `CONTENT_AUDIT.md`
- `STORY_PAGES.md` (nội dung giống hệt các branch còn lại)
- `VISUAL_STYLE_OVERRIDE.md`
- `CHARACTER_STYLE_SHEETS.md`
- `IMAGE_PROMPTS.md` (đúng một prompt/page_id)
- `ASSET_MANIFEST.md`
- `QA_REPORT.md`
- `assets/cover.png`
- `assets/pages/<page_id>.png` (một ảnh/page, nếu có khả năng sinh ảnh)

Nếu không có công cụ sinh ảnh, ghi trạng thái pending; không giả vờ ảnh đã tồn tại. Không đặt chữ tiêu đề vào ảnh bìa; chữ do giao diện dàn.

## 7. QA VÀ PUSH
- Số page_id = số image_asset_id = số prompt ảnh = số ảnh đã sinh hoặc trạng thái pending được ghi rõ.
- Kiểm tra ít nhất một trang mở đầu, một trang nhánh và một trang kết thúc.
- Xác nhận không sai nhân vật, không trôi style, không có chữ/panel/collage trong ảnh.
- Commit và push branch này. Không merge.
- Báo branch URL, commit SHA, số trang, số prompt, số ảnh sinh thật, số pending và QA status.

