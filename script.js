const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('file-input');

uploadBtn.addEventListener('click', function() {
    fileInput.click(); // Esto "hace clic" en la puerta invisible
});

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        alert(`¡Excelente! Has seleccionado el archivo: ${file.name}.`);
        // Aquí iría el código para subir la foto al mosaico
    }
});