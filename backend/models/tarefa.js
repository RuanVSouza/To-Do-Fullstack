const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  dataCriacao: { type: Date, default: Date.now },
  dataConclusao: { type: Date },
  status: { type: String, enum: ['progresso', 'concluida'], default: 'progresso' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
});

const Tarefa = mongoose.model('Tarefa', tarefaSchema);
module.exports = Tarefa;
