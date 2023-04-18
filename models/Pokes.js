const mongoose = require('mongoose');

const PokeSchema = new mongoose.Schema({
  name: String,
  id: Number,
  types:Array
})





// Criar e exportar o modelo "Ficha"
module.exports = mongoose.model('Poke', PokeSchema);