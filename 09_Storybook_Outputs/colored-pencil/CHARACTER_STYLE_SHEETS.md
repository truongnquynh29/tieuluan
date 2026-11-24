# CHARACTER_STYLE_SHEETS — Bút chì màu và phác nét tay

- Branch: `muse/storybook-05-colored-pencil`
- Phong cách: Minh họa vẽ tay bằng chì graphite và bút chì màu chất lượng cao; nét phác có kiểm soát, lớp hatch nhẹ, màu được tô nhiều lớp tạo bề mặt giấy chân thật, đường viền có nhịp tự nhiên. Palette: xanh dương, xanh lá ngọc, vàng ấm, cam san hô, đỏ gạch dịu, kem giấy; màu lên lớp nhẹ.
- Nguồn canon: CHARACTER_BIBLE.md v0.1 (PROPOSED) + story_data.js
- Trạng thái character sheet: prompt_ready (chưa có ảnh tham chiếu đã duyệt; cần tạo character sheet trước khi sinh hàng loạt, theo MASTER_PROMPT D)

## Nguồn canon
- CHARACTER_BIBLE.md v0.1 (PROPOSED, chưa duyệt ảnh mẫu) trong `07_Agent_Prompts_Va_Cong_Cu/` ở BASE_SHA.
- story_data.js: minh, an, hoang, chi, cyberfox, teacher (Thầy Tuấn).
- Chi có trong kịch bản Chương 3 và story_data.js, nhưng không có hồ sơ riêng trong CHARACTER_BIBLE.md v0.1 — ghi rõ ở đây, cần giáo viên duyệt.

## Nhận diện bất biến (không đổi ở bất kỳ trang nào)
- **minh — Minh:** Nam sinh Việt Nam 16-17 tuổi, dáng gọn năng động, tóc đen ngắn hơi rối tự nhiên, mái lệch nhẹ, gương mặt sáng. Trang phục mặc định: sơ mi đồng phục trắng, quần tối màu; bomber xanh cobalt khi ở ngoài lớp; balo navy. Màu nhận diện: cobalt blue (#4778D8).
- **an — An:** Nữ sinh Việt Nam 16-17 tuổi, dáng tự nhiên, tóc đen ngang vai gọn gàng, kẹp tóc teal nhỏ bên trái. Trang phục: sơ mi đồng phục trắng, chân váy/quần navy; cardigan teal ngoài lớp; túi màu kem. Màu nhận diện: fresh teal (#4DB6A2).
- **hoang — Hoàng:** Nam sinh Việt Nam 16-17 tuổi, tóc đen ngắn hơi gợn và có độ phồng, gương mặt hoạt bát. Trang phục: sơ mi đồng phục trắng với áo khoác vàng mù tạt; phụ kiện nhỏ màu coral. Màu nhận diện: sunshine yellow / warm coral.
- **cyberfox — CyberFox:** Cáo hoạt hình 2D cam ấm, mõm và ngực kem, mắt lớn vừa phải, visor teal hoặc phụ kiện nhỏ hình khiên số. Màu nhận diện: orange, cream, teal.
- **chi — Chi:** Nữ sinh lớp 11A, tóc đen dài xõa, mặc đồng phục trắng, dáng nhỏ, hiền lành và nhút nhát. (Bổ sung từ Chương 3 / story_data.js; chưa có trong CHARACTER_BIBLE v0.1.)
- **teacher-tuan — Thầy Tuấn:** Giáo viên Việt Nam 30-40 tuổi, tóc đen gọn, kính gọng mảnh, sơ mi xanh nhạt, quần navy, biểu cảm thân thiện. Màu nhận diện: light blue / navy.

## Quy tắc
- Giữ nguyên tuổi, giới tính, quan hệ, gương mặt nhận diện, kiểu tóc lõi, vóc dáng, trang phục cơ bản, phụ kiện và màu nhận diện ở mọi trang.
- Cùng một nhân vật có thể chuyển thể về chất liệu tạo hình theo style của branch, nhưng phải nhận ra là cùng một nhân vật.
- Character sheet phải được tạo trước loạt ảnh truyện và dùng làm ảnh tham chiếu xuyên suốt branch.


## Chuyển thể theo phong cách của branch này
- Giữ nguyên nhận diện bất biến ở trên; chỉ chuyển chất liệu, nét vẽ, shading và palette theo style anchor của branch.
- Không đổi tuổi, giới tính, quan hệ, kiểu tóc lõi, vóc dáng, trang phục cơ bản, phụ kiện hoặc màu nhận diện.
- Ảnh tham chiếu nhân vật (khi sinh được): `assets/character-sheet-minh.png`, `assets/character-sheet-an.png`, `assets/character-sheet-hoang.png`, `assets/character-sheet-cyberfox.png`, `assets/character-sheet-chi.png`, `assets/character-sheet-teacher-tuan.png` — hiện tại đang pending.
