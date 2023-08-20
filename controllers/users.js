const express  = require('express');
const router = express.Router()

const db = require('../db/models');

router.post('/users', async (req,res) =>{
   return res.json({
         error:false,  
        mensagem:"Usuario cadastrado com sucesso!"
    });
});


module.exports = router;