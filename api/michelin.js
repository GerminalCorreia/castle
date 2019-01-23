const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin';

const name = [];

rp((url), function(err, resp, html) {
  if (!err){
    const $ = cheerio.load(html);
    $('div[class=poi_card-display-title]').each(function(i, elm) {
      name.push($(this).text())
    });
    console.log(name);
  }
});
