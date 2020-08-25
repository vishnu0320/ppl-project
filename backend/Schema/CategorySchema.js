var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  title: String,
  picture: String,
});

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;
