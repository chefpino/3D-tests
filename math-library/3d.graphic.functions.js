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
//------------------------------------------------