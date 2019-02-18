const rp = require('request-promise');
const cheerio = require('cheerio');
const details = require('./detailsRelaisChateaux');

module.exports = function(url) {
  rp(url, function(err, resp, html) {
    if (!err){
      const $html = cheerio.load(html); // All the html of the page
      $html('.jsSecondNavMain').each(function(i, elm) {
        const $menu = cheerio.load($html(this).html()); // To only work on the menu part of the html file
        let link = ""
        $menu('li').each(function(i, elm) {
          if (link === "" && $menu(this).attr('class') != "active") { // To only get the link for the restaurant (we do not want the other links of the menu)
            link = $menu(this).children().attr('href'); // Scrapping the link
          }
        });
        //console.log(link);
        details(link);
      });
    }
  });
}
