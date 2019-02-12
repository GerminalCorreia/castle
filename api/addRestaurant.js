var Restaurant = require('./restaurant');

module.exports = function(name, stars) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/Castle', { useNewUrlParser: true });

    var restaurant = new Restaurant({ name : name, stars : stars });

    restaurant.save(function (err) {
      if (err) { throw err; }
      console.log(restaurant);
      mongoose.connection.close();
    });
}
