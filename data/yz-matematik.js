(window.DERSLER = window.DERSLER || {})["yz-matematik"] = {
 "ad": "Yapay Zekâ için Matematik",
 "kisa": "YZ Matematik",
 "simge": "ƒ(x)",
 "renk": "#FF5C8A",
 "uniteler": {
  "1": "Sayılar ve Veri Gösterimi",
  "2": "Mantık, Kümeler ve Bağıntılar",
  "3": "Fonksiyonlar",
  "4": "Vektörler ve Lineer Cebir"
 },
 "sorular": [
  {
   "soru": "Bir veri kümesindeki “renk” değişkeni kırmızı, yeşil ve mavi kategorilerinden oluşmaktadır. Bu değişken sırasıyla (kırmızı, yeşil, mavi) düzenine göre bire-bir kodlama ile sayısallaştırıldığında “yeşil” kategorisinin kodu aşağıdakilerden hangisidir?",
   "sec": [
    "(0, 0, 1)",
    "(0, 1, 0)",
    "(1, 0, 0)",
    "(0, 2, 0)",
    "(1, 1, 0)"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v1-01",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 1",
   "aciklama": "Bire-bir (one-hot) kodlamada her kategoriye bir bit düşer. Sıra (kırmızı, yeşil, mavi) ise yeşil → (0, 1, 0)."
  },
  {
   "soru": "−2 ve 5 sayılarını içermeyen ancak bu iki sayı arasındaki tüm reel sayıları içeren aralık aşağıdakilerden hangisidir?",
   "sec": [
    "[−2, 5)",
    "{−1, 0, 1, 2, 3, 4}",
    "(−2, 5]",
    "[−2, 5]",
    "(−2, 5)"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v1-02",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 2"
  },
  {
   "soru": "27^(2/3) · 2⁻² işleminin sonucu kaçtır?",
   "sec": [
    "4/9",
    "9/4",
    "9/2",
    "6",
    "18"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v1-03",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 3"
  },
  {
   "soru": "3 200 000 sayısının bilimsel gösterimi aşağıdakilerden hangisidir?",
   "sec": [
    "3,2 × 10⁶",
    "0,32 × 10⁷",
    "3,2 × 10⁻⁶",
    "32 × 10⁵",
    "3,2 × 10⁵"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v1-04",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 4"
  },
  {
   "soru": "Bir yapay zekâ modelinin başarısı yalnızca eğitim verisindeki sonuçlarına değil, daha önce görmediği veriler üzerindeki ------ de bağlıdır. Yukarıdaki boşluğa aşağıdakilerden hangisi getirilmelidir?",
   "sec": [
    "donanım hızına",
    "parametre sayısına",
    "eğitim süresine",
    "veri miktarına",
    "genelleme yeteneğine"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v1-05",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 5"
  },
  {
   "soru": "p, q ve r önermelerinin doğruluk değerleri sırasıyla p ≡ 1, q ≡ 0 ve r ≡ 1’dir. Buna göre aşağıdaki bileşik önermelerden hangisinin doğruluk değeri 0’dır?",
   "sec": [
    "p′ ⇒ q",
    "q ⇒ r",
    "p ⊻ q",
    "p ∨ q",
    "(p ⇒ q) ∨ (q ⇔ r)"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v1-06",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 6"
  },
  {
   "soru": "p ⇒ q koşullu önermesi ile her durumda aynı doğruluk değerini taşıyan önerme aşağıdakilerden hangisidir?",
   "sec": [
    "p′ ∧ q",
    "q′ ⇒ p′",
    "p ∧ q′",
    "p′ ⇒ q′",
    "q ⇒ p"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v1-07",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 7",
   "aciklama": "Bir koşullu önerme kontrapozitifiyle denktir: p ⇒ q ≡ q′ ⇒ p′. q ⇒ p (karşıtı) ve p′ ⇒ q′ (tersi) ile denk değildir."
  },
  {
   "soru": "A = {a, b, c, d} kümesinin öz alt kümelerinin sayısı kaçtır?",
   "sec": [
    "4",
    "8",
    "15",
    "16",
    "24"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v1-08",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 8",
   "aciklama": "n elemanlı kümenin 2ⁿ alt kümesi vardır; kümenin kendisi hariç öz alt küme sayısı 2ⁿ − 1'dir. 2⁴ − 1 = 15."
  },
  {
   "soru": "A ve B sonlu kümeleri için s(A) = 15, s(B) = 11 ve s(A ∪ B) = 20 olduğuna göre s(A ∩ B) kaçtır?",
   "sec": [
    "4",
    "5",
    "6",
    "9",
    "26"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v1-09",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 9"
  },
  {
   "soru": "Bir küme üzerinde tanımlı olup yansıma, simetri ve geçişme özelliklerini birlikte taşıyan bağıntıya ne ad verilir?",
   "sec": [
    "Tam sıralama bağıntısı",
    "Ters bağıntı",
    "Sıralama bağıntısı",
    "Denklik bağıntısı",
    "Kısmi sıralama bağıntısı"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v1-10",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 10"
  },
  {
   "soru": "f(x) = 2x − 3 ve g(x) = x² fonksiyonları veriliyor. Buna göre (f ∘ g)(2) değeri kaçtır?",
   "sec": [
    "−1",
    "1",
    "4",
    "5",
    "7"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v1-11",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 11",
   "aciklama": "(f ∘ g)(2) = f(g(2)) = f(4) = 2·4 − 3 = 5."
  },
  {
   "soru": "f(x) = (3x + 1) / 2 fonksiyonu birebir ve örten olduğuna göre f⁻¹(5) değeri kaçtır?",
   "sec": [
    "2",
    "8",
    "1/3",
    "7",
    "3"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v1-12",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 12"
  },
  {
   "soru": "Bir ürünün üretiminde sabit maliyet 1200 TL, birim maliyet 15 TL ve birim satış fiyatı 35 TL’dir. Buna göre başabaş noktasına ulaşmak için kaç adet ürün satılmalıdır?",
   "sec": [
    "24",
    "34",
    "60",
    "80",
    "120"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v1-13",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 13",
   "aciklama": "Birim kâr 35 − 15 = 20 TL. Başabaş noktası: 1200 / 20 = 60 adet."
  },
  {
   "soru": "log₂(x − 1) = 3 denkleminin çözüm kümesi aşağıdakilerden hangisidir?",
   "sec": [
    "{4}",
    "{8}",
    "{10}",
    "{9}",
    "{7}"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v1-14",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 14"
  },
  {
   "soru": "Aşağıdaki fonksiyonlardan hangisi tek fonksiyondur?",
   "sec": [
    "f(x) = x² + x",
    "f(x) = x³ − x",
    "f(x) = x⁴ + 1",
    "f(x) = |x|",
    "f(x) = x²"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v1-15",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 15"
  },
  {
   "soru": "u = (2, −1, 3) ve v = (1, 4, −2) vektörleri için 3u − v vektörü aşağıdakilerden hangisidir?",
   "sec": [
    "(5, 1, 7)",
    "(6, −3, 9)",
    "(7, 1, 11)",
    "(5, −7, 11)",
    "(5, −7, 7)"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v1-16",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 16"
  },
  {
   "soru": "u = (2, −1, 3) ve v = (1, 4, −2) vektörlerinin iç çarpımı u · v kaçtır?",
   "sec": [
    "−8",
    "−4",
    "0",
    "4",
    "8"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v1-17",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 17",
   "aciklama": "u · v = 2·1 + (−1)·4 + 3·(−2) = 2 − 4 − 6 = −8."
  },
  {
   "soru": "a = (6, 8) vektörü normalleştirildiğinde elde edilen birim vektör aşağıdakilerden hangisidir?",
   "sec": [
    "(0,6; 0,8)",
    "(0,3; 0,4)",
    "(0,5; 0,5)",
    "(0,8; 0,6)",
    "(3; 4)"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v1-18",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 18"
  },
  {
   "soru": "(3, k) ve (6, 8) vektörlerinin lineer bağımlı olması için k kaç olmalıdır?",
   "sec": [
    "2",
    "3",
    "4",
    "6",
    "16"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v1-19",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 19",
   "aciklama": "Lineer bağımlı iki vektör orantılıdır. (6, 8) = 2·(3, 4) olduğundan k = 4."
  },
  {
   "soru": "Germe, baz ve boyut kavramları ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "Bir uzayın boyutu, o uzayın bir bazındaki vektör sayısına eşittir.",
    "Bir kümenin baz olabilmesi için yalnızca uzayı germesi yeterlidir.",
    "Sıfırdan farklı tek bir vektör bir düzlemi gerer.",
    "Bir vektör bir baza göre birden fazla farklı biçimde yazılabilir.",
    "Lineer bağımlı vektörlerden oluşan bir küme baz olabilir."
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v1-20",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 20"
  },
  {
   "soru": "|3 − 7| + |−2| · |5 − 9| işleminin sonucu kaçtır?",
   "sec": [
    "−4",
    "4",
    "8",
    "12",
    "24"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v2-01",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 1"
  },
  {
   "soru": "Aşağıdaki sayılardan hangisi irrasyonel sayıdır?",
   "sec": [
    "3/7",
    "√2",
    "0,25",
    "−5",
    "√16"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v2-02",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 2"
  },
  {
   "soru": "√50 + √18 − √8 işleminin sonucu aşağıdakilerden hangisidir?",
   "sec": [
    "8√2",
    "6√2",
    "√60",
    "2√15",
    "4√2"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v2-03",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 3"
  },
  {
   "soru": "Yapay zekâda tek bir gözleme ait özellikleri bir araya getiren vektörler, çok sayıda gözlem için alt alta yerleştirildiğinde elde edilen yapıya ne ad verilir?",
   "sec": [
    "Matris",
    "Küme",
    "Bağıntı",
    "Skaler",
    "Aralık"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v2-04",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 4"
  },
  {
   "soru": "Yapay zekâ modellerinde tahmin ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "Bir e-postanın istenmeyen ileti olarak sınıflandırılması ayrık bir tahmindir.",
    "Model, tahmin üretirken yeni gözleme ait girdi değişkenlerini kullanmaz.",
    "Tahmin aşaması model eğitiminden önce gerçekleştirilir.",
    "Bir öğrencinin sınav puanının hesaplanması ayrık bir tahmindir.",
    "Tahmin, modelin yalnızca eğitim verisindeki gözlemler için ürettiği çıktıdır."
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v2-05",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 5"
  },
  {
   "soru": "Aşağıdaki bileşik önermelerden hangisi bir totolojidir?",
   "sec": [
    "p ⇒ p′",
    "p ∧ q",
    "p ∧ p′",
    "p ⇔ p′",
    "p ∨ p′"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v2-06",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 6"
  },
  {
   "soru": "Aşağıdakilerden hangisi A × B kartezyen çarpım kümesinin elemanı değildir?",
   "sec": [
    "(b, 2)",
    "(3, a)",
    "(3, b)",
    "(2, b)",
    "(1, a)"
   ],
   "dogru": 0,
   "kod": "A = {1, 2, 3} ve B = {a, b} kümeleri veriliyor.",
   "tip": "mcq",
   "id": "mat-v2-07",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 7"
  },
  {
   "soru": "A = {1, 2, 3, 4, 5} ve B = {2, 4, 6} kümeleri için A ∖ B (A fark B) kümesi aşağıdakilerden hangisidir?",
   "sec": [
    "{1, 3, 5}",
    "{1, 3, 5, 6}",
    "{1, 2, 3, 4, 5, 6}",
    "{6}",
    "{2, 4}"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v2-08",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 8"
  },
  {
   "soru": "A = {1, 2, 3} kümesi üzerinde tanımlanan aşağıdaki bağıntılardan hangisi yansıma özelliğine sahiptir?",
   "sec": [
    "{(1, 1), (2, 2), (1, 3)}",
    "{(2, 2), (3, 3), (1, 2), (2, 1)}",
    "{(1, 1), (3, 3), (2, 1)}",
    "{(1, 2), (2, 3), (3, 1)}",
    "{(1, 1), (2, 2), (3, 3), (1, 2)}"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v2-09",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 9"
  },
  {
   "soru": "A = {1, 2, 3} kümesi üzerinde tanımlanan β = {(x, y) : x ≤ y} bağıntısının eleman sayısı kaçtır?",
   "sec": [
    "3",
    "4",
    "6",
    "8",
    "9"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v2-10",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 10"
  },
  {
   "soru": "A(2, 5) ve B(6, −3) noktalarından geçen doğrunun eğimi kaçtır?",
   "sec": [
    "−4",
    "−2",
    "−1/2",
    "1/2",
    "2"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v2-11",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 11"
  },
  {
   "soru": "x ile y doğru orantılıdır. x = 4 iken y = 10 olduğuna göre x = 10 iken y kaçtır?",
   "sec": [
    "4",
    "16",
    "20",
    "25",
    "40"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v2-12",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 12"
  },
  {
   "soru": "f(x) = 3 · 2^(x) üstel fonksiyonu için f(4) değeri kaçtır?",
   "sec": [
    "12",
    "24",
    "48",
    "81",
    "96"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v2-13",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 13"
  },
  {
   "soru": "f(x) = x² − 4x + 3 fonksiyonunun grafiğinin x eksenini kestiği noktaların apsisleri aşağıdakilerden hangisidir?",
   "sec": [
    "2 ve 3",
    "−1 ve 3",
    "−1 ve −3",
    "0 ve 4",
    "1 ve 3"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v2-14",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 14"
  },
  {
   "soru": "y = −2x + 6 doğrusal fonksiyonunun grafiğinin x eksenini kestiği nokta aşağıdakilerden hangisidir?",
   "sec": [
    "(0, 3)",
    "(3, 0)",
    "(0, 6)",
    "(6, 0)",
    "(−3, 0)"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v2-15",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 15"
  },
  {
   "soru": "(a + 1, 4) ve (5, b − 2) vektörleri eşit olduğuna göre a + b toplamı kaçtır?",
   "sec": [
    "6",
    "8",
    "9",
    "10",
    "12"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v2-16",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 16"
  },
  {
   "soru": "u = (2, −3, 6) vektörünün normu (uzunluğu) kaçtır?",
   "sec": [
    "5",
    "√11",
    "49",
    "11",
    "7"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v2-17",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 17"
  },
  {
   "soru": "P(1, 2) ve Q(7, 10) noktalarını temsil eden vektörler arasındaki Manhattan uzaklığı kaçtır?",
   "sec": [
    "2",
    "8",
    "10",
    "14",
    "48"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v2-18",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 18"
  },
  {
   "soru": "u = (2, k) ve v = (3, −6) vektörleri birbirine dik (ortogonal) olduğuna göre k kaçtır?",
   "sec": [
    "−4",
    "−1",
    "1",
    "2",
    "4"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v2-19",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 19"
  },
  {
   "soru": "u = (1, 2, 2) ve v = (2, 1, 2) vektörleri arasındaki kosinüs benzerliği kaçtır?",
   "sec": [
    "4/9",
    "2/3",
    "8/9",
    "1",
    "9/8"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v2-20",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 20"
  },
  {
   "soru": "Sesin sayısal hâle getirilmesinde genlik değerlerinin belirli sayıdaki düzeylerden birine yuvarlanması işlemine ne ad verilir?",
   "sec": [
    "Nicemleme",
    "Kodlama",
    "Normalleştirme",
    "Örnekleme",
    "Pikselleme"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v3-01",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 1"
  },
  {
   "soru": "Aşağıdaki sayılardan hangisi tam sayılar kümesinin (ℤ) elemanı olduğu hâlde ℕ₀ = {0, 1, 2, 3, …} kümesinin elemanı değildir?",
   "sec": [
    "7",
    "0",
    "√9",
    "3/4",
    "−4"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v3-02",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 2"
  },
  {
   "soru": "√((−6)²) − √(4²) işleminin sonucu kaçtır?",
   "sec": [
    "−10",
    "−2",
    "0",
    "2",
    "10"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v3-03",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 3"
  },
  {
   "soru": "Bir makine öğrenmesi modelinin geliştirilmesi sürecindeki aşamalar aşağıdakilerin hangisinde doğru sırayla verilmiştir?",
   "sec": [
    "Model seçimi → Veri toplama → Eğitim → Veri hazırlama → Değerlendirme → Tahmin",
    "Veri toplama → Model seçimi → Veri hazırlama → Tahmin → Eğitim → Değerlendirme",
    "Veri hazırlama → Veri toplama → Eğitim → Model seçimi → Tahmin → Değerlendirme",
    "Veri toplama → Veri hazırlama → Eğitim → Değerlendirme → Model seçimi → Tahmin",
    "Veri toplama → Veri hazırlama → Model seçimi → Eğitim → Tahmin → Değerlendirme"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v3-04",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 4"
  },
  {
   "soru": "(2⁵ · 4⁻¹) / ∛8 işleminin sonucu kaçtır?",
   "sec": [
    "4",
    "8",
    "16",
    "32",
    "64"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v3-05",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 5"
  },
  {
   "soru": "(p ∨ q)′ önermesine denk olan önerme aşağıdakilerden hangisidir?",
   "sec": [
    "p′ ∨ q",
    "p ⇔ q",
    "p ∧ q′",
    "p′ ∨ q′",
    "p′ ∧ q′"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v3-06",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 6"
  },
  {
   "soru": "(p ⇒ q) ≡ 0 olduğuna göre aşağıdaki önermelerden hangisinin doğruluk değeri 1’dir?",
   "sec": [
    "p ⇔ q",
    "p ∧ q",
    "p′",
    "p ∨ q",
    "q"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v3-07",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 7"
  },
  {
   "soru": "s(A) = 4 ve s(B) = 3 olduğuna göre A × B kartezyen çarpım kümesinin eleman sayısı kaçtır?",
   "sec": [
    "1",
    "7",
    "12",
    "64",
    "81"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v3-08",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 8"
  },
  {
   "soru": "E = {1, 2, 3, 4, 5, 6, 7, 8} evrensel kümesi ile A = {2, 4, 6, 8} ve B = {1, 2, 3} kümeleri veriliyor. Buna göre (A ∪ B)′ kümesi aşağıdakilerden hangisidir?",
   "sec": [
    "{5, 6, 7}",
    "{5, 7}",
    "{1, 2, 3, 4, 6, 8}",
    "{2}",
    "{1, 3, 5, 7}"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v3-09",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 9"
  },
  {
   "soru": "β = {(1, 2), (2, 3), (3, 3)} bağıntısının ters bağıntısı β⁻¹ aşağıdakilerden hangisidir?",
   "sec": [
    "{(2, 1), (3, 2)}",
    "{(2, 1), (3, 2), (3, 3)}",
    "{(1, 2), (2, 3), (3, 3)}",
    "{(2, 1), (2, 3), (3, 3)}",
    "{(1, 1), (2, 2), (3, 3)}"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v3-10",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 10"
  },
  {
   "soru": "Aşağıdaki bağıntılardan hangisi A’dan B’ye tanımlı bir fonksiyondur?",
   "sec": [
    "{(2, a), (3, b)}",
    "{(1, a), (1, b), (2, a), (3, b)}",
    "{(1, a), (2, a), (3, b)}",
    "{(1, a), (2, b)}",
    "{(1, b), (2, a), (2, b), (3, a)}"
   ],
   "dogru": 2,
   "kod": "A = {1, 2, 3} ve B = {a, b} kümeleri veriliyor.",
   "tip": "mcq",
   "id": "mat-v3-11",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 11"
  },
  {
   "soru": "x ile y ters orantılıdır. x = 4 iken y = 15 olduğuna göre x = 6 iken y kaçtır?",
   "sec": [
    "2",
    "6",
    "9",
    "10",
    "22,5"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v3-12",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 12"
  },
  {
   "soru": "log₁₀1000 + log₂(1/4) işleminin sonucu kaçtır?",
   "sec": [
    "1",
    "2",
    "3",
    "4",
    "5"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v3-13",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 13"
  },
  {
   "soru": "Eğimi 3 olan ve (1, 2) noktasından geçen doğrunun denklemi aşağıdakilerden hangisidir?",
   "sec": [
    "y = −3x + 5",
    "y = 3x + 2",
    "y = x + 2",
    "y = 3x − 1",
    "y = 3x + 1"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v3-14",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 14"
  },
  {
   "soru": "f(x) = x² − 6x + 5 fonksiyonunun grafiğinin tepe noktası aşağıdakilerden hangisidir?",
   "sec": [
    "(−3, 32)",
    "(3, −4)",
    "(5, 0)",
    "(3, 4)",
    "(1, 0)"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v3-15",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 15"
  },
  {
   "soru": "A(2, 1) ve B(8, 9) noktalarını temsil eden vektörler arasındaki Öklid uzaklığı kaçtır?",
   "sec": [
    "6",
    "8",
    "10",
    "14",
    "100"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v3-16",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 16"
  },
  {
   "soru": "u = (4, −1, 0, 7, 2) vektörünün boyutu kaçtır?",
   "sec": [
    "12",
    "5",
    "4",
    "6",
    "3"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v3-17",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 17"
  },
  {
   "soru": "Aşağıdakilerden hangisi bir skalerdir?",
   "sec": [
    "Bir öğrencinin boy ve kilosundan oluşan (170, 65) ikilisi",
    "Bir evin alan, oda sayısı ve yaşından oluşan öz nitelik vektörü",
    "Bir görüntünün piksel değerlerinden oluşan sayı matrisi",
    "(3, −1, 2)",
    "Bir ürünün fiyatı"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v3-18",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 18"
  },
  {
   "soru": "Beş evin her biri alan, oda sayısı ve yaş olmak üzere üç öz nitelikle temsil edilmektedir. Buna göre bir evin öz nitelik vektörü hangi uzayın elemanıdır?",
   "sec": [
    "ℝ¹⁵",
    "ℝ⁵",
    "ℝ³",
    "ℝ²",
    "ℝ⁸"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v3-19",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 19"
  },
  {
   "soru": "(5, 4) vektörü a ve b reel sayılar olmak üzere a·(1, 2) + b·(1, 0) doğrusal birleşimi şeklinde yazılabildiğine göre a + b toplamı kaçtır?",
   "sec": [
    "5",
    "6",
    "7",
    "8",
    "9"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v3-20",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 20"
  },
  {
   "soru": "Renk değişkeni kırmızı, yeşil ve mavi kategorilerinden oluşuyorsa, her kategori için ayrı sütun açılıp ait olunan sütuna 1, diğerlerine 0 yazılan kodlamada “yeşil” kategorisi nasıl gösterilir?",
   "sec": [
    "(1, 1, 0)",
    "(1, 0, 1)",
    "(0, 0, 1)",
    "(0, 1, 0)",
    "(1, 0, 0)"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v4-01",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 1"
  },
  {
   "soru": "Sekiz bitlik gri tonlu bir görüntüde 0 piksel değeri neye karşılık gelir?",
   "sec": [
    "Kırmızıya",
    "Beyaza",
    "Orta gri tona",
    "Siyaha",
    "Maviye"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v4-02",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 2"
  },
  {
   "soru": "Bir modelin öğrendiği ilişkileri yeni gözlemlere aktarabilme yeteneğine ne ad verilir?",
   "sec": [
    "Genelleme",
    "Aşırı uyum",
    "Ölçekleme",
    "Kodlama",
    "Normalleştirme"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v4-03",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 3"
  },
  {
   "soru": "Eğitim verisini çok iyi öğrenmesine rağmen yeni veriler üzerinde başarısız olan, genel ilişkiler yerine eğitim örneklerini ezberlemiş bir modelde görülen duruma ne ad verilir?",
   "sec": [
    "Doğrusal bağımsızlık",
    "Normalleştirme",
    "Kodlama",
    "Genelleme",
    "Aşırı uyum"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v4-04",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 4"
  },
  {
   "soru": "Bir yapay zekâ uygulamasının tahmine ulaşana kadar geçtiği süreç hangi dört temel yapı taşına ayrılarak incelenmiştir?",
   "sec": [
    "Önerme, küme, fonksiyon ve grafik",
    "Veri, model, algoritma ve tahmin",
    "Girdi, çıktı, bellek ve işlemci",
    "Eğitim, test, doğrulama ve ezber",
    "Vektör, matris, tensör ve skaler"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v4-05",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 5"
  },
  {
   "soru": "p ⇒ q koşullu önermesi hangi durumda yanlıştır?",
   "sec": [
    "p ve q’nun ikisi de doğru olduğunda",
    "Her durumda",
    "p yanlış, q doğru olduğunda",
    "p doğru, q yanlış olduğunda",
    "p ve q’nun ikisi de yanlış olduğunda"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v4-06",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 6"
  },
  {
   "soru": "“Eğer p ise q” biçiminde kurulan p ⇒ q koşullu önermesinde q önermesine ne ad verilir?",
   "sec": [
    "Totoloji",
    "Değilleme",
    "Hüküm",
    "Hipotez",
    "Çelişki"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v4-07",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 7"
  },
  {
   "soru": "p ∨ ¬p bileşik önermesi aşağıdakilerden hangisidir?",
   "sec": [
    "Değilleme",
    "Basit önerme",
    "Çelişki",
    "Koşullu önerme",
    "Totoloji"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v4-08",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 8"
  },
  {
   "soru": "Boş küme ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "Boş küme yalnızca sonlu kümelerin alt kümesidir.",
    "Farklı boş kümeler birbirine eşit değildir.",
    "Boş kümenin tek elemanı 0’dır.",
    "Boş küme {⌀} ile gösterilir.",
    "Boş küme her kümenin alt kümesidir."
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v4-09",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 9"
  },
  {
   "soru": "De Morgan kurallarına göre ¬(p ∧ q) önermesi aşağıdakilerden hangisine denktir?",
   "sec": [
    "¬p ∨ ¬q",
    "p ∨ q",
    "¬p ∧ ¬q",
    "p ⇒ q",
    "¬p ∧ q"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v4-10",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 10"
  },
  {
   "soru": "f(x) = 3x + 2 doğrusal fonksiyonu için f(4) değeri kaçtır?",
   "sec": [
    "9",
    "12",
    "14",
    "18",
    "20"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v4-11",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 11"
  },
  {
   "soru": "g(x) = log₂x fonksiyonu için g(32) değeri kaçtır?",
   "sec": [
    "4",
    "5",
    "6",
    "16",
    "64"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v4-12",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 12"
  },
  {
   "soru": "Grafiği düşey eksene göre simetrik olan çift fonksiyon için aşağıdaki eşitliklerden hangisi her zaman sağlanır?",
   "sec": [
    "f(−x) = f(x)",
    "f(x) = 0",
    "f(x + 1) = f(x)",
    "f(−x) = 1/f(x)",
    "f(−x) = −f(x)"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v4-13",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 13"
  },
  {
   "soru": "3²ˣ − 10·3ˣ + 9 = 0 denkleminin çözüm kümesi aşağıdakilerden hangisidir?",
   "sec": [
    "{1, 2}",
    "{0, 1}",
    "{1, 9}",
    "{2}",
    "{0, 2}"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v4-14",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 14"
  },
  {
   "soru": "İki büyüklük arasındaki ve her ölçümde aynı kaldığından biçim bozulmadan boyutun değişmesini sağlayan sabit orana ne ad verilir?",
   "sec": [
    "Ölçek",
    "Asimptot",
    "Orantı",
    "Görüntü",
    "Logaritma"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v4-15",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 15"
  },
  {
   "soru": "u = (2, −1, 3) ve v = (5, −3, 1) vektörlerinin iç çarpımı (skaler çarpımı) kaçtır?",
   "sec": [
    "10",
    "−4",
    "16",
    "2",
    "22"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v4-16",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 16"
  },
  {
   "soru": "u = (1, 4, 8) vektörünün normu (uzunluğu) kaçtır?",
   "sec": [
    "3",
    "7",
    "9",
    "13",
    "81"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v4-17",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 17"
  },
  {
   "soru": "Bir vektörün normalleştirilmesi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "Vektörün tüm bileşenlerini sıfır yapar.",
    "Vektörün yönünü tersine çevirir.",
    "Vektörün büyüklüğünü iki katına çıkarır.",
    "Vektörün yönünü korur ancak büyüklüğünü bire indirger.",
    "Vektörün boyutunu bir azaltır."
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v4-18",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 18"
  },
  {
   "soru": "Uzunluğu bir birim olan vektöre ne ad verilir?",
   "sec": [
    "Baz",
    "Birim vektör",
    "Gerilen uzay",
    "Sıfır vektörü",
    "Skaler"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v4-19",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 19"
  },
  {
   "soru": "Metinler, kullanıcılar ya da ürünler vektörlerle temsil edildiğinde iki vektör arasındaki açının kosinüsüne dayanan ve arama ile öneri sistemlerinde kullanılan ölçü aşağıdakilerden hangisidir?",
   "sec": [
    "Öklid normu",
    "Kosinüs benzerliği",
    "Çoklu doğrusal bağlantı",
    "Gerilen uzay",
    "Doğrusal birleşim"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v4-20",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 20"
  },
  {
   "soru": "RGB renk uzayında gösterilen renkli görüntülerde her piksel kaç ayrı değerle ifade edilir?",
   "sec": [
    "Dört",
    "255",
    "İki",
    "Üç",
    "Bir"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v5-01",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 1"
  },
  {
   "soru": "Bir verinin model tarafından işlenebilecek sayısal bir vektöre dönüştürülmesi işlemine ne ad verilir?",
   "sec": [
    "Kodlama",
    "Aşırı uyum",
    "Genelleme",
    "Devrik alma",
    "Normalleştirme"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v5-02",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 2"
  },
  {
   "soru": "Metinlerin sayısallaştırılması sürecinde metin kelime, alt kelime ya da karakter gibi küçük parçalara ayrılır. Bu parçaların her birine ne ad verilir?",
   "sec": [
    "Skaler",
    "Belirteç",
    "Kategori",
    "Kanal",
    "Piksel"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v5-03",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 3"
  },
  {
   "soru": "Belirli sınıfları ya da grupları gösteren verilere ne ad verilir?",
   "sec": [
    "Görüntü verisi",
    "Zaman serisi verisi",
    "Ham sayısal veri",
    "Sürekli veri",
    "Kategorik veri"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v5-04",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 4"
  },
  {
   "soru": "Bir modelin tahmin etmeye çalıştığı değişken aşağıdakilerden hangisi olarak tanımlanır?",
   "sec": [
    "Sabit terim",
    "Bağımsız değişken",
    "Çıktı değişkeni (bağımlı ya da hedef değişken)",
    "Belirteç",
    "Girdi değişkeni"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v5-05",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 5"
  },
  {
   "soru": "İki önermenin birlikte sağlanmasını ifade eden bağlaç ve gösterimi aşağıdakilerin hangisinde doğru olarak verilmiştir?",
   "sec": [
    "Değilleme, ¬p",
    "Çift yönlü koşullu önerme, p ⇔ q",
    "Ve bağlacı, p ∧ q",
    "Veya bağlacı, p ∨ q",
    "Koşullu önerme, p ⇒ q"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v5-06",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 6"
  },
  {
   "soru": "p: “Model eğitim verisinde yüksek başarı göstermektedir.” ve q: “Model test verisinde yüksek başarı göstermektedir.” önermeleri için p ∧ ¬q önermesinin karşılık geldiği makine öğrenmesi sorunu aşağıdakilerden hangisidir?",
   "sec": [
    "Aşırı öğrenme",
    "Kodlama",
    "Normalleştirme",
    "Kategorik veri",
    "Genelleme"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v5-07",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 7"
  },
  {
   "soru": "Çift yönlü koşullu önerme (p ⇔ q) hangi durumlarda doğrudur?",
   "sec": [
    "İki önermenin doğruluk değerleri farklı olduğunda",
    "Hiçbir durumda",
    "Yalnızca q yanlış olduğunda",
    "Yalnızca p doğru olduğunda",
    "İki önermenin doğruluk değerleri çakıştığında"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v5-08",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 8"
  },
  {
   "soru": "p ∧ ¬p bileşik önermesi aşağıdakilerden hangisidir?",
   "sec": [
    "Çift yönlü koşullu önerme",
    "Koşullu önerme",
    "Basit önerme",
    "Totoloji",
    "Çelişki"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v5-09",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 9"
  },
  {
   "soru": "Dört basit önerme içeren bir bileşik önermenin doğruluk tablosu kaç satırdan oluşur?",
   "sec": [
    "4",
    "8",
    "12",
    "16",
    "32"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v5-10",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 10"
  },
  {
   "soru": "Bir fonksiyonda girdilerin oluşturduğu kümeye ne ad verilir?",
   "sec": [
    "Tanım kümesi",
    "Değer kümesi",
    "Görüntü",
    "Orantı",
    "Ölçek"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v5-11",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 11"
  },
  {
   "soru": "log₃81 ifadesinin değeri kaçtır?",
   "sec": [
    "3",
    "4",
    "5",
    "9",
    "27"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v5-12",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 12"
  },
  {
   "soru": "Grafiği orijine göre simetrik olan fonksiyona ne ad verilir?",
   "sec": [
    "Logaritmik fonksiyon",
    "Tek fonksiyon",
    "Çift fonksiyon",
    "Doğrusal fonksiyon",
    "Sabit fonksiyon"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v5-13",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 13"
  },
  {
   "soru": "Doğrusal bir f fonksiyonu için f(0) = 5 ve f(2) = 11 olduğuna göre f(6) kaçtır?",
   "sec": [
    "17",
    "20",
    "23",
    "26",
    "33"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v5-14",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 14"
  },
  {
   "soru": "Tabanı sabit, üssü değişken olan fonksiyona ne ad verilir?",
   "sec": [
    "Üstel fonksiyon",
    "Doğrusal fonksiyon",
    "Logaritmik fonksiyon",
    "Çift fonksiyon",
    "Sabit fonksiyon"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "mat-v5-15",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 15"
  },
  {
   "soru": "u = (1, 3) ve v = (4, −2) vektörleri için 2u − v doğrusal birleşimi aşağıdakilerden hangisidir?",
   "sec": [
    "(2, 8)",
    "(−3, 5)",
    "(−2, 4)",
    "(−2, 8)",
    "(6, 4)"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v5-16",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 16"
  },
  {
   "soru": "A = (1, 2) ve B = (4, 6) noktalarını temsil eden vektörler arasındaki Öklid uzaklığı kaçtır?",
   "sec": [
    "3",
    "4",
    "5",
    "7",
    "25"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "mat-v5-17",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 17"
  },
  {
   "soru": "Düzlem için bir baz tam olarak kaç vektörden oluşur?",
   "sec": [
    "3",
    "1",
    "4",
    "2",
    "Sonsuz sayıda"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "mat-v5-18",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 18"
  },
  {
   "soru": "Verilen vektörlerin skalerlerle çarpılıp toplanmasıyla elde edilen tüm birleşimlerin oluşturduğu kümeye ne ad verilir?",
   "sec": [
    "Baz",
    "Boyut",
    "Birim vektör",
    "Norm",
    "Vektörlerin gerdiği uzay"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "mat-v5-19",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 19"
  },
  {
   "soru": "Bir öz nitelik diğer öz niteliklerden üretilebildiği için fazlalık oluşturuyor ve modele yeni bilgi katmıyorsa bu duruma ne ad verilir?",
   "sec": [
    "Normalleştirme",
    "Çoklu doğrusal bağlantı",
    "Kosinüs benzerliği",
    "Genelleme",
    "Doğrusal bağımsızlık"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "mat-v5-20",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 20"
  }
 ]
};
