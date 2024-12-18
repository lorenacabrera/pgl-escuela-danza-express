const db = require("../models");
const Alumno = db.Alumno;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nombre){
        res.status(400).send({
            message: "El campo nombre es obligatorio"
        });

        return;
        
    }

    // const imageUrl = req.file ? `/public/images/${req.file.filename}` : null;

    const nuevoAlumno = {
        nombre: req.body.nombre,
//        imageUrl: imageUrl,
    };

    Alumno.create(nuevoAlumno).then(data => {
        res.status(201).send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Error al crear la alumno." });
    });
};

exports.findAll = (req, res) => {
    Alumno.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió un error al obtener las alumnos."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Alumno.findByPk(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `No se encontró una alumno con id=${id}.`
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al obtener la alumno con id=${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

        Alumno.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "La alumno fue actualizada correctamente."
                    });
                } else {
                    res.send({
                        message: `No se pudo actualizar la alumno con id=${id}. Tal vez no se encontró o los datos están vacíos.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: `Error al actualizar la alumno con id=${id}.`
                });
            });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Alumno.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La alumno fue eliminada correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la alumno con id=${id}. Tal vez no se encontró.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al eliminar la alumno con id=${id}.`
            });
        });
};
