const express = require('express');

const app = express();

const path = require('path');

const hbs = require('hbs');

let port = 80;

app.set('views', './views');
hbs.registerPartials(path.join(__dirname, './views/partials'));
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('index.hbs', {

    });
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {

    });
});
app.get('/contact', (req, res) => {
    res.render('contact.hbs', {

    });
});
app.listen(port, () => {
    console.log('Running on:' + port)
});