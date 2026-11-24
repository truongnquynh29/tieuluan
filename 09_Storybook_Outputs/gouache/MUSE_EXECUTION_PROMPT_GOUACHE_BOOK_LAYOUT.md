# PROMPT THI CÔNG — GOUACHE STORYBOOK: TẠO TRANH TRƯỚC, DỰNG SÁCH LẬT SAU

> **Dành cho:** Muse AI có quyền đọc/ghi repository GitHub  
> **Repository:** https://github.com/truongnquynh29/tieuluan  
> **Branch bắt buộc:** `muse/storybook-03-gouache`  
> **Truyện:** Người Gác Đền Không Gian Số: Hành trình trưởng thành trên mạng của Minh và An  
> **Phong cách duy nhất:** 03 — Gouache Storybook  
> **Mục tiêu:** Tạo tranh minh họa thật cho từng trang ở trang trái, tạo background trang phải thành PDF riêng, sau đó dựng một web đọc truyện có cuốn sách mở ở chính giữa màn hình và lật trang như sách thật.

---

## 0. ĐỌC LỆNH VÀ NGUYÊN TẮC ƯU TIÊN

Bạn phải thực hiện công việc trực tiếp trên repository, không chỉ trả lời bằng kế hoạch.

Đọc trước:
1. `AGENTS.md`
2. `07_Agent_Prompts_Va_Cong_Cu/STORY_CREATION_WORKFLOW.md`
3. `07_Agent_Prompts_Va_Cong_Cu/VISUAL_STYLE_BIBLE.md`
4. `07_Agent_Prompts_Va_Cong_Cu/CHARACTER_BIBLE.md`
5. `07_Agent_Prompts_Va_Cong_Cu/STORY_PAGE_TEMPLATE.md`
6. `08_Muse_Storybook_Prompts/PROMPT_03_GOUACHE_STORYBOOK.md`
7. `09_Storybook_Outputs/gouache/STORY_PAGES.md`
8. `09_Storybook_Outputs/gouache/IMAGE_PROMPTS.md`
9. `09_Storybook_Outputs/gouache/CHARACTER_STYLE_SHEETS.md`
10. `09_Storybook_Outputs/gouache/VISUAL_STYLE_OVERRIDE.md`
11. `09_Storybook_Outputs/gouache/ASSET_MANIFEST.md`
12. `09_Storybook_Outputs/gouache/QA_REPORT.md`
13. `05_Web_Truyen_Tuong_Tac/index.html`, `css/style.css`, `js/book.js`, `js/story_data.js`

### Yêu cầu của người dùng — phải xử lý đủ
Bản trình chiếu trước đây có các lỗi:
- Font chữ nhỏ, nhìn như văn bản Word, không có cảm giác chữ được thiết kế cho sách truyện.
- Hình minh họa người/nhân vật đang hành động thực tế chưa có hoặc chưa được đưa vào trang.
- Cách chuyển trang giống slide trình chiếu, không tạo cảm giác đang đọc một cuốn sách online.
- Người dùng muốn một cuốn sách đang mở ở giữa trang web: trang trái là tranh truyện do AI tạo, trang phải là phần thuyết minh tương ứng trên nền giấy/background đẹp.
- Phải làm tranh bên trái trước. Background trang bên phải làm riêng, không được để nội dung chữ dính vào background PDF.
- Cần hai PDF độc lập: PDF chứa toàn bộ tranh truyện theo thứ tự trang và PDF chứa background trống của các trang bên phải.

**Thứ tự thi công bắt buộc:**  
**Kiểm tra nội dung/nhân vật → tạo character reference → tạo đủ 28 tranh trang trái → xuất PDF tranh → tạo 28 background trang phải → xuất PDF background → dựng HTML sách lật → kiểm tra và push.**

Không bắt đầu làm giao diện HTML trước khi đã có đủ tranh trang trái và hai PDF thật sự được tạo ra, kiểm tra được số trang.

---

## 1. KIỂM TRA HIỆN TRẠNG — KHÔNG TIN MÙ QUÁNG VÀO MANIFEST

