// ============================================================
// WaWa Electronics – script.js
// ============================================================

// ---- Progress bar ----
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = (scrolled / maxScroll * 100) + '%';

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (scrolled > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ---- Reveal on scroll ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Hamburger menu ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ---- Enquire modal ----
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalProductName = document.getElementById('modalProductName');

document.querySelectorAll('.btn-enquire').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const name = card.querySelector('.product-name')?.textContent || '';
    const brand = card.querySelector('.product-brand')?.textContent || '';
    modalProductName.textContent = `${brand} – ${name}`;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ---- Form submission (demo) ----
function handleFormSubmit(form, successMsg) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sent! We\'ll be in touch.';
    btn.style.background = 'linear-gradient(135deg, #2a7a2a, #1a5a1a)';
    btn.style.color = '#fff';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      form.reset();
      if (form.id === 'modalForm') closeModal();
    }, 3000);
  });
}

handleFormSubmit(document.getElementById('contactForm'));
handleFormSubmit(document.getElementById('modalForm'));

// ---- Smooth anchor scroll ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- Search dropdown (hover) ----
const CAT_LABELS = {
  phones:'Phones', laptops:'Laptops', headphones:'Headphones',
  airpods:'AirPods', speakers:'Speakers', televisions:'Televisions',
  fridges:'Fridges', cookers:'Cookers', cutlery:'Cutlery & Kitchen',
  appliances:'Home Appliances'
};

const searchHoverZone = document.getElementById('searchHoverZone');
const searchDropdown  = document.getElementById('searchOverlay');
const searchInput     = document.getElementById('searchInput');
const searchClear     = document.getElementById('searchClear');
const searchGrid      = document.getElementById('searchResultsGrid');
const searchMeta      = document.getElementById('searchMeta');
const searchEmpty     = document.getElementById('searchEmpty');
const searchEmptyTerm = document.getElementById('searchEmptyTerm');

let sdLeaveTimer = null;

function openSearch() {
  clearTimeout(sdLeaveTimer);
  searchDropdown.classList.add('open');
  setTimeout(() => searchInput.focus(), 60);
}

function closeSearch() {
  searchDropdown.classList.remove('open');
  searchInput.value = '';
  renderSearch('');
}

function getAllProducts() {
  if (typeof WAWA_DATA === 'undefined') return [];
  const out = [];
  Object.entries(WAWA_DATA).forEach(([slug, cat]) => {
    cat.products.forEach(p => out.push({ ...p, catSlug: slug, catLabel: CAT_LABELS[slug] || slug }));
  });
  return out;
}

function searchProducts(q) {
  if (!q.trim()) return [];
  const ql = q.toLowerCase();
  return getAllProducts().filter(p =>
    p.name.toLowerCase().includes(ql) ||
    p.brand.toLowerCase().includes(ql) ||
    p.description.toLowerCase().includes(ql) ||
    (p.catLabel || '').toLowerCase().includes(ql) ||
    p.features.some(f => f.toLowerCase().includes(ql))
  );
}

function escH(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function hilite(text, q) {
  if (!q.trim()) return escH(text);
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return escH(text).replace(re,'<mark style="background:rgba(201,168,76,0.35);color:#fff;border-radius:2px;padding:0 1px">$1</mark>');
}

function renderSearch(query) {
  if (!query.trim()) {
    searchMeta.textContent = '';
    searchGrid.innerHTML = '';
    searchEmpty.style.display = 'none';
    return;
  }
  const results = searchProducts(query);
  searchMeta.textContent = results.length
    ? `${results.length} result${results.length !== 1 ? 's' : ''}`
    : '';

  if (!results.length) {
    searchGrid.innerHTML = '';
    searchEmpty.style.display = 'block';
    searchEmptyTerm.textContent = query;
    return;
  }
  searchEmpty.style.display = 'none';

  searchGrid.innerHTML = results.slice(0, 6).map(p => `
    <a class="search-result-card" href="category.html?cat=${p.catSlug}&open=${p.id}">
      <div class="sr-img-wrap">
        <img src="${p.image}" alt="${escH(p.name)}" class="sr-img"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="sr-fallback" style="display:none;${p.gradient?`background:${p.gradient}`:'background:#111'}">${p.emoji||'📦'}</div>
        <span class="sr-cat-tag">${escH(p.catLabel)}</span>
      </div>
      <div class="sr-info">
        <div class="sr-brand">${escH(p.brand)}</div>
        <div class="sr-name">${hilite(p.name, query)}</div>
      </div>
      <svg class="sr-arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
    </a>
  `).join('');
}

searchHoverZone.addEventListener('mouseenter', openSearch);
searchHoverZone.addEventListener('mouseleave', () => {
  sdLeaveTimer = setTimeout(closeSearch, 200);
});

searchInput.addEventListener('input', () => renderSearch(searchInput.value));
searchClear.addEventListener('click', () => { searchInput.value = ''; renderSearch(''); searchInput.focus(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && searchDropdown.classList.contains('open')) closeSearch();
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
});

// ---- Parallax subtle on hero ----
window.addEventListener('scroll', () => {
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    const scrolled = window.scrollY;
    heroVideo.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
}, { passive: true });
