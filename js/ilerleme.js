/* İlerleme: XP, seviye, günlük seri, combo, rozetler, konu istatistikleri.
   Bütün oyunlar doğru/yanlışı store.js kayitSonuc ya da ortak.js oyunKayit/yoKayit üzerinden dyKanca'ya bildirir. */
const seviyeOf = xp => Math.floor(Math.sqrt(xp / 40)) + 1;
const seviyeXp = n => 40 * (n - 1) ** 2;
let combo = 0;

const ROZETLER = [
  ['ilk-10', 'İlk 10 doğru', 'Toplam 10 doğru cevap ver'],
  ['soru-50', '50 soru', '50 soruya cevap ver'],
  ['soru-250', '250 soru', '250 soruya cevap ver'],
  ['seri-5', 'Kıvılcım', '5 doğruyu üst üste yap'],
  ['seri-10', 'Alev topu', '10 doğruyu üst üste yap'],
  ['seviye-5', 'Seviye 5', '5. seviyeye ulaş'],
  ['gun-3', 'Üç gün', '3 gün üst üste çalış'],
  ['gun-7', 'Bir hafta', '7 gün üst üste çalış'],
  ['boss', 'Bekçi avcısı', 'Harita ve Boss\'ta bir bekçiyi yen'],
  ['hizli-25', 'Ateş topu', 'Hızlı Ateş\'te 25 doğru'],
  ['milyoner-10', 'Onuncu basamak', 'Milyoner\'de 10. basamağa çık'],
  ['sema-usta', 'Şema ustası', 'Akış yapbozunda bir turu hatasız bitir'],
  ['cengel', 'Bulmacacı', 'Bir çengel bulmacayı eksiksiz çöz'],
  ['izci', 'Kod izcisi', 'Kodu Çalıştır\'da 5 doğru çıktı'],
  ['dy-15', 'Şimşek', 'Doğru mu Yanlış mı\'da 15 seri']
];
const rozetAd = id => (ROZETLER.find(r => r[0] === id) || [])[1]
  || (id.startsWith('boss-') ? `Ünite ${id.split('-').pop()} bekçisi` : id.startsWith('harita-') ? 'Haritanın tamamı'
  : id.startsWith('leitner-') ? `${id.split('-')[1]} öğrenilen soru` : id === 'milyoner-jokersiz' ? 'Jokersiz milyoner' : id);

// ortak.js rozetVer yeni rozet verdiğinde çağrılır
function rozetDuyur(id) {
  ses('rozet');
  bildir('Yeni rozet', rozetAd(id), 'rozetbil');
  if (id.startsWith('boss-')) rozetVer('boss');
}

function konuBul(q) {
  if (q.konu) return [q.konu];
  const d = q.id && SORU[q.id] && SORU[q.id].d, t = q.soru + ' ' + (q.sec ? q.sec[q.dogru] : '') + ' ' + (q.kod || '');
  return (window.KONULAR || []).filter(k => k.dersler.includes(d) && k.re.test(t) && !(k.id === 'dongu' && /geliştirme döngü/i.test(t))).map(k => k.id);
}
const konuSorular = k => Object.values(SORU).filter(({ q }) => q.sec && q.sec.length && konuBul(q).includes(k)).map(({ q }) => q);

function gunlukSeri() {
  const g = gun(), x = (S.gunluk ??= { son: 0, seri: 0 });
  if (x.son === g) return;
  x.seri = x.son === g - 1 ? x.seri + 1 : 1; x.son = g;
  if (x.seri >= 3) rozetVer('gun-3');
  if (x.seri >= 7) rozetVer('gun-7');
}
const gunSeri = () => S.gunluk && S.gunluk.son >= gun() - 1 ? S.gunluk.seri : 0;

function dyKanca(ders, q, ok) {
  for (const k of konuBul(q)) { const s = ((S.konu ??= {})[k] ??= { d: 0, y: 0 }); ok ? s.d++ : s.y++; }
  const t = (S.toplam ??= { d: 0, n: 0 });
  t.n++; if (ok) t.d++;
  gunlukSeri();
  if (ok) {
    combo++;
    const xp = 10 + Math.min(combo, 10) * 2, once = seviyeOf(S.xp || 0);
    S.xp = (S.xp || 0) + xp;
    efektDogru(xp, combo);
    if (seviyeOf(S.xp) > once) efektSeviye(seviyeOf(S.xp));
    if (t.d >= 10) rozetVer('ilk-10');
    if (combo >= 5) rozetVer('seri-5');
    if (combo >= 10) rozetVer('seri-10');
    if (seviyeOf(S.xp) >= 5) rozetVer('seviye-5');
  } else { combo = 0; efektYanlis(); }
  if (t.n >= 50) rozetVer('soru-50');
  if (t.n >= 250) rozetVer('soru-250');
  kaydet();
  ustbarCiz();
}

function ustbarCiz() {
  const xp = S.xp || 0, n = seviyeOf(xp), p = (xp - seviyeXp(n)) / (seviyeXp(n + 1) - seviyeXp(n)) * 100;
  const sv = document.getElementById('ubSeviye'); if (!sv) return;
  sv.textContent = `Sv ${n}`;
  document.getElementById('ubXp').style.width = p + '%';
  document.getElementById('ubProfil').setAttribute('aria-label', `Seviye ${n}, ${xp} XP. Rozetleri aç`);
  document.getElementById('ubGun').textContent = gunSeri();
  const c = document.getElementById('ubCombo');
  c.hidden = combo < 3;
  c.className = 'combo ' + (combo >= 10 ? 'alev3' : combo >= 5 ? 'alev2' : 'alev1');
  c.textContent = `×${combo}`;
}

