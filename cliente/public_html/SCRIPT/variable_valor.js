/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var url;
var cadena = new Array();
var variable = new Array();
var valor = new Array();
var contador = 0;
var cadena_Fin= new Array();
var urlFin;
do {
    variable[contador] = prompt("Introduzca nombre de variable");
    valor[contador] = prompt("Introduzca valor de variable introducida");
    url = location.href;
    cadena[contador] = "?" + variable[contador] + "=" + valor[contador];
    contador++;
} while (confirm("Desea introducir mas variables???"));
//sobra un for
for (var i = 0; i < contador; i++) {
    for (var e = 0; e <cadena.length; e++) {
        cadena_Fin[i]=cadena[e];
    }
}
for (var e = 0; e <cadena_Fin.length; e++) {
       urlFin=cadena_Fin[e];
       urlFin=urlFin+"&&"+cadena_Fin[e];
    }

document.write(url+urlFin);
