//round to given number of decimals

function roundToNdecimals(x, n) {
  const p = Math.pow(10, n);
  return Math.round(x * p) / p;
}
//------------------------------
function rnd(iMin, iMax) {
  return iMin + Math.random() * (iMax - iMin);
}
//------------------------------
function intRnd(iMin, iMax) {
  return Math.floor(rnd(iMin, iMax+1));
}
//------------------------------
const sin = (x) => Math.sin(x);
const cos = (x) => Math.cos(x);
const PI = Math.PI;