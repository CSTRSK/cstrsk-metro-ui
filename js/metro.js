// Pivot-Navigation
document.querySelectorAll('.pivot button').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pivot button').forEach(t => t.setAttribute('aria-selected','false'));
    document.querySelectorAll('.pivot-panel').forEach(p => p.classList.remove('is-active'));
    tab.setAttribute('aria-selected','true');
    document.getElementById(tab.dataset.panel).classList.add('is-active');
  });
});

// Live-Kacheln zeitversetzt flippen
document.querySelectorAll('.tile').forEach((tile, i) => {
  const delay = 3000 + i * 900 + Math.random() * 1200;
  setInterval(() => tile.classList.toggle('is-flipped'), 6000 + i * 400);
  setTimeout(() => tile.classList.add('is-flipped'), delay);
});

// Theme-Umschalter (App-Leiste + Radiogruppe synchron)
function toggleTheme(){
  const b = document.body;
  b.dataset.theme = b.dataset.theme === 'dark' ? 'light' : 'dark';
}
document.getElementById('themeBtn').addEventListener('click', toggleTheme);

// Akzentfarben
document.querySelectorAll('.swatch').forEach(sw => {
  sw.addEventListener('click', () => {
    document.documentElement.style.setProperty('--accent', sw.dataset.accent);
    document.querySelectorAll('.swatch').forEach(s => s.setAttribute('aria-pressed','false'));
    sw.setAttribute('aria-pressed','true');
  });
});

// Toast
const toast = document.getElementById('toast');
document.getElementById('toastBtn').addEventListener('click', () => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
});

// Dialog
const backdrop = document.getElementById('dialogBackdrop');
document.getElementById('dialogBtn').addEventListener('click', () => backdrop.classList.add('show'));
document.getElementById('dialogCancel').addEventListener('click', () => backdrop.classList.remove('show'));
document.getElementById('dialogOk').addEventListener('click', () => backdrop.classList.remove('show'));
backdrop.addEventListener('click', e => { if(e.target === backdrop) backdrop.classList.remove('show'); });

// Uhrzeit
function tick(){
  const d = new Date();
  document.getElementById('clock').textContent = String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
}
tick(); setInterval(tick, 30000);
