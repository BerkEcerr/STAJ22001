# Stajda Öğrenilen JS Teknikleri — 

Bu klasör, staj sırasında öğrenilip uygulanan JavaScript tekniklerinin,
gerçek staj projesindeki editöryal tasarım diliyle
ama tamamen farklı bir konu (spor kulübü) üzerinden, detaylı ve
tam sayfa örneklerle gösterilmesi amacıyla hazırlanmıştır.

Her klasör kendi başına çalışan bir `index.html`, `style.css` ve
`script.js` içerir — tarayıcıda doğrudan `index.html` açılarak
test edilebilir. Tüm sayfalar ortak bir header/footer, hero bölümü
ve teknik bazlı zengin içerik barındırır.

## İçindekiler

1. **01-scroll-reveal-counter** — `IntersectionObserver` ile branş
   kartlarının sırayla (stagger) belirmesi ve istatistik bölümünde
   `requestAnimationFrame` ile easeOut'lu sayaç animasyonu.
2. **02-auto-slider** — `setInterval` tabanlı otomatik kulüp haberleri
   slider'ı; hover'da durdurma, nokta göstergeleri, ok butonları ve
   klavye (sol/sağ ok) desteği.
3. **03-tab-system** — Branşlar arası `data-tab` tabanlı sekme sistemi;
   her sekme kendi istatistik kutusu ve detaylı içeriğiyle birlikte.
   URL hash desteğiyle doğrudan bir sekmeye link verilebilir.
4. **04-accessibility-panel** — Kademeli yazı boyutu, yüksek kontrast,
   renk modu (gri tonlama / sıcak ton), odak vurgusu ve "ayarları
   sıfırla" içeren kapsamlı bir erişilebilirlik paneli.
5. **05-typewriter** — Hero alanında birden fazla cümle arasında
   yazma/silme döngüsüyle geçiş yapan typewriter efekti.

## Tasarım dili hakkında

Tüm sayfalar ortak bir `_base.css` mantığından türetilmiştir: paper/ink
renk tokenları, "eyebrow" etiketler, editöryal gölgeler (`--shadow-soft`,
`--shadow-deep`), yumuşak geçiş eğrisi (`--ease`) ve `reveal` / 
`reveal-stagger` animasyon sınıfları. Renk paleti spor kulübü temasına
göre (koyu yeşil + turuncu vurgu) uyarlanmıştır; staj projesindeki
kurumsal renklerle karıştırılmaması için bilinçli olarak farklıdır.
