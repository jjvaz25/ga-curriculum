# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) DOM/jQuery Continued and Promises

| Timing | Topic | Description |
| --- | --- | --- |
| 10 min | [Opening](#opening) | Events Continued |
| 30 min | [Codealong](#codealong1) | Event Delegation and Best Practices|
| 30 min | [Lab](#lab1) | Appending: Independent Practice  |
| 20 min | [Promises](#promises) | Introduction to Promises |
| 30 min | [Using Promises](#usepromises) | Using Promises |
| 20 min | [Promises Practice](#promiseslab) | Independent Practice |
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets |


### Objectives
*After this lesson, students will be able to:*

- Implement advanced jQuery events.
- Use event delegation to manage dynamic content.
- Use implicit iteration to update elements of a jQuery. selection and chaining to place methods on selectors.
- Understanding how Promises work
- The use of promises with fetch and API calls

### Preparation
*Before this lesson, students should already be able to:*

- Register and trigger event handles for jQuery click event.
- Manipulate the DOM by using jQuery selectors and functions.

---
<a name = "opening"></a>
## Events Continued (10 minutes)
Last lesson we learned what the DOM was and how to manipulate it with vanilla JavaScript and jQuery. We got a taste of jQuery's power in making our interaction with the DOM significantly easier. Although we covered the basics of using jQuery, such as selecting DOM elements, adding content, and listening for a basic click event, we need to understand jQuery events and DOM manipulation more intimately for true dynamic applications. In this lesson we will work with additional jQuery events and understand implications of adding dynamic content to our pages. We will also work with a templating engine for better separation of concerns in our code.

We were able to implement a click event in the last lesson, however jQuery [and JavaScript] gives us the ability to listen to a plethora of additional user events. Additionally, what if we have multiple events for specific elements? What if we want to listen for events to elements that have not yet been added to our interface?

We can listen for mouse, keyboard, form, and document/window events. Today we will focus on mouse events, however listening to other events is very similar to mouse events.

*Mouse Events:*
- click
- dblclick
- mouseenter
- mouseleave

*Keyboard Events*
- keypress
- keydown
- keyup

*Form Events*
- submit
- change
- focus
- blur

*Document/Window Events*
- load
- resize
- scroll
- unload

---

<a name = "codealong1"></a>
## Event Delegation and Best Practices: Codealong (30 min)
We started covering mouse events with the click event. We can add additional mouse events in the same manner.

```js
  let $thingListItems = $('#fav-list li');

  $thingListItems.on('mouseenter', function(e) {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  });

  $thingListItems.on('mouseleave', function(e) {
    $(this).siblings().removeClass('inactive');
  });
```
The above code listens for two events:

1. User's mouse set to enter the list item element. In this case, it removes the 'inactive' class from itself (if it exists) and adds it to its sibling list items. *Note: element and sibling class switching is a common best practice to toggle visual effects on user actions.*
2. User's mouse set to leave the list item element. This removes the 'inactive' class from all elements on the same level.

While the above code works great for existing elements, if we add new elements to the DOM, the events will not fire up for the newly added elements.

It is important to understand that these direct events are only attached to elements at the time that the 'on' method is called. If list items did not exist when the above events were called, they do not get included in the calls above.

To get around this, we create a delegated event, which requires us to add the element our event handler executes for, to the right side. Take the above code and modify to:

```js
  let $thingList = $('#fav-list');

  $thingList.on('mouseenter', 'li', function(e) {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  });

  $thingList.on('mouseleave', 'li', function(e) {
    $(this).siblings().removeClass('inactive');
  });
```

Our code is getting a little inefficient and duplicative. Our list items have two event handles attached to them. We can handle both of the above scenarios with one event handler. Grouping our events by element not only helps us group our code, but it is also a drastically faster operation.

```js
  let $thingList = $('#fav-list');

  $thingList.on('mouseenter mouseleave', 'li', function(event) {
    if (event.type == 'mouseenter') {
      $(this).removeClass('inactive');
      $(this).siblings().addClass('inactive');

    } else if (event.type == 'mouseleave') {
      $(this).siblings().removeClass('inactive');
    }
  });
```

Let's add a dash in front of every one of our list items (yes in addition to the bullets). jQuery gives us a convenience method to iterate through a list of elements.

```js
  let $thingList = $('#fav-list');

  $thingList.find('li').each(function(index, elem) {
    $(elem).prepend(' - ');
  });
```
---

<a name = "lab1"></a>
## Appending: Independent Practice (30 mintutes)

Open [the starter code](starter-code/event_delegation) and refactor it as follows: use event delegation so that you only have to set one event listener for all the items once - when the code first runs - and you don't have to add any others whenever someone adds an item.

**Bonus**:

- When the user mouses over each item, the rest of the list should turn grey. Don't use CSS hovering for this.
- Add another link, after each item, that allows you to delete the item


---

<a name = "promises"></a>
## Promises: Introduction (20 minutes)

JavaScript is single threaded. This means that two bits of script cannot run at the same time; they have to run one after another. However, there are times that code needs to run asynchronously.  In order to achieve this ES6 introduced the Promise class which has now become a key underlying feature used in many of the tools we've become accustomed to using to perform everyday tasks such as making API calls or updating database entries. 

### What Is A Promise? 

[Here is the code-along code for Promises](starter-code/code-along-2)

A promise is an object that may produce a single value some time in the future.  A promise can be in one of three states:

- pending - The action has not yet been resolved or rejected 
- resolved - The action relating to the promise succeeded 
- rejected - The action relating to the promise failed

While the promise is active it is in a `pending` state and at some point will be either `resolved` or `rejected`.

<img src="https://i.imgur.com/rNg3OkS.png" alt="" width=400>


### Making Promises
<br>

How do we make a `Promise`? Easy:
```js
const p = new Promise();
```

Let's give `new Promise()` an _executor_ function as an argument that has two parameters:

```js
const p = new Promise(function(resolve, reject) {
  console.log(resolve, reject);
});
console.log(p);
```

Couple things are happening:

- The _executor_ is immediately called by the `Promise` constructor passing functions as args for the `resolve` and `reject` parameters.
- The promise created is an object with a `<pending>` state.

A _promise_ is always in one of three states:

- `pending`: Initial state, neither fulfilled nor rejected.
- `fulfilled`: The async operation completed successfully.
- `rejected`: The async operation failed.

Once a _promise_ has been _settled_, i.e., it's no longer _pending_, its state will not change again.

### Resolving Promises

So, how does a _promise_ become `fulfilled`?<br>By calling the `resolve` function:

```js
const p = new Promise(function(resolve, reject) {
  let value = 42;
  resolve(value);
});
```

The promise, `p`, has been _resolved_ with the value `42`.

Note: that promises can only be resolved with a single value, however that value can be anything such as an object, etc.


How do we get the _value_ of a resolved promise?<br>By calling the promise's `then` method:

```js
const p = new Promise(function(resolve, reject) {
  const value = 42;
  resolve(value);
});

p.then(function(result) {
  console.log(result);
});
```

The `then` method will execute the callback as soon as the promise is resolved. BTW, you can call `then` multiple times to access the value of a resolved promise.

So, we've seen how the `resolve` function fulfills a promise,<br>Next lets see what the `reject` function does...

### Rejecting Promises

Now let's call the `reject` function instead of `resolve`:

```js
const p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('Something went wrong!');
  }, 2000);
});
```

After 2 seconds, we'll see a `UnhandledPromiseRejectionWarning: ...` error. Reading the error more closely reveals that we need a `.catch()` to handle the promise rejection.  

Let's _chain_ a `catch` method call:

```js
p.then(function(result) {
  console.log(result);
}).catch(function(err) {
  console.log(err);
});
```

---

<a name = "usepromises"></a>
## Using Promises (30 minutes)

The code we have been writing so far in Javascript has performed so quickly we have never really needed a use for promises yet. We haven't had to wait for any response. Well what if we needed to request data from a third party?

One of the most common use cases of using promises is when making an API call. Since making a request to an external server will take time we will need to wait for the request to either return the data (resolve) or notify us that there has been an error (reject). 

When we make use of common API tools that retrieve data such as `fetch`, `axios` or `$.ajax` the tool itself is making an underlying XHR request.  All of these tools incorporate a Promise that calls `resolve()` to pass the response data along to the first `then` or `reject()` to pass the error along to `catch()`.

If you are just wanting to experiment, you can also use `Promise.resolve()`, which always returns a resolved promise, and `Promise.reject()`, which always returns a rejected promise. They both accept an argument of the value you want to return in either scenario.

Here is an example with `Promise.resolve`:
```js
console.log('1');

Promise.resolve('puppytails').then((data) => {
  console.log('promise', data);
}).catch((err) => {
  console.log('err', err);
});

console.log('2');
```

Here is an example of using fetch:

```js
const someUrl = 'https://pokeapi.co/api/v2/pokemon'

fetch(someUrl)
 .then( res => res.json())
 .then( data => console.log('data', data))
 .catch(err => console.log('err', err));
```

Here is the equivalent written in the async/await try/catch style:

```js
const someUrl = 'https://pokeapi.co/api/v2/pokemon'

const fetchPokemon = async () => {
  try {
    const rawResponse = await fetch(someUrl);
    const jsonResponse = await rawResponse.json();
    
    console.log('data', jsonResponse);
    return jsonResponse;
  } catch (err) {
    console.log('err', err);
  }
};

fetchPokemon();
```

### Handling A Promise

The Promise will be expected to return some value from either the resolve or reject methods which make use of the following methods:

- **.then()** - works with a resolved promise
- **.catch()** - works with a rejected promise
- **.finally()** - will execute some code regardless

A resolved promise uses `.then()` to handle the data returned via the promise.  Its like saying "I promise that when the thing is done then you can do the thing" 

### Promise pitfalls

Promises are asynchronous, so if you want to use the result, you must `await` or include your code in the `then` if using the **chain** style.
```js
const someUrl = 'https://pokeapi.co/api/v2/pokemon'

const result = fetch(someUrl)
 .then(res => res.json())
 .then(data => {
    // in the chaining style, any work you want to do with the result should go here
    // console.log here!
    return data;
 })
 .catch(err => console.log('error', err));

// If you console log result, all you get is a pending promise!
console.log('result', result);
```

With the **async/await** style, Promises can be handled with the above but also try/catch/finally which correspond to the above. One key gotcha with async/await is that it **MUST BE DONE WITHIN THE CONTEXT OF A FUNCTION**. It will not work outside of a function.

```js
const someUrl = 'https://pokeapi.co/api/v2/pokemon';

let asyncFunction = async function() {
  try {
    const result = await fetch(someUrl)
    const json = await result.json();

    // result is resolved
    console.log('result', json);
  } catch (err) {
    console.log('error', err);
  }
};

asyncFunction();
```

### Promise.all

```js
Promise.all([
	fetch('https://jsonplaceholder.typicode.com/posts'),
  fetch('https://jsonplaceholder.typicode.com/users')
]).then(responses => {
	return Promise.all(responses.map( response => {
		return response.json();
	}));
}).then((data) => {
	console.log('posts', data[0]);
  console.log('users', data[1]);
}).catch(error => {
	console.log(error);
});
```

Above with simpler promises:
```js
Promise.all([
	Promise.resolve('success'),
  Promise.resolve('rejected')
]).then((data) => {
	console.log('promise 1', data[0]);
  console.log('promise 2', data[1]);
}).catch(error => {
	console.log(error);
});
```

`Promise.all` with async/await:
```js
(async () => {
  const promise1 = Promise.resolve('success');
  const promise2 = Promise.reject('rejected');

  try {
    const results = await Promise.all([
      promise1,
      promise2
    ]);
    console.log('results', results);
  } catch (err) {
    console.log('err', err);
  }
});
```

<a name = "promiseslab"></a>
## Promise: Independent Practice (20 mins)

In groups of 2 work on the following:

1. Fetch data from the Pokemon API, parse it into json, and log the name of each monster. Handle the scenario where the API call fails.

2. Experiment locally and see what happens if a promise rejects with `Promise.all`. An easy way of triggering this is throwing in at least one `Promise.reject()` as one of the promises. What are some advantages and disadvantages of `Promise.all`?

3. What if you wanted to use `Promise.all` but you didn't want to abort if one went wrong? How could we restructure the code below (without using `Promise.allSettled`) so that we could return the results we have? **Hint**: Does a promise that is rejected and then chained with `.catch(() => {})` still reject the broader `Promise.all` promise?


### Bonus: Resolving Multiple Promises

There are times when there is a need to make multiple API calls and work with the data sets once they have all been retrieved.  In an instance like that we can use the `Promise.all()` method.  Here we can pass in an array of promises and when all of them have been resolved (or one fails), it will run either `.then()` or `.catch()` accordingly. 

```js
Promise.all([
	fetch('https://jsonplaceholder.typicode.com/posts'),
	fetch('https://jsonplaceholder.typicode.com/users')
]);
```

`Promise.all()` returns a single array with two elements representing the response data. To get a JSON object from each one, we can map over the array and call `.json()`.  We also need to wrap that in `Promise.all()`, since `.json()` returns a promise as well.

The data argument in our second `then()` callback is now an array of API data, with each item matching the corresponding API call in the Promise.all() array. In this example, the data[0] represents posts and data[1] users.  We've spliced out the first elements only in each array to limit the console log display. 

```js
Promise.all([
	fetch('https://jsonplaceholder.typicode.com/posts'),
  fetch('https://jsonplaceholder.typicode.com/users')
]).then( responses => {
	return Promise.all(responses.map( response => {
		return response.json();
	}));
}).then( data => {
	console.log('posts', data[0].slice(0,1));
  console.log('users', data[1].splice(0,1));
}).catch( error => {
	console.log(error);
});
```

#### Additional Promise.all() Examples

##### Handling Multiple API Calls

 In the below example the app first needs to pull mapping data so that a map can be rendered first and then specific location markers placed on the based on their lat/lon addresses. 

Lets take a look the app: [D3 - Streetball Mecca - Map Only](https://codepen.io/jkeohan/project/editor/DKzvyL)


```js
let mapJSON =
  "https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/nyc.json";
let parks =
  "https://spreadsheets.google.com/feeds/list/14eiNG7WWDDrN-OY4RfbPJjlhu3hJnWQtVJ3s4ZUKOuo/od6/public/values?alt=json";

Promise.all([fetch(mapJSON), fetch(parks)])
  .then(function(responses) {
    return Promise.all(
      responses.map(function(response) {
        return response.json();
      })
    );
  })
  .then(function(files) {
    renderMap(files[0]);
    renderMapCircles(files[1].feed.entry);
  });
```


---

<a name = "conclusion"></a>
## Conclusion (5 min)

Ask students what was learned. Make sure the objectives have been met.

* What is event delegation? Why would we use it?
* What is a promise?

### Homework

For next class please head over to the [Open Weather](https://openweathermap.org/api) site and create an account. This will be for next class but it does take a couple hours for them to activate your account. This will allow us to do the next exercise for next class. 

* Sign up and activate your account via an email they send!

### More Practice
* Feel free to take a look and do some code challenges in the homework repository
* [More JS Practice](https://docs.google.com/spreadsheets/d/1VBmPcYn5prxNmoY7mHp-hgbzNX5Ey0KxC_VMtEwEWA8/edit?usp=sharing)

#### Further Resources

- [jQuery: Event delegation][1]
- [jQuery: Handling events][3]
- [JavaScript MVC][5]
- [Promises][4]
- [Async/Await][2]

[1]: https://learn.jquery.com/events/event-delegation/
[3]: https://learn.jquery.com/events/handling-events/
[5]: http://alistapart.com/article/javascript-mvc
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function