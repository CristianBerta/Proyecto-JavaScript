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

document.getElementById('contactoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    email = document.getElementById('email').value;
    const comentario = document.getElementById('consulta').value;

    document.getElementById('botonEnviar').addEventListener('click', () => {
        Swal.fire({
            title: "Gracias por tu consulta",
            text: "Me pondre en contacto contigo pronto",
            icon: "success"
        });
    })

    document.getElementById('contactoForm').reset();
});