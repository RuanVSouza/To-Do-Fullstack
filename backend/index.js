// backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req,res) => {
    res.json({message: 'Olá do backend!'});
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});