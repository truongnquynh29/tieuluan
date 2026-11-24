# LỆNH THI CÔNG CHO MUSE — GOUACHE STORYBOOK THEO ẢNH THAM CHIẾU

> **Repository:** https://github.com/truongnquynh29/tieuluan  
> **Branch bắt buộc:** `muse/storybook-03-gouache`  
> **Phong cách:** Gouache Storybook theo ảnh tham chiếu do người dùng cung cấp trong cuộc trò chuyện  
> **Đầu ra bắt buộc:** đúng 02 file PDF — một PDF 28 trang tranh minh họa bên trái, một PDF background dùng chung cho trang bên phải  
> **Phạm vi:** CHỈ sản xuất hình ảnh và hai file PDF. KHÔNG làm website, HTML/CSS/JavaScript, hiệu ứng lật trang, animation hoặc tương tác.

---

## 1. NHIỆM VỤ CỦA BẠN — ĐỌC KỸ TRƯỚC KHI LÀM

Bạn là AI Illustration Production Agent. Hãy tiếp quản nội dung truyện đã có và thực hiện đúng phần việc sản xuất hình ảnh.

Người dùng đã cung cấp một ảnh mẫu Gouache Storybook. Đây là **nguồn tham chiếu mỹ thuật quan trọng nhất** cho nhiệm vụ này. Hãy làm theo mô tả hình ảnh và bảng màu được ghi chi tiết ở Mục 3, không tự thay bằng phong cách gouache chung chung trong thư viện của bạn.

### Người dùng yêu cầu chính xác
1. Tạo ảnh minh họa cho từng trang truyện, theo đúng nội dung thuyết minh đã có.
2. Tranh được dùng ở **trang bên trái** của một cuốn sách mở.
3. Mỗi tranh tương ứng đúng một trang/lời thuyết minh có cùng page_id.
4. Sau khi tạo đủ tranh, ghép tất cả thành **một PDF duy nhất gồm 28 trang tranh**.
5. Tạo **một background trống dùng chung cho toàn bộ các trang bên phải**, rồi xuất thành **một PDF riêng chỉ có 01 trang background mẫu**. Background này sẽ được bên phát triển website tái sử dụng cho cả 28 trang.
6. Không viết thêm thoại, không viết lại lời dẫn, không thêm chữ vào tranh hoặc background.
7. Không dựng website, không viết HTML/CSS/JS, không làm hiệu ứng chuyển trang, không làm hiệu ứng lật sách, không tạo nút hay logic tương tác. Đó là công việc của agent khác.

**Chỉ tập trung hoàn thành hai PDF và các file PNG nguồn cần thiết để kiểm tra/chỉnh sửa PDF.**

---

## 2. ĐỌC NGUỒN NỘI DUNG TRƯỚC KHI SINH ẢNH

Làm việc trên branch `muse/storybook-03-gouache`. Đọc các file sau:

1. `AGENTS.md`
2. `07_Agent_Prompts_Va_Cong_Cu/CHARACTER_BIBLE.md`
3. `07_Agent_Prompts_Va_Cong_Cu/VISUAL_STYLE_BIBLE.md`
4. `08_Muse_Storybook_Prompts/PROMPT_03_GOUACHE_STORYBOOK.md`
5. `09_Storybook_Outputs/gouache/STORY_PAGES.md`
6. `09_Storybook_Outputs/gouache/IMAGE_PROMPTS.md`
7. `09_Storybook_Outputs/gouache/CHARACTER_STYLE_SHEETS.md`
8. `09_Storybook_Outputs/gouache/ASSET_MANIFEST.md`
9. `09_Storybook_Outputs/gouache/CONTENT_AUDIT.md`
10. `09_Storybook_Outputs/gouache/QA_REPORT.md`

Dùng `STORY_PAGES.md` làm nguồn để hiểu chính xác cảnh nào cần vẽ ở mỗi trang. Dùng lời dẫn để hiểu bối cảnh, diễn biến và cảm xúc, **nhưng không chép lời dẫn hoặc thoại vào ảnh**.

