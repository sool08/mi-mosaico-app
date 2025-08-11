// Tu configuración de Firebase
const firebaseConfig = {
  // ... tu código de configuración aquí ...
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar los servicios que usaremos
const storage = firebase.storage();
const db = firebase.firestore();

// ----------------------------------------------------
// El código de la magia
// ----------------------------------------------------

const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('file-input');
const mosaicContainer = document.getElementById('mosaic-container');

uploadBtn.addEventListener('click', function() {
    fileInput.click();
});

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Creamos un nombre único para la foto
        const fileName = `${new Date().getTime()}-${file.name}`;
        const storageRef = storage.ref(`mosaico-fotos/${fileName}`);

        // Subir el archivo al almacén
        storageRef.put(file).then((snapshot) => {
            alert('¡Excelente! Tu foto ha sido subida a la nube.');
            
            // Obtener la URL de la foto recién subida
            snapshot.ref.getDownloadURL().then((url) => {
                // Crear un elemento de imagen
                const img = document.createElement('img');
                img.src = url;
                img.classList.add('mosaic-image');

                // Añadir la foto al contenedor del mosaico
                mosaicContainer.appendChild(img);
            });

        }).catch((error) => {
            console.error("Error al subir la foto:", error);
            alert("Hubo un error al subir la foto.");
        });
    }
});