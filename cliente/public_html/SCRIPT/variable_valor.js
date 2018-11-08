/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var url;
var variable = new Array();
var valor = new Array();
var contador = 0;
var cadena_Fin;
do {
    variable[contador] = prompt("Introduzca nombre de variable");
    valor[contador] = prompt("Introduzca valor de variable introducida");
    url = location.href;
    contador++;
} while (confirm("Desea introducir mas variables???"));
//sobra un for
for (var i = 0; i < contador; i++) {
    if(i===0){
        cadena_Fin="?"+variable[i]+"="+valor[i];
    }else{
        cadena_Fin=cadena_Fin+"&&"+variable[i]+"="+valor[i];
    }
}

document.write(url+cadena_Fin+"<br />");


var subcadenas= cadena_Fin.split("&&");
for (var i = 0; i < subcadenas.length; i++) {
    var partes=subcadenas[i].split("=");
    document.write(partes[0]+"**"+partes[1]+"<br />");
}