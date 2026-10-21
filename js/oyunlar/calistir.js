/* Kodu Çalıştır: kısa Python/sözde kodun çıktısını yaz; sonra satır satır izle (vurgulanan satır, değişken tablosu, çıktı).
   İzleme adımları veride hazırdır (OYUN_VERI.calistir[].adimlar); kod gerçekten çalıştırılmaz. */
const KC_TUR = 6;

function kcBasla(items, ders) {
  yoBasla({ id: 'calistir', ders, items, kalan: karistir(items).slice(0, KC_TUR), i: 0, dogru: 0, puan: 0, yeniden: () => kcBasla(items, ders) });
  YO.n = YO.kalan.length;
  kcSoru();
}

const kcHud = () => `<span class="puan">${YO.puan}</span><span class="seri">${YO.i + 1}/${YO.n}</span>`;

function kcSoru() {
  const x = YO.kalan[YO.i];
  Object.assign(YO, { x, bitti: false, adim: -1 });
  view(`<div class="wrap kc" style="--c:${yoRenk(YO.ders || x.ders)}">
    ${yoUst(kcHud())}
    <div class="prog" aria-hidden="true"><i style="width:${YO.i / YO.n * 100}%"></i></div>
    <section class="ykart">
      <div class="meta"><span class="ub">${esc(x.dil)}</span><span class="mt">${esc(x.baslik)}</span></div>
      <p class="q">Bu kod çalışınca ekrana ne yazılır?</p>
      <pre class="kod satirli" id="kckod">${x.kod.map((s, i) => `<span class="sat" data-n="${i + 1}">${esc(s) || ' '}</span>`).join('')}</pre>
      <input id="kcans" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Çıktı" placeholder="Çıktı (birden çok satırı boşlukla ayır)">
      <button class="main" data-act="kckontrol">Çalıştır ve kontrol et</button>
    </section>
    <div id="fb" aria-live="polite"></div></div>`);
  if (matchMedia('(hover:hover)').matches) $('#kcans').focus();
}

function kcKontrol() {
  if (YO.bitti) return;
  const v = $('#kcans').value, x = YO.x;
  if (!v.trim()) return;
  YO.bitti = true;
  $('#kcans').disabled = true;
  document.querySelector('.ykart .main').remove();
  const ok = [x.cikti, ...(x.kabul || [])].some(c => kn(c) === kn(v));
  if (ok) { YO.dogru++; YO.puan += 100; }
  if (ok && YO.dogru >= 5) rozetVer('izci');
  yoKayit(x, ok);
  $('#hud').innerHTML = kcHud();
  const son = YO.i + 1 >= YO.n;
  $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}"><h3>${ok ? 'Doğru çıktı' : 'Yanlış'} ${ok ? '<span class="pts">+100</span>' : ''}</h3>
    ${ok ? '' : `<div class="model"><b>Doğru çıktı</b><pre class="kod"><code>${esc(x.cikti)}</code></pre></div>`}
    <p class="exp">${esc(x.aciklama || '')}</p>
    <div class="izle">
      <div class="izust"><b>Satır satır izle</b><span id="kcsay">0/${x.adimlar.length}</span></div>
      <div class="izdug">
        <button class="ghost" data-act="kcadim" data-p="-1" aria-label="Önceki adım">◀</button>
        <button class="ghost" data-act="kcoynat" id="kcoynat">Oynat</button>
        <button class="ghost" data-act="kcadim" data-p="1" aria-label="Sonraki adım">▶</button>
      </div>
      <table class="degisken"><thead><tr><th>Değişken</th><th>Değer</th></tr></thead><tbody id="kctab"><tr><td colspan="2">Henüz değişken yok</td></tr></tbody></table>
      <div class="konsol"><small>Çıktı</small><pre id="kckon"></pre></div>
    </div>
    <button class="main next" data-act="kcdevam">${son ? 'Sonucu gör' : 'Sonraki kod'}</button></div>`;
  $('.next').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

// İzleme: k. adıma kadar değişkenleri ve çıktıyı biriktirir, k. adımda değişenleri canlandırır
function kcGoster(k) {
  const x = YO.x, n = x.adimlar.length;
  YO.adim = Math.max(-1, Math.min(n - 1, k));
  const vars = {}, cikti = [];
  x.adimlar.slice(0, YO.adim + 1).forEach(a => { Object.assign(vars, a.v); if (a.o != null) cikti.push(a.o); });
  const simdi = YO.adim >= 0 ? x.adimlar[YO.adim] : {};
  document.querySelectorAll('#kckod .sat').forEach((s, i) => s.classList.toggle('aktif', i === simdi.s));
  const ad = Object.keys(vars);
  $('#kctab').innerHTML = ad.length ? ad.map(v => `<tr class="${simdi.v && v in simdi.v ? 'degisti' : ''}"><td>${esc(v)}</td><td>${esc(vars[v])}</td></tr>`).join('') : '<tr><td colspan="2">Henüz değişken yok</td></tr>';
  $('#kckon').textContent = cikti.join('\n');
  $('#kcsay').textContent = `${YO.adim + 1}/${n}`;
}

function kcOynat() {
  if (iv) { stopT(); $('#kcoynat').textContent = 'Oynat'; return; }
  if (YO.adim >= YO.x.adimlar.length - 1) kcGoster(-1);
  $('#kcoynat').textContent = 'Durdur';
  const ilerle = () => {
    kcGoster(YO.adim + 1);
    if (YO.adim >= YO.x.adimlar.length - 1) { stopT(); const b = $('#kcoynat'); if (b) b.textContent = 'Baştan oynat'; }
  };
  ilerle();
  iv = setInterval(ilerle, AZ_HAREKET ? 1400 : 900);
}

function kcDevam() {
  if (!YO.bitti) return;
  stopT();
  if (++YO.i < YO.n) return kcSoru();
  sonucEkran({
    renk: yoRenk(YO.ders), baslik: 'Kod turu bitti', big: `${YO.dogru}/${YO.n}`,
    etiket: YO.dogru === YO.n ? 'İnsan yorumlayıcı' : YO.dogru / YO.n >= .5 ? 'İyi gidiyor' : 'İzleyerek tekrar et',
    sk: [['Puan', YO.puan]], tekrar: 'yotekrar', geri: yoGeri()
  });
}

document.addEventListener('keydown', e => {
  if (YO && YO.id === 'calistir' && !YO.bitti && e.target.id === 'kcans' && e.key === 'Enter') { e.preventDefault(); kcKontrol(); }
});

oyunEkle({
  id: 'calistir', beceri: true, simge: '▶', ad: 'Kodu Çalıştır', alt: 'Çıktıyı tahmin et, sonra satır satır izle.', min: 1,
  havuz: yoHavuz(OYUN_VERI.calistir), etiket: (d, u, n) => n + ' kod',
  basla: kcBasla,
  olay: {
    kckontrol: () => kcKontrol(),
    kcadim: ds => { stopT(); const b = $('#kcoynat'); if (b) b.textContent = 'Oynat'; kcGoster(YO.adim + +ds.p); },
    kcoynat: () => kcOynat(),
    kcdevam: () => kcDevam()
  }
});
