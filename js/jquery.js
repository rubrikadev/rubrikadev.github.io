$(document).ready(function(){
    $("nav > ol > li").click(function(){
        $(this).children.toggleClass("activo");
    }); 
});