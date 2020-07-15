
//------------ LEAF ----------------------------------------
function leaf(x, y, l, alpha, beta) {
  /*
  x,y coordinate beginning leaf
  l: length of leaf
  alpha: angle of the leaf simmetry line
  b: angle of the arc describing the leaf 
  */

  //try changing alpha a little bit to make leaves more natural
  if (alpha < pi / 2) {
    alpha = alpha - Math.random();
  } else {
    alpha = alpha + Math.random();
  }

  var r = l / (2 * Math.sin(beta / 2));
  var gamma = pi / 2 - beta / 2 - alpha;
  var xc = 0;
  var yc = 0;

  // leaf first half ----------------------------

  //calc center
  xc = x + r * Math.cos(gamma);
  yc = y - r * Math.sin(gamma);

  //leaf'simmetry line
  ctx.beginPath();
  ctx.strokeStyle = "darkgreen";

  ctx.moveTo(px(x), py(y));
  ctx.lineTo(px(x + l * Math.cos(alpha)), py(y + l * Math.sin(alpha)));
  ctx.stroke();

  //--- leaf 1st arc
  ctx.arc(
    px(xc),
    py(yc),
    r,
    2 * pi - (pi - gamma - beta),
    2 * pi - (pi - gamma),
    true
  );
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // leaf second  half ----------------------------

  //calc center
  var diagonal = Math.sqrt(r * r - (l * l) / 4);
  xc = xc - 2 * diagonal * Math.cos(gamma + beta / 2);
  yc = 2 * diagonal * Math.sin(gamma + beta / 2) + yc;

  ctx.beginPath();
  ctx.arc(
    px(xc),
    py(yc),
    r,
    -1 * (alpha + beta / 2) + pi / 2,
    -1 * (alpha - beta / 2) + pi / 2,
    false
  );
  ctx.fillStyle = "lightgreen";
  ctx.fill();
  ctx.stroke();
}
 
//---------- DRAW --------------------------------------------
function draw(x, y, angle, len, trunk) {
  var newx = x + len * Math.cos(angle);
  var newy = y + len * Math.sin(angle);

  ctx.lineWidth = minBranch + trunk;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  //ctx.save(); // check later to better understand

  ctx.moveTo(px(x), py(y));
  ctx.lineTo(px(newx), py(newy));
  ctx.stroke();
  if (len >= minLen) {
    draw(
      newx,
      newy,
      angle + (pi / 2) * Math.random() * dAngle,
      len * reduction,
      trunk * trunkReduction
    );
    draw(
      newx,
      newy,
      angle - (pi / 2) * Math.random() * dAngle,
      len * reduction,
      trunk * trunkReduction
    );
    draw(
      newx,
      newy,
      angle + (pi / 24) * rnd(-1, 1),
      len * reduction,
      trunk * trunkReduction
    );
  } else {
    // WIP leaf length
    len = rnd(0.25,1) * len; //random leaf length
    leaf(newx, newy, len, angle, (2 * pi) / 3);
  }
}
//-----------------------------------------------------------------------

//--- this functions remap the canvas. The origin is the middle point of the rect base.
function px(x) {
  return cW / 2 + x;
  }
function py(y) {
  return cH - y;
}
//------------------------------------------------------------------------------------

function plot(x, y) {
  //for debugging only
  ctx.beginPath();
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(x, y, 3, 3);
}
// --- generate random number within the given interval ------------------------------
function rnd(iMin, iMax) {
  return iMin + Math.random() * (iMax - iMin);
}
//------------------------------------------------------------------------------------
