/* Şık Eleme: doğruyu seçmek yerine yanlış şıkları tek tek ele. Doğru şıkkı elersen soru kaybedilir.
   Dönüşüm: aynı sec ve dogru, yalnızca etkileşim tersine. 10 soru, 3 can. */
let E = null;

function seBasla(qs, ders) {
  stopT(); G = null; T = null;
  E = { qs: karistir(qs).slice(0, 10), havuz: qs, ders, i: 0, puan: 0, can: 3, dogru: 0, seri: 0, enSeri: 0 };
  seSoru();
}

const seHud = () => `<span class="can" aria-label="${E.can} can">${'♥'.repeat(E.can)}${'♡'.repeat(3 - E.can)}</span><span class="puan">${E.puan}</span>`;

function seSoru() {
  const q = E.qs[E.i], d = DERSLER[E.ders];
  E.q = q; E.sira = karistir(q.sec.map((_, i) => i)); E.elendi = new Set(); E.kilit = false;
  view(`<div class="wrap se" style="--c:${d.renk}">
    <div class="top"><button class="ghost" data-act="secik">‹ Çık</button><div class="hud" id="hud">${seHud()}</div></div>
    <div class="prog" aria-hidden="true"><i style="width:${E.i / E.qs.length * 100}%"></i></div>
    <section class="qcard">
      <div class="meta"><span class="ub">Ünite ${q.unite}</span><span class="mt">${esc(d.uniteler[q.unite])}</span><span class="sayi">${E.i + 1}/${E.qs.length}</span></div>
      ${q.kaynak ? `<div class="kaynak">${esc(q.kaynak)}</div>` : ''}
      <p class="q">${olumsuzVurgu(q.soru)}</p>
      ${q.kod ? `<pre class="kod"><code>${esc(q.kod)}</code></pre>` : ''}
      <p class="sebilgi" id="sebilgi">Doğru cevap olmayan şıkları ele · <b>0/4</b></p>
      <div class="opts" role="group" aria-label="Elenecek şıklar">${E.sira.map((s, p) =>
        `<button class="opt" data-act="sesec" data-p="${p}"><span class="bub">${harf(p)}</span><span>${esc(q.sec[s])}</span></button>`).join('')}</div>
    </section>
    <div id="fb" aria-live="polite"></div></div>`);
}

function seSec(p) {
  if (!E || E.kilit || E.elendi.has(p)) return;
  const q = E.q, b = document.querySelectorAll('.opt'), dogruMu = E.sira[p] === q.dogru;
  if (!dogruMu) {
    E.elendi.add(p); E.puan += 20;
    b[p].disabled = true; b[p].classList.add('elendi');
    $('#sebilgi b').textContent = `${E.elendi.size}/4`;
    $('#hud').innerHTML = seHud();
    if (E.elendi.size < 4) return;
    E.puan += 40; E.dogru++; E.seri++; E.enSeri = Math.max(E.enSeri, E.seri);
    b.forEach((x, i) => { if (E.sira[i] === q.dogru) x.classList.add('dogru'); });
    kayitSonuc(E.ders, q, true);
    return seBitir(true);
  }
  // Doğru şık elendi: soru kaybedilir
  E.can--; E.seri = 0;
  b.forEach((x, i) => { x.disabled = true; if (i === p) x.classList.add('yanlis'); else if (!E.elendi.has(i)) x.classList.add('sonuk'); });
  kayitSonuc(E.ders, q, false);
  seBitir(false);
}

function seBitir(ok) {
  E.kilit = true;
  const q = E.q, d = DERSLER[E.ders];
  $('#hud').innerHTML = seHud();
  E.son = E.i + 1 >= E.qs.length || E.can <= 0;
  $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">
    <h3>${ok ? 'Hepsini eledin' : 'Doğru cevabı eledin'} ${ok ? '<span class="pts">+120</span>' : ''}</h3>
    ${ok ? '' : `<div class="model"><b>Doğru cevap</b><p>${esc(q.sec[q.dogru])}</p></div><p class="tunite">Ünite ${q.unite} · ${esc(d.uniteler[q.unite])}${q.kaynak ? ' · ' + esc(q.kaynak) : ''}</p>`}
    ${q.aciklama ? `<p class="exp">${esc(q.aciklama)}</p>` : ''}
    <button class="main next" data-act="sesonraki">${E.son ? 'Sonucu gör' : 'Sonraki soru'}</button></div>`;
  const n = $('.next'); n.focus({ preventScroll: true }); n.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function seSonraki() {
  if (!E || !E.kilit) return;
  if (!E.son) { E.i++; return seSoru(); }
  const k = E.ders + ':eleme', enIyi = S.best[k] || 0, yeni = E.puan > enIyi;
  if (yeni) { S.best[k] = E.puan; kaydet(); }
  const n = E.i + 1;
  sonucEkran({
    renk: DERSLER[E.ders].renk, baslik: E.can <= 0 ? 'Canların bitti' : 'Tur bitti', big: E.puan,
    etiket: E.dogru / n >= 0.8 ? 'Harika!' : E.dogru / n >= 0.5 ? 'İyi gidiyor' : 'Tekrar dene',
    alt: `puan${yeni && E.puan ? ' · yeni rekor' : enIyi ? ` · rekor ${enIyi}` : ''}`,
    sk: [['Tam eleme', `${E.dogru}/${n}`], ['En uzun seri', E.enSeri]],
    tekrar: 'setekrar', geri: dersGeri(E.ders)
  });
}

oyunEkle({
  id: 'eleme', ad: 'Şık Eleme', alt: 'Doğruyu değil, yanlışları bul. Doğruyu elersen can gider.', min: 1,
  havuz: tumSorular,
  basla: seBasla,
  olay: {
    sesec: ds => seSec(+ds.p),
    sesonraki: () => seSonraki(),
    setekrar: () => seBasla(E.havuz, E.ders),
    secik: () => { const d = E && E.ders; E = null; d ? dersEkran(d) : home(); }
  }
});

document.addEventListener('keydown', e => {
  if (!E || !$('.se') || e.ctrlKey || e.metaKey || e.altKey) return;
  if (E.kilit) { if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') { e.preventDefault(); seSonraki(); } }
  else if (/^[a-e]$/i.test(e.key)) seSec(e.key.toLowerCase().charCodeAt(0) - 97);
});
