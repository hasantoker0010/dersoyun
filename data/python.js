(window.DERSLER = window.DERSLER || {})["python"] = {
 "ad": "Python ile Programlama",
 "kisa": "Python",
 "simge": ">>>",
 "renk": "#2FE0A8",
 "uniteler": {
  "1": "Python'a Giriş ve Çalışma Ortamı",
  "2": "Veri Türleri ve Operatörler",
  "3": "Akış Kontrolü ve Hata Ayıklama",
  "4": "Fonksiyonlar ve Modüller"
 },
 "sorular": [
  {
   "soru": "CPython yorumlayıcısının bir kaynak kodu çalıştırma sürecinde, soyut sözdizim ağacının (AST) oluşturulmasından hemen sonra gerçekleşen aşama aşağıdakilerden hangisidir?",
   "sec": [
    "Kaynağı okuma",
    "Kaynak kodu makine diline doğrudan çevirme",
    "Tokenlara ayırma",
    "Bytecode’a derleme",
    "PVM yürütmesi"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "py-v1-01",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 1",
   "aciklama": "Sıra: kaynağı okuma → tokenlara ayırma → AST → bytecode'a derleme → PVM'de yürütme."
  },
  {
   "soru": "Python’un ilk kamuya açık sürümü hangi yılda yayımlanmıştır?",
   "sec": [
    "1989",
    "1991",
    "1995",
    "2000",
    "2008"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v1-02",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 2"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "Merhaba Dünya!",
    "Merhaba Dünya",
    "MerhabaDünya!",
    "Merhaba Dünya !",
    "Merhaba!Dünya"
   ],
   "dogru": 0,
   "kod": "print(\"Merhaba\", end=\" \")\nprint(\"Dünya\", \"!\", sep=\"\")",
   "tip": "code",
   "cevap": "Merhaba Dünya!",
   "id": "py-v1-03",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 3"
  },
  {
   "soru": "Windows işletim sisteminde ortam adıyla oluşturulmuş bir sanal ortamı etkinleştirmek için kullanılan komut aşağıdakilerden hangisidir?",
   "sec": [
    "ortam\\Scripts\\activate",
    "pip install -r requirements.txt",
    "source ortam/bin/activate",
    "python -m venv ortam",
    "pip freeze > requirements.txt"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "py-v1-04",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 4"
  },
  {
   "soru": "Python topluluğunda kodun nasıl biçimlendirileceğine ilişkin stil kılavuzu olarak kabul edilen belge aşağıdakilerden hangisidir?",
   "sec": [
    "PEP 285",
    "PEP 257",
    "PEP 8",
    "PEP 498",
    "PEP 20"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v1-05",
   "unite": 1,
   "kaynak": "Vize 1 · Soru 5"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "3 2 3.4",
    "3 2 3",
    "4 2 3.4",
    "3.4 2 3",
    "3 3 3.4"
   ],
   "dogru": 0,
   "kod": "print(17 // 5, 17 % 5, 17 / 5)",
   "tip": "code",
   "cevap": "3 2 3.4",
   "id": "py-v1-06",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 6"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "akn",
    "rak",
    "ara",
    "nka",
    "kar"
   ],
   "dogru": 1,
   "kod": "s = \"Ankara\"\nprint(s[::-1][1:4])",
   "tip": "code",
   "cevap": "rak",
   "id": "py-v1-07",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 7"
  },
  {
   "soru": "Aşağıdaki ifadelerden hangisinin sonucu True’dur?",
   "sec": [
    "bool(0)",
    "bool(None)",
    "bool([])",
    "bool(\"\")",
    "bool(\"0\")"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "py-v1-08",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 8",
   "aciklama": "Boş olmayan her string (\"0\" dahil) True'dur. 0, None, [] ve \"\" ise False değerlidir."
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "1,234,568",
    "1,234,567.891",
    "1234567.89",
    "1.234.567,89",
    "1,234,567.89"
   ],
   "dogru": 4,
   "kod": "print(f\"{1234567.891:,.2f}\")",
   "tip": "code",
   "cevap": "1,234,567.89",
   "id": "py-v1-09",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 9"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "-4",
    "-3.7",
    "ValueError",
    "-3",
    "3"
   ],
   "dogru": 3,
   "kod": "print(int(-3.7))",
   "tip": "code",
   "cevap": "-3",
   "id": "py-v1-10",
   "unite": 2,
   "kaynak": "Vize 1 · Soru 10"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "CC",
    "FF",
    "BB",
    "AA",
    "BB CC"
   ],
   "dogru": 2,
   "kod": "puan = 75\nif puan >= 90:\n    print(\"AA\")\nelif puan >= 70:\n    print(\"BB\")\nelif puan >= 50:\n    print(\"CC\")\nelse:\n    print(\"FF\")",
   "tip": "code",
   "cevap": "BB",
   "id": "py-v1-11",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 11"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "6",
    "9",
    "12",
    "15",
    "21"
   ],
   "dogru": 1,
   "kod": "i = 0\ntoplam = 0\nwhile i < 6:\n    i += 1\n    if i % 2 == 0:\n        continue\n    toplam += i\nprint(toplam)",
   "tip": "code",
   "cevap": "9",
   "id": "py-v1-12",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 12"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "hepsi tek",
    "Hiçbir şey yazdırılmaz",
    "SyntaxError",
    "çift hepsi tek",
    "çift"
   ],
   "dogru": 0,
   "kod": "for n in [3, 5, 7]:\n    if n % 2 == 0:\n        print(\"çift\")\n        break\nelse:\n    print(\"hepsi tek\")",
   "tip": "code",
   "cevap": "hepsi tek",
   "id": "py-v1-13",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 13"
  },
  {
   "soru": "Yorumlayıcının fark edemediği, program hata vermeden çalıştığı hâlde yalnızca beklenen çıktı ile gerçek çıktının karşılaştırılmasıyla bulunabilen hata türü aşağıdakilerden hangisidir?",
   "sec": [
    "Çalışma zamanı hatası",
    "NameError",
    "ImportError",
    "Mantık hatası",
    "Söz dizimi hatası"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "py-v1-14",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 14"
  },
  {
   "soru": "breakpoint() ile başlatılan pdb hata ayıklayıcısında, sonraki satıra geçerken çağrılan fonksiyonun içine girerek daha derin izleme yapılmasını sağlayan komut aşağıdakilerden hangisidir?",
   "sec": [
    "l",
    "q",
    "c",
    "n",
    "s"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "py-v1-15",
   "unite": 3,
   "kaynak": "Vize 1 · Soru 15",
   "aciklama": "s (step) çağrılan fonksiyonun içine girer. n (next) fonksiyonu tek adımda geçer, c devam eder, q çıkar, l kodu listeler."
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "TypeError",
    "3 9",
    "1 13",
    "3 13",
    "3 12"
   ],
   "dogru": 3,
   "kod": "def f(a, b=2, *args):\n    return a + b + sum(args)\nprint(f(1), f(1, 3, 4, 5))",
   "tip": "code",
   "cevap": "3 13",
   "id": "py-v1-16",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 16"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "[1]",
    "None",
    "[2]",
    "[]",
    "[1, 2]"
   ],
   "dogru": 4,
   "kod": "def ekle(x, liste=[]):\n    liste.append(x)\n    return liste\nekle(1)\nprint(ekle(2))",
   "tip": "code",
   "cevap": "[1, 2]",
   "id": "py-v1-17",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 17"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "global",
    "UnboundLocalError",
    "dis",
    "x",
    "None"
   ],
   "dogru": 2,
   "kod": "x = \"global\"\ndef dis():\n    x = \"dis\"\n    def ic():\n        print(x)\n    ic()\ndis()",
   "tip": "code",
   "cevap": "dis",
   "id": "py-v1-18",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 18"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "[4, 16]",
    "[1, 4, 9, 16, 25]",
    "[1, 9, 25]",
    "[2, 6, 10]",
    "[1, 3, 5]"
   ],
   "dogru": 2,
   "kod": "sayilar = [1, 2, 3, 4, 5]\ntekler = filter(lambda x: x % 2 == 1,\nsayilar)\nprint(list(map(lambda x: x * x, tekler)))",
   "tip": "code",
   "cevap": "[1, 9, 25]",
   "id": "py-v1-19",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 19"
  },
  {
   "soru": "Bir Python dosyası başka bir dosyadan içe aktarılmadan, doğrudan python dosya.py komutuyla çalıştırıldığında bu dosyadaki __name__ değişkeninin değeri aşağıdakilerden hangisidir?",
   "sec": [
    "\"__init__\"",
    "\"__main__\"",
    "\"dosya\"",
    "\"dosya.py\"",
    "None"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v1-20",
   "unite": 4,
   "kaynak": "Vize 1 · Soru 20",
   "aciklama": "Doğrudan çalıştırılan dosyada __name__ değeri \"__main__\" olur; içe aktarılırsa modülün adı olur."
  },
  {
   "soru": "Guido van Rossum’un CWI araştırma merkezinde ekibinde çalıştığı ve Python’u “açık kalan uçlarını kapatan bir halef” olarak tasarladığı eğitim odaklı programlama dili aşağıdakilerden hangisidir?",
   "sec": [
    "Java",
    "Fortran",
    "Perl",
    "C++",
    "ABC"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "py-v2-01",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 1"
  },
  {
   "soru": "Tim Peters tarafından resmîleştirilen, Python’un tasarım felsefesini 19 aforizmayla özetleyen ve yorumlayıcıya import this yazıldığında ekrana gelen belge aşağıdakilerden hangisidir?",
   "sec": [
    "REPL",
    "PEP 8",
    "PyPI",
    "requirements.txt",
    "PEP 20 (Zen of Python)"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "py-v2-02",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 2"
  },
  {
   "soru": "REPL kısaltmasını oluşturan aşamalar aşağıdakilerin hangisinde doğru sırayla verilmiştir?",
   "sec": [
    "Döngü – Okuma – Değerlendirme – Yazdırma",
    "Değerlendirme – Okuma – Yazdırma – Döngü",
    "Okuma – Değerlendirme – Yazdırma – Döngü",
    "Okuma – Yazdırma – Değerlendirme – Döngü",
    "Yazdırma – Okuma – Döngü – Değerlendirme"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v2-03",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 3"
  },
  {
   "soru": "Hücre bazlı çalışmaya imkân tanıyan; kod, metin ve grafikleri aynı dokümanda birleştirebilen, veri analizi ve makine öğrenmesinde yaygın kullanılan web tabanlı ortam aşağıdakilerden hangisidir?",
   "sec": [
    "Jupyter Notebook",
    "IDLE",
    "Thonny",
    "VS Code",
    "PyCharm"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "py-v2-04",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 4"
  },
  {
   "soru": "Etkin bir sanal ortamda kurulu paketlerin sürümleriyle birlikte requirements.txt dosyasına kaydedilmesini sağlayan komut aşağıdakilerden hangisidir?",
   "sec": [
    "pip install requests",
    "python -m venv requirements.txt",
    "pip freeze > requirements.txt",
    "pip install -r requirements.txt",
    "deactivate requirements.txt"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v2-05",
   "unite": 1,
   "kaynak": "Vize 2 · Soru 5"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "TypeError",
    "yedi",
    "int",
    "7",
    "str"
   ],
   "dogru": 4,
   "kod": "x = 7\nx = \"yedi\"\nprint(type(x).__name__)",
   "tip": "code",
   "cevap": "str",
   "id": "py-v2-06",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 6"
  },
  {
   "soru": "Aşağıdakilerden hangisi Python’da geçerli bir değişken adıdır?",
   "sec": [
    "toplam-2",
    "ad soyad",
    "_toplam2",
    "@toplam",
    "2toplam"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v2-07",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 7"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "7 4",
    "25 4.0",
    "5.0 4.0",
    "5.0 4j",
    "7.0 3.0"
   ],
   "dogru": 2,
   "kod": "z = 3 + 4j\nprint(abs(z), z.imag)",
   "tip": "code",
   "cevap": "5.0 4.0",
   "id": "py-v2-08",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 8"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "True False False",
    "a 0 False",
    "0 5 False",
    "a 0 True",
    "a 5 True"
   ],
   "dogru": 3,
   "kod": "print(0 or \"a\", 5 and 0, not \"\")",
   "tip": "code",
   "cevap": "a 0 True",
   "id": "py-v2-09",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 9"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "5",
    "3",
    "6",
    "7",
    "4"
   ],
   "dogru": 0,
   "kod": "print(len(\"a\\tb\\\\n\"))",
   "tip": "code",
   "cevap": "5",
   "id": "py-v2-10",
   "unite": 2,
   "kaynak": "Vize 2 · Soru 10"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "2",
    "3",
    "2 3",
    "1 2",
    "1"
   ],
   "dogru": 0,
   "kod": "komut = \"dur\"\nmatch komut:\n    case \"git\":\n        print(1)\n    case \"dur\" | \"bekle\":\n        print(2)\n    case _:\n        print(3)",
   "tip": "code",
   "cevap": "2",
   "id": "py-v2-11",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 11"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "[0, 3, 6, 9]",
    "[10, 7, 4, 1]",
    "[10, 7, 4, 1, -2]",
    "[10, 7, 4]",
    "[7, 4, 1]"
   ],
   "dogru": 1,
   "kod": "print(list(range(10, 0, -3)))",
   "tip": "code",
   "cevap": "[10, 7, 4, 1]",
   "id": "py-v2-12",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 12"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "1234",
    "4",
    "9",
    "10",
    "24"
   ],
   "dogru": 3,
   "kod": "n = 1234\nt = 0\nwhile n > 0:\n    t += n % 10\n    n //= 10\nprint(t)",
   "tip": "code",
   "cevap": "10",
   "id": "py-v2-13",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 13"
  },
  {
   "soru": "Python’da hata oluştuğunda verilen, hata anındaki çağrı yığınının tam görüntüsünü içeren birkaç satırlık rapora ne ad verilir?",
   "sec": [
    "PEP",
    "Bytecode",
    "REPL",
    "Traceback (hata izleme)",
    "Dinamik tipleme"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "py-v2-14",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 14"
  },
  {
   "soru": "Python yorumlayıcısının kodu çalıştırmaya başlamadan önce ayrıştırma aşamasında fark ettiği; eksik iki nokta üst üste, eşleşmeyen parantez ya da tutarsız girinti gibi dil bilgisi ihlallerinden kaynaklanan hata türü aşağıdakilerden hangisidir?",
   "sec": [
    "Söz dizimi hatası (syntax error)",
    "Bağımlılık çakışması",
    "Float karşılaştırma tuzağı",
    "Çalışma zamanı hatası",
    "Mantık hatası"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "py-v2-15",
   "unite": 3,
   "kaynak": "Vize 2 · Soru 15"
  },
  {
   "soru": "Python’un LEGB kuralına göre bir ismi çözümlerken kapsamları aradığı sıra aşağıdakilerin hangisinde doğru olarak verilmiştir?",
   "sec": [
    "Yerel – Küresel – Kapsayan – Yerleşik",
    "Yerel – Kapsayan – Küresel – Yerleşik",
    "Yerleşik – Küresel – Kapsayan – Yerel",
    "Küresel – Yerel – Kapsayan – Yerleşik",
    "Kapsayan – Yerel – Yerleşik – Küresel"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v2-16",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 16"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "11",
    "1",
    "5",
    "6",
    "15"
   ],
   "dogru": 3,
   "kod": "def dis():\n    x = 1\n    def ic():\n        nonlocal x\n        x += 5\n    ic()\n    return x\nprint(dis())",
   "tip": "code",
   "cevap": "6",
   "id": "py-v2-17",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 17"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "['muz', 'elma', 'kivi', 'armut']",
    "['armut', 'elma', 'kivi', 'muz']",
    "['armut', 'kivi', 'elma', 'muz']",
    "['kivi', 'elma', 'muz', 'armut']",
    "['muz', 'kivi', 'elma', 'armut']"
   ],
   "dogru": 4,
   "kod": "meyveler = [\"kivi\", \"elma\", \"muz\", \"armut\"]\nprint(sorted(meyveler, key=len))",
   "tip": "code",
   "cevap": "['muz', 'kivi', 'elma', 'armut']",
   "id": "py-v2-19",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 19"
  },
  {
   "soru": "Python’da içinde __init__.py dosyası bulunan, birden fazla ilgili modülü barındıran ve büyük projelerde hiyerarşik isim alanı yönetimi sağlayan dizine ne ad verilir?",
   "sec": [
    "Kapsam",
    "Paket",
    "Modül",
    "Fonksiyon",
    "Sanal ortam"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v2-20",
   "unite": 4,
   "kaynak": "Vize 2 · Soru 20"
  },
  {
   "soru": "Python programlama dilinin adı aşağıdakilerden hangisinden gelmektedir?",
   "sec": [
    "Yunan mitolojisindeki Python adlı ejderhadan",
    "Guido van Rossum’un çalıştığı CWI araştırma merkezindeki bir projeden",
    "İngiliz komedi grubu Monty Python’ın BBC dizisi Monty Python’s Flying Circus’tan",
    "Piton yılanının hızlı ve esnek yapısından",
    "ABC dilini geliştiren ekibin kısaltmasından"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v3-01",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 1"
  },
  {
   "soru": "Tartu Üniversitesi tarafından geliştirilen, açık kaynak lisanslı; adım adım hata ayıklama ve değişken görselleştirme özellikleriyle başlangıç düzeyine çok uygun olan ancak büyük projeler için yetersiz kalan IDE aşağıdakilerden hangisidir?",
   "sec": [
    "Thonny",
    "Jupyter Notebook",
    "PyCharm",
    "VS Code",
    "IDLE"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "py-v3-02",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 2"
  },
  {
   "soru": "Python’un Windows işletim sistemine kurulumunda, .exe yükleyici çalıştırıldıktan sonra açılan pencerede mutlaka işaretlenmesi gereken kutu aşağıdakilerden hangisidir?",
   "sec": [
    "Install for all users",
    "Disable path length limit",
    "Customize installation",
    "Add python.exe to PATH",
    "Install launcher only"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "py-v3-03",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 3"
  },
  {
   "soru": "Programlama örneklerinde anlamı önemsenmeden kullanılan geçici yer tutucu adlar için genellikle “foo” ve “bar” kullanılır. Python dünyasında bu adların yerine Monty Python skeçlerine gönderme yapılarak sıklıkla kullanılan adlar aşağıdakilerin hangisinde verilmiştir?",
   "sec": [
    "x, y ve z",
    "spam, eggs ve ham",
    "temp, tmp ve var",
    "alpha, beta ve gamma",
    "hello, world ve test"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v3-04",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 4"
  },
  {
   "soru": "Aralık 2008’de bilinçli olarak geriye dönük uyumsuz büyük sürüm olarak duyurulan Python sürümü aşağıdakilerden hangisidir?",
   "sec": [
    "Python 3.10",
    "Python 2.0",
    "Python 1.0",
    "Python 2.7",
    "Python 3.0"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "py-v3-05",
   "unite": 1,
   "kaynak": "Vize 3 · Soru 5"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "[1, 2, 3] 3",
    "[1, 2] 3",
    "[1, 2] 2",
    "[3] 1",
    "[1, 2, 3] 2"
   ],
   "dogru": 0,
   "kod": "a = b = [1, 2]\na.append(3)\nprint(b, len(b))",
   "tip": "code",
   "cevap": "[1, 2, 3] 3",
   "id": "py-v3-06",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 6"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "12",
    "36",
    "64",
    "256",
    "512"
   ],
   "dogru": 4,
   "kod": "print(2 ** 3 ** 2)",
   "tip": "code",
   "cevap": "512",
   "id": "py-v3-07",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 7"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "False False",
    "True False",
    "0.3 0.3",
    "False True",
    "True True"
   ],
   "dogru": 3,
   "kod": "from decimal import Decimal\nprint(0.1 + 0.2 == 0.3,\n      Decimal(\"0.1\") + Decimal(\"0.2\") ==\nDecimal(\"0.3\"))",
   "tip": "code",
   "cevap": "False True",
   "id": "py-v3-08",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 8"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "0",
    "None",
    "ZeroDivisionError",
    "True",
    "False"
   ],
   "dogru": 4,
   "kod": "x = 0\nprint(x != 0 and 10 / x > 1)",
   "tip": "code",
   "cevap": "False",
   "id": "py-v3-10",
   "unite": 2,
   "kaynak": "Vize 3 · Soru 10"
  },
  {
   "soru": "Python’da aynı blok içinde girinti için boşluk ile sekme (Tab) karakterlerinin bir arada kullanılması hâlinde alınan hata aşağıdakilerden hangisidir?",
   "sec": [
    "ValueError",
    "NameError",
    "TabError",
    "IndentationError",
    "KeyError"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v3-11",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 11"
  },
  {
   "soru": "Aşağıdaki Python kod parçası çalıştırıldığında hangi hata türü ortaya çıkar?",
   "sec": [
    "NameError",
    "TypeError",
    "IndexError",
    "ValueError",
    "KeyError"
   ],
   "dogru": 2,
   "kod": "liste = [1, 2, 3]\nprint(liste[3])",
   "tip": "mcq",
   "id": "py-v3-12",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 12"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "12",
    "18",
    "19",
    "21",
    "22"
   ],
   "dogru": 4,
   "kod": "n = 10\ns = 0\nwhile n > 0:\n    s += n\n    n -= 3\nprint(s)",
   "tip": "code",
   "cevap": "22",
   "id": "py-v3-13",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 13"
  },
  {
   "soru": "Python söz dizimi bir bloğun boş bırakılmasına izin vermediği için, geçici olarak kod yazılmamış if, for, while, def veya class gövdelerinde kullanılan ve programın akışını değiştirmeyen boş deyim aşağıdakilerden hangisidir?",
   "sec": [
    "break",
    "pass",
    "return",
    "continue",
    "None"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v3-14",
   "unite": 3,
   "kaynak": "Vize 3 · Soru 14"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "3 8",
    "2 8",
    "3 16",
    "1 8",
    "3 21"
   ],
   "dogru": 0,
   "kod": "def f(a, b=2, *args):\n    return a + b + len(args)\nprint(f(1), f(1, 5, 7, 8))",
   "tip": "code",
   "cevap": "3 8",
   "id": "py-v3-16",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 16"
  },
  {
   "soru": "Python’da bir fonksiyon tanımında parametrelerin yazılması zorunlu olan doğru sıra aşağıdakilerden hangisidir?",
   "sec": [
    "*args → zorunlu konumsal → varsayılan değerli → **kwargs → keyword-only",
    "zorunlu konumsal → varsayılan değerli → *args → keyword-only → **kwargs",
    "zorunlu konumsal → *args → varsayılan değerli → **kwargs → keyword-only",
    "varsayılan değerli → zorunlu konumsal → *args → **kwargs → keyword-only",
    "**kwargs → *args → keyword-only → varsayılan değerli → zorunlu konumsal"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v3-17",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 17"
  },
  {
   "soru": "Aşağıdaki Python kod parçasının çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "None",
    "0",
    "8",
    "x * x",
    "16"
   ],
   "dogru": 0,
   "kod": "def kare(x):\n    x * x\nprint(kare(4))",
   "tip": "code",
   "cevap": "None",
   "id": "py-v3-18",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 18"
  },
  {
   "soru": "PEP 257’ye göre modül, fonksiyon, sınıf veya metot tanımının ilk ifadesi olarak yer alan, üçlü tırnak arasına yazılan ve fonksiyonun amacını, parametrelerini ve dönüş değerini özetleyen string değişmezine ne ad verilir?",
   "sec": [
    "Yorum satırı (#)",
    "Lambda ifadesi",
    "Docstring (belge dizesi)",
    "Traceback",
    "f-string"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v3-20",
   "unite": 4,
   "kaynak": "Vize 3 · Soru 20"
  },
  {
   "soru": "Python 2’nin resmî desteği ne zaman sona ermiştir?",
   "sec": [
    "Aralık 2008",
    "Ocak 2015",
    "Şubat 1991",
    "Ocak 2020",
    "Ekim 2000"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "py-v4-01",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 1"
  },
  {
   "soru": "Python’un ilk kamuya açık sürümü aşağıdakilerin hangisinde doğru olarak verilmiştir?",
   "sec": [
    "Haziran 1994’te Python 1.0",
    "Şubat 1991’de Python 0.9.0",
    "Mart 1989’da Python 1.0",
    "Ekim 2000’de Python 2.0",
    "Aralık 2008’de Python 3.0"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v4-02",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 2"
  },
  {
   "soru": "Bilgisayara ne yapması gerektiğini anlatan talimatların yazıldığı yapılandırılmış dile ne ad verilir?",
   "sec": [
    "Akış şeması",
    "Programlama dili",
    "Algoritma",
    "İşletim sistemi",
    "Sözde kod"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v4-03",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 3"
  },
  {
   "soru": "2011 yılında Estonya Tartu Üniversitesinde Aivar Annamaa tarafından eğitim amacıyla geliştirilmiş açık kaynaklı IDE aşağıdakilerden hangisidir?",
   "sec": [
    "Spyder",
    "Jupyter Notebook",
    "Thonny",
    "PyCharm",
    "VS Code"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v4-04",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 4"
  },
  {
   "soru": "Python’da yeni bir sanal ortam oluşturmak için kullanılan temel komut aşağıdakilerden hangisidir?",
   "sec": [
    "pip install venv",
    "deactivate",
    "python -m venv ORTAM_ADI",
    "pip freeze > requirements.txt",
    "pip list"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v4-05",
   "unite": 1,
   "kaynak": "Vize 4 · Soru 5"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "3 3",
    "3.75 3",
    "4 3",
    "3.75 0",
    "3 4"
   ],
   "dogru": 0,
   "kod": "a, b = 15, 4\nprint(a // b, a % b)",
   "tip": "code",
   "cevap": "3 3",
   "id": "py-v4-06",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 6"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "TypeError hatası verir",
    "True",
    "TrueTrue",
    "1",
    "2"
   ],
   "dogru": 4,
   "kod": "print(True + True)",
   "tip": "code",
   "cevap": "2",
   "id": "py-v4-07",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 7"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "0",
    "7",
    "9",
    "11",
    "13"
   ],
   "dogru": 3,
   "kod": "metin = \"  Merhaba  \"\nmetin.strip()\nprint(len(metin))",
   "tip": "code",
   "cevap": "11",
   "id": "py-v4-08",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 8"
  },
  {
   "soru": "Python’da aynı metin değerine sahip iki değişkenin çoğu zaman bellekte aynı nesneyi işaret etmesine ne ad verilir?",
   "sec": [
    "Type hints",
    "Girdi doğrulama",
    "String interning",
    "Kısa devre değerlendirme",
    "Race condition"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v4-09",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 9"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "9",
    "9.9",
    "72",
    "10",
    "ValueError hatası verir"
   ],
   "dogru": 0,
   "kod": "print(int(\"7\") + int(float(\"2.9\")))",
   "tip": "code",
   "cevap": "9",
   "id": "py-v4-10",
   "unite": 2,
   "kaynak": "Vize 4 · Soru 10"
  },
  {
   "soru": "puan = 95 if puan >= 50: print(\"DD\") elif puan >= 90: print(\"AA\") else: print(\"FF\") puan = 95 için yukarıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "AA",
    "AA DD",
    "Hiçbir şey yazdırılmaz",
    "DD",
    "FF"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "py-v4-11",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 11"
  },
  {
   "soru": "Bir döngü gövdesinin tek bir kez çalıştırılmasına ne ad verilir?",
   "sec": [
    "Kısa devre",
    "Döngü değişkeni",
    "Yineleme (iteration)",
    "Birikim örüntüsü",
    "Girinti"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v4-12",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 12"
  },
  {
   "soru": "Döngüden önce sıfır değeriyle başlatılan bir değişkene her yinelemede yeni değer eklenerek sepet toplamı, ortalama gibi hesapların yapıldığı desen ne olarak adlandırılır?",
   "sec": [
    "Birikim örüntüsü (accumulator pattern)",
    "İç içe koşul",
    "Kısa devre değerlendirme",
    "Wildcard örüntüsü",
    "String interning"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "py-v4-13",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 13"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "çift",
    "Hiçbir şey yazdırılmaz",
    "çift hepsi tek",
    "3 5 7",
    "hepsi tek"
   ],
   "dogru": 4,
   "kod": "for n in [3, 5, 7]:\n    if n % 2 == 0:\n        print(\"çift\")\n        break\nelse:\n    print(\"hepsi tek\")",
   "tip": "code",
   "cevap": "hepsi tek",
   "id": "py-v4-14",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 14"
  },
  {
   "soru": "Aşağıdaki kod çalıştırıldığında traceback’in son satırında hangi hata türü görülür?",
   "sec": [
    "TypeError",
    "ZeroDivisionError",
    "NameError",
    "SyntaxError",
    "IndexError"
   ],
   "dogru": 1,
   "kod": "notlar = []\ntoplam = sum(notlar)\nortalama = toplam / len(notlar)",
   "tip": "mcq",
   "id": "py-v4-15",
   "unite": 3,
   "kaynak": "Vize 4 · Soru 15"
  },
  {
   "soru": "Python’da değişken arama hiyerarşisini ifade eden LEGB kuralındaki “E” harfi neyi ifade eder?",
   "sec": [
    "Element (Öge)",
    "Exception (İstisna)",
    "External (Dış)",
    "Execution (Yürütme)",
    "Enclosing (Çevreleyen)"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "py-v4-16",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 16"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "dict",
    "tuple",
    "int",
    "list",
    "set"
   ],
   "dogru": 1,
   "kod": "def f(*args):\n    print(type(args).__name__)\nf(1, 2, 3)",
   "tip": "code",
   "cevap": "tuple",
   "id": "py-v4-17",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 17"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "['elma', 'kivi', 'muz']",
    "['muz', 'kivi', 'elma']",
    "['kivi', 'elma', 'muz']",
    "['muz', 'elma', 'kivi']",
    "[3, 4, 4]"
   ],
   "dogru": 3,
   "kod": "meyveler = ['elma', 'kivi', 'muz']\nprint(sorted(meyveler, key=lambda s:\nlen(s)))",
   "tip": "code",
   "cevap": "['muz', 'elma', 'kivi']",
   "id": "py-v4-18",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 18"
  },
  {
   "soru": "LEGB kuralına göre aranan bir isim hiçbir seviyede bulunamazsa hangi istisna yükseltilir?",
   "sec": [
    "TypeError",
    "ValueError",
    "IndexError",
    "KeyError",
    "NameError"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "py-v4-19",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 19"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "[6, 12]",
    "[3, 9]",
    "[3, 6, 9, 12]",
    "[2, 4]",
    "[12]"
   ],
   "dogru": 0,
   "kod": "sayilar = [1, 2, 3, 4]\nsonuc = filter(lambda x: x % 2 == 0,\nmap(lambda x: x * 3, sayilar))\nprint(list(sonuc))",
   "tip": "code",
   "cevap": "[6, 12]",
   "id": "py-v4-20",
   "unite": 4,
   "kaynak": "Vize 4 · Soru 20"
  },
  {
   "soru": "Guido van Rossum’un Python’u geliştirmeye başladığı araştırma merkezi hangi kentte bulunmaktadır?",
   "sec": [
    "Zürih",
    "Amsterdam",
    "Tartu",
    "Londra",
    "Helsinki"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v5-01",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 1"
  },
  {
   "soru": "Ekim 2000’de liste üreteçleri ve Unicode desteği gibi modern özellikleri ekleyen Python sürümü aşağıdakilerden hangisidir?",
   "sec": [
    "Python 1.0",
    "Python 0.9.0",
    "Python 3.0",
    "Python 2.0",
    "Python 2.7"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "py-v5-02",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 2"
  },
  {
   "soru": "Python’un web geliştirme alanındaki en güçlü iki aracı olarak belirtilen çerçeveler aşağıdakilerden hangisidir?",
   "sec": [
    "Django ve Flask",
    "venv ve pip",
    "flake8 ve pylint",
    "TensorFlow ve PyTorch",
    "NumPy ve pandas"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "py-v5-03",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 3"
  },
  {
   "soru": "JetBrains tarafından 2010’dan bu yana yalnızca Python için geliştirilen güçlü IDE aşağıdakilerden hangisidir?",
   "sec": [
    "Spyder",
    "Jupyter Notebook",
    "PyCharm",
    "Thonny",
    "VS Code"
   ],
   "dogru": 2,
   "tip": "mcq",
   "id": "py-v5-04",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 4"
  },
  {
   "soru": "Etkin bir sanal ortamdan çıkmak (ortamı devre dışı bırakmak) için kullanılan komut aşağıdakilerden hangisidir?",
   "sec": [
    "deactivate",
    "pip list",
    "pip freeze",
    "python -m venv proje_env",
    "pip install requests"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "py-v5-05",
   "unite": 1,
   "kaynak": "Vize 5 · Soru 5"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "13",
    "20",
    "22",
    "50",
    "100"
   ],
   "dogru": 1,
   "kod": "print(2 + 3 ** 2 * 2)",
   "tip": "code",
   "cevap": "20",
   "id": "py-v5-06",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 6"
  },
  {
   "soru": "Python’daki bool tipi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
   "sec": [
    "bool, float tipinin alt sınıfıdır.",
    "bool, int tipinin doğrudan alt sınıfıdır.",
    "bool tipi True, False ve None olmak üzere üç değer alır.",
    "bool, str tipinin alt sınıfıdır.",
    "bool değerleri sayısal işlemlerde kullanılamaz."
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v5-07",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 7"
  },
  {
   "soru": "Aşağıdakilerden hangisi Python’un açık tip dönüştürme için sunduğu beş temel yerleşik işlevden biri değildir?",
   "sec": [
    "bool()",
    "complex()",
    "int()",
    "float()",
    "list()"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "py-v5-08",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 8"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "0",
    "None",
    "False",
    "True",
    "ZeroDivisionError hatası verir"
   ],
   "dogru": 2,
   "kod": "x = 0\nprint(x != 0 and 10 / x > 1)",
   "tip": "code",
   "cevap": "False",
   "id": "py-v5-09",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 9"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "abc",
    "['a', 'b', 'c']",
    "a,,b,,c",
    "a b c",
    "a,b,c"
   ],
   "dogru": 4,
   "kod": "print(\",\".join(\"a b c\".split()))",
   "tip": "code",
   "cevap": "a,b,c",
   "id": "py-v5-10",
   "unite": 2,
   "kaynak": "Vize 5 · Soru 10"
  },
  {
   "soru": "PEP 634’e göre bir match ifadesinde case bloklarındaki örüntülerin hiçbiri eşleşmezse ne olur?",
   "sec": [
    "Son case bloğu çalıştırılır.",
    "Tüm case blokları sırayla çalıştırılır.",
    "Program NameError hatası verir.",
    "İlk case bloğu çalıştırılır.",
    "Varsa wildcard _ bloğu çalıştırılır."
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "py-v5-11",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 11"
  },
  {
   "soru": "Yineleme süreci boyunca döngünün durumunu takip eden ve for döngüsünde her adımda koleksiyondan bir sonraki ögeyi otomatik olarak alan değişkene ne ad verilir?",
   "sec": [
    "Sabit",
    "Birikim değişkeni",
    "Global değişken",
    "Döngü değişkeni (loop variable)",
    "Bayrak değişkeni"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "py-v5-12",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 12"
  },
  {
   "soru": "Sonsuz döngüde kalan çalışan bir programı Linux/ Mac terminalinde durdurmak için kullanılan tuş kombinasyonu aşağıdakilerden hangisidir?",
   "sec": [
    "Ctrl+S",
    "Ctrl+V",
    "Ctrl+Z",
    "Ctrl+C",
    "Alt+F4"
   ],
   "dogru": 3,
   "tip": "mcq",
   "id": "py-v5-13",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 13"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "7",
    "12",
    "16",
    "21",
    "28"
   ],
   "dogru": 2,
   "kod": "toplam = 0\nfor i in range(1, 8):\n    if i % 2 == 0:\n        continue\n    toplam += i\nprint(toplam)",
   "tip": "code",
   "cevap": "16",
   "id": "py-v5-14",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 14"
  },
  {
   "soru": "Söz dizimi gereği bir blok gerektiği hâlde hiçbir işlem yapılmayacaksa kullanılan ve aynı amaçla kullanılan Ellipsis (...) sabitine göre Python topluluğunda daha yerleşik bir alışkanlık olan ifade aşağıdakilerden hangisidir?",
   "sec": [
    "pass",
    "return",
    "break",
    "else",
    "continue"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "py-v5-15",
   "unite": 3,
   "kaynak": "Vize 5 · Soru 15"
  },
  {
   "soru": "Fonksiyon gövdesinin ilk ifadesi olarak üçlü tırnak içinde yazılan ve fonksiyonun ne yaptığını belgelemenin standart yolu olan açıklama metnine ne ad verilir?",
   "sec": [
    "Dekoratör",
    "Lambda",
    "Traceback",
    "Closure",
    "Docstring"
   ],
   "dogru": 4,
   "tip": "mcq",
   "id": "py-v5-16",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 16"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "tr:en",
    "Ali:en",
    "en:Ali",
    "tr:Ali",
    "TypeError hatası verir"
   ],
   "dogru": 2,
   "kod": "def selamla(isim, dil='tr'):\n    return dil + ':' + isim\nprint(selamla('Ali', dil='en'))",
   "tip": "code",
   "cevap": "en:Ali",
   "id": "py-v5-17",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 17"
  },
  {
   "soru": "Python fonksiyonlarında **kwargs söz dizimi, anahtar sözcüklü argümanları hangi veri yapısı olarak toplar?",
   "sec": [
    "dict",
    "str",
    "list",
    "set",
    "tuple"
   ],
   "dogru": 0,
   "tip": "mcq",
   "id": "py-v5-18",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 18"
  },
  {
   "soru": "Aşağıdaki kodun çıktısı aşağıdakilerden hangisidir?",
   "sec": [
    "x",
    "None",
    "NameError hatası verir",
    "enclosing",
    "global"
   ],
   "dogru": 3,
   "kod": "x = 'global'\ndef dis():\n    x = 'enclosing'\n    def ic():\n        print(x)\n    ic()\ndis()",
   "tip": "code",
   "cevap": "enclosing",
   "id": "py-v5-19",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 19"
  },
  {
   "soru": "Dekoratörlerin ve birçok fonksiyonel programlama kalıbının temelini oluşturan yapı aşağıdakilerden hangisidir?",
   "sec": [
    "Kısa devre",
    "Closure",
    "Docstring",
    "String interning",
    "Traceback"
   ],
   "dogru": 1,
   "tip": "mcq",
   "id": "py-v5-20",
   "unite": 4,
   "kaynak": "Vize 5 · Soru 20"
  }
 ]
};
