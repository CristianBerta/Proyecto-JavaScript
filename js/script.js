//Creo variables globales que muy posiblemente se utilicen
let nombre;
let usuario;
let contrasenia;

nombre = prompt("Ingrese su nombre:"); //Asigno el nombre del usuario

alert("Bienvenido " + nombre + " a Internet.SA");

//Primera opcion de Menu
let num1 = parseInt(prompt("Ingrese 1 si ya es cliente\
\nIngrese 2 si no es cliente"));

//Segun la opcion ingresada 
switch (num1) {
    case 1:
        usuario = prompt("Ingrese su usuario");
        contrasenia = prompt("Ingrese su contraseña");
        break;
    case 2:
        alert("Desea hacerse cliente?");
        break;
    default:
        alert("Ingrese una opcion valida!!");
        break;
}

let num2 = alert("En que podemos ayudarte hoy?\
\nIngrese 1 si desea saber precios sobre el servicio internet\
\nIngrese 2 si desea saber precios sobre el servicio de cable\
\nIngrese 3 si desea conocer el estado de su cuenta\
\nIngrese 4 si desea dar de baja el servicio");

switch (num2) {
    case 1:
        alert("Contamos con 3 servicios de Internet\
        \n50Megas por $10000\
        \n100Megas por $20000\
        \n150Megas por $30000");
        break;
    case 2:
        alert("Contamos con 3 servicios de Cable\
        \nClassic por $10000\
        \nPremiun por $20000\
        \nGold por $30000");
        break;
    case 3:
        alert("Su cuenta no presenta deudas");
        break;
    case 4:
        alert("Lamentamos que quieras dar de baja el servicio, pronto nos comunicaremos con usted");
        break;
    default:
        alert("Ingrese una opcion valida!!")
        break;
}