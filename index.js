const express = require("express");
const cors = require("cors");
const path = require("path");

// CORS para permitir llamadas desde Ionic (8100)

app.use(cors({ origin: "http://localhost:8100" }));

// Middleware principal
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Servir carpeta "public" (donde están las imágenes)
// Las fotos estarán accesibles en:
// http://localhost:3000/public/images/archivo.jpg

app.use('/public', express.static(path.join(__dirname, 'public')));


// Base de datos (Sequelize)
const db = require("./models");
// reiniciar BD (solo una vez):
// db.sequelize.sync({ force: true }).then(() => console.log("DB Reset"));

app.get("/", (req, res) => {
  res.json({ message: "Bienvenida/o a la escuela de danza" });
});

// Alumno
require("./routes/Alumno.routes")(app);

// Nivel
require("./routes/nivel.routes")(app);

// Fotos (CRUD real con Multer)
require("./routes/foto.routes")(app);

// Autenticación (register, login, token…)
require("./routes/auth.routes")(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
