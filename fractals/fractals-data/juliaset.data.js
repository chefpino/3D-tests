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

var params = {
  grid: {
    val: 1000,
    min: 100,
    max: 1000,
    default: 1000,
    label: "resolution",
    minLabel: "100",
    maxLabel: "1000",
    type: "slider",
    "idea to develop": "<input type...>",
    "another idea": "onchange event",
    "parameter to save on JSON file": false,
    show: true,
    integer: true,
  },
  upperbound: {
    val: 4,
    min: 2,
    max: 4,
    default: 4,
    label: "upperbound",
    minLabel: "2",
    maxLabel: "4",
    integer: false,
  },
  iterations: {
    val: 100,
    min: 50,
    max: 450,
    default: 100,
    label: "iterations",
    minLabel: "50",
    maxLabel: "450",
    integer: true,
  },
  x0: {
    val: -2,
    min: -2,
    max: 1,
    default: -2,
    label: "x0",
    minLabel: "-2",
    maxLabel: "2",
    integer: false,
  },
  x1: {
    val: 2,
    min: 1,
    max: 2,
    default: 2,
    label: "x1",
    minLabel: "1",
    maxLabel: "2",
    integer: false,
  },

  y0: {
    val: -1.4,
    min: -2,
    max: 1,
    default: -1.4,
    label: "y0",
    minLabel: "-2",
    maxLabel: "1",
    integer: false,
  },
  y1: {
    val: 1.4,
    min: 0,
    max: 2,
    default: 1.4,
    label: "y1",
    minLabel: "0",
    maxLabel: "2",
    integer: false
  },
  cx: {
    val: -0.54,
    min: -1,
    max: 1,
    default: -0.54,
    label: "x",
    minLabel: "-1",
    maxLabel: "+1",
    integer: false
  },
  cy: {
    val: -0.54,
    min: -1,
    max: 1,
    default: -0.54,
    label: "iy",
    minLabel: "-1",
    maxLabel: "+1",
    integer: false
  }
};

//----------------------------------------------------------------------------------
