module.exports = app => {
    const express = require("express");
    const router = express.Router();

    // Login básico (sin token)
    router.post("/login-basic", (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email y contraseña requeridos" });
        }

        // Usuario de ejemplo
        const USER = {
            email: "test@example.com",
            password: "123456"
        };

        if (email !== USER.email) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (password !== USER.password) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        return res.json({
            message: "Autenticación correcta",
            user: email
        });
    });

    app.use("/", router);
};
