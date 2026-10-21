/* Sırala: tarihleri, program geliştirme döngüsü adımlarını ve algoritma adımlarını sürükleyerek doğru sıraya diz.
   Veri: OYUN_VERI.sirala (ogeler doğru sırada; not varsa kontrol sonrası gösterilir). */
const SR_TUR = 6;

function srBasla(items, ders) {
  yoBasla({ id: 'sirala', ders, items, kalan: karistir(items).slice(0, SR_TUR), i: 0, dogru: 0, puan: 0, yeniden: () => srBasla(items, ders) });
  YO.n = YO.kalan.length;
  srSoru();
}

const srHud = () => `<span class="puan">${YO.puan}</span><span class="seri">${YO.i + 1}/${YO.n}</span>`;

function srSoru() {
  const x = YO.kalan[YO.i];
  YO.x = x; YO.bitti = false;
  view(`<div class="wrap sr" style="--c:${yoRenk(YO.ders || x.ders)}">
    ${yoUst(srHud())}
    <div class="prog" aria-hidden="true"><i style="width:${YO.i / YO.n * 100}%"></i></div>
    <section class="ykart">
      <div class="meta"><span class="ub">Ünite ${x.unite}</span><span class="mt">${esc(DERSLER[x.ders].kisa)} · ${esc(x.baslik)}</span></div>
      <p class="q">${esc(x.soru)}</p>
      <p class="ipucu">Sürükle ya da ▲▼ düğmelerini kullan. En üst ilk adım.</p>
      <ol class="surliste" id="srliste">${karisikSira(x.ogeler.length).map(i => surOge(i, esc(x.ogeler[i]))).join('')}</ol>
      <button class="main" data-act="srkontrol">Kontrol et</button>
    </section>
    <div id="fb" aria-live="polite"></div></div>`);
  surukle($('#srliste'));
}

function srKontrol() {
  if (YO.bitti) return;
  YO.bitti = true;
  const x = YO.x, liste = $('#srliste'), sira = surSira(liste), yerinde = sira.filter((v, i) => v === i).length, ok = yerinde === sira.length;
  liste.classList.add('kilitli');
  [...liste.children].forEach((li, p) => {
    li.classList.add(sira[p] === p ? 'dogru' : 'yanlis');
    if (x.not) li.querySelector('.surm').insertAdjacentHTML('beforeend', ` <em class="srnot">${esc(x.not[sira[p]])}</em>`);
  });
  document.querySelector('.ykart .main').remove();
  const pts = ok ? 120 : yerinde * 10;
  YO.puan += pts; if (ok) YO.dogru++;
  yoKayit(x, ok);
  $('#hud').innerHTML = srHud();
  const son = YO.i + 1 >= YO.n;
  $('#fb').innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}"><h3>${ok ? 'Sıra doğru' : `${yerinde}/${sira.length} yerinde`} <span class="pts">+${pts}</span></h3>
    ${ok ? '' : `<div class="model"><b>Doğru sıra</b><ol class="srdogru">${x.ogeler.map((o, i) => `<li>${esc(o)}${x.not ? ` <em class="srnot">${esc(x.not[i])}</em>` : ''}</li>`).join('')}</ol></div>`}
    <button class="main next" data-act="srdevam">${son ? 'Sonucu gör' : 'Sonraki'}</button></div>`;
  $('.next').focus({ preventScroll: true });
}

function srDevam() {
  if (!YO.bitti) return;
  if (++YO.i < YO.n) return srSoru();
  sonucEkran({
    renk: yoRenk(YO.ders), baslik: 'Sıralama bitti', big: YO.puan,
    etiket: YO.dogru === YO.n ? 'Kusursuz sıra' : YO.dogru / YO.n >= .5 ? 'İyi gidiyor' : 'Tekrar dene',
    sk: [['Tam doğru', `${YO.dogru}/${YO.n}`]], tekrar: 'yotekrar', geri: yoGeri()
  });
}

oyunEkle({
  id: 'sirala', beceri: true, simge: '⇅', ad: 'Sırala', alt: 'Tarihleri, döngü ve algoritma adımlarını sıraya diz.', min: 1,
  havuz: yoHavuz(OYUN_VERI.sirala), etiket: (d, u, n) => n + ' sıralama',
  basla: srBasla,
  olay: { srkontrol: () => srKontrol(), srdevam: () => srDevam() }
});
