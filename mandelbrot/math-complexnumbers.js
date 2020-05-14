//______________________________________________________
//--- obj complex number
function c(x,y) {
  return {
          x: x,
          y: y,
          m: Math.sqrt(x*x+y*y),
          θ: Math.atan(y/x)                    
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
          θ: Math.atan(c.y/c.x)
       }
   }  
//______________________________________________________
  // -- rotations θ
  // input module and angle, returns couple x, y => (x+iy)
    function r(z,θ){
            return {
          x: z*Math.cos(θ),
          y: z*Math.sin(θ)          
        }
    }
  //__________________________________________________________