/* Yeni oyunların ortak parçaları. Her oyun js/oyunlar/<oyun>.js içinde oyunEkle() ile kayıt olur;
   app.js ders ekranında kartlarını çizer ve tanımadığı data-act değerlerini oyunOlay()'a iletir. */
const OYUNLAR = [];
const oyunEkle = o => { OYUNLAR.push(o); };
// o = { id, ad, alt, min, yok, havuz(ders, units) → soru listesi, basla(qs, ders), olay: { act: fn(dataset) } }

function oyunOlay(act, ds) {
  const o = OYUNLAR.find(x => x.olay && x.olay[act]);
  if (o) o.olay[act](ds);
}

// Seçili ders ve ünitelerdeki çoktan seçilebilir sorular (code soruların da 5 şıkkı var)
const tumSorular = (d, units) => DERSLER[d].sorular.filter(q => q.sec && q.sec.length && (!units.size || units.has(q.unite)));

// Tek şıkkı gösteren oyunlarda kafa karıştıran sorular: öncüllü, "hepsi/hiçbiri" şıklı, uzun kök ya da uzun kod
const oncullu = q => q.sec.some(s => /^(I|II|III|IV|V)(\b| ve|,)/.test(s.trim()) || /^Yalnız\s/.test(s.trim()));
const hepsiSikli = q => q.sec.some(s => /(hepsi|hiçbiri|tümü)/i.test(s));
const kisaSoru = q => !oncullu(q) && !hepsiSikli(q) && q.soru.length <= 200 && (!q.kod || q.kod.split('\n').length <= 6);

// Olumsuz kökleri metni değiştirmeden vurgular
const olumsuzVurgu = s => esc(s).replace(/(değildir|yanlıştır|yanlış olan|söylenemez|olamaz|yoktur)/gi, '<mark class="olumsuz">$1</mark>');

/* Yanlış her zaman Zayıf konularım'a yazılır. Doğru cevap listeden soru düşürsün mü:
   tam = soru tam haliyle çözüldü (şansa açık dönüşümlerde false, yalnızca ünite istatistiği artar). */
function oyunKayit(ders, q, ok, tam) {
  if (!ok || tam) return kayitSonuc(ders, q, ok);
  const u = ((S.stat[ders] ??= {})[q.unite] ??= { d: 0, y: 0 });
  u.d++;
  kaydet();
  dyKanca(ders, q, ok);
}

function rozetVer(id) {
  if ((S.rozet ??= {})[id]) return false;
  S.rozet[id] = Date.now(); kaydet();
  rozetDuyur(id);
  return true;
}

// Hatadan sonra gösterilen öğretici kart: soru, doğru şık, ünite, kaynak, varsa açıklama
function gbKart(q, ust = '') {
  const d = DERSLER[dOf(q)];
  return `<div class="gb">
    ${ust}
    <div class="gbmeta"><span class="ub">Ünite ${q.unite}</span><span>${esc(d.uniteler[q.unite])}</span></div>
    <p class="gbq">${olumsuzVurgu(q.soru)}</p>
    ${q.kod ? `<pre class="kod"><code>${esc(q.kod)}</code></pre>` : ''}
    <div class="gbdogru"><b>Doğru cevap</b><span>${esc(q.sec[q.dogru])}</span></div>
    ${q.aciklama ? `<p class="exp">${esc(q.aciklama)}</p>` : ''}
    ${q.kaynak ? `<div class="gbkaynak">${esc(q.kaynak)}</div>` : ''}
  </div>`;
}

// Ana ekranda dersin üstünde gösterilen şeritler (Günlük Görev, Aralıklı Tekrar)
const SERITLER = [];
const anaSeritler = () => SERITLER.map(f => f()).join('');

// Yerel takvim günü (gün sayısı); seri ve tekrar tarihleri bununla tutulur
const gun = (t = Date.now()) => Math.floor((t - new Date(t).getTimezoneOffset() * 60000) / 864e5);

// Yeni oyunların ortak sonuç ekranı
function sonucEkran({ renk, baslik, big, etiket, alt, sk = [], tekrar, geri }) {
  view(`<div class="wrap result" style="--c:${renk}">
    <h2>${esc(baslik)}</h2>
    <div class="big">${big}</div>
    ${etiket ? `<span class="rozet">${esc(etiket)}</span>` : ''}
    ${alt ? `<p class="sub">${alt}</p>` : ''}
    ${sk.length ? `<dl class="sk">${sk.map(([t, d]) => `<div><dt>${esc(t)}</dt><dd>${d}</dd></div>`).join('')}</dl>` : ''}
    ${tekrar ? `<button class="main" data-act="${tekrar}">Tekrar oyna</button>` : ''}
    <button class="ghost wide" data-act="zayif">Zayıf konularım</button>
    ${geri || '<button class="ghost wide" data-act="home">Ana ekran</button>'}</div>`);
}
const dersGeri = d => d ? `<button class="ghost wide" data-act="ders" data-ders="${d}">Mod seçimine dön</button>` : '';

