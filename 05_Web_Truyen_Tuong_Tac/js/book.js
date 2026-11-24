/**
 * ENGINE LẬT SÁCH VÀ XỬ LÝ TƯƠNG TÁC (BOOK ENGINE)
 * "NGƯỜI GÁC ĐỀN KHÔNG GIAN SỐ"
 * Hỗ trợ Web Audio API, 3D Flip Animation, Branching Logic & Multiple Endings
 */

class InteractiveBookEngine {
    constructor(storyData) {
        this.data = storyData;
        this.currentChapterIndex = 0; // 0 -> 3 (Chương 1 đến 4)
        this.currentPageNumber = 1;   // 1 -> 5
        this.currentBranch = null;    // null, 'SAFE', hoặc 'EXPLORE'
        
        // Điểm trạng thái
        this.scores = {
            css: storyData.meta.initialScores.css,
            des: storyData.meta.initialScores.des
        };
        
        // Nhật ký các quyết định của học sinh
        this.decisionHistory = [];
        
        // Cấu hình âm thanh
        this.soundEnabled = true;
        this.audioCtx = null;
        
        this.initDOM();
        this.initEvents();
        this.renderCurrentView();
    }

    /* Khởi tạo các phần tử DOM */
    initDOM() {
        this.dom = {
            bookWrapper: document.getElementById('bookWrapper'),
            chapterTitle: document.getElementById('chapterTitle'),
            chapterTopic: document.getElementById('chapterTopic'),
            pageBadgeText: document.getElementById('pageBadgeText'),
            pageCounterBadge: document.getElementById('pageCounterBadge'),
            cssValue: document.getElementById('cssValue'),
            desValue: document.getElementById('desValue'),
            cssProgress: document.getElementById('cssProgress'),
            desProgress: document.getElementById('desProgress'),
            pageTitle: document.getElementById('pageTitle'),
            illustrationSlot: document.getElementById('illustrationSlot'),
            illustrationCaption: document.getElementById('illustrationCaption'),
            dialogueStream: document.getElementById('dialogueStream'),
            narrationBox: document.getElementById('narrationBox'),
            narrationText: document.getElementById('narrationText'),
            decisionArea: document.getElementById('decisionArea'),
            reflectionArea: document.getElementById('reflectionArea'),
            endingArea: document.getElementById('endingArea'),
            btnPrev: document.getElementById('btnPrev'),
            btnNext: document.getElementById('btnNext'),
            btnReplay: document.getElementById('btnReplay'),
            btnSound: document.getElementById('btnSound'),
            btnLog: document.getElementById('btnLog'),
            modalLog: document.getElementById('modalLog'),
            modalLogContent: document.getElementById('modalLogContent'),
            btnCloseModal: document.getElementById('btnCloseModal')
        };
    }

    /* Đăng ký sự kiện */
    initEvents() {
        this.dom.btnPrev.addEventListener('click', () => this.prevPage());
        this.dom.btnNext.addEventListener('click', () => this.nextPage());
        this.dom.btnReplay.addEventListener('click', () => this.rollbackCurrentChapter());
        this.dom.btnSound.addEventListener('click', () => this.toggleSound());
        this.dom.btnLog.addEventListener('click', () => this.openDecisionLog());
        this.dom.btnCloseModal.addEventListener('click', () => this.closeDecisionLog());
        
        // Đóng modal khi click ra ngoài
        this.dom.modalLog.addEventListener('click', (e) => {
            if (e.target === this.dom.modalLog) this.closeDecisionLog();
        });

        // Bắt sự kiện phím tắt bàn phím
        window.addEventListener('keydown', (e) => {
            if (this.dom.modalLog.classList.contains('active')) return;
            if (e.key === 'ArrowRight' || e.key === ' ') {
                if (!this.dom.btnNext.disabled && this.dom.btnNext.style.display !== 'none') {
                    this.nextPage();
                }
            } else if (e.key === 'ArrowLeft') {
                if (!this.dom.btnPrev.disabled) {
                    this.prevPage();
                }
            } else if (e.key === '1') {
                const safeBtn = document.querySelector('.card-safe');
                if (safeBtn) safeBtn.click();
            } else if (e.key === '2') {
                const exploreBtn = document.querySelector('.card-explore');
                if (exploreBtn) exploreBtn.click();
            }
        });
    }

