/* Variables for random example */
var eurRate = 300;
module.exports = function(robot) {
  robot.respond(/convert (.*) to eur/i, function(msg) {
    var usd;
    usd = msg.match[1];
    eur = usdToEUR(usd);
    return msg.send(eur + " eur :moneybag:");
  });
};


function usdToEUR(usd) {
  convertedEUR = usd / eurRate;
  return convertedEUR;
}
