/* Harita ve Boss: her ünite bir ada. Ada, ünitenin soruları veri sırasıyla 5'erli duraklara bölünerek kurulur
   (son durak 5'ten azsa önceki durağa eklenir). Tüm duraklar geçilince boss açılır; boss yenilince sonraki ada açılır. */
let HB = null;

const hbSorular = (d, u) => DERSLER[d].sorular.filter(q => q.unite === +u && q.sec && q.sec.length);
function hbDuraklar(d, u) {
  const qs = hbSorular(d, u), g = [];
  for (let i = 0; i < qs.length; i += 5) g.push(qs.slice(i, i + 5));
  if (g.length > 1 && g[g.length - 1].length < 5) g[g.length - 2].push(...g.pop());
  return g;
}
const hbKayit = (d, u) => (((S.harita ??= {})[d] ??= {})[u] ??= { y: [], boss: false });
const hbAcik = (d, u) => +u === 1 || hbKayit(d, +u - 1).boss;
const hbYildiz = s => s >= 5 ? 3 : s === 4 ? 2 : s === 3 ? 1 : 0;

function hbToplam(d) {
  let y = 0, top = 0;
  for (const u of Object.keys(DERSLER[d].uniteler)) { const n = hbDuraklar(d, u).length; top += n * 3; y += hbKayit(d, u).y.reduce((a, b) => a + (b || 0), 0); }
  return { y, top };
}

function hbEkran(d) {
  stopT(); G = null; T = null;
  HB = { ders: d };
  const D = DERSLER[d], t = hbToplam(d);
  view(`<div class="wrap" style="--c:${D.renk}">
    <div class="top"><button class="ghost" data-act="ders" data-ders="${d}">‹ Geri</button><div class="hud"><span class="puan">${t.y}/${t.top}</span><span class="seri">yıldız</span></div></div>
    <h2 class="dbaslik">Hazine Haritası</h2>
    <p class="lalt">Her durak 5 soru; 3 doğru 1 yıldız, 4 doğru 2, 5 doğru 3 yıldız. Duraklar bitince adanın bekçisi açılır.</p>
    <div class="hbyol">${Object.entries(D.uniteler).map(([u, ad]) => {
      const acik = hbAcik(d, u), k = hbKayit(d, u), dur = hbDuraklar(d, u), hepsi = dur.every((_, j) => k.y[j] > 0);
      return `<section class="hbada ${acik ? '' : 'kilit'} ${k.boss ? 'fethedildi' : ''}">
        <h3><span class="ub">Ünite ${u}</span> ${esc(ad)}</h3>
        <div class="hbduraklar">${dur.map((g, j) => {
          const ac = acik && (j === 0 || k.y[j - 1] > 0), y = k.y[j] || 0;
          return `<button class="hbdurak ${y ? 'gecti' : ''}" data-act="hbdurak" data-u="${u}" data-p="${j}" ${ac ? '' : 'disabled'} aria-label="Durak ${j + 1}, ${y} yıldız"><b>${j + 1}</b><small>${'★'.repeat(y)}${'☆'.repeat(3 - y)}</small></button>`;
        }).join('')}
          <button class="hbboss ${k.boss ? 'gecti' : ''}" data-act="hbboss" data-u="${u}" ${acik && hepsi ? '' : 'disabled'}>${k.boss ? 'Bekçi yenildi' : 'Bekçi'}</button>
        </div>
        ${acik ? '' : `<p class="hbnot">Ünite ${u - 1} bekçisini yenince açılır.</p>`}
      </section>`;
    }).join('')}</div></div>`);
}

