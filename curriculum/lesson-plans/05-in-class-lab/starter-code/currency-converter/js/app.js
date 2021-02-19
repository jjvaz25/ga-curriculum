$.getJSON('http://www.floatrates.com/daily/usd.json', function(data) {
  console.log(data);
  console.log(data.eur.rate);
});