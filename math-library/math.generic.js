//round to given number of decimals

function roundToNdecimals(x, n) {
  const p = Math.pow(10, n);
  return Math.round(x * p) / p;
}