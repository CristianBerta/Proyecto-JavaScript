//Granim
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
            transitionSpeed: 3000
        }
    }
});

document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    clientes.push({ email, password });
    localStorage.setItem('usuarios', JSON.stringify(clientes));
    document.getElementById('registroMsj').textContent = 'Gracias por registrarte';
    window.location.href = 'login.html';
});