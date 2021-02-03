const cheerio = require('cheerio');
const fetch = require('node-fetch');

const mod1 = require('./modules/module1');
const mod2 = require('./modules/module2');

const url= 'https://slickdeals.net/';
// const url= 'https://twitter.com/KingJames'; // blocked content
(async () => {
  const response = await fetch(url);
  const data = await response.text();
  // console.log(data);

  const $ = cheerio.load(data);

  $('a').each((i, link) => {
    // const href = link.attribs.href;
    // console.log(href);

    const text = $(link).text(); 
    console.log(text);
  });
})();

mod1.myModule1();
mod2.myModule2();