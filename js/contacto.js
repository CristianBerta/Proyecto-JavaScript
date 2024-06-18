document.getElementById('contactoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const comment = document.getElementById('consulta').value;

    document.getElementById('respuestaMsj').textContent = 'Gracias por tu consulta. Me pondre en contacto contigo pronto.';

    document.getElementById('contactoForm').reset();
});