const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Art = require('../models/art');
const artData = require('./data/arts');

mongoose.connect('mongodb://localhost/art-database', (err, db) => {
  db.dropDatabase();

  Art.create(artData)
    .then(arts => console.log(`${arts.length} arts created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
