const path=require('node:path');
process.chdir(path.resolve(__dirname,'..'));
const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
class Element{constructor(){this.children=[];this.hidden=false;this.classList={add(){},remove(){}};this.style={};this.value='';this.checked=false;this.events={};}append(e){this.children.push(e);}addEventListener(n,f){this.events[n]=f;}setPointerCapture(){}getContext(){return{};}set innerHTML(v){this.html=v;this.children=[];}get innerHTML(){return this.html||'';}}
const nodes={},events={},stored={};const document={getElementById:id=>nodes[id]||(nodes[id]=new Element()),createElement:()=>new Element(),querySelectorAll:()=>[],addEventListener:(n,f)=>events[n]=f,hidden:false};
const window={addEventListener:(n,f)=>events[n]=f,devicePixelRatio:1};
const context={document,window,localStorage:{getItem:k=>stored[k]||null,setItem:(k,v)=>stored[k]=v},HTMLInputElement:class{},innerWidth:844,innerHeight:390,requestAnimationFrame(){},setTimeout(){return 0;},clearTimeout(){},console};
vm.createContext(context);vm.runInContext(fs.readFileSync('story.js','utf8'),context);vm.runInContext(fs.readFileSync('engine.js','utf8'),context);
const code=fs.readFileSync('game.js','utf8').replace(/\}\)\(\);\s*$/,`window.test={startLevel,finishScene,interact,update,pause,closeModal,persist,respawn,home,render,showScene,complete,sceneMenu,get:()=>({mode,world,player,state,save,checkpoint,actor,scene,index}),at:(o)=>{near=o;player.x=o.x-13;player.y=o.y-58;},phase:(n)=>state.phase=n};})();`);
vm.runInContext(code,context);const t=window.test;
for(let i=0;i<15;i++){
 t.startLevel(i);assert.equal(t.get().mode,'scene');t.finishScene();
 const s=t.get();
 for(const o of s.world.objects.filter(o=>o.type==='light'||o.type==='table')){
  t.at(o);t.interact();
  if(o.type==='table'){assert.equal(t.get().mode,'modal');document.getElementById('dishLeft').onclick();const row=document.getElementById('modalBody').children.at(-1);row.children[0].onclick();}
  assert.equal(t.get().mode,'scene');t.finishScene();
 }
 assert.equal(Object.keys(t.get().state.lights).length,3);
 const m=s.world.objects.find(o=>o.type==='memory');t.at(m);t.interact();assert.equal(t.get().mode,'scene');t.finishScene();
 assert.ok(t.get().save.memories.includes(i+':'+m.id));
 const x=s.world.objects.find(o=>o.type==='exit');t.at(x);t.interact();
 if(i===14){assert.equal(t.get().mode,'modal');const row=document.getElementById('modalBody').children.at(-1);row.children[0].onclick();}
 assert.equal(t.get().mode,'scene');t.finishScene();assert.ok(t.get().save.completed.includes(i));
 t.startLevel(i,true);if(t.get().mode==='scene')t.finishScene();assert.equal(Object.keys(t.get().state.lights).length,3);t.pause();assert.equal(t.get().mode,'modal');t.closeModal();assert.equal(t.get().mode,'play');
}
assert.equal(t.get().save.completed.length,15);assert.equal(t.get().save.unlocked,14);assert.equal(t.get().save.seen.length,30);
t.startLevel(1);t.finishScene();t.get().player.x=t.get().world.checkpoints[1].x+1;t.get().player.y=384;t.update(1/120);assert.equal(t.get().checkpoint,1);t.persist();t.startLevel(1,true);assert.equal(t.get().checkpoint,1);assert.ok(t.get().player.x>1000);
const before=t.get().player.x;t.pause();t.update(1/60);assert.equal(t.get().player.x,before);t.closeModal();document.hidden=true;events.visibilitychange();assert.equal(t.get().mode,'modal');document.hidden=false;t.closeModal();
t.respawn();assert.equal(t.get().checkpoint,1);
t.startLevel(0);t.finishScene();const initial=t.get().player.x;document.getElementById('right').events.pointerdown({pointerId:1,preventDefault(){}});t.update(.02);assert.ok(t.get().player.x>initial);document.getElementById('right').events.pointercancel({pointerId:1});const stopped=t.get().player.x;t.update(.02);assert.equal(t.get().player.x,stopped);
t.startLevel(0);t.pause();t.sceneMenu('scene');const archived=document.getElementById('modalBody').children[0];archived.onclick();t.finishScene();t.closeModal();assert.equal(t.get().mode,'scene');assert.ok(t.get().scene);t.finishScene();assert.equal(t.get().mode,'play');
console.log('PASS: 15 chapters, 45 story anchors, table puzzle, final confirmation, 30 replay entries, progress and checkpoint reload, pause, visibility and respawn');