Kiểm tra Git tree thực tế của branch `muse/storybook-03-gouache`, không chỉ đọc mô tả trong Markdown.

Các báo cáo hiện có không đồng nhất: README ghi 29 ảnh đã sinh, ASSET_MANIFEST đánh dấu nhiều trang generated, nhưng QA_REPORT lại nói chỉ có cover và các trang còn lại pending. Trong cây file tại thời điểm tạo prompt này, thư mục `09_Storybook_Outputs/gouache/assets/` chỉ có README và chưa thấy các PNG thực tế.

Vì vậy:
- Kiểm tra file thật trong Git tree và nội dung thư mục, bao gồm cả thư mục con.
- Chỉ đánh dấu `generated` khi file ảnh nhị phân thực tế tồn tại, mở/đọc được và đúng page_id.
- Không dùng tên file trong manifest để kết luận ảnh đã tồn tại.
- Không tạo placeholder, SVG minh họa tạm, emoji, icon, hình vector tượng trưng hoặc ảnh trống để giả làm ảnh AI.
- Sửa lại README, ASSET_MANIFEST và QA_REPORT cho khớp hiện trạng thật sau khi làm xong.

**Đầu ra kiểm tra:** ghi trạng thái ban đầu vào `PRODUCTION_LOG.md`, nêu rõ có bao nhiêu PNG/PDF thực tế trước khi bắt đầu.

---

## 2. KHÓA NỘI DUNG TRUYỆN — TUYỆT ĐỐI KHÔNG VIẾT LẠI

Nguồn nội dung chuẩn:
- `09_Storybook_Outputs/gouache/STORY_PAGES.md`
- `04_Kich_Ban_Truyen_Tuong_Tac/KICH_BAN_TONG_THE.md`
- Bốn file kịch bản chương trong `04_Kich_Ban_Truyen_Tuong_Tac/`
- `05_Web_Truyen_Tuong_Tac/js/story_data.js`

Giữ nguyên:
- Tên truyện, nhân vật, tính cách, quan hệ, bối cảnh và sự kiện.
- Đủ **4 chương, 28 page_id** theo đúng thứ tự trong STORY_PAGES.md.
- Toàn bộ lời dẫn tiếng Việt, các trang quyết định, lựa chọn An toàn/Khám phá, hệ quả, chỉ số CSS/DES, điểm số, nội dung phản tư và bốn kết thúc.
- Không cắt trang, không gộp hai page_id thành một ảnh, không tạo thêm một cốt truyện khác.

Danh sách page_id chuẩn:
- Chương 1: `CH01-P001` đến `CH01-P006`
- Chương 2: `CH02-P001` đến `CH02-P006`
- Chương 3: `CH03-P001` đến `CH03-P006`
- Chương 4: `CH04-P001` đến `CH04-P010`

Tổng cộng: **28 tranh truyện** + **1 ảnh bìa riêng** (nếu cần làm mới bìa).

Mỗi trang có một cảnh minh họa riêng và phần lời dẫn tương ứng. Lời dẫn phải hiển thị ở trang bên phải của đúng tranh đó. Không đưa nội dung thuyết minh vào trong hình ảnh.

Nếu Markdown và story_data.js có chỗ không khớp, ghi nhận trong CONTENT_AUDIT.md; không tự ý sửa kiến thức hoặc logic tương tác. Nội dung chữ trong reader phải bám STORY_PAGES.md đã được xác định làm nguồn trình chiếu cho branch này.

---

## 3. PHONG CÁCH MINH HỌA — GOUACHE STORYBOOK

Dùng đúng phong cách 03, không pha sang manga, anime, vector, watercolor loang mạnh hoặc 3D clay.

### Style anchor bắt buộc
“Minh họa truyện sách thiếu niên bằng chất liệu gouache kỹ thuật số; mảng màu đục matte, brush shape mềm nhưng cạnh rõ, bề mặt sơn mịn có chút dấu cọ thủ công tinh tế; hình khối giàu cá tính, nhân vật có gương mặt và cảm xúc tự nhiên, ánh sáng ấm, chiều sâu tạo bởi nhiều lớp màu; cảm giác như một cuốn sách truyện minh họa được họa sĩ vẽ và tô màu thủ công, vui vẻ, gần gũi, sinh động, giàu cảm xúc và phù hợp học sinh THPT.”

