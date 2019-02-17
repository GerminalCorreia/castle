// Castle schema in mongoDB
const mongoose = require('mongoose');

const castleSchema = new mongoose.Schema({
  name : String,
  price : Number,
  starred : Boolean
});

module.exports = mongoose.model('castle', castleSchema);
