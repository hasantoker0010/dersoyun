/* Akış Şeması Yapbozu. Yapboz: karışık kutuları sürükleyip doğru sıraya diz. Sayma: SVG şemada istenen sembolden kaç tane var?
   Veri: OYUN_VERI.akis (adimlar: [tip, metin]); geri = [karar, dönülen adım] döngü oku. */
const AK_TUR = 6;
const AK_AD = { bas: 'Başla/Bitir', son: 'Başla/Bitir', gir: 'Giriş/Çıkış', isl: 'İşlem', kar: 'Karar' };
const AK_SORU = { isl: 'işlem (dikdörtgen) kutusu', kar: 'karar (eşkenar dörtgen) kutusu', gir: 'giriş/çıkış (paralelkenar) kutusu' };

// Şemayı dikey SVG olarak çizer; vurgu = bu tipteki kutular parlatılır
function akSema(x, vurgu) {
  const W = 330, cx = 150, w = 250, h = 44, kh = 60, ara = 28;
  let y = 12, govde = '';
  const ys = x.adimlar.map(([t]) => { const yy = y, hh = t === 'kar' ? kh : h; y += hh + ara; return { y: yy, h: hh }; });
  x.adimlar.forEach(([t, m], i) => {
    const { y: y0, h: hh } = ys[i], l = cx - w / 2, r = cx + w / 2, sinif = `sk ${t} ${vurgu && vurgu === t ? 'hedef' : ''}`;
    if (t === 'bas' || t === 'son') govde += `<rect class="${sinif}" x="${l + 30}" y="${y0}" width="${w - 60}" height="${hh}" rx="22"/>`;
    else if (t === 'isl') govde += `<rect class="${sinif}" x="${l}" y="${y0}" width="${w}" height="${hh}"/>`;
    else if (t === 'gir') govde += `<polygon class="${sinif}" points="${l + 16},${y0} ${r},${y0} ${r - 16},${y0 + hh} ${l},${y0 + hh}"/>`;
    else govde += `<polygon class="${sinif}" points="${cx},${y0} ${r},${y0 + hh / 2} ${cx},${y0 + hh} ${l},${y0 + hh / 2}"/>`;
    govde += `<text x="${cx}" y="${y0 + hh / 2}" dominant-baseline="central" text-anchor="middle">${esc(m)}</text>`;
    if (i < x.adimlar.length - 1) {
      govde += `<line class="ok" x1="${cx}" y1="${y0 + hh}" x2="${cx}" y2="${ys[i + 1].y - 2}" marker-end="url(#akuc)"/>`;
      if (t === 'kar' && x.geri && x.geri[0] === i) govde += `<text class="etk" x="${cx + 8}" y="${y0 + hh + 14}">Evet</text>`;
    }
  });
  if (x.geri) {
    const [k, hd] = x.geri, a = ys[k], b = ys[hd], xr = cx + w / 2 + 18;
    govde += `<polyline class="ok" points="${cx + w / 2},${a.y + a.h / 2} ${xr},${a.y + a.h / 2} ${xr},${b.y + b.h / 2} ${cx + w / 2 + 2},${b.y + b.h / 2}" marker-end="url(#akuc)"/>
      <text class="etk" x="${xr - 4}" y="${a.y + a.h / 2 - 6}" text-anchor="end">Hayır</text>`;
  }
  return `<svg class="aksema" viewBox="0 0 ${W} ${y - ara + 12}" role="img" aria-label="${esc(x.baslik)} akış şeması">
    <defs><marker id="akuc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z"/></marker></defs>${govde}</svg>`;
}

const akDogruMu = (x, sira) => {
  const dz = sira.every((v, i) => v === i);
  return dz || (x.takas || []).some(([a, b]) => sira.every((v, i) => v === (i === a ? b : i === b ? a : i)));
};

function akBasla(items, ders) {
  yoBasla({ id: 'akis', ders, items, yeniden: () => akBasla(items, ders) });
  view(`<div class="wrap ak" style="--c:${yoRenk(ders)}">
    ${yoUst('')}
    <h2 class="dbaslik">Akış Şeması Yapbozu</h2>
    <p class="lalt">Semboller: oval Başla/Bitir, paralelkenar Giriş/Çıkış, dikdörtgen İşlem, eşkenar dörtgen Karar.</p>
    <div class="modlar">
      <button class="mod oyun" data-act="akmod" data-m="yapboz"><b>Yapboz</b><span>Karışık kutuları sürükleyip doğru sıraya diz.</span><small>${Math.min(AK_TUR, items.length)} şema</small></button>
      <button class="mod oyun" data-act="akmod" data-m="say"><b>Sayma</b><span>Şemaya bak: istenen kutudan kaç tane var?</span><small>${Math.min(AK_TUR, items.length)} şema</small></button>
    </div></div>`);
}

function akMod(mod) {
  Object.assign(YO, { mod, kalan: karistir(YO.items).slice(0, AK_TUR), i: 0, dogru: 0, puan: 0, bitti: false });
  YO.n = YO.kalan.length;
  akSoru();
}

