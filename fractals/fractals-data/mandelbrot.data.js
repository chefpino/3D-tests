/*
for copy n paste:
PI symbol:	&pi;

input elements must have an ID="keyname"
these must be global variables


const cW=1400;  //ctx.clientWidth;
const cH=700;  //ctx.clientHeight;a

const cW=ctx.clientWidth;
const cH=ctx.clientHeight;

-- range
const x0=-3;
const x1=2;
const y0=-1;
const y1=1;
const grid=1400;
const dx=(x1-x0)/grid;
const dy=(y1-y0)/grid; //dy=dx
const maxItr=1000;
const uBound=4;


/*
var pageinfo = {

  "title":"Mandelbrot Set",
  "description":"short description",
  "instructions":"Click to zoom"

}

var buttons = {
  
    "bt1":{
      label:"go!",
      "onclick":"enter function to execute"

    }
}
*/

var params = {

 "upperbound":{
   val:4,
   min:2,
   max:100,
   default:4,
   label:"upperbound",
   minLabel:"2",
   maxLabel:"100",
   integer:false
   },
 "iterations":{
   val:75,
   min:50,
   max:1000,
   default:75,
   label:"iterations",
   minLabel:"75",
   maxLabel:"1000",
   integer:true
   },
 "fixedOrigin":{
  val: false,
  visible: false
   },
  zoomIn: {
    val: 1,
    visible: true,
    min: 0,
    max: 1,
    default: 1,
    label: "zoom",
    minLabel: "out",
    maxLabel: "in",
    integer: true,
    steps: 1
  }, 
   "x0":{
    val:-2,
    min:-2,
    max:0,
    default:-2,
    label:"x0",
    minLabel:"-2",
    maxLabel:"0",
    integer:false,
    "visible":false
    },
    "x1":{
      val:1,
      min:-2,
      max:2,
      default:1,
      label:"x1",
      minLabel:"-2",
      maxLabel:"2",
      integer:false,
      "visible":false
    },
    
    "y0":{
        val:-1.05,
        min:-2,
        max:1,
        default:-1.05,
        label:"y0",
        minLabel:"-2",
        maxLabel:"1",
        integer:false,
        "visible":false
        },
    "y1":{
          val:1.05,
          min:0,
          max:2,
          default:1.05,
          label:"y1",
          minLabel:"0",
          maxLabel:"2",
          integer:false,
          "visible":false
        }
    

}

//----------------------------------------------------------------------------------






