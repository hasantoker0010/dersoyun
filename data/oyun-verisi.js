/* Beceri oyunlarının içeriği (özgün, kitap metni değildir) ve Zayıf konularım ekranının konu tanımları.
   Her öğede ders + unite varsa ünite istatistiğine, konu varsa konu istatistiğine yazılır. */

// Konu: re soru metniyle eşleşir (yalnızca dersler içindeki sorularda), oyun = "bugün çalış" önerisinin açtığı beceri oyunu
window.KONULAR = [
  { id: 'akis', ad: 'Akış şeması sembolleri ve sayma', re: /akış şema|sembol/i, dersler: ['algoritmalar'], oyun: 'akis' },
  { id: 'sozde', ad: 'Sözde kod ve akış şeması', re: /sözde kod|pseudo/i, dersler: ['algoritmalar'], oyun: 'dy' },
  { id: 'tip', ad: 'Veri tipleri (Float, Boolean…)', re: /veri tip|veri tür|float|boolean|ondalık|mantıksal/i, dersler: ['algoritmalar', 'python'], oyun: 'calistir' },
  { id: 'dongu', ad: 'Döngüler', re: /döngü(?!sü)|while|for /i, dersler: ['algoritmalar', 'python', 'veri-yapilari'], oyun: 'calistir' },
  { id: 'agac', ad: 'Ağaç terimleri (kök, kenar, yaprak)', re: /ağaç|yaprak|kök düğüm/i, dersler: ['algoritmalar', 'veri-yapilari'], oyun: 'cengel' },
  { id: 'pgd', ad: 'Program geliştirme döngüsü sırası', re: /program geliştirme|program tasar/i, dersler: ['algoritmalar'], oyun: 'sirala' }
];

