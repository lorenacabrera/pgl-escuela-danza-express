const express = require("express");
const cors = require("cors");  // Importar el middleware CORS
const app = express();
const path = require('path');


// Habilitar CORS para todas las rutas y orígenes
app.use(cors());  
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const db = require("./models");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

app.get("/", (req, res) => {
    res.json({ message: "Bienvenida/o a la escuela de danza" });
});

require("./routes/Alumno.routes")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
