//Granim
var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
        source: 'img/imgFondo.jpg',
        blendingMode: 'saturation',
    },
    states: {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 3000
        }
    }
});

let fotografias = [];
let index = 0;

const variableFoto = document.getElementById('foto');
const nombreFoto = document.getElementById('nombreFoto');
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
    if (fotografias.length > 0) {
        const foto = fotografias[index];
        variableFoto.src = foto.src;
        nombreFoto.textContent = foto.nombre;
    }
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

fetch('js/fotografias.json')
    .then(res => res.json())
    .then(foto => {
        fotografias = foto;
        cargarFoto();
    });