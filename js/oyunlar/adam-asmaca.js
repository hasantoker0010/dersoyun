/* Adam Asmaca: sorunun doğru cevabını harf harf bul; her yanlış harf oksijenden bir birim götürür.
   Dönüşüm: kisaCevap() sorularının doğru şıkkı; kod çıktısı soruları ve harfi az cevaplar alınmaz.
   Harf olmayan karakterler (boşluk, tire, sembol) baştan açık gelir. */
let AA = null;
const AA_HAK = 6, AA_TUR = 8;
const TR_HARF = 'ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZ';
const tahminMi = c => /[\p{L}\p{N}]/u.test(c);
// Klavyedeki tuşa indirger: Türkçe harfler kalır, â/î/û gibi işaretliler temel harfe döner
const tus = c => { const u = c.toLocaleUpperCase('tr'); return TR_HARF.includes(u) || /\d/.test(u) ? u : u.normalize('NFD')[0]; };
const aaUygun = q => q.tip !== 'code' && kisaCevap(q) && [...q.sec[q.dogru]].filter(c => /\p{L}/u.test(c)).length >= 3;

function aaBasla(qs, ders) {
  stopT(); G = null; T = null;
  AA = { havuz: qs, kalan: karistir(qs), ders, i: 0, n: Math.min(AA_TUR, qs.length), puan: 0, dogru: 0 };
  aaYeni();
}

function aaYeni() {
  const q = AA.kalan.pop();
  Object.assign(AA, { q, cevap: q.sec[q.dogru].trim(), tahmin: new Set(), yanlis: 0, bitti: false });
  aaCiz();
}

const aaAcik = c => !tahminMi(c) || AA.tahmin.has(tus(c));
const aaTamam = () => [...AA.cevap].every(aaAcik);

function aaCiz(fb = '') {
  const q = AA.q, d = DERSLER[AA.ders], kalan = AA_HAK - AA.yanlis;
  const kelime = AA.cevap.split(' ').map(w => `<span class="aakel">${[...w].map(c =>
    tahminMi(c) ? `<span class="aah ${aaAcik(c) || AA.bitti ? 'acik' : ''} ${AA.bitti && !aaAcik(c) ? 'kacti' : ''}">${aaAcik(c) || AA.bitti ? esc(c) : ''}</span>` : `<span class="aasem">${esc(c)}</span>`).join('')}</span>`).join('');
  const tuslar = [...TR_HARF, ...'0123456789'];
  view(`<div class="wrap aa" style="--c:${d.renk}">
    <div class="top"><button class="ghost" data-act="aacik">‹ Çık</button><div class="hud"><span class="puan">${AA.puan}</span><span class="seri">kelime ${AA.i + 1}/${AA.n}</span></div></div>
    <section class="qcard">
      <div class="meta"><span class="ub">Ünite ${q.unite}</span><span class="mt">${esc(d.uniteler[q.unite])}</span></div>
      <p class="q">${olumsuzVurgu(q.soru)}</p>
      ${q.kod ? `<pre class="kod"><code>${esc(q.kod)}</code></pre>` : ''}
      <div class="oksijen" aria-label="Oksijen ${kalan}/${AA_HAK}"><span>Oksijen</span><div class="okbar ${kalan <= 2 ? 'az' : ''}">${Array.from({ length: AA_HAK }, (_, i) => `<i class="${i < kalan ? 'dolu' : ''}"></i>`).join('')}</div></div>
      <div class="aakelime" aria-live="polite">${kelime}</div>
    </section>
    ${AA.bitti ? '' : `<div class="aaklavye">${tuslar.map(h => {
      const kul = AA.tahmin.has(h), var_ = kul && [...AA.cevap].some(c => tahminMi(c) && tus(c) === h);
      return `<button class="aatus ${kul ? (var_ ? 'var' : 'yok') : ''} ${/\d/.test(h) ? 'rakam' : ''}" data-act="aaharf" data-h="${h}" ${kul ? 'disabled' : ''}>${h}</button>`;
    }).join('')}</div>`}
    <div id="fb" aria-live="polite">${fb}</div></div>`);
}

function aaHarf(h) {
  if (!AA || AA.bitti || AA.tahmin.has(h)) return;
  AA.tahmin.add(h);
  if (![...AA.cevap].some(c => tahminMi(c) && tus(c) === h)) AA.yanlis++;
  if (aaTamam()) return aaBitir(true);
  if (AA.yanlis >= AA_HAK) return aaBitir(false);
  aaCiz();
}

function aaBitir(ok) {
  AA.bitti = true;
  const q = AA.q, son = AA.i + 1 >= AA.n || !AA.kalan.length;
  oyunKayit(AA.ders, q, ok, false); // harf tahminiyle bulunabildiği için listeden düşürmez
  let fb;
  if (ok) {
    const pts = 100 + 20 * (AA_HAK - AA.yanlis);
    AA.puan += pts; AA.dogru++;
    fb = `<div class="fb ok"><h3>Buldun <span class="pts">+${pts}</span></h3>${q.aciklama ? `<p class="exp">${esc(q.aciklama)}</p>` : ''}`;
  } else {
    fb = gbKart(q, `<div class="gbbas">Oksijen bitti</div>`).replace(/<\/div>$/, '');
  }
  aaCiz(`${fb}<button class="main next" data-act="aadevam">${son ? 'Sonucu gör' : 'Sonraki kelime'}</button></div>`);
  $('.next').focus({ preventScroll: true });
}

function aaDevam() {
  AA.i++;
  if (AA.i >= AA.n || !AA.kalan.length) return aaSonuc();
  aaYeni();
}

function aaSonuc() {
  const k = AA.ders + ':adam', enIyi = S.best[k] || 0, yeni = AA.puan > enIyi;
  if (yeni) { S.best[k] = AA.puan; kaydet(); }
  sonucEkran({
    renk: DERSLER[AA.ders].renk, baslik: 'Görev bitti', big: AA.puan,
    etiket: AA.dogru / AA.i >= 0.75 ? 'Oksijen ustası' : 'Tekrar dene',
    alt: `puan${yeni && AA.puan ? ' · yeni rekor' : enIyi ? ` · rekor ${enIyi}` : ''}`,
    sk: [['Bulunan', `${AA.dogru}/${AA.i}`]],
    tekrar: 'aatekrar', geri: dersGeri(AA.ders)
  });
}

document.addEventListener('keydown', e => {
  if (!AA || AA.bitti || !$('.aaklavye') || e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1) return;
  const h = tus(e.key);
  if (TR_HARF.includes(h) || /\d/.test(h)) { e.preventDefault(); aaHarf(h); }
});

oyunEkle({
  id: 'adam', ad: 'Adam Asmaca', alt: 'Cevabı harf harf bul. Her yanlış harf oksijen götürür.', min: 3, yok: 'Bu ünitede kısa cevaplı soru yok',
  havuz: (d, units) => tumSorular(d, units).filter(aaUygun),
  basla: aaBasla,
  olay: {
    aaharf: ds => aaHarf(ds.h),
    aadevam: () => aaDevam(),
    aatekrar: () => aaBasla(AA.havuz, AA.ders),
    aacik: () => { const d = AA && AA.ders; AA = null; d ? dersEkran(d) : home(); }
  }
});
