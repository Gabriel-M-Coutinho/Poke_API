//import mongoose
const mongoose = require('mongoose');

//preparando variaveis de ambiente
require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;


const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.0d409cx.mongodb.net/PokeDB?retryWrites=true&w=majority`;
// Configurar a chave secreta do JWT a partir do arquivo .env


const connectDB = async () => {
  try {

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return true
   
  } catch (error) {
    return false
  }
};

module.exports = connectDB;
