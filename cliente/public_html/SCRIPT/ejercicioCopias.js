/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function persona(txtNombre, nEdad) {
    // Definición de propiedades (valores)
    this.nombre = txtNombre;
    this.edad = nEdad;
    // Definición de métodos (funciones)
    this.copiar = fncopiar;
}
function fncopiar(objpersona) {
     objpersona.nombre=this.nombre;
    objpersona.edad=this.edad;
    
}
var persona1 = new persona("Erick",19);
var persona2= new persona();
persona1.copiar(persona2);


document.write("|  nombre.- <strong>",persona1.nombre, "</strong>  **<br>");
document.write("|  nombre2.- <strong>",persona2.nombre, "</strong>  **<br>");
document.write("|  edad.- <strong>",persona1.edad, "</strong>  **<br>");
document.write("|  edad2.- <strong>",persona2.edad, "</strong>  **<br>");
persona2.edad= 5;


for(var variable in persona1){
    document.write(variable+"="+ persona1[variable]);
}
for(var variable in persona2){
    document.write(variable+"="+ persona2[variable]);
}