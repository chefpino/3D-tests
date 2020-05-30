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
      return {
          x: c1.x*c2.x - c1.y*c2.y,
          y: c1.x*c2.y + c1.y*c2.x         
        }
    }
//______________________________________________________
   // -- sum of a+ib, c+id ---
    function s(c1,c2) {
      return {
          x: c1.x + c2.x,
          y: c1.y + c2.y          
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