var params = {
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
    visible: true,
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
    visible: true,
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
    visible: true,
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
    visible: true,
  },
  zFact: {
    val: 1,
    min: 0.1,
    max: 1,
    default: 1,
    label: "z factor",
    minLabel: ".1",
    maxLabel: "1",
    recalc: true,
    visible: true,
    integer: false,
    steps: 9
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
    visible: true
  },
  funcOpacity: {
    val: 0.5,
    min: 0,
    max: 1,
    steps: 10,
    default: 0.5,
    label: "opacity",
    minLabel: "0",
    maxLabel: "1",
    integer: false,
    recalc: true,
    visible: true
  },
  scaleFactor: {
    val: 1,
    min: 0,
    max: 1,
    steps: 10,
    default: 1,
    label: "zoom",
    minLabel: "0",
    maxLabel: "1",
    integer: false,
    recalc: true,
    visible: true
  },
  rotationAngle: {
    val: -Math.PI/6,
    min: -Math.PI,
    max: Math.PI,
    default: -Math.PI/6,
    label: "rotation",
    minLabel: "-π",
    maxLabel: "+π",
    recalc: true,
    integer: false,
    visible: true,
  },
  functions: {
    f1: "x*x+y*y",
    visible: false,
  },

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
