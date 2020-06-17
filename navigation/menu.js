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
    label: "HOME (Work In Progress)",
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
      item6: "unitcircle",
    },
  },
  mandelbrot: {
    id: "mandelbrot",
    link: "../../fractals/mandelbrot/index.html",
    label: "MANDELBROT",
    hasChildren: false,
    content: "Click on the fractal to zoom.<br>The red vectors that follow the mouse pointer represent the path of the fractal function that either converges to a finite point or escapes to infinite."
  },
  julia: {
    id: "julia",
    link: "../../fractals/julia/index.html",
    label: "JULIA",
    hasChildren: false,
    content: "Click on the fractal to zoom.<br>The red vectors that follow the mouse pointer represent the path of the fractal function that either converges to a finite point or escapes to infinite."
  },
  burningship: {
    id: "burningship",
    link: "../../fractals/burningship/index.html",
    label: "BURNING SHIP",
    hasChildren: false,
    content: "Click on the fractal to zoom.<br>The red vectors that follow the mouse pointer represent the path of the fractal function that either converges to a finite point or escapes to infinite."
  },
  tree: {
    id: "tree",
    link: "../../fractals/tree/index.html",
    label: "TREE",
    hasChildren: false,
    content: "Change the parameters to generate different fractal trees."
  },
  barnsley: {
    id: "barnsley",
    link: "../../fractals/barnsley/index.html",
    label: "BARNSLEY",
    hasChildren: false,
    content: "Change the parameter to increase number of points."
  },
  unitcircle: {
    id: "unitcircle",
    link: "../../fractals/unitcircle/index.html",
    label: "UNIT CIRCLE",
    hasChildren: false,
    content: ""
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
    label: "2D (Work In Progress)",
    hasChildren: false,
  },
  threeD: {
    id: "threeD",
    link: "../../plotmathfunctions/3d/index.html",
    label: "3D (Work In Progress)",
    hasChildren: false,
  },
  complex: {
    id: "complex",
    link:
      "../../plotmathfunctions/complexplane/index.html",
    label: "ROTATIONS (Work In Progress)",
    hasChildren: false,
    content: "Click on the complex plane to draw a polygon.<br>Double click to choose a vector.<br>Apply a rotation or a translation.<br>Auto applies the rotation until polygon becomes smaller than a pixel or larger than the canvas."
  },
};

//----------------------------------------------------------------------------------
// -- this is a recursive function to generate the menu, it can be improved
function genMenu(strKey, nestinglevel, strCurrentPage) {
  var strTemp = ((nestinglevel == 0) ? "<table width='50%'>" :  "");
  var oChildren; //object containing children
  

  var strLabel=navigation[strKey].label;
  var strLink=navigation[strKey].link;
  

  //highlight if current page (puts it in bold, but can be improved)
    if (strCurrentPage==strKey){
      strLabel = "<b>" + strLabel + "</b>";
  }
  
  //if it's a link add link tags
  if (navigation[strKey].link!="#"){
    strLabel = '<a href="' + strLink + '">' + strLabel + "</a>"
  }


  strTemp = strTemp + "<tr><td>" + tirets(nestinglevel) + strLabel + "</td></tr>";
  
  if (navigation[strKey].hasChildren == true) {
    //if it has children list them here
    oChildren = navigation[strKey].children;

    for (const property in oChildren) {
      strTempKey = oChildren[property];
      //strTemp += "<tr><td>";
      strTemp += genMenu(strTempKey, nestinglevel + 1,strCurrentPage); //used to be <BR>+
      //strTemp += genMenu(strTempKey, nestinglevel + 1,strCurrentPage); //used to be <BR>+
      //strTemp += "</td></tr>";
    }
  }
  strTemp += ((nestinglevel == 0) ? "</table>" :  "");
  return strTemp;
}

function genNavigation(strCurrentPage) {
  document.getElementById("menu").innerHTML=genMenu("home",0,strCurrentPage); //add navigation
  document.title=navigation[strCurrentPage].label;
  document.getElementById("content").innerHTML = 
    "<b>" + navigation[strCurrentPage].label + "</b><br>" + 
    navigation[strCurrentPage].content;
  
}


//-----------------------------------------
// just spaces for indentation
function tirets(n) {
  return "&nbsp;".repeat(3*n);
}
