const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "12345";

module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const db = require("../models");
  const Usuario = db.usuario;

  // Importar middlewares ANTES de usarlos
  const basicAuth = require("../middlewares/basicAuth");
  const verifyToken = require("../middlewares/verifyToken");

 //registro encriptado
  router.post("/register", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email y password requeridos" });
    }

    try {
      const existe = await Usuario.findOne({ where: { email } });
      if (existe) {
        return res.status(400).json({ message: "El usuario ya existe" });
      }

      const hashedPass = await bcrypt.hash(password, 10);

      const newUser = await Usuario.create({
        email,
        password: hashedPass,
      });

      res.json({
        message: "Usuario registrado correctamente",
        userId: newUser.id,
      });

    } catch (err) {
      res.status(500).json({ message: "Error registrando usuario", error: err });
    }
  });

  //login basico con auth
  router.post("/login-basic", basicAuth, (req, res) => {
    res.json({
      message: "Autenticación básica exitosa",
      usuario: req.usuario.email,
    });
  });

  //login con token JWT
  router.post("/login-token", async (req, res) => {
    const { email, password } = req.body;

    const user = await Usuario.findOne({ where: { email } });

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Token generado correctamente",
      token,
    });
  });

  //ruta protegida auth
  router.get("/ruta-protegida-basic", basicAuth, (req, res) => {
    res.json({
      message: "Acceso permitido mediante Basic Auth",
      usuario: req.usuario.email,
    });
  });

  // ruta protegida token
  router.get("/ruta-protegida-token", verifyToken, (req, res) => {
    res.json({
      message: "Acceso permitido mediante Token",
      userId: req.userId,
    });
  });

  app.use("/", router);
};
