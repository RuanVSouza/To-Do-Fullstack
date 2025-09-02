const express = require('express');
const Tarefa = require('../models/Tarefa');

const getTarefas = async (req, res) => {
    try {
        const tarefas = await Tarefa.find()
        res.json(tarefas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getTarefaById = async (req, res) => {
    try {
        const tarefa = await Tarefa.findById(req.params.id);
        if (!tarefa) {return res.status(404).json({ message: 'Tarefa não encontrada' })}
        res.json(tarefa);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createTarefa = async (req, res) => {
    try {
        const tarefa = await Tarefa.create(req.body);
        res.status(201).json(tarefa);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getTarefas, getTarefaById, createTarefa };
