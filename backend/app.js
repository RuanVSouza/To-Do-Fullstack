const express = require('express');
const cors = require('cors');


const app = express();

// Middlewares
app.use(cors());           
app.use(express.json());  

// Rotas
app.get('/', (req,res) => {
    res.json({message: 'Olá do backend!'});
});


module.exports = app;
