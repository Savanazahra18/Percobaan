/* ==========================================================================
   PRODUCT DATABASE (With High-Fidelity SVG Illustrations)
   ========================================================================== */
const PRODUCTS = [
    {
        id: 'semen-portland',
        title: 'Semen Portland (40kg)',
        category: 'semen',
        desc: 'Semen Portland berkualitas tinggi kelas satu, dirancang khusus untuk pengecoran beton, pekerjaan mortar plesteran, dan pemasangan dinding bata merah. Cepat kering, memiliki daya rekat tinggi, dan hasil akhir tahan retak.',
        prices: {
            pcs: 65000,
            pack: 620000 // 10 zak (hemat Rp 30.000)
        },
        units: {
            pcs: 'Per PCS (1 zak)',
            pack: 'Per PACK (10 zak)'
        },
        stock: 120,
        unitLabel: 'zak',
        packRatio: 10,
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
                <linearGradient id="semenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#cbd5e1" />
                    <stop offset="50%" stop-color="#94a3b8" />
                    <stop offset="100%" stop-color="#64748b" />
                </linearGradient>
            </defs>
            <!-- Bag shadow -->
            <path d="M22 82 C 35 86, 65 86, 78 82" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="6" stroke-linecap="round" />
            <!-- Sack outline & body -->
            <path d="M25 24 C 20 40, 22 75, 28 80 C 40 83, 60 83, 72 80 C 78 75, 80 40, 75 24 C 65 21, 35 21, 25 24 Z" fill="url(#semenGrad)" stroke="#475569" stroke-width="2" stroke-linejoin="round" />
            <!-- Neck & tie -->
            <path d="M35 22 C 40 18, 60 18, 65 22" fill="none" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
            <ellipse cx="50" cy="22" rx="6" ry="2" fill="#e2e8f0" stroke="#334155" stroke-width="1.5" />
            <!-- Sack textures / wrinkles -->
            <path d="M27 35 C 33 37, 40 33, 45 35" fill="none" stroke="#475569" stroke-width="1" stroke-linecap="round"/>
            <path d="M55 42 C 62 44, 70 41, 73 45" fill="none" stroke="#475569" stroke-width="1" stroke-linecap="round"/>
            <path d="M26 65 C 32 68, 42 63, 48 66" fill="none" stroke="#475569" stroke-width="1" stroke-linecap="round"/>
            <path d="M52 70 C 60 72, 68 67, 74 71" fill="none" stroke="#475569" stroke-width="1" stroke-linecap="round"/>
            <!-- Stencil tag box -->
            <rect x="34" y="44" width="32" height="20" rx="3" fill="#e2e8f0" stroke="#475569" stroke-width="1" />
            <text x="50" y="54" font-family="monospace" font-size="7" font-weight="bold" fill="#334155" text-anchor="middle">SEMEN</text>
            <text x="50" y="60" font-family="sans-serif" font-size="5" font-weight="600" fill="#64748b" text-anchor="middle">PORTLAND 40KG</text>
        </svg>`
    },
    {
        id: 'bata-merah',
        title: 'Bata Merah Pres',
        category: 'bata',
        desc: 'Bata merah pres pembakaran sempurna hasil kerajinan lokal. Sangat padat, memiliki presisi tinggi, tahan terhadap cuaca ekstrem, dan sangat kokoh untuk struktur dinding penahan beban maupun dekoratif.',
        prices: {
            pcs: 650,
            pack: 60000 // 100 pcs (hemat Rp 5.000)
        },
        units: {
            pcs: 'Per PCS (1 pcs)',
            pack: 'Per PACK (100 pcs)'
        },
        stock: 3500,
        unitLabel: 'pcs',
        packRatio: 100,
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
                <linearGradient id="brickGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f87171" />
                    <stop offset="50%" stop-color="#dc2626" />
                    <stop offset="100%" stop-color="#b91c1c" />
                </linearGradient>
                <linearGradient id="brickSideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#b91c1c" />
                    <stop offset="100%" stop-color="#991b1b" />
                </linearGradient>
            </defs>
            <!-- Shadow -->
            <path d="M15 80 L 50 88 L 85 80 L 50 72 Z" fill="rgba(0,0,0,0.12)" />
            <!-- Stack of bricks -->
            <!-- Brick 3 (Bottom left) -->
            <g transform="translate(-10, 15)">
                <path d="M25 50 L 45 56 L 45 64 L 25 58 Z" fill="url(#brickSideGrad)" stroke="#7f1d1d" stroke-width="1"/>
                <path d="M45 56 L 68 50 L 68 58 L 45 64 Z" fill="url(#brickGrad)" stroke="#7f1d1d" stroke-width="1"/>
                <path d="M25 50 L 45 44 L 68 50 L 45 56 Z" fill="#fca5a5" stroke="#7f1d1d" stroke-width="1"/>
            </g>
            <!-- Brick 2 (Bottom right) -->
            <g transform="translate(14, 10)">
                <path d="M25 50 L 45 56 L 45 64 L 25 58 Z" fill="url(#brickSideGrad)" stroke="#7f1d1d" stroke-width="1"/>
                <path d="M45 56 L 68 50 L 68 58 L 45 64 Z" fill="url(#brickGrad)" stroke="#7f1d1d" stroke-width="1"/>
                <path d="M25 50 L 45 44 L 68 50 L 45 56 Z" fill="#fca5a5" stroke="#7f1d1d" stroke-width="1"/>
            </g>
            <!-- Brick 1 (Top Center) -->
            <g transform="translate(2, -2)">
                <path d="M25 50 L 45 56 L 45 64 L 25 58 Z" fill="url(#brickSideGrad)" stroke="#7f1d1d" stroke-width="1"/>
                <path d="M45 56 L 68 50 L 68 58 L 45 64 Z" fill="url(#brickGrad)" stroke="#7f1d1d" stroke-width="1"/>
                <path d="M25 50 L 45 44 L 68 50 L 45 56 Z" fill="#fca5a5" stroke="#7f1d1d" stroke-width="1"/>
            </g>
        </svg>`
    },
    {
        id: 'besi-beton',
        title: 'Besi Beton 10mm (U-24)',
        category: 'besi',
        desc: 'Besi beton polos ukuran 10mm berstandar SNI (U-24), panjang standar 12 meter (dikirim ditekuk/utuh sesuai armada). Sangat tangguh untuk pembesian balok, kolom praktis, dan plat lantai rumah.',
        prices: {
            pcs: 75000,
            pack: 720000 // 10 batang (hemat Rp 30.000)
        },
        units: {
            pcs: 'Per PCS (1 batang)',
            pack: 'Per PACK (10 batang)'
        },
        stock: 80,
        unitLabel: 'batang',
        packRatio: 10,
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
                <linearGradient id="ironGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#cbd5e1" />
                    <stop offset="30%" stop-color="#64748b" />
                    <stop offset="70%" stop-color="#475569" />
                    <stop offset="100%" stop-color="#1e293b" />
                </linearGradient>
            </defs>
            <!-- Shadow -->
            <path d="M15 80 L 85 30" stroke="rgba(0,0,0,0.1)" stroke-width="8" stroke-linecap="round" />
            <!-- Bar 3 -->
            <path d="M16 76 L 76 16" stroke="url(#ironGrad)" stroke-width="6" stroke-linecap="round" />
            <path d="M18 74 L 74 18" stroke="#475569" stroke-width="6" stroke-dasharray="2,5" stroke-linecap="round" opacity="0.3" />
            <!-- Bar 2 -->
            <path d="M24 82 L 84 22" stroke="url(#ironGrad)" stroke-width="6" stroke-linecap="round" />
            <path d="M26 80 L 82 24" stroke="#475569" stroke-width="6" stroke-dasharray="2,5" stroke-linecap="round" opacity="0.3" />
            <!-- Bar 1 (Main front) -->
            <path d="M20 86 L 80 26" stroke="url(#ironGrad)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
            <!-- Ridges pattern simulated by dashes -->
            <path d="M22 84 L 78 28" stroke="#ffffff" stroke-width="7" stroke-dasharray="1.5,6" stroke-linecap="round" opacity="0.4" />
            <!-- Steel tags -->
            <circle cx="80" cy="26" r="3.5" fill="#ef4444" />
        </svg>`
    },
    {
        id: 'cat-tembok',
        title: 'Cat Tembok Skg (5kg)',
        category: 'cat',
        desc: 'Cat tembok emulsi interior berkualitas tinggi dengan hasil akhir dof/matte yang menawan. Daya sebar luas, cepat kering, memiliki formula anti-pudar, dan mudah dibersihkan bila terkena noda ringan.',
        prices: {
            pcs: 85000,
            pack: 800000 // 10 kaleng (hemat Rp 50.000)
        },
        units: {
            pcs: 'Per PCS (1 kaleng)',
            pack: 'Per PACK (10 kaleng)'
        },
        stock: 45,
        unitLabel: 'kaleng',
        packRatio: 10,
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
                <linearGradient id="pailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#f8fafc" />
                    <stop offset="80%" stop-color="#e2e8f0" />
                    <stop offset="100%" stop-color="#cbd5e1" />
                </linearGradient>
                <linearGradient id="labelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#3b82f6" />
                    <stop offset="100%" stop-color="#1d4ed8" />
                </linearGradient>
            </defs>
            <!-- Shadow -->
            <ellipse cx="50" cy="84" rx="28" ry="6" fill="rgba(0,0,0,0.1)" />
            <!-- Handle -->
            <path d="M20 54 C 20 28, 80 28, 80 54" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
            <!-- Pail Base -->
            <path d="M23 52 L 27 80 C 28 83, 72 83, 73 80 L 77 52 Z" fill="url(#pailGrad)" stroke="#64748b" stroke-width="1.5" stroke-linejoin="round"/>
            <!-- Lid -->
            <ellipse cx="50" cy="51" rx="27" ry="5" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
            <ellipse cx="50" cy="49" rx="28" ry="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5" />
            <!-- Color Label Graphic -->
            <path d="M24.7 60 L 26 72 C 30 74, 70 74, 74 72 L 75.3 60 C 70 62, 30 62, 24.7 60 Z" fill="url(#labelGrad)" />
            <!-- Text on label -->
            <text x="50" y="68" font-family="sans-serif" font-weight="800" font-size="5" fill="#ffffff" text-anchor="middle">SKG PAINT</text>
            <!-- Paint drips -->
            <path d="M35 52 C 35 58, 38 58, 38 52" fill="#3b82f6" />
            <circle cx="38" cy="57" r="1.5" fill="#3b82f6" />
        </svg>`
    },
    {
        id: 'semen-mortar',
        title: 'Semen Mortar Instan (40kg)',
        category: 'semen',
        desc: 'Semen mortar instan siap pakai untuk perekat bata ringan (hebel) berkualitas premium. Berdaya rekat ekstra kuat, tipis saat diaplikasikan (hemat bahan), serta pengerjaan lebih cepat dan praktis.',
        prices: {
            pcs: 85000,
            pack: 820000 // 10 zak (hemat Rp 30.000)
        },
        units: {
            pcs: 'Per PCS (1 zak)',
            pack: 'Per PACK (10 zak)'
        },
        stock: 90,
        unitLabel: 'zak',
        packRatio: 10,
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
                <linearGradient id="mortarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fdba74" />
                    <stop offset="50%" stop-color="#f97316" />
                    <stop offset="100%" stop-color="#c2410c" />
                </linearGradient>
            </defs>
            <!-- Bag shadow -->
            <path d="M22 82 C 35 86, 65 86, 78 82" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="6" stroke-linecap="round" />
            <!-- Sack outline & body -->
            <path d="M25 24 C 20 40, 22 75, 28 80 C 40 83, 60 83, 72 80 C 78 75, 80 40, 75 24 C 65 21, 35 21, 25 24 Z" fill="url(#mortarGrad)" stroke="#7c2d12" stroke-width="2" stroke-linejoin="round" />
            <!-- Neck & tie -->
            <path d="M35 22 C 40 18, 60 18, 65 22" fill="none" stroke="#7c2d12" stroke-width="2.5" stroke-linecap="round"/>
            <ellipse cx="50" cy="22" rx="6" ry="2" fill="#ffedd5" stroke="#7c2d12" stroke-width="1.5" />
            <!-- Sack textures / wrinkles -->
            <path d="M27 35 C 33 37, 40 33, 45 35" fill="none" stroke="#7c2d12" stroke-width="1" stroke-linecap="round"/>
            <path d="M55 42 C 62 44, 70 41, 73 45" fill="none" stroke="#7c2d12" stroke-width="1" stroke-linecap="round"/>
            <!-- Stencil tag box -->
            <rect x="34" y="44" width="32" height="20" rx="3" fill="#ffedd5" stroke="#7c2d12" stroke-width="1" />
            <text x="50" y="54" font-family="monospace" font-size="7" font-weight="bold" fill="#7c2d12" text-anchor="middle">MORTAR</text>
            <text x="50" y="60" font-family="sans-serif" font-size="5" font-weight="600" fill="#c2410c" text-anchor="middle">INSTAN 40KG</text>
        </svg>`
    },
    {
        id: 'bata-ringan',
        title: 'Bata Ringan Hebel (pcs)',
        category: 'bata',
        desc: 'Bata ringan Hebel AAC presisi tinggi berstandar internasional. Ringan namun memiliki kuat tekan yang kokoh, berpori rapat untuk insulasi suara dan panas yang sangat baik, serta menghemat beban struktur bangunan Anda.',
        prices: {
            pcs: 9500,
            pack: 900000 // 100 pcs (hemat Rp 50.000)
        },
        units: {
            pcs: 'Per PCS (1 pcs)',
            pack: 'Per PACK (100 pcs)'
        },
        stock: 800,
        unitLabel: 'pcs',
        packRatio: 100,
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
                <linearGradient id="hebelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f1f5f9" />
                    <stop offset="50%" stop-color="#cbd5e1" />
                    <stop offset="100%" stop-color="#94a3b8" />
                </linearGradient>
            </defs>
            <!-- Shadow -->
            <path d="M15 75 L 50 83 L 85 75 L 50 67 Z" fill="rgba(0,0,0,0.1)" />
            <!-- Hebel Block -->
            <path d="M20 50 L 45 58 L 45 68 L 20 60 Z" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
            <path d="M45 58 L 80 50 L 80 60 L 45 68 Z" fill="url(#hebelGrad)" stroke="#475569" stroke-width="1.5"/>
            <path d="M20 50 L 45 42 L 80 50 L 45 58 Z" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
            <!-- Texture dots -->
            <circle cx="50" cy="53" r="0.8" fill="#94a3b8"/>
            <circle cx="58" cy="51" r="0.8" fill="#94a3b8"/>
            <circle cx="68" cy="52" r="0.8" fill="#94a3b8"/>
            <circle cx="35" cy="54" r="0.8" fill="#64748b"/>
            <circle cx="30" cy="56" r="0.8" fill="#64748b"/>
        </svg>`
    },
    {
        id: 'kawat-bendrat',
        title: 'Kawat Bendrat (1 roll)',
        category: 'besi',
        desc: 'Kawat bendrat hitam berkualitas prima untuk pengikat besi beton (tulangan). Sangat ulet, elastis (tidak mudah patah saat ditekuk/diplintir), memudahkan pengerjaan rakitan pembesian struktur bangunan.',
        prices: {
            pcs: 18000,
            pack: 170000 // 10 roll (hemat Rp 10.000)
        },
        units: {
            pcs: 'Per PCS (1 roll)',
            pack: 'Per PACK (10 roll)'
        },
        stock: 50,
        unitLabel: 'roll',
        packRatio: 10,
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
                <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#94a3b8" />
                    <stop offset="100%" stop-color="#334155" />
                </linearGradient>
            </defs>
            <!-- Shadow -->
            <ellipse cx="50" cy="78" rx="28" ry="8" fill="rgba(0,0,0,0.12)" />
            <!-- Wire coils -->
            <ellipse cx="50" cy="55" rx="22" ry="14" fill="none" stroke="url(#wireGrad)" stroke-width="4" />
            <ellipse cx="51" cy="56" rx="21" ry="13" fill="none" stroke="#475569" stroke-width="2.5" />
            <ellipse cx="49" cy="54" rx="23" ry="15" fill="none" stroke="#64748b" stroke-width="2" />
            <!-- Binding straps -->
            <rect x="48" y="38" width="4" height="34" rx="1" fill="#ef4444" transform="rotate(30, 50, 55)" />
            <rect x="48" y="38" width="4" height="34" rx="1" fill="#ef4444" transform="rotate(-45, 50, 55)" />
        </svg>`
    },
    {
        id: 'cat-kayu',
        title: 'Cat Kayu & Besi (1kg)',
        category: 'cat',
        desc: 'Cat kayu dan besi sintetis berkualitas premium dengan formula kilap tinggi (high gloss). Cepat kering, tahan cuaca ekstrem, anti-karat untuk besi, serta melindungi permukaan kayu dari pelapukan.',
        prices: {
            pcs: 65000,
            pack: 620000 // 10 kaleng (hemat Rp 30.000)
        },
        units: {
            pcs: 'Per PCS (1 kaleng)',
            pack: 'Per PACK (10 kaleng)'
        },
        stock: 35,
        unitLabel: 'kaleng',
        packRatio: 10,
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
                <linearGradient id="woodPaintGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#f8fafc" />
                    <stop offset="80%" stop-color="#cbd5e1" />
                    <stop offset="100%" stop-color="#94a3b8" />
                </linearGradient>
                <linearGradient id="woodPaintLabel" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ec4899" />
                    <stop offset="100%" stop-color="#be185d" />
                </linearGradient>
            </defs>
            <!-- Shadow -->
            <ellipse cx="50" cy="84" rx="22" ry="5" fill="rgba(0,0,0,0.1)" />
            <!-- Can base -->
            <path d="M28 58 L 31 80 C 32 82, 68 82, 69 80 L 72 58 Z" fill="url(#woodPaintGrad)" stroke="#475569" stroke-width="1.5" stroke-linejoin="round"/>
            <!-- Lid -->
            <ellipse cx="50" cy="57" rx="21" ry="4" fill="#e2e8f0" stroke="#475569" stroke-width="1.5" />
            <!-- Label -->
            <path d="M29.2 64 L 30 75 C 33 77, 67 77, 70 75 L 70.8 64 C 65 66, 35 66, 29.2 64 Z" fill="url(#woodPaintLabel)" />
            <text x="50" y="71" font-family="sans-serif" font-weight="bold" font-size="4" fill="#ffffff" text-anchor="middle">PREMIUM GLOSS</text>
        </svg>`
    }
];

