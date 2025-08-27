const mongoose = require('mongoose');

const connectDBMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ToDoList', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Erro de conexão: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDBMongo;
