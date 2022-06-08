const express = require('express');
const app = express();
const path = require('path');

const publicPath =path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))

});

app.get('/probando', (req, res) => {
    res.sendFile(path.join(__dirname, './views/probando.html'))

});

app.listen(3030, () =>
    console.log('Servidor funcionando')
);