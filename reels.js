'use strict';
// Individually staged memories: no shared montage is repeated at chapter exits.
const RoadReels=(()=>{
 const list=[
  ['leaf','Yaprağın sahibi','Bir yaprak için gereğinden uzun süren o konuşma.'],
  ['bookmark','Kitabın arasında','Bir ayraç, kaldığın yeri senin yerine hatırlar.'],
  ['shadows','Yan yana uzayan gölgeler','O akşam, eve dönmeyi biraz geciktirmiştiniz.'],
  ['tickets','Biletin öteki yüzü','İki bilet, camda yan yana duran iki yansıma.'],
  ['reflection','Köprüden aşağı bakmak','Su görüntüyü değiştirir. O anı geri almaz.'],
  ['key','Bir kapıyı tutmak','Önden geçerken arkasından geleni unutmamak.'],
  ['umbrella','Yağmurun altında yer açmak','Şemsiyenin ortası, konuşa konuşa değişiyor.'],
  ['knot','Sönmesin diye','Düğümü bir kez daha yoklayan el.'],
  ['letter','Mandalın altında','Kâğıt katlanıyor. Yağmur izi henüz kurumamış.'],
  ['napkin','Yıldızlı peçete','Yemek gelmeden biten küçük bir çizim.'],
  ['glass','Bardağın bıraktığı halka','Bir yudumun hesabı, masadaki izde kaldı.'],
  ['coat','Kalkmadan önce','Masaya dönüp unutulan atkıyı almak.'],
  ['steam','Camdaki soru','Bir tartışmadan, cevap kadar yeni bir soru da kalır.'],
  ['cassette','Devamını sen söyle','Dört cevap, aynı defterin arasına yerleşiyor.'],
  ['map','Cepte biriken yollar','Başka şehirlerden kalan küçük kâğıtlar.'],
  ['hands','İki ayrı el','Birlikte tamamlanan şey, iki ayrı yolu açıyor.']
 ];
 const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
 function transition(i){const [reel,title,caption]=list[i];return {kind:'reel',reel,title,caption,duration:12,memory:true};}
 function draw(c,W,H,f,person){
  const t=f.time,m=W/2,p=clamp(t/f.duration),q=smooth((t-2)/7);
  const rect=(x,y,w,h,color)=>{c.fillStyle=color;c.fillRect(x,y,w,h);};
  const line=(x,y,a,b,color='#a8aaa8',width=2)=>{c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.moveTo(x,y);c.lineTo(a,b);c.stroke();};
  const oval=(x,y,rx,ry,color)=>{c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();};
  const poly=(ps,color)=>{c.fillStyle=color;c.beginPath();ps.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill();};
  const text=(s,x,y,size=14,color='#d7d9d5')=>{c.fillStyle=color;c.textAlign='center';c.font=size+'px Georgia';c.fillText(s,x,y);};
  const human=(x,y,who,face=1,seated=false,walking=false)=>{c.save();c.translate(x,y);c.scale(1.5,1.5);person(c,{x:0,y:0,who,facing:face,seated,moving:walking,time:t,steps:t*110});c.restore();};
  function paper(x,y,w,h,angle=0){c.save();c.translate(x,y);c.rotate(angle);rect(-w/2,-h/2,w,h,'#c8c6b8');for(let n=0;n<4;n++)line(-w*.36,-h*.2+n*13,w*.32,-h*.2+n*13,'#73766c',1);c.restore();}
  function palm(x,y,flip=1){c.save();c.translate(x,y);c.scale(flip,1);poly([[-80,11],[-29,-5],[0,-9],[19,-2],[13,7],[-10,8],[-28,25],[-80,40]],'#d0b094');line(-29,-3,1,-1,'#877c73',2);c.restore();}
  function tree(x){line(x,450,x-5,192,'#4d5654',13);for(let n=0;n<7;n++)oval(x+Math.sin(n*2.3)*55,182+Math.cos(n)*37,63,28,'#657069');}
  function outdoor(){const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#303c4b');g.addColorStop(1,'#a69c8b');rect(0,0,W,H,g);oval(W*.79,146,30,30,'#d5cfb944');for(let n=0;n<5;n++)tree(n*W/4-40);rect(0,446,W,154,'#424f4c');}
  function room(){rect(0,0,W,H,'#555956');for(let n=0;n<5;n++){rect(n*W/5+30,108,W/5-60,233,'#7c827866');line(n*W/5+W/10,70,n*W/5+W/10,154,'#b1afa2');poly([[n*W/5+W/10-22,157],[n*W/5+W/10+22,157],[n*W/5+W/10+33,175],[n*W/5+W/10-33,175]],'#ccc1a6');}rect(0,449,W,151,'#353f43');}
  function table(){rect(m-225,380,450,19,'#9d8669');line(m-190,399,m-190,470,'#4d4e4a',9);line(m+190,399,m+190,470,'#4d4e4a',9);}
  function latte(x,y){oval(x,y+3,23,5,'#bfc5ba');rect(x-13,y-24,26,25,'#e0dcc6');oval(x,y-24,13,4,'#e1d6bd');oval(x,y-24,10,2,'#84725d');for(let n=0;n<3;n++){const h=(t*13+n*15)%41;line(x+Math.sin(t+n)*4,y-31-h,x+Math.sin(t+n+.8)*6,y-38-h,'#dfdfd230',1);}}
  c.save();if(f.dialogue)c.translate(0,-95);outdoor();
  switch(f.reel){
   case 'leaf':{
    human(m-104,438,'sen',1);human(m+94,438,'damla',-1);const x=m-75+q*166,y=191+q*168;
    c.save();c.translate(x,y);c.rotate(t*.65);poly([[-19,0],[0,-9],[25,2],[1,13]],'#cdbb86');line(-18,0,22,2,'#6e796a',1);c.restore();
    line(m-81,390,m-45+q*39,367,'#c1a38e',5);line(m+72,394,m+22,363+Math.sin(t)*4,'#c1a38e',5);break;
   }
   case 'bookmark':{
    room();table();c.save();c.translate(m,315);c.rotate(-.08);paper(-88,0,178,176);paper(88,0,178,176);line(0,-88,0,88,'#444f50',5);const yy=-184+q*132;rect(49,yy,22,150,'#7a8984');poly([[49,yy+150],[60,yy+136],[71,yy+150]],'#c8c6b8');palm(81,yy-4);c.restore();text('KALDIĞIMIZ YER',m,155);break;
   }
   case 'shadows':{
    outdoor();rect(0,319,W,175,'#8f978d');for(let n=0;n<9;n++)line(n*180-t*3,319,n*180+65-t*3,494,'#66736f',1);
    for(const [off,h]of [[-32,136],[33,119]]){c.save();c.translate(m+off+q*66,367);c.rotate(-.45);oval(0,h,19,11,'#303a3e99');poly([[-10,0],[-20,h-8],[20,h-8],[10,0]],'#303a3e99');c.restore();}
    human(m-30+q*66,372,'sen',1,false,true);human(m+34+q*66,372,'damla',1,false,true);break;
   }
   case 'tickets':{
    room();rect(m-300,161,600,265,'#303f4b');for(let n=0;n<10;n++){const x=m-290+((n*73+t*33)%570);rect(x,213+(n%3)*27,44,181,'#89918a55');}line(m,162,m,426,'#a6a99e',7);
    paper(m-83,317,133,92,-.18);paper(m+83,317,133,92,.13);text('01',m-83,327,22);text('02',m+83,327,22);const x=m-224+q*190;palm(x,355);for(let n=0;n<7;n++)line(m-127+n*14,338,m-127+n*14,346,'#626d66',2);break;
   }
   case 'reflection':{
    outdoor();rect(0,311,W,183,'#64767d');for(let n=0;n<15;n++)line(0,330+n*12,W,330+n*12,'#abbeb536',1);
    c.save();c.translate(0,624);c.scale(1,-.72);c.globalAlpha=.38;human(m-36+Math.sin(t)*5,365,'sen');human(m+38-Math.sin(t)*5,365,'damla',-1);c.restore();
    rect(0,276,W,15,'#434e50');for(let n=0;n<11;n++)line(n*W/10,289,n*W/10,346,'#88958e',5);human(m-35,285,'sen');human(m+38,285,'damla',-1);for(let n=0;n<8;n++)oval(m+Math.sin(t+n)*60,410+n*7,120+n*22,2,'#bec7bd44');break;
   }
   case 'key':{
    room();rect(m-106,140,212,311,'#283941');rect(m-95,145,190*(1-q),305,'#8d8a79');line(m-106,139,m-106,452,'#b3b0a1',6);human(m-158,439,'sen',1);human(m+15+q*195,439,'damla',1,false,true);line(m-137,388,m-92,340,'#ceb195',6);oval(m-67,323,6,6,'#d5d5c5');break;
   }
   case 'umbrella':{
    outdoor();const x=m-58+q*108;for(let n=0;n<70;n++){const xx=(n*89+t*98)%W,yy=(n*67+t*262)%H;line(xx,yy,xx-9,yy+21,'#c5d3cd66',1);}
    human(m-38,440,'sen',1);human(m+46,440,'damla',-1);line(x,235,x,369,'#bbc5bd',4);c.beginPath();c.arc(x,237,108,Math.PI,Math.PI*2);c.fillStyle='#434f53';c.fill();for(let n=-1;n<=1;n++)line(x,130,x+n*98,236,'#818c87',2);oval(m-8,467,119,5,'#b7c5bd44');break;
   }
   case 'knot':{
    outdoor();rect(m-11,210,22,270,'#596960');rect(m-60,164,120,123,'#a0a896');rect(m-48,174,96,104,q>.5?'#dad1a5':'#586c72');poly([[m-82,163],[m,106],[m+82,163]],'#3a4647');
    for(let n=0;n<3;n++){c.strokeStyle='#ccc3a9';c.lineWidth=4;c.beginPath();c.ellipse(m,320+n*10,23+smooth(t/6)*14,11,0,0,Math.PI*2);c.stroke();}palm(m-41-q*24,344);palm(m+47+q*24,344,-1);line(m-25,340,m-70-q*40,388,'#c9c2ac',4);break;
   }
   case 'letter':{
    outdoor();rect(m-220,382,440,40,'#9a8971');paper(m,303,240,144,-.04);const fold=smooth((t-2)/4);poly([[m-120,375],[m+120,375],[m+120,375-fold*137],[m-120,375-fold*137]],'#a8b2a4');rect(m+78,250,19,65,'#606e63');palm(m+120-q*60,270,-1);for(let n=0;n<12;n++){const a=Math.max(0,t-7);oval(m-100+(n*29)%202,279+(n*23)%68,Math.min(5,a)*.6,Math.min(5,a)*.35,'#56686244');}break;
   }
   case 'napkin':{
    room();table();paper(m,303,184,151,.07);const points=[];for(let n=0;n<11;n++){const a=-Math.PI/2+n*Math.PI/5,r=n%2?20:46;points.push([m+Math.cos(a)*r,304+Math.sin(a)*r]);}const count=Math.min(10,Math.floor(q*10));for(let n=0;n<count;n++)line(...points[n],...points[n+1],'#5e6f6d',3);const v=points[count];line(v[0],v[1],v[0]+52,v[1]-52,'#b0af9b',7);palm(v[0]+48,v[1]-47,-1);break;
   }
   case 'glass':{
    room();table();const xx=m-75+q*156,yy=369-Math.sin(q*Math.PI)*91;oval(m-75,379,24,5,'#c7cab955');oval(m+81,379,24,5,q>.88?'#c7cab966':'#7d837a22');rect(xx-17,yy-59,34,56,'#bbc6bf88');rect(xx-14,yy-40+q*13,28,37-q*13,'#e1dfcf');oval(xx,yy-58,18,4,'#d3d8cb');palm(xx+23,yy-25,-1);text('BİR YUDUM',m,161,17);break;
   }
   case 'coat':{
    room();table();line(m+194,181,m+194,438,'#76877b',7);line(m+150,203,m+233,203,'#76877b',4);const y=214-q*64;poly([[m+171,y],[m+190,y+8],[m+173,y+115],[m+150,y+110]],'#a2aba0');human(m-87+q*181,440,'damla',-1,false,true);line(m+96+q*10,377,m+164,259-q*34,'#c1a88f',5);latte(m-74,376);break;
   }
   case 'debate':{
    room();human(m-150,437,'sen',1,true);human(m+150,437,'damla',-1,true);table();latte(m-82,377);latte(m+81,377);const turn=Math.sin(t*1.1);line(m-129,408,m-98,338+turn*12,'#ccb297',5);line(m+127,408,m+105,341-turn*12,'#ccb297',5);
    paper(m,354,95,47,.1);text(t<6?'DÜŞÜNMEK':'DİNLEMEK',m,187,24);line(m-78,211,m+78,211,'#c5cab577',1);break;
   }
   case 'steam':{
    room();rect(m-215,128,430,283,'#aab8af33');line(m-216,127,m-216,424,'#c3c7b9',8);line(m+216,127,m+216,424,'#c3c7b9',8);line(m,127,m,414,'#c3c7b97a',5);rect(m-235,414,470,12,'#abb2a1');latte(m-96,413);latte(m+102,413);
    c.strokeStyle='#d4d8c188';c.lineWidth=4;c.beginPath();c.arc(m-61,248,36,Math.PI,Math.PI+q*5.5);c.stroke();line(m-36,267,m-53,295,'#d4d8c188',4);oval(m-57,310,3,3,'#d4d8c188');palm(m-30+Math.sin(q*5)*27,239+q*60,-1);break;
   }
   case 'cassette':{
    room();rect(m-189,238,378,186,'#333f45');rect(m-161,257,322,101,'#a4ac9d');for(const x of [m-90,m+90]){oval(x,307,34,34,'#40515a');for(let n=0;n<5;n++){const a=t*2+n*Math.PI*.4;line(x,307,x+Math.cos(a)*26,307+Math.sin(a)*26,'#b9c5b7',4);}}line(m-89,335,m+89,335,'#525f62',3);text('DEVAMINI SEN SÖYLE',m,388,18);for(let n=0;n<4;n++){const y=195-smooth((t-n*1.7)/3)*55;paper(m-192+n*128,y,81,56,(n-1.5)*.09);text(String(n+1),m-192+n*128,y+8,20);}break;
   }
   case 'map':{
    room();paper(m,313,480,294,-.03);const towns=[[-145,-48,'KORU'],[22,-82,'ESKİŞEHİR'],[158,13,'BARTIN'],[-71,80,'CAFFELAB']];
    towns.forEach(([x,y,name],n)=>{oval(m+x,313+y,5,5,'#495d5b');text(name,m+x,294+y,11,'#3b5352');if(n){const a=towns[n-1],k=smooth((t-n*1.5)/2);line(m+a[0],313+a[1],m+a[0]+(x-a[0])*k,313+a[1]+(y-a[1])*k,'#61766c',3);}});palm(m+178-q*40,432,-1);break;
   }
   case 'hands':{
    outdoor();rect(m-150,191,300,216,'#334651');for(const x of [m-70,m+70]){oval(x,274,36,36,'#a3aa97');oval(x,274,24,24,'#344b51');}palm(m-56-q*116,306);palm(m+56+q*116,306,-1);line(m-66-q*98,309,m-66,274,'#c9c3a5',5);line(m+66+q*98,309,m+66,274,'#c9c3a5',5);rect(m-17,212,34,170*q,'#d5d1b4');line(m-30,437,m-125-q*100,437,'#d5c7a3',5);line(m+30,437,m+125+q*100,437,'#d5c7a3',5);break;
   }
  }
  if(f.dialogue)c.translate(0,95);
  c.globalCompositeOperation='saturation';rect(0,0,W,H,'#888');c.globalCompositeOperation='source-over';
  for(let y=0;y<H;y+=4)rect(0,y,W,1,'#00000015');for(let n=0;n<65;n++)rect((n*137+Math.floor(t*17)*29)%W,(n*71+Math.floor(t*17)*19)%H,1,1,'#ecece933');
  rect(0,0,W,62,'#0b0e12');rect(0,494,W,106,'#0b0e12');if(!f.dialogue)text('HATIRA / '+String(list.findIndex(v=>v[0]===f.reel)+1).padStart(2,'0'),W-107,96,11);if(!f.dialogue)text('00:00:'+String(Math.floor(t)).padStart(2,'0'),W-84,475,11);const fade=Math.max(1-smooth(t/.7),smooth((t-f.duration+.7)/.7));if(fade>0)rect(0,0,W,H,'rgba(8,12,18,'+fade+')');c.restore();
 }
 return {list,transition,draw};
})();
if(typeof module!=='undefined')module.exports=RoadReels;
