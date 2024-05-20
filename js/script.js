//Creo las variables globales
let tarifaPorHora = 20000;
let tarifaPorFoto = 5000;
let tarifaTallerPdf = 2500;
let tarifaTallerPresencial = 5000;
let tarifaCursoPdf = 15000;
let tarifaCursoPresencial = 30000;
let costo;
let horas;
let cantFotos;
let modalidad;
let servicio;
let nombre;

//Funcion para cotizar dos de los servicios y guardar el costo total
function cotizadorEventoYBooK(horas, cantFotos) {
    let costoHora = tarifaPorHora * horas; //Calculo el costo por horas
    let costoFoto = tarifaPorFoto * cantFotos; //Calculo el costo por fotos
    costo = costoHora + costoFoto; //Obtengo el costo total
    return costo;
}

//Funcion para obtener el nombre del usuario y guardarlo
function pedirNombre() {
    nombre = prompt("Ingrese su nombre:");
    return nombre;
}

//Funcion principal de la pagina
function menu() {
    
    //Primera parte de la funcion, se obtiene el nombre del usuario
    nombre = pedirNombre();
    alert("Bienvenido " + nombre + " a TheStranger PH");
    
    //Segunda parte de la funcion, se ejecuta el menu utilizando el ciclo dowhile
    //para repetir el mismo en caso de que se ingrese una opcion no valida
    do {
        //Se muestra al usuario las opciones
        servicio = parseInt(prompt("Ingrese el numero del tipo de servicio que esta buscando:\
        \n1 Evento Social\
        \n2 Book Fotografico\
        \n3 Curso de Fotografia\
        \n4 Taller de Fotografia\
        \n5 Salir"));

        //Con el ciclo switch se analiza la opcion ingresada por el usuario
        switch (servicio) {
            
            //En la opcion 1 y 2 se pide los datos para aplicar la funcion que cotiza el servicio
            case 1:
                horas = parseInt(prompt("Ingrese la cantidad de horas que pretende del servicio:"));
                cantFotos = parseInt(prompt("Ingrese la cantidad de fotos que desea:"))
                alert("El costo total del servicio es de $" + cotizadorEventoYBooK(horas, cantFotos));
                break;
            case 2:
                horas = parseInt(prompt("Ingrese la cantidad de horas que pretende del servicio:"));
                cantFotos = parseInt(prompt("Ingrese la cantidad de fotos que desea:"))
                alert("El costo total del servicio es de $" + cotizadorEventoYBooK(horas, cantFotos));
                break;
            
            //En la opcion 3 y 4 se vuelven a mostrar opciones y a utilizar switch
            case 3:
                modalidad = parseInt(prompt("En que formato te gustaria el Curso:\n1 pdf\n2 presencial"));
                    switch (modalidad) {
                        case 1:
                            alert("El costo del Curso en formato pdf es de $" + tarifaTallerPdf);
                            break;
                        case 2:
                            alert("El costo del Curso de manera presencial es de $" + tarifaTallerPresencial);
                            break;
                        default:
                            alert("Ingrese una opcion valida");
                            break;
                    }
                break;
            case 4:
                modalidad = parseInt(prompt("En que formato te gustaria el Taller:\n1 pdf\n2 presencial"));
                    switch (modalidad) {
                        case 1:
                            alert("El costo del Taller en formato pdf es de $" + tarifaTallerPdf);
                            break;
                        case 2:
                            alert("El costo del Taller de manera presencial es de $" + tarifaTallerPresencial);
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
    } while (servicio !== 5); //Condicion para que se repita el menu
}

//Ejecuto la funcion principal
menu();