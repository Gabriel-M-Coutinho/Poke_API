const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const connectDB = require('./DB/db');
const jwt = require('jsonwebtoken');


//import midlewares
const {ProtectRoute} = require('./middlewares/jwt')

// Importar os controladores
const { addUser,login,editUser} = require('./controller/User');
const {addpoke,pokeget,geturlpoke,getPokes,deletepoke,editpoke} = require('./controller/Poke')

// Configuração do Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configuração cors
app.use(cors());


/*  Rotas De User          */
app.post('/signin', addUser);
app.post('/login',login)
app.put('/edituser/:id',ProtectRoute,editUser)

/*  Rotas De Poke         */
app.get('/poke/status/:id',  ProtectRoute,pokeget)
app.get('/poke/:id',ProtectRoute,geturlpoke)
app.post('/poke',ProtectRoute,addpoke)
app.get('/poke',ProtectRoute,getPokes)
app.put('/poke/edit/:id',ProtectRoute,editpoke)
app.delete('/poke/:id',ProtectRoute,deletepoke)




connectDB();


app.listen(4000, () => {
    
});

module.exports = app;





