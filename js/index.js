//Creo las variables
const TARIFAPORHORA = 20000;
const TARIFAPORFOTO = 5000;
const TARIFATALLERPDF = 2500;
const TARIFATALLERPRESENCIAL = 5000;
const TARIFACURSOPDF = 15000;
const TARIFACURSOPRESENCIAL = 30000;
let costo;
let horas;
let cantFotos;
let nombre;
let email;
let clientes = [];

//Funcion para cotizar los servicios y guardar el costo total
function cotizadorEventoYBooK() {
    horas = document.getElementById('cantidadHoras').value;
    cantFotos = document.getElementById('cantidadFotos').value;
    costo = (horas*TARIFAPORHORA) + (cantFotos*TARIFAPORFOTO); //Obtengo el costo total
    document.getElementById('presupuesto').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('mensaje').innerText = `El costo del servicio es de $${costo}`;
}

//Funcion para almacenar clientes en un array
function registrarCliente() {
    nombre = document.getElementById('nombre').value;
    email = document.getElementById('email').value;
    if (nombre && email) {
        clientes.push({ nombre, email });
        console.log(clientes);
        document.getElementById('registro').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else {
        alert("Por favor, complete el formulario para una mejor atencion");
    }
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
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('registro').style.display = 'block';
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cantidad').value = '';
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

//Funcion principal de la pagina
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