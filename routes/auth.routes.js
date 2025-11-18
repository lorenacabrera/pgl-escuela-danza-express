const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "mi_clave_secreta_123";

module.exports = app => {
    const express = require("express");
    const router = express.Router();
    const db = require("../models");
    const Usuario = db.usuario;

    // ------------------------------------
    // 1. REGISTRO DE USUARIO (CONTRASEÑA ENCRIPTADA)
    // ------------------------------------
    router.post("/register", async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email y password requeridos" });
        }

        const hashedPass = await bcrypt.hash(password, 10);

        try {
            const newUser = await Usuario.create({
                email,
                password: hashedPass
            });

            res.json({
                message: "Usuario registrado correctamente",
                userId: newUser.id
            });

        } catch (err) {
            res.status(500).json({ message: "Error registrando usuario", error: err });
        }
    });

    // ------------------------------------
    // 2. LOGIN BÁSICO
    // ------------------------------------
    router.post("/login-basic", async (req, res) => {
        const { email, password } = req.body;

        const user = await Usuario.findOne({ where: { email } });

        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ message: "Contraseña incorrecta" });

        res.json({
            message: "Autenticación básica exitosa",
            user: email
        });
    });

    // ------------------------------------
    // 3. LOGIN TOKEN BEARER (JWT)
    // ------------------------------------
    router.post("/login-token", async (req, res) => {
        const { email, password } = req.body;

        const user = await Usuario.findOne({ where: { email } });

        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ message: "Contraseña incorrecta" });

        const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "1h" });

        res.json({
            message: "Token generado correctamente",
            token
        });
    });

    app.use("/", router);
};
