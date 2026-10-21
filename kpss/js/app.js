/* KPSS Önlisans: hash yönlendirmeli tek sayfa uygulama. İçerik data/*.js dosyalarından KPSS.ders(...) ile gelir. */
(function () {
  const ANAHTAR = 'kpss.v1';
  const HARF = 'ABCDE';
  const KART_ARALIK = [1, 2, 4, 7, 15]; // Leitner kutularına göre tekrar aralığı (gün)
  // Gerçek sınav: 120 soru / 130 dk. Mini deneme aynı dağılımın üçte biri.
  const MINI = { turkce: 10, matematik: 10, tarih: 9, cografya: 6, vatandaslik: 3, guncel: 2 };
  const MINI_SURE = 43;

  const $app = document.getElementById('app');
  const DERSLER = KPSS.dersler;
  const DERS = {};
  const SORU = {}; // id → { id, ders, konu, s, sec, d, a }
  const KART = {}; // id → { id, on, arka, ders, konu }

  DERSLER.forEach(d => {
    DERS[d.id] = d;
    d.ids = [];
    d.kartIds = [];
    d.konular.forEach(k => {
      k.ids = k.sorular.map((q, i) => {
        const id = d.id + '.' + k.id + '.' + i;
        SORU[id] = { id, ders: d, konu: k, s: q[0], sec: q[1], d: q[2], a: q[3] || '' };
        return id;
      });
      // "Başlık: açıklama" biçimindeki özet maddeleri bilgi kartına dönüşür
      k.kartIds = [];
      k.ozet.forEach((o, i) => {
        const j = o.indexOf(': ');
        if (j < 0) return;
        const id = d.id + '.' + k.id + '.k' + i;
        KART[id] = { id, on: o.slice(0, j), arka: o.slice(j + 2), ders: d, konu: k };
        k.kartIds.push(id);
      });
      d.ids.push(...k.ids);
      d.kartIds.push(...k.kartIds);
    });
  });

  // --- Kayıt
  const bos = () => ({ c: {}, gun: {}, kart: {}, den: [], hedef: '' });
  let V = bos();
  try { V = Object.assign(bos(), JSON.parse(localStorage.getItem(ANAHTAR))); } catch (e) { /* localStorage kapalıysa bellekte tutulur */ }
  const yaz = () => { try { localStorage.setItem(ANAHTAR, JSON.stringify(V)); } catch (e) { } };

  // --- Yardımcılar
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const karistir = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const gunStr = t => { const z = new Date(t.getTime() - t.getTimezoneOffset() * 60000); return z.toISOString().slice(0, 10); };
  const bugun = () => gunStr(new Date());
  const gunEkle = (s, n) => { const t = new Date(s + 'T12:00:00'); t.setDate(t.getDate() + n); return gunStr(t); };
  const yuzde = (a, b) => b ? Math.round(100 * a / b) : 0;
  const netStr = n => (Math.round(n * 100) / 100).toLocaleString('tr-TR');
  const dk = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');

  function cevapKaydet(id, dogru) {
    const r = V.c[id] || [0, 0, 0]; // [doğru sayısı, yanlış sayısı, son cevap doğru mu]
    r[dogru ? 0 : 1]++;
    r[2] = dogru ? 1 : 0;
    V.c[id] = r;
    V.gun[bugun()] = (V.gun[bugun()] || 0) + 1;
    yaz();
  }

  // Çözülen = en az bir kez cevaplanan; doğru oranı son cevaplara göre
  function istat(ids) {
    let coz = 0, dogru = 0;
    ids.forEach(id => { const r = V.c[id]; if (r) { coz++; dogru += r[2]; } });
    return { coz, top: ids.length, dogru, oran: yuzde(dogru, coz) };
  }

  const yanlisIds = () => Object.keys(V.c).filter(id => SORU[id] && V.c[id][2] === 0);
  const vadesiGelenKartlar = ids => ids.filter(id => { const k = V.kart[id]; return !k || k.s <= bugun(); });

  function seri() {
    let n = 0, g = bugun();
    if (!V.gun[g]) g = gunEkle(g, -1);
    while (V.gun[g]) { n++; g = gunEkle(g, -1); }
    return n;
  }

  // --- Yönlendirme
  let O = null;   // etkin test oturumu
  let KO = null;  // etkin kart oturumu
  let sayac = 0;

  window.addEventListener('hashchange', ciz);

  function ciz() {
    const p = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
    clearInterval(sayac);
    document.body.classList.toggle('test-modu', p[0] === 'test' || p[0] === 'kart');
    document.querySelectorAll('.altnav a').forEach(a => a.classList.toggle('aktif', a.dataset.r === (p[0] || '')));
    const sayfa = {
      '': anaSayfa, ders: () => dersSayfa(p[1]), konu: () => konuSayfa(p[1], p[2]),
      test: testSayfa, kart: kartSayfa, deneme: denemeSayfa, yanlislar: yanlislarSayfa, istatistik: istatistikSayfa
    }[p[0]];
    $app.innerHTML = sayfa ? sayfa() : anaSayfa();
    if (p[0] === 'test' && O && O.mod === 'deneme' && !O.bitti) sureyiBaslat();
    window.scrollTo(0, 0);
  }

  const git = h => { if (location.hash === h) ciz(); else location.hash = h; };

  // --- Sayfalar
  function dersKart(d) {
    const s = istat(d.ids);
    return `<a class="kart ders-kart" href="#/ders/${d.id}" style="--r:${d.renk}">
      <span class="simge">${esc(d.simge)}</span>
      <b>${esc(d.ad)}</b>
      <small>${d.konular.length} konu · ${d.ids.length} soru · ${s.coz ? '%' + s.oran + ' doğru' : 'henüz başlanmadı'}</small>
      <div class="bar"><i style="width:${yuzde(s.coz, s.top)}%"></i></div>
    </a>`;
  }

  function anaSayfa() {
    const tum = istat(Object.keys(SORU));
    const yanlis = yanlisIds().length;
    const kartVade = vadesiGelenKartlar(Object.keys(KART)).length;
    let hedef = '<a href="#/istatistik">Sınav tarihini ekle →</a>';
    if (V.hedef) {
      const kalan = Math.round((new Date(V.hedef + 'T12:00:00') - new Date(bugun() + 'T12:00:00')) / 864e5);
      hedef = kalan > 0 ? `Sınava <b>${kalan}</b> gün kaldı` : kalan === 0 ? '<b>Sınav bugün, başarılar!</b>' : 'Sınav tarihi geçti. <a href="#/istatistik">Güncelle →</a>';
    }
    const bolum = b => DERSLER.filter(d => d.bolum === b).map(dersKart).join('');
    return `
    <section class="kahraman">
      <h1>KPSS Önlisans</h1>
      <p>Konu özeti, soru bankası ve deneme ile her gün biraz.</p>
      <div class="sayilar">
        <div><b>${seri()}</b><span>günlük seri</span></div>
        <div><b>${V.gun[bugun()] || 0}</b><span>bugün çözülen</span></div>
        <div><b>${tum.coz ? '%' + tum.oran : '-'}</b><span>doğru oranı</span></div>
      </div>
      <div class="geri-sayim">${hedef}</div>
    </section>
    <div class="hizli">
      <button data-act="karisik"><b>Karışık test</b><small>Tüm derslerden 20 soru</small></button>
      <a href="#/deneme"><b>Mini deneme</b><small>40 soru · ${MINI_SURE} dk</small></a>
      <a href="#/yanlislar"><b>Yanlışlarım</b><small>${yanlis ? yanlis + ' soru bekliyor' : 'Yanlış yok'}</small></a>
      <button data-act="kart-hepsi"><b>Bilgi kartları</b><small>${kartVade} kart tekrar bekliyor</small></button>
    </div>
    <h2>Genel Yetenek</h2>
    <div class="dersler">${bolum('gy')}</div>
    <h2>Genel Kültür</h2>
    <div class="dersler">${bolum('gk')}</div>`;
  }

  function dersSayfa(id) {
    const d = DERS[id];
    if (!d) return anaSayfa();
    const s = istat(d.ids);
    return `<a class="geri" href="#/">‹ Ana sayfa</a>
    <div class="baslik" style="--r:${d.renk}"><span class="simge">${esc(d.simge)}</span>
      <div><h1>${esc(d.ad)}</h1><small>${s.coz}/${s.top} soru çözüldü${s.coz ? ' · %' + s.oran + ' doğru' : ''}</small></div></div>
    <div class="alt-dugmeler" style="margin:0 0 16px">
      <button class="btn ana tam" data-act="test-ders" data-d="${d.id}">Dersin tümünden test (${d.ids.length} soru)</button>
    </div>
    <div class="konular">${d.konular.map(k => {
      const ks = istat(k.ids);
      return `<div class="kart konu" style="--r:${d.renk}">
        <div class="konu-ust"><b>${esc(k.ad)}</b><small>${ks.coz}/${ks.top}${ks.coz ? ' · %' + ks.oran : ''}</small></div>
        <div class="bar"><i style="width:${yuzde(ks.coz, ks.top)}%"></i></div>
        <div class="dugmeler">
          <a class="btn" href="#/konu/${d.id}/${k.id}">Konu özeti</a>
          <button class="btn ana" data-act="test-konu" data-d="${d.id}" data-k="${k.id}">Test çöz</button>
        </div>
      </div>`;
    }).join('')}</div>`;
  }

  function konuSayfa(did, kid) {
    const d = DERS[did];
    const k = d && d.konular.find(x => x.id === kid);
    if (!k) return anaSayfa();
    const madde = o => { const j = o.indexOf(': '); return j < 0 ? esc(o) : `<strong>${esc(o.slice(0, j))}:</strong> ${esc(o.slice(j + 2))}`; };
    return `<a class="geri" href="#/ders/${d.id}">‹ ${esc(d.ad)}</a>
    <div class="baslik"><div><small>${esc(d.ad)}</small><h1>${esc(k.ad)}</h1></div></div>
    <ul class="ozet" style="--r:${d.renk}">${k.ozet.map(o => `<li>${madde(o)}</li>`).join('')}</ul>
    <div class="alt-dugmeler">
      <button class="btn ana tam" data-act="test-konu" data-d="${d.id}" data-k="${k.id}">Bu konudan test çöz (${k.ids.length} soru)</button>
      ${k.kartIds.length ? `<button class="btn tam" data-act="kart-konu" data-d="${d.id}" data-k="${k.id}">Bilgi kartlarıyla tekrar et (${k.kartIds.length} kart)</button>` : ''}
    </div>`;
  }

  function denemeSayfa() {
    const satirlar = DERSLER.map(d => `<tr><td>${esc(d.ad)}</td><td>${MINI[d.id] * 3}</td><td>${MINI[d.id]}</td></tr>`).join('');
    const gecmis = V.den.slice().reverse().slice(0, 10).map(x =>
      `<tr><td>${new Date(x.t).toLocaleDateString('tr-TR')}</td><td>${x.d}</td><td>${x.y}</td><td><b>${netStr(x.net)}</b></td></tr>`).join('');
    return `<div class="baslik"><h1>Mini deneme</h1></div>
    <div class="kart">
      <p style="margin-top:0">Gerçek KPSS Önlisans sınavında <b>120 soru</b> için <b>130 dakika</b> verilir. Mini deneme aynı ders dağılımının üçte biridir: <b>40 soru, ${MINI_SURE} dakika</b>.</p>
      <table class="tablo"><tr><th>Ders</th><th>Gerçek sınav</th><th>Mini deneme</th></tr>${satirlar}</table>
      <p class="soluk" style="font-size:.9rem">Net = doğru − yanlış ÷ 4. Dört yanlış bir doğruyu götürür; emin olmadığın soruyu boş bırakabilirsin.</p>
      <button class="btn ana tam" data-act="deneme-basla">Denemeyi başlat</button>
    </div>
    <h2>Geçmiş denemeler</h2>
    ${gecmis ? `<div class="kart"><table class="tablo"><tr><th>Tarih</th><th>D</th><th>Y</th><th>Net</th></tr>${gecmis}</table></div>` : '<div class="bos">Henüz deneme çözmedin.</div>'}`;
  }

  function yanlislarSayfa() {
    const ids = yanlisIds();
    if (!ids.length) return `<div class="baslik"><h1>Yanlışlarım</h1></div><div class="kart bos">Şu an yanlış sorun yok. Test çözdükçe yanlış yaptıkların burada birikir; doğru cevapladığında listeden çıkar.</div>`;
    const dersBazli = DERSLER.map(d => [d, ids.filter(id => SORU[id].ders === d)]).filter(x => x[1].length);
    return `<div class="baslik"><h1>Yanlışlarım</h1></div>
    <button class="btn ana tam" data-act="test-yanlis">Tüm yanlışları çöz (${ids.length})</button>
    <h2>Derse göre</h2>
    <div class="liste">${dersBazli.map(([d, l]) => `<div class="kart satir" style="--r:${d.renk}">
      <b>${esc(d.ad)}</b><button class="btn" data-act="test-yanlis" data-d="${d.id}">${l.length} soru</button></div>`).join('')}</div>`;
  }

  function istatistikSayfa() {
    const satir = d => {
      const s = istat(d.ids);
      return `<div class="satir" style="--r:${d.renk}"><b>${esc(d.ad)}</b><small>${s.coz}/${s.top} · ${s.coz ? '%' + s.oran + ' doğru' : '-'}</small><div class="bar"><i style="width:${yuzde(s.coz, s.top)}%"></i></div></div>`;
    };
    const zayif = [];
    DERSLER.forEach(d => d.konular.forEach(k => { const s = istat(k.ids); if (s.coz >= 2) zayif.push([s.oran, d, k]); }));
    zayif.sort((a, b) => a[0] - b[0]);
    const son7 = Array.from({ length: 7 }, (_, i) => gunEkle(bugun(), i - 6));
    const enCok = Math.max(1, ...son7.map(g => V.gun[g] || 0));
    return `<div class="baslik"><h1>İlerleme</h1></div>
    <div class="kart">${DERSLER.map(satir).join('')}</div>
    <h2>Son 7 gün</h2>
    <div class="kart" style="display:flex;gap:6px;align-items:flex-end;height:130px">${son7.map(g => {
      const n = V.gun[g] || 0;
      return `<div style="flex:1;text-align:center;font-size:.7rem" class="soluk"><div style="margin:0 auto 4px;width:70%;border-radius:6px 6px 2px 2px;background:var(--ana);height:${Math.round(80 * n / enCok) + 2}px" title="${n} soru"></div>${new Date(g + 'T12:00:00').toLocaleDateString('tr-TR', { weekday: 'short' })}</div>`;
    }).join('')}</div>
    <h2>Zayıf konular</h2>
    ${zayif.length ? `<div class="liste">${zayif.slice(0, 5).map(([o, d, k]) => `<a class="kart satir" style="--r:${d.renk};text-decoration:none" href="#/konu/${d.id}/${k.id}"><b>${esc(k.ad)}</b><small>%${o}</small></a>`).join('')}</div>` : '<div class="bos">Konu başına en az iki soru çözünce burada görünür.</div>'}
    <h2>Ayarlar</h2>
    <div class="kart" style="display:grid;gap:14px">
      <label class="alan">Sınav tarihi<input type="date" id="hedef" value="${esc(V.hedef)}"></label>
      <button class="btn tehlike" data-act="sifirla">Tüm ilerlemeyi sil</button>
    </div>`;
  }

  // --- Test
  function testBaslat(baslik, ids, mod) {
    if (!ids.length) return;
    O = { baslik, ids, mod, i: 0, cevap: {}, bitti: false };
    if (mod === 'deneme') O.bitis = Date.now() + MINI_SURE * 60000;
    git('#/test');
  }

  function testSayfa() {
    if (!O) { setTimeout(() => git('#/'), 0); return ''; }
    if (O.bitti) return sonucSayfa();
    const q = SORU[O.ids[O.i]];
    const n = O.ids.length;
    const sec = O.cevap[q.id];
    const pratik = O.mod === 'pratik';
    const cevaplandi = pratik && sec !== undefined;
    const sinif = j => {
      if (cevaplandi) return j === q.d ? 'dogru' : j === sec ? 'yanlis' : '';
      return j === sec ? 'secili' : '';
    };
    const ust = `<div class="test-ust"><button class="kapat" data-act="cik" aria-label="Testten çık">✕</button>
      <div class="bar"><i style="width:${yuzde(O.i + (cevaplandi ? 1 : 0), n)}%"></i></div>
      <span>${O.i + 1}/${n}</span>${pratik ? '' : '<span class="sure" id="sure"></span>'}</div>`;
    const kart = `<div class="kart" style="--r:${q.ders.renk}">
      <div class="soru-etiket">${esc(q.ders.ad)} · ${esc(q.konu.ad)}</div>
      <p class="soru">${esc(q.s)}</p>
      <div class="secenekler">${q.sec.map((s, j) =>
        `<button class="secenek ${sinif(j)}" data-act="sec" data-j="${j}" ${cevaplandi ? 'disabled' : ''}><span class="harf">${HARF[j]}</span><span>${esc(s)}</span></button>`).join('')}</div>
      ${cevaplandi ? `<div class="aciklama ${sec === q.d ? 'ok' : 'no'}"><b>${sec === q.d ? 'Doğru!' : 'Yanlış. Doğru cevap: ' + HARF[q.d]}</b>${q.a ? `<p>${esc(q.a)}</p>` : ''}</div>` : ''}
    </div>`;
    if (pratik) {
      return ust + kart + (cevaplandi ? `<div class="test-alt"><button class="btn ana" data-act="sonraki">${O.i + 1 < n ? 'Sonraki soru' : 'Sonucu gör'}</button></div>` : '');
    }
    return ust + kart + `<div class="test-alt">
        <button class="btn" data-act="onceki" ${O.i ? '' : 'disabled'}>‹ Önceki</button>
        ${O.i + 1 < n ? '<button class="btn ana" data-act="sonraki">Sonraki ›</button>' : '<button class="btn ana" data-act="bitir">Denemeyi bitir</button>'}
      </div>
      <div class="palet">${O.ids.map((id, i) => `<button class="${O.cevap[id] !== undefined ? 'dolu' : ''} ${i === O.i ? 'su-an' : ''}" data-act="atla" data-i="${i}">${i + 1}</button>`).join('')}</div>
      <div class="test-alt"><button class="btn tam" data-act="bitir">Bitir ve sonucu gör (${Object.keys(O.cevap).length}/${n} cevaplandı)</button></div>`;
  }

  function sureyiBaslat() {
    const guncelle = () => {
      const kalan = Math.max(0, Math.round((O.bitis - Date.now()) / 1000));
      const el = document.getElementById('sure');
      if (el) { el.textContent = dk(kalan); el.classList.toggle('az', kalan < 300); }
      if (!kalan) { clearInterval(sayac); denemeyiBitir(); }
    };
    guncelle();
    sayac = setInterval(guncelle, 1000);
  }

  function denemeyiBitir() {
    O.ids.forEach(id => { if (O.cevap[id] !== undefined) cevapKaydet(id, O.cevap[id] === SORU[id].d); });
    const s = sonucHesapla();
    V.den.push({ t: Date.now(), d: s.d, y: s.y, b: s.b, net: s.net });
    yaz();
    O.bitti = true;
    git('#/test');
  }

  function sonucHesapla(ids = O.ids) {
    let d = 0, y = 0;
    ids.forEach(id => { const c = O.cevap[id]; if (c === undefined) return; c === SORU[id].d ? d++ : y++; });
    return { d, y, b: ids.length - d - y, net: d - y / 4 };
  }

  function sonucSayfa() {
    const s = sonucHesapla();
    const yanlislar = O.ids.filter(id => O.cevap[id] !== SORU[id].d);
    const dersTablo = O.mod === 'deneme' ? `<h2>Ders bazında</h2><div class="kart"><table class="tablo"><tr><th>Ders</th><th>D</th><th>Y</th><th>B</th><th>Net</th></tr>${
      DERSLER.map(d => {
        const ids = O.ids.filter(id => SORU[id].ders === d);
        if (!ids.length) return '';
        const x = sonucHesapla(ids);
        return `<tr><td>${esc(d.ad)}</td><td>${x.d}</td><td>${x.y}</td><td>${x.b}</td><td><b>${netStr(x.net)}</b></td></tr>`;
      }).join('')}</table></div>` : '';
    const inceleme = yanlislar.map(id => {
      const q = SORU[id], c = O.cevap[id];
      return `<details class="inceleme" style="--r:${q.ders.renk}"><summary>${esc(q.ders.ad)} · ${esc(q.konu.ad)}</summary>
        <p class="soru">${esc(q.s)}</p>
        ${c === undefined ? '<p class="cevap-satir no">Boş bıraktın</p>' : `<p class="cevap-satir no">Senin cevabın: ${HARF[c]}) ${esc(q.sec[c])}</p>`}
        <p class="cevap-satir ok">Doğru cevap: ${HARF[q.d]}) ${esc(q.sec[q.d])}</p>
        ${q.a ? `<p class="soluk" style="margin:6px 0 0;font-size:.9rem">${esc(q.a)}</p>` : ''}</details>`;
    }).join('');
    return `<div class="kart sonuc-ust">
      <small>${esc(O.baslik)}</small>
      <div class="net">${netStr(s.net)}</div><small>net</small>
      <div class="dyb"><div class="d"><b>${s.d}</b>doğru</div><div class="y"><b>${s.y}</b>yanlış</div><div><b>${s.b}</b>boş</div></div>
    </div>
    ${dersTablo}
    <div class="alt-dugmeler">
      ${yanlislar.length ? `<button class="btn ana tam" data-act="tekrar-yanlis">Yanlış ve boşları yeniden çöz (${yanlislar.length})</button>` : ''}
      <a class="btn tam" href="#/">Ana sayfaya dön</a>
    </div>
    ${inceleme ? `<h2>Yanlış ve boşların</h2><div class="liste">${inceleme}</div>` : ''}`;
  }

  // --- Bilgi kartları
  function kartBaslat(ids) {
    if (!ids.length) return;
    KO = { ids: karistir(ids), i: 0, acik: false, bilinen: 0 };
    git('#/kart');
  }

  function kartSayfa() {
    if (!KO) { setTimeout(() => git('#/'), 0); return ''; }
    if (KO.i >= KO.ids.length) {
      return `<div class="kart sonuc-ust"><small>Bilgi kartları</small><div class="net">${KO.bilinen}/${KO.ids.length}</div><small>kartı bildin</small>
        <p class="soluk" style="font-size:.9rem">Bilmediklerin yarın, bildiklerin giderek daha seyrek karşına çıkacak.</p></div>
        <div class="alt-dugmeler"><a class="btn ana tam" href="#/">Ana sayfaya dön</a></div>`;
    }
    const k = KART[KO.ids[KO.i]];
    return `<div class="test-ust"><button class="kapat" data-act="kart-cik" aria-label="Kartlardan çık">✕</button>
      <div class="bar"><i style="width:${yuzde(KO.i, KO.ids.length)}%"></i></div><span>${KO.i + 1}/${KO.ids.length}</span></div>
    <button class="bilgi-kart" data-act="cevir" style="--r:${k.ders.renk}">
      <span class="soru-etiket">${esc(k.ders.ad)} · ${esc(k.konu.ad)}</span>
      <span class="on">${esc(k.on)}</span>
      ${KO.acik ? `<span class="arka">${esc(k.arka)}</span>` : '<span class="ipucu">Hatırlamaya çalış, sonra kartı çevirmek için dokun</span>'}
    </button>
    ${KO.acik ? `<div class="test-alt"><button class="btn" data-act="kart-bilmedim">Tekrar et</button><button class="btn ana" data-act="kart-bildim">Biliyordum</button></div>` : ''}`;
  }

  function kartCevap(bildi) {
    const id = KO.ids[KO.i];
    const k = V.kart[id] || { k: 0 };
    k.k = bildi ? Math.min(k.k + 1, KART_ARALIK.length - 1) : 0;
    k.s = gunEkle(bugun(), bildi ? KART_ARALIK[k.k] : 1);
    V.kart[id] = k;
    yaz();
    if (bildi) KO.bilinen++;
    KO.i++;
    KO.acik = false;
    ciz();
  }

  // --- Olaylar
  $app.addEventListener('change', e => {
    if (e.target.id === 'hedef') { V.hedef = e.target.value; yaz(); }
  });

  $app.addEventListener('click', e => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const { act, d, k } = b.dataset;
    const ders = DERS[d];
    const konu = ders && ders.konular.find(x => x.id === k);
    switch (act) {
      case 'karisik': return testBaslat('Karışık test', karistir(Object.keys(SORU)).slice(0, 20), 'pratik');
      case 'test-ders': return testBaslat(ders.ad, karistir(ders.ids), 'pratik');
      case 'test-konu': return testBaslat(konu.ad, karistir(konu.ids), 'pratik');
      case 'test-yanlis': return testBaslat('Yanlışlarım', karistir(yanlisIds().filter(id => !d || SORU[id].ders.id === d)), 'pratik');
      case 'tekrar-yanlis': return testBaslat(O.baslik + ' · tekrar', O.ids.filter(id => O.cevap[id] !== SORU[id].d), 'pratik');
      case 'deneme-basla': {
        // Gerçek sınavdaki gibi önce Genel Yetenek, sonra Genel Kültür
        const ids = DERSLER.flatMap(x => karistir(x.ids).slice(0, MINI[x.id] || 0));
        return testBaslat('Mini deneme', ids, 'deneme');
      }
      case 'sec': {
        const q = SORU[O.ids[O.i]];
        if (O.mod === 'pratik') {
          if (O.cevap[q.id] !== undefined) return;
          O.cevap[q.id] = +b.dataset.j;
          cevapKaydet(q.id, +b.dataset.j === q.d);
        } else {
          O.cevap[q.id] = O.cevap[q.id] === +b.dataset.j ? undefined : +b.dataset.j; // aynı şıkka tekrar dokununca boşa çevir
          if (O.cevap[q.id] === undefined) delete O.cevap[q.id];
        }
        return ciz();
      }
      case 'sonraki':
        if (O.i + 1 < O.ids.length) O.i++;
        else O.bitti = true;
        return ciz();
      case 'onceki': O.i = Math.max(0, O.i - 1); return ciz();
      case 'atla': O.i = +b.dataset.i; return ciz();
      case 'bitir': {
        const bos = O.ids.length - Object.keys(O.cevap).length;
        if (confirm(bos ? `${bos} soru boş. Denemeyi bitirmek istiyor musun?` : 'Denemeyi bitirmek istiyor musun?')) denemeyiBitir();
        return;
      }
      case 'cik':
        if (O.mod === 'deneme' && !confirm('Denemeden çıkılsın mı? Cevapların kaydedilmez.')) return;
        if (O.mod === 'pratik' && Object.keys(O.cevap).length) { O.bitti = true; return ciz(); }
        O = null;
        return git('#/');
      case 'kart-hepsi': {
        const vade = vadesiGelenKartlar(Object.keys(KART));
        return kartBaslat((vade.length ? vade : Object.keys(KART)).slice(0, 20));
      }
      case 'kart-konu': return kartBaslat(konu.kartIds);
      case 'cevir': KO.acik = !KO.acik; return ciz();
      case 'kart-bildim': return kartCevap(true);
      case 'kart-bilmedim': return kartCevap(false);
      case 'kart-cik': KO = null; return git('#/');
      case 'sifirla':
        if (confirm('Çözdüğün tüm sorular, kartlar ve denemeler silinecek. Emin misin?')) { V = bos(); yaz(); ciz(); }
        return;
    }
  });

  ciz();
})();
