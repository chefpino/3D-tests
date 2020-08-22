var navigation = {
  origin: {
    id: "origin",
    link: "https://chefpino.github.io/fun/",
    label: "origin (w.i.p.)",
    hasChildren: true,
    children: {
      item1: "home",
      item2: "about"
    },
    visible: true,
  },
  home: {
    id: "home",
    link: "https://chefpino.github.io/fun/",
    label: "HOME",
    hasChildren: true,
    children: {
      item1: "fractals",
      item2: "plotmathfunctions",
    },
    visible: true,
  },
  fractals: {
    id: "fractals",
    link: "#",
    label: "FRACTALS",
    hasChildren: true,
    children: {
      item1: "mandelbrot",
      item2: "julia",
      item3: "burningship",
      item4: "tree",
      item5: "barnsley",
    },
  },
  mandelbrot: {
    id: "mandelbrot",
    link: "../../fractals/mandelbrot/index.html",
    label: "Mandelbrot",
    hasChildren: false,
    content:
        "Fractal equation: Zn+1=(Zn)^exp + C.<br>Click on the fractal to zoom.<br>The red vectors that follow the mouse pointer represent the path of the fractal function that either converges to a finite point or escapes to infinite.",
    equationImg: "equation.mandelbrot.gif", 
      },
  julia: {
    id: "julia",
    link: "../../fractals/julia/index.html",
    label: "Julia",
    hasChildren: true,
    children: {
          item1: "extendedjuliasets",
    },
    content:
      "Click on the fractal to zoom.<br>The red vectors that follow the mouse pointer represent the path of the fractal function that either converges to a finite point or escapes to infinite.",
  },
  extendedjuliasets: {
    id: "extendedjuliasets",
    link: "../../fractals/julia/extendedjuliasets.html",
    label: "Extended",
    hasChildren: false,
    content:
      "Click on the fractal to zoom.<br>The red vectors that follow the mouse pointer represent the path of the fractal function that either converges to a finite point or escapes to infinite.",
  },
   
  burningship: {
    id: "burningship",
    link: "../../fractals/burningship/index.html",
    label: "Burning Ship",
    hasChildren: false,
    content: "Click on the fractal to zoom.",
  },
  tree: {
    id: "tree",
    link: "../../fractals/tree/index.html",
    label: "Tree",
    hasChildren: false,
    content: "Change the parameters to generate different fractal trees.",
  },
  barnsley: {
    id: "barnsley",
    link: "../../fractals/barnsley/index.html",
    label: "Barnsley Fern",
    hasChildren: false,
    content: "Change the parameter to increase number of points.",
  },
  unitcircle: {
    id: "unitcircle",
    link: "../../plotmathfunctions/unitcircle/index.html",
    label: "C -> C (z -> z^2)",
    hasChildren: false,
    content: "Unit circle is divided into n points,<br>the complex function f(z)=z^2 is applied to each point.",
  },
  modules: {
    id: "modules",
    link: "../../plotmathfunctions/unitcircle/modules.html",
    label: "C -> C (Modules)",
    hasChildren: false,
    content: "Unit circle is divided into n points,<br>point k is connected to point (k * factor) mod n.",
  },

  plotmathfunctions: {
    id: "plotmathfunctions",
    link: "#",
    label: "FUNCTIONS",
    hasChildren: true,
    children: {
      item0: "R1R1",
      item1: "RC",
      item2: "RR3",
      item3: "R2R",
      item4: "R2R3",
      item5: "complex",
      item6: "unitcircle",
      item7: "modules",
    },
  },
  R1R1: {
    id: "R1R1",
    link: "../../plotmathfunctions/2d/index.html",
    label: "R -> R",
    hasChildren: false,
    content: "Click on the graph to zoom. Page under construction",
  },
  R2R: {
    id: "R2R",
    link: "../../plotmathfunctions/3d/3d-R2toR-q.html",
    label: "R2 -> R (quaternions)",
    hasChildren: true,
    children: {item0: "R2Rm"},
    content: "rotations obtained with QUATERNIONS",
  },
  R2Rm: {
    id: "R2Rm",
    link: "../../plotmathfunctions/3d/3d-R2toR-m.html",
    label: "R2 -> R (matrices)",
    hasChildren: false,
    content: "rotations obtained with MATRICES",
  },
  complex: {
    id: "complex",
    link: "../../plotmathfunctions/rotations/index.html",
    label: "C -> C (Rotations)",
    hasChildren: false,
    content:
      "Click on the complex plane to draw a polygon.<br>Double click to choose a vector.<br>Apply a rotation or a translation.<br>Auto applies the rotation until polygon becomes smaller than a pixel or larger than the canvas.",
  },
  RC: {
    id: "RC",
    link: "../../plotmathfunctions/polar/index.html",
    label: "R -> C",
        hasChildren: false,
    content:
      "Plot functions from R to C",
  },
  RR3: {
    id: "RR3",
    link: "../../plotmathfunctions/3d/3d-R1toR3.html",
    label: "R -> R3",
    hasChildren: false,
    content:
    "the R1 interval [t0, t1]is plotted<br>in R3 through 3 R1 ->R1 functions.",
  },
  R2R3: {
    id: "R2R3",
    link: "../../plotmathfunctions/3d/3d-R2toR3.html",
    label: "R2 -> R3",
    hasChildren: false,
    content:
      "the R2 domain [t1 inf, t1 sup]x[t2 inf, t2 sup] is plotted<br>in R3 through 3 R2->R1 functions.",
  },
};
//-------------------------------------------
// -- this is a recursive function to generate a vertical menu, it can be improved
function genMenu(strKey, nestinglevel, strCurrentPage) {


  const highlighted=(strCurrentPage == strKey);
  var strTemp = (nestinglevel == 0) ? "<table class='navmenu'>" : "";
  var oChildren; //object containing children

  var strLabel = navigation[strKey].label;
  var strLink = navigation[strKey].link;

  //highlight if current page (puts it in bold, but can be improved)
  if (highlighted) {
    strLabel = "<b style='background-color:#AAAAAA'>" + strLabel + "</b>";
  }

  //if it's a link add link tags
  if (navigation[strKey].link != "#") {
    strLabel = '<a href="' + strLink + '">' + strLabel + "</a>";
  }

  strTemp =
    strTemp + "<tr><td>" + indent(nestinglevel,false) + strLabel + "</td></tr>";

  if (navigation[strKey].hasChildren == true) {
    //if it has children list them here
    oChildren = navigation[strKey].children;

    for (const property in oChildren) {
      strTempKey = oChildren[property];
      //strTemp += "<tr><td>";
      strTemp += genMenu(strTempKey, nestinglevel + 1, strCurrentPage); //used to be <BR>+
      //strTemp += genMenu(strTempKey, nestinglevel + 1,strCurrentPage); //used to be <BR>+
      //strTemp += "</td></tr>";
    }
  }
  strTemp += nestinglevel == 0 ? "</table>" : "";
  return strTemp;
}
//-------------------------------------------
//horizontal menu - work in progress

