'use strict';
// Each puzzle has a visible physical rule. No random hidden answer or timed guessing.
const RoadLogic=(()=>{
 const puzzles={
  gardenLight:{type:'mirror',title:'Çardağa düşen ışık',clues:['Işık soldan gelir. Aynaya dokunmak onu / ile \\ arasında çevirir.','Işık önce aşağıdaki aynadan geçmeli; çardağın yıldızına kesintisiz ulaşmalı.'],size:5,start:[-1,4,1,0],target:[4,0],mirrors:[[2,4],[2,2],[0,2],[0,0]],initial:[1,0,0,1]},
  riverLight:{type:'mirror',title:'İki kıyının aynası',clues:['Altın ışığı sağ üstteki alıcıya taşı. Işık, aynanın yüzüne göre dik açıyla döner.','Yanan çizgiyi takip et; ışığın dışarı çıktığı ilk aynadan başlayarak düşün.'],size:5,start:[-1,3,1,0],target:[4,0],mirrors:[[1,3],[1,1],[3,1],[3,0]],initial:[1,0,0,1]},
  reunionLight:{type:'mirror',title:'Birbirimizin yolunu görmek',clues:['Damla alt kıyıda, Abdullah üst kıyıda. Aynalar aynı ışığı birbirine devreder.','Alıcıya ulaşmadan çıkışa taşan ışık, köprüyü kurmaz.'],size:5,start:[5,4,-1,0],target:[0,0],mirrors:[[3,4],[3,2],[1,2],[1,0]],initial:[0,0,1,0]},
  counterweight:{type:'weight',title:'Yolun karşı ağırlığı',clues:['Üç yuvaya farklı taşlar koy. Depoda 1, 2, 3 ve 4 birimlik birer taş var; biri kullanılmayacak.','Toplam yük 7 olmalı. Kol uzunlukları soldan sağa 1, 2 ve 3: taş × kol değerlerinin toplamı 15 olmalı. Sağda 1 kolluk uzaklıkta 15 birim sabit ağırlık var.'],initial:[1,2,3],total:7,torque:15,arms:[1,2,3]},
  relayWeight:{type:'weight',title:'İki ucun dengesi',clues:['Üç yuvaya birbirinden farklı taşlar yerleştir. 1–4 birim taşlardan yalnız üçü kullanılacak.','Toplam yük 8; kol uzunlukları 1, 2, 3. Ağırlık × kol toplamı 15 olmalı. Sağda 1 kolluk uzaklıkta 15 birim sabit ağırlık var.'],initial:[1,2,3],total:8,torque:15,arms:[1,2,3]},
  invitation:{type:'order',title:'Akşamın küçük merasimi',clues:['Fener, pencere açıldıktan sonra yakıldı.','Latte, fenerden sonra geldi. Yaprak ise lattenin hemen ardından masaya düştü.'],cards:['Pencere','Fener','Latte','Yaprak'],answer:[0,1,2,3],initial:[2,0,3,1]},
  tableMemory:{type:'order',title:'Bir masanın dört izi',clues:['Peçeteye yıldız, yemek gelmeden hemen önce çizildi.','Ayrandan alınan yudum yemekten sonraydı. Atkı en son sandalyeden alındı.'],cards:['Yıldız','Yemek','Bir yudum','Atkı'],answer:[0,1,2,3],initial:[3,1,0,2]},
  bookOrder:{type:'order',title:'Kalan sayfaların sırası',clues:['Şarkı sayfası en sondaydı. Yağmur sayfası, akşam sayfasının hemen önündeydi.','Eylül sayfası yağmurdan önceydi. Defterde dört sayfa var.'],cards:['Eylül','Yağmur','Akşam','Şarkı'],answer:[0,1,2,3],initial:[2,3,1,0]}
 };
 function beam(q,values){let [x,y,dx,dy]=q.start;const points=[[x,y]],visited=new Set();for(let step=0;step<80;step++){x+=dx;y+=dy;points.push([x,y]);if(x===q.target[0]&&y===q.target[1])return {points,solved:true};if(x<0||y<0||x>=q.size||y>=q.size)break;const state=[x,y,dx,dy].join(',');if(visited.has(state))break;visited.add(state);const n=q.mirrors.findIndex(p=>p[0]===x&&p[1]===y);if(n>=0)[dx,dy]=values[n]===0?[-dy,-dx]:[dy,dx];}return {points,solved:false};}
 function check(id,v){const q=puzzles[id];if(!q||!Array.isArray(v)||v.length!==q.initial.length)return false;
  if(q.type==='mirror')return v.every(n=>n===0||n===1)&&beam(q,v).solved;
  if(q.type==='weight')return v.every(n=>Number.isInteger(n)&&n>=1&&n<=4)&&new Set(v).size===3&&v.reduce((a,b)=>a+b,0)===q.total&&v.reduce((s,n,i)=>s+n*q.arms[i],0)===q.torque;
  return v.every((n,i)=>n===q.answer[i]);
 }
 function feedback(id,v){const q=puzzles[id];if(q.type==='mirror')return beam(q,v).solved?'Işık alıcıya ulaştı. Düzeni sabitleyebilirsin.':'Işığın kesildiği aynayı izle. Yolu alıcıya kadar kur.';if(q.type==='weight')return 'Yük '+v.reduce((a,b)=>a+b,0)+' / '+q.total+' · Ağırlık × kol '+v.reduce((s,n,i)=>s+n*q.arms[i],0)+' / '+q.torque+(new Set(v).size<3?' · Aynı taştan iki tane yok.':'');return 'Sırayı ipuçlarının tamamına göre kur. İki karta dokunmak yerlerini değiştirir.';}
 return {puzzles,beam,check,feedback};
})();
if(typeof module!=='undefined')module.exports=RoadLogic;
