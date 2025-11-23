const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); // Para archivos CSS y JS
app.use('/img', express.static(path.join(__dirname, 'img'))); // Para imágenes

// Ruta de inicio
app.get('/', (req, res) => {
    res.render('index', { title: 'CARS' });
});

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Iniciar servidor
const port = 55080;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
