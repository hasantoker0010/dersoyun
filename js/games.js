let G = null, iv = 0;
const stopT = () => { clearInterval(iv); iv = 0; };
const harf = i => 'ABCDE'[i];
const dOf = q => SORU[q.id].d;
const kn = s => String(s).toLowerCase().replace(/\s*,\s*/g, ',').replace(/\s+/g, ' ').trim();
const carp = () => 1 + Math.min(G.seri, 6) * 0.25;
const GECME = 0.5; // ucu açık sorularda doğru sayılma eşiği

function oyun(qs, mod, o, ders) {
  G = { cfg: { qs, mod, o, ders }, qs: karistir(qs).slice(0, o.max || qs.length), mod, o, ders, i: 0, puan: 0, seri: 0, enSeri: 0, dogru: 0, can: o.can ? 3 : 0 };
  soruCiz();
}

const hud = () =>
  (G.o.can ? `<span class="can" aria-label="${G.can} can">${'♥'.repeat(G.can)}${'♡'.repeat(3 - G.can)}</span>` : '') +
  `<span class="puan">${G.puan}</span><span class="seri ${G.seri >= 3 ? 'hot' : ''}">seri ${G.seri} · ×${carp()}</span>`;

function soruCiz() {
  stopT();
  const q = G.qs[G.i], d = DERSLER[dOf(q)];
  const tip = G.mod === 'karisik' ? q.tip : G.mod; // mcq | open | code
  G.q = q; G.tip = tip; G.kilit = false;
  G.sure = G.o.sure && tip === 'mcq' ? 60 : 0;

  let govde;
  if (tip === 'mcq') {
    G.sira = karistir(q.sec.map((_, i) => i));
    govde = `<div class="opts" role="group" aria-label="Seçenekler">${G.sira.map((s, p) =>
      `<button class="opt" data-act="sec" data-p="${p}"><span class="bub">${harf(p)}</span><span>${esc(q.sec[s])}</span></button>`).join('')}</div>`;
  } else if (tip === 'open') {
    govde = `<textarea id="ans" rows="5" aria-label="Cevabın" placeholder="Cevabını kendi cümlelerinle yaz…"></textarea><button class="main" data-act="kontrol">Cevabı kontrol et</button>`;
  } else {
    govde = `<input id="ans" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Çıktı" placeholder="Ekrana yazılacak çıktı"><button class="main" data-act="kontrol">Çıktıyı kontrol et</button>`;
  }

  view(`<div class="wrap" style="--c:${d.renk}">
    <div class="top"><button class="ghost" data-act="cik">‹ Çık</button><div class="hud" id="hud">${hud()}</div></div>
    <div class="prog" aria-hidden="true"><i style="width:${G.i / G.qs.length * 100}%"></i></div>
    ${G.sure ? '<div class="timer" aria-hidden="true"><i id="tbar"></i></div><div class="tsn" id="tsn">60 sn</div>' : ''}
    <section class="qcard">
      <div class="meta"><span class="ub">Ünite ${q.unite}</span><span class="mt">${esc(d.uniteler[q.unite])}</span><span class="sayi">${G.i + 1}/${G.qs.length}</span></div>
      ${q.kaynak ? `<div class="kaynak">${esc(q.kaynak)}</div>` : ''}
      <p class="q">${esc(q.soru)}</p>
      ${q.kod ? `<pre class="kod"><code>${esc(q.kod)}</code></pre>` : ''}
      ${govde}
    </section>
    <div id="fb" aria-live="polite"></div></div>`);

  if (G.sure) { G.t0 = Date.now(); iv = setInterval(tick, 100); }
  const a = $('#ans');
  if (a && matchMedia('(hover:hover)').matches) a.focus();
}

function tick() {
  const k = G.sure - (Date.now() - G.t0) / 1000, b = $('#tbar');
  if (b) { b.style.width = Math.max(0, k / G.sure * 100) + '%'; b.classList.toggle('az', k < 10); $('#tsn').textContent = Math.max(0, Math.ceil(k)) + ' sn'; }
  if (k <= 0) sec(-1);
}

function sec(p) {
  if (G.kilit) return;
  const q = G.q, zaman = p < 0, ok = !zaman && G.sira[p] === q.dogru;
  const kalan = G.sure ? Math.max(0, G.sure - (Date.now() - G.t0) / 1000) : 0;
  document.querySelectorAll('.opt').forEach((b, i) => {
    b.disabled = true;
    b.classList.add(G.sira[i] === q.dogru ? 'dogru' : i === p ? 'yanlis' : 'sonuk');
  });
  bitir({ ok, pts: ok ? Math.round((100 + kalan * 1.5) * carp()) : 0, baslik: zaman ? 'Süre doldu' : null, html: '' });
}

