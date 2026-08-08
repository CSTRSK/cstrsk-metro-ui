// Reveal Highlight: Lichtschein folgt dem Zeiger
document.querySelectorAll('.reveal').forEach(el => {
  el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--rx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--ry', (e.clientY - r.top) + 'px');
  });
});

// Titelleiste: Maximieren-Symbol wechselt (rein optisch, Demo-Fenster)
const maxBtn = document.querySelector('.tb-controls button[aria-label="maximieren"]');
if (maxBtn){
  maxBtn.addEventListener('click', () => {
    maxBtn.textContent = maxBtn.textContent === '▢' ? '❐' : '▢';
  });
}

// NavigationView ein-/ausklappen (Desktop: Breite reduzieren)
const nav = document.getElementById('nav');
const scrim = document.getElementById('navScrim');
document.getElementById('navToggle').addEventListener('click', () => {
  nav.classList.toggle('collapsed');
});

// Mobiler Menü-Button — liegt bewusst AUSSERHALB der Nav, damit er nie mit ihr verschwindet
function openMobileNav(){ nav.classList.add('mobile-open'); scrim.classList.add('show'); }
function closeMobileNav(){ nav.classList.remove('mobile-open'); scrim.classList.remove('show'); }
document.getElementById('mobileNavToggle').addEventListener('click', openMobileNav);
scrim.addEventListener('click', closeMobileNav);

// Seiten wechseln
document.querySelectorAll('.nav-item[data-page]').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item[data-page]').forEach(n => n.removeAttribute('aria-current'));
    item.setAttribute('aria-current','page');
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(item.dataset.page).style.display = 'block';
    document.getElementById('pageTitle').textContent = item.querySelector('.nav-label').textContent.trim();
    closeMobileNav();
  });
});

// Theme
document.getElementById('themeToggle').addEventListener('click', () => {
  const b = document.body;
  b.dataset.theme = b.dataset.theme === 'dark' ? 'light' : 'dark';
});

// InfoBar dynamisch
document.getElementById('toastBtn').addEventListener('click', () => {
  const bar = document.getElementById('dynInfobar');
  bar.style.display = 'flex';
  setTimeout(() => bar.style.display = 'none', 2600);
});

// Dialog
const backdrop = document.getElementById('dialogBackdrop');
document.getElementById('dialogBtn').addEventListener('click', () => backdrop.classList.add('show'));
document.getElementById('dialogCancel').addEventListener('click', () => backdrop.classList.remove('show'));
document.getElementById('dialogOk').addEventListener('click', () => backdrop.classList.remove('show'));
backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.classList.remove('show'); });
