// require our 3rd party dependancies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('express-flash');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const router = require('./config/router');

//create our express app
const app = express();
const PORT = process.env.PORT || 8000;

// connect to our database
mongoose.connect('mongodb://localhost/art-database');

// set up our view engine
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);

// tell express to serve static files from the public folder
app.use(express.static(`${__dirname}/public`));

// setup body-bodyParser
app.use(bodyParser.urlencoded({ extended: true}));

app.use(methodOverride(req => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: 'GysHa^72u91sk0P(', // a random key used to encrypt the session cookie, mike made it up (you can make this up)
  resave: false,
  saveUninitialized: false
}));
// set up flash messages, must be below session - this is to show a flash message
app.use(flash());

// app.use(userAuth);


app.use(router);

//incoming traffic listener
app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
