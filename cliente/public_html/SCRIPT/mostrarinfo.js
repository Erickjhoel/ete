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
    this.envejecer = fnenvejecer;
}

function fnenvejecer() {
    with (this) {
        edad += 10;
        document.write("|  Nombre.- <strong>", nombre, "</strong>  **<br>");
        document.write("|  Edad.- <strong>", edad, "</strong>  **<br>");
    }
}
function alumno(objAlumno, nNota) {
    // Definición de propiedades (valores)
    this.lapersona = objAlumno;
    this.nota = nNota;
    this.visualizar = fnvisualizar;
}
function fnvisualizar() {
        with (this) {
        document.write("|  Nombre.- <strong>", lapersona.nombre, "</strong>  **<br>");
        document.write("|  Edad.- <strong>", lapersona.edad, "</strong>  **<br>");
        document.write("|  Nota.- <strong>", nota, "</strong>  **<br>");
    }
    }

var mi_nombre="";
var mi_edad=0;
var mi_nota=0;
mi_nombre=prompt("Introduce","");
mi_edad=parseInt(prompt("Introduce",0));
mi_nota=parseInt(prompt("Introduce",0));

var mi_persona= new persona(mi_nombre, mi_edad);
var mi_alumno=new alumno (mi_persona,mi_nota);
mi_alumno.visualizar();



    