### Palette gợi ý cố định
- Cream / warm ivory: nền sáng và ánh sáng.
- Cobalt blue: nhận diện Minh và chi tiết công nghệ.
- Fresh teal: nhận diện An.
- Mustard / sunshine yellow: điểm nhấn Hoàng.
- Warm coral: cảm xúc và điểm nhấn nhỏ.
- Deep navy / charcoal: viền và tương phản.
- Màu da tự nhiên, không bão hòa quá mức.

### Chất lượng minh họa
- Phải có nhân vật người thật theo tạo hình minh họa (stylized human characters), đang thực hiện hành động rõ ràng: nhìn điện thoại, chỉ vào màn hình, chạy vào phòng, an ủi bạn, ngồi trước máy tính, giơ USB, trao giải, v.v.
- Biểu cảm đọc được ngay: ngạc nhiên, tò mò, lo lắng, phân vân, hối hận, nhẹ nhõm, vui mừng.
- Bối cảnh có chi tiết thực tế của đời sống học sinh Việt Nam: lớp học, hành lang, quán trà sữa, phòng máy, sân trường, hội trường.
- Hành động/đạo cụ phải khớp đúng mô tả của page_id.
- Không dùng một hình nền chung rồi thay tiêu đề để giả làm 28 tranh khác nhau.
- Không được chỉ vẽ biểu tượng khiên, điện thoại, laptop hoặc biểu đồ mà thiếu nhân vật và hành động cần kể.
- Mỗi trang là **một cảnh liên tục, một góc nhìn chính, một tranh duy nhất**.

### Cấm trong ảnh
Không chữ, không chữ tiếng Việt/tiếng Anh, không tiêu đề, không phụ đề, không nhãn, không URL có thể đọc, không logo, không watermark, không bong bóng thoại, không panel, không collage, không chia khung, không nhiều thời điểm trong một ảnh, không contact sheet.

---

## 4. GIAI ĐOẠN 1 — KHÓA NHÂN VẬT VÀ TẠO ẢNH THAM CHIẾU

Trước khi tạo 28 tranh:
1. Đọc CHARACTER_BIBLE và CHARACTER_STYLE_SHEETS hiện có.
2. Tạo character reference sheet nhất quán cho từng nhân vật: Minh, An, Hoàng, Chi, CyberFox và Thầy Tuấn.
3. Mỗi character sheet cần có toàn thân, góc 3/4, góc nghiêng và các biểu cảm chính; đây là tài liệu tham chiếu sản xuất, **không tính vào 28 trang truyện**.
4. Dùng cùng character reference trong mọi lần sinh ảnh của branch.
5. Giữ nguyên tuổi học sinh THPT, tóc, dáng, nét mặt, trang phục lõi, phụ kiện và màu nhận diện.
6. Chi xuất hiện trong Chương 3 và có mô tả trong CHARACTER_STYLE_SHEETS.md; cần giữ đúng mô tả đã có, không tự sáng tác lại ngoại hình.
7. CyberFox phải giữ hình dạng cáo, màu lông cam/kem, phụ kiện công nghệ và tỷ lệ đầu/thân giống nhau qua mọi trang.

Lưu reference tại:
`09_Storybook_Outputs/gouache/assets/characters/`

Tạo xong phải mở/kiểm tra các reference trước khi dùng chúng cho hàng loạt ảnh.

---

## 5. GIAI ĐOẠN 2 — TẠO 28 TRANH MINH HỌA Ở TRANG BÊN TRÁI TRƯỚC

Đây là nhiệm vụ ưu tiên số 1. **Chưa dựng HTML, chưa làm background trang phải cho đến khi 28 tranh trang trái đã được tạo và kiểm tra.**

