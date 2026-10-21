/* Milyoner: 15 basamak, 5. ve 10. basamak güvenli. Jokerler: 50:50, Pas, İkinci Şans.
   Veride zorluk yok; sorular senin geçmişine göre dizilir (hiç yanlış yapmadıkların altta, en çok yanlış yaptıkların üstte). */
const M_ODUL = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
let M = null;

const mPara = n => n.toLocaleString('tr-TR');

function mBasla(qs, ders) {
  const k = karistir(qs), yn = q => (S.yanlis[q.id] || { n: 0 }).n;
  const sec = k.slice(0, 15).sort((a, b) => yn(a) - yn(b));
  M = { ders, havuz: qs, yedek: k.slice(15), jok: { yari: 1, pas: 1, ikinci: 1 }, yandi: false, cekildi: false, jokerli: false };
  turBasla({
    qs: sec, ders,
    hud: () => { const w = T.kilit && !M.yandi ? T.i + 1 : T.i; return `<span class="puan">${mPara(w ? M_ODUL[w - 1] : 0)}</span><span class="seri">puan</span>`; },
    sayi: () => `Basamak ${T.i + 1}/15`,
    ust: mUst,
    cevap: ok => {
      if (!ok) M.yandi = true;
      return { baslik: ok ? `Doğru · ${mPara(M_ODUL[T.i])}` : 'Yanlış · oyun bitti' };
    },
    bitti: () => M.yandi || T.i + 1 >= T.qs.length,
    son: mSonuc
  });
}

function mUst() {
  const i = T.i, j = M.jok, kapali = T.kilit ? 'disabled' : '';
  const guvende = i >= 10 ? M_ODUL[9] : i >= 5 ? M_ODUL[4] : 0;
  return `<div class="mmerdiven" aria-label="Basamak ${i + 1} / 15">${M_ODUL.map((_, k) =>
      `<i class="${k < i || (k === i && T.kilit && !M.yandi) ? 'gecti' : ''} ${k === i ? 'simdi' : ''} ${k === 4 || k === 9 ? 'guvenli' : ''}"></i>`).join('')}</div>
    <div class="mbilgi"><span>Bu soru: <b>${mPara(M_ODUL[i])}</b></span><span>Güvende: <b>${mPara(guvende)}</b></span></div>
    <div class="mjoker">
      <button class="jk" data-act="myari" ${j.yari ? kapali : 'disabled'}>50:50</button>
      <button class="jk" data-act="mpas" ${j.pas && M.yedek.length ? kapali : 'disabled'}>Pas</button>
      <button class="jk ${T.ikinci ? 'aktif' : ''}" data-act="mikinci" ${j.ikinci ? kapali : 'disabled'}>2. Şans</button>
      <button class="jk cekil" data-act="mcekil" ${i ? kapali : 'disabled'}>Çekil</button>
    </div>`;
}

function mYari() {
  if (!M.jok.yari || T.kilit) return;
  M.jok.yari = 0; M.jokerli = true;
  const yanlis = karistir(T.sira.map((s, p) => p).filter(p => T.sira[p] !== T.q.dogru && !T.elendi.has(p)));
  yanlis.slice(1).forEach(p => T.gizli.add(p));
  tSoru(true);
}

function mPas() {
  if (!M.jok.pas || T.kilit || !M.yedek.length) return;
  M.jok.pas = 0; M.jokerli = true;
  T.qs[T.i] = M.yedek.pop();
  tSoru();
}

function mIkinci() {
  if (!M.jok.ikinci || T.kilit) return;
  M.jok.ikinci = 0; M.jokerli = true; T.ikinci = true;
  $('#tust').innerHTML = mUst();
}

function mSonuc() {
  stopT();
  const i = T.i, kazandi = !M.yandi && !M.cekildi;
  const ulasti = M.yandi ? i : M.cekildi ? i : 15;
  const odul = M.yandi ? (i >= 10 ? M_ODUL[9] : i >= 5 ? M_ODUL[4] : 0) : ulasti ? M_ODUL[ulasti - 1] : 0;
  const k = M.ders + ':milyoner', enIyi = S.best[k] || 0;
  if (ulasti > enIyi) { S.best[k] = ulasti; kaydet(); }
  const rozet = (kazandi && !M.jokerli && rozetVer('milyoner-jokersiz') && 'jokersiz milyoner') || (ulasti >= 10 && rozetVer('milyoner-10') && '10. basamak');
  T = null;
  sonucEkran({
    renk: DERSLER[M.ders].renk, baslik: kazandi ? 'Milyoner oldun!' : M.cekildi ? 'Çekildin' : 'Elendin', big: mPara(odul),
    etiket: kazandi ? 'Büyük ödül' : `Basamak ${ulasti}/15`,
    alt: `puan${ulasti > enIyi ? ' · yeni rekor basamak' : enIyi ? ` · rekor basamak ${enIyi}` : ''}${rozet ? ` · yeni rozet: ${rozet}` : ''}`,
    tekrar: 'mtekrar', geri: dersGeri(M.ders)
  });
}

oyunEkle({
  id: 'milyoner', ad: 'Milyoner', alt: '15 basamak, 3 joker. Tek yanlışta güvenli basamağa düşersin.', min: 15,
  havuz: tumSorular,
  basla: mBasla,
  olay: {
    myari: () => mYari(),
    mpas: () => mPas(),
    mikinci: () => mIkinci(),
    mcekil: () => { if (T && !T.kilit && T.i) { M.cekildi = true; mSonuc(); } },
    mtekrar: () => mBasla(M.havuz, M.ders)
  }
});
