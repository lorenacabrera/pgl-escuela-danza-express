
module.exports = app => {
    const Nivel = require("../controllers/nivel"); 

    var router = require("express").Router();

    router.post("/", Nivel.create);

    router.get("/", Nivel.findAll);

    router.get("/:id", Nivel.findOne);

    router.put("/:id", Nivel.update);

    router.delete("/:id", Nivel.delete);

    app.use('/api/nivel', router);
};
