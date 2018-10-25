/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//alert(isNaN("ab"));//devuelve true porque pregunta si no es un numero
//var elevado= Math.pow(2,5);
//var raiz = Math.sqrt(16);
//document.write("2 elevado a 5: "+elevado+"<br />"+ "raiz cuadrada de 16: "+ raiz+"<br />");
//
//var numin= parseInt(prompt("Dame el numero inicial",""));
//var numfin= parseInt(prompt("Dame numero final",""));
//var numTotal= numfin-numin;
//var numAl=Math.floor((Math.random() * numTotal+1) + numin);
//document.write("numero aleatorio: "+numAl+"<br />");

document.write("Programa que muestre valores del 0 al 10");
var FechaIni;
var miTimer;
var num = 0;
var cont=10;
function tiempo() {
    if (num <cont) {
        num++;
        document.title = "num:" + num;
        cont=10;
    } else {
        num--;
        document.title = "num:" + num;
        cont=1;
    }

}
function PararCronometro() {
   clearInterval(miTimer);
}
FechaIni = new Date();
miTimer = setInterval("tiempo()", 500);
