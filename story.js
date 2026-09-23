'use strict';
const WORLDS = [
 {name:'Ankara / Koru',short:'KORU',sky:['#263f55','#b07d78','#e4ad7c'],land:'#293c41',leaf:'#475b57',accent:'#efbc75',type:'park'},
 {name:'Eskişehir',short:'ESKİŞEHİR',sky:['#182b50','#647292','#d29891'],land:'#30374e',leaf:'#465373',accent:'#efbb86',type:'city'},
 {name:'Bartın',short:'BARTIN',sky:['#152e43','#3f6a77','#8dada9'],land:'#2c484d',leaf:'#315855',accent:'#edc587',type:'rain'},
 {name:'Ankara / Tavuk Dünyası',short:'TAVUK DÜNYASI',sky:['#382d37','#896257','#c69771'],land:'#4b383b',leaf:'#735553',accent:'#f5c080',type:'cafe'},
 {name:'Koru’nun Öte Yanı',short:'KORU’NUN ÖTE YANI',sky:['#171e3c','#57567a','#aa8592'],land:'#34364b',leaf:'#494661',accent:'#ecc69a',type:'end'}
];
const LEVELS = [
 {title:'Yanımda Bir Yer',w:0,actor:'sen',mechanic:'learn',seed:2,
 goal:'Sıcak ışığı takip et. Yön tuşlarıyla yürü, ↑ ile zıpla.',
 intro:[['ANLATICI','Ankara, Koru. Dünya henüz iki kişilik.'],['DAMLA','Dostuuum… Tavuk Dünyası’na mı gitsek?'],['ABDULLAH','Senin Kremantar’ın şu an bizi beklediğini hissediyorum.'],['DAMLA','Bay Aptullah çok bilmiş. Sen de Barbeküs diyeceksin; ama gidince yine menüye bakarsın.'],['ABDULLAH','Tabii bakarım. Belki bu sefer…'],['ANLATICI','Damla gülerek sana dönüyor. Vereceği cevabı duyamadan ayaklarınızın altındaki yol bir kâğıt gibi yırtılıyor.'],['ABDULLAH','Damla? Az önce buradaydın.']],
 signs:[['ABDULLAH','Bankın ışığı hâlâ sıcak. Belki bu taraftan gitmiştir.'],['ABDULLAH','Bu parkta normalde bu kadar boşluk yoktu. Belediyeye yazılacak şeyler listesi büyüyor.'],['ABDULLAH','Bir ışık daha. Tamam, dostuuum. Geliyorum.']],
 outro:[['ANLATICI','Bir anlığına karşı yolda bir gölge beliriyor. Yaklaşınca yalnızca rüzgâr kalıyor.'],['ABDULLAH','Bekle. Bir yolunu bulacağım.']],
 memory:['Bankın sağ tarafı','İkiniz de öbürünün yerini ezbere biliyorsunuz. Bazen yakınlık, sormadan biraz yana kaymak.']},
 {title:'Yolun Bittiği Yer',w:0,actor:'sen',mechanic:'crumble',seed:5,
 goal:'Çatlak zemin üzerinde oyalanma. Üç sıcak işareti bul.',
 intro:[['ABDULLAH','Yol bitti diye yolculuğun bitmesi gerekmiyor. Umarım.'],['ANLATICI','Kenarları altın rengi olan nesneler, parçalanan yolların arasında kalabiliyor. Diğerleri birer görüntü.']],
 signs:[['NOT','“Yol biterse ışığa bak. Ben de sana geliyorum. — D.”'],['ABDULLAH','Kâğıt yağmur yemiş. Ama bugün hava açıktı.'],['ABDULLAH','Altın kenarlı bir mandal. Bu notu bir yerde görmüş müydüm?']],
 outro:[['DAMLA','Dostuuum, bunu bulduğunda fazla düşünme. Işığı izle.'],['ANLATICI','Başka bir akşamın yağmuru. Aynı köşe. Henüz aynı zaman olduğunu sanıyorsun.']],
 memory:['İtiraz dilekçesi','“Buraya ‘yol bitti’ tabelası koymuşlar.” “Devamına bütçe kalmamış olabilir, Aptullah.”']},
 {title:'Aynı Bank, Başka Akşam',w:0,actor:'sen',mechanic:'wind',seed:9,
 goal:'Rüzgâr aralıklarını kullan. Banka giden ışıkları aç.',
 intro:[['ABDULLAH','Şu bank… Orada iki kişi var.'],['ANLATICI','Kız başını geriye atıp gülüyor. Yanındaki çocuk elleriyle çok ciddi bir şey anlatıyor.'],['ABDULLAH','Benim o kadar el kol hareketi yaptığım doğru değil.']],
 signs:[['ABDULLAH','O montu hatırlıyorum. Bu, bizim başka bir akşamımız.'],['ANLATICI','Görüntüye dokunamıyorsun. Anı yaşandığı hâliyle duruyor; değişen yalnızca aradaki yol.'],['ABDULLAH','Seni burada bulmuş gibi oldum. Ama sen burada değilsin.']],
 outro:[['DAMLA','Bu bank neden her seferinde ilk kez görüyormuşum gibi geliyor?'],['ANLATICI','Damla’nın tarafında ağaçların yaprakları daha yeşil.']],
 memory:['Çok ciddi bir mesele','Bir yaprağın belediyeye mi ağaca mı ait olduğunu gereğinden uzun tartışmış olabilirsiniz. Bu küçük sahne kurgu.']},
 {title:'Bir Durak Geriden',w:1,actor:'sen',mechanic:'tram',seed:12,
 goal:'Tramvay platformlarına bin. Duraklardaki ışıkları aç.',
 intro:[['ANLATICI','Eskişehir. Raylar havada, duraklar birbirinden bir akşam uzakta.'],['ABDULLAH','Bir sonraki tramvaya yetişirim. Bu kez gerçekten.']],
 signs:[['DURAKTAKİ İZ','İki bilet. Birinin tarihi silinmiş, ötekinin kenarı hâlâ yeni.'],['ABDULLAH','Aynı yola niye farklı yerlerden çıktık?'],['DAMLA’NIN İZİ','“Beklemek de bir yere gitmek sayılır mı?”']],
 outro:[['ANLATICI','Karşı kıyıda biri demir kapıya uzanıyor.'],['ABDULLAH','Hey! Kapatma, oradan geçmem gerekiyor!']],
 memory:['İki bilet','Bir şehrin ilişkinizdeki gerçek yeri, bu ilk sürümde henüz anlatılmıyor. Buradaki durak, hikâye için kurulan bir mekân.']},
 {title:'Porsuk’un Öteki Saati',w:1,actor:'sen',mechanic:'phase',seed:16,
 goal:'Saat direklerinde ✧ ile zamanı değiştir. Kesik çizgili yollar öteki akşamda katılaşır.',
 intro:[['ABDULLAH','Bu köprü az önce buradaydı.'],['ANLATICI','Saat direklerine dokununca geçmiş değişmiyor. Yalnızca yürüdüğün anı katmanı değişiyor.']],
 signs:[['ABDULLAH','Benim tarafımda pas var. Onun tarafında boya yeni.'],['ANLATICI','Bir ışık iki akşamda da yanıyor. Altın çerçeveli işaretler arada kalabiliyor.'],['ABDULLAH','Aynı yerdeyiz. Aynı anda olmayabiliriz.']],
 outro:[['DAMLA','Köprüye çıktığımda senin sesin aşağıdan gelmişti. Şimdi orada su bile yok.']],
 memory:['Suya bakmak','Su, aynı köprüyü her geçişinde başka bir görüntü taşıyor. Köprü yine de aynı köprü.']},
 {title:'Kapıyı Kapatan Adam',w:1,actor:'sen',mechanic:'gate',seed:21,
 goal:'Küçük döngü kapısını kapat; karşı yoldaki çıkış açılacak.',
 intro:[['ABDULLAH','Kapıyı kapatan kişi… Benim ceketim. Benim yürüyüşüm.'],['ANLATICI','Yüzünü tam seçemiyorsun. Ama elindeki altın halkayı tanıyorsun.']],
 signs:[['MEKANİZMA','Açık kapı: aynı yol yeniden başlar. Kapalı kapı: öteki tarafta çıkış açılır.'],['ABDULLAH','Bu küçük kapıyı kapatınca köprü kayboldu. Ama karşıdaki ışık dışarı çıktı.'],['ABDULLAH','Gelecekteki ben neden yolumu kapatsın?']],
 outro:[['ANLATICI','Siluet sana bakıyor. Dudakları kıpırdıyor: “Birini durdurmuyorum.”'],['ABDULLAH','O zaman ne yapıyorsun?']],
 memory:['Altın halka','Kapının üzerinde çizilmiş iki ok. Birisi dönüp başladığı yere geliyor. Diğeri çemberin dışına çıkıyor.']},
 {title:'Suyun Hatırladığı',w:2,actor:'sen',mechanic:'water',seed:25,
 goal:'Su yükselirken yüksek iskelelerde bekle. Üç feneri takip et.',
 intro:[['ANLATICI','Bartın. Yağmur, ahşabın üzerinde eski bir cümleyi tekrar ediyor.'],['ABDULLAH','Bu ışıkları biri benim için yakmış.']],
 signs:[['ABDULLAH','İlk fener. Önümdeki iskele aydınlandı.'],['ABDULLAH','Şu kolu biri bağlamış. Rüzgâr söndürmesin diye.'],['ABDULLAH','Üçüncüsü… Sen mi yaptın bunu?']],
 outro:[['ANLATICI','Damla’nın eli aynı fenerin camını siliyor. Ama yağmur henüz başlamamış.'],['DAMLA','Burayı karanlıkta geçemez. Önce ışıklar.']],
 memory:['Camdaki parmak izi','Kimin dokunduğunu bilmeden bir dokunuşun yardımını gördün.']},
 {title:'Sen Buradan Geç Diye',w:2,actor:'damla',mechanic:'lantern',seed:28,
 goal:'DAMLA: Üç feneri yak ve iskele geçidini hazırla.',
 intro:[['DAMLA','Pekâlâ Aptullah. Senden önce varmışım gibi görünecek.'],['ANLATICI','Şimdi Damla’yı yönetiyorsun. Biraz önce takip ettiğin ışıklar henüz yanmıyor.'],['DAMLA','Teknik olarak yön bulma işini hâlâ ben yapıyorum.']],
 signs:[['DAMLA','Bir. Camını da silelim. Hizmet kalitesi önemli.'],['DAMLA','İki. Şu kolu bağlıyorum; rüzgârda sönmesin.'],['DAMLA','Üç. Sen buradan geç diye.']],
 outro:[['ANLATICI','Senin geçtiğin iskeleye son bir tahta yerleşiyor.'],['DAMLA','Benim için ne bıraktığını henüz bilmiyorum. Ama yürüyorum.']],
 memory:['Küçük bir iş','Kurtarmak bazen büyük bir sıçrayış değildir. Bir lambanın sönmemesi için ucuna ip bağlamaktır.']},
 {title:'İlk Bulduğun, Son Bıraktığım',w:2,actor:'damla',mechanic:'note',seed:32,
 goal:'DAMLA: Son işaretleri bırak. Koru’ya ulaşan notu yaz.',
 intro:[['DAMLA','Bu parktaki köşeyi hatırlıyorum. Daha yeni ayrılmıştık.'],['ANLATICI','Sen anıların başından sonuna yürüdün. Damla sonundan başına geliyor. Aynı yollar; farklı sıra.']],
 signs:[['DAMLA','Bu ışık bir sonraki akşamda kalacak.'],['DAMLA','Bu mandal altın. Notu iki yol arasında tutabilir.'],['DAMLA','“Yol biterse ışığa bak. Ben de sana geliyorum. — D.”']],
 outro:[['ANLATICI','İlk bulduğun not, Damla’nın son bıraktığı işaretti. Yağmur lekesi şimdi oluşuyor.'],['DAMLA','Dostuuum. Umarım fazla düşünmeden ışığı izlersin.']],
 memory:['Ters okunan yol','İlk işaretin yeni bir haber değildi. Diğer yolun sonuna yakın bırakılmış bir merhabaydı.']},
 {title:'Her Zamankinden',w:3,actor:'sen',mechanic:'plates',seed:36,
 goal:'Masalarda ✧ ile tabakları değiştir: Damla’ya Kremantar, sana Barbeküs.',
 intro:[['DAMLA','Menüye bakacak mısın?'],['ABDULLAH','Bakacağım. Sonra Barbeküs söyleyeceğim. Karar sürecine saygı duy.'],['DAMLA','Ben de Kremantar’ı ilk kez seçiyormuş gibi yaparım.'],['ANLATICI','Tabaklar geliyor. Bildiğin bir akşamın sıcaklığı. Sonra masalar yolların arasında yükselmeye başlıyor.']],
 signs:[['ABDULLAH','Kremantar solda, Barbeküs sağda. Bizim masa bu.'],['ABDULLAH','Menüyü kırk sayfa da yapsalar sonuç değişmiyor.'],['ANLATICI','Sıcak ışıkta bir peçete. Üzerine çok küçük bir yıldız çizilmiş.']],
 outro:[['ABDULLAH','Burası aynı akşam. Değil mi?'],['ANLATICI','Masanın üzerindeki peçete değişiyor. Işık biraz soğuyor.']],
 memory:['Menünün amacı','“Diğer yemekler bizim ne kadar kararlı olduğumuzu görsün diye var.” “Bu açıklamayı garsona yapma, Aptullah.”']},
 {title:'İki Kişilik Masa',w:3,actor:'sen',mechanic:'compare',seed:40,
 goal:'İki akşam arasında geç. Yıldızlı peçetenin olduğu masada doğru siparişi kur.',
 intro:[['ANLATICI','Birbirine benzeyen iki ziyaret. Birinde yeşil bir hırka, diğerinde pencereye bırakılmış mavi bir atkı.'],['ABDULLAH','Aynı cümleyi mi yeniden duyuyorum?']],
 signs:[['ANLATICI','İlk akşam: yıldızlı peçete ve iki sıcak tabak.'],['ANLATICI','Diğer akşam: boş bardak, mavi atkı. Bu sahne gerçek bir ziyaret iddiası taşımayan kurgu.'],['ABDULLAH','Yemekler aynı. Aralarındaki sessizlik farklı.']],
 outro:[['DAMLA','Yine menüye ciddi ciddi bakıyorsun.'],['ABDULLAH','Barbeküs’ün fikri değişmiş olabilir.'],['ANLATICI','Yine gülüyorsunuz. Bu kez kahkahanın ardından biraz daha uzun bir sessizlik kalıyor.']],
 memory:['Yıldızlı peçete','Aynı sipariş, iki farklı gün. Benzerlik bir tekrar olduğu anlamına gelmiyor.']},
 {title:'Hesap Masada Kaldı',w:3,actor:'sen',mechanic:'cafeGate',seed:44,
 goal:'İki ziyaretin işaretlerini birleştir ve restoranın döngü kapısını kapat.',
 intro:[['ABDULLAH','İki kez geldik. Ben onları tek bir akşam sanmışım.'],['ANLATICI','Anılar bozulmadı. Yalnızca yolları birbirine karıştı.']],
 signs:[['ABDULLAH','Birinde konuşmak kolaydı.'],['ABDULLAH','Diğerinde de gülüyorduk. Bu, her şeyin aynı olduğu anlamına gelmiyordu.'],['MEKANİZMA','Kapıyı kapatmak karşı çıkışı açar. Bağlantı aynı anda kesilir.']],
 outro:[['ANLATICI','Masa yerinde kalıyor. Bir şeyi hatırlamak, o anda yaşamaya devam etmek zorunda olmak değil.'],['ABDULLAH','Hesap masada kalmış. Bazı şeyleri toplayıp kalkmayı öğrenmek gerekiyor.']],
 memory:['Sakin bir an','Şiir bittiğinde biriniz hemen konuşmazdı. Bu oyun için hayal edilen ayracın kıvrımında, o küçük bekleyiş var.']},
 {title:'Bütün Yollar Buraya',w:4,actor:'sen',mechanic:'mixed',seed:49,
 goal:'Rayları, kırılgan iskeleleri ve zaman yollarını birlikte kullan.',
 intro:[['ANLATICI','Koru’nun öte yanı. Bir tramvay durağında yağmur, bir park yolunda restoran ışığı.'],['ABDULLAH','Bütün yollar buraya çıktı. Senin yolun da buradan geçiyor.']],
 signs:[['ABDULLAH','Bu feneri sen yaktın.'],['ABDULLAH','Bu notu ben çok önce buldum, sen çok sonra yazdın.'],['ABDULLAH','Geçit açık kaldıkça aynı anılara geri dönüyorsun. Artık görüyorum.']],
 outro:[['DAMLA','Çıkışın ışığını görüyorum. Her yaklaştığımda yeniden parka dönüyorum.'],['ABDULLAH','Çünkü kapı açık. Küçük mekanizmalarda olduğu gibi.']],
 memory:['Mırıldanmanın hatırası','“Şamdanları Donanınca”yı söylemeyi sevdiği hatırlanıyor. Bu anıda şarkının kaydı veya melodisi kullanılmıyor.']},
 {title:'Son Geçit',w:4,actor:'sen',mechanic:'relay',seed:53,
 goal:'İlk halkayı sen kur. Sonraki iki halkayı Damla’yla tamamla.',
 intro:[['ABDULLAH','Kapıyı kapatan kişi bendim. Henüz olmadığım ben.'],['ANLATICI','Geçit iki yolun son bağlantısı. Açık kaldıkça Damla çıkış yerine aynı anılara dönüyor.'],['ABDULLAH','Kapatırsam onun yolu açılacak. Bizim aramızdaki yol bitecek.']],
 signs:[['ABDULLAH','İlk halka hazır. Sıra sende, dostuuum.'],['DAMLA','Buradaki kol hareket etti. Demek senin tarafında biri hâlâ çalışıyor.'],['DAMLA','Son ışığı açıyorum. Bu defa dönüp aynı yere gelmek istemiyorum.']],
 outro:[['ANLATICI','İkiniz de yaşayacak ve bu dünyadan çıkabileceksiniz. Ama aynı yoldan değil.'],['ABDULLAH','Bunu bilerek yapacağım.']],
 memory:['Halkanın öte yanı','Bir mekanizma iki taraftan tamamlandı. Son adım bir düğme sürprizi değil: neyin kapanacağı artık belli.']},
 {title:'Sevgilime Bir Kefen',w:4,actor:'sen',mechanic:'final',seed:58,
 goal:'Üç halkayı tamamla. Son geçide dokunmadan önce neyin biteceğini hatırla.',
 intro:[['ANLATICI','Bu bir insana değil, birlikte hayal edilen geleceğe veda. Damla yaşıyor. Sen de buradan çıkacaksın.'],['ABDULLAH','Bir kapıyı açık tutarak bir insanı yakınımda tutamam.']],
 signs:[['ABDULLAH','Bir: Yaşadığımız şeyler olduğu gibi kalacak.'],['ABDULLAH','İki: Sen kendi yoluna devam edebileceksin.'],['ABDULLAH','Üç: Ben de çıkacağım. Yollarımız birleşmese de.']],
 outro:[['ANLATICI','Geçit kapanıyor. Damla’nın önündeki döngü çözülüyor. Işık, bir insanın kendi yoluna çıkmasına yetecek kadar açık.'],['ANLATICI','Koru. İlk akşam. Bu kez konuşma yarıda kalmıyor.'],['DAMLA','Dostuuum… Tavuk Dünyası’na mı gitsek?'],['ABDULLAH','Senin Kremantar’ın şu an bizi beklediğini hissediyorum.'],['DAMLA','Bay Aptullah çok bilmiş. Sen de Barbeküs diyeceksin; ama gidince yine menüye bakarsın.'],['ABDULLAH','Tabii bakarım. Belki bu sefer…'],['DAMLA','Bu sefer de Barbeküs. Hadi kalk, dostuuum.'],['ABDULLAH','Tamam. Ama menüye bir göz atarım.'],['ANLATICI','Gülüyorsunuz. Dünya o an için iki kişilik.'],['ANLATICI','Daha sonraki bir akşam. Aynı bank. Bu kez yanında boş bir yer var. Parkın sesi devam ediyor.']],
 memory:['Kalan yer','Birlikte gülmüş olmanız, yollar ayrıldığında hiç olmamış sayılmıyor.']}
];