const CATEGORIES = [
    { id: 'all', label: 'Semua' },
    { id: 'semen', label: 'Semen' },
    { id: 'bata', label: 'Bata Merah' },
    { id: 'besi', label: 'Besi Beton' },
    { id: 'cat', label: 'Cat Tembok' }
];

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
let state = {
    cart: [],
    activeScreen: 'screen-welcome',
    selectedProduct: null,
    selectedVariant: 'pcs',
    qtyCounter: 1,
    categoryFilter: 'all',
    searchQuery: '',
    favorites: [],
    orderHistory: [],
    customerName: 'Ijah',
    customerPhone: '081234567890',
    orderNotes: ''
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    loadStateFromStorage();
    initRouter();
    renderCategoryPills();
    renderProductCards();
    setupEventListeners();
    updateCartUI();
});

/* ==========================================================================
   PERSISTENCE (LOCAL STORAGE)
   ========================================================================== */
function saveStateToStorage() {
    localStorage.setItem('setianugraha_cart', JSON.stringify(state.cart));
    localStorage.setItem('setianugraha_history', JSON.stringify(state.orderHistory));
    localStorage.setItem('setianugraha_favorites', JSON.stringify(state.favorites));
    localStorage.setItem('setianugraha_name', state.customerName);
    localStorage.setItem('setianugraha_phone', state.customerPhone);
}

