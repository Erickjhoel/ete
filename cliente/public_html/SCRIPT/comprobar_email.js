/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//ESTA MALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
var mi_cadenaLetra =prompt("Introduce Letra  DNI", "");
var plantilla =/^(\w+\.){0,3}\w{15}@(\w{1,20}\.){1,2}\w{2,4}$/;

if (plantilla.test(mi_cadenaLetra)) {
document.write("CORRECTO"), "<BR />";
} else {
    document.write("No es un correo"), "<BR />";
}