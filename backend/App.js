// Imports
const express = require('express');
const cors = require('cors');
const pooproutes = require('./routes/poopRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use('/', pooproutes);

app.listen(PORT, () => {
    console.log(`Our app is running! Yay - On port ${PORT}`)
});