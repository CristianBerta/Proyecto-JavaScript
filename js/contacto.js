document.getElementById('contactoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    email = document.getElementById('email').value;
    const comentario = document.getElementById('consulta').value;

    document.getElementById('respuestaMsj').textContent = 'Gracias por tu consulta. Me pondre en contacto contigo pronto.';

    document.getElementById('contactoForm').reset();
});