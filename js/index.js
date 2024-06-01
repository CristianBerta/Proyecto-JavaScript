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
let modalidad;
//let servicio;
let nombre;
let email;
let clientes = [];

//Funcion para cotizar dos de los servicios y guardar el costo total
function cotizadorEventoYBooK() {
    const cantidadHoras = document.getElementById('cantidadHoras').value;
    const cantidadFotos = document.getElementById('cantidadFotos').value;
    //let costoHora = TARIFAPORHORA * horas; //Calculo el costo por horas
    //let costoFoto = TARIFAPORFOTO * cantFotos; //Calculo el costo por fotos
    costo = cantidadHoras + cantidadFotos; //Obtengo el costo total
    document.getElementById('presupuesto').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('mensaje').innerText = `El presupuesto es de $${costo}`;
}

//Funcion para obtener el nombre del usuario y guardarlo
// function pedirNombre() {
//     nombre = prompt("Ingrese su nombre:");
//     return nombre;
// }
//Funcion comentada ya que ahora obtenemos los datos a traves de un formulario

function registrarCliente() {
    nombre = document.getElementById('nombre').value;
    email = document.getElementById('email').value;
    if (nombre && email) {
        clientes.push({nombre, email});
        document.getElementById('registro').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else {
        alert("Por favor, complete el formulario para una mejor atencion");
    }
}

function calcularPresupuesto() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('presupuesto').style.display = 'block';
}

function salir() {
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('registro').style.display = 'block';
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cantidad').value = '';
}

//Funcion principal de la pagina
function menu(opcion) {
    //Primera parte de la funcion, se obtiene el nombre del usuario
    // nombre = pedirNombre();
    // alert("Bienvenido " + nombre + " a TheStranger PH");
    //Parte comentada ya que ahora lo realizamos de otra forma

    //Segunda parte de la funcion, se ejecuta el menu utilizando el ciclo dowhile
    //para repetir el mismo en caso de que se ingrese una opcion no valida
    //do {
        //Se muestra al usuario las opciones
        // servicio = parseInt(prompt("Ingrese el numero del tipo de servicio que esta buscando:\
        // \n1 Evento Social\
        // \n2 Book Fotografico\
        // \n3 Curso de Fotografia\
        // \n4 Taller de Fotografia\
        // \n5 Salir"));
        //Parte comentada ya que ahora lo realizamos de otra forma 

        //Con el ciclo switch se analiza la opcion ingresada por el usuario
        switch (opcion) {
            
            //En la opcion 1 y 2 se pide los datos para aplicar la funcion que cotiza el servicio
            case 1:
                horas = parseInt(prompt("Ingrese la cantidad de horas que pretende del servicio:"));
                cantFotos = parseInt(prompt("Ingrese la cantidad de fotos que desea:"))
                opcionesMenu.textContent ='El costo total del servicio es de $' + cotizadorEventoYBooK(horas, cantFotos);
                break;
            case 2:
                horas = parseInt(prompt("Ingrese la cantidad de horas que pretende del servicio:"));
                cantFotos = parseInt(prompt("Ingrese la cantidad de fotos que desea:"))
                alert("El costo total del servicio es de $" + cotizadorEventoYBooK(horas, cantFotos));
                break;
            
            //En la opcion 3 y 4 se vuelven a mostrar opciones y a utilizar switch
            case 3:
                let continuar;
                do{
                    modalidad = parseInt(prompt("En que formato te gustaria el Curso:\n1 pdf\n2 presencial"));
                        switch (modalidad) {
                            case 1:
                                alert("El costo del Curso en formato pdf es de $" + TARIFATALLERPDF);
                                break;
                            case 2:
                                alert("El costo del Curso de manera presencial es de $" + TARIFATALLERPRESENCIAL);
                                break;
                            default:
                                alert("Ingrese una opcion valida");
                                break;
                        }
                        continuar = confirm("Desea volver a ver las opciones?");
                    } while(continuar);
                break;
            case 4:
                modalidad = parseInt(prompt("En que formato te gustaria el Taller:\n1 pdf\n2 presencial"));
                    switch (modalidad) {
                        case 1:
                            alert("El costo del Taller en formato pdf es de $" + TARIFATALLERPDF);
                            break;
                        case 2:
                            alert("El costo del Taller de manera presencial es de $" + TARIFATALLERPRESENCIAL);
                            break;
                        default:
                            alert("Ingrese una opcion valida");
                            break;
                    }
                break;
            case 5:
                alert("Gracias por tu visita " + nombre);
                break;
            default:
                alert("Ingrese una opcion valida");
        }
//     } while (servicio !== 5); //Condicion para que se repita el menu
// }

//Ejecuto la funcion principal
//menu();