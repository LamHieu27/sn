/* ===================================================
   BROTHERHOOD VAULT — BIRTHDAY WEBSITE SCRIPT
   Dễ dàng chỉnh sửa tên, mật khẩu, danh sách Clip & Ảnh
   ngay tại phần CONFIG bên dưới!
   =================================================== */

const CONFIG = {
    password: '0511', // Mã PIN mở khóa (Tự động đồng bộ với gợi ý trong index.html)
    broName: 'CỐT GUỘC CỦA TÔI', // Đổi tên chiến hữu tại đây
    dob: '05 . 11 . 2004',
    tagline: '"Anh em tốt không tính bằng ngày tháng, mà tính bằng những lần đồng cam cộng khổ."',

    // 1. DANH SÁCH CLIP LỜI CHÚC (Bấm vào mục "Lời chúc" sẽ hiện các clip này)
    // Bạn chỉ cần bỏ file video (.mp4) vào thư mục videos/ hoặc thay đường dẫn video vào `videoSrc`
    clips: [
        {
            id: 1,
            title: 'Lời Chúc Từ Chiến Hữu #1',
            sender: 'Anh Híu đẳng cấp',
            duration: '00:15',
            videoSrc: 'videos/ClipHieu.mp4',
            thumb: 'images/thumb_1.jpg',
            quote: 'Đơn giản, hiệu quả'
        },
        {
            id: 2,
            title: 'Từ Chim bé 3',
            sender: 'Em Nhân lãi dó',
            duration: '00:12',
            videoSrc: 'videos/ClipNhan.mp4',
            thumb: 'images/thumb_2.jpg',
            quote: 'Hơi ngại nên không biết nói gì'
        },
        {
            id: 3,
            title: 'Từ Chim bé 2',
            sender: 'Em Dũng dâm',
            duration: '00:16',
            videoSrc: 'videos/ClipDung.mp4',
            thumb: 'images/thumb_3.jpg',
            quote: 'Lộ Clip set nhất hôm nay'
        },
        {
            id: 4,
            title: 'Từ Chim bé 1',
            sender: 'Em Kỳ con',
            duration: '00:19',
            videoSrc: 'videos/ClipKy.mp4',
            thumb: 'images/thumb_4.jpg',
            quote: 'Hôm nay là thứ....thứ 5'
        },
        {
            id: 5,
            title: 'Admin Tục Lệ',
            sender: 'CHIẾN HỮU ĐỒNG HÀNH - Kha đần',
            duration: '00:11',
            videoSrc: 'videos/ClipKha.mp4',
            thumb: 'images/thumb_5.jpg',
            quote: 'Cứ phải gọi là tuyệt vời, hết vị'
        },
        {
            id: 6,
            title: 'Lời Kết Từ Khoai Lang',
            sender: 'Khoa đần',
            duration: '00:07',
            videoSrc: 'videos/ClipKhoa.mp4',
            thumb: 'images/thumb_6.jpg',
            quote: 'Sợ vợ là thua!'
        }
    ],

    // 2. DANH SÁCH ẢNH KHOẢNH KHẮC (Bấm vào mục "Khoảnh khắc" sẽ hiện các ảnh này)
    photos: [
        { src: 'images/Phuoc2.jpg', cap: '500 anh em ⚡', cat: 'milestone', tag: 'BEST FIVE' },
        { src: 'images/Phuoc1.jpg', cap: 'Phong Thái Chuẩn Chỉnh🔥', cat: 'legend', tag: 'ĐỘC QUYỀN' },
        { src: 'images/Phuoc3.jpg', cap: 'Góc Nghiêng Thần Thánh Giữa Vỉa Hè 🌅', cat: 'chill', tag: 'THẦN THÁI' },
        { src: 'images/HieuPhuoc.jpeg', cap: 'Tao và Mày ☕', cat: 'chill', tag: 'ĐẲNG CẤP' },
        { src: 'images/Anhem.jpg', cap: 'Thần Thái Ngầu Đét Không Góc Chết 📸', cat: 'legend', tag: 'TỐT NGHIỆP' },
        { src: 'images/KhoaPhuoc.jpg', cap: 'KHOA & PHUỘC 🎂', cat: 'milestone', tag: 'CƠ BẢN' }
    ],

    // 3. CHỈ SỐ NĂNG LỰC (Mục Hồ sơ Chiến hữu)
    skills: [
        { name: 'Độ Uy Tín & Trọng Chữ Tín', val: 30 },
        { name: 'Bản Lĩnh & Độ Chịu Nhiệt', val: 99 },
        { name: 'Tốc Độ Có Mặt Khi Anh Em Cần', val: 30 },
        { name: 'Độ Nhiệt Huyết Mọi Cuộc Vui', val: 90 },
        { name: 'Tư Duy Chiến Lược & Độ Chất', val: 1 }
    ],

    // 4. HUÂN CHƯƠNG CHIẾN HỮU
    badges: [
        {
            icon: '🛡️',
            title: 'Chiến Hữu Chí Cốt',
            desc: 'Ít khi sát cánh trong những giai đoạn thử thách và hay than vãn.'
        },
        {
            icon: '⚡',
            title: 'Uy Tín 100 Điểm',
            desc: 'Đã nói là chưa làm, đã hẹn là đi trê, chỗ dựa đáng tin cậy thì...khó.'
        },
        {
            icon: '🎯',
            title: 'Kẻ Chinh Phục Mục Tiêu',
            desc: 'Một khi đã đặt mục tiêu là còn lâu mới có được.'
        },
        {
            icon: '🍻',
            title: 'Linh Hồn Mọi Cuộc Vui',
            desc: 'Có mặt ở đâu là ở đó rộn ràng tiếng cười và năng lượng tích cực.'
        }
    ],

    // 5. DÒNG THỜI GIAN TÌNH ANH EM
    timeline: [
        {
            time: 'CHAPTER 01 // KHỞI ĐẦU',
            title: 'Những Ngày Đầu Chạm Mặt',
            desc: 'Từ những người xa lạ bắt đầu nói chuyện, cọ láp với nhau.'
        },
        {
            time: 'CHAPTER 02 // ĂN UỐNG NGỦ ỈA CHUNG',
            title: 'Đụng Đâu Chiến Đó',
            desc: 'Những ngày chạy deadline, những buổi cà phê chill, bàn về cách sống.'
        },
        {
            time: 'CHAPTER 03 // KỶ NIỆM ĐỂ ĐỜI',
            title: 'Những Chuyến Đi & Cuộc Vui Tới Bến',
            desc: 'Lưu giữ tuổi trẻ.'
        },
        {
            time: 'CHAPTER 04 // HIỆN TẠI & TƯƠNG LAI',
            title: 'Nâng Tầm Cách Sống ',
            desc: 'Tiếp tục cùng nhau làm giàu, đổi đời đổi vận, chống tao thì chết!!.'
        }
    ],

    // 6. VÒNG QUAY CHỐT KÈO & THẺ ĐẶC QUYỀN
    deals: [
        '🍻 KÈO 1: Làm chầu Ăn Uống + Lai rai vài lon',
        '☕ KÈO 2: Cafe bàn về cách sống',
        '🥩 KÈO 3: Lại đi nhậu',
        '🏍️ KÈO 4: Tiếp tục nhậu',
        '🎮 KÈO 5: Giao lưu vài lon xuyên màn đêm',
        '🎁 KÈO ĐẶC BIỆT: Chủ xị mời anh em 1 chầu nhậu'
    ],

    vouchers: [
        {
            code: 'BRO-PASS-01',
            title: 'Đặc Quyền: Triệu Hồi Cốt Guộc',
            desc: 'Gọi là bắt máy ngày mưa hay nắng.'
        },
        {
            code: 'BRO-PASS-02',
            title: 'Đặc Quyền: Chủ Xị Chọn Quán',
            desc: 'Toàn quyền quyết định địa điểm ăn mừng sinh nhật năm nay.'
        },
        {
            code: 'BRO-PASS-03',
            title: 'Đặc Quyền: Phạt 1 Lần',
            desc: 'Tặng anh em 1 ly khai vị trước khi nhập tiệc'
        },
        {
            code: 'BRO-PASS-04',
            title: 'Đặc Quyền: Giấc ngủ bí mật',
            desc: 'Ngủ với bất kỳ ai trong bàn nhậu nếu muốn'
        }
    ]
};

