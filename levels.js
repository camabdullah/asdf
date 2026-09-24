'use strict';
const ROAD_LAYOUTS = [
 {
  "route": "s,0,442,430 s,55,420,130 w,95,395,108 s,95,370,150 s,65,410,260 g,30,410,210 s,35,410,240 b,60,432,100 s,95,282,170 s,70,345,130 s,65,402,300 s,0,402,240 f,100,425,106 s,110,442,140 w,88,403,116 s,75,360,250 s,65,400,220 s,60,442,350 w,90,402,112 s,90,360,170 f,105,397,102 s,100,442,300 b,90,430,100 s,100,280,200 s,90,352,150 s,85,420,370",
  "check": [
   0,
   4,
   10,
   15,
   21,
   25
  ],
  "devices": [
   [
    4,
    "lever",
    "tree",
    "Ağacı köprü yap",
    0
   ],
   [
    25,
    "echo",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "gates": {
   "5": "tree"
  },
  "hazards": [
   [
    11,
    "steam"
   ],
   [
    1,
    "bramble"
   ]
  ],
  "memory": 8,
  "goal": "Salıncaktan geç, ağacı köprü yap. Yaylı zeminde zıplamayı basılı tutarak üst yola ulaş. Son patikadaki hatırayı dinle.",
  "originalCount": 18,
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,360 f,85,405,100 f,100,365,96 s,95,400,190 s,50,442,300 c,0,442,240 s,90,380,120 f,90,352,94 f,95,395,100 s,100,430,300 g,25,430,185 s,35,410,170 b,95,442,100 s,85,292,150 s,95,352,110 f,105,400,105 s,80,442,340 f,115,403,94 s,100,357,125 f,105,396,92 s,95,442,310 c,0,442,280 s,110,390,112 s,100,442,360",
  "check": [
   0,
   4,
   9,
   13,
   20,
   23
  ],
  "devices": [
   [
    9,
    "note",
    "note",
    "Notu oku",
    0
   ],
   [
    23,
    "echo",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "gates": {
   "10": "note"
  },
  "hazards": [
   [
    5,
    "steam"
   ],
   [
    3,
    "shutter"
   ]
  ],
  "memory": 13,
  "goal": "Kırılgan taşlarda durma. Ters akan bandı aş ve Damla’nın notunu bul. Son patikadaki hatırayı dinle.",
  "originalCount": 17,
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,440 b,70,432,100 s,95,282,200 w,70,320,105 s,85,350,300 s,65,400,140 c,40,420,230 s,90,370,135 s,95,322,120 s,80,360,280 w,100,395,105 s,80,442,200 s,0,442,390 f,95,397,105 s,95,352,140 s,85,397,130 s,75,442,400 w,105,400,100 s,95,345,160 c,55,400,240 s,100,442,300 w,115,403,100 s,100,350,145 s,100,410,350",
  "check": [
   0,
   4,
   9,
   12,
   20,
   23
  ],
  "devices": [
   [
    12,
    "observe",
    "bank",
    "Bankı hatırla",
    1
   ],
   [
    23,
    "dial",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "hazards": [
   [
    6,
    "pendulum"
   ],
   [
    2,
    "bramble"
   ]
  ],
  "memory": 8,
  "goal": "Rüzgâr ve salıncağın ritmini kullan. Üst patikayı geçip geçmişteki bankı bul. Son patikadaki hatırayı dinle.",
  "originalCount": 17,
  "details": [
   "windchime"
  ]
 },
 {
  "route": "s,0,442,380 s,55,400,230 m,90,400,145 s,95,400,180 s,45,442,310 c,0,442,240 s,90,380,110 m,80,355,130 s,100,390,150 s,55,442,360 s,70,395,130 w,90,360,108 s,100,400,140 s,80,442,330 m,95,404,125 s,100,357,160 s,65,410,330 c,0,410,250 m,105,392,120 s,105,350,145 s,95,412,370",
  "check": [
   0,
   4,
   9,
   13,
   16,
   20
  ],
  "devices": [
   [
    1,
    "lever",
    "tram",
    "Tramvayı çalıştır",
    0
   ],
   [
    4,
    "switch",
    "route",
    "Makas değiştir",
    2
   ],
   [
    20,
    "dial",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "controls": {
   "2": "tram",
   "7": "route"
  },
  "hazards": [
   [
    5,
    "steam"
   ],
   [
    3,
    "shutter"
   ]
  ],
  "memory": 8,
  "goal": "Tramvayı çalıştır, hareketli vagona bin. İkinci durakta makası değiştir. Son patikadaki hatırayı dinle.",
  "originalCount": 14,
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,390 p,90,402,125 s,95,358,160 p,90,398,112 s,75,442,320 l,85,435,110 s,100,350,150 p,90,310,115 s,90,362,135 s,60,410,300 p,90,375,112 p,95,335,112 s,85,385,180 s,75,442,330 p,95,403,112 s,95,360,160 l,85,415,110 s,90,350,300 p,105,312,100 s,100,370,145 s,95,430,350",
  "check": [
   0,
   4,
   9,
   13,
   17,
   20
  ],
  "devices": [
   [
    9,
    "align",
    "clockwork",
    "Saati hizala",
    2
   ],
   [
    20,
    "dial",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "hazards": [
   [
    4,
    "pendulum"
   ],
   [
    2,
    "shutter"
   ]
  ],
  "memory": 6,
  "goal": "Saat direklerinde zamanı değiştir. Aynalarla altın ışığı karşı kıyıya ulaştır; son halkayı iki ritimde sabitle.",
  "originalCount": 14,
  "logic": {
   "clockwork": "riverLight"
  },
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,360 s,65,405,160 w,90,372,115 s,85,410,300 g,25,410,200 s,30,410,230 s,70,442,460 s,85,388,135 f,100,350,110 s,90,397,170 s,65,442,330 g,25,442,180 s,35,412,160 s,100,370,115 s,100,412,140 s,65,442,320 f,105,396,102 s,100,346,160 s,85,406,300 w,110,400,100 s,105,350,130 s,95,410,350",
  "check": [
   0,
   3,
   6,
   10,
   18,
   21
  ],
  "devices": [
   [
    3,
    "lever",
    "small",
    "Küçük geçidi kapat",
    0
   ],
   [
    10,
    "lever",
    "last",
    "Karşı kapıyı aç",
    2
   ],
   [
    21,
    "echo",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "gates": {
   "4": "small",
   "11": "last"
  },
  "crate": 6,
  "hazards": [
   [
    9,
    "steam"
   ],
   [
    1,
    "drip"
   ]
  ],
  "memory": 8,
  "goal": "İlk geçidi kapat. Sandığı yerdeki plakaya iterek demir kapıyı aç. Son patikadaki hatırayı dinle.",
  "originalCount": 16,
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,350 r,90,420,145 s,95,375,155 s,60,418,300 r,95,400,120 r,95,365,125 s,90,405,210 s,50,442,340 c,0,442,260 b,90,422,105 s,100,272,190 r,70,332,145 s,80,390,160 s,65,442,380 r,100,410,115 s,100,355,150 r,95,404,120 s,80,442,300 r,110,398,112 s,100,352,130 s,100,418,370",
  "check": [
   0,
   3,
   7,
   10,
   17,
   20
  ],
  "devices": [
   [
    3,
    "water",
    "sluice",
    "Savağı aç",
    0
   ],
   [
    20,
    "echo",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "hazards": [
   [
    8,
    "steam"
   ],
   [
    2,
    "drip"
   ]
  ],
  "memory": 10,
  "goal": "Karşı ağırlığı dengeleyerek savağı aç. Yüksek iskelelerde bekle, su aralıklarını kullan.",
  "originalCount": 14,
  "logic": {
   "sluice": "counterweight"
  },
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,350 s,70,390,170 r,100,415,125 s,95,442,300 w,90,403,105 s,90,355,135 f,100,395,105 s,80,430,320 r,100,402,130 b,80,420,95 s,85,270,190 s,70,345,140 r,85,390,135 s,60,442,330 r,100,405,118 f,95,364,96 s,90,414,300 w,110,382,100 s,105,338,140 s,95,405,370",
  "check": [
   0,
   3,
   7,
   10,
   16,
   19
  ],
  "devices": [
   [
    0,
    "light",
    "lantern0",
    "İlk feneri yak",
    0
   ],
   [
    3,
    "light",
    "lantern1",
    "İkinci feneri yak",
    1
   ],
   [
    7,
    "light",
    "lantern2",
    "Son feneri yak",
    2
   ],
   [
    19,
    "echo",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "hazards": [
   [
    5,
    "pendulum"
   ],
   [
    1,
    "drip"
   ]
  ],
  "memory": 10,
  "goal": "DAMLA: Üç farklı iskeledeki fenerleri yak; onun izleyeceği rotayı hazırla. Son patikadaki hatırayı dinle.",
  "originalCount": 14,
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,360 f,90,400,104 s,105,350,140 w,90,386,108 s,80,425,320 b,85,425,100 s,95,275,210 s,75,335,135 c,65,390,270 s,80,442,330 f,100,405,96 f,105,360,100 s,100,400,180 s,60,442,360 f,110,398,94 w,100,365,108 s,100,420,300 c,0,420,275 s,110,365,120 f,110,408,96 s,100,442,350",
  "check": [
   0,
   4,
   6,
   9,
   16,
   20
  ],
  "devices": [
   [
    12,
    "note",
    "first-note",
    "İlk bulduğun notu bırak",
    2
   ],
   [
    20,
    "echo",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "hazards": [
   [
    8,
    "steam"
   ],
   [
    2,
    "bramble"
   ]
  ],
  "memory": 6,
  "goal": "DAMLA: Üst patikadan geç. Altın mandala, onun ilk bulacağı notu bırak. Son patikadaki hatırayı dinle.",
  "originalCount": 14,
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,460 s,65,395,150 w,100,350,120 s,95,400,390 g,25,400,190 s,40,350,170 t,90,390,145 s,85,430,390 s,65,380,150 l,90,420,130 s,90,340,170 s,75,390,390 g,25,390,180 s,45,442,360 f,100,395,108 s,100,345,155 w,100,388,120 s,90,430,400 g,25,430,190 s,40,385,170 t,95,420,140 s,95,365,170 s,80,420,440",
  "check": [
   0,
   3,
   7,
   11,
   13,
   17,
   22
  ],
  "devices": [
   [
    3,
    "logic",
    "garden-light",
    "Çardağın ışığını kur",
    0
   ],
   [
    11,
    "logic",
    "garden-weight",
    "Köprüyü dengele",
    1
   ],
   [
    17,
    "logic",
    "garden-order",
    "Akşamı hazırla",
    2
   ],
   [
    22,
    "echo",
    "garden-seat",
    "Yanında bir yer ayır",
    3
   ]
  ],
  "logic": {
   "garden-light": "gardenLight",
   "garden-weight": "counterweight",
   "garden-order": "invitation"
  },
  "gates": {
   "4": "garden-light",
   "12": "garden-weight",
   "18": "garden-order"
  },
  "hazards": [
   [
    5,
    "bramble"
   ],
   [
    8,
    "shutter"
   ],
   [
    15,
    "drip"
   ]
  ],
  "memory": 10,
  "goal": "Işığı çardağa ulaştır, karşı ağırlığı dengele, hazırlığın sırasını çöz. Yanıp sönen köprüde ışıklı aralığı bekle.",
  "details": [
   "ribbon",
   "clock"
  ]
 },
 {
  "route": "s,0,442,440 s,75,385,160 t,95,420,150 s,90,370,390 g,25,370,180 s,40,420,160 w,95,375,125 s,90,430,390 l,85,420,135 s,95,345,160 t,90,390,145 s,85,435,400 g,25,435,190 s,40,385,170 f,100,345,105 s,100,400,340 s,70,442,390 g,25,442,180 s,40,395,170 w,100,355,125 s,100,410,380 s,75,442,420",
  "check": [
   0,
   3,
   7,
   11,
   15,
   16,
   21
  ],
  "devices": [
   [
    3,
    "logic",
    "together-light",
    "Damla’nın yolunu aydınlat",
    0
   ],
   [
    11,
    "logic",
    "together-weight",
    "İki tarafı dengele",
    1
   ],
   [
    16,
    "logic",
    "together-order",
    "Masadaki izleri sırala",
    2
   ],
   [
    21,
    "light",
    "together-last",
    "Son feneri birlikte yak",
    3
   ]
  ],
  "logic": {
   "together-light": "reunionLight",
   "together-weight": "relayWeight",
   "together-order": "tableMemory"
  },
  "gates": {
   "4": "together-light",
   "12": "together-weight",
   "17": "together-order"
  },
  "hazards": [
   [
    5,
    "shutter"
   ],
   [
    9,
    "drip"
   ],
   [
    18,
    "bramble"
   ]
  ],
  "memory": 9,
  "goal": "Damla’yla ilerle. Işık, denge ve hatıra düzeneklerini tamamla. Son fener çardakta.",
  "details": [
   "clock",
   "cups"
  ]
 },
 {
  "route": "s,0,442,460 c,0,442,290 s,80,382,130 s,90,337,160 s,70,390,310 c,0,390,280 s,105,430,140 s,50,442,480 b,90,420,95 s,90,270,190 s,80,335,135 s,90,390,160 s,50,442,370 c,0,442,290 s,112,390,105 s,100,341,140 s,80,403,350 b,100,420,100 s,95,270,210 s,90,343,130 s,100,410,370",
  "check": [
   0,
   4,
   7,
   9,
   16,
   20
  ],
  "devices": [
   [
    7,
    "table",
    "order",
    "Siparişi tamamla",
    0
   ],
   [
    20,
    "echo",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "crate": 0,
  "hazards": [
   [
    1,
    "steam"
   ],
   [
    5,
    "steam"
   ],
   [
    2,
    "shutter"
   ]
  ],
  "memory": 9,
  "goal": "Servis sandığını plakaya it. Mutfak bantlarını aş ve iki kişilik siparişi tamamla. Son patikadaki hatırayı dinle.",
  "originalCount": 13,
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,380 p,95,400,115 s,100,352,170 s,70,402,310 p,100,370,108 l,80,435,110 s,85,350,190 s,70,410,450 p,95,370,120 s,95,325,145 s,90,380,170 s,65,442,350 p,105,400,110 s,100,350,135 s,85,402,330 l,95,420,110 s,100,345,150 p,110,390,105 s,100,442,370",
  "check": [
   0,
   3,
   6,
   7,
   14,
   18
  ],
  "devices": [
   [
    7,
    "table",
    "evening",
    "Doğru akşamı bul",
    2
   ],
   [
    18,
    "echo",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "hazards": [
   [
    3,
    "pendulum"
   ],
   [
    2,
    "shutter"
   ]
  ],
  "memory": 9,
  "goal": "İki zaman arasında geç. Yıldızlı peçetenin bulunduğu akşamda doğru tabakları yerleştir. Son patikadaki hatırayı dinle.",
  "originalCount": 12,
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,430 c,0,442,320 s,95,382,145 s,90,340,140 s,85,390,340 s,70,442,450 g,25,442,190 s,35,405,135 f,110,365,100 s,105,410,170 s,70,442,340 c,0,442,280 s,110,386,112 f,108,347,94 s,98,402,330 w,110,370,105 s,100,414,350",
  "check": [
   0,
   4,
   5,
   10,
   14,
   16
  ],
  "devices": [
   [
    5,
    "lever",
    "restaurant",
    "Restoran döngüsünü kapat",
    2
   ],
   [
    16,
    "echo",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "gates": {
   "6": "restaurant"
  },
  "crate": 0,
  "hazards": [
   [
    1,
    "steam"
   ],
   [
    4,
    "pendulum"
   ],
   [
    2,
    "shutter"
   ]
  ],
  "memory": 3,
  "goal": "Sandığı servis kapısına taşı. Buharı zamanla, restoranın döngüsünü kapat. Son patikadaki hatırayı dinle.",
  "originalCount": 11,
  "logic": {
   "long-memory": "tableMemory"
  },
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,420 c,0,442,270 s,100,390,140 s,80,425,340 g,25,425,180 s,45,380,145 l,100,425,118 s,95,350,170 s,80,410,330 c,0,410,260 s,115,355,108 f,110,397,94 s,100,442,350 s,100,385,130 s,100,340,145 s,80,400,340 g,25,400,200 s,45,400,180 w,108,363,108 s,100,415,340 c,0,415,280 s,110,360,120 s,100,410,380",
  "check": [
   0,
   3,
   8,
   12,
   15,
   19,
   22
  ],
  "devices": [
   [
    3,
    "coffee",
    "latte-order",
    "İki latte sipariş et",
    0
   ],
   [
    5,
    "lever",
    "pressure",
    "Buhar vanasını aç",
    1
   ],
   [
    15,
    "brew",
    "latte-brew",
    "İki fincanı hazırla",
    1
   ],
   [
    22,
    "serve",
    "latte-serve",
    "Latteyi masaya bırak",
    2
   ]
  ],
  "gates": {
   "4": "latte-order",
   "16": "latte-brew"
  },
  "controls": {
   "6": "pressure"
  },
  "hazards": [
   [
    1,
    "steam"
   ],
   [
    9,
    "steam"
   ],
   [
    20,
    "steam"
   ],
   [
    2,
    "shutter"
   ]
  ],
  "memory": 14,
  "goal": "İki laktozsuz latte seç. Buhar vanasını aç, basıncı üç aşamanın değişen yeşil aralıklarında durdur ve pencere masasına ulaş.",
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,420 w,90,400,110 s,90,350,170 s,80,400,330 g,25,400,180 s,40,350,150 s,80,395,160 s,65,442,340 g,25,442,180 b,75,410,95 s,95,260,180 s,80,330,160 s,80,400,340 g,25,400,190 s,45,370,150 w,100,405,110 s,100,442,340 g,25,442,200 s,50,397,160 f,100,350,100 s,100,400,320 s,75,442,360 g,25,442,180 s,35,420,350 s,80,380,320 g,25,380,180 s,40,420,360",
  "check": [
   0,
   3,
   7,
   12,
   16,
   20,
   21,
   23,
   24,
   26
  ],
  "devices": [
   [
    3,
    "verse",
    "verse0",
    "İlk dizeyi tamamla",
    0
   ],
   [
    7,
    "verse",
    "verse1",
    "Yağmurun dizesini bul",
    1
   ],
   [
    12,
    "verse",
    "verse2",
    "Akşamın dizesini bul",
    2
   ],
   [
    16,
    "verse",
    "verse3",
    "Şarkıyı tamamla",
    3
   ],
   [
    21,
    "logic",
    "book-order",
    "Sayfaları sırala",
    0
   ],
   [
    24,
    "verse",
    "verse4",
    "Kara Gözlüm’ü tamamla",
    4
   ]
  ],
  "gates": {
   "4": "verse0",
   "8": "verse1",
   "13": "verse2",
   "17": "verse3",
   "22": "book-order",
   "25": "verse4"
  },
  "hazards": [
   [
    6,
    "pendulum"
   ],
   [
    18,
    "steam"
   ],
   [
    2,
    "drip"
   ]
  ],
  "memory": 10,
  "goal": "Beş kürsüde doğru devamı seç. Her cevap kendi köprüsünü açar. Dört eski sayfanın sırasını da çöz.",
  "details": [
   "waymark"
  ],
  "logic": {
   "book-order": "bookOrder"
  },
  "lines": {
   "book-order": [
    [
     "ABDULLAH",
     "Dizeler kendi sayfalarında; sayfalar kendi sırasında. Hatırlamak, parçaları bir araya yığmak değilmiş."
    ]
   ]
  }
 },
 {
  "route": "s,0,442,360 w,100,400,108 s,90,350,140 b,85,400,100 s,100,250,230 p,85,315,115 s,85,375,290 c,0,375,280 s,100,415,140 m,90,388,120 s,95,425,360 s,60,442,470 f,115,400,98 p,105,357,108 s,95,400,150 s,75,442,350 w,110,400,100 f,110,358,94 s,100,410,310 p,110,365,105 s,100,320,140 m,100,366,118 s,105,420,370",
  "check": [
   0,
   4,
   6,
   10,
   11,
   18,
   22
  ],
  "devices": [
   [
    10,
    "switch",
    "junction",
    "Yolları birleştir",
    2
   ],
   [
    22,
    "dial",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "crate": 11,
  "hazards": [
   [
    7,
    "steam"
   ],
   [
    2,
    "shutter"
   ]
  ],
  "memory": 4,
  "goal": "Salıncak, yay, zaman yolu ve bandı birleştir. Kavşak kolunu çalıştırıp sandık kapısını aç. Son patikadaki hatırayı dinle.",
  "originalCount": 16,
  "logic": {
   "junction": "riverLight"
  },
  "details": [
   "windchime"
  ]
 },
 {
  "route": "s,0,442,390 s,70,390,160 g,25,390,190 s,40,390,300 l,95,435,115 s,90,350,150 w,95,390,108 s,90,430,330 s,60,442,460 m,100,405,130 s,90,350,160 s,85,402,320 s,70,442,360 l,100,430,115 s,90,350,155 s,80,414,310 w,112,380,102 f,110,340,96 s,100,402,360",
  "check": [
   0,
   3,
   7,
   8,
   11,
   15,
   18
  ],
  "devices": [
   [
    1,
    "lever",
    "relay0",
    "İlk halkayı kur",
    0
   ],
   [
    7,
    "switch",
    "relay1",
    "Damla’nın kolunu çek",
    1
   ],
   [
    11,
    "light",
    "relay2",
    "Çıkış ışığını yak",
    2
   ],
   [
    18,
    "echo",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "gates": {
   "2": "relay0"
  },
  "crate": 8,
  "hazards": [
   [
    3,
    "steam"
   ],
   [
    5,
    "drip"
   ]
  ],
  "memory": 10,
  "goal": "İlk halkayı sen kur; kontrol Damla’ya geçsin. Onun tarafındaki iki düzeneği tamamla. Son patikadaki hatırayı dinle.",
  "originalCount": 13,
  "logic": {
   "relay1": "relayWeight"
  },
  "details": [
   "waymark"
  ]
 },
 {
  "route": "s,0,442,400 c,0,442,260 w,95,400,100 s,95,350,250 b,85,400,100 s,100,250,220 s,80,320,140 p,95,370,115 s,85,420,330 f,110,380,96 m,95,350,125 s,90,400,340 g,25,400,210 s,40,400,180 s,85,442,450 w,110,400,102 s,100,350,150 p,108,395,100 s,90,442,330 b,100,425,100 s,100,275,200 f,95,348,96 s,105,407,370",
  "check": [
   0,
   3,
   5,
   8,
   11,
   18,
   22
  ],
  "devices": [
   [
    3,
    "switch",
    "seal0",
    "İlk halkayı sabitle",
    0
   ],
   [
    8,
    "switch",
    "seal1",
    "İkinci halkayı sabitle",
    1
   ],
   [
    11,
    "lever",
    "seal2",
    "Son bağlantıyı hazırla",
    2
   ],
   [
    22,
    "dial",
    "long-memory",
    "Dinlen ve hatırla",
    0
   ]
  ],
  "gates": {
   "12": "seal2"
  },
  "hazards": [
   [
    1,
    "steam"
   ],
   [
    6,
    "pendulum"
   ],
   [
    13,
    "shutter"
   ]
  ],
  "memory": 5,
  "goal": "Öğrendiğin engelleri son kez aş. Üç halkayı hazırla; son geçidi bilerek kapat. Son patikadaki hatırayı dinle.",
  "originalCount": 15,
  "details": [
   "windchime"
  ]
 }
];
if(typeof module!=='undefined')module.exports=ROAD_LAYOUTS;
