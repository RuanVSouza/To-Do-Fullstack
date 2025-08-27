const app = require('./app');
const connectDBMongo = require('./config/db');

connectDBMongo();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