function hbDurak(u, j) {
  const d = HB.ders, qs = hbDuraklar(d, u)[j];
  HB.u = u; HB.j = j;
  turBasla({
    qs, ders: d,
    sayi: () => `Durak ${j + 1} · ${T.i + 1}/${T.qs.length}`,
    son: () => {
      const y = hbYildiz(T.dogru), k = hbKayit(d, u);
      if (y > (k.y[j] || 0)) { k.y[j] = y; kaydet(); }
      stopT();
      sonucEkran({
        renk: DERSLER[d].renk, baslik: y ? `Durak ${j + 1} geçildi` : 'Durak geçilemedi', big: `${T.dogru}/${T.qs.length}`,
        etiket: y ? '★'.repeat(y) : 'En az 3 doğru gerekli',
        tekrar: 'hbtekrar', geri: `<button class="ghost wide" data-act="hbac" data-ders="${d}">Haritaya dön</button>`
      });
    },
    cik: () => hbEkran(d)
  });
}

function hbBoss(u) {
  const d = HB.ders, B = { hp: 10, can: 3 }, havuz = hbSorular(d, u);
  HB.u = u; HB.j = -1;
  turBasla({
    qs: karistir(havuz), ders: d,
    hud: () => `<span class="can" aria-label="${B.can} can">${'♥'.repeat(B.can)}${'♡'.repeat(3 - B.can)}</span><span class="seri ${T.seri >= 3 ? 'hot' : ''}">seri ${T.seri}</span>`,
    ust: () => `<div class="boss"><div class="bossad"><b>Ünite ${u} Bekçisi</b><span>${esc(DERSLER[d].uniteler[u])}</span></div>
      <div class="bosscan"><i style="width:${Math.max(0, B.hp) * 10}%"></i></div><small>${Math.max(0, B.hp)}/10 can · seri 3 ve üstünde her doğru 2 hasar</small></div>`,
    sayi: () => `Soru ${T.n + (T.kilit ? 0 : 1)}`,
    cevap: ok => {
      if (T.i + 1 >= T.qs.length) T.qs.push(...karistir(havuz));
      if (ok) { const h = T.seri >= 3 ? 2 : 1; B.hp -= h; return { baslik: `Vurdun! −${h}` }; }
      B.can--; return { baslik: 'Bekçi sana vurdu' };
    },
    bitti: () => B.hp <= 0 || B.can <= 0,
    son: () => {
      const kazandi = B.hp <= 0;
      let rozet = '';
      if (kazandi) {
        hbKayit(d, u).boss = true; kaydet();
        if (rozetVer(`boss-${d}-${u}`)) rozet = `Ünite ${u} bekçisi`;
        if (Object.keys(DERSLER[d].uniteler).every(x => hbKayit(d, x).boss) && rozetVer('harita-' + d)) rozet = 'haritanın tamamı';
      }
      stopT();
      sonucEkran({
        renk: DERSLER[d].renk, baslik: kazandi ? 'Bekçiyi yendin!' : 'Bekçi kazandı', big: `${T.dogru}/${T.n}`,
        etiket: kazandi ? (+u < Object.keys(DERSLER[d].uniteler).length ? `Ünite ${+u + 1} açıldı` : 'Harita tamam') : 'Tekrar dene',
        alt: rozet ? `yeni rozet: ${rozet}` : '',
        tekrar: 'hbtekrar', geri: `<button class="ghost wide" data-act="hbac" data-ders="${d}">Haritaya dön</button>`
      });
    },
    cik: () => hbEkran(d)
  });
}

oyunEkle({
  id: 'harita', ad: 'Harita ve Boss', alt: 'Üniteleri ada ada geç, her adanın sonunda bekçiyi yen.', her: true,
  havuz: (d) => tumSorular(d, new Set()),
  etiket: d => { const t = hbToplam(d); return `${t.y}/${t.top} yıldız · ünite seçimi kullanılmaz`; },
  basla: (qs, d) => hbEkran(d),
  olay: {
    hbac: ds => hbEkran(ds.ders || HB.ders),
    hbdurak: ds => hbDurak(ds.u, +ds.p),
    hbboss: ds => hbBoss(ds.u),
    hbtekrar: () => HB.j < 0 ? hbBoss(HB.u) : hbDurak(HB.u, HB.j)
  }
});
