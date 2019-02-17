const rp = require('request-promise');
const cheerio = require('cheerio');
const getRestaurant = require('./chateauxRelaisRestaurant');

const url = 'https://www.relaischateaux.com/fr/site-map/etablissements?fbclid=IwAR2eurtYcGpXXcOeEO3YBva-z8tVNCNs_9eb7zZ-cFedPpwLV0XwFcPfjmY#countryF';

rp(url, function(err, resp, html) {
  if (!err){
    const $html = cheerio.load(html); // All the html of the page
    $html('div[id=countryF]').each(function(i, elm) {
      let country = $html(this).text().substring(29,35); // To only get the word "France" from the div
      if (country === "France") { // Scrapping all castles from France
        const $castleFrance = cheerio.load($html(this).html()); // The html about the castles in France
        $castleFrance('li').each(function(i, elm) {
          let link = ""
          if (link === "") { // To only get the first link per castle (we do not want the links about the chef or the owner)
            link = $castleFrance(this).children().attr('href'); // Scrapping the link
          }
          getRestaurant(link);
        });
      }
    });
  }
});
