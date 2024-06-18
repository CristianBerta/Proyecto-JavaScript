document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email)
    if (nombre && email) {
        clientes.push({nombre, email});
        console.log(clientes);
        window.location.href = 'index.html';
    }
});