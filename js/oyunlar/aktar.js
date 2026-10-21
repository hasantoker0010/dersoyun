/* İlerlemeyi bilgisayardaki siteden (file://) web sürümüne taşır.
   Bilgisayarda: ilerleme bir metin olarak gösterilir ve kopyalanır. Web'de: o metin yapıştırılıp içe aktarılır. */
// Web sürümünde (claude.ai) window.claude vardır; bilgisayardaki dosya sürümünde yoktur
const AKTAR_YEREL = !(window.claude && window.claude.use);

SERITLER.push(() => AKTAR_YEREL
  ? '<button class="serit" style="--c:#4FC3FF" data-act="aktarac"><b>İlerlemeni telefona taşı</b><span>Kodu kopyala, telefondaki sayfaya yapıştır</span></button>'
  : S.aktarildi ? '' : '<button class="serit" style="--c:#4FC3FF" data-act="aktarac"><b>Bilgisayardaki ilerlemeni getir</b><span>Bilgisayardaki siteden kopyaladığın kodu yapıştır</span></button>');

function aktarEkran(not = '') {
  stopT();
  const kod = JSON.stringify(S);
  view(`<div class="wrap">
    <div class="top"><button class="ghost" data-act="home">‹ Geri</button></div>
    <h2 class="dbaslik">${AKTAR_YEREL ? 'İlerlemeni taşı' : 'İlerlemeni getir'}</h2>
    <p class="lalt">${AKTAR_YEREL
      ? 'Aşağıdaki kod yanlışlarını, Aralıklı Tekrar kutularını ve istatistiklerini taşır. Kopyala, telefondaki sayfada "Bilgisayardaki ilerlemeni getir" kutusuna yapıştır.'
      : 'Bilgisayardaki sitede ana ekranda "İlerlemeni telefona taşı"ya bas, kodu kopyala ve buraya yapıştır. Bu cihazdaki ilerlemenin yerine geçer.'}</p>
    <textarea id="aktarkod" rows="8" spellcheck="false" ${AKTAR_YEREL ? 'readonly' : 'placeholder="Kodu buraya yapıştır"'}>${AKTAR_YEREL ? esc(kod) : ''}</textarea>
    <button class="main" data-act="${AKTAR_YEREL ? 'aktarkopyala' : 'aktaral'}">${AKTAR_YEREL ? 'Kodu kopyala' : 'İçe aktar'}</button>
    <p class="lalt" id="aktarnot" aria-live="polite">${not}</p></div>`);
}

oyunEkle({
  id: '_aktar', havuz: () => [],
  olay: {
    aktarac: () => aktarEkran(),
    aktarkopyala: () => {
      const t = $('#aktarkod'), not = $('#aktarnot');
      const sec = () => { t.focus(); t.select(); not.textContent = 'Kod seçildi; Ctrl+C ile kopyala.'; };
      if (navigator.clipboard) navigator.clipboard.writeText(t.value).then(() => { not.textContent = 'Kopyalandı. Şimdi telefondaki sayfaya yapıştır.'; }, sec);
      else sec();
    },
    aktaral: () => {
      let v;
      try { v = JSON.parse($('#aktarkod').value.trim()); } catch (e) { v = null; }
      if (!v || typeof v !== 'object' || !v.yanlis || !v.stat) return aktarEkran('Bu kod okunamadı. Bilgisayardaki sitede kodu yeniden kopyalayıp tamamını yapıştır.');
      S = Object.assign(bos(), v, { aktarildi: true });
      kaydet();
      home();
    }
  }
});
