/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
//    $("a").click(function (evento) {
//        alert("Has hecho clic en el enlace");
//        //sirve ppara anular el click que tiene el href ya que previene efecto normal
////        evento.preventDefault();//previene efecto normal
//    });
    $(".t1").mouseover(function (evento) {
        $(".t2").addClass("desaparece");
    });
    $(".t1").mouseout(function (evento) {
        $(".t2").removeClass("desaparece");
    });
    //otra manera de hacerlo sin clases*************
//    $(".t2").mouseover(function (evento) {
//        $(".t1").css("visibility","hidden");
//    });
//    $(".t2").mouseout(function (evento) {
//        $(".t1").css("visibility","visible");
//    });
    $(".t2").mouseover(function (evento) {
        if ($(".t1").css("visibility") === "hidden") {
            $(".t1").css("visibility", "visible");
        } else if ($(".t1").css("visibility") === "visible") {
            $(".t1").css("visibility", "hidden");
        }
        ;
    });

    $("a").click(function (evento) {
        $(".im").css("width", "500px");

    });
    //PRUEBA DE CALLBACK*******************************************
    $(".micapa").fadeOut(2000, function (evento) {
        $(".micapa").css({top: 300, left: 200});
    });
    $(".micapa").fadeIn(2000, function (evento) {
        $(".micapa").fadeOut(2000, function (evento) {
            $(".micapa").css({top: 400, left: 500});
        });
        $(".micapa").fadeIn(2000);
    });
        



});