const assert=require('node:assert/strict');
const {create,tracks,chapters}=require('../music.js');
class Media{
 constructor(){this.paused=true;this.events={};this.loads=0;this.plays=0;this.currentTime=0;this.reject=false;}
 setAttribute(){}removeAttribute(k){delete this[k];}load(){this.loads++;this.currentTime=0;}pause(){this.paused=true;}
 addEventListener(k,f){this.events[k]=f;}
 play(){this.plays++;if(this.reject)return Promise.reject({name:'NotAllowedError'});this.paused=false;return Promise.resolve();}
}
const tick=()=>new Promise(resolve=>setImmediate(resolve));
(async()=>{
 const e=new Media(),blocked=[],levels=[];const context={currentTime:5,createMediaElementSource:()=>({connect(){}}),createGain:()=>({connect(){},gain:{cancelScheduledValues(){},setTargetAtTime:v=>levels.push(v)}})};
 const music=create({element:e,context,onBlocked:v=>blocked.push(v)});
 assert.equal(chapters.length,19);assert.deepEqual([...new Set(chapters.filter(Boolean))].sort(),Object.keys(tracks).sort());
 const play={track:'naval',playing:true,volume:.5};music.sync(play);await tick();assert.equal(e.src,tracks.naval.file);assert.equal(e.paused,false);assert.equal(e.loop,true);
 for(let n=0;n<60;n++)music.sync(play);assert.equal(e.plays,1);assert.equal(e.loads,1);
 e.currentTime=28;music.sync({...play,playing:false});assert.equal(e.paused,true);music.sync(play);await tick();assert.equal(e.currentTime,28,'Pause/resume must not rewind');
 music.sync({...play,duck:true});assert.ok(levels.at(-1)<levels.at(-2),'Dialogue music must be quieter');
 music.sync({...play,volume:0});assert.equal(e.paused,true);music.sync(play);await tick();assert.equal(e.paused,false);
 music.sync({...play,track:'rocket'});await tick();assert.equal(e.src,tracks.rocket.file);assert.equal(e.loads,2);
 music.sync({...play,track:'daylight'});await tick();assert.equal(e.src,tracks.daylight.file);
 for(const key of ['surLeFil','koyaanisqatsi']){music.sync({...play,track:key});await tick();assert.equal(e.src,tracks[key].file);assert.equal(e.paused,false);}
 music.stop();assert.equal(e.paused,true);music.sync({track:null,playing:false});assert.equal(e.src,undefined);
 const gate=new Media();gate.reject=true;const gated=create({element:gate,onBlocked:v=>blocked.push(v)});gated.sync(play);await tick();assert.equal(gated.blocked,true);
 gated.sync(play);await tick();assert.equal(gate.plays,1,'Blocked autoplay must not be retried every frame');gate.reject=false;gated.sync({...play,gesture:true});await tick();assert.equal(gated.blocked,false);assert.equal(gate.paused,false);
 gate.events.error();assert.equal(gated.failed,true);assert.equal(gate.paused,true);
 const deferred=new Media();let resolve;deferred.play=function(){this.paused=false;return new Promise(r=>resolve=r);};const race=create({element:deferred});race.sync(play);race.stop();resolve();await tick();assert.equal(deferred.paused,true,'A late play resolution must not resume a hidden tab');
 console.log('PASS: five recordings, lazy loading, loop, chapter switch, volume/ducking, pause/resume without rewind, mute, autoplay rejection/retry, media error, late-promise race');
})();

assert.equal(chapters.length,19);assert.ok(chapters.every(k=>tracks[k]));
