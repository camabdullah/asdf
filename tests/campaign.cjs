const path=require('node:path');
process.chdir(path.resolve(__dirname,'..'));
const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const gradient={addColorStop(){}};const paint=new Proxy({}, {set(o,k,v){o[k]=v;return true;},get(o,k){if(k in o)return o[k];if(k==='createLinearGradient'||k==='createRadialGradient')return()=>gradient;return(...args)=>{for(const a of args)if(typeof a==='number')assert.ok(Number.isFinite(a),'non-finite canvas coordinate: '+String(k));};}});
class Element{constructor(){this.width=224;this.height=224;this.children=[];this.hidden=false;this.classList={add(){},remove(){},toggle(){}};this.style={};this.value='';this.checked=false;this.events={};}append(e){this.children.push(e);}addEventListener(n,f){this.events[n]=f;}setPointerCapture(){}getContext(){return paint;}setAttribute(){}removeAttribute(){}pause(){this.paused=true;}load(){}play(){this.paused=false;return Promise.resolve();}set innerHTML(v){this.html=v;this.children=[];}get innerHTML(){return this.html||'';}}
const nodes={},events={},stored={};const document={getElementById:id=>nodes[id]||(nodes[id]=new Element()),createElement:()=>new Element(),querySelectorAll:()=>[],addEventListener:(n,f)=>events[n]=f,hidden:false};
const window={addEventListener:(n,f)=>events[n]=f,devicePixelRatio:1};
const context={document,window,localStorage:{getItem:k=>stored[k]||null,setItem:(k,v)=>stored[k]=v},HTMLInputElement:class{},innerWidth:844,innerHeight:390,requestAnimationFrame(){},setTimeout(){return 0;},clearTimeout(){},console};
if(process.env.ROAD_LEGACY)stored['sana-gelen-yol-v1']=JSON.stringify({version:1,current:6,unlocked:8,completed:[0,1,2,3,4,5],memories:['0:memory0','0:memory1','1:memory2'],seen:[],states:{6:{checkpoint:3}},volume:.35});
vm.createContext(context);vm.runInContext(fs.readFileSync('story.js','utf8'),context);vm.runInContext(fs.readFileSync('levels.js','utf8'),context);vm.runInContext(fs.readFileSync('engine.js','utf8'),context);vm.runInContext(fs.readFileSync('music.js','utf8'),context);vm.runInContext(fs.readFileSync('characters.js','utf8'),context);
const code=fs.readFileSync('game.js','utf8').replace(/\}\)\(\);\s*$/,`window.test={startLevel,finishScene,interact,update,pause,closeModal,persist,respawn,home,render,showScene,complete,sceneMenu,get:()=>({mode,world,player,state,save,checkpoint,actor,scene,index}),at:(o)=>{near=o;player.x=o.x-13;player.y=o.y-58;},phase:(n)=>state.phase=n,view:(x)=>{camera=x;clock=2},line:()=>sceneLine};})();`);
vm.runInContext(code,context);const t=window.test;
if(process.env.ROAD_LEGACY){const v=t.get().save;assert.equal(v.current,6);assert.equal(v.unlocked,8);assert.equal(v.completed.length,6);assert.equal(v.memories.length,2);assert.equal(v.states[6].checkpoint,0);t.startLevel(6,true);assert.equal(t.get().checkpoint,0);assert.equal(t.get().index,6);console.log('PASS: v3 save migrates to v4, preserving chapters and unique memories with safe respawn');process.exit(0);}
for(let i=0;i<15;i++){
 t.startLevel(i);assert.equal(t.get().mode,'scene');t.finishScene();
 const s=t.get();
 for(const a of s.world.route){t.view(a.x);t.render();}
 for(const o of s.world.objects.filter(o=>o.key)){
  if(o.type==='align')t.phase(1);if(o.type==='table')t.phase(0);
  t.at(o);t.interact();
  if(o.type==='table'){assert.equal(t.get().mode,'modal');document.getElementById('dishLeft').onclick();const row=document.getElementById('modalBody').children.at(-1);row.children[0].onclick();}
  assert.equal(t.get().mode,'scene');t.finishScene();
 }
 assert.ok(s.world.objects.filter(o=>o.key).every(o=>t.get().state.tasks[o.key]));
 if(s.world.crate){const c=s.world.crate;t.get().player.x=c.x-30;t.get().player.y=c.floor-58;t.get().player.ground=c.platform;document.getElementById('right').events.pointerdown({pointerId:99,preventDefault(){}});for(let n=0;n<300;n++)t.update(1/120);document.getElementById('right').events.pointerup({pointerId:99});assert.ok(t.get().state.tasks.crate);}
 const m=s.world.objects.find(o=>o.type==='memory');t.at(m);t.interact();assert.equal(t.get().mode,'scene');t.finishScene();
 assert.ok(t.get().save.memories.includes(i+':'+m.id));
 const x=s.world.objects.find(o=>o.type==='exit');t.at(x);t.interact();
 if(i===14){assert.equal(t.get().mode,'modal');const row=document.getElementById('modalBody').children.at(-1);row.children[0].onclick();}
 assert.equal(t.get().mode,'scene');t.finishScene();assert.ok(t.get().save.completed.includes(i));
 t.startLevel(i,true);if(t.get().mode==='scene')t.finishScene();assert.ok(t.get().world.required.every(k=>t.get().state.tasks[k]));t.pause();assert.equal(t.get().mode,'modal');t.closeModal();assert.equal(t.get().mode,'play');
}
assert.equal(t.get().save.completed.length,15);assert.equal(t.get().save.unlocked,14);assert.equal(t.get().save.seen.length,30);
t.startLevel(1);t.finishScene();t.get().player.x=t.get().world.checkpoints[1].x+1;t.get().player.y=t.get().world.checkpoints[1].y;t.get().player.ground=t.get().world.checkpoints[1].platform;t.update(1/120);assert.equal(t.get().checkpoint,1);t.persist();t.startLevel(1,true);assert.equal(t.get().checkpoint,1);assert.ok(t.get().player.x>1000);
const before=t.get().player.x;t.pause();t.update(1/60);assert.equal(t.get().player.x,before);t.closeModal();document.hidden=true;events.visibilitychange();assert.equal(t.get().mode,'modal');document.hidden=false;t.closeModal();
t.respawn();assert.equal(t.get().checkpoint,1);
t.startLevel(0);t.finishScene();const initial=t.get().player.x;document.getElementById('right').events.pointerdown({pointerId:1,preventDefault(){}});t.update(.02);assert.ok(t.get().player.x>initial);document.getElementById('right').events.pointercancel({pointerId:1});const stopped=t.get().player.x;t.update(.02);assert.equal(t.get().player.x,stopped);
t.startLevel(0);t.pause();t.sceneMenu('scene');const archived=document.getElementById('modalBody').children[0];archived.onclick();t.finishScene();t.closeModal();assert.equal(t.get().mode,'scene');assert.ok(t.get().scene);t.finishScene();assert.equal(t.get().mode,'play');
t.startLevel(0);let prevented=false;const beforeLine=t.line();events.keydown({code:'Enter',target:{},preventDefault(){prevented=true;}});assert.equal(t.line(),beforeLine+1);assert.ok(prevented);t.finishScene();
// Repeated interaction cannot reopen a consumed object or duplicate a memory.
const first=t.get().world.objects.find(o=>o.key);t.at(first);t.interact();t.finishScene();t.interact();assert.equal(t.get().mode,'play');
console.log('PASS: 15 chapters, distinct chapter tasks and physical crate puzzles, table puzzle, final confirmation, 30 replay entries, progress and checkpoint reload, pause, visibility and respawn');
