
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
        },
     exponent: {
          val: 2,
          min: 1,
          max: 10,
          default:2,
          label:"exp",
          minLabel:"1",
          maxLabel:"10",
          integer:true,
          "visible":true
     }   
    

}

//----------------------------------------------------------------------------------






