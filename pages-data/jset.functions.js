function julias(z,k){

  const i=new c(0,1);
  const a=new c(k.x,0);
  const b=new c(0,k.y);

  return {
    classic: {
      c: s(p(z, z), k),
      label: "classic Zn+1=Zn^2+k",
      examples: {
        ex1: {
          x: 0,
          y: 0,
          label: "0 + i0",
        },
        ex2: {
          x: 1,
          y: 1,
          label: "1 + i1"
        },
      }, 
    },
    cube: {
      c: s(p(z, p(z, z)), k),
      label: "classic Zn+1=Zn^3+k",
    },
    poly: {
      c: s(s(exp(z,3),p(-3,p(exp(a,2),z))), b),
      label: "polynomial Zn+1=Zn^3-3a^2z+b",
    },
    
    sinjulia: {
      c: p(sin(z), k),
    },

    cosjulia: {
      c: p(cos(z), p(k,i)),
    },    

  }



}

//f(z)=z3−3a2z+b 
