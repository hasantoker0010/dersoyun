/* Şıksız oyunların (Adam Asmaca, Yazarak Cevapla, Hafıza Kartları) ortak parçaları.
   Dönüşüm: gerçek sorunun doğru şıkkı cevap olarak kullanılır; şıkları görmeden anlamsız kalan
   kökler ("değildir", "hangileri", öncüllü) ve uzun cevaplar alınmaz. */
const kisaCevap = q => {
  const a = q.sec[q.dogru].trim();
  return a.length >= 2 && a.length <= 26 && !oncullu(q) && !hepsiSikli(q)
    && !/(değil|yanlış|olamaz|söylenemez|aşağıdakilerin hangisinde|hangileri)/i.test(q.soru);
};

// Parantez içi açıklamasız hali de kabul edilir: "Dartmouth Konferansı (1956)" → "Dartmouth Konferansı"
const cevapAdaylari = a => [a, a.replace(/\s*\([^)]*\)\s*/g, ' ')].map(norm).filter(Boolean);

function lev(a, b) {
  const d = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let p = d[0]; d[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const t = d[j];
      d[j] = Math.min(d[j] + 1, d[j - 1] + 1, p + (a[i - 1] === b[j - 1] ? 0 : 1));
      p = t;
    }
  }
  return d[b.length];
}

// Küçük yazım hatalarını affeder: 6+ harfte 1, 14+ harfte 2 hata
const yaziDogru = (v, a) => {
  const x = norm(v);
  return !!x && cevapAdaylari(a).some(c => c === x || lev(c, x) <= (c.length >= 14 ? 2 : c.length >= 6 ? 1 : 0));
};

// Tek seferlik kendi kendini sınama
console.assert(yaziDogru('dartmouth konferansi', 'Dartmouth Konferansı (1956)') && yaziDogru('Dinamik programlma', 'Dinamik programlama') && !yaziDogru('kuyruk', 'Yığın'), 'yaziDogru');