const akHud = () => `<span class="puan">${YO.puan}</span><span class="seri">${YO.i + 1}/${YO.n}</span>`;

function akSoru() {
  const x = YO.kalan[YO.i];
  YO.bitti = false; YO.x = x;
  let govde;
  if (YO.mod === 'yapboz') {
    YO.sira = karisikSira(x.adimlar.length);
    govde = `<p class="q">${esc(x.baslik)}: kutuları yukarıdan aşağıya doğru sıraya diz.</p>
      <ol class="surliste akliste" id="akliste">${YO.sira.map(i => surOge(i, `<i class="akik ${x.adimlar[i][0]}" aria-hidden="true"></i>${esc(x.adimlar[i][1])}`)).join('')}</ol>
      <button class="main" data-act="akkontrol">Kontrol et</button>`;
  } else {
    const tipler = ['isl', 'kar', 'gir'].filter(t => x.adimlar.some(a => a[0] === t) || Math.random() < .3);
    YO.tip = tipler[Math.random() * tipler.length | 0];
    YO.cevap = x.adimlar.filter(a => a[0] === YO.tip).length;
    govde = `<p class="q">Bu şemada kaç <b>${AK_SORU[YO.tip]}</b> var?</p>
      <div id="aksvg">${akSema(x)}</div>
      <div class="sayilar">${[0, 1, 2, 3, 4, 5, 6].map(n => `<button class="sayi" data-act="aksay" data-p="${n}">${n}</button>`).join('')}</div>`;
  }
  view(`<div class="wrap ak" style="--c:${yoRenk(YO.ders)}">
    ${yoUst(akHud())}
    <div class="prog" aria-hidden="true"><i style="width:${YO.i / YO.n * 100}%"></i></div>
    <section class="ykart"><div class="meta"><span class="ub">Ünite 3</span><span class="mt">${esc(x.baslik)}</span></div>${govde}</section>
    <div id="fb" aria-live="polite"></div></div>`);
  if (YO.mod === 'yapboz') surukle($('#akliste'));
}

function akSonucYaz(ok, html) {
  YO.bitti = true;
  if (ok) { YO.dogru++; YO.puan += 100; }
  yoKayit(YO.x, ok);
  $('#hud').innerHTML = akHud();
  const son = YO.i + 1 >= YO.n;
  $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}"><h3>${ok ? 'Doğru' : 'Yanlış'} ${ok ? '<span class="pts">+100</span>' : ''}</h3>${html}
    <button class="main next" data-act="akdevam">${son ? 'Sonucu gör' : 'Sonraki şema'}</button></div>`;
  $('.next').focus({ preventScroll: true });
}

function akKontrol() {
  if (YO.bitti) return;
  const liste = $('#akliste'), sira = surSira(liste), ok = akDogruMu(YO.x, sira);
  liste.classList.add('kilitli');
  [...liste.children].forEach((li, p) => li.classList.add(ok || sira[p] === p ? 'dogru' : 'yanlis'));
  akSonucYaz(ok, `<p class="exp">${ok ? 'Şema tamam:' : 'Doğru sıra şöyle:'}</p>${akSema(YO.x)}`);
}

function akSay(n) {
  if (YO.bitti) return;
  const ok = n === YO.cevap;
  document.querySelectorAll('.sayi').forEach(b => { b.disabled = true; if (+b.dataset.p === YO.cevap) b.classList.add('dogru'); else if (+b.dataset.p === n) b.classList.add('yanlis'); });
  $('#aksvg').innerHTML = akSema(YO.x, YO.tip);
  akSonucYaz(ok, `<p class="exp">Şemada ${YO.cevap} ${AK_SORU[YO.tip]} var; parlayanlar onlar. ${AK_AD[YO.tip]} sembolünü şeklinden tanı.</p>`);
}

function akDevam() {
  if (!YO.bitti) return;
  if (++YO.i < YO.n) return akSoru();
  if (YO.mod === 'yapboz' && YO.dogru === YO.n) rozetVer('sema-usta');
  sonucEkran({
    renk: yoRenk(YO.ders), baslik: YO.mod === 'yapboz' ? 'Yapboz bitti' : 'Sayma bitti', big: `${YO.dogru}/${YO.n}`,
    etiket: YO.dogru === YO.n ? 'Şema ustası' : YO.dogru / YO.n >= .5 ? 'İyi gidiyor' : 'Tekrar dene',
    sk: [['Puan', YO.puan]], tekrar: 'yotekrar', geri: yoGeri()
  });
}

oyunEkle({
  id: 'akis', beceri: true, simge: '◇', ad: 'Akış Şeması Yapbozu', alt: 'Kutuları sürükleyip diz ya da sembolleri say.', min: 1,
  havuz: yoHavuz(OYUN_VERI.akis), etiket: (d, u, n) => n + ' şema',
  basla: akBasla,
  olay: { akmod: ds => akMod(ds.m), akkontrol: () => akKontrol(), aksay: ds => akSay(+ds.p), akdevam: () => akDevam() }
});
