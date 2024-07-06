//Variables Globales
const header = document.querySelector('header');
const img = document.createElement('img');
const nav = document.createElement('nav');
const a = document.createElement('a');
const links = ["Menu", "Productos", "Contacto"];

const footer = document.getElementById('footer');
const parrafoFooter = document.createElement('p');
const TIME = new Date().getFullYear();


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
let password;
const clientes = [];
const carrito = [];