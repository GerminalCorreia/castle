const rp = require('request-promise');
const cheerio = require('cheerio');
const addRestaurant = require('./addRestaurant');

const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-';

// Scraping the starred restaurants on Michelin's website (35 pages)
for (i = 1; i <= 35; i++) {
  rp((url + i.toString()), function(err, resp, html) {
    if (!err){
      const $ = cheerio.load(html);
      $('div[class=poi_card-display-title]').each(function(i, elm) {
        let name = $(this).text(); // Get restaurant's name
        name = name.substring(11, name.length - 8); // Cleaning the name (take of "\n      " at the begin and "    " at the end)
        addRestaurant(name); // Add the restaurant to the DB
      });
    }
  });
}
