/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nombre="contador";
var valor=5;
function AsignarCoockie(nombre,valor) {
    document.cookie =nombre+"="+escape(valor);
}

function LeerCoockie(nombre) {
    var lista = document.cookie.split(";");
    for (var i=0; i<lista.length;i++) {
        cookie= lista[i].split("=");
        if (cookie[0]===nombre){
            return cookie[1];
        }
    }
}


AsignarCoockie(nombre,valor);
var coockie=LeerCoockie(nombre);
document.write(nombre+" = " +coockie);