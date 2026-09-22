# Sana Gelen Yol

[Oyunu aç](https://camabdullah.github.io/asdf/)

Damla ve senin hikâyenden beslenen, dokunmatik kontrollü 2D platform ve çevre bulmacası oyunu. Beş dünya ve on beş bölüm, açılıştan **Sevgilime Bir Kefen** finaline kadar oynanabilir bir ilk sürüm olarak uygulanmıştır.

## Oynama

iPhone’da Safari ile bağlantıyı açıp telefonu yatay tut. Uygulama yüklemek gerekmez.

- Soldaki iki düğme: yürüme.
- Sağdaki ↑: zıplama; basılı tutmak daha yüksek atlatır.
- Yakında görünen ✧: işaret, saat, kapı, masa veya anıyla etkileşim.
- Ⅱ: duraklatma, ses ve isteğe bağlı zıplama yardımı.
- Bilgisayar: A/D veya oklar, Boşluk, E, Esc. Diyaloglarda Enter.

Her bölümün üç zorunlu işareti ve üç isteğe bağlı anı parçası var. İzleri okumadan çıkış açılmaz. Saatler yalnızca zaman bulmacası olan bölümlerde kullanılabilir. Kesik çizgili platformlar öteki zamanda katılaşır. Çatlak zeminler üzerinde oyalanma. Hareketli platform için uygun anı bekle.

Damla 8 ve 9. bölümlerde oynanır. 14. bölümün ilk halkasından sonra kontrol yeniden ona geçer. Restoranda Damla’nın Kremantar’ını ve senin Barbeküs’ünü hatırla. 11. bölümde doğru akşamı da seçmek gerekir.

Kayıtlar aynı tarayıcı ve cihazda `localStorage` ile tutulur. Kontrol noktaları, izler, mekanizmalar, bölüm ilerlemesi, izlenen sahneler ve anılar saklanır. Düşmek geçmişi değiştirmez. Sekme arka plana geçtiğinde oyun durur. Tarayıcı verileri silinirse kayıt kaybolabilir.

## Bu sürümün kapsamı

- 15 bölüm, 360 zorunlu platform geçişi, 45 hikâye işareti, 45 anı parçası.
- Kırılgan ve hareketli platformlar; rüzgâr, su, zaman katmanı, döngü kapısı ve sipariş bulmacaları.
- 30 tekrar izlenebilir açılış/kapanış sahnesi; okunarak ilerleyen diyaloglar, katmanlı çizimler, nefes/yürüme, yağmur ve ışık animasyonları.
- Finalde bağlantıyı kapatma işlemi, sonucu önceden anlatılan ayrı bir etkileşimdir. Toplanan anılar finali değiştirmez.
- Canvas çizimleri ve Web Audio ile üretilen özgün kısa tema. Dış kaynak, çerez, izleme, font veya oyun kütüphanesi yok.

Bu bir ilk oynanabilir sürümdür. **1,5–2 saatlik hedef süre ölçülüp doğrulanmış değildir.** 10–60 saniyelik tamamlanmış sinematik prodüksiyon yerine oyuncunun ilerlettiği animasyonlu diyalog sahneleri vardır. Portreler temsilîdir; kişilerin fotoğrafları henüz verilmemiştir. Çevreler stilize vektör çizimleridir; fotoğraflara dayalı anime karakter tasarımı ve elle boyanmış son sanat üretimi bu sürümde tamamlanmış değildir. Gerçek iPhone/Safari performansı ve uzun oyun oturumu ayrıca denenmelidir.

Koru dışındaki şehir ayrıntıları, paylaşıldığı belirtilmeyen konuşmalar, ikinci restoran ziyareti ve final repliği özgün kurgudur. Damla’nın bugünkü düşünceleri hakkında iddia taşımaz. “Şamdanları Donanınca” bir hatıra olarak anılır; kaydı, melodisi ve sözleri kullanılmaz. İsmet Özel şiiri seçilmediği için alıntı eklenmemiştir.

## Hikâye haritası

| Bölüm | Oyuncunun öğrendiği | Önceden bırakılan iz |
|---|---|---|
| 1 | Damla’yı bulmak için yola çıkış | Yarım kalan sıradan konuşma |
| 2 | Damla da sana geliyor | Yağmur lekeli not, açık hava |
| 3 | Görülen insanlar geçmişteki sizsiniz | Yaprakların farklı yaşı |
| 4 | Biletler aynı zamandan değil | Yeni ve eski kâğıt |
| 5 | Aynı mekân başka anılara açılıyor | Paslı/yeni köprü; altın ışık kalıcı |
| 6 | Kapıyı kapatan sen olabilirsin | Küçük kapı kapanınca karşı çıkış açılır |
| 7 | Yolunu biri hazırlamış | Bağlı kol ve üç fener |
| 8 | Fenerleri Damla hazırladı | 7. bölümde kullanılan geçitler |
| 9 | Yolculukların sırası ters | 2. bölümdeki not şimdi yazılır |
| 10 | Sipariş masayı tanımlar | Kremantar, Barbeküs, yıldızlı peçete |
| 11 | Tekrar sanılan iki farklı akşam | Mavi atkı, peçete, değişen sessizlik |
| 12 | Anılar değişmedi; yollar karıştı | Küçük kapının kuralı yeniden görülür |
| 13 | Son geçit döngüyü açık tutuyor | Önceki bütün mekanikler birleşir |
| 14 | Kapatmanın bedeli son bağlantıdır | Halkalar iki karakterle tamamlanır |
| 15 | Damla yaşıyor, ikiniz de çıkabilirsiniz | Kapanan kapının nedeni; ilk konuşmanın devamı |

Gerçek anıların sırası kullanıcı ayrıntılarıyla tamamlanmalıdır. Geçmiş değişmez; oynanış başarısızlıkları anlatı döngüsü değildir.

## Geliştirme

Derleme veya paket kurulumu gerekmez. Depo kökünü herhangi bir statik HTTP sunucusunda aç. GitHub Pages: `main` dalı, `/ (root)`.

- `index.html`, `style.css`: arayüz ve dokunmatik düzen.
- `story.js`: 15 bölümün konuşmaları, görevleri ve dünya paletleri.
- `engine.js`: sabit zaman adımlı fizik ve bölüm geometrisi.
- `game.js`: kayıt, etkileşimler, ses, çizim ve menüler.
- `tests/`: Node.js ile çalıştırılan fizik ve kampanya kontrolleri.

```sh
node tests/engine.cjs
node tests/campaign.cjs
```

Fizik testi her zorunlu geçiş için gerçek fizik motoruyla uygun kalkış/zamanlama arar; insan oynayışının veya toplam süre ölçümünün yerine geçmez. Kampanya testi denetimli bir DOM modeli içinde hikâye, masa, kayıt, duraklatma ve final akışlarını sınar. Tarayıcıda masaüstü ve 844×390 yatay ekran düzeni görsel olarak kontrol edilmiştir.

Sonraki kişiselleştirme: karakter adı, fotoğraflar/kıyafetler, parkın görüntüsü, Bartın/Eskişehir’in anlamı, gerçek şakalar, şiir ve kullanılacak ses kayıtları.

