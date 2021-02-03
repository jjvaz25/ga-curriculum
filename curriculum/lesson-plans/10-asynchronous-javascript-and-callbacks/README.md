# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Asynchronous JavaScript, Callbacks, and Node

| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening) | Introduction to Asynchronous JavaScript |
| 10 min | [Recap](#recap) | Anonymous Functions and Functions as First-Class Objects: Recap |
| 40 min | [Codealong](#codealong1) | Functions as First-Class Objects |
| 30 min | [Lab](#lab1) | Functions and Callbacks: Independent Practice |
| 10 min | [Node.js](#nodejs)  | Introduction to Node.js  |
| 40 min | [Lab](#lab2) | Node: Codealong  |
| 10 min | [Frontend Modules](#frontend) | Node vs. Frontend |
| 5 min |  [Conclusion](#conclusion)| Homework, Final Questions & Exit Tickets |


### Objectives
*After this lesson, students will be able to:*

- Store and use anonymous functions in variables.
- Pass functions as arguments to functions that expect them.
- Write functions that take other functions as arguments.
- Return functions from functions.

### Preparation
*Before this lesson, students should already be able to:*

- Implement an AJAX request with Vanilla JS
- Reiterate the benefits of separation of concerns – API vs. Client.
- Understand the difference between function declarations and function expressions.
- Understand scope and hoisting.

<a name = "opening"></a>
## Introduction to Asynchronous JavaScript (5 min)

As our programs start relying on user input/behavior and data that might not be available right away, we need to increasingly start thinking about how we can run our code at different times. We refer to this "now and later" programming as asynchronous programming. We have already used asynchronous programming in our code in previous lessons:

- We have listened for click and mouse events that execute certain code when that event is complete.
- We have waited for a return from an AJAX call, and we have executed code for success and error scenarios.

Although we have used asynchronous programming in our code, we have not discussed _how_ this is all happening. Before we can truly understand how asynchronous programming works in JavaScript, we need to take a deeper look at functions and scope.

---
<a name = "recap"></a>
## Anonymous Functions and Functions as First-Class Objects: Recap (10 min)

We have worked with numerous scenarios where we have run a block of code after a user has performed an action. Take the following scenario from our DOM and jQuery continued lesson:

```js
  var $thingList = $('#fav-list');

  $thingList.on('mouseleave', 'li', function(e) {
    ...
  });
```

Taking a close look at the jQuery `on()` method, we notice two very important overlooked concepts:

1. The `on()` method is taking a function as one of its parameters.
2. The function we are passing into the `on()` method does not have a name, we are just passing a raw function: the function keyword, a parameter list, and a function body inside curly braces.

---
<a name = "codealong1"></a>
##  Functions as First-Class Objects (40 min)

Functions as first-class objects, along with the related concept of closures, is JavaScript's chief superpower. By "first-class objects", we just mean that they can be used in any part of the code that strings, arrays, or data of any other type can be used. This means we can store functions as variables, pass them as arguments to other functions, return them from other functions, or just run them ad-hoc without the need to assign them to anything. A function that takes another function as an argument, or returns a function, is called a `higher-order function`.

In the above example we saw a function being passed to the jQuery `.on()` method, but JavaScript also has a plethora of built functions that allow us to pass functions as parameters. Let's take a look at the setTimeout function:

```js
  setTimeout( function(){
    console.log("Hello world");
  }, 1000 );
```

In this scenario setTimeout is taking a function as its first parameter, and the time (in milliseconds) to wait before running that function, as its second parameter. The syntax for defining our own function that takes a function as an argument is not any different than the syntax for defining a function that takes any other kind of argument:

```js
  let blastOff = function() {
    console.log("Blasting off!");
  }

  function launchRocket(rocketName, blastOffCallback) {
    console.log("Launching " + rocketName);
    console.log("3... 2... 1...");
    blastOffCallback();
  }

  launchRocket("Viking", blastOff);

  // => Launching Viking
  // => 3... 2... 1...
  // => Blasting off!

```

In the above example, the function being passed into `launchRocket` is acting as a "callback", which is a word that comes from pointer-based languages like C that we shouldn't concern ourselves with, but basically it just means a function that is designed to be executed by the code of another function.

Callback functions can also take arguments, even though we don't specify the need for arguments when we're passing the callback function itself as a variable:


```js
  let blastOff = function(destination) {
    console.log("Blasting off for " + destination + "!");
  }

  function launchRocket(rocketName, blastOffCallback) {
    console.log("Launching " + rocketName);
    console.log("3... 2... 1...");
    blastOffCallback("Mars");
  }

  launchRocket("Viking", blastOff);

  // => Launching Viking
  // => 3... 2... 1...
  // => Blasting off for Mars!

```

Just as we can pass functions as arguments to other functions, we can also return functions from other functions:


```js
  let blastOff = function(destination) {
    console.log("Blasting off for " + destination + "!");
  }

  function makeRocketLauncher(rocketName, blastOffCallback) {
    return function() {
      console.log("Launching " + rocketName);
      console.log("3... 2... 1...");
      blastOffCallback("Mars");
    };
  }

  let launchViking = makeRocketLauncher("Viking", blastOff);
  let launchMariner = makeRocketLauncher("Mariner", blastOff);

  launchViking();
  launchMariner();

  // => Launching Viking
  // => 3... 2... 1...
  // => Blasting off for Mars!

  // => Launching Mariner
  // => 3... 2... 1...
  // => Blasting off for Mars!

```

This ability to pass functions as arguments to other functions, and to return functions from other functions, gives JavaScript an enormous amount of flexibility and power, especially when coupled with a language feature called "closures". Notice how when you run `launchViking()` and `launchMariner()`, you somehow have access to the original rocketNames, even though the function `makeRocketLauncher()` that you passed them into has run its course and is no longer executing? That's because `launchViking()` and `launchMariner()` are "closures", meaning they have "closed over" those rocketName variables. We'll go into what that means and why it's useful a couple of lessons from now.


---

<a name = "lab1"></a>
## Functions and Callbacks: Independent Practice (30 mins)

Open the [main.js](starter-code/functions-callbacks-exercise/main.js) file.

- Write a function, `makeCountingFunction()`, that returns another function. The function returned by `makeCountingFunction()` should take an array as an argument, and return the number of odd integers in the array.
- `makeCountingFunction()` itself should take as its only argument something called a "predicate function", a function designed to run a test on each item in an array.

Test your code by running it in the command line using `node`!

---

<a name = "codealong2"></a>
## Anonymous Functions and IIFEs (30 mins)

By this point we have seen various examples of functions being passed as callback arguments. Taking the first setTimeout example:

```js
  setTimeout( function(){
    console.log("Hello world");
  }, 1000 );
```

The function being passed into `setTimeout()` above is called an **anonymous function expression** because it is not named in any way -- it is not a function expression that got assigned to a variable name, and neither is it a function that got its name in a function declaration.

Note that you don't have to pass anonymous functions as callbacks in cases like this -- you can pass named functions as well, no matter how they got their names:

```js
  function sayHi() {
    console.log("Hello world");
  }

  let sayBye = function() {
    console.log("Goodbye world");
  }

  setTimeout(sayHi, 1000 );
  setTimeout(sayBye, 1261440000000);

  // (1,261,440,000,000 milliseconds is 40 years)
```

>Note: Anonymous functions are great, but they may give you some trouble when debugging, if you're looking at a stack trace and it shows a big column of unnamed functions. To get around this you can name them as shown above, or you can use a third way to give them a name which will show up in debugging, called a "named function expression":

```js
  setTimeout(function timer(){
    console.log( "Hello world" );
  }, 1000 );
```

**Invoking Function Expressions Immediately**

We have the ability to execute our function expressions as soon as they are declared. This pattern has become so commonplace, that the JS community gave it a name: Immediately-invoked function expressions (IIFE - pronounced "iffy"). 

Let's slowly build up to this idea.

```js
  const executeInIsolation = (doMyStuff) => {
    // every variable and function we define here is not in global scope
    doMystuff();
  };

  const doMyStuff = () => { console.log('doing my stuff'); };

  executeInIsolation(doMyStuff);
```

Just how we can define a function inline for `addEventListener` or `.map`, we can define a function and then immediately execute it.

```js
  const doMyStuff = () => { console.log('doing my stuff'); };

  ((doMyStuff) => {
    doMyStuff();
  })(doMyStuff);
```

But we can simplify this futher. Do we really need to pass in `doMyStuff`?

```js
const doMyStuff = () => { console.log('doing my stuff'); };

(() => {
  doMyStuff();
})();
```

Do we have to invoke a function or can we do anything there?

```js
(() => {
  console.log('doing my stuff');
})();
```

### Concrete example: Avoiding pollution of global scope

```js
// we can anything we want without polluting global scope
(function() {
  const stuff = 123;
  const moreStuff = 123123;
})();

// errors out because undefined
console.log(stuff, moreStuff);
```

### Concrete example: Revealing module pattern

Compare these 2 examples, they do the same things but one uses an IIFE

WithOUT an IIFE:
```js
const moduleBuilder = () => {
  const _private1 = 'shhh! dont allow direct access';
  const _private2 = 'this cant be accessed directly either';

  return {
    getPrivate1: function() {
      return _private1;
    }
  };
};

const myModule = moduleBuilder();
myModule.getPrivate1();
```

With an IIFE:
```js
const myModule = (function() {
  const _private1 = 'shhh! dont allow direct access';
  const _private2 = 'this cant be accessed directly either';

  const exports = {
    getPrivate1: function() {
      return _private1;
    }
  };

  return exports;
})();

// we can access it this way
myModule.getPrivate1();
```

The above example highlights a common stylistic practice. Although IIFEs are commonly used with global objects, they can certainly be used inside an enclosing scope.

---

<a name = "nodejs"></a>
## Introduction to Node.js (10 mins)

Lets expand our abilities with JavaScript! We will use Node and its ability to import packages with npm. Node has tons of capabilitites, for example:
* Servers
* Websites
* Chatbots
* Web Scraping

To require 3rd party libraries (ones installed with `npm` or `yarn add`), you omit any folder slashes. Node knows to look in the `node_modules` directory, which is automatically created when you install dependencies with `npm` or `yarn`.

### 3rd party JavaScript modules

3rd party JavaScript modules can be for frontend, Node, or both. To see what kinds of modules are available, take a look at https://www.npmjs.com/

### How to use `npm`

Its actually very easy to install a package from `npm`. All you have to do is type `npm install` followed by the name of the 3rd party package
```bash
$ npm install <NAME OF PACKAGE>
```
<a name = "lab2"></a>
## Node: Web Scrape Codealong (40 mins)

Lets try some things, open up your node console. Remember how to do that? Head over to your terminal and simply type in:
```bash
$ node
```
Then lets see some things we have worked with recently in the browser, lets try typing in `fetch` or `document`:
```js
> document
// Uncaught ReferenceError: document is not defined
> fetch
// Uncaught ReferenceError: fetch is not defined
```

In this codealong, we will create a basic web scraper using packages from `npm`. We will make HTTP requests using Node. The only issue now though, `fetch` is not available to us in Node so we have to install a package such as `node-fetch` or `axios`. Remember the browser is different than Node. Both will be able to run basic Javascript but Node will not always have everything a browser will have such as DOM related things. Remember Javascript plays different roles when used on the browser and on a server.

We will use 2 packages called `node-fetch` and `cheerio`. `node-fetch` will allow us to grap data from sites and `cheerio` acts like a jQuery type of library where it allows for DOM manipulation in Node.
* [`node-fetch`](https://www.npmjs.com/package/node-fetch)
* [`cheerio`](https://www.npmjs.com/package/cheerio)

Lets first create a new directory
```bash
$ mkdir web-scrape && cd web-scrape
```

Initialize it with `npm init`.
```bash
$ npm init
```
You will be asked various things naming, description etc. Don't worry you will be able to change it later if needed. Go ahead and press enter on all of them
```
package name: (npmex) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/kyleliu/Code/Teaching/GA-JS/jsr-202-working/curriculum/lesson-plans/10-asynchronous-javascript-and-callbacks/solution-code/npmEx/package.json:

{
  "name": "npmex",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this OK? (yes)
```
One thing to note though, we did accept that our `entry point: (index.js) `. This means, this node project will look for an `index.js` file to run its code. Again this can be changed in the `package.json` file. Ok lets create the `index.js` file:

```bash
$ touch index.js
```

Lets also install `node-fetch` and `cheerio`:
```bash
$ npm install node-fetch
$ npm install cheerio
```

Next we want them available in our Javascript file. Open your project in a code editor and go over to the `index.js` page. Declare variables for our new packages:
```js
const cheerio = require('cheerio');
const fetch = require('node-fetch');
```

We have done this before, lets make a request to a url to get some data. This time we don't need JSON data in order to scrape a site:
```js
const url= 'https://slickdeals.net/';
// const url= 'https://twitter.com/KingJames'; // blocked content
(async () => {
  const response = await fetch(url);
  const data = await response.text();
  // console.log(data);

  const $ = cheerio.load(data);

  $('a').each((i, link) => {
    // const href = link.attribs.href;
    // console.log(href);

    const text = $(link).text(); 
    console.log(text);
  });
})();
```

Not all sites will allow you to scrape their pages very easily and for good reason. While we may do things out of curiosity or interests, there are others with malicious intent like trying to steal your personal information or data. This is why we see different tools on browsers when trying to access sites:
* Captchas
* Frequently changing designs/layouts
* Use JavaScript + Ajax to load your content (we have done that!)

[More on prevention of Web Scraping](https://github.com/JonasCz/How-To-Prevent-Scraping/blob/master/README.md)

### Create your own Node module

Lets think for a second, we have been coding in Javascript but we haven't ever used more than one file. We have used other Javascript libraries like jQuery but notice it required us to use HTML to link them. How else could we use other Javascript files together? Lets look into Node modules.

Create a new directory or use the same codealong previously. If you create a new project remember to use `npm init` to initialize it. 

Lets also create a new directory in our project called `/modules`
```bash
$ mkdir modules
```
Lets also create 2 new files in the new folder
```bash
$ cd modules && touch module1.js && touch module2.js
```

Add some code to the files and be sure to export it with `module.exports`

`module1.js`
```js
const myModule1 = () => console.log('myModule1 runs');

module.exports = {
  myModule1
};
```

`module2.js`
```js
const myModule2 = () => console.log('myModule2 runs');

module.exports = {
  myModule2
};
```

To import modules you've created, use the appropriate relative link in `index.js`
```js
const myModule = require('./modules/module1');
const myModule2 = require('./modules/module2');
```

**File/folder structure should look like this**:
```
/yourProjectDir
  - index.js
  - /modules
    - module1.js
    - module2.js
  - package.json, /node_modules, etc.
```

<a name = "frontend"></a>
## Node vs Frontend (10 mins)

Keep in mind we just did all this through Node. We actually don't have access to modules on the Frontend (browsers). We would need a JavaScript library or framework that enable module usage (for example, CommonJS, RequireJS, and more recently Webpack and Babel).

## Bonus: Frontend ES6 Modules

You can now use ES6 modules in all modern web browsers, with the downside that there isn't any cool "import from 3rd party library" functionality like you see in Node.

Note that if you use the `type="module"` on a `script` tag, you'll want to run a simple server to avoid CORS issues. You can install a simple one with `npm install -g http-server` and then running `http-server` in the directory of your project. https://repl.it/~ (repl.it) runs the files as a server out of the box, so you can experiment with frontend ES6 imports/exports there too.

Many boilerplate generators for popular projects like React come with a bundler out of the box.

## Frontend ES6 Modules with Parcel

To seamlessly include both 3rd party and your own custom modules in frontend JavaScript, you'll need a bundler. One such bundler is parcel: https://parceljs.org/.

React, Vue, and many modern frameworks use a bundler of some sort.

Check out the (starter-code/parcel) directory to see how this would work. This is derived from the boilerplate here: https://github.com/bradtraversy/vanilla-parcel-boilerplate. You can clone this boilerplate and work from it locally on your machine with `git clone https://github.com/bradtraversy/vanilla-parcel-boilerplate.git`.

Let's post this somewhere in the template to verify that we can import 3rd party modules into frontend code seamlessly here:

```js
import axios from 'axios';

axios.get( 'https:pokemon//pokeapi.co/api/v2/').then((data) => console.log(data));
```

## Code organization Basics

There are many, many different ways to organize code that vary depending on the programming patterns implemented and the type of application that it is.

There are, however, some common organization patterns:
- at the root level, single main entry point for the application that gets things running. Usually named `index.js`, `main.js`, or `app.js`.
- a `/src` directory that includes the bulk of your code, further organized by function.
- sometimes a `/tests` directory if you so choose to put all tests in the same place rather than "co-located" tests.
- naming a collection of utility function in many places `utils` or `helpers`.
- also at the root level, your different configuration files. These can be for linters, code coverage, docker, etc.

Here are some other tips:
- Some choose to organize by function (controllers, views, transformers, routers) or domain (blog posts, users, comments). Sometimes folks vary the mode of organization depending on the directory level.
- If two files use the same function, consider putting that function into a separate 3rd file that is imported into the other two.
- For inspiration, look at open-source projects, expecially well-known and well-funded ones. Emulate the things you like. 
- There are many books and blog posts written on the subject.

---

<a name = "conclusion"></a>
## Conclusion (5 min)
Callbacks and closures are the bread and butter of asynchronous programming. Looking back at our DOM and APIs lessons, our interfaces update on user interactions and/or once we receive data from remote locations. Best practices in JS call for these reactions to be handled in the form of callbacks.

Callbacks, closures, and IIFEs allow us to better organize our code for each scenario, as well as make our functions significantly more dynamic.

Make sure class objectives have been met.

## Homework 6: Frontend native ES6 Modules

1. Install `http-server` with `npm install -g http-server` (or elect to use repl.it)
2. Create a new directory for your files
3. Create an `index.html` and an `index.js`. Make sure to have a `script` tag with a `src` referencing `index.js` in your `index.html` file. The script tag must have `type="module"` for this to work.
4. Create a `module.js` file as well. Inside this file include a function that logs "Hello World" to the console and remember to `export` this function. `import` this function into `index.js` and invoke it. You should see "Hello World" in your console. Do not add `module.js` to `index.html` with another `script` tag. 
5. If you are working off your machine (and not repl.it), navigate to your project directory in the command line and run `http-server`. It will display the URL and port where you can see your page. You'll have to stop and start this anytime you make changes.


#### Further Resources

- [Functions are first class objects in javascript][1]
- [Brief intro to callbacks][2]
- [Demystifying JavaScript Closures, Callbacks and IIFEs][3]
- [More in-depth article on callbacks][4]

[1]: http://helephant.com/2008/08/19/functions-are-first-class-objects-in-javascript/
[2]: http://www.impressivewebs.com/callback-functions-javascript/
[3]: http://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/
[4]: http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
