/*
WIP
this is a page containing menu/navigation global variables
in form of an object/json file

WIP: class="vertical-menu"
*/

var navigation = {
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
      item5: "unitcircle",
    },
  },
  mandelbrot: {
    id: "mandelbrot",
    link: "../../fractals/mandelbrot/index.html",
    label: "MANDELBROT",
    hasChildren: false,
  },
  julia: {
    id: "julia",
    link: "../../fractals/julia/index.html",
    label: "JULIA (WIP)",
    hasChildren: false,
  },
  burningship: {
    id: "burningship",
    link: "../../fractals/burningship/index.html",
    label: "BURNING SHIP",
    hasChildren: false,
  },
  tree: {
    id: "tree",
    link: "../../fractals/tree/index.html",
    label: "TREE",
    hasChildren: false,
  },
  unitcircle: {
    id: "unitcircle",
    link: "../../fractals/unitcircle/index.html",
    label: "UNIT CIRCLE (WIP)",
    hasChildren: false,
  },
  plotmathfunctions: {
    id: "plotmathfunctions",
    link: "#",
    label: "PLOT FUNCTIONS",
    hasChildren: true,
    children: {
      item1: "twoD",
      item2: "threeD",
      item3: "complex",
    },
  },
  twoD: {
    id: "twoD",
    link: "../../plotmathfunctions/2d/index.html",
    label: "2D (WIP)",
    hasChildren: false,
  },
  threeD: {
    id: "threeD",
    link: "../../plotmathfunctions/3d/index.html",
    label: "3D (WIP)",
    hasChildren: false,
  },
  complex: {
    id: "complex",
    link:
      "../../plotmathfunctions/complexplane/index.html",
    label: "Rotations (WIP)",
    hasChildren: false,
  },
};

//----------------------------------------------------------------------------------
// -- this is a recursive function to generate the menu, it can be improved
function genMenu(strKey, nestinglevel, strCurrentPage) {
  var strTemp = "";
  var oChildren; //object containing children
  var strTempKey = "";

  //temporary solution for display only, will improve later
  strTemp += navigation[strKey].label; //label only
  
  //if it's a link add link tags
  if (navigation[strKey].link!="#"){
      strTemp = '<a href="' + navigation[strKey].link + '">' + strTemp + "</a>"
  }

  //highlight if current page (puts it in bold, but can be improved)
  if (strCurrentPage==strKey){
      strTemp = "<b>" + strTemp + "</b>";
  }


  if (navigation[strKey].hasChildren == true) {
    //if it has children list them here
    oChildren = navigation[strKey].children;

    for (const property in oChildren) {
      strTempKey = oChildren[property];
      strTemp +=
        "<br>" + tirets(nestinglevel + 1) + genMenu(strTempKey, nestinglevel + 1,strCurrentPage); //used to be <BR>+
    }
  }

  return strTemp;
}

function genNavigation(strCurrentPage) {
  document.getElementById("menu").innerHTML=genMenu("home",0,strCurrentPage); //add navigation
  document.title=navigation[strCurrentPage].label;
  
}


//-----------------------------------------
function tirets(n) {
  return "&nbsp;".repeat(2*n);
}
