const express = require('express');
const path = require('path');
const app = express();
const port = 1009;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('test');
});

app.listen(port);