const rp = require('request-promise');
const cheerio = require('cheerio');
const addCastle = require('./addToMongoDB/addCastle');

module.exports = function(url) {
  rp(url, function(err, resp, html) {
    if (!err){
      const $html = cheerio.load(html); // All the html of the page
      var name;
      var price;
      $html('.hotelTabsHeaderTitle').each(function(i, elm) {  // To get the title of the restaurant
        name = $html(this).text().substring(86,150);
        name = name.substring(0,name.indexOf("\n")); // To clean the string (taking off the useless spaces and the "\n")
      });
      $html('.priceTag').each(function(i, elm) { // To get the price of the castle
        price = $html(this).children().children('.price').text();
        price = price.substring(0, price.length - 3); // Taking off the number after "," in the price
        price = Number(price); // Transforming the price from string to number
      });
      if (name != null) {
        addCastle(name, price);
        console.log('"' + name + '" added to DB');
      }
    }
  });
}
