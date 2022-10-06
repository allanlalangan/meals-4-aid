const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { connectDB } = require('./config/db');

// SERVER START
const app = express();
app.use(cors());
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server on port ${port}`);
});

// CONNECT TO DATABASE
connectDB();

// PARSE BODY MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// FALLBACK ROUTE
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});
