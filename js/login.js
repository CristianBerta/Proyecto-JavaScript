document.getElementById('inicioSesion').addEventListener('submit', function(e) {
    e.preventDefault();
    email = document.getElementById('loginEmail').value;
    password = document.getElementById('loginPassword').value;
    const clientesRecuperados = JSON.parse(localStorage.getItem('usuarios'));
    const usuario = clientesRecuperados.find((elemento) => elemento.email === email && elemento.password === password);
    console.log(usuario);
    if (usuario) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('errorMsj').textContent = 'Email o Contraseña incorrecta';
    }
});