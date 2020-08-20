// MATRIX LIBRARY - written by Chef Pino Ficara ----

// --- main function generating a m x n matrix prefilled with zeros -------
function matrix(m,n){
  var newmatrix = [];
    for(var i=1; i < m+1; i++) {
      newmatrix[i] = [];
        for(var j=1; j < n+1; j++) {
          newmatrix[i][j] = 0;
        }
  }
  return newmatrix;
}
//---------------------------------------
function matrixSize(mtx){

  let m=mtx.length;
  let n=mtx[1].length;

  return {
    m:m-1,
    n:n-1
  }
}
//--------------------------------------
function addMatrix(m1,m2){

  if ((matrixSize(m1).m != matrixSize(m2).m) || (matrixSize(m1).n != matrixSize(m2).n)){
    return "ERROR, matrixes are of different sizes, cannot be added";
  }

  let m=matrixSize(m1).m;
  let n=matrixSize(m1).n;
  let newmatrix=new matrix(m,n);

  for(var i=1; i < m+1; i++) {
    newmatrix[i] = [];
      for(var j=1; j < n+1; j++) {
        newmatrix[i][j] = m1[i][j]+m2[i][j];
      }
   }
  
  return newmatrix; 
}
//--------------------------------------
function multiplyMatrix(m1,m2){

  let m=matrixSize(m1).n; //columns of first matrix
  let n=matrixSize(m2).m; //rows of second

  //verify row x column sizes
  if (m != n){
    return "ERROR, matrixes are of different sizes, cannot be multiplied"
  }
  
  m=matrixSize(m1).m; //rows of first matrix
  n=matrixSize(m2).n; //columns of second

  let newmatrix=new matrix(m,n);

  for(var i=1; i < m+1; i++) {
      for(var j=1; j < n+1; j++) {
        newmatrix[i][j] = dotProduct(row(m1,i),column(m2,j));
      }
   }

  return newmatrix;
}
//--------------------------------------

function scalarMultiplication(k,mtx){

  let m=matrixSize(mtx).m; //rows
  let n=matrixSize(mtx).n; //columns

  let newmatrix=new matrix(m,n);
  
  for(var i=1; i < m+1; i++) {
      for(var j=1; j < n+1; j++) {
        newmatrix[i][j] = k * mtx[i][j];
      }
   }

  return newmatrix;
}
//--------------------------------------
function dotProduct(v1,v2){
  
  if (v1.length != v2.length){
    return "dot product ERROR, vectors are of different sizes"
  }

  let dp=0;
  for(var i=1; i < v1.length; i++) {
    dp=dp+v1[i]*v2[i];
   }
  
  return dp;
}
//--------------------------------------
function crossProduct(a,b){
  
  if (a.length != b.length){
    return "cross product ERROR, vectors are of different sizes"
  }
  if (a.length != 4){
    return "cross product ERROR, vectors are not in R3"
  }
  
  var vTemp=new Array(a.length);
      
      vTemp[1] =   a[2] * b[3] - a[3] * b[2];
      vTemp[2] =  (a[1] * b[3] - a[3] * b[1]) * (-1);
      vTemp[3] =   a[1] * b[2] - a[2] * b[1];

  return vTemp;    
  
}
//--------------------------------------
function row(mtx,r){
  if (r<1 || r > matrixSize(mtx).m){
    return "ERROR: requesting row index " + r + ", max is " + matrixSize(mtx).n;
  }
  var n=matrixSize(mtx).n;
  var vector=new Array(n+1);
  for(var i=1; i < n+1; i++) {
      vector[i]=mtx[r][i];
   }
  return vector;
}
//--------------------------------------
function column(mtx,c){
  if (c<1 || c > matrixSize(mtx).n){
    return "ERROR: requesting column index " + c + ", max is " + matrixSize(mtx).m;
  }
  var m=matrixSize(mtx).m;
  var vector=new Array(m+1);
  for(var i=1; i < m+1; i++) {
      vector[i]=mtx[i][c];
   }
  return vector; 
}
//--------------------------------------

