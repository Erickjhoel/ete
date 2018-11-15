/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nombre="contador";
var valor=LeerCoockie(nombre);
valor= ParseInt(valor);
if(valor===null){
    x=1;
}else{
    x=x+1;
}

AsignarCoockie(nombre,valor);
document.write(nombre+" = " +coockie);

function AsignarCoockie(nombre,valor) {
    document.cookie =nombre+"="+valor;
}

function LeerCoockie(nombre) {      
    if(document.cookie.length===null){
        return null;
    }
    var lista = document.cookie.split(";");
    for (var i=0; i<lista.length;i++) {
        cookie= lista[i].split("=");
        if (cookie[0]===nombre){
            return cookie[1];
        }
    }
}



