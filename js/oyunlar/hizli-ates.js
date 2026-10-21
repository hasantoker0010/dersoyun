/* Hızlı Ateş: soru kökü ve tek bir şık gösterilir, "Bu şık doğru cevap mı?"
   Dönüşüm: %50 sec[dogru] (beklenen Evet), %50 rastgele yanlış şık (beklenen Hayır). Metin değişmez. */
const HZ_SURE = 60, HZ_CEZA = 3;
let H = null;

const hzCarp = () => 1 + Math.min(H.seri, 6) * 0.25;
const hzKalan = () => Math.max(0, H.kalan - (H.t0 ? (Date.now() - H.t0) / 1000 : 0));

function hzBasla(qs, ders) {
  stopT();
  G = null; // games.js klavye kısayolları eski turu tetiklemesin
  H = { qs, ders, deste: [], kalan: HZ_SURE, t0: 0, puan: 0, seri: 0, enSeri: 0, dogru: 0, n: 0, bekle: false };
  hzKart();
  hzSaat();
}

function hzKart() {
  if (!H.deste.length) H.deste = karistir(H.qs);
  const q = H.deste.pop(), evet = Math.random() < 0.5;
  const yanlislar = q.sec.map((_, i) => i).filter(i => i !== q.dogru);
  H.k = { q, s: evet ? q.dogru : yanlislar[Math.random() * yanlislar.length | 0], evet };
  H.bekle = false;
  hzCiz();
}

const hzHud = () => `<span class="puan">${H.puan}</span><span class="seri ${H.seri >= 3 ? 'hot' : ''}">seri ${H.seri} · ×${hzCarp()}</span>`;

function hzCiz(gb = '') {
  const { q, s } = H.k, d = DERSLER[H.ders || dOf(q)];
  view(`<div class="wrap hz" style="--c:${d.renk}">
    <div class="top"><button class="ghost" data-act="hzcik">‹ Çık</button><div class="hud" id="hud">${hzHud()}</div></div>
    <div class="timer" aria-hidden="true"><i id="tbar" style="width:${hzKalan() / HZ_SURE * 100}%"></i></div>
    <div class="tsn" id="tsn">${Math.ceil(hzKalan())} sn</div>
    ${gb || `<section class="hzkart" id="hzkart">
      <div class="meta"><span class="ub">Ünite ${q.unite}</span><span class="mt">${esc(DERSLER[dOf(q)].uniteler[q.unite])}</span><span class="sayi">${H.n + 1}</span></div>
      <p class="q">${olumsuzVurgu(q.soru)}</p>
      ${q.kod ? `<pre class="kod"><code>${esc(q.kod)}</code></pre>` : ''}
      <div class="hzsik">${esc(q.sec[s])}</div>
      <p class="hzsor">Bu şık doğru cevap mı?</p>
      <div class="hzbtn">
        <button class="hzh" data-act="hzcevap" data-p="0"><span aria-hidden="true">✗</span> Hayır</button>
        <button class="hze" data-act="hzcevap" data-p="1"><span aria-hidden="true">✓</span> Evet</button>
      </div>
    </section>`}</div>`);
}

function hzSaat() {
  H.t0 = Date.now();
  iv = setInterval(() => {
    const k = hzKalan(), b = $('#tbar');
    if (b) { b.style.width = k / HZ_SURE * 100 + '%'; b.classList.toggle('az', k < 10); $('#tsn').textContent = Math.ceil(k) + ' sn'; }
    if (k <= 0) hzSonuc();
  }, 100);
}

function hzDurdur() { H.kalan = hzKalan(); H.t0 = 0; stopT(); }

function hzCevap(evet) {
  if (!H || H.bekle) return;
  const { q, s } = H.k, ok = evet === H.k.evet;
  H.n++;
  oyunKayit(dOf(q), q, ok, false);
  if (ok) {
    H.dogru++; H.seri++; H.enSeri = Math.max(H.enSeri, H.seri);
    H.puan += Math.round(10 * hzCarp());
    hzKart();
    $('#hzkart').classList.add('hzok');
    return;
  }
  // Yanlış: süre durur, öğretici kart açılır; ceza devam edince düşülür
  H.seri = 0; H.bekle = true;
  hzDurdur();
  const ust = `<h3 class="gbbas">Yanlış <small>−${HZ_CEZA} sn</small></h3>
    <p class="gbsik">Gösterilen şık: <b>${esc(q.sec[s])}</b><br>${H.k.evet ? 'Bu şık doğru cevaptı.' : 'Bu şık doğru cevap değildi.'}</p>`;
  hzCiz(gbKart(q, ust) + '<button class="main" data-act="hzdevam" id="hzdevam">Devam</button>');
  $('#hzdevam').focus({ preventScroll: true });
}

function hzDevam() {
  if (!H || !H.bekle) return;
  H.kalan = Math.max(0, H.kalan - HZ_CEZA);
  if (H.kalan <= 0) return hzSonuc();
  hzKart();
  hzSaat();
}

function hzSonuc() {
  stopT();
  const k = H.ders + ':hizli', enIyi = S.best[k] || 0, yeni = H.puan > enIyi;
  if (yeni) { S.best[k] = H.puan; kaydet(); }
  const rozet = H.dogru >= 25 && rozetVer('hizli-25');
  const oran = H.n ? H.dogru / H.n : 0;
  const etiket = H.dogru >= 25 ? 'Ateş topu!' : oran >= 0.8 ? 'Harika!' : oran >= 0.5 ? 'İyi gidiyor' : 'Tekrar dene';
  view(`<div class="wrap result" style="--c:${DERSLER[H.ders].renk}">
    <h2>Süre doldu</h2>
    <div class="big">${H.puan}</div>
    <span class="rozet">${etiket}</span>
    <p class="sub">puan${yeni && H.puan ? ' · yeni rekor' : enIyi ? ` · rekor ${enIyi}` : ''}${rozet ? ' · yeni rozet: 25 doğru' : ''}</p>
    <dl class="sk"><div><dt>Doğru</dt><dd>${H.dogru}/${H.n}</dd></div><div><dt>En uzun seri</dt><dd>${H.enSeri}</dd></div></dl>
    <button class="main" data-act="hztekrar">Tekrar oyna</button>
    <button class="ghost wide" data-act="zayif">Zayıf konularım</button>
    <button class="ghost wide" data-act="ders" data-ders="${H.ders}">Mod seçimine dön</button></div>`);
  H.bitti = true;
}

oyunEkle({
  id: 'hizli', ad: 'Hızlı Ateş', alt: '60 saniye. Bu şık doğru mu? Evet ya da hayır.',
  havuz: (d, units) => tumSorular(d, units).filter(kisaSoru),
  min: 4,
  basla: hzBasla,
  olay: {
    hzcevap: ds => hzCevap(ds.p === '1'),
    hzdevam: () => hzDevam(),
    hztekrar: () => hzBasla(H.qs, H.ders),
    hzcik: () => { stopT(); const d = H && H.ders; H = null; d ? dersEkran(d) : home(); }
  }
});

document.addEventListener('keydown', e => {
  if (!H || H.bitti || !$('.hz') || e.ctrlKey || e.metaKey || e.altKey) return;
  if (H.bekle) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hzDevam(); }
  } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'h') { e.preventDefault(); hzCevap(false); }
  else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'e') { e.preventDefault(); hzCevap(true); }
});