window.OYUN_VERI = {
  /* Akış Şeması Yapbozu. t: bas/son = Başla/Bitir (terminal), gir = Giriş/Çıkış (veri), isl = İşlem (eylem), kar = Karar.
     geri: [karar sırası, dönülen adım] döngü okunu çizer. takas: yer değiştirse de doğru sayılan adım çiftleri. */
  akis: [
    { baslik: 'İki sayının toplamı', adimlar: [['bas', 'Başla'], ['gir', 'A ve B sayılarını oku'], ['isl', 'T = A + B'], ['gir', 'T değerini yaz'], ['son', 'Bitir']] },
    { baslik: 'Dikdörtgenin alanı ve çevresi', takas: [[2, 3]], adimlar: [['bas', 'Başla'], ['gir', 'Kısa ve uzun kenarı oku'], ['isl', 'Alan = Kısa × Uzun'], ['isl', 'Çevre = 2 × (Kısa + Uzun)'], ['gir', 'Alan ve Çevre değerini yaz'], ['son', 'Bitir']] },
    { baslik: 'Sayı tek mi, çift mi?', adimlar: [['bas', 'Başla'], ['gir', 'N sayısını oku'], ['isl', 'K = N mod 2'], ['kar', 'K = 0 mı?'], ['gir', 'Evetse "Çift", hayırsa "Tek" yaz'], ['son', 'Bitir']] },
    { baslik: "1'den N'ye kadar toplam", takas: [[1, 2]], geri: [5, 3], adimlar: [['bas', 'Başla'], ['gir', 'N sayısını oku'], ['isl', 'Toplam = 0, i = 1'], ['isl', 'Toplam = Toplam + i'], ['isl', 'i = i + 1'], ['kar', 'i > N mi?'], ['gir', 'Toplam değerini yaz'], ['son', 'Bitir']] },
    { baslik: 'Geçme notu', adimlar: [['bas', 'Başla'], ['gir', 'Vize ve final notunu oku'], ['isl', 'Ort = Vize × 0,4 + Final × 0,6'], ['kar', 'Ort ≥ 50 mi?'], ['gir', 'Evetse "Geçti", hayırsa "Kaldı" yaz'], ['son', 'Bitir']] },
    { baslik: 'Santigrattan Fahrenhayta', adimlar: [['bas', 'Başla'], ['gir', 'C sıcaklığını oku'], ['isl', 'F = C × 1,8 + 32'], ['gir', 'F değerini yaz'], ['son', 'Bitir']] },
    { baslik: 'İki sayıdan büyüğü', adimlar: [['bas', 'Başla'], ['gir', 'A ve B sayılarını oku'], ['kar', 'A > B mi?'], ['isl', 'Evetse Büyük = A, hayırsa Büyük = B'], ['gir', 'Büyük değerini yaz'], ['son', 'Bitir']] },
    { baslik: 'Faktöriyel hesabı', takas: [[1, 2]], geri: [5, 3], adimlar: [['bas', 'Başla'], ['gir', 'N sayısını oku'], ['isl', 'F = 1'], ['isl', 'F = F × N'], ['isl', 'N = N − 1'], ['kar', 'N = 0 mı?'], ['gir', 'F değerini yaz'], ['son', 'Bitir']] },
    { baslik: 'Çay demleme', geri: [2, 1], adimlar: [['bas', 'Başla'], ['isl', 'Suyu ısıt'], ['kar', 'Su kaynadı mı?'], ['isl', 'Demliğe çay koy'], ['isl', 'Kaynar suyu demliğe dök'], ['son', 'Bitir']] },
    { baslik: 'Dairenin alanı', adimlar: [['bas', 'Başla'], ['gir', 'Yarıçap r değerini oku'], ['isl', 'Alan = 3,14 × r × r'], ['gir', 'Alan değerini yaz'], ['son', 'Bitir']] },
    { baslik: 'Şifre kontrolü', geri: [2, 1], adimlar: [['bas', 'Başla'], ['gir', 'Şifreyi oku'], ['kar', 'Şifre doğru mu?'], ['gir', '"Hoş geldin" yaz'], ['son', 'Bitir']] },
    { baslik: 'Ortalama hesabı', geri: [5, 2], takas: [[3, 4]], adimlar: [['bas', 'Başla'], ['isl', 'Toplam = 0, Sayac = 0'], ['gir', 'Bir notu oku'], ['isl', 'Toplam = Toplam + Not'], ['isl', 'Sayac = Sayac + 1'], ['kar', 'Sayac = 5 mi?'], ['isl', 'Ort = Toplam / 5'], ['gir', 'Ort değerini yaz'], ['son', 'Bitir']] }
  ],

  /* Sırala: ogeler doğru sıradadır; not kontrol sonrası gösterilir */
  sirala: [
    { baslik: 'Program geliştirme döngüsü', ders: 'algoritmalar', unite: 3, konu: 'pgd', soru: 'Adımları baştan sona diz.', ogeler: ['Program tasarımı', 'Kodlama', 'Söz dizimi hatalarını düzeltme', 'Çalıştırılabilir kodu test etme', 'Kodu onarma (mantık hataları)'] },
    { baslik: 'Problem çözme yolculuğu', ders: 'algoritmalar', unite: 3, konu: 'pgd', soru: 'Bir problemi bilgisayarla çözerken izlenen yolu sırala.', ogeler: ['Problemi anla', 'Girdi ve çıktıları belirle', 'Algoritmayı sözde kod ya da akış şemasıyla yaz', 'Algoritmayı koda dönüştür', 'Programı örnek verilerle dene'] },
    { baslik: 'Yapay zekâ tarihçesi', ders: 'yz-giris', unite: 2, soru: 'Olayları eskiden yeniye sırala.', ogeler: ['Turing "Makineler düşünebilir mi?" sorusunu sorar', 'Dartmouth yaz okulu "yapay zekâ" adını koyar', 'ELIZA sohbet programı yazılır', 'Deep Blue satrançta dünya şampiyonunu yener', 'AlphaGo Go oyununda Lee Sedol\'ü yener', 'ChatGPT herkesin kullanımına açılır'], not: ['1950', '1956', '1966', '1997', '2016', '2022'] },
    { baslik: 'Python tarihçesi', ders: 'python', unite: 1, soru: 'Olayları eskiden yeniye sırala.', ogeler: ['Guido van Rossum Python\'un ilk sürümünü yayımlar', 'Python 2.0 çıkar', 'Python 3.0 çıkar', 'Python 2\'nin resmî desteği sona erer'], not: ['1991', '2000', '2008', '2020'] },
    { baslik: 'Kabarcık sıralamada bir tur', ders: 'veri-yapilari', unite: 4, konu: 'dongu', soru: 'Bir turda yapılanları sırala.', ogeler: ['Dizinin başındaki iki komşu elemanı al', 'Soldaki sağdakinden büyükse yerlerini değiştir', 'Bir sağdaki komşu çifte geç', 'Sona gelince en büyük eleman en sağa yerleşmiş olur', 'Sıralanmamış kısım için turu tekrarla'] },
    { baslik: 'Doğrusal arama', ders: 'algoritmalar', unite: 1, konu: 'dongu', soru: 'Bir dizide değer arama adımlarını sırala.', ogeler: ['i = 0 ile başla', 'Dizi[i] aranan değere eşit mi bak', 'Eşitse i konumunu döndür ve dur', 'Eşit değilse i değerini 1 artır', 'Dizi bittiyse "bulunamadı" de'] },
    { baslik: 'İki değişkeni takas etme', ders: 'algoritmalar', unite: 2, soru: 'A ile B\'nin değerini değiştiren adımları sırala.', ogeler: ['Gecici = A', 'A = B', 'B = Gecici', 'A ve B değerlerini yaz'] },
    { baslik: 'Yığından çıkış sırası', ders: 'veri-yapilari', unite: 3, soru: 'Boş yığına sırayla K, L, M eklendi. Üç pop işleminin çıkış sırası?', ogeler: ['M çıkar', 'L çıkar', 'K çıkar'] },
    { baslik: 'Kuyruktan çıkış sırası', ders: 'veri-yapilari', unite: 3, soru: 'Boş kuyruğa sırayla K, L, M, N eklendi. Çıkış sırası?', ogeler: ['K çıkar', 'L çıkar', 'M çıkar', 'N çıkar'] },
    { baslik: 'Veriden sonuca', ders: 'yz-giris', unite: 4, soru: 'Bir veri projesinin aşamalarını sırala.', ogeler: ['Veriyi topla', 'Eksik ve hatalı kayıtları temizle', 'Veriyi modele uygun biçime getir', 'Modeli eğit ya da analizi yap', 'Sonuçları yorumla ve paylaş'] },
    { baslik: 'Python dosyasını çalıştırma', ders: 'python', unite: 1, soru: 'Bir betiği çalıştırma adımlarını sırala.', ogeler: ['Kodu bir düzenleyicide yaz', 'Dosyayı .py uzantısıyla kaydet', 'Terminalde python dosya.py komutunu ver', 'Ekrandaki çıktıyı incele'] },
    { baslik: 'Sayıları sırala', ders: 'yz-matematik', unite: 1, soru: 'Küçükten büyüğe diz.', ogeler: ['−2,5', '−1', '0', '1/3', '0,5', '√2', 'π'] }
  ],

  /* Kodu Çalıştır: adimlar = izleme. s: vurgulanan satır (0'dan), v: o adımda değişen değişkenler, o: ekrana yazılan satır */
  calistir: [
    { baslik: 'Tam bölme ve kalan', ders: 'python', unite: 2, konu: 'tip', dil: 'Python', kod: ['a = 7', 'b = 2', 'c = a // b', 'd = a % b', 'print(c, d)'], cikti: '3 1',
      adimlar: [{ s: 0, v: { a: '7' } }, { s: 1, v: { b: '2' } }, { s: 2, v: { c: '3' } }, { s: 3, v: { d: '1' } }, { s: 4, o: '3 1' }],
      aciklama: '// tam bölmedir (7 // 2 = 3), % kalanı verir (7 % 2 = 1).' },
    { baslik: 'for ile toplam', ders: 'python', unite: 3, konu: 'dongu', dil: 'Python', kod: ['toplam = 0', 'for i in range(1, 4):', '    toplam += i', 'print(toplam)'], cikti: '6',
      adimlar: [{ s: 0, v: { toplam: '0' } }, { s: 1, v: { i: '1' } }, { s: 2, v: { toplam: '1' } }, { s: 1, v: { i: '2' } }, { s: 2, v: { toplam: '3' } }, { s: 1, v: { i: '3' } }, { s: 2, v: { toplam: '6' } }, { s: 3, o: '6' }],
      aciklama: 'range(1, 4) yalnızca 1, 2, 3 üretir; 4 dahil değildir.' },
    { baslik: 'Yarıya bölerek say', ders: 'python', unite: 3, konu: 'dongu', dil: 'Python', kod: ['n = 10', 'adim = 0', 'while n > 1:', '    n = n // 2', '    adim += 1', 'print(adim)'], cikti: '3',
      adimlar: [{ s: 0, v: { n: '10' } }, { s: 1, v: { adim: '0' } }, { s: 2 }, { s: 3, v: { n: '5' } }, { s: 4, v: { adim: '1' } }, { s: 2 }, { s: 3, v: { n: '2' } }, { s: 4, v: { adim: '2' } }, { s: 2 }, { s: 3, v: { n: '1' } }, { s: 4, v: { adim: '3' } }, { s: 2 }, { s: 5, o: '3' }],
      aciklama: '10 → 5 → 2 → 1: üç bölmeden sonra n > 1 koşulu yanlış olur.' },
    { baslik: 'Metin dilimleri', ders: 'python', unite: 2, dil: 'Python', kod: ['s = "Python"', 'print(s[0] + s[-1])', 'print(len(s))'], cikti: 'Pn\n6',
      adimlar: [{ s: 0, v: { s: '"Python"' } }, { s: 1, o: 'Pn' }, { s: 2, o: '6' }],
      aciklama: 's[0] ilk, s[-1] son karakterdir. Satırları boşlukla ayırarak yazabilirsin.' },
    { baslik: 'Sözde kodda çarpım', ders: 'algoritmalar', unite: 4, konu: 'dongu', dil: 'Sözde kod', kod: ['BAŞLA', '  Sayac ← 1', '  Carpim ← 1', '  Sayac ≤ 4 OLDUĞU SÜRECE', '    Carpim ← Carpim × Sayac', '    Sayac ← Sayac + 1', '  SON', '  YAZ Carpim', 'BİTİR'], cikti: '24',
      adimlar: [{ s: 0 }, { s: 1, v: { Sayac: '1' } }, { s: 2, v: { Carpim: '1' } }, { s: 3 }, { s: 4, v: { Carpim: '1' } }, { s: 5, v: { Sayac: '2' } }, { s: 3 }, { s: 4, v: { Carpim: '2' } }, { s: 5, v: { Sayac: '3' } }, { s: 3 }, { s: 4, v: { Carpim: '6' } }, { s: 5, v: { Sayac: '4' } }, { s: 3 }, { s: 4, v: { Carpim: '24' } }, { s: 5, v: { Sayac: '5' } }, { s: 3 }, { s: 7, o: '24' }, { s: 8 }],
      aciklama: '1 × 2 × 3 × 4 = 24. Sayac 5 olunca koşul yanlış olur.' },
    { baslik: 'FizzBuzz kararı', ders: 'python', unite: 3, dil: 'Python', kod: ['x = 15', 'if x % 3 == 0 and x % 5 == 0:', '    print("FizzBuzz")', 'elif x % 3 == 0:', '    print("Fizz")', 'else:', '    print(x)'], cikti: 'FizzBuzz',
      adimlar: [{ s: 0, v: { x: '15' } }, { s: 1 }, { s: 2, o: 'FizzBuzz' }],
      aciklama: '15 hem 3\'e hem 5\'e bölünür; ilk koşul doğru olduğu için elif ve else atlanır.' },
    { baslik: 'Listeyi değiştir', ders: 'python', unite: 2, dil: 'Python', kod: ['liste = [4, 8, 15]', 'liste.append(16)', 'liste[0] = 1', 'print(liste)', 'print(len(liste))'], cikti: '[1, 8, 15, 16]\n4',
      adimlar: [{ s: 0, v: { liste: '[4, 8, 15]' } }, { s: 1, v: { liste: '[4, 8, 15, 16]' } }, { s: 2, v: { liste: '[1, 8, 15, 16]' } }, { s: 3, o: '[1, 8, 15, 16]' }, { s: 4, o: '4' }],
      aciklama: 'append sona ekler; liste değiştirilebilir olduğu için liste[0] = 1 çalışır.' },
    { baslik: 'Fonksiyon çağrısı', ders: 'python', unite: 4, dil: 'Python', kod: ['def kare(n):', '    return n * n', '', 'sonuc = kare(3) + kare(2)', 'print(sonuc)'], cikti: '13',
      adimlar: [{ s: 0 }, { s: 3 }, { s: 0, v: { n: '3' } }, { s: 1 }, { s: 0, v: { n: '2' } }, { s: 1 }, { s: 3, v: { sonuc: '13' } }, { s: 4, o: '13' }],
      aciklama: 'kare(3) = 9, kare(2) = 4, toplam 13.' },
    { baslik: 'Sözde kodda büyük olan', ders: 'algoritmalar', unite: 4, konu: 'sozde', dil: 'Sözde kod', kod: ['BAŞLA', '  A ← 12', '  B ← 30', '  EĞER A > B İSE', '    Buyuk ← A', '  DEĞİLSE', '    Buyuk ← B', '  SON', '  YAZ Buyuk − A', 'BİTİR'], cikti: '18',
      adimlar: [{ s: 0 }, { s: 1, v: { A: '12' } }, { s: 2, v: { B: '30' } }, { s: 3 }, { s: 6, v: { Buyuk: '30' } }, { s: 8, o: '18' }, { s: 9 }],
      aciklama: '12 > 30 yanlış, Buyuk = 30 olur; 30 − 12 = 18.' },
    { baslik: 'Palindrom mu?', ders: 'python', unite: 3, konu: 'tip', dil: 'Python', kod: ['kelime = "ada"', 'ters = ""', 'for h in kelime:', '    ters = h + ters', 'print(ters == kelime)'], cikti: 'True',
      adimlar: [{ s: 0, v: { kelime: '"ada"' } }, { s: 1, v: { ters: '""' } }, { s: 2, v: { h: '"a"' } }, { s: 3, v: { ters: '"a"' } }, { s: 2, v: { h: '"d"' } }, { s: 3, v: { ters: '"da"' } }, { s: 2, v: { h: '"a"' } }, { s: 3, v: { ters: '"ada"' } }, { s: 4, o: 'True' }],
      aciklama: '== karşılaştırması Boolean (True/False) değer üretir.' },
    { baslik: 'int ile float', ders: 'python', unite: 2, konu: 'tip', dil: 'Python', kod: ['a = 5', 'b = 2.0', 'c = a * b', 'print(type(c).__name__, c)'], cikti: 'float 10.0',
      adimlar: [{ s: 0, v: { a: '5' } }, { s: 1, v: { b: '2.0' } }, { s: 2, v: { c: '10.0' } }, { s: 3, o: 'float 10.0' }],
      aciklama: 'int ile float çarpılınca sonuç float olur.' },
    { baslik: 'Boolean dönüşümü', ders: 'python', unite: 2, konu: 'tip', dil: 'Python', kod: ['x = 0', 'y = bool(x)', 'z = not y', 'print(y, z)'], cikti: 'False True',
      adimlar: [{ s: 0, v: { x: '0' } }, { s: 1, v: { y: 'False' } }, { s: 2, v: { z: 'True' } }, { s: 3, o: 'False True' }],
      aciklama: '0 sayısı Boolean\'a çevrilince False olur; not onu tersine çevirir.' }
  ],

  /* Hatayı Bul: hata = doğru sayılan satır(lar), 0'dan */
  hatabul: [
    { ders: 'python', unite: 3, konu: 'dongu', dil: 'Python', amac: "1'den 5'e kadar (5 dahil) sayıları yazmalı.", kod: ['for i in range(1, 5):', '    print(i)'], hata: [0], aciklama: 'range(1, 5) 5\'i üretmez; range(1, 6) olmalı.' },
    { ders: 'python', unite: 2, konu: 'tip', dil: 'Python', amac: 'Yaşı alıp bir fazlasını yazmalı. Hangi satır çalışırken hata verir?', kod: ['yas = input("Yaşın: ")', 'yas = yas + 1', 'print(yas)'], hata: [1], aciklama: 'input metin (str) döndürür; str + int TypeError verir. int(input(...)) kullanılmalı.' },
    { ders: 'python', unite: 3, dil: 'Python', amac: 'Sayı 5\'ten büyükse "Büyük" yazmalı.', kod: ['sayi = 7', 'if sayi > 5', '    print("Büyük")'], hata: [1], aciklama: 'if satırının sonunda iki nokta (:) eksik.' },
    { ders: 'python', unite: 4, dil: 'Python', amac: 'Fonksiyon selam vermeli.', kod: ['def selamla(ad):', 'print("Merhaba", ad)', 'selamla("Ece")'], hata: [1], aciklama: 'Fonksiyon gövdesi girintili olmalı; Python blokları girintiyle anlar.' },
    { ders: 'algoritmalar', unite: 3, konu: 'sozde', dil: 'Sözde kod', amac: 'Üç notun ortalamasını yazmalı.', kod: ['BAŞLA', '  Toplam ← 0', '  3 KEZ TEKRARLA', '    OKU Not', '    Toplam ← Toplam + Not', '  SON', '  Ortalama ← Toplam / 2', '  YAZ Ortalama', 'BİTİR'], hata: [6], aciklama: 'Üç not toplandı; 3\'e bölünmeli.' },
    { ders: 'algoritmalar', unite: 4, konu: 'dongu', dil: 'Sözde kod', amac: "1'den 10'a kadar sayıları yazmalı.", kod: ['BAŞLA', '  i ← 1', '  i ≤ 10 OLDUĞU SÜRECE', '    YAZ i', '    i ← i − 1', '  SON', 'BİTİR'], hata: [4], aciklama: 'i azaldıkça koşul hep doğru kalır: sonsuz döngü. i ← i + 1 olmalı.' },
    { ders: 'python', unite: 2, konu: 'tip', dil: 'Python', amac: 'Ad ve yaşı tek cümlede yazmalı.', kod: ['ad = "Ali"', 'yas = 20', 'print(ad + " " + yas + " yaşında")'], hata: [2], aciklama: 'Metinle sayı + ile birleşmez; str(yas) gerekir.' },
    { ders: 'python', unite: 2, dil: 'Python', amac: 'Listenin ilk ve son elemanını yazmalı.', kod: ['renkler = ["kırmızı", "yeşil", "mavi"]', 'print(renkler[0])', 'print(renkler[3])'], hata: [2], aciklama: 'Üç elemanlı listede son indeks 2\'dir (ya da -1). [3] IndexError verir.' },
    { ders: 'python', unite: 3, dil: 'Python', amac: 'x 10\'a eşitse "on" yazmalı.', kod: ['x = 10', 'if x = 10:', '    print("on")'], hata: [1], aciklama: 'Karşılaştırma == ile yapılır; = atamadır.' },
    { ders: 'algoritmalar', unite: 4, konu: 'sozde', dil: 'Sözde kod', amac: 'İki sayıdan büyüğünü yazmalı.', kod: ['BAŞLA', '  OKU A, B', '  EĞER A < B İSE', '    YAZ "Büyük olan: ", A', '  DEĞİLSE', '    YAZ "Büyük olan: ", B', '  SON', 'BİTİR'], hata: [2, 3], aciklama: 'Koşul ters kurulmuş: A < B iken B yazılmalı (ya da koşul A > B olmalı).' },
    { ders: 'python', unite: 2, konu: 'tip', dil: 'Python', amac: 'Notların ondalıklı ortalamasını yazmalı (81.66…).', kod: ['notlar = [70, 85, 90]', 'ortalama = sum(notlar) // len(notlar)', 'print(ortalama)'], hata: [1], aciklama: '// tam bölmedir, 81 verir. Float sonuç için / kullanılmalı.' },
    { ders: 'python', unite: 3, konu: 'dongu', dil: 'Python', amac: "5'ten 1'e geri saymalı.", kod: ['sayac = 5', 'while sayac > 0:', '    print(sayac)', '    sayac += 1'], hata: [3], aciklama: 'sayac artarsa koşul hiç yanlış olmaz; sayac -= 1 olmalı.' }
  ],

  /* Doğru mu Yanlış mı: d = ifade doğru mu */
  dy: [
    { m: 'Akış şemasında karar sembolünden (eşkenar dörtgen) iki çıkış oku çıkar.', d: true, ders: 'algoritmalar', unite: 3, konu: 'akis' },
    { m: 'Akış şemasında Başla ve Bitir paralelkenarla gösterilir.', d: false, a: 'Başla/Bitir oval (terminal) sembolüdür; paralelkenar giriş/çıkıştır.', ders: 'algoritmalar', unite: 3, konu: 'akis' },
    { m: 'Dikdörtgen (eylem) sembolü bir işlemi ya da atamayı gösterir.', d: true, ders: 'algoritmalar', unite: 3, konu: 'akis' },
    { m: 'Veri girişi ve ekrana yazdırma aynı tür sembolle (veri sembolü) gösterilebilir.', d: true, ders: 'algoritmalar', unite: 3, konu: 'akis' },
    { m: 'Sözde kod belirli bir programlama dilinin söz dizimine uymak zorundadır.', d: false, a: 'Sözde kod dilden bağımsızdır; amaç adımları sade dille anlatmaktır.', ders: 'algoritmalar', unite: 3, konu: 'sozde' },
    { m: 'Akış şeması algoritmayı şekillerle, sözde kod ise yazıyla ifade eder.', d: true, ders: 'algoritmalar', unite: 3, konu: 'sozde' },
    { m: 'Sözde kod bilgisayarda doğrudan çalıştırılabilir.', d: false, a: 'Sözde kod önce gerçek bir programlama diline çevrilmelidir.', ders: 'algoritmalar', unite: 3, konu: 'sozde' },
    { m: 'Python\'da 3.0 değeri float türündedir.', d: true, ders: 'python', unite: 2, konu: 'tip' },
    { m: 'Boolean türü yalnızca True ve False değerlerini alır.', d: true, ders: 'python', unite: 2, konu: 'tip' },
    { m: 'Python\'da 5 / 2 işleminin sonucu int türündedir.', d: false, a: '/ her zaman float verir: 2.5.', ders: 'python', unite: 2, konu: 'tip' },
    { m: '"42" yazımı Python\'da bir tamsayıdır.', d: false, a: 'Tırnak içindeki her şey str (metin) türündedir.', ders: 'python', unite: 2, konu: 'tip' },
    { m: 'for döngüsü bir koleksiyonun her elemanı için gövdeyi bir kez çalıştırır.', d: true, ders: 'python', unite: 3, konu: 'dongu' },
    { m: 'while döngüsünün koşulu hiç yanlış olmazsa döngü sonsuza kadar sürer.', d: true, ders: 'python', unite: 3, konu: 'dongu' },
    { m: 'range(5) 1, 2, 3, 4, 5 sayılarını üretir.', d: false, a: 'range(5) 0\'dan başlar: 0, 1, 2, 3, 4.', ders: 'python', unite: 3, konu: 'dongu' },
    { m: 'break komutu içinde bulunduğu döngüyü tamamen sonlandırır.', d: true, ders: 'python', unite: 3, konu: 'dongu' },
    { m: 'Ağaçta ebeveyni olmayan en üstteki düğüme kök denir.', d: true, ders: 'algoritmalar', unite: 2, konu: 'agac' },
    { m: 'Ağaçta iki düğümü birbirine bağlayan çizgiye kenar denir.', d: true, ders: 'algoritmalar', unite: 2, konu: 'agac' },
    { m: 'Çocuğu olmayan düğümlere kök düğüm denir.', d: false, a: 'Çocuğu olmayan düğüm yapraktır.', ders: 'algoritmalar', unite: 2, konu: 'agac' },
    { m: 'n düğümlü bir ağaçta n − 1 kenar bulunur.', d: true, ders: 'algoritmalar', unite: 2, konu: 'agac' },
    { m: 'Program geliştirme döngüsünde kodlama, program tasarımından önce gelir.', d: false, a: 'Önce tasarım, sonra kodlama gelir.', ders: 'algoritmalar', unite: 3, konu: 'pgd' },
    { m: 'Söz dizimi hataları düzeltildikten sonra çalıştırılabilir kod test edilir.', d: true, ders: 'algoritmalar', unite: 3, konu: 'pgd' },
    { m: 'Yığın (stack) son giren ilk çıkar (LIFO) mantığıyla çalışır.', d: true, ders: 'veri-yapilari', unite: 3 },
    { m: 'Kuyrukta ilk eklenen eleman en son çıkar.', d: false, a: 'Kuyruk FIFO\'dur: ilk giren ilk çıkar.', ders: 'veri-yapilari', unite: 3 },
    { m: 'Kabarcık sıralamanın en kötü durum karmaşıklığı O(n²)\'dir.', d: true, ders: 'veri-yapilari', unite: 4 },
    { m: '"Yapay zekâ" adı 1956 Dartmouth çalışmasıyla yaygınlaştı.', d: true, ders: 'yz-giris', unite: 2 },
    { m: 'Bir vektörün uzunluğu (normu) negatif olabilir.', d: false, a: 'Norm her zaman sıfır ya da pozitiftir.', ders: 'yz-matematik', unite: 4 },
    { m: 'Python\'da liste değiştirilebilir, demet (tuple) değiştirilemez.', d: true, ders: 'python', unite: 2 }
  ],

  /* Çengel Bulmaca: k = cevap (büyük harf, boşluksuz), i = ipucu. Bulmaca her turda bu kelimelerden kurulur. */
  cengel: [
    { k: 'ALGORİTMA', i: 'Bir problemi çözmek için izlenen sonlu, sıralı adımlar', ders: 'algoritmalar', unite: 1 },
    { k: 'DÖNGÜ', i: 'Bir bloğun tekrar tekrar çalışmasını sağlayan yapı', ders: 'algoritmalar', unite: 4, konu: 'dongu' },
    { k: 'KARAR', i: 'Akış şemasında eşkenar dörtgenle gösterilen sembol', ders: 'algoritmalar', unite: 3, konu: 'akis' },
    { k: 'TERMİNAL', i: 'Başla/Bitir sembolünün diğer adı', ders: 'algoritmalar', unite: 3, konu: 'akis' },
    { k: 'SÖZDEKOD', i: 'Dilden bağımsız, sade dille yazılmış algoritma (bitişik)', ders: 'algoritmalar', unite: 3, konu: 'sozde' },
    { k: 'BOOLEAN', i: 'Yalnızca doğru ya da yanlış değer alan veri türü', ders: 'algoritmalar', unite: 2, konu: 'tip' },
    { k: 'FLOAT', i: 'Ondalıklı sayıları tutan veri türü', ders: 'algoritmalar', unite: 2, konu: 'tip' },
    { k: 'KÖK', i: 'Ağacın ebeveyni olmayan en üst düğümü', ders: 'algoritmalar', unite: 2, konu: 'agac' },
    { k: 'KENAR', i: 'Ağaçta iki düğümü bağlayan çizgi', ders: 'algoritmalar', unite: 2, konu: 'agac' },
    { k: 'YAPRAK', i: 'Ağaçta çocuğu olmayan düğüm', ders: 'algoritmalar', unite: 2, konu: 'agac' },
    { k: 'DÜĞÜM', i: 'Ağaç ya da çizgedeki her bir eleman', ders: 'algoritmalar', unite: 2, konu: 'agac' },
    { k: 'KODLAMA', i: 'Tasarımın programlama diline çevrilmesi', ders: 'algoritmalar', unite: 3, konu: 'pgd' },
    { k: 'DEĞİŞKEN', i: 'Değer saklamak için adlandırılmış bellek alanı', ders: 'algoritmalar', unite: 2 },
    { k: 'GİRİNTİ', i: 'Python\'da blokları belirleyen satır başı boşluğu', ders: 'python', unite: 3 },
    { k: 'LİSTE', i: 'Köşeli parantezle yazılan değiştirilebilir koleksiyon', ders: 'python', unite: 2 },
    { k: 'DEMET', i: 'Değiştirilemeyen sıralı koleksiyon (tuple)', ders: 'python', unite: 2 },
    { k: 'SÖZLÜK', i: 'Anahtar–değer çiftlerini tutan yapı', ders: 'python', unite: 2 },
    { k: 'MODÜL', i: 'import ile içe aktarılan kod dosyası', ders: 'python', unite: 4 },
    { k: 'WHILE', i: 'Koşul doğru oldukça dönen Python döngüsü', ders: 'python', unite: 3, konu: 'dongu' },
    { k: 'RANGE', i: 'Sayı dizisi üreten, for ile sık kullanılan fonksiyon', ders: 'python', unite: 3, konu: 'dongu' },
    { k: 'YIĞIN', i: 'Son giren ilk çıkar (LIFO) yapısı', ders: 'veri-yapilari', unite: 3 },
    { k: 'KUYRUK', i: 'İlk giren ilk çıkar (FIFO) yapısı', ders: 'veri-yapilari', unite: 3 },
    { k: 'DİZİ', i: 'Aynı türden elemanları ardışık tutan yapı', ders: 'veri-yapilari', unite: 2 },
    { k: 'VEKTÖR', i: 'Büyüklüğü ve yönü olan nicelik', ders: 'yz-matematik', unite: 4 },
    { k: 'KÜME', i: 'İyi tanımlanmış nesneler topluluğu', ders: 'yz-matematik', unite: 2 }
  ]
};

// Akış şemalarının hepsi Algoritmalar Ünite 3 konusudur
OYUN_VERI.akis.forEach(x => Object.assign(x, { ders: 'algoritmalar', unite: 3, konu: 'akis' }));
