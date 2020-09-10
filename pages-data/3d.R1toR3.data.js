var params = {
  t0: {
    val: 0,
    min: -2*Math.PI,
    max: 2*Math.PI,
    default: 0,
    label: "t0",
    minLabel: "-2PI",
    maxLabel: "2PI",
    recalc: true,
    integer: false,
    visible: true,
  },
  t1: {
    val: 2*Math.PI,
    min: 2*Math.PI,
    max: 4*Math.PI,
    default: 2*Math.PI,
    label: "t1",
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
    val: 200,
    min: 50,
    max: 500,
    default: 200,
    label: "function resolution",
    minLabel: "50",
    maxLabel: "500",
    integer: true,
    recalc: true,
    visible: true,
    steps: 20

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
    val: 0.44,
    min: -Math.PI,
    max: Math.PI,
    default: 0.44,
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
    val: 1.6,
    min: 0,
    max: 2,
    steps: 10,
    default: 1.6,
    label: "zoom",
    minLabel: "far",
    maxLabel: "close",
    integer: false,
    recalc: true,
    visible: true,
    cssClass: "control2",
  },
  perspective: {
    val: 1,
    visible: true,
    min: 0,
    max: 1,
    default: 1,
    label: "perspective",
    minLabel: "off",
    maxLabel: "on",
    integer: true,
    steps: 1,
    recalc: true,
    controlType: "checkbox",
    cssClass: "control2",
  },  
  functions: {
    x: "cos(3*t)",
    y: "sin(3*t)",
    z: "t/3",
  visible: false,
  },
  functionlabel: {
    x: "x(t)=",
    y: "y(t)=",
    z: "z(t)=",
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

