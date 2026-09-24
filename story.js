'use strict';
const WORLDS = [
 {
  "name": "Ankara / Koru",
  "short": "KORU",
  "sky": [
   "#263f55",
   "#b07d78",
   "#e4ad7c"
  ],
  "land": "#293c41",
  "leaf": "#475b57",
  "accent": "#efbc75",
  "type": "park"
 },
 {
  "name": "Eskişehir",
  "short": "ESKİŞEHİR",
  "sky": [
   "#182b50",
   "#647292",
   "#d29891"
  ],
  "land": "#30374e",
  "leaf": "#465373",
  "accent": "#efbb86",
  "type": "city"
 },
 {
  "name": "Bartın",
  "short": "BARTIN",
  "sky": [
   "#152e43",
   "#3f6a77",
   "#8dada9"
  ],
  "land": "#2c484d",
  "leaf": "#315855",
  "accent": "#edc587",
  "type": "rain"
 },
 {
  "name": "Ankara / Tavuk Dünyası",
  "short": "TAVUK DÜNYASI",
  "sky": [
   "#382d37",
   "#896257",
   "#c69771"
  ],
  "land": "#4b383b",
  "leaf": "#735553",
  "accent": "#f5c080",
  "type": "cafe"
 },
 {
  "name": "Ankara / Caffelab",
  "short": "CAFFELAB",
  "sky": [
   "#242c34",
   "#827466",
   "#ceb08d"
  ],
  "land": "#51453e",
  "leaf": "#68695d",
  "accent": "#eac49b",
  "type": "coffee"
 },
 {
  "name": "Koru’nun Öte Yanı",
  "short": "KORU’NUN ÖTE YANI",
  "sky": [
   "#171e3c",
   "#57567a",
   "#aa8592"
  ],
  "land": "#34364b",
  "leaf": "#494661",
  "accent": "#ecc69a",
  "type": "end"
 }
];
const LEVELS = [
 {
  "title": "Yanımda Bir Yer",
  "w": 0,
  "actor": "sen",
  "mechanic": "learn",
  "seed": 2,
  "goal": "Sıcak ışığı takip et. Yön tuşlarıyla yürü, ↑ ile zıpla.",
  "intro": [
   [
    "ANLATICI",
    "Ankara, Koru. Dünya henüz iki kişilik."
   ],
   [
    "DAMLA",
    "Dostuuum… Tavuk Dünyası’na mı gitsek?"
   ],
   [
    "ABDULLAH",
    "Kremantar’ın seni bekleyişinde bile bir sadakat var, dostuuum. Biz onu fazla bekletmeyelim."
   ],
   [
    "DAMLA",
    "Bay Aptullah çok bilmiş… Dostuuum, Barbeküs’ünü tamamen makarna mı söyleyeceksin, yoksa salatalı mı?"
   ],
   [
    "ABDULLAH",
    "Tamamen makarna, dostuuum; salatayla aramızda henüz bir sulh tesis edemedik. Sen sebzeli söyleyeceksin, biliyorum."
   ],
   [
    "DAMLA",
    "Aptullah, patates kızartması da var mı? Patates kızartması?"
   ],
   [
    "ABDULLAH",
    "Var elbette. Fakat senin siparişinin hudutları her cümlede biraz daha genişliyor."
   ],
   [
    "DAMLA",
    "Dostuuum, o patatesler…"
   ],
   [
    "ANLATICI",
    "Damla gülerek sana dönüyor. Cümlesinin devamını duyamadan ayaklarınızın altındaki yol bir kâğıt gibi yırtılıyor."
   ],
   [
    "ABDULLAH",
    "Damla? Bir nefes evvel yanımdaydın. İnsan bir nefeste bu kadar uzağa düşer mi?"
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "Ağacı çevirince boşluk bir geçide dönüştü. Yıkılan şeyin de bir işe yaradığı oluyormuş."
   ],
   [
    "ABDULLAH",
    "Parkın eksilen yerlerini sayıyorum; asıl eksik, adını söyleyince bana dönen yüzün."
   ],
   [
    "ABDULLAH",
    "Bir ışık daha. Ümidin pek cılız bir alfabesi var; yine de okuyorum, dostuuum."
   ]
  ],
  "outro": [
   [
    "ANLATICI",
    "Bir anlığına karşı yolda bir gölge beliriyor. Yaklaşınca yalnızca rüzgâr kalıyor."
   ],
   [
    "ABDULLAH",
    "Bekle. Sana verdiğim sözün yolu henüz bitmedi."
   ]
  ],
  "memory": [
   "Bankın sağ tarafı",
   "İkiniz de öbürünün yerini ezbere biliyorsunuz. Bazen yakınlık, sormadan biraz yana kaymak."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Ağaçlar yerli yerinde; yabancılaşan, aralarından geçen benim. İnsan aynı yeri, aynı insan olarak bulamıyor."
   ],
   [
    "DAMLA’NIN İZİ",
    "“Kestirme diye çıktığımız yerde yine merdiven var mı?”"
   ],
   [
    "ABDULLAH",
    "Var. O merdivenlerin sonunda sesin varsa, yorgunluğa itirazım yok."
   ]
  ],
  "ruptureAfter": 7
 },
 {
  "title": "Yolun Bittiği Yer",
  "w": 0,
  "actor": "sen",
  "mechanic": "crumble",
  "seed": 5,
  "goal": "Çatlak zemin üzerinde oyalanma. Üç sıcak işareti bul.",
  "intro": [
   [
    "ABDULLAH",
    "Bir yolun tükenişini, arayışın hükmü sanmayacağım. Henüz söylemediğimiz sözler var."
   ],
   [
    "ANLATICI",
    "Kenarları altın rengi olan nesneler, parçalanan yolların arasında kalabiliyor. Diğerleri birer görüntü."
   ]
  ],
  "signs": [
   [
    "NOT",
    "“Yol biterse ışığa bak. Ben de sana geliyorum. — D.”"
   ],
   [
    "ABDULLAH",
    "Kâğıtta yağmurun izi var; gökyüzünde yok. Belki de haber, ait olmadığı bir akşamdan geldi."
   ],
   [
    "ABDULLAH",
    "Mandalın altın kenarı aşınmamış. Her şey geçerken bazı şeyler kalmanın yolunu buluyor."
   ]
  ],
  "outro": [
   [
    "DAMLA",
    "Dostuuum, bunu bulduğunda fazla düşünme. Işığı izle."
   ],
   [
    "ANLATICI",
    "Başka bir akşamın yağmuru. Aynı köşe. Henüz aynı zaman olduğunu sanıyorsun."
   ]
  ],
  "memory": [
   "Yolun kenarındaki çizik",
   "Notun ıslak köşesi, kuru parkın açıklayamadığı ilk ayrıntı. Abdullah bunu görür; ne anlama geldiğini henüz bilemez."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Kâğıt yırtılmış; cümlenin yarısı yok. Eksikliği, söylenmemişlik sanmamak gerek."
   ],
   [
    "ABDULLAH",
    "El yazını tanıyorum. İnsan sevdiğinin sesini bazen mürekkepten işitiyor."
   ],
   [
    "ANLATICI",
    "Mandalı yerine bırakıyorsun. Başka bir akşamda burada kalacak."
   ]
  ]
 },
 {
  "title": "Aynı Bank, Başka Akşam",
  "w": 0,
  "actor": "sen",
  "mechanic": "wind",
  "seed": 9,
  "goal": "Rüzgâr aralıklarını kullan. Banka giden ışıkları aç.",
  "intro": [
   [
    "ABDULLAH",
    "Şu bankta iki kişi… Sanki zaman, bizi bizden habersiz saklamış."
   ],
   [
    "ANLATICI",
    "Kız başını geriye atıp gülüyor. Yanındaki çocuk elleriyle çok ciddi bir şey anlatıyor."
   ],
   [
    "ABDULLAH",
    "Ellerim benden evvel ikna etmeye girişmiş. Sözüme güvenmeyince jestlerimi seferber ediyorum galiba."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "O montu hatırlıyorum. Bir insanın yanındayken sıradan olan şeyler, yokluğunda nasıl da delile dönüşüyor."
   ],
   [
    "ANLATICI",
    "Görüntüye dokunamıyorsun. Anı yaşandığı hâliyle duruyor; değişen yalnızca aradaki yol."
   ],
   [
    "ABDULLAH",
    "Sana değil, senin burada oluşuna yetiştim. Hatıra ile insan arasındaki mesafe ne kadar uzunmuş."
   ]
  ],
  "outro": [
   [
    "DAMLA",
    "Bu bank neden her seferinde ilk kez görüyormuşum gibi geliyor?"
   ],
   [
    "ANLATICI",
    "Damla’nın tarafında ağaçların yaprakları daha yeşil."
   ],
   [
    "İSMET ÖZEL · AMENTÜ",
    "“kendi tehlikesi peşinden gider insan”"
   ],
   [
    "ABDULLAH",
    "Cesaret, korkunun susması değilse; ben de onun sesini duya duya yürüyeceğim."
   ]
  ],
  "memory": [
   "Çok ciddi bir mesele",
   "Bir yaprağın belediyeye mi ağaca mı ait olduğunu gereğinden uzun tartışmış olabilirsiniz. Bu küçük sahne kurgu."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Orada oturan ben, geleceği cebinde taşıdığını sanıyor. Oysa cebindeki yalnızca eve dönüş anahtarı."
   ],
   [
    "ABDULLAH",
    "Yanına varabilsem, vakti durdur demezdim. Yanındakini dinle derdim."
   ],
   [
    "ANLATICI",
    "Söylemiyorsun. O akşam yaşandığı hâliyle kalıyor."
   ]
  ]
 },
 {
  "title": "Bir Durak Geriden",
  "w": 1,
  "actor": "sen",
  "mechanic": "tram",
  "seed": 12,
  "goal": "Tramvay platformlarına bin. Duraklardaki ışıkları aç.",
  "intro": [
   [
    "ANLATICI",
    "Eskişehir. Raylar havada, duraklar birbirinden bir akşam uzakta."
   ],
   [
    "ABDULLAH",
    "Bir sonraki tramvaya yetişirim. İnsan bazen bütün ümidini “sonraki” kelimesine emanet ediyor."
   ]
  ],
  "signs": [
   [
    "DURAKTAKİ İZ",
    "İki bilet. Birinin tarihi silinmiş, ötekinin kenarı hâlâ yeni."
   ],
   [
    "ABDULLAH",
    "Aynı istikameti tutmuşken birbirimizden uzaklaşmak… Meğer mesafeyi yalnız yollar ölçmüyormuş."
   ],
   [
    "DAMLA’NIN İZİ",
    "“Beklemek de bir yere gitmek sayılır mı?”"
   ]
  ],
  "outro": [
   [
    "ANLATICI",
    "Karşı kıyıda biri demir kapıya uzanıyor."
   ],
   [
    "ABDULLAH",
    "Dur! O kapıyı kapatma; varlığından emin olduğum son yol o!"
   ]
  ],
  "memory": [
   "İki bilet",
   "Bir şehrin ilişkinizdeki gerçek yeri, bu ilk sürümde henüz anlatılmıyor. Buradaki durak, hikâye için kurulan bir mekân."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Biletlerin arasına bir kahve fişi sıkışmış. Şehirlerin haritası, insanın cebinde küçücük bir kâğıda sığıyor."
   ],
   [
    "DAMLA’NIN İZİ",
    "“Bir durak yürürüz.”"
   ],
   [
    "ABDULLAH",
    "Bir durak yürümek dediğin, vedayı geciktirmenin en masum bahanesiydi."
   ]
  ]
 },
 {
  "title": "Porsuk’un Öteki Saati",
  "w": 1,
  "actor": "sen",
  "mechanic": "phase",
  "seed": 16,
  "goal": "Saat direklerinde ✧ ile zamanı değiştir. Kesik çizgili yollar öteki akşamda katılaşır.",
  "intro": [
   [
    "ABDULLAH",
    "Az önce üstünde durduğum köprü şimdi yok. Yokluğu, varlığını tekzip etmeye yetmiyor yine de."
   ],
   [
    "ANLATICI",
    "Saat direklerine dokununca geçmiş değişmiyor. Yalnızca yürüdüğün anı katmanı değişiyor."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "Bende pas, onda taze boya. İkimiz de doğruyu görüyor olabiliriz; yalnız aynı ânın doğrusunu değil."
   ],
   [
    "ANLATICI",
    "Bir ışık iki akşamda da yanıyor. Altın çerçeveli işaretler arada kalabiliyor."
   ],
   [
    "ABDULLAH",
    "Işık doğru yolu buldu. Aynı yere varmak, birbirine yetişmiş olmak değilmiş."
   ]
  ],
  "outro": [
   [
    "DAMLA",
    "Köprüye çıktığımda senin sesin aşağıdan gelmişti. Şimdi orada su bile yok."
   ]
  ],
  "memory": [
   "Suya bakmak",
   "Su, aynı köprüyü her geçişinde başka bir görüntü taşıyor. Köprü yine de aynı köprü."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Akrep kıpırdamıyor; gölgeler yer değiştiriyor. Saatin söylediğiyle dünyanın yaşadığı bir değil."
   ],
   [
    "ABDULLAH",
    "Aradığım bir köprü kadar, o köprüden geçebileceğimiz ortak bir vakit."
   ],
   [
    "ANLATICI",
    "İki farklı akşamın suyu, aynı taşın altından geçiyor."
   ]
  ]
 },
 {
  "title": "Kapıyı Kapatan Adam",
  "w": 1,
  "actor": "sen",
  "mechanic": "gate",
  "seed": 21,
  "goal": "Küçük döngü kapısını kapat; karşı yoldaki çıkış açılacak.",
  "intro": [
   [
    "ABDULLAH",
    "O duruş… Kendi omuzlarımı başkasının kederi gibi tanıyorum. Kapıyı kapatanın üzerindeki kapüşonlu benimki."
   ],
   [
    "ANLATICI",
    "Yüzünü tam seçemiyorsun. Ama elindeki altın halkayı tanıyorsun."
   ]
  ],
  "signs": [
   [
    "MEKANİZMA",
    "Açık kapı: aynı yol yeniden başlar. Kapalı kapı: öteki tarafta çıkış açılır."
   ],
   [
    "ABDULLAH",
    "Kapanan köprüye bakarken açılan çıkışı görememişim. Kaybım, bütün manzarayı örtmüş."
   ],
   [
    "ABDULLAH",
    "Henüz bilmediğim hangi hakikat, beni kendi yolumun karşısına dikecek?"
   ]
  ],
  "outro": [
   [
    "ANLATICI",
    "Siluet sana bakıyor. Dudakları kıpırdıyor: “Birini durdurmuyorum.”"
   ],
   [
    "ABDULLAH",
    "Öyleyse kimi serbest bırakıyorsun; bedelini kim ödüyor?"
   ]
  ],
  "memory": [
   "Altın halka",
   "Kapının üzerinde çizilmiş iki ok. Birisi dönüp başladığı yere geliyor. Diğeri çemberin dışına çıkıyor."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Benim için kapanan kapı, onun için açılıyormuş. Dünyayı yalnız durduğum yerden okuyunca hükmüm eksik kalıyor."
   ],
   [
    "ABDULLAH",
    "Anlamak bazen bilgi değil, kendi payından vazgeçebilme meselesiymiş."
   ],
   [
    "ANLATICI",
    "Bir şeyi görmekle, neye mal olacağını anlamak aynı anda olmuyor."
   ]
  ]
 },
 {
  "title": "Suyun Hatırladığı",
  "w": 2,
  "actor": "sen",
  "mechanic": "water",
  "seed": 25,
  "goal": "Su yükselirken yüksek iskelelerde bekle. Üç feneri takip et.",
  "intro": [
   [
    "ANLATICI",
    "Bartın. Yağmur, ahşabın üzerinde eski bir cümleyi tekrar ediyor."
   ],
   [
    "ABDULLAH",
    "Beni görmeden yolumu aydınlatmışsın. Yakınlık bazen bir insanın gıyabında da sürüyor."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "Karşı ağırlık oturdu; savak açıldı. Su çekilince, sabrının kurduğu yolu gördüm."
   ],
   [
    "ABDULLAH",
    "Kolu iple bağlamışsın. Şefkat bazen söylenmiş bir cümle değil, çözülmeyecek bir düğüm."
   ],
   [
    "ABDULLAH",
    "Üçüncü ışık da yanıyor. Ben buraya yalnız geldiğimi sanıyordum."
   ]
  ],
  "outro": [
   [
    "ANLATICI",
    "Damla’nın eli aynı fenerin camını siliyor. Ama yağmur henüz başlamamış."
   ],
   [
    "DAMLA",
    "Burayı karanlıkta geçemez. Önce ışıklar."
   ]
  ],
  "memory": [
   "Camdaki parmak izi",
   "Kimin dokunduğunu bilmeden bir dokunuşun yardımını gördün."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Yağmur tahtayı yıpratmış; düğümü çözememiş. Her şeyin aynı hızla eksilmemesi teselli veriyor."
   ],
   [
    "ABDULLAH",
    "Bu düğüm aceleye gelmemiş. Birinin geçeceğine inanmak, onu beklemenin başka bir biçimi."
   ],
   [
    "ANLATICI",
    "Işığın yanında kuru kalmış küçük bir tahta parçası var."
   ]
  ]
 },
 {
  "title": "Sen Buradan Geç Diye",
  "w": 2,
  "actor": "damla",
  "mechanic": "lantern",
  "seed": 28,
  "goal": "DAMLA: Üç feneri yak ve iskele geçidini hazırla.",
  "intro": [
   [
    "DAMLA",
    "Pekâlâ Aptullah. Senden önce varmışım gibi görünecek."
   ],
   [
    "ANLATICI",
    "Şimdi Damla’yı yönetiyorsun. Biraz önce takip ettiğin ışıklar henüz yanmıyor."
   ],
   [
    "DAMLA",
    "Teknik olarak yön bulma işini hâlâ ben yapıyorum."
   ]
  ],
  "signs": [
   [
    "DAMLA",
    "Bir. Camını da silelim. Hizmet kalitesi önemli."
   ],
   [
    "DAMLA",
    "İki. Şu kolu bağlıyorum; rüzgârda sönmesin."
   ],
   [
    "DAMLA",
    "Üç. Sen buradan geç diye."
   ]
  ],
  "outro": [
   [
    "ANLATICI",
    "Senin geçtiğin iskeleye son bir tahta yerleşiyor."
   ],
   [
    "DAMLA",
    "Benim için ne bıraktığını henüz bilmiyorum. Ama yürüyorum."
   ]
  ],
  "memory": [
   "Küçük bir iş",
   "Kurtarmak bazen büyük bir sıçrayış değildir. Bir lambanın sönmemesi için ucuna ip bağlamaktır."
  ],
  "walk": [
   [
    "DAMLA",
    "Şu feneri biraz sağa alalım. Aptullah gider soldaki karanlığı yol sanır."
   ],
   [
    "DAMLA",
    "Haksızlık etmeyeyim; ben de demin aynı yere baktım."
   ],
   [
    "ANLATICI",
    "Damla son tahtayı ayağıyla yokluyor, sağlam olduğundan emin oluyor."
   ]
  ]
 },
 {
  "title": "İlk Bulduğun, Son Bıraktığım",
  "w": 2,
  "actor": "damla",
  "mechanic": "note",
  "seed": 32,
  "goal": "DAMLA: Son işaretleri bırak. Koru’ya ulaşan notu yaz.",
  "intro": [
   [
    "DAMLA",
    "Bu parktaki köşeyi hatırlıyorum. Daha yeni ayrılmıştık."
   ],
   [
    "ANLATICI",
    "Sen anıların başından sonuna yürüdün. Damla sonundan başına geliyor. Aynı yollar; farklı sıra."
   ]
  ],
  "signs": [
   [
    "DAMLA",
    "Bu ışık bir sonraki akşamda kalacak."
   ],
   [
    "DAMLA",
    "Bu mandal altın. Notu iki yol arasında tutabilir."
   ],
   [
    "DAMLA",
    "“Yol biterse ışığa bak. Ben de sana geliyorum. — D.”"
   ]
  ],
  "outro": [
   [
    "ANLATICI",
    "İlk bulduğun not, Damla’nın son bıraktığı işaretti. Yağmur lekesi şimdi oluşuyor."
   ],
   [
    "DAMLA",
    "Dostuuum. Umarım fazla düşünmeden ışığı izlersin."
   ],
   [
    "ANLATICI",
    "Abdullah, başka bir iskelede bu notu avucunda tutuyor. Yağmurun sesi yavaşlıyor; gözkapakları ağırlaşıyor. Bir fenerin çevresinde altın bir bahçe beliriyor."
   ]
  ],
  "memory": [
   "Ters okunan yol",
   "İlk işaretin yeni bir haber değildi. Diğer yolun sonuna yakın bırakılmış bir merhabaydı."
  ],
  "walk": [
   [
    "DAMLA",
    "Not kısa olsun. Uzun yazarsam burada bekler okur."
   ],
   [
    "DAMLA",
    "Ama benim de ona söyleyecek çok şeyim var."
   ],
   [
    "ANLATICI",
    "Kâğıdı katlıyor. Bir cümleyi içine, birini yolun üzerine bırakıyor."
   ]
  ]
 },
 {
  "title": "Sana Bir Akşam Hazırladım",
  "w": 2,
  "actor": "sen",
  "mechanic": "dreamGarden",
  "seed": 61,
  "dream": true,
  "goal": "Aynaların ışığını çardağa ulaştır. Karşı ağırlığı dengele; dört işareti sıraya koyup buluşma yolunu hazırla.",
  "intro": [
   [
    "ANLATICI",
    "Yağmurun içinden kuru bir patika uzanıyor. Tanıdık bir bank; ardında hiç görmediğin, yine de yolunu bildiğin bir bahçe."
   ],
   [
    "DAMLA’NIN İZİ",
    "“Bu defa sen önce gel. Bana da yanında bir yer ayır, dostuuum.”"
   ],
   [
    "ABDULLAH",
    "Sana bir akşam hazırlayacağım. Geçen zamanı telafi eden değil; gelecek zamana yer açan bir akşam."
   ],
   [
    "ANLATICI",
    "Çardaktaki saat 19.17’yi gösteriyor. Camı kırık; akrebi kıpırdamıyor."
   ],
   [
    "ABDULLAH",
    "Kırılmış bir saat bile bir vakti muhafaza edebiliyor. Belki bizim vaktimiz de henüz tükenmedi."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "Işık çardağa vardı. Bu kez karanlıkta birbirimizin yüzünü aramak zorunda kalmayacağız."
   ],
   [
    "ABDULLAH",
    "Köprünün iki yakası dengede. Sana yaklaşırken bütün ağırlığı kendi tarafıma vermemeyi öğreniyorum."
   ],
   [
    "DAMLA’NIN İZİ",
    "“Pencereyi açık bırak. Kahvenin kokusu bahçeye gelsin.”"
   ],
   [
    "ABDULLAH",
    "Bir dal çiçek, iki fincan ve boş bıraktığım yer. Söyleyeceklerim çok; ilk işim seni dinlemek olacak."
   ]
  ],
  "outro": [
   [
    "ANLATICI",
    "Beyaz kurdele rüzgârda kımıldamıyor. Yanındaki yapraklar ise aynı rüzgârla savruluyor."
   ],
   [
    "ABDULLAH",
    "Dünya bir anlığına nefesini tutmuş gibi. Sen gelince kaldığı yerden devam edecek sanıyorum."
   ],
   [
    "DAMLA’NIN İZİ",
    "“Buradayım.”"
   ]
  ],
  "memory": [
   "Durmayan yaprak, duran kurdele",
   "Aynı dalda iki ayrı hareket. Abdullah bunu fark eder; kavuşmaya inanmak istediği için üzerinde durmaz."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Beklediğim, bütün yaralarımızın bir anda kapanması değil. Aynı masada, ikimizin de söyleyebileceği bir sözün kalması."
   ]
  ]
 },
 {
  "title": "Bir Ömürlük Bir An",
  "w": 2,
  "actor": "sen",
  "mechanic": "dreamReunion",
  "seed": 67,
  "dream": true,
  "companion": true,
  "introFilm": "reunion",
  "goal": "Damla’yla çardağa ilerle. Işığı iki kez yönlendir, masadaki anıları sırala ve son feneri birlikte yak.",
  "intro": [
   [
    "DAMLA",
    "Dostuuum. Bu kadar hazırlık yapacağını bilseydim biraz daha yavaş gelirdim."
   ],
   [
    "ABDULLAH",
    "Sana söyleyeceğim her şeyi yolda tertip etmiştim. Yüzünü görünce, bütün cümlelerim yerini bir sükûta bıraktı."
   ],
   [
    "DAMLA",
    "Güzel. Ben de seni dinlerken araya bir şey söyleyebileceğim."
   ],
   [
    "ABDULLAH",
    "Ömrün tamamını istemiyorum bu andan. İçinde birbirimize dürüstçe yer açabileceğimiz kadar zaman yeter."
   ],
   [
    "DAMLA",
    "Önce şu köprüden geçelim, Bay Aptullah. Sonra ömrü konuşuruz."
   ]
  ],
  "signs": [
   [
    "DAMLA",
    "Işık önümdeki taşa vurdu. Ben buradan geçeyim; sen karşıdakini çevir."
   ],
   [
    "ABDULLAH",
    "Gözümün önündesin; yine de seni tamamıyla bildiğimi söylemeyeceğim. Yakınlığın biraz da öğrenmeye devam etmek olduğunu unuttum."
   ],
   [
    "DAMLA",
    "Bu akşamı nasıl hatırlayacağımızı şimdiden kararlaştırmayalım. Biraz yaşayalım."
   ],
   [
    "ABDULLAH",
    "Son fener de yandı. Sen konuşurken söyleyeceğim cevabı düşünmeden durabilmek… Belki ilk defa buna yetişiyorum."
   ]
  ],
  "outro": [
   [
    "DAMLA",
    "Dostuuum. Bu kadar hazırlık yapacağını bilseydim biraz daha yavaş gelirdim."
   ],
   [
    "ABDULLAH",
    "Az önce de aynı şeyi söyledin. Sesindeki durak bile değişmedi."
   ],
   [
    "ANLATICI",
    "Çardaktaki saat hâlâ 19.17. İki fincandan yalnız birinin buharı yükseliyor."
   ],
   [
    "ABDULLAH",
    "Damla… Bana henüz bilmediğim bir şey söyle. Benim yerime düşünmediğim, senden gelecek küçücük bir şey."
   ],
   [
    "DAMLA",
    "Dostuuum…"
   ],
   [
    "ANLATICI",
    "Cümlenin ardı gelmiyor. Abdullah uzattığı elin, kendi arzusunun çizdiği bir ele değdiğini anlıyor."
   ]
  ],
  "afterFilm": [
   [
    "ANLATICI",
    "Bartın. Aynı ıslak iskele. Abdullah’ın avucunda çiçek değil, uyuyakalmadan önce okuduğu not var. Kavuşma, bu notun başında gördüğü bir hayaldi."
   ],
   [
    "ABDULLAH",
    "Sana kavuşmadım. Seni özleyişimin bana verdiği cevabı, senin sesin sandım."
   ],
   [
    "ABDULLAH",
    "Hüsranım, yaşadığımızı eksiltmiyor. Fakat arzumun kurduğu bir Damla’yı, senin yerine sevemem."
   ],
   [
    "ANLATICI",
    "Gerçek Damla kendi yolunda yürüyor. Not, ışıklar ve iki ayrı yolculuk yerinde. Değişen geçmiş değil; Abdullah’ın bekleyişinden çıkardığı anlam."
   ]
  ],
  "memory": [
   "Tek fincandan yükselen buhar",
   "Masada iki fincan var; yalnız birinin suyu sıcak. Birazdan açıklanacak ayrılığın küçük, sessiz işareti."
  ],
  "walk": [
   [
    "DAMLA",
    "Saat yine durmuş. Bütün yolu yürüdük, bir dakika geçmemiş."
   ],
   [
    "ABDULLAH",
    "Bana bağışlanmış bir vakit sandım. Bağışın da bir gölgesi olur mu, bilmiyorum."
   ]
  ]
 },
 {
  "title": "Her Zamankinden",
  "w": 3,
  "actor": "sen",
  "mechanic": "plates",
  "seed": 36,
  "goal": "Masalarda ✧ ile tabakları değiştir: Damla’ya Kremantar, sana Barbeküs.",
  "intro": [
   [
    "ANLATICI",
    "Hayalin bahçesi kapanıyor. Tavuk Dünyası’ndaki bu masa ise birlikte yaşadığınız alışkanlığın gerçek izi. Aradaki farkı artık daha ağır hissediyorsun."
   ],
   [
    "DAMLA",
    "Menüye bakacak mısın?"
   ],
   [
    "ABDULLAH",
    "Bakacağım; sonra Barbeküs söyleyeceğim. Kararım sabit diye ihtimallere nezaketsizlik edemem."
   ],
   [
    "DAMLA",
    "Ben de Kremantar’ı ilk kez seçiyormuş gibi yaparım."
   ],
   [
    "DAMLA",
    "Ayran istemiyorum."
   ],
   [
    "ABDULLAH",
    "Ben bir ayran alayım. Birazdan mülkiyeti benim, intifa hakkı müşterek olacak."
   ],
   [
    "DAMLA",
    "Bir yudumdan sipariş olmaz, dostuuum."
   ],
   [
    "ANLATICI",
    "Tabaklar geliyor. Bildiğin bir akşamın sıcaklığı. Sonra masalar yolların arasında yükselmeye başlıyor."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "Kremantar solda, Barbeküs sağda. Hafızanın bazen en sağlam dayanağı, böyle küçük bir intizam."
   ],
   [
    "ABDULLAH",
    "Menünün hacmi büyüse de kanaatimiz değişmiyor. İkimiz de bu hususta fevkalâde istikrarlıyız."
   ],
   [
    "ANLATICI",
    "Sıcak ışıkta bir peçete. Üzerine çok küçük bir yıldız çizilmiş."
   ]
  ],
  "outro": [
   [
    "ABDULLAH",
    "Burası bildiğim akşam mı; yoksa bildiğime benzeterek sığındığım bir yer mi?"
   ],
   [
    "ANLATICI",
    "Masanın üzerindeki peçete değişiyor. Işık biraz soğuyor."
   ]
  ],
  "memory": [
   "Menünün amacı",
   "“Diğer yemekler bizim ne kadar kararlı olduğumuzu görsün diye var.” “Bu açıklamayı garsona yapma, Aptullah.”"
  ],
  "walk": [
   [
    "DAMLA",
    "Ben ayran söylemeyeceğim."
   ],
   [
    "ABDULLAH",
    "Sonra benimkinden bir yudum alacaksın; işin değişmez merasimi bu."
   ],
   [
    "DAMLA",
    "Bir yudum."
   ],
   [
    "ABDULLAH",
    "O bir yudumun hudutlarını hâlâ tayin edemedim. Bardak her seferinde başka bir ifade veriyor."
   ]
  ]
 },
 {
  "title": "İki Kişilik Masa",
  "w": 3,
  "actor": "sen",
  "mechanic": "compare",
  "seed": 40,
  "goal": "İki akşam arasında geç. Yıldızlı peçetenin olduğu masada doğru siparişi kur.",
  "intro": [
   [
    "ANLATICI",
    "Birbirine benzeyen iki ziyaret. Birinde yeşil bir hırka, diğerinde pencereye bırakılmış mavi bir atkı."
   ],
   [
    "ABDULLAH",
    "Bu cümleyi hatırlıyorum. Fakat insan, bildiği sözün içindeki değişmiş sesi hemen duyamıyor."
   ],
   [
    "ANLATICI",
    "Masanın ortasında yine tek ayran var. Aynı küçük alışkanlık, başka bir akşam."
   ]
  ],
  "signs": [
   [
    "ANLATICI",
    "İlk akşam: yıldızlı peçete ve iki sıcak tabak."
   ],
   [
    "ANLATICI",
    "Diğer akşam: boş bardak, mavi atkı. Bu sahne gerçek bir ziyaret iddiası taşımayan kurgu."
   ],
   [
    "ABDULLAH",
    "Tabaklar aynı; sessizliklerinin ağırlığı başka. Bir masada duran her şey görünür olmuyor."
   ]
  ],
  "outro": [
   [
    "DAMLA",
    "Salataya yine dokunmamışsın. Patateslere bu kadar mesafeli davranmıyorsun ama."
   ],
   [
    "ABDULLAH",
    "İnsan her yeşilliği sevmek zorunda değil. Seninle aynı sofraya oturmak hususunda ise hiçbir tereddüdüm yok."
   ],
   [
    "ANLATICI",
    "Yine gülüyorsunuz. Bu kez kahkahanın ardından biraz daha uzun bir sessizlik kalıyor."
   ],
   [
    "İSMET ÖZEL · BİR YUSUF MASALI",
    "“kavuşmak denir mi hep bir arada bulunmaya”"
   ],
   [
    "ABDULLAH",
    "Yan yana oturmak, birbirimizin içinden geçene varabilmek değil. Bazen en uzun mesafe iki sandalye arasında kalıyor."
   ]
  ],
  "memory": [
   "Yıldızlı peçete",
   "Aynı sipariş, iki farklı gün. Benzerlik bir tekrar olduğu anlamına gelmiyor."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Tek bardak masanın ortasında. Paylaşmak dediğimiz şey, bazen iki ayrı siparişten vazgeçmek kadar küçük."
   ],
   [
    "DAMLA",
    "Ben sipariş vermedim ki."
   ],
   [
    "ABDULLAH",
    "Evet, kayıtlarda sipariş benim. Tatbikatta bu müesseseyi beraber yönetiyoruz."
   ]
  ]
 },
 {
  "title": "Hesap Masada Kaldı",
  "w": 3,
  "actor": "sen",
  "mechanic": "cafeGate",
  "seed": 44,
  "goal": "İki ziyaretin işaretlerini birleştir ve restoranın döngü kapısını kapat.",
  "intro": [
   [
    "ABDULLAH",
    "İki akşamı tek bir hatırada birleştirmişim. Hatırlamak da bazen farkında olmadan bir seçişmiş."
   ],
   [
    "ANLATICI",
    "Anılar bozulmadı. Yalnızca yolları birbirine karıştı."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "İlkinde söz kendiliğinden yer buluyordu; susmak, konuşmanın düşmanı değildi."
   ],
   [
    "ABDULLAH",
    "Ötekinde de güldük. Bir kahkaha bütün kırgınlığı yok saymaya yetmiyor; yine de sahte değildi."
   ],
   [
    "MEKANİZMA",
    "Kapıyı kapatmak karşı çıkışı açar. Bağlantı aynı anda kesilir."
   ]
  ],
  "outro": [
   [
    "ANLATICI",
    "Masa yerinde kalıyor. Bir şeyi hatırlamak, o anda yaşamaya devam etmek zorunda olmak değil."
   ],
   [
    "ABDULLAH",
    "Bardakta biraz ayran kalmış. Kimin ne kadar içtiğini değil, aynı masaya ne getirdiğimizi düşünüyorum."
   ],
   [
    "ABDULLAH",
    "Masadan kalkmak, orada yaşananı inkâr etmek değil. Bunu kendime izah etmekte geciktim."
   ],
   [
    "İSMET ÖZEL · MÜNACAAT",
    "“gençtim ve ben neden hata payı yok diyordum hayatımda”"
   ],
   [
    "ABDULLAH",
    "Her sessizliği çözülmesi gereken bir sual saymışım. Bazen cevap yetiştirmeden yanında durmak yeterdi."
   ]
  ],
  "memory": [
   "Sakin bir an",
   "Şiir bittiğinde biriniz hemen konuşmazdı. Bu oyun için hayal edilen ayracın kıvrımında, o küçük bekleyiş var."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Garson ayranı ortaya bıraktı. Bizim uzun uzun tartıştığımız müşterek hayatı, tek hamlede tarif etti."
   ],
   [
    "DAMLA",
    "Adam sistemi anlamış."
   ],
   [
    "ABDULLAH",
    "Ben hâlâ bu teamülün yazılı esaslarını bekliyorum."
   ]
  ]
 },
 {
  "title": "İki Latte, Biraz Daha Zaman",
  "w": 4,
  "actor": "sen",
  "mechanic": "coffee",
  "seed": 47,
  "goal": "İki laktozsuz latte hazırla. Makinenin ritmini yakala ve fincanları pencere masasına götür.",
  "intro": [
   [
    "ANLATICI",
    "Caffelab. Kapı açıldığında dışarıdaki ses biraz geride kalıyor."
   ],
   [
    "DAMLA",
    "Dostuuum, iki latte."
   ],
   [
    "ABDULLAH",
    "Laktozsuz. Küçük bir ayrıntı; fakat seni düşünmenin küçük ayrıntıları yok."
   ],
   [
    "DAMLA",
    "Bay Aptullah çok bilmiş, onu ben de söyleyecektim."
   ],
   [
    "ABDULLAH",
    "İki latteye iki kişilik heyet kurduk. Kahve mütevazı, müzakere teşkilâtlı."
   ],
   [
    "ANLATICI",
    "Makinenin buharı camı örtüyor. Silinince tezgâhın parçaları birbirinden uzaklaşmış."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "İki laktozsuz latte. İnsan sevdiğini yalnız büyük sözlerle değil, neyi istemediğini unutmamakla da tanır."
   ],
   [
    "ABDULLAH",
    "Basıncın her fincanda başka bir eşiği var. Aynı hareketi tekrarlamak, aynı özeni göstermek değil."
   ],
   [
    "DAMLA’NIN İZİ",
    "“Pencere tarafındayım. Kahveler gelene kadar buradayım, dostuuum.”"
   ]
  ],
  "outro": [
   [
    "ABDULLAH",
    "İki latte. Şeker meselesini bugün açmayacağım; bazı konuşmaların kendi tadı var."
   ],
   [
    "DAMLA",
    "Bir kahveye bu kadar yol yürüdük."
   ],
   [
    "ABDULLAH",
    "Kahveye bahane demek haksızlık olur. Birlikte oturmanın, elde tutulan bir fincan kadar somut tarafı da var."
   ],
   [
    "ANLATICI",
    "İki fincandan yükselen buhar, camdaki iki çizgiyi bir anlığına birbirine bağlıyor."
   ],
   [
    "ANLATICI",
    "Fincanın masada bıraktığı halka, başka bir Caffelab akşamını hatırlatıyor. Kahveler soğumuş; konuşma hâlâ sıcak."
   ],
   [
    "DAMLA",
    "Geçen gün insan-ı kâmil diyordun. Hiç hata yapmayan biri mi bu?"
   ],
   [
    "ABDULLAH",
    "Tasavvuftaki insan-ı kâmil, gündelik kusursuzluğa indirgenemez. Ahlâkî ve manevî olgunluğun ufkudur; kendi kendimize verdiğimiz bir yeterlik belgesi değil."
   ],
   [
    "DAMLA",
    "Ama insan kendine “oldum” deyince iş bitmiş gibi davranabilir. Bana orası tehlikeli geliyor."
   ],
   [
    "ABDULLAH",
    "Nâtık oluşumuz da yalnız söz söylemek değil; düşünüp gerekçe kurabilmek. Fakat o imkân, hükmümüzün adaletini kendiliğinden temin etmiyor."
   ],
   [
    "DAMLA",
    "Gerekçe kurmak yetiyor mu? İnsan yanlışını savunmak için de çok güzel gerekçe buluyor."
   ],
   [
    "ABDULLAH",
    "Yine de aklı bütünüyle şüphe altında bırakırsak, kendimizi kandırdığımızı hangi ölçüyle anlayacağız?"
   ],
   [
    "DAMLA",
    "Karşındakini dinleyerek başlayabilirsin. Her itirazı çürüteyim diye dinlersen bir şey öğrenemiyorsun."
   ],
   [
    "ABDULLAH",
    "Demek düşünmek bize bir imkân veriyor; ahlâk, o imkânın başkasının hayatına nasıl değdiğinde başlıyor."
   ],
   [
    "DAMLA",
    "Tamam ama yine fazla düzgün söyledin. Yarın aynı şeyi yaparken göreceğiz."
   ],
   [
    "ABDULLAH",
    "İyiliğin tarifini bilmekle o tarifin mesuliyetini taşımak arasında, insanın bütün ömrü durabiliyor."
   ],
   [
    "DAMLA",
    "Evet. Bir de özür dilerken açıklamayı uzatıp kendini tekrar haklı çıkarmamak var."
   ],
   [
    "ABDULLAH",
    "İnsan-ı kâmil için küçük, Bay Aptullah’ın müdafaa makamı için tarihî bir geri çekiliş."
   ],
   [
    "DAMLA",
    "Bay Aptullah çok bilmiş, önce soğuyan kahveni fark et."
   ],
   [
    "ABDULLAH",
    "Kahvenin soğuduğuna vâkıfım. Ne var ki bilgim henüz fiile intikal edemedi."
   ],
   [
    "DAMLA",
    "Bak işte. Bütün tartışmanın laboratuvar sonucu."
   ],
   [
    "ANLATICI",
    "İkiniz de gülüyorsunuz. Anlaşmazlık bitmiyor; birbirinize anlatmak isteği de bitmiyor."
   ]
  ],
  "memory": [
   "Soğuyan kahve, uzayan konuşma",
   "İki laktozsuz latte arasında insanın düşünüp konuşabilmesiyle iyi davranması üzerine tartışıyorsunuz. Bu hatıra konuşması oyun için yazılmış kurgu."
  ],
  "walk": [
   [
    "ABDULLAH",
    "“Biraz oturalım” derdin; günün bütün telaşı o iki kelimenin dışında kalırdı."
   ],
   [
    "DAMLA’NIN İZİ",
    "“Kahven soğuyor.”"
   ],
   [
    "ABDULLAH",
    "Biliyorum. Her şeyi vaktinde yapmak istemiyorum; bazı gecikmelerin adı beraberlik."
   ]
  ],
  "memoryScenes": [
   "outro"
  ]
 },
 {
  "title": "Bir Dizenin Öte Yanı",
  "w": 4,
  "actor": "sen",
  "mechanic": "verse",
  "seed": 48,
  "goal": "Üç şiirin ve iki şarkının devamını bul. Beş doğru cevap ve sayfaların sırasıyla bütün köprüleri aç.",
  "intro": [
   [
    "ANLATICI",
    "Caffelab’ın arka kapısı, kitap sayfalarından kurulmuş bir yola açılıyor."
   ],
   [
    "ABDULLAH",
    "Bu kez yolun taşı kelime. Eksik bir cümle, iki kıyıyı birbirinden ayırmaya yetiyor."
   ],
   [
    "DAMLA",
    "Ben başlayayım, sen tamamla. Üç ihtimal; biri bıraktığım cümle."
   ],
   [
    "ABDULLAH",
    "Yanlış ihtimaller de içimde bir yere dokunuyor. Tanıdık oluşları, doğru yerde durduklarını göstermiyor."
   ],
   [
    "DAMLA",
    "Çünkü onlar da başka şiirlerden, başka şarkılardan. Tanımak başka, yerini hatırlamak başka."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "Cümle tamamlandı; boşluk yerini bir geçide bıraktı. Sözü bağlamından ayırmamak gerek."
   ],
   [
    "DAMLA",
    "İkinci sayfa. Bu kez yağmuru başka bir şiire taşımadık."
   ],
   [
    "ABDULLAH",
    "Akşamın eli kendi dizesine döndü. Her kelimenin bir hatırası, her hatıranın bir yeri var."
   ],
   [
    "DAMLA",
    "Bir şarkıyı hatırladık. Sayfaların ötesinde bir tane daha var; hemen gitmek yok, dostuuum."
   ],
   [
    "ABDULLAH",
    "Bir sualin cevabı bazen tek bir insandır. Bu şarkıyı hatırlayınca, sesinin kelimelerden evvel geldiğini anlıyorum."
   ]
  ],
  "outro": [
   [
    "ABDULLAH",
    "Yanlış yere koyduğum bazı cümleleri hâlâ seviyorum."
   ],
   [
    "DAMLA",
    "Yanlış şiire koymuş olman, kötü bir dize yaptığın anlamına gelmiyor."
   ],
   [
    "ABDULLAH",
    "Demek bir sözün güzelliği, her suale cevap olmasına yetmiyor. Hakikate, yalnız güzel diye hükmedemem."
   ],
   [
    "DAMLA",
    "Caffelab’daki tartışmaya yeni madde geldi. Bunu sonra konuşacağız."
   ]
  ],
  "memory": [
   "Araya konan ayraç",
   "Cevabı hemen söylemek yerine birbirinize düşünmek için zaman bıraktığınız bir konuşma."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Sayfa kapanıyor. Tamamladığım cümle, bende yeni bir sual açıyor."
   ]
  ]
 },
 {
  "title": "Bütün Yollar Buraya",
  "w": 5,
  "actor": "sen",
  "mechanic": "mixed",
  "seed": 49,
  "goal": "Rayları, kırılgan iskeleleri ve zaman yollarını birlikte kullan.",
  "intro": [
   [
    "ANLATICI",
    "Koru’nun öte yanı. Bir tramvay durağında yağmur, bir park yolunda restoran ışığı."
   ],
   [
    "ABDULLAH",
    "Yollar burada düğümlenmiş. Her biri senden bir iz taşıyor; hiçbirini senin yerine koyamam."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "Bu ışığı sen yaktın. Beni burada tutmak için değil, geçebileyim diye."
   ],
   [
    "ABDULLAH",
    "Benim başlangıcım, senin sona yaklaşırken bıraktığın bir cümleymiş."
   ],
   [
    "ABDULLAH",
    "Geçit açıkken çıkış yeniden başlangıca dönüyor. Benim ümidim, senin yolunu daireye çevirmiş."
   ]
  ],
  "outro": [
   [
    "DAMLA",
    "Çıkışın ışığını görüyorum. Her yaklaştığımda yeniden parka dönüyorum."
   ],
   [
    "ABDULLAH",
    "Kapı açık kaldığı için. Küçük düzeneklerde gördüğüm hakikati, kendime değince kabul etmek güçleşiyor."
   ]
  ],
  "memory": [
   "Mırıldanmanın hatırası",
   "“Şamdanları Donanınca”yı söylemeyi sevdiği hatırlanıyor. Bu anıda şarkının kaydı veya melodisi kullanılmıyor."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Bartın’ın ışığı, Ankara’nın masası… Bir ömür, haritadan çok birbirine emanet edilmiş ayrıntılara benziyor."
   ],
   [
    "ABDULLAH",
    "Beraberliğimiz bittiğinde yaşadıklarımız hükümsüz kalmadı. Bir şeyin sürmemesi, hiç olmamış olması değil."
   ],
   [
    "ANLATICI",
    "Yalnızca onları birbirine bağlayan yollar çözülüyor."
   ]
  ]
 },
 {
  "title": "Son Geçit",
  "w": 5,
  "actor": "sen",
  "mechanic": "relay",
  "seed": 53,
  "goal": "İlk halkayı sen kur. Sonraki iki halkayı Damla’yla tamamla.",
  "intro": [
   [
    "ABDULLAH",
    "Kapıyı kapatan bendim. Gelecekteki yüzümde gördüğüm şey, şimdi içimde bir karara dönüşüyor."
   ],
   [
    "ANLATICI",
    "Geçit iki yolun son bağlantısı. Açık kaldıkça Damla çıkış yerine aynı anılara dönüyor."
   ],
   [
    "ABDULLAH",
    "Senin çıkışını açmak, sana varabileceğim son yolu kapatacak. İkisini birden muhafaza edemem."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "İlk halka yerinde. Kendi tarafımda yapabileceğim buydu; sonrası senin iraden, dostuuum."
   ],
   [
    "DAMLA",
    "Buradaki kol hareket etti. Demek senin tarafında biri hâlâ çalışıyor."
   ],
   [
    "DAMLA",
    "Son ışığı açıyorum. Bu defa dönüp aynı yere gelmek istemiyorum."
   ]
  ],
  "outro": [
   [
    "ANLATICI",
    "İkiniz de yaşayacak ve bu dünyadan çıkabileceksiniz. Ama aynı yoldan değil."
   ],
   [
    "ABDULLAH",
    "Bedelini bilerek yapacağım. Seni sevmiş olmam, yolunu kendime bağlama hakkı vermiyor."
   ],
   [
    "İSMET ÖZEL · SEVGİLİME BİR KEFEN",
    "“yüreğimin palamarlarını çözüyor aya karşı”"
   ],
   [
    "ABDULLAH",
    "Bende kalan hatıra, sende bir esarete dönüşmesin. Son düğümü bunun için çözüyorum."
   ]
  ],
  "memory": [
   "Halkanın öte yanı",
   "Bir mekanizma iki taraftan tamamlandı. Son adım bir düğme sürprizi değil: neyin kapanacağı artık belli."
  ],
  "walk": [
   [
    "DAMLA",
    "Bu tarafta bir kapı daha var. Açılırsa dönmem gerekmeyecek."
   ],
   [
    "ABDULLAH",
    "Sesini işitiyorum. Bu defa sana yetişmenin değil, önündeki yolun açılmasının mesuliyetini taşıyorum."
   ],
   [
    "ANLATICI",
    "Aynı mekanizmanın iki ucunda, iki ayrı el çalışıyor."
   ]
  ]
 },
 {
  "title": "Sevgilime Bir Kefen",
  "w": 5,
  "actor": "sen",
  "mechanic": "final",
  "seed": 58,
  "goal": "Üç halkayı tamamla. Son geçide dokunmadan önce neyin biteceğini hatırla.",
  "intro": [
   [
    "ANLATICI",
    "Bu bir insana değil, birlikte hayal edilen geleceğe veda. Damla yaşıyor. Sen de buradan çıkacaksın."
   ],
   [
    "ABDULLAH",
    "Bir kapıyı açık tutarak bir insanın yanında kalamam. Yakınlık, iki iradenin birbirine dönmesiydi."
   ]
  ],
  "signs": [
   [
    "ABDULLAH",
    "Bir: Yaşadığımızı geriye dönüp silemeyeceğim. Silmek de istemiyorum."
   ],
   [
    "ABDULLAH",
    "İki: Senin yolunun devamı, benim erişebildiğim yerle sınırlı olmayacak."
   ],
   [
    "ABDULLAH",
    "Üç: Ben de buradan çıkacağım. Ayrılık, hayatın geri kalanını hükümsüz kılamaz."
   ]
  ],
  "outro": [
   [
    "ANLATICI",
    "Geçit kapanıyor. Damla’nın önündeki döngü çözülüyor. Işık, bir insanın kendi yoluna çıkmasına yetecek kadar açık."
   ],
   [
    "ANLATICI",
    "Koru. İlk akşam. Bu kez konuşma yarıda kalmıyor."
   ],
   [
    "DAMLA",
    "Dostuuum… Tavuk Dünyası’na mı gitsek?"
   ],
   [
    "ABDULLAH",
    "Kremantar’ın seni bekleyişinde bile bir sadakat var, dostuuum. Biz onu fazla bekletmeyelim."
   ],
   [
    "DAMLA",
    "Bay Aptullah çok bilmiş… Dostuuum, Barbeküs’ünü tamamen makarna mı söyleyeceksin, yoksa salatalı mı?"
   ],
   [
    "ABDULLAH",
    "Tamamen makarna, dostuuum; salatayla aramızda henüz bir sulh tesis edemedik. Sen sebzeli söyleyeceksin, biliyorum."
   ],
   [
    "DAMLA",
    "Aptullah, patates kızartması da var mı? Patates kızartması?"
   ],
   [
    "ABDULLAH",
    "Var elbette. Fakat senin siparişinin hudutları her cümlede biraz daha genişliyor."
   ],
   [
    "DAMLA",
    "Dostuuum, o patatesler…"
   ],
   [
    "DAMLA",
    "…senin tabağında olsa da bizim sayılır. Ayran gibi."
   ],
   [
    "ABDULLAH",
    "Demek mülkiyet meselesini de bir tabak patatesle hallettik. İnsanın seninle münazarası hiç bitmiyor, dostuuum."
   ],
   [
    "ANLATICI",
    "Gülüyorsunuz. Dünya o an için iki kişilik."
   ],
   [
    "ANLATICI",
    "Daha sonraki bir akşam. Aynı bank. Bu kez yanında boş bir yer var. Parkın sesi devam ediyor."
   ]
  ],
  "memory": [
   "Kalan yer",
   "Birlikte gülmüş olmanız, yollar ayrıldığında hiç olmamış sayılmıyor."
  ],
  "walk": [
   [
    "ABDULLAH",
    "Bankı, sofrayı, fincanın sıcaklığını hatırlayabilirim. Hatırlamak, seni o akşamda tutma yetkisi vermiyor."
   ],
   [
    "ABDULLAH",
    "Dostuuum… Kapının ardında, benim bilmediğim hâliyle senin hayatın var."
   ],
   [
    "ANLATICI",
    "Son kol, bir kez daha aynı yere döndürmek için değil, çıkmak için bekliyor."
   ]
  ],
  "soloFrom": 12
 }
];
if(typeof module!=='undefined')module.exports={LEVELS,WORLDS};
