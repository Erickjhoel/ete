/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//saca lo que este dentron de la variable con etiqueta html es decir (h1,a,p,etc )
//var variable="Esto es un anchor";
//document.write(variable.big("Anchor1"));

//Crear objetos
function Persona(nombre,apellido,anios){
    this.nombre=nombre;
    this.apellido=apellido;
    this.anios=anios;
}
var miPersona= new Persona("Erick","Toledo",19);
document.write(miPersona.nombre,"<br />");
//crear herencia
//function Trabajador(nombre,apellido,jefe){
//    this.nombre=nombre;
//    this.apellido=apellido;
//    this.jefe=jefe;
//}
//function Jefe(nombre,apellido){
//    this.nombre=nombre;
//    this.apellido=apellido;
//    this.mostrarTrabajadores=mostrarTrabajadores;
//}
//function mostrarTrabajadores(){
//    
//}
//var jefe = new Jefe("Soy Jefe","Erick");
//var trabajador = new Trabajador("Soy Trabajador","Ronny",jefe);
//var trabajador2 = new Trabajador("Soy Trabajador","Putita",jefe);
//var trabajador3 = new Trabajador("Soy Trabajador","jjj",jefe);
//var trabajadores = new Array(trabajador,trabajador2,trabajador3);
//
//for (var i = 0; i < trabajadores.length; i++) {
//    for(var prop in trabajadores[i]){
//        document.write(trabajadores[prop].nombre);
//    }
//}
//document.write(trabajador.apellido,trabajador.nombre," de :",trabajador.jefe.apellido);
//********************************************************************
//
//var dia_ini = prompt("Introduce dia inicial", 0);
//var mes_ini = prompt("Introduce mes inicial", 0);
//var año_ini = prompt("Introduce año inicial", 0);
//pongo numeros porque me da pereza el prompt
//para saber cuantos años hay entre uno y otro es el año inicial - mes inicial
//mirar lo de calcular edad comprobando con if y else si es menor que el año9,mes onoseke 
var mi_fecha_ini = new Date(2015, 6, 3);
document.write(mi_fecha_ini, "<br />");
var dias = Array("Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado");
var mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"
        , "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var mi_fecha_fin = new Date(2018, 12, 3);

//milisegundosa de la primeera y segunda y se coje un valor random entre ellos
var milifin=mi_fecha_fin.getTime()-mi_fecha_ini.getTime();
document.write("+++++++++Ini+", mi_fecha_ini.getTime(), "<br />");
document.write("+++++++++Fin+", mi_fecha_fin.getTime(), "<br />");
document.write("++++++++++", milifin, "<br />");
//
var numAl=Math.floor((Math.random() * milifin+1)+ mi_fecha_ini.getTime());

var Fecha = new Date();
Fecha.setTime(numAl);
document.write("++++++++++", numAl, "<br />");
document.write("Fecha aleatoria", Fecha, "<br />");
document.write("++++++++++", numAl, "<br />");
document.write("mes**", mes[mi_fecha_ini.getMonth()], "<br />");
document.write("dia**", dias[mi_fecha_ini.getDay()], "<br />");
document.write("dia num**", mi_fecha_ini.getDate(), "<br />");
document.write("Año**", mi_fecha_ini.getFullYear(), "<br />");

document.write("++++++++++++++++++++++++++++++++++++++++++++ Expresiondes regulares <br />");

var cadena=("+4,99");
var plantilla= /^[+-]?[0-9]{1,}([.,]?[0-9]{1,})?/g ;
if (plantilla.test(cadena)){
    document.write("decimal");
}else{
    document.write("no decimal");
}
var cadena2=("03189718 D");
var plantilla2= /^[0-7][0-9]{7}([-]|\s[A-Z])/g ;
if (plantilla2.test(cadena2)){
    document.write("dni <br />");
}else{
    document.write("no dni <br />");
}
document.write("++++++++++++++++++++++++++++++++++++++++++++ ordenar <br />");
var tabla =new Array (8,4,18,1,9,23,45,5);
document.write("numero desordenado");
for ( e=0;e< tabla.length; e++) {
    document.write("(",tabla[e],")");
}
var aux=0;
var condicion = false;
do{
    condicion=false;
    for (var i = 0; i < tabla.length-1; i++) {
      if( tabla[i]>tabla[i+1]){
          aux=tabla[i];
          tabla[i]=tabla[i+1];
          tabla[i+1]=aux;
          condicion=true;
      }
    }
}while(condicion);
document.write("numero ordenado");
for ( t=0;t< tabla.length; t++) {
    document.write("(",tabla[t],")");
}
document.write("<br />");
document.write("++++++++++++++++++++++++++++++++++++++++++++ objetos <br />");
