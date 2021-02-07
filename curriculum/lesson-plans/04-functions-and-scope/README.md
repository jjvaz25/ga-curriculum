# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Functions and Scope

| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening) | Introduction to Functions  |
| 30 min | [Codealong](#codealong1) | Function Declaration |
| 40 min | [Lab](#lab1) | Rolling Dice |
| 20 min | [Codealong](#codealong2) | Parameters |
| 20 min | [Codealong](#codealong3) |  The Return Statement |
| 20 min | [Introduction](#introduction1) | Introduction to Scope |
| 25 min | [Codealong](#codealong4) | Local and Global Scope Usage |
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets |

### Objectives

*After this lesson, students will be able to:*

- Describe how parameters and arguments relate to functions
- Create and call a function that accepts parameters to solve a problem
- Define and call functions defined in terms of other functions
- Return a value from a function using the return keyword
- Define and call functions with argument-dependent return values
- Determine the scope of local and global variables
- Create a program that hoists variables

### Preparation
*Before this lesson, students should be able to:*

- Use conditionals to control program flow
- Differentiate between true, false, 'truth-y', and 'false-y'
- Use Boolean logic (!, &&, ||) to combine and manipulate conditionals

---
<a name="opening"></a>
## Introduction to Functions (5 min)

A function is a reusable statement, or a group of reusable statements, that can be called anywhere in the program. This avoids the need to rewrite the same statement over and over. Functions enable the software developer to segment large, unwieldy applications into smaller, more manageable pieces.

A critical component of programming, functions address a key tenet of engineering: Don't Repeat Yourself, or DRY. Our goal is to create programs with as little code as possible, while maintaining complete clarity.

Another important trait of functions is that they are similar to objects or strings. Function can be passed into other functions as an argument, and they can also be used like any other object we've been working with.

---
<a name="codealong1"></a>
## Function Declaration (30 min)

Before we call, or "use", a function, we must define it. In JavaScript, functions can be defined in several ways. Two common methods are __function declarations__ and __function expressions__.

__Function Declarations:__
```javascript
function speak (words) {
  console.log(words);
}
```

__Function Expressions:__
```javascript
let speak = function (words) {
  console.log(words);
}
```

While both methods share some similarities, only function declarations define functions that can be used anywhere in the scope where they're defined. In other words, you can call a function that is defined using function declaration before the part of the code where you actually define it:

```javascript
speak('hello, world!')

function speak(words) {
  console.log(words)
}

// DOES NOT RESULT IN ERROR
```

Function expressions, however, must be defined before they are called:

```javascript
speak('hello, world!')

let speak = function (words) {
  console.log(words)
}

// RESULTS IN ERROR:
// TypeError: undefined is not a function
```

#### Function Declaration Syntax

A function declaration always has the following:

* A name
* An optional list of parameters (i.e., the names of arguments to be "passed" into the function, or information the function will use); this is defined by the parenthesis before the opening curly brace
* Statements inside the function (the code executed every time the function is called)

In our example above, the function name is `speak`. The parameter is `words`. (Note: multiple parameters would be indicated by a comma-separated list inside the parentheses, such as `(words, num)`.) And the statement is `console.log(words);`

And this makes up a basic function declaration!

#### Arrow Functions

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations. This how an arrow function looks:
```javascript
let example = (item) => {
  // code in here
}
```

When used in an anonymous function:

```javascript
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```

**Differences & Limitations:**

* Does not have its own bindings to `this` or `super`, and should not be used as methods.
* Does not have `arguments`, or `new.target` keywords.
* Not suitable for `call`, `apply` and `bind` methods, which generally rely on establishing a `scope`.
* Can not be used as `constructors`.
* Can not use `yield`, within its body.

More on arrow functions and when NOT to use them:
* [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
)
* [When Not to Use Arrow Functions](https://www.javascripttutorial.net/es6/when-you-should-not-use-arrow-functions/#:~:text=An%20arrow%20function%20doesn't,that%20uses%20the%20arguments%20object.)

#### Calling Functions

Calling, or invoking, a function executes the code defined inside this function.

But defining and calling a function is different. A function will not be called when it's defined.

You call a function by using parenthesis after the function's name `()`:

```javascript
function hello () {
  console.log("hello there!")
}

hello();

=> hello there!
```

JavaScript functions are often defined as methods on objects. To call a function as a method:

```javascript
var person = {
  name: 'Obama',
  speak: function () {
    console.log('Hello, World!')
  }
}

person.speak()
=> 'Hello, World!'
```
---
<a name="lab1"></a>
## Rolling Dice: Lab (40 min)

Lets work in pairs!

For this lab, you'll be creating a page that displays a random update of two dice every time the user hits the "Roll Dice" button. To get started, open the [app.js file](starter-code/dice/js/app.js). Use the HTML and CSS code included in the starter code folder.

![](starter-code/dice/img/diceroller.png)

Before creating code, be sure to write down the pseudocode for the exercise!

#### `document.getElementById()`

In order to do this exercise, we need to know a little about connecting HTML elements to Javascript. `getElementById()` returns a HTML element object representing the element whose `id` property matches the specified string.
```javascript
var element = document.getElementById(id);
```

You can do different things when HTML elements are interacted with. Javascript allows you to do things like change the color of an element when a button is clicked:

**HTML**
```html
<html>
<head>
  <title>getElementById example</title>
</head>
<body>
  <p id="para">Some text here</p>
  <button id="blueButton">blue</button>
</body>
</html>
```
**JavaScript**
```javascript
document.getElementById('blueButton').onclick = changeColor;

function changeColor() {
  document.getElementById('para').style.color = 'blue';
}
```

We could also change the CSS `className` if you wanted to predefine some CSS styling. It would be as simple as changing the `className` and new style would be applied:

**CSS**
```css
.blue {
  color: blue;
  font-size: 20pt;
}
```
**JavaScript**
```javascript
document.getElementById('blueButton').onclick = changeColor;

function changeColor() {
  document.getElementById('para').className = 'blue';
}
```

[More on `getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

<a name="codealong2"></a>
## Parameters (20 min)

If a function did the same thing every time it was called, it wouldn't be a very powerful codebase. We would also have to write a new function for each new feature in order to enable additional behaviors in our application:

```javascript
// Bad idea...
function helloMark () {
  console.log('hello, Mark');
}

function helloObama () {
  console.log('hello, Obama');
}
```

Parameters remedy this problem by allowing us to call, or invoke, the same function with different values:

```javascript
function sayHello (name) {
  console.log('Hello ' + name);
}

sayHello('Mark');
=> 'Hello Mark'

sayHello('Obama');
=> 'Hello Obama'
```

In this example, the function `sayHello` is declared with one parameter, `name`. To write functions with **more than one parameter**, use a comma-separated list: `(param1, param2, param3, param4)`. In JavaScript, functions can accept up to 255 parameters!

```javascript
function sum(x, y, z) {
  console.log(x + y + z)
}

sum(1, 2, 3);
=> 6
```

JavaScript is a loosely typed language. Therefore, there is no need to specify the data-type (string, number, etc.) of the function's parameters when writing functions. While this reduces the amount of code you must write, it increases the possibility of type errors, when a value is not of the expected data type. This is because in JavaScript, function definitions do not perform type checking on arguments passed into the functions.

Note: Parameters vs Arguments. Though often used interchangeably, the terms __parameters__ and __arguments__ have different meanings.

__Parameters__ refer to variables defined in the function's declaration; __arguments__ refer to the actual values passed into the function when the function is called. For example:

```javascript
// Parameter
function doSomething (parameter) {
  // does something
}

// Argument
doSomething(argument)
```
---
<a name="codealong3"></a>

## The Return Statement (20 min)

Sometimes we don't want to print to the console or update the DOM; rather, we want to update a variable or even call another function. This requires a `return` statement. When we return something, it ends the function's execution and "spits out" what we are returning. We can then store this returned value in another variable...

```javascript
function sum (x, y) {
  return x + y;
}

let z = sum(3, 4);
=> 7
```
... or pass it to another function:

```javascript
function sum (x, y) {
  return x + y;
}

function double (z) {
  return z * 2;
}

let num = sum(3, 4)
=> 7
let numDbl = double(num);
=> 14

// This can also be written:
let num = double(sum(3,4));
=> 14
```

Note that the `return` statement will completely stop a function's execution. Any statements following the `return` statement will not be called:

```javascript
function speak (words) {
  return words;

  // The following statements will not run:
  let x = 1;
  let y = 2;
  console.log(x + y);
}
```

By default, JavaScript functions will return an `undefined` value. To test this, use Node to define and run a function __without__ a return value. A `return` value "overwrites" this default value.

---
<a name="introduction1"></a>

## Introduction to Scope (25 min)

Scope is the set of variables you have access to. As we learned in the beginning of this class, JavaScript reads from top to bottom. Sometimes, however, we declare variables inside functions (just like arguments), which aren't accessible in other parts of our code. This is the concept of scope.


#### Global Scope

Before you write a line of JavaScript, you're in what we call the `Global Scope`. When a variable is declared outside a function, it is public—referred to as GLOBAL—and has a global scope. Any script or function on the page can then reference this variable.

For example, when you declare a variable right away, it's defined globally:

```javascript
var name = 'Gerry';
```

Global scope can be confusing when you run into namespace clashes. You don't want to use global scoping for all your variables--because using it correctly is highly complex--but every Javascript program uses the global scope in one way or another, so it’s important to be familiar with it.

#### Local Scope

Conversely, if a variable is declared inside a function, it is referred to as LOCAL, and has a local scope.

A variable with local scope cannot be referenced outside of that function.

---

<a name="codealong4"></a>

## Local and Global Scope Usage (25 mins)

Take a look at the code below:

```javascript
var a = "this is the global scope";
function myFunction() {
  var b = "this variable is defined in the local scope";
}
myFunction();
console.log(b);
```

In this case, the console log will send a reference error because the variable `b` is not accessible outside the scope of the function in which it is defined.

In the logic defined above, the fact that a variable cannot be accessed by the parent scope works only in one way.

A function can access variables of the parent scope. In other words, a function defined in the global scope can access all variables defined in the global scope.

```javascript
// Global Scope
let a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
    return a + " " + name;
}

sayHello("JavaScript");
=> "Hello JavaScript";
```

### Nested Function Scope

When a function is defined inside another function, it is possible to access variables defined in the parent from the child:

```javascript
var a = 1;

function getScore () {
  var b = 2,
  c = 3;

  function add() {
    return a + b + c;
  }

  return add();
}

getScore();
=> 6
```

### Using `let`

Remember `let` is block scoped which is defined with `{}`
```javascript
function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

At the top level of programs and functions, let, unlike var, does not create a property on the global object. For example:

```javascript
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

---

<a name="conclusion"></a>

## Conclusion (5 min)

Make sure the lesson objectives have been met.

* Summarize the difference between global and local scope.
* Explain how you define and call functions using arguments.
* How does Hubot work?

### Further Resources
* [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
)
* [When Not to Use Arrow Functions](https://www.javascripttutorial.net/es6/when-you-should-not-use-arrow-functions/#:~:text=An%20arrow%20function%20doesn't,that%20uses%20the%20arguments%20object.)

## Homework 3
Javascript code challenges! There are 5 Javascript code challenges in the homework repository. Remember to comment out the problems you finish so it does not accidentally interfere with the question you are currently working on.

## Homework 1
Remember Homework 1? With the new found knowledge of `document.getElementById()`, you will now be able to complete it. It might take a little bit of research on how to edit HTML with JS but thats part of the learning process! Give it a shot!