function loadStateFromStorage() {
    const savedCart = localStorage.getItem('setianugraha_cart');
    const savedHistory = localStorage.getItem('setianugraha_history');
    const savedFavorites = localStorage.getItem('setianugraha_favorites');
    const savedName = localStorage.getItem('setianugraha_name');
    const savedPhone = localStorage.getItem('setianugraha_phone');
    
    if (savedCart) state.cart = JSON.parse(savedCart);
    if (savedHistory) state.orderHistory = JSON.parse(savedHistory);
    if (savedFavorites) state.favorites = JSON.parse(savedFavorites);
    if (savedName) state.customerName = savedName;
    if (savedPhone) state.customerPhone = savedPhone;
    
    // Bind current details to input boxes
    document.getElementById('customer-name').value = state.customerName;
    document.getElementById('customer-phone').value = state.customerPhone;
    document.getElementById('profile-display-name').textContent = state.customerName;
    document.getElementById('profile-display-phone').textContent = state.customerPhone;
}

/* ==========================================================================
   ROUTING ENGINE (Single Page App logic)
   ========================================================================== */
function initRouter() {
    // Show default screen
    navigateTo(state.activeScreen);
}

function navigateTo(screenId) {
    state.activeScreen = screenId;
    
    // Hide all screens
    const screens = document.querySelectorAll('.app-screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        // Scroll target container to top
        const scrollable = targetScreen.querySelector('[class$="-scroll"]');
        if (scrollable) scrollable.scrollTop = 0;
    }
    
    // Update active state in bottom nav bar
    updateBottomNavBar(screenId);
    
    // Handle special screen loading routines
    if (screenId === 'screen-scan') {
        startScannerCamera();
    } else {
        stopScannerCamera();
    }
    
    if (screenId === 'screen-cart') {
        renderCartList();
    }
    
    if (screenId === 'screen-checkout') {
        renderCheckoutSummary();
    }
    
    if (screenId === 'screen-orders') {
        renderOrderHistory();
    }
}

