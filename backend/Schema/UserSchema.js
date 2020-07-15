var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
