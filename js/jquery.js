$(document).ready(function(){

    //menú de la izquierda
    let icono = document.createElement('i');

    function ponflecha(){
        $(".apartit").append(icono);
        $(".apartit i").addClass("fas fa-angle-right");
    }

    ponflecha();
    $(".apartit").click(function(){
        $(this).children(".fas").toggleClass("activo");
        $(this).siblings(".subapartado").slideToggle("fast");
    });

    //menu de la derecha
    function indice() {
        let titulos = $("main h2");
        let titulosArray = $.makeArray(titulos);

        titulosArray = titulosArray.map((data , indice) => {

            data.id="punto"+indice;
            const resultado = { id:"punto"+indice, texto: $(data).html()}
            return resultado
        });

        console.log(titulosArray);

        $.each(titulosArray, function(i, val){
            $(".indicecont .contlist").append(`<a class="punto" href="#${val.id}" >  ${val.texto} </a>`);
        });
        // $("indice ul").html(titulosArray);
    }
    indice();
    //Toggle menús
    $(".menu .togglemenu").click(function(){
        $(".menu").toggleClass("oculto");
        $("body").toggleClass("nopadizq");
    });
    $(".indicedcha .togglemenu").click(function(){
        $(".indicedcha ").toggleClass("oculto");
        $("body").toggleClass("nopaddcha");
    });
    //Utilidades
    $(".grandetoggle").click(function(){
        $(":root").css("font-size", "115%");
    });
    $(".pequenotoggle").click(function(){
        $(":root").css("font-size", "100%");
    });
});
