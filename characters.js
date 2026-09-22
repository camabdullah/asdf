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
 function head(c,damla,smile=false){
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
  }else{shape([[-10,-44],[-17,-39],[-16,-15],[17,-15],[16,-39],[9,-44]],'#35434a');shape([[-15,-38],[-6,-33],[-7,-16],[-16,-16]],'#26363d');for(let x=-12;x<=13;x+=4)stroke([[x,-37],[x+1,-16]],'#a9bbb461',.6);shape([[-10,-45],[0,-37],[-6,-31],[-12,-40]],'#4c5d61');shape([[8,-45],[0,-37],[6,-32],[12,-40]],'#607073');stroke([[0,-37],[0,-16]],'#a5b4ae55',.65);for(let y=-29;y<-14;y+=6)ellipse(1,y,.7,.7,'#b9b8a3');}
 }
 function draw(c,{x,y,who='sen',facing=1,moving=false,seated=false,alpha=1,time=0,steps=0}){
  const {ellipse,shape,stroke}=artist(c),damla=who==='damla',swing=moving?Math.sin(steps*.065)*9:0;
  c.save();c.globalAlpha=alpha;c.translate(x,y);c.scale(facing,1);c.translate(0,Math.sin(time*2)*.55);ellipse(0,1,18,4,'#09172340');
  if(damla)shape([[-16,-67],[-21,-49],[-22,-26],[-13,-24],[17,-25],[20,-48],[14,-69]],'#252a2c');
  stroke([[-6,-18],[seated?7:-7+swing,-3]],'#28333e',8);stroke([[6,-18],[seated?20:8-swing,-2]],'#34404b',8);stroke([[seated?7:-7+swing,-3],[seated?16:-1+swing,-2]],'#d0cbbf',4);stroke([[seated?20:8-swing,-2],[seated?27:14-swing,-1]],'#d0cbbf',4);
  torso(c,damla);
  stroke([[-14,-36],[-16-swing*.45,-20]],damla?'#31393e':'#3f5158',7);stroke([[14,-36],[16+swing*.45,-20]],damla?'#31393e':'#44585e',7);
  if(!damla){stroke([[-15,-34],[-16-swing*.45,-24]],'#a8b6b15a',.7);stroke([[15,-34],[16+swing*.45,-24]],'#a8b6b15a',.7);}
  ellipse(16+swing*.45,-18,3.2,3.5,'#d5a783');c.fillStyle='#c89a7a';c.fillRect(-5,-48,10,8);
  c.save();c.translate(0,-58);c.scale(.78,.78);head(c,damla,seated);c.restore();c.restore();
 }
 function portrait(canvas,who){const c=canvas.getContext('2d');if(!c||!c.setTransform)return;c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,canvas.width,canvas.height);const g=c.createLinearGradient(0,0,canvas.width,canvas.height);g.addColorStop(0,'#324652');g.addColorStop(1,'#172331');c.fillStyle=g;c.fillRect(0,0,canvas.width,canvas.height);c.save();c.translate(canvas.width/2,canvas.height*.59);const s=canvas.width/58;c.scale(s,s);const damla=who==='damla';if(damla){const {shape}=artist(c);shape([[-19,-5],[-23,36],[22,36],[17,-14]],'#282c2c');}c.save();c.translate(0,59);torso(c,damla);c.restore();c.fillStyle='#c69b7b';c.fillRect(-5,11,11,15);head(c,damla,true);c.restore();}
 return {draw,portrait};
})();
if(typeof module!=='undefined')module.exports=RoadCharacters;

