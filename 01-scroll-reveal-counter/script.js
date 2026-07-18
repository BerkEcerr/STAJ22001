// ============================================================
// SCROLL PROGRESS + REVEAL SİSTEMİ
// ============================================================
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));
}

// ============================================================
// SAYAÇ ANİMASYONU — görünür olunca 0'dan hedef sayıya say
// ============================================================
function initCounters() {
  const statCells = document.querySelectorAll('.stat-cell h2');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statCells.forEach(el => counterObserver.observe(el));
}

function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const startTime = performance.now();

  function step(timestamp) {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - (1 - progress) * (1 - progress); // easeOutQuad
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString('tr-TR');

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target.toLocaleString('tr-TR');
    }
  }

  requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initCounters();
});
