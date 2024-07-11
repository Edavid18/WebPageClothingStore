const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para parsear el body de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Ruta para manejar la recepción de datos del formulario
app.post('/submit-form', (req, res) => {
    const data = req.body;

    // Leer archivo actual, agregar nuevo dato y escribir de nuevo
    const filePath = path.join(__dirname, 'formData.json');
    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }

        let jsonData = [];
        if (fileData) {
            jsonData = JSON.parse(fileData);
        }

        jsonData.push(data);

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error al escribir el archivo' });
            }
            res.status(200).json({ message: 'Datos guardados exitosamente' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
