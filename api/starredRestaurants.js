// To categorize which restaurants from Relais&Chateaux are Michelin starred
var similarity = require("similarity")
const mongoose = require('mongoose');

const Restaurant = require('./schema/restaurant');
const Castle = require('./schema/castle');

mongoose
  .connect('mongodb://localhost:27017/Castle', { useNewUrlParser: true })
  .then(() => {console.log("Connected to database!");})
  .catch(() => {console.log("Connection failed!");});

Castle.find().then(castles => {
  castles.forEach(function(castle) {
    Restaurant.find().then(restaurants => {
      restaurants.forEach(function(restaurant) {
        if(similarity(castle.name, restaurant.name) >= 0.8) { // To check if the names are similar enough
          Castle.findOneAndUpdate({name: castle.name}, {$set: {'starred': true}}, {upsert:true}, function(err, doc){ // Set starred value to true
            if (err) return res.send(500, { error: err });
          });
          console.log('"' + castle.name + '" updated to starred restaurants');
        }
      });
    });
  });
});
