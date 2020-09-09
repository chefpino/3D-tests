var params = {

  t10: {
    val: 0,
    min: -2*Math.PI,
    max: 2*Math.PI,
    default: 0,
    label: "t1 inf",
    minLabel: "-2PI",
    maxLabel: "2PI",
    recalc: true,
    integer: false,
    visible: true,
  },
  t11: {
    val: 2*Math.PI,
    min: 2*Math.PI,
    max: 4*Math.PI,
    default: 2*Math.PI,
    label: "t1 sup",
    minLabel: "2PI",
    maxLabel: "4PI",
    recalc: true,
    integer: false,
    visible: true,
  },  

  t20: {
    val: -1,
    min: -2*Math.PI,
    max: 2*Math.PI,
    default: -1,
    label: "t2 inf",
    minLabel: "-2PI",
    maxLabel: "2PI",
    recalc: true,
    integer: false,
    visible: true,
  },
  t21: {
    val: 1,
    min: -2*Math.PI,
    max: 2*Math.PI,
    default: 1,
    label: "t2 sup",
    minLabel: "2PI",
    maxLabel: "4PI",
    recalc: true,
    integer: false,
    visible: true,
  }, 

  x0: { 
    val: -2,
    min: -10,
    max: 0,
    default: -2,
    label: "x0",
    minLabel: "-10",
    maxLabel: "0",
    recalc: true,
    integer: false,
    visible: false,
  },
  x1: {
    val: 2,
    min: 0,
    max: 10,
    default: 2,
    label: "x1",
    minLabel: "0",
    maxLabel: "10",
    recalc: true,
    integer: false,
    visible: false,
  },
  y0: {
    val: -2,
    min: -10,
    max: 0,
    default: -2,
    label: "y0",
    minLabel: "-10",
    maxLabel: "0",
    recalc: true,
    integer: false,
    visible: false,
  },
  y1: {
    val: 2,
    min: 0,
    max: 10,
    default: 2,
    label: "y1",
    minLabel: "0",
    maxLabel: "10",
    recalc: true,
    integer: false,
    visible: false,
  },
  funcRes: {
    val: 30,
    min: 10,
    max: 100,
    default: 30,
    label: "function resolution",
    minLabel: "10",
    maxLabel: "100",
    integer: true,
    recalc: true,
    visible: true
  },
  gridRes: {
    val: 10,
    min: 10,
    max: 100,
    default: 10,
    label: "grid resolution",
    minLabel: "10",
    maxLabel: "100",
    integer: true,
    recalc: true,
    visible: true,
    cssClass: "control2",
  },
  funcOpacity: {
    val: 0.2,
    min: 0,
    max: 1,
    steps: 10,
    default: 0.2,
    label: "opacity",
    minLabel: "transparent",
    maxLabel: "opaque",
    integer: false,
    recalc: true,
    visible: true,
    cssClass: "control2",
  },


  xyAngle: {
    val: -2.8,
    min: -Math.PI,
    max: Math.PI,
    default: -2.8,
    label: "x,y rotation",
    minLabel: "-π",
    maxLabel: "+π",
    recalc: true,
    integer: false,
    visible: true,
    movie: true,
  },
  zyAngle: {
    val: -0.314,
    min: -Math.PI,
    max: Math.PI,
    default: -0.314,
    label: "y,z rotation",
    minLabel: "-π",
    maxLabel: "+π",
    recalc: true,
    integer: false,
    visible: true,
    movie: true,
  },
  zxAngle: {
    val: 0,
    min: -Math.PI,
    max: Math.PI,
    default: 0,
    label: "x,z rotation",
    minLabel: "-π",
    maxLabel: "+π",
    recalc: true,
    integer: false,
    visible: true,
    movie: true,
  },  


  scaleFactor: {
    val: .4,
    min: 0,
    max: 2,
    steps: 10,
    default: .4,
    label: "zoom",
    minLabel: "far",
    maxLabel: "close",
    integer: false,
    recalc: true,
    visible: true,
    cssClass: "control2",
  },
  perspective: {
    val: 0,
    visible: true,
    min: 0,
    max: 1,
    default: 0,
    label: "perspective",
    minLabel: "off",
    maxLabel: "on",
    integer: true,
    steps: 1,
    recalc: true,
    controlType: "checkbox",
    cssClass: "control2",
  }, 
  lrpanning: {
    val: 0,
    min: -10,
    max: 10,
    default: 0,
    label: "not visible",
    minLabel: "not visible",
    maxLabel: "not visible",
    recalc: false,
    integer: true,
    visible: false,
  },   
  functions: {
    x: "(1+t2/2*cos(t1/2))*cos(t1)",
    y: "(1+t2/2*cos(t1/2))*sin(t1)",
    z: "t2/2*sin(t1/2)",
    //torus
    //(1+.3 * Math.cos(t1))*Math.cos(t2)
    //(1+.3 * Math.cos(t1))*Math.sin(t2)
    //.3* Math.sin(t1)
  visible: false,
  },
  functionlabel: {
    x: "x(t1,t2)=",
    y: "y(t1,t2)=",
    z: "z(t1,t2)=",
  visible: false,
  },
  functionstoplot:{
    val: "",
    default: "",
    visible: false,
    bookmarkLink: false,
    showdeletebutton: true,
    showaddnewbutton: true,
   },
  goButton: {
    show: false,
    visible: false,
  },
  bookmarkLink: {
    show: false,
    visible: false,
  }

};

