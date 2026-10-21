/* Hesap ve bulut eşitleme (Supabase). Tablo ve güvenlik kuralları: sql/supabase.sql.
   Giriş yapılmamışsa site eskisi gibi yalnızca tarayıcıda çalışır. Girişliyken S (store.js) her kaydet()'ten 2 sn sonra
   buluta yazılır; site açılınca ve sekmeye dönünce buluttaki sürüm kontrol edilir. İki taraf da değiştiyse seçimi kullanıcı yapar. */
const SB_URL = 'https://mpyazfjlbddmzfmvczjp.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1weWF6ZmpsYmRkbXpmbXZjempwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1OTkyNTMsImV4cCI6MjEwODE3NTI1M30.ZgADVvr64XemukKia3rz040J3BdXQlF11UOjW7tpIMY'; // herkese açık (anon) anahtar
const SB = window.supabase ? window.supabase.createClient(SB_URL, SB_KEY, { auth: { storageKey: 'dersoyun.oturum' } }) : null;

// Bu cihazdaki kayıt hangi hesaba ve buluttaki hangi sürüme bağlı: { uid, surum, kirli }
const META = 'dersoyun.bulut';
const HESAP = { kul: null, mod: 'giris', email: '', durum: '', catisma: null };
let sira = Promise.resolve(), zamanlayici = 0, degisim = 0;

const metaOku = () => { try { return JSON.parse(localStorage.getItem(META)) || {}; } catch (e) { return {}; } };
const metaYaz = m => { try { localStorage.setItem(META, JSON.stringify(m)); } catch (e) { } };
const yerelYaz = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } };
const cevapSay = s => (s && s.toplam && s.toplam.n) || 0;
const ilerlemeVar = s => cevapSay(s) > 0 || (s && s.xp > 0);
const kuyrukla = f => (sira = sira.then(f, f)); // bir iş hata verse de sıradaki çalışır

function durum(t) {
  HESAP.durum = t;
  const el = document.getElementById('hesapdurum'); if (el) el.textContent = t;
}
const saat = () => new Date().toLocaleTimeString('tr', { hour: '2-digit', minute: '2-digit' });

function hataMetni(e) {
  const m = String(e && e.message || '').toLowerCase();
  if (m.includes('invalid login')) return 'E-posta ya da şifre yanlış.';
  if (m.includes('not confirmed')) return 'E-postanı henüz onaylamadın. Gelen kutundaki bağlantıya dokun.';
  if (m.includes('already registered')) return 'Bu e-posta ile zaten bir hesap var. Giriş yap.';
  if (m.includes('at least') || m.includes('weak')) return 'Şifre en az 6 karakter olmalı.';
  if (m.includes('valid email') || m.includes('invalid email') || m.includes('invalid format')) return 'Geçerli bir e-posta yaz.';
  if (m.includes('rate limit') || (e && e.status === 429)) return 'Çok fazla deneme yapıldı. Biraz bekleyip tekrar dene.';
  if (m.includes('fetch') || m.includes('network')) return 'Bağlantı kurulamadı. İnternetini kontrol et.';
  return 'Bir sorun oldu: ' + (e && e.message || 'bilinmeyen hata');
}

/* ---------- Eşitleme ---------- */
// zorla: buluttaki sürüme bakmadan üstüne yaz. Aksi halde yalnız bu cihazın bildiği sürüm hâlâ güncelse yazar;
// bu sırada başka cihaz yazdıysa 0 satır güncellenir ve çatışma çıkar (kimsenin ilerlemesi sessizce ezilmez).
async function bulutYaz(zorla) {
  const kul = HESAP.kul; if (!kul) return;
  const d = degisim, m = metaOku(), tablo = SB.from('ilerleme');
  const kosullu = !zorla && m.uid === kul.id && m.surum;
  const { data, error } = await (kosullu
    ? tablo.update({ veri: S }).eq('user_id', kul.id).eq('guncelleme', m.surum).select('guncelleme')
    : tablo.upsert({ user_id: kul.id, veri: S }).select('guncelleme'));
  if (error) throw error;
  if (!data.length) throw { catisma: true };
  metaYaz({ uid: kul.id, surum: data[0].guncelleme, kirli: degisim !== d }); // yazarken yeni değişiklik olduysa kirli kalır
}

