'use strict';
const RoadMusic=(()=>{
 const tracks={naval:{file:'assets/music/naval.mp3',title:'Yann Tiersen · Naval'},rocket:{file:'assets/music/the-rocket-builder.mp3',title:'Jóhann Jóhannsson · The Rocket Builder'},daylight:{file:'assets/music/on-the-nature-of-daylight.mp3',title:'Max Richter · On the Nature of Daylight'}};
 const chapters=['naval','rocket','naval','rocket','daylight','rocket','rocket','naval','rocket','naval','daylight','daylight','rocket','daylight','daylight'];
 chapters.splice(12,0,'naval');chapters.splice(13,0,'naval');
 function create({element,context,onBlocked=()=>{},onError=()=>{}}){
  let current=null,active=false,attempt=0,pending=false,blocked=false,failed=false,node=null,source=null,lastVolume=-1;
  element.loop=true;element.preload='none';element.setAttribute('playsinline','');
  if(context){try{source=context.createMediaElementSource(element);node=context.createGain();source.connect(node);node.connect(context.destination);}catch{node=null;}}
  element.addEventListener('error',()=>{failed=true;pending=false;element.pause();onError(current);});
  function stop(){active=false;attempt++;pending=false;element.pause();}
  function sync({track=null,playing=false,volume=.4,duck=false,gesture=false}){
   if(track!==current){stop();current=track;blocked=false;failed=false;lastVolume=-1;if(track){element.src=tracks[track].file;element.load();}else{element.removeAttribute('src');element.load();}}
   const vol=Math.max(0,Math.min(1,volume))*(duck?.42:.72);
   if(vol!==lastVolume){if(node){const now=context.currentTime;node.gain.cancelScheduledValues(now);node.gain.setTargetAtTime(vol,now,.16);}else element.volume=vol;lastVolume=vol;}
   if(!playing||!track||!volume||failed){if(active||!element.paused)stop();return;}
   active=true;if(gesture)blocked=false;
   if(blocked||pending||!element.paused)return;
   const id=++attempt;pending=true;
   try{const result=element.play();Promise.resolve(result).then(()=>{if(id!==attempt){if(!active)element.pause();return;}pending=false;blocked=false;onBlocked(false);}).catch(error=>{if(id!==attempt)return;pending=false;if(error?.name==='AbortError')return;blocked=true;onBlocked(true);});}catch{pending=false;blocked=true;onBlocked(true);}
  }
  return {sync,stop,get current(){return current;},get failed(){return failed;},get blocked(){return blocked;}};
 }
 return {tracks,chapters,create};
})();
if(typeof module!=='undefined')module.exports=RoadMusic;
