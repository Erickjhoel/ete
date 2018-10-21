/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

alert("llega");
 var FechaIni;
 var msIni ;
 var miTimer;
var horin;
var minin ;
var segin;
function Cronometro() {
    var FechaAct = new Date();
    var hor = Math.floor(FechaAct.getHours()-horin);
    var min = Math.floor(FechaAct.getMinutes()-minin);
    var tiempo = Math.round((FechaAct.getTime() - msIni) / 1000);
    document.title="Hora:"+hor+" Min:"+min+" Segundos:" + tiempo;
}
function PararCronometro() {
   clearInterval(miTimer);
}
function IniciarCronometro(){
    FechaIni = new Date();
    horin = FechaIni.getHours();
    minin = FechaIni.getMinutes();
    msIni = FechaIni.getTime();
    miTimer = setInterval ("Cronometro()", 1000);
}


