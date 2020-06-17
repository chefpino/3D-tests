/*
for copy n paste:
PI symbol:	&pi;

input elements must have an ID="keyname"
these must be global variables


*/
var pageinfo = {
  title: "title goes here, if necessary",
  description: "short description",
  instructions: "instructions here",
};

var buttons = {
  bt1: {
    label: "go!",
    onclick: "enter function to execute",
  },
};
//--------------------------------------------------------------
var dropdowns = {
  dd1: {
    id: "selectFunction",
    ext_label: "function",
    elements: [
      { val: "z2c", label: "classic: Zn+1=(Zn)^2+c" },
      { val: "hyp", label: "hyperbolic Zn+1=c*sin(Zn)" },
    ],
    selected: "z2c",
  },
};
//--------------------------------------------------------------
//params is a global variable with many values that can be saved in a txt file
var params = {
  upperbound: {
    val: 4,
    min: 2,
    max: 50,
    default: 4,
    label: "upperbound",
    minLabel: "2",
    maxLabel: "50",
    integer: false,
  },
  iterations: {
    val: 100,
    min: 50,
    max: 500,
    default: 100,
    label: "iterations",
    minLabel: "50",
    maxLabel: "500",
    integer: true,
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
  cx: {
    val: -0.54,
    min: -1,
    max: 1,
    default: -0.54,
    label: "c: x",
    minLabel: "-1",
    maxLabel: "+1",
    integer: false,
  },
  cy: {
    val: -0.54,
    min: -1,
    max: 1,
    default: -0.54,
    label: "c: y",
    minLabel: "-1",
    maxLabel: "+1",
    integer: false,
  },
};
//____________________________________________________
var juliaExamples = {
  ex0: {
    label: "-0.54 + 0.54i",
    val: "ex0",
    cx: -0.4,
    cy: 0.6,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250
  },
  ex1: {
    label: "-0.4 + 0.6i",
    val: "ex1",
    cx: -0.4,
    cy: 0.6,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250
  },
  ex2: {
    label: "0.285 + 0.01i",
    val: "ex2",
    cx: 0.285,
    cy: 0.01,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250
  },
  ex3: {
    label: "0.45 + 0.1428i",
    val: "ex3",
    cx: 0.45,
    cy: 0.1428,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250
  },
  ex4: {
    label: "-0.70176  -0.3842i",
    val: "ex4",
    cx: -0.70176,
    cy: -0.3842,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250
  },
  ex5: {
    label: "-0.835 - 0.2321i",
    val: "ex5",
    cx: -0.835,
    cy: -0.2321,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250
  },
};
