const express = require('express');
const app = express();

// Add this line to parse JSON bodies
app.use(express.json());

// ...existing code...