### Khóa nội dung
- Giữ đúng 4 chương và 28 page_id đang có.
- Không tự viết lại lời dẫn, không biên tập thoại, không sáng tác thêm tình tiết.
- Không đổi tên, tuổi, vai trò, quan hệ hoặc hành động của nhân vật.
- Không bỏ trang nhánh An toàn/Khám phá hoặc trang kết thúc.
- Không gộp nhiều page_id vào một ảnh.
- Không tạo một câu chuyện mới chỉ vì muốn ảnh đẹp hơn.

### Danh sách 28 trang theo đúng thứ tự PDF
- Chương 1: `CH01-P001`, `CH01-P002`, `CH01-P003`, `CH01-P004`, `CH01-P005`, `CH01-P006`.
- Chương 2: `CH02-P001`, `CH02-P002`, `CH02-P003`, `CH02-P004`, `CH02-P005`, `CH02-P006`.
- Chương 3: `CH03-P001`, `CH03-P002`, `CH03-P003`, `CH03-P004`, `CH03-P005`, `CH03-P006`.
- Chương 4: `CH04-P001` đến `CH04-P010`.

**Tổng cộng: 28 ảnh nội dung — PDF tranh phải có đúng 28 trang, không thêm trang bìa.**

---

## 3. PHÂN TÍCH ẢNH THAM CHIẾU — PHONG CÁCH PHẢI BÁM SÁT

Ảnh mẫu người dùng cung cấp là một tranh minh họa sách truyện có cảm giác vẽ tay bằng gouache/matte paint. Hãy tái hiện **ngôn ngữ tạo hình, chất liệu, độ mềm, cách phối sáng và bảng màu** của mẫu, không sao chép nguyên xi nhân vật hoặc bố cục cụ thể trong ảnh.

### 3.1. Chất liệu và nét vẽ
- Digital gouache / hand-painted storybook illustration.
- Mảng màu gouache đục, matte, có độ phủ và chiều sâu; không bóng nhựa.
- Nét cọ nhìn thấy được nhưng mềm, tự nhiên, có chủ ý; một số cạnh hình hơi loang/không tuyệt đối sắc như vector.
- Có lớp màu chồng, vệt cọ ngắn và texture giấy/vải vẽ rất nhẹ.
- Hình khối được dựng bằng mảng màu; tránh viền đen dày bao quanh tất cả vật thể.
- Đường viền chỉ xuất hiện có chọn lọc ở tóc, mắt, trang phục và các điểm cần nhấn.
- Viền nhân vật mềm, chuyển màu êm ở da, tóc và nền; vẫn phải đủ nét để nhận diện hành động.
- Không dùng render 3D, CGI, photorealism, vector phẳng, anime/manga, pixel art, watercolor loang nhòe hoặc comic outline.

### 3.2. Cách tạo hình nhân vật
- Nhân vật có gương mặt tròn mềm vừa phải, mắt sáng và biểu cảm rõ, mũi/miệng nhỏ gọn, má có sắc hồng ấm nhẹ.
- Tóc được chia thành từng lọn/mảng lớn có vệt sáng và bóng bằng nét cọ, không dùng từng sợi tóc siêu thực.
- Dáng người tự nhiên, cử chỉ thân thiện và dễ đọc; bàn tay, tư thế cầm điện thoại/laptop/sách phải đúng hành động.
- Cảm xúc ấm áp, hồn nhiên, gần gũi; ưu tiên vẻ đẹp minh họa sách truyện hơn vẻ đẹp ảnh chụp.
- Có chiều sâu không gian: nhân vật chính rõ, nhân vật phụ và bối cảnh lùi nhẹ hơn.

**LƯU Ý CỰC KỲ QUAN TRỌNG VỀ ĐỘ TUỔI:** ảnh tham chiếu có nhân vật tạo hình rất trẻ. Truyện này dành cho học sinh lớp 11, nên Minh, An, Hoàng, Chi phải vẫn nhận ra là học sinh THPT khoảng 16–17 tuổi. Hãy giữ chất liệu, nét cọ, mắt biểu cảm và sắc độ của mẫu nhưng điều chỉnh tỷ lệ cơ thể, chiều cao, khuôn mặt, trang phục và thần thái cho tuổi thiếu niên. **Không biến học sinh lớp 11 thành trẻ mẫu giáo/tiểu học; không chibi hóa quá mức.**

