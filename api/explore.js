const path = require('path');
const fs = require('fs');

export default (req, res) => {
  const filePath = path.join(process.cwd(), 'dist/listrace/browser/assets/data/explore.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read file' });
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
};
