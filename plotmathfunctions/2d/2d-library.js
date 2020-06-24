function listFunctions() {
  var strTable = "<table border=1>";
  var i=0;

  for (const key in params.functions) {
    if (params.functions.hasOwnProperty(key)) {
      const element = params.functions[key];
      
      if (params.functions[key] != false){
          strTable += "<tr>";
          strTable += "<td>" + key + "</td>";
          strTable += "<td> " + params.functions[key] + "</td>";
          strTable += "<td>" + `<a href="#" onclick="return deleteFunction('${key}')"> delete </a>` + "</td>";
          strTable += "</tr>";
          i++;
      }
    }
  }
  //add new function 
  i++;
  strTable += "<tr>";
          strTable += "<td> f" + i + "</td>";
          strTable += "<td><input type='text' id='newF'></td>";
          strTable += "<td>" + `<a href="#" onclick="addFunction('f${i}')"> add </a>` + "</td>";
          strTable += "</tr>";

  strTable += "</table>";

  return strTable;
}

function deleteKey(obj,key){
  delete obj[key];
}

//wrapper for functions
function deleteFunction(key){
  deleteKey(params.functions,key);
  displayFunctions();
  loadvaluesandgo(); 
}

function addFunction(key){
  params.functions[key]=document.getElementById("newF").value;
  displayFunctions();
  loadvaluesandgo(); 
}
