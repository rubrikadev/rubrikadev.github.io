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

    let titulos = $("main h2");
    let titulosArray = $.makeArray(titulos);
    //menu de la derecha


    function indice() {

        titulosObj= titulosArray.map((data , indice) => {
            data.id="punto"+indice;
            const resultado = { id:"punto"+indice, texto: $(data).html()}
            return resultado
        });

        //console.log(titulosArray);

        $.each(titulosObj, function(i, val){
            $(".indicecont .contlist").append(`<a class="punto" href="#${val.id}" >  ${val.texto} </a>`);
        });
        //$(".contlist .punto:first-child").addClass("activo");
    }
    indice();
    
    $(window).scroll(function(){
        
        //console.log(scroll);
        titulos.each(function( valor, index ) {
            let scrolltotal = $(window).scrollTop();

            let idtit = $(this).attr("id");
            let titoffset = $(this).offset().top;
            let slidealto = $(this).parent().height();
            let finalslide = titoffset + slidealto;

            if (scrolltotal >= titoffset && scrolltotal < finalslide) {
                $('.punto[href="#'+ idtit +'"]').addClass("activo");
                console.log(slidealto);
            }
            else if ($(this).is("h2:first") && scrolltotal < titoffset ){
                $('.punto[href="#'+ idtit +'"]').addClass("activo");
                
            }
            else {
                $('.punto[href="#'+  idtit +'"]').removeClass("activo");
                
            }
           
        });
    });
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
        $(":root").css("font-size", "120%");
    });
    $(".pequenotoggle").click(function(){
        $(":root").css("font-size", "100%");
    });

});




