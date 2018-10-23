/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mi_cadenaLetra =prompt("Introduce Letra  DNI", "");
var plantilla = /^\d{8}[A-Z]$/g;
var letras= new Array("T","R","W","A","G","M","Y","F","P","D","X","B"
        ,"N","J","Z","S","Q","V","H","L","C","K","E");
var resul=0;
var letra="";
if (plantilla.test(mi_cadenaLetra)) {
  resul= mi_cadenaLetra.substr(0,8)%23;
  letra = letras[resul];
    if(letra===mi_cadenaLetra.substr(8,1)){
         document.write("DNI CORRECTO"), "<BR />";
    }
} else {
    document.write("No es un DNI"), "<BR />";
}
            