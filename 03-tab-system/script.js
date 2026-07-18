function setTab(name) {
  // Tüm butonlardan "active" class'ını kaldır, tıklanana ekle
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === name);
  });

  // Tüm panellerden "active" class'ını kaldır, ilgili olana ekle
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === 'tab-' + name);
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => setTab(btn.dataset.tab));
});

// URL'de #tab-basketbol gibi bir hash varsa, sayfa açılışında ilgili sekmeyi göster
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#tab-', '');
  if (hash) setTab(hash);
});
