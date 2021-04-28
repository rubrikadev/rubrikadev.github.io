<!DOCTYPE html>
<html lang="es">
<head>
    <?php include 'head.html' ?>
    <title>Apuntes</title>
</head>
<body>
    <?php include 'comp/barraizq.php' ?>
    <main id="componentes" class="componentes">
        <h1>Componentes</h1>
        <section class="slide">
            <h2>Los h2 no llevan clase</h2>
            <p>Los <span class="tag">p</span> <span class="tag">h1</span> y <span class="tag">h2</span>   funcionan sin ponerles una clase.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fuga temporibus laudantium voluptas dolorem error culpa deserunt, exercitationem optio pariatur corporis non totam ex fugit officiis! Aut commodi quasi eos?</p>
            <a href="#" class="btn">Botón <b>a.btn</b></a>
        </section>
        <section class="slide">
            <h2>Otro subtítulo para comprobar</h2>
            <ul class="lista">
                <li>Usa la <b>ul.lista</b></li>
                <li>Elemento</li>
                <li>Elemento</li>
                <li>Elemento</li>
                <li>Elemento</li>
            </ul>
        </section>
        <section class="slide">
            <h2>Grid</h2>
            <div class="fila flex">
                <div class="col ejemplo">
                    <p>La estructura html para el grid siempre es <span class="clase">.fila</span> > <span class="clase">.col*X</span></p>
                    <p>Su ancho lo marca el atributo <b>flex</b>, así que da igual el nº de cols</p>
                </div>
                <div class="col ejemplo"></div>
            </div>
            <div class="fila pad gut flex">
                <div class="col ejemplo">
                    <p>Puedes añadir filas con padding y box-shadow con con <span class="clase">.fila.pad</span></p>
                </div>
                <div class="col ejemplo">
                    <p>Para tener las cols separadas solo hay que usar <span class="clase">.fila.gut</span> </p>
                </div> 
                <div class="col ejemplo">
                    <p>Esta fila de ejemplo tiene <span class="clase">.fila.gut.pad</span></p>
                </div>
            </div>
        </section>
        <section class="slide">
            <h2>Destacados</h2>
            <div class="tarjeta">
                <h4>Título de la tarjeta</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore molestiae eius iste porro culpa fuga placeat minus consequatur! Facere, eligendi doloremque deleniti molestias soluta magni in eius tenetur illum! Totam!</p>
                <a class="btn" href="#">Botonera</a>
            </div>
            <div class="fila flex gut">
                <div class="tarjeta">
                    <h4>Título de la tarjeta</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore molestiae eius iste porro culpa fuga placeat minus consequatur! Facere, eligendi doloremque deleniti molestias soluta magni in eius tenetur illum! Totam!</p>
                </div>
                <div class="tarjeta">
                    <h4>Título de la tarjeta</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore molestiae eius iste porro culpa fuga placeat minus consequatur! Facere, eligendi doloremque deleniti molestias soluta magni in eius tenetur illum! Totam!</p>
                </div>
            </div>
        </section>
        <section class="slide">
            <h2>Imágenes</h2>
            <div class="fila pad gut">
                <div class="col">
                    <h5>Usa h5 como título dentro de una col</h3>
                    <p>Las imágenes ocupan el 100% de su contenedor.</p>
                    <p>Simplemente métela dentro de una .fila > .col.</p>
                </div>
                <div class="col">
                    <img src="img/htmllogohd.png" alt="">
                </div>
            </div>
        </section>
        <section class="slide">
            <h2>Código</h2>
            <p>Los bloques de código usan las etiquetas <span class="tag">pre</span> y <span class="tag">code</span></p>
            <p>El código html tiene un problema: hay que usar unicode para los caracteres "<" y ">"". Copia el primer ejemplo para ver el marcado correcto</p>
            <div class="fila">
                <div class="col">
                    <pre><code class="html">&lt;p class="miclase"&gt;Hola &lt;/p&gt; </code></pre>
                </div>
            </div>
            <p>Para el código html y js la tabulación no es automática. El salto de línea se hace con <span class="tag">br</span> y el tabulado con <span class="tag">i</span></p>
            <div class="fila">
                <div class="col">
                    <pre><code class="js">$(".indicedcha .togglemenu").click(function(){<br><i></i> plegardcha();<br>});</code></pre>
                    <pre><code class="css">p {<br>color: red;<br>font-size: 20px;<br>}</code></pre>
                </div>
            </div>
        </section>
        <section class="slide">
            <h2>Toggle</h2>
            <div class="col">
                <div class="toggle flex">
                    <div class="botonera">
                        <span class="activo">Botonera 1</span>
                        <span>Botonera 2</span>
                        <span>Botonera 3</span>
                    </div>
                    <div class="pantalla">
                        <div class="fila">
                            <div class="col">Contenido 1</div>
                            <div class="col">Más contenido</div>
                        </div>
                        <div class="fila">
                            <div class="col">Contenido 1</div>
                            <div class="col">Más contenido</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php include 'comp/barradcha.html' ?>
</body>
</html>