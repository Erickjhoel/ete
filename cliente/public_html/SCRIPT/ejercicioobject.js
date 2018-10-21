//var nombres= new Array("Erick","Santiago","JuanJose","Jaimito");
//
//for(var i=0; i<nombres.length;i++){
//    document.write(nombres[i]);
//    document.write("<br>");
//    
//}


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
var mi_persona= new Array();
do{
    
    var mi_nombre="";
    var mi_edad=0;
        mi_nombre=prompt("Introduce","");
        mi_edad=parseInt(prompt("Introduce",0));
        
    mi_persona[mi_persona.length]=new persona(mi_nombre, mi_edad);
    
     
     
}while(confirm("¿Decea agregar a otra persona?"));
   for(var i=0; i<mi_persona.length;i++){
    document.write(mi_persona[i].nombre);
    document.write("<br>");
   }
//que me permita introducir datos de personas de forma repetitiva hasta quye no desee mas
//cuando no desee escribir mas datos el programa debe mostrar los nombres de todas las personas
//un nombre en cada linea