// ——— HELPER ———
const $ = id => document.getElementById(id);

// ——— INIT PERSONALIZATION (Đồng bộ thông minh với index.html) ———
function initTexts() {
    // Tự động lấy mã PIN từ thẻ gợi ý trong index.html nếu bạn sửa trực tiếp bên HTML
    const hintPinEl = document.querySelector('#pwHints strong');
    if (hintPinEl && hintPinEl.textContent.trim()) {
        CONFIG.password = hintPinEl.textContent.trim();
    }

    $('clipCountBadge').textContent = CONFIG.clips.length;
    $('photoCountBadge').textContent = CONFIG.photos.length;
}
initTexts();

// ——— PASSWORD SCREEN ———
const pwInput = $('pwInput');
const pwError = $('pwError');
const pwScreen = $('pwScreen');
const main = $('main');

function getValidPasswords() {
    const hintPinEl = document.querySelector('#pwHints strong');
    const hintPin = hintPinEl ? hintPinEl.textContent.trim() : '';
    return new Set([CONFIG.password, hintPin, '0511', '0710'].filter(Boolean));
}

function unlockVault(skipAnim = false) {
    if (skipAnim) {
        pwScreen.classList.add('hide');
        pwScreen.style.display = 'none';
        main.classList.add('show');
        initAnims();
        return;
    }
    pwScreen.classList.add('hide');
    setTimeout(() => {
        main.classList.add('show');
        pwScreen.style.display = 'none';
        fireConfetti();
        initAnims();
    }, 650);
}

