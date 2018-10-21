/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    
    var b;
    var e;
   var resultado;
    b=prompt("Introduzca el numero");
    e=prompt("Introduzca la base");
    resultado=factorial(b, e);
    alert("El resultado es: "+resultado);
    
    function factorial(b,e){
    var result;
  if(e===0) {
      result=1;
  }
  else{
  result=(b*factorial(b,(e-1)));
  }
  return(result);
}
    
    
    
    
    
    
    