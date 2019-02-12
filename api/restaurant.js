var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
  name : String,
  stars : Number
});

module.exports = mongoose.model('restaurant', restaurantSchema);
