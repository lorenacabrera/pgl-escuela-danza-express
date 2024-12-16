const db = require("../models");
const Alumna = db.Alumna;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.id_alumna || !req.body.nombre){
        res.status(400).send({
            message: "Los campos id_alumna y nombre son obligatorios!"
        });
        return;
        
    }

    const imageUrl = req.file ? `/public/images/${req.file.filename}` : null;

const nuevaAlumna = {
    id_alumna: req.body.id_alumna,
    nombre: req.body.nombre,
    imageUrl: imageUrl,
};

Alumna.create(nuevaAlumna)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(err => {
        res.status(500).send({
         message: err.message || "Error al crear la alumna."
    });
});
};
exports.findAll = (req, res) => {
    Alumna.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió un error al obtener las alumnas."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Alumna.findByPk(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `No se encontró una alumna con id=${id}.`
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al obtener la alumna con id=${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

        Alumna.update(req.body, {
            where: { id_alumna: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "La alumna fue actualizada correctamente."
                    });
                } else {
                    res.send({
                        message: `No se pudo actualizar la alumna con id=${id}. Tal vez no se encontró o los datos están vacíos.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: `Error al actualizar la alumna con id=${id}.`
                });
            });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Alumna.destroy({
        where: { id_alumna: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La alumna fue eliminada correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la alumna con id=${id}. Tal vez no se encontró.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al eliminar la alumna con id=${id}.`
            });
        });
};