function genHMenu(strKey, nestinglevel, strCurrentPage) {

  var strTemp = (nestinglevel == 0) ? "<table width=100% class='navmenu'><tr>" : "";
  var oChildren; //object containing children

  var strLabel = navigation[strKey].label;
  var strLink = navigation[strKey].link;

  const highlighted=(strCurrentPage == strKey);

  //highlight if current page (puts it in bold, but can be improved)
  if (highlighted) {
    strLabel = "<b style='background-color:#AAAAAA'>" + strLabel + "</b>";
  }

  //if it's a link add link tags
  if (navigation[strKey].link != "#") {
    strLabel = '<a href="' + strLink + '">' + strLabel + "</a>";
  }

  strTemp += ((nestinglevel<2) ? "<td valign=top>":"") + indent(nestinglevel,highlighted) + strLabel; //+ "</td>"  

  if (navigation[strKey].hasChildren == true) {
    //if it has children list them here
    oChildren = navigation[strKey].children;

    for (const property in oChildren) {
      strTempKey = oChildren[property];
      strTemp +=  ((nestinglevel>0)?"<br/>":"") + genHMenu(strTempKey, nestinglevel + 1, strCurrentPage);// : genMenu(strTempKey, nestinglevel + 1, strCurrentPage);
    }
  }
  strTemp += ((nestinglevel < 2) ? "</td>":"");
  strTemp += ((nestinglevel==0) ? "</tr></table>":"");
  return strTemp;
}
//------------------------------
function genNavigation(strCurrentPage, isHorizontal) {
  
  if(!isHorizontal){
  document.getElementById("menu").innerHTML = genMenu(
    "home",
    0,
    strCurrentPage
  ); //add navigation
  }
  if(isHorizontal){
  document.getElementById("menu").innerHTML = genHMenu(
    "home",
    0,
    strCurrentPage
  ); //add navigation
  }
  
  var equationImg=navigation[strCurrentPage].equationImg;
  equationImg=(equationImg==undefined) ? "":"https://chefpino.github.io/fun/imgs/equations/" + equationImg;

  document.title = navigation[strCurrentPage].label;
  document.getElementById("content").innerHTML =
    ((equationImg!="")?`<img src="${equationImg}"><br>`:"") + 
    navigation[strCurrentPage].content;
}

//-----------------------------------------
// just spaces for indentation
function indent(n,highlighted) {
  return (highlighted ? "<b>":"") + 
          "&#10052;" +
          "&nbsp;".repeat(n) + 
          (highlighted ? "</b>":"");
}
