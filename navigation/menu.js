/*
WIP
this can be a page containing menu/navigation global variables
in form of an object/json file
*/

var navigation = {
  "home":{
     "id":"home",
     "link":"https://chefpino.github.io/fun/",
     "label":"HOME",
     "hasChildren":true,
     "children":{
                 "item1":"fractals",
                 "item2":"plotmathfunctions"
                },
     "visible":true 
     },
        "fractals":{
          "id":"fractals",
          "link":"https://chefpino.github.io/fun/fractals/",
          "label":"FRACTALS",
          "hasChildren":true,
          "children":{
            "item1":"mandelbrot",
            "item2":"burningship",
            "item3":"tree"
          }
        },
              "mandelbrot":{
                "id":"mandelbrot",
                "link":"https://chefpino.github.io/fun/fractals/mandelbrot/index.html",
                "label":"MANDELBROT",
                "hasChildren":false
              },
              "burningship":{
                "id":"burningship",
                "link":"https://chefpino.github.io/fun/fractals/burningship/index.html",
                "label":"BURNING SHIP",
                "hasChildren":false
              },
              "tree":{
                "id":"tree",
                "link":"https://chefpino.github.io/fun/fractals/tree/index.html",
                "label":"TREE",
                "hasChildren":false
              },

        "plotmathfunctions":{
          "id":"plotmathfunctions",
          "link":"https://chefpino.github.io/fun/plothmathfunctions/",
          "label":"PLOT FUNCTIONS",
          "hasChildren":false
        }

}

//----------------------------------------------------------------------------------

function genMenu(strKey,nestinglevel){

  var strTemp="";
  var oChildren; //object containing children
  var strTempKey="";

  //temporary solution for display only, will improve later
 
  strTemp=  '<a href="'+ navigation[strKey].link + '">'; 
  strTemp += navigation[strKey].label; //label only
  strTemp += '</a>';

  if (navigation[strKey].hasChildren==true){

    //if it has children list them here
    oChildren=navigation[strKey].children;

    for (const property in oChildren) {

      strTempKey=oChildren[property];
      strTemp += tirets(nestinglevel+1) + genMenu(strTempKey,nestinglevel+1); //used to be <BR>+

    }
  }

  return strTemp;

}
//-----------------------------------------
function tirets(n) {
  return "-".repeat(2*n);
}





