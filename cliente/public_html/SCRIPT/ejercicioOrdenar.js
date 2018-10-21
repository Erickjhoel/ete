/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

alert("llega");

var tabla =new Array (8,4,18,1,9,23,45,5);
document.write("numero desordenado");
for ( e=0;e< tabla.length; e++) {
    document.write("-"+tabla[e]+",");
}
var aux=0;
var condicion = false;
do{
    condicion=false;
    for (var i = 0; i < tabla.length-1; i++) {
      if( tabla[i]>tabla[i+1]){
          aux=tabla[i];
          tabla[i]=tabla[i+1];
          tabla[i+1]=aux;
          condicion=true;
      }
    }
}while(condicion);
document.write("numero ordenado");
for ( t=0;t< tabla.length; t++) {
    document.write("-"+tabla[t]+",");
}
