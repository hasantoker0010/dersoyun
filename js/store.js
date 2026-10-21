const KEY = 'dersoyun.v1';
const SIRA = ['python', 'algoritmalar', 'veri-yapilari', 'yz-matematik', 'yz-giris'];
const bos = () => ({ yanlis: {}, stat: {}, best: {} });

let S = bos();
try { S = Object.assign(bos(), JSON.parse(localStorage.getItem(KEY))); } catch (e) { /* localStorage kapalıysa bellekte tutulur */ }
const kaydet = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } if (typeof bulutIsaretle === 'function') bulutIsaretle(); }; // bulutIsaretle: js/hesap.js

const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const karistir = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

// Anahtar kelime eşleşmesi için: küçük harf, aksansız, noktalamasız
const norm = s => String(s).toLocaleLowerCase('tr').replace(/ı/g, 'i').normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9²³ ]+/g, ' ').replace(/\s+/g, ' ').trim();

const dersler = () => SIRA.filter(k => window.DERSLER && DERSLER[k]);
const SORU = {};
dersler().forEach(d => DERSLER[d].sorular.forEach(q => { SORU[q.id] = { q, d }; }));

const yanlisSay = d => Object.entries(S.yanlis).filter(([id, y]) => SORU[id] && (!d || y.ders === d)).length;

function kayitSonuc(ders, q, ok) {
  const u = ((S.stat[ders] ??= {})[q.unite] ??= { d: 0, y: 0 });
  if (ok) {
    u.d++;
    const y = S.yanlis[q.id];
    if (y && --y.n <= 0) delete S.yanlis[q.id];
  } else {
    u.y++;
    const y = (S.yanlis[q.id] ??= { ders, n: 0, son: 0 });
    y.n++; y.son = Date.now();
  }
  kaydet();
  dyKanca(ders, q, ok); // efekt, XP, seri, rozet, konu (js/ilerleme.js)
}
