/**
 * PIXEL ART 16-BIT VISUAL NOVEL ENGINE
 * Nhánh: muse/storybook-07-pixel-art
 * Chạy 28 trang chuẩn của Storybook với hiệu ứng Chiptune & Pixel Rendering
 */

class PixelArtStoryEngine {
    constructor(pagesData) {
        this.pages = pagesData;
        this.currentIndex = 0; // 0 đến 27
        this.scores = { css: 50, des: 50 };
        this.history = [];
        this.soundEnabled = true;
        this.scanlinesEnabled = true;
        this.audioCtx = null;
        this.userBranchChoices = {}; // Lưu lựa chọn của từng chương (ch01, ch02, ch03, ch04)

        this.initDOM();
        this.initAudio();
        this.initEvents();
        this.renderPage();
    }

    initDOM() {
        this.dom = {
            cssValue: document.getElementById('cssValue'),
            desValue: document.getElementById('desValue'),
            cssFill: document.getElementById('cssFill'),
            desFill: document.getElementById('desFill'),
            sceneBadge: document.getElementById('sceneBadge'),
            locationBadge: document.getElementById('locationBadge'),
            canvasSlot: document.getElementById('pixelCanvasSlot'),
            speakerName: document.getElementById('speakerName'),
            pageIdText: document.getElementById('pageIdText'),
            dialogueText: document.getElementById('dialogueText'),
            decisionPanel: document.getElementById('decisionPanel'),
            btnPrev: document.getElementById('btnPrev'),
            btnNext: document.getElementById('btnNext'),
            btnSound: document.getElementById('btnSound'),
            btnScanlines: document.getElementById('btnScanlines'),
            btnSwitchStyle: document.getElementById('btnSwitchStyle'),
            btnReplay: document.getElementById('btnReplay')
        };
    }

