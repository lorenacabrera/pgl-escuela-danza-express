// backend/routes/Alumno.routes.js
module.exports = app => {
    const Alumno = require("../controllers/Alumno.controller.js"); 
    
    var router = require("express").Router();

    // Crear un nuevo alumno (SIN IMAGEN)
    router.post("/", Alumno.create);

    // Obtener todos los alumnos
    router.get("/", Alumno.findAll);

    // Obtener un alumno por ID
    router.get("/:id", Alumno.findOne);

    // Actualizar un alumno por ID
    router.put("/:id", Alumno.update);

    // Eliminar un alumno por ID
    router.delete("/:id", Alumno.delete);

    app.use('/api/alumno', router);
};