function updateBottomNavBar(screenId) {
    const bottomNav = document.getElementById('app-bottom-nav');
    const navItems = bottomNav.querySelectorAll('.nav-item');
    
    // Bottom nav is only visible on products, cart, orders, and account tabs
    const tabScreens = ['screen-products', 'screen-cart', 'screen-orders', 'screen-account'];
    if (tabScreens.includes(screenId)) {
        bottomNav.style.display = 'flex';
    } else {
        bottomNav.style.display = 'none';
    }
    
    navItems.forEach(item => {
        const target = item.getAttribute('data-target');
        if (target === screenId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

/* ==========================================================================
   HTML CURRENCY HELPERS
   ========================================================================== */
function formatRupiah(num) {
    return 'Rp ' + num.toLocaleString('id-ID');
}

/* ==========================================================================
   TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    container.innerHTML = ''; // Keep only one active toast
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    const icon = type === 'success' ? '✓' : 'ℹ';
    
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

/* ==========================================================================
   SCREEN 1: SCANNER CONTROLLER
   ========================================================================== */
let videoStream = null;

async function startScannerCamera() {
    const video = document.getElementById('scanner-video');
    const placeholderSvg = document.querySelector('.scanner-placeholder-img');
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
            videoStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment', width: 480, height: 480 }
            });
            video.srcObject = videoStream;
            video.style.display = 'block';
            if (placeholderSvg) placeholderSvg.style.display = 'none';
        } catch (err) {
            console.warn("Camera media access blocked or unavailable: ", err);
            showMockScanLayout();
        }
    } else {
        showMockScanLayout();
    }
}

function stopScannerCamera() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
    }
    const video = document.getElementById('scanner-video');
    if (video) {
        video.srcObject = null;
        video.style.display = 'none';
    }
    const placeholderSvg = document.querySelector('.scanner-placeholder-img');
    if (placeholderSvg) placeholderSvg.style.display = 'flex';
}

function showMockScanLayout() {
    const placeholderSvg = document.querySelector('.scanner-placeholder-img');
    if (placeholderSvg) placeholderSvg.style.display = 'flex';
}

/* ==========================================================================
   SCREEN 2: CATALOG DATA RENDERING & FILTERING
   ========================================================================== */
function renderCategoryPills() {
    const container = document.getElementById('category-pills-list');
    if (!container) return;
    
    container.innerHTML = CATEGORIES.map(cat => `
        <button class="pill ${state.categoryFilter === cat.id ? 'active' : ''}" data-category="${cat.id}">
            ${cat.label}
        </button>
    `).join('');
    
    // Add click listeners to pills
    container.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            state.categoryFilter = e.currentTarget.getAttribute('data-category');
            renderCategoryPills();
            renderProductCards();
        });
    });
}

