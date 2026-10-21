/* Yazarak Cevapla: şık yok, cevabı klavyeyle yaz. Küçük yazım hataları affedilir (yaziDogru).
   Dönüşüm: kisaCevap() sorularının doğru şıkkı; klavyeyle yazılamayan sembollü cevaplar (⇒, ′, ×) alınmaz.
   İpucu ilk harfi ve harf sayısını gösterir, puanı yarıya indirir. */
let YZ = null;
const YZ_TUR = 10;
const yazilabilir = a => /^[\p{L}\p{N}\s.,'’()\-\/!%:"_\\[\]=+*<>]+$/u.test(a);

function yzBasla(qs, ders) {
  stopT(); G = null; T = null;
  YZ = { havuz: qs, kalan: karistir(qs), ders, i: 0, n: Math.min(YZ_TUR, qs.length), puan: 0, dogru: 0, seri: 0, enSeri: 0 };
  yzYeni();
}

function yzYeni() {
  YZ.q = YZ.kalan.pop(); YZ.ipucu = false; YZ.bitti = false;
  yzCiz();
}

const yzHud = () => `<span class="puan">${YZ.puan}</span><span class="seri ${YZ.seri >= 3 ? 'hot' : ''}">seri ${YZ.seri} · ${YZ.i + 1}/${YZ.n}</span>`;

function yzCiz(fb = '') {
  const q = YZ.q, d = DERSLER[YZ.ders], a = q.sec[q.dogru].trim();
  const ipucu = YZ.ipucu ? `<p class="yzipucu">İpucu: <b>${esc(a[0].toLocaleUpperCase('tr'))}</b> ile başlıyor, ${[...a].filter(c => /[\p{L}\p{N}]/u.test(c)).length} harf/rakam.</p>` : '';
  view(`<div class="wrap" style="--c:${d.renk}">
    <div class="top"><button class="ghost" data-act="yzcik">‹ Çık</button><div class="hud">${yzHud()}</div></div>
    <section class="qcard">
      <div class="meta"><span class="ub">Ünite ${q.unite}</span><span class="mt">${esc(d.uniteler[q.unite])}</span></div>
      ${q.kaynak ? `<div class="kaynak">${esc(q.kaynak)}</div>` : ''}
      <p class="q">${olumsuzVurgu(q.soru)}</p>
      ${q.kod ? `<pre class="kod"><code>${esc(q.kod)}</code></pre>` : ''}
      ${ipucu}
      <input id="yzans" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Cevabın" placeholder="Cevabını yaz" ${YZ.bitti ? 'disabled' : ''}>
      ${YZ.bitti ? '' : `<button class="main" data-act="yzkontrol">Kontrol et</button>
      <div class="yzalt"><button class="ghost" data-act="yzipucu" ${YZ.ipucu ? 'disabled' : ''}>İpucu al</button><button class="ghost" data-act="yzbilmiyorum">Bilmiyorum</button></div>`}
    </section>
    <div id="fb" aria-live="polite">${fb}</div></div>`);
  const i = $('#yzans');
  if (!YZ.bitti && matchMedia('(hover:hover)').matches) i.focus();
}

function yzKontrol(pes) {
  if (!YZ || YZ.bitti) return;
  const v = pes ? '' : $('#yzans').value;
  if (!pes && !v.trim()) return;
  const q = YZ.q, a = q.sec[q.dogru].trim(), ok = !pes && yaziDogru(v, a);
  YZ.bitti = true;
  oyunKayit(YZ.ders, q, ok, ok && !YZ.ipucu);
  let fb;
  if (ok) {
    const pts = Math.round((YZ.ipucu ? 75 : 150) * (1 + Math.min(YZ.seri, 6) * 0.25));
    YZ.puan += pts; YZ.dogru++; YZ.seri++; YZ.enSeri = Math.max(YZ.enSeri, YZ.seri);
    const tam = cevapAdaylari(a).includes(norm(v));
    fb = `<div class="fb ok"><h3>Doğru <span class="pts">+${pts}</span></h3>${tam ? '' : `<p class="exp">Tam yazımı: <b>${esc(a)}</b></p>`}${q.aciklama ? `<p class="exp">${esc(q.aciklama)}</p>` : ''}`;
  } else {
    YZ.seri = 0;
    fb = gbKart(q, `<div class="gbbas">${pes ? 'Cevap' : 'Yanlış'}</div>${pes ? '' : `<div class="gbsik">Senin cevabın: ${esc(v)}</div>`}`).replace(/<\/div>$/, '');
  }
  const son = YZ.i + 1 >= YZ.n || !YZ.kalan.length;
  yzCiz(`${fb}<button class="main next" data-act="yzdevam">${son ? 'Sonucu gör' : 'Sonraki soru'}</button></div>`);
  $('#yzans').value = v;
  $('.next').focus({ preventScroll: true });
}

function yzDevam() {
  YZ.i++;
  if (YZ.i >= YZ.n || !YZ.kalan.length) return yzSonuc();
  yzYeni();
}

function yzSonuc() {
  const k = YZ.ders + ':yaz', enIyi = S.best[k] || 0, yeni = YZ.puan > enIyi;
  if (yeni) { S.best[k] = YZ.puan; kaydet(); }
  sonucEkran({
    renk: DERSLER[YZ.ders].renk, baslik: 'Görev bitti', big: YZ.puan,
    etiket: YZ.dogru / YZ.i >= 0.8 ? 'Harika!' : YZ.dogru / YZ.i >= 0.5 ? 'İyi gidiyor' : 'Tekrar dene',
    alt: `puan${yeni && YZ.puan ? ' · yeni rekor' : enIyi ? ` · rekor ${enIyi}` : ''}`,
    sk: [['Doğru', `${YZ.dogru}/${YZ.i}`], ['En uzun seri', YZ.enSeri]],
    tekrar: 'yztekrar', geri: dersGeri(YZ.ders)
  });
}

document.addEventListener('keydown', e => {
  if (YZ && !YZ.bitti && e.target.id === 'yzans' && e.key === 'Enter') { e.preventDefault(); yzKontrol(false); }
});

oyunEkle({
  id: 'yazarak', ad: 'Yazarak Cevapla', alt: 'Şık yok. Cevabı kendin yaz, küçük yazım hataları affedilir.', min: 3, yok: 'Bu ünitede kısa cevaplı soru yok',
  // Kod çıktısı soruları uzunluktan bağımsız alınır (eski Kod çıktısı modunun yerini tutar)
  havuz: (d, units) => tumSorular(d, units).filter(q => (kisaCevap(q) || q.tip === 'code') && yazilabilir(q.sec[q.dogru].trim())),
  basla: yzBasla,
  olay: {
    yzkontrol: () => yzKontrol(false),
    yzbilmiyorum: () => yzKontrol(true),
    yzipucu: () => { if (YZ && !YZ.bitti) { const v = $('#yzans').value; YZ.ipucu = true; yzCiz(); $('#yzans').value = v; } },
    yzdevam: () => yzDevam(),
    yztekrar: () => yzBasla(YZ.havuz, YZ.ders),
    yzcik: () => { const d = YZ && YZ.ders; YZ = null; d ? dersEkran(d) : home(); }
  }
});
