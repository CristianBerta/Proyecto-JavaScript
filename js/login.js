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

document.getElementById('botonRegistrarse').addEventListener('click', () => {
    window.location.href = 'registro.html';
});

document.getElementById('inicioSesion').addEventListener('submit', function (event) {
    event.preventDefault();

    email = document.getElementById('loginEmail').value;
    password = document.getElementById('loginPassword').value;

    //Promesa
    loginUsuario(email, password)
        .then(res => {
            if (res.success) {
                window.location.href = 'menu.html';
            }
        })
        .catch(error => {
            //Sweetalert2
            Swal.fire({
                title: "Error",
                text: "Email o Contraseña incorrectas",
                icon: "error"
            });
        })
});

const boton = document.getElementById('botonIngresar');
boton.addEventListener('click', function () {
});

//Asincronia y promesas
function loginUsuario(email, password) {
    return new Promise((resolve, reject) => {
        const clientesRecuperados = JSON.parse(localStorage.getItem('usuarios'));
        const usuario = clientesRecuperados.find((elemento) => elemento.email === email && elemento.password === password);
        setTimeout(() => {
            if (usuario) {
                resolve({ success: true });
            } else {
                reject({ success: false });
            }
        }, 1000);
    });
}