### 3.3. Bảng màu lấy cảm hứng từ ảnh mẫu
Các mã dưới đây là màu tham chiếu gần đúng được lấy từ ảnh người dùng cung cấp. Hãy dùng chúng như palette nhất quán xuyên suốt cuốn truyện, không coi là các mã bắt buộc phải xuất hiện đồng thời trong mọi ảnh.

| Vai trò | Màu tham chiếu | Mã |
|---|---|---|
| Nền xanh sage chủ đạo | Dusty sage green | `#7F9990` |
| Nền sage sáng | Soft sage grey | `#929D91` |
| Xanh xám nhạt | Muted celadon | `#9EB0A8` |
| Kem giấy / vùng sáng | Warm ivory | `#F1E5D1` |
| Kem be trung tính | Oat beige | `#DACEBC` |
| Vàng đất ấm | Golden ochre | `#DA9A60` |
| Cam đất | Burnt orange | `#C57D49` |
| Nâu tóc / gỗ | Warm chestnut | `#784227` |
| Nâu sáng | Soft umber | `#9F7552` |
| Nâu than | Warm charcoal | `#3B362E` |
| Olive xám | Muted olive | `#747768` |
| Da và má ấm | Peach skin | `#E5B082` |

#### Quy tắc dùng màu
- Ưu tiên xanh sage/xanh xám dịu làm nền xa, không gian lớp học hoặc mảng nền lớn.
- Dùng kem ngà/ivory cho vùng sáng, giấy, ánh sáng dịu.
- Dùng vàng đất, ochre và cam đất làm điểm nhấn, ánh nắng, lá cây, đồ vật và chi tiết ấm.
- Dùng nâu hạt dẻ, nâu gỗ và nâu than cho tóc, bóng đổ, bàn ghế và chi tiết tối.
- Màu da thiên peach ấm tự nhiên, có sắc hồng phấn rất nhẹ ở má.
- Giữ tổng thể hơi trầm, dịu, hoài niệm và ấm áp; không dùng neon, cyan điện tử, tím neon, xanh dạ quang hoặc màu bão hòa gắt.
- Không biến ảnh thành đơn sắc. Mỗi ảnh vẫn cần phân biệt rõ da, tóc, đồng phục, đạo cụ và môi trường.

### 3.4. Ánh sáng và không khí
- Ánh sáng tán xạ, dịu, ấm; có vùng sáng kem lan nhẹ ở phía sau hoặc trên nhân vật.
- Bóng đổ mềm, không đen đặc hoặc có cạnh cứng như ảnh 3D.
- Có thể dùng ánh nắng vàng dịu, bụi sáng nhẹ hoặc lớp nền mờ để tạo cảm giác kỳ diệu của sách truyện.
- Không khí thân thiện, thơ mộng và giàu cảm xúc, nhưng bối cảnh vẫn phải nhận ra là đời sống học đường hiện đại.

### 3.5. Bố cục và cách kể bằng hình
- Mỗi ảnh là một khoảnh khắc duy nhất, có hành động chính rõ ràng.
- Ưu tiên bố cục chân dung/toàn thân vừa đủ, trung cảnh hoặc toàn cảnh có chiều sâu; không cắt mất bàn tay/đạo cụ quan trọng.
- Nhân vật phải thực sự làm hành động trong nội dung trang: nhìn, chỉ, cầm, chạy, trao, an ủi, phản ứng, thao tác với thiết bị.
- Không chỉ vẽ biểu tượng trừu tượng, icon, màn hình hoặc vật thể mà thiếu nhân vật khi nội dung yêu cầu nhân vật hành động.
- Dùng bối cảnh Việt Nam hiện đại: quán trà sữa, phòng máy, lớp học, hành lang, sân trường, hội trường, phòng điều khiển.
- Không bê nguyên bố cục 2 nhân vật đứng giữa và các bạn nhỏ ở hậu cảnh của ảnh mẫu cho mọi trang. Hãy bám nội dung riêng từng page_id.

