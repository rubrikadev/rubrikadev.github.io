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
            $(".indicecont ul").append(`<li class="punto"> <a href="#${val.id}" >  ${val.texto} </a> </li> `);
        });
        // $("indice ul").html(titulosArray);
    }
    indice();
});
