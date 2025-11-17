const db = require("../models");
const Usuario = db.usuario;

module.exports = async function basicAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Basic ")) {
        return res.status(401).json({ message: "Auth Basic requerido" });
    }

    // "email:password" en base64
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [email, password] = credentials.split(':');

    const usuario = await Usuario.findOne({ where: { email, password } });

    if (!usuario) {
        return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    req.usuario = usuario;
    next();
};
