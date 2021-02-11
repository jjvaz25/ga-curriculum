# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Conditionals and Loops

| Timing | Topic |Description|
| --- | --- | --- |
| 15 min | [Opening](#opening) | Conditional Statements |
| 20 min | [Codealong](#codealong1) | Comparison Operators |
| 15 min | [Codealong](#codealong2)| Truthy and Falsy |
| 25 min | [Codealong](#codealong3)| Boolean/Logical Operators |
| 15 min | [Lab](#practice1) | Independent Practice |
| 20 min | [Codealong & Independent Practice](#codealong4) | Switch Statements |
| 10 min | [Codealong](#codealong5) | While & Do-While |
| 15 min | [Codealong](#codealong6) | Iteration |
| 25 min | [Lab](#practice2) | Fizzbuzz Code Challenge |
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets |



### Learning Objectives
*After this lesson, students will be able to:*

- Use if/else conditionals to control program flow based on Boolean (`true` or `false`) tests.
- Use Boolean logic (`!`, `&&`, `||`) to combine and manipulate conditional tests.
- Use switch/case conditionals to control program flow based on matching explicit values.
- Differentiate among `true`, `false`, 'truth-y', and 'false-y'.
- Review loop iteration using for and `forEach`, and introduce `while` and `do...while` loops.

### Preparation
*Before this lesson, students should already be able to:*

- Describe the concept of a "data type" and how it relates to variables.
- Declare, assign to, and manipulate data stored in a variable.
- Create arrays and access values in them.
- Iterate over and manipulate values in an array.

---

<a name="opening"></a>
## Conditional Statements (15 min)

Conditional statements enable us to essentially decide which blocks of code to execute and which to skip, based on the results of tests that we run. JavaScript supports two conditional statements: `if`...`else` and `switch`. We'll start off with the `if`...`else` statement, which uses Boolean (`true` or `false`) tests.

#### If/Else Statement

```javascript
if (expr) { 
  // code here
}
```

... is a command to run the `code` block if `expr` is `true`

```javascript
if (1 > 0) {
  console.log("hi");
}
//=> hi
```

You can also add an optional `else` clause, to run if `expr` is _not_ `true`:

```javascript
if (expr) { 
  // code here 
} else { 
  // other code here
}
```

```javascript
if (0 > 1) {
  console.log("hi");
} else {
  console.log("bye");
}
//=> bye
```

When you need to test more than one case, you may use `else if`:

```javascript
let name = "kittens";
if (name === "puppies") {
  name += "!";
} else if (name === "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}
name === "kittens!!"
//=> true
```

**Note**: It is **not** recommended to assign variables within a conditional expression because that will assign a value to the variable, as seen below:

**DO NOT DO THIS**
```javascript
if (x = 3) {
    console.log("boo");
}
```

The expression above will return the value shown on the second line. So if you assign a truthy value inside a conditional statement, this condition will always be true; if you assign an undefined value, the conditional statement will be false (undefined = falsey). Another potential issue is that it can be confused with equality (`===`).


#### Ternary Operators

JavaScript has a ternary operator for conditional expressions. The ternary operator is basically a concise "if-else” in one line, except that it not only executes blocks of code, it also returns a value:

```javascript
let age = 12;
//=> undefined

let allowed = (age > 18) ? "yes" : "no";
//=> undefined

allowed
//=> "no"
```

This would be the same thing:

```javascript
let age = 12;
//=> undefined

let allowed;
if (age > 18) {
  allowed = "yes";
} else {
  allowed = "no";
}
//=> undefined

allowed
//=> "no"
```

#### Block Statements

Statements intended to be executed after a control flow operation will be grouped into a **block statement**; they are placed inside curly braces:

```javascript

{
  console.log("hello");
  console.log("roar");
}
```

#### Block Scope

We will talk about scope in later lessons; basically it means a limited area of code that knows about a variable's existence. In the case of **block statements** in JavaScript, no scope is created, unlike in most other languages.

```javascript
let name = "gerry";
{
  let name = "jay";
}
console.log(name);
// => jay
```

Only functions introduce scope in Javascript.

---

<a name="codealong1"></a>
## Comparison Operators (20 min)

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These can be used for both strings and numbers. This can be either beneficial or frustrating to a developer, since most languages do not implicitly convert strings to numbers the way that JavaScript does.

```javascript
"A" > "a"
//=> false

"b" > "a"
//=> true

12 > "12"
//=> false

12 >= "12"
//=> true
```

#### Double-Equals Equality Operator `==`

Equality is a bit more complex. JavaScript provides two ways to verify equality.

When you verify equality using double-equals `==`, JavaScript performs much of the "type coercion" in the background. As we mentioned above, if the operands have a different type (e.g., the number `1` and the string `"1"`), JavaScript will attempt to change the type of both operands in order to check if they are equal. This means that expressions will often return equal more easily than if we were stricter about what things were equivalent. Some examples:

```javascript
"dog" == "dog";
//=> true

1 == true;
//=> true
```

#### Triple-Equals Equality Operator `===`

To avoid type coercion and to measure equality more strictly, **use the triple-equals operator**. Because `===` more truly measures actual equality, we should always use `===` instead of `==`, which is a legacy of the early days of JavaScript when people thought it might be useful to have an operator that does type coercion before checking equality, but that's pretty much never a good idea as it defeats the whole purpose of having data types.

**Note:** "Sameness" and "equality" have various definitions, which can make the differentiation somewhat fuzzy. They can also differ by programming language. Because you'll often be measuring whether two things are equal, you should carefully investigate the way this works.

Some examples:

```javascript
1 === true;
//=> false

true === true;
//=> true

"hello" === "hello"
//=> true
```

However, there are some situations when `===` does not behave as we expect it to, for example when empty objects or arrays are involved:

```javascript
{} === {}
//=> false

[] === []
//=> false

[1,7] === [1,7]
//=> false
```

**Explanation**

The examples in the second set fail equality tests because both **object literals** and **arrays** are objects, not just "primitive" values like strings, numbers, and Booleans. Objects and arrays are complex collections of values, and when we refer to them, we're actually referencing where they live in memory. That's why we call them "reference types." Strings and numbers are "value types."

What does this all mean? When we attempt to compare two objects or arrays with `===`, JavaScript doesn't care if they look like similar collections. It only compares whether or not they are the exact same object in memory. In each case above, checking for equality is actually comparing two objects that are in two different places in memory. They're not exactly "the same."

Example of comparing similar objects:
```js
let arr1 = { key: 'some value' };
let arr2 = { key: 'some value' };

arr2 === arr1
// false
```

Example of comparing object reference:
```js
let arr1 = { key: 'some value' };
let arr2 = arr1; // this creates a reference to arr1 NOT a copy

arr2 === arr1
// true
```


#### != and !==

There are also `!=` and `!==` operators, which are the negative versions of `==` and `===`. And again, we should always use `!==` and `===`, because they are more precise than `!=` and `==`.

---

<a name="codealong2"></a>

## Truthy and Falsey (15 min)

All of the following become false when converted to a Boolean:

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

All other values become true when converted to a Boolean.

Do not confuse the primitive Boolean values `true` and `false` with the true and false values of the Boolean object. For example:

```javascript
let b = new Boolean(false);
if (b) { console.log("true") }
//=> true
```

There is a simple way of verifying the 'truthyness' or 'falseyness' of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a Boolean. So if you add two `!` then you'll get the Boolean value of the original one:

```javascript
!!1
//=> true

!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```

*Find more on truthy and falsey values [here](http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html)*

---

<a name="codealong3"></a>

## Boolean and Logical Operators (25 min)

When you feed Boolean values of `true` or `false` into logical operators, they will  return `true` or `false` based on a few rules.

There are two "binary" operators that require two values:

- **AND**, denoted `&&`
- **OR**, denoted `||`

A third "unary" operator requires only one value:

* **NOT**, denoted `!`

#### && (AND)

The `&&` operator requires both left and right values to be `true` in order to return `true`:

```javascript
true && true
//=> true
```

Any other combination is false.

```javascript
true && false
//=> false

false && false
//=> false
```

#### || (OR)

The `||` operator requires just one of the left or right values to be `true` in order to return true.

```javascript
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

Only `false || false` will return `false`

The `!` takes a value and returns the opposite Boolean value:

```javascript
!(true)
//=> false
```

### Short-Circuit Logic

`&&` and `||` and `!` don't have to operate only on true or false -- they can operate on any values, and JavaScript will evaluate the truthyness or falseyness of the operands. In the case of `!`, it returns a Boolean true-or-false, but in the case of `&&` and `||`, it returns one of the original operands themselves, using short-circuit logic.

This means that the execution of the second operand is dependent on the execution of the first. This is useful for checking for null objects before accessing their attributes:

```javascript
let person;
let name = person && person.name;
// name will have the value of undefined

let name = person.name;
// Uncaught TypeError: Cannot read property 'name' of undefined
```

In this case, if the first operand `person` is `undefined`, which is falsey, the second operand `person.name` will not be evaluated. The expression basically says, "We already know the whole `&&` expression is false, because `person` is falsey. Why bother dealing with the second operand?"

Short-circuit logic is also useful for setting default values:

```javascript
let person;
let name = person || "Bobby Default";
```

In this case, if the first operand `person.name` turns out to be falsey for any reason (probably because it's undefined or it's an empty string), `"Bobby Default"` will be returned. If `person.name` is truthy (probably because it's a non-empty string), it will be returned, and the second operand won't be evaluated. The expression basically says, "We already know the whole `||` expression is true, because `person.name` is truthy. Why bother dealing with the second operand?"

Further reference: [Mozilla Developer Network article on Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)


---

<a name="practice1"></a>
## Independent Practice (15 min)

When programming user interfaces, you will often need to display results based on a certain input. In this exercise, help the students design a program that will let users know what legal privileges U.S. citizens enjoy based on their age.

Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. See the conditions below:

- If you are under 16, you cannot do much outside of going to school
- If you are 16 or older, you can drive
- If you 18 or older, you can vote
- If you are 21 or older, you can drink alcohol
- If you are 25 or older, you can rent a car
- If you are 35 or older, you can run for president
- If you are 62 or older, you collect social security benefits

Have the program print out only the most recent thing that they've become eligible to do, i.e. if they are 46, only print "You can run for president." (This will at least force them to use `else if` instead of just `if`).

Note: If you are outside the U.S., adjust the conditions above to reflect the laws in your country.

<details close>
<summary><b>Solution</b></summary>

```javascript
let age = 25;

if (age < 16) {
  console.log('You can go to school!')
} else if (age >= 16 && age < 18) {
  console.log('You can drive!');
} else if (age >= 18 && age < 21) {
  console.log('You can vote!');
} else if (age >= 21 && age < 25) {
  console.log('You can drink alcohol!');
} else if (age >= 25 && age < 35) {
  console.log('You can rent a car!');
} else if (age >= 35 && age < 62) {
  console.log('You can run for president!');
} else if (age >= 62) {
  console.log('You can collect social security!');
} else {
  console.log('Please enter a correct age value');
}

=> You can rent a car!
```

</details>
---
<a name="codealong4"></a>
## Switch Statements (20 min)

Now let's look at switch statements. These conditional statements can be used for multiple branches based on a number or string:

```javascript
let food = "apple";

switch(food) {
  case 'pear':
    console.log("I like pears");
    break;
  case 'apple':
    console.log("I like apples");
    break;
  default:
    console.log("No favorite");
}
//=> I like apples
```

In this case, the `switch` statement compares `food` to each of the cases (`pear` and `apple`) and evaluates the expressions beneath them if there is a match. It uses `===` to evaluate equality.

The default clause is optional.

## Switch Statement Usage

#### Part 1: Construct If/Else Conditionals

Create an if/else statement that returns a string, such as "Awesome Job" if the user gets a grade of “A” or "Bad Job" if they get an "F." Console.log a string for each letter grade.

```javascript

let grade = 'C';

if (grade === 'A') {
  console.log('Awesome job');
} else if (grade === 'B') {
  console.log('Good job');
} else if (grade === 'C') {
  console.log('Okay job');
} else if (grade === 'D') {
  console.log('Not so good job');
} else if (grade === 'F') {
  console.log('Bad job');
} else {
  console.log('Unexpected grade value entered');
}

```

#### Part 2: Construct Similar Logic Using a Switch Statement

Using the if/else statement from above, convert it into a switch statement.

```javascript
let grade = 'C';

switch (grade) {
  case 'A':
    console.log('Awesome job');
    break;
  case 'B':
    console.log('Good job');
    break;
  case 'C':
    console.log('Okay job');
    break;
  case 'D':
    console.log('Not so good job');
    break;
  case 'F':
    console.log('Bad job');
    break;
  default:
    console.log('Unexpected grade value entered');
}

```

#### Part 3: Which is Faster?

The `switch` statement is faster in most cases when compared to `if-else`, but significantly faster only when the number of conditions is large. The primary difference in performance between the two is that the incremental cost of an additional condition is larger for `if-else` than it is for `switch`. Therefore, our natural inclination to use `if-else` for a small number of conditions and a `switch` statement for a larger number of conditions is exactly the right advice when considering performance. [More on switch/if-else](https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04.html#if-else_versus_switch)

#### Part 4: Intentionally `Break` the Switch Statement

As `break` statements play a major role in switch statements, rewrite the switch statement from Part 2 without any `break`'s:

```javascript
let grade = 'C';

switch (grade) {
  case 'A':
    console.log('Awesome job');
  case 'B':
    console.log('Good job');
  case 'C':
    console.log('Okay job');
  case 'D':
    console.log('Not so good job');
  case 'F':
    console.log('Bad job');
  default:
    console.log('Unexpected grade value entered');
}

=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

What is going on here? Why is everything printing out?

```javascript
let grade = 'B';

switch (grade) {
  case 'A':
    console.log('Awesome job');
  case 'B':
    console.log('Good job');
  case 'C':
    console.log('Okay job');
  case 'D':
    console.log('Not so good job');
  case 'F':
    console.log('Bad job');
  default:
    console.log('Unexpected grade value entered');
}

=> Good job
=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

Without the `break` statement, a `switch` will run all subsequent cases

#### Part 5: Illustrate the Fall-Through Technique

You will often need to return the same value for different cases. The fall-through technique is one way to achieve this:

```javascript
let grade = 'C';

switch (grade) {
  case 'A':
  case 'B':
  case 'C':
    console.log('You passed!')
    break
  case 'D':
  case 'F':
    console.log('You failed')
    break
  default:
    console.log('Unexpected grade value entered')
}

=> You passed!
```
---

<a name="codealong5"></a>
## While and Do-While (10 min)

`While` is a loop statement that will run **while** a condition is true.

JavaScript has `while` loops and `do-while` loops. The first is useful for basic looping, but there's a possibility it will never get run. Using a `do-while` loop makes sure that the body of the loop is executed at least once, because `while()` isn't evaluated until after the block of code runs.

Note: this code will freeze your browser and require you to quit the program

```javascript
while (true) {
  // an infinite loop!
}
```

This should be enough to break a browser.

```javascript
let input = 0;
do {
  console.log(input++);
} while (input < 10);
```
---
<a name="codealong6"></a>
## Iteration (15 min)

Iterating is a way of incrementally repeating a task.

#### for

You can iterate over an array with:

```javascript
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

If you needed to go through the array from the end to the beginning, it would look something like this:

```javascript
let arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; 0 <= i; i--) {
  console.log(i);
}
// 4
// 3
// 2
// 1
// 0
```

If the array length is fixed (aka elements are not being added/removed which change the number of elements in the array), the previous loop is slightly inefficient because it is essentially looking up the length property once every loop. An improvement is to chain the `len` assignment, here `i` is being assinged as `0` and `len` variable is assigned the length of the array:

```javascript
let arr = [1, 2, 3, 4, 5];
for (let i = 0, len = arr.length; i < len; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

Notice the placement of the comma and semi-colons.

#### forEach

Another way of iterating over an array added with ECMAScript 5 is [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):

```javascript
["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
   console.log("I want a ", currentValue);
   console.log(array[index]);
});
// I want a  dog
// dog
// I want a  cat
// cat
// I want a  hen
// hen
```

#### Helpful tips when printing out with `console.log`

You are also able to print out multiple variables in a single `console.log` without doing any type of adding or concatenation
```javascript
let a = 'elliot';
let b = 'alderson';

console.log(a, b);
// elliot alderson
```

**String Interpolation**

Another way you can intertwine variables with strings is with string interpolation. Take note of the quotes which use the tick marks ` `` ` and `${}` is used to write in variables and other Javascript:
```javascript
const age = 3;
console.log(`I'm ${age} years old!`);
// I'm 3 years old!
```


---

<a name="practice2"></a>

## Fizz Buzz: Pairs (25 min)

Lets work in pairs

Relying on your new-found knowledge of loops and if/else statements, incrementally build the common Fizz buzz loop. Fizz buzz is a math game designed to teach the concept of division. Create a program that will iterate through numbers 1 to 100 and log each number in the console.

Open the [fizzbuzz.js](starter-code/fizzbuzz.js) to get started. After reading the instructions, I am pretty sure almost everyone would be able to describe how to do this in plain English. The next step would be to break down that logic in simple steps and write it in Javascript.


##### Step 1:
<details close>
<summary>Construct a for loop that iterates through, and <code>console.log()</code>'s out, numbers 1 - 100:</summary>

```javascript
for (let num = 1; num <= 100; num++) {
  console.log(num);
}
```
</details>

##### Step 2:

<details close>
<summary>Add an if/else statement that logs the string <code>"fizz"</code> if the value being iterated over is divisible by <code>3</code>; otherwise, log out the value:</summary>

```javascript
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(num)
  }
}
```
</details>

##### Step 3:

<details close>
<summary>Add an <code>else if</code> clause that logs the string <code>"buzz"</code> if the value being iterated over is divisible by <code>5</code>:</summary>

```javascript
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(num)
  }
}
```
</details>

##### Step 4:

<details close>
<summary>Add an additional <code>else if</code> clause that logs the string <code>"fizzbuzz"</code> if the value being iterated over is divisible by both <code>3</code> and <code>5</code>. __Note:__ this step is intentionally broken! Why is the <code>fizzbuzz</code> evaluation never done?</summary>

```javascript
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 15 === 0) {
    console.log('fizzbuzz')
  } else {
    console.log(num)
  }
}
```
</details>

##### Step 5:

<details close>
<summary>Fix the above code to evaluate the <code>fizzbuzz</code> condition:</summary>

```javascript
for (let num = 1; num <= 100; num++) {
  if (num % 15 === 0) {
    console.log('fizzbuzz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(num)
  }
}
```
</details>

<a name="conclusion"></a>
## Conclusion (5 min)

These are some of the foundational tools you’ll use in many of your applications. You might need to study the exact syntax before it’s committed to your memory, but it's important that you remember these core "control flow" concepts, because every programming language you encounter will involve them.

#### Review

Make sure the lesson objectives have been met.

* Be able to explain if/else and switch statements as well as use cases.
* Differentiate between true, false, 'truthy', and 'falsey'.

#### Homework 2

**Assignment 1: 99 Bottles of Beer**
- Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics here](https://lyricsplayground.com/alpha/songs/numbers/99bottlesofbeeronthewall.html). Do not worry about spelling out the numbers, use actual numbers (100, 99, 98...).
- Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

**Assignment 2: Random Address Generator**
- Write a script that can generate random addresses
- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
- Your script should randomly select one item from each of these arrays and then use them to construct a random address
- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
- `node random-address.js`
- `=> 34578 Dolphin Street, Wonka NY, 44506`

#### Further Resources
- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
