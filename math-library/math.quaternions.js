//quaternion operations library - written by chef Pino Ficara

//---------------------------------------------------
function qt(a,b,c,d){
  return {
    a: a,
    b: b,
    c: c,
    d: d
  }
}
//---------------------------------------------------
function sq(q1,q2){
  return {
    a: q1.a+q2.a,
    b: q1.b+q2.b,
    c: q1.c+q2.c,
    d: q1.d+q2.d
  }
}
//---------------------------------------------------
function pq(q1,q2){

  q1=(typeof(q1)=="object") ? q1 : qt(q1,0,0,0);
  q2=(typeof(q2)=="object") ? q2 : qt(q2,0,0,0);

  return{
  a: q1.a*q2.a - q1.b*q2.b - q1.c*q2.c - q1.d*q2.d,
  b: q1.a*q2.b + q1.b*q2.a + q1.c*q2.d - q1.d*q2.c,
  c: q1.a*q2.c - q1.b*q2.d + q1.c*q2.a + q1.d*q2.b,
  d: q1.a*q2.d + q1.b*q2.c - q1.c*q2.b + q1.d*q2.a
  }
}
//---------------------------------------------------
function conj(q){
  return{
    a: q.a,
    b: -q.b,
    c: -q.c,
    d: -q.d
  }
}
//---------------------------------------------------
function nq(q){
  return Math.sqrt(q.a * q.a + q.b * q.b + q.c * q.c + q.d * q.d);
}
//---------------------------------------------------
function invq(qt){
 let k=1/(qt.a * qt.a + qt.b * qt.b + qt.c * qt.c + qt.d * qt.d); //inverse of norm squared
 return p(k,conj(qt));
}
//---------------------------------------------------
function p_rot(u,angle){
   //u is a unit vector (quaternion with real part zero) 
   //p_rot is the rotation quaternion for the formula q -> pqp' (p' is the conjugate) 
  const _sin=Math.sin(angle/2);
  const _cos=Math.cos(angle/2);
  return {
    a: _cos,
    b: u.b * _sin,
    c: u.c * _sin,
    d: u.d * _sin
  }
}
//---------------------------------------------------
function qRot(axis,angle,pt){
  //u axis of rotation - quaternion with real part zero
  // angle of rotation around u
  // pt point in 3d to be rotated - quaternion with real part zero

  var u=pq(1/nq(axis),axis); //change to norm 1
  pr=p_rot(u,angle);

  return pq(pq(pr,pt),conj(pr));
//---------------------------------------------------



}

