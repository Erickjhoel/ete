/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//  var mi_cadena = prompt("Introduce cadena de caracteres", "");
  //saca el codigo asci de la latra o en la posicion(0) de la linea de caracteres
//  alert("a".charCodeAt(0));
//  //introduces codigos asci  y devuelve caracteres
//   var variable = String.fromCharCode(97,98);
//   alert(variable);
//   
//    for (var i = 0; i < mi_cadena.length; i++) {
//    var res= mi_cadena.charAt(i);
//     document.write("  letra posicion ",i," : ", res, "<br>");
//     
//}
// var plantilla= new RegExp("^a$","g");
// if(plantilla.test(mi_cadena)){
//     alert("SI");
// }else{
//     alert("ÑO");
// }
 
  var mi_cadena =  parseInt(prompt("Introduce numero de Telefono",""));
  
  var plantilla= /^91[0-9]{7}$/g;
   if(plantilla.test(mi_cadena)){
     alert("ok");
     document.write("Numero correcto: ",mi_cadena), "<BR />";
 }else{
     alert("ko");
     document.write("El numero no es de la comunidad de madrid"), "<BR />";
 }