---

## 4. CHARACTER CONSISTENCY — GIỮ NHÂN VẬT NHƯ KỊCH BẢN GỐC

Dùng `CHARACTER_BIBLE.md` và `CHARACTER_STYLE_SHEETS.md` làm nguồn canon. Các nhân vật chính/phụ hiện có gồm Minh, An, Hoàng, Chi, CyberFox và Thầy Tuấn.

- Minh: nam sinh lớp 11, 16–17 tuổi; tóc đen ngắn hơi rối, dáng năng động; nhận diện cobalt/blue theo Character Bible.
- An: nữ sinh lớp 11, 16–17 tuổi; tóc đen ngang vai và kẹp tóc teal nhỏ bên trái; nhận diện sage/teal.
- Hoàng: nam sinh lớp 11, 16–17 tuổi; tóc đen ngắn hơi gợn, dáng hoạt bát; nhận diện vàng đất/coral.
- Chi: nữ sinh lớp 11A; giữ mô tả đã có trong CHARACTER_STYLE_SHEETS.md và CONTENT_AUDIT.md, không tự đổi thành nhân vật khác.
- CyberFox: cáo hoạt hình cố vấn không gian số; giữ nguyên hình dạng tai, mõm, đuôi, tỷ lệ và phụ kiện qua mọi trang.
- Thầy Tuấn: giáo viên Tin học; giữ kính, kiểu tóc, trang phục và dáng vẻ thân thiện đã mô tả.

Trước khi sinh hàng loạt:
1. Chuẩn hóa ảnh tham chiếu nhân vật theo phong cách gouache và độ tuổi THPT.
2. Lưu các reference trong `09_Storybook_Outputs/gouache/assets/characters/`.
3. Sử dụng reference nhất quán cho 28 ảnh.
4. Không thay đổi khuôn mặt, kiểu tóc lõi, trang phục cơ bản, phụ kiện nhận diện hoặc màu nhận diện giữa các trang.

Character sheets chỉ là tài liệu nội bộ để giữ continuity. **Không đưa character sheets vào PDF tranh 28 trang.**

---

## 5. GIAI ĐOẠN A — TẠO 28 TRANH MINH HỌA TRANG TRÁI

Đây là công việc chính và phải làm trước background.

### 5.1. Định dạng mỗi tranh
- Tỷ lệ: **4:5 dọc**, phù hợp một trang sách bên trái.
- Độ phân giải mục tiêu: tối thiểu 2000 × 2500 px; khuyến nghị 2400 × 3000 px nếu công cụ hỗ trợ.
- Định dạng nguồn: PNG, sRGB.
- Một page_id = một ảnh độc lập = một cảnh duy nhất.
- Không tạo ảnh ghép, comic strip, nhiều panel, split screen, collage, montage hoặc contact sheet.
- Không đặt lời dẫn, thoại, balloon, chữ tiêu đề, chữ trang trí, nhãn, số trang, logo hoặc watermark vào ảnh.
- Không để viền đen kiểu letterbox ở trên/dưới; ảnh phải lấp đúng khung trang dọc.
- Không crop mất đầu, tay, đạo cụ hoặc hành động chủ đạo.

### 5.2. Đường dẫn và tên file
Lưu đúng tên theo page_id:
`09_Storybook_Outputs/gouache/assets/pages/CH01-P001.png`  
`09_Storybook_Outputs/gouache/assets/pages/CH01-P002.png`  
...  
`09_Storybook_Outputs/gouache/assets/pages/CH04-P010.png`

Không dùng tên chung kiểu image1.png, final.png hoặc page-new.png.

