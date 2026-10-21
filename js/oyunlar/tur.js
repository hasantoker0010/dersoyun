/* Tam soru turu: sorular tam haliyle (5 şık ya da kodda çıktı yazma) sorulur.
   Aralıklı Tekrar, Milyoner ve Harita/Boss bunu kendi kurallarıyla kullanır.
   cfg = { qs, ders, yazili, sure, hud(), ust(), sayi(), cevap(ok, q, bilgi) → { pts, html, baslik }, bitti(), son(), cik(), tick(gecen) } */
let T = null;

const tCarp = () => 1 + Math.min(T.seri, 6) * 0.25;
const tHud = () => `<span class="puan">${T.puan}</span><span class="seri ${T.seri >= 3 ? 'hot' : ''}">seri ${T.seri}</span>`;

function turBasla(cfg) {
  stopT();
  G = null; // games.js klavye kısayolları eski turu tetiklemesin
  T = { cfg, qs: cfg.qs.slice(), i: 0, puan: 0, seri: 0, enSeri: 0, dogru: 0, n: 0, ikinci: false };
  tSoru();
}

function tSoru(ayni) {
  stopT();
  const q = T.qs[T.i], c = T.cfg;
  if (!ayni) { T.sira = karistir(q.sec.map((_, i) => i)); T.gizli = new Set(); T.elendi = new Set(); T.kayitli = false; T.t0 = Date.now(); }
  T.q = q; T.kilit = false;
  T.yazili = c.yazili && q.tip === 'code' && q.cevap;
  const d = DERSLER[dOf(q)];
  const govde = T.yazili
    ? `<input id="ans" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Çıktı" placeholder="Ekrana yazılacak çıktı"><button class="main" data-act="tkontrol">Çıktıyı kontrol et</button>`
    : `<div class="opts" role="group" aria-label="Seçenekler">${T.sira.map((s, p) => {
        const kapali = T.gizli.has(p) || T.elendi.has(p);
        return `<button class="opt ${T.gizli.has(p) ? 'gizli' : ''} ${T.elendi.has(p) ? 'yanlis' : ''}" data-act="tsec" data-p="${p}" ${kapali ? 'disabled' : ''}><span class="bub">${harf(p)}</span><span>${esc(q.sec[s])}</span></button>`;
      }).join('')}</div>`;
  view(`<div class="wrap tur" style="--c:${DERSLER[c.ders || dOf(q)].renk}">
    <div class="top"><button class="ghost" data-act="tcik">‹ Çık</button><div class="hud" id="hud">${c.hud ? c.hud() : tHud()}</div></div>
    ${c.ust ? `<div id="tust">${c.ust()}</div>` : `<div class="prog" aria-hidden="true"><i style="width:${T.i / T.qs.length * 100}%"></i></div>`}
    ${c.sure ? '<div class="timer" aria-hidden="true"><i id="tbar"></i></div><div class="tsn" id="tsn"></div>' : ''}
    <section class="qcard">
      <div class="meta"><span class="ub">Ünite ${q.unite}</span><span class="mt">${esc(d.uniteler[q.unite])}</span><span class="sayi">${c.sayi ? c.sayi() : `${T.i + 1}/${T.qs.length}`}</span></div>
      ${q.kaynak ? `<div class="kaynak">${esc(q.kaynak)}</div>` : ''}
      <p class="q">${olumsuzVurgu(q.soru)}</p>
      ${q.kod ? `<pre class="kod"><code>${esc(q.kod)}</code></pre>` : ''}
      ${govde}
    </section>
    <div id="fb" aria-live="polite"></div></div>`);
  if (c.sure || c.tick) { tTick(); iv = setInterval(tTick, 100); }
  const a = $('#ans');
  if (a && matchMedia('(hover:hover)').matches) a.focus();
}

function tTick() {
  const c = T.cfg, gecen = (Date.now() - T.t0) / 1000;
  if (c.tick) c.tick(gecen);
  if (!c.sure) return;
  const k = c.sure - gecen, b = $('#tbar');
  if (b) { b.style.width = Math.max(0, k / c.sure * 100) + '%'; b.classList.toggle('az', k < 10); $('#tsn').textContent = Math.max(0, Math.ceil(k)) + ' sn'; }
  if (k <= 0) tSec(-1);
}

