// Convert favorites list to jQuery:


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
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList(thingList, newThing);
      newThingInput.value = '';
    }
  };

};
