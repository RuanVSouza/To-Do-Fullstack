const express = require('express');
const cors = require('cors');
const tarefaRoutes = require('./routes/tarefasRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tarefas', tarefaRoutes); // prefixo /tarefas

module.exports = app;
