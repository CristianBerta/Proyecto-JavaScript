

// let cart = loadCartFromLocalStorage();
// const errorCarritoDiv = document.getElementById('error_carrito');
// errorCarritoDiv.style.color = 'red';
// function mandarMjeDeError(productId){
//     errorCarritoDiv.innerHTML = `<p>Producto con ID: ${productId} no encontrado</p>`;    
// }
// function addToCart(productId, quantity) {
//     const product = products.find(p => p.id === productId);
//     if (!product) {
//         mandarMjeDeError(productId)
//         return;
//     }

//     const cartItem = cart.find(item => item.id === productId);

//     if (cartItem) {
//         cartItem.quantity += quantity;
//         cartItem.totalPrice = cartItem.quantity * product.price;
//     } else {
//         cart.push({
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: quantity,
//             totalPrice: quantity * product.price
//         });
//     }

//     saveCartToLocalStorage();
//     renderCart();
// }

// function renderProducts() {
//     const productList = document.getElementById('product-list');
//     productList.innerHTML = ''; // Limpiar la lista de productos
//     products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.innerHTML = `
//             <p>${product.name} - $${product.price}</p>
//             <button onclick="addToCart(${product.id}, 1)" class="button_grey">Agregar al Carrito</button>
//         `;
//         productList.appendChild(productDiv);
//     });
// }

// function renderCart() {
//     const cartDiv = document.getElementById('cart');
//     cartDiv.innerHTML = '';
//     cart.forEach(item => {
//         const cartItemDiv = document.createElement('div');
//         cartItemDiv.innerHTML = `
//             <p>ID: ${item.id}, Nombre: ${item.name}, Cantidad: ${item.quantity}, Precio Total: $${item.totalPrice}</p>
//         `;
//         cartDiv.appendChild(cartItemDiv);
//     });
// }

// function saveCartToLocalStorage() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// function loadCartFromLocalStorage() {
//     const cartData = localStorage.getItem('cart');
//     return cartData ? JSON.parse(cartData) : [];
// }

// document.addEventListener('DOMContentLoaded', () => {
//     renderProducts();
//     renderCart();
// });

// function testError() {
//     addToCart(999, 1); // El Producto con id 999 no existe, por eso lo testeo
// }
// testError();

if (window.location.pathname.endsWith('productos.html')) {
    const fotografias = [
        { id: 1, src: 'img/img1.jpg', title: 'Foto 1', price: 100 },
        { id: 2, src: 'img/img2.jpg', title: 'Foto 2', price: 150 },
        { id: 3, src: 'img/img3.jpg', title: 'Foto 3', price: 200 },
        { id: 4, src: 'img/img4.jpg', title: 'Foto 4', price: 150 },
        { id: 5, src: 'img/img5.jpg', title: 'Foto 5', price: 300 },
        { id: 6, src: 'img/img6.jpg', title: 'Foto 6', price: 150 },
        { id: 7, src: 'img/img7.jpg', title: 'Foto 7', price: 400 },
    ];

    const galleryDiv = document.getElementById('galeria');
    fotografias.forEach(fotos => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'fotos';

        const img = document.createElement('img');
        img.src = fotos.src;
        img.alt = fotos.title;

        const button = document.createElement('button');
        button.textContent = `Comprar - $${fotos.price}`;
        button.addEventListener('click', () => addToCart(fotos));

        photoDiv.appendChild(img);
        photoDiv.appendChild(button);
        galleryDiv.appendChild(photoDiv);
    })
};

const cartDiv = document.getElementById('cart');
let cart = [];

function addToCart(fotos) {
    cart.push(fotos);
    renderCart();
}

function renderCart() {
    cartDiv.innerHTML = '';
    if (cart.length === 0) {
        cartDiv.textContent = 'El carrito está vacío';
    } else {
        const ul = document.createElement('ul');
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.title} - $${item.price}`;
            ul.appendChild(li);
        });
        cartDiv.appendChild(ul);
    }
}