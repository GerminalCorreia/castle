// Restaurant schema in mongoDB
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name : String
});

module.exports = mongoose.model('restaurant', restaurantSchema);