    initEvents() {
        this.dom.btnPrev.addEventListener('click', () => this.prevPage());
        this.dom.btnNext.addEventListener('click', () => this.nextPage());
        this.dom.btnSound.addEventListener('click', () => this.toggleSound());
        this.dom.btnScanlines.addEventListener('click', () => this.toggleScanlines());
        if (this.dom.btnSwitchStyle) {
            this.dom.btnSwitchStyle.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }
        if (this.dom.btnReplay) {
            this.dom.btnReplay.addEventListener('click', () => this.restart());
        }

        // Bàn phím điều khiển
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                if (this.dom.decisionPanel.style.display !== 'block') {
                    this.nextPage();
                }
            } else if (e.key === 'ArrowLeft') {
                this.prevPage();
            } else if (e.key === '1') {
                const b1 = document.getElementById('btnSafeChoice');
                if (b1) b1.click();
            } else if (e.key === '2') {
                const b2 = document.getElementById('btnExploreChoice');
                if (b2) b2.click();
            }
        });
    }

    /* Web Audio API Chiptune 8-bit / 16-bit Synthesizer */
    initAudio() {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            this.audioCtx = new AudioContext();
        }
    }

    playBleep() {
        if (!this.soundEnabled || !this.audioCtx) return;
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
        const ctx = this.audioCtx;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
    }

    playCoinSound() {
        if (!this.soundEnabled || !this.audioCtx) return;
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
        const ctx = this.audioCtx;
        const now = ctx.currentTime;
        
        // Chiptune coin arpeggio: B5 (987.77) -> E6 (1318.51)
        [987.77, 1318.51].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(freq, now + idx * 0.09);

            gain.gain.setValueAtTime(0.15, now + idx * 0.09);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.2);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.09);
            osc.stop(now + idx * 0.09 + 0.2);
        });
    }

    playGlitchSound() {
        if (!this.soundEnabled || !this.audioCtx) return;
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
        const ctx = this.audioCtx;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(80, now + 0.25);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
    }

    playFanfare() {
        if (!this.soundEnabled || !this.audioCtx) return;
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
        const ctx = this.audioCtx;
        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.12);

            gain.gain.setValueAtTime(0.2, now + idx * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.12);
            osc.stop(now + idx * 0.12 + 0.35);
        });
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        this.dom.btnSound.textContent = this.soundEnabled ? 'SOUND: ON' : 'SOUND: OFF';
    }

    toggleScanlines() {
        this.scanlinesEnabled = !this.scanlinesEnabled;
        document.body.classList.toggle('scanlines', this.scanlinesEnabled);
        this.dom.btnScanlines.textContent = this.scanlinesEnabled ? 'CRT: ON' : 'CRT: OFF';
    }

    updateScoresHUD() {
        this.scores.css = Math.max(0, Math.min(100, this.scores.css));
        this.scores.des = Math.max(0, Math.min(100, this.scores.des));

        this.dom.cssValue.textContent = `${this.scores.css}/100`;
        this.dom.desValue.textContent = `${this.scores.des}/100`;
        this.dom.cssFill.style.width = `${this.scores.css}%`;
        this.dom.desFill.style.width = `${this.scores.des}%`;
    }

    renderPage() {
        const page = this.pages[this.currentIndex];
        this.updateScoresHUD();

        // Cập nhật thông tin Header
        this.dom.pageIdText.textContent = `${page.page_id} (${this.currentIndex + 1}/28)`;
        this.dom.speakerName.textContent = page.title;
        this.dom.sceneBadge.textContent = page.page_type.toUpperCase();
        this.dom.locationBadge.textContent = page.chapter_id;

        // Render tranh Pixel Art 16-bit
        this.renderPixelArtwork(page);

        // Hiển thị lời dẫn tiếng Việt chuẩn
        this.dom.dialogueText.innerHTML = page.narration + '<span class="dialogue-cursor"></span>';

        // Xử lý loại trang: nếu là Decision
        if (page.page_type === 'decision' && page.question && page.safe_choice && page.explore_choice) {
            this.dom.decisionPanel.style.display = 'block';
            this.dom.btnNext.style.display = 'none';

            this.dom.decisionPanel.innerHTML = `
                <div class="decision-question-text">▶ QUYẾT ĐỊNH CỦA BẠN: ${page.question}</div>
                <div class="choice-option-row">
                    <button class="pixel-choice-btn choice-btn-safe" id="btnSafeChoice">
                        <span class="choice-arrow">1. ▶</span>
                        <div class="choice-content">
                            <div class="choice-title">${page.safe_choice.text}</div>
                            <div class="choice-desc">${page.safe_choice.consequence}</div>
                            <span class="choice-badge-delta" style="color: var(--pixel-teal-light);">
                                [EFFECT: ${page.safe_choice.state_change}]
                            </span>
                        </div>
                    </button>
                    <button class="pixel-choice-btn choice-btn-explore" id="btnExploreChoice">
                        <span class="choice-arrow">2. ▶</span>
                        <div class="choice-content">
                            <div class="choice-title">${page.explore_choice.text}</div>
                            <div class="choice-desc">${page.explore_choice.consequence}</div>
                            <span class="choice-badge-delta" style="color: var(--pixel-coral-light);">
                                [EFFECT: ${page.explore_choice.state_change}]
                            </span>
                        </div>
                    </button>
                </div>
            `;

            document.getElementById('btnSafeChoice').addEventListener('click', () => {
                this.chooseBranch('SAFE', page.chapter_id);
            });
            document.getElementById('btnExploreChoice').addEventListener('click', () => {
                this.chooseBranch('EXPLORE', page.chapter_id);
            });
        } else {
            this.dom.decisionPanel.style.display = 'none';
            this.dom.btnNext.style.display = 'inline-block';
        }

        // Kiểm tra nút Prev/Next
        this.dom.btnPrev.disabled = (this.currentIndex === 0);
        if (this.currentIndex >= this.pages.length - 1) {
            this.dom.btnNext.disabled = true;
            this.playFanfare();
        } else {
            this.dom.btnNext.disabled = false;
        }
    }

    chooseBranch(branch, chapterId) {
        this.userBranchChoices[chapterId] = branch;
        const page = this.pages[this.currentIndex];

        if (branch === 'SAFE') {
            this.scores.css += 15;
            this.scores.des += 10;
            this.playCoinSound();
            // Lật sang trang hệ quả SAFE (trang kế tiếp)
            this.currentIndex++;
        } else {
            this.scores.css -= 15;
            this.scores.des -= 5;
            this.playGlitchSound();
            // Lật sang trang hệ quả EXPLORE (bỏ qua trang SAFE, tức là +2)
            this.currentIndex += 2;
        }

        this.renderPage();
    }

    nextPage() {
        const page = this.pages[this.currentIndex];
        
        // Nếu vừa xem xong trang hệ quả SAFE (CHxx-P004), thì bỏ qua trang hệ quả EXPLORE (CHxx-P005) để sang thẳng trang Phản tư (CHxx-P006)
        if (page.page_id === 'CH01-P004' || page.page_id === 'CH02-P004' || page.page_id === 'CH03-P004' || page.page_id === 'CH04-P004') {
            this.currentIndex += 2; // nhảy qua P005 sang P006
            this.playBleep();
            this.renderPage();
            return;
        }

        // Nếu đang ở CH04-P006 (Tổng kết hành trình), tự động nhảy đến đúng trang kết thúc (CH04-P007 -> P010) dựa trên điểm
        if (page.page_id === 'CH04-P006') {
            if (this.scores.css >= 70 && this.scores.des >= 70) {
                this.currentIndex = this.pages.findIndex(p => p.page_id === 'CH04-P007'); // Ending 1
            } else if (this.scores.css < 70 && this.scores.des >= 70) {
                this.currentIndex = this.pages.findIndex(p => p.page_id === 'CH04-P008'); // Ending 2
            } else if (this.scores.css >= 70 && this.scores.des < 70) {
                this.currentIndex = this.pages.findIndex(p => p.page_id === 'CH04-P009'); // Ending 3
            } else {
                this.currentIndex = this.pages.findIndex(p => p.page_id === 'CH04-P010'); // Ending 4
            }
            this.playFanfare();
            this.renderPage();
            return;
        }

        if (this.currentIndex < this.pages.length - 1) {
            this.currentIndex++;
            this.playBleep();
            this.renderPage();
        }
    }

    prevPage() {
        if (this.currentIndex > 0) {
            // Nếu đang ở trang Phản tư (P006), lùi về đúng nhánh hệ quả mà người dùng đã chọn trước đó
            const page = this.pages[this.currentIndex];
            if (page.page_id === 'CH01-P006' || page.page_id === 'CH02-P006' || page.page_id === 'CH03-P006' || page.page_id === 'CH04-P006') {
                const chap = page.chapter_id;
                if (this.userBranchChoices[chap] === 'SAFE') {
                    this.currentIndex -= 2; // lùi về P004
                } else {
                    this.currentIndex -= 1; // lùi về P005
                }
                this.playBleep();
                this.renderPage();
                return;
            }

            // Nếu đang ở trang Ending (CH04-P007..P010), lùi về trang CH04-P006
            if (page.page_id.startsWith('CH04-P00') || page.page_id === 'CH04-P010') {
                this.currentIndex = this.pages.findIndex(p => p.page_id === 'CH04-P006');
                this.playBleep();
                this.renderPage();
                return;
            }

            this.currentIndex--;
            this.playBleep();
            this.renderPage();
        }
    }

    restart() {
        this.currentIndex = 0;
        this.scores = { css: 50, des: 50 };
        this.history = [];
        this.userBranchChoices = {};
        this.playBleep();
        this.renderPage();
    }

    /* Vẽ tranh Pixel Art 16-bit SVG sắc nét, đúng chủ đề và nhân vật */
    renderPixelArtwork(page) {
        let svg = '';
        const id = page.page_id;

        if (id === 'CH01-P001') {
            // Star-Tea cafe pixel art
            svg = `
            <svg viewBox="0 0 240 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <!-- Background cafe wall -->
                <rect width="240" height="160" fill="#0f172a"/>
                <rect x="20" y="20" width="60" height="40" fill="#1e3a8a" stroke="#38bdf8" stroke-width="4"/>
                <text x="50" y="44" font-family="'Press Start 2P'" font-size="6" fill="#fde047" text-anchor="middle">STAR-TEA</text>
                
                <!-- Table -->
                <rect x="30" y="90" width="180" height="50" fill="#78350f" stroke="#000" stroke-width="4"/>
                <rect x="34" y="94" width="172" height="6" fill="#b45309"/>
                
                <!-- Laptop -->
                <rect x="70" y="70" width="40" height="25" fill="#334155" stroke="#000" stroke-width="2"/>
                <rect x="74" y="74" width="32" height="17" fill="#0284c7"/>
                <rect x="66" y="93" width="48" height="4" fill="#64748b"/>
                
                <!-- Bubble tea cups -->
                <rect x="120" y="76" width="12" height="18" fill="#fde047" stroke="#000" stroke-width="2"/>
                <rect x="124" y="70" width="2" height="8" fill="#e11d48"/>
                <rect x="140" y="76" width="12" height="18" fill="#fb7185" stroke="#000" stroke-width="2"/>
                <rect x="144" y="70" width="2" height="8" fill="#2dd4bf"/>

                <!-- Characters: Minh & An & Hoang Pixel heads -->
                <rect x="40" y="55" width="20" height="20" fill="#fcd34d" stroke="#000" stroke-width="2"/>
                <rect x="40" y="50" width="20" height="8" fill="#1e293b"/> <!-- Minh tóc ngắn -->
                
                <rect x="170" y="55" width="20" height="20" fill="#fcd34d" stroke="#000" stroke-width="2"/>
                <rect x="168" y="50" width="24" height="12" fill="#78350f"/> <!-- An tóc dài -->

                <rect x="110" y="40" width="18" height="18" fill="#fcd34d" stroke="#000" stroke-width="2"/>
                <rect x="108" y="38" width="22" height="6" fill="#e11d48"/> <!-- Hoang mũ đỏ -->
            </svg>`;
        } else if (id === 'CH01-P002') {
            // Fake voucher pop-up
            svg = `
            <svg viewBox="0 0 240 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="160" fill="#0f172a"/>
                <!-- Phone frame -->
                <rect x="65" y="10" width="110" height="140" rx="6" fill="#020617" stroke="#38bdf8" stroke-width="4"/>
                <!-- Screen -->
                <rect x="75" y="24" width="90" height="112" fill="#f8fafc"/>
                <!-- Phishing banner -->
                <rect x="78" y="30" width="84" height="24" fill="#e11d48"/>
                <text x="120" y="44" font-family="'Press Start 2P'" font-size="5" fill="#fef08a" text-anchor="middle">VOUCHER 500K!</text>
                <!-- Fake URL -->
                <rect x="78" y="60" width="84" height="12" fill="#e2e8f0" stroke="#dc2626" stroke-width="1"/>
                <text x="120" y="69" font-family="monospace" font-size="5" fill="#dc2626" text-anchor="middle">http://star-tea-fake.vn</text>
                <!-- Fake FB login btn -->
                <rect x="85" y="80" width="70" height="16" fill="#1877f2"/>
                <text x="120" y="91" font-family="'Press Start 2P'" font-size="4" fill="#fff" text-anchor="middle">LOGIN FACEBOOK</text>
                <!-- Warning sign -->
                <circle cx="120" cy="118" r="8" fill="#e11d48"/>
                <text x="120" y="122" font-family="'Press Start 2P'" font-size="8" fill="#fff" text-anchor="middle">!</text>
            </svg>`;
        } else if (id === 'CH01-P003' || id === 'CH02-P003' || id === 'CH03-P003' || id === 'CH04-P003') {
            // Decision crossroads pixel art
            svg = `
            <svg viewBox="0 0 240 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="160" fill="#090d16"/>
                <!-- Safe shield left -->
                <path d="M40 30L80 45V85C80 110 40 130 40 130C40 130 0 110 0 85V45L40 30Z" transform="translate(20, 0)" fill="#0d9488" stroke="#2dd4bf" stroke-width="4"/>
                <text x="60" y="88" font-family="'Press Start 2P'" font-size="14" fill="#fef08a" text-anchor="middle">🛡️</text>
                <text x="60" y="145" font-family="'Press Start 2P'" font-size="6" fill="#2dd4bf" text-anchor="middle">SAFE</text>
                
                <!-- VS logo center -->
                <circle cx="120" cy="75" r="16" fill="#020617" stroke="#ca8a04" stroke-width="3"/>
                <text x="120" y="81" font-family="'Press Start 2P'" font-size="8" fill="#fde047" text-anchor="middle">VS</text>

                <!-- Explore lightning right -->
                <polygon points="175,25 155,75 180,75 160,135 205,65 180,65" fill="#e11d48" stroke="#fb7185" stroke-width="4"/>
                <text x="180" y="145" font-family="'Press Start 2P'" font-size="6" fill="#fb7185" text-anchor="middle">EXPLORE</text>
            </svg>`;
        } else if (id === 'CH01-P004' || id === 'CH02-P004' || id === 'CH03-P004' || id === 'CH04-P004') {
            // Safe victory / 2FA success
            svg = `
            <svg viewBox="0 0 240 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="160" fill="#042f2e"/>
                <circle cx="120" cy="70" r="45" fill="#0d9488" stroke="#2dd4bf" stroke-width="6"/>
                <polyline points="95,70 112,88 150,52" fill="none" stroke="#fef08a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                <text x="120" y="135" font-family="'Press Start 2P'" font-size="8" fill="#2dd4bf" text-anchor="middle">SUCCESS: AN TOÀN SỐ!</text>
            </svg>`;
        } else if (id === 'CH01-P005' || id === 'CH02-P005' || id === 'CH03-P005' || id === 'CH04-P005') {
            // Hacked / Ransomware alert
            svg = `
            <svg viewBox="0 0 240 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="160" fill="#4c0519"/>
                <rect x="40" y="25" width="160" height="100" fill="#020617" stroke="#e11d48" stroke-width="6"/>
                <text x="120" y="65" font-family="'Press Start 2P'" font-size="16" fill="#ef4444" text-anchor="middle">☠️</text>
                <text x="120" y="90" font-family="'Press Start 2P'" font-size="8" fill="#ef4444" text-anchor="middle">SECURITY BREACH!</text>
                <text x="120" y="108" font-family="'Press Start 2P'" font-size="5" fill="#fde047" text-anchor="middle">MẤT QUYỀN TRUY CẬP</text>
            </svg>`;
        } else if (id.endsWith('-P006') && !id.startsWith('CH04')) {
            // CyberFox Reflection avatar
            svg = `
            <svg viewBox="0 0 240 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="160" fill="#1e1b4b"/>
                <!-- Cyber Fox Head -->
                <polygon points="120,40 70,80 80,120 120,135 160,120 170,80" fill="#ea580c" stroke="#fed7aa" stroke-width="4"/>
                <!-- Ears -->
                <polygon points="70,80 60,35 90,55" fill="#c2410c"/>
                <polygon points="170,80 180,35 150,55" fill="#c2410c"/>
                <!-- Cyber Visor Glasses -->
                <rect x="85" y="75" width="70" height="14" fill="#38bdf8" stroke="#000" stroke-width="2"/>
                <line x1="85" y1="82" x2="155" y2="82" stroke="#fff" stroke-width="2"/>
                <text x="120" y="150" font-family="'Press Start 2P'" font-size="7" fill="#fde047" text-anchor="middle">CYBERFOX ADVISOR</text>
            </svg>`;
        } else if (id.startsWith('CH04-P007') || id.startsWith('CH04-P008') || id.startsWith('CH04-P009') || id.startsWith('CH04-P010')) {
            // Ending Trophy pixel art
            svg = `
            <svg viewBox="0 0 240 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="160" fill="#020617"/>
                <!-- Trophy -->
                <path d="M80 30H160V75C160 95 142 110 120 110C98 110 80 95 80 75V30Z" fill="#ca8a04" stroke="#fde047" stroke-width="4"/>
                <rect x="110" y="110" width="20" height="25" fill="#a16207"/>
                <rect x="90" y="135" width="60" height="15" fill="#713f12" stroke="#fde047" stroke-width="3"/>
                <text x="120" y="72" font-family="'Press Start 2P'" font-size="18" fill="#fef08a" text-anchor="middle">★</text>
                <text x="120" y="22" font-family="'Press Start 2P'" font-size="8" fill="#fde047" text-anchor="middle">EPILOGUE UNLOCKED</text>
            </svg>`;
        } else {
            // General story scene
            svg = `
            <svg viewBox="0 0 240 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="160" fill="#0f172a"/>
                <rect x="30" y="30" width="180" height="100" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
                <text x="120" y="80" font-family="'Press Start 2P'" font-size="28" fill="#38bdf8" text-anchor="middle">🎮</text>
                <text x="120" y="115" font-family="'Press Start 2P'" font-size="6" fill="#fde047" text-anchor="middle">PIXEL 16-BIT SCENE</text>
            </svg>`;
        }

        this.dom.canvasSlot.innerHTML = svg;
    }
}

// Khởi tạo engine khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PIXEL_STORY_PAGES !== 'undefined') {
        window.pixelEngine = new PixelArtStoryEngine(PIXEL_STORY_PAGES);
    } else {
        console.error('Không tìm thấy PIXEL_STORY_PAGES!');
    }
});
