// WaWa Electronics – category.js
// Reads ?cat= URL param, renders products and handles interactions

const WHATSAPP_NUMBER = '256700000000';

// ---- Bootstrap ----
document.addEventListener('DOMContentLoaded', () => {
  const slug = new URLSearchParams(window.location.search).get('cat') || 'phones';
  const key = SLUG_MAP[slug] || slug;
  const data = WAWA_DATA[key];

  if (!data) {
    document.getElementById('catTitle').textContent = 'Category Not Found';
    return;
  }

  initPage(data);
  initNav();
  initModals();
  initEnquiryForm();
});

// ---- Page Init ----
function initPage(data) {
  document.title = `WaWa Electronics – ${data.title}`;
  document.getElementById('bcCurrent').textContent = data.title;
  document.getElementById('catEmoji').textContent = data.emoji;
  document.getElementById('catTitle').textContent = data.title;
  document.getElementById('catSub').textContent = data.subtitle;
  document.getElementById('productCount').textContent = data.products.length;

  const heroBg = document.getElementById('catHeroBg');
  heroBg.style.backgroundImage = `url('${data.heroImage}')`;
  setTimeout(() => heroBg.classList.add('loaded'), 100);

  buildFilters(data);
  renderProducts(data.products, data.products);
}

// ---- Filters ----
function buildFilters(data) {
  const container = document.getElementById('filterPills');
  container.innerHTML = '';

  data.brands.forEach((brand, i) => {
    const btn = document.createElement('button');
    btn.className = 'filter-pill' + (i === 0 ? ' active' : '');
    btn.textContent = brand;
    btn.dataset.brand = brand;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const filtered = brand === 'All'
        ? data.products
        : data.products.filter(p => p.brand === brand);
      renderProducts(filtered, data.products);
    });
    container.appendChild(btn);
  });
}

// ---- Render Products ----
function renderProducts(products, allProducts) {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const resultsCount = document.getElementById('resultsCount');

  resultsCount.textContent = `${products.length} of ${allProducts.length} products`;

  if (products.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  grid.innerHTML = products.map((p, i) => buildProductCard(p, i)).join('');

  grid.querySelectorAll('.cat-product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.cp-view-btn')) return;
      const id = card.dataset.productId;
      openDetailModal(id, allProducts);
    });
  });

  grid.querySelectorAll('.cp-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.closest('.cat-product-card').dataset.productId;
      openDetailModal(id, allProducts);
    });
  });

  // Animate cards in
  requestAnimationFrame(() => {
    grid.querySelectorAll('.cat-product-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.35s, border-color 0.35s';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 60);
    });
  });
}

function buildProductCard(p, i) {
  const brandLogoUrl = getBrandLogoUrl(p.brand);
  const badgeHtml = p.badge
    ? `<div class="cp-badge ${p.badge.toLowerCase()}">${p.badge}</div>`
    : '';

  const featuresHtml = p.features.slice(0, 4).map(f =>
    `<div class="cp-feature">${escHtml(f)}</div>`
  ).join('');

  return `
    <div class="cat-product-card" data-product-id="${p.id}">
      <div class="cp-img-wrap">
        ${badgeHtml}
        <div class="cp-brand-tag">
          <img src="${brandLogoUrl}" alt="${escHtml(p.brand)}"
               onerror="this.style.display='none'">
          <span>${escHtml(p.brand)}</span>
        </div>
        <img
          src="${p.image}"
          alt="${escHtml(p.name)}"
          class="cp-img"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="cp-fallback" style="${p.gradient ? `background:${p.gradient}` : ''};display:none">
          ${p.emoji || '📦'}
        </div>
      </div>
      <div class="cp-info">
        <div class="cp-brand">${escHtml(p.brand)}</div>
        <h3 class="cp-name">${escHtml(p.name)}</h3>
        <p class="cp-desc">${escHtml(p.description)}</p>
        <div class="cp-features">${featuresHtml}</div>
        <div class="cp-footer">
          <span class="cp-price">Contact for Price</span>
          <button class="cp-view-btn">View Details</button>
        </div>
      </div>
    </div>
  `;
}

// ---- Detail Modal ----
let currentProduct = null;

