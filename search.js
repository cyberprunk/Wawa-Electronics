// WaWa Electronics – search.js (category page)
(function () {
  const CAT_LABELS = {
    phones:'Phones', laptops:'Laptops', headphones:'Headphones',
    airpods:'AirPods', speakers:'Speakers', televisions:'Televisions',
    fridges:'Fridges', cookers:'Cookers', cutlery:'Cutlery & Kitchen',
    appliances:'Home Appliances'
  };

  const hoverZone = document.getElementById('searchHoverZone');
  const dropdown  = document.getElementById('searchOverlay');
  const input     = document.getElementById('searchInput');
  const clear     = document.getElementById('searchClear');
  const grid      = document.getElementById('searchResultsGrid');
  const meta      = document.getElementById('searchMeta');
  const empty     = document.getElementById('searchEmpty');
  const emptyTerm = document.getElementById('searchEmptyTerm');

  let leaveTimer = null;

  function getAllProducts() {
    if (typeof WAWA_DATA === 'undefined') return [];
    const out = [];
    Object.entries(WAWA_DATA).forEach(([slug, cat]) => {
      cat.products.forEach(p => out.push({ ...p, catSlug: slug, catLabel: CAT_LABELS[slug] || slug }));
    });
    return out;
  }

  function doSearch(q) {
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

  function esc(s) {
    return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function hilite(text, q) {
    if (!q.trim()) return esc(text);
    const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
    return esc(text).replace(re,'<mark style="background:rgba(201,168,76,0.35);color:#fff;border-radius:2px;padding:0 1px">$1</mark>');
  }

  function render(query) {
    if (!query.trim()) {
      meta.textContent = ''; grid.innerHTML = '';
      empty.style.display = 'none';
      return;
    }
    const results = doSearch(query);
    meta.textContent = results.length ? `${results.length} result${results.length!==1?'s':''}` : '';
    if (!results.length) {
      grid.innerHTML = ''; empty.style.display = 'block';
      emptyTerm.textContent = query; return;
    }
    empty.style.display = 'none';
    grid.innerHTML = results.slice(0, 6).map(p => `
      <a class="search-result-card" href="category.html?cat=${p.catSlug}&open=${p.id}">
        <div class="sr-img-wrap">
          <img src="${esc(p.image)}" alt="${esc(p.name)}" class="sr-img"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="sr-fallback" style="display:none;${p.gradient?`background:${p.gradient}`:'background:#111'}">${p.emoji||'📦'}</div>
          <span class="sr-cat-tag">${esc(p.catLabel)}</span>
        </div>
        <div class="sr-info">
          <div class="sr-brand">${esc(p.brand)}</div>
          <div class="sr-name">${hilite(p.name, query)}</div>
        </div>
        <svg class="sr-arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
      </a>
    `).join('');
  }

  function openSearch() {
    clearTimeout(leaveTimer);
    dropdown.classList.add('open');
    setTimeout(() => input.focus(), 60);
  }
  function closeSearch() {
    dropdown.classList.remove('open');
    input.value = ''; render('');
  }

  hoverZone.addEventListener('mouseenter', openSearch);
  hoverZone.addEventListener('mouseleave', () => {
    leaveTimer = setTimeout(closeSearch, 200);
  });

  input.addEventListener('input', () => render(input.value));
  clear.addEventListener('click', () => { input.value = ''; render(''); input.focus(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && dropdown.classList.contains('open')) closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });
})();
