//--- obj complex number
function c(x,y) {
  return {
          x: x,
          y: y
        }
} 
//______________________________________________________

    // -- product of a+ib, c+id ---
    function p(c1,c2) {

      const tc1 = (typeof(c1)=="object")?c1:new c(c1,0);
      const tc2 = (typeof(c2)=="object")?c2:new c(c2,0);
      
      return {
          x: tc1.x*tc2.x - tc1.y*tc2.y,
          y: tc1.x*tc2.y + tc1.y*tc2.x         
        }
    }

 //___________________________
 //for polynomial exponents ---
 function exp(c,n){
   
   var tempC=c;
   for (let index = 1; index < n; index++) {
    tempC=p(tempC,c);     
   }
   
   return tempC;

 } 
//______________________________________________________
   // -- sum of a+ib, c+id ---
    function s(c1,c2) {

      const tc1 = (typeof(c1)=="object")?c1:new c(c1,0);
      const tc2 = (typeof(c2)=="object")?c2:new c(c2,0);

      return {
          x: tc1.x + tc2.x,
          y: tc1.y + tc2.y          
        }
    }
//______________________________________________________
   // -- module, θ --
   function m(c) {
      return { 
          z: Math.sqrt(c.x*c.x+c.y*c.y),
          theta: Math.atan(c.y/c.x) + ( (c.x>0)?0:Math.PI ) 
       }
   }  
//______________________________________________________
  // -- rotations θ
  // input module and angle, returns couple x, y => (x+iy)
    function r(z,theta){
            return {
          x: z*Math.cos(theta),
          y: z*Math.sin(theta)          
        }
    }
  //__________________________________________________________
  //inverse
  function inv(c){
    var d=c.x*c.x+c.y*c.y;
    return {
       x: c.x/d,
       y: -1 * c.y/d 
    }
  }
  //_________________________________________________________
  //sin
  function sin(c) {
    return {
      x: Math.sin(c.x) * Math.cosh(c.y),
      y: Math.cos(c.x) * Math.sinh(c.y),
    };
  }
  //___________________________________________________________
  //cos(a+bi)=cosacoshb−isinasinhb
  function cos(c){

     return {
      x: Math.cos(c.x) * Math.cos(c.y),
      y: Math.sin(c.x) * Math.sinh(c.y)
     }

  }