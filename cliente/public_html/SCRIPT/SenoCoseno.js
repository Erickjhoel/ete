/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var grados=0;
var variable= setInterval("funcion()",100);
function funcion(){
    var sombra= Math.sin(grados/60)/2+0.5;// se divide entre dos y da valores entre
                                          //0.5 y -0.5 s, se le suma 0.5 y pasa a dar valores de
                                          //0 a 1
    document.title=sombra;
    grados++;
}