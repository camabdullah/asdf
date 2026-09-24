const assert=require('node:assert/strict'),crypto=require('node:crypto');
const V=require('../verses.js'),R=require('../reels.js'),{LEVELS}=require('../story.js'),E=require('../engine.js');
assert.equal(V.questions.length,5);
for(let n=0;n<V.questions.length;n++){
 const q=V.questions[n],options=V.options(n);assert.equal(options.length,3);assert.equal(new Set(options.map(o=>o.text)).size,3);
 assert.equal(options.filter(o=>V.check(n,o.text)).length,1);
 assert.ok(q.others.every(o=>o.work!==q.work&&o.source.startsWith('https://')));
 for(const wrong of q.others)assert.ok(!V.check(n,wrong.text));
}
const w=E.makeLevel(15,LEVELS[15]),s={tasks:{},phase:0};assert.equal(w.required.length,6);
for(let n=0;n<V.questions.length;n++){const gate=w.route.find(p=>p.gate==='verse'+n);assert.ok(!E.solid(gate,s));s.tasks['verse'+n]=true;assert.ok(E.solid(gate,s));}
assert.equal(R.list.length,LEVELS.length-3);assert.equal(new Set(R.list.map(v=>v[0])).size,R.list.length);
const frames=[];
for(let i=0;i<R.list.length;i++){
 const spec=R.transition(i),traces=[];assert.equal(spec.memory,true);assert.equal(spec.kind,'reel');
 for(const time of [0,2.5,6,10.5,12]){
  const trace=[];let monochrome=false;
  const ctx=new Proxy({}, {set(o,k,v){if(k==='globalCompositeOperation'&&v==='saturation')monochrome=true;o[k]=v;return true;},get(o,k){if(k in o)return o[k];if(k==='createLinearGradient')return()=>({addColorStop(){}});return(...args)=>{for(const a of args)if(typeof a==='number')assert.ok(Number.isFinite(a),spec.reel+' '+String(k));if(k!=='fillText')trace.push([k,...args]);};}});
  R.draw(ctx,1298,600,{...spec,time},(c,p)=>{assert.ok(['sen','damla'].includes(p.who));trace.push(['actor',p.x,p.y,p.who,p.moving,p.seated]);});assert.ok(monochrome);if(time===6)traces.push(...trace);
 }
 frames.push(crypto.createHash('sha256').update(JSON.stringify(traces)).digest('hex'));
}
assert.equal(new Set(frames).size,R.list.length,'chapter transitions must differ in drawing, not only their captions');
for(const d of LEVELS)for(const name of ['intro','outro','signs','walk'])assert.ok(!(d[name]||[]).some(l=>l[0]==='SEN'));
assert.ok(LEVELS[14].outro.some(l=>l[1].includes('insan-ı kâmil')));assert.ok(LEVELS[14].outro.some(l=>/nâtık/i.test(l[1])));
console.log('PASS: five sourced questions, three choices each, isolated answer gates, Abdullah speaker names, sixteen distinct monochrome animation drawings');
