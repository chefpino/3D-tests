//under constructions, save what?

var params = {
  dt: {
    val: 0.01,
    min: 0.01,
    max: 1,
    default:0.01,
    label: "dt",
    minLabel: "0.01",
    maxLabel: "1",
    integer: false,
    visible: true,
    recalc: true,
  },  t0: {
    val: 0,
    min: -2*Math.PI,
    max: 2* Math.PI,
    default:0,
    label: "t0",
    minLabel: "-PI",
    maxLabel: "PI",
    integer: false,
    visible: true,
    recalc: true,
  },
  t1: {
    val: 2* Math.PI,
    min: -2*Math.PI,
    max: 4* Math.PI,
    default:2* Math.PI,
    label: "t1",
    minLabel: "-2PI",
    maxLabel: "4PI",
    integer: false,
    visible: true,
    recalc: true,
  },
  x0: {
    val: -2,
    min: -4,
    max: 4,
    default: -2,
    label: "x0",
    minLabel: "-4",
    maxLabel: "4",
    integer: true,
    visible: false,
    recalc: true,
  },
  x1: {
    val: 2,
    min: 1,
    max: 4,
    default: 2,
    label: "x1",
    minLabel: "1",
    maxLabel: "4",
    integer: true,
    visible: false,
    recalc: true,
  },
  y0: {
    val: -2,
    min: -4,
    max: 4,
    default: -2,
    label: "y0",
    minLabel: "-4",
    maxLabel: "4",
    integer: true,
    visible: false,
  },
  y1: {
    val: 2,
    min: 1,
    max: 4,
    default: 2,
    label: "y1",
    minLabel: "1",
    maxLabel: "4",
    integer: true,
    visible: false,
  },
  functions: {
    f1: "Math.tan(t/10)",
    f2: "Math.sin(4*t)",
    visible: false,
  },
  functionlabel: {
    f1: "f1(t)=",
    f2: "f2(t)=",
    visible: false,
  },
  functionstoplot:{
    val: "Math.tan(t/10),Math.sin(4*t)",
    default: "Math.tan(t/10),Math.sin(4*t)",
    visible: false,
    bookmarkLink: true,
    showdeletebutton: true,
    showaddnewbutton: true,
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
    steps: 1,
    controlType: "checkbox",
    cssClass: "control2",
  },
  grid: {
    val: 1,
    visible: true,
    min: 0,
    max: 1,
    default: 1,
    label: "show grid",
    minLabel: "no",
    maxLabel: "yes",
    integer: true,
    steps: 1,
    recalc: true,
    controlType: "checkbox",
    cssClass: "control2",
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
