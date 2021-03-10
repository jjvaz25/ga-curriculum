const cheerio = require('cheerio');
const fetch = require('node-fetch');

// const url = 'https://slickdeals.net/';
// const url = 'https://twitter.com/KingJames'; // blocked content
// let scraping = async () => {
//   const response = await fetch(url);
//   const data = await response.text();
// //   console.log(data);

//   const $ = cheerio.load(data);
//     console.log($);
// //   $('a').each((i, link) => {
// //     // const href = link.attribs.href;
// //     // console.log(href);
// //     // console.log(link);

// //     const text = $(link).text(); 
// //     console.log(text);
// //   });
// };

// scraping();

const myModule = require('./modules/module1');
const myModule2 = require('./modules/module2');
myModule.myModule1();