// Brief attributed excerpts; all following character replies are original dialogue.
LEVELS[2].outro.push(['İSMET ÖZEL · AMENTÜ','“kendi tehlikesi peşinden gider insan”'],['ABDULLAH','Korktuğum yere doğru yürüyorum. Bu kez yolun kolay olmasını beklemeyeceğim.']);
LEVELS[10].outro.push(['İSMET ÖZEL · BİR YUSUF MASALI','“kavuşmak denir mi hep bir arada bulunmaya”'],['ABDULLAH','Aynı masada oturmak kolay. Birbirimizin hangi akşamda kaldığını anlamak daha zor.']);
LEVELS[11].outro.push(['İSMET ÖZEL · MÜNACAAT','“gençtim ve ben neden hata payı yok diyordum hayatımda”'],['ABDULLAH','Her sessizliğin doğru cevabını bulmak zorundaymışım gibi davranmışım. Belki bazen dinlemem yeterdi.']);
LEVELS[13].outro.push(['İSMET ÖZEL · SEVGİLİME BİR KEFEN','“yüreğimin palamarlarını çözüyor aya karşı”'],['ABDULLAH','Bende kalan, seni burada tutan bir bağ olmasın. Son düğümü çözmeye gidiyorum.']);
LEVELS[0].signs[0]=['ABDULLAH','Yolun üstüne düşmüş ağacı çevirebilirsem köprü olur. Belediye işi bize kaldı, dostuuum.'];
LEVELS[4].signs[2]=['ABDULLAH','İki akşamın saati hizalandı. Aynı yere varmak, aynı zamanda varmak değilmiş.'];
LEVELS[6].signs[0]=['ABDULLAH','Savağı açtım. Su çekilince fenerlerin gösterdiği iskele ortaya çıktı. Biri yolu önceden hazırlamış.'];

