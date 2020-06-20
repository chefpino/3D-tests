
//--------------------------------------------------------------
//params is a global variable with many values that can be saved in a txt file
var params = {

  iterations: {
    val: 100000,
    min: 10000,
    max: 1000000,
    default: 100000,
    label: "iterations",
    minLabel: "10000",
    maxLabel: "1000000",
    integer: true,
  },
  "fixedOrigin":{
    val: false,
    visible: false
     },
  x0: {
    val: -2.1820,
    integer: false,
    visible: false,
  },
  x1: {
    val: 2.6558,
    integer: false,
    visible: false,
  },
  y0: {
    val: 0,
    integer: false,
    visible: false,
  },
  y1: {
    val: 10,
    integer: false,
    visible: false,
  }
};
//____________________________________________________
