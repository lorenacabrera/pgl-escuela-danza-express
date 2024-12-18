// backend/routes/Alumno.routes.js
module.exports = app => {
    const Alumno = require("../controllers/Alumno.controller.js"); 
    const upload = require("../multer/upload.js");  // Importar el middleware de multer

    var router = require("express").Router();

    // Crear una nueva Alumno con imagen (carga de archivo)
    router.post("/", upload.single('image'), Alumno.create);  // Asegúrate de usar el nombre 'image' que se enviará desde el frontend

    // Obtener todas las alumnas
    router.get("/", Alumno.findAll);

    // Obtener una alumna por ID
    router.get("/:id", Alumno.findOne);

    // Actualizar una alumna por ID
    router.put("/:id", Alumno.update);

    // Eliminar una alumna por ID
    router.delete("/:id", Alumno.delete);

    // Usamos el router con el prefijo '/api/alumnas'
    app.use('/api/alumno', router);
};