function openDetailModal(productId, allProducts) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;
  currentProduct = product;

  const overlay = document.getElementById('detailModalOverlay');
  const brandLogoUrl = getBrandLogoUrl(product.brand);

  // Image
  const detailImg = document.getElementById('detailImg');
  const detailFallback = document.getElementById('detailImgFallback');
  detailImg.src = product.image;
  detailImg.alt = product.name;
  detailImg.style.display = 'block';
  detailFallback.style.display = 'none';
  detailFallback.style.background = product.gradient || '#111';
  detailFallback.innerHTML = product.emoji || '📦';
  detailImg.onerror = () => {
    detailImg.style.display = 'none';
    detailFallback.style.display = 'flex';
  };

  // Brand
  const brandLogo = document.getElementById('detailBrandLogo');
  brandLogo.src = brandLogoUrl;
  brandLogo.alt = product.brand;
  brandLogo.onerror = () => { brandLogo.style.display = 'none'; };
  document.getElementById('detailBrandName').textContent = product.brand;

  // Badge
  const badgeWrap = document.getElementById('detailBadgeWrap');
  badgeWrap.innerHTML = product.badge
    ? `<span class="detail-badge ${product.badge.toLowerCase()}">${product.badge}</span>`
    : '';

  // Text
  document.getElementById('detailName').textContent = product.name;
  document.getElementById('detailDesc').textContent = product.description;

  // Features
  const featuresEl = document.getElementById('detailFeatures');
  featuresEl.innerHTML = product.features.map(f =>
    `<div class="detail-feature-item">${escHtml(f)}</div>`
  ).join('');

  // Specs table
  const specsEl = document.getElementById('specsTable');
  specsEl.innerHTML = Object.entries(product.specs).map(([k, v]) =>
    `<tr><td>${escHtml(k)}</td><td>${escHtml(v)}</td></tr>`
  ).join('');

  // WhatsApp link
  const wpMsg = encodeURIComponent(`Hi WaWa Electronics, I'm interested in the ${product.brand} ${product.name}. Please share more details and pricing.`);
  document.getElementById('whatsappBtn').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${wpMsg}`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ---- Enquiry form from detail modal ----
document.getElementById('detailEnquireBtn')?.addEventListener('click', () => {
  closeDetailModal();
  if (currentProduct) {
    document.getElementById('enquiryProductName').textContent = `${currentProduct.brand} – ${currentProduct.name}`;
    document.getElementById('enquiryModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
});

function closeDetailModal() {
  document.getElementById('detailModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ---- Modals ----
function initModals() {
  document.getElementById('detailModalClose').addEventListener('click', closeDetailModal);
  document.getElementById('detailModalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('detailModalOverlay')) closeDetailModal();
  });

  document.getElementById('enquiryClose').addEventListener('click', () => {
    document.getElementById('enquiryModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  });
  document.getElementById('enquiryModalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('enquiryModalOverlay')) {
      document.getElementById('enquiryModalOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeDetailModal();
      document.getElementById('enquiryModalOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ---- Enquiry Form ----
function initEnquiryForm() {
  document.getElementById('enquiryForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = "Sent! We'll be in touch soon.";
    btn.style.background = 'linear-gradient(135deg, #2a7a2a, #1a5a1a)';
    btn.style.color = '#fff';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('enquiryModalOverlay').classList.remove('open');
      document.body.style.overflow = '';
      btn.textContent = 'Send Enquiry';
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      e.target.reset();
    }, 2500);
  });
}

// ---- Nav ----
function initNav() {
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
}

// ---- Helpers ----
function getBrandLogoUrl(brand) {
  const domainMap = {
    'Apple': 'apple.com', 'Samsung': 'samsung.com', 'LG': 'lg.com',
    'Hisense': 'hisense.com', 'TCL': 'tcl.com', 'Aiwa': 'aiwa.com',
    'Geepas': 'geepas.com', 'JBL': 'jbl.com', 'Techno': 'tecno-mobile.com',
    'HP': 'hp.com', 'Dell': 'dell.com'
  };
  const domain = domainMap[brand];
  return domain ? `https://logo.clearbit.com/${domain}` : '';
}

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
