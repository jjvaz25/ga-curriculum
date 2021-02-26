/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"

*/


function addToList(list, newThing) {
  let newThingLi = document.createElement('li');
  let newThingText = document.createTextNode(newThing);
  newThingLi.appendChild(newThingText);
  list.appendChild(newThingLi);
}

window.onload = function() {

  let button = document.getElementById('new-thing-button');
  let thingList = document.getElementById('fav-list');
  let newThingInput = document.getElementById('new-thing');

  button.onclick = function(event) {
    event.preventDefault();
    let newThing = newThingInput.value;
    addToList(thingList, newThing);

    // bonus version -- instead of line 28:

    // if (newThing === "") {
    //   alert("You must type in a value!");
    // } else {
    //   addToList(thingList, newThing);
    //   newThingInput.value = "";
    // }

    newThingInput.value = "";
  };
};



