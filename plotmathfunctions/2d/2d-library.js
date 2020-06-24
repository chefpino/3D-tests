function listFunctions() {
  var strTable = "<table border=1>";

  for (const key in params.functions) {
    if (params.functions.hasOwnProperty(key)) {
      const element = params.functions[key];
      
      if (params.functions[key] != false){
          strTable += "<tr>";
          strTable += "<td>" + key + "</td>";
          strTable += "<td> " + params.functions[key] + "</td>";
          strTable += "<td>" + " delete " + "</td>";
          strTable += "</tr>";
      }
    }
  }
  strTable += "</table>";

  return strTable;
}
