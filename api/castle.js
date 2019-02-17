// Castle schema in mongoDB
var mongoose = require('mongoose');

var castleSchema = new mongoose.Schema({
  name : String,
  price : Number,
  starred : Boolean
});

module.exports = mongoose.model('castle', castleSchema);
