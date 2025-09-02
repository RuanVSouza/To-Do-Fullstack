const express = require('express');
const cors = require('cors');
const tarefasRoutes = require('./routes/tarefasRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tarefas', tarefasRoutes);

module.exports = app;
