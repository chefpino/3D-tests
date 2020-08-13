// MATRIX LIBRARY - written by Chef Pino Ficara ----

// --- main function generating a m x n matrit prefilled with zeros -------
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
    return "ERROR, matrixes are of different sizes, cannot be added"
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

  let m=matrixSize(mtx).m; //rows of first matrix
  let n=matrixSize(mtx).n; //columns of second

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

   var m=matrixSize(mtx).m;
   var n=matrixSize(mtx).n;
   var str="<table style='border: 1px solid grey; padding: 0px;' >";
   
   for(var i=1; i < m+1; i++) {
    str = str + "<tr height=35 style='border: 1px solid grey; padding: 0px;'>";
      for(var j=1; j < n+1; j++) {
        str = str + "<td align=center width=35 style='border: 1px solid grey; padding: 0px;'>" + mtx[i][j] + "</td>";
      }
   str = str + "</tr>";   
   }
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


//--- cross product?
