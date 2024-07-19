// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controller/authController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/api', authController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