function checkPw() {
    const val = pwInput.value.trim();
    if (getValidPasswords().has(val)) {
        unlockVault(false);
    } else {
        pwInput.classList.add('shake');
        pwError.classList.add('show');
        setTimeout(() => pwInput.classList.remove('shake'), 450);
        setTimeout(() => pwError.classList.remove('show'), 2500);
    }
}

// Tự động mở khóa ngay khi gõ đủ đúng mã PIN hoặc bấm Enter / nút mũi tên
pwInput.addEventListener('input', () => {
    if (getValidPasswords().has(pwInput.value.trim())) {
        unlockVault(false);
    }
});
pwInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkPw();
    }
});
$('pwSubmit').addEventListener('click', e => {
    e.preventDefault();
    checkPw();
});
$('pwHintBtn').addEventListener('click', () => {
    $('pwHints').classList.toggle('show');
});

// Tự động focus vào ô nhập pass khi người dùng bấm phím bất kỳ ở màn hình khóa
document.addEventListener('keydown', e => {
    if (!pwScreen.classList.contains('hide') && document.activeElement !== pwInput) {
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            pwInput.focus();
        }
    }
});

// Chỉ giữ mở khóa khi trình duyệt tự động reload do lưu code (F5 thủ công sẽ hiện lại màn hình khóa để bạn test)
if (sessionStorage.getItem('auto_reload_unlocked') === '1') {
    sessionStorage.removeItem('auto_reload_unlocked');
    unlockVault(true);
} else {
    setTimeout(() => pwInput.focus(), 100);
}