### Quy cách ảnh
- Mỗi page_id tạo đúng một file ảnh độc lập.
- Tỷ lệ dọc **4:5**; độ phân giải mục tiêu ít nhất **2400 × 3000 px** hoặc chất lượng tương đương.
- Định dạng PNG, màu sRGB, không chữ.
- Mỗi ảnh chỉ mô tả đúng một cảnh; không tạo 28 ảnh vào cùng một canvas.
- Không tạo contact sheet rồi cắt thành ảnh giả, trừ khi công cụ có quy trình tạo ảnh riêng từng trang thực sự.
- Phải dùng style anchor gouache và character references đã khóa.

### Đường dẫn bắt buộc
`09_Storybook_Outputs/gouache/assets/pages/CH01-P001.png`  
`09_Storybook_Outputs/gouache/assets/pages/CH01-P002.png`  
...  
`09_Storybook_Outputs/gouache/assets/pages/CH04-P010.png`

Tên file phải khớp đúng page_id; không dùng tên chung như image1.png hoặc final2.png.

### Quy trình sinh
1. Dùng IMAGE_PROMPTS.md làm cơ sở, đối chiếu lại mô tả trang trong STORY_PAGES.md.
2. Sinh thử riêng `CH01-P001` và kiểm tra xem nhân vật, chất liệu gouache, ánh sáng và bố cục đã đúng chưa.
3. Dùng ảnh tham chiếu đã khóa để tiếp tục sinh từng trang còn lại.
4. Không thay đổi style anchor giữa chừng.
5. Mỗi ảnh sau khi sinh phải được kiểm tra trước khi đánh dấu generated.
6. Đặc biệt kiểm tra trang lựa chọn, trang phản tư và các trang kết thúc: vẫn phải có nhân vật/hành động phù hợp, không biến thành infographic.
7. Nếu một ảnh sai nhân vật, sai cảnh, sai chất liệu hoặc có chữ/panel thì tạo lại.

### Bản đồ ánh xạ
Cập nhật `ASSET_MANIFEST.md` theo bảng:
`page_id | narration_page_id | image_asset_id | file | dimensions | status | QA`.

**Gate 1 — Chỉ được qua khi:**
- Có đủ 28 file PNG thật, mở/đọc được.
- Mỗi page_id có đúng một ảnh.
- Không có ảnh lặp, placeholder, file rỗng hoặc ảnh sai trang.
- Đã kiểm tra ít nhất 1 ảnh mở đầu, 1 ảnh quyết định, 1 ảnh hệ quả và 1 ảnh kết thúc; tốt nhất kiểm tra cả 28 ảnh.
- Đã ghi rõ số ảnh thực tế trong PRODUCTION_LOG.md.

---

## 6. GIAI ĐOẠN 3 — GHÉP PDF CHỈ CHỨA TRANH TRANG TRÁI

Sau khi Gate 1 đạt, dùng chính 28 PNG đã sinh để tạo **một PDF ảnh truyện**.

### Tên file
`09_Storybook_Outputs/gouache/pdf/Gouache_Illustrations_28_Pages.pdf`

### Quy tắc PDF
- Đúng **28 trang PDF**, không tính bìa.
- Thứ tự trang đúng theo page_id: CH01-P001 → ... → CH04-P010.
- Một PDF page chứa đúng một tranh minh họa tương ứng.
- Không có lời dẫn, tiêu đề, số trang, chú thích hoặc chữ chèn lên tranh.
- Không ghép nhiều ảnh trên cùng một PDF page.
- Giữ đúng tỷ lệ và chất lượng ảnh gốc, không kéo méo.
- Kích thước trang PDF nhất quán theo tỷ lệ 4:5 (ví dụ 8 × 10 inch hoặc kích thước tương đương).
- Nếu cần thêm bìa, lưu ảnh bìa riêng `assets/cover.png`; không làm sai số trang 28 của PDF tranh nội dung.

Sau khi xuất:
- Mở PDF và kiểm tra trang đầu, vài trang giữa, trang cuối.
- Kiểm tra số trang PDF bằng đúng 28.
- Đối chiếu trang 1 và trang 28 với đúng file PNG tương ứng.
- Không báo hoàn thành nếu chỉ có IMAGE_PROMPTS.md mà chưa có file PDF nhị phân thật.

