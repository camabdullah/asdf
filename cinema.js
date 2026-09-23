'use strict';
const RoadCinema=(()=>{
 const clamp=x=>Math.max(0,Math.min(1,x)),ease=x=>{x=clamp(x);return x*x*(3-2*x);};
 const rupture=()=>({kind:'rupture',duration:14,title:'Biraz önce yan yanaydınız.',caption:'Sonra aynı yol, iki ayrı akşama açıldı.'});
 function transition(i,d){const kind=[2,8,11].includes(i)?'vtr':d.mechanic==='coffee'?'coffee':['tram','phase','gate'].includes(d.mechanic)?'tram':['water','lantern'].includes(d.mechanic)?'rain':d.w===3?'ayran':d.mechanic==='relay'?'gate':'path';return {kind,duration:kind==='vtr'?15:11,title:kind==='vtr'?'Bir hatıranın içinden':d.title,caption:({vtr:'Bazı görüntüler eskir. İçindeki yakınlık yerinde kalır.',coffee:'İki latte. Biraz daha oturmak için iki sebep.',tram:'Aynı durak. Başka bir akşam.',rain:'Birinin bıraktığı ışık, öbürünün yoluna düşer.',ayran:'Tek ayran. İki kişinin alışkanlığı.',gate:'Bir kapı kapanırken bir yol açılıyor.',path:'Bir sonraki yola, yanında kalanlarla.'})[kind]};}
 function draw(c,W,H,f,person){
  const t=f.time,kind=f.kind,progress=clamp(t/f.duration),mid=W/2;
  const rect=(x,y,w,h,color)=>{c.fillStyle=color;c.fillRect(x,y,w,h);};
  const line=(x,y,a,b,color,width=2)=>{c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.moveTo(x,y);c.lineTo(a,b);c.stroke();};
  const ellipse=(x,y,rx,ry,color)=>{c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();};
  const poly=(ps,color)=>{c.fillStyle=color;c.beginPath();ps.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill();};
  const text=(s,x,y,size=14,color='#e7d7bc',align='center')=>{c.font=size+'px system-ui';c.textAlign=align;c.fillStyle=color;c.fillText(s,x,y);};
  const people=(x,y,who,facing=1,seated=false,alpha=1)=>{c.save();c.translate(x,y);c.scale(1.45,1.45);person(c,{x:0,y:0,who,facing,seated,alpha,time:t,moving:!seated&&kind==='path',steps:t*120});c.restore();};
  function tree(x,y,size){line(x,y,x-6*size,y-180*size,'#334745',11*size);for(let n=0;n<9;n++)ellipse(x+Math.sin(n*2.4)*58*size,y-180*size+Math.cos(n*2)*30*size,55*size,30*size,'#425952');}
  function sky(blue=false){const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,blue?'#182b45':'#414c58');g.addColorStop(.7,blue?'#646080':'#c3997b');g.addColorStop(1,'#344b4e');rect(0,0,W,H,g);ellipse(W*.73,150,34,34,'#e4c49344');for(let n=0;n<4;n++)poly([[n*W*.33-W*.2,390],[(n+.5)*W*.33,250],[W*(n+1)*.33,400]],'#35484c55');}
  function bench(x,y,half=0){c.save();if(half){c.beginPath();c.rect(half<0?x-80:x,y-65,80,100);c.clip();}line(x-62,y-6,x-58,y+22,'#24333c',5);line(x+62,y-6,x+58,y+22,'#24333c',5);for(let n=0;n<4;n++)rect(x-74,y-54+n*12,148,8,n===3?'#c5a17b':'#a38466');rect(x-80,y-3,160,8,'#d0ad82');c.restore();}
  function park(){sky();for(let n=0;n<6;n++)tree(n*W/5+Math.sin(n)*24,450,1+(n%2)*.3);poly([[0,443],[W*.55,436],[W,447],[W,600],[0,600]],'#344a49');bench(mid,435);people(mid-27,430,'sen',1,true);people(mid+34,430,'damla',-1,true);}
  function cup(x,y,scale=1,coffee=true){c.save();c.translate(x,y);c.scale(scale,scale);ellipse(0,4,25,6,'#d5d0bd');rect(-17,-28,34,29,coffee?'#dfd7be':'#b4cfcd');ellipse(0,-28,17,5,'#f5ead4');ellipse(0,-27,13,3,coffee?'#99734e':'#f7efe0');if(coffee){c.strokeStyle='#ded6c1';c.lineWidth=4;c.beginPath();c.arc(19,-16,8,-Math.PI/2,Math.PI/2);c.stroke();}if(coffee)for(let n=0;n<3;n++){const h=(t*22+n*17)%54;line(Math.sin(t+n)*6,-34-h,Math.sin(t+n+.8)*8,-43-h,'#e8e2d440',1.4);}c.restore();}
  function cafe(coffee=false){sky();rect(0,86,W,370,coffee?'#473e3888':'#60484188');for(let n=0;n<5;n++){const x=W*(n+.5)/5;rect(x-60,125,120,230,'#b5baa523');line(x,90,x,150,'#d5c5a480',2);poly([[x-23,150],[x+23,150],[x+34,169],[x-34,169]],'#d9bb8f');}rect(0,449,W,160,'#343b3d');text(coffee?'CAFFELAB':'TAVUK DÜNYASI',mid,116,15);people(mid-104,437,'sen',1,true);people(mid+102,437,'damla',-1,true);rect(mid-140,384,280,14,'#b6926b');line(mid-110,398,mid-106,456,'#584c41',7);line(mid+110,398,mid+106,456,'#584c41',7);if(coffee){cup(mid-52,379,.68);cup(mid+55,379,.68);}else{ellipse(mid-73,384,43,8,'#e0d5b9');ellipse(mid+72,384,43,8,'#e0d5b9');ellipse(mid-73,383,30,5,'#936247');ellipse(mid+72,383,30,5,'#c5b492');const phase=(t%9)/9,q=phase<.4?ease(phase/.4):1-ease((phase-.62)/.38);const gx=mid-24+q*113,gy=377-Math.sin(q*Math.PI/2)*43;cup(gx,gy,.7,false);line(mid+91,404,gx+10,gy,'#d3a888',5);}}
  c.save();sky();
  if(kind==='rupture'){
   const split=ease((t-3)/6),left=split*W*.16,right=split*W*.22,fade=1-ease((t-10)/3);
   sky(t>4);for(let n=0;n<6;n++)tree(n*W/5-left*.15,454,1+(n%2)*.25);
   poly([[0,442],[mid-left-6,440],[mid-left+8,461],[mid-left-22,497],[mid-left-6,536],[mid-left-42,600],[0,600]],'#344847');
   poly([[mid+right+6,442+split*22],[W,447],[W,600],[mid+right+20,600],[mid+right-8,506]],'#334652');
   if(t>1.4&&t<4.5){const k=ease((t-1.4)/2);line(mid,450,mid-9,450+100*k,'#edc683',2);line(mid-9,450+100*k,mid+13,450+160*k,'#e5bd76',2);line(mid,450,mid+45*k,463,'#e2b677',2);}
   bench(mid-left,433,-1);bench(mid+right,433+split*22,1);
   people(mid-28-left,430,'sen',1,t<3.6);people(mid+35+right,430+split*22,'damla',-1,t<3.6,fade);
   if(t>3.6){line(mid-28-left+15,404,mid-28-left+38,395+Math.sin(t*3)*2,'#c99c79',5);c.globalAlpha=fade;line(mid+35+right-15,404+split*22,mid+35+right-37,396+split*22,'#ddb397',5);c.globalAlpha=1;}
   for(let n=0;n<38;n++){const age=Math.max(0,t-3-n*.04),x=mid+Math.sin(n*8)*25+(n%2?1:-1)*age*18,y=454+age*age*23+n%5*6;if(age>0)poly([[x,y],[x+7,y+3],[x+3,y+9]],'#bba17b99');}
   if(t>10)rect(0,0,W,H,'rgba(16,29,47,'+ease((t-10)/4)*.25+')');
  }else if(kind==='vtr'){
   const shot=Math.min(2,Math.floor(t/5));c.save();const z=1.02+(t%5)*.005;c.translate(mid,H/2);c.scale(z,z);c.translate(-mid+Math.sin(t*.22)*8,-H/2);if(shot===0)park();else cafe(shot===2);c.restore();
   c.globalCompositeOperation='saturation';rect(0,0,W,H,'#888');c.globalCompositeOperation='source-over';
   for(let y=0;y<H;y+=4)rect(0,y,W,1,'#00000017');for(let n=0;n<90;n++){const seed=Math.floor(t*18);rect((n*137+seed*29)%W,(n*73+seed*19)%H,1+(n%2),1,'#edece733');}
   for(let n=0;n<3;n++){const x=(n*251+Math.floor(t*8)*37)%W;line(x,66,x+2,482,'#e0e0d014',1);}
   text('PLAY  ▷',55,101,13,'#dadbd3','left');text('HATIRA / 0'+(shot+1),W-50,101,11,'#dadbd3','right');text('00:00:'+String(Math.floor(t)).padStart(2,'0'),W-50,473,12,'#dadbd3','right');rect(0,0,W,H,'rgba(0,0,0,'+(.025+Math.sin(t*14)*.009)+')');
  }else if(kind==='ayran'||kind==='coffee')cafe(kind==='coffee');
  else if(kind==='tram'){
   sky(true);for(let n=0;n<11;n++){const x=(n*155-t*12)%(W+150)-80;rect(x,230-(n%3)*30,100,215+(n%3)*30,'#304456');for(let q=0;q<3;q++)rect(x+15+q*27,259,10,40,'#d5b28255');}rect(0,440,W,160,'#34424c');line(0,453,W,453,'#d0b88f',3);const x=-310+progress*(W+530);rect(x,319,300,115,'#906364');for(let n=0;n<5;n++)rect(x+15+n*57,337,43,60,'#c2bb9d');people(x+95,402,'sen',1,true);ellipse(x+48,440,17,17,'#1f2c36');ellipse(x+250,440,17,17,'#1f2c36');text('BİR DURAK GERİDEN',mid,164,14);
  }else if(kind==='rain'){
   sky(true);rect(0,440,W,160,'#36545c');for(let n=0;n<3;n++){const x=W*(.24+n*.26);rect(x-65,410,130,14,'#91765d');line(x,410,x,329,'#273845',4);ellipse(x,322,13,17,t>n*2?'#edce8e':'#4c6670');if(t>n*2)ellipse(x,322,35,39,'#edce8e14');}people(W*.24,405,'damla',1);for(let n=0;n<65;n++){const x=(n*93+t*60)%W,y=(n*61+t*220)%H;line(x,y,x-4,y+12,'#cdded433',1);}
  }else if(kind==='gate'){
   sky(true);rect(0,444,W,156,'#303e48');const gap=ease(t/f.duration);c.strokeStyle='#e4c28c';c.lineWidth=4;for(let n=0;n<3;n++){c.beginPath();c.ellipse(mid,310,70+n*24,102+n*12,Math.sin(t*.2)*.08,0,Math.PI*2);c.stroke();}rect(mid-12*(1-gap),199,24*(1-gap),238,'#e2c18f66');people(mid-155-gap*120,438,'sen',-1);people(mid+155+gap*120,438,'damla',1);for(let n=0;n<25;n++)ellipse(mid+Math.sin(n*2.4+t)*90*(1-gap),310+Math.cos(n*2.4+t)*100,2,2,'#f3d7a7');
  }else{park();rect(0,0,W,H,'#23354e44');for(let n=0;n<22;n++){const x=(n*97+t*28)%W,y=180+(n*31)%240;ellipse(x,y+Math.sin(t+n)*8,3,1.2,'#e4c69177');}}
  // Film borders and gentle fades; no rapid white flashes.
  rect(0,0,W,62,'#0a111b');rect(0,494,W,106,'#0a111b');const fade=Math.max(1-ease(t/.7),ease((t-f.duration+.7)/.7));if(fade>0)rect(0,0,W,H,'rgba(8,16,27,'+fade+')');c.restore();
 }
 return {rupture,transition,draw};
})();
if(typeof module!=='undefined')module.exports=RoadCinema;
