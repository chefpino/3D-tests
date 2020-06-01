class ReMap {
  constructor(cW, cH, x0, x1, y0, y1, fixedOrigin) {
    this.cW = cW;
    this.cH = cH;
    this.x0 = x0;
    this.x1 = x1;
    this.y0 = y0;
    this.y1 = y1;
    this.fixedOrigin = fixedOrigin;
  }

  //methods --------------------------------------------------------------------------

  //convert x+iy complex number into canvas coordinates
  x(x) {
    return (
      (this.fixedOrigin ? this.cW / 2 : 0) + (x * this.cW) / (this.x1 - this.x0)
    );
  }
  y(y) {
    return (
      (this.fixedOrigin ? this.cH / 2 : 0) + (y * this.cH) / (this.y1 - this.y0)
    );
  }

  //mouse coordinates translated in point x+iy of the complex plane
  m2x(x) {
    return ((x - this.cW / 2) * (this.x1 - this.x0)) / this.cW;
  }
  m2y(y) {
    return ((this.cH / 2 - y) * (this.y1 - this.y0)) / cH;
  }

  plot(x, y) {
    //x,y are canvas coordinates
    this._myCanvas.beginPath();
    this._myCanvas.fillStyle = "red"; //hard coded!!!
    this._myCanvas.arc(x, y, 2, 0, 2 * Math.PI); //.arc(x,y,2,1);
    this._myCanvas.fill();
  }

  drawAxis() {
    this._objCanvas.strokeStyle = "#000000";
    this._objCanvas.lineWidth = "0.2";
    this._objCanvas.moveTo(this.x(x0), this.y(0));
    this._objCanvas.lineTo(this.x(x1), this.y(0));
    this._objCanvas.stroke();
    this._objCanvas.moveTo(this.x(0), this.y(y0));
    this._objCanvas.lineTo(this.x(0), this.y(y1));
    this._objCanvas.stroke();
    this._objCanvas.beginPath();
    this._objCanvas.arc(this.x(0), this.y(0), 318, 0, 2 * Math.PI); //.arc(x,y,2,1); //hardcoded!
    this._objCanvas.stroke();
  }

  drawSegment(c1, c2, strColor) {
    this._objCanvas.beginPath();
    this._objCanvas.lineWidth = "0.5";
    this._objCanvas.strokeStyle = strColor;
    this._objCanvas.moveTo(this.x(c1.x), this.y(c1.y));
    this._objCanvas.lineTo(this.x(c2.x), this.y(c2.y));
    this._objCanvas.stroke();
  }
  //-----------------------------------------------------------------------------------
  // properties
  //--- pass canvas ctx object
  /**
   * @param {any} obj
   */
  set objCanvas(obj) {
    this._objCanvas = obj;
  }
  //-------------------------
}

//***********************************************************
function plot(x, y) {
  //x,y are canvas coordinates
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(x, y, 2, 0, 2 * Math.PI); //.arc(x,y,2,1);
  ctx.fill();
}
//-------------------------------------------
function draw(c) {
  ctx.beginPath();
  ctx.lineWidth = "0.5";
  ctx.moveTo(px(0), py(0));
  ctx.lineTo(px(c.x), py(c.y));
  ctx.stroke();

  //tip
  plot(px(c.x), py(c.y));
}
//----------------------------------------------
