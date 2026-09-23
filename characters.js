'use strict';
// Photo-referenced vector artwork. Original photographs are not shipped with the game.
const RoadCharacters=(()=>{
 function artist(c){
  const ellipse=(x,y,rx,ry,color)=>{c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();};
  const shape=(points,color)=>{c.fillStyle=color;c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill();};
  const stroke=(points,color,width=1)=>{c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.lineJoin='round';c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.stroke();};
  const curve=(start,controls,color,width=1)=>{c.beginPath();c.moveTo(...start);for(const p of controls)c.bezierCurveTo(...p);c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.stroke();};
  return {ellipse,shape,stroke,curve};
 }

 function maleHead(c,smile){
  const {ellipse,shape,stroke,curve}=artist(c);
  const skin=c.createLinearGradient(-18,-12,18,18);skin.addColorStop(0,'#ddb18b');skin.addColorStop(.48,'#eac09a');skin.addColorStop(1,'#bd8969');
  ellipse(-17,1,3.3,7,'#cc997a');ellipse(17,1,3.2,6.5,'#b58064');
  c.fillStyle=skin;c.beginPath();c.moveTo(-14,-19);c.bezierCurveTo(-19,-12,-17,5,-15,12);c.bezierCurveTo(-12,21,-7,25,0,25);c.bezierCurveTo(9,25,15,19,17,9);c.bezierCurveTo(19,-1,17,-19,10,-22);c.bezierCurveTo(2,-25,-9,-24,-14,-19);c.fill();
  // Broad planes, lowered upper eyelids and a natural nose from the September 23 reference.
  ellipse(-8,7,7,5,'#f2c4a44a');ellipse(12,6,4,6,'#b8755820');
  for(const [x,w,y]of [[-8,4.9,-3],[8,4.8,-2.5]]){
   c.fillStyle='#ded5c2';c.beginPath();c.moveTo(x-w,y);c.quadraticCurveTo(x,y-2.7,x+w,y+.2);c.quadraticCurveTo(x,y+2,x-w,y);c.fill();
   ellipse(x+.3,y-.15,2.05,1.6,'#594535');ellipse(x+.35,y-.1,1.1,1.55,'#25251f');ellipse(x+.9,y-.75,.45,.45,'#fff4da');
   curve([x-w,y],[[x-2,y-2.4,x+2,y-2.6,x+w,y+.2]],'#655044',.85);
   curve([x-w+.7,y+2.3],[[x-1,y+3.1,x+2,y+3.1,x+w-.5,y+1.9]],'#aa8065',.55);
  }
  shape([[-14,-8],[-11,-11],[-6,-11.3],[-2.5,-9.4],[-2,-7.3],[-7,-8.5],[-11,-8.3]],'#2c2924');
  shape([[2.7,-8.8],[7,-10.4],[12,-9.8],[14.5,-7],[10,-7.6],[6,-8],[2.7,-6.8]],'#2c2924');
  curve([.4,-6],[[-.5,-1,-2,4,-4,6],[-3.3,8,1,9.1,4.4,7.6]],'#ae7d60',.75);
  ellipse(-3.9,6.4,1.5,1,'#714d3b');ellipse(4.8,6.2,1.65,1,'#654534');ellipse(.8,5.1,3.3,1.5,'#f4c7a755');
  // A close cheek line, dense connected moustache and distinct soul patch.
  c.fillStyle='#302e28';c.beginPath();c.moveTo(-16,3);c.bezierCurveTo(-14,11,-10,9,-9,14);c.bezierCurveTo(-6,18,7,19,10,13);c.bezierCurveTo(13,9,15,9,17,2);c.lineTo(16,13);c.bezierCurveTo(13,23,7,26,-1,26);c.bezierCurveTo(-11,26,-16,18,-16,3);c.fill();
  shape([[-10,12],[-8,8.8],[-4,8.5],[0,9.3],[4,8.3],[8,9.8],[10,13],[7,12.1],[3,10.9],[0,11.9],[-4,10.9],[-8,12.3]],'#2e302b');
  ellipse(.3,15,6.8,3.2,'#cc9679');curve([-6,14],[[-2,smile?14.3:13.6,2,smile?15.1:13.6,6.5,13.6]],'#895d50',.85);curve([-3.5,16.2],[[-1,17,2,17,4,15.8]],'#e5b699',.65);
  shape([[-2.8,17.8],[2.2,17.6],[3,21],[-3.3,21]],'#30342f');
  for(let n=0;n<42;n++){const x=-14+(n%15)*1.95,y=14+Math.floor(n/15)*3.3+Math.cos(n)*1.5;if(Math.abs(x)>7||y>21)stroke([[x,y],[x+.35,y+1]],n%3?'#a4a69760':'#d4d1b867',.35);}
  // Dark swept-back quiff: broad forehead and restrained silver strands, September 23 evening reference.
  c.fillStyle='#232522';c.beginPath();c.moveTo(-17,3);c.bezierCurveTo(-23,-11,-21,-23,-14,-27);c.bezierCurveTo(-18,-32,-9,-33,-7,-29);c.bezierCurveTo(-4,-36,0,-35,2,-30);c.bezierCurveTo(4,-37,9,-36,10,-30);c.bezierCurveTo(17,-33,20,-27,19,-21);c.bezierCurveTo(22,-15,19,-5,17,3);c.lineTo(15,-13);c.bezierCurveTo(11,-23,-10,-24,-14,-14);c.closePath();c.fill();
  for(let j=0;j<23;j++){const x=-17+j*1.5;curve([x*.83,-18-Math.sin(j*.14)*3],[[x-6,-25,x-5,-31,x+2,-29-Math.sin(j*.3)*4]],j%9===0?'#a8a99b89':j%3?'#4a453b':'#7772649a',j%9===0?.45:.6);}
  curve([-16,-8],[[-20,-18,-17,-24,-13,-25]],'#a9aba347',.45);curve([15,-9],[[19,-19,16,-27,12,-28]],'#64675b77',.55);

 }
 function head(c,damla,smile=false){
  if(!damla){maleHead(c,smile);return;}
  const {ellipse,shape,stroke,curve}=artist(c);
  if(damla){ellipse(-1,-1,20,28,'#242627');shape([[-19,-6],[-23,25],[-19,41],[-12,34],[12,35],[21,39],[22,6],[16,-14]],'#26282a');}
  ellipse(-14,-1,3.2,5.8,'#c99577');ellipse(14,-1,2.8,5.2,'#b48469');
  const face=c.createLinearGradient(-13,-11,17,12);face.addColorStop(0,'#d7a483');face.addColorStop(.35,damla?'#f3cfac':'#e6bb96');face.addColorStop(1,damla?'#deb091':'#c79373');
  c.fillStyle=face;c.beginPath();c.moveTo(-12,-16);c.bezierCurveTo(-20,-7,-13,11,-9,15);c.bezierCurveTo(-3,20,7,18,12,12);c.bezierCurveTo(18,3,18,-15,10,-20);c.bezierCurveTo(3,-23,-7,-23,-12,-16);c.fill();
  ellipse(-7,6,5,2.8,damla?'#ce8b7834':'#ae745523');ellipse(9,5,3.8,2.5,'#cf8a7730');
  // Eyes and asymmetric lids preserve the soft three-quarter direction of the references.
  for(const [x,y,w]of [[-6,-3.6,4.7],[7.6,-4.2,4.1]]){
   c.fillStyle='#f7e9d6';c.beginPath();c.moveTo(x-w,y);c.quadraticCurveTo(x,y-4,x+w,y-.1);c.quadraticCurveTo(x,y+2.4,x-w,y);c.fill();
   ellipse(x+1,y-.1,damla?1.9:2,2.15,damla?'#57472f':'#574431');ellipse(x+1.3,y-.1,.95,1.5,'#172323');ellipse(x+1.8,y-.9,.6,.75,'#fff7e7');
   curve([x-w,y],[[x-1,y-3.5,x+2,y-3.3,x+w,y-.1]],'#3b3030',damla?.75:.65);
   if(damla)stroke([[x-w-1,y-.9],[x-w,y],[x-w+.8,y-1.1]],'#383033',.6);
  }
  curve([-11,-8.4],[[-7,-10.5,-3,-10.5,-1,-8.9]],damla?'#57463a':'#292c2b',damla?1:2.1);
  curve([4,-9.1],[[7,-10.8,11,-10.8,13,-9.1]],damla?'#57463a':'#292c2b',damla?1:2.1);
  curve([3,-3],[[2,0,3,3,5,4],[3.4,5.3,1.7,4.9,.8,4.1]],'#b48064',.7);ellipse(5,3.4,1.2,.6,'#8f634c');
  if(!damla){
   // Closely trimmed beard, connected moustache and slightly lighter chin.
   shape([[-13,1],[-10,5],[-8,8],[-5,10],[0,10],[5,9],[10,6],[14,0],[13,11],[9,16],[3,19],[-4,18],[-10,14],[-13,8]],'#333432');
   shape([[-8,7],[-5,5.7],[-1,6],[1,5.5],[6,5.7],[9,7.2],[8,9],[3,7.6],[0,8.4],[-4,7.6],[-8,9]],'#252b2a');
   ellipse(0,11,5.7,2.5,'#c59073');shape([[-2,13],[2,13],[3,16],[-3,16]],'#42433e');
   for(let j=0;j<15;j++){const x=-10+j*1.45,y=12+Math.sin(j*.5)*3;stroke([[x,y],[x+.3,y+1.1]],'#bec0ae38',.5);}
   curve([-4.2,10.7],[[-1.5,smile?12.6:10.9,2,smile?12.7:10.9,5,10.1]],'#875d55',.8);
   // Short sides and the swept, raised front seen in the first reference.
   shape([[-15,0],[-18,-11],[-16,-21],[-10,-26],[-2,-27],[6,-31],[15,-29],[13,-24],[18,-26],[17,-15],[13,-9],[11,-17],[1,-18],[-8,-15],[-12,-9],[-12,1]],'#232b2e');
   for(let j=0;j<7;j++)curve([-13+j*.6,-15-j*.8],[[-5,-22-j*.5,6,-18-j,12,-25-j*.35]],j%2?'#6f7f824b':'#abb8af33',.85);
   stroke([[-14,-10],[-14,-3]],'#687b7944',1);
  }else{
   curve([-5,10],[[0,smile?12.2:11.6,5,11.2,9,8.2]],'#965d55',1.1);
   if(smile){c.fillStyle='#f7e1ca';c.beginPath();c.moveTo(-3,10.3);c.quadraticCurveTo(3,11.9,7,9.2);c.quadraticCurveTo(2,11.7,-3,10.3);c.fill();}
   curve([-3,13],[[.5,14,4,13.5,6,12]],'#dba28c',.65);
   // Long, straight dark hair and airy, separated curtain bangs.
   shape([[-19,-7],[-20,-18],[-13,-25],[-4,-28],[6,-26],[15,-19],[18,-10],[13,-16],[5,-20],[-2,-18],[-8,-11],[-14,-4],[-17,12],[-19,34],[-23,39],[-22,17]],'#30322f');
   shape([[14,-18],[20,-8],[19,15],[23,34],[19,40],[15,24],[14,9]],'#34332f');
   curve([-3,-25],[[-3,-17,-6,-10,-11,-7]],'#56554b',1.1);
   curve([0,-25],[[0,-15,-1,-9,-5,-7]],'#393b36',1.25);
   curve([3,-24],[[4,-15,5,-10,9,-8]],'#353934',1.05);
   curve([6,-22],[[7,-16,10,-11,13,-8]],'#666154',.8);
   curve([-12,-20],[[-21,-6,-16,17,-21,34]],'#83817144',.9);
   curve([-15,-19],[[-25,0,-15,20,-18,36]],'#aaa08a26',.7);
   curve([16,-9],[[15,11,23,27,19,36]],'#92907844',.8);
  }
 }
 function torso(c,damla){
  const {ellipse,shape,stroke,curve}=artist(c);
  if(damla){ellipse(0,-37,15,11,'#30383d');shape([[-10,-42],[-17,-35],[-18,-14],[17,-14],[16,-35],[9,-42]],'#242b32');curve([-11,-41],[[-16,-29,-7,-24,0,-26],[6,-24,16,-30,11,-41]],'#42494a',1.5);stroke([[-8,-30],[-9,-19]],'#b5b8ad',.7);stroke([[8,-30],[9,-19]],'#b5b8ad',.7);curve([-9,-19],[[-3,-22,3,-22,10,-19]],'#495051',.7);
  }else{ellipse(0,-37,17,13,'#6e4c3e');shape([[-11,-45],[-20,-37],[-18,-14],[19,-14],[20,-37],[10,-45]],'#805743');shape([[-8,-43],[0,-36],[8,-43],[6,-29],[-5,-29]],'#d7cbbb');curve([-12,-44],[[-21,-29,-10,-24,0,-26],[12,-23,21,-32,12,-44]],'#aa7960',1.5);stroke([[-8,-31],[-9,-18]],'#d3b399',.8);stroke([[8,-31],[10,-19]],'#d3b399',.8);curve([-11,-19],[[-6,-22,5,-22,12,-19]],'#a7785f',.8);}


 }
 function cinematicFigure(c,{x,y,who,facing,moving,seated,alpha,time,steps,embrace}){
  const {ellipse,stroke}=artist(c),damla=who==='damla',swing=moving?Math.sin(steps*.045)*10:0,drop=seated?21:0;
  c.save();c.translate(x,y);c.scale(facing,1);c.globalAlpha=alpha;ellipse(0,2,23,4,'#10212850');
  for(const side of [-1,1]){const hip=side*8,knee=seated?side*8+13:side*8+swing*side,toe=seated?side*8+14:side*9-swing*side;stroke([[hip,-47+drop],[knee,-22],[toe,-3]],side<0?'#263441':'#354450',9);stroke([[toe-3,-2],[toe+8,-2]],'#bdbeb0',5);}
  c.save();c.translate(0,-22+drop);c.scale(1.2,1.6);torso(c,damla);c.restore();
  if(!embrace)for(const side of [-1,1]){const xx=side*20,yy=-82+drop;stroke([[xx,yy],[xx+side*3+swing*.4,-54+drop]],damla?'#30393c':'#855c47',9);ellipse(xx+side*3+swing*.4,-51+drop,4,5,'#d9ad89');}
  c.fillStyle='#c99b77';c.fillRect(-6,-105+drop,12,18);c.save();c.translate(0,-114+drop);c.scale(.87,.87);head(c,damla,seated);c.restore();c.restore();
 }
 function draw(c,{x,y,who='sen',facing=1,moving=false,seated=false,alpha=1,time=0,steps=0,cinematic=false,embrace=false}){
  if(cinematic){cinematicFigure(c,{x,y,who,facing,moving,seated,alpha,time,steps,embrace});return;}
  const {ellipse,shape,stroke}=artist(c),damla=who==='damla',swing=moving?Math.sin(steps*.065)*9:0;
  c.save();c.globalAlpha=alpha;c.translate(x,y);c.scale(facing,1);c.translate(0,Math.sin(time*2)*.55);ellipse(0,1,18,4,'#09172340');
  if(damla)shape([[-16,-67],[-21,-49],[-22,-26],[-13,-24],[17,-25],[20,-48],[14,-69]],'#252a2c');
  stroke([[-6,-18],[seated?7:-7+swing,-3]],'#28333e',8);stroke([[6,-18],[seated?20:8-swing,-2]],'#34404b',8);stroke([[seated?7:-7+swing,-3],[seated?16:-1+swing,-2]],'#d0cbbf',4);stroke([[seated?20:8-swing,-2],[seated?27:14-swing,-1]],'#d0cbbf',4);
  torso(c,damla);
  stroke([[-14,-36],[-16-swing*.45,-20]],damla?'#31393e':'#77523f',7);stroke([[14,-36],[16+swing*.45,-20]],damla?'#31393e':'#896048',7);

  ellipse(16+swing*.45,-18,3.2,3.5,'#d5a783');c.fillStyle='#c89a7a';c.fillRect(-5,-48,10,8);
  c.save();c.translate(0,-58);c.scale(.78,.78);head(c,damla,seated);c.restore();c.restore();
 }
 let paintedPortrait=null;const waitingPortraits=new Map();
 if(typeof Image!=='undefined'){paintedPortrait=new Image();paintedPortrait.onload=()=>{for(const [canvas,who]of waitingPortraits)if(who==='sen')portrait(canvas,who);};paintedPortrait.src='assets/characters/abdullah-v7.webp';}
 function portrait(canvas,who){waitingPortraits.set(canvas,who);if(who==='sen'&&paintedPortrait?.complete&&paintedPortrait.naturalWidth){const g=canvas.getContext('2d');g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,canvas.width,canvas.height);g.drawImage(paintedPortrait,0,0,canvas.width,canvas.height);return;}const c=canvas.getContext('2d');if(!c||!c.setTransform)return;c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,canvas.width,canvas.height);const g=c.createLinearGradient(0,0,canvas.width,canvas.height);g.addColorStop(0,'#324652');g.addColorStop(1,'#172331');c.fillStyle=g;c.fillRect(0,0,canvas.width,canvas.height);c.save();c.translate(canvas.width/2,canvas.height*.60);const s=canvas.width/66;c.scale(s,s);const damla=who==='damla';if(damla){const {shape}=artist(c);shape([[-19,-5],[-23,36],[22,36],[17,-14]],'#282c2c');}c.save();c.translate(0,59);torso(c,damla);c.restore();c.fillStyle='#c69b7b';c.fillRect(-5,11,11,15);head(c,damla,true);c.restore();}
 return {draw,portrait};
})();
if(typeof module!=='undefined')module.exports=RoadCharacters;