function renderProductCards() {
    const container = document.getElementById('product-list-container');
    if (!container) return;
    
    // Filter logic
    let filteredProducts = PRODUCTS;
    
    if (state.categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === state.categoryFilter);
    }
    
    if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase().trim();
        filteredProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(query));
    }
    
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3 class="product-card-title">Barang tidak ditemukan</h3>
                <p class="instruction-sub">Coba masukkan kata kunci yang berbeda</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredProducts.map((product, index) => `
        <div class="product-card" data-id="${product.id}" style="animation-delay: ${index * 0.05}s">
            <div class="product-card-img-wrapper">
                ${product.svg}
            </div>
            <div class="product-card-details">
                <div>
                    <h3 class="product-card-title">${product.title}</h3>
                    <div class="product-card-price">${formatRupiah(product.prices.pcs)}</div>
                </div>
                <span class="product-card-stock">Stok: ${product.stock} ${product.unitLabel}</span>
            </div>
            <button class="btn-card-add" data-id="${product.id}" title="Lihat detail">
                <svg viewBox="0 0 24 24"><path d="M19 13h-6V7h-2v6H5v2h6v6h2v-6h6v-2z"/></svg>
            </button>
        </div>
    `).join('');
    
    // Bind click events
    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const pId = e.currentTarget.getAttribute('data-id');
            // If the user clicked the add button directly, also go to details
            openProductDetail(pId);
        });
    });
}

/* ==========================================================================
   SCREEN 3: PRODUCT DETAIL LAYOUT
   ========================================================================== */
function openProductDetail(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    state.selectedProduct = product;
    state.selectedVariant = 'pcs';
    state.qtyCounter = 1;
    
    // Set text elements
    document.getElementById('detail-title').textContent = product.title;
    document.getElementById('detail-price').textContent = formatRupiah(product.prices.pcs);
    document.getElementById('detail-stock').textContent = `Stok: ${product.stock} ${product.unitLabel}`;
    document.getElementById('detail-desc').textContent = product.desc;
    
    // Render Detail SVG
    document.getElementById('detail-product-image').innerHTML = product.svg;
    
    // Render Variant Radio labels
    document.getElementById('variant-pcs-label').textContent = product.units.pcs;
    document.getElementById('variant-pcs-price').textContent = formatRupiah(product.prices.pcs);
    
    document.getElementById('variant-pack-label').textContent = product.units.pack;
    document.getElementById('variant-pack-price').textContent = formatRupiah(product.prices.pack);
    
    // Reset quantity inputs
    document.getElementById('detail-qty-input').value = state.qtyCounter;
    
    // Handle heart state icon
    const favoriteBtn = document.getElementById('btn-detail-favorite');
    if (state.favorites.includes(product.id)) {
        favoriteBtn.classList.add('active');
    } else {
        favoriteBtn.classList.remove('active');
    }
    
    // Reset variant card activations in HTML
    const radioPcs = document.getElementById('variant-pcs');
    const radioPack = document.getElementById('variant-pack');
    radioPcs.checked = true;
    radioPack.checked = false;
    
    document.querySelectorAll('.variant-option-card').forEach(card => card.classList.remove('active'));
    radioPcs.closest('.variant-option-card').classList.add('active');
    
    navigateTo('screen-detail');
}

function updateDetailPrice() {
    if (!state.selectedProduct) return;
    const variant = state.selectedVariant;
    const price = state.selectedProduct.prices[variant];
    document.getElementById('detail-price').textContent = formatRupiah(price);
}

/* ==========================================================================
   SCREEN 4: CART CALCULATIONS & RENDERING
   ========================================================================== */
