const app = document.getElementById('app');
const view = h => { app.innerHTML = h; scrollTo(0, 0); gecis(h); };

const MODLAR = [
  { id: 'mcq', ad: 'Yarış', alt: 'Çoktan seçmeli. Süre, puan, seri ve 3 can.', o: { can: 1, sure: 1, kaydet: 1, max: 20 }, tipler: ['mcq', 'code'] }
];

const havuz = (d, m, units) => DERSLER[d].sorular.filter(q => m.tipler.includes(q.tip) && (!units.size || units.has(q.unite)));

/* ---------- Ana ekran ---------- */
function home() {
  stopT();
  const toplam = yanlisSay();
  // Görev ilerlemesi: tüm oyunlardaki doğru cevaplar / toplam soru sayısı (en fazla %100)
  const soruSay = dersler().reduce((t, k) => t + DERSLER[k].sorular.length, 0);
  const dogruSay = Object.values(S.stat).reduce((t, d) => t + Object.values(d).reduce((a, u) => a + u.d, 0), 0);
  const yuzde = Math.min(100, Math.round(dogruSay / soruSay * 100));
  view(`<div class="wrap home">
    <header class="hero">
      <p class="kimin">Hasan Toker için</p>
      <h1>Vize<br>Alıştırmaları</h1>
      <p>AÖF Yapay Zekâ Destekli Kodlama. Bir gezegen seç, görevini tamamla, zayıf yörüngelerini düzelt.</p>
      <div class="gorev">
        <div class="gb1"><span>Görev ilerlemesi</span><span>%${yuzde}</span></div>
        <div class="ray" aria-hidden="true"><i style="width:${Math.max(yuzde, 4)}%"><svg class="roket" viewBox="0 0 24 24"><path fill="#FFD66B" d="M12 2c3 2 5 5.5 5 9.5V15l2 3h-4l-1 2h-4l-1-2H5l2-3v-3.5C7 7.5 9 4 12 2z"/><circle cx="12" cy="10" r="2" fill="#060918"/><path fill="#FF6FB5" d="M10 20h4l-2 3z"/></svg></i></div>
        <small>${dogruSay} doğru cevap · ${soruSay} soruluk evren</small>
      </div>
    </header>
    <h3 class="alt">Derslerim</h3>
    <div class="gezegenler">${dersler().map((k, i) => {
      const d = DERSLER[k], z = yanlisSay(k);
      return `<button class="gezegen" style="--c:${d.renk}" data-gorsel="${k}" data-act="ders" data-ders="${k}">
        <span class="kure ${i % 2 ? '' : 'halka'}" aria-hidden="true"><span class="simge">${esc(d.simge)}</span></span>
        <span class="gbilgi"><b>${esc(d.ad)}</b>
        <small>${d.sorular.length} soru · ${Object.keys(d.uniteler).length} ünite${z ? ` · <em>${z} zayıf</em>` : ''}</small></span></button>`;
    }).join('')}</div>
    <button class="ghost wide" data-act="zayif" data-ders="hepsi">Zayıf konularım${toplam ? ` (${toplam})` : ''}</button>
    ${anaSeritler()}</div>`);
}

/* ---------- Ders: mod + ünite seçimi ---------- */
let C = { ders: null, units: new Set() };

function dersEkran(k) {
  if (k) C = { ders: k, units: new Set() };
  stopT();
  const d = DERSLER[C.ders], hep = !C.units.size;
  const mevcut = MODLAR.filter(m => havuz(C.ders, m, new Set()).length);
  view(`<div class="wrap" style="--c:${d.renk}" data-gorsel="${C.ders}">
    <div class="top"><button class="ghost" data-act="home">‹ Dersler</button></div>
    <div class="sahne" aria-hidden="true"></div>
    <h2 class="dbaslik">${esc(d.ad)}</h2>
    <h3 class="alt">Ünite</h3>
    <div class="urows">
      <button class="urow ${hep ? 'on' : ''}" data-act="unite" data-u="0"><span>Tüm üniteler</span></button>
      ${Object.entries(d.uniteler).map(([u, ad]) => `<button class="urow ${C.units.has(+u) ? 'on' : ''}" data-act="unite" data-u="${u}"><span class="ub">Ünite ${u}</span><span>${esc(ad)}</span></button>`).join('')}
    </div>
    <h3 class="alt">Mod</h3>
    <div class="modlar">${mevcut.map(m => {
      const n = havuz(C.ders, m, C.units).length;
      return `<button class="mod" data-act="basla" data-m="${m.id}" ${n ? '' : 'disabled'}><b>${m.ad}</b><span>${m.alt}</span><small>${n ? n + ' soru' : 'Bu ünitede soru yok'}</small></button>`;
    }).join('')}</div>
    ${oyunKartlari()}
    ${materyalHtml(C.ders)}
    <button class="ghost wide" data-act="zayif" data-ders="${C.ders}">Bu dersin zayıf konuları${yanlisSay(C.ders) ? ` (${yanlisSay(C.ders)})` : ''}</button></div>`);
}

