const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, minlength: 2, required: true, unique: true }
});

schema.virtual('arts', {
  ref: 'Art',
  localField: '_id',
  foreignField: 'city'
});

module.exports = mongoose.model('City', schema);
