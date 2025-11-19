const db = require("../models");
const Usuario = db.usuario;
const bcrypt = require("bcrypt");

module.exports = async function basicAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    // Verificar header
    if (!authHeader || !authHeader.startsWith("Basic ")) {
        return res.status(401).json({ message: "Auth Basic requerido" });
    }

    // Obtener "email:password" en base64
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
    const [email, password] = credentials.split(":");

    // Buscar usuario por email
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
        return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Verificar contraseña con bcrypt
    const validPassword = await bcrypt.compare(password, usuario.password);

    if (!validPassword) {
        return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Guardar usuario en req
    req.usuario = usuario;

    next();
};