WORLDS.splice(4,0,{name:'Ankara / Caffelab',short:'CAFFELAB',sky:['#242c34','#827466','#ceb08d'],land:'#51453e',leaf:'#68695d',accent:'#eac49b',type:'coffee'});
for(const d of LEVELS)if(d.w===4)d.w=5;
const caffelab={title:'İki Latte, Biraz Daha Zaman',w:4,actor:'sen',mechanic:'coffee',seed:47,
 goal:'İki laktozsuz latte hazırla. Makinenin ritmini yakala ve fincanları pencere masasına götür.',
 intro:[['ANLATICI','Caffelab. Kapı açıldığında dışarıdaki ses biraz geride kalıyor.'],['DAMLA','Dostuuum, iki latte.'],['ABDULLAH','Laktozsuz. Onu söyleyecektim.'],['DAMLA','Bay Aptullah çok bilmiş, onu ben de söyleyecektim.'],['ABDULLAH','Siparişi iki kişi veriyoruz. Kahve aynı, organizasyon büyük.'],['ANLATICI','Makinenin buharı camı örtüyor. Silinince tezgâhın parçaları birbirinden uzaklaşmış.']],
 signs:[['ABDULLAH','İki fincan. İkisi de latte, ikisi de laktozsuz. Bunu unutacak kadar uzaklaşmadım.'],['ABDULLAH','Basınç yeşil aralıktayken sabitle. Acele edersem sadece buharı dinleyeceğim.'],['DAMLA’NIN İZİ','“Pencere tarafındayım. Kahveler gelene kadar buradayım, dostuuum.”']],
 outro:[['ABDULLAH','İki latte. Şeker konuşması yapmıyorum, bugünlük yeterince karar verdik.'],['DAMLA','Bir kahveye bu kadar yol yürüdük.'],['ABDULLAH','Kahve bahane demeyeceğim. Kahve de önemli.'],['ANLATICI','İki fincandan yükselen buhar, camdaki iki çizgiyi bir anlığına birbirine bağlıyor.']],
 memory:['Fincanın izi','Caffelab’da ikiniz de laktozsuz latte içerdiniz. Fincanların masada bıraktığı iki halka, bu sahnede yan yana kalıyor.'],
 walk:[['ABDULLAH','Biraz oturalım demek, bazen bütün günün en iyi fikriydi.'],['DAMLA’NIN İZİ','“Kahven soğuyor.”'],['ABDULLAH','Biliyorum. Yine de biraz daha oturacağım.']]};
