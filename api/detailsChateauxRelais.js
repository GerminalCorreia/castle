const rp = require('request-promise');
const cheerio = require('cheerio');
const addCastle = require('./addCastle');

module.exports = function(url) {
  rp(url, function(err, resp, html) {
    if (!err){
      const $html = cheerio.load(html); // All the html of the page
      var name;
      var price;
      $html('.hotelTabsHeaderTitle').each(function(i, elm) {  // To get the title of the restaurant
        name = $html(this).text().substring(86,150);
      });
      $html('.priceTag').each(function(i, elm) { // To get the price of the castle
        price = $html(this).children().children('.price').text();
        price = price.substring(0, price.length - 3); // Taking off the number after "," in the price
        price = Number(price); // Transforming the price from string to number
      });
      console.log(name);
      console.log(price);
    }
  });

}
