/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $("a").click(function(evento){
        alert("Has hecho clic en el enlace");
        //sirve ppara anular el click que tiene el href
//        evento.preventDefault();
    });
});