LEVELS.splice(12,0,caffelab);
const walkTalks=[
 [['ABDULLAH','Parkın çıkışı burada değildi. Bir ağacı bile yanlış hatırlamıyorum; yolu yanlış buluyorum.'],['DAMLA’NIN İZİ','“Kestirme diye çıktığımız yerde yine merdiven var mı?”'],['ABDULLAH','Var. Bu konuşmayı duyabilmek için bile çıkarım.']],
 [['ABDULLAH','Notun köşesi yırtılmış; harflerin yarısı yerinde.'],['ABDULLAH','Yine de senin yazdığını anlıyorum. Bazı seslerin kâğıtta da sesi var.'],['ANLATICI','Mandalı yerine bırakıyorsun. Başka bir akşamda burada kalacak.']],
 [['ABDULLAH','O bankta oturan ben, biraz sonra nereye gideceğini biliyor sanıyor.'],['ABDULLAH','Yanına gidip bir şey söyleyebilsem...'],['ANLATICI','Söylemiyorsun. O akşam yaşandığı hâliyle kalıyor.']],
 [['ABDULLAH','İki biletin arasından bir kahve fişi çıktı. Şehirler ceplerde birbirine karışıyor.'],['DAMLA’NIN İZİ','“Bir durak yürürüz.”'],['ABDULLAH','Bir durak dediğin bazen güzel bir bahaneydi.']],
 [['ABDULLAH','Saatin akrebi aynı yeri gösteriyor, gölgeler başka yere düşüyor.'],['ABDULLAH','Demek bulmam gereken yalnızca köprü değil.'],['ANLATICI','İki farklı akşamın suyu, aynı taşın altından geçiyor.']],
 [['ABDULLAH','Kapanınca içeride biri kalır sanmıştım. Oysa başka tarafta yol açılıyor.'],['ABDULLAH','Bunu ilk gördüğümde neden anlayamadım?'],['ANLATICI','Bir şeyi görmekle, neye mal olacağını anlamak aynı anda olmuyor.']],
 [['ABDULLAH','Yağmur her şeyi silmemiş. İpin düğümü hâlâ sıkı.'],['ABDULLAH','Bunu aceleyle bağlamamışsın.'],['ANLATICI','Işığın yanında kuru kalmış küçük bir tahta parçası var.']],
 [['DAMLA','Şu feneri biraz sağa alalım. Aptullah gider soldaki karanlığı yol sanır.'],['DAMLA','Haksızlık etmeyeyim; ben de demin aynı yere baktım.'],['ANLATICI','Damla son tahtayı ayağıyla yokluyor, sağlam olduğundan emin oluyor.']],
 [['DAMLA','Not kısa olsun. Uzun yazarsam burada bekler okur.'],['DAMLA','Ama benim de ona söyleyecek çok şeyim var.'],['ANLATICI','Kâğıdı katlıyor. Bir cümleyi içine, birini yolun üzerine bırakıyor.']],
 [['DAMLA','Ben ayran söylemeyeceğim.'],['ABDULLAH','Sonra benimkinden içeceksin.'],['DAMLA','Bir yudum.'],['ABDULLAH','O yudumun ölçeğini yıllardır çözemiyorum.']],
 [['ABDULLAH','Bir ayran, iki kişinin bıraktığı fincan izi gibi masanın ortasında.'],['DAMLA','Ben sipariş vermedim ki.'],['ABDULLAH','Evet. Sipariş bende, kullanım ortak.']],
 [['ABDULLAH','Garson masayı toplarken ayranı hep ortaya koyuyor.'],['DAMLA','Adam sistemi anlamış.'],['ABDULLAH','Ben hâlâ yönetmelik bekliyorum.']],
 caffelab.walk,
 [['ABDULLAH','Şu ışık Bartın’dan, bu masa Ankara’dan. Buraya her şey sığmış.'],['ABDULLAH','Birlikte geçirdiğimiz günler bitince ortadan kaybolmamış.'],['ANLATICI','Yalnızca onları birbirine bağlayan yollar çözülüyor.']],
 [['DAMLA','Bu tarafta bir kapı daha var. Açılırsa dönmem gerekmeyecek.'],['ABDULLAH','Sesini duyuyorum. Bu kez sana yetişmeyi değil, yolu tamamlamayı düşünüyorum.'],['ANLATICI','Aynı mekanizmanın iki ucunda, iki ayrı el çalışıyor.']],
 [['ABDULLAH','Bankı, sofrayı, kahveyi yanımda götürebilirim. Seni buraya bağlayamam.'],['ABDULLAH','Dostuuum. Kapının ardında kendi yolun var.'],['ANLATICI','Son kol, bir kez daha aynı yere döndürmek için değil, çıkmak için bekliyor.']]
];
LEVELS.forEach((d,i)=>{d.walk=walkTalks[i];});
LEVELS[9].intro.splice(3,0,['DAMLA','Ayran istemiyorum.'],['ABDULLAH','Ben bir tane alayım. Sen zaten birazdan benimkinden içersin.'],['DAMLA','Bir yudumdan sipariş olmaz, dostuuum.']);
LEVELS[10].intro.push(['ANLATICI','Masanın ortasında yine tek ayran var. Aynı küçük alışkanlık, başka bir akşam.']);
LEVELS[11].outro.splice(1,0,['ABDULLAH','Ayranın yarısı kalmış. Bu kez kim ne kadar içti diye hesap yapmıyorum.']);