/* ---------- Ana ekran: profil (beceri oyunları her dersin içinde, ders ekranında) ---------- */
SERITLER.push(() => {
  const xp = S.xp || 0, n = seviyeOf(xp), alinan = Object.keys(S.rozet || {}).length;
  const p = Math.round((xp - seviyeXp(n)) / (seviyeXp(n + 1) - seviyeXp(n)) * 100);
  return `<button class="profil" data-act="rozetler">
    <span class="psv"><small>Seviye</small><b>${n}</b></span>
    <span class="pbil"><span>${xp} XP · sonraki seviyeye ${seviyeXp(n + 1) - xp} XP</span><span class="xpbar"><i style="width:${p}%"></i></span>
    <span class="pal"><span>Günlük seri <b>${gunSeri()}</b> gün</span><span>Rozet <b>${alinan}</b></span></span></span></button>`;
});

function rozetEkran() {
  stopT();
  const al = S.rozet || {}, ekstra = Object.keys(al).filter(id => !ROZETLER.some(r => r[0] === id));
  view(`<div class="wrap">
    <div class="top"><button class="ghost" data-act="home">‹ Geri</button></div>
    <h2 class="dbaslik">Rozetler</h2>
    <p class="lalt">Seviye ${seviyeOf(S.xp || 0)} · ${S.xp || 0} XP · ${(S.toplam || { d: 0 }).d} doğru / ${(S.toplam || { n: 0 }).n} cevap · günlük seri ${gunSeri()}</p>
    <div class="rozetler">${ROZETLER.map(([id, ad, nasil]) => `<div class="rz ${al[id] ? 'var' : ''}"><span class="rzs" aria-hidden="true">${al[id] ? '★' : '☆'}</span><b>${esc(ad)}</b><small>${esc(nasil)}</small></div>`).join('')}
    ${ekstra.map(id => `<div class="rz var"><span class="rzs" aria-hidden="true">★</span><b>${esc(rozetAd(id))}</b><small>Özel rozet</small></div>`).join('')}</div></div>`);
}

/* ---------- Zayıf konularım: konu çubukları ve öneri ---------- */
function konuPanel() {
  const st = k => { const s = (S.konu || {})[k] || { d: 0, y: 0 }; return { ...s, n: s.d + s.y, p: s.d + s.y ? s.d / (s.d + s.y) : 0 }; };
  // Az çalışılan konu %50 sayılır: hiç oynanmamış konu da öneriye girebilsin
  const puan = k => { const s = st(k); return s.n < 3 ? Math.min(.5, s.p || .5) : s.p; };
  const oneri = KONULAR.slice().sort((a, b) => puan(a.id) - puan(b.id)).slice(0, 3);
  return `<h3 class="alt">Konu başarısı</h3>
    <div class="kbars">${KONULAR.map(k => {
      const s = st(k.id), p = Math.round(s.p * 100);
      return `<div class="kbar ${s.n && p < 50 ? 'zayif' : ''}"><div class="kt"><b>${esc(k.ad)}</b><span>${s.n ? `%${p}` : '—'}</span></div>
        <div class="kcubuk" role="img" aria-label="${esc(k.ad)}: %${p} başarı"><i style="width:${s.n ? Math.max(p, 3) : 0}%"></i></div>
        <small>${s.n ? `${s.d} doğru · ${s.y} yanlış` : 'henüz çalışılmadı'}</small></div>`;
    }).join('')}</div>
    <h3 class="alt">Bugün şunları çalış</h3>
    <div class="oneri">${oneri.map((k, i) => {
      const o = OYUNLAR.find(x => x.id === k.oyun), n = konuSorular(k.id).length;
      return `<div class="okart"><b>${i + 1}. ${esc(k.ad)}</b><small>${st(k.id).n ? `Başarın %${Math.round(st(k.id).p * 100)}` : 'Bu konuyu henüz çalışmadın'}</small>
        <div class="obtn">${o ? `<button class="ghost" data-act="konuoyna" data-k="${k.id}">${esc(o.ad)}</button>` : ''}${n ? `<button class="ghost" data-act="konusoru" data-k="${k.id}">${n} soru çöz</button>` : ''}</div></div>`;
    }).join('')}</div>`;
}

oyunEkle({
  id: '_ilerleme', havuz: () => [],
  olay: {
    ses: () => { sesAcik = !sesAcik; yerel('dersoyun.ses', sesAcik ? '1' : '0'); sesCiz(); ses('dogru'); },
    rozetler: () => rozetEkran(),
    konuoyna: ds => {
      const k = KONULAR.find(x => x.id === ds.k), o = OYUNLAR.find(x => x.id === k.oyun), hepsi = o.havuz(null, new Set());
      const sec = hepsi.filter(x => x.konu === k.id);
      o.basla(sec.length >= (o.min || 1) ? sec : hepsi, null);
    },
    konusoru: ds => oyun(konuSorular(ds.k), 'mcq', { can: 1, sure: 1, max: 10 }, null)
  }
});

ustbarCiz();
