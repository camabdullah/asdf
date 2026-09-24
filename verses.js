'use strict';
const RoadVerses=(()=>{
 const questions=[
 {
  "author": "İsmet Özel",
  "work": "Amentü",
  "kind": "ŞİİR",
  "prompt": "ama bir eylül günü bilek damarlarımı kestiğim zaman",
  "answer": "bu söz asıl anlamını kavradı",
  "source": "https://anadolusairleri.com/siir-sair/amentu",
  "others": [
   {
    "text": "yüreğimin palamarlarını çözüyor aya karşı",
    "work": "Sevgilime Bir Kefen",
    "source": "https://www.siirparki.com/ismetozel18.html"
   },
   {
    "text": "ölümle paslanmış buldum sesimi",
    "work": "Münacaat",
    "source": "https://art-isanat.com.tr/library/ismet-ozel/munacaat"
   }
  ]
 },
 {
  "author": "İsmet Özel",
  "work": "Karlı Bir Gece Vakti Bir Dostu Uyandırmak",
  "kind": "ŞİİR",
  "prompt": "Keşke yağmuru çağıracak kadar güzel olmasaydım",
  "answer": "Ölüm ve acılar çatsaydı beni",
  "source": "https://istanbul.meb.gov.tr/dergi/dergi9/istanbuldergisi9sayi.pdf",
  "others": [
   {
    "text": "kendi tehlikesi peşinden gider insan",
    "work": "Amentü",
    "source": "https://anadolusairleri.com/siir-sair/amentu"
   },
   {
    "text": "onu ben ne kadar buldum desem yok olur",
    "work": "Karoon",
    "source": "https://kutuphane.kku.edu.tr/tez/206069.pdf"
   }
  ]
 },
 {
  "author": "İsmet Özel",
  "work": "Karoon",
  "kind": "ŞİİR",
  "prompt": "ona doğru uzanınca akşamın kanlı eli",
  "answer": "sönmüş ateşlerini öptü tapınağımın",
  "source": "https://kutuphane.kku.edu.tr/tez/206069.pdf",
  "others": [
   {
    "text": "gövdem açık bir hedef kılındı belâlara",
    "work": "Karlı Bir Gece Vakti Bir Dostu Uyandırmak",
    "source": "https://istanbul.meb.gov.tr/dergi/dergi9/istanbuldergisi9sayi.pdf"
   },
   {
    "text": "kopartılmış yapraklarımdan ibaretti hüzün",
    "work": "Yaşamak Umrumdadır",
    "source": "https://siirhane.net/ismetozel/yasamak-umrumdadir-siiri-ismet-ozel/"
   }
  ]
 },
 {
  "author": "Emre Fel",
  "work": "Sana El Pençe Durmam",
  "kind": "ŞARKI",
  "prompt": "Müşküle tabi zulüm, peki derdime dert ne diye?",
  "answer": "Beni anlamadın da kanatma canım, ne olur",
  "source": "https://www.shazam.com/song/1740357540/sana-el-penc3a7e-durmam",
  "others": [
   {
    "text": "Beni gül gibi sarmaladın",
    "work": "Naçar",
    "source": "https://www.shazam.com/song/1763034833/nac3a7ar"
   },
   {
    "text": "Umutları ser yorgun yanıma",
    "work": "Rüya",
    "source": "https://www.shazam.com/tr-tr/song/1718893344/rc3bcya"
   }
  ]
 },
 {
  "author": "Murat Kekilli",
  "work": "Kara Gözlüm",
  "kind": "ŞARKI",
  "prompt": "Kara gözlüm sevdalanmış",
  "answer": "Kime dedim yar sana dedi",
  "source": "https://www.youtube.com/watch?v=BIzMEZIUBnE",
  "others": [
   {
    "text": "Sana ettiğim onca iltifat",
    "work": "Eşek Gözlüm",
    "source": "https://www.shazam.com/song/860573768/e%C5%9Fek-g%C3%B6zl%C3%BCm"
   },
   {
    "text": "Ölümümsün sen benim",
    "work": "Aklıma Gelmeyecektin",
    "source": "https://www.myrepertuar.com/9660/murat-kekilli/aklima-gelmeyecektin-sarki-sozu.html"
   }
  ]
 }
];
 function options(n){const q=questions[n];if(!q)return [];const a=[...q.others.map(o=>({...o,correct:false})),{text:q.answer,work:q.work,source:q.source,correct:true}];const shift=(n+1)%3;return a.slice(shift).concat(a.slice(0,shift));}
 function check(n,text){return !!questions[n]&&text===questions[n].answer;}
 return {questions,options,check};
})();
if(typeof module!=='undefined')module.exports=RoadVerses;
