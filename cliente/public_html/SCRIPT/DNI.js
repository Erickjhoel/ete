/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//*Cambiar caracteres **************************************
var mi_cadenaLetra =("Tarararara 03189718D y hhghfhjjdf 03856419G dsfgvsdnvkds 07956419G");
var plantilla =/\d{8}[A-Z]/g;
var res = mi_cadenaLetra.replace(/0/g, "A");
    document.write("DNI"+res+"<br />");


//saca los denis en podsiciones
var mi_cadenaLetra =("Tarararara 03189718D y hhghfhjjdf 03856419G dsfgvsdnvkds 07956419G");
var res = mi_cadenaLetra.match(/\d{8}[A-Z]/g);
for (var i = 0; i < res.length; i++) {
     document.write("El DNI numero "+i+" es: "+res[i] +"<br />");
     
}
//************ muestra el primer DNI**************
var mi_cadenaLetra =("Tarararara 03189718D y hhghfhjjdf sdnfvsjkldn dsfgvsdnvkds");
var plantilla = /\d{8}[A-Z]/g;
var res = plantilla.exec(mi_cadenaLetra);
    alert("El primer DNI es "+res);
//*** para verificar si es un dni*******************
var plantilla = /^\d{8}[A-Z]$/g;
var letras= new Array("T","R","W","A","G","M","Y","F","P","D","X","B"
        ,"N","J","Z","S","Q","V","H","L","C","K","E");
var resul=0;
var letra="";

if (plantilla.test(mi_cadenaLetra)) {
  resul= mi_cadenaLetra.substr(0,8)%23;
  letra = letras[resul];
    if(letra===mi_cadenaLetra.substr(8,1)){
         document.write("DNI CORRECTO"+"<BR />");
    }
} else {
    document.write("No es un DNI"), "<BR />";
}
            