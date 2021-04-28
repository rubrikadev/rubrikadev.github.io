$(document).ready(function(){
    let distanciaBottom = 150;
    //menú de la izquierda
    let icono = document.createElement('i');

    function ponflecha(){
        $(".apartit").append(icono);
        $(".apartit i").addClass("fas fa-angle-right");
        $(".apartado:first-child .apartit i").addClass("activo");
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

        $.each(titulosObj, function(i, val){
            $(".indicecont .contlist").append(`<a class="punto" href="#${val.id}" >  ${val.texto} </a>`);
        });
        $(".contlist .punto:first-child").addClass("activo");
    }
    indice();
    
    $(window).scroll(function(){
        
        titulos.each(function( valor, index ) {
            let scrolltotal = $(window).scrollTop() + $(distanciaBottom);

            let idtit = $(this).attr("id");
            let titoffset = $(this).offset().top;
            let slidealto = $(this).parent().height();
            let finalslide = titoffset + slidealto;

            if (scrolltotal >= titoffset && scrolltotal  < finalslide) {
                $('.punto').removeClass("activo");
                $('.punto[href="#'+ idtit +'"]').addClass("activo");
            }
            else if ($(this).is("h2:first") && scrolltotal < titoffset ){
                $('.punto').removeClass("activo");
                $('.punto[href="#'+ idtit +'"]').addClass("activo");
                
            }
            else {

            }
           
        });
    });
    //Toggle menús & utilidades
    function plegarizq(){
        $(".menu").toggleClass("oculto");
        $("body").toggleClass("nopadizq");
    }
    function plegardcha() {
        $(".indicedcha ").toggleClass("oculto");
        $("body").toggleClass("nopaddcha");
    }
    function txtgrande() {
        $(":root").css("font-size", "120%");
    }
    function txtpeq() {
        $(":root").css("font-size", "100%");
    }
    $(".menu .togglemenu").click(function(){
        plegarizq();
    });
    $(".indicedcha .togglemenu").click(function(){
        plegardcha();
    });
    //Shortcuts
    $(document).on({
        keypress:function(event){
            let tecla = event.keyCode;
            console.log(tecla);
            if (event.keyCode == 113) {
                plegarizq();
            }
            else if (event.keyCode == 101) {
                plegardcha();
            }
            else if (event.keyCode == 43) {
                txtgrande();
            }
            else if (event.keyCode == 45) {
                txtpeq();
            }
        }
    });
    //Utilidades
    $(".grandetoggle").click(function(){
        txtgrande();
    });
    $(".pequenotoggle").click(function(){
       txtpeq();
    });
    //Copiar elementos
    if ($("main").hasClass("componentes")){
        $(".tarjeta, .btn, .fila, pre").on({
            click:function(){
                let copiado = $(this).prop("outerHTML");
                console.log(copiado);
                let elemtemp = $("<textarea>").val(copiado).appendTo("body").select();
                document.execCommand('copy');
                $(elemtemp).remove();
            },
        });
    }
    function toggler(){

        let boton = $(".toggle .botonera span");
        let botonArray = $.makeArray(boton);
        let slide = $(".toggle .pantalla .fila")
        let slideArray = $.makeArray(slide);

        //console.log(slideArray);
        botonObj = botonArray.map((data, indice) => {
            data.slideorder = indice;
            const result = {slideorder: indice}
            return result
        });
       boton.each(function(data, index){
            let orden = $(this).prop("slideorder");
            console.log(orden);
            $(this).attr("data-order", "slide"+orden);
       });
       slideObj = slideArray.map((data, indice) => {
        data.id="slide"+indice;
        const result = {id: "slide"+indice};
        return result
    });
        
        //console.log(slideObj)
        // botonesObj = botonesArray.map((data, indice) => {
           
        // });
    }
    toggler();
});




