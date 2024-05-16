document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario hasta que se valide

    // Obtener los valores de los campos
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('Apellidos').value.trim();
    const correo = document.getElementById('Correo').value.trim();
    const contraseña = document.getElementById('Contraseña').value.trim();
    const errorElement = document.getElementById('error');
    let errorMessage = '';

    // Validaciones
    if (nombres === '') {
        errorMessage += 'El nombre es obligatorio.<br>';
    }
    if (apellidos === '') {
        errorMessage += 'Los apellidos son obligatorios.<br>';
    }
    if (correo === '') {
        errorMessage += 'El correo es obligatorio.<br>';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
        errorMessage += 'El correo no tiene un formato válido.<br>';
    }
    if (contraseña === '') {
        errorMessage += 'La contraseña es obligatoria.<br>';
    } else if (contraseña.length < 8) {
        errorMessage += 'La contraseña debe tener al menos 8 caracteres.<br>';
    }

    // Mostrar mensajes de error si existen
    if (errorMessage !== '') {
        errorElement.innerHTML = errorMessage;
    } else {
        errorElement.innerHTML = '';
        // Si todo está bien, redirigir a la otra página
        window.location.href = 'index2.html';
    }
});
