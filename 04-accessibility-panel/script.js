const accessBtn = document.getElementById('accessBtn');
const panel = document.getElementById('accessibilityPanel');
const closePanel = document.getElementById('closePanel');
const textSizeUp = document.getElementById('textSizeUp');
const textSizeDown = document.getElementById('textSizeDown');
const textSizeLabel = document.getElementById('textSizeLabel');
const contrastBtn = document.getElementById('contrastBtn');
const focusBtn = document.getElementById('focusBtn');
const resetBtn = document.getElementById('resetBtn');
const colorBtns = document.querySelectorAll('.color-btn');

// Panel aç/kapat
function toggleAccessibility() {
  panel.classList.toggle('active');
}
accessBtn.addEventListener('click', toggleAccessibility);
closePanel.addEventListener('click', toggleAccessibility);

// Yazı boyutu: 4 kademeli ölçek
const sizeSteps = [
  { scale: 0.9,  label: 'Küçük' },
  { scale: 1,    label: 'Normal' },
  { scale: 1.15, label: 'Büyük' },
  { scale: 1.3,  label: 'Çok Büyük' },
];
let sizeIndex = 1;

function applySize() {
  document.documentElement.style.setProperty('--font-scale', sizeSteps[sizeIndex].scale);
  textSizeLabel.textContent = sizeSteps[sizeIndex].label;
}
textSizeUp.addEventListener('click', () => {
  sizeIndex = Math.min(sizeIndex + 1, sizeSteps.length - 1);
  applySize();
});
textSizeDown.addEventListener('click', () => {
  sizeIndex = Math.max(sizeIndex - 1, 0);
  applySize();
});

// Yüksek kontrast aç/kapat
contrastBtn.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
});

// Odak vurgusu aç/kapat (klavye ile gezinenler için)
focusBtn.addEventListener('click', () => {
  document.body.classList.toggle('focus-outline');
});

// Renk modu seçimi
colorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.remove('mode-mono', 'mode-warm');
    colorBtns.forEach(b => b.classList.remove('active'));

    const mode = btn.dataset.mode;
    if (mode !== 'normal') {
      document.body.classList.add('mode-' + mode);
    }
    btn.classList.add('active');
  });
});

// Tüm ayarları sıfırla
resetBtn.addEventListener('click', () => {
  document.body.className = '';
  sizeIndex = 1;
  applySize();
  colorBtns.forEach(b => b.classList.remove('active'));
  document.querySelector('.color-btn[data-mode="normal"]').classList.add('active');
});

// Panel dışına tıklanınca kapansın
document.addEventListener('click', (e) => {
  if (!panel.contains(e.target) && !accessBtn.contains(e.target) && panel.classList.contains('active')) {
    panel.classList.remove('active');
  }
});