### 5.3. Quy trình tạo ảnh
1. Đọc mô tả cảnh của CH01-P001 trong STORY_PAGES.md.
2. Dùng phong cách và palette tại Mục 3 để tạo tranh có nhân vật đang hành động đúng cảnh.
3. Kiểm tra ảnh đầu tiên: đúng độ tuổi, đúng nhân vật, đúng hành động, đúng gouache, đúng palette.
4. Nếu đạt thì khóa prompt/style/character reference và tiếp tục tạo từng page_id còn lại.
5. Từng ảnh phải được kiểm tra với lời dẫn và mô tả cảnh của đúng trang.
6. Khi cần lựa chọn SAFE/EXPLORE, thể hiện sự phân vân qua biểu cảm, tư thế và đạo cụ trong một cảnh duy nhất; không vẽ hai phương án thành hai panel.
7. Trang phản tư vẫn minh họa nhân vật/cố vấn trong bối cảnh truyện; không biến thành trang slide kiến thức.
8. Các trang kết thúc phải là tranh kể chuyện có nhân vật và cảm xúc, không phải infographic kết quả.
9. Nếu có ảnh sai cảnh, sai người, sai màu hoặc lỗi giải phẫu đáng kể, hãy tạo lại trước khi đưa vào PDF.

### 5.4. Map hình ảnh với lời dẫn
Tạo hoặc cập nhật `ASSET_MANIFEST.md` với bảng:
`page_id | narration title | image_asset_id | image file | dimensions | status | QA`.

Lời dẫn lấy từ STORY_PAGES.md để biết hình cần kể gì. Không sửa lời dẫn và không yêu cầu model vẽ chữ trong ảnh.

### 5.5. Gate A — điều kiện được xuất PDF
Chỉ chuyển sang bước ghép PDF khi:
- [ ] Đủ 28 file PNG thực tế, không phải placeholder.
- [ ] Đúng 28 page_id, đúng thứ tự.
- [ ] 28 ảnh đều mở được, không rỗng, không hỏng.
- [ ] Mỗi ảnh có đúng một cảnh, một hành động chính.
- [ ] Nhân vật nhận diện thống nhất.
- [ ] Style gouache và bảng màu thống nhất.
- [ ] Không có chữ/thoại/panel/collage/letterbox trong ảnh.

---

## 6. GIAI ĐOẠN B — GHÉP PDF TRANH MINH HỌA BÊN TRÁI

Sau khi Gate A đạt, ghép đúng 28 PNG thành một PDF.

### File bắt buộc
`09_Storybook_Outputs/gouache/pdf/Gouache_Left_Illustrations_28_Pages.pdf`

### Quy tắc PDF tranh
- Đúng **28 trang PDF**.
- Trang PDF 1 là CH01-P001.
- Trang PDF cuối là CH04-P010.
- Thứ tự theo danh sách page_id ở Mục 2.
- Một trang PDF chứa một ảnh duy nhất, full bleed trong vùng an toàn, không chữ.
- Không thêm bìa, lời dẫn, tiêu đề, số trang hoặc ghi chú.
- Giữ ảnh đúng tỷ lệ 4:5, không kéo giãn.
- Giữ chất lượng cao, không nén mờ/nhòe.
- Có thể thêm lề trắng rất nhỏ nếu cần để tránh cắt tranh, nhưng ưu tiên trang ảnh full-page.

### Kiểm tra PDF
- Mở PDF và xem ít nhất trang 1, 2, 3, 12, 18, 24 và 28.
- Xác nhận đúng số trang bằng công cụ đọc PDF metadata hoặc PDF reader.
- Đối chiếu page_id với ảnh nguồn.
- Nếu PDF sai thứ tự hoặc thiếu trang, phải xuất lại.

---

## 7. GIAI ĐOẠN C — TẠO MỘT BACKGROUND DÙNG CHUNG CHO TRANG BÊN PHẢI

Chỉ bắt đầu sau khi PDF tranh bên trái đã hoàn thành.

Người dùng muốn **một nền trang phải duy nhất dùng chung cho toàn bộ 28 trang**. Vì vậy chỉ tạo **01 background master**, không tạo 28 background khác nhau.

