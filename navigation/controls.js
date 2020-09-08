//---- Generates Sliders Only -------------------------------------------------
function generateControls() {
  //const strFilename = "'parameters.txt'"; //name of the file containing parameters to save

  const tr = "<tr>";
  const trc = "</tr>";
  var steps = 100; //resolution of the slider 
  var step;
  var controlType = "";
  var goButton = params.goButton.show; //boolean, show yes/no
  goButton = (typeof (params.goButton.show) == "undefined" ? true : goButton);
  var bookmarkLink=params["bookmarkLink"].show;
  bookmarkLink = (typeof (bookmarkLink) == "undefined" ? false : bookmarkLink);
  var strHTML = '<table width=420 style="border: 1px solid black;">';
  strHTML += tr;

  strHTML += "<td colspan=5 align=left><b>Parameters</b></td>";
  strHTML += "<td align=center><b>";
  if (bookmarkLink) {
    strHTML = strHTML + `<a title="bookmark-able link" id=bookmarkLink onclick="openBookmarkLink();return false;" href="#">Link</a>`;
  } else {
    strHTML = strHTML + "&nbsp";
  }
  strHTML += "</b></td>";

  strHTML += trc;

  //---generate html
  for (var key in params) {

    let defaultValue = 1 * params[key].default;
    let min = params[key].min;
    let max = params[key].max;
    let movie=typeof (params[key].movie) == "undefined" ? false : true;
    let cssClass=typeof(params[key].cssClass)=="undefined" ?"control1":params[key].cssClass;


    if (params[key].visible != false) {

      steps = params[key].steps;
      steps = (typeof (steps) == 'undefined' ? 100 : steps);
      step = (max - min) / steps;
      var recalc = (params[key].recalc == true ? `loadvaluesandgo("${key}");` : "");
      controlType = (typeof (params[key].controlType) == "undefined" ? "range" : params[key].controlType);

      strHTML = strHTML + `<tr class="${cssClass}">`;
      //resetToDefault
      strHTML = strHTML +
                `<td><a href="#" onclick='resetToDefault("${key}");' title="default">` + params[key].label + 
                "</a></td>";

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
    strHTML = strHTML + `<button onclick="loadvaluesandgo('all');">go!</button>&nbsp`;
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
  var currentVal = params[strKey].val;
  
  if (j != 0){
  var steps = params[strKey].steps;
  const min = params[strKey].min;
  const max = params[strKey].max;
  steps = (typeof (steps) == 'undefined' ? 100 : steps);
  var step = (max - min) / steps;
  step = j * (params[strKey].integer == true ? 1 : step);
  currentVal = currentVal + step;
  currentVal = (currentVal < min) ? max : currentVal;
  currentVal = (currentVal > max) ? min : currentVal;
  //update param
  params[strKey].val = currentVal;
  }

  if (params[strKey].visible){
      document.getElementById(strKey).value = currentVal;
      document.getElementById("val_" + strKey).innerHTML = Math.round(currentVal * 1000) / 1000;
    }

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
  const controlType = document.getElementById(x).type;

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
//reset to default values
function resetToDefault(x) {

  const defaultValue = params[x].default;
  const controlType = document.getElementById(x).type;
  
   switch (controlType) {
    case "range":
      document.getElementById(x).value = defaultValue;
      document.getElementById("val_" + x).innerHTML = (Math.round(defaultValue * 1000) / 1000);
      break;
    case "checkbox":
      document.getElementById("val_" + x).innerHTML = (defaultValue == 0 ? params[x].minLabel : params[x].maxLabel);
      document.getElementById(x).checked = (defaultValue==1)?true:false;
      break;
  }
  params[x].val = defaultValue;
  
  // check to see if this parameter needs refreshing of the plotted object/function
  const recalc = params[x].recalc;
  if (recalc) {
    loadvaluesandgo(x);
  }

}
//============================================================================
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

  const e = document.getElementById(dd_id);
  const selectedvalue = e.options[e.selectedIndex].value;
  var retObj = {};

  for (let index = 0; index < arr_keys.length; index++) {

    retObj[arr_keys[index]] = src_obj[selectedvalue][arr_keys[index]];

  }

  return retObj;
}
//--- section for listing/upd/del/create user entered functions --------------------
function listFunctions(showDeleteButton,showAddNewButton) {

  showDeleteButton=(showDeleteButton==null?true:showDeleteButton);
  showAddNewButton=(showAddNewButton==null?true:showAddNewButton);

  var strTable = "<table>";
  var i=0;
  var functionlabel="";

  for (const key in params.functions) {
    if (params.functions.hasOwnProperty(key)) {
      
      if (params.functions[key] != ""){
          functionlabel=(params.functionlabel ? params.functionlabel[key] : key);
          strTable += "<tr>";
          strTable += "<td>" + functionlabel + "</td>";
          strTable += `<td><input style="width: 240px" type='text' id="${key}" value="${params.functions[key]}"></td>`; //<td> " + params.functions[key] + "</td>";
          strTable += "<td>";
          if (showDeleteButton){
          strTable += `<a href="#" onclick="return deleteFunction('${key}')"> delete </a> |`;
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
            strTable += "<td><input style='width: 240px' type='text' id='newF'></td>";
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
  const tempStr=str.substring(1);
  return eval(tempStr);
}
//------------------------------
//section dedicated to query string 
//------------------------------
function createQueryString() {     
  var tempStr="";
  var tempBool; 
  for (var key in params) {
    tempBool=(params[key].bookmarkLink==true);
    if (params[key].visible != false || tempBool) {
      tempStr=tempStr + key + "=" + params[key].val + "&";
    }
  }
  tempStr=tempStr.substr(0, tempStr.length-1); //removed last &
  tempStr=window.location.origin+window.location.pathname+"?"+tempStr;
  return tempStr; 
}
//------------------------------
function queryStringToObject(str){ 
  var queryString=(str==null)?(window.location.search):str;
  queryString=queryString.replace("?","")
  const tempArray=queryString.split("&");
  //console.table(tempArray); //debug
  var tempKeyValue;
  var returnObj={};
  for(var i=0; i <tempArray.length;i++){
    tempKeyValue= tempArray[i].split("=");
    returnObj[tempKeyValue[0]]=tempKeyValue[1];
  }
return returnObj;
}
//------------------------------
function loadValuesFromQueryString(){
  //works only for numerical parameters?
  if (window.location.search.length >0){
  const passedParamsObj=queryStringToObject();
  //console.table(passedParamsObj); //wip DEBUG
  for (var key in passedParamsObj) {
      let tempValue=params[key].val;
      if (isNaN(tempValue)){
        params[key].val = passedParamsObj[key]; //json.stringify?
      } else {
      params[key].val = 1 * passedParamsObj[key];
    }
      upAndDown(key,0); //updates sliders position etc.
    }
} 
//----------------------------------------------------------------
}
function openBookmarkLink() {
  window.location.href=createQueryString();
}
