const assert=require('node:assert/strict'),E=require('../engine.js'),{LEVELS}=require('../story.js');
let transfers=0;const failed=[];
function makeState(w,time=0){return {time,phase:0,tasks:Object.fromEntries(w.required.map(k=>[k,true])),assist:false};}
function reachable(w,a,b){
 for(const time of [0,.7,1.5,2.5,3.5,4.5,5.5])for(const startOffset of [30,15,2,-5])for(const launchDelay of [0,.07,.14]){
  const copy=structuredClone(w);copy.hazards=[];const source=copy.platforms[a.id],target=copy.platforms[b.id],state=makeState(copy,time);state.phase=target.type==='phase'?target.phase:source.phase||0;
  E.step(copy,E.createPlayer(20,-500),{},state,1/120);
  const p=E.createPlayer(b.secret?target.x:source.x+source.w-26-startOffset,source.y-58);p.ground=source.id;let launched=false;
  for(let n=0;n<250;n++){
   state.time+=1/120;const goJump=!launched&&n/120>=launchDelay;if(goJump)launched=true;
   const targetX=target.x+target.w*.5,pX=p.x+p.w/2;
   const dead=E.step(copy,p,{right:pX<targetX-7,left:pX>targetX+7,jump:launched,jumpPressed:goJump},state,1/120);
   if(p.ground===target.id)return true;if(dead)break;
  }
 }
 return false;
}
for(let i=0;i<LEVELS.length;i++){
 const w=E.makeLevel(i,LEVELS[i]);assert.ok(w.checkpoints.length>=4);assert.equal(w.objects.filter(o=>o.type==='memory').length,1);assert.equal(w.objects.filter(o=>o.type==='exit').length,1);assert.ok(w.required.length>=1);
 for(let j=1;j<w.route.length;j++){transfers++;if(!reachable(w,w.route[j-1],w.route[j]))failed.push({level:i+1,from:j-1,to:j,kind:w.route[j].type,gap:w.route[j].x-w.route[j-1].x-w.route[j-1].w,dy:w.route[j].y-w.route[j-1].y});}
 const high=w.platforms.at(-1),below=w.route.find(p=>p.x<=high.x&&p.x+p.w>high.x);assert.ok(reachable(w,below,high),'optional memory '+i);
 // Each checkpoint is stable, above the highest flood, and away from a hazard sweep.
 for(const cp of w.checkpoints){assert.equal(w.platforms[cp.platform].type,'solid');assert.ok(cp.y+58<E.waterLine(w,makeState(w,Math.PI*3)));}
}
function jumpHeight(held,spring=false){const w=E.makeLevel(0,LEVELS[0]);w.hazards=[];if(spring)w.platforms[0].type='spring';const p=E.createPlayer(100,384);p.ground=0;let min=p.y;const s=makeState(w);for(let n=0;n<150;n++){s.time+=1/120;E.step(w,p,{right:false,left:false,jump:n<held,jumpPressed:n===0},s,1/120);min=Math.min(min,p.y);}return 384-min;}
assert.ok(jumpHeight(100)>jumpHeight(5)+35);assert.ok(jumpHeight(100,true)>180);
const w=E.makeLevel(11,LEVELS[11]),s=makeState(w);s.tasks={};const c=w.crate,p=E.createPlayer(c.x-30,c.floor-58);p.ground=c.platform;for(let n=0;n<300;n++){s.time+=1/120;E.step(w,p,{right:true,left:false,jump:false},s,1/120);}assert.ok(s.tasks.crate,'pushing a real crate opens its wall');
const steam={type:'steam',x:100,y:442,offset:0};assert.equal(E.hazard(steam,1).active,false);assert.equal(E.hazard(steam,1).warning,true);assert.equal(E.hazard(steam,2.5).active,true);assert.equal(E.hazard(steam,3.6).active,true);assert.ok(E.touches({x:100,y:400,w:26,h:40},E.hazard(steam,2.5)));assert.ok(!E.touches({x:100,y:260,w:26,h:58},E.hazard(steam,2.5)));
console.log(JSON.stringify({levels:LEVELS.length,mandatoryTransfers:transfers,unreachable:failed,shortJump:jumpHeight(5),longJump:jumpHeight(100),springJump:jumpHeight(100,true)},null,2));assert.equal(failed.length,0);
