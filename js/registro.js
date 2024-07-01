document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    clientes.push({ email, password });
    localStorage.setItem('usuarios', JSON.stringify(clientes));
    document.getElementById('registroMsj').textContent = 'Gracias por registrarte';
    window.location.href = 'login.html';
});

