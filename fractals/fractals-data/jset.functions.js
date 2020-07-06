function julias(z,k){

  const i=new c(0,1);

  return {
    classic: {
      x: s(p(z, z), k).x,
      y: s(p(z, z), k).y,
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
      x: s(p(z, p(z, z)), k).x,
      y: s(p(z, p(z, z)), k).y,
      label: "classic Zn+1=Zn^3+k",
    },
    
    sinjulia: {
      c: p(sin(z), k),
      x: p(sin(z), k).x,
      y: p(sin(z), k).y,
    },

    cosjulia: {
      c: p(cos(z), p(k,i)),
      x: p(cos(z), p(k,i)).x,
      y: p(cos(z), p(k,i)).y,
    },    
  }



}
