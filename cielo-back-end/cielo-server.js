const express = require('express');
const cors = require('cors');
const salesData = require('./data/salesData.json');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Define a sample API route
app.get('/api/transactions/all', (req, res) => {
  const data = salesData;
  res.json(data);
});

const port = 3001; // You can choose any available port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