// ——— TACTICAL PARTICLES ON PASSWORD SCREEN ———
(function drawPwBg() {
    const c = $('pwCanvas');
    const ctx = c.getContext('2d');
    let w, h, dots = [];
    const COLORS = ['#f59e0b', '#fbbf24', '#38bdf8', '#64748b'];

    function resize() {
        w = c.width = c.offsetWidth;
        h = c.height = c.offsetHeight;
    }
    function init() {
        resize();
        dots = Array.from({ length: 45 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2.5 + 1,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
            color: COLORS[Math.random() * COLORS.length | 0],
            alpha: Math.random() * 0.35 + 0.1
        }));
    }
    function draw() {
        ctx.clearRect(0, 0, w, h);
        dots.forEach(d => {
            d.x += d.dx;
            d.y += d.dy;
            if (d.x < 0 || d.x > w) d.dx *= -1;
            if (d.y < 0 || d.y > h) d.dy *= -1;
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fillStyle = d.color;
            ctx.globalAlpha = d.alpha;
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        if (!pwScreen.classList.contains('hide')) requestAnimationFrame(draw);
    }
    init();
    draw();
    window.addEventListener('resize', resize);
})();

// ——— METALLIC GOLD & STEEL CONFETTI ———
function fireConfetti() {
    const c = $('confettiCanvas');
    const ctx = c.getContext('2d');
    c.width = innerWidth;
    c.height = innerHeight;

    const PAL = ['#f59e0b', '#fbbf24', '#d97706', '#38bdf8', '#e2e8f0', '#10b981'];
    const N = 110;
    const pieces = Array.from({ length: N }, () => ({
        x: Math.random() * c.width,
        y: Math.random() * -c.height,
        w: Math.random() * 10 + 4,
        h: Math.random() * 5 + 2,
        color: PAL[Math.random() * PAL.length | 0],
        vy: Math.random() * 2.8 + 1.8,
        vx: (Math.random() - 0.5) * 1.8,
        angle: Math.random() * 6.28,
        spin: (Math.random() - 0.5) * 0.16,
        alpha: 1
    }));

    let frame = 0, max = 260;
    (function tick() {
        ctx.clearRect(0, 0, c.width, c.height);
        frame++;
        if (frame > max - 50) pieces.forEach(p => p.alpha -= 0.02);
        pieces.forEach(p => {
            p.y += p.vy;
            p.x += p.vx + Math.sin(p.angle) * 0.4;
            p.angle += p.spin;
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.alpha);
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        if (frame < max) requestAnimationFrame(tick);
        else ctx.clearRect(0, 0, c.width, c.height);
    })();
}

// ——— SCROLL-IN ANIMATIONS ———
function initAnims() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const d = +(e.target.dataset.delay || 0);
                setTimeout(() => e.target.classList.add('in'), d);
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.anim').forEach(el => io.observe(el));
}

// ——— MULTI-TAB NAVIGATION ———
function switchTab(tabKey, scrollToHub = false) {
    sessionStorage.setItem('active_tab', tabKey);
    document.querySelectorAll('.nav-tab').forEach(btn => {
        const isMatch = btn.dataset.tab === tabKey;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `panel-${tabKey}`);
    });

    if (scrollToHub) {
        $('hubWrapper').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab, false));
});

const savedTab = sessionStorage.getItem('active_tab');
if (savedTab) {
    switchTab(savedTab, false);
}

// ——— HERO CHEERS / TOAST INTERACTION ———
let cheersCount = 0;
const heroCake = $('heroCake');
const fwContainer = $('fireworksContainer');
const EMOJIS = ['🍻', '🥃', '🔥', '⚡', '🏆', '🎂', '🎉', '👑', '💯', '🚀'];
const SPARKLE_COLORS = ['#f59e0b', '#fbbf24', '#38bdf8', '#10b981', '#ffffff'];

heroCake.addEventListener('click', () => {
    cheersCount++;
    $('cheersCounter').textContent = `Đã cụng ${cheersCount} ly — Chúc cốt guộc tuổi mới rực rỡ! 🍻`;
    fireCakeFirework();
});

function fireCakeFirework() {
    heroCake.style.transform = 'scale(1.08)';
    setTimeout(() => heroCake.style.transform = '', 180);

    for (let i = 0; i < 18; i++) {
        const el = document.createElement('span');
        el.className = 'fw-particle';
        el.textContent = EMOJIS[Math.random() * EMOJIS.length | 0];
        const angle = (Math.PI * 2 / 18) * i + (Math.random() - 0.5) * 0.4;
        const dist = 80 + Math.random() * 130;
        el.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        el.style.setProperty('--ty', Math.sin(angle) * dist - 30 + 'px');
        el.style.fontSize = (1.2 + Math.random() * 1.1) + 'rem';
        fwContainer.appendChild(el);
    }

    for (let i = 0; i < 28; i++) {
        const el = document.createElement('span');
        el.className = 'fw-sparkle';
        const angle = Math.random() * Math.PI * 2;
        const dist = 40 + Math.random() * 160;
        const size = 3 + Math.random() * 6;
        el.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        el.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
        el.style.setProperty('--sz', size + 'px');
        el.style.setProperty('--clr', SPARKLE_COLORS[Math.random() * SPARKLE_COLORS.length | 0]);
        el.style.setProperty('--dl', (Math.random() * 0.15) + 's');
        fwContainer.appendChild(el);
    }

    setTimeout(() => { fwContainer.innerHTML = ''; }, 1100);
}