function displayMatrix(mtx){
  const v="&#9474;"  //│
  const dr="&#9484;" //┌
   var m=matrixSize(mtx).m;
   var n=matrixSize(mtx).n;
   var str="<table border=0 cellspacing=0 cellpadding=0>" + 
            `<tr><td>${dr}</td><td colspan="${n}"></td></td><td>${dl}</td></tr>`;
   
   for(var i=1; i < m+1; i++) {
    str = str + "<tr>" + 
                "<td>" + v + "&nbsp;</td>";
      for(var j=1; j < n+1; j++) {
        str = str + "<td align=right>" +
            `<a href="#" title="${i},${j}" style="text-decoration: none; font-family: Courier New;">` +  
             mtx[i][j] +
             "</a>&nbsp;" +  
             "</td>";
      }

   str = str + "<td>" + v + "</td></tr>";   
   }
   str = str + `<tr><td>${ur}</td><td colspan="${n}"></td></td><td>${ul}</td></tr>`;
   str = str + "</table>";   
   return str;
}
//--------------------------------------

//---unit matrix of size n
function unitMatrix(n){

  let newmatrix=new matrix(n,n); //prefilled with all 0s
  
  for(var i=1; i < n+1; i++) {
        newmatrix[i][i] = 1;    //1s assigned to diagonal
   }

  return newmatrix;
  }
//--------------------------------------
function transposeMatrix(mtx){

  var m=matrixSize(mtx).m;
  var n=matrixSize(mtx).n;
  var newmatrix=new matrix (n,m);
  
  for(var i=1; i < m+1; i++) {
    for(var j=1; j < n+1; j++) {
      newmatrix[j][i] = mtx[i][j];
    }
  }
 return newmatrix;
}
//--------------------------------------
    //removes one row, one column from a given matrix
    //@param m1: matrix
    //@param row: index of row to remove, 0 for none
    //@param col: index of column to remove, 0 for none 
    function removeRC(m1, row,col) {
      
      const m=matrixSize(m1).m;
      const n=matrixSize(m1).n;

      if (row < 0 || row > m || col < 0 || col > n) {
        console.log("ERROR one or more wrong indexes");
        return "ERROR one or more wrong indexes";
      }

      var m2 = new matrix(m - (row>0?1:0), n - (col>0?1:0));
      var i,j;

      for (var r = 1; r < m + (row==0?1:0); r++) {
        for (var c = 1; c < n + (col==0?1:0); c++) {
           
          i=(r < row || row==0)?0:1;
          j=(c < col || col==0)?0:1;          
          m2[r][c]=m1[r+i][c+j];

        }
      }
      return m2;
    }
   //------------------------------
   //compute determinant using laplace expansion formula for row 1
   function det(m1){

     var m=matrixSize(m1).m;
     var n=matrixSize(m1).n;
     if (m != n || m*n <=0 ){
       console.log("ERROR matrice is not square or one size is zero");
     }
     if (n==2){
       return m1[1][1]*m1[2][2] - m1[1][2]*m1[2][1];
     }
     
     var determinant=0;
     
     //laplace for row 1
     for (var j=1; j < n+1;j++){
       if (m1[1][j] != 0){
          determinant += Math.pow(-1,j+1) * m1[1][j] * det(removeRC(m1,1,j));
       }
     }

     return determinant;

   }
//----------------------------------------------------------------
// generate matrix with random values (m,n, min, max, decimals)
function randomMatrix(m,n,min,max,decimals){
  var newmatrix = [];
    for(var i=1; i < m+1; i++) {
      newmatrix[i] = [];
        for(var j=1; j < n+1; j++) {               
          newmatrix[i][j] = roundToNdecimals(rTemp=min+Math.random()*(max-min),decimals);
        }
  }
  return newmatrix;
}
//----------------------------------------------------------------

