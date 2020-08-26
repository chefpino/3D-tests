//-------------------------------------------
//--- obj complex number
function c(x, y) {
  return {
    x: x,
    y: y,
  };
}
//-------------------------------------------
// -- product of a+ib, c+id ---
function p(c1, c2) {
  const tc1 = typeof c1 == "object" ? c1 : new c(c1, 0);
  const tc2 = typeof c2 == "object" ? c2 : new c(c2, 0);

  return {
    x: tc1.x * tc2.x - tc1.y * tc2.y,
    y: tc1.x * tc2.y + tc1.y * tc2.x,
  };
}
//-------------------------------------------
//for polynomial exponents ---
function exp(c, n) {
  var tempC = c;
  for (let index = 1; index < n; index++) {
    tempC = p(tempC, c);
  }

  return tempC;
}
//-------------------------------------------
// -- sum of a+ib, c+id ---
function s(c1, c2) {
  const tc1 = typeof c1 == "object" ? c1 : new c(c1, 0);
  const tc2 = typeof c2 == "object" ? c2 : new c(c2, 0);

  return {
    x: tc1.x + tc2.x,
    y: tc1.y + tc2.y,
  };
}
//-------------------------------------------
// -- module, θ --
function m(c) {
  return {
    z: Math.sqrt(c.x * c.x + c.y * c.y),
    theta: Math.atan(c.y / c.x) + (c.x > 0 ? 0 : Math.PI),
  };
}
//-----------------------
//--- distance
function d(c1,c2){
  return Math.sqrt((c2.x-c1.x)*(c2.x-c1.x)+(c2.y-c1.y)*(c2.y-c1.y));
}
//-------------------------------------------
// -- rotations θ
// input module and angle, returns couple x, y => (x+iy)
function r(z, theta) {
  return {
    x: z * Math.cos(theta),
    y: z * Math.sin(theta),
  };
}
//-------------------------------------------
//inverse
function inv(c) {
  const d = c.x * c.x + c.y * c.y;
  return {
    x: c.x / d,
    y: (-1 * c.y) / d,
  };
}
//-------------------------------------------
//sin
function complex_sin(c) {
  return {
    x: Math.sin(c.x) * Math.cosh(c.y),
    y: Math.cos(c.x) * Math.sinh(c.y),
  };
}
//-------------------------------------------
//cos(a+bi)=cosacoshb−isinasinhb
function complex_cos(c) {
  return {
    x: Math.cos(c.x) * Math.cos(c.y),
    y: Math.sin(c.x) * Math.sinh(c.y),
  };
}
