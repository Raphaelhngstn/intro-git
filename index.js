const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.write('Hello GIT !');
    res.end();
});

app.get('/hello/:name', (req,res) => {
    res.write(`Salut ${req.params.name}`);
    res.end
});

app.listen(3000, _ => {
    console.log(' je suis en route sur http://localhost:3000');
});