**Gate 2 — Có PDF thật, mở được và đúng 28 trang.**

---

## 7. GIAI ĐOẠN 4 — TẠO BACKGROUND TRANG BÊN PHẢI VÀ PDF RIÊNG

Chỉ bắt đầu sau khi PDF tranh trái đã hoàn thành.

Người dùng muốn trang phải là nền/background trang sách để phần thuyết minh được đặt lên trên bằng HTML. Vì vậy **PDF background không được chứa lời dẫn, tiêu đề, số trang hoặc bất kỳ nội dung chữ nào**.

### Thiết kế background trang phải
- Nền giấy kem/ngà ấm, bề mặt giấy mịn có texture rất nhẹ.
- Gouache được thể hiện qua vài mảng màu wash mềm ở rìa trang; không lấn vào vùng chữ.
- Có thể có viền trang mảnh, góc trang trang trí nhỏ hoặc họa tiết thực vật/công nghệ rất nhẹ, nhưng phải tinh tế.
- Chừa vùng trung tâm rộng, sáng, sạch để chữ tiếng Việt đặt lên dễ đọc.
- Không có hình nhân vật, không có tranh minh họa, không có icon lớn, không có watermark.
- Một background thống nhất cho toàn cuốn; chỉ cho phép biến đổi rất nhỏ về vệt màu/hoa văn để các trang không bị máy móc, nhưng tuyệt đối không đổi layout và độ tương phản.
- Background phải làm nền cho chữ chứ không cạnh tranh với chữ.
- Tạo theo tỷ lệ 4:5 tương ứng trang phải.

### File PNG phục vụ HTML
Lưu từng background:
`09_Storybook_Outputs/gouache/assets/right-backgrounds/CH01-P001.png`  
...  
`09_Storybook_Outputs/gouache/assets/right-backgrounds/CH04-P010.png`

Mỗi ảnh background tương ứng một page_id; có thể dùng chung thiết kế nền nhưng phải có file ánh xạ rõ ràng. HTML sẽ dùng PNG background để hiển thị ổn định, không phụ thuộc việc trình duyệt nhúng trực tiếp một trang PDF.

### PDF background riêng
Tên file:
`09_Storybook_Outputs/gouache/pdf/Gouache_Right_Page_Backgrounds_28_Pages.pdf`

Quy tắc:
- Đúng 28 trang.
- Mỗi trang là một background trắng chữ, không có narration.
- Trang PDF thứ n phải tương ứng background của page_id thứ n.
- Cùng tỷ lệ 4:5 và chất lượng cao.
- Không gộp với PDF tranh minh họa.
- Kiểm tra PDF thật sự mở được và có đủ 28 trang.

**Gate 3 — Có 28 background PNG và một PDF background riêng đúng 28 trang.**

---

## 8. GIAI ĐOẠN 5 — THIẾT KẾ WEBSITE THÀNH MỘT CUỐN SÁCH MỞ Ở GIỮA MÀN HÌNH

Sau khi có đủ:
- 28 tranh bên trái;
- `Gouache_Illustrations_28_Pages.pdf`;
- 28 background bên phải;
- `Gouache_Right_Page_Backgrounds_28_Pages.pdf`;

mới dựng giao diện đọc truyện.

### Entry point
Tạo một trang HTML chính:
`09_Storybook_Outputs/gouache/reader/index.html`

Có thể tách CSS/JS thành các file đi kèm để dễ bảo trì, nhưng đây phải là **một trang web đọc truyện có một entry point HTML duy nhất**. Tất cả ảnh/background/PDF/font phải dùng đường dẫn local trong repository. Không phụ thuộc CDN khi có thể tránh, để có thể chạy offline.

