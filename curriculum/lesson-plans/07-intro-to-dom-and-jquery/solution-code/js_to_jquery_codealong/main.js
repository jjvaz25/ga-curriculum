// Convert favorites list to jQuery:


function addToList($list, thing) {
  let $thingLi = $('<li>');
  $thingLi.text(thing);
  $list.append($thingLi);
}

$(document).ready(function() {
  let $thingList = $('#fav-list');
  let $button = $('#new-thing-button');
  let $newThingInput = $('#new-thing');

  $button.on('click', function(event) {
    event.preventDefault();
    let newThing = $newThingInput.val();
    if (newThing === '') {
      alert("You must type in a value!");
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });
});
