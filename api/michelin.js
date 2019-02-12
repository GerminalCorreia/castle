const rp = require('request-promise');
const cheerio = require('cheerio');
const url1 = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin';

var addRestaurant = require('./addRestaurant');

rp((url1), function(err, resp, html) {
  if (!err){
    const $ = cheerio.load(html);
    $('div[class=poi_card-display-title]').each(function(i, elm) {
      let name = $(this).text();
      name = name.substring(11, name.length - 8);
      addRestaurant(name, 1);
    });
  }
});
