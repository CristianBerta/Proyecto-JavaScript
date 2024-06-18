const fotografias = [
    {src:'img/img1.jpg', precio: 5000},
    {src:'img/img2.jpg', precio: 6000},
    {src:'img/img3.jpg', precio: 7000},
    {src:'img/img4.jpg', precio: 8000},
    {src:'img/img5.jpg', precio: 9000},
    {src:'img/img6.jpg', precio: 10000},
    {src:'img/img7.jpg', precio: 11000}
];

let index = 0;

const variableFoto = document.getElementById('foto');
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
}

function cargarCarrito() {
    productosCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Fotografía ${index + 1}: $${item.precio}`;
        productosCarrito.appendChild(li);
        total += item.precio;
    });

    carritoTotal.textContent = total;
}

cargarFoto();