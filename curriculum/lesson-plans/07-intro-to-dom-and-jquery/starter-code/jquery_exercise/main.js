/* Independent Practice

Making a favorites list: jQuery


You'll add the ability to complete tasks in your favorite things list:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end

*/

function addToList($list, thing) {
  let $thingLi = $('<li>');
  $thingLi.text(thing);
  $list.append($thingLi);
}

  let $thingList = $('#fav-list');
  let $button = $('#new-thing-button');
  let $newThingInput = $('#new-thing');

  $button.on('click', function(event) {
    event.preventDefault();
    let newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });
