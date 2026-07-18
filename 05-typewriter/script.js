const phrases = [
  "Azimle, disiplinle, sahada büyüyoruz.",
  "Her branşta şampiyonluğa koşuyoruz.",
  "1200'den fazla sporcuyla gurur duyuyoruz.",
  "Zirve Spor Kulübü'ne hoş geldiniz."
];

const el = document.getElementById('typewriter');

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const TYPE_SPEED = 55;      // harf yazma hızı (ms)
const DELETE_SPEED = 30;    // harf silme hızı (ms)
const HOLD_TIME = 1600;     // cümle tamamlanınca bekleme süresi (ms)

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    charIndex++;
    el.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, HOLD_TIME);
      return;
    }
  } else {
    charIndex--;
    el.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED;
  setTimeout(type, speed);
}

// İsteğe bağlı: sayfa yüklenince alt bölümlerdeki reveal animasyonunu da tetikle
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  revealEls.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 600);
  initScrollReveal();
});
