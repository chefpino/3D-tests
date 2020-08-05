/* 
 * this library is used also outside of the fractals folder
 */
//---- Generates Sliders Only -------------------------------------------------
function generateControls() {
  const strFilename = "'parameters.txt'"; //name of the file containing parameters to save

  const tr = "<tr>";
  const trc = "</tr>";

  var defaultValue = 0;
  var steps=100; //resolution of the slider 
  var min, max, step;
  var controlType="";
  var goButton=params.goButton.show; //boolean, show yes/no
      goButton=(typeof(goButton)=="undefined" ? true : goButton);  

  var strHTML = '<table style="border: 1px solid black;">';
  strHTML += tr;

  strHTML += "<td colspan=6 align=left><b>Parameters</b></td>";
  /*
  strHTML += td("<b>Min</b>");
  strHTML += td("<b>Select</b>");
  strHTML += td("<b>Max</b>");
  strHTML += td("<b>Current</b>");
  strHTML += td("<b>+/-</b>");
  */
  strHTML += trc;

  //---generate html
  for (var key in params) {

    if (params[key].visible != false){

    defaultValue = 1 * params[key].default;
    min = params[key].min;
    max = params[key].max;
    steps=params[key].steps;
    steps=(typeof(steps)=='undefined' ? 100:steps);
    step = (max-min)/steps;
    step=(params[key].integer==true? 1 : step);
    var recalc=(params[key].recalc == true ? "loadvaluesandgo();" : "");
    controlType = (typeof(params[key].controlType) == "undefined" ? "range" : params[key].controlType);
    
    
    strHTML = strHTML + tr;
    strHTML = strHTML + td(params[key].label);
    
    switch (controlType){

     case "range":

          strHTML = strHTML + td(params[key].minLabel);

          strHTML =
          strHTML +
          td(
            `<input type='range' min='${min}' max='${max}' step='${step}' value='` +
              defaultValue +
              "' id='" +
              key +
              `' onchange='updateParam(this.id);${recalc}' >`
          );
          strHTML = strHTML + td(params[key].maxLabel);
          strHTML += td(`<a href="#" onclick="upAndDown('${key}',1);">+</a><br><a href="#" onclick="upAndDown('${key}',-1);">-</a>`);
          strHTML +=
          td(`<div id="val_${key}">${Math.round(params[key].default*1000)/1000}</div>`);
          break;
          
      case "checkbox":

        strHTML += td(""); //no minLabel
        strHTML =
        strHTML +
        td(
          `<input type='checkbox' value='` +
            defaultValue + "'" + 
            `${(defaultValue != 0) ? " checked " : " "} ` +  
            " id='" +
            key +
            `' onchange='updateParam(this.id);${recalc}' >`
        );
        strHTML += td(""); //no maxLabel
        strHTML +=  td(`<div id="val_${key}">${(params[key].default==params[key].min?params[key].minLabel:params[key].maxLabel)}</div>`);
        strHTML += td("");
        break;

    }
    strHTML = strHTML + trc;
    } // - end if visible ;
  }
  strHTML = strHTML + "<tr><td colspan=6>";
  if (goButton){
      strHTML = strHTML + '<button onclick="loadvaluesandgo();">go!</button>&nbsp';
  }
  strHTML =
    strHTML +
    '<button onclick="return download(' +
    strFilename +
    ',parametersToJSON());">save</button>&nbsp';
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

function upAndDown(strKey,j){
   //j is -1 or +1
   // needs better calculations especially with rounding of values and integers
  var steps = params[strKey].steps;
  var min = params[strKey].min;
  var max = params[strKey].max;
  var currentVal=params[strKey].val;
  steps = (typeof(steps) == 'undefined' ? 100 : steps);
  var step = (max-min)/steps;
  step = j * (params[strKey].integer==true? 1 : step);
  currentVal = currentVal+step;
  currentVal = (currentVal < min) ? min : currentVal;
  currentVal = (currentVal > max) ? max : currentVal;

  document.getElementById(strKey).value = currentVal;

  //update param function?
  

  params[strKey].val=currentVal;
  document.getElementById("val_" + strKey).innerHTML = Math.round(currentVal*1000)/1000;

  //if recalc is true reload with new values
  if (params[strKey].recalc == true){
    loadvaluesandgo();
  }





}



//----------------------------------------------------------------------------------
function loadValues_() {
  // load all values from params object and updates sliders+interface
  var tempVal;
  for (var key in params) {
    var tempVal = params[key].val;
    if (params[key].visible != false){
        document.getElementById(key).value = tempVal;
        document.getElementById("val_" + key).innerHTML = Math.round(params[x].val*1000)/1000;
    }
  }
}
//----------------------------------------------------------------------------------
//this f updates an existing <div id=val_x> with the value taken from the corresponding slider
//and most important updates value in the params object!
function updateParam(x) {
  var controlType=document.getElementById(x).type;
  var iTemp;
  switch (controlType){
    case "range":
          iTemp = 1 * document.getElementById(x).value;
          document.getElementById("val_" + x).innerHTML = (Math.round(iTemp*1000)/1000);
          break;
    case "checkbox":      
          iTemp = document.getElementById(x).checked? 1 : 0;
          document.getElementById("val_" + x).innerHTML = (iTemp==0?params[x].minLabel:params[x].maxLabel);
          break;
  }
  params[x].val = iTemp;
  
}
//----------------------------------------------------------------------------------
//these functions map the 0-100 value of a slider to a given range for a
//given parameter and viceversa
//default 100 value can be specified in object values as steps: xy

function paramToSlider(strParam, iValue) {
  var x1 = 1 * params[strParam].min;
  var x2 = 1 * params[strParam].max;
  var steps = params[strParam].steps;
  steps=(typeof(steps)=="undefined" ? 100: 1* steps);  //default resolution is 100 steps
  return Math.round((steps * (1 * iValue - x1)) / (x2 - x1));
}

function sliderToParam(strParam, iValue) {
  var x1 = 1 * params[strParam].min;
  var x2 = 1 * params[strParam].max;
  var steps = params[strParam].steps;
  steps=(typeof(steps)=="undefined" ? 100: 1* steps); //default resolution is 100 steps
  var iTemp = x1 + (iValue * (x2 - x1)) / steps;
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
      readJSONfile(fr);
    };
    fr.readAsText(this.files[0]);
  });
} 
//--- string of parameters generated dynamically --------------------------------------
function parametersToJSON() {
  var strTemp = "{";
  for (var key in params) {
    
   strTemp += `"${key}":${params[key].val}`;
   strTemp += ",";  
    

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
    
    if (params[key].visible != false){
      //move sliders
      document.getElementById(key).value = rTemp;
    
      //update box on the right of the slider, current value of parameter
      updateParam(key, rTemp);
    }
  }
}
//-----------------------------------------------------------------
function td(x) {
  return "<td align=center style='border: 1px solid black;'>" + x + "</td>";
}
//===========================================================================
// section dedicated to dropdown menus.

//-------------------------------------------------
function getDropDownSelectedValue(strID){
  var e = document.getElementById(strID);
  return e.options[e.selectedIndex].value;
}

//--- more elaborate drop down generator and values retrievers
//---------------------------------------------------------------------------         
function genDropDownFromObj(id,label,value,selected,obj) {

  var strTemp = `<select id="${id}" name="${id}">`;

  for (const property in obj) {
    strTemp += `<option value="${obj[property][value]}" `;
    strTemp += obj[property].val == selected ? "selected" : "";
    strTemp += ">";
    strTemp += obj[property][label] + "</option>";
  }
  strTemp += "</select>";     

  return strTemp;   
  
  }
//----------------------------------------------------------------------------
  function dropDownToObj(dd_id,src_obj,arr_keys){

    var e = document.getElementById(dd_id);
    var selectedvalue=e.options[e.selectedIndex].value;
    var retObj={};

    for (let index = 0; index < arr_keys.length; index++) {

      retObj[arr_keys[index]]=src_obj[selectedvalue][arr_keys[index]];

    }

    //window.alert(strTemp);
    return retObj;

  }
//-------------------------------------------






