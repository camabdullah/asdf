'use strict';
const RoadEngine=(()=>{
 const PHYS={speed:265,jump:550,gravity:1450,width:26,height:58};
 function makeLevel(index,def){
  const platforms=[],objects=[],checkpoints=[];let seed=def.seed;
  const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  const add=(x,y,w,type='solid',extra={})=>{const p={id:platforms.length,x,y,w,h:24,type,baseX:x,baseY:y,timer:0,fall:0,...extra};platforms.push(p);return p;};
  const island=(x,n)=>{add(x,442,420);checkpoints.push({x:x+55,y:384});if(n<3){objects.push({id:'light'+n,type:('plates compare'.split(' ').includes(def.mechanic)?'table':'light'),x:x+275,y:442,n});}objects.push({id:'clock'+n,type:'clock',x:x+370,y:442,n});};
  island(0,0);let end=420;
  for(let segment=0;segment<3;segment++){
   const count=6+Math.floor(index/5);
   for(let j=0;j<count;j++){
    const gap=def.mechanic==='learn'?52+random()*22:65+random()*40;
    const y=410-[0,35,70,35,0,50,80,30][j%8];const w=118+random()*55;
    let type='solid';const m=def.mechanic;
    if(['crumble','note','mixed','final'].includes(m)&&j%3===1)type='crumble';
    if(['tram','water','lantern','mixed','relay','final'].includes(m)&&j%3===1)type='moving';
    if(['phase','compare','mixed'].includes(m)&&j%3===2)type='phase';
    if(['gate','cafeGate'].includes(m)&&j===3)type='gate';
    const p=add(end+gap,y,w,type,{phase:segment%2,axis:m==='water'?'y':'x',amplitude:type==='moving'?32:0,offset:random()*6.28,gate:segment});
    if(type==='phase')objects.push({id:'phase'+segment+'_'+j,type:'clock',x:platforms[platforms.length-2].x+platforms[platforms.length-2].w/2,y:platforms[platforms.length-2].baseY,n:segment});
    if(type==='gate')objects.push({id:'gate'+segment,type:'lever',x:platforms[platforms.length-2].x+60,y:platforms[platforms.length-2].baseY,n:segment});
    if(j===2){const high=add(p.x+20,p.y-88,74,'solid',{secret:true});objects.push({id:'memory'+segment,type:'memory',x:high.x+37,y:high.y,n:segment});}
    end=p.x+w;
   }
   island(end+85,segment+1);end+=505;
  }
  // Three story anchors: first island and the two intermediate safe islands.
  objects.push({id:'exit',type:'exit',x:end-160,y:442});
  return {platforms,objects,checkpoints,width:end+100,index,def};
 }
 function createPlayer(x=85,y=384){return {x,y,vx:0,vy:0,w:26,h:58,ground:null,coyote:0,buffer:0,facing:1,steps:0};}
 function solid(p,state){return p.fall<1&&(p.type!=='phase'||p.phase===state.phase)&&(p.type!=='gate'||state.gates[p.gate]);}
 function step(world,p,input,state,dt){
  dt=Math.min(dt,1/30);let oldBottom=p.y+p.h;
  for(const a of world.platforms){const ox=a.x,oy=a.y;
   if(a.type==='moving'){a.x=a.baseX+(a.axis==='x'?Math.sin(state.time*1.25+a.offset)*a.amplitude:0);a.y=a.baseY+(a.axis==='y'?Math.sin(state.time*1.15+a.offset)*25:0);}
   if(p.ground===a.id&&solid(a,state)){p.x+=a.x-ox;p.y+=a.y-oy;oldBottom=p.y+p.h;}
   if(a.type==='crumble'&&a.timer>0){a.timer+=dt;if(a.timer>.65)a.fall+=dt*3;}
  }
  p.coyote=p.ground!==null?.11:Math.max(0,p.coyote-dt);p.buffer=Math.max(0,p.buffer-dt);
  if(input.jumpPressed)p.buffer=.14;
  p.vx=(Number(input.right)-Number(input.left))*PHYS.speed;if(p.vx)p.facing=Math.sign(p.vx);
  if(state.assist)p.vx*=.88;
  if(['wind','mixed','final'].includes(world.def.mechanic))p.vx+=Math.sin(state.time*.8)*38;
  if(p.buffer>0&&p.coyote>0){p.vy=-PHYS.jump*(state.assist?1.12:1);p.buffer=0;p.coyote=0;p.ground=null;state.jumped=true;}
  if(!input.jump&&p.vy<-220)p.vy+=PHYS.gravity*dt*1.6;
  p.vy+=PHYS.gravity*dt;p.x=Math.max(10,Math.min(world.width-40,p.x+p.vx*dt));p.y+=p.vy*dt;p.ground=null;
  if(p.vy>=0)for(const a of world.platforms){if(!solid(a,state))continue;if(p.x+p.w>a.x+2&&p.x<a.x+a.w-2&&oldBottom<=a.y+8&&p.y+p.h>=a.y&&p.y<a.y+22){p.y=a.y-p.h;p.vy=0;p.ground=a.id;if(a.type==='crumble'&&!a.timer)a.timer=.001;break;}}
  p.steps+=Math.abs(p.vx)*dt;
  const water=['water','lantern'].includes(world.def.mechanic)?518+Math.sin(state.time*.45)*28:650;
  return p.y+p.h>water||p.y>720;
 }
 function resetPlatforms(world){for(const p of world.platforms){p.timer=0;p.fall=0;}}
 return {PHYS,makeLevel,createPlayer,solid,step,resetPlatforms};
})();
if(typeof module!=='undefined')module.exports=RoadEngine;

