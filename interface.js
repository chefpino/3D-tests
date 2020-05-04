/*
var initAngle=pi/2;      //trunk angle
var dAngle=pi/8;         //half of bifurcation angle, pi/8 nice
var initLen=150;         //max 150
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
     "min":1,
     "max":Math.PI/4,
     "default":Math.PI/8,
     "label":"branch angle",
     "minLabel":"1",
     "maxLabel":"π/4"
     },
   "initLen":{
     "val":150,
     "min":25,
     "max":150,
     "default":150,
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
     "max":0.9,
     "default":0.8,
     "label":"branch reduction factor",
     "minLabel":"0.5",
     "maxLabel":"0.9"

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
     "label":"trunk to branch reduction factor",
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

function paramToSlider(strParam,iValue){  
var x1=1*params[strParam].min;
var x2=1*params[strParam].max;  
return Math.round(100*(1*iValue-x1)/(x2-x1));
//return 1*x1;
}

function sliderToParam(strParam,iValue){  
var x1=1*params[strParam].min;
var x2=1*params[strParam].max;  
return x1+iValue*(x2-x1)/100;
//return 1*x1;
}