### 7.1. Ngôn ngữ thiết kế background
- Nền giấy sách màu warm ivory/cream theo ảnh mẫu.
- Texture giấy gouache rất nhẹ, matte, có hạt giấy tinh tế.
- Ở vùng mép hoặc góc có các mảng wash màu sage/xanh xám, ochre/vàng đất và nâu ấm thật nhẹ.
- Có thể có một viền mảnh hữu cơ hoặc vài nét cọ trang trí nhỏ ở rìa ngoài.
- Background phải đồng điệu với tranh trái nhưng nhẹ hơn, ít chi tiết hơn và không cạnh tranh với chữ.
- Vùng trung tâm dành cho lời dẫn phải sạch, sáng, tương phản tốt.
- Giữ khoảng trống an toàn tối thiểu 75–80% diện tích trang để hệ thống sau này đặt tiêu đề và lời dẫn.
- Bố cục tinh tế như giấy trang sách minh họa, không giống mẫu PowerPoint, trang Word, giấy chứng nhận hoặc slide học tập.

### 7.2. Những thứ TUYỆT ĐỐI KHÔNG có trên background
- Không chữ, không tiêu đề, không lời dẫn, không số trang.
- Không thoại, không speech bubble.
- Không nhân vật, không chân dung, không tranh minh họa chính.
- Không icon lớn, biểu tượng công nghệ lớn hoặc infographic.
- Không watermark, logo hoặc đường dẫn.
- Không có họa tiết đậm ở giữa trang.
- Không tạo các vùng trang trí làm giảm độ đọc của chữ.

### 7.3. Định dạng
Tạo background 4:5 dọc, độ phân giải mục tiêu 2000 × 2500 px hoặc cao hơn.

Lưu file PNG nguồn:
`09_Storybook_Outputs/gouache/assets/backgrounds/right-page-background.png`

### 7.4. PDF background riêng
Tên file bắt buộc:
`09_Storybook_Outputs/gouache/pdf/Gouache_Right_Page_Background_Master.pdf`

PDF này phải có **đúng 01 trang duy nhất**. Đây là background mẫu để hệ thống web/agent frontend dùng lại cho tất cả 28 trang bên phải. Không lặp 28 bản giống nhau trong PDF. Không ghép với PDF tranh trái.

---

## 8. PHẠM VI KHÔNG ĐƯỢC LÀM — MUSE KHÔNG PHỤ TRÁCH WEBSITE

Sau khi hoàn thành hai PDF, dừng ở bàn giao sản phẩm hình ảnh.

**KHÔNG thực hiện các việc sau:**
- Không tạo hoặc chỉnh sửa `index.html`.
- Không tạo hoặc chỉnh sửa CSS/JavaScript.
- Không tạo flipbook engine.
- Không làm hiệu ứng lật trang 3D/2D.
- Không làm slide transition, carousel hoặc animation.
- Không thiết kế giao diện sách hai trang.
- Không tạo nút điều hướng, nút chọn SAFE/EXPLORE hoặc logic chấm điểm.
- Không sửa `05_Web_Truyen_Tuong_Tac/`.
- Không viết lại thoại, không viết lại lời dẫn, không tạo nội dung truyện mới.
- Không ghép lời dẫn vào background PDF hoặc tranh PDF.

Những việc này thuộc trách nhiệm của agent phát triển website ở giai đoạn sau.

---

## 9. CẤU TRÚC ĐẦU RA

Giữ nguyên các tài liệu có sẵn. Bổ sung file ảnh/PDF như sau:

```
09_Storybook_Outputs/gouache/
├── STORY_PAGES.md                  # Chỉ đọc, giữ nguyên
├── IMAGE_PROMPTS.md                # Có thể cập nhật prompt hình nếu cần, không sửa truyện
├── CHARACTER_STYLE_SHEETS.md       # Bổ sung reference/canon khi cần
├── ASSET_MANIFEST.md               # Cập nhật trạng thái file thật
├── QA_REPORT.md                    # Ghi QA thực tế
├── PRODUCTION_LOG.md               # Nhật ký công việc
├── assets/
│   ├── characters/                 # Reference nhân vật, không đưa vào PDF
│   ├── pages/
│   │   ├── CH01-P001.png
│   │   ├── CH01-P002.png
│   │   └── ... CH04-P010.png
│   └── backgrounds/
│       └── right-page-background.png
└── pdf/
    ├── Gouache_Left_Illustrations_28_Pages.pdf
    └── Gouache_Right_Page_Background_Master.pdf
```

