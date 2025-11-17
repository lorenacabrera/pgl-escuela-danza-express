const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();

// --- Configuración CORS para Ionic ---
const corsOptions = {
    origin: "http://localhost:8100" // Ionic por defecto corre en 8100
};
app.use(cors(corsOptions));

// --- Middleware ---
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Base de datos (Sequelize) ---
const db = require("./models");
// db.sequelize.sync({ force: true }).then(() => console.log("Drop and re-sync db."));

// --- Ruta de bienvenida ---
app.get("/", (req, res) => {
    res.json({ message: "Bienvenida/o a la escuela de danza" });
});

// Ajusta el nombre: mayúscula o minúscula
try {
    require("./routes/Alumno.routes")(app); // si el archivo se llama Alumno.routes.js
} catch (err) {
    try {
        require("./routes/alumno.routes")(app); // si el archivo se llama alumno.routes.js
    } catch (err) {
        console.error("No se pudo cargar la ruta de Alumno:", err.message);
    }
}

// Nivel
try {
    require("./routes/nivel.routes")(app); // nombre en minúscula
} catch (err) {
    console.error("No se pudo cargar la ruta de Nivel:", err.message);
}

//photo

try {
    require("./routes/photo.routes")(app);
} catch (err) {
    console.error("No se pudo cargar la ruta de Photos:", err.message);
}

//basic

try{
    require("./routes/basic.routes")(app);
} catch(err){
    console.error("no se pudo cargar la ruta de basic:",err.message);
}

// Cambié a 3000 para evitar conflicto con Adminer (8081)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
