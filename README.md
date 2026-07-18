# Zirve Spor Kulübü — JS Teknik Vitrin Projesi

Stajım sırasında öğrendiğim ve gerçek bir kurumsal web sitesinde
uyguladığım front-end tekniklerini, konudan bağımsız olarak sergilemek
amacıyla hazırladığım küçük ölçekli bir demo koleksiyonu. Her klasör,
belirli bir JavaScript tekniğini merkeze alan, kendi başına çalışan,
tam sayfa bir örnek içerir.



---

##  Demo Listesi

| # | Klasör | Teknik | Öne Çıkan Kullanım |
|---|--------|--------|---------------------|
| 1 | [`01-scroll-reveal-counter`](./01-scroll-reveal-counter) | `IntersectionObserver` | Scroll ile beliren kartlar (stagger) + `requestAnimationFrame` ile sayaç animasyonu |
| 2 | [`02-auto-slider`](./02-auto-slider) | `setInterval` / DOM olayları | Otomatik geçişli haber slider'ı, hover'da durdurma, klavye desteği |
| 3 | [`03-tab-system`](./03-tab-system) | `data-*` attribute + `classList` | Sekme (tab) sistemi, URL hash ile doğrudan sekmeye yönlendirme |
| 4 | [`04-accessibility-panel`](./04-accessibility-panel) | CSS custom properties + `classList.toggle` | Yazı boyutu, kontrast, renk modu ve odak vurgusu ayarları |
| 5 | [`05-typewriter`](./05-typewriter) | `setTimeout` döngüsü | Cümleler arasında yazma/silme geçişli typewriter efekti |

Her klasör şu üç dosyayı içerir:

```
0X-teknik-adi/
├── index.html   → sayfa yapısı
├── style.css    → görsel tasarım (ortak tasarım sistemi + sayfaya özel stiller)
└── script.js    → tekniğin JavaScript mantığı
```

Kurulum gerekmez — herhangi bir klasördeki `index.html` dosyasını
çift tıklayıp tarayıcıda açman yeterli.

---

##  Teknikler Hakkında Detay

### 1. Scroll Reveal & Sayaç Animasyonu
Elemanlar viewport'a girdiğinde `IntersectionObserver` ile tetiklenen
bir `visible`/`in` sınıfı ekleniyor; CSS `transition` bu sınıfa göre
opaklık ve konum animasyonu yapıyor. İstatistik bölümünde ise aynı
gözlemci mantığı, `requestAnimationFrame` tabanlı bir easing
fonksiyonuyla birleştirilerek 0'dan hedef değere sayan sayaçlar
oluşturuluyor.

### 2. Otomatik Slider
`setInterval` ile belirli aralıklarla bir sonraki karta geçiliyor;
`mouseenter` / `mouseleave` olaylarıyla kullanıcı üzerine geldiğinde
otomatik geçiş duruyor. Nokta göstergeleri ve ok butonları da aynı
`goTo()` fonksiyonunu paylaşıyor, böylece tüm kontrol noktaları
senkronize kalıyor.

### 3. Tab Sistemi
Butonlardaki `data-tab` attribute'u ile ilgili panelin `id`'si
eşleştiriliyor; `classList.toggle` ile hem buton hem panel durumu tek
fonksiyonda yönetiliyor. Sayfa `#tab-basketbol` gibi bir hash ile
açılırsa ilgili sekme otomatik olarak seçili geliyor.

### 4. Erişilebilirlik Paneli
CSS custom property (`--font-scale`) üzerinden yazı boyutu kademeli
olarak değiştiriliyor; yüksek kontrast ve renk modları `body` etiketine
eklenen sınıflarla (`high-contrast`, `mode-mono`, `mode-warm`) kontrol
ediliyor. Tüm ayarlar tek bir "sıfırla" butonuyla başa alınabiliyor.

### 5. Typewriter Efekti
Bir cümle dizisi üzerinde `charIndex` ile karakter karakter yazma ve
silme işlemi yapılıyor; `setTimeout` ile yazma ve silme hızları farklı
ayarlanarak doğal bir daktilo hissi veriliyor.

---

##  Tasarım Sistemi

Tüm sayfalar ortak bir tasarım diline sahip:

- **Renk sistemi** — CSS custom properties (`--ink`, `--paper`,
  `--accent` vb.) ile tanımlı, tek noktadan değiştirilebilir palet
- **Tipografi** — başlıklarda `Roboto`, gövde metinde `Open Sans`
- **Hareket** — `cubic-bezier(.19,1,.22,1)` easing eğrisi ile tüm
  geçişlerde tutarlı, yumuşak animasyon hissi
- **Bileşenler** — "eyebrow" etiketler, editöryal gölgeler
  (`--shadow-soft`, `--shadow-deep`), tutarlı köşe yuvarlaklığı

Bu sistem, staj projesindeki tasarım disiplininin (renk paleti hariç)
birebir uygulanmasıyla oluşturuldu.

---

##  Kullanılan Teknolojiler

- Vanilla JavaScript (framework/kütüphane yok)
- CSS Custom Properties (CSS değişkenleri)
- [Font Awesome](https://fontawesome.com/) ikon seti
- [Google Fonts](https://fonts.google.com/) — Roboto & Open Sans

---

##  Not

Bu proje, staj sırasında geliştirilen gerçek kurumsal web sitesinden
**bağımsız**, öğrenilen teknikleri göstermek amacıyla farklı bir konu
(spor kulübü) üzerinden yeniden kurgulanmış bir vitrin çalışmasıdır.
