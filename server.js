//Este file sirve para levantar el servidor node y probar las APIs

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos desde la carpeta browser
app.use(express.static(path.join(__dirname, 'dist/listrace/browser')));

// Endpoints for the API
app.get('/api/explore', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/listrace/browser/assets/data/explore.json'));
});

app.get('/api/reviews', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/listrace/browser/assets/data/reviews.json'));
});

app.get('/api/posts', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/listrace/browser/assets/data/posts.json'));
});

//If we deploy to Netlify create the _redirects file
//in the project root directory to handle routes

// Redirigir todas las rutas no API a index.html
app.get('*', (req, res) => {
  // Solo redirigir si la ruta no es /api/*
  if (!req.originalUrl.startsWith('/api/')) {
    res.sendFile(path.join(__dirname, 'dist/listrace/browser/index.html'));
  } else {
    res.status(404).send('Data not found or endpoint does not exist');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