function kontrol() {
  if (G.kilit) return;
  const girdi = $('#ans'), v = girdi.value, q = G.q;
  if (!v.trim()) return;
  girdi.disabled = true;
  document.querySelector('.main')?.remove();

  if (G.tip === 'open') {
    const t = norm(v), bul = q.anahtar.map(a => a.some(k => t.includes(norm(k))));
    const oran = bul.filter(Boolean).length / bul.length, yuzde = Math.round(oran * 100);
    const ok = oran >= GECME;
    const chips = q.anahtar.map((a, i) => `<span class="chip ${bul[i] ? 'var' : 'yok'}">${bul[i] ? '✓' : '✗'} ${esc(a[0])}</span>`).join('');
    bitir({
      ok,
      pts: ok ? Math.round(150 * oran * carp()) : Math.round(80 * oran),
      baslik: ok ? `Doğru · %${yuzde}` : oran >= 0.3 ? `Yarım kaldı · %${yuzde}` : `Eksik · %${yuzde}`,
      html: `<div class="chips">${chips}</div><div class="model"><b>Örnek cevap</b><p>${esc(q.cevap)}</p></div>`
    });
  } else {
    const ok = [q.cevap, ...(q.kabul || [])].some(c => kn(c) === kn(v));
    bitir({
      ok, pts: ok ? Math.round(120 * carp()) : 0,
      html: ok ? '' : `<div class="model"><b>Doğru çıktı</b><pre class="kod"><code>${esc(q.cevap)}</code></pre></div>`
    });
  }
}

function bitir({ ok, pts, baslik, html }) {
  G.kilit = true; stopT();
  G.puan += pts;
  if (ok) { G.dogru++; G.seri++; G.enSeri = Math.max(G.enSeri, G.seri); }
  else { G.seri = 0; if (G.o.can) G.can--; }
  kayitSonuc(dOf(G.q), G.q, ok);
  $('#hud').innerHTML = hud();
  const son = G.i + 1 >= G.qs.length || (G.o.can && G.can <= 0);
  $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">
    <h3>${esc(baslik || (ok ? 'Doğru' : 'Yanlış'))} <span class="pts">+${pts}</span></h3>${html}
    ${G.q.aciklama ? `<p class="exp">${esc(G.q.aciklama)}</p>` : ''}
    <button class="main next" data-act="sonraki">${son ? 'Sonucu gör' : 'Sonraki soru'}</button></div>`;
  const n = $('.next'); n.focus({ preventScroll: true }); n.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function sonraki() {
  G.i++;
  (G.i >= G.qs.length || (G.o.can && G.can <= 0)) ? sonuc() : soruCiz();
}

function sonuc() {
  stopT();
  const n = G.i, canBitti = G.o.can && G.can <= 0;
  let enIyi = 0, yeni = false;
  if (G.ders && G.o.kaydet) {
    const k = G.ders + ':' + G.mod;
    enIyi = S.best[k] || 0;
    if (G.puan > enIyi) { S.best[k] = G.puan; yeni = true; kaydet(); }
  }
  const oran = n ? G.dogru / n : 0, rozet = oran >= 0.8 ? 'Harika!' : oran >= 0.5 ? 'İyi gidiyor' : 'Tekrar dene';
  const renk = G.ders ? DERSLER[G.ders].renk : '#FFC933';
  view(`<div class="wrap result" style="--c:${renk}">
    <h2>${canBitti ? 'Canların bitti' : 'Tur bitti'}</h2>
    <div class="big">${G.puan}</div>
    <span class="rozet">${rozet}</span>
    <p class="sub">puan${yeni ? ' · yeni rekor' : enIyi ? ` · rekor ${enIyi}` : ''}</p>
    <dl class="sk"><div><dt>Doğru</dt><dd>${G.dogru}/${n}</dd></div><div><dt>En uzun seri</dt><dd>${G.enSeri}</dd></div></dl>
    <button class="main" data-act="tekrar">Tekrar oyna</button>
    <button class="ghost wide" data-act="zayif">Zayıf konularım</button>
    <button class="ghost wide" data-act="${G.ders ? 'ders' : 'home'}" data-ders="${G.ders || ''}">${G.ders ? 'Mod seçimine dön' : 'Ana ekran'}</button></div>`);
}
