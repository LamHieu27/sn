/* ===================================================
   Birthday Website — Linda Saliha
   Script: password, confetti, scroll-in, lightbox
   =================================================== */

// ——— PASSWORD ———
const PW = '0710';
const $pw = id => document.getElementById(id);
const pwInput = $pw('pwInput');
const pwError = $pw('pwError');
const pwScreen = $pw('pwScreen');
const main = $pw('main');

function checkPw() {
    if (pwInput.value === PW) {
        pwScreen.classList.add('hide');
        setTimeout(() => {
            main.classList.add('show');
            pwScreen.style.display = 'none';
            fireConfetti();
            initAnims();
        }, 700);
    } else {
        pwInput.classList.add('shake');
        pwError.classList.add('show');
        setTimeout(() => pwInput.classList.remove('shake'), 450);
        setTimeout(() => pwError.classList.remove('show'), 2500);
    }
}
pwInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkPw(); });
$pw('pwSubmit').addEventListener('click', checkPw);
$pw('pwHintBtn').addEventListener('click', () => {
    $pw('pwHints').classList.toggle('show');
});

// ——— BACKGROUND DOTS on password screen ———
(function drawPwBg() {
    const c = $pw('pwCanvas');
    const ctx = c.getContext('2d');
    let w, h, dots = [];
    const COLORS = ['#d4b896', '#c49a6c', '#dbb992', '#ecd5b8'];

    function resize() {
        w = c.width = c.offsetWidth;
        h = c.height = c.offsetHeight;
    }
    function init() {
        resize();
        dots = Array.from({ length: 40 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 3 + 1.5,
            dx: (Math.random() - .5) * .3,
            dy: (Math.random() - .5) * .3,
            color: COLORS[Math.random() * COLORS.length | 0],
            alpha: Math.random() * .3 + .15
        }));
    }
    function draw() {
        ctx.clearRect(0, 0, w, h);
        dots.forEach(d => {
            d.x += d.dx; d.y += d.dy;
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
    init(); draw();
    window.addEventListener('resize', () => { resize(); });
})();

// ——— CONFETTI ———
function fireConfetti() {
    const c = $pw('confettiCanvas');
    const ctx = c.getContext('2d');
    c.width = innerWidth; c.height = innerHeight;

    const PAL = ['#c49a6c', '#dbb992', '#ecd5b8', '#b0845a', '#d4b896', '#f0dcc6', '#e0c4a0'];
    const N = 120;
    const pieces = Array.from({ length: N }, () => ({
        x: Math.random() * c.width,
        y: Math.random() * -c.height,
        w: Math.random() * 9 + 4,
        h: Math.random() * 5 + 2,
        color: PAL[Math.random() * PAL.length | 0],
        vy: Math.random() * 2.5 + 1.8,
        vx: (Math.random() - .5) * 1.6,
        angle: Math.random() * 6.28,
        spin: (Math.random() - .5) * .15,
        alpha: 1
    }));

    let frame = 0, max = 280;
    (function tick() {
        ctx.clearRect(0, 0, c.width, c.height);
        frame++;
        if (frame > max - 50) pieces.forEach(p => p.alpha -= .02);
        pieces.forEach(p => {
            p.y += p.vy; p.x += p.vx + Math.sin(p.angle) * .4;
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
    }, { threshold: .15, rootMargin: '0px 0px -40px' });

    document.querySelectorAll('.anim').forEach(el => io.observe(el));
}

// ——— CAKE FIREWORK ———
const heroCake = $pw('heroCake');
const fwContainer = $pw('fireworksContainer');
const EMOJIS = ['🎂', '🧁', '🎉', '🎊', '🎈', '🌟', '✨', '💫', '🎀', '🎁', '🍰', '🕯️'];
const SPARKLE_COLORS = ['#c49a6c', '#dbb992', '#ecd5b8', '#f0dcc6', '#e8c08a', '#d4a06a', '#f5e0c4'];

heroCake.addEventListener('click', fireCakeFirework);

function fireCakeFirework() {
    // Bounce the cake
    heroCake.style.transform = 'scale(1.25)';
    setTimeout(() => heroCake.style.transform = '', 200);

    // Emoji burst — 20 emojis fly outward
    for (let i = 0; i < 20; i++) {
        const el = document.createElement('span');
        el.className = 'fw-particle';
        el.textContent = EMOJIS[Math.random() * EMOJIS.length | 0];
        const angle = (Math.PI * 2 / 20) * i + (Math.random() - .5) * .4;
        const dist = 80 + Math.random() * 120;
        el.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        el.style.setProperty('--ty', Math.sin(angle) * dist - 30 + 'px');
        el.style.fontSize = (1.2 + Math.random() * 1.2) + 'rem';
        fwContainer.appendChild(el);
    }

    // Sparkle dots — 30 small colored circles
    for (let i = 0; i < 30; i++) {
        const el = document.createElement('span');
        el.className = 'fw-sparkle';
        const angle = Math.random() * Math.PI * 2;
        const dist = 40 + Math.random() * 160;
        const size = 3 + Math.random() * 6;
        el.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        el.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
        el.style.setProperty('--sz', size + 'px');
        el.style.setProperty('--clr', SPARKLE_COLORS[Math.random() * SPARKLE_COLORS.length | 0]);
        el.style.setProperty('--dl', (Math.random() * .15) + 's');
        fwContainer.appendChild(el);
    }

    // Cleanup after animation
    setTimeout(() => {
        fwContainer.innerHTML = '';
    }, 1200);
}

// ——— LIGHTBOX ———
const images = [
    { src: 'images/moment_1.jpg', cap: 'Lễ Tốt Nghiệp 🌻' },
    { src: 'images/moment_2.jpg', cap: 'Chỉ Tay Đồ 🎂' },
    { src: 'images/moment_3.jpg', cap: 'Xoắn Tóc Chi Dạ 🌅' },
    { src: 'images/moment_4.jpg', cap: 'Picnic Hả ☕' },
    { src: 'images/moment_5.jpg', cap: 'Mặt Dữ Nha 📸' },
    { src: 'images/moment_6.jpg', cap: 'Bánh Ngon 🎁' }
];
let cur = 0;
const lb = $pw('lb');
const lbImg = $pw('lbImg');
const lbCap = $pw('lbCaption');
const lbDots = $pw('lbDots');

// Build dots
images.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'lb-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    lbDots.appendChild(d);
});

function goTo(i) {
    cur = i;
    // Smooth image swap
    lbImg.style.opacity = '0';
    lbImg.style.transform = 'scale(.95)';
    setTimeout(() => {
        lbImg.src = images[cur].src;
        lbImg.alt = images[cur].cap;
        lbCap.textContent = images[cur].cap;
        lbImg.style.opacity = '1';
        lbImg.style.transform = 'scale(1)';
        lbDots.querySelectorAll('.lb-dot').forEach((d, j) =>
            d.classList.toggle('active', j === cur)
        );
    }, 160);
}

function openLb(i) {
    cur = i;
    lbImg.src = images[i].src;
    lbImg.alt = images[i].cap;
    lbCap.textContent = images[i].cap;
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

// Gallery clicks
document.querySelectorAll('.g-item').forEach(el => {
    el.addEventListener('click', () => openLb(+el.dataset.idx));
});

// Lightbox controls
$pw('lbBackdrop').addEventListener('click', closeLb);
$pw('lbClose').addEventListener('click', closeLb);
$pw('lbPrev').addEventListener('click', () => goTo((cur - 1 + images.length) % images.length));
$pw('lbNext').addEventListener('click', () => goTo((cur + 1) % images.length));

// Touch swipe support
let touchStartX = 0;
lb.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) goTo((cur - 1 + images.length) % images.length);
        else goTo((cur + 1) % images.length);
    }
});

// Keyboard
document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') goTo((cur - 1 + images.length) % images.length);
    if (e.key === 'ArrowRight') goTo((cur + 1) % images.length);
});

// Resize
window.addEventListener('resize', () => {
    const c = $pw('confettiCanvas');
    if (c) { c.width = innerWidth; c.height = innerHeight; }
});
