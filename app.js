const express = require('express');
const app = express();

const db = require('./db/models');
// controllers
const users = require('./controllers/users');
//rotas
app.use('/',users);






app.use(express.json())
app.listen(8080,()=>{
   console.log('Servidor rodando'); 
})