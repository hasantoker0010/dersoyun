/* Aralıklı Tekrar (Leitner): 5 kutu, tekrar aralıkları 1-2-4-7-14 gün.
   Herhangi bir oyunda yanlış yapılan soru Kutu 1'e girer. Dönüşüm yok: soru asıl haliyle sorulur. */
const L_ARALIK = [1, 2, 4, 7, 14];
let LD = { ders: null, units: new Set() };

// Zayıf konular kaydındaki yeni ya da yeniden yanlış yapılan soruları Kutu 1'e alır
function lEsitle() {
  const L = (S.leitner ??= {});
  let degisti = false;
  for (const [id, y] of Object.entries(S.yanlis)) {
    if (!SORU[id] || (L[id] && y.son <= L[id].t)) continue;
    L[id] = { k: 1, vade: gun(), t: Date.now() };
    degisti = true;
  }
  if (degisti) kaydet();
  return L;
}

const lKartlar = (d, units = new Set()) => Object.entries(lEsitle())
  .filter(([id]) => SORU[id] && (!d || SORU[id].d === d) && (!units.size || units.has(SORU[id].q.unite)));
const lVadeli = (d, units) => lKartlar(d, units).filter(([, x]) => x.k <= 5 && x.vade <= gun()).map(([id]) => SORU[id].q);

function lEkran(d, units) {
  stopT(); G = null; T = null;
  LD = { ders: d, units: units || new Set() };
  const kartlar = lKartlar(d, LD.units), vadeli = lVadeli(d, LD.units);
  const say = k => kartlar.filter(([, x]) => x.k === k).length, enCok = Math.max(1, ...[1, 2, 3, 4, 5].map(say));
  const sonraki = kartlar.filter(([, x]) => x.k <= 5 && x.vade > gun()).map(([, x]) => x.vade - gun()).sort((a, b) => a - b)[0];
  const renk = d ? DERSLER[d].renk : '#A58BFF';
  view(`<div class="wrap" style="--c:${renk}">
    <div class="top"><button class="ghost" data-act="${d ? 'ders' : 'home'}" data-ders="${d || ''}">‹ Geri</button></div>
    <h2 class="dbaslik">Aralıklı Tekrar</h2>
    <p class="lalt">${d ? esc(DERSLER[d].ad) + ' · ' : 'Tüm dersler · '}Yanlış yaptığın sorular Kutu 1'e girer. Bildikçe bir üst kutuya çıkar ve daha seyrek sorulur; unutursan Kutu 1'e döner.</p>
    <div class="lkutular">${[1, 2, 3, 4, 5].map(k => `<div class="lkutu"><b>K${k}</b><div class="bar"><i style="width:${say(k) / enCok * 100}%"></i></div><em>${say(k)}</em><small>${k === 1 ? 'her gün' : L_ARALIK[k - 1] + ' günde bir'}</small></div>`).join('')}</div>
    <p class="logren">Öğrenildi: <b>${say(6)}</b></p>
    ${vadeli.length
      ? `<button class="main" data-act="lbasla">Bugünün tekrarına başla (${vadeli.length})</button>`
      : `<p class="bos">${kartlar.length ? `Bugün tekrar yok.${sonraki ? ` Sıradaki tekrar ${sonraki} gün sonra.` : ''}` : 'Henüz kutuda soru yok. Herhangi bir oyunda yanlış yaptığın sorular buraya gelir.'}</p>`}</div>`);
}

function lBasla() {
  const qs = karistir(lVadeli(LD.ders, LD.units)).slice(0, 30);
  if (!qs.length) return lEkran(LD.ders, LD.units);
  const R = { yukari: 0, asagi: 0 };
  turBasla({
    qs, ders: LD.ders, yazili: true,
    hud: () => `<span class="puan">${T.qs.length - T.i - (T.kilit ? 1 : 0)}</span><span class="seri">kalan</span>`,
    cevap: (ok, q) => {
      const x = S.leitner[q.id] || { k: 1 };
      if (ok) {
        x.k = Math.min(6, x.k + 1); R.yukari++;
        x.vade = gun() + (x.k <= 5 ? L_ARALIK[x.k - 1] : 0);
      } else { x.k = 1; x.vade = gun() + 1; R.asagi++; }
      x.t = Date.now();
      S.leitner[q.id] = x; kaydet();
      return { baslik: ok ? (x.k === 6 ? 'Doğru · Öğrenildi' : `Doğru · Kutu ${x.k}`) : 'Yanlış · Kutu 1' };
    },
    son: () => {
      const ogr = Object.values(S.leitner).filter(x => x.k === 6).length;
      const yeni = [10, 50, 100].filter(n => ogr >= n && rozetVer('leitner-' + n));
      sonucEkran({
        renk: LD.ders ? DERSLER[LD.ders].renk : '#A58BFF', baslik: 'Tekrar bitti', big: `${T.dogru}/${T.n}`,
        etiket: T.n && T.dogru / T.n >= 0.8 ? 'Harika!' : 'Yarın yine',
        alt: `${R.yukari} soru üst kutuya çıktı · ${R.asagi} soru Kutu 1'e döndü${yeni.length ? ` · yeni rozet: ${yeni.pop()} öğrenilen soru` : ''}`,
        sk: [['Öğrenildi', ogr]],
        geri: `<button class="ghost wide" data-act="lac" data-ders="${LD.ders || ''}">Kutulara dön</button>`
      });
    },
    cik: () => lEkran(LD.ders, LD.units)
  });
}

oyunEkle({
  id: 'leitner', ad: 'Aralıklı Tekrar', alt: 'Yanlışların kutularda; zamanı gelince yeniden sorulur.', her: true,
  havuz: lVadeli,
  etiket: (d, u, n) => n ? `Bugün ${n} tekrar` : 'Bugün tekrar yok',
  basla: (qs, d) => lEkran(d, new Set(C.units)),
  olay: {
    lbasla: () => lBasla(),
    lac: ds => lEkran(ds.ders || null)
  }
});

SERITLER.push(() => {
  const n = lVadeli(null).length, top = lKartlar(null).length;
  if (!top) return '';
  return `<button class="serit" style="--c:#A58BFF" data-act="lac" data-ders=""><b>Aralıklı Tekrar</b><span>${n ? `Bugün ${n} soru seni bekliyor` : 'Bugün tekrar yok'}</span></button>`;
});
