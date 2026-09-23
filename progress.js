'use strict';
const RoadProgress=(()=>{
 const fresh=()=>({version:1,layoutVersion:5,current:0,unlocked:0,completed:[],memories:[],seen:[],states:{},minutes:0,volume:.4,assist:false});
 function migrate(raw,levels){
  const base=fresh(),last=levels.length-1;if(!raw||raw.version!==1||!Array.isArray(raw.completed)||!Array.isArray(raw.memories)||!raw.states)return {save:base,migrated:false};
  const old=raw.layoutVersion||1,v={...base,...raw},map=n=>Math.max(0,Math.min(last,(Number(n)||0)+(old<5&&Number(n)>=12?1:0)));
  v.current=map(raw.current);v.unlocked=map(raw.unlocked);v.completed=[...new Set(raw.completed.map(map))];
  v.memories=[...new Set(raw.memories.map(k=>map(k.split(':')[0])+':memory'))];
  v.seen=[...new Set((raw.seen||[]).map(k=>{const [n,p]=k.split(':');return map(n)+':'+p;}))];
  v.states={};for(const [n,s]of Object.entries(raw.states))v.states[map(n)]={...s};
  if(old<4)v.states={[v.current]:{checkpoint:0,tasks:{},tables:{},actor:levels[v.current].actor,phase:0}};
  v.layoutVersion=5;return {save:v,migrated:old<5};
 }
 return {fresh,migrate};
})();
if(typeof module!=='undefined')module.exports=RoadProgress;