// js/oyunlar/ altındaki kayıtlı oyunlar; o derste hiç uygun soru yoksa kart gösterilmez
function oyunKartlari() {
  const liste = OYUNLAR.filter(o => o.her || o.havuz(C.ders, new Set()).length >= (o.min || 1));
  if (!liste.length) return '';
  return `<h3 class="alt">Oyunlar</h3>
    <div class="modlar">${liste.map(o => {
      const n = o.havuz(C.ders, C.units).length, ok = o.her || n >= (o.min || 1);
      const not = o.etiket ? o.etiket(C.ders, C.units, n) : ok ? n + ' soru' : o.yok || 'Bu ünitede yeterli soru yok';
      return `<button class="mod oyun" data-act="oyna" data-m="${o.id}" ${ok ? '' : 'disabled'}><b>${esc(o.ad)}</b><span>${esc(o.alt)}</span><small>${esc(not)}</small></button>`;
    }).join('')}</div>`;
}

// Ders materyalleri (data/kaynaklar.js): Google Drive linkleri, yeni sekmede açılır
const KAYNAK_TUR = { video: 'Video', pdf: 'PDF', sinav: 'Çıkmış sınav (PDF)' };

function materyalHtml(k) {
  const r = window.KAYNAKLAR && KAYNAKLAR[k];
  if (!r || !r.length) return '';
  return `<h3 class="alt">Çalışma materyalleri</h3>
    <p class="not">Dosyalar Google Drive'ında açılır, hesabınla giriş yapmış olman gerekir.</p>
    <div class="materyal">
      ${r.map(([t, ad, url]) => `<a class="pdf" href="${esc(url)}" target="_blank" rel="noopener"><b>${esc(ad)}</b><span>${KAYNAK_TUR[t] || 'Dosya'}, Drive'da yeni sekmede açılır</span></a>`).join('')}
    </div>`;
}

/* ---------- Zayıf konularım ---------- */
let W = 'hepsi';

function zayifEkran(k) {
  if (k) W = k;
  stopT();
  const ks = dersler();
  const liste = Object.entries(S.yanlis).filter(([id, y]) => SORU[id] && (W === 'hepsi' || y.ders === W)).sort((a, b) => b[1].son - a[1].son);
  const oran = (d, u) => { const s = S.stat[d]?.[u] || { d: 0, y: 0 }; return { ...s, t: s.d + s.y, p: s.d + s.y ? s.y / (s.d + s.y) : 0 }; };
  const enZayif = d => Object.keys(DERSLER[d].uniteler).map(u => ({ u, ...oran(d, u) })).filter(x => x.y).sort((a, b) => b.p - a.p || b.y - a.y)[0];

  let ust;
  if (W === 'hepsi') {
    ust = `<div class="zrows">${ks.map(d => {
      const z = enZayif(d), n = yanlisSay(d);
      return `<button class="zrow" style="--c:${DERSLER[d].renk}" data-act="zayif" data-ders="${d}"><b>${esc(DERSLER[d].kisa)}</b><span>${z ? `en zayıf: Ünite ${z.u} (%${Math.round(z.p * 100)} yanlış)` : 'henüz yanlış yok'}</span><em>${n}</em></button>`;
    }).join('')}</div>`;
  } else {
    const d = DERSLER[W], z = enZayif(W);
    ust = `<div class="ubars">${Object.entries(d.uniteler).map(([u, ad]) => {
      const s = oran(W, u), p = Math.round(s.p * 100);
      return `<div class="ubar ${z && z.u === u ? 'en' : ''}"><div class="ut"><span class="ub">Ünite ${u}</span> ${esc(ad)}</div>
        <div class="bar"><i style="width:${p}%"></i></div>
        <small>${s.t ? `${s.y} yanlış / ${s.t} cevap (%${p})` : 'henüz oynanmadı'}</small></div>`;
    }).join('')}</div>`;
  }

  view(`<div class="wrap" style="--c:${W === 'hepsi' ? '#FF5C8A' : DERSLER[W].renk}">
    <div class="top"><button class="ghost" data-act="${C.ders && W !== 'hepsi' ? 'ders' : 'home'}" data-ders="${C.ders || ''}">‹ Geri</button></div>
    <h2 class="dbaslik">Zayıf konularım</h2>
    <div class="tabs" role="tablist">${['hepsi', ...ks].map(k => `<button class="tab ${W === k ? 'on' : ''}" role="tab" aria-selected="${W === k}" data-act="zayif" data-ders="${k}">${k === 'hepsi' ? 'Tümü' : esc(DERSLER[k].kisa)}</button>`).join('')}</div>
    ${ust}
    ${W === 'hepsi' ? konuPanel() : ''}
    <h3 class="alt">Tekrar etmen gerekenler (${liste.length})</h3>
    ${liste.length ? `<ul class="yl">${liste.map(([id, y]) => { const { q, d } = SORU[id]; return `<li><span class="ub">Ü${q.unite}</span><span class="yq">${W === 'hepsi' ? `<small>${esc(DERSLER[d].kisa)}</small> ` : ''}${esc(q.soru.length > 120 ? q.soru.slice(0, 120) + '…' : q.soru)}</span><b>×${y.n}</b></li>`; }).join('')}</ul>
      <button class="main" data-act="zayifoyna">Yanlışlarımla oyna</button>`
      : '<p class="bos">Yanlış kaydın yok. Birkaç tur oyna; yanlış yaptığın sorular burada toplanır, doğru bildikçe listeden çıkar.</p>'}
    ${Object.keys(S.yanlis).length || Object.keys(S.stat).length ? '<button class="ghost wide" data-act="sifirla">Tüm kayıtları sıfırla</button>' : ''}</div>`);
}

/* ---------- Olaylar ---------- */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]');
  if (!b || b.disabled) return;
  const { act, ders, u, m, p } = b.dataset;
  switch (act) {
    case 'home': home(); break;
    case 'ders': ders ? dersEkran(ders) : dersEkran(); break;
    case 'unite': {
      if (u === '0') C.units.clear();
      else { C.units.has(+u) ? C.units.delete(+u) : C.units.add(+u); }
      dersEkran(); break;
    }
    case 'basla': {
      const mod = MODLAR.find(x => x.id === m);
      oyun(havuz(C.ders, mod, C.units), mod.id, mod.o, C.ders); break;
    }
    case 'oyna': {
      const o = OYUNLAR.find(x => x.id === m);
      o.basla(o.havuz(C.ders, C.units), C.ders); break;
    }
    case 'sec': sec(+p); break;
    case 'kontrol': kontrol(); break;
    case 'sonraki': sonraki(); break;
    case 'cik': stopT(); G && G.ders ? dersEkran(G.ders) : home(); break;
    case 'tekrar': oyun(G.cfg.qs, G.cfg.mod, G.cfg.o, G.cfg.ders); break;
    case 'zayif': zayifEkran(ders || undefined); break;
    case 'zayifoyna': {
      const qs = Object.keys(S.yanlis).filter(id => SORU[id] && (W === 'hepsi' || S.yanlis[id].ders === W)).map(id => SORU[id].q);
      oyun(qs, 'karisik', {}, W === 'hepsi' ? null : W); break;
    }
    case 'sifirla':
      if (confirm('Yanlış kayıtların, ünite istatistiklerin ve rekorların silinecek. Devam edilsin mi?')) { S = bos(); kaydet(); zayifEkran(); }
      break;
    default: oyunOlay(act, b.dataset);
  }
});

document.addEventListener('keydown', e => {
  if (!G || !$('.qcard')) return;
  if (!G.kilit && G.tip === 'mcq' && /^[a-e]$/i.test(e.key) && !e.ctrlKey && !e.metaKey) {
    const p = e.key.toLowerCase().charCodeAt(0) - 97;
    if (document.querySelectorAll('.opt')[p]) sec(p);
  } else if (!G.kilit && e.target.id === 'ans' && e.key === 'Enter' && (G.tip === 'code' || e.ctrlKey)) {
    e.preventDefault(); kontrol();
  }
});

home();
