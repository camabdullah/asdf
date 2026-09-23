const assert=require('node:assert/strict'),crypto=require('node:crypto'),Q=require('../logic.js'),D=require('../dreams.js'),E=require('../engine.js'),{LEVELS}=require('../story.js');
const expected={gardenLight:[0,1,1,0],riverLight:[0,0,0,0],reunionLight:[1,1,1,1],counterweight:[1,4,2],relayWeight:[4,1,3],invitation:[0,1,2,3],tableMemory:[0,1,2,3],bookOrder:[0,1,2,3]};
for(const [id,q]of Object.entries(Q.puzzles)){
 let solutions=[];function search(v){if(v.length===q.initial.length){if(Q.check(id,v))solutions.push(v);return;}const min=q.type==='weight'?1:0,max=q.type==='mirror'?2:q.type==='weight'?5:4;for(let n=min;n<max;n++)search([...v,n]);}search([]);assert.deepEqual(solutions,[expected[id]],id+' must have exactly one solution');assert.ok(!Q.check(id,q.initial));assert.ok(!Q.check(id,[]));
}
const frames=[];
for(const spec of [D.preparation(),D.reunion(),D.collapse()]){
 const traces=[];for(const time of [0,4,8,11,16,19,22,25,spec.duration-.1]){
  const trace=[];let depth=0;const ctx=new Proxy({}, {set(o,k,v){o[k]=v;return true;},get(o,k){if(k in o)return o[k];if(k==='createLinearGradient'||k==='createRadialGradient')return()=>({addColorStop(){}});return(...args)=>{for(const a of args)if(typeof a==='number')assert.ok(Number.isFinite(a),spec.kind+' '+String(k));if(k==='save')depth++;if(k==='restore')depth--;assert.ok(depth>=0);if(k==='ellipse')assert.ok(args[2]>=0&&args[3]>=0);if(k!=='fillText')trace.push([k,...args]);};}});
  D.draw(ctx,1298,600,{...spec,time},(c,p)=>{assert.ok(['sen','damla'].includes(p.who));trace.push(['person',p]);});assert.equal(depth,0);traces.push(crypto.createHash('sha256').update(JSON.stringify(trace)).digest('hex'));assert.ok(D.mix({...spec,time})>=0&&D.mix({...spec,time})<=1);assert.ok(D.caption({...spec,time}).length>10);
 }assert.ok(new Set(traces).size>=7,'real animation over time');frames.push(traces.join(':'));
}assert.equal(new Set(frames).size,3);
assert.equal(LEVELS.length,19);assert.equal(LEVELS[9].mechanic,'dreamGarden');assert.equal(LEVELS[10].introFilm,'reunion');assert.equal(LEVELS[10].companion,true);assert.ok(LEVELS[9].intro.some(l=>l[1].includes('19.17')));assert.ok(LEVELS[10].afterFilm.some(l=>l[1].includes('hayaldi')));assert.equal(LEVELS[18].title,'Sevgilime Bir Kefen');
for(const type of ['bramble','shutter','drip']){let traversed=false;for(let delay=0;delay<5&&!traversed;delay+=.35){const w=E.makeLevel(0,LEVELS[0]);w.objects=[];w.crate=null;w.hazards=[{type,x:225,y:442,offset:0}];const p=E.createPlayer(70,384);p.ground=0;const s={time:delay,tasks:{},phase:0};let jumped=false;for(let n=0;n<650;n++){const pressed=type==='bramble'&&!jumped&&p.x>145;if(pressed)jumped=true;s.time+=1/120;if(E.step(w,p,{right:true,left:false,jump:jumped,jumpPressed:pressed},s,1/120))break;if(p.x>320){traversed=true;break;}}}assert.ok(traversed,type+' traversal');}
const h={type:'shutter',x:200,y:442,offset:0};assert.ok(E.hazard(h,1).active);assert.ok(!E.hazard(h,3).active);assert.ok(E.hazard(h,4.5).warning);const drip={...h,type:'drip'};assert.ok(E.hazard(drip,1.4).warning);assert.ok(E.hazard(drip,2.2).active);const pulse={id:0,type:'pulse',fall:0};assert.ok(E.solid(pulse,{time:2.7}));assert.ok(E.pulse(pulse,{time:2.7}).warning);assert.ok(!E.solid(pulse,{time:3.5}));
console.log('PASS: 8 uniquely solvable logic puzzles, 3 distinct animated sequences, foreshadowing, hazard passages, pulse bridge warnings');

