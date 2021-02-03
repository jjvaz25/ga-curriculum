// 1) Write down pseudocode for the following program.
// connect the button to roll dice to a function in our js file
// define a function
// generate random values 1-6 for dice 1 and dice 2
// figure out the css class pattern for changing the dice images
// change the dice images to one of the random ones we determined


document.getElementById('roll-dice').onclick = diceRoll;

function diceRoll() {
  var random1 = Math.floor((Math.random() * 6) + 1);
  var random2 = Math.floor((Math.random() * 6) + 1);
  var firstDie = 'dice-' + random1;
  var secondDie = 'dice-' + random2;
  document.getElementById('first-die').className = firstDie;
  document.getElementById('second-die').className = secondDie;
}