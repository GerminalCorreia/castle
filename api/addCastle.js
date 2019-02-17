// Function to add a castle to the DB
var Castle = require('./castle');

module.exports = function(name, price) {
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/Castle', { useNewUrlParser: true });

    var castle = new Castle({ name : name, price : price, starred : false});

    castle.save(function (err) {
      if (err) { throw err; }
      mongoose.connection.close();
    });
}