// ===================================================
// TAB 1: RENDER VIDEO CLIPS & VIDEO MODAL PLAYER
// ===================================================
const clipsGrid = $('clipsGrid');
let currentClipIdx = 0;
let fallbackAnimId = null;

function renderClips() {
    clipsGrid.innerHTML = CONFIG.clips.map((clip, idx) => `
        <article class="clip-card" data-clip-idx="${idx}">
            <div class="clip-thumb">
                <img src="${clip.thumb}" alt="${clip.title}" loading="lazy">
                <span class="clip-badge-role">${clip.sender}</span>
                <div class="clip-play-btn" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                </div>
                <span class="clip-duration">${clip.duration}</span>
            </div>
            <div class="clip-body">
                <div>
                    <h3 class="clip-title">${clip.title}</h3>
                    <p class="clip-quote">"${clip.quote}"</p>
                </div>
                <div class="clip-footer">
                    <span>▶ Bấm để phát clip</span>
                </div>
            </div>
        </article>
    `).join('');

    clipsGrid.querySelectorAll('.clip-card').forEach(card => {
        card.addEventListener('click', () => openVideoModal(+card.dataset.clipIdx));
    });
}
renderClips();

const videoModal = $('videoModal');
const vmodalVideo = $('vmodalVideo');
const vmodalFallback = $('vmodalFallback');

function openVideoModal(idx) {
    currentClipIdx = (idx + CONFIG.clips.length) % CONFIG.clips.length;
    const clip = CONFIG.clips[currentClipIdx];

    $('vmodalSender').textContent = clip.sender;
    $('vmodalTitle').textContent = clip.title;
    $('vmodalQuote').textContent = `"${clip.quote}"`;
    $('fallbackTitle').textContent = clip.title;
    $('fallbackDesc').textContent = `"${clip.quote}"`;
    $('fallbackPath').textContent = clip.videoSrc;

    cancelAnimationFrame(fallbackAnimId);
    vmodalFallback.classList.remove('show');
    vmodalVideo.style.display = 'block';
    vmodalVideo.poster = clip.thumb;
    vmodalVideo.src = clip.videoSrc;
    vmodalVideo.muted = false;
    vmodalVideo.load();

    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const playPromise = vmodalVideo.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            // Nếu trình duyệt chặn tự phát có tiếng, giữ nguyên khung video để người dùng bấm Play
            console.warn('Video play notice:', err);
        });
    }
}

vmodalVideo.addEventListener('error', () => {
    if (!videoModal.classList.contains('open') || !vmodalVideo.getAttribute('src')) return;
    showFallbackPreview(CONFIG.clips[currentClipIdx]);
});

function showFallbackPreview(clip) {
    vmodalVideo.pause();
    vmodalVideo.style.display = 'none';
    vmodalFallback.classList.add('show');
}

function closeVideoModal() {
    videoModal.classList.remove('open');
    vmodalVideo.pause();
    vmodalVideo.removeAttribute('src');
    vmodalVideo.load();
    cancelAnimationFrame(fallbackAnimId);
    document.body.style.overflow = '';
}

$('vmodalClose').addEventListener('click', closeVideoModal);
$('vmodalBackdrop').addEventListener('click', closeVideoModal);
$('vmodalPrev').addEventListener('click', () => openVideoModal(currentClipIdx - 1));
$('vmodalNext').addEventListener('click', () => openVideoModal(currentClipIdx + 1));
$('playAllClipsBtn').addEventListener('click', () => openVideoModal(0));

vmodalVideo.addEventListener('ended', () => {
    if (currentClipIdx < CONFIG.clips.length - 1) {
        openVideoModal(currentClipIdx + 1);
    }
});

