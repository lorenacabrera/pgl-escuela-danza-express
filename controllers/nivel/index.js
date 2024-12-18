const db = require("../../models");
const Nivel = db.Nivel;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nombre){
        res.status(400).send({
            message: "El campo nombre es obligatorio"
        });

        return;
    }

    const nuevoNivel = {
        nombre: req.body.nombre,
    };

    Nivel.create(nuevoNivel).then(data => {
        res.status(201).send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Error al crear el nivel" });
    });
};

exports.findAll = (req, res) => {
    Nivel.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió un error al obtener los niveles."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Nivel.findByPk(id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `No se encontró un nivel con id=${id}.`
            });
        } else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error al obtener el nivel con id=${id}.`
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

        Nivel.update(req.body, {
            where: { id: id }
        }).then(num => {
            if (num == 1) {
                res.send({
                    message: "El nivel fue actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el nivel con id=${id}. Tal vez no se encontró o los datos están vacíos.`
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: `Error al actualizar el nivel con id=${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Nivel.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "El nivel fue eliminado correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar el nivel con id=${id}. Tal vez no se encontró.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error al eliminar el nivel con id=${id}.`
        });
    });
};
