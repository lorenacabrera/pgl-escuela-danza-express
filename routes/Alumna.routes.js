// backend/routes/Alumna.routes.js
module.exports = app => {
    const Alumna = require("../controllers/Alumna.controller.js"); 
    const upload = require("../multer/upload.js");  // Importar el middleware de multer

    var router = require("express").Router();

    // Crear una nueva Alumna con imagen (carga de archivo)
    router.post("/", upload.single('image'), Alumna.create);  // Asegúrate de usar el nombre 'image' que se enviará desde el frontend

    // Obtener todas las alumnas
    router.get("/", Alumna.findAll);

    // Obtener una alumna por ID
    router.get("/:id", Alumna.findOne);

    // Actualizar una alumna por ID
    router.put("/:id", Alumna.update);

    // Eliminar una alumna por ID
    router.delete("/:id", Alumna.delete);

    // Usamos el router con el prefijo '/api/alumnas'
    app.use('/api/Alumna', router);
};