function renderCartList() {
    const listContainer = document.getElementById('cart-items-list');
    const footerPanel = document.getElementById('cart-footer-panel');
    const clearBtn = document.getElementById('btn-clear-cart');
    
    if (state.cart.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-cart-view">
                <div class="empty-cart-icon">
                    <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </div>
                <h3 class="empty-cart-title">Keranjang kosong</h3>
                <p class="empty-cart-desc">Anda belum menambahkan bahan bangunan apapun. Buka menu Beranda atau Scan Barcode.</p>
            </div>
        `;
        if (footerPanel) footerPanel.style.display = 'none';
        if (clearBtn) clearBtn.style.display = 'none';
        return;
    }
    
    if (footerPanel) footerPanel.style.display = 'block';
    if (clearBtn) clearBtn.style.display = 'block';
    
    let totalCartPrice = 0;
    
    listContainer.innerHTML = state.cart.map((item, index) => {
        const product = PRODUCTS.find(p => p.id === item.productId);
        if (!product) return '';
        
        const subtotal = item.price * item.qty;
        totalCartPrice += subtotal;
        
        const variantLabel = product.units[item.variant];
        
        return `
            <div class="cart-item" data-index="${index}">
                <div class="cart-item-img-wrapper">
                    ${product.svg}
                </div>
                <div class="cart-item-details">
                    <div>
                        <h4 class="cart-item-title">${product.title}</h4>
                        <div class="cart-item-variant">${variantLabel}</div>
                    </div>
                    <div class="cart-item-action-row">
                        <div class="cart-item-price">${formatRupiah(item.price)}</div>
                        
                        <!-- Mini count selector -->
                        <div class="quantity-picker">
                            <button class="qty-btn btn-cart-qty-minus" data-index="${index}">
                                <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
                            </button>
                            <input type="number" value="${item.qty}" readonly>
                            <button class="qty-btn btn-cart-qty-plus" data-index="${index}">
                                <svg viewBox="0 0 24 24"><path d="M19 13h-6V7h-2v6H5v2h6v6h2v-6h6v-2z"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="cart-item-subtotal" style="margin-top: 8px;">
                        Subtotal: <span class="cart-item-subtotal-val">${formatRupiah(subtotal)}</span>
                    </div>
                </div>
                <button class="btn-item-delete" data-index="${index}" title="Hapus item">
                    <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </button>
            </div>
        `;
    }).join('');
    
    document.getElementById('cart-total-price').textContent = formatRupiah(totalCartPrice);
    
    // Bind events inside the list
    listContainer.querySelectorAll('.btn-cart-qty-minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            adjustCartQty(index, -1);
        });
    });
    
    listContainer.querySelectorAll('.btn-cart-qty-plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            adjustCartQty(index, 1);
        });
    });
    
    listContainer.querySelectorAll('.btn-item-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            removeCartItem(index);
        });
    });
}

function adjustCartQty(index, diff) {
    const item = state.cart[index];
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return;
    
    const newQty = item.qty + diff;
    
    // Max stock validation
    let actualRatio = item.variant === 'pack' ? product.packRatio : 1;
    let requiredStockUnits = newQty * actualRatio;
    
    if (newQty <= 0) {
        removeCartItem(index);
        return;
    }
    
    if (requiredStockUnits > product.stock) {
        alert(`Maaf, stok tidak mencukupi. Stok tersedia: ${product.stock} ${product.unitLabel}`);
        return;
    }
    
    item.qty = newQty;
    saveStateToStorage();
    renderCartList();
    updateCartUI();
}

function removeCartItem(index) {
    state.cart.splice(index, 1);
    saveStateToStorage();
    renderCartList();
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge-bubble');
    if (!badge) return;
    
    // Sum of items count
    const totalItemsCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    
    if (totalItemsCount > 0) {
        const isNewItem = badge.textContent !== String(totalItemsCount);
        badge.textContent = totalItemsCount;
        badge.style.display = 'flex';
        
        if (isNewItem) {
            badge.classList.remove('pop-anim');
            void badge.offsetWidth; // Force layout reflow
            badge.classList.add('pop-anim');
        }
    } else {
        badge.style.display = 'none';
        badge.textContent = '0';
    }
}

/* ==========================================================================
   SCREEN 5: CHECKOUT LOGIC & ORDER SUMMARIES
   ========================================================================== */
function renderCheckoutSummary() {
    const summaryContainer = document.getElementById('checkout-summary-items');
    let totalCartPrice = 0;
    
    summaryContainer.innerHTML = state.cart.map(item => {
        const product = PRODUCTS.find(p => p.id === item.productId);
        if (!product) return '';
        
        const subtotal = item.price * item.qty;
        totalCartPrice += subtotal;
        
        const variantLabel = item.variant === 'pack' ? 'PACK' : 'PCS';
        
        return `
            <div class="checkout-summary-item-row">
                <span>${product.title} (${item.qty} ${variantLabel})</span>
                <span class="item-price">${formatRupiah(subtotal)}</span>
            </div>
        `;
    }).join('');
    
    document.getElementById('checkout-total-price').textContent = formatRupiah(totalCartPrice);
}

function generateInvoiceCode() {
    // Generate code matching format #INV-YYMMDD-XXX
    const now = new Date();
    const yy = String(now.getFullYear()).substring(2);
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    
    const randomNum = String(Math.floor(100 + Math.random() * 900)); // 3-digit code
    return `#INV-${yy}${mm}${dd}-${randomNum}`;
}

/* ==========================================================================
   SCREEN 6: ORDER SUCCESS SCREEN
   ========================================================================== */
function processCheckoutOrder() {
    // Collect form details
    const nameInput = document.getElementById('customer-name');
    const phoneInput = document.getElementById('customer-phone');
    const notesInput = document.getElementById('order-notes');
    
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const notes = notesInput.value.trim();
    
    let isValid = true;
    
    // Name validation
    if (name === '') {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
    } else {
        nameInput.closest('.form-group').classList.remove('has-error');
    }
    
    // Phone validation
    const numOnly = phone.replace(/[^0-9]/g, '');
    if (numOnly.length < 10) {
        phoneInput.closest('.form-group').classList.add('has-error');
        isValid = false;
    } else {
        phoneInput.closest('.form-group').classList.remove('has-error');
    }
    
    if (!isValid) return;
    
    // Update local config variables
    state.customerName = name;
    state.customerPhone = phone;
    state.orderNotes = notes;
    
    // Generate invoice details
    const invoiceNum = generateInvoiceCode();
    const orderTotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    // Generate order object
    const newOrder = {
        invoice: invoiceNum,
        date: new Date().toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }),
        storeName: 'Toko Bangunan ABC',
        items: state.cart.map(item => {
            const product = PRODUCTS.find(p => p.id === item.productId);
            return {
                title: product ? product.title : 'Item',
                qty: item.qty,
                variant: item.variant,
                price: item.price,
                subtotal: item.price * item.qty
            };
        }),
        total: orderTotal,
        notes: notes,
        status: 'Menunggu konfirmasi toko'
    };
    
    // Save to order history list (prepend to list)
    state.orderHistory.unshift(newOrder);
    
    // Reset state values
    state.cart = [];
    state.orderNotes = '';
    notesInput.value = '';
    
    // Save changes
    saveStateToStorage();
    updateCartUI();
    
    // Populate Success UI
    document.getElementById('success-invoice-code').querySelector('span').textContent = invoiceNum;
    
    // Redirect screen
    navigateTo('screen-success');
}

/* ==========================================================================
   ADDITIONAL SCREENS: ORDER HISTORY & RESET ACTION
   ========================================================================== */
