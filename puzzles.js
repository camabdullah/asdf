'use strict';
const RoadPuzzles=(()=>{
 const needle=time=>(Math.sin(time*2.4-.85)+1)/2;
 const inWindow=time=>Math.abs(needle(time)-.5)<=.13;
 const coffeeOK=order=>order.drink===1&&order.milk===1&&order.cups===2;
 const tableOK=(pair,drinks,phase,compare)=>pair[0]===1&&pair[1]===0&&drinks[0]===1&&drinks[1]===0&&(!compare||phase===0);
 return {needle,inWindow,coffeeOK,tableOK};
})();
if(typeof module!=='undefined')module.exports=RoadPuzzles;
