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