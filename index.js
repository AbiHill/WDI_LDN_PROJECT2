const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const expressLayouts = require('express-ejs-layouts');
const router = require('./config/router');
const mongoose = require('mongoose');

// connect to our database
mongoose.connect('mongodb://localhost/art-database');

app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);
app.get('/', (req, res) => res.render('pages/home'));


app.use(router);
app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
