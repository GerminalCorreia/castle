// Function to add a castle to the DB
const Castle = require('./castle');

module.exports = function(name, price) {
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/Castle', { useNewUrlParser: true });

    const castle = new Castle({ name : name, price : price, starred : false});

    console.log(castle);

    castle.save(function (err) {
      if (err) { throw err; }
      mongoose.connection.close();
    });
}
