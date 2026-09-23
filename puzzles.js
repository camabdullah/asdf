'use strict';
const RoadPuzzles=(()=>{
 const needle=time=>(Math.sin(time*2.4-.85)+1)/2;
 const zone=(hit=0,type='dial')=>({center:(type==='brew'?[.3,.68,.46]:[.4,.65])[hit]||.5,width:type==='brew'?.075:.09});
 const inWindow=(time,hit=0,type='dial')=>{const z=zone(hit,type);return Math.abs(needle(time)-z.center)<=z.width;};
 const coffeeOK=order=>order.drink===1&&order.milk===1&&order.cups===2;
 const tableOK=(pair,drinks,phase,compare)=>pair[0]===1&&pair[1]===0&&drinks[0]===1&&drinks[1]===0&&(!compare||phase===0);
 return {needle,inWindow,coffeeOK,tableOK,zone};
})();
if(typeof module!=='undefined')module.exports=RoadPuzzles;
