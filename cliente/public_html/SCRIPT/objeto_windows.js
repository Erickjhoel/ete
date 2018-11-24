/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var miVentana;
//// var ventana;
//// var ancho;
//// var alto;
function abrirHija()
{
 window.open('hija.html', "Ventana hija","width=500, height=200");
}
//function cerrarHija(){
//    window.close(href="hija.html");//para cerar hija desde ella mismo
//    miVentana.close();//cierra hija desde padre
//}
//function cambiar(){
// ventana = self.open('https://www.google.com.mx/');
//}
//
//function abrirHijaAumentar()
//{
//  miVentana = window.open('hija.html', "Ventana hija","width=400, height=200");
//  miVentana= window.resizeBy(20,20);
//}
//function abrirHijaDisminuir()
//{
//  miVentana = window.open('hija.html', "Ventana hija","width=400, height=200");
//  miVentana= window.resizeBy(-20,-20);
//}
// document.write(navigator.appCodeName+"<br />"+
//         navigator.appName+"<br />"+navigator.appVersion+"<br />"
//         +navigator.platform+"<br />");
// document.write("+++++++++++++++++++++++++++++++++++++"+"<br />");
//document.write(screen.width+"<br />"+
//         screen.height+"<br />"+screen.availWidth+"<br />"
//         +screen.availHeight+"<br />"+screen.colorDepth+"<br />");
//document.write("+++++++++++++++++++++++++++++++++++++"+"<br />");
//document.write(location.hostname+"<br />"+
//         location.href+"<br />"+location.hash+"<br />"+
//         location.pathname+"<br />"+location.port+"<br />"+
//         location.protocol+"<br />"+location.search+"<br />");

////indica alto y ancho de la ventana
//    ancho = window.innerWidth;
//    alto = window.innerHeight;
//    alert("Ancho es: "+ancho+"--El alto es: "+alto);

//saca los metodos de windows y sus valores
//for (var x in window){
//    document.write(x+"--"+window[x]+"<br />");
//}
/////////cambia la paguina despues de tres segundos a google 
   function cambiar() {
              location.href="https://www.google.com/";
             }
             
             
             var miFecha = new Date();
             var miTimer = setTimeout ("cambiar()", 3000);
             