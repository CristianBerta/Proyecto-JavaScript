//Libreria Granim
var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'img/imgFondo.jpg',
        blendingMode: 'saturation',
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 4000
        }
    }
});

//Funcion para cotizar los servicios y guardar el costo total
function cotizadorEventoYBooK() {
    horas = document.getElementById('cantidadHoras').value;
    cantFotos = document.getElementById('cantidadFotos').value;
    costo = (horas*TARIFAPORHORA) + (cantFotos*TARIFAPORFOTO); //Obtengo el costo total
    document.getElementById('presupuesto').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('mensaje').innerText = `El costo del servicio es de $${costo}`;
}

//-------------------------------------------------------------------
//Funciones para rediccionarme al menu correspondiente
function eventoYbook() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('presupuesto').style.display = 'block';
}
function curso() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('curso').style.display = 'block';
}
function taller() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('taller').style.display = 'block';
}
function volverAlMenu() {
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}
function salir() {
    window.location.href = 'login.html'
}
//----------------------------------------------------------------------

//----------------------------------------------------------------------
//funciones para imprimir los costos de los cursos y los talleres
function cursoPdf() {
    document.getElementById('curso').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('mensaje').innerText = `El costo del curso en pdf es de $${TARIFACURSOPDF}`;
}
function cursoPresencial() {
    document.getElementById('curso').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('mensaje').innerText = `El costo del curso presencial es de $${TARIFACURSOPRESENCIAL}`;
}
function tallerPdf() {
    document.getElementById('taller').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('mensaje').innerText = `El costo del taller en pdf es de $${TARIFATALLERPDF}`;
}
function tallerPresencial() {
    document.getElementById('taller').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('mensaje').innerText = `El costo del taller presencial es de $${TARIFATALLERPRESENCIAL}`;
}
//----------------------------------------------------------------------

//Funcion del Menu Principal
function menu(opcion) {
    switch (opcion) {
        //En la opcion 1 y 2 se cotiza un servicio
        case 1:
            eventoYbook();
            break;
        case 2:
            eventoYbook();
            break;
        //En la opcion 3 y 4 se imprime un costo
        case 3:
            curso();
            break;
        case 4:
            taller();
            break;
        //Opcion 5 se reinicia la pagina
        case 5:
            salir();
            break;
        default:
            break;
    }
}