**Hai PDF trên là hai sản phẩm bàn giao chính thức.** PNG nguồn và character references chỉ là asset kỹ thuật để kiểm tra, sửa và tái sử dụng.

---

## 10. KIỂM TRA VÀ BÀN GIAO

### QA tranh trái
- [ ] Có 28 ảnh PNG thực tế.
- [ ] Đúng 28 page_id và đúng thứ tự.
- [ ] Mỗi ảnh kể đúng cảnh khớp với lời dẫn tương ứng.
- [ ] Nhân vật là học sinh THPT, không bị trẻ hóa.
- [ ] Đúng chất liệu và palette theo ảnh mẫu.
- [ ] Không chữ, không thoại, không logo, không watermark, không panel.
- [ ] Không có ảnh lặp/placeholder.

### QA PDF trái
- [ ] PDF mở được.
- [ ] Có đúng 28 trang.
- [ ] Trang 1 khớp CH01-P001.
- [ ] Trang 28 khớp CH04-P010.
- [ ] Thứ tự không bị đảo.
- [ ] Không có văn bản.

### QA background phải
- [ ] Một background master duy nhất.
- [ ] Đúng palette sage/ivory/ochre/warm brown.
- [ ] Trung tâm sáng, sạch, đủ chỗ đặt lời dẫn.
- [ ] Không có chữ, nhân vật hoặc tranh.
- [ ] Có PNG nguồn.

### QA PDF background
- [ ] PDF mở được.
- [ ] Chính xác 01 trang.
- [ ] Đúng tỷ lệ 4:5.
- [ ] Không chứa lời dẫn hoặc tiêu đề.

### Cập nhật tài liệu
Cập nhật:
- `ASSET_MANIFEST.md`: chỉ đánh dấu generated nếu file thật tồn tại.
- `QA_REPORT.md`: số ảnh, số trang PDF, kết quả kiểm tra thật.
- `PRODUCTION_LOG.md`: các bước đã thực hiện và vấn đề còn tồn tại.

Không dùng con số do manifest cũ khai báo nếu file thực tế không có. Không báo hoàn thành hai PDF khi chưa mở kiểm tra được chúng.

### Git
- Chỉ commit lên branch `muse/storybook-03-gouache`.
- Không tạo branch mới.
- Không push lên main.
- Không sửa nhánh/phong cách số 01, 02 hoặc 04–10.
- Commit ảnh PNG nguồn, hai PDF và tài liệu QA lên branch hiện tại.
- Sau khi push, cung cấp đường dẫn trực tiếp tới hai PDF và commit SHA.

---

## 11. KẾT QUẢ CUỐI CÙNG CẦN TRẢ VỀ

Chỉ báo cáo hoàn tất khi cả hai file PDF đã tồn tại thật, mở được và đã kiểm tra.

Báo cáo theo mẫu:

| Sản phẩm | Đường dẫn GitHub | Số trang | Trạng thái |
|---|---|---:|---|
| PDF tranh trái | `pdf/Gouache_Left_Illustrations_28_Pages.pdf` | 28 | Generated / Pending |
| PDF background phải | `pdf/Gouache_Right_Page_Background_Master.pdf` | 1 | Generated / Pending |

Kèm:
- Số PNG minh họa thực tế đã sinh / 28.
- Số character reference đã tạo.
- Xác nhận đúng palette ảnh mẫu.
- Xác nhận PDF tranh không có chữ.
- Xác nhận PDF background là một trang trống dùng chung.
- Branch URL và commit SHA.
- Những việc còn pending nếu có.

**BẮT ĐẦU NGAY:** kiểm kê file thật → đọc nội dung 28 trang → khóa nhân vật → tạo lần lượt 28 tranh gouache trang trái → xuất PDF 28 trang → tạo một background trang phải → xuất PDF background 1 trang → QA → push lên đúng branch. Sau đó dừng, không làm website hoặc hiệu ứng tương tác.
