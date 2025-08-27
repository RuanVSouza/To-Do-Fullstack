const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: false },
    dataCriacao: { type: Date, default: Date.now },
    dataConclusao: { type: Date, default: null },   
    status: { type: String, enum: ['progresso', 'concluida'], default: 'progresso' },

});

const Tarefa = mongoose.model('Tarefa', tarefaSchema);
module.exports = Tarefa;

