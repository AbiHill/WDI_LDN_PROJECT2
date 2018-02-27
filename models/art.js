const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String },
  // below is getting the userId
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

commentSchema.methods.isOwnedBy = function(user) {
  return this.user && user._id.equals(this.user._id);
};

const schema = new mongoose.Schema({
  artist: { type: mongoose.Schema.ObjectId, ref: 'Artist'},
  image: { type: String },
  description: { type: String },
  comments: [ commentSchema ],
  city: { type: mongoose.Schema.ObjectId, ref: 'City'},
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

schema.methods.isOwnedBy = function(user) {
  return this.user && user._id.equals(this.user._id);
};

module.exports = mongoose.model('Art', schema);
