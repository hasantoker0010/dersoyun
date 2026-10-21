(window.DERSLER = window.DERSLER || {})["veri-yapilari"] = {
 "ad": "Veri Yapıları",
 "kisa": "Veri Yapıları",
 "simge": "O(n)",
 "renk": "#4FC3FF",
 "uniteler": {
  "1": "Karmaşıklık ve Temel Kavramlar",
  "2": "Diziler ve Koleksiyonlar (C#)",
  "3": "Yığın ve Kuyruk",
  "4": "Sıralama Algoritmaları"
 },
 "sorular": [
  {
   "soru": "Big-O notasyonunda O(sqrt(N)) ile gösterilen zaman karmaşıklığı aşağıdakilerden hangisidir?",
   "sec": [
    "Doğrusal aritmik zaman karmaşıklığı",
    "Polinom zaman karmaşıklığı",
    "Kuadratik zaman karmaşıklığı",
    "Logaritmik zaman karmaşıklığı",
    "Kare kök zaman karmaşıklığı"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v1-01",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 1"
  },
  {
   "soru": "Akış diyagramı türleri aşağıdakilerin hangisinde doğru olarak verilmiştir?",
   "sec": [
    "Doğrusal (Sıralı), Hiyerarşik (Ağaçsal), Döngüsel (Tekrarlı)",
    "Doğrusal (Sıralı), Mantıksal (Koşullu), Ağaçsal (Hiyerarşik)",
    "Mantıksal (Koşullu), Ağaçsal (Hiyerarşik), Paralel (Eşzamanlı)",
    "Doğrusal (Sıralı), Mantıksal (Koşullu), Döngüsel (Tekrarlı)",
    "Rastgele (Karışık), Mantıksal (Koşullu), Döngüsel (Tekrarlı)"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v1-02",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 2"
  },
  {
   "soru": "Zaman karmaşıklığı ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "Big-O notasyonu algoritmanın en iyi durumunu gösterir.",
    "Algoritmanın çalıştığı bilgisayarın saat hızına göre saniye cinsinden ölçülür.",
    "Yalnızca kullanılan bellek miktarına göre hesaplanır.",
    "Bir algoritma için yalnızca en iyi durum incelenir.",
    "Algoritmanın çalışması için gereken süre, saniye cinsinden değil gerçekleştirilen işlem sayısına göre hesaplanır."
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v1-03",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 3"
  },
  {
   "soru": "Zaman karmaşıklığında genellikle Büyük Omega (Ω) ile gösterilen durum aşağıdakilerden hangisidir?",
   "sec": [
    "Kübik zaman durumu",
    "En kötü durum",
    "En iyi durum",
    "Sabit zaman durumu",
    "Ortalama durum"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v1-04",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 4"
  },
  {
   "soru": "Aşağıdaki C# kod parçasının zaman karmaşıklığı aşağıdakilerden hangisidir?",
   "sec": [
    "O(log N)",
    "O(N³)",
    "O(N)",
    "O(N²)",
    "O(N log N)"
   ],
   "dogru": 1,
   "kod": "for (int i = 0; i < n; ++i)\n  for (int j = 0; j < n; ++j)\n    for (int k = 0; k < n; ++k)\n      sayac++;",
   "tip": "mcq",
   "id": "vy-v1-05",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 5"
  },
  {
   "soru": "C# dilinde HashSet sınıfında, çağrıldığı kümeyi parametre olarak gönderilen küme ile kesişimine dönüştüren yöntem aşağıdakilerden hangisidir?",
   "sec": [
    "IsSubsetOf",
    "UnionWith",
    "ExceptWith",
    "Add",
    "IntersectWith"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v1-06",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 6"
  },
  {
   "soru": "Tekrar eden elemanlar olmadan sıralanmış farklı nesnelerden oluşan bir koleksiyon gerektiğinde kullanılan, minimum ve maksimum değerleri döndüren Min ve Max özelliklerine sahip C# sınıfı aşağıdakilerden hangisidir?",
   "sec": [
    "Queue",
    "HashSet",
    "ArrayList",
    "SortedSet",
    "Stack"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v1-07",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 7",
   "aciklama": "SortedSet benzersiz elemanları sıralı tutar ve Min/Max özellikleri sunar. HashSet sıralama garantisi vermez."
  },
  {
   "soru": "Aşağıdaki C# kod parçası çalıştırıldığında ekranda ne görüntülenir?",
   "sec": [
    "25",
    "30",
    "35",
    "40",
    "45"
   ],
   "dogru": 3,
   "kod": "int[] sayilar = { 5, 10, 15, 20, 25 };\nConsole.WriteLine(sayilar[2] + sayilar[4]);",
   "tip": "code",
   "cevap": "40",
   "id": "vy-v1-08",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 8",
   "aciklama": "Dizi indeksi 0'dan başlar: sayilar[2] = 15, sayilar[4] = 25. Toplam 40."
  },
  {
   "soru": "SortedList ve SortedDictionary sınıfları ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "Sıralanmamış veriler için ekleme ve çıkarma işlemleri SortedDictionary’de O(log n), SortedList’te O(n) karmaşıklığındadır.",
    "Her iki sınıfta da ekleme işlemi her zaman O(1) karmaşıklığındadır.",
    "SortedList, SortedDictionary’den daha fazla bellek gerektirir.",
    "Her iki sınıfta da alma (getirme) işlemi O(n²) karmaşıklığındadır.",
    "SortedDictionary’de çıkarma işlemi O(n), SortedList’te O(log n) karmaşıklığındadır."
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v1-09",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 9"
  },
  {
   "soru": "C# dilinde diziler ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
   "sec": [
    "C# pürüzlü (jagged) dizileri destekler.",
    "C# çok boyutlu dizileri destekler.",
    "C# tek boyutlu dizileri destekler.",
    "Dizinin eleman sayısı ilk değer atama işleminden sonra da istenildiği kadar artırılabilir.",
    "Dizi tanımlanırken hangi türden elemanları barındıracağı bildirilebilir."
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v1-10",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 10"
  },
  {
   "soru": "C# dilinde Stack myStack = new Stack(); komutuyla oluşturulan yığına sırayla 11 eleman eklendiğinde yığının kapasitesi kaç olur?",
   "sec": [
    "10",
    "11",
    "20",
    "22",
    "32"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v1-11",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 11",
   "aciklama": "Varsayılan kapasite 10'dur. Dolunca büyüme faktörü (2) ile iki katına çıkar: 10 → 20."
  },
  {
   "soru": "Kuyruk yapısında kapasite dolduğunda kapasiteyi her defasında iki katına çıkaran sayıya ne ad verilir?",
   "sec": [
    "Yük faktörü",
    "Büyüme faktörü",
    "Kapasite sabiti",
    "Öncelik değeri",
    "Hash değeri"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v1-12",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 12"
  },
  {
   "soru": "Aşağıdaki C# kod parçası çalıştırıldığında ekranda ne görüntülenir?",
   "sec": [
    "D-3",
    "D-4",
    "C-3",
    "A-3",
    "B-2"
   ],
   "dogru": 0,
   "kod": "Stack s = new Stack();\ns.Push(\"A\");\ns.Push(\"B\");\ns.Push(\"C\");\ns.Pop();\ns.Push(\"D\");\nConsole.Write(s.Peek() + \"-\" + s.Count);",
   "tip": "code",
   "cevap": "D-3",
   "id": "vy-v1-13",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 13",
   "aciklama": "Push A, B, C → Pop en üstteki C'yi çıkarır → Push D. Yığın (alttan üste) A, B, D olur. Peek D'yi gösterir, Count 3'tür."
  },
  {
   "soru": "Bir yığının içeriğini diziye aktarmak için CopyTo yönteminin yanı sıra kullanılabilen diğer yöntem aşağıdakilerden hangisidir?",
   "sec": [
    "ToArray",
    "Peek",
    "Contains",
    "Push",
    "Clear"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v1-14",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 14"
  },
  {
   "soru": "Aşağıdaki C# kod parçası çalıştırıldığında ekranda ne görüntülenir?",
   "sec": [
    "3",
    "10",
    "20",
    "30",
    "40"
   ],
   "dogru": 2,
   "kod": "Queue q = new Queue();\nq.Enqueue(10);\nq.Enqueue(20);\nq.Enqueue(30);\nq.Dequeue();\nq.Enqueue(40);\nConsole.Write(q.Peek());",
   "tip": "code",
   "cevap": "20",
   "id": "vy-v1-15",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 15"
  },
  {
   "soru": "8, 3, 6, 1, 5 sayılarından oluşan dizi baloncuk sıralama (bubble sort) algoritmasıyla küçükten büyüğe sıralanmaktadır. Buna göre ilk tur tamamlandığında dizinin görünümü aşağıdakilerden hangisidir?",
   "sec": [
    "3, 8, 6, 1, 5",
    "1, 3, 5, 6, 8",
    "1, 8, 6, 3, 5",
    "3, 1, 6, 5, 8",
    "3, 6, 1, 5, 8"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v1-16",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 16"
  },
  {
   "soru": "Ekleme sıralama (insertion sort) algoritmasının en iyi durumdaki zaman karmaşıklığı aşağıdakilerden hangisidir?",
   "sec": [
    "n²",
    "n log n",
    "n",
    "n³",
    "log n"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v1-17",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 17",
   "aciklama": "Dizi zaten sıralıysa her eleman yalnızca bir kez karşılaştırılır: en iyi durum O(n). Ortalama ve en kötü durum n²'dir."
  },
  {
   "soru": "29, 12, 40, 7, 18 sayılarından oluşan dizi seçerek sıralama (selection sort) algoritmasıyla küçükten büyüğe sıralanmaktadır. Her adımda kalan kısmın en küçük elemanı, o kısmın ilk elemanıyla yer değiştirdiğine göre 2. adım sonunda dizinin görünümü aşağıdakilerden hangisidir?",
   "sec": [
    "7, 12, 40, 29, 18",
    "7, 12, 29, 40, 18",
    "12, 29, 40, 7, 18",
    "7, 12, 18, 29, 40",
    "7, 29, 40, 12, 18"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v1-18",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 18"
  },
  {
   "soru": "5, 2, 4, 6, 1, 3 sayılarından oluşan dizi ekleme sıralama algoritmasıyla küçükten büyüğe sıralanmaktadır. Dizinin ilk dört elemanı kendi arasında sıralandığı anda dizinin görünümü aşağıdakilerden hangisidir?",
   "sec": [
    "2, 4, 5, 1, 3, 6",
    "2, 4, 5, 6, 1, 3",
    "2, 5, 4, 6, 1, 3",
    "1, 2, 3, 4, 5, 6",
    "1, 2, 4, 5, 6, 3"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v1-19",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 19"
  },
  {
   "soru": "I. Hızlı sıralamanın en kötü durumdaki zaman karmaşıklığı n²’dir. II. Hızlı sıralamanın ortalama durumdaki zaman karmaşıklığı n log n’dir. III. Seçerek sıralamanın en iyi durumdaki zaman karmaşıklığı n’dir. Sıralama algoritmalarının zaman karmaşıklıkları ile ilgili yukarıdaki ifadelerden hangileri doğrudur?",
   "sec": [
    "II ve III",
    "I ve II",
    "Yalnız I",
    "Yalnız II",
    "I, II ve III"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v1-20",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 20"
  },
  {
   "soru": "Derleyiciye veya yorumlayıcıya, programcının verileri nasıl kullanmayı planladığını söyleyen veri sınıflandırmasına ne ad verilir?",
   "sec": [
    "Veri türü",
    "Akış şeması",
    "Veri yapısı",
    "Asimptotik analiz",
    "Algoritma"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v2-01",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 1"
  },
  {
   "soru": "Bir algoritmanın büyük girdiler karşısındaki davranışını inceleyen ve zaman karmaşıklığının alt ve üst sınırlarının matematiksel olarak gösterilmesini sağlayan algoritma analizi metodu aşağıdakilerden hangisidir?",
   "sec": [
    "Asimptotik analiz",
    "Akış şeması analizi",
    "Sözde kod",
    "Doğrusal arama",
    "Hash fonksiyonu"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v2-02",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 2"
  },
  {
   "soru": "Girdi sayısı n = 8 olduğunda O(n log n) zaman karmaşıklığına sahip bir algoritmanın adım sayısı kaçtır? (log tabanı 2 alınacaktır.)",
   "sec": [
    "3",
    "8",
    "24",
    "64",
    "256"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v2-03",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 3"
  },
  {
   "soru": "Microsoft tarafından 2016 yılında kullanıma sunulan, Windows işletim sisteminde hazırlanan bir kodun Linux işletim sisteminde de aynı şekilde çalışmasını sağlayan, işletim sisteminden bağımsız yazılım geliştirme platformu aşağıdakilerden hangisidir?",
   "sec": [
    "Visual Studio",
    ".NET kütüphanesi",
    ".NET Framework",
    "CLR (Common Language Runtime)",
    ".NET Core"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v2-04",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 4"
  },
  {
   "soru": "Tarihsel kökeni 9. yüzyılda yaşamış bir matematikçiye ve onun “Hisab el-cebir ve el- mukabala” kitabına dayanan “algoritma” kavramı hangi matematikçinin adıyla ilişkilidir?",
   "sec": [
    "El-Cezerî",
    "Öklid",
    "El-Hârizmî",
    "Kindî",
    "Eratosten"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v2-05",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 5"
  },
  {
   "soru": "C# dilinde her bir elemanı başka bir dizi olan, iç dizileri farklı uzunluklara sahip olabilen ya da boş bırakılabilen tek boyutlu dizi türü aşağıdakilerden hangisidir?",
   "sec": [
    "Çok boyutlu diziler",
    "Dizi dizileri (Jagged arrays)",
    "Sıralanmış kümeler (SortedSet)",
    "Dizi listesi (ArrayList)",
    "Hash tabloları"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v2-06",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 6"
  },
  {
   "soru": "int[,] sayilar = new int[3, 6]; komutuyla oluşturulan iki boyutlu dizide toplam kaç eleman saklanabilir?",
   "sec": [
    "3",
    "6",
    "9",
    "18",
    "24"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v2-07",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 7"
  },
  {
   "soru": "Hash tablolarının en önemli varsayımlarından biri, anahtara dayalı bir değer için aramayı hangi işlem karmaşıklığında yapabilmesidir?",
   "sec": [
    "O(n²)",
    "O(1)",
    "O(n log n)",
    "O(log n)",
    "O(n)"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v2-08",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 8"
  },
  {
   "soru": "C# dilinde ArrayList sınıfında dizi listesinde depolanan elemanların sayısını döndüren özellik aşağıdakilerden hangisidir?",
   "sec": [
    "Contains",
    "Clear",
    "Capacity",
    "Count",
    "Add"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v2-09",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 9"
  },
  {
   "soru": "C# dilindeki List<T> sınıfı ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
   "sec": [
    "Derleme zamanı tür denetimi sağlar.",
    "IList<T> arayüzünü uygulayan ArrayList’in eşdeğeridir.",
    "Genel (generic) olmadığı için kutulama/kutudan çıkarma (boxing/unboxing) işlemi gerçekleştirir.",
    "Ögeler Add() veya AddRange() yöntemleriyle eklenebilir.",
    "System.Collections.Generic ad alanı altında gelir."
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v2-10",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 10"
  },
  {
   "soru": "Bir ögenin yığın içerisinde bulunup bulunmadığını kontrol eden; öge mevcutsa True, mevcut değilse False değer döndüren yöntem aşağıdakilerden hangisidir?",
   "sec": [
    "CopyTo",
    "Peek",
    "Clear",
    "Pop",
    "Contains"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v2-11",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 11",
   "aciklama": "Yığın ve koleksiyonlarda bir öğenin varlığını kontrol etmek için Contains yöntemi kullanılır."
  },
  {
   "soru": "Kuyruk yapısında kuyruk sırasının sonuna yeni bir öge ekleme işlemine ne ad verilir?",
   "sec": [
    "Push",
    "Dequeue (Sıradan Çıkarma)",
    "Peek",
    "Enqueue (Sıraya Alma)",
    "Pop"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v2-12",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 12"
  },
  {
   "soru": "Bazı uygulamalarda kuyruktan çıkarılacak ögenin en eski öge değil en yüksek öncelikli veri olması gerekir. Ögelerin kuyruk içerisindeki önemini belirten bu duruma ne ad verilir?",
   "sec": [
    "Çevirme",
    "Kapasite",
    "Dizi dizisi",
    "Büyüme faktörü",
    "Öncelik sırası"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v2-13",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 13"
  },
  {
   "soru": "Yığın ve kuyruk yapıları ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
   "sec": [
    "Kuyruğa ilk giren öge, kuyruktaki en eski ögedir.",
    "Yığın yapısında son eklenen öge ilk çıkarılır.",
    "Dequeue işlemi sıranın önündeki ögeyi kaldırır.",
    "Clear yöntemi yığındaki tüm elemanları kaldırır ve öge sayısını sıfır olarak ayarlar.",
    "Kuyruk yapısında Peek yöntemi en öndeki ögeyi görüntüler ve listeden çıkarır."
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v2-14",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 14"
  },
  {
   "soru": "Aşağıdaki C# kod parçası çalıştırıldığında ekranda ne görüntülenir?",
   "sec": [
    "KUYRU",
    "UKRUYK",
    "KUYRUK",
    "KURYUK",
    "RUKKUY"
   ],
   "dogru": 3,
   "kod": "Stack<char> chars = new Stack<char>();\nstring kelime = \"KUYRUK\";\nforeach (char harf in kelime)\n    chars.Push(harf);\nwhile (chars.Count > 0)\n    Console.Write(chars.Pop());",
   "tip": "code",
   "cevap": "KURYUK",
   "id": "vy-v2-15",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 15"
  },
  {
   "soru": "Hızlı sıralama (quick sort) algoritması ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "Pivot, baştaki eleman seçilebileceği gibi rastgele bir eleman da seçilebilir.",
    "Pivot her zaman dizinin en büyük elemanı olmak zorundadır.",
    "Pivot seçildikten sonra diğer elemanlar tek bir grupta toplanır.",
    "İç döngünün her yinelemesinde en küçük değeri bularak uygun yerine atar.",
    "Pivotun seçimi algoritmanın başarısını etkilemez."
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v2-16",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 16"
  },
  {
   "soru": "7, 12, 3, 9, 1, 15 dizisi hızlı sıralama algoritmasıyla sıralanırken pivot olarak baştaki eleman seçilmiştir. Buna göre ilk bölümlemede pivottan küçük olan grupta yer alan elemanlar aşağıdakilerden hangisidir? (Grup içindeki sıra önemsizdir.)",
   "sec": [
    "3, 1, 7",
    "3, 1",
    "12, 3, 9, 1",
    "12, 9, 15",
    "1, 3, 9"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v2-17",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 17"
  },
  {
   "soru": "İki döngü kullanan; iç döngünün her yinelemesinden sonra dizideki en küçük değeri dizideki uygun yerine atayan sıralama algoritması aşağıdakilerden hangisidir?",
   "sec": [
    "Hızlı sıralama (Quick sort)",
    "Ekleme sıralama (Insertion sort)",
    "Seçerek sıralama (Selection sort)",
    "Baloncuk sıralama (Bubble sort)",
    "İkili arama (Binary search)"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v2-18",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 18"
  },
  {
   "soru": "Kitapta dört farklı sıralama algoritmasının 1000 ve 10000 elemanlı dizilerdeki çalışma sürelerini karşılaştırmak için kullanılan sınıf aşağıdakilerden hangisidir?",
   "sec": [
    "Random",
    "Timing",
    "HashSet",
    "Stack",
    "Queue"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v2-19",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 19"
  },
  {
   "soru": "Sıralama ve sıralama algoritmaları ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
   "sec": [
    "Sıralama algoritmaları sıralı dizileri girdi olarak alır ve sırasız listeleri çıktı olarak verir.",
    "Sıralama, ögeleri büyükten küçüğe ya da küçükten büyüğe düzenleme işlemidir.",
    "Depolanan veriler üzerinde en çok yapılan işlemler sıralama ve aramadır.",
    "Seçerek sıralama algoritmasında iç içe iki for döngüsü bulunur.",
    "Telefon rehberindeki verilerin alfabetik sırayla tutulması bir sıralama örneğidir."
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v2-20",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 20"
  },
  {
   "soru": "C# dilinde 2 byte boyutunda olan, yapı karşılığı System.Int16 olan ve −32.768 ile 32.767 arasındaki değerleri tutabilen işaretli tamsayı türü aşağıdakilerden hangisidir?",
   "sec": [
    "int",
    "sbyte",
    "long",
    "ushort",
    "short"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v3-01",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 1"
  },
  {
   "soru": "Aşağıdakilerden hangisi algoritmaların sahip olması gereken temel nitelikler arasında yer almaz?",
   "sec": [
    "Uygulanabilirlik",
    "Sonluluk",
    "Benzersizlik",
    "Rastgelelik",
    "Kesinlik"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v3-02",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 2"
  },
  {
   "soru": "n > 2 olmak üzere, O(n²) ve O(2ⁿ) zaman karmaşıklıklarına sahip iki algoritmanın adım sayılarının birbirine eşit olduğu n değeri kaçtır?",
   "sec": [
    "3",
    "4",
    "5",
    "6",
    "8"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v3-03",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 3"
  },
  {
   "soru": "Veri türleri (veri tipleri) ile veri yapılarının karşılaştırılmasına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
   "sec": [
    "Veri türü, bir değerin atanabileceği bir değişkenin biçimidir.",
    "Veri türlerinde zaman karmaşıklığı önemli bir rol oynar.",
    "Veri yapısı uygulaması somut (concrete) uygulama olarak bilinir.",
    "Veri yapısı, tek bir nesne içinde birden çok veri türünü tutabilir.",
    "Bir veri türünün uygulanması soyut (abstract) uygulama olarak bilinir."
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v3-04",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 4"
  },
  {
   "soru": "Akış şemalarında bir sayfadaki uzun veya sayfaya sığmayan satırların yerini alarak başlangıç ve bitiş noktalarının yerlerini belirtmek için kullanılan ve içinde bir harf bulunan küçük bir daire ile gösterilen şekil aşağıdakilerden hangisidir?",
   "sec": [
    "Bağlantı",
    "Girdi / Çıktı",
    "Başla / Bitir",
    "İşlem / Atama",
    "Akış Yönü"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v3-05",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 5"
  },
  {
   "soru": "C# dilinde 7 elemanlı tek boyutlu bir dizinin son elemanının indeksi kaçtır?",
   "sec": [
    "0",
    "1",
    "6",
    "7",
    "8"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v3-06",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 6"
  },
  {
   "soru": "C# dilindeki Hashtable ve Dictionary sınıfları ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "Hashtable sınıfı genel (generic) bir sınıftır.",
    "Aynı değer birden fazla anahtara atanabilir.",
    "Dictionary örneği oluşturulurken yalnızca değer türü belirtilir.",
    "Bir ögenin anahtarı null değerine eşit olabilir.",
    "Aynı anahtar birden fazla kez kullanılabilir."
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v3-07",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 7"
  },
  {
   "soru": "Bir hash tablosunda (Hashtable) depolanan tüm anahtar-değer çiftleri foreach döngüsü ile yinelenirken döngüde kullanılan değişkenin tipi aşağıdakilerden hangisidir?",
   "sec": [
    "DictionaryEntry",
    "SortedList",
    "ArrayList",
    "HashSet",
    "Hashtable"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v3-08",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 8"
  },
  {
   "soru": "C# dilinde HashSet sınıfında iki kümenin en az bir ortak ögeye sahip olup olmadığını kontrol eden yöntem aşağıdakilerden hangisidir?",
   "sec": [
    "IsProperSupersetOf",
    "IsSubsetOf",
    "SetEquals",
    "UnionWith",
    "Overlaps"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v3-09",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 9"
  },
  {
   "soru": "Aşağıdaki C# kod parçası çalıştırıldığında ekranda ne görüntülenir?",
   "sec": [
    "2",
    "3",
    "4",
    "5",
    "6"
   ],
   "dogru": 2,
   "kod": "HashSet<int> a = new HashSet<int> { 1, 2,\n3, 4, 5 };\nHashSet<int> b = new HashSet<int> { 4, 5,\n6 };\na.UnionWith(b);\na.ExceptWith(new HashSet<int> { 1, 6 });\nConsole.WriteLine(a.Count);",
   "tip": "code",
   "cevap": "4",
   "id": "vy-v3-10",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 10"
  },
  {
   "soru": "Yığın yapısında en üstteki ögeyi döndürürken aynı zamanda ögeyi yığından kaldıran işlem aşağıdakilerden hangisidir?",
   "sec": [
    "Pop",
    "Enqueue",
    "Peek",
    "Push",
    "Contains"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v3-11",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 11"
  },
  {
   "soru": "Yığının içerisindeki tüm elemanların temizlenmesi gereken durumlarda, eleman sayısı kadar Pop işlemi uygulamak yerine kullanılabilen ve öge sayısını sıfır olarak ayarlayan yöntem aşağıdakilerden hangisidir?",
   "sec": [
    "Dequeue",
    "Peek",
    "Contains",
    "Clear",
    "ToArray"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v3-12",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 12"
  },
  {
   "soru": "Kitaptaki taksi-yolcu uygulamasında yolcular ve taksiler iki ayrı kuyruğa yerleştirilmekte, eşleşen her yolcu ve taksi Dequeue işlemi ile kuyruklarından çıkarılmakta ve eşleştirme yolcu veya taksi sayısı sıfır olana kadar sürmektedir. Listede 9 yolcu ve 4 taksi bulunduğuna göre eşleştirmeler tamamlandığında hangi durum oluşur?",
   "sec": [
    "4 taksi kalır.",
    "5 yolcu kalır.",
    "9 yolcu kalır.",
    "Hiç yolcu ve taksi kalmaz.",
    "13 yolcu kalır."
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v3-13",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 13"
  },
  {
   "soru": "Aşağıdaki C# kod parçası çalıştırıldığında ekranda ne görüntülenir?",
   "sec": [
    "9-3",
    "4-1",
    "1-3",
    "3-2",
    "6-2"
   ],
   "dogru": 3,
   "kod": "Stack<int> s = new Stack<int>();\ns.Push(4);\ns.Push(9);\ns.Push(1);\ns.Pop();\ns.Push(6);\ns.Pop();\ns.Pop();\ns.Push(3);\nConsole.WriteLine(s.Peek() + \"-\" +\ns.Count);",
   "tip": "code",
   "cevap": "3-2",
   "id": "vy-v3-14",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 14"
  },
  {
   "soru": "Aşağıdaki C# kod parçası çalıştırıldığında ekranda ne görüntülenir?",
   "sec": [
    "Ali 3",
    "Ece 2",
    "Can 3",
    "Can 4",
    "Naz 3"
   ],
   "dogru": 2,
   "kod": "Queue<string> q = new Queue<string>();\nq.Enqueue(\"Ali\");\nq.Enqueue(\"Can\");\nq.Enqueue(\"Ece\");\nq.Dequeue();\nq.Enqueue(\"Naz\");\nConsole.WriteLine(q.Peek() + \" \" +\nq.Count);",
   "tip": "code",
   "cevap": "Can 3",
   "id": "vy-v3-15",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 15"
  },
  {
   "soru": "Kitaptaki sıralama algoritmalarının zaman karmaşıklığı karşılaştırmasına göre en iyi, ortalama ve en kötü durumların üçünde de zaman karmaşıklığı n² olan algoritma aşağıdakilerden hangisidir?",
   "sec": [
    "Baloncuk sıralama",
    "Ekleme sıralama",
    "Hızlı sıralama",
    "Baloncuk ve ekleme sıralama",
    "Seçerek sıralama"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v3-16",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 16"
  },
  {
   "soru": "Hızlı sıralama (quick sort) algoritmasının ortalama durumdaki zaman karmaşıklığı aşağıdakilerden hangisidir?",
   "sec": [
    "n",
    "n²",
    "n³",
    "log n",
    "n log n"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v3-17",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 17"
  },
  {
   "soru": "Baloncuk sıralama (bubble sort) algoritması ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "Sıralama büyükten küçüğe doğru olacaksa baloncuk sola hareket eder.",
    "Listenin en sağındaki eleman pivot olarak seçilir.",
    "Ortalama durumdaki zaman karmaşıklığı n’dir.",
    "Sıralama küçükten büyüğe doğru olacaksa baloncuk sola hareket eder.",
    "En iyi durumdaki zaman karmaşıklığı n log n’dir."
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v3-18",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 18"
  },
  {
   "soru": "5, 1, 4, 2 sayılarından oluşan dizi baloncuk sıralama algoritmasıyla küçükten büyüğe tamamen sıralandığında toplam kaç yer değiştirme (takas) işlemi yapılır?",
   "sec": [
    "2",
    "3",
    "4",
    "5",
    "6"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v3-19",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 19"
  },
  {
   "soru": "29, 10, 14, 37, 13 sayılarından oluşan dizi seçerek sıralama (selection sort) algoritmasıyla küçükten büyüğe sıralanırken ikinci geçişin sonunda dizinin görünümü aşağıdakilerden hangisi olur?",
   "sec": [
    "13, 10, 14, 37, 29",
    "10, 13, 14, 29, 37",
    "10, 29, 14, 37, 13",
    "10, 13, 14, 37, 29",
    "10, 14, 13, 37, 29"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v3-20",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 20"
  },
  {
   "soru": "Ders kitabına göre aşağıdakilerden hangisi algoritmaların sahip olması şart olan temel niteliklerden biri değildir?",
   "sec": [
    "Rastgelelik",
    "Kesinlik",
    "Uygulanabilirlik",
    "Sonluluk",
    "Benzersizlik"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v4-01",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 1"
  },
  {
   "soru": ".NET ile yazılım geliştirmek için gerekli olan cli, derleyici gibi araçları içeren paket aşağıdakilerden hangisidir?",
   "sec": [
    "Hashtable",
    "Kod editörü",
    "Generic List",
    "SDK (Software Development Kit)",
    "IDE (Integrated Development Environment)"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v4-02",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 2"
  },
  {
   "soru": "Mantıksal adımların uluslararası geçerliliği olan geometrik şekiller ve yön okları yardımıyla şematize edilmesine ne ad verilir?",
   "sec": [
    "Big O notasyonu",
    "Veri soyutlama",
    "Akış şeması (akış diyagramı)",
    "Sözde kod",
    "Ham veri"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v4-03",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 3"
  },
  {
   "soru": "Big O karmaşıklık tablosuna göre girdi büyüklüğü n = 32 olduğunda O(n log n) karmaşıklığının değeri kaçtır?",
   "sec": [
    "32",
    "64",
    "160",
    "1.024",
    "32.768"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v4-04",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 4"
  },
  {
   "soru": "Büyük Omega (Big-Omega) Ω(n) ile gösterilen ve algoritmanın çalışma zamanının büyüme hızı için asimptotik bir alt sınır sağlayan durum aşağıdakilerden hangisidir?",
   "sec": [
    "En kötü durum (Worst case)",
    "Sabit zaman",
    "Alan karmaşıklığı",
    "Ortalama durum (Average case)",
    "En iyi durum (Best case)"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v4-05",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 5"
  },
  {
   "soru": "C# dilinde dizilerle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "Son ögenin indeksi dizinin uzunluğuna eşittir.",
    "İlk ögenin indeksi 0, son ögenin indeksi dizinin uzunluğundan bir eksiktir.",
    "Dizi tanımlandığında ögelerin varsayılan değeri yoktur.",
    "Bir dizinin tüm ögeleri farklı veri türlerinde olmalıdır.",
    "İlk ögenin indeksi 1’dir."
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v4-06",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 6"
  },
  {
   "soru": "C# dilinde HashSet sınıfında, yöntemin çağrıldığı kümenin parametre olarak iletilen kümenin bir alt kümesi olup olmadığını kontrol eden yöntem aşağıdakilerden hangisidir?",
   "sec": [
    "ExceptWith",
    "IntersectWith",
    "IsSupersetOf",
    "UnionWith",
    "IsSubsetOf"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v4-07",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 7"
  },
  {
   "soru": "Hash fonksiyonunun farklı anahtarlar için aynı sonucu üretmesi durumuna ne ad verilir?",
   "sec": [
    "Veri soyutlama",
    "Hash çakışması (hash collision)",
    "Simetrik fark",
    "Rastgele erişim",
    "Kova taşması"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v4-08",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 8"
  },
  {
   "soru": "A = {1, 2, 3, 4} ve B = {3, 4, 5} karma kümeleri için A.SymmetricExceptWith(B) (simetrik fark) işleminden sonra A kümesinin elemanları aşağıdakilerden hangisidir?",
   "sec": [
    "{5}",
    "{1, 2, 3, 4, 5}",
    "{1, 2}",
    "{1, 2, 5}",
    "{3, 4}"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v4-09",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 9"
  },
  {
   "soru": "Generic List sınıfında Remove yöntemi ile ilgili aşağıdakilerden hangisi doğrudur?",
   "sec": [
    "Listedeki tüm elemanları siler.",
    "Parametre olarak sağlanan değerin tüm oluşumlarını kaldırır.",
    "Listenin son elemanını kaldırır.",
    "Belirtilen indeksteki elemanı kaldırır.",
    "Parametre olarak sağlanan değerin ilk oluşumunu kaldırır."
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v4-10",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 10"
  },
  {
   "soru": "Yığın (stack) yapısında yığının tepesindeki veriyi yığından çıkarmadan sadece görüntülemeye imkân sağlayan işlem aşağıdakilerden hangisidir?",
   "sec": [
    "Dequeue",
    "Clear",
    "Peek",
    "Push",
    "Pop"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v4-11",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 11"
  },
  {
   "soru": "Stack sınıfının CopyTo yöntemi ile bir yığın diziye kopyalandığında aşağıdakilerden hangisi gerçekleşir?",
   "sec": [
    "Yığına ilk eklenen öge dizinin ilk elemanı olur.",
    "Yalnızca yığının tepesindeki öge kopyalanır.",
    "Yığındaki tüm ögeler silinir.",
    "Yığına son eklenen öge dizinin ilk elemanı olur.",
    "Ögeler alfabetik sıraya göre kopyalanır."
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v4-12",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 12"
  },
  {
   "soru": "Kuyruk (queue) yapıları genellikle hangi amaçla kullanılır?",
   "sec": [
    "Hiyerarşik verileri ağaç biçiminde tutmak",
    "Ögeleri oluştukları sırayla depolamak ve işletim sistemindeki ya da yazdırma biriktiricisindeki işlemleri sıraya sokmak",
    "Son eklenen ögeyi ilk çıkarmak",
    "Verileri anahtar-değer çiftleri olarak saklamak",
    "İki küme arasındaki kesişimi bulmak"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v4-13",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 13"
  },
  {
   "soru": "Konsoldan girilen bir kelimenin harfleri sırayla bir yığına eklenip ardından tek tek çıkarılarak yazdırılırsa “KALEM” kelimesi için ekranda ne görülür?",
   "sec": [
    "MKALE",
    "KMELA",
    "MELAK",
    "ELMAK",
    "KALEM"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v4-14",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 14"
  },
  {
   "soru": "Acil servis örneğinde hastaların kuyruğa isim ve öncelik bilgisiyle eklenmesinden önce ilk olarak hangi bölümde önceliklendirildiği belirtilmiştir?",
   "sec": [
    "Triaj",
    "Yoğun bakım",
    "Kayıt",
    "Laboratuvar",
    "Taburcu"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v4-15",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 15"
  },
  {
   "soru": "Seçerek Sıralama (Selection Sort) algoritması [29, 10, 14, 37, 13] dizisine uygulandığında ilk adım tamamlandıktan sonra dizi nasıl görünür?",
   "sec": [
    "[10, 29, 14, 37, 13]",
    "[10, 14, 29, 37, 13]",
    "[10, 13, 14, 29, 37]",
    "[29, 10, 14, 13, 37]",
    "[13, 10, 14, 37, 29]"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v4-16",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 16"
  },
  {
   "soru": "Sıralama algoritmalarını birbirinden ayıran en önemli fark olarak ders kitabında belirtilen özellik aşağıdakilerden hangisidir?",
   "sec": [
    "Kullandıkları değişken adları",
    "Programlama dili",
    "Kod satırı sayısı",
    "Performansları",
    "Geliştirildikleri yıl"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v4-17",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 17"
  },
  {
   "soru": "Ders kitabında Ekleme Sıralama (Insertion Sort) algoritmasının çalışma mantığı aşağıdaki örneklerden hangisine benzetilmiştir?",
   "sec": [
    "Üst üste konan tabaklar",
    "Kitapların kitaplığa yerleştirilmesi",
    "Acil serviste triaj",
    "Bilet kuyruğunda bekleyen kişiler",
    "Sözlükte kelime aranması"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v4-18",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 18"
  },
  {
   "soru": "Ekleme Sıralama (Insertion Sort) algoritması [5, 2, 4, 6, 1, 3] dizisine uygulanırken ilk üç eleman sıralandıktan (iki ekleme adımı tamamlandıktan) sonra dizi nasıl görünür?",
   "sec": [
    "[1, 2, 4, 5, 6, 3]",
    "[1, 2, 3, 4, 5, 6]",
    "[2, 4, 5, 1, 6, 3]",
    "[2, 5, 4, 6, 1, 3]",
    "[2, 4, 5, 6, 1, 3]"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v4-19",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 19"
  },
  {
   "soru": "Ders kitabında sıralama algoritmalarının çalışma sürelerini ölçmek için algoritmalar hangi eleman sayılarıyla iki defa çalıştırılmıştır?",
   "sec": [
    "1000 ve 10000",
    "10000 ve 100000",
    "100 ve 1000",
    "500 ve 5000",
    "10 ve 100"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v4-20",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 20"
  },
  {
   "soru": "Genellikle Ѳ (Teta) ile gösterilen ve bir algoritmanın çalışma zamanının büyüme hızı üzerindeki asimptotik sınırı belirtmek için kullanılan durum aşağıdakilerden hangisidir?",
   "sec": [
    "Ortalama durum (Average case)",
    "En iyi durum (Best case)",
    "Alan karmaşıklığı",
    "Sabit zaman",
    "En kötü durum (Worst case)"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v5-01",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 1"
  },
  {
   "soru": "Algoritma tarafından her bir talimat setini yürütmek için geçen zamana ne ad verilir?",
   "sec": [
    "Akış şeması",
    "Alan karmaşıklığı",
    "Zaman karmaşıklığı",
    "Veri soyutlama",
    "Ham veri"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v5-02",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 2"
  },
  {
   "soru": "Big O karmaşıklık tablosuna göre girdi büyüklüğü n = 16 olduğunda O(n²) karmaşıklığının değeri kaçtır?",
   "sec": [
    "32",
    "64",
    "256",
    "4.096",
    "65.536"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v5-03",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 3"
  },
  {
   "soru": "Big O karmaşıklık tablosuna göre girdi büyüklüğü n = 8 olduğunda üstel O(2ⁿ) karmaşıklığının değeri kaçtır?",
   "sec": [
    "16",
    "24",
    "64",
    "256",
    "512"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v5-04",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 4"
  },
  {
   "soru": "Verilerin en temel dijital biçiminde tanımlanması için kullanılan veriler aşağıdakilerden hangisidir?",
   "sec": [
    "Şifreli veriler",
    "Sıralanmış veriler",
    "Soyut veriler",
    "Karma veriler",
    "Ham veriler"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v5-05",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 5"
  },
  {
   "soru": "C# dilinde sıralanmış kümeleri temsil eden SortedSet sınıfı hangi ad alanında (namespace) bulunmaktadır?",
   "sec": [
    "System.Net",
    "System.Text",
    "System.IO",
    "System.Collections.Generic",
    "System.Diagnostics"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v5-06",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 6"
  },
  {
   "soru": "Gerektiğinde kolayca yeni ögeler eklenebilen büyük veri koleksiyonlarını depolamak için kullanılan ve System.Collections ad alanında bulunan dizi listesi sınıfı aşağıdakilerden hangisidir?",
   "sec": [
    "HashSet",
    "Stack",
    "Hashtable",
    "SortedSet",
    "ArrayList"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v5-07",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 7"
  },
  {
   "soru": "int[][] sayılar = new int[3][]; sayılar[0] = new int[] { 9, 5 }; sayılar[1] = new int[] { 0, 2, 5, 7 }; sayılar[2] = new int[] { 11 }; Yukarıda tanımlanan pürüzlü dizi için sayılar[1][2] ifadesinin değeri kaçtır?",
   "sec": [
    "2",
    "5",
    "7",
    "9",
    "11"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v5-08",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 8"
  },
  {
   "soru": "C# dilinde tam sayı türünde bir dizi tanımlandığında ögelerine ilk değer olarak ne atanır?",
   "sec": [
    "Bir (1)",
    "Sıfır (0)",
    "Dizinin uzunluğu",
    "Eksi bir (-1)",
    "Rastgele bir değer"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v5-09",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 9"
  },
  {
   "soru": "A = {2, 4, 6, 8} ve B = {4, 8, 10} karma kümeleri için A.IntersectWith(B) (kesişme) işleminden sonra A kümesinin elemanları aşağıdakilerden hangisidir?",
   "sec": [
    "{2, 6, 10}",
    "{2, 4, 6, 8, 10}",
    "{2, 6}",
    "{4, 8}",
    "{10}"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v5-10",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 10"
  },
  {
   "soru": "Yığın (stack) veri yapısı hangi prensiple çalışan veri yapısı olarak bilinir?",
   "sec": [
    "İlk Giren İlk Çıkar (FIFO)",
    "Son Giren İlk Çıkar (LIFO)",
    "İndise göre doğrudan erişim",
    "Önceliğe göre rastgele çıkar",
    "Ortadaki ilk çıkar"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v5-11",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 11"
  },
  {
   "soru": "Kuyruk yapısına yeni öge ekleme işlemi aşağıdakilerden hangisi olarak adlandırılır?",
   "sec": [
    "Enqueue (Sıraya Alma)",
    "Dequeue (Sıradan Çıkarma)",
    "Peek",
    "Push (İtme)",
    "Pop (Çekme)"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v5-12",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 12"
  },
  {
   "soru": "Stack sınıfının Contains yöntemi ile ilgili aşağıdakilerden hangisi doğrudur?",
   "sec": [
    "Öge yığında mevcut ise True, mevcut değilse False değer döndürür.",
    "Yığındaki tüm ögeleri temizler.",
    "Yığının tepesine yeni bir öge ekler.",
    "Yığının içeriğini bir diziye kopyalar.",
    "Ögeyi yığından çıkararak döndürür."
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v5-13",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 13"
  },
  {
   "soru": "yigin.Push(\"Ankara\"); yigin.Push(\"İstanbul\"); yigin.Push(\"İzmir\"); yigin.Pop(); yigin.Push(\"Bursa\"); yigin.Peek(); Boş bir yığına sırasıyla yukarıdaki işlemler uygulandığında son satırdaki Peek işleminin döndürdüğü değer aşağıdakilerden hangisidir?",
   "sec": [
    "Ankara",
    "İzmir",
    "Hiçbir değer döndürmez",
    "İstanbul",
    "Bursa"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v5-14",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 14"
  },
  {
   "soru": "Boş bir kuyruğa sırasıyla Enqueue(5), Enqueue(8), Enqueue(3), Dequeue(), Enqueue(7) işlemleri uygulandıktan sonra Peek işlemi hangi değeri döndürür?",
   "sec": [
    "3",
    "5",
    "7",
    "8",
    "15"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-v5-15",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 15"
  },
  {
   "soru": "Baloncuk Sıralama (Bubble Sort) algoritmasına bu adın verilmesinin nedeni aşağıdakilerden hangisidir?",
   "sec": [
    "Pivot elemana göre diziyi iki gruba ayırması",
    "Verileri kovalara dağıtması",
    "Listenin bir başından diğer başına kadar kayan bir baloncuk görüntüsü vermesi",
    "Her elemanı önceki elemanlar arasındaki yerine eklemesi",
    "En küçük elemanı seçip başa yerleştirmesi"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v5-16",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 16"
  },
  {
   "soru": "Baloncuk Sıralama algoritması [5, 1, 4, 2, 8] dizisini artan sırada sıralarken dış döngünün ilk geçişi tamamlandıktan sonra dizi nasıl görünür?",
   "sec": [
    "[1, 5, 4, 2, 8]",
    "[5, 1, 4, 2, 8]",
    "[1, 4, 2, 5, 8]",
    "[1, 2, 4, 5, 8]",
    "[1, 4, 5, 2, 8]"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-v5-17",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 17"
  },
  {
   "soru": "Sıralama algoritmalarında sözü edilen “performans” aşağıdakilerden hangisini ifade eder?",
   "sec": [
    "Algoritmanın geliştirildiği yılı",
    "Algoritmanın çalışırken harcadığı kaynak ve sıralama yapılırken geçen süreyi",
    "Kullanılan programlama dilini",
    "Kodun satır sayısını",
    "Dizideki en büyük elemanın değerini"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-v5-18",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 18"
  },
  {
   "soru": "Seçerek Sıralama (Selection Sort) algoritması [29, 10, 14, 37, 13] dizisine uygulandığında ikinci adım tamamlandıktan sonra dizi nasıl görünür?",
   "sec": [
    "[10, 13, 14, 37, 29]",
    "[10, 13, 14, 29, 37]",
    "[13, 10, 14, 37, 29]",
    "[10, 29, 14, 37, 13]",
    "[10, 14, 29, 37, 13]"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-v5-19",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 19"
  },
  {
   "soru": "Ders kitabında sıralama algoritmalarının çalışma sürelerini gözlemlemek için kullanılacağı belirtilen sınıf aşağıdakilerden hangisidir?",
   "sec": [
    "Hashtable",
    "ArrayList",
    "Random",
    "CArray",
    "Timing"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-v5-20",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 20"
  },
  {
   "soru": "Sistemdeki bir akışı veya dinamik ilişkiler kümesini temsil eden diyagrama ne ad verilir?",
   "sec": [
    "Akış şeması",
    "Büyük O notasyonu",
    "Asimptotik analiz",
    "Bağlantı",
    "Alan karmaşıklığı"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-a2023-01",
   "unite": 1,
   "kaynak": "2023 Ara Sınav · Soru 1"
  },
  {
   "soru": "Algoritmanın çalışma süresi, N kez logaritmik bir işlem gerçekleştirmenin sonucu olarak hesaplanmaktadır. Ortalama hızlı sıralama (quick sort), yığın sıralama (heap sort) ve birleştirme sıralama (merge sort) durumu ------- zaman alan algoritmalara örnek olarak verilebilir.\n\nYukarıdaki ifadede boş bırakılan yeri aşağıdakilerden hangisi doğru şekilde tamamlar?",
   "sec": [
    "Logaritmik",
    "Kuadratik",
    "Doğrusal",
    "Faktöriyel",
    "Doğrusal Aritmik"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-a2023-02",
   "unite": 1,
   "kaynak": "2023 Ara Sınav · Soru 2"
  },
  {
   "soru": "Aşağıdaki C# veri tiplerinden hangisi gerçek sayı türlerinden biridir?",
   "sec": [
    "long",
    "int",
    "float",
    "let",
    "short"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-a2023-04",
   "unite": 1,
   "kaynak": "2023 Ara Sınav · Soru 4"
  },
  {
   "soru": "Aşağıdakilerden hangisi doğrusal olmayan veri yapısı sınıflarından biridir?",
   "sec": [
    "Yığın",
    "Graf",
    "Dizi",
    "Linkli liste",
    "Kuyruk"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-a2023-05",
   "unite": 1,
   "kaynak": "2023 Ara Sınav · Soru 5"
  },
  {
   "soru": "C# dilinde \"arrayList.Count\" yapısı aşağıdakilerden hangisini döndürmek için kullanılır?",
   "sec": [
    "Dizi listesinde kaç elemanın saklanabileceğini",
    "Ögenin dizi listesindeki ilk bulduğu konumu",
    "Ögenin son bulunduğu dizin değerini",
    "Belirtilen dizinden başlayarak kaldırılacak öge sayısını",
    "Dizi listesinde depolanan elemanların sayısını"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-a2023-06",
   "unite": 2,
   "kaynak": "2023 Ara Sınav · Soru 6"
  },
  {
   "soru": "Yukarıdaki kod bloğunun ekran çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "Pazartesi\nSalı\nÇarşamba",
    "Salı\nPerşembe\nPazar",
    "Salı\nÇarşamba\nCumartesi",
    "Pazartesi\nÇarşamba\nPazar",
    "Pazartesi\nÇarşamba\nCumartesi"
   ],
   "dogru": 1,
   "kod": "using System;\npublic class Program\n{\npublic static void Main()\n{\nString[] haftagunleri = { \"Pazartesi\", \n\"Salı\",\n\"Çarşamba\",\n\"Perşembe\",\n\"Cuma\",\n\"Cumartesi\",\n\"Pazar\"\n};\nConsole.WriteLine(haftagunleri[1]);\nConsole.WriteLine(haftagunleri[3]);\nConsole.WriteLine(haftagunleri[6]);\n}\n}",
   "tip": "code",
   "cevap": "Salı\nPerşembe\nPazar",
   "id": "vy-a2023-07",
   "unite": 2,
   "kaynak": "2023 Ara Sınav · Soru 7"
  },
  {
   "soru": "Sözlük sınıfında tüm ögeleri kaldırmak için kullanılan yöntem aşağıdakilerden hangisidir?",
   "sec": [
    "Add",
    "ContainsValue",
    "Count",
    "Remove",
    "Clear"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-a2023-08",
   "unite": 2,
   "kaynak": "2023 Ara Sınav · Soru 8",
   "aciklama": "Sözlük ve koleksiyonlarda tüm elemanları temizlemek için Clear yöntemi kullanılır."
  },
  {
   "soru": "Yukarıdaki kod bloğunda örneği verilen dizi türü aşağıdakilerden hangisidir?",
   "sec": [
    "Tek boyutlu dizi",
    "Üç boyutlu dizi",
    "İki boyutlu dizi",
    "Pürüzlü dizi",
    "Matris dizi"
   ],
   "dogru": 3,
   "kod": "int [ ] [ ] dizi = new int[3] [ ];\n{\nnew int [ ] { {1,5}, {5,3} },\nnew int [ ] { {0,4,5}, {8,6,7}, {3,10,15} },\nnew int [ ] { {11,44}, {66,77}, {0,6} }\n};",
   "tip": "mcq",
   "id": "vy-a2023-10",
   "unite": 2,
   "kaynak": "2023 Ara Sınav · Soru 10"
  },
  {
   "soru": "C#'ta başlangıç kapasitesi 50 eleman olan ve kapasitesi dolduğunda bir sonraki kapasitesinin 150 eleman olması istenen kuyruk yapısını oluşturmak için aşağıdakilerden hangisi kullanılır?",
   "sec": [
    "Stack myStack = new Stack(50,150)",
    "Stack myStack = new Stack(50,3)",
    "Queue myQueue = new Queue(50)",
    "Queue myQueue = new Queue(50, 3)",
    "Queue myQueue = new Queue(50, 150)"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-a2023-12",
   "unite": 3,
   "kaynak": "2023 Ara Sınav · Soru 12",
   "aciklama": "Queue sınıfında ikinci parametre büyüme katsayısı (çarpan) olarak görev yapar; 50 × 3 = 150 sonucunu verir."
  },
  {
   "soru": "Bir ögenin, yığın içerisinde bulunup bulunmadığını kontrol etmek amacıyla kullanılan yöntem aşağıdakilerden hangisidir?",
   "sec": [
    "Pop",
    "ToArray",
    "Contains",
    "Peek",
    "Push"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-a2023-13",
   "unite": 3,
   "kaynak": "2023 Ara Sınav · Soru 13",
   "aciklama": "Yığın ve koleksiyonlarda bir öğenin varlığını kontrol etmek için Contains yöntemi kullanılır."
  },
  {
   "soru": "-En üstteki ögeyi yığından çıkarmak için RemoveAt metodunu çağırır.\n-Index değişkenini 1 azaltır.\n-Yığından çıkarılan nesneyi döndürür.\n\nYığın sınıflarında yukarıdaki işlemleri gerçekleştiren yöntem aşağıdakilerden hangisidir?",
   "sec": [
    "Constructor",
    "Clear",
    "Pop",
    "Peek",
    "Count"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-a2023-15",
   "unite": 3,
   "kaynak": "2023 Ara Sınav · Soru 15"
  },
  {
   "soru": "- Dizi elemanlarından biri pivot değer olarak seçilerek algoritma başlatılır. Pivot, baştaki eleman seçilebileceği gibi rastgele bir elemanda seçilebilir.\n- Pivot seçildikten sonra dizinin diğer elemanları, pivottan küçük veya büyük olmasına göre iki gruba ayrılır.\n- Sonraki adımda, bu iki grup kendi içlerinde tekrar bölünerek sıralanır.\n- Grupların sıralaması için sıralama algoritması özyinelemeli (recursive) olarak çalıştırılır.\n\nYukarıda açıklaması verilen sıralama algoritması aşağıdakilerden hangisidir?",
   "sec": [
    "Baloncuk sıralama",
    "Ekleme sıralama",
    "Rastgele sıralama",
    "Hızlı sıralama",
    "Seçerek sıralama"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-a2023-16",
   "unite": 4,
   "kaynak": "2023 Ara Sınav · Soru 16"
  },
  {
   "soru": "45, 50, 33, 16, 52 sayılarından oluşan bir dizi Seçerek Sıralama Algoritmasında sıralanıyor. Buna göre Algoritmanın çalışma aşamaları aşağıdakilerden hangisinde doğru verilmiştir?",
   "sec": [
    "1. Adım: 45 50 33 16 52\n2. Adım: 33 45 50 16 52\n3. Adım: 16 33 45 50 52",
    "1. Adım: 45 50 16 33 52\n2. Adım: 16 33 50 45 52\n3. Adım: 16 33 45 50 52",
    "1. Adım: 45 33 16 50 52\n2. Adım: 33 16 45 50 52\n3. Adım: 16 33 45 50 52",
    "1. Adım: 45 16 33 50 52\n2. Adım: 33 16 45 50 52\n3. Adım: 16 33 45 50 52",
    "1. Adım: 16 50 33 45 52\n2. Adım: 16 33 50 45 52\n3. Adım: 16 33 45 50 52"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-a2023-17",
   "unite": 4,
   "kaynak": "2023 Ara Sınav · Soru 17",
   "aciklama": "Seçerek sıralamada her adımda en küçük eleman bulunup başa alınır: 1. adımda 16 ile 45 yer değiştirir (16 50 33 45 52), ardından diğer adımlar tamamlanır."
  },
  {
   "soru": "Veri tipleri ile ilgili aşağıdakilerden hangisi yanlıştır?",
   "sec": [
    "Belirli bir değişkene yalnızca verilen veri türünün değerlerinin atanabileceğini belirtir.",
    "Yığın, kuyruk, ağaç örnek verilebilir.",
    "Zaman karmaşıklığı yoktur.",
    "Yalnızca depolanabilecek veri türünü temsil ettiği için verilerin değeri saklanmaz.",
    "Değer tutabilir ama veri tutamaz."
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-a2024-03",
   "unite": 1,
   "kaynak": "2024 Ara Sınav · Soru 3"
  },
  {
   "soru": "“Belirli bir işlev için büyüme tavanı olarak tanımlanabilir. Bir algoritmanın çalışma zamanının büyüme hızı için bize asimptotik bir üst sınır sağlamaktadır. Yazılım geliştiriciler genellikle bu durum için çözüm üretmektedir.”\n\nYukarıda açıklanan algoritmalar için zaman karmaşıklığı durumu aşağıdakilerden hangisidir?",
   "sec": [
    "Faktöriyel durum",
    "En kötü durum",
    "Sabit durum",
    "Ortalama durum",
    "En iyi durum"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-a2024-04",
   "unite": 1,
   "kaynak": "2024 Ara Sınav · Soru 4",
   "aciklama": "Büyüme tavanı ve asimptotik üst sınır Büyük O notasyonu ile ifade edilen en kötü durumu belirtir."
  },
  {
   "soru": "-------, sistemdeki bir akışı veya dinamik ilişkiler kümesini temsil eden diyagram için kullanılan bir terimdir. Karmaşık bir sistemi yapılandırmak ve sıralamak ya da ögelerin altında yatan yapıyı ve bunların etkileşimini ortaya çıkarmak için kullanılır.\n\nYukarıdaki paragrafta boş bırakılan yeri aşağıdakilerden hangisi doğru bir şekilde tamamlar?",
   "sec": [
    "Veri yapısı",
    "Algoritma",
    "Akış şeması",
    "Program",
    "İşlem"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-a2024-05",
   "unite": 1,
   "kaynak": "2024 Ara Sınav · Soru 5"
  },
  {
   "soru": "Aşağıda sözlük veri yapısı ile ilgili bir kod bloğu verilmiştir.\n\nBuna göre aşağıdaki anahtar değer eşleşmelerinden hangisi yanlıştır?",
   "sec": [
    "Anahtar: Amerika, Değer: Chicago, New York, Washington",
    "Anahtar: İngiltere, Değer: London, Manchester, Birmingham",
    "Anahtar: Çin, Değer: Pekin, Vuhan, Şanghay",
    "Anahtar: Türkiye, Değer: Ankara, İstanbul, Eskişehir",
    "Anahtar: Hindistan, Değer: New Delhi, Pune"
   ],
   "dogru": 4,
   "kod": "var sehirler = new Dictionary<string, string> ()\n{\n {\"Türkiye\", \"Ankara, İstanbul, Eskişehir\"},\n {\"İngiltere\", \"London, Manchester, Birmingham\"},\n {\"Hindistan\", \"Mumbai, New Delhi, Pune\"},\n {\"Amerika\", \"Chicago, New York, Washington\"},\n {\"Çin\", \"Pekin, Vuhan, Şanghay\"}\n};\nforeach(var kvp in sehirler )\nConsole.WriteLine(\"Anahtar: {0}, Değer: {1}\", kvp.Key, kvp.Value);",
   "tip": "mcq",
   "id": "vy-a2024-06",
   "unite": 2,
   "kaynak": "2024 Ara Sınav · Soru 6"
  },
  {
   "soru": "int, string veya kullanıcı tanımlı bir sınıf gibi aynı türden birçok değişkeni saklamak için kullanılabilen bir veri yapısıdır. Eleman sayısı ilk değer atama işleminden sonra değiştirilemez.\n\nYukarıda açıklaması verilen veri yapısı aşağıdakilerden hangisidir?",
   "sec": [
    "Küme",
    "Hashtable",
    "Ağaç",
    "Dizi",
    "Sözlük"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-a2024-07",
   "unite": 2,
   "kaynak": "2024 Ara Sınav · Soru 7"
  },
  {
   "soru": "Tek taraflı veri giriş ve çıkışına izin verilir ve verileri sıralı olarak tutar. Yalnızca tepe olarak adlandırılan, en sondan erişilebilen ögelerin bir listesi olarak tanımlanabilir.\n\nYukarıda açıklaması verilen veri yapısı türü aşağıdakilerden hangisidir?",
   "sec": [
    "Kuyruk",
    "Liste",
    "Ağaç",
    "Yığın",
    "Linkli liste"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-a2024-11",
   "unite": 3,
   "kaynak": "2024 Ara Sınav · Soru 11"
  },
  {
   "soru": "Yukarıdaki kod bloğunun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "İngiltere\nTürkiye\nİtalya\nAlmanya",
    "Türkiye\nAlmanya\nİngiltere\nİtalya",
    "Almanya\nİngiltere\nTürkiye\nİtalya",
    "Türkiye\nİngiltere\nAlmanya\nİtalya",
    "Almanya\nİtalya\nTürkiye\nİngiltere"
   ],
   "dogru": 4,
   "kod": "using System;\nusing System.Collections;\nclass GFG {\n public static void Main()\n {\n Stack myStack = new Stack();\n myStack. Push(\"İngiltere\"); \n myStack. Push(\"Türkiye\");\n myStack. Push(\"İtalya\");\n myStack. Push(\"Almanya\");\n string[] array = new string [myStack. Count];\n myStack.CopyTo(array, 0);\n for (int i = 0; i < array.Length; i++)\n {\n Console.WriteLine(array[i]);\n }\n }\n}",
   "tip": "code",
   "cevap": "Almanya\nİtalya\nTürkiye\nİngiltere",
   "id": "vy-a2024-12",
   "unite": 3,
   "kaynak": "2024 Ara Sınav · Soru 12"
  },
  {
   "soru": "Hızlı sıralama algoritmasının bir dizi n öğeyi sıralamak için en kötü durum zaman karmaşıklığı aşağıdakilerden hangisidir?",
   "sec": [
    "O(nlogn)",
    "O(n^2)",
    "O(logn)",
    "O(n^3)",
    "O(n)"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-a2024-16",
   "unite": 4,
   "kaynak": "2024 Ara Sınav · Soru 16"
  },
  {
   "soru": "26, 45, 22, 15, 7 sayılarından oluşan bir dizinin Ekleme sıralama algoritmasında sıralanması isteniyor. Algoritmanın çalışma aşamaları aşağıdakilerden hangisidir?",
   "sec": [
    "1.Adım: 15 22 26 45 7\n2.Adım: 22 26 45 15 7\n3.Adım: 7 15 22 26 45",
    "1.Adım: 15 22 26 45 7\n2.Adım: 26 45 22 15 7\n3.Adım: 22 26 45 15 7",
    "1.Adım: 26 45 22 15 7\n2.Adım: 22 26 45 15 7\n3.Adım: 15 22 26 45 7",
    "1.Adım: 15 22 26 45 7\n2.Adım: 26 45 22 15 7\n3.Adım: 22 26 45 15 7",
    "1.Adım: 26 45 22 15 7\n2.Adım: 15 22 26 45 7\n3.Adım: 22 26 45 15 7"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-a2024-17",
   "unite": 4,
   "kaynak": "2024 Ara Sınav · Soru 17"
  },
  {
   "soru": "Ekleme sıralama algoritması, iki adet döngü içerir. İlk döngü dizi elemanları üzerinde teker teker gezerken ikinci döngü sıradaki elemanı, önceki adımlarda düzenlenmiş olan elemanlar arasında olması gereken yere yerleştirir.\n\nYukarıdaki açıklamaya göre, ekleme sıralama algoritmasının BigO notasyonuna göre karmaşıklığı aşağıdakilerden hangisidir?",
   "sec": [
    "n^2",
    "n",
    "n^3",
    "n/2",
    "n*2"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-a2024-18",
   "unite": 4,
   "kaynak": "2024 Ara Sınav · Soru 18"
  },
  {
   "soru": "-------, algoritması, listedeki elemanları, ikili olarak yanındaki ile karşılaştırır ve sıralama yapılmak istenen yönde yer değiştirir. Artan sıralama yapılıyorsa büyük olan eleman sağ tarafa, küçük eleman sol tarafa alınarak yerleştirme yapılır.\n\nYukarıdaki açıklamada boş bırakılan yeri aşağıdakilerden hangisi doğru şekilde tamamlar?",
   "sec": [
    "Hızlı sıralama",
    "Ekleme sıralama",
    "Seçerek sıralama",
    "Baloncuk sıralama",
    "Selection sıralama"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-a2024-19",
   "unite": 4,
   "kaynak": "2024 Ara Sınav · Soru 19"
  },
  {
   "soru": "Aşağıdakilerden hangisi algoritmanın özelliklerinden biri değildir?",
   "sec": [
    "Algoritma, yalnızca sınırlı sayıda komut yürütüldükten sonra durmalıdır.",
    "Algoritma, bir problem çözümünde tamamen belirli bir programlama diline bağlıdır.",
    "Algoritma, bir dizi girdiye uygulanır ve çıktı üretir.",
    "Algoritmanın her adımı benzersiz bir şekilde tanımlanmalıdır.",
    "Algoritmanın adımları kesin olarak belirtilmelidir."
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-a2025-04",
   "unite": 1,
   "kaynak": "2025 Ara Sınav · Soru 4"
  },
  {
   "soru": "I. Bilgisayardaki dijital verileri depolamayı sağlar.\nII. Veriler üzerinde farklı eylemlerin gerçekleştirilmesini sağlar.\nIII. Farklı görevlerin uzay ve zaman karmaşıklığının azalmasını sağlar.\n\nVeri yapıları ile ilgili olarak yukarıdakilerden hangisi/hangileri doğrudur?",
   "sec": [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "II ve III",
    "I, II ve III"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-a2025-05",
   "unite": 1,
   "kaynak": "2025 Ara Sınav · Soru 5"
  },
  {
   "soru": "List<T> sınıfı ile ilgili aşağıdakilerden hangisi doğrudur?",
   "sec": [
    "List, yalnızca tek türde veri depolayabilir ve tür denetimi çalışma zamanı sırasında yapılır.",
    "List sınıfı, IList arayüzünü uygulamaz.",
    "List, System.Collections ad alanı altında gelir.",
    "List, ArrayList’ten daha yavaş çalışır ancak daha fazla özellik içerir.",
    "List, Add() ve AddRange() gibi yöntemlerle eleman eklenmesine izin verir."
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-a2025-07",
   "unite": 2,
   "kaynak": "2025 Ara Sınav · Soru 7"
  },
  {
   "soru": "Yukarıda C# dilinde tanımlanan dizinin boyutu aşağıdakilerden hangisidir?",
   "sec": [
    "2",
    "3",
    "4",
    "7",
    "9"
   ],
   "dogru": 1,
   "kod": "int[, ,] sayilar = new int[3, 4, 5];",
   "tip": "mcq",
   "id": "vy-a2025-09",
   "unite": 2,
   "kaynak": "2025 Ara Sınav · Soru 9"
  },
  {
   "soru": "I. Kuyruk yapısı, her zaman önce giren verinin önce çıktığı bir mantıkla çalışır.\nII. Kuyruğa yeni bir öge eklendiğinde listenin önüne eklenir.\nIII. Kuyruklar,öğeleri oluştukları sırayla depolamak için kullanılır.\n\nKuyruk(Queue) yapısı ile ilgili yukarıdakilerden hangisi/hangileri doğrudur?",
   "sec": [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "I ve III",
    "II ve III"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-a2025-11",
   "unite": 3,
   "kaynak": "2025 Ara Sınav · Soru 11"
  },
  {
   "soru": "\"-------\" yöntemi, ögeyi yığından çıkarmak zorunda kalmadan yığının tepesindeki ögenin değerine bakmayı sağlar. Bu yöntem, yığının en üstündeki ögeyi çıkarmadan değerini öğrenmek için kullanılabilir.\n\nYukarıdaki paragrafta boş bırakılan yeri aşağıdakilerden hangisi doğru şekilde tamamlar?",
   "sec": [
    "Pop",
    "Clear",
    "Push",
    "Peek",
    "Pull"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-a2025-12",
   "unite": 3,
   "kaynak": "2025 Ara Sınav · Soru 12"
  },
  {
   "soru": "I. Seçerek sıralama algoritması, her adımda dizinin en küçük elemanını bulur.\nII. n elemana sahip dizide n tekrar yapılarak işlem tamamlanır.\nIII. Algoritma yalnızca tek bir döngü kullanır.\n\nYukarıdakilerden hangisi/hangileri seçerek sıralama algoritması için doğrudur?",
   "sec": [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "I ve III",
    "II ve III"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-a2025-18",
   "unite": 4,
   "kaynak": "2025 Ara Sınav · Soru 18"
  },
  {
   "soru": "Aşağıdakilerden hangisi ekleme sıralama algoritması için doğrudur?",
   "sec": [
    "Ekleme sıralama, sıralı bir diziyi baştan sona tarayarak yeni elemanlar ekler.",
    "Algoritma, sıralama işlemini bitirene kadar tüm elemanları aynı anda karşılaştırır.",
    "Ekleme sıralama algoritması, her adımda dizinin en büyük elemanını bulur.",
    "Bu algoritma, rastgele dizideki elemanları sol taraftan başlayarak, sıradaki elemanı önceki elemanlar arasındaki uygun yere yerleştirir.",
    "Ekleme sıralama, yalnızca tek bir döngü kullanarak çalışır."
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-a2025-20",
   "unite": 4,
   "kaynak": "2025 Ara Sınav · Soru 20"
  },
  {
   "soru": "Aşağıdakilerden hangisi algoritma yazmak için gereken ön koşullardan biri değildir?",
   "sec": [
    "Problemin net tanımının yapılması",
    "Algoritmanın yalnızca C# diliyle kodlanabileceğinin belirlenmesi",
    "Sorunu çözmek için alınacak girdi miktarının belirlenmesi",
    "Problemin kısıtlarının göz önünde bulundurulması",
    "Sorun çözüldüğünde beklenen çıktının belirlenmesi"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-a2026-02",
   "unite": 1,
   "kaynak": "2026 Ara Sınav · Soru 2"
  },
  {
   "soru": "Bir nesne hakkındaki tüm niteliksel ve niceliksel değişkenliklerin sayısal değeri olduğu söylenen ve tek başlarına anlam ifade etmeyip bilginin ham maddesi olarak görülen kavram aşağıdakilerden hangisidir?",
   "sec": [
    "Sistem",
    "Program",
    "Bilgi",
    "Algoritma",
    "Veri"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-a2026-05",
   "unite": 1,
   "kaynak": "2026 Ara Sınav · Soru 5"
  },
  {
   "soru": "Hash tablosunun en önemli varsayımlarından biri; Anahtara dayalı bir Değer için çok hızlı arama yapabilen, O(1) işlem karmaşıklığında arama işlemi yapabilmesi gerekmektedir. Bu amaca ulaşmak için ------- kullanılmaktadır.\n\nYukarıdaki açıklamada boş bırakılan yeri aşağıdakilerden hangisi doğru şekilde tamamlar?",
   "sec": [
    "Değer (Value)",
    "Anahtar (Key)",
    "Sözlük (Dictionary)",
    "Hash Fonksiyonu (Hash Function)",
    "Hashtable Sınıfı"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-a2026-08",
   "unite": 2,
   "kaynak": "2026 Ara Sınav · Soru 8"
  },
  {
   "soru": "Aşağıdakilerden hangisi küme veri yapısının (Set) temel matematiksel modelleri ve işlemlerinden biri değildir?",
   "sec": [
    "Simetrik fark",
    "Birleştirme",
    "Sıralama",
    "Çıkarma",
    "Kesişme"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-a2026-09",
   "unite": 2,
   "kaynak": "2026 Ara Sınav · Soru 9"
  },
  {
   "soru": "Kuyruk (Queue) yapısının temel çalışma mantığı aşağıdakilerden hangisidir?",
   "sec": [
    "Son Giren İlk Çıkar (LIFO)",
    "Rastgele Erişim",
    "İlk Giren İlk Çıkar (FIFO)",
    "Yalnızca Push ve Pop işlemleri",
    "Tek taraflı veri girişi"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-a2026-12",
   "unite": 3,
   "kaynak": "2026 Ara Sınav · Soru 12"
  },
  {
   "soru": "Yığın veri yapısında, en üstteki/en öndeki ögeyi veri yapısından çıkarmadan yalnızca değerini öğrenmek için kullanılan yöntem aşağıdakilerden hangisidir?",
   "sec": [
    "Pop",
    "Push",
    "Clear",
    "Dequeue",
    "Peek"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "vy-a2026-13",
   "unite": 3,
   "kaynak": "2026 Ara Sınav · Soru 13"
  },
  {
   "soru": "C# dilinde Queue nesnesi kullanılarak yeni bir kuyruk oluşturulduğunda ve herhangi bir kapasite belirtilmediğinde, kuyruğun varsayılan başlangıç eleman kapasitesi kaçtır?",
   "sec": [
    "10",
    "20",
    "25",
    "32",
    "64"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "vy-a2026-14",
   "unite": 3,
   "kaynak": "2026 Ara Sınav · Soru 14"
  },
  {
   "soru": "Sıralama algoritmasında ideal zaman karmaşıklığı değeri olan O(1)’e ulaşmak için gereken iki şart aşağıdakilerden hangisidir?",
   "sec": [
    "Algoritmanın yalnızca küçük veri setleri ile çalışması ve özyinelemeli (recursive) olması gerekir.",
    "Veri setinin çok büyük olması ve algoritmanın tüm verileri ikili karşılaştırması gerekir.",
    "Algoritmaya verilen verilerin sıralı olması ve algoritmanın veri setinde tek bir gezinmede sıralamayı sonlandırması gerekir.",
    "Algoritmanın BigO notasyonunun O(nlogn) olması ve pivot değeri seçilmesi gerekir.",
    "Algoritmanın yalnızca tek bir döngü kullanması ve sabit zamanlı çalışması gerekir."
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-a2026-16",
   "unite": 4,
   "kaynak": "2026 Ara Sınav · Soru 16"
  },
  {
   "soru": "Bu algoritma, iki adet döngü içerir. İlk döngü dizi elemanları üzerinde teker teker gezerken ikinci döngü sıradaki elemanı, önceki adımlarda düzenlenmiş olan elemanlar arasında olması gereken yere yerleştirir.\n\nYukarıda açıklaması verilen sıralama algoritması aşağıdakilerden hangisidir?",
   "sec": [
    "Seçerek sıralama",
    "Ekleme sıralama",
    "Baloncuk sıralama",
    "Hızlı sıralama",
    "Rastgele sıralama"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "vy-a2026-18",
   "unite": 4,
   "kaynak": "2026 Ara Sınav · Soru 18"
  },
  {
   "soru": "Bilgisayar endüstrisinin başlangıcından bu yana depolanan veriler üzerinde en çok uygulanan iki temel işlem aşağıdakilerden hangisidir?",
   "sec": [
    "Sıkıştırma ve şifreleme işlemleri",
    "Güncelleme ve yedekleme işlemleri",
    "Sıralama ve arama işlemleri",
    "Veri madenciliği ve modelleme işlemleri",
    "Doğrulama ve iletim işlemleri"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "vy-a2026-19",
   "unite": 4,
   "kaynak": "2026 Ara Sınav · Soru 19"
  },
  {
   "soru": "45, 50, 33, 16, 52 sayılarından oluşan bir dizi Seçerek Sıralama Algoritmasına göre küçükten büyüğe doğru sıralanıyor.\n\nBuna göre algoritmanın çalışma aşamaları aşağıdakilerin hangisinde doğru verilmiştir?",
   "sec": [
    "1. Adım: 16 50 33 45 52\n2. Adım: 16 33 50 45 52\n3. Adım: 16 33 45 50 52",
    "1. Adım: 45 50 33 16 52\n2. Adım: 33 45 50 16 52\n3. Adım: 16 33 45 50 52",
    "1. Adım: 45 16 33 50 52\n2. Adım: 33 16 45 50 52\n3. Adım: 16 33 45 50 52",
    "1. Adım: 45 50 16 33 52\n2. Adım: 16 33 50 45 52\n3. Adım: 16 33 45 50 52",
    "1. Adım: 45 33 16 50 52\n2. Adım: 33 16 45 50 52\n3. Adım: 16 33 45 50 52"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "vy-a2026-20",
   "unite": 4,
   "kaynak": "2026 Ara Sınav · Soru 20",
   "aciklama": "Seçerek sıralamada her adımda en küçük eleman bulunup başa alınır: 1. adımda 16 ile 45 yer değiştirir (16 50 33 45 52), ardından diğer adımlar tamamlanır."
  }
 ]
};