### Bố cục trung tâm
- Cuốn sách đang mở nằm chính giữa viewport, là thành phần nổi bật nhất.
- Hai trang trái/phải nằm cạnh nhau như một cuốn sách giấy thật.
- **Trang trái:** hiển thị ảnh gouache đúng page_id, chiếm phần lớn diện tích trang, rõ nét, không crop mất nhân vật hoặc hành động quan trọng.
- **Trang phải:** sử dụng background PNG đã xuất từ bộ background PDF; đặt tiêu đề/chương và lời dẫn tiếng Việt lên trên bằng HTML/CSS.
- Hai trang có cùng chiều cao, cân đối như một spread mở; ở giữa có gáy sách và bóng đổ nhẹ.
- Có độ dày giấy ở cạnh ngoài, bóng trang và chi tiết bo cong tinh tế.
- Sách phải đủ lớn để người đọc đọc thoải mái trên màn hình laptop; không thu nhỏ thành một tấm thiệp nhỏ giữa vùng trắng.
- Nền xung quanh chỉ hỗ trợ cuốn sách, không biến giao diện thành dashboard hoặc trang landing page nhiều thẻ.

### Cảm giác lật sách thật — KHÔNG PHẢI SLIDE
Bắt buộc tạo hiệu ứng lật trang có chiều sâu:
- Trang phải cong/cuộn qua gáy sách với perspective 3D.
- Có bóng đổ thay đổi theo góc lật, thấy được mặt trước/mặt sau giấy trong lúc chuyển.
- Có độ dày và cạnh giấy; chuyển động có gia tốc/deceleration tự nhiên.
- Có thể dùng PageFlip/StPageFlip nếu thư viện phù hợp đã được tích hợp/vendored; nếu không, tự làm hiệu ứng CSS 3D/JavaScript đủ thuyết phục.
- Lật bằng bấm vào góc trang, nút trước/sau, phím mũi tên và vuốt trên touch.
- Chuyển từ một spread sang spread tiếp theo bằng hiệu ứng lật một lá sách.
- Không dùng fade đơn thuần, slide ngang, chuyển cảnh toàn màn hình, zoom-to-next hoặc mỗi trang hiện như một slide PowerPoint.
- Không dùng layout dạng carousel/card deck.
- Khi lật, cuốn sách vẫn ở vị trí trung tâm; không phóng to/thu nhỏ hoặc nhảy bố cục.

### Typography — SỬA DỨT ĐIỂM LỖI FONT NHỎ VÀ KIỂU WORD
Typography phải có cảm giác sách truyện được biên tập và thiết kế, không giống văn bản Word.

Dùng cặp font có hỗ trợ tiếng Việt:
- **Lời dẫn:** ưu tiên Lora hoặc Literata (serif giàu chất sách, dễ đọc).
- **Tiêu đề chương/trang:** ưu tiên Be Vietnam Pro hoặc một display typeface có đủ dấu tiếng Việt.
- Có thể dùng một font display giàu cá tính cho tiêu đề lớn, nhưng tuyệt đối không dùng font thiếu ký tự tiếng Việt.
- Nếu license cho phép, lưu font local trong `reader/assets/fonts/` và nhúng bằng @font-face để chạy offline. Không dùng font không rõ license.
- Nếu không thể đóng gói font, dùng fallback serif đẹp như Georgia/Noto Serif cho lời dẫn và sans-serif rõ ràng cho tiêu đề; không để trình duyệt rơi về font mặc định xấu.

Kích thước tối thiểu trên desktop:
- Tiêu đề trang: **28–36 px**, có phân cấp rõ.
- Lời dẫn: **20–23 px**, line-height khoảng **1.55–1.7**.
- Nhãn chương và số trang: **13–15 px**, không làm nhỏ hơn mức dễ đọc.
- Nội dung key points/phản tư: **17–19 px**, có khoảng cách dòng và khoảng cách đoạn.
- Không để một trang có chữ dày đặc; dùng phân cấp, khoảng trắng và nhấn chữ có chọn lọc.

Trên màn hình nhỏ:
- Lời dẫn không thấp hơn 17–18 px.
- Có thể chuyển sang chế độ đọc một trang mỗi lần theo dạng cuốn sách khép/mở trên mobile, nhưng không được biến thành slide; vẫn giữ cảm giác trang giấy và hiệu ứng lật.
- Không để chữ bị cắt, tràn ra ngoài hoặc bắt người đọc cuộn trong một trang nhỏ.

