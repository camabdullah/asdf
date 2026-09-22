'use strict';
const RoadEngine=(()=>{
 const PHYS={speed:265,jump:550,spring:760,gravity:1450,width:26,height:58};
 const layouts=typeof ROAD_LAYOUTS!=='undefined'?ROAD_LAYOUTS:require('./levels.js');
 function makeLevel(index,def){
  const layout=layouts[index],platforms=[],objects=[],checkpoints=[],hazards=[],required=[];let end=0,phaseGroup=0,wasPhase=false;
  const types={s:'solid',f:'crumble',w:'swing',b:'spring',c:'conveyor',p:'phase',g:'gate',m:'moving',l:'lift',r:'raft'};
  for(const token of layout.route.split(' ')){
   const [kind,gap,y,w]=token.split(','),id=platforms.length,x=end+Number(gap),type=types[kind];
   if(type==='phase'&&!wasPhase)phaseGroup++;wasPhase=type==='phase';
   platforms.push({id,x,y:+y,w:+w,h:24,type,baseX:x,baseY:+y,timer:0,fall:0,phase:phaseGroup%2,gate:layout.gates?.[id],control:layout.controls?.[id],belt:index%2?-65:65});end=x+Number(w);
  }
  const route=platforms.slice();
  for(const n of layout.check){const a=route[n];checkpoints.push({x:a.x+38,y:a.y-PHYS.height,platform:a.id});}
  for(const [n,type,key,label,sign]of layout.devices){const a=route[n];objects.push({id:key,type,key,label,n:sign,x:a.x+a.w*.64,y:a.y,platform:a.id});required.push(key);}
  const clockAt=new Set();
  for(let n=0;n<route.length;n++)if(route[n].type==='phase'&&route[n-1]?.type!=='phase')clockAt.add(n-1);
  if(index===4||index===10)for(const n of layout.check)clockAt.add(n);
  for(const n of clockAt){const a=route[n];objects.push({id:'clock'+n,type:'clock',x:a.x+a.w-32,y:a.y,n,platform:a.id});}
  const a=route[layout.memory],high={id:platforms.length,x:a.x+a.w*.45,y:a.y-78,w:78,h:20,type:'solid',baseX:a.x+a.w*.45,baseY:a.y-78,secret:true,timer:0,fall:0};platforms.push(high);
  objects.push({id:'memory',type:'memory',x:high.x+39,y:high.y,n:0,platform:high.id});
  for(const [n,type]of layout.hazards||[]){const a=route[n];hazards.push({type,x:a.x+a.w*.65,y:a.y,offset:n*.31,platform:a.id});}
  let crate=null;
  if(layout.crate!==undefined){const a=route[layout.crate];crate={x:a.x+95,startX:a.x+95,y:a.y-40,w:40,h:40,min:a.x+30,max:a.x+a.w-95,plate:a.x+a.w*.63,wall:a.x+a.w-30,floor:a.y,platform:a.id};required.push('crate');}
  if(index===6)for(const n of layout.check.slice(0,3)){const a=route[n];objects.push({id:'prepared'+n,type:'beacon',x:a.x+a.w-42,y:a.y,platform:a.id});}
  const last=route.at(-1);objects.push({id:'exit',type:'exit',x:last.x+last.w-95,y:last.y,platform:last.id});
  return {platforms,route,objects,checkpoints,hazards,crate,required,width:end+80,index,def,goal:layout.goal};
 }
 function createPlayer(x=85,y=384){return {x,y,vx:0,vy:0,w:26,h:58,ground:null,coyote:0,buffer:0,facing:1,steps:0};}
 function solid(p,state){return p.fall<1&&(p.type!=='phase'||p.phase===state.phase)&&(p.type!=='gate'||state.tasks?.[p.gate]);}
 function waterLine(world,state){return ['water','lantern'].includes(world.def.mechanic)?480+Math.sin(state.time*.5)*28+(state.tasks?.sluice?48:0):740;}
 function hazard(h,time){
  if(h.type==='steam'){const t=(time+h.offset)%4;return {x:h.x-16,y:h.y-74,w:32,h:74,active:t>=2.2&&t<3.2,warning:t>=1.4&&t<2.2};}
  const angle=Math.sin(time*1.55+h.offset)*.65;return {x:h.x+Math.sin(angle)*112,y:h.y-128+Math.cos(angle)*112,r:15,active:true};
 }
 function touches(p,h){if(h.r){const x=Math.max(p.x,Math.min(h.x,p.x+p.w)),y=Math.max(p.y,Math.min(h.y,p.y+p.h));return (x-h.x)**2+(y-h.y)**2<h.r*h.r;}return p.x+p.w>h.x&&p.x<h.x+h.w&&p.y+p.h>h.y&&p.y<h.y+h.h;}
 function step(world,p,input,state,dt){
  dt=Math.min(dt,1/30);state.tasks||={};let oldBottom=p.y+p.h;const support=world.platforms.find(a=>a.id===p.ground);const grounded=p.ground!==null&&(p.ground==='crate'||support&&solid(support,state));
  for(const a of world.platforms){const ox=a.x,oy=a.y,t=state.time;
   if(a.type==='moving')a.x=a.baseX+(!a.control||state.tasks[a.control]?Math.sin(t*1.15)*34:0);
   if(a.type==='swing'){a.x=a.baseX+Math.sin(t*1.35)*43;a.y=a.baseY+(1-Math.cos(t*2.7))*5;}
   if(a.type==='lift')a.y=a.baseY+Math.sin(t*1.25)*65;
   if(a.type==='raft')a.y=a.baseY+Math.sin(t*1.1)*17;
   if(p.ground===a.id&&solid(a,state)){p.x+=a.x-ox;p.y+=a.y-oy;oldBottom=p.y+p.h;}
   if(a.type==='crumble'&&a.timer>0){a.timer+=dt;if(a.timer>(state.assist?.76:.53))a.fall+=dt*3.6;}
  }
  for(const o of world.objects){const a=world.platforms[o.platform];if(a){o.x+=(a.x-(o.lastX??a.baseX));o.y=a.y;o.lastX=a.x;}}
  p.coyote=grounded?.105:Math.max(0,p.coyote-dt);p.buffer=Math.max(0,p.buffer-dt);if(input.jumpPressed)p.buffer=.14;
  p.vx=(Number(input.right)-Number(input.left))*PHYS.speed;if(p.vx)p.facing=Math.sign(p.vx);if(state.assist)p.vx*=.9;
  if(['wind','mixed','final'].includes(world.def.mechanic))p.vx+=Math.sin(state.time*.8)*32;
  if(grounded&&support?.type==='conveyor')p.vx+=support.belt;
  if(p.buffer>0&&p.coyote>0){const spring=support?.type==='spring';p.vy=-(spring?PHYS.spring:PHYS.jump)*(state.assist?1.08:1);p.buffer=0;p.coyote=0;p.ground=null;state.jumped=true;}
  if(!input.jump&&p.vy<-220)p.vy+=PHYS.gravity*dt*1.6;
  p.vy+=PHYS.gravity*dt;const oldX=p.x;p.x=Math.max(10,Math.min(world.width-40,p.x+p.vx*dt));p.y+=p.vy*dt;p.ground=null;
  for(const a of world.platforms){if(p.vy<0||!solid(a,state))continue;if(p.x+p.w>a.x+2&&p.x<a.x+a.w-2&&oldBottom<=a.y+8&&p.y+p.h>=a.y&&p.y<a.y+22){p.y=a.y-p.h;p.vy=0;p.ground=a.id;if(a.type==='crumble'&&!a.timer)a.timer=.001;break;}}
  const c=world.crate;
  if(c){
   if(state.tasks.crate)c.x=c.plate-20;
   if(p.y+p.h>c.y+2&&p.y<c.y+c.h&&p.x+p.w>c.x&&p.x<c.x+c.w){
    if(oldBottom<=c.y+7&&p.vy>=0){p.y=c.y-p.h;p.vy=0;p.ground='crate';}
    else{const dir=oldX+p.w<=c.x+5?1:oldX>=c.x+c.w-5?-1:Math.sign(p.vx);if(dir&&Math.abs(p.y+p.h-c.floor)<12&&!state.tasks.crate)c.x=Math.max(c.min,Math.min(c.max,c.x+p.vx*dt*.68));p.x=dir>0?c.x-p.w:c.x+c.w;}
   }
   if(!state.tasks.crate&&Math.abs(c.x+c.w/2-c.plate)<23){state.tasks.crate=true;state.taskChanged=true;}
   if(!state.tasks.crate&&p.x+p.w>c.wall&&p.x<c.wall+14&&p.y+p.h>c.floor-125&&p.y<c.floor){p.x=oldX<c.wall?c.wall-p.w:c.wall+14;}
  }
  p.steps+=Math.abs(p.vx)*dt;
  for(const h of world.hazards){const hit=hazard(h,state.time);if(hit.active&&touches(p,hit))return true;}
  return p.y+p.h>waterLine(world,state)||p.y>720;
 }
 function resetPlatforms(world,state){for(const p of world.platforms){p.timer=0;p.fall=0;}if(world.crate&&!state?.tasks?.crate)world.crate.x=world.crate.startX;}
 return {PHYS,makeLevel,createPlayer,solid,step,resetPlatforms,hazard,waterLine,touches};
})();
if(typeof module!=='undefined')module.exports=RoadEngine;
