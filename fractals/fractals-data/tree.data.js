/*
var initAngle=pi/2;      //trunk angle
var dAngle=pi/8;         //half of bifurcation angle, pi/8 nice
var initLen=150;         //trunk length max 150
var minLen=30;           //20, 25 nice
var reduction=0.8;       //0.8 nice
var initTrunk=20;        //trunk initial thickness
var trunkReduction=0.5;  //trunk => tree reduction factor 
var minBranch=0.1;       // branches min thickness
*/

var params = {
  "initAngle":{
     "val":Math.PI/2,
     "min":0,
     "max":Math.PI,
     "default":Math.PI/2,
     "label":"trunk angle",
     "minLabel":"0",
     "maxLabel":"π"
     },
   "dAngle":{
     "val":Math.PI/8,
     "min":Math.PI/8,
     "max":Math.PI/4,
     "default":Math.PI/8,
     "label":"branch angle",
     "minLabel":"π/8",
     "maxLabel":"π/4"
     },
   "initLen":{
     "val":100,
     "min":25,
     "max":150,
     "default":100,
     "label":"trunk initial height",
     "minLabel":"25",
     "maxLabel":"150"

     },
   "minLen":{
     "val":20,
     "min":15,
     "max":40,
     "default":20,
     "label":"branch min length",
     "minLabel":"15",
     "maxLabel":"40"

     },
   "reduction":{
     "val":0.8,
     "min":0.5,
     "max":0.8,
     "default":0.8,
     "label":"branch length factor",
     "minLabel":"0.5",
     "maxLabel":"0.8"

     },
   "initTrunk":{
     "val":20,
     "min":1,
     "max":50,
     "default":20,
     "label":"trunk initial thickness",
     "minLabel":"1",
     "maxLabel":"50"

     },
   "trunkReduction":{
     "val":0.5, 
     "min":0.1,
     "max":0.9,
     "default":0.5,
     "label":"trunk to branch thickness",
     "minLabel":"0.1",
     "maxLabel":"0.9"
     },
   "minBranch":{
     "val":0.1,
     "min":0.1,
     "max":1,
     "default":0.1,
     "label":"branch min thickness",
     "minLabel":"0.1",
     "maxLabel":"1"

     }

}

//----------------------------------------------------------------------------------
/*

function updateParam(x) {
  
  var iTemp=1*document.getElementById(x).value;
  params[x].val=sliderToParam(x,iTemp);
  //console.log(params[x].val);
  document.getElementById("val_" + x).innerHTML=params[x].val;
  //reDraw();
  
}

function loadDefaults() {

  // WIP, reload all default values
  for (var key in params) {
      
      defaultValue=paramToSlider(key,params[key].default); 
      document.getElementById(key).value=defaultValue;
      document.getElementById("val_" + key).innerHTML=params[key].default;
  
  }
  
}

*/