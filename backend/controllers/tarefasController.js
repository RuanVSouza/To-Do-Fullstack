const express = require('express');
const Tarefa = require('../models/tarefa');

const getTarefas = async (req, res) => {
    try {
        const tarefas = await Tarefa.find().populate('userId', 'name email');
        res.json(tarefas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Exportando a função corretamente
module.exports = { getTarefas };
