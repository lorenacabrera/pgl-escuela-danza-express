const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "mi_clave_secreta_123";

module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const db = require("../models");
  const Usuario = db.usuario;

  // ============================
  //  REGISTRO (con contraseña ENCRIPTADA)
  // ============================
  router.post("/register", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email y password requeridos" });
    }

    try {
      // comprobar si existe
      const existe = await Usuario.findOne({ where: { email } });
      if (existe) {
        return res.status(400).json({ message: "El usuario ya existe" });
      }

      // encriptar password
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

  // ============================
  //  LOGIN BÁSICO
  // ============================
  router.post("/login-basic", async (req, res) => {
    const { email, password } = req.body;

    const user = await Usuario.findOne({ where: { email } });

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(401).json({ message: "Contraseña incorrecta" });

    res.json({
      message: "Autenticación básica exitosa",
      user: email,
    });
  });

  // ============================
  //  LOGIN CON TOKEN (JWT)
  // ============================
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

  // ============================
  //  RUTA PROTEGIDA con BASIC AUTH
  // ============================
  const basicAuth = require("../middlewares/basicAuth");

  router.get("/ruta-protegida-basic", basicAuth, (req, res) => {
    res.json({
      message: "Acceso permitido mediante Basic Auth",
      usuario: req.usuario.email,
    });
  });

  // ============================
  //  RUTA PROTEGIDA con TOKEN
  // ============================
  const verifyToken = require("../middlewares/verifyToken");

  router.get("/ruta-protegida-token", verifyToken, (req, res) => {
    res.json({
      message: "Acceso permitido mediante Token",
      userId: req.userId,
    });
  });

  // Montar rutas
  app.use("/", router);
};
