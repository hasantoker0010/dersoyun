/* Doğru mu Yanlış mı: kartı sağa (Doğru) ya da sola (Yanlış) kaydır. Her kartta süre kısalır.
   Fare/dokunmatik (Pointer Events), düğmeler ve klavye ← → ile oynanır. Veri: OYUN_VERI.dy. 3 can. */
const DY_TUR = 20, DY_ILK = 8, DY_AZALT = .35, DY_EN_AZ = 3;

function dyBasla(items, ders) {
  yoBasla({ id: 'dy', ders, items, deste: karistir(items).slice(0, DY_TUR), i: 0, dogru: 0, puan: 0, can: 3, seri: 0, enSeri: 0, yeniden: () => dyBasla(items, ders) });
  dyKart();
}

const dySure = () => Math.max(DY_EN_AZ, DY_ILK - YO.i * DY_AZALT);
const dyHud = () => `<span class="can" aria-label="${YO.can} can">${'♥'.repeat(YO.can)}${'♡'.repeat(3 - YO.can)}</span><span class="puan">${YO.puan}</span><span class="seri ${YO.seri >= 3 ? 'hot' : ''}">seri ${YO.seri}</span>`;

function dyKart() {
  stopT();
  const x = YO.deste[YO.i];
  Object.assign(YO, { x, bekle: false, t0: Date.now(), sure: dySure() });
  view(`<div class="wrap dy" style="--c:${yoRenk(YO.ders || x.ders)}">
    ${yoUst(dyHud())}
    <div class="timer" aria-hidden="true"><i id="tbar"></i></div>
    <div class="tsn" id="tsn">${YO.i + 1}/${YO.deste.length} · ${YO.sure.toFixed(1)} sn</div>
    <div class="dysahne">
      <div class="dykart" id="dykart" tabindex="0" aria-describedby="dyyardim">
        <span class="dyetk dyy" aria-hidden="true">YANLIŞ</span><span class="dyetk dyd" aria-hidden="true">DOĞRU</span>
        <small>${esc(DERSLER[x.ders].kisa)} · Ünite ${x.unite}</small>
        <p>${esc(x.m)}</p>
      </div>
    </div>
    <p class="ipucu" id="dyyardim">Kaydır ya da ← → tuşlarını kullan.</p>
    <div class="dybtn"><button class="dyh" data-act="dycevap" data-p="0">← Yanlış</button><button class="dye" data-act="dycevap" data-p="1">Doğru →</button></div>
    <div id="fb" aria-live="polite"></div></div>`);
  dySurukle($('#dykart'));
  iv = setInterval(() => {
    const k = YO.sure - (Date.now() - YO.t0) / 1000, b = $('#tbar');
    if (b) { b.style.width = Math.max(0, k / YO.sure * 100) + '%'; b.classList.toggle('az', k < 2); }
    if (k <= 0) dyCevap(null);
  }, 100);
}

function dySurukle(kart) {
  let x0 = null;
  kart.addEventListener('pointerdown', e => { if (YO.bekle) return; x0 = e.clientX; kart.setPointerCapture(e.pointerId); kart.classList.add('tut'); });
  kart.addEventListener('pointermove', e => {
    if (x0 === null) return;
    const dx = e.clientX - x0;
    kart.style.transform = `translateX(${dx}px) rotate(${dx / 18}deg)`;
    kart.style.setProperty('--sag', Math.max(0, Math.min(1, dx / 90)));
    kart.style.setProperty('--sol', Math.max(0, Math.min(1, -dx / 90)));
  });
  const birak = e => {
    if (x0 === null) return;
    const dx = e.clientX - x0;
    x0 = null; kart.classList.remove('tut');
    if (Math.abs(dx) > 90) return dyCevap(dx > 0);
    kart.style.transform = ''; kart.style.setProperty('--sag', 0); kart.style.setProperty('--sol', 0);
  };
  kart.addEventListener('pointerup', birak);
  kart.addEventListener('pointercancel', birak);
}

function dyCevap(dedi) {
  if (!YO || YO.id !== 'dy' || YO.bekle) return;
  stopT();
  YO.bekle = true;
  const x = YO.x, ok = dedi === x.d, kart = $('#dykart');
  kart.style.transform = '';
  kart.classList.add(dedi === null ? 'dusur' : dedi ? 'ucsag' : 'ucsol');
  if (ok) {
    YO.dogru++; YO.seri++; YO.enSeri = Math.max(YO.enSeri, YO.seri);
    YO.puan += Math.round(10 * (1 + Math.min(YO.seri, 10) * .2) * (DY_ILK / YO.sure));
    if (YO.seri >= 15) rozetVer('dy-15');
  } else { YO.seri = 0; YO.can--; }
  yoKayit(x, ok);
  $('#hud').innerHTML = dyHud();
  document.querySelectorAll('.dybtn button').forEach(b => { b.disabled = true; });
  if (ok) return setTimeout(dyDevam, AZ_HAREKET ? 0 : 280);
  $('#fb').innerHTML = `<div class="fb no"><h3>${dedi === null ? 'Süre doldu' : 'Yanlış'}</h3>
    <p class="exp">“${esc(x.m)}” ifadesi <b>${x.d ? 'doğru' : 'yanlış'}</b>.${x.a ? ' ' + esc(x.a) : ''}</p>
    <button class="main next" data-act="dydevam">${YO.can <= 0 || YO.i + 1 >= YO.deste.length ? 'Sonucu gör' : 'Devam'}</button></div>`;
  $('.next').focus({ preventScroll: true });
}

function dyDevam() {
  if (!YO || YO.id !== 'dy' || !YO.bekle) return;
  if (YO.can > 0 && ++YO.i < YO.deste.length) return dyKart();
  stopT();
  const n = YO.dogru + 3 - YO.can;
  sonucEkran({
    renk: yoRenk(YO.ders), baslik: YO.can <= 0 ? 'Canların bitti' : 'Deste bitti', big: YO.puan,
    etiket: YO.enSeri >= 15 ? 'Şimşek' : YO.dogru / Math.max(1, n) >= .8 ? 'Harika!' : 'Tekrar dene',
    sk: [['Doğru', `${YO.dogru}/${n}`], ['En uzun seri', YO.enSeri]], tekrar: 'yotekrar', geri: yoGeri()
  });
}

document.addEventListener('keydown', e => {
  if (!YO || YO.id !== 'dy' || !$('.dy') || e.ctrlKey || e.metaKey || e.altKey) return;
  if (YO.bekle) { if ((e.key === 'Enter' || e.key === ' ') && e.target.tagName !== 'BUTTON') { e.preventDefault(); dyDevam(); } }
  else if (e.key === 'ArrowRight') { e.preventDefault(); dyCevap(true); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); dyCevap(false); }
});

oyunEkle({
  id: 'dy', beceri: true, simge: '⇄', ad: 'Doğru mu Yanlış mı', alt: 'Kartı kaydır. Her kartta süre biraz daha kısalır.', min: 4,
  havuz: yoHavuz(OYUN_VERI.dy), etiket: (d, u, n) => n + ' kart',
  basla: dyBasla,
  olay: { dycevap: ds => dyCevap(ds.p === '1'), dydevam: () => dyDevam() }
});
