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
          strHTML += td(`<a href="#" onclick="upAndDown('${key}',1);"><img src="https://chefpino.github.io/fun/imgs/arrowUp.jpg" width=10 height=10 "></a><br><a href="#" onclick="upAndDown('${key}',-1);"><img src="https://chefpino.github.io/fun/imgs/arrowDown.jpg" width=10 height=10 "></a>`);
          strHTML +=
          td(`<div id="val_${key}">${Math.round(params[key].default*1000)/1000}</div>`,65);
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
  
  if (goButton){
      strHTML = strHTML + "<tr><td colspan=6>"; 
      strHTML = strHTML + '<button onclick="loadvaluesandgo();">go!</button>&nbsp';
      strHTML = strHTML + "</td></tr>";
    }
/*
  strHTML =
    strHTML +
    '<button onclick="return download(' +
    strFilename +
    ',parametersToJSON());">save</button>&nbsp';
  strHTML =
    strHTML + '<input type="file" name="inputfile" id="inputfile"></input>';
*/
  strHTML = strHTML + "</table>";
  document.getElementById("dynamicSliders").innerHTML = strHTML;

  //--- assign default value to sliders
  //this is a bit redundant but it works around some rounding up happening
  //with the sliderToParam function
  //loadDefaults();
}
//-------------------------------------------
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
  currentVal = (currentVal < min) ? max : currentVal;
  currentVal = (currentVal > max) ? min : currentVal;

  document.getElementById(strKey).value = currentVal;

  //update param function?
  

  params[strKey].val=currentVal;
  document.getElementById("val_" + strKey).innerHTML = Math.round(currentVal*1000)/1000;

  //if recalc is true reload with new values
  if (params[strKey].recalc == true){
    loadvaluesandgo();
  }





}
//-------------------------------------------
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
//-------------------------------------------
//default 100 value can be specified in object values as steps: xy

function paramToSlider(strParam, iValue) {
  var x1 = 1 * params[strParam].min;
  var x2 = 1 * params[strParam].max;
  var steps = params[strParam].steps;
  steps=(typeof(steps)=="undefined" ? 100: 1* steps);  //default resolution is 100 steps
  return Math.round((steps * (1 * iValue - x1)) / (x2 - x1));
}
//-------------------------------------------
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
//-------------------------------------------
function td(x,w) {
  w=(typeof(w)=="undefined") ? "":"width=" + w;
  return `<td ${w} align=center valign=middle style='border: 1px solid black;'>` + x + "</td>";
}
//===========================================================================
// section dedicated to dropdown menus.

//-------------------------------------------
function getDropDownSelectedValue(strID){
  var e = document.getElementById(strID);
  return e.options[e.selectedIndex].value;
}

//--- more elaborate drop down generator and values retrievers
//-------------------------------------------
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
//-------------------------------------------
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






