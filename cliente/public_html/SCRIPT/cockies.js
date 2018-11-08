/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nombreCookie=prompt("Introduzca nombre de cookie");
var valorCookie=prompt("Introduzca el valor de la cookie");




function AsignarCoockie(nombre, valor){
    document.cookie=nombre+"="+valor;
}

function LeerCoockie(nombre){
     
}


AsignarCoockie(nombreCookie,valorCookie);
LeerCoockie(nombreCookie);