### Trang phải hiển thị nội dung gì?
- Lấy nguyên văn tiêu đề và lời dẫn trong STORY_PAGES.md.
- Mỗi lời dẫn phải đi với đúng ảnh có cùng page_id.
- Trang quyết định: hiển thị câu hỏi và hai lựa chọn ở trang phải bằng control HTML đẹp, dễ bấm; không vẽ lựa chọn vào ảnh.
- Trang phản tư: hiển thị các key points và câu hỏi phản tư, vẫn dùng typography sách truyện.
- Trang kết thúc: hiển thị nội dung kết thúc tương ứng.
- Không được viết lại lời dẫn thành văn phong máy móc hoặc rút ngắn làm mất ý.
- Nếu phần phản tư nhiều chữ, dùng bố cục có phân cấp, nhưng giữ mọi nội dung học tập; không làm chữ quá nhỏ.

### Tương tác nhánh — GIỮ LOGIC CỦA TRUYỆN
- Giữ nguyên lựa chọn SAFE/EXPLORE của 4 chương.
- Khi người đọc chọn SAFE ở trang quyết định, cuốn sách lật đến đúng trang hệ quả SAFE.
- Khi chọn EXPLORE, lật đến đúng trang hệ quả EXPLORE.
- Sau trang hệ quả, tiếp tục đến trang phản tư tương ứng.
- Giữ chỉ số CSS/DES và nhật ký quyết định như logic nguồn.
- Cho phép quay lại hoặc chọn thử nhánh còn lại (Replay) mà không làm mất trải nghiệm sách.
- Ở chương cuối, xác định kết thúc dựa trên CSS/DES theo đúng điều kiện trong kịch bản; hiển thị đúng một trong bốn trang kết thúc.
- Tất cả 28 tranh vẫn nằm trong bộ PDF đầy đủ, kể cả các nhánh thay thế, dù người đọc trong một lượt chơi chỉ đi qua nhánh đã chọn.

### Điều khiển
Tối giản, đặt ở ngoài mép sách hoặc sát mép dưới:
- Trang trước / trang tiếp.
- Chỉ báo Chương x/4 và Trang x/28.
- Âm thanh lật giấy có thể bật/tắt.
- Nhật ký lựa chọn và nút thử nhánh khác nếu cần.
Không để thanh công cụ che mất tranh hoặc chữ.

---

## 9. GIAI ĐOẠN 6 — KIỂM TRA TỔNG THỂ

### Kiểm tra ảnh
- [ ] Có đủ 28 PNG truyện, mỗi page_id một ảnh.
- [ ] Nhân vật đúng, hành động đúng, phong cách Gouache thống nhất.
- [ ] Không có chữ, bong bóng thoại, panel, collage hoặc watermark.
- [ ] Không có ảnh trùng lặp hay placeholder.

### Kiểm tra PDF
- [ ] `Gouache_Illustrations_28_Pages.pdf` mở được, đúng 28 trang, mỗi trang một tranh.
- [ ] `Gouache_Right_Page_Backgrounds_28_Pages.pdf` mở được, đúng 28 trang, background không có chữ.
- [ ] Thứ tự PDF khớp page_id.
- [ ] PDF không bị kéo méo hoặc giảm chất lượng quá mức.

### Kiểm tra website
- [ ] `reader/index.html` mở được bằng local server.
- [ ] Sách nằm chính giữa trang.
- [ ] Trang trái hiện đúng ảnh; trang phải hiện đúng background và lời dẫn tương ứng.
- [ ] Font hiển thị đầy đủ dấu tiếng Việt, không lỗi ký tự.
- [ ] Cỡ chữ lớn, đọc thoải mái, không giống trang Word.
- [ ] Lật trang có hiệu ứng cong/lật giấy 3D, không phải slide/fade.
- [ ] Lựa chọn SAFE/EXPLORE đi đến đúng hệ quả.
- [ ] CSS/DES và kết thúc hoạt động đúng.
- [ ] Không có đường dẫn ảnh hỏng hoặc lỗi console nghiêm trọng.
- [ ] Chạy được offline/local theo hướng dẫn.

