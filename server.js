//Este file sirve para levantar el servidor node y probar las APIs

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos desde la carpeta browser
app.use(express.static(path.join(__dirname, 'dist/listrace/browser')));

// Endpoints de la API
app.get('/api/explore', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/listrace/browser/assets/data/explore.json'));
});

app.get('/api/reviews', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/listrace/browser/assets/data/reviews.json'));
});

app.get('/api/posts', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/listrace/browser/assets/data/posts.json'));
});


// Redirigir todas las rutas a index.html (manejar rutas de Angular)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/listrace/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
