class ReMap {
  constructor(cW, cH, x0, x1, y0, y1, fixedOrigin) {
    this.cW = cW;
    this.cH = cH;
    this.x0 = x0;
    this.x1 = x1;
    this.y0 = y0;
    this.y1 = y1;
    this.fixedOrigin = fixedOrigin;
    this._lineWidth = 0.1; //default line width
    this._strokeStyle = "grey"; //default stroke style
    this._lockRatio = false;
  }

  //methods -----------------

  //convert x+iy complex number into canvas coordinates
  x(x) {
    var sf = (this._scaleFactor == null ? 1 : this._scaleFactor);

    return (
      (this.fixedOrigin ? this.cW / 2 + sf * x * this.cW / (this.x1 - this.x0) : sf * (x - this.x0) * this.cW / (this.x1 - this.x0))
    )
  }
  y(y) {
    var sf = (this._scaleFactor == null ? 1 : this._scaleFactor);
    var ratio = this.cH / (this.y1 - this.y0);
    ratio = (this._lockRatio) ? this.cW / (this.x1 - this.x0) : ratio;

    return (
      (this.fixedOrigin ? this.cH / 2 - sf * y * ratio : this.cH - sf * (y - this.y0) * ratio)
    )
  }

  //canvas' mouse coordinates translated in point x+iy of the complex plane 
  m2x(x) {
    return (this.fixedOrigin ? (x - this.cW / 2) * (this.x1 - this.x0) / this.cW : x * (this.x1 - this.x0) / this.cW + this.x0);
  }
  m2y(y) {
    return (this.fixedOrigin ? (this.cH / 2 - y) * (this.y1 - this.y0) / this.cH : (cH - y) * (this.y1 - this.y0) / this.cH + this.y0);
  }

  //delta of 1 pixel - x axis only
  dx() {
    return (this.x1 - this.x0) / this.cW;
  }
  //delta of 1 pixel - y axis only
  dy() {
    return (this.y1 - this.y0) / this.cH;
  }
  //-------------------------------------------
  drawAxis() {
    //possible improvements:
    //origin showing or not, plus writing coordinates on edges of canvas true/false
    //

    this._objCanvas.strokeStyle = this._strokeStyle;
    this._objCanvas.lineWidth = this._lineWidth;
    this._objCanvas.fillStyle = "red";

    //x position of the label x1 on the canvas, in canvas coordinates
    var posx1 = this.cW - 6 * ((this.x1 + "").length);

    //--- x axis -------------------------
    if (this.y(0) >= 0 && this.y(0) <= this.cH) {
      this._objCanvas.moveTo(this.x(this.x0), this.y(0));
      this._objCanvas.lineTo(this.x(this.x1), this.y(0));
      this._objCanvas.stroke();
      //writing can be made optional
      this._objCanvas.fillText(this.x0, 5, this.y(0));
      this._objCanvas.fillText(this.x1, posx1, this.y(0));
    }
    // if axis is out of the canvas just write the x range
    if (this.y(0) < 0 || this.y(0) > cH) {
      this._objCanvas.fillText(this.x0, 5, this.cH / 2); //x0 
      this._objCanvas.fillText(this.x1, posx1, this.cH / 2);
    }

    //--- y axis -------------------------
    if (this.x(0) >= 0 && this.x(0) <= this.cW) {
      this._objCanvas.moveTo(this.x(0), this.y(this.y0));
      this._objCanvas.lineTo(this.x(0), this.y(this.y1));
      this._objCanvas.stroke();
      this._objCanvas.fillText(this.y0, this.x(0), this.cH - 5);
      this._objCanvas.fillText(this.y1, this.x(0), 10);
    }
    // if axis is out of the canvas just write the y range
    if (this.x(0) < 0 || this.x(0) > this.cW) {
      this._objCanvas.fillText(this.y0, this.cW / 2, this.cH - 5);
      this._objCanvas.fillText(this.y1, this.cW / 2, 10);
    }

  }

