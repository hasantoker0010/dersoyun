/* Çengel Bulmaca: kavramlardan her turda yeniden kurulan küçük bulmaca. Veri: OYUN_VERI.cengel (k = cevap, i = ipucu).
   Kurucu kelimeleri kesişme harflerinden yerleştirir; yan yana yapışan ya da çakışan yerleşimleri reddeder. */
const CG_MAX = 7, CG_GEN = 12;
const cgN = c => c.replace(/İ/g, 'I'); // klavyede i/İ/I karışmasın

function cgKur(kelimeler) {
  const H = new Map(), yon = new Set(), yer = [];
  const al = (r, c) => H.get(r + ',' + c);
  const sigar = () => { const rs = [...H.keys()].map(k => k.split(',').map(Number)); const r = rs.map(x => x[0]), c = rs.map(x => x[1]); return Math.max(...r) - Math.min(...r) < CG_GEN && Math.max(...c) - Math.min(...c) < CG_GEN; };
  const puan = (k, r, c, d) => { // d: 0 yatay, 1 dikey; -1 = yerleşemez
    const dr = d, dc = 1 - d;
    if (al(r - dr, c - dc) || al(r + dr * k.length, c + dc * k.length)) return -1;
    let kes = 0;
    for (let j = 0; j < k.length; j++) {
      const rr = r + dr * j, cc = c + dc * j, v = al(rr, cc);
      if (v) { if (v !== k[j] || yon.has(`${rr},${cc},${d}`)) return -1; kes++; }
      else if (al(rr + dc, cc + dr) || al(rr - dc, cc - dr)) return -1;
    }
    return kes;
  };
  const koy = (w, r, c, d) => {
    for (let j = 0; j < w.n.length; j++) { const rr = r + d * j, cc = c + (1 - d) * j; H.set(rr + ',' + cc, w.n[j]); yon.add(`${rr},${cc},${d}`); }
    yer.push({ ...w, r, c, d });
  };
  const liste = kelimeler.map(x => ({ x, n: cgN(x.k) })).sort((a, b) => b.n.length - a.n.length);
  for (const w of liste) {
    if (yer.length >= CG_MAX) break;
    if (!yer.length) { koy(w, 0, 0, 0); continue; }
    let en = null;
    for (const p of yer) for (let a = 0; a < p.n.length; a++) for (let b = 0; b < w.n.length; b++) {
      if (p.n[a] !== w.n[b]) continue;
      const d = 1 - p.d, r = p.r + p.d * a - d * b, c = p.c + (1 - p.d) * a - (1 - d) * b, s = puan(w.n, r, c, d);
      if (s > 0 && (!en || s > en.s || (s === en.s && Math.random() < .3))) en = { r, c, d, s };
    }
    if (!en) continue;
    koy(w, en.r, en.c, en.d);
    if (!sigar()) { // sınırı aşarsa geri al
      yer.pop();
      H.clear(); yon.clear();
      yer.splice(0).forEach(q => koy(q, q.r, q.c, q.d));
    }
  }
  const r0 = Math.min(...yer.map(w => w.r)), c0 = Math.min(...yer.map(w => w.c));
  yer.forEach(w => { w.r -= r0; w.c -= c0; });
  const satir = Math.max(...yer.map(w => w.r + w.d * (w.n.length - 1))) + 1, sutun = Math.max(...yer.map(w => w.c + (1 - w.d) * (w.n.length - 1))) + 1;
  const basla = [...new Set(yer.map(w => w.r * 100 + w.c))].sort((a, b) => a - b);
  yer.forEach(w => { w.no = basla.indexOf(w.r * 100 + w.c) + 1; });
  return { yer, satir, sutun };
}

// Kendi kendini sınama: her kelime ızgarada doğru okunmalı, kesişmeler tutarlı olmalı
(() => {
  const b = cgKur(OYUN_VERI.cengel.filter(x => x.ders === 'algoritmalar')), g = {};
  const tutarli = b.yer.every(w => [...w.n].every((h, j) => { const k = (w.r + w.d * j) + ',' + (w.c + (1 - w.d) * j); if (g[k] && g[k] !== h) return false; g[k] = h; return true; }));
  console.assert(b.yer.length >= 4 && tutarli && b.sutun <= CG_GEN && b.satir <= CG_GEN, 'cgKur');
})();

function cgBasla(items, ders) {
  // Az kelimeyle (ör. tek konu) bulmaca kurulamaz: aynı dersin kelimeleriyle tamamlanır
  let havuz = items;
  if (havuz.length < 6) { const d = (items[0] || {}).ders || 'algoritmalar'; havuz = [...items, ...OYUN_VERI.cengel.filter(x => x.ders === d && !items.includes(x))]; }
  yoBasla({ id: 'cengel', ders, items, yeniden: () => cgBasla(items, ders) });
  // Konu öğeleri önce gelsin, sonra karışık
  const b = cgKur([...karistir(items).slice(0, 4), ...karistir(havuz.filter(x => !items.slice(0, 4).includes(x)))].slice(0, 14));
  Object.assign(YO, b, { bitti: false });
  cgCiz();
}