    /* Hệ thống âm thanh tổng hợp qua Web Audio API */
    initAudioContext() {
        if (!this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioCtx = new AudioContext();
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        this.dom.btnSound.innerHTML = this.soundEnabled ? '🔊' : '🔇';
        this.dom.btnSound.title = this.soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh';
    }

    playPageFlipSound() {
        if (!this.soundEnabled) return;
        try {
            this.initAudioContext();
            const ctx = this.audioCtx;
            const now = ctx.currentTime;
            
            // Tạo tiếng sột soạt lật giấy bằng White Noise qua Bandpass Filter
            const bufferSize = ctx.sampleRate * 0.15;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(800, now);
            filter.frequency.exponentialRampToValueAtTime(300, now + 0.15);
            filter.Q.value = 1.2;

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);

            noise.start(now);
        } catch (e) {
            console.warn('Audio error:', e);
        }
    }

    playSafeChoiceSound() {
        if (!this.soundEnabled) return;
        try {
            this.initAudioContext();
            const ctx = this.audioCtx;
            const now = ctx.currentTime;
            // Hợp âm vui tươi, tích cực (C5 -> E5 -> G5)
            const freqs = [523.25, 659.25, 783.99];
            freqs.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.08);

                gain.gain.setValueAtTime(0, now + idx * 0.08);
                gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);

                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + idx * 0.08);
                osc.stop(now + idx * 0.08 + 0.25);
            });
        } catch (e) {}
    }

    playRiskChoiceSound() {
        if (!this.soundEnabled) return;
        try {
            this.initAudioContext();
            const ctx = this.audioCtx;
            const now = ctx.currentTime;
            // Âm thanh cảnh báo hồi hộp
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(320, now);
            osc.frequency.linearRampToValueAtTime(200, now + 0.3);

            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.3);
        } catch (e) {}
    }

    /* Cập nhật thanh hiển thị 2 chỉ số */
    updateScoresView() {
        this.scores.css = Math.max(0, Math.min(100, this.scores.css));
        this.scores.des = Math.max(0, Math.min(100, this.scores.des));

        this.dom.cssValue.textContent = `${this.scores.css}/100`;
        this.dom.desValue.textContent = `${this.scores.des}/100`;
        this.dom.cssProgress.style.width = `${this.scores.css}%`;
        this.dom.desProgress.style.width = `${this.scores.des}%`;
    }

    /* Hiển thị trang hiện tại */
    renderCurrentView() {
        const chapter = this.data.chapters[this.currentChapterIndex];
        
        // Cập nhật thông tin Header chương
        this.dom.chapterTitle.textContent = chapter.title;
        this.dom.chapterTopic.textContent = chapter.topic;
        this.dom.pageCounterBadge.textContent = `Chương ${chapter.id}/4 • Trang ${this.currentPageNumber}/5`;

        this.updateScoresView();

        // Ẩn các khu vực tương tác đặc biệt trước
        this.dom.decisionArea.style.display = 'none';
        this.dom.reflectionArea.style.display = 'none';
        this.dom.endingArea.style.display = 'none';
        this.dom.narrationBox.style.display = 'none';
        this.dom.dialogueStream.style.display = 'flex';
        this.dom.btnNext.style.display = 'inline-flex';
        this.dom.btnReplay.style.display = 'none';

        // Tìm dữ liệu trang tương ứng
        let pageData = null;
        if (this.currentPageNumber === 4) {
            // Trang 4 là trang hệ quả phụ thuộc vào branch đã chọn
            pageData = chapter.pages.find(p => p.pageNumber === 4 && p.branchPage === this.currentBranch);
            this.dom.btnReplay.style.display = 'inline-flex';
        } else {
            pageData = chapter.pages.find(p => p.pageNumber === this.currentPageNumber && !p.branchPage);
        }

        if (!pageData) {
            console.error('Không tìm thấy dữ liệu trang:', this.currentChapterIndex, this.currentPageNumber, this.currentBranch);
            return;
        }

        // Cập nhật tiêu đề trang
        this.dom.pageTitle.textContent = pageData.title;
        this.dom.pageBadgeText.textContent = pageData.badge;
        this.dom.pageBadgeText.className = 'page-badge';

        // Render hình ảnh SVG minh họa trang trái
        this.renderIllustration(pageData.illustration, pageData.narration);

        // Render nội dung theo loại trang (story / decision / consequence / reflection / final_results)
        if (pageData.type === 'story') {
            this.renderDialogues(pageData.dialogues);
            if (pageData.narration) {
                this.dom.narrationBox.style.display = 'block';
                this.dom.narrationText.textContent = pageData.narration;
            }
            this.dom.btnNext.disabled = false;
        } else if (pageData.type === 'decision') {
            this.dom.pageBadgeText.classList.add('badge-explore');
            this.renderDecisionPage(pageData);
            this.dom.btnNext.style.display = 'none'; // Bắt buộc phải bấm chọn 1 trong 2 thẻ
        } else if (pageData.type === 'consequence') {
            if (this.currentBranch === 'SAFE') {
                this.dom.pageBadgeText.classList.add('badge-safe');
            } else {
                this.dom.pageBadgeText.classList.add('badge-explore');
            }
            this.renderDialogues(pageData.dialogues);
            if (pageData.narration) {
                this.dom.narrationBox.style.display = 'block';
                this.dom.narrationText.textContent = pageData.narration;
            }
            this.dom.btnNext.disabled = false;
        } else if (pageData.type === 'reflection') {
            this.dom.pageBadgeText.classList.add('badge-reflection');
            this.renderReflectionPage(pageData);
            this.dom.btnNext.disabled = false;
            // Nếu là trang 5 của Chương cuối (Chương 4), trang 5 sẽ là kết quả
        } else if (pageData.type === 'final_results') {
            this.renderFinalEndings();
        }

        // Cập nhật trạng thái nút Prev
        this.dom.btnPrev.disabled = (this.currentChapterIndex === 0 && this.currentPageNumber === 1);
    }

    /* Render danh sách hội thoại */
    renderDialogues(dialogues = []) {
        this.dom.dialogueStream.innerHTML = '';
        dialogues.forEach(item => {
            const char = this.data.characters[item.speaker] || { name: item.speaker, avatar: '👤', color: '#6366f1' };
            const div = document.createElement('div');
            div.className = 'dialogue-item';
            div.innerHTML = `
                <div class="speaker-avatar" style="border-color: ${char.color};" title="${char.role}">
                    ${char.avatar}
                </div>
                <div class="dialogue-bubble">
                    <div class="speaker-name" style="color: ${char.color}">
                        ${char.name}
                        <span style="font-size: 0.7rem; color: #94a3b8; font-weight: normal;">• ${char.role}</span>
                    </div>
                    <div class="dialogue-text">${item.text}</div>
                </div>
            `;
            this.dom.dialogueStream.appendChild(div);
        });
    }

    /* Render trang Quyết định (Decision) */
    renderDecisionPage(pageData) {
        this.dom.dialogueStream.style.display = 'none';
        this.dom.decisionArea.style.display = 'block';
        this.dom.decisionArea.innerHTML = `
            <div class="decision-container">
                <div class="decision-prompt-title">❓ ${pageData.question}</div>
                <div class="decision-cards-grid">
                    ${pageData.options.map(opt => `
                        <div class="decision-card ${opt.branch === 'SAFE' ? 'card-safe' : 'card-explore'}" data-branch="${opt.branch}">
                            <div class="card-tag ${opt.branch === 'SAFE' ? 'safe-color' : 'explore-color'}">
                                ${opt.tag}
                            </div>
                            <div class="card-title">${opt.title}</div>
                            <div class="card-desc">${opt.desc}</div>
                            <div class="card-footer">
                                <span class="score-badge-preview">
                                    🛡️ ${opt.scoreEffect.css > 0 ? '+' : ''}${opt.scoreEffect.css} CSS | 
                                    💡 ${opt.scoreEffect.des > 0 ? '+' : ''}${opt.scoreEffect.des} DES
                                </span>
                                <button class="btn-choose">Chọn hướng này ➔</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Gắn sự kiện click vào các thẻ lựa chọn
        const cards = this.dom.decisionArea.querySelectorAll('.decision-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const branch = card.getAttribute('data-branch');
                this.chooseBranch(branch);
            });
        });
    }

    /* Xử lý khi học sinh bấm chọn 1 nhánh */
    chooseBranch(branch) {
        this.currentBranch = branch;
        const chapter = this.data.chapters[this.currentChapterIndex];
        const decPage = chapter.pages.find(p => p.pageNumber === 3);
        const selectedOpt = decPage.options.find(o => o.branch === branch);

        // Cộng điểm
        if (selectedOpt) {
            this.scores.css += selectedOpt.scoreEffect.css;
            this.scores.des += selectedOpt.scoreEffect.des;
            
            // Ghi nhật ký
            this.decisionHistory.push({
                chapterId: chapter.id,
                chapterTitle: chapter.title,
                branch: branch,
                decisionTitle: selectedOpt.title,
                scoresChange: selectedOpt.scoreEffect,
                finalScores: { ...this.scores }
            });

            // Phát âm thanh tương ứng
            if (branch === 'SAFE') {
                this.playSafeChoiceSound();
            } else {
                this.playRiskChoiceSound();
            }
        }

        // Tự động lật sang Trang 4 (Trang hệ quả)
        this.currentPageNumber = 4;
        this.animatePageFlip('next');
    }

    /* Render trang Phản tư sư phạm */
    renderReflectionPage(pageData) {
        this.renderDialogues(pageData.dialogues);
        this.dom.reflectionArea.style.display = 'block';
        this.dom.reflectionArea.innerHTML = `
            <div class="reflection-box">
                <div class="reflection-title">🦊 3 Bài Học Cốt Lõi Từ Cố Vấn CyberFox:</div>
                <ul class="key-points-list">
                    ${pageData.keyPoints.map(pt => `<li>${pt}</li>`).join('')}
                </ul>
                <div class="reflection-question-box">
                    💡 <strong>Câu hỏi phản tư thảo luận trên lớp:</strong><br>
                    "${pageData.reflectionQuestion}"
                </div>
            </div>
        `;
    }

    /* Render trang Kết thúc đa chiều (Multiple Endings) */
    renderFinalEndings() {
        this.dom.dialogueStream.style.display = 'none';
        this.dom.narrationBox.style.display = 'none';
        this.dom.btnNext.style.display = 'none';
        this.dom.endingArea.style.display = 'block';

        // Xác định kết cục theo điểm
        let ending = null;
        if (this.scores.css >= 70 && this.scores.des >= 70) {
            ending = this.data.endings.ending1;
        } else if (this.scores.css < 70 && this.scores.des >= 70) {
            ending = this.data.endings.ending2;
        } else if (this.scores.css >= 70 && this.scores.des < 70) {
            ending = this.data.endings.ending3;
        } else {
            ending = this.data.endings.ending4;
        }

        this.dom.pageBadgeText.textContent = ending.badge;
        this.dom.pageBadgeText.style.background = ending.themeColor;
        this.dom.pageBadgeText.style.color = '#ffffff';

        this.dom.endingArea.innerHTML = `
            <div class="ending-card-full" style="border-top: 6px solid ${ending.themeColor}">
                <div class="ending-icon-badge">${ending.icon}</div>
                <span class="ending-badge-tag" style="background: ${ending.themeColor}">${ending.badge}</span>
                <h2 class="ending-title" style="color: ${ending.themeColor}">${ending.title}</h2>
                <div class="final-scores-row">
                    <div class="final-score-pill safe-color">🛡️ Điểm An toàn (CSS): ${this.scores.css}/100</div>
                    <div class="final-score-pill explore-color">💡 Điểm Đạo đức (DES): ${this.scores.des}/100</div>
                </div>
                <p class="ending-summary">${ending.summary}</p>
                <div class="ending-advice-box">
                    <strong>Lời khuyên dành cho bạn:</strong> "${ending.advice}"
                </div>
                <div style="display: flex; gap: 12px; margin-top: 14px;">
                    <button class="btn-nav btn-replay" id="btnRestartAll">🔄 Trải nghiệm lại từ đầu</button>
                    <button class="btn-nav" id="btnViewLogFinal">📜 Xem nhật ký quyết định</button>
                </div>
            </div>
        `;

        document.getElementById('btnRestartAll').addEventListener('click', () => {
            this.restartGame();
        });
        document.getElementById('btnViewLogFinal').addEventListener('click', () => {
            this.openDecisionLog();
        });
    }

    /* Hiệu ứng lật trang 3D mượt mà */
    animatePageFlip(direction = 'next') {
        this.playPageFlipSound();
        const animClass = direction === 'next' ? 'book-flipping-next' : 'book-flipping-prev';
        this.dom.bookWrapper.classList.add(animClass);
        setTimeout(() => {
            this.renderCurrentView();
            this.dom.bookWrapper.classList.remove(animClass);
        }, 300);
    }

    /* Chuyển trang tiếp theo */
    nextPage() {
        if (this.currentPageNumber < 5) {
            this.currentPageNumber++;
            this.animatePageFlip('next');
        } else {
            // Đang ở trang 5 (trang phản tư), chuyển sang Chương tiếp theo
            if (this.currentChapterIndex < this.data.chapters.length - 1) {
                this.currentChapterIndex++;
                this.currentPageNumber = 1;
                this.currentBranch = null;
                this.animatePageFlip('next');
            }
        }
    }

    /* Quay lại trang trước */
    prevPage() {
        if (this.currentPageNumber > 1) {
            this.currentPageNumber--;
            this.animatePageFlip('prev');
        } else {
            // Đang ở trang 1, lùi về trang 5 của Chương trước
            if (this.currentChapterIndex > 0) {
                this.currentChapterIndex--;
                this.currentPageNumber = 5;
                this.animatePageFlip('prev');
            }
        }
    }

    /* Rollback: Thử lại lựa chọn của chương hiện tại */
    rollbackCurrentChapter() {
        if (this.currentPageNumber === 4 && this.currentBranch) {
            const chapter = this.data.chapters[this.currentChapterIndex];
            const decPage = chapter.pages.find(p => p.pageNumber === 3);
            const currentOpt = decPage.options.find(o => o.branch === this.currentBranch);
            
            // Hoàn tác điểm
            if (currentOpt) {
                this.scores.css -= currentOpt.scoreEffect.css;
                this.scores.des -= currentOpt.scoreEffect.des;
            }
            
            // Xóa quyết định gần nhất trong nhật ký
            this.decisionHistory.pop();
            this.currentBranch = null;
            this.currentPageNumber = 3;
            this.animatePageFlip('prev');
        }
    }

    /* Chơi lại toàn bộ */
    restartGame() {
        this.currentChapterIndex = 0;
        this.currentPageNumber = 1;
        this.currentBranch = null;
        this.scores.css = this.data.meta.initialScores.css;
        this.scores.des = this.data.meta.initialScores.des;
        this.decisionHistory = [];
        this.animatePageFlip('prev');
    }

    /* Mở Modal Nhật Ký Quyết Định */
    openDecisionLog() {
        this.dom.modalLogContent.innerHTML = '';
        if (this.decisionHistory.length === 0) {
            this.dom.modalLogContent.innerHTML = `
                <p style="color: #94a3b8; text-align: center; padding: 20px;">
                    Chưa có quyết định nào được ghi nhận. Hãy tiếp tục đọc và đưa ra lựa chọn tại các điểm rẽ nhé!
                </p>
            `;
        } else {
            this.decisionHistory.forEach((item, idx) => {
                const div = document.createElement('div');
                div.className = 'log-item';
                div.innerHTML = `
                    <div class="log-header">
                        <span>Lần ${idx + 1} • Chương ${item.chapterId}</span>
                        <span class="${item.branch === 'SAFE' ? 'safe-color' : 'explore-color'}">
                            ${item.branch === 'SAFE' ? '🛡️ An Toàn' : '⚡ Khám Phá/Mạo Hiểm'}
                        </span>
                    </div>
                    <div class="log-title">${item.decisionTitle}</div>
                    <div class="log-scores">
                        Biến thiên: CSS ${item.scoresChange.css > 0 ? '+' : ''}${item.scoresChange.css} | 
                        DES ${item.scoresChange.des > 0 ? '+' : ''}${item.scoresChange.des} 
                        ➔ Điểm tích lũy: CSS: ${item.finalScores.css} / DES: ${item.finalScores.des}
                    </div>
                `;
                this.dom.modalLogContent.appendChild(div);
            });
        }
        this.dom.modalLog.classList.add('active');
    }

    closeDecisionLog() {
        this.dom.modalLog.classList.remove('active');
    }

    /* Render hình ảnh minh họa vector SVG phong phú */
    renderIllustration(type, caption) {
        this.dom.illustrationCaption.textContent = caption || "Minh họa tình huống học đường";
        let svg = '';

        switch (type) {
            case 'wifi_trap':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="95" r="8" fill="#3b82f6"/>
                    <path d="M40 78C51 68 69 68 80 78" stroke="#3b82f6" stroke-width="6" stroke-linecap="round"/>
                    <path d="M22 60C43 42 77 42 98 60" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" stroke-dasharray="4 4"/>
                    <path d="M6 42C36 14 84 14 114 42" stroke="#ef4444" stroke-width="6" stroke-linecap="round"/>
                    <text x="60" y="28" font-size="12" fill="#ef4444" font-weight="bold" text-anchor="middle">⚠️ FREE VIP 5G</text>
                </svg>`;
                break;
            case 'phishing_alert':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="25" width="80" height="70" rx="8" fill="#f8fafc" stroke="#ef4444" stroke-width="4"/>
                    <path d="M20 35L60 62L100 35" stroke="#ef4444" stroke-width="4" stroke-linejoin="round"/>
                    <circle cx="60" cy="55" r="14" fill="#ef4444"/>
                    <text x="60" y="60" font-size="14" fill="#ffffff" font-weight="bold" text-anchor="middle">!</text>
                    <text x="60" y="110" font-size="10" fill="#dc2626" font-weight="bold" text-anchor="middle">FAKE PHISHING URL</text>
                </svg>`;
                break;
            case 'safe_shield':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 15L95 30V65C95 85 60 105 60 105C60 105 25 85 25 65V30L60 15Z" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="6"/>
                    <path d="M45 60L55 70L75 48" stroke="#10b981" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                    <text x="60" y="118" font-size="10" fill="#059669" font-weight="bold" text-anchor="middle">BẢO MẬT 2FA AN TOÀN</text>
                </svg>`;
                break;
            case 'hacked_screen':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="20" width="90" height="65" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="4"/>
                    <path d="M45 50L55 60M55 50L45 60" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
                    <path d="M65 50L75 60M75 50L65 60" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
                    <path d="M50 72Q60 66 70 72" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
                    <text x="60" y="105" font-size="10" fill="#dc2626" font-weight="bold" text-anchor="middle">MẤT QUYỀN TRUY CẬP</text>
                </svg>`;
                break;
            case 'ai_bot_glow':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="30" width="70" height="60" rx="14" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="4"/>
                    <circle cx="45" cy="55" r="7" fill="#60a5fa"/>
                    <circle cx="75" cy="55" r="7" fill="#60a5fa"/>
                    <path d="M50 72H70" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
                    <line x1="60" y1="15" x2="60" y2="30" stroke="#3b82f6" stroke-width="4"/>
                    <circle cx="60" cy="14" r="5" fill="#f59e0b"/>
                    <text x="60" y="110" font-size="10" fill="#2563eb" font-weight="bold" text-anchor="middle">GENERATIVE AI BOT</text>
                </svg>`;
                break;
            case 'hallucination_check':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30" stroke="#8b5cf6" stroke-width="6"/>
                    <line x1="72" y1="72" x2="105" y2="105" stroke="#8b5cf6" stroke-width="8" stroke-linecap="round"/>
                    <text x="50" y="55" font-size="20" fill="#ef4444" font-weight="bold" text-anchor="middle">?</text>
                    <text x="60" y="116" font-size="9" fill="#7c3aed" font-weight="bold" text-anchor="middle">KIỂM CHỨNG FACT-CHECK</text>
                </svg>`;
                break;
            case 'award_win':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 30H85V55C85 68 74 79 60 79C46 79 35 68 35 55V30Z" fill="#fbbf24" stroke="#d97706" stroke-width="4"/>
                    <path d="M35 40H20C20 52 30 58 35 58V40Z" stroke="#d97706" stroke-width="4"/>
                    <path d="M85 40H100C100 52 90 58 85 58V40Z" stroke="#d97706" stroke-width="4"/>
                    <path d="M60 79V95M45 95H75" stroke="#d97706" stroke-width="5" stroke-linecap="round"/>
                    <text x="60" y="60" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle">★</text>
                    <text x="60" y="115" font-size="10" fill="#b45309" font-weight="bold" text-anchor="middle">GIẢI NHẤT LIÊM CHÍNH</text>
                </svg>`;
                break;
            case 'plagiarism_caught':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="20" width="60" height="75" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="4"/>
                    <line x1="42" y1="40" x2="78" y2="40" stroke="#ef4444" stroke-width="3"/>
                    <line x1="42" y1="55" x2="78" y2="55" stroke="#ef4444" stroke-width="3"/>
                    <text x="60" y="78" font-size="12" fill="#dc2626" font-weight="bold" text-anchor="middle">98% ĐẠO VĂN</text>
                    <text x="60" y="112" font-size="10" fill="#dc2626" font-weight="bold" text-anchor="middle">HỦY KẾT QUẢ THI</text>
                </svg>`;
                break;
            case 'corridor_rumors':
            case 'peer_pressure':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="50" r="16" fill="#64748b"/>
                    <circle cx="85" cy="50" r="16" fill="#64748b"/>
                    <circle cx="60" cy="75" r="18" fill="#ec4899"/>
                    <path d="M50 78Q60 72 70 78" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
                    <text x="60" y="114" font-size="10" fill="#ec4899" font-weight="bold" text-anchor="middle">ÁP LỰC ĐÁM ĐÔNG MẠNG</text>
                </svg>`;
                break;
            case 'friendship_support':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 90C60 90 20 65 20 45C20 32 30 22 43 22C51 22 57 26 60 31C63 26 69 22 77 22C90 22 100 32 100 45C100 65 60 90 60 90Z" fill="#ec4899" fill-opacity="0.3" stroke="#ec4899" stroke-width="5"/>
                    <text x="60" y="60" font-size="20" fill="#ec4899" font-weight="bold" text-anchor="middle">🤝</text>
                    <text x="60" y="112" font-size="10" fill="#be185d" font-weight="bold" text-anchor="middle">BẢO VỆ BẠN BÈ</text>
                </svg>`;
                break;
            case 'disciplinary_hearing':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="45" r="22" stroke="#dc2626" stroke-width="5"/>
                    <path d="M60 32V48" stroke="#dc2626" stroke-width="5" stroke-linecap="round"/>
                    <circle cx="60" cy="56" r="3" fill="#dc2626"/>
                    <path d="M25 95C25 80 40 75 60 75C80 75 95 80 95 95" stroke="#dc2626" stroke-width="5"/>
                    <text x="60" y="114" font-size="10" fill="#b91c1c" font-weight="bold" text-anchor="middle">KỶ LUẬT VÌ BẠO LỰC MẠNG</text>
                </svg>`;
                break;
            case 'ddos_attack':
            case 'incident_response_choice':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="25" width="70" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="4"/>
                    <line x1="35" y1="45" x2="85" y2="45" stroke="#ef4444" stroke-width="3" stroke-dasharray="3 3"/>
                    <line x1="35" y1="60" x2="85" y2="60" stroke="#ef4444" stroke-width="3" stroke-dasharray="3 3"/>
                    <line x1="35" y1="75" x2="85" y2="75" stroke="#ef4444" stroke-width="3" stroke-dasharray="3 3"/>
                    <text x="60" y="112" font-size="10" fill="#0284c7" font-weight="bold" text-anchor="middle">MÁY CHỦ BỊ TẤN CÔNG DDoS</text>
                </svg>`;
                break;
            case 'cyber_hero':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="45" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="6"/>
                    <path d="M40 60L55 75L80 45" stroke="#10b981" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                    <text x="60" y="116" font-size="10" fill="#059669" font-weight="bold" text-anchor="middle">HIỆP SĨ BẢO VỆ MẠNG</text>
                </svg>`;
                break;
            case 'ransomware_locked':
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="45" width="60" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="4"/>
                    <path d="M42 45V30C42 20 50 15 60 15C70 15 78 20 78 30V45" stroke="#ef4444" stroke-width="5"/>
                    <circle cx="60" cy="68" r="5" fill="#ffffff"/>
                    <text x="60" y="112" font-size="10" fill="#dc2626" font-weight="bold" text-anchor="middle">DỮ LIỆU BỊ MÃ HÓA KHÓA CHẶT</text>
                </svg>`;
                break;
            default:
                svg = `
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="45" fill="#e0e7ff" stroke="#6366f1" stroke-width="4"/>
                    <text x="60" y="68" font-size="28" fill="#4f46e5" font-weight="bold" text-anchor="middle">📖</text>
                </svg>`;
        }

        this.dom.illustrationSlot.innerHTML = svg;
    }
}

// Tự động khởi chạy ứng dụng khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    window.interactiveBook = new InteractiveBookEngine(STORY_DATA);
});
