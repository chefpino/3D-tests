/**
 * 
 * function init() {
        generateControls();
        fileToParameters(); //initiate event listener for file uploader
        loadvaluesandgo(); // WIP !
      }
      //-------------------------------------------------

      function loadvaluesandgo() {
        //go! button
        load params statements
        plot functions
        drawAxis() if any
      }
 * 
 * 
 * 
 * this library is used also outside of the fractals folder
 */
//----------------------------------------------------------------------------------
function generateControls() {
  const strFilename = "'parameters.txt'"; //name of the file containing parameters to save

  const tr = "<tr>";
  const trc = "</tr>";

  var defaultValue = 0;
  var strHTML = '<table style="border: 1px solid black;">';
  strHTML += tr;
  strHTML += td("<b>Parameter</b>");
  strHTML += td("<b>Mix</b>");
  strHTML += td("<b>Select</b>");
  strHTML += td("<b>Max</b>");
  strHTML += td("<b>Current</b>");
  strHTML += trc;

  //---generate html
  for (var key in params) {
    defaultValue = paramToSlider(key, params[key].default);

    strHTML = strHTML + tr;
    strHTML = strHTML + td(params[key].label);
    strHTML = strHTML + td(params[key].minLabel);
    strHTML =
      strHTML +
      td(
        "<input type='range' min='0' max='100' value='" +
          defaultValue +
          "' id='" +
          key +
          "' onchange='updateParam(this.id)' >"
      );
    strHTML = strHTML + td(params[key].maxLabel);
    strHTML =
      strHTML +
      td("<div id='val_" + key + "'><b>" + params[key].default + "</b></div>");
    strHTML = strHTML + trc;
  }
  strHTML = strHTML + "<tr><td colspan=5>";
  strHTML = strHTML + '<button onclick="loadvaluesandgo();">GO!</button>&nbsp';
  strHTML =
    strHTML +
    '<button onclick="return download(' +
    strFilename +
    ',parametersToJSON());">Save</button>&nbsp';
  strHTML =
    strHTML + '<input type="file" name="inputfile" id="inputfile"></input>';
  strHTML = strHTML + "</td></tr>";
  strHTML = strHTML + "</table>";
  document.getElementById("dynamicSliders").innerHTML = strHTML;

  //--- assign default value to sliders
  //this is a bit redundant but it works around some rounding up happening
  //with the sliderToParam function
  //loadDefaults();
}
//----------------------------------------------------------------------------------
function loadDefaults() {
  // load all default values
  for (var key in params) {
    defaultValue = paramToSlider(key, params[key].default);
    document.getElementById(key).value = defaultValue;
    document.getElementById("val_" + key).innerHTML = params[key].default;
  }
}
//----------------------------------------------------------------------------------
//this f updates an existing <div id=val_x> with the value taken from the corresponding slider
//and most important updates value in the params object!
function updateParam(x) {
  var iTemp = 1 * document.getElementById(x).value;
  params[x].val = sliderToParam(x, iTemp);
  //console.log(params[x].val);
  document.getElementById("val_" + x).innerHTML = params[x].val;
}
//----------------------------------------------------------------------------------
//these functions map the 0-100 value of a slider to a given range for a
//given parameter and viceversa

function paramToSlider(strParam, iValue) {
  var x1 = 1 * params[strParam].min;
  var x2 = 1 * params[strParam].max;
  return Math.round((100 * (1 * iValue - x1)) / (x2 - x1));
}

function sliderToParam(strParam, iValue) {
  var x1 = 1 * params[strParam].min;
  var x2 = 1 * params[strParam].max;
  var iTemp = x1 + (iValue * (x2 - x1)) / 100;
  if (params[strParam].integer) {
    iTemp = Math.round(iTemp);
  }
  return iTemp;
}
//------------------------------------------------------------------------------------

// TO SAVE PARAMETERS TO A FILE
//--- this function creates a temporary a element, clicks on it and then removes it from
//    the page
//    <button onclick="return download('json-text.txt',strJSONtext);">SAVE</button>
// will have to enhance by adding a JSONfied string of all the current params values

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename); //download attribute, saves when clicked
  element.style.display = "none"; //invisible
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
//---------------------------------------------------------------------------------

/* TO LOAD PARAMETERS FROM A FILE
<input type="file" name="inputfile" id="inputfile"> 
*/

function fileToParameters() {
  document.getElementById("inputfile").addEventListener("change", function () {
    var fr = new FileReader();
    fr.onload = function () {
      //document.getElementById('output').textContent=fr.result; //for debug only
      console.log(fr.result); //for debug only
      //var foo=JSON.parse(fr.result);//for debug only
      readJSONfile(fr);
    };
    fr.readAsText(this.files[0]);
  });
}
//--- string of parameters generated dynamically --------------------------------------
function parametersToJSON() {
  var rTemp = 0;
  var strTemp = "{";
  for (var key in params) {
    //WIP need to collect value from sliders as innerhtml has tags in it

    rTemp = document.getElementById(key).value;
    strTemp += '"' + key + '":' + sliderToParam(key, rTemp) + ",";
  }
  //remove last comma
  strTemp = strTemp.substring(0, strTemp.length - 1);
  strTemp += "}";
  return strTemp;
}
//-------------------------------------------------------------------------------------_
function readJSONfile(tempReader) {
  //WIP
  //tempReader is an object, the .result method contains the file

  var rTemp = 0; //real number, value of parameter
  var tempJSONobj = JSON.parse(tempReader.result);

  for (var key in params) {
    rTemp = tempJSONobj[key];
    //assign values to params
    params[key].val = rTemp;

    //move sliders
    document.getElementById(key).value = paramToSlider(key, rTemp);

    //update box on the right of the slider, current value of parameter
    updateParam(key, rTemp);
  }
  /* for debug
   document.getElementById('output').textContent=strTemp; 
   */
}
//-----------------------------------------------------------------
function td(x) {
  return "<td style='border: 1px solid black;'>" + x + "</td>";
}