const multer = require('multer');
const path = require('path');

// Configuración del almacenamiento de Multer (donde se guardarán los archivos subidos)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Indica la carpeta donde se guardarán las imágenes
    cb(null, 'public/images'); // Ruta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    var filetype = '';
    if(file.mimetype === 'image/gif'){
        filetype = 'gif';
    }
    if(file.mimetype === 'image/png'){
        filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg'){
        filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '_' + filetype);

    // Establecer un nombre único para el archivo subido
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Asigna un nombre único
  }
});

// Crear una instancia de Multer con la configuración de almacenamiento
const upload = multer({ storage: storage });

// Exportar el middleware de Multer para su uso en otros archivos
module.exports = upload;
