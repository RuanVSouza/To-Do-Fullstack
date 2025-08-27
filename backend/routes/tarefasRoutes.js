const express = require('express');
const router = express.Router();
const { getTarefas } = require('../controllers/tarefasController');
router.get('/', getTarefas);
module.exports = router;