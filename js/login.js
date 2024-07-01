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

document.getElementById('botonRegistrarse').addEventListener('click', () => {
    window.location.href = 'registro.html';
})

document.getElementById('inicioSesion').addEventListener('submit', function(e) {
    e.preventDefault();
    email = document.getElementById('loginEmail').value;
    password = document.getElementById('loginPassword').value;
    const clientesRecuperados = JSON.parse(localStorage.getItem('usuarios'));
    const usuario = clientesRecuperados.find((elemento) => elemento.email === email && elemento.password === password);
    console.log(usuario);
    if (usuario) {
        window.location.href = 'menu.html';
    } else {
        document.getElementById('botonIngresar').addEventListener('click', () => {
            Swal.fire({
                title: "Usuario Incorrecto",
                text: "Email o Contraseña incorrectas",
                icon: "error"
            });
        })
    }
});