/* ---------- Beceri oyunları (data/oyun-verisi.js) ortak parçaları ---------- */
// Aynı anda tek beceri oyunu açık olur; durumunu YO tutar
let YO = null;
const yoRenk = d => d ? DERSLER[d].renk : '#6FD3FF';
// Beceri öğeleri: ders/ünite varsa ünite istatistiğine yazılır; S.yanlis'e girmez (çoktan seçmeli soru değiller)
function yoKayit(x, ok) {
  if (x.ders && x.unite) { const u = ((S.stat[x.ders] ??= {})[x.unite] ??= { d: 0, y: 0 }); ok ? u.d++ : u.y++; }
  dyKanca(x.ders, x, ok);
}
// Kart için havuz: ders seçiliyse o dersin (ve ünitelerin) öğeleri, değilse hepsi
const yoHavuz = liste => (d, units) => liste.filter(x => !d || x.ders === d && (!units.size || units.has(x.unite)));
function yoBasla(durum) { stopT(); G = null; T = null; YO = durum; }
const yoUst = hud => `<div class="top"><button class="ghost" data-act="yocik">‹ Çık</button><div class="hud" id="hud">${hud}</div></div>`;
const yoGeri = () => YO && YO.ders ? dersGeri(YO.ders) : '';

oyunEkle({
  id: '_yo', havuz: () => [],
  olay: {
    yocik: () => { stopT(); const d = YO && YO.ders; YO = null; d ? dersEkran(d) : home(); },
    yotekrar: () => YO && YO.yeniden()
  }
});

/* Pointer Events ile sürükle-bırak sıralama (fare, dokunmatik, kalem). Öğeler .sur sınıflı; ▲▼ düğmeleri klavye için. */
function surukle(liste, degisti = () => { }) {
  let el = null, y0 = 0;
  liste.addEventListener('pointerdown', e => {
    const k = e.target.closest('.sur');
    if (!k || e.target.closest('button') || liste.classList.contains('kilitli')) return;
    el = k; y0 = e.clientY;
    k.setPointerCapture(e.pointerId); k.classList.add('tut');
    e.preventDefault();
  });
  liste.addEventListener('pointermove', e => {
    if (!el) return;
    el.style.transform = `translateY(${e.clientY - y0}px)`;
    const hedef = [...liste.children].find(x => {
      if (x === el) return false;
      const r = x.getBoundingClientRect();
      return e.clientY > r.top && e.clientY < r.bottom;
    });
    if (!hedef) return;
    const r = hedef.getBoundingClientRect(), once = el.getBoundingClientRect().top;
    liste.insertBefore(el, e.clientY < r.top + r.height / 2 ? hedef : hedef.nextSibling);
    y0 += el.getBoundingClientRect().top - once; // yer değişince parmağın altında kalsın
    el.style.transform = `translateY(${e.clientY - y0}px)`;
  });
  const birak = () => { if (!el) return; el.style.transform = ''; el.classList.remove('tut'); el = null; degisti(); };
  liste.addEventListener('pointerup', birak);
  liste.addEventListener('pointercancel', birak);
  liste.addEventListener('click', e => {
    const b = e.target.closest('[data-yon]'), k = b && b.closest('.sur');
    if (!k || liste.classList.contains('kilitli')) return;
    if (b.dataset.yon === '-1' && k.previousElementSibling) liste.insertBefore(k, k.previousElementSibling);
    if (b.dataset.yon === '1' && k.nextElementSibling) liste.insertBefore(k.nextElementSibling, k);
    b.focus(); degisti();
  });
}
const surOge = (i, html) => `<li class="sur" data-i="${i}"><span class="tutamac" aria-hidden="true">⋮⋮</span><span class="surm">${html}</span>
  <span class="suryon"><button type="button" data-yon="-1" aria-label="Yukarı taşı">▲</button><button type="button" data-yon="1" aria-label="Aşağı taşı">▼</button></span></li>`;
const surSira = liste => [...liste.children].map(x => +x.dataset.i);
// Karıştırır; doğru sırada gelirse ilk ikisini değiştirir
const karisikSira = n => { let s = karistir([...Array(n).keys()]); if (s.every((x, i) => x === i)) [s[0], s[1]] = [s[1], s[0]]; return s; };
