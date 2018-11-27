/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*hacer un ejercicio que pida año chequeando que se introduzca entre 2000 y 2018
 y mes entre 1 y 12
 y numero de nacimientos que sea numero
 de forma repetitiva hasta que no desee introducir mas
 que muestre los años y el total de nacimientos por años y lñuego por meses */


var tabla = new Array();
for (var i = 0; i < 18; i++) {
    tabla[i] = new Array();
    for (var j = 0; j < 12; j++) {
        tabla[i][j] = 0;
    }
}
var salir = false;
do {
    var mi_mes = parseInt(prompt("Introduce  MES", 0));
    if (mi_mes > 12 || mi_mes < 1) {
        alert("error");
    } else {
        var mi_anio = parseInt(prompt("Introduce AÑO", 0));
        if (mi_anio > 2018 || mi_anio < 2000) {
            alert("error");
        } else {
            var mi_nacimiento = parseInt(prompt("Introduce numero de nacidos", 0));
            var anioFin = mi_anio - 2000;
            tabla[anioFin][mi_mes - 1] = mi_nacimiento;
            salir = confirm("¿Decea agregar a otra persona?");
        }
    }

} while (salir);


var resulAnios = 0;
for (var j = 0; j < 18; j++) {
        for (var e = 0; e < 12; e++) {
            if (tabla[j][e] !== 0) {
                resulAnios += tabla[j][e];
                 document.write("  Año: ", tabla[j][0], "<br>");
                document.write("  Nacimientos: ", resulAnios, "<br>");
            }
        }
    }


