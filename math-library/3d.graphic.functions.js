//------------------------------------------------
function drawPavement(res) {

  reMap.lineWidth = 0.5;
  var z1 = (x1 + y1) / 2;

  //full horizontal pavement
  //lines parallel to y axe
  for (var x = x0; x <= x1; x = x + (x1 - x0) / res) {
    var t1 = ct(x, y0, 0);
    var t2 = ct(x, y1, 0);
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "grey");
  }
  //lines parallel to x axe
  for (var y = y0; y <= y1; y = y + (y1 - y0) / res) {
    var t1 = ct(x0, y, 0);
    var t2 = ct(x1, y, 0);
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "grey");
  }

  //vertical pavement, passing by origin (can be improved by passing per mid of range?)   

  //--- vertical lines along x axe
  for (var x = 0; x <= x1; x = x + 2 * (x1) / res) {
    var t1 = ct(x, 0, 0);
    var t2 = ct(x, 0, z1);
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "red");
  }
  // --- vertical lines along y axe   
  for (var y = 0; y <= y1; y = y + 2 * (y1) / res) {
    var t1 = ct(0, y, 0);
    var t2 = ct(0, y, z1);
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "red");
  }
  // -- horizontal lines parallel to x axis    
  for (var z = 0; z <= z1; z = z + 2 * (z1) / res) {
    var t1 = ct(0, 0, z);
    var t2 = ct(0, y1, z);
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "red");
  }
  // -- horizontal lines parallel to y axis    
  for (var z = 0; z <= z1; z = z + 2 * (z1) / res) {
    var t1 = ct(0, 0, z);
    var t2 = ct(x1, 0, z);
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "red");
  }


}
//----------------------------------------------------------------
function draw3Daxis(res){

      reMap.lineWidth = 0.5;
      var z1 = (x1 + y1) / 2;

    //axes in blue, longer than range
    var t1 = ct(x0 * (1 + 2 / res), 0, 0);
    var t2 = ct(x1 * (1 + 2 / res), 0, 0);
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "blue");
    var t1 = ct(0, y0 * (1 + 2 / res), 0);
    var t2 = ct(0, y1 * (1 + 2 / res), 0);
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "blue");
    var t1 = ct(0, 0, -z1 * (1 + 2 / res));
    var t2 = ct(0, 0, z1 * (1 + 2 / res));
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "blue");  
  
    arrowHead(x1 * (1 + 2 / res), 0, 0, 1 / 2 * (x1 - x0) / gridRes); //x
    arrowHead(0, y1 * (1 + 2 / res), 0, 1 / 2 * (y1 - y0) / gridRes); //y 
    arrowHead(0, 0, z1 * (1 + 2 / res), 1 / 2 * (x1 - x0) / gridRes); //z   

}
//----------------------------------------------------------------
function arrowHead(x, y, z, arrLength) {
  const kr = (x) => (x!=0?1:0);
  const h=arrLength/3;
  reMap.lineWidth = 1;
    var t1 = ct(x, y, z);
    var t2 = ct(x - kr(x) * arrLength - kr(z+y) * h,y-kr(y)*arrLength-kr(x)* h, z - kr(z) * arrLength);
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "black");
    var t2 = ct(x - kr(x) * arrLength + kr(z+y) * h,y-kr(y)*arrLength+kr(x)* h , z - kr(z) * arrLength);
    reMap.drawSegment(c(t1.x, t1.y), c(t2.x, t2.y), "black");
}


