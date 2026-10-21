/* Hatayı Bul: kodda ya da sözde kodda hatalı satıra tıkla; açıklama gösterilir. Veri: OYUN_VERI.hatabul (hata = doğru satırlar). */
const HF_TUR = 8;

function hfBasla(items, ders) {
  yoBasla({ id: 'hatabul', ders, items, kalan: karistir(items).slice(0, HF_TUR), i: 0, dogru: 0, puan: 0, yeniden: () => hfBasla(items, ders) });
  YO.n = YO.kalan.length;
  hfSoru();
}

const hfHud = () => `<span class="puan">${YO.puan}</span><span class="seri">${YO.i + 1}/${YO.n}</span>`;

function hfSoru() {
  const x = YO.kalan[YO.i];
  Object.assign(YO, { x, bitti: false });
  view(`<div class="wrap hf" style="--c:${yoRenk(YO.ders || x.ders)}">
    ${yoUst(hfHud())}
    <div class="prog" aria-hidden="true"><i style="width:${YO.i / YO.n * 100}%"></i></div>
    <section class="ykart">
      <div class="meta"><span class="ub">${esc(x.dil)}</span><span class="mt">${esc(DERSLER[x.ders].kisa)} · Ünite ${x.unite}</span></div>
      <p class="q">${esc(x.amac)}</p>
      <p class="ipucu">Hatalı satıra dokun.</p>
      <div class="kod hfkod" role="group" aria-label="Kod satırları">${x.kod.map((s, i) =>
        `<button class="hfsat" data-act="hfsec" data-p="${i}"><span class="no">${i + 1}</span><code>${esc(s) || ' '}</code></button>`).join('')}</div>
    </section>
    <div id="fb" aria-live="polite"></div></div>`);
}

function hfSec(p) {
  if (YO.bitti) return;
  YO.bitti = true;
  const x = YO.x, ok = x.hata.includes(p);
  document.querySelectorAll('.hfsat').forEach((b, i) => { b.disabled = true; if (x.hata.includes(i)) b.classList.add('dogru'); else if (i === p) b.classList.add('yanlis'); });
  if (ok) { YO.dogru++; YO.puan += 100; }
  yoKayit(x, ok);
  $('#hud').innerHTML = hfHud();
  const son = YO.i + 1 >= YO.n;
  $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}"><h3>${ok ? 'Buldun' : `Hata ${x.hata.map(h => h + 1).join(' / ')}. satırda`} ${ok ? '<span class="pts">+100</span>' : ''}</h3>
    <p class="exp">${esc(x.aciklama)}</p>
    <button class="main next" data-act="hfdevam">${son ? 'Sonucu gör' : 'Sonraki kod'}</button></div>`;
  $('.next').focus({ preventScroll: true });
}

function hfDevam() {
  if (!YO.bitti) return;
  if (++YO.i < YO.n) return hfSoru();
  sonucEkran({
    renk: yoRenk(YO.ders), baslik: 'Hata avı bitti', big: `${YO.dogru}/${YO.n}`,
    etiket: YO.dogru === YO.n ? 'Hata dedektifi' : YO.dogru / YO.n >= .5 ? 'İyi gidiyor' : 'Tekrar dene',
    sk: [['Puan', YO.puan]], tekrar: 'yotekrar', geri: yoGeri()
  });
}

oyunEkle({
  id: 'hatabul', beceri: true, simge: '✗', ad: 'Hatayı Bul', alt: 'Koddaki hatalı satıra dokun, nedenini öğren.', min: 1,
  havuz: yoHavuz(OYUN_VERI.hatabul), etiket: (d, u, n) => n + ' kod',
  basla: hfBasla,
  olay: { hfsec: ds => hfSec(+ds.p), hfdevam: () => hfDevam() }
});
