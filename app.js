const express = require('express');
const path = require('path');
const app = express();
const port = 1009;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port);