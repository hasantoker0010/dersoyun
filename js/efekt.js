/* Oyun hissi: tema seçici, Web Audio sesleri, parçacıklar, sarsıntı, uçan yazılar, maskot.
   Ses dosyası yoktur; tüm sesler osilatörle üretilir. prefers-reduced-motion açıksa hareketli efektler atlanır. */
const AZ_HAREKET = matchMedia('(prefers-reduced-motion: reduce)').matches;
const TEMALAR = [['uzay', 'Uzay'], ['neon', 'Neon Gece'], ['retro', 'Retro Piksel'], ['pastel', 'Pastel Gündüz']];
const yerel = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };

function temaSec(t) {
  if (!TEMALAR.some(([k]) => k === t)) t = 'uzay';
  document.documentElement.dataset.tema = t;
  yerel('dersoyun.tema', t);
  const s = document.getElementById('temaSec');
  if (s) s.value = t;
}

/* ---------- Ses ---------- */
let ac = null, sesAcik = yerel('dersoyun.ses') !== '0';
const SESLER = {
  dogru: [[660, 0, .1], [990, .08, .18]],
  yanlis: [[220, 0, .22, 'sawtooth'], [150, .12, .3, 'sawtooth']],
  seviye: [[523, 0, .12], [659, .1, .12], [784, .2, .12], [1047, .3, .35]],
  rozet: [[784, 0, .1, 'triangle'], [1175, .1, .3, 'triangle']],
  alev: [[440, 0, .08], [880, .06, .08], [1320, .12, .15]]
};
function ses(ad) {
  if (!sesAcik || !SESLER[ad]) return;
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    if (ac.state === 'suspended') ac.resume();
    for (const [f, t, sure, tip = 'square', vol = .07] of SESLER[ad]) {
      const o = ac.createOscillator(), g = ac.createGain(), t0 = ac.currentTime + t;
      o.type = tip; o.frequency.setValueAtTime(f, t0);
      g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(.0001, t0 + sure);
      o.connect(g).connect(ac.destination); o.start(t0); o.stop(t0 + sure + .02);
    }
  } catch (e) { /* ses desteklenmiyorsa sessiz devam */ }
}
function sesCiz() {
  const b = document.getElementById('sesBtn');
  if (!b) return;
  b.setAttribute('aria-pressed', sesAcik);
  b.setAttribute('aria-label', sesAcik ? 'Sesi kapat' : 'Sesi aç');
  b.classList.toggle('kapali', !sesAcik);
}

/* ---------- Görsel efektler ---------- */
let sonNokta = null, sonBtn = null;
document.addEventListener('pointerdown', e => { sonNokta = { x: e.clientX, y: e.clientY }; sonBtn = e.target.closest('button'); }, true);
document.addEventListener('keydown', () => { sonNokta = null; sonBtn = null; }, true);
const nokta = () => sonNokta || { x: innerWidth / 2, y: innerHeight / 2.5 };
const katman = () => document.getElementById('efekt');
const yeniden = (el, sinif) => { if (!el) return; el.classList.remove(sinif); void el.offsetWidth; el.classList.add(sinif); };
const RENKLER = ['#FFD66B', '#FF6FB5', '#4EF2C3', '#6FD3FF', '#A893FF', '#FF8A5C'];

function patlat(n = 18, p = nokta()) {
  if (AZ_HAREKET || !katman()) return;
  for (let i = 0; i < n; i++) {
    const el = document.createElement('i'), a = Math.random() * Math.PI * 2, r = 50 + Math.random() * 110;
    el.className = 'parca' + (i % 3 ? '' : ' yildiz');
    el.style.cssText = `left:${p.x}px;top:${p.y}px;--dx:${Math.cos(a) * r}px;--dy:${Math.sin(a) * r - 40}px;--r:${Math.random() * 720 - 360}deg;--k:${RENKLER[i % RENKLER.length]}`;
    katman().appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
}

function ucan(metin, sinif = '', p = nokta()) {
  if (!katman()) return;
  const el = document.createElement('div');
  el.className = 'ucan ' + sinif; el.textContent = metin;
  el.style.left = p.x + 'px'; el.style.top = p.y + 'px';
  katman().appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

function bildir(baslik, alt = '', sinif = '') {
  const el = document.createElement('div');
  el.className = 'bildirim ' + sinif; el.setAttribute('role', 'status');
  el.innerHTML = `<b>${esc(baslik)}</b>${alt ? `<span>${esc(alt)}</span>` : ''}`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

function maskot(durum, soz) {
  const m = document.getElementById('maskot');
  if (!m) return;
  m.classList.remove('mutlu', 'uzgun');
  void m.offsetWidth;
  m.classList.add(durum);
  m.querySelector('.balon').textContent = soz;
  clearTimeout(m._to);
  m._to = setTimeout(() => m.classList.remove('mutlu', 'uzgun'), 1800);
}

const OVGU = ['Harika!', 'Süper!', 'Tam isabet!', 'Böyle devam!', 'Bravo!'];
const TESELLI = ['Olsun!', 'Bir dahakine!', 'Az kaldı!', 'Not al, geç!'];
const rasgele = a => a[Math.random() * a.length | 0];

// Doğru/yanlış anında çağrılır (ilerleme.js dyKanca)
function efektDogru(xp, seri) {
  ses(seri === 3 || seri === 5 || seri === 10 ? 'alev' : 'dogru');
  patlat(seri >= 5 ? 30 : 18);
  ucan(`+${xp} XP`);
  if (sonBtn && document.contains(sonBtn)) yeniden(sonBtn, 'zipla');
  if (seri === 3 || seri === 5 || seri === 10) ucan(`${seri} SERİ!`, 'seriyazi', { x: innerWidth / 2, y: innerHeight / 3 });
  maskot('mutlu', seri >= 3 ? `${seri} seri!` : rasgele(OVGU));
}
function efektYanlis() {
  ses('yanlis');
  if (!AZ_HAREKET) yeniden(document.getElementById('app'), 'sars');
  yeniden(document.getElementById('flas'), 'yak');
  maskot('uzgun', rasgele(TESELLI));
}
function efektSeviye(n) {
  ses('seviye');
  const el = document.createElement('div');
  el.className = 'seviyeatla';
  el.innerHTML = `<div><small>Seviye atladın</small><b>${n}</b></div>`;
  document.body.appendChild(el);
  patlat(40, { x: innerWidth / 2, y: innerHeight / 2 });
  setTimeout(() => el.remove(), 2200);
}

/* ---------- Sayfa geçişi ---------- */
// Aynı ekranın yeniden çizimini (ör. her harf tahmini) canlandırmamak için yalnızca ekranın başı değişince oynatılır
let sonEkran = '';
function gecis(h) {
  const k = h.replace(/\d+/g, '').slice(0, 160);
  if (k !== sonEkran && !AZ_HAREKET) yeniden(document.getElementById('app'), 'gecis');
  sonEkran = k;
}

/* ---------- Üst çubuk olayları ---------- */
document.addEventListener('change', e => { if (e.target.id === 'temaSec') temaSec(e.target.value); });
temaSec(yerel('dersoyun.tema') || 'uzay');
sesCiz();
