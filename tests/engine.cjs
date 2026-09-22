const assert=require('node:assert/strict');
const E=require('../engine.js');
const {LEVELS}=require('../story.js');
let leapCount=0;
function reachable(w,a,b,phase){
 for(const startOffset of [25,15,5,-5])for(const launchDelay of [0,.08,.16]){
  const copy=structuredClone(w);const source=copy.platforms.find(p=>p.id===a.id),target=copy.platforms.find(p=>p.id===b.id);
  const state={time:phase,phase:b.phase||0,gates:{0:true,1:true,2:true},assist:false};
  for(const p of copy.platforms){if(p.type==='moving'){p.x=p.baseX+(p.axis==='x'?Math.sin(state.time*1.25+p.offset)*p.amplitude:0);p.y=p.baseY+(p.axis==='y'?Math.sin(state.time*1.15+p.offset)*25:0);}}
  const p=E.createPlayer(source.x+source.w-26-startOffset,source.y-58);p.ground=source.id;
  let launched=false;
  for(let n=0;n<180;n++){
   const dt=1/120;state.time+=dt;const goJump=!launched&&n*dt>=launchDelay;if(goJump)launched=true;
   const right=p.x+13<target.x+target.w*.6;
   const dead=E.step(copy,p,{right,left:false,jump:launched,jumpPressed:goJump},state,dt);
   if(dead)break;if(p.ground===target.id)return true;
  }
 }
 return false;
}
const failed=[];
for(let i=0;i<15;i++){
 const w=E.makeLevel(i,LEVELS[i]);assert.equal(w.checkpoints.length,4);assert.equal(w.objects.filter(o=>o.type==='light'||o.type==='table').length,3);assert.equal(w.objects.filter(o=>o.type==='exit').length,1);
 const route=w.platforms.filter(p=>!p.secret);
 for(let j=1;j<route.length;j++){
  let good=false;for(const t of [0,1.5,3,4.5,6])if(reachable(w,route[j-1],route[j],t)){good=true;break;}
  leapCount++;if(!good)failed.push({level:i+1,a:route[j-1].id,b:route[j].id,gap:Math.round(route[j].x-route[j-1].x-route[j-1].w),dy:route[j].y-route[j-1].y});
 }
 for(const secret of w.platforms.filter(p=>p.secret)){
  const below=w.platforms.find(p=>!p.secret&&p.x<=secret.x&&p.x+p.w>secret.x);
  assert.ok(below&&below.y-secret.y<=90,'Secret is within jump height');
 }
}
assert.equal(LEVELS[14].title,'Sevgilime Bir Kefen');
assert.equal(LEVELS[7].actor,'damla');assert.equal(LEVELS[8].actor,'damla');
const w=E.makeLevel(0,LEVELS[0]);
function jumpHeight(held){const p=E.createPlayer(100,384);p.ground=0;let min=p.y;const state={time:0,phase:0,gates:{},assist:false};for(let n=0;n<150;n++){state.time+=1/120;E.step(w,p,{right:false,left:false,jump:n<held,jumpPressed:n===0},state,1/120);min=Math.min(min,p.y);}return 384-min;}
assert.ok(jumpHeight(100)>jumpHeight(5)+35,'Holding produces a materially higher jump');
console.log(JSON.stringify({levels:15,routeJumps:leapCount,unreachable:failed,shortJump:jumpHeight(5),longJump:jumpHeight(100)},null,2));
assert.equal(failed.length,0,'Every mandatory transfer must be physically reachable at normal difficulty');