  drawUnitCircle() {
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    this._objCanvas.beginPath();
    this._objCanvas.ellipse(this.x(0), this.y(0), this.cW / (this.x1 - this.x0), this.cH / (this.y1 - this.y0), 0, 0, 2 * Math.PI); //.arc(x,y,2,1); //hardcoded!
    this._objCanvas.stroke();
  }

  // --------------------------------------------------------
  drawGrid() {
    
    //the +0.5 is to have straight lines thin as they are supposed to be
    //on ctx the pixes alre centered on 0.5,0.5 a grid
    var pointsArray = gridCoords(this.x0, this.x1);

    this._objCanvas.strokeStyle = this._strokeStyle;
    this._objCanvas.lineWidth = this._lineWidth;

    for (let index = 0; index < pointsArray.length; index++) {
      const tempX = 0.5+Math.floor(this.x(pointsArray[index]));

      this._objCanvas.moveTo(tempX, 0);
      this._objCanvas.lineTo(tempX, this.cH);
      this._objCanvas.stroke();
    }

    
    pointsArray = gridCoords(this.y0, this.y1);
    for (let index = 0; index < pointsArray.length; index++) {
      const tempY = 0.5+Math.floor(this.y(pointsArray[index]));
      this._objCanvas.moveTo(0, tempY);
      this._objCanvas.lineTo(this.cW, tempY);
      this._objCanvas.stroke();
    }

  }
  //-------------------------------------------
  drawSegment(c1, c2, strColor) {
    this._objCanvas.beginPath();
    this._objCanvas.lineWidth = this._lineWidth;;
    this._objCanvas.strokeStyle = strColor;
    this._objCanvas.moveTo(this.x(c1.x), this.y(c1.y));
    this._objCanvas.lineTo(this.x(c2.x), this.y(c2.y));
    this._objCanvas.stroke();
  }
  //------------------------------
  plot(x, y, clr) {
    this._objCanvas.beginPath();
    this._objCanvas.fillStyle = clr;
    this._objCanvas.fillRect(this.x(x), this.y(y), 1, 1);
    this._objCanvas.fill();
  }
  //-------------------------------------------
  clearcanvas() {
    this._objCanvas.clearRect(0, 0, cW, cH);
  }
  // properties --------------------------------------
  set objCanvas(obj) {
    this._objCanvas = obj;
  }
  set lockRatio(bool) {
    this._lockRatio = bool;
  }
  set scaleFactor(s) {
    this._scaleFactor = s * 1;
  }
  set lineWidth(s) {
    this._lineWidth = s * 1;
  }
  set strokeStyle(s) {
    this._strokeStyle = s;
  }
  //-------------------------
} //--- end of class definition ============================================================

//-------------------------------------------
function getMousePos(evt) {
  const rect = myCanvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

//---------- hard coded crap -------------
function writeMessage(message) {
  document.getElementById("mousecoordinates").innerHTML = message
}
//-------------------------------------------
// math functions for the grid 
function dRound(x, n) {
  const p = Math.pow(10, n);
  return Math.round(x * p) / p;
}
//-------------------------------------------
function gridCoords(x0, x1) {

  var arrX = new Array();
  const xStart = intScale(x0, x1).inf;
  var dx = intScale(x0, x1).dx;
  var s = xStart;
  do {
    s = s + dx;
    arrX.push(s);
  } while (s < x1);
  
  return arrX;
}
//--- this function decides the size of the grid
function intScale(x0, x1) {
  const y = Math.round(Math.log10(x1 - x0));
  const z = Math.pow(10, y - 1);
  return {
    dx: z,
    inf: dRound(x0, Math.log10(1 / z))
  }
}
//---------------------------
function plot(x, y, clr) {
  //ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.fillStyle = clr;
  ctx.fillRect(x, y, 1, 1);
  ctx.fill();
  ctx.stroke(); //***********WIP */ seems to be faster with this added command
}
//---------------------------
function thickPlot(x, y, radius, clr) {
  ctx.beginPath();
  ctx.fillStyle = clr;
  ctx.arc(x, y, radius,0,3*Math.PI);
  ctx.fill();
}

