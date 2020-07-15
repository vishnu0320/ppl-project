var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  picture: String,
  tag: String,
  userID: String,
  time: { type: Date, default: Date.now },
  like: [String],
  comments: [
    { body: String, date: { type: Date, default: Date.now }, userID: String },
  ],
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
