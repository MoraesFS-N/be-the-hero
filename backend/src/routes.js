const express = require('express');
const routes = express.Router();

routes.post('/users', (req, res) => {
    
    const body = req.body;

    console.log(body);
    
    return res.json({
        nome: 'Moraes',               
        idade: 19
    })
});

module.exports = routes;
