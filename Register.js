document.getElementById('Registro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    // Obtener los usuarios existentes o crear un arreglo vacío
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Comprobar si el usuario ya existe
    const usuarioExistente = usuarios.find(u => u.correo === correo);
    if (usuarioExistente) {
        alert('El correo ya está registrado.');
        return;
    }

    // Crear un nuevo usuario
    const nuevoUsuario = { correo, contrasena };
    usuarios.push(nuevoUsuario); // Agregar el nuevo usuario al arreglo

    // Almacenar el nuevo arreglo de usuarios en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Redirigir a la página de login
    window.location.href = 'Index_LOGIN.html'; // Cambia esto por tu URL de login
});

