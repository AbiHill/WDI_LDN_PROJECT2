const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, minlength: 2, required: true, unique: true }
});

schema.virtual('arts', {
  ref: 'Art',
  localField: '_id',
  foreignField: 'artist'
});

module.exports = mongoose.model('Artist', schema);
