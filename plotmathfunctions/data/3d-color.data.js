/*
const x0=-2;
const x1=2;
const y0=-2;
const y1=2;
const z0=-2;
const z1=2;
*/

var params = {
  x0: {
    val: -2,
    min: -10,
    max: 10,
    default: -2,
    label: "x0",
    minLabel: "-2",
    maxLabel: "10",
  },
  x1: {
    val: 2,
    min: -10,
    max: 10,
    default: 2,
    label: "x1",
    minLabel: "-2",
    maxLabel: "10",
  },
  y0: {
    val: -2,
    min: -10,
    max: 10,
    default: -2,
    label: "y0",
    minLabel: "-2",
    maxLabel: "10",
  },
  y1: {
    val: 2,
    min: -10,
    max: 10,
    default: 2,
    label: "y1",
    minLabel: "-2",
    maxLabel: "10",
  },
  z0: {
    val: -2,
    min: -10,
    max: 10,
    default: -2,
    label: "z0",
    minLabel: "-2",
    maxLabel: "10",
  },
  z1: {
    val: 2,
    min: -10,
    max: 10,
    default: 2,
    label: "z1",
    minLabel: "-2",
    maxLabel: "10",
  },
  resolution: {
    val: 30,
    min: 10,
    max: 100,
    default: 30,
    label: "resolution",
    minLabel: "30",
    maxLabel: "100",
    integer: true
  }
};

//----------------------------------------------------------------------------------

function updateParam(x) {
  var iTemp = 1 * document.getElementById(x).value;
  params[x].val = sliderToParam(x, iTemp);
  document.getElementById("val_" + x).innerHTML = params[x].val;
}

function loadDefaults() {
  // WIP, reload all default values
  for (var key in params) {
    defaultValue = paramToSlider(key, params[key].default);
    document.getElementById(key).value = defaultValue;
    document.getElementById("val_" + key).innerHTML = params[key].default;
  }
}
