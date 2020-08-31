//-------------------------------------------
var params = {
  uBound: {
    val: 4,
    min: 2,
    max: 50,
    default: 4,
    label: "upperbound",
    minLabel: "2",
    maxLabel: "50",
    integer: false,
    visible: true,
  },
  maxItr: {
    val: 150,
    min: 50,
    max: 500,
    default: 150,
    label: "iterations",
    minLabel: "50",
    maxLabel: "500",
    integer: true,
    visible: true
  },

  cx: {
    val: -0.54,
    min: -2,
    max: 2,
    default: -0.54,
    label: "c: x",
    minLabel: "-2",
    maxLabel: "+2",
    integer: false,
    visible: true

  },
  cy: {
    val: -0.54,
    min: -2,
    max: 2,
    default: -0.54,
    label: "c: y",
    minLabel: "-2",
    maxLabel: "+2",
    integer: false,
    visible: true

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

  fixedOrigin: {
    val: false,
    visible: false,
  },
  x0: {
    val: -2,
    min: -4,
    max: 4,
    default: -2,
    label: "x0",
    minLabel: "-4",
    maxLabel: "4",
    integer: false,
    visible: false,
  },
  x1: {
    val: 2,
    min: 1,
    max: 4,
    default: 2,
    label: "x1",
    minLabel: "1",
    maxLabel: "4",
    integer: false,
    visible: false,
  },

  y0: {
    val: -1.4,
    min: -4,
    max: 0,
    default: -1.4,
    label: "y0",
    minLabel: "-4",
    maxLabel: "0",
    integer: false,
    visible: false,
  },
  y1: {
    val: 1.4,
    min: 0,
    max: 4,
    default: 1.4,
    label: "y1",
    minLabel: "0",
    maxLabel: "4",
    integer: false,
    visible: false,
  },
  goButton: {
    show: true,
    visible: false,
  }

};
