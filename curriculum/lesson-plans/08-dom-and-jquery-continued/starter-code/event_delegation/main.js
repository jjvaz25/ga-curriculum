/* Independent Practice

Making a favorites list: event delegation


Refactor the code below.

The difference will be: use event delegation so that you only have
to set one event listener for all the items once, when the
code first runs, and you don't have to add any others whenever
someone adds an item.

Bonus: When the user mouses over each item, the item should turn grey. Don't use CSS hovering for this.

*/

function addToList($list, thing) {
  let $thingLi = $('<li>').html(thing).addClass('fav-thing');
  addCompleteLink($thingLi);
  $list.append($thingLi);
}

function addCompleteLink($li) {
  let $completedLink = $('<span>').text(' Complete').addClass('complete-task');
  $li.append($completedLink);
}

$(document).ready(function() {
  let $thingList = $('#fav-list');
  let $things = $('.fav-thing');
  let $button = $('#new-thing-button');
  let $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    addCompleteLink($(li));
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

  // refactor
  $thingList.on('click', 'li', function(event) {
    $(this).addClass('completed');
  });
  $thingList.on('mouseenter mouseleave', 'li', function(event) {
    if (event.type == 'mouseenter') {
      $(this).removeClass('inactive');
      $(this).siblings().addClass('inactive');

    } else if (event.type == 'mouseleave') {
      $(this).siblings().removeClass('inactive');
    }
  });
});
