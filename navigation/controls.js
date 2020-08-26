//---- Generates Sliders Only -------------------------------------------------
function generateControls() {
  const strFilename = "'parameters.txt'"; //name of the file containing parameters to save

  const tr = "<tr>";
  const trc = "</tr>";

  var defaultValue = 0;
  var steps = 100; //resolution of the slider 
  var min, max, step;
  var controlType = "";
  var goButton = params.goButton.show; //boolean, show yes/no
  var movie; //boolean
  goButton = (typeof (goButton) == "undefined" ? true : goButton);

  var strHTML = '<table style="border: 1px solid black;">';
  strHTML += tr;

  strHTML += "<td colspan=6 align=left><b>Parameters</b></td>";

  strHTML += trc;

  //---generate html
  for (var key in params) {

    if (params[key].visible != false) {

      defaultValue = 1 * params[key].default;
      min = params[key].min;
      max = params[key].max;
      steps = params[key].steps;
      steps = (typeof (steps) == 'undefined' ? 100 : steps);
      step = (max - min) / steps;
      var recalc = (params[key].recalc == true ? `loadvaluesandgo("${key}");` : "");
      controlType = (typeof (params[key].controlType) == "undefined" ? "range" : params[key].controlType);
      movie = typeof (params[key].movie) == "undefined" ? false : true;

      strHTML = strHTML + tr;
      strHTML = strHTML + td(params[key].label);

      switch (controlType) {

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
          strHTML += `<td><a href="#" onclick="upAndDown('${key}',1);">▲</a><br>`;
          if (movie){
             strHTML += `<a title="play/stop" href="#" onclick="playMovie('${key}');">&#9658;</a><br>`;
          }
          strHTML += `<a href="#" onclick="upAndDown('${key}',-1);">▼</a></td>`;
          strHTML +=
            td(`<div id="val_${key}">${Math.round(params[key].default*1000)/1000}</div>`, 65);
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
          strHTML += td(`<div id="val_${key}">${(params[key].default==params[key].min?params[key].minLabel:params[key].maxLabel)}</div>`);
          strHTML += td("");
          break;

      }
      strHTML = strHTML + trc;
    } // - end if visible ;
  }

  if (goButton) {
    strHTML = strHTML + "<tr><td colspan=6>";
    strHTML = strHTML + `<button onclick="loadvaluesandgo(${key});">go!</button>&nbsp`;
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

}
//-------------------------------------------
function upAndDown(strKey, j) {
  //j is -1 or +1
  // needs better calculations especially with rounding of values and integers
  var steps = params[strKey].steps;
  var min = params[strKey].min;
  var max = params[strKey].max;
  var currentVal = params[strKey].val;
  steps = (typeof (steps) == 'undefined' ? 100 : steps);
  var step = (max - min) / steps;
  step = j * (params[strKey].integer == true ? 1 : step);
  currentVal = currentVal + step;
  currentVal = (currentVal < min) ? max : currentVal;
  currentVal = (currentVal > max) ? min : currentVal;
  
  if (params[strKey].visible){
      document.getElementById(strKey).value = currentVal;
      document.getElementById("val_" + strKey).innerHTML = Math.round(currentVal * 1000) / 1000;
    }
  //update param
  params[strKey].val = currentVal;

  //if recalc is true reload with new values
  if (params[strKey].recalc == true) {
    loadvaluesandgo(strKey);
  }
}
//------------------------------
//simplified version of the upAndDown function, for panning only.  
function panning(strKey, j) {
  var currentVal = params[strKey].val;
  currentVal = currentVal + j;
  params[strKey].val = currentVal;
  loadvaluesandgo(strKey);
}
//-------------------------------------------
//this f updates an existing <div id=val_x> with the value taken from the corresponding slider
//and most important updates value in the params object!
//takes into account if the param must be an integer
function updateParam(x) {
  var controlType = document.getElementById(x).type;
  var iTemp;
  const isInteger=(true && params[x].integer);
  switch (controlType) {
    case "range":
      iTemp = 1 * document.getElementById(x).value;
      iTemp = (isInteger)?Math.round(iTemp):iTemp;
      document.getElementById("val_" + x).innerHTML = (Math.round(iTemp * 1000) / 1000);
      break;
    case "checkbox":
      iTemp = document.getElementById(x).checked ? 1 : 0;
      document.getElementById("val_" + x).innerHTML = (iTemp == 0 ? params[x].minLabel : params[x].maxLabel);
      break;
  }
  params[x].val = iTemp;

}
//-------------------------------------------
// --- movies section ---
var movieOnOff = false;
function movie() {
  if (movieOnOff) {
    upAndDown(movieKey, 1);
    setTimeout(movie, 200);
  } else {
    loadvaluesandgo(movieKey);
  }
}
//----------------------------------------------------------------
function playMovie(str) {
  movieKey = str;
  movieOnOff = (movieOnOff) ? false : true;
  movie();
}
//-------------------------------------------

//-------------------------------------------
function td(x, w) {
  w = (typeof (w) == "undefined") ? "" : "width=" + w;
  return `<td ${w} align=center valign=middle style='border: 1px solid black;'>` + x + "</td>";
}
//===========================================================================
// section dedicated to dropdown menus.

//-------------------------------------------
function getDropDownSelectedValue(strID) {
  var e = document.getElementById(strID);
  return e.options[e.selectedIndex].value;
}

//--- more elaborate drop down generator and values retrievers
//-------------------------------------------
function genDropDownFromObj(id, label, value, selected, obj) {

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
function dropDownToObj(dd_id, src_obj, arr_keys) {

  var e = document.getElementById(dd_id);
  var selectedvalue = e.options[e.selectedIndex].value;
  var retObj = {};

  for (let index = 0; index < arr_keys.length; index++) {

    retObj[arr_keys[index]] = src_obj[selectedvalue][arr_keys[index]];

  }

  return retObj;
}
//-------------------------------------------
//--- section for listing functions ---------------------------------
function listFunctions(showDeleteButton,showAddNewButton) {

  showDeleteButton=(showDeleteButton==null?true:showDeleteButton);
  showAddNewButton=(showAddNewButton==null?true:showAddNewButton);

  var strTable = "<table>";
  var i=0;
  var functionlabel="";

  for (const key in params.functions) {
    if (params.functions.hasOwnProperty(key)) {
      
      if (params.functions[key] != false){
          functionlabel=(params.functionlabel ? params.functionlabel[key] : key);
          strTable += "<tr>";
          strTable += "<td>" + functionlabel + "</td>";
          strTable += `<td><input type='text' id="${key}" value="${params.functions[key]}"></td>`; //<td> " + params.functions[key] + "</td>";
          strTable += "<td>";
          if (showDeleteButton){
          strTable += `<a href="#" onclick="return deleteFunction('${key}')"> delete </a> `;
          }
          strTable += `<a href="#" onclick="return updateFunction('${key}')"> update </a> `;
          strTable += "</td>";
          strTable += "</tr>";
          if (functionNumber(key) > i) {i=functionNumber(key)};
      }
    }
  }
  if (showAddNewButton){

    //add new function 
    i++;
    strTable += "<tr>";
            strTable += "<td> f" + i + "</td>";
            strTable += "<td><input type='text' id='newF'></td>";
            strTable += "<td>" + `<a href="#" onclick="addFunction('f${i}')"> add </a>` + "</td>";
            strTable += "</tr>";
  } //end if
  strTable += "</table>";

  return strTable;
}

function deleteKey(obj,key){
  delete obj[key];
}
function updateFunction(key){
  params.functions[key]=document.getElementById(key).value;
  displayFunctions();
  loadvaluesandgo(); 
}
//wrapper for functions
function deleteFunction(key){
  deleteKey(params.functions,key);
  deleteKey(params.functionlabel,key);
  displayFunctions();
  loadvaluesandgo(); 
}
function addFunction(key){
  params.functions[key]=document.getElementById("newF").value;
  params.functionlabel[key]=key;
  displayFunctions();
  loadvaluesandgo(); 
}

function functionNumber(str){
  var tempStr=str.substring(1);
  return eval(tempStr);
}