$(document).ready(function(){
    let icono = document.createElement('i');

    function ponflecha(){
        $("nav > ol > li").append(icono);
    }

    // const ponflecha = function() {
    //     $("nav > ol > li").append(icono);
    // }
    ponflecha();
    $("nav > ol > li").click(function(){
        $(this).children.toggleClass("activo");
    }); 
});