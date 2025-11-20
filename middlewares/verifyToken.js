const jwt = require("jsonwebtoken");
const SECRET = "12345";

module.exports = (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header) {
    return res.status(403).json({ message: "Token no proporcionado" });
  }

  const token = header.split(" ")[1];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido" });
    }

    req.userId = decoded.id;
    next();
  });
};
