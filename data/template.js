/*
input elements must have an ID="keyname"

these must be global variables

*/
var pageinfo = {

    "title":"title goes here, if necessary",
    "description":"short description",
    "instructions":"instructions here"

}

var params = {
  "keynamegoeshere":{
     "val":Math.PI/2,
     "min":0,
     "max":Math.PI,
     "default":Math.PI/2,
     "label":"trunk angle",
     "minLabel":"0",
     "maxLabel":"π",
     "type":"slider",
     "ideatodevelop":"<input type...>"
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






