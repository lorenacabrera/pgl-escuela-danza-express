module.exports = (app) => {
    const photos = []; // Base de datos temporal en memoria
    let nextId = 1;

    // Obtener todas las fotos
    app.get("/photos", (req, res) => {
        res.json(photos);
    });

    // Crear nueva foto
    app.post("/photos", (req, res) => {
        const { base64, title, description } = req.body;
        if (!base64) return res.status(400).json({ message: "Foto requerida" });

        const newPhoto = {
            id: nextId++,
            base64,
            title: title || "",
            description: description || ""
        };
        photos.push(newPhoto);
        res.status(201).json(newPhoto);
    });

    // Actualizar foto
    app.put("/photos/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const { base64, title, description } = req.body;
        const photo = photos.find(p => p.id === id);
        if (!photo) return res.status(404).json({ message: "Foto no encontrada" });

        if (base64) photo.base64 = base64;
        if (title) photo.title = title;
        if (description) photo.description = description;

        res.json(photo);
    });

    // Eliminar foto
    app.delete("/photos/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const index = photos.findIndex(p => p.id === id);
        if (index === -1) return res.status(404).json({ message: "Foto no encontrada" });

        photos.splice(index, 1);
        res.json({ message: "Foto eliminada" });
    });
};
