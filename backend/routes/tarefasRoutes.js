const express = require('express');
const router = express.Router();
const { getTarefas, getTarefaById, createTarefa } = require('../controllers/tarefasController');

router.get('/', getTarefas);
router.get('/:id', getTarefaById);
router.post('/', createTarefa);

module.exports = router;