// A remembered conversation; these lines are original fiction, not quotations.
const philosophy=[
 ['ANLATICI','Fincanın masada bıraktığı halka, başka bir Caffelab akşamını hatırlatıyor. Kahveler soğumuş; konuşma hâlâ sıcak.'],
 ['DAMLA','Geçen gün insan-ı kâmil diyordun. Hiç hata yapmayan biri mi bu?'],
 ['ABDULLAH','Tasavvufta daha derin bir anlamı var. Ahlâkî ve manevî olgunluk da işin içinde. Ben kusursuzluk belgesi gibi düşünmüyorum.'],
 ['DAMLA','Ama insan kendine “oldum” deyince iş bitmiş gibi davranabilir. Bana orası tehlikeli geliyor.'],
 ['ABDULLAH','Haklısın. Bir de insanın nâtık oluşu var. Sadece ses çıkarmak değil; düşünüp bir gerekçe kurabilmek.'],
 ['DAMLA','Gerekçe kurmak yetiyor mu? İnsan yanlışını savunmak için de çok güzel gerekçe buluyor.'],
 ['ABDULLAH','Yine de akıl yürütmeden yanlışını nasıl fark edeceksin?'],
 ['DAMLA','Karşındakini dinleyerek başlayabilirsin. Her itirazı çürüteyim diye dinlersen bir şey öğrenemiyorsun.'],
 ['ABDULLAH','O zaman düşünmek bir imkân; iyi davranmak o imkânla ne yaptığın.'],
 ['DAMLA','Tamam ama yine fazla düzgün söyledin. Yarın aynı şeyi yaparken göreceğiz.'],
 ['ABDULLAH','Bir insanın iyi olduğunu bilmesiyle iyi olması aynı şey değil diyorsun.'],
 ['DAMLA','Evet. Bir de özür dilerken açıklamayı uzatıp kendini tekrar haklı çıkarmamak var.'],
 ['ABDULLAH','İnsan-ı kâmil için küçük, Bay Aptullah için büyük bir adım.'],
 ['DAMLA','Bay Aptullah çok bilmiş, önce soğuyan kahveni fark et.'],
 ['ABDULLAH','Kahvenin soğuduğunu biliyorum. İçme davranışına henüz geçemedim.'],
 ['DAMLA','Bak işte. Bütün tartışmanın laboratuvar sonucu.'],
 ['ANLATICI','İkiniz de gülüyorsunuz. Anlaşmazlık bitmiyor; birbirinize anlatmak isteği de bitmiyor.']
];
LEVELS[12].outro.push(...philosophy);LEVELS[12].memoryScenes=['outro'];
LEVELS[12].memory=['Soğuyan kahve, uzayan konuşma','İki laktozsuz latte arasında insanın düşünüp konuşabilmesiyle iyi davranması üzerine tartışıyorsunuz. Bu hatıra konuşması oyun için yazılmış kurgu.'];
LEVELS.splice(13,0,{title:'Bir Dizenin Öte Yanı',w:4,actor:'sen',mechanic:'verse',seed:48,
 goal:'Üç şiirin ve bir şarkının devamını bul. Dört doğru cevapla dört köprüyü aç.',
 intro:[['ANLATICI','Caffelab’ın arka kapısı, kitap sayfalarından kurulmuş bir yola açılıyor.'],['ABDULLAH','Bu kez yolların devamını kelimeler tutuyor.'],['DAMLA','Ben başlayayım, sen tamamla. Üç ihtimal; biri bıraktığım cümle.'],['ABDULLAH','Yanlış olanlar da tanıdık geliyor.'],['DAMLA','Çünkü onlar da başka şiirlerden, başka şarkılardan. Tanımak başka, yerini hatırlamak başka.']],
 signs:[['ABDULLAH','İlk dize yerini buldu. Bir köprü daha var.'],['DAMLA','İkinci sayfa. Bu kez yağmuru başka bir şiire taşımadık.'],['ABDULLAH','Akşamın eli, doğru anının kapısına uzandı.'],['DAMLA','Şarkının devamını da hatırladın. Şimdi gerçekten yola devam edebiliriz, dostuuum.']],
 outro:[['ABDULLAH','Bazı yanlış cevapları da seviyorum.'],['DAMLA','Yanlış şiire koymuş olman, kötü bir dize yaptığın anlamına gelmiyor.'],['ABDULLAH','Her güzel cümle, her sorunun cevabı olmuyormuş.'],['DAMLA','Caffelab’daki tartışmaya yeni madde geldi. Bunu sonra konuşacağız.']],
 memory:['Araya konan ayraç','Cevabı hemen söylemek yerine birbirinize düşünmek için zaman bıraktığınız bir konuşma.'],
 walk:[['ABDULLAH','Sayfa kapanıyor; cümle bende kalıyor.']]});
if(typeof module!=='undefined')module.exports={LEVELS,WORLDS};
