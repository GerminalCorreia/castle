const rp = require('request-promise');
const cheerio = require('cheerio');
const addRestaurant = require('./addCastle');

const url = 'https://www.relaischateaux.com/fr/site-map/etablissements?fbclid=IwAR2eurtYcGpXXcOeEO3YBva-z8tVNCNs_9eb7zZ-cFedPpwLV0XwFcPfjmY#countryF';

rp(url, function(err, resp, html) {
  if (!err){
    const $country = cheerio.load(html);
    $country('div[id=countryF]').each(function(i, elm) {
      let country = $country(this).text().substring(29,35); // To only get the word "France" from the div
      if (country === "France") { // Scrapping all castles from France
        const $castle = cheerio.load($country(this).html());
        $castle('li').each(function(i, elm) {
          let link = ""
          if (link === "") { // To only get the first link per castle (we do not want the links about the chef or the owner)
            link = $castle(this).children().attr('href'); // Scrapping the link
          }
          console.log(link);
          console.log("---------");
        });
      }
    });
    console.log("test");
  }
});
