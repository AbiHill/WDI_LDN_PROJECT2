const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  artname: { type: String },
  artist: { type: String },
  location: { type: String },
  image: { type: String },
  decription: { type: String }
});



module.exports = mongoose.model('Art', schema);
