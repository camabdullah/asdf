'use strict';
const RoadDreams=(()=>{
 const clamp=n=>Math.max(0,Math.min(1,n)),ease=n=>{n=clamp(n);return n*n*(3-2*n);};
 let garden=null;function preload(){if(!garden&&typeof Image!=='undefined'){garden=new Image();garden.src='assets/scenes/garden-v7.webp';}}
 const preparation=()=>({kind:'dream-prelude',duration:22,title:'Sana bir akşam hazırladım.',caption:'Söyleyeceklerinden önce, dinleyeceğin bir yer.'});
 const reunion=()=>({kind:'dream-reunion',duration:26,title:'Aranızda bir adım kaldı.',caption:'Bir süre, dünyada başka hiçbir mesafe yok.'});
 const collapse=()=>({kind:'dream-collapse',duration:30,title:'Saat 19.17’de kaldı.',caption:'İki fincan. Birinden yükselen buhar.'});
 function caption(f){const t=f.time;if(f.kind==='dream-prelude')return t<7?'Işıklar, birer birer karşı kıyıya varıyor.':t<15?'İki fincanın yanına küçük bir çiçek bıraktın.':'Çardakta tanıdık bir duruş.';
  if(f.kind==='dream-reunion')return t<8?'Bu defa yaklaşınca kaybolmuyor.':t<16?'Bir el, karşılığını öteki elde buluyor.':t<23?'Söylenmemiş sözler bir süre bekleyebilir.':'Birlikte yürümeye devam ediyorsunuz.';
  return t<7?'İki fincan. Birinden yükselen buhar.':t<13?'Kurdele kıpırdamıyor. Saat ilerlemiyor.':t<20?'Elini uzatıyorsun. Hatıra, sana yeni bir cevap veremiyor.':t<25?'Yağmur hiç dinmemiş.':'Avucunda bir çiçek değil, uyuyakalmadan önce okuduğun not var.';
 }
 function mix(f){if(f?.kind!=='dream-collapse')return 1;return f.time<8?1:f.time<19?1-ease((f.time-8)/11)*.91:.09+ease((f.time-22)/7)*.65;}
 function background(c,W,H,t,cam=0){preload();const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#26394b');g.addColorStop(.7,'#b88978');g.addColorStop(1,'#38443b');c.fillStyle=g;c.fillRect(0,0,W,H);
  if(garden?.complete&&garden.naturalWidth){const s=Math.max(W/garden.naturalWidth,H/garden.naturalHeight)*1.065;const iw=garden.naturalWidth*s,ih=garden.naturalHeight*s;c.drawImage(garden,(W-iw)/2+Math.sin(t*.08)*6-Math.sin(cam*.0004)*12,(H-ih)/2,iw,ih);}
  c.fillStyle='#10253b25';c.fillRect(0,0,W,H);
 }
 function draw(c,W,H,f,person){preload();const t=f.time,m=W/2,kind=f.kind;
  const rect=(x,y,w,h,color)=>{c.fillStyle=color;c.fillRect(x,y,w,h);};
  const line=(x,y,a,b,color,width=2)=>{c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.beginPath();c.moveTo(x,y);c.lineTo(a,b);c.stroke();};
  const oval=(x,y,rx,ry,color)=>{c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();};
  const poly=(ps,color)=>{c.fillStyle=color;c.beginPath();ps.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill();};
  const glow=(x,y,r,a=.22)=>{const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'rgba(255,223,175,'+a+')');g.addColorStop(1,'rgba(255,197,133,0)');rect(x-r,y-r,r*2,r*2,g);};
  function human(x,y,who,face=1,seated=false,scale=1.8,alpha=1,moving=false,embrace=false){c.save();c.translate(x,y+(seated?25*scale*.62:0));c.scale(scale*.62,scale*.62);person(c,{x:0,y:0,who,facing:face,seated,alpha,time:t,moving,steps:t*150,cinematic:true,embrace});c.restore();}
  function bench(x,y){for(let n=0;n<4;n++)rect(x-100,y-72+n*14,200,9,'#94745c');rect(x-112,y-8,224,10,'#c09a73');line(x-89,y-75,x-88,y+27,'#26363d',7);line(x+89,y-75,x+88,y+27,'#26363d',7);}
  function cup(x,y,steam=true){oval(x,y+1,24,5,'#d9c8aa');rect(x-15,y-32,30,29,'#ddd1b9');oval(x,y-32,15,4,'#b49373');c.strokeStyle='#e5d3af';c.lineWidth=4;c.beginPath();c.arc(x+16,y-18,9,-Math.PI/2,Math.PI/2);c.stroke();if(steam)for(let n=0;n<3;n++){const rise=(t*19+n*15)%53;oval(x+Math.sin(t+n)*5,y-38-rise,3+rise*.065,6,'#e9d7b630');}}
  function petals(amount=25,drift=1){for(let n=0;n<amount;n++){const x=((n*83.71+t*(12+n%4)*drift)%(W+80)+W+80)%(W+80)-40,y=102+(n*51.4+t*8*drift)%390;c.save();c.translate(x,y);c.rotate(t*.2+n);oval(0,0,4+n%3,1.6,'#e7c4ae66');c.restore();}}
  function clockFace(x,y){oval(x,y,26,26,'#a99b7866');oval(x,y,22,22,'#263740');line(x,y,x-12,y+5,'#e8d5b4',2);line(x,y,x+16,y+4,'#e8d5b4',1.5);line(x-13,y-19,x-4,y-5,'#d9c8ac88',.8);c.fillStyle='#eadfc4';c.font='10px system-ui';c.textAlign='center';c.fillText('19.17',x,y+44);}
  function ribbon(x,y){line(x,y,x,y+61,'#eee1c6',4);poly([[x,y+13],[x-19,y+6],[x-14,y+22],[x,y+15],[x+19,y+8],[x+15,y+25]],'#eee1c6');}
  function bouquet(x,y){for(let n=0;n<5;n++){const xx=x+(n-2)*9,yy=y-22-Math.sin(n)*6;line(x,y+12,xx,yy,'#78836a',2);for(let j=0;j<5;j++)oval(xx+Math.cos(j*1.26)*4,yy+Math.sin(j*1.26)*4,4,3,'#ead8c3');oval(xx,yy,2,2,'#d5b17a');}}
  function rainPier(){const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#14283e');g.addColorStop(1,'#57727a');rect(0,0,W,H,g);for(let n=0;n<6;n++)rect(n*W/5-30,180+Math.sin(n)*30,90,220,'#243e4d80');rect(0,446,W,154,'#1f3b49');for(let n=0;n<12;n++)line(m-280+n*50,450,m-220+n*38,555,'#75878733',2);rect(m-260,432,520,16,'#516564');bench(m-15,429);human(m-43,425,'sen',1,true,2);rect(m-17,365,23,16,'#d6ccac');line(m-200,450,m-200,225,'#2a3f46',7);rect(m-213,223,26,34,'#e6ce9255');glow(m-200,238,73,.11);for(let n=0;n<98;n++){const x=(n*79+t*141)%W,y=(n*61+t*330)%H;line(x,y,x-8,y+21,'#a5c4cf40',1);}}
  c.save();background(c,W,H,t);
  if(kind==='dream-prelude'){
   const travel=ease((t-1)/7);c.save();c.translate(m,335);const z=1+ease(t/22)*.13;c.scale(z,z);c.translate(-m,-335);bench(m+80,437);
   for(let n=0;n<7;n++){const x=m-350+n*110,y=190+Math.sin(n*.7)*32;line(x,y-35,x,y,'#b7a080',1);rect(x-7,y,14,19,'#9e977a');if(t>n*.85){rect(x-5,y+2,10,15,'#f0d6a2');glow(x,y+9,45,.25);}}
   human(m-220+travel*240,436,'sen',1,false,1.8,1,t<8);if(t>5)bouquet(m+34,363);rect(m+125,388,120,7,'#9b7b5f');line(m+133,394,m+133,440,'#4d4b42',5);line(m+229,394,m+229,440,'#4d4b42',5);cup(m+151,383);cup(m+206,383);
   ribbon(m+271,275);clockFace(m-242,280);if(t>15)human(m+298,420,'damla',-1,false,1.35,ease((t-15)/4));petals();c.restore();
  }else if(kind==='dream-reunion'){
   if(t<9){const p=ease(t/8);human(m-260+p*214,440,'sen',1,false,2,1,true);human(m+260-p*218,440,'damla',-1,false,2,1,true);glow(m,340,220,.13);petals(38);}
   else if(t<15){const p=ease((t-9)/5);rect(0,0,W,H,'#15233355');glow(m,290,235,.18);const left=m-155+p*114,right=m+155-p*114;poly([[left-230,401],[left-30,265],[left+24,274],[left+43,299],[left+28,317],[left-6,310],[left-189,453]],'#8f6550');poly([[right+230,401],[right+30,265],[right-24,274],[right-43,299],[right-28,317],[right+6,310],[right+189,453]],'#333c40');oval(left+29,293,25,16,'#dbb391');oval(right-29,293,25,16,'#e3bd9c');line(left+13,291,left+42,295,'#aa7c65',2);line(right-13,300,right-40,301,'#b7896b',2);petals(14);}
   else if(t<23){const breathe=Math.sin(t*1.1)*.7;const z=2.8;human(m-21,455+breathe,'sen',1,false,z,1,false,true);human(m+29,455+breathe,'damla',-1,false,z,1,false,true);c.lineJoin='round';line(m-45,346,m+39,347,'#946750',14);line(m+43,349,m+47,378,'#946750',12);oval(m+44,379,9,7,'#d7ae8a');line(m+45,362,m-43,377,'#3b4447',12);oval(m-42,377,7,8,'#e0b899');glow(m,245,175,.13);petals(30);}
   else{const p=(t-23)/3;bench(m-90,435);human(m+30+p*70,441,'sen',1,false,1.9,1,true);human(m+108+p*70,441,'damla',1,false,1.9,1,true);petals(22);}
  }else{
   if(t<20){const q=ease((t-9)/10);bench(m-35,442);human(m-78,438,'sen',1,true,2);const ax=m+21,ay=438;
    if(q===0)human(ax,ay,'damla',-1,true,2);else for(let n=0;n<20;n++){c.save();const shift=q*q*((n%2?1:-1)*(32+n*5));c.translate(shift,-q*(n*4+12));c.beginPath();c.rect(ax-54,ay-174+n*9,120,9);c.clip();human(ax,ay,'damla',-1,true,2,1-q);c.restore();}
    rect(m+129,392,132,7,'#997e64');cup(m+159,387,true);cup(m+223,387,false);clockFace(m-247,278);ribbon(m+282,240);petals(22,1-q);
    if(t>7){rect(0,0,W,H,'rgba(24,35,57,'+(q*.55)+')');for(let n=0;n<11;n++){const a=n*2.39,reach=ease((t-10-n*.18)/5)*Math.max(W,H);let x=m+Math.cos(a)*30,y=295+Math.sin(a)*30;for(let j=1;j<=4;j++){const xx=m+Math.cos(a+j*.05)*reach*j/4,yy=295+Math.sin(a-j*.03)*reach*j/4;line(x,y,xx,yy,'rgba(202,216,222,'+(q*.38)+')',.8);x=xx;y=yy;}}}
   }else{rainPier();if(t<22){const fade=1-ease((t-20)/2);rect(0,0,W,H,'rgba(8,19,30,'+fade+')');}}
  }
  // Deliberate cuts, dolly motion, warm/cold match cut; no strobing white flashes.
  const vignette=c.createRadialGradient(m,300,130,m,300,Math.max(W*.62,540));vignette.addColorStop(0,'#08121a00');vignette.addColorStop(1,'#08121ab0');rect(0,0,W,H,vignette);rect(0,0,W,58,'#0b1219');rect(0,506,W,H-506,'#0b1219');
  const fade=Math.max(1-ease(t/.8),ease((t-f.duration+1)/1));if(fade>0)rect(0,0,W,H,'rgba(8,17,27,'+fade+')');c.restore();
 }
 return {preload,background,preparation,reunion,collapse,draw,caption,mix};
})();
if(typeof module!=='undefined')module.exports=RoadDreams;

