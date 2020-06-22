const express = require('express');
const app = express();


app.get('/', (req, res) => {
    return res.json({
        nome: 'Moraes',
        idade: 19
    })
});

app.listen(3000);

