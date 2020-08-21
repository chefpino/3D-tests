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
