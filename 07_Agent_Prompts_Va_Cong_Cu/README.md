# NGĂN 7: HỆ THỐNG ĐIỀU PHỐI ĐA TÁC TỬ AI (MULTI-AGENT ORCHESTRATION SYSTEM)

---

## 🤖 1. TỔNG QUAN HỆ THỐNG ĐA TÁC TỬ (MULTI-AGENT ARCHITECTURE)

Dự án này được thiết kế theo tư duy **Multi-Agent Collaboration (Cộng tác Đa tác tử)**. Khi nhiều AI Agent cùng tham gia phát triển, bảo trì hoặc mở rộng dự án tiểu luận này, mỗi tác tử sẽ đảm nhận một vai trò chuyên biệt theo chu trình khép kín:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      CHU TRÌNH CỘNG TÁC ĐA TÁC TỬ                      │
├────────────────────────────────────────────────────────────────────────┤
│ 1. RESEARCH AGENT (Ngăn 1)                                            │
│    Cung cấp nền tảng lý luận (Constructivism, Kolb, Rest, Mayer, AIED) │
│                                   │                                    │
│                                   ▼                                    │
│ 2. CURRICULUM AGENT (Ngăn 2)                                          │
│    Xác định Yêu cầu cần đạt chuẩn SGK Tin 11 (Chủ đề B & D)            │
│                                   │                                    │
│                                   ▼                                    │
│ 3. IF GAMEPLAY DESIGNER (Ngăn 3)                                      │
│    Xây dựng cây quyết định, ma trận chỉ số, cấu trúc 9 thành phần      │
│                                   │                                    │
│                                   ▼                                    │
│ 4. STORY WRITER AGENT (Ngăn 4)                                        │
│    Sáng tác hội thoại, phân chia từng trang sách, nhánh An toàn/Khám phá│
│                                   │                                    │
│                                   ▼                                    │
│ 5. FRONTEND DEVELOPER AGENT (Ngăn 5)                                  │
│    Chuyển kịch bản thành Web lật trang tương tác HTML5/CSS3/JS         │
│                                   │                                    │
│                                   ▼                                    │
│ 6. PEDAGOGY & ASSESSMENT AGENT (Ngăn 6)                               │
│    Soạn giáo án 3 pha, phiếu học tập, Rubric đánh giá năng lực NLb     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 📑 2. DANH MỤC TÀI LIỆU TRONG NGĂN
- **`SYSTEM_AGENT_ORCHESTRATION.md`**: Bản đặc tả kiến trúc điều phối, giao thức truyền nhận dữ liệu giữa các Agent và quy tắc giải quyết xung đột ý kiến.
- **`AGENT_PROMPT_LIBRARY.md`**: Thư viện chứa đầy đủ Master Prompts chuẩn hóa (định dạng System Prompt + Task Prompt) cho tất cả 6 tác tử.

---

## 🚀 3. HƯỚNG DẪN KÍCH HOẠT NHANH MỘT AGENT
Khi bạn muốn giao việc cho một mô hình AI mới (ví dụ: Claude, ChatGPT, Gemini, Copilot):
1. Mở file `AGENT_PROMPT_LIBRARY.md`.
2. Sao chép phần Master Prompt của Agent tương ứng với công việc bạn cần làm.
3. Dán vào ô chat của AI đó kèm theo yêu cầu cụ thể của bạn.
4. AI sẽ lập tức đóng vai chuyên gia tương ứng và tuân thủ 100% các quy tắc của dự án.