function renderOrderHistory() {
    const listContainer = document.getElementById('orders-history-list');
    if (!listContainer) return;
    
    if (state.orderHistory.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <h3 class="product-card-title">Belum ada pesanan</h3>
                <p class="instruction-sub">Semua riwayat pesanan Anda akan terkumpul di sini</p>
            </div>
        `;
        return;
    }
    
    listContainer.innerHTML = state.orderHistory.map(order => {
        // Generate list of items
        const itemsDetail = order.items.map(i => {
            const label = i.variant === 'pack' ? 'PACK' : 'PCS';
            return `${i.title} (${i.qty} ${label})`;
        }).join(', ');
        
        return `
            <div class="history-order-card">
                <div class="history-card-header">
                    <span class="history-invoice">${order.invoice}</span>
                    <span class="history-date">${order.date}</span>
                </div>
                <div class="history-card-body">
                    <p class="history-item-summary">${itemsDetail}</p>
                    ${order.notes ? `<p class="history-date" style="margin-top: 4px; font-style: italic;">Catatan: "${order.notes}"</p>` : ''}
                </div>
                <div class="history-card-footer">
                    <span class="history-status-badge">${order.status}</span>
                    <span class="history-total">${formatRupiah(order.total)}</span>
                </div>
            </div>
        `;
    }).join('');
}

/* ==========================================================================
   EVENT LISTENERS AND USER INTERFACES HANDLERS
   ========================================================================== */
function setupEventListeners() {
    
    // SCREEN 0: WELCOME SCREEN ACTIONS
    const btnWelcomeShop = document.getElementById('btn-welcome-shop');
    if (btnWelcomeShop) {
        btnWelcomeShop.addEventListener('click', () => {
            navigateTo('screen-products');
        });
    }
    
    const btnWelcomeScan = document.getElementById('btn-welcome-scan');
    if (btnWelcomeScan) {
        btnWelcomeScan.addEventListener('click', () => {
            navigateTo('screen-scan');
        });
    }

    // BOTTOM NAVIGATION SWITCHERS
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const screenTarget = e.currentTarget.getAttribute('data-target');
            navigateTo(screenTarget);
        });
    });
    
    // SCREEN 1: BARCODE SCAN BUTTONS
    const btnSimulateScan = document.getElementById('btn-simulate-scan');
    btnSimulateScan.addEventListener('click', () => {
        // Simple loading delay effect to simulate scan reading
        btnSimulateScan.disabled = true;
        btnSimulateScan.textContent = 'Membaca barcode...';
        
        setTimeout(() => {
            btnSimulateScan.disabled = false;
            btnSimulateScan.innerHTML = `
                <svg viewBox="0 0 24 24" class="btn-icon-svg"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/></svg>
                Mulai Belanja (Simulasi Scan)
            `;
            navigateTo('screen-products');
        }, 1200);
    });
    
    // Flash toggle simulation
    const btnToggleFlash = document.getElementById('btn-toggle-flash');
    let flashOn = false;
    btnToggleFlash.addEventListener('click', () => {
        flashOn = !flashOn;
        if (flashOn) {
            btnToggleFlash.classList.add('active');
            btnToggleFlash.querySelector('span').textContent = 'Flash On';
            btnToggleFlash.style.backgroundColor = 'var(--warning-light)';
            btnToggleFlash.style.color = 'var(--warning)';
        } else {
            btnToggleFlash.classList.remove('active');
            btnToggleFlash.querySelector('span').textContent = 'Flash Off';
            btnToggleFlash.style.backgroundColor = 'var(--border-color)';
            btnToggleFlash.style.color = 'var(--text-main)';
        }
    });

    // Scanner close redirects to product list
    document.getElementById('btn-scan-close').addEventListener('click', () => {
        navigateTo('screen-products');
    });
    document.getElementById('btn-scan-back').addEventListener('click', () => {
        navigateTo('screen-welcome');
    });
    
    // SCREEN 2: PRODUCT SEARCH, CLEAR & FILTERS
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('btn-clear-search');
    
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.searchQuery.length > 0) {
            clearSearchBtn.style.display = 'block';
        } else {
            clearSearchBtn.style.display = 'none';
        }
        renderProductCards();
    });
    
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderProductCards();
    });
    
    // Filter Modal Triggers
    const filterBtn = document.getElementById('btn-filter-categories');
    const filterModal = document.getElementById('filter-modal');
    const closeFilterBtn = document.getElementById('btn-close-filter');
    const resetFilterBtn = document.getElementById('btn-reset-filter');
    const applyFilterBtn = document.getElementById('btn-apply-filter');
    const modalCategoryList = document.getElementById('modal-category-options');
    
    let tempCategoryFilter = 'all';
    
    filterBtn.addEventListener('click', () => {
        tempCategoryFilter = state.categoryFilter;
        
        // Render options in modal body
        modalCategoryList.innerHTML = CATEGORIES.map(cat => `
            <button class="filter-option-btn ${tempCategoryFilter === cat.id ? 'selected' : ''}" data-category="${cat.id}">
                ${cat.label}
            </button>
        `).join('');
        
        // Modal category options selection listener
        modalCategoryList.querySelectorAll('.filter-option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                modalCategoryList.querySelectorAll('.filter-option-btn').forEach(b => b.classList.remove('selected'));
                e.currentTarget.classList.add('selected');
                tempCategoryFilter = e.currentTarget.getAttribute('data-category');
            });
        });
        
        filterModal.classList.add('active');
    });
    
    closeFilterBtn.addEventListener('click', () => {
        filterModal.classList.remove('active');
    });
    
    resetFilterBtn.addEventListener('click', () => {
        tempCategoryFilter = 'all';
        modalCategoryList.querySelectorAll('.filter-option-btn').forEach(b => {
            if (b.getAttribute('data-category') === 'all') {
                b.classList.add('selected');
            } else {
                b.classList.remove('selected');
            }
        });
    });
    
    applyFilterBtn.addEventListener('click', () => {
        state.categoryFilter = tempCategoryFilter;
        renderCategoryPills();
        renderProductCards();
        filterModal.classList.remove('active');
        
        if (state.categoryFilter !== 'all') {
            filterBtn.classList.add('active');
        } else {
            filterBtn.classList.remove('active');
        }
    });
    
    // Shortcut scan on products header
    document.getElementById('btn-shortcut-scan').addEventListener('click', () => {
        navigateTo('screen-scan');
    });
    
    document.querySelectorAll('.btn-back-to-scan').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateTo('screen-scan');
        });
    });
    
    // SCREEN 3: PRODUCT DETAIL SELECTIONS
    document.getElementById('btn-detail-back').addEventListener('click', () => {
        navigateTo('screen-products');
    });
    
    // Heart toggle favorite
    document.getElementById('btn-detail-favorite').addEventListener('click', (e) => {
        if (!state.selectedProduct) return;
        const pId = state.selectedProduct.id;
        const index = state.favorites.indexOf(pId);
        
        if (index > -1) {
            state.favorites.splice(index, 1);
            e.currentTarget.classList.remove('active');
            showToast("Dihapus dari Favorit", "info");
        } else {
            state.favorites.push(pId);
            e.currentTarget.classList.add('active');
            showToast("Ditambahkan ke Favorit", "success");
        }
        saveStateToStorage();
    });
    
    // Variant Selection Change listener
    const variantCards = document.querySelectorAll('.variant-option-card');
    variantCards.forEach(card => {
        card.addEventListener('click', (e) => {
            variantCards.forEach(c => c.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            const radio = e.currentTarget.querySelector('input[type="radio"]');
            radio.checked = true;
            state.selectedVariant = radio.value;
            updateDetailPrice();
        });
    });
    
    // Quantity adjustments inside details
    document.getElementById('btn-qty-minus').addEventListener('click', () => {
        if (state.qtyCounter > 1) {
            state.qtyCounter--;
            document.getElementById('detail-qty-input').value = state.qtyCounter;
        }
    });
    
    document.getElementById('btn-qty-plus').addEventListener('click', () => {
        if (!state.selectedProduct) return;
        
        // Stock bounds check
        let actualRatio = state.selectedVariant === 'pack' ? state.selectedProduct.packRatio : 1;
        let requiredUnits = (state.qtyCounter + 1) * actualRatio;
        
        if (requiredUnits > state.selectedProduct.stock) {
            alert(`Maaf, stok tidak mencukupi. Maksimal pembelian: ${Math.floor(state.selectedProduct.stock / actualRatio)} ${state.selectedVariant.toUpperCase()}`);
            return;
        }
        
        state.qtyCounter++;
        document.getElementById('detail-qty-input').value = state.qtyCounter;
    });
    
    // Add to Cart from Details
    document.getElementById('btn-add-to-cart').addEventListener('click', () => {
        if (!state.selectedProduct) return;
        
        const productId = state.selectedProduct.id;
        const variant = state.selectedVariant;
        const qty = state.qtyCounter;
        const price = state.selectedProduct.prices[variant];
        
        // Check if matching item exists in cart already
        const existingItem = state.cart.find(item => item.productId === productId && item.variant === variant);
        
        // Total validation including existing cart items
        let actualRatio = variant === 'pack' ? state.selectedProduct.packRatio : 1;
        let cartQtyCheck = existingItem ? existingItem.qty : 0;
        let totalRequiredUnits = (cartQtyCheck + qty) * actualRatio;
        
        if (totalRequiredUnits > state.selectedProduct.stock) {
            alert(`Maaf, Anda melebihi jumlah stok yang tersedia di keranjang.`);
            return;
        }
        
        if (existingItem) {
            existingItem.qty += qty;
        } else {
            state.cart.push({
                productId,
                variant,
                qty,
                price
            });
        }
        
        // Save states
        saveStateToStorage();
        updateCartUI();
        
        // Add nice interactive button state feedback
        const btn = document.getElementById('btn-add-to-cart');
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.style.backgroundColor = '#7f1d1d';
        btn.innerHTML = `✓ Berhasil Ditambahkan`;
        showToast(`${state.selectedProduct.title} ditambahkan ke keranjang`);
        
        setTimeout(() => {
            btn.disabled = false;
            btn.style.backgroundColor = 'var(--primary)';
            btn.innerHTML = originalText;
            navigateTo('screen-products');
        }, 1000);
    });
    
    // SCREEN 4: CART INTERACTIONS
    document.getElementById('btn-cart-back').addEventListener('click', () => {
        navigateTo('screen-products');
    });
    
    // Clear entire cart
    document.getElementById('btn-clear-cart').addEventListener('click', () => {
        if (confirm("Kosongkan semua barang belanjaan di keranjang Anda?")) {
            state.cart = [];
            saveStateToStorage();
            renderCartList();
            updateCartUI();
            showToast("Keranjang belanja telah dikosongkan", "info");
        }
    });
    
    // Go to checkout form
    document.getElementById('btn-cart-checkout').addEventListener('click', () => {
        navigateTo('screen-checkout');
    });
    
    // SCREEN 5: CHECKOUT INTERACTIONS
    document.getElementById('btn-checkout-back').addEventListener('click', () => {
        navigateTo('screen-cart');
    });
    
    // Form fields validation listeners
    const nameInput = document.getElementById('customer-name');
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            nameInput.closest('.form-group').classList.remove('has-error');
        }
    });
    
    const phoneInput = document.getElementById('customer-phone');
    phoneInput.addEventListener('input', () => {
        const val = phoneInput.value.replace(/[^0-9]/g, '');
        phoneInput.value = val; // Force numeric only
        if (val.length >= 10) {
            phoneInput.closest('.form-group').classList.remove('has-error');
        }
    });
    
    // Submit order event handler
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        processCheckoutOrder();
    });
    
    // SCREEN 6: SUCCESS ACTIONS
    // Clipboard Copy
    const copyBtn = document.getElementById('btn-copy-invoice');
    const copyTooltip = document.getElementById('copy-tooltip');
    
    copyBtn.addEventListener('click', () => {
        const textToCopy = document.getElementById('success-invoice-code').querySelector('span').textContent;
        
        // Copy to clipboard
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyTooltip.classList.add('show');
            showToast("Nomor pesanan disalin ke clipboard", "success");
            setTimeout(() => {
                copyTooltip.classList.remove('show');
            }, 1800);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
    
    document.getElementById('btn-success-view-orders').addEventListener('click', () => {
        navigateTo('screen-orders');
    });
    
    document.getElementById('btn-success-home').addEventListener('click', () => {
        navigateTo('screen-products');
    });
    
    // SCREEN ACCOUNT / RESET ACTIONS
    document.getElementById('btn-show-about').addEventListener('click', () => {
        alert("Aplikasi Setia Nugraha - Toko Bangunan ABC\nVersi 1.0.0 (Front-End Prototype)\nDibuat menggunakan HTML, CSS, dan Vanilla Javascript.");
    });
    
    document.getElementById('btn-logout-simulation').addEventListener('click', () => {
        if (confirm("Apakah Anda ingin menghapus seluruh data simulasi (keranjang belanja, riwayat transaksi, dan favorit)?")) {
            state.cart = [];
            state.orderHistory = [];
            state.favorites = [];
            state.customerName = 'Ijah';
            state.customerPhone = '081234567890';
            
            // Apply variables
            document.getElementById('customer-name').value = state.customerName;
            document.getElementById('customer-phone').value = state.customerPhone;
            document.getElementById('profile-display-name').textContent = state.customerName;
            document.getElementById('profile-display-phone').textContent = state.customerPhone;
            
            saveStateToStorage();
            updateCartUI();
            
            alert("Data simulasi berhasil direset ke pengaturan awal.");
            navigateTo('screen-welcome');
        }
    });
}