// store.js kaydet() her yazışta çağırır
function bulutIsaretle() {
  if (!SB || !HESAP.kul || HESAP.catisma) return;
  degisim++;
  metaYaz({ ...metaOku(), kirli: true });
  clearTimeout(zamanlayici);
  zamanlayici = setTimeout(gonder, 2000);
}

function gonder(zorla) {
  clearTimeout(zamanlayici); zamanlayici = 0;
  return kuyrukla(() => bulutYaz(zorla)).then(() => durum('Eşitlendi · ' + saat()), e => {
    if (e && e.catisma) { durum('Başka bir cihaz değişiklik yapmış, kontrol ediliyor…'); esitle(); }
    else durum('Eşitlenemedi. Çevrimdışı olabilirsin, sonra yeniden denenecek.');
  });
}

function benimse(bulut) {
  S = Object.assign(bos(), bulut.veri);
  yerelYaz();
  metaYaz({ uid: HESAP.kul.id, surum: bulut.guncelleme, kirli: false });
  ustbarCiz();
  if (document.querySelector('.home')) home();
}

function esitle() {
  return kuyrukla(async () => {
    const kul = HESAP.kul; if (!SB || !kul || HESAP.catisma) return;
    try {
      const { data, error } = await SB.from('ilerleme').select('veri,guncelleme').eq('user_id', kul.id);
      if (error) throw error;
      const bulut = data[0], m = metaOku(), benim = m.uid === kul.id;
      if (!bulut) { await bulutYaz(); return durum('Bu cihazdaki ilerleme hesabına kaydedildi · ' + saat()); }
      if (benim && m.surum === bulut.guncelleme) {
        if (m.kirli) await bulutYaz();
        return durum('Eşitlendi · ' + saat());
      }
      // Bulutta bu cihazın bilmediği bir sürüm var: bu cihazda değişen bir şey yoksa bulutunkini al, varsa sor
      const yerelDegisti = benim ? m.kirli : ilerlemeVar(S);
      if (!yerelDegisti) { benimse(bulut); return durum('Hesabındaki ilerleme yüklendi · ' + saat()); }
      HESAP.catisma = bulut;
      if (document.querySelector('.qcard')) bildir('Eşitleme seni bekliyor', 'Oyundan çıkınca hesabına bak');
      else hesapEkran();
    } catch (e) {
      if (e && e.catisma) { durum('Başka bir cihaz değişiklik yapmış, kontrol ediliyor…'); setTimeout(esitle); }
      else durum('Eşitlenemedi. Çevrimdışı olabilirsin, sonra yeniden denenecek.');
    }
  });
}

/* ---------- Oturum ---------- */
function hesapBtnCiz() {
  const b = document.getElementById('hesapBtn'); if (!b) return;
  b.classList.toggle('acik', !!HESAP.kul);
  b.setAttribute('aria-label', HESAP.kul ? `Hesap: ${HESAP.kul.email}` : 'Giriş yap veya kayıt ol');
}

if (SB) {
  SB.auth.onAuthStateChange((ev, oturum) => {
    HESAP.kul = oturum ? oturum.user : null;
    hesapBtnCiz();
    // Bu geri çağrının içinde Supabase çağırmak kilitlenir; bu yüzden sonraya bırakılır
    if (ev === 'PASSWORD_RECOVERY') setTimeout(() => { HESAP.mod = 'yeni'; hesapEkran(); });
    else if (oturum && (ev === 'INITIAL_SESSION' || ev === 'SIGNED_IN')) setTimeout(esitle);
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { if (zamanlayici) gonder(); } else esitle(); });
  addEventListener('pagehide', () => { if (zamanlayici) gonder(); });
  addEventListener('online', esitle);
}

