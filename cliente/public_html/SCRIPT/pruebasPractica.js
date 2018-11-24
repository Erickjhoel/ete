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
function Trabajador(nombre,apellido,jefe){
    this.nombre=nombre;
    this.apellido=apellido;
    this.jefe=jefe;
}
function Jefe(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
    this.mostrarTrabajadores=mostrarTrabajadores;
}
function mostrarTrabajadores(){
    var resultado="";
    for(i in Trabajador){
        document.write(Trabajador[i]);
    }
}
var jefe = new Jefe("Soy Jefe","Erick");
var trabajador = new Trabajador("Soy Trabajador","Ronny",jefe);
var trabajador2 = new Trabajador("Soy Trabajador","Putita",jefe);
var trabajador3 = new Trabajador("Soy Trabajador","Guarra",jefe);
jefe.mostrarTrabajadores();
document.write(trabajador.apellido,trabajador.nombre," de :",trabajador.jefe.apellido);