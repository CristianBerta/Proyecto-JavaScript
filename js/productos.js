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

const fotografias = [
    {src:'img/img1.jpg', precio: 5000, nombre: 'Fotografia 1'},
    {src:'img/img2.jpg', precio: 6000, nombre: 'Fotografia 2'},
    {src:'img/img3.jpg', precio: 7000, nombre: 'Fotografia 3'},
    {src:'img/img4.jpg', precio: 8000, nombre: 'Fotografia 4'},
    {src:'img/img5.jpg', precio: 9000, nombre: 'Fotografia 5'},
    {src:'img/img6.jpg', precio: 10000, nombre: 'Fotografia 6'},
    {src:'img/img7.jpg', precio: 11000, nombre: 'Fotografia 7'}
];

let index = 0;

const variableFoto = document.getElementById('foto');
const nombreFoto = document.getElementById('nombreFoto')
const botonAnterior = document.getElementById('ant');
const botonSiguiente = document.getElementById('sig');
const botonAgregarCarrito = document.getElementById('agregarCarrito');
const productosCarrito = document.getElementById('fotografiasCarrito');
const carritoTotal = document.getElementById('totalCarrito');

botonAnterior.addEventListener('click', () => {
    index = (index === 0) ? fotografias.length - 1 : index - 1;
    cargarFoto();
});

botonSiguiente.addEventListener('click', () => {
    index = (index === fotografias.length - 1) ? 0 : index + 1;
    cargarFoto();
});

botonAgregarCarrito.addEventListener('click', () => {
    const fotoSrc = fotografias[index];
    carrito.push(fotoSrc);
    cargarCarrito();
});

function cargarFoto() {
    const foto = fotografias[index];
    variableFoto.src = foto.src;
    nombreFoto.textContent = foto.nombre;
}

function cargarCarrito() {
    productosCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Producto ${index + 1}: ${item.nombre} $${item.precio}`;
        productosCarrito.appendChild(li);
        total += item.precio;
    });

    carritoTotal.textContent = total;
}

cargarFoto();