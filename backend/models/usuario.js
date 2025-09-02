const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true, minlength: 3, maxlength: 50 },
  login: { type: String, required: true, unique: true, minlength: 3, maxlength: 50 },
  senha: { type: String, required: true, minlength: 8, maxlength: 20 },
  dataCriacao: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Usuario', usuarioSchema);