### Kiểm tra đồng bộ
- [ ] Ảnh trái và lời dẫn phải cùng page_id.
- [ ] Background trang phải có cùng page_id với spread tương ứng.
- [ ] Số tranh = 28; số trang background = 28; số spread truyện = 28.
- [ ] PDF tranh và PDF background có số trang bằng nhau.
- [ ] STORY_PAGES.md không bị thay đổi nội dung gốc.

---

## 10. CẤU TRÚC FILE ĐẦU RA BẮT BUỘC

Giữ nguyên tài liệu đã có, bổ sung theo cấu trúc:

```
09_Storybook_Outputs/gouache/
├── MUSE_EXECUTION_PROMPT_GOUACHE_BOOK_LAYOUT.md
├── STORY_PAGES.md
├── IMAGE_PROMPTS.md
├── CHARACTER_STYLE_SHEETS.md
├── VISUAL_STYLE_OVERRIDE.md
├── ASSET_MANIFEST.md
├── QA_REPORT.md
├── PRODUCTION_LOG.md
├── assets/
│   ├── cover.png
│   ├── characters/
│   │   ├── minh-reference.png
│   │   ├── an-reference.png
│   │   ├── hoang-reference.png
│   │   ├── chi-reference.png
│   │   ├── cyberfox-reference.png
│   │   └── teacher-tuan-reference.png
│   ├── pages/
│   │   ├── CH01-P001.png
│   │   ├── CH01-P002.png
│   │   └── ... CH04-P010.png
│   └── right-backgrounds/
│       ├── CH01-P001.png
│       ├── CH01-P002.png
│       └── ... CH04-P010.png
├── pdf/
│   ├── Gouache_Illustrations_28_Pages.pdf
│   └── Gouache_Right_Page_Backgrounds_28_Pages.pdf
└── reader/
    ├── index.html
    ├── css/
    ├── js/
    └── assets/
        └── fonts/
```

Có thể bổ sung file phụ cần thiết, nhưng không đổi tên hai PDF đầu ra bắt buộc và không đặt tất cả vào một PDF duy nhất.

---

## 11. GIT — CHỈ LÀM VIỆC TRÊN NHÁNH GOUACHE SỐ 03

- Tiếp tục làm trên branch hiện có: `muse/storybook-03-gouache`.
- Không tạo branch mới.
- Không push vào main.
- Không ghi đè hoặc sửa nội dung của 9 phong cách khác.
- Commit các ảnh, PDF, HTML và Markdown đã hoàn thành lên đúng branch này.
- Trước khi push, kiểm tra file binary đã được Git lưu thật, không chỉ có manifest.
- Cập nhật README.md, ASSET_MANIFEST.md, QA_REPORT.md và PRODUCTION_LOG.md theo trạng thái thực tế.

## 12. BÁO CÁO KẾT QUẢ — KHÔNG ĐƯỢC BÁO KHỐNG

Sau khi hoàn tất, báo cáo:
1. Branch URL và commit SHA.
2. Số ảnh truyện PNG thực tế đã tạo / tổng 28.
3. Số character reference thực tế.
4. Link PDF tranh 28 trang.
5. Link PDF background trang phải 28 trang.
6. Link `reader/index.html` và cách mở.
7. Kết quả kiểm tra hiệu ứng lật sách, typography, tiếng Việt và logic nhánh.
8. Những phần còn pending (nếu có).

Chỉ đánh dấu DONE khi ảnh, hai PDF và HTML đều tồn tại, mở được, kiểm tra được. Nếu một công cụ không hỗ trợ tạo file PDF hoặc ảnh, hãy nói rõ giới hạn và dừng ở trạng thái tương ứng; không tạo file giả, không đánh dấu generated, không tuyên bố hoàn thành.

**BẮT ĐẦU NGAY TRÊN BRANCH `muse/storybook-03-gouache`: kiểm kê file thật → tạo reference nhân vật → tạo từng tranh trang trái → PDF tranh → background trang phải → PDF background → HTML sách lật ở chính giữa trang.**
