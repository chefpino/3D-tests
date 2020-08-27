//-------------------------------------------
//juliaExamples in use for classic julia only
var juliaExamples = {
  ex0: {
    label: "-0.54 + 0.54i",
    val: "ex0",
    cx: -0.4,
    cy: 0.6,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250,
  },
  ex1: {
    label: "-0.4 + 0.6i",
    val: "ex1",
    cx: -0.4,
    cy: 0.6,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250,
  },
  ex2: {
    label: "0.285 + 0.01i",
    val: "ex2",
    cx: 0.285,
    cy: 0.01,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250,
  },
  ex3: {
    label: "0.45 + 0.1428i",
    val: "ex3",
    cx: 0.45,
    cy: 0.1428,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250,
  },
  ex4: {
    label: "-0.70176  -0.3842i",
    val: "ex4",
    cx: -0.70176,
    cy: -0.3842,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250,
  },
  ex5: {
    label: "-0.835 - 0.2321i",
    val: "ex5",
    cx: -0.835,
    cy: -0.2321,
    x0: -2,
    x1: 2,
    y0: -2,
    y1: 2,
    iterations: 250,
  },
};
//-------------------------------------------------------------------
function julias(z, k) {

  const i = new c(0, 1);
  const a = new c(k.x, 0);
  const b = new c(0, k.y);

  return {
    classic: {
      c: s(p(z, z), k),
      label: "classic Zn+1=Zn^2+k",
    },
    cube: {
      c: s(p(z, p(z, z)), k),
      label: "classic Zn+1=Zn^3+k",
    },
    poly: {
      c: s(s(exp(z, 3), p(-3, p(exp(a, 2), z))), b),
      label: "polynomial Zn+1=Zn^3-3a^2z+b",
    },
    sinjulia: {
      c: p(complex_sin(z), k),
    },
    cosjulia: {
      c: p(complex_cos(z), p(k, i)),
    },
    test: {
      c: p(s(z,k),z),
    }
  }
}

var dropdowns = {
  dd1: {
    id: "selectFunction",
    ext_label: "function",
    elements: {
      classic: {
        val: "classic",
        label: "classic: Zn+1=(Zn)^2+c",
        examples: {
          ex0: {
            id: "ex0",
            label: "-0.54 + 0.54i",
            val: "ex0",
            cx: -0.4,
            cy: 0.6,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            iterations: 250,
          },
          ex1: {
            id: "ex1",
            label: "-0.4 + 0.6i",
            val: "ex1",
            cx: -0.4,
            cy: 0.6,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            iterations: 250,
          },
          ex2: {
            id: "ex2",
            label: "0.285 + 0.01i",
            val: "ex2",
            cx: 0.285,
            cy: 0.01,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            iterations: 250,
          },
          ex3: {
            id: "ex3",
            label: "0.45 + 0.1428i",
            val: "ex3",
            cx: 0.45,
            cy: 0.1428,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            iterations: 250,
          },
          ex4: {
            id: "ex4",
            label: "-0.70176  -0.3842i",
            val: "ex4",
            cx: -0.70176,
            cy: -0.3842,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            iterations: 250,
          },
          ex5: {
            id: "ex5",
            label: "-0.835 - 0.2321i",
            val: "ex5",
            cx: -0.835,
            cy: -0.2321,
            x0: -2,
            x1: 2,
            y0: -2,
            y1: 2,
            iterations: 250,
          },
                  },
      },    
      cube: {
        val: "cube",
        label: "cube: Zn+1=(Zn)^3+c",
        examples:
           { 
           e1: {
            id: "e1", 
            val: "-0.54 + 0.54i",
            label: "cube ex1, -0.54 + 0.54i",
            cx: -0.54,
            cy: +0.54,
            iterations: 250,
          },
          e2: {
            id: "e2",
            val: "2 + 2i",
            label: "cube ex2",
            cx: 2,
            cy: 2,
            iterations: 250,
          },
        },
      },
      poly: {
        val: "poly",
        label: "polynomial Zn+1=Zn^3-3a^2z+b",
        examples:
           { 
           e1: {
            id: "e1", 
            val: "-0.54 + 0.54i",
            label: "poly ex1",
            cx: 2,
            cy: 2,
            iterations: 250,
          },
          e2: {
            id: "e2",
            val: "-0.54 + 0.54i",
            label: "poly ex2",
            cx: 2,
            cy: 2,
            iterations: 250,
          },
        },
      },
      sinjulia: {
        val: "sinjulia",
        label: "hyperbolic sine Zn+1=c*sinh(Zn)",
        examples:{ 
            e1: {
            id: "e1",  
            val: "-0.54 + 0.54i",
            label: "sinj ex1",
            cx: 2,
            cy: 2,
            iterations: 250,
          },
          e2:{
            id: "e2",
            val: "-0.54 + 0.54i",
            label: "sinj ex2",
            cx: 2,
            cy: 2,
            iterations: 250,
          },
        },
      },
      cosjulia: {
        val: "cosjulia",
        label: "hyperbolic cosine Zn+1=i*c*cosh(Zn)",
        examples: {
            e1:       {
            id: "e1",  
            val: "-0.54 + 0.54i",
            label: "cosj ex1",
            cx: 2,
            cy: 2,
            iterations: 250,
          },
          e2:
          { id: "e2",
            val: "-0.54 + 0.54i",
            label: "cosj ex2",
            cx: 2,
            cy: 2,
            iterations: 250,
          },
        },
      },
      test: {
        val: "test",
        label: "test z^2-1",
        examples: {
            e1:       {
            id: "e1",  
            val: "test",
            label: "test",
            cx: 0,
            cy: 0,
            iterations: 250,
          },
        },
      },
    },
    selected: "classic",
  }
}
