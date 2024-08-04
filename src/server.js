const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Endpoints
app.get('/api/explore', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/data/explore.json'));
});

app.get('/api/reviews', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/data/reviews.json'));
});

app.get('/api/articles', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/data/articles.json'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
