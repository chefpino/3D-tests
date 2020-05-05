

function paramToSlider(strParam,iValue){  
var x1=1*params[strParam].min;
var x2=1*params[strParam].max;  
return Math.round(100*(1*iValue-x1)/(x2-x1));
//return 1*x1;
}

function sliderToParam(strParam,iValue){  
var x1=1*params[strParam].min;
var x2=1*params[strParam].max;  
return x1+iValue*(x2-x1)/100;
//return 1*x1;
}

//------------ LEAF ----------------------------------------
function leaf(x,y,l,alpha,beta){
  /*
  x,y coordinate beginning leaf
  l: length of leaf
  alpha: angle of the leaf simmetry line
  b: angle of the arc describing the leaf 
  */
  
  //try changing alpha a little bit to make leaves more natural
  if (alpha<pi/2) {
    alpha=alpha-Math.random();
  } else {
    alpha=alpha+Math.random();
  }


  var r=l/(2*Math.sin(beta/2));
  var gamma=pi/2-beta/2-alpha;
  var xc=0;
  var yc=0;
  


 // leaf first half ----------------------------
    
  //calc center
  xc=x+r*Math.cos(gamma);
  yc=y-r*Math.sin(gamma);
  
  //leaf'simmetry line
  ctx.beginPath();
  ctx.strokeStyle = "darkgreen";

  ctx.moveTo(px(x),py(y));
  ctx.lineTo(px(x+l*Math.cos(alpha)),py(y+l*Math.sin(alpha)));
  ctx.stroke(); 
  
  //--- leaf 1st arc
  ctx.arc(px(xc),py(yc), r, 2*pi-(pi-gamma-beta),2*pi-(pi-gamma),true);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();
  
  // leaf second  half ----------------------------
  
  //calc center
  var diagonal=Math.sqrt(r*r-l*l/4)
  xc=xc-2*diagonal*Math.cos(gamma+beta/2);
  yc=2*diagonal*Math.sin(gamma+beta/2)+yc;

  ctx.beginPath();
  ctx.arc(px(xc),py(yc), r, -1*(alpha+beta/2)+pi/2,-1*(alpha-beta/2)+pi/2,false);
  ctx.fillStyle = "lightgreen";
  ctx.fill();
  ctx.stroke();  
}



