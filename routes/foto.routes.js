// routes/foto.routes.js
module.exports = (app) => {
    const express = require("express");
    const router = express.Router();
    const db = require("../models");
    const Foto = db.foto;
    const upload = require("../middlewares/multer");
  
    // listar fotos
    router.get("/api/fotos", async (req, res) => {
      try {
        const fotos = await Foto.findAll();
        res.json(fotos);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al listar fotos" });
      }
    });
  
    // subir foto
    router.post("/api/fotos", upload.single("foto"), async (req, res) => {
      try {
        if (!req.file) return res.status(400).json({ message: "Archivo requerido" });
  
        const nueva = await Foto.create({
          titulo: req.body.titulo || "",
          filename: req.file.filename,
          url: "http://localhost:3000/public/images/" + req.file.filename
        });
  
        res.json(nueva);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al subir foto" });
      }
    });
  
    // actualizar foto
    router.put("/api/fotos/:id", upload.single("foto"), async (req, res) => {
      try {
        const foto = await Foto.findByPk(req.params.id);
        if (!foto) return res.status(404).json({ message: "Foto no encontrada" });
  
        foto.titulo = req.body.titulo || foto.titulo;
  
        if (req.file) {
          foto.filename = req.file.filename;
          foto.url = "http://localhost:3000/public/images/" + req.file.filename;
        }
  
        await foto.save();
        res.json(foto);
  
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al actualizar foto" });
      }
    });
  
    // eliminar foto
    router.delete("/api/fotos/:id", async (req, res) => {
      try {
        await Foto.destroy({ where: { id: req.params.id } });
        res.json({ message: "Foto eliminada" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al eliminar foto" });
      }
    });
  
    app.use("/", router);
  };
  