// ===================================================
// TAB 2: RENDER PHOTO GALLERY & LIGHTBOX
// ===================================================
const galleryGrid = $('galleryGrid');
let filteredPhotos = [...CONFIG.photos];
let curPhotoIdx = 0;

function renderGallery(filter = 'all') {
    filteredPhotos = filter === 'all'
        ? CONFIG.photos
        : CONFIG.photos.filter(p => p.cat === filter);

    galleryGrid.innerHTML = filteredPhotos.map((item, idx) => `
        <div class="g-item" data-idx="${idx}">
            <img src="${item.src}" alt="${item.cap}" loading="lazy">
            <div class="g-overlay">
                <span class="g-tag">${item.tag}</span>
                <span class="g-title">${item.cap}</span>
            </div>
        </div>
    `).join('');

    galleryGrid.querySelectorAll('.g-item').forEach(el => {
        el.addEventListener('click', () => openLb(+el.dataset.idx));
    });
    renderLbDots();
}

document.querySelectorAll('#photoFilterBar .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#photoFilterBar .filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.dataset.filter);
    });
});

const lb = $('lb');
const lbImg = $('lbImg');
const lbCap = $('lbCaption');
const lbCat = $('lbCat');
const lbDots = $('lbDots');

function renderLbDots() {
    lbDots.innerHTML = '';
    filteredPhotos.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'lb-dot' + (i === 0 ? ' active' : '');
        d.addEventListener('click', () => goToPhoto(i));
        lbDots.appendChild(d);
    });
}

function goToPhoto(i) {
    curPhotoIdx = (i + filteredPhotos.length) % filteredPhotos.length;
    const item = filteredPhotos[curPhotoIdx];
    lbImg.style.opacity = '0';
    setTimeout(() => {
        lbImg.src = item.src;
        lbImg.alt = item.cap;
        lbCap.textContent = item.cap;
        lbCat.textContent = item.tag;
        lbImg.style.opacity = '1';
        lbDots.querySelectorAll('.lb-dot').forEach((d, j) =>
            d.classList.toggle('active', j === curPhotoIdx)
        );
    }, 140);
}

function openLb(i) {
    curPhotoIdx = i;
    const item = filteredPhotos[i];
    lbImg.src = item.src;
    lbImg.alt = item.cap;
    lbCap.textContent = item.cap;
    lbCat.textContent = item.tag;
    lbDots.querySelectorAll('.lb-dot').forEach((d, j) =>
        d.classList.toggle('active', j === i)
    );
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
}

$('lbBackdrop').addEventListener('click', closeLb);
$('lbClose').addEventListener('click', closeLb);
$('lbPrev').addEventListener('click', () => goToPhoto(curPhotoIdx - 1));
$('lbNext').addEventListener('click', () => goToPhoto(curPhotoIdx + 1));

renderGallery('all');

// ===================================================
// TAB 3: RENDER PROFILE SKILLS & ACHIEVEMENTS
// ===================================================
$('skillBarsContainer').innerHTML = CONFIG.skills.map(s => `
    <div class="skill-row">
        <div class="skill-head">
            <span>${s.name}</span>
            <span class="skill-val">${s.val}/100</span>
        </div>
        <div class="skill-track">
            <div class="skill-fill" style="width: ${s.val}%"></div>
        </div>
    </div>
`).join('');

$('badgesGrid').innerHTML = CONFIG.badges.map(b => `
    <div class="badge-card">
        <div class="badge-icon">${b.icon}</div>
        <div>
            <h4>${b.title}</h4>
            <p>${b.desc}</p>
        </div>
    </div>
`).join('');

// ===================================================
// TAB 4: RENDER BROTHERHOOD TIMELINE
// ===================================================
$('timelineContainer').innerHTML = CONFIG.timeline.map(item => `
    <div class="tl-item">
        <span class="tl-dot"></span>
        <span class="tl-time">${item.time}</span>
        <h4 class="tl-title">${item.title}</h4>
        <p class="tl-desc">${item.desc}</p>
    </div>
`).join('');

// ===================================================
// TAB 5: DEAL SPINNER & CLAIMABLE VOUCHERS
// ===================================================
const spinDealBtn = $('spinDealBtn');
const dealResultText = $('dealResultText');
let isSpinning = false;

