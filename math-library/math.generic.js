//round to given number of decimals
function roundToNdecimals(x, n) {
  const p = Math.pow(10, n);
  return Math.round(x * p) / p;
}
//------------------------------
//random within given interval
function rnd(iMin, iMax) {
  return iMin + Math.random() * (iMax - iMin);
}
//------------------------------
//random integer given interval
function intRnd(iMin, iMax) {
  return Math.floor(rnd(iMin, iMax+1));
}
//------------------------------
//useful functions and constants
const sin = (x) => Math.sin(x);
const cos = (x) => Math.cos(x);
const tan = (x) => Math.tan(x);
const sqrt = (x) => Math.sqrt(x);
const exp = (x) => Math.exp(x);  //function returns e^sx
const abs = (x) => Math.abs(x);
const log = (x) => Math.log(x);
const pow = (x,y) => Math.pow(x,y); // returns x^y
const PI = Math.PI;
const E = Math.E;
//---------------------------
// common debug functions abbreviated
const clog = (x) => console.log(x);
const ctab = (x) => console.table(x);