/* ---------- Ekranlar ---------- */
function hesapEkran(not = '') {
  stopT();
  const ust = '<div class="top"><button class="ghost" data-act="home">‹ Geri</button></div><h2 class="dbaslik">Hesap</h2>';
  const sar = ic => view(`<div class="wrap hesapwrap" style="--c:#6FD3FF">${ust}${ic}</div>`);
  if (!SB) return sar('<p class="lalt">Hesap sistemi yüklenemedi. İnternetini kontrol edip sayfayı yenile.</p>');

  if (HESAP.catisma) {
    const b = HESAP.catisma.veri || {}, s = x => `seviye ${seviyeOf(x.xp || 0)} · ${cevapSay(x)} cevap`;
    return sar(`<p class="lalt">Bu cihazdaki ilerleme ile hesabındaki ilerleme farklı. Hangisi kalsın? Seçmediğin silinir.</p>
      <div class="hsecim"><b>Bu cihazda</b><span>${s(S)}</span></div>
      <div class="hsecim"><b>Hesabında</b><span>${s(b)}</span></div>
      <button class="main" data-act="hesapbulut">Hesabımdakini kullan</button>
      <button class="ghost wide" data-act="hesapyerel">Bu cihazdakini kullan</button>`);
  }

  if (HESAP.kul && HESAP.mod === 'yeni') {
    return sar(`<p class="lalt">Yeni şifreni yaz.</p>
      <form id="hform" class="hform" novalidate>
        <label>Yeni şifre<input id="hsifre" type="password" autocomplete="new-password" minlength="6" required></label>
        <button class="main" type="submit">Şifreyi kaydet</button><p class="hhata" id="hhata" role="alert">${esc(not)}</p></form>`);
  }

  if (HESAP.kul) {
    return sar(`<p class="lalt">Giriş yapıldı: <b>${esc(HESAP.kul.email)}</b><br>İlerlemen bu hesapta saklanır. Başka bir cihazda aynı e-posta ve şifreyle giriş yapınca kaldığın yerden devam edersin.</p>
      <p class="lalt" id="hesapdurum" aria-live="polite">${esc(HESAP.durum)}</p>
      <button class="main" data-act="hesapesitle">Şimdi eşitle</button>
      <button class="ghost wide" data-act="hesapcikis">Çıkış yap</button>
      <p class="hhata" id="hhata" role="alert">${esc(not)}</p>`);
  }

  const kayit = HESAP.mod === 'kayit';
  sar(`<p class="lalt">Hesap açarsan ilerlemen buluta kaydedilir ve her cihazdan devam edebilirsin.</p>
    <div class="tabs" role="tablist">
      <button class="tab ${kayit ? '' : 'on'}" role="tab" aria-selected="${!kayit}" data-act="hesapmod" data-mod="giris">Giriş yap</button>
      <button class="tab ${kayit ? 'on' : ''}" role="tab" aria-selected="${kayit}" data-act="hesapmod" data-mod="kayit">Kayıt ol</button></div>
    <form id="hform" class="hform" novalidate>
      <label>E-posta<input id="hemail" type="email" autocomplete="email" inputmode="email" autocapitalize="none" spellcheck="false" value="${esc(HESAP.email)}" required></label>
      <label>Şifre<input id="hsifre" type="password" autocomplete="${kayit ? 'new-password' : 'current-password'}" minlength="6" required></label>
      <button class="main" type="submit">${kayit ? 'Hesap oluştur' : 'Giriş yap'}</button>
      <p class="hhata" id="hhata" role="alert">${esc(not)}</p>
      ${kayit ? '' : '<button type="button" class="ghost" data-act="hesapunuttum">Şifremi unuttum</button>'}</form>`);
}

const hhata = t => { const el = document.getElementById('hhata'); if (el) el.textContent = t; };
const yonlendir = () => /^https?:$/.test(location.protocol) ? location.origin + location.pathname : undefined;

