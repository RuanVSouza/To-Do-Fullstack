const express = require('express');
const router = express.Router();

// Dados estáticos
const tarefas = [
  { id: 1, titulo: 'teste Node.js', concluida: false },
  { id: 2, titulo: 'Fazer exercícios', concluida: true },
  { id: 3, titulo: 'Ler documentação', concluida: false }
];

// Rota GET para retornar as tarefas
router.get('/', (req, res) => {
  res.json(tarefas);
});

module.exports = router;
