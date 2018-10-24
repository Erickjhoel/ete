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

document.write("Programa que muestre valores del 0 al 12");
var FechaIni;
 var msIni ;
 var miTimer;
var horin;
var minin ;
var segin;
function Cronometro() {
    var FechaAct = new Date();
    var tiempo = Math.round((FechaAct.getTime() - msIni) / 1000);
    document.title=tiempo;
}
function PararCronometro() {
   clearInterval(miTimer);
}
function IniciarCronometro(){
    FechaIni = new Date();
    miTimer = setInterval ("Cronometro()", 5000);
}