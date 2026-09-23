# v7 görsel üretim kaydı

Yerleşik image_gen aracı kullanıldı; CLI veya ayrı bir API anahtarı kullanılmadı. Abdullah portresi, kullanıcının bu sürüm için gönderdiği fotoğrafı kimlik referansı alır. Fotoğrafın aslı yayınlanmaz. Boyama çıktıları mobil yükleme için WebP biçimine küçültülüp sıkıştırıldı; yaratıcı düzenleme yapılmadı.

- Oyun portresi: assets/characters/abdullah-v7.webp (512 × 512)
- Hayal bahçesi: assets/scenes/garden-v7.webp (1600 × 900)
- Özgün PNG çıktıları çalışma alanında aynı adla saklanır; yayın paketinde yalnız WebP bulunur.
- Karakterlerin hareketi, pozları, kolları, parçalanma, kamera ve atmosfer animasyonları Canvas koduyla çizilir. Hareketli Abdullah’ın kahverengi kapüşonlusu ve yüz ayrıntıları yeni referansa göre güncellendi.

## Portre için kullanılan istem

Use case: illustration-story. Create a single square dialogue portrait for the Turkish 2D story game Sana Gelen Yol. The attached photograph is ONLY an identity reference of Abdullah: preserve his recognisable face proportions very closely, not a generic anime boy. Broad forehead, thick dark swept-back wavy quiff with a few silver hairs near the front, thick almost straight eyebrows, gently heavy-lidded brown almond eyes, long softly broad nose, connected dense moustache and close full dark beard with distinct soul patch, warm olive light-medium skin, subtly asymmetric small kind smile. Adult man, same apparent age as reference. Wearing the reference's dusty brown hoodie over an off-white crew-neck. Style: refined hand-painted 2D narrative-game illustration, delicate accurate linework, expressive realistic facial proportions with a modest anime influence, soft gouache shading and natural skin details. Composition: centered bust portrait, straight-on slightly turned to the right, complete hair with margin, shoulders near lower edge, face large and legible at 112px. Muted deep midnight teal plain painted background, warm amber evening sidelight. No text, labels, border, other people, scenery, comic panels or photographic collage. Make the likeness the highest priority; do not enlarge eyes or turn the forehead/hairstyle into spiky gray hair. Output one final square portrait asset.

## Bahçe için kullanılan istem

Use case: illustration-story. Asset type: cinematic background for romantic 2D Turkish narrative game Sana Gelen Yol. Create one wide 16:9 hand-painted animation background, no text and no people. A secret rose garden that subtly blends an Ankara park and a quiet riverside wooden pavilion. Golden hour moving into blue dusk, warm hanging lanterns strung between dark sculptural trees, climbing white roses around a distant luminous arch, still lake glimpsed through the arch. Intimate and wistful, sophisticated atmospheric gouache/anime-film background art, exquisitely painted foliage, muted amber and deep teal with dusty pink light. Strong layered depth: soft distant reflected trees and lake, midground vine-covered pergola centered slightly right, open paved terrace stretching across lower middle with space for two animated characters and a park bench to be drawn in front. A few unfocused leaves frame upper corners, subtle dust motes, no excessive particles. The floor horizon is about 76% down. Calm cinematic composition with believable scale, luminous reflected light, rich painterly texture. No furniture or figures in the central open area, no lettering, logos, captions, interface or split panels.


# v8 Damla portresi

Yerleşik image_gen kullanıldı. Kimlik referansı kullanıcının Damla olarak belirttiği fotoğraf, üslup referansı ise oyunun Abdullah portresidir. Fotoğrafın aslı yayınlanmaz. Çıktı incelendikten sonra 512 × 512 WebP biçimine sıkıştırıldı.

- Yayınlanan dosya: assets/characters/damla-v8.webp (46.152 bayt).
- Çalışma alanındaki PNG: assets/characters/damla-v8.png.
- Hareketli karakter, siyah beyaz hatıralar ve renkli ara sahnelerin yüz/saç/kapüşonlu çizimi characters.js içinde aynı referansa göre yenilendi.

## Kullanılan son istem

Use case: illustration-story. Asset type: single square dialogue portrait for Turkish 2D narrative game Sana Gelen Yol.
Input image 1 is Damla's identity reference. Input image 2 is ONLY the existing Abdullah portrait's rendering-style, crop, background and lighting reference; do not copy his facial features or clothing.
Create a refined hand-painted portrait of the same adult woman in image 1, very closely preserving her recognisable face and apparent age. Long straight dark brown-black hair with soft airy separated wispy bangs sweeping onto the forehead and temples, a slightly off-centre part and natural flyaway strands; softly oval cheeks narrowing to a small gently rounded chin; fine natural brows, small dark brown almond eyes with natural upper lids (not oversized anime eyes); softly rounded projecting nose, softly asymmetric lips slightly parted in a quiet affectionate smile. Preserve the actual three-quarter face direction, proportions, cheek and nose silhouette of the photograph. Warm light skin. Black charcoal hoodie with hood down and long hair resting over her shoulders.
Medium: delicately painted narrative-game illustration, realistic facial proportions with modest anime influence, subtle gouache texture and accurate fine linework, warm amber evening light, matching image 2's sophisticated finish. Centered bust portrait, slight three-quarter turn to viewer's right, full hair crown with comfortable margin, shoulders and hood near lower edge, face readable at 112 pixels. Plain deep midnight teal painted background matching image 2.
One portrait only. No phone, no other people, no text, logo, panel, frame, jewellery or photographic collage. Do not beautify into a generic anime woman, enlarge eyes, change facial identity or give thick blunt bangs. Likeness is the first priority. Square output.