document.addEventListener('submit', async e => {
  if (e.target.id !== 'hform') return;
  e.preventDefault();
  const email = (document.getElementById('hemail') || {}).value, sifre = document.getElementById('hsifre').value, btn = e.target.querySelector('button[type=submit]');
  if (email !== undefined) HESAP.email = email.trim();
  if (email !== undefined && !HESAP.email) return hhata('E-postanı yaz.');
  if (!sifre) return hhata('Şifreni yaz.');
  btn.disabled = true; hhata('');
  try {
    if (HESAP.mod === 'yeni') {
      const { error } = await SB.auth.updateUser({ password: sifre });
      if (error) throw error;
      HESAP.mod = 'giris'; bildir('Şifre değişti'); return home();
    }
    if (HESAP.mod === 'kayit') {
      const { data, error } = await SB.auth.signUp({ email: HESAP.email, password: sifre, options: { emailRedirectTo: yonlendir() } });
      if (error) throw error;
      if (data.user && data.user.identities && !data.user.identities.length) throw { message: 'User already registered' };
      if (!data.session) { btn.disabled = false; return hhata('Onay bağlantısını e-postana gönderdik. Bağlantıya dokunduktan sonra buradan giriş yap.'); }
    } else {
      const { error } = await SB.auth.signInWithPassword({ email: HESAP.email, password: sifre });
      if (error) throw error;
    }
    HESAP.mod = 'giris';
    bildir('Giriş yapıldı', HESAP.email);
    home();
  } catch (err) { btn.disabled = false; hhata(hataMetni(err)); }
});

oyunEkle({
  id: '_hesap', havuz: () => [],
  olay: {
    hesap: () => hesapEkran(),
    hesapmod: ds => { HESAP.mod = ds.mod; const el = document.getElementById('hemail'); if (el) HESAP.email = el.value.trim(); hesapEkran(); },
    hesapesitle: () => { durum('Eşitleniyor…'); esitle().then(() => { if (HESAP.catisma) return; const el = document.getElementById('hesapdurum'); if (el && el.textContent === 'Eşitleniyor…') durum('Eşitlendi · ' + saat()); }); },
    hesapbulut: () => { const b = HESAP.catisma; HESAP.catisma = null; benimse(b); home(); },
    hesapyerel: () => {
      HESAP.catisma = null; degisim++;
      gonder(true).then(() => home());
    },
    hesapunuttum: async () => {
      const email = document.getElementById('hemail').value.trim(); HESAP.email = email;
      if (!email) return hhata('Önce e-postanı yaz.');
      const { error } = await SB.auth.resetPasswordForEmail(email, { redirectTo: yonlendir() });
      hhata(error ? hataMetni(error) : 'Şifre sıfırlama bağlantısını e-postana gönderdik.');
    },
    hesapcikis: async () => {
      // Çıkışta bu cihazdaki ilerleme silinir (ortak cihazda başkasının hesabına karışmasın); önce buluta yazıldığından emin ol
      try { if (zamanlayici || metaOku().kirli) await gonder().then(() => { if (metaOku().kirli) throw 0; }); } catch (e) { return hesapEkran('Çıkılamadı: ilerlemen buluta yazılamadı. İnternete bağlanıp tekrar dene; yoksa ilerlemen silinir.'); }
      await SB.auth.signOut();
      S = bos(); yerelYaz();
      try { localStorage.removeItem(META); } catch (e) { }
      HESAP.durum = ''; ustbarCiz(); home();
      bildir('Çıkış yapıldı', 'Bu cihazdaki ilerleme silindi, girince geri gelir');
    }
  }
});

SERITLER.push(() => !SB ? '' : HESAP.catisma
  ? '<button class="serit" style="--c:#FF6FB5" data-act="hesap"><b>Eşitleme seni bekliyor</b><span>Bu cihazdaki ve hesabındaki ilerleme farklı, birini seç</span></button>'
  : HESAP.kul
    ? `<button class="serit bitti" style="--c:#4EF2C3" data-act="hesap"><b>Hesabın bağlı</b><span>${esc(HESAP.kul.email)}${HESAP.durum ? ' · ' + esc(HESAP.durum) : ''}</span></button>`
    : '<button class="serit" style="--c:#6FD3FF" data-act="hesap"><b>Hesap aç, her cihazdan devam et</b><span>E-posta ile giriş yap, ilerlemen buluta kaydedilsin</span></button>');
