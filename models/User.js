const mongoose = require('mongoose');



// Definir o esquema para o modelo "User"
const userSchema = new mongoose.Schema({
  email:{type:String},
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});










// Criar e exportar o modelo "User"
module.exports = mongoose.model('User', userSchema);