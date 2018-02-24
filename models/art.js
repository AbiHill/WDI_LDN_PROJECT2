const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  artname: { type: String, minlength: 2, required: true },
  artist: { type: String, minlength: 2, required: true},
  location: { type: String, maxlength: 360, required: true },
  image: { type: String, pattern: /^http/, required: true }
});



module.exports = mongoose.model('Art', schema);
