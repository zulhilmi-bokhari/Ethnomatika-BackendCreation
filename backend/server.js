const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001; // I'll use port 3001 to avoid conflicts with the frontend dev server

app.use(cors());
app.use(express.json());

// API endpoint to get heritage data
app.get('/api/heritage', (req, res) => {
  const heritageDataPath = path.join(__dirname, 'data', 'heritage.json');
  fs.readFile(heritageDataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading heritage data:', err);
      res.status(500).send('Error reading heritage data');
      return;
    }

    const heritageData = JSON.parse(data);
    const { ethnic } = req.query;

    if (ethnic) {
      const filteredData = heritageData.filter(item => item.ethnicGroup === ethnic);
      res.json(filteredData);
    } else {
      res.json(heritageData);
    }
  });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
