function julias(z,k){

  const i=new c(0,1);

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
    
    sinjulia: {
      c: p(sin(z), k),
    },

    cosjulia: {
      c: p(cos(z), p(k,i)),
    },    

    functionslist: {
     
      f1: "classic",
      f2: "cube",
      f3: "sinjulia",
      f4: "cosjulia",

    }


  }



}
