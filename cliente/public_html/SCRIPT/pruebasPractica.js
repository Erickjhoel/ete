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

document.write("++++++++++", numAl, "<br />");
document.write("mes**", mes[mi_fecha_ini.getMonth()], "<br />");
document.write("dia**", dias[mi_fecha_ini.getDay()], "<br />");
document.write("dia num**", mi_fecha_ini.getDate(), "<br />");
document.write("Año**", mi_fecha_ini.getFullYear(), "<br />");
