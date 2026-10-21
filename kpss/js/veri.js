/* Ders kayıt noktası. Her data/*.js dosyası KPSS.ders({...}) çağırır.
   Soru biçimi: [soru metni, [A, B, C, D, E], doğru şıkkın sırası (0-4), açıklama] */
window.KPSS = { dersler: [], ders(d) { this.dersler.push(d); } };