function cgCiz() {
  const { yer, satir, sutun } = YO, hucre = {};
  yer.forEach(w => [...w.n].forEach((h, j) => { const k = (w.r + w.d * j) + ',' + (w.c + (1 - w.d) * j); (hucre[k] ??= { h, no: 0 }); if (!j) hucre[k].no = w.no; }));
  let izgara = '';
  for (let r = 0; r < satir; r++) for (let c = 0; c < sutun; c++) {
    const x = hucre[r + ',' + c];
    izgara += x ? `<label class="cgh">${x.no ? `<small>${x.no}</small>` : ''}<input maxlength="1" data-r="${r}" data-c="${c}" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Satır ${r + 1}, sütun ${c + 1}"></label>` : '<span class="cgb"></span>';
  }
  const ipuc = d => yer.filter(w => w.d === d).sort((a, b) => a.no - b.no).map(w => `<li data-w="${yer.indexOf(w)}"><b>${w.no}.</b> ${esc(w.x.i)} <small>(${w.n.length})</small></li>`).join('');
  view(`<div class="wrap cg" style="--c:${yoRenk(YO.ders)}">
    ${yoUst(`<span class="puan">${yer.length}</span><span class="seri">kelime</span>`)}
    <h2 class="dbaslik">Çengel Bulmaca</h2>
    <div class="cgizgara" style="--s:${sutun}">${izgara}</div>
    <div class="cgipucu"><div><h3 class="alt">Soldan sağa</h3><ol>${ipuc(0)}</ol></div><div><h3 class="alt">Yukarıdan aşağıya</h3><ol>${ipuc(1)}</ol></div></div>
    <button class="main" data-act="cgkontrol">Kontrol et</button>
    <button class="ghost wide" data-act="cgcoz">Çözümü göster</button>
    <div id="fb" aria-live="polite"></div></div>`);
  const ilk = $('.cgh input');
  if (ilk && matchMedia('(hover:hover)').matches) ilk.focus();
}

const cgInput = (r, c) => $(`.cgh input[data-r="${r}"][data-c="${c}"]`);

function cgKontrol(goster) {
  if (YO.bitti) return;
  YO.bitti = true;
  let dogru = 0;
  YO.yer.forEach((w, i) => {
    const kutular = [...w.n].map((_, j) => cgInput(w.r + w.d * j, w.c + (1 - w.d) * j));
    const ok = !goster && kutular.every((el, j) => cgN(el.value.toLocaleUpperCase('tr')) === w.n[j]);
    if (ok) dogru++;
    yoKayit(w.x, ok);
    $(`.cgipucu li[data-w="${i}"]`).classList.add(ok ? 'dogru' : 'yanlis');
    kutular.forEach((el, j) => {
      if (cgN(el.value.toLocaleUpperCase('tr')) !== w.n[j]) { el.value = w.x.k[j]; el.parentNode.classList.add('acildi'); }
      else el.parentNode.classList.add('tamam');
      el.readOnly = true;
    });
  });
  if (dogru === YO.yer.length) rozetVer('cengel');
  document.querySelectorAll('.cg > .main, .cg > .ghost.wide').forEach(b => b.remove());
  $('#fb').innerHTML = `<div class="fb ${dogru === YO.yer.length ? 'ok' : 'no'}"><h3>${dogru}/${YO.yer.length} kelime doğru <span class="pts">+${dogru * 50}</span></h3>
    <p class="exp">Kırmızı kutular açıldı; ipuçlarının yanındaki işaretlere bak.</p>
    <button class="main" data-act="yotekrar">Yeni bulmaca</button>${yoGeri() || '<button class="ghost wide" data-act="home">Ana ekran</button>'}</div>`;
}

// Yazma yönü: kutu yalnızca yatay ya da dikey kelimedeyse o yön, kesişmedeyse son yön korunur
document.addEventListener('focusin', e => {
  const el = e.target;
  if (!YO || YO.id !== 'cengel' || !el.closest || !el.closest('.cgh')) return;
  const r = +el.dataset.r, c = +el.dataset.c, yatay = cgInput(r, c - 1) || cgInput(r, c + 1), dikey = cgInput(r - 1, c) || cgInput(r + 1, c);
  if (yatay && !dikey) YO.yon = 0; else if (dikey && !yatay) YO.yon = 1;
});
document.addEventListener('input', e => {
  const el = e.target;
  if (!YO || YO.id !== 'cengel' || !el.closest('.cgh')) return;
  el.value = el.value.slice(-1).toLocaleUpperCase('tr');
  if (!el.value) return;
  const r = +el.dataset.r, c = +el.dataset.c, sonra = YO.yon ? cgInput(r + 1, c) : cgInput(r, c + 1);
  if (sonra) sonra.focus();
});
document.addEventListener('keydown', e => {
  const el = e.target;
  if (!YO || YO.id !== 'cengel' || !el.closest || !el.closest('.cgh')) return;
  const r = +el.dataset.r, c = +el.dataset.c, ok = { ArrowRight: [0, 1], ArrowLeft: [0, -1], ArrowDown: [1, 0], ArrowUp: [-1, 0] }[e.key];
  if (ok) { const n = cgInput(r + ok[0], c + ok[1]); if (n) { e.preventDefault(); n.focus(); } }
  else if (e.key === 'Backspace' && !el.value) { const n = cgInput(r, c - 1) || cgInput(r - 1, c); if (n) { e.preventDefault(); n.focus(); n.value = ''; } }
  else if (e.key === 'Enter') { e.preventDefault(); cgKontrol(false); }
});

oyunEkle({
  id: 'cengel', beceri: true, simge: '#', ad: 'Çengel Bulmaca', alt: 'Kavramlardan kurulan küçük bulmacayı çöz.', min: 4,
  havuz: yoHavuz(OYUN_VERI.cengel), etiket: (d, u, n) => n + ' kavram',
  basla: cgBasla,
  olay: { cgkontrol: () => cgKontrol(false), cgcoz: () => cgKontrol(true) }
});
