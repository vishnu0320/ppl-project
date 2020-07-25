var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  picture: String,
  tag: String,
  user: {
    fullname: String,
    email: String,
  },
  time: { type: Date, default: Date.now },
  like: [String],
  comments: [{ body: String, userID: String }],
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
