const rp = require('request-promise');
const cheerio = require('cheerio');
const details = require('./detailsChateauxRelais');

module.exports = function(url) {
  rp(url, function(err, resp, html) {
    if (!err){
      const $html = cheerio.load(html);
      $html('.jsSecondNavMain').each(function(i, elm) {
        const $menu = cheerio.load($html(this).html());
        let link = ""
        $menu('li').each(function(i, elm) {
          if (link === "" && $menu(this).attr('class') != "active") { // To only get the link for the restaurant (we do not want the other links of the menu)
            link = $menu(this).children().attr('href'); // Scrapping the link
          }
        });
        console.log(link);
      });
    }
  });

}
