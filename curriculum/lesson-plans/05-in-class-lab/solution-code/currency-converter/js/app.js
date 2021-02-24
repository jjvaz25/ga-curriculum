let eurRate;
let convertedEUR;
$.getJSON('http://www.floatrates.com/daily/usd.json', function(data) {
  eurRate = data.eur.rate;
});

document.getElementById('convert').onclick = convert;

function convert(){
  usdToConvert = document.getElementById('usd').value;
  //console.log(usdToConvert);
  eur = usdToEUR(usdToConvert);
  //console.log(eur);
  document.getElementById('eur').value = eur;

}

function usdToEUR(usd) {
  convertedEUR = usd / eurRate;
  return convertedEUR;
}