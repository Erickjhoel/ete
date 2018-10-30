/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var miVentana;
 var ventana;
function abrirHija()
{
  miVentana = window.open('hija.html', "Ventana hija","width=500, height=200");
}
function cerrarHija(){
    window.close(href="hija.html");//para cerar hija desde ella mismo
    miVentana.close();//cierra hija desde padre
}
function cambiar(){
 
 ventana = self.open('https://www.google.com.mx/');

}
