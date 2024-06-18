const fotografias = [
    {src:'img/img1.jpg', precio: 5000},
    {src:'img/img2.jpg', precio: 6000},
    {src:'img/img3.jpg', precio: 7000},
    {src:'img/img4.jpg', precio: 8000},
    {src:'img/img5.jpg', precio: 9000},
    {src:'img/img6.jpg', precio: 10000},
    {src:'img/img7.jpg', precio: 11000}
];

let currentIndex = 0;
const carrito = [];

const photoElement = document.getElementById('foto');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const addToCartButton = document.getElementById('agregarCarrito');
const cartItemsElement = document.getElementById('fotografiasCarrito');
const cartTotalElement = document.getElementById('totalCarrito');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? fotografias.length - 1 : currentIndex - 1;
    updatePhoto();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === fotografias.length - 1) ? 0 : currentIndex + 1;
    updatePhoto();
});

addToCartButton.addEventListener('click', () => {
    const photoSrc = fotografias[currentIndex];
    carrito.push(photoSrc);
    updateCart();
});

function updatePhoto() {
    const foto = fotografias[currentIndex];
    photoElement.src = foto.src;
}

function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Fotografía ${index + 1}: $${item.precio}`;
        cartItemsElement.appendChild(li);
        total += item.precio;
    });

    cartTotalElement.textContent = total;
}

updatePhoto();