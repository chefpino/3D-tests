//under constructions, save what?

var params = {
  fixedOrigin: {
    val: false,
    visible: false,
  },
  x0: {
    val: -2,
    min: -100,
    max: 100,
    default: -2,
    label: "x0",
    minLabel: "-100",
    maxLabel: "100",
    integer: false,
    visible: true,
  },
  x1: {
    val: 2,
    min: -100,
    max: 100,
    default: 2,
    label: "x1",
    minLabel: "-100",
    maxLabel: "100",
    integer: false,
    visible: true,
  },

  y0: {
    val: -1,
    min: -100,
    max: 100,
    default: -1,
    label: "y0",
    minLabel: "-100",
    maxLabel: "100",
    integer: false,
    visible: true,
  },
  y1: {
    val: 1,
    min: -100,
    max: 100,
    default: 1,
    label: "y1",
    minLabel: "-100",
    maxLabel: "100",
    integer: false,
    visible: true,
  },
  functions: {
    f1: "2*x-1",
    f2: "x*x",
    visible: false,
  },
  lockratio: {
   val: 0,
   min: 0,
   max: 1,
   default: 0,
   label: "lock ratio",
   minLabel: "off",
   maxLabel: "on",
   visible: true,
   integer: true

  }

};
