//class under development as a solution for
//passing functions via URL parameters
class functionsHandler {

   constructor (srcObj,fieldsObj){
     this.srcObj = srcObj;    //params.functionstoplot - array of functions
     this.fieldsObj=fieldsObj //params.functions - input fields
   } 
  
  //methods
  deleteField(strFieldID){
    delete this.fieldsObj[strFieldID];
    //update srcObj
    //reload
  }

  updateField(strFieldID, strValue){
    this.fieldsObj[strFieldID]=strValue;
    //update srcObj
    //reload
  }
  
  addField(strValue){
    //calc key/id strFieldID=... based on srcObj.val.length+1;
    this.fieldsObj[strFieldID]=strValue;
    //update srcObj
    //reload
  }
  
updateSrcObj(){
    var strTemp="";
    for(var key in this.fieldsObj){
      strTemp += this.fieldsObj[key]+",";
    }
    tempStr=tempStr.substr(0, tempStr.length-1); //removed last ","
    srcObj.val=strTemp;
}
}
//wrapper for functions
function deleteFunction(key){
  deleteKey(params.functions,key);
  deleteKey(params.functionlabel,key);
  displayFunctions();
  loadvaluesandgo(); 
}

function functionNumber(str){
  const tempStr=str.substring(1);
  return eval(tempStr);
}
