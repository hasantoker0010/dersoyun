KPSS.ders({
  id: 'turkce', ad: 'Türkçe', bolum: 'gy', renk: '#E4572E', simge: 'Aa',
  konular: [
    {
      id: 'ses', ad: 'Ses Bilgisi',
      ozet: [
        'Büyük ünlü uyumu: Türkçe kökenli sözcüklerde kalın ünlüden (a, ı, o, u) sonra kalın, ince ünlüden (e, i, ö, ü) sonra ince ünlü gelir. -ki, -ken, -yor, -leyin, -gil ekleri bu uyuma girmez.',
        'Küçük ünlü uyumu: Düz ünlüden sonra düz ünlü; yuvarlak ünlüden sonra dar yuvarlak (u, ü) ya da düz-geniş (a, e) ünlü gelir.',
        'Ünsüz yumuşaması: p, ç, t, k ile biten çok heceli sözcükler ünlüyle başlayan ek alınca b, c, d, g/ğ olur (kitap → kitabı, ağaç → ağacı). Tek heceliler genelde yumuşamaz (top → topu).',
        'Ünsüz benzeşmesi: f, s, t, k, ç, ş, h, p ("FıSTıKÇı ŞaHaP") ile biten sözcüklere c, d, g ile başlayan ek gelince ç, t, k olur (kitapçı, sokakta).',
        'Ünlü düşmesi: İkinci hecesinde dar ünlü bulunan bazı sözcükler ünlüyle başlayan ek alınca bu ünlüyü kaybeder (ağız → ağzı, burun → burnu, oğul → oğlu).',
        'Ünlü daralması: a, e ile biten fiiller -yor eki alınca a/e dar ünlüye dönüşür (başla → başlıyor, bekle → bekliyor).'
      ],
      sorular: [
        ['Aşağıdaki sözcüklerden hangisi büyük ünlü uyumuna uyar?', ['Kardeş', 'Elma', 'Kitap', 'Kalem', 'Toprak'], 4, '"Toprak" sözcüğünde yalnızca kalın ünlüler (o, a) vardır. Diğerlerinde kalın ve ince ünlüler bir aradadır.'],
        ['Aşağıdaki sözcüklerin hangisinde ünsüz yumuşaması vardır?', ['Topu', 'Ağacı', 'Saçı', 'Atı', 'Kitapçı'], 1, 'ağaç + ı → ağacı: ç, c\'ye dönüşmüştür. Top, saç, at tek hecelidir ve yumuşamaz.'],
        ['Aşağıdaki cümlelerin hangisinde ünlü düşmesine uğramış bir sözcük vardır?', ['Çocuğun ağzı yüzü çikolata olmuştu.', 'Bahçedeki ağaçlar çiçek açtı.', 'Yarın erkenden yola çıkacağız.', 'Sınav sonuçları dün açıklandı.', 'Kardeşim kitabını okulda unutmuş.'], 0, 'ağız + ı → ağzı: ikinci hecedeki "ı" düşmüştür.'],
        ['Aşağıdaki sözcüklerin hangisinde ünsüz benzeşmesi (sertleşme) vardır?', ['Kitaplık', 'Yolda', 'Sokakta', 'Evde', 'Okulda'], 2, 'sokak + da → sokakta: "k" sert ünsüzünden sonra gelen "d", "t" olmuştur.'],
        ['Aşağıdaki cümlelerin hangisinde ünlü daralması vardır?', ['Annem her sabah erkenden kalkar.', 'Kardeşim şimdi beni bekliyor.', 'Yarın sinemaya gideceğiz.', 'Dün akşam kitap okudum.', 'Bu konuyu iyi anlamalısın.'], 1, 'bekle + yor → bekliyor: "e" ünlüsü "i"ye daralmıştır.']
      ]
    },
    {
      id: 'sozcuk', ad: 'Sözcükte Anlam',
      ozet: [
        'Gerçek anlam: Sözcüğün akla gelen ilk ve temel anlamıdır (Elini yıka.).',
        'Yan anlam: Temel anlamla bağını koruyan yeni anlamdır (masanın ayağı, çantanın gözü).',
        'Mecaz anlam: Sözcüğün gerçek anlamından tamamen uzaklaşmasıdır (soğuk insan, ağır söz).',
        'Terim anlam: Bir bilim, sanat ya da meslek alanına özgü anlamdır (üçgenin açısı, tiyatroda perde).',
        'Eş sesli sözcükler: Yazılışı aynı, anlamı farklı sözcüklerdir (yüz: surat / sayı / yüzmek eylemi).',
        'Deyim: Genellikle mecaz anlamlı, kalıplaşmış söz grubudur. Atasözü ise öğüt veren, kalıplaşmış özlü sözdür.'
      ],
      sorular: [
        ['"Göz" sözcüğü aşağıdakilerin hangisinde yan anlamda kullanılmıştır?', ['Gözlerinin rengi annesine benziyor.', 'Çantanın ön gözüne anahtarı koydum.', 'Gözü yükseklerde, hiçbir işi beğenmiyor.', 'Göz doktoruna yarın gideceğim.', 'Bu işte onun gözü var.'], 1, 'Çantanın gözü "bölme" anlamındadır ve organ anlamıyla benzerlik ilişkisi korunur: yan anlam. C ve E\'de deyim/mecaz vardır.'],
        ['Aşağıdaki cümlelerin hangisinde tırnak içindeki sözcük mecaz anlamda kullanılmıştır?', ['Kışın "soğuk" havalarda dışarı çıkmıyoruz.', 'Bu "ağır" sözleri hak etmemiştim.', '"Ağır" bavulu tek başıma taşıyamadım.', 'Çayın "sıcak" olmasını severim.', 'Bahçedeki "uzun" ağaçlar budandı.'], 1, '"Ağır söz" kırıcı, incitici söz demektir; ağırlık ölçüsüyle ilgisi yoktur.'],
        ['Aşağıdaki cümlelerin hangisinde tırnak içindeki sözcük terim anlamıyla kullanılmıştır?', ['Bu konuda bize yeni bir "açı" kazandırdı.', 'Olaylara farklı bir "açı"dan bakmalısın.', 'Aramızdaki "mesafe" giderek artıyor.', 'Üçgenin iç "açı"larının toplamı 180 derecedir.', 'Tartışmada sesinin "perde"sini yükseltme.'], 3, 'Geometrideki "açı" matematik terimidir.'],
        ['Aşağıdaki cümlelerin hangisinde deyim kullanılmamıştır?', ['Bu haberi duyunca küplere bindi.', 'Sınavı kazanınca etekleri zil çaldı.', 'Sabah erkenden kalkıp yürüyüşe çıktı.', 'Onun bu sözleri tüylerimi diken diken etti.', 'İşini bitirince kendini dışarı attı.'], 2, 'C\'deki sözcükler gerçek anlamlarıyla kullanılmıştır. Diğerlerinde "küplere binmek, etekleri zil çalmak, tüyleri diken diken olmak, kendini dışarı atmak" deyimleri var.'],
        ['"Yüz" sözcüğü aşağıdakilerin hangisinde diğerlerinden farklı anlamda kullanılmıştır?', ['Yüzünü yıkayıp kahvaltıya indi.', 'Güler yüzlü bir öğretmendi.', 'Kitabın yüz sayfasını bir günde okudu.', 'Yüzünde tatlı bir gülümseme vardı.', 'Yüzüne bakmaya utandı.'], 2, 'C\'de "yüz" sayı bildirir; diğerlerinde surat, çehre anlamındadır.']
      ]
    },
    {
      id: 'cumle', ad: 'Cümlede Anlam',
      ozet: [
        'Neden-sonuç: Yargı bir nedene bağlanır (Yağmur yağdığı için maç ertelendi.).',
        'Amaç-sonuç: Eylem bir amaca ulaşmak için yapılır (Kilo vermek için yürüyor.). "için" yerine "amacıyla" getirilebiliyorsa amaç-sonuç vardır.',
        'Koşul (şart): Yargının gerçekleşmesi bir koşula bağlıdır (Çalışırsan başarırsın.).',
        'Öznel yargı: Kişiden kişiye değişir, kanıtlanamaz. Nesnel yargı: Doğruluğu kanıtlanabilir (Ankara Türkiye\'nin başkentidir.).',
        'Karşılaştırma: İki varlık ya da durum arasındaki benzerlik veya farklılığı anlatır (daha, en, kadar, gibi).',
        'Üslup ve içerik: Üslup yazarın dili kullanış biçimi (yalın, akıcı, süslü anlatım); içerik ise eserde anlatılan konudur.'
      ],
      sorular: [
        ['Aşağıdaki cümlelerin hangisinde amaç-sonuç ilişkisi vardır?', ['Yollar buzlu olduğu için okullar tatil edildi.', 'Hasta olduğundan işe gidemedi.', 'Erken uyandığı için yorgun hissediyordu.', 'Kilo vermek için her gün yürüyüş yapıyor.', 'Çok çalıştığı için başarılı oldu.'], 3, '"Kilo vermek amacıyla" denebilir. Diğerlerinde "için / -dığından" neden bildirir.'],
        ['Aşağıdaki cümlelerden hangisi nesnel bir yargı içerir?', ['Bu kitabın kapağı çok zevksiz tasarlanmış.', 'Yazarın son romanı ilkinden daha sürükleyici.', 'Türkiye\'nin en yüksek dağı Ağrı Dağı\'dır.', 'Bu şehrin havası insana huzur veriyor.', 'Filmin sonu herkesi derinden etkileyecek.'], 2, 'Ağrı Dağı\'nın en yüksek dağ olduğu ölçülerek kanıtlanabilir; diğerleri kişisel görüştür.'],
        ['Aşağıdaki cümlelerin hangisinde koşul anlamı vardır?', ['Ödevlerini bitirirsen parka gidebilirsin.', 'Kitabı okuyup arkadaşına verdi.', 'Akşam olunca sokak lambaları yandı.', 'Yorgun olduğu için erken yattı.', 'Sabah kalkar kalkmaz pencereyi açtı.'], 0, '"-se/-sa" eki parka gitmeyi ödevin bitmesi koşuluna bağlamıştır.'],
        ['"Bu romanda yazar, kısa ve yalın cümleler kurmuş; okuru yormayan akıcı bir anlatım tercih etmiştir."\nBu cümlede romanla ilgili olarak aşağıdakilerin hangisinden söz edilmiştir?', ['Konusundan', 'Kahramanlarından', 'Üslubundan', 'Olay örgüsünden', 'Mekânından'], 2, 'Yalın cümleler ve akıcı anlatım, yazarın dili kullanış biçimi yani üslupla ilgilidir.']
      ]
    },
    {
      id: 'paragraf', ad: 'Paragrafta Anlam',
      ozet: [
        'Ana düşünce: Yazarın okura vermek istediği temel mesajdır; çoğunlukla paragrafın başında ya da sonunda yer alır.',
        'Yardımcı düşünceler: Ana düşünceyi destekleyen, açıklayan ayrıntılardır.',
        'Konu: Paragrafta üzerinde durulan genel durumdur ("Ne anlatılıyor?" sorusunun cevabı).',
        'Çıkarılamaz soruları: Yalnızca metinde açıkça ya da dolaylı olarak bulunan bilgiler doğru kabul edilir; kendi bilgini katma.',
        'Anlatım biçimleri: Açıklama bilgi verir, tartışma okuru ikna etmeye çalışır, öyküleme olay anlatır, betimleme zihinde resim çizer.',
        'Düşünceyi geliştirme yolları: Tanımlama, örneklendirme, karşılaştırma, tanık gösterme, sayısal verilerden yararlanma.'
      ],
      sorular: [
        ['Kitap okumak yalnızca bilgi edinmenin değil, düşünme becerisini geliştirmenin de en etkili yollarından biridir. Okur, satırlar arasında gezinirken olaylar arasında bağlantı kurar, karakterlerin kararlarını tartar ve kendi yargılarını oluşturur. Bu süreç, zamanla daha eleştirel ve sorgulayıcı bir zihin yapısı kazandırır.\nBu paragrafın ana düşüncesi aşağıdakilerden hangisidir?', ['Kitap okumak düşünme becerisini geliştirir.', 'Kitaplar yalnızca bilgi kaynağıdır.', 'Romanlardaki karakterler gerçek hayattan alınır.', 'Okurlar kitap seçerken dikkatli olmalıdır.', 'Eleştirel düşünce yalnızca eğitimle kazanılır.'], 0, 'Paragrafın tamamı okumanın düşünme ve eleştirel bakışa katkısını anlatıyor. İlk cümle ana düşünceyi veriyor.'],
        ['Sabahın ilk ışıkları, sisle örtülü vadinin üzerine usulca yayılıyordu. Çam ağaçlarının yeşili, gökyüzünün pembemsi tonlarıyla birleşmiş; derenin şırıltısı kuş seslerine karışmıştı.\nBu parçada ağırlıklı olarak hangi anlatım biçimi kullanılmıştır?', ['Tartışma', 'Betimleme', 'Açıklama', 'Öyküleme', 'Karşılaştırma'], 1, 'Renk, ses ve görüntü ayrıntılarıyla okurun zihninde bir tablo çiziliyor: betimleme.'],
        ['Bir dilin zenginliği, sahip olduğu sözcük sayısından çok o sözcüklerin ne kadar canlı kullanıldığıyla ölçülür. Sözlüklerde yer alıp günlük hayatta hiç kullanılmayan binlerce sözcük dili zenginleştirmez, yalnızca kalabalıklaştırır. Asıl zenginlik, konuşanların duygu ve düşüncelerini ince ayrımlarla ifade edebilmesidir.\nBu parçadan aşağıdakilerin hangisi çıkarılamaz?', ['Sözcük sayısı tek başına dilin zenginliğini göstermez.', 'Kullanılmayan sözcükler dile katkı sağlamaz.', 'Dilin zenginliği ifade gücüyle ilgilidir.', 'Sözlüklerdeki sözcüklerin çoğu yabancı kökenlidir.', 'Canlı kullanım, dilin zenginliğinde belirleyicidir.'], 3, 'Parçada sözcüklerin kökeninden hiç söz edilmiyor.']
      ]
    },
    {
      id: 'yazim', ad: 'Yazım Kuralları',
      ozet: [
        '"de/da" bağlacı: Her zaman ayrı yazılır ve sertleşmez (Sen de gel. Kitap da aldım.). Bulunma eki "-de/-da/-te/-ta" ise bitişik yazılır (evde, sokakta).',
        '"ki" bağlacı: Ayrı yazılır (Duydum ki…). Sıfat yapan "-ki" (evdeki) ve zamir olan "-ki" (seninki) bitişik yazılır. Kalıplaşmışlar: sanki, belki, mademki, oysaki, hâlbuki, çünkü.',
        'Soru eki "mı/mi": Her zaman ayrı yazılır, kendinden önceki sözcüğe uyar (Geldi mi? Okul mu?).',
        'Sayılar: Ayrı yazılır (on beş, yüz yirmi, iki bin). Para ve çek gibi belgelerde güvenlik için bitişik yazılabilir.',
        'Bitişik ve ayrı yazılanlar: "hiçbir, birçok, birkaç, herhangi" bitişik; "her şey, bir şey, pek çok, her biri" ayrı yazılır.',
        'Büyük harf: Yön adları özel ada dâhilse büyük (Doğu Karadeniz), değilse küçük harfle yazılır (kuzeyden esen rüzgâr).'
      ],
      sorular: [
        ['Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?', ['Bu akşam biz de size geleceğiz.', 'Kitapta ki resimler çok güzeldi.', 'Ne zaman geleceğini bilmiyor muydun?', 'Hiçbir şey söylemeden çıktı.', 'Bu yaz birkaç kitap okudum.'], 1, 'Sıfat yapan "-ki" bitişik yazılır: "Kitaptaki resimler".'],
        ['Aşağıdaki cümlelerin hangisinde "de"nin yazımıyla ilgili bir yanlışlık yapılmıştır?', ['Kardeşim de bizimle gelecek.', 'Okulda yeni bir kütüphane açıldı.', 'Ben de bu filmi izledim.', 'Ankara\'da iki gün kaldık.', 'Seni de bekledik ama sende gelmedin.'], 4, 'Bağlaç olan "de" ayrı yazılır: "sen de gelmedin".'],
        ['Aşağıdaki cümlelerin hangisinde sayının yazımı doğrudur?', ['Toplantıya onbeş kişi katıldı.', 'Kitap yüzyirmi sayfadan oluşuyor.', 'Bu yıl otuz iki öğrenci mezun oldu.', 'Yarışmada ikibin kişi yarıştı.', 'Saat sekizbuçukta buluşalım.'], 2, 'Sayılar ayrı yazılır: on beş, yüz yirmi, otuz iki, iki bin, sekiz buçuk.'],
        ['Aşağıdaki cümlelerin hangisinde büyük harflerin kullanımıyla ilgili bir yanlışlık vardır?', ['Rüzgâr Kuzeyden esiyordu.', 'Tatilde Doğu Karadeniz\'i gezdik.', 'Ahmet Bey dün İzmir\'e gitti.', 'Türk Dil Kurumu yeni sözlüğü yayımladı.', 'Cumhuriyet 29 Ekim 1923\'te ilan edildi.'], 0, 'Yön adı özel ada dâhil değilse küçük harfle yazılır: "kuzeyden".']
      ]
    },
    {
      id: 'noktalama', ad: 'Noktalama İşaretleri',
      ozet: [
        'Nokta: Tamamlanmış cümlelerin, kısaltmaların (Prof., vb.) sonuna ve sıra bildiren rakamlardan sonra (3. sınıf) konur.',
        'Virgül: Eş görevli sözcükleri ve sıralı cümleleri ayırır; "ve, ile, veya" bağlaçlarından önce kullanılmaz.',
        'Noktalı virgül: Ögeleri arasında virgül bulunan sıralı cümleleri ya da tür veya takımları ayırmak için kullanılır.',
        'İki nokta: Kendisinden sonra örnek verilecek veya açıklama yapılacak cümlenin sonuna, alıntıdan önce konur.',
        'Üç nokta: Tamamlanmamış cümlelerin sonuna ve söylenmesi istenmeyen sözlerin yerine konur.',
        'Ünlem ve soru işareti: Ünlem sevinç, korku, şaşırma gibi duyguları; soru işareti soru bildiren cümlelerin sonunda kullanılır.'
      ],
      sorular: [
        ['Pazardan elma, armut, portakal ( ) sebze bölümünden de domates, biber, patlıcan aldık.\nAyraçla belirtilen yere aşağıdaki noktalama işaretlerinden hangisi getirilmelidir?', ['Virgül', 'Noktalı virgül', 'İki nokta', 'Üç nokta', 'Nokta'], 1, 'Kendi içinde virgülle ayrılmış öge grupları noktalı virgülle ayrılır.'],
        ['Annem her zaman şunu söylerdi ( ) "Emek olmadan yemek olmaz."\nAyraçla belirtilen yere hangi noktalama işareti getirilmelidir?', ['Nokta', 'Virgül', 'Üç nokta', 'İki nokta', 'Noktalı virgül'], 3, 'Ardından açıklama ya da alıntı gelecek cümleden sonra iki nokta konur.'],
        ['Aşağıdaki cümlelerin hangisinde virgül yanlış kullanılmıştır?', ['Ali, Ayşe ve Mehmet sınıfa geldi.', 'Kitabı okudum, çok beğendim.', 'Ah, ne güzel bir gün!', 'Bu, benim en sevdiğim şarkı.', 'Sabah erkenden kalktı, ve işe gitti.'], 4, '"ve" bağlacından önce virgül kullanılmaz.'],
        ['Aşağıdaki cümlelerin hangisinin sonuna üç nokta konmalıdır?', ['Ne kadar da güzel bir manzara', 'Yarın okula gelecek misin', 'Ben de sana tam bunu söyleyecektim ama', 'Türkiye\'nin başkenti Ankara\'dır', 'Bu kitabı ne zaman bitirdin'], 2, 'C\'deki cümle "ama" ile yarım kalmıştır; tamamlanmamış cümlenin sonuna üç nokta konur.']
      ]
    },
    {
      id: 'ogeler', ad: 'Cümlenin Ögeleri',
      ozet: [
        'Yüklem: İş, oluş, hareket ya da yargı bildiren temel ögedir; yüklemsiz cümle olmaz.',
        'Özne: Yüklemin bildirdiği işi yapan ya da yargıya konu olan ögedir; yükleme "kim / ne" sorusu sorularak bulunur.',
        'Nesne: Öznenin yaptığı işten etkilenen ögedir. Belirtili nesne "neyi / kimi", belirtisiz nesne "ne" sorusuyla bulunur.',
        'Dolaylı tümleç: "-e, -de, -den" hâl eklerini alır; "nereye, nerede, nereden, kime, kimden" sorularına cevap verir.',
        'Zarf tümleci: Yüklemi zaman, durum, miktar, yön bakımından tamamlar; "ne zaman, nasıl, ne kadar" sorularına cevap verir.',
        'Öge bulma sırası: Önce yüklem bulunur, ardından sorular yükleme sorularak diğer ögeler belirlenir; tamlamalar bölünmez.'
      ],
      sorular: [
        ['"Dün akşam babam bahçedeki ağaçları budadı." cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?', ['Zarf tümleci – Özne – Belirtili nesne – Yüklem', 'Özne – Zarf tümleci – Dolaylı tümleç – Yüklem', 'Zarf tümleci – Özne – Dolaylı tümleç – Yüklem', 'Özne – Belirtili nesne – Zarf tümleci – Yüklem', 'Zarf tümleci – Belirtisiz nesne – Özne – Yüklem'], 0, 'Ne zaman? Dün akşam (ZT). Kim budadı? babam (Ö). Neyi? bahçedeki ağaçları (BN). budadı (Y).'],
        ['Aşağıdaki cümlelerin hangisinde dolaylı tümleç vardır?', ['Sabah erkenden kalktı.', 'Kardeşim kitabını okudu.', 'Arkadaşlarım yarın İstanbul\'a gidecek.', 'Güzel bir şarkı söyledi.', 'Çocuklar neşeyle oynuyordu.'], 2, 'Nereye gidecek? İstanbul\'a: yönelme eki almış dolaylı tümleç.'],
        ['Aşağıdaki cümlelerin hangisinde belirtisiz nesne vardır?', ['Kapıyı yavaşça kapattı.', 'Mektubu postaya verdi.', 'Bu sorunu çözemedik.', 'Annem pazardan meyve aldı.', 'Onu parkta gördüm.'], 3, 'Ne aldı? meyve: hâl eki almamış, belirtisiz nesne. Diğerleri "-ı/-u" almış belirtili nesnedir.'],
        ['"Kırmızı kazaklı küçük kız, annesinin elini sıkıca tutuyordu." cümlesinin öznesi aşağıdakilerden hangisidir?', ['Kız', 'Küçük kız', 'Annesinin elini', 'Sıkıca', 'Kırmızı kazaklı küçük kız'], 4, 'Sıfat tamlaması bölünmez: Kim tutuyordu? Kırmızı kazaklı küçük kız.']
      ]
    }
  ]
});
