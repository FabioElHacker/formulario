document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    // Aquí puedes agregar lógica para verificar las credenciales con el servidor
    // En este ejemplo, supongamos que tienes un arreglo de usuarios
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(u => u.correo === correo && u.contrasena === contrasena);

    if (usuario) {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Correo o contraseña incorrectos');
    }

    window.location.href = ''; // Cambia esto por tu URL de login
});