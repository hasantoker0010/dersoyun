/* Hafıza Kartları: kapalı kartları çevir, her soruyu kendi cevabıyla eşleştir.
   Dönüşüm: kisaCevap() sorularının kökü ↔ doğru şıkkı; kodlu ve 140 karakterden uzun kökler alınmaz.
   Bir turda aynı cevap iki kez çıkmaz. Eşleşme hafızaya da bağlı olduğundan yanlış çevirme Zayıf konularım'a yazılmaz. */
let HK = null;
const HK_CIFT = 6;
const hkUygun = q => kisaCevap(q) && !q.kod && q.soru.length <= 140;

function hkBasla(qs, ders) {
  stopT(); G = null; T = null;
  if (HK) clearTimeout(HK.to);
  const secilen = [], gor = new Set();
  for (const q of karistir(qs)) {
    const k = norm(q.sec[q.dogru]);
    if (gor.has(k)) continue;
    gor.add(k); secilen.push(q);
    if (secilen.length === HK_CIFT) break;
  }
  const kartlar = karistir(secilen.flatMap((q, i) => [{ i, tip: 's' }, { i, tip: 'c' }]));
  HK = { havuz: qs, ders, qs: secilen, kartlar, acik: [], eslesti: new Set(), hamle: 0, hata: 0, t0: Date.now(), to: 0 };
  hkCiz();
}

function hkCiz() {
  const d = DERSLER[HK.ders];
  view(`<div class="wrap hk" style="--c:${d.renk}">
    <div class="top"><button class="ghost" data-act="hkcik">‹ Çık</button><div class="hud"><span class="puan" id="hkhamle">${HK.hamle} hamle</span><span class="seri" id="hkkalan">${HK.eslesti.size}/${HK.qs.length} çift</span></div></div>
    <p class="hkbilgi">Bir soru kartı ile onun doğru cevabını eşleştir.</p>
    <div class="hkgrid">${HK.kartlar.map((k, p) => {
      const q = HK.qs[k.i];
      return `<button class="hkkart ${k.tip === 's' ? 'soru' : 'cevap'}" data-act="hkcevir" data-p="${p}" aria-label="Kapalı kart ${p + 1}">
        <span class="hkon" aria-hidden="true"></span>
        <span class="hkarka">${k.tip === 's' ? `<small>Ünite ${q.unite}</small>${esc(q.soru)}` : `<b>${esc(q.sec[q.dogru])}</b>`}</span></button>`;
    }).join('')}</div>
    <div id="fb" aria-live="polite"></div></div>`);
}

function hkCevir(p) {
  if (!HK || HK.acik.length >= 2 || HK.acik.includes(p) || HK.eslesti.has(HK.kartlar[p].i)) return;
  const b = document.querySelectorAll('.hkkart')[p];
  b.classList.add('acik'); b.setAttribute('aria-label', b.querySelector('.hkarka').textContent);
  HK.acik.push(p);
  if (HK.acik.length < 2) return;
  HK.hamle++;
  $('#hkhamle').textContent = `${HK.hamle} hamle`;
  const [x, y] = HK.acik.map(i => HK.kartlar[i]), kartEl = HK.acik.map(i => document.querySelectorAll('.hkkart')[i]);
  if (x.i === y.i && x.tip !== y.tip) {
    HK.eslesti.add(x.i); HK.acik = [];
    kartEl.forEach(el => el.classList.add('eslesti'));
    oyunKayit(HK.ders, HK.qs[x.i], true, false);
    $('#hkkalan').textContent = `${HK.eslesti.size}/${HK.qs.length} çift`;
    if (HK.eslesti.size === HK.qs.length) HK.to = setTimeout(hkSonuc, 700);
    return;
  }
  HK.hata++;
  kartEl.forEach(el => el.classList.add('hata'));
  HK.to = setTimeout(() => {
    kartEl.forEach((el, j) => { el.classList.remove('acik', 'hata'); el.setAttribute('aria-label', `Kapalı kart ${HK.acik[j] + 1}`); });
    HK.acik = [];
  }, 1100);
}

function hkSonuc() {
  const sn = Math.round((Date.now() - HK.t0) / 1000);
  const puan = Math.max(50, HK.qs.length * 100 - HK.hata * 20 + Math.max(0, 120 - sn));
  const k = HK.ders + ':hafiza', enIyi = S.best[k] || 0, yeni = puan > enIyi;
  if (yeni) { S.best[k] = puan; kaydet(); }
  sonucEkran({
    renk: DERSLER[HK.ders].renk, baslik: 'Tüm kartlar eşleşti', big: puan,
    etiket: HK.hata <= 2 ? 'Fotoğraf hafızası' : HK.hata <= 6 ? 'İyi gidiyor' : 'Tekrar dene',
    alt: `puan${yeni ? ' · yeni rekor' : enIyi ? ` · rekor ${enIyi}` : ''}`,
    sk: [['Hamle', HK.hamle], ['Süre', `${sn} sn`]],
    tekrar: 'hktekrar', geri: dersGeri(HK.ders)
  });
  // Bitirince eşleşmeleri bir kez daha toplu göster: oyun tekrar etmeye dönüşsün
  $('.result .sk').insertAdjacentHTML('afterend', `<div class="hkozet"><h3 class="alt">Bu turun eşleşmeleri</h3>${HK.qs.map(q =>
    `<div class="hkcift"><p>${esc(q.soru)}</p><b>${esc(q.sec[q.dogru])}</b></div>`).join('')}</div>`);
}

oyunEkle({
  id: 'hafiza', ad: 'Hafıza Kartları', alt: 'Kartları çevir, her soruyu doğru cevabıyla eşleştir.', min: HK_CIFT, yok: 'Bu ünitede 6 kısa cevaplı soru yok',
  havuz: (d, units) => tumSorular(d, units).filter(hkUygun),
  basla: hkBasla,
  olay: {
    hkcevir: ds => hkCevir(+ds.p),
    hktekrar: () => hkBasla(HK.havuz, HK.ders),
    hkcik: () => { const d = HK && HK.ders; if (HK) clearTimeout(HK.to); HK = null; d ? dersEkran(d) : home(); }
  }
});
