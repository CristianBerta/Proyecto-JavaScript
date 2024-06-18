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

//Funcion para almacenar clientes en un array
// function registrarCliente() {
//     nombre = document.getElementById('nombre').value;
//     email = document.getElementById('email').value;
//     if (nombre && email) {
//         clientes.push({ nombre, email });
//         console.log(clientes);
//         document.getElementById('registro').style.display = 'none';
//         document.getElementById('menu').style.display = 'block';
//     }
// }