function tSec(p) {
  if (!T || T.kilit) return;
  const q = T.q, zaman = p < 0, ok = !zaman && T.sira[p] === q.dogru;
  const btn = document.querySelectorAll('.opt');
  if (!ok && !zaman && T.ikinci) {
    // İkinci Şans: yanlış kaydolur, şık kapanır, bir hak daha
    T.ikinci = false;
    tKayit(false);
    T.elendi.add(p);
    btn[p].disabled = true; btn[p].classList.add('yanlis');
    $('#fb').innerHTML = '<div class="fb no"><h3>İkinci şans</h3><p class="exp">Bu şık yanlış. Bir hakkın daha var.</p></div>';
    if (T.cfg.ust) $('#tust').innerHTML = T.cfg.ust();
    return;
  }
  btn.forEach((b, i) => {
    b.disabled = true;
    b.classList.add(T.sira[i] === q.dogru ? 'dogru' : i === p ? 'yanlis' : 'sonuk');
  });
  tCevap(ok, { zaman });
}

function tKontrol() {
  if (!T || T.kilit) return;
  const girdi = $('#ans'), v = girdi.value, q = T.q;
  if (!v.trim()) return;
  girdi.disabled = true;
  document.querySelector('.qcard .main')?.remove();
  tCevap([q.cevap, ...(q.kabul || [])].some(x => kn(x) === kn(v)), {});
}

function tKayit(ok) {
  if (T.kayitli || T.cfg.kayit === false) return;
  T.kayitli = true;
  oyunKayit(dOf(T.q), T.q, ok, true);
}

function tCevap(ok, bilgi) {
  T.kilit = true; stopT();
  const q = T.q, c = T.cfg;
  T.n++;
  if (ok) { T.dogru++; T.seri++; T.enSeri = Math.max(T.enSeri, T.seri); } else T.seri = 0;
  tKayit(ok);
  bilgi.gecen = (Date.now() - T.t0) / 1000;
  const r = (c.cevap && c.cevap(ok, q, bilgi)) || {};
  T.puan += r.pts || 0;
  T.son = c.bitti ? c.bitti() : T.i + 1 >= T.qs.length;
  $('#hud').innerHTML = c.hud ? c.hud() : tHud();
  if (c.ust) $('#tust').innerHTML = c.ust();
  const d = DERSLER[dOf(q)];
  $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">
    <h3>${esc(r.baslik || (bilgi.zaman ? 'Süre doldu' : ok ? 'Doğru' : 'Yanlış'))} ${r.pts ? `<span class="pts">+${r.pts}</span>` : ''}</h3>
    ${ok ? '' : T.yazili
      ? `<div class="model"><b>Doğru çıktı</b><pre class="kod"><code>${esc(q.cevap)}</code></pre></div>`
      : `<div class="model"><b>Doğru cevap</b><p>${esc(q.sec[q.dogru])}</p></div>`}
    ${ok ? '' : `<p class="tunite">Ünite ${q.unite} · ${esc(d.uniteler[q.unite])}${q.kaynak ? ' · ' + esc(q.kaynak) : ''}</p>`}
    ${r.html || ''}
    ${q.aciklama ? `<p class="exp">${esc(q.aciklama)}</p>` : ''}
    <button class="main next" data-act="tsonraki">${T.son ? 'Sonucu gör' : 'Sonraki soru'}</button></div>`;
  const n = $('.next'); n.focus({ preventScroll: true }); n.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function tSonraki() {
  if (!T || !T.kilit) return;
  if (T.son) return T.cfg.son();
  T.i++;
  if (T.i >= T.qs.length) return T.cfg.son();
  tSoru();
}

oyunEkle({
  id: '_tur', havuz: () => [], // kart göstermez; yalnızca olayları dinler
  olay: {
    tsec: ds => tSec(+ds.p),
    tkontrol: () => tKontrol(),
    tsonraki: () => tSonraki(),
    tcik: () => { stopT(); const c = T && T.cfg; T = null; c && c.cik ? c.cik() : c && c.ders ? dersEkran(c.ders) : home(); }
  }
});

document.addEventListener('keydown', e => {
  if (!T || !$('.tur') || e.ctrlKey || e.metaKey || e.altKey) return;
  if (T.kilit) {
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') { e.preventDefault(); tSonraki(); }
  } else if (T.yazili) {
    if (e.target.id === 'ans' && e.key === 'Enter') { e.preventDefault(); tKontrol(); }
  } else if (/^[a-e]$/i.test(e.key)) {
    const p = e.key.toLowerCase().charCodeAt(0) - 97, b = document.querySelectorAll('.opt')[p];
    if (b && !b.disabled) tSec(p);
  }
});
