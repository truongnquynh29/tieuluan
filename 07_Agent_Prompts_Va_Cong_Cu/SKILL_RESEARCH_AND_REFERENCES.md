# KHẢO SÁT SKILL TẠO TRUYỆN TRÊN GITHUB

## 1. Chuẩn kỹ thuật
Repository dùng định dạng Agent Skills: một thư mục cho mỗi skill, tệp SKILL.md có YAML frontmatter tối thiểu gồm name và description, nội dung hướng dẫn thao tác; có thể bổ sung reference/assets khi cần. Skill được nạp theo ngữ cảnh thay vì đưa toàn bộ tài liệu vào mọi lượt làm việc.

Nguồn:
- Agent Skills specification: https://agentskills.io/specification
- Anthropic public skills: https://github.com/anthropics/skills
- Microsoft skills documentation: https://github.com/microsoft/skills/blob/main/.github/docs/skills.md

## 2. Mẫu tham khảo
- jwynia/agent-skills — story-collaborator: cộng tác với người viết, đưa ra bản nháp/biến thể nhưng giữ quyền quyết định của tác giả. https://github.com/jwynia/agent-skills/tree/main/skills/creative/fiction/core/story-collaborator
- jwynia/agent-skills — interactive-fiction: kiểm tra lựa chọn có ý nghĩa, giới hạn phân nhánh, dùng foldback/delayed consequence và cân bằng quyền lựa chọn. https://github.com/jwynia/agent-skills/tree/main/skills/creative/fiction/application/interactive-fiction
- xcrrr/claude-skills — storyteller: cấu trúc truyện, nhân vật, cảnh, hội thoại và nhịp kể. https://github.com/xcrrr/claude-skills/tree/main/skills/writing/storyteller
- anthropics/skills — template: ví dụ tối giản về SKILL.md. https://github.com/anthropics/skills/tree/main/template

## 3. Áp dụng trong repo
Skill nội bộ được viết riêng cho bối cảnh truyện giáo dục Việt Nam, không sao chép nguyên văn skill bên ngoài. Thiết kế ưu tiên:
- planner / writer / storyboard / character / art director / reviewer;
- lời dẫn tiếng Việt ở đầu trang;
- một tranh đơn cảnh cho mỗi trang;
- Character Bible và Visual Style Bible dùng xuyên suốt;
- kiểm tra kiến thức, độ tuổi và nhất quán hình ảnh.

## 4. Tương thích
Đường dẫn .agents/skills phù hợp với các agent hỗ trợ định dạng Agent Skills; khả năng tự phát hiện còn tùy ứng dụng. Nếu môi trường chỉ quét .claude/skills hoặc .github/skills, hãy cấu hình đường dẫn hoặc đồng bộ các thư mục skill tương ứng mà không sửa nội dung SKILL.md.
