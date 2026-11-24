# Quy tắc làm việc cho AI Agents

## Mục đích
Repository phát triển học liệu truyện tương tác/visual novel giáo dục cho học sinh THPT Việt Nam, trước mắt gắn với Tin học 11, an toàn thông tin và đạo đức số. Mọi agent cân bằng ba trục: đúng kiến thức, hấp dẫn với học sinh 15–18 tuổi và nhất quán hình ảnh.

## Thứ tự đọc bắt buộc
1. Tệp này.
2. 07_Agent_Prompts_Va_Cong_Cu/STORY_CREATION_WORKFLOW.md.
3. 07_Agent_Prompts_Va_Cong_Cu/VISUAL_STYLE_BIBLE.md.
4. 07_Agent_Prompts_Va_Cong_Cu/CHARACTER_BIBLE.md.
5. 07_Agent_Prompts_Va_Cong_Cu/STORY_PAGE_TEMPLATE.md.
6. README, kịch bản, tài liệu chương trình liên quan ở các thư mục 02, 03, 04, 06.
7. Chỉ nạp skill phù hợp tại .agents/skills/.

## Quy tắc sản phẩm
- Độc giả mặc định: học sinh THPT (15–18 tuổi), tình huống gần gũi tại Việt Nam.
- Tông giọng vui vẻ, dí dỏm, ấm áp, thông minh; không trẻ con hóa, không nhồi tiếng lóng, không giễu cợt nạn nhân.
- Mỗi trang có đúng một tranh minh họa đơn cảnh. Không chia panel, collage, montage, contact sheet, ảnh lồng ảnh hoặc nhiều thời điểm trong một canvas.
- Lời dẫn/thuyết minh tiếng Việt nằm ở đầu trang; tranh nằm bên dưới lời dẫn.
- Không đặt chữ, phụ đề, tiêu đề, logo, watermark, giao diện chữ giả hoặc bong bóng thoại vào tranh. Chữ phải do giao diện/web dựng.
- Lựa chọn tương tác (nếu có) là control UI riêng, không phải tranh thứ hai.
- Mọi trang dùng chung Visual Style Bible và Character Bible đã duyệt. Không tự đổi nét vẽ, màu, tuổi, khuôn mặt, tóc, trang phục hoặc phụ kiện.
- Mỗi prompt ảnh phải lặp style anchor và mô tả nhận diện của các nhân vật xuất hiện; không chỉ ghi “như ảnh trước”.
- Không đưa hướng dẫn kỹ thuật có thể gây hại; mô tả rủi ro ở mức nhận biết, phòng tránh và xử lý an toàn.
- Không bịa dữ kiện, số liệu, điều luật hoặc yêu cầu chương trình. Kiến thức phải được chuyên gia/nguồn trong repo kiểm chứng.

## Quy tắc viết
- Tiếng Việt tự nhiên, rõ ràng, ưu tiên câu chủ động và chi tiết cụ thể.
- Lời dẫn mặc định 35–65 từ/trang, khoảng 2–4 câu.
- Kể bằng hành động, phản ứng và chi tiết đời thường; hạn chế giảng giải khô cứng.
- Có thể trích một câu thoại ngắn trong lời dẫn; không viết trang như danh sách người nói/bong bóng thoại.
- Không lạm dụng meme/tiếng lóng nhanh lỗi thời.
- Sai lầm của nhân vật phải có hệ quả hợp lý và cơ hội phục hồi; không làm nhục nhân vật.

## Quy tắc hình ảnh
- Một trang = một tệp ảnh cuối = một cảnh liên tục = một góc nhìn chính.
- Dùng nhất quán tỷ lệ ảnh, ngôn ngữ tạo hình, ánh sáng và bảng màu.
- Dùng hình tham chiếu nhân vật đã duyệt khi công cụ hỗ trợ. Nếu chưa có, tạo character sheet trước khi sinh hàng loạt.
- Ưu tiên nhận diện nhân vật hơn độ kịch tính.
- Prompt luôn cấm chữ, nhiều panel, sai trang phục, sai tuổi, watermark và phong cách lệch.

## Bàn giao
Agent ghi tệp đã đọc, nguồn tham chiếu, quyết định, giả định còn mở, tệp đã tạo/sửa và việc cần agent sau xử lý. Không tuyên bố đã tạo ảnh, chạy test hoặc push nếu chưa làm. Không có công cụ sinh ảnh thì bàn giao prompt pack.

## Skills
Skill portable nằm tại .agents/skills/<skill-name>/SKILL.md. Chỉ nạp skill phù hợp; AGENTS.md và workflow có độ ưu tiên cao hơn skill khi xung đột.
