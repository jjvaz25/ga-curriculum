/* Independent Practice

Making a favorites list: event delegation


Refactor the code below.

The difference will be: use event delegation so that you only have
to set one event listener for all the items once, when the
code first runs, and you don't have to add any others whenever
someone adds an item.


*/

function addToList($list, thing) {
  let $thingLi = $('<li>').html(thing).addClass('fav-thing');
  addDeleteLink($thingLi);
  $list.append($thingLi);
}

function addCompleteLink($li) {
  let $completedLink = $('<span>').text(' Complete').addClass('complete-task');
  $li.append($completedLink);
}

function addDeleteLink($li) {
  let $deleteLink = $('<span>').text(' Delete').addClass('delete');
  $li.append($deleteLink);
}

$(document).ready(function() {
  let $thingList = $('#fav-list');
  let $things = $('.fav-thing');
  let $button = $('#new-thing-button');
  let $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    addCompleteLink($(li));
    addDeleteLink($(li));
  });

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

  $thingList.on('click', '.fav-thing .complete-task', function(event) {
    let $thingItem = $(event.target).parent();
    $thingItem.addClass('completed');
  });


  // Bonus: When the user mouses over each item, the rest of the list should turn grey. Don't use CSS hovering for this.
  $thingList.on('mouseenter mouseleave', 'li', function(event) {
    if (event.type == 'mouseenter') {
      $(this).removeClass('inactive');
      $(this).siblings().addClass('inactive');

    } else if (event.type == 'mouseleave') {
      $(this).siblings().removeClass('inactive');
    }
  });

  // Bonus 2: Add another link, after each item, that allows you to delete the item.
  $thingList.on('click', '.delete', function(e) {
    $(e.target).parent('li').remove();
  });
});
