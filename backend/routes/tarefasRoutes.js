const express = require('express');
const router = express.Router();
const { getTarefas, getTarefaById } = require('../controllers/tarefasController');

router.get('/', getTarefas);
router.get('/:id', getTarefaById);

module.exports = router;
