/**
 * CƠ SỞ DỮ LIỆU KỊCH BẢN TRUYỆN TƯƠNG TÁC
 * "NGƯỜI GÁC ĐỀN KHÔNG GIAN SỐ: HÀNH TRÌNH CỦA MINH VÀ AN"
 * Dành cho học sinh lớp 11 - Chủ đề B & D môn Tin học GDPT 2018
 */

const STORY_DATA = {
    meta: {
        title: "Người Gác Đền Không Gian Số",
        subtitle: "Hành trình trưởng thành trên mạng của Minh và An",
        targetAudience: "Học sinh lớp 11 (Chương trình GDPT 2018)",
        initialScores: {
            css: 50, // Cyber Safety Score (0 - 100)
            des: 50  // Digital Ethics Score (0 - 100)
        }
    },
    characters: {
        minh: { name: "Minh", role: "Học sinh lớp 11 (Nhân vật chính)", avatar: "🧑‍💻", color: "#3b82f6" },
        an: { name: "An", role: "Bạn thân cùng bàn", avatar: "👩‍🎓", color: "#10b981" },
        hoang: { name: "Hoàng", role: "Bạn cùng lớp", avatar: "🧢", color: "#f59e0b" },
        chi: { name: "Chi", role: "Nữ sinh lớp 11A", avatar: "👧", color: "#ec4899" },
        cyberfox: { name: "Cố vấn CyberFox", role: "Chuyên gia an ninh mạng ảo", avatar: "🦊", color: "#8b5cf6" },
        teacher: { name: "Thầy Tuấn", role: "Giáo viên Tin học", avatar: "👨‍🏫", color: "#06b6d4" }
    },
    chapters: [
        {
            id: 1,
            caseId: "CASE_01_WIFI_PHISHING",
            title: "Chương 1: Mắt bão Wi-Fi và Tin nhắn lạ",
            topic: "Chủ đề B: Mạng máy tính & An toàn thông tin",
            description: "Rủi ro Wi-Fi công cộng không mật khẩu, trang đăng nhập giả mạo (Phishing) và xác thực hai yếu tố (2FA).",
            pages: [
                {
                    pageNumber: 1,
                    type: "story",
                    title: "Buổi chiều tại quán Star-Tea",
                    badge: "Bối cảnh mở đầu",
                    dialogues: [
                        { speaker: "minh", text: "Trời ơi An ơi! Hết sạch dung lượng 4G tốc độ cao rồi! Bài thuyết trình nhóm nặng tới 400MB, tải kiểu này đến tối mất!" },
                        { speaker: "an", text: "Bình tĩnh nào Minh. Wi-Fi miễn phí của quán đông người dùng nên hơi chậm thôi, chịu khó đợi tí nhé." },
                        { speaker: "hoang", text: "Hai bạn cần mạng gấp à? Tớ vừa quét thấy một sóng Wi-Fi lạ cực mạnh tên là 'StarTea_VIP_Free_HighSpeed_5G', không cần mật khẩu! Tớ vừa vào xem video 4K vèo vèo!" }
                    ],
                    illustration: "wifi_trap",
                    narration: "Minh mở danh sách Wi-Fi trên điện thoại. Cột sóng 'StarTea_VIP_Free_HighSpeed_5G' căng đét hiện lên đầu tiên đầy mời gọi..."
                },
                {
                    pageNumber: 2,
                    type: "story",
                    title: "Bẫy ngọt ngào và Tin nhắn trúng thưởng",
                    badge: "Nút thắt xuất hiện",
                    dialogues: [
                        { speaker: "minh", text: "Uầy! Vừa bấm kết nối nó nhảy ra trang web thông báo: 'CHÚC MỪNG BẠN TRÚNG VOUCHER 500.000Đ TẠI QUÁN! Đăng nhập Facebook để nhận mã SMS'! Voucher xịn quá An ơi!" },
                        { speaker: "an", text: "Khoan đã Minh! Nhìn kỹ thanh địa chỉ xem! Đường dẫn là 'http://star-tea-voucher-free.online' chứ đâu phải Facebook thật! Không có biểu tượng ổ khóa HTTPS, tên miền lại rất kỳ lạ!" },
                        { speaker: "hoang", text: "Ôi dào, web khuyến mãi liên kết nó thế mà! Tớ vừa nhập thử có sao đâu, không nhận nhanh là hết lượt bây giờ đấy!" }
                    ],
                    illustration: "phishing_alert",
                    narration: "Một bên là sự tò mò muốn nhận voucher 500k và mạng tốc độ cao để xong bài tập; một bên là linh cảm bất an và lời cảnh báo xác đáng của An..."
                },
                {
                    pageNumber: 3,
                    type: "decision",
                    title: "Điểm Rẽ Tương Tác: Minh Sẽ Làm Gì?",
                    badge: "Bạn hãy đưa ra quyết định",
                    question: "Trước trang web yêu cầu đăng nhập tài khoản Facebook trên mạng Wi-Fi lạ, bạn chọn phương án nào cho Minh?",
                    options: [
                        {
                            branch: "SAFE",
                            tag: "🛡️ HƯỚNG AN TOÀN",
                            title: "Dừng lại kiểm chứng, bảo vệ dữ liệu cá nhân",
                            desc: "Ngắt kết nối Wi-Fi lạ ngay lập tức. Hỏi trực tiếp nhân viên quán về mạng chính thống. Bật xác thực 2 bước (2FA) bảo vệ tài khoản.",
                            scoreEffect: { css: +15, des: +10 }
                        },
                        {
                            branch: "EXPLORE",
                            tag: "⚡ HƯỚNG KHÁM PHÁ / MẠO HIỂM",
                            title: "Tò mò thử nghiệm, chấp nhận rủi ro nhận voucher",
                            desc: "Bấm đăng nhập tài khoản Facebook để khám phá cơ chế tặng voucher của trang web và tận hưởng Wi-Fi tốc độ cao tải bài tập.",
                            scoreEffect: { css: -15, des: -5 }
                        }
                    ]
                },
                {
                    pageNumber: 4,
                    branchPage: "SAFE",
                    type: "consequence",
                    title: "Hệ Quả: Bản Lĩnh Của Người Cẩn Trọng",
                    badge: "Nhánh An Toàn",
                    dialogues: [
                        { speaker: "minh", text: "Thôi Hoàng ơi, không có bữa trưa nào miễn phí cả. Mạng không mật khẩu mà đòi mật khẩu Facebook thì 99% là lừa đảo Phishing rồi!" },
                        { speaker: "minh", text: "(Hỏi chị thu ngân): Chị ơi, quán mình có mạng StarTea_VIP_Free không ạ?" },
                        { speaker: "an", text: "Chị thu ngân giật mình bảo quán chỉ có mạng StarTea_Coffee_Guest có pass in trên hóa đơn thôi! Mạng kia là do kẻ xấu lập ra để bẫy tài khoản khách!" }
                    ],
                    illustration: "safe_shield",
                    narration: "Minh lập tức ngắt kết nối và bật xác thực 2 yếu tố (2FA). Nhóm bạn an toàn tuyệt đối và giúp quán phát hiện điểm phát sóng giả mạo (Evil Twin)."
                },
                {
                    pageNumber: 4,
                    branchPage: "EXPLORE",
                    type: "consequence",
                    title: "Hệ Quả: Cơn Ác Mộng Chiếm Đoạt Tài Khoản",
                    badge: "Nhánh Khám Phá Mạo Hiểm",
                    dialogues: [
                        { speaker: "minh", text: "Quái lạ... Nhập tài khoản mật khẩu xong nó báo 'Mã khuyến mãi đã hết hạn' rồi đứng im?" },
                        { speaker: "minh", text: "(15 phút sau, điện thoại rung bần bật): Alo mẹ à?... Con có nhắn tin nhờ mẹ chuyển khoản 2 triệu vào số tài khoản lạ nào đâu?!" },
                        { speaker: "an", text: "Trời ơi Minh ơi! Tài khoản Facebook của cậu vừa bị kẻ tấn công chiếm quyền (Session Hijacking) và đang gửi tin nhắn vay tiền khắp bạn bè trong danh bạ kìa!" }
                    ],
                    illustration: "hacked_screen",
                    narration: "Kẻ tấn công trên mạng Wi-Fi công cộng giả mạo đã thu thập trọn gói tài khoản của Minh. Minh toát mồ hôi hột tìm cách khóa tài khoản trong hoảng loạn."
                },
                {
                    pageNumber: 5,
                    type: "reflection",
                    title: "Góc Phản Tư Cùng Cố Vấn CyberFox",
                    badge: "Tổng kết bài học sư phạm",
                    dialogues: [
                        { speaker: "cyberfox", text: "Chào các bạn! Tình huống vừa rồi là kỹ thuật tấn công kinh điển: Điểm truy cập song sinh ác quỷ (Evil Twin AP) kết hợp Trang lừa đảo (Phishing)!" }
                    ],
                    keyPoints: [
                        "Cảnh giác tối đa với Wi-Fi công cộng mở: Kẻ xấu có thể nghe lén và đánh cắp thông tin truyền qua mạng không mã hóa.",
                        "Kiểm tra kỹ URL: Luôn nhìn giao thức 'https://' và tên miền chính thức, đề phòng tên miền nhái gần giống.",
                        "Kích hoạt Xác thực 2 bước (2FA): Đây là tấm khiên vững chắc nhất bảo vệ bạn dù mật khẩu có bị lộ."
                    ],
                    reflectionQuestion: "Nếu phát hiện bạn bè hoặc người thân bị chiếm đoạt tài khoản Facebook, em sẽ hướng dẫn họ 3 bước cấp bách nào để giảm thiểu thiệt hại?"
                }
            ]
        },
        {
            id: 2,
            caseId: "CASE_02_AI_ETHICS_COPYRIGHT",
            title: "Chương 2: Cám dỗ AI và Cạm bẫy bản quyền",
            topic: "Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số",
            description: "Liêm chính học thuật khi sử dụng Generative AI, hiện tượng ảo giác AI (Hallucination) và tôn trọng bản quyền số Creative Commons.",
            pages: [
                {
                    pageNumber: 1,
                    type: "story",
                    title: "Đêm muộn trước hạn chót cuộc thi",
                    badge: "Bối cảnh mở đầu",
                    dialogues: [
                        { speaker: "minh", text: "Chỉ còn 3 tiếng nữa là đóng cổng nộp bài cuộc thi Sáng tạo số cấp trường rồi! Bài luận 2.000 từ về AI trong giáo dục mà nhóm mình mới viết được phần mở đầu!" },
                        { speaker: "an", text: "Cố lên Minh, chúng mình đã có kết quả khảo sát thực tế từ 100 bạn trong trường rồi, bám sát số liệu mà phân tích nhé." },
                        { speaker: "hoang", text: "Cần gì thức đêm cày cuốc! Tớ vừa có bản bẻ khóa (Crack) của công cụ AI OmniGen-Pro. Quăng đề bài vào là 30 giây sau có bài luận chuẩn Tiến sĩ kèm ảnh vẽ độc quyền luôn!" }
                    ],
                    illustration: "ai_bot_glow",
                    narration: "Đồng hồ điểm 21:00. Sự mệt mỏi và áp lực nộp bài đúng hạn đè nặng lên vai của hai bạn..."
                },
                {
                    pageNumber: 2,
                    type: "story",
                    title: "Bài luận hoàn hảo và Những hạt sạn vô hình",
                    badge: "Nút thắt xuất hiện",
                    dialogues: [
                        { speaker: "minh", text: "Uầy! AI viết hay khủng khiếp An ơi! Có cả trích dẫn nghiên cứu năm 2025 của 'Giáo sư Johnathan Smith Đại học Quốc gia' nữa này! Ảnh minh họa cũng vẽ cực kỳ nghệ thuật!" },
                        { speaker: "an", text: "Khoan đã! Tớ tra Google tên Giáo sư Johnathan Smith hoàn toàn không tồn tại! Đó là Ảo giác AI (AI Hallucination) - AI tự bịa số liệu cho mượt tai đấy!" },
                        { speaker: "an", text: "Bức tranh này còn có chữ ký chìm của họa sĩ Lâm Art trên ArtStation. AI này đã quét trộm tác phẩm có bản quyền! Nộp bài này là phạm lỗi đạo văn và xâm phạm bản quyền nghiêm trọng!" }
                    ],
                    illustration: "hallucination_check",
                    narration: "Hạn chót 23:59 đang đến gần từng phút một. Minh phải quyết định xem sẽ nộp bài bằng cách nào..."
                },
                {
                    pageNumber: 3,
                    type: "decision",
                    title: "Điểm Rẽ Tương Tác: Liêm Chính Hay Đốt Cháy Giai Đoạn?",
                    badge: "Bạn hãy đưa ra quyết định",
                    question: "Đứng trước bài luận do AI sinh ra hoàn chỉnh nhưng có số liệu bịa đặt và ảnh vi phạm bản quyền, bạn chọn hướng nào cho Minh?",
                    options: [
                        {
                            branch: "SAFE",
                            tag: "🛡️ HƯỚNG AN TOÀN",
                            title: "Liêm chính học thuật, làm chủ công cụ có trách nhiệm",
                            desc: "Dùng AI gợi ý dàn bài và phản biện ý tưởng. Tự viết thân bài dựa trên số liệu khảo sát thực của nhóm. Tìm ảnh bản quyền mở Creative Commons và trích dẫn minh bạch việc dùng AI.",
                            scoreEffect: { css: +10, des: +15 }
                        },
                        {
                            branch: "EXPLORE",
                            tag: "⚡ HƯỚNG KHÁM PHÁ / MẠO HIỂM",
                            title: "Thử thách công nghệ, copy trọn gói xem giám khảo có biết?",
                            desc: "Sao chép nguyên văn 100% bài luận của AI, giữ nguyên các trích dẫn bịa đặt và dùng tranh vẽ vi phạm bản quyền nộp bài cho kịp giờ.",
                            scoreEffect: { css: -10, des: -15 }
                        }
                    ]
                },
                {
                    pageNumber: 4,
                    branchPage: "SAFE",
                    type: "consequence",
                    title: "Hệ Quả: Trái Ngọt Của Sự Trung Thực",
                    badge: "Nhánh An Toàn",
                    dialogues: [
                        { speaker: "minh", text: "An nói đúng! Giải thưởng chỉ có ý nghĩa khi nó là chất xám chân chính của chúng mình!" },
                        { speaker: "minh", text: "Chúng mình thêm mục 'Tuyên bố minh bạch: Bài viết có dùng AI gợi ý cấu trúc, toàn bộ phân tích dựa trên khảo sát thực tế'." },
                        { speaker: "teacher", text: "Thầy đánh giá rất cao nhóm em! Bài viết trung thực, số liệu địa phương sống động và thể hiện tinh thần liêm chính học thuật xuất sắc. Chúc mừng giải Nhất!" }
                    ],
                    illustration: "award_win",
                    narration: "Nhóm Minh giành giải Nhất trong sự khâm phục của bạn bè. Minh học được cách làm chủ AI như người bạn đồng hành chứ không để AI thay thế tư duy."
                },
                {
                    pageNumber: 4,
                    branchPage: "EXPLORE",
                    type: "consequence",
                    title: "Hệ Quả: Bản Cáo Trạng Trước Toàn Trường",
                    badge: "Nhánh Khám Phá Mạo Hiểm",
                    dialogues: [
                        { speaker: "minh", text: "Sao máy tính mình tự nhiên quạt kêu rú ầm ĩ thế này? À dính mã độc đào coin từ file crack OmniGen-Pro rồi..." },
                        { speaker: "teacher", text: "Minh và Hoàng lên văn phòng gặp thầy ngay! Hệ thống quét AI phát hiện bài viết của các em trùng khớp 98% văn phong máy. Các tài liệu trích dẫn đều là giả mạo!" },
                        { speaker: "minh", text: "Em... em xin lỗi thầy... Em chỉ muốn nộp bài cho kịp giờ..." }
                    ],
                    illustration: "plagiarism_caught",
                    narration: "Bài thi bị hủy tư cách ngay lập tức vì đạo văn và vi phạm bản quyền. Minh và Hoàng bị hạ một bậc hạnh kiểm trong sự bẽ bàng."
                },
                {
                    pageNumber: 5,
                    type: "reflection",
                    title: "Góc Phản Tư Cùng Cố Vấn CyberFox",
                    badge: "Tổng kết bài học sư phạm",
                    dialogues: [
                        { speaker: "cyberfox", text: "AI là công cụ khuếch đại trí tuệ tuyệt vời, nhưng nếu sao chép nguyên văn mà không tư duy, bạn đang tự biến mình thành con rối của thuật toán!" }
                    ],
                    keyPoints: [
                        "Hiểu về Ảo giác AI (Hallucination): Luôn kiểm chứng (Fact-checking) các sự thật, số liệu do AI cung cấp trước khi tin tưởng.",
                        "Liêm chính học thuật: Sử dụng AI để học hỏi, không sao chép nguyên văn nộp bài. Khai báo minh bạch việc sử dụng công cụ số.",
                        "Tôn trọng bản quyền tác giả: Sử dụng tài nguyên có giấy phép Creative Commons (CC) và ghi nguồn tác giả rõ ràng."
                    ],
                    reflectionQuestion: "Theo em, một học sinh sử dụng ChatGPT để viết toàn bộ bài văn nộp cho cô giáo thì bạn đó đã đánh mất những kỹ năng quan trọng nào của bản thân?"
                }
            ]
        },
        {
            id: 3,
            caseId: "CASE_03_CYBERBULLYING_PRIVACY",
            title: "Chương 3: Bí mật nhóm kín và Vết chân số",
            topic: "Chủ đề D & B: Quyền riêng tư & Văn hóa ứng xử mạng",
            description: "Bảo vệ dữ liệu cá nhân, nhận diện và ngăn chặn bạo lực mạng (Cyberbullying), ý thức về dấu chân kỹ thuật số (Digital Footprint).",
            pages: [
                {
                    pageNumber: 1,
                    type: "story",
                    title: "Cơn bão thị phi giờ ra chơi",
                    badge: "Bối cảnh mở đầu",
                    dialogues: [
                        { speaker: "minh", text: "An ơi, hôm nay lớp mình có chuyện gì lạ thế? Sao ai cũng vừa dán mắt vào điện thoại vừa thì thầm cười cợt vậy?" },
                        { speaker: "hoang", text: "Minh ơi vào ngay nhóm kín 'Góc Khuất THPT' đi! Có acc clone vừa leak nhật ký riêng tư và ảnh dìm hàng bạn Chi nhảy nhót trong phòng! Cả trường đang vào hóng kìa!" },
                        { speaker: "an", text: "Các cậu dừng lại đi! Đây là hình ảnh đời tư bị kẻ xấu hack rồi phát tán trái phép! Các cậu có thấy Chi đang khóc nấc ở góc hành lang kia không?!" }
                    ],
                    illustration: "corridor_rumors",
                    narration: "Hành lang lớp học ngập tràn tiếng xì xào. Bạn Chi hiền lành đang ngồi ôm mặt khóc nức nở trong sự bất lực..."
                },
                {
                    pageNumber: 2,
                    type: "story",
                    title: "Cám dỗ 'Hóng biến' và Sức ép đám đông",
                    badge: "Nút thắt xuất hiện",
                    dialogues: [
                        { speaker: "hoang", text: "Toàn tài khoản ẩn danh thôi mà, ai biết mình là ai đâu! Minh vào nhóm share link đi, tớ phong làm phó nhóm luôn! Vui là chính mà!" },
                        { speaker: "an", text: "Minh! Mạng xã hội không bao giờ thực sự ẩn danh! Mỗi nút share, mỗi cái icon 'haha' lúc này đều là một nhát dao cứa vào tâm lý bạn mình!" },
                        { speaker: "an", text: "Đừng để sự tò mò biến cậu thành kẻ tiếp tay cho bạo lực mạng!" }
                    ],
                    illustration: "peer_pressure",
                    narration: "Link mời nhóm kín Telegram hiện lên màn hình của Minh. Một bên là sự hối thúc của Hoàng và tâm lý tò mò đám đông; một bên là lời can ngăn chân thành của An..."
                },
                {
                    pageNumber: 3,
                    type: "decision",
                    title: "Điểm Rẽ Tương Tác: Lên Tiếng Hay Đồng Lõa?",
                    badge: "Bạn hãy đưa ra quyết định",
                    question: "Trước đường link nhóm kín đang bôi nhọ hình ảnh riêng tư của bạn Chi, bạn chọn cách hành xử nào cho Minh?",
                    options: [
                        {
                            branch: "SAFE",
                            tag: "🛡️ HƯỚNG AN TOÀN & ĐẠO ĐỨC",
                            title: "Bảo vệ bạn bè, ngăn chặn bạo lực mạng và giữ sạch vết chân số",
                            desc: "Từ chối tham gia nhóm bôi nhọ. Chụp màn hình bằng chứng vi phạm báo cáo ẩn danh cho cô giáo chủ nhiệm. Đến an ủi Chi và hướng dẫn bạn báo cáo gỡ ảnh với nền tảng.",
                            scoreEffect: { css: +10, des: +15 }
                        },
                        {
                            branch: "EXPLORE",
                            tag: "⚡ HƯỚNG KHÁM PHÁ / HÓNG BIẾN",
                            title: "Tò mò hóng biến, chia sẻ link để xem thêm nhiều bí mật",
                            desc: "Tham gia nhóm kín, đọc tin nhắn rò rỉ và share link cho các nhóm chat khác để hóng thêm drama và xem phản ứng của mọi người.",
                            scoreEffect: { css: -10, des: -15 }
                        }
                    ]
                },
                {
                    pageNumber: 4,
                    branchPage: "SAFE",
                    type: "consequence",
                    title: "Hệ Quả: Ngọn Lửa Trắc Ẩn Giữa Không Gian Số",
                    badge: "Nhánh An Toàn",
                    dialogues: [
                        { speaker: "minh", text: "Tớ không tham gia! Phát tán hình ảnh riêng tư của người khác là vi phạm pháp luật và làm tổn thương bạn Chi nghiêm trọng!" },
                        { speaker: "minh", text: "(Gửi bằng chứng cho cô chủ nhiệm): Em gửi cô bằng chứng nhóm kín đang quấy rối bạn Chi ạ." },
                        { speaker: "chi", text: "Cảm ơn Minh và An nhiều lắm... Nếu không có hai bạn can thiệp kịp thời, chắc mình không còn dám đến trường nữa..." }
                    ],
                    illustration: "friendship_support",
                    narration: "Nhà trường phối hợp đánh sập nhóm kín độc hại chỉ sau 2 tiếng. Minh và An được tuyên dương vì tinh thần dũng cảm bảo vệ bạn bè trên không gian mạng."
                },
                {
                    pageNumber: 4,
                    branchPage: "EXPLORE",
                    type: "consequence",
                    title: "Hệ Quả: Vết Nhơ Kỹ Thuật Số Vĩnh Viễn",
                    badge: "Nhánh Khám Phá Mạo Hiểm",
                    dialogues: [
                        { speaker: "minh", text: "Vào xem thử tí thôi mà... Ai ngờ mọi người chia sẻ chóng mặt đến mức bạn Chi ngất xỉu phải đi bệnh viện cấp cứu..." },
                        { speaker: "teacher", text: "Minh và Hoàng vào phòng Hội đồng kỷ luật! Cơ quan an ninh mạng đã trích xuất địa chỉ IP và nhật ký chia sẻ link bôi nhọ của các em!" },
                        { speaker: "minh", text: "Em hối hận lắm rồi... Dấu vết số tiêu cực này sẽ ghi vào học bạ theo em suốt đời..." }
                    ],
                    illustration: "disciplinary_hearing",
                    narration: "Minh bị kỷ luật đình chỉ học tập 1 tuần. Dấu chân số độc hại trở thành vết đen khó xóa trong hồ sơ học sinh."
                },
                {
                    pageNumber: 5,
                    type: "reflection",
                    title: "Góc Phản Tư Cùng Cố Vấn CyberFox",
                    badge: "Tổng kết bài học sư phạm",
                    dialogues: [
                        { speaker: "cyberfox", text: "Trên Internet không có sự ẩn danh tuyệt đối! Mọi hành động của bạn đều để lại một Dấu chân kỹ thuật số (Digital Footprint) định hình nhân cách bạn!" }
                    ],
                    keyPoints: [
                        "Quyền riêng tư dữ liệu: Hình ảnh, tin nhắn cá nhân được Luật An ninh mạng 2018 bảo vệ nghiêm ngặt. Phát tán khi chưa có sự đồng ý là hành vi phạm pháp.",
                        "Quy tắc Upstander: Đừng làm kẻ bàng quan đồng lõa (Bystander). Hãy dũng cảm lên tiếng hoặc báo cáo người lớn khi thấy bạn bè bị bạo lực mạng.",
                        "Tự soi chiếu dấu chân số: Trước khi comment hay share, hãy tự hỏi: 'Nếu người thân hoặc thầy cô nhìn thấy bài đăng này, mình có cảm thấy tự hào không?'"
                    ],
                    reflectionQuestion: "Em sẽ phản ứng như thế nào nếu bản thân vô tình bị người khác chụp lén và chế ảnh dìm hàng trên mạng xã hội?"
                }
            ]
        },
        {
            id: 4,
            caseId: "CASE_04_INCIDENT_RESPONSE_ENDINGS",
            title: "Chương 4: Khúc cua quyết định - Hội nghị Thách thức số",
            topic: "Tổng hợp Chủ đề B & D: Ứng phó sự cố an toàn thông tin & Công dân số",
            description: "Xử lý tấn công từ chối dịch vụ (DDoS), sao lưu phục hồi dữ liệu đám mây, tuân thủ pháp luật và xác lập kết cục trưởng thành số.",
            pages: [
                {
                    pageNumber: 1,
                    type: "story",
                    title: "Ngày hội công nghệ và Cơn bão DDoS",
                    badge: "Bối cảnh mở đầu",
                    dialogues: [
                        { speaker: "minh", text: "Hơn 1.500 học sinh đang tham gia bình chọn trên Cổng thông tin Ngày hội Chuyển đổi số của trường mình rồi An ơi!" },
                        { speaker: "an", text: "Báo động đỏ Minh ơi! Lưu lượng mạng tăng vọt bất thường! Có hơn 50.000 yêu cầu ảo đổ dồn mỗi giây từ mạng máy tính ma (Botnet)! Cổng vote sập rồi!" },
                        { speaker: "minh", text: "Màn hình hiện thông báo đầu lâu tống tiền: 'NỘP TẬP TIN ĐỀ THI TRÊN MÁY CHỦ TRONG 10 PHÚT HOẶC TOÀN BỘ SỰ KIỆN SẼ BỊ PHÁ HỦY'!" }
                    ],
                    illustration: "ddos_attack",
                    narration: "Cả sân trường bắt đầu xôn xao vì bảng điện tử ngừng hoạt động. Thời gian đếm ngược chỉ còn chưa đầy 8 phút..."
                },
                {
                    pageNumber: 2,
                    type: "story",
                    title: "Chiếc USB đen và Lời mời trả đũa",
                    badge: "Nút thắt xuất hiện",
                    dialogues: [
                        { speaker: "hoang", text: "Tớ lần ra IP kẻ tấn công rồi! Tớ có sẵn script mã độc tấn công ngược (Counter-attack exploit) tải trên Dark Web đây! Minh cắm USB này vào máy chủ trường rồi bắn sập máy chủ nó đi!" },
                        { speaker: "an", text: "Dừng lại ngay Hoàng! Luật An ninh mạng nghiêm cấm tấn công mạng trả đũa! Mã độc không rõ nguồn gốc sẽ làm nhiễm virus tống tiền toàn bộ máy chủ trường!" },
                        { speaker: "an", text: "Chúng ta phải kích hoạt Quy trình ứng phó sự cố chuẩn: Cô lập phân vùng, bật tường lửa đám mây, khôi phục từ bản sao lưu và báo thầy Tuấn!" }
                    ],
                    illustration: "incident_response_choice",
                    narration: "Minh đứng giữa chiếc USB mã độc đầy cám dỗ trả thù của Hoàng và bảng điều khiển phòng thủ mạng chuyên nghiệp của An..."
                },
                {
                    pageNumber: 3,
                    type: "decision",
                    title: "Điểm Rẽ Tương Tác: Thử Làm Hacker Hay Chuyên Gia An Toàn?",
                    badge: "Quyết định then chốt cuối cùng",
                    question: "Đứng trước cuộc tấn công DDoS và tống tiền hệ thống trường, bạn chọn hướng giải quyết nào cho Minh?",
                    options: [
                        {
                            branch: "SAFE",
                            tag: "🛡️ HƯỚNG AN TOÀN CHUYÊN NGHIỆP",
                            title: "Quy trình ứng phó chuẩn mực, làm chủ giải pháp chuyên nghiệp",
                            desc: "Từ chối chiếc USB của Hoàng. Kích hoạt tường lửa đám mây Cloudflare lọc bot rác. Chuyển cổng vote sang máy chủ dự phòng đám mây và báo cáo thầy Tuấn.",
                            scoreEffect: { css: +15, des: +10 }
                        },
                        {
                            branch: "EXPLORE",
                            tag: "⚡ HƯỚNG KHÁM PHÁ / MẠO HIỂM",
                            title: "Tự ý làm hacker trả đũa, mạo hiểm chạy script tấn công ngược",
                            desc: "Cắm chiếc USB chứa mã độc của Hoàng vào máy chủ trường, chạy script tấn công ngược để 'thử tay nghề hacker' xem ai giỏi hơn.",
                            scoreEffect: { css: -20, des: -20 }
                        }
                    ]
                },
                {
                    pageNumber: 4,
                    branchPage: "SAFE",
                    type: "consequence",
                    title: "Hệ Quả: Chiến Thắng Của Bản Lĩnh Công Nghệ",
                    badge: "Nhánh An Toàn",
                    dialogues: [
                        { speaker: "minh", text: "Chúng ta là những người bảo vệ không gian số, không phải tội phạm mạng trả đũa mù quáng!" },
                        { speaker: "minh", text: "Bật tường lửa đám mây... Đồng bộ bản sao lưu 5 phút trước... Xong! Hệ thống đã khôi phục 100%!" },
                        { speaker: "teacher", text: "Xuất sắc lắm hai em! Các em đã cứu nguy cho ngày hội trường bằng tư duy an toàn mạng chuyên nghiệp!" }
                    ],
                    illustration: "cyber_hero",
                    narration: "Cổng bình chọn sáng đèn trở lại trong tiếng reo hò của 1.500 học sinh. Minh và An được thầy Hiệu trưởng trao hoa vinh danh."
                },
                {
                    pageNumber: 4,
                    branchPage: "EXPLORE",
                    type: "consequence",
                    title: "Hệ Quả: Thảm Họa Mã Độc Tống Tiền",
                    badge: "Nhánh Khám Phá Mạo Hiểm",
                    dialogues: [
                        { speaker: "minh", text: "Chạy script... Ủa sao toàn bộ màn hình chuyển màu đỏ rực thế này?!" },
                        { speaker: "hoang", text: "Thôi chết rồi... File trên Dark Web thực chất là mã độc tống tiền Ransomware! Nó mã hóa sạch toàn bộ cơ sở dữ liệu học bạ và điểm số của trường rồi!" },
                        { speaker: "teacher", text: "Các em đã phạm phải sai lầm nghiêm trọng! Cảnh sát an ninh mạng đang tới để điều tra hành vi sử dụng mã độc trái phép!" }
                    ],
                    illustration: "ransomware_locked",
                    narration: "Toàn bộ hệ thống trường học tê liệt hoàn toàn. Minh và Hoàng bàng hoàng nhận ra cái giá đắt của sự mạo hiểm thiếu hiểu biết."
                },
                {
                    pageNumber: 5,
                    type: "final_results",
                    title: "Tổng Kết Hành Trình: Người Gác Đền Không Gian Số",
                    badge: "Mở khóa kết cục số của bạn",
                    dialogues: [
                        { speaker: "cyberfox", text: "Chúc mừng bạn đã hoàn thành chuyến hành trình 4 chương thử thách! Giờ là lúc kiểm tra danh hiệu công dân số của bạn!" }
                    ]
                }
            ]
        }
    ],
    endings: {
        ending1: {
            id: "ENDING_GUARDIAN",
            condition: "css >= 70 && des >= 70",
            badge: "🏆 KẾT CỤC 1",
            title: "HIỆP SĨ AN TOÀN SỐ (Digital Guardian)",
            themeColor: "#10b981",
            icon: "🛡️",
            summary: "Bạn là hình mẫu lý tưởng của một Công dân số gương mẫu thời đại mới! Bạn không chỉ nắm vững các kỹ thuật phòng thủ mạng, mật khẩu mạnh, 2FA, nhận diện lừa đảo mà còn sở hữu trái tim nhân văn, biết bảo vệ bạn bè trước bạo lực mạng và giữ gìn liêm chính học thuật.",
            advice: "Hãy tiếp tục lan tỏa kiến thức và trở thành Thủ lĩnh số trong ngôi trường của bạn!"
        },
        ending2: {
            id: "ENDING_RECKLESS_EXPLORER",
            condition: "css < 70 && des >= 70",
            badge: "⚡ KẾT CỤC 2",
            title: "NHÀ THÁM HIỂM LIỀU LĨNH (Reckless Explorer)",
            themeColor: "#3b82f6",
            icon: "🧭",
            summary: "Bạn có phẩm chất đạo đức tuyệt vời, luôn muốn giúp đỡ người khác và ứng xử văn minh. Tuy nhiên, sự ngây thơ và thiếu cẩn trọng về mặt kỹ thuật khiến bạn dễ sập bẫy Wi-Fi giả, mã độc hoặc phishing.",
            advice: "Lòng tốt trên mạng chỉ có thể tỏa sáng khi bạn biết tự bảo vệ chính mình! Hãy trang bị thêm kiến thức bảo mật kỹ thuật nhé."
        },
        ending3: {
            id: "ENDING_PRAGMATIC_TECHIE",
            condition: "css >= 70 && des < 70",
            badge: "💻 KẾT CỤC 3",
            title: "KỸ THUẬT GIA ÍCH KỶ (Pragmatic Techie)",
            themeColor: "#f59e0b",
            icon: "⚙️",
            summary: "Kỹ năng công nghệ của bạn rất đáng nể, bạn biết cách bảo vệ máy tính và tài khoản của mình an toàn. Nhưng bạn lại bàng quan trước việc bạn bè bị tổn thương trên mạng, sẵn sàng dùng AI thiếu trung thực để lấy điểm cao.",
            advice: "Công nghệ chỉ là công cụ, đạo đức mới là kim chỉ nam định hình con người bạn! Hãy quan tâm và thấu cảm hơn với cộng đồng mạng."
        },
        ending4: {
            id: "ENDING_VULNERABLE",
            condition: "css < 70 && des < 70",
            badge: "🚨 KẾT CỤC 4",
            title: "BÁO ĐỘNG ĐỎ KHÔNG GIAN SỐ (Digital Vulnerability)",
            themeColor: "#ef4444",
            icon: "🔴",
            summary: "Bạn đã để sự tò mò và áp lực nhất thời dẫn dắt vào những sai lầm nghiêm trọng: tài khoản bị xâm nhập, máy tính nhiễm mã độc, vướng vào thị phi và vi phạm bản quyền.",
            advice: "Đừng nản lòng! Đây là môi trường mô phỏng an toàn để bạn học hỏi từ sai lầm. Hãy nhấn nút 'Chơi lại' để đưa ra những quyết định sáng suốt hơn!"
        }
    }
};
