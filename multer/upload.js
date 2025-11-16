const multer = require('multer');
const path = require('path');

// Configurar almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    // Generar un nombre único para el archivo
    const ext = path.extname(file.originalname).toLowerCase();
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext;

    cb(null, uniqueName); // SOLO UNA VEZ
  }
});

const upload = multer({ storage });

module.exports = upload;
