const track = document.getElementById('sliderTrack');
const slider = document.getElementById('newsSlider');
const cards = track.querySelectorAll('.card');
const dotsWrap = document.getElementById('dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let current = 0;
let timer = null;
const AUTO_DELAY = 4000; // ms

// Nokta (dot) göstergelerini dinamik olarak oluştur
cards.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => { goTo(i); resetAutoSlide(); });
  dotsWrap.appendChild(dot);
});
const dots = dotsWrap.querySelectorAll('.dot');

function goTo(index) {
  current = (index + cards.length) % cards.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach(d => d.classList.remove('active'));
  dots[current].classList.add('active');
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

function startAutoSlide() {
  timer = setInterval(next, AUTO_DELAY);
}
function stopAutoSlide() {
  clearInterval(timer);
}
function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Fare slider üzerine gelince otomatik geçişi durdur, ayrılınca devam ettir
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

// Ok butonları manuel geçiş yapar ve otomatik döngüyü sıfırlar
prevBtn.addEventListener('click', () => { prev(); resetAutoSlide(); });
nextBtn.addEventListener('click', () => { next(); resetAutoSlide(); });

// Klavye ile de gezinilebilsin
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') { prev(); resetAutoSlide(); }
  if (e.key === 'ArrowRight') { next(); resetAutoSlide(); }
});

startAutoSlide();
