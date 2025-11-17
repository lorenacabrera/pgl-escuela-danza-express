const basicAuth = require("../middlewares/basicAuth");

module.exports = app => {
    const router = require("express").Router();

    router.get("/privado-basic", basicAuth, (req, res) => {
        res.json({ message: "Acceso concedido con Auth Basic" });
    });

    app.use("/api", router);
};
