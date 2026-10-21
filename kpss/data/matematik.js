KPSS.ders({
  id: 'matematik', ad: 'Matematik', bolum: 'gy', renk: '#3A86FF', simge: 'π',
  konular: [
    {
      id: 'temel', ad: 'Temel Kavramlar ve Sayılar',
      ozet: [
        'Sayı kümeleri: Doğal sayılar {0, 1, 2, …}, sayma sayıları {1, 2, 3, …}, tam sayılar {…, −1, 0, 1, …}.',
        'Asal sayı: Yalnızca 1\'e ve kendisine bölünebilen, 1\'den büyük doğal sayıdır. En küçük asal sayı 2\'dir ve çift olan tek asal sayıdır.',
        'Ardışık sayılar: 1\'den n\'ye kadar toplam n(n+1)/2; terim sayısı = (son − ilk) / artış + 1.',
        'Tek-çift: Tek ± tek = çift, tek · tek = tek; çift bir sayının herhangi bir tam sayıyla çarpımı çifttir.',
        'Aralarında asal: 1\'den başka ortak böleni olmayan sayılardır (8 ile 15 gibi).',
        'İşlem önceliği: Parantez → üs → çarpma/bölme → toplama/çıkarma; aynı öncelikte soldan sağa.'
      ],
      sorular: [
        ['1\'den 40\'a kadar olan doğal sayıların toplamı kaçtır?', ['780', '800', '820', '840', '860'], 2, '40 · 41 / 2 = 820'],
        ['10 ile 50 arasında (10 ve 50 dâhil) 4\'ün katı olan kaç tam sayı vardır?', ['9', '10', '11', '12', '13'], 1, '12, 16, …, 48 → (48 − 12) / 4 + 1 = 10'],
        ['a ve b birer tek sayı olmak üzere aşağıdakilerden hangisi kesinlikle çift sayıdır?', ['a · b', 'a + 2b', 'a · b + 2', 'a + b', '2a + b'], 3, 'Tek + tek = çift. a·b tek, a·b + 2 tek, a + 2b tek, 2a + b tektir.'],
        ['Rakamları farklı üç basamaklı en büyük çift sayı ile rakamları farklı üç basamaklı en küçük tek sayının farkı kaçtır?', ['863', '873', '883', '893', '885'], 2, 'En büyük çift: 986, en küçük tek: 103 → 986 − 103 = 883'],
        ['12 − 3 · (8 − 6)² ÷ 4 işleminin sonucu kaçtır?', ['9', '3', '6', '12', '15'], 0, '(8 − 6)² = 4 → 3 · 4 = 12 → 12 ÷ 4 = 3 → 12 − 3 = 9']
      ]
    },
    {
      id: 'bolunebilme', ad: 'Bölünebilme, EBOB ve EKOK',
      ozet: [
        '2, 4, 5 ile bölünebilme: 2 ile son basamak çift; 4 ile son iki basamak 4\'ün katı; 5 ile son basamak 0 ya da 5 olmalıdır.',
        '3 ve 9 ile bölünebilme: Rakamlar toplamı 3\'ün (9\'un) katı olmalıdır. 6 ile bölünme için hem 2 hem 3 ile bölünmelidir.',
        '11 ile bölünebilme: Sağdan başlayarak rakamlara +, −, +, … işaretleri verilip toplandığında sonuç 11\'in katı (0 dâhil) olmalıdır.',
        'EBOB: Sayıları birlikte bölen en büyük sayıdır; bir bütünü eşit ve en büyük parçalara ayırma problemlerinde kullanılır.',
        'EKOK: Sayıların ortak katlarının en küçüğüdür; "yeniden birlikte" olma, aynı anda karşılaşma problemlerinde kullanılır.',
        'İki sayı için bağıntı: a · b = EBOB(a, b) · EKOK(a, b).'
      ],
      sorular: [
        ['Dört basamaklı 37A2 sayısı 9 ile tam bölünebildiğine göre A kaçtır?', ['3', '4', '5', '6', '7'], 3, '3 + 7 + A + 2 = 12 + A, 9\'un katı olmalı → A = 6'],
        ['EBOB(24, 36) + EKOK(24, 36) toplamı kaçtır?', ['72', '84', '78', '96', '108'], 1, 'EBOB = 12, EKOK = 72 → 84'],
        ['Bir duraktan A hattı 12 dakikada, B hattı 18 dakikada bir kalkmaktadır. İki hat saat 08.00\'de birlikte kalktığına göre bir sonraki birlikte kalkış saat kaçtadır?', ['08.30', '08.48', '08.36', '09.00', '09.12'], 2, 'EKOK(12, 18) = 36 dakika → 08.36'],
        ['Kenar uzunlukları 48 m ve 60 m olan dikdörtgen biçimindeki bir bahçenin çevresine, köşelere de gelmek şartıyla eşit aralıklarla ağaç dikilecektir. En az kaç ağaç gerekir?', ['16', '18', '20', '24', '36'], 1, 'Aralık EBOB(48, 60) = 12 m. Çevre 216 m → 216 / 12 = 18 ağaç (kapalı şekilde ağaç sayısı = aralık sayısı).']
      ]
    },
    {
      id: 'rasyonel', ad: 'Rasyonel ve Ondalık Sayılar',
      ozet: [
        'Rasyonel sayı: a/b biçiminde yazılabilen (b ≠ 0) sayılardır.',
        'Toplama-çıkarma: Paydalar eşitlenir, paylar toplanır ya da çıkarılır.',
        'Çarpma-bölme: Paylar ve paydalar kendi aralarında çarpılır. Bölmede ikinci kesir ters çevrilip çarpılır.',
        'Sıralama: Payları eşit kesirlerde paydası küçük olan büyüktür; paydaları eşit olanlarda payı büyük olan büyüktür.',
        'Ondalık-kesir dönüşümü: 0,25 = 25/100 = 1/4; devirli 0,333… = 1/3.',
        'Ondalık çarpma: Virgül yok sayılarak çarpılır, virgülden sonraki basamak sayıları toplanıp sonuca uygulanır.'
      ],
      sorular: [
        ['(1/2 + 1/3) ÷ 5/6 işleminin sonucu kaçtır?', ['1/2', '5/6', '1', '6/5', '2'], 2, '1/2 + 1/3 = 5/6 → (5/6) ÷ (5/6) = 1'],
        ['0,25 + 0,5 · 0,4 işleminin sonucu kaçtır?', ['0,30', '0,45', '0,50', '0,65', '0,90'], 1, 'Önce çarpma: 0,5 · 0,4 = 0,2 → 0,25 + 0,2 = 0,45'],
        ['a = 3/4, b = 5/7, c = 2/3 sayılarının doğru sıralanışı aşağıdakilerden hangisidir?', ['a < b < c', 'b < c < a', 'c < a < b', 'c < b < a', 'b < a < c'], 3, 'a = 0,75; b ≈ 0,714; c ≈ 0,667 → c < b < a'],
        ['Bir öğrenci harçlığının 1/3\'ünü kitaba, kalanın 1/4\'ünü yemeğe harcamış ve geriye 150 TL kalmıştır. Öğrencinin harçlığı kaç TL\'dir?', ['240', '270', '300', '360', '450'], 2, 'Kitaptan sonra 2/3 kalır; bunun 3/4\'ü kalır → x · 2/3 · 3/4 = x/2 = 150 → x = 300']
      ]
    },
    {
      id: 'uslu', ad: 'Üslü ve Köklü Sayılar',
      ozet: [
        'Üs kuralları: aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐ·ⁿ.',
        'Sıfır ve negatif üs: a⁰ = 1 (a ≠ 0); a⁻ⁿ = 1/aⁿ.',
        'Negatif tabanlar: Çift kuvvet pozitif, tek kuvvet negatiftir: (−2)⁴ = 16, (−2)³ = −8. Dikkat: −2⁴ = −16.',
        'Kök kuralları: √(a·b) = √a · √b; √a · √a = a. Kök dışına çıkarma: √12 = 2√3.',
        'Köklerde toplama: Yalnızca kök içleri aynı olanlar toplanır: 2√3 + 5√3 = 7√3.',
        'Paydayı kökten kurtarma: 1/√a = √a / a.'
      ],
      sorular: [
        ['2⁵ · 4³ ÷ 8² işleminin sonucu kaçtır?', ['8', '16', '32', '64', '128'], 2, '2⁵ · 2⁶ ÷ 2⁶ = 2⁵ = 32'],
        ['(−3)² − 3² + (−1)⁵ işleminin sonucu kaçtır?', ['−19', '−1', '0', '1', '17'], 1, '9 − 9 + (−1) = −1'],
        ['√12 + √27 − √3 işleminin sonucu kaçtır?', ['2√3', '3√3', '4√3', '5√3', '6√3'], 2, '2√3 + 3√3 − √3 = 4√3'],
        ['3ˣ⁺¹ = 81 olduğuna göre x kaçtır?', ['2', '3', '4', '5', '27'], 1, '81 = 3⁴ → x + 1 = 4 → x = 3'],
        ['√0,09 + √0,16 toplamı kaçtır?', ['0,07', '0,25', '0,5', '0,7', '7'], 3, '√0,09 = 0,3; √0,16 = 0,4 → 0,7']
      ]
    },
    {
      id: 'problemler', ad: 'Problemler',
      ozet: [
        'Yaş problemleri: İki kişinin yaş farkı her zaman sabittir. t yıl sonra n kişinin yaşları toplamı n · t artar.',
        'Yüzde: Bir sayının %a\'sı = sayı · a/100. %20 artış için 1,2 ile; %20 indirim için 0,8 ile çarpılır.',
        'Kâr-zarar: Kâr ve zarar yüzdesi her zaman maliyet (alış fiyatı) üzerinden hesaplanır.',
        'İşçi problemleri: Bir işi x günde bitiren kişi bir günde işin 1/x\'ini yapar. Birlikte: 1/x + 1/y = 1/t.',
        'Hareket problemleri: Yol = Hız × Zaman. Karşılıklı harekette zaman = yol / (V₁ + V₂); yetişmede zaman = ara mesafe / (V₁ − V₂).',
        'Ortalama: Aritmetik ortalama = Sayıların toplamı / sayı adedi.'
      ],
      sorular: [
        ['Bir annenin yaşı kızının yaşının 4 katıdır. 5 yıl sonra annenin yaşı kızının yaşının 3 katı olacaktır. Annenin bugünkü yaşı kaçtır?', ['32', '36', '40', '44', '48'], 2, '4k + 5 = 3(k + 5) → k = 10, anne 40 yaşında.'],
        ['Bir işi Ali tek başına 6 günde, Veli tek başına 12 günde bitirebilmektedir. İkisi birlikte bu işi kaç günde bitirir?', ['3', '4', '5', '6', '9'], 1, '1/6 + 1/12 = 3/12 = 1/4 → 4 gün'],
        ['Etiket fiyatı 800 TL olan bir ceket önce %25, ardından indirimli fiyat üzerinden %10 indirimle satılıyor. Son satış fiyatı kaç TL\'dir?', ['520', '560', '540', '580', '600'], 2, '800 · 0,75 = 600 → 600 · 0,90 = 540. (İndirimler toplanmaz: %35 değil!)'],
        ['Bir satıcı 250 TL\'ye aldığı bir malı %20 kârla satıyor. Satış fiyatı kaç TL\'dir?', ['270', '280', '290', '300', '320'], 3, '250 · 1,2 = 300'],
        ['Aralarında 360 km bulunan iki şehirden saatteki hızları 70 km ve 50 km olan iki araç aynı anda birbirine doğru hareket ediyor. Araçlar kaç saat sonra karşılaşır?', ['2', '2,5', '3', '3,5', '4'], 2, '360 / (70 + 50) = 3 saat'],
        ['5 sayının aritmetik ortalaması 18\'dir. Bu sayılara hangi sayı eklenirse yeni ortalama 20 olur?', ['20', '22', '25', '28', '30'], 4, 'Toplam 5 · 18 = 90. Yeni toplam 6 · 20 = 120 → eklenen 30']
      ]
    }
  ]
});