spinDealBtn.addEventListener('click', () => {
    if (isSpinning) return;
    isSpinning = true;
    let ticks = 0;
    const totalTicks = 18;

    const interval = setInterval(() => {
        const randomDeal = CONFIG.deals[Math.floor(Math.random() * CONFIG.deals.length)];
        dealResultText.textContent = randomDeal;
        ticks++;
        if (ticks >= totalTicks) {
            clearInterval(interval);
            isSpinning = false;
            fireConfetti();
        }
    }, 85);
});

$('vouchersGrid').innerHTML = CONFIG.vouchers.map((v, idx) => `
    <div class="voucher-card" id="voucher-${idx}">
        <div>
            <div class="voucher-top">
                <span class="voucher-code">#${v.code}</span>
                <span>⚡ VIP PASS</span>
            </div>
            <h4>${v.title}</h4>
            <p>${v.desc}</p>
        </div>
        <button class="voucher-btn" data-vidx="${idx}">Bấm Để Nhận Đặc Quyền</button>
    </div>
`).join('');

document.querySelectorAll('.voucher-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = $(`voucher-${btn.dataset.vidx}`);
        card.classList.toggle('claimed');
        if (card.classList.contains('claimed')) {
            btn.textContent = '✓ Đã Kích Hoạt Đặc Quyền';
            fireConfetti();
        } else {
            btn.textContent = 'Bấm Để Nhận Đặc Quyền';
        }
    });
});

// ——— KEYBOARD NAVIGATION ———
document.addEventListener('keydown', e => {
    if (lb.classList.contains('open')) {
        if (e.key === 'Escape') closeLb();
        if (e.key === 'ArrowLeft') goToPhoto(curPhotoIdx - 1);
        if (e.key === 'ArrowRight') goToPhoto(curPhotoIdx + 1);
    }
    if (videoModal.classList.contains('open')) {
        if (e.key === 'Escape') closeVideoModal();
        if (e.key === 'ArrowLeft') openVideoModal(currentClipIdx - 1);
        if (e.key === 'ArrowRight') openVideoModal(currentClipIdx + 1);
    }
});

window.addEventListener('resize', () => {
    const c = $('confettiCanvas');
    if (c) { c.width = innerWidth; c.height = innerHeight; }
});

// ===================================================
// AUTO LIVE-RELOAD (TỰ ĐỘNG CẬP NHẬT TRÌNH DUYỆT KHI LƯU CODE)
// ===================================================
(function initAutoLiveReload() {
    if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;
    const WATCH_FILES = ['index.html', 'style.css', 'script.js'];
    const signatures = {};

    async function checkFiles() {
        for (const file of WATCH_FILES) {
            try {
                const res = await fetch(`${file}?_t=${Date.now()}`, {
                    method: 'HEAD',
                    cache: 'no-store'
                });
                const sig = `${res.headers.get('Last-Modified') || ''}_${res.headers.get('Content-Length') || ''}`;
                if (!signatures[file]) {
                    signatures[file] = sig;
                } else if (signatures[file] !== sig) {
                    signatures[file] = sig;
                    if (file === 'style.css') {
                        // Hot-reload CSS mượt mà không cần tải lại trang
                        const link = document.querySelector('link[href^="style.css"]');
                        if (link) link.href = `style.css?_v=${Date.now()}`;
                    } else {
                        // Lưu trạng thái và tải lại trang ngay lập tức
                        if (main.classList.contains('show')) {
                            sessionStorage.setItem('auto_reload_unlocked', '1');
                        }
                        sessionStorage.setItem('scroll_y', window.scrollY);
                        location.reload();
                    }
                    return;
                }
            } catch (_) {
                // Bỏ qua nếu server đang bận
            }
        }
    }

    // Khôi phục vị trí cuộn sau khi tự động reload
    const savedY = sessionStorage.getItem('scroll_y');
    if (savedY !== null) {
        window.scrollTo(0, +savedY);
        sessionStorage.removeItem('scroll_y');
    }

    setInterval(checkFiles, 1000);
})();
