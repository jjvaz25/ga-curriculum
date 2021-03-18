# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Prototypal Inheritance (3:00)


| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Opening](#opening) | Introduction to Prototypal Inheritance |
| 15 min | [Introduction](#introduction) | Prototypes in JavaScript |
| 10 min | [Discuss](#discuss) | Group Discuss |
| 60 min | [Codealong](#codealong1) | Prototypes vs Classes |
| 50 min | [Lab](#lab1) | Independent Practice |
| 5 min |  [Conclusion](#conclusion)| Final Questions & Exit Tickets |

### Objectives

_After this lesson, students will be able to:_

- Explain prototypal inheritance and its purpose.
- Distinguish the difference between prototypal from classical inheritance.
- Create and extend prototypes.
- Explain the difference literal and constructed objects.

### Preparation

_Before this lesson, students should already be able to:_

- Write JavaScript functions.
- Describe the difference between functions and methods in JavaScript.

---

<a name = "opening"></a>
## Intro (10 min)

> Prototype-based programming is a style of object-oriented programming in which behavior reuse (known as inheritance) is performed via a process of cloning existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming. Delegation is the language feature that supports prototype-based programming. - wikipedia

As we develop more programs we run into the concept of DRY, short for _Don't Repeat Yourself_. With DRY, we begin practicing the declaration of variables whose values range from arrays to functions, all for the purpose of being able to refer to and reuse these already defined values. However, what do we do when we want to go beyond reusing a value which may just be a primitive or an object containing some key/value data? What if instead we want to clone an object that has _behaviors_ we seek to reuse?

For example, say we are developing a revamped version of the video game Street Fighter. Each character may have their own unique fighting tricks, but in general, all character objects should have at least the same kick and punch abilities. With DRY in mind, when we develop a new fighter object we know we would want to avoid recreating any of these general behaviors and instead code a solution that clones them. This solution is performed with prototypal inheritance.

## Categorizing the World

How might DRY _Don't Repeat Yourself_ apply to a description of the real world? What things have something in common with other things?

A few examples:
- There are many many monkeys in the world. While they have different monkey personalities they are all instances of the `Monkey` prototype object. That is, they hang from trees, eat bananas, and monkey around. Monkeys, as a group, are also warm-blooded and share many traits within the broader prototype of `Mammal`. You could say that George the Monkey Instance inherits from the `Monkey` prototype which then inherits from the `Mammal` prototype. 
- There are many different kinds of cars, each of a different make, model, number of doors, engine, etc. But they all inherit from this `Car` prototype that says they have 4 wheels, drive forward, drive backwards, and brake.

Prototypes allow us to define properties and behaviors that exist across all instances without repeating ourselves.

### Your turn

Think about a few other prototypes that exist in the world and what prototypes they might inherit from.

## Why Object-oriented?

- You have objects that share common behavior but vary in terms of configuration
- You have similar objects that need to maintain state independently
- Personal or team preference

## Real-world use cases

- Games
- HTML forms
- Image carousels
- Spammy web pages with clickbait slideshows
- Implementing new non-native data structures: linked lists, trees, heaps, graphs, matrices with built in dot product/matrix multiplication/transposition abilities
- Webpage dialog/interstitial/modal boxes

<a name = "introduction"></a>
## Prototypes in JavaScript (15 min)

Let's crawl before we walk.
### Standard Objects

In your browser JavaScript console, type the following:

```js
const myObject = { foo: 'bar' };
myObject
```

If you click the gray arrow in the console we can explore everything about this object we created. We see there are two properties `foo` and `__proto__`. If we click into `__proto__`, we see that the `constructor` in the prototype of `myObject` is `Object`! `myObject`'s inherits from `prototype`, meaning that we have access to methods that it defines, including `hasOwnProperty`, `toString`, and `isPrototypeOf`. We didn't need to define those methods in `myObject`. We got them for free! All object literals have a prototype of `Object`.

`myObject`'s prototype chain looks like this: `myObject` -> `Object`.

We can verify this like so:
```js
myObject instanceof Object
```

Let's look at slightly more complicated example:

```js
const myArray = [1,2,3,4];
myArray
```

We see `myArray` has indices 0 - 4 and a `length` property, as well as a `__proto__`. Let's take a peek in there.

It says that `myArray` prototype is `Array`. We can see all sorts of standard array methods in there like `map`, `forEach`, `reduce`, `sort`, `push`, etc. Diving even deeper we see this has a `__proto__` of `Object`. That's right. `myArray` is an instance of `Array` which inherits from `Object`. We can use all those same methods, `hasOwnProperty`, `toString`, and `isPrototypeOf`, on arrays as a result.

`myArray`'s prototype chain looks like `myArray` -> `Array` -> `Object`.

We can verify this like so:
```js
myArray instanceof Array;
myArray instanceof Object;
```

### Custom Object templates

The following creates a new monkey named `George`

```js
// things that vary across Monkeys are put here
// all monkeys will have names but that name will vary
const Monkey = function(name) {
  this.name = name;
};

const george = new Monkey('George');

george instanceof Monkey;
```

If we paste this into the JavaScript console, we see that the `george`'s prototype is `Monkey` which inherits from `Object`. The prototype chain is `george` -> `Monkey` -> empty object (`constructor` and `__proto__` only) -> `Object`.

We can also add shared functionality across all Monkeys:

```js
// things that vary across Monkeys are put here
const Monkey = function(name) {
  this.name = name;
};
// things that are common across all monkeys are placed on prototype
Monkey.prototype.isFurry = true;
Monkey.prototype.swingFromTrees = function() {
  console.log(`${this.name} is swinging from tree to tree!`);
};

// create new instances of Monkey
const george = new Monkey('George');
const bill = new Monkey('Bill');

// swing from trees
george.swingFromTrees();
bill.swingFromTrees();

// both are instances of Monkey
george instanceof Monkey;
bill instanceof Monkey;
```

If we paste this into the JavaScript console, we see that `george`'s prototype is an `Object` with `isFurry` and `swingFromTrees` properties. That unnamed `Object` inherits from `Object`. The prototype chain is `george` -> our customized `prototype` object -> `Object`.

<a name = "discuss"></a>
## Group Discuss (10 min)

With a neighbor or two explain as concisely as possible what is happening line-by-line using all the following keywords: constructor, instance property, prototype, inheritance and prototype chain.

<a name = "codealong1"></a>
## Prototypes vs classes (60 min)

Important difference between JavaScript's prototypes and the concept of classes:
- classes serve more as abstract "blueprints" for the creation of instances of that class. In JavaScript prototypes are actual objects that behave the same as other objects.
- We can add additional properties to individual object instances and the prototype dynamically at runtime. In class-based languages this is usually not the case.

For more details, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model .

## Practice with object-oriented programming

In [starter-code/formbuilder](starter-code/formbuilder) you will find starter files for this code-along. 

We'll start first with creating a constructor for an `Input`, and time allowing, we'll proceed to creating a `Form` that utilizes those `Inputs`.

## Inheriting from your custom Objects

You might be wondering, if `Array` can inherit from `Object`, can `Monkey` inherit from something else? It sure can!

```js
const Mammal = function(species) {
  this.isWarmBlooded = true;
  this.species = species;
}
Mammal.prototype.gatherKin = function() {
  console.log(`Hello fellow mammals, I am one of you! I am ${this.species}`);
}

const Monkey = function(name) {
  // we do this to initialize Mammal
  Mammal.call(this, 'monkey');
  this.name = name;
};
// we need to manually point Monkey prototype to Mammal
Monkey.prototype = Object.create(Mammal.prototype);
// then we can set properties on Monkey prototype
Monkey.prototype.isFurry = true;
Monkey.prototype.swingFromTrees = function() {
  console.log(`${this.name} is swinging from tree to tree!`);
};

const george = new Monkey('george');

george.gatherKin();
```

## Alternatives to object-oriented programming

While OOP and prototypes are a good solution for multiple instances of the same kind of object, it's not the only solution. In programming there are often times many different approaches to the same problem.

```js
// OOP
const Monkey = function(name) {
  this.name = name;
};
Monkey.prototype.isFurry = true;
Monkey.prototype.swingFromTrees = function() {
  console.log(`${this.name} is swinging from tree to tree!`);
};

const oopGeorge = new Monkey('George');
oopGeorge.swingFromTrees();

// More of a functional approach
const buildMonkey = (name) => {
  return {
    name,
    isFurry: true
  };
};
const swingMonkeyFromTree = (monkey) => {
  console.log(`${monkey.name} is swinging from tree to tree!`);
};

let george = buildMonkey('George');
swingMonkeyFromTree(george);

// 1 step further, creating multiple monkeys with .map()
const monkeyNames = ['George', 'Bob', 'Susie'];
const monkeys = monkeyNames.map(buildMonkey);

const sadMonkeys = monkeys.map((monkey) => {
  return {
    name: monkey.name,
    isFurry: false
  };
});

sadMonkeys.forEach((monkey) => {
  swingMonkeyFromTree(monkey);
});
```

## ES6 Classes

ES6 classes are not real classes. They are "syntactic sugar", meaning that they do exactly the same thing as the constructor/prototype approach we've used in the class so far.

```js
// ES5 style
const Monkey = function(name) {
  this.name = name;
};
Monkey.prototype.isFurry = true;
Monkey.prototype.swingFromTrees = function() {
  console.log(`${this.name} is swinging from tree to tree!`);
};

// ES6 style
class Monkey {
  // constructor
  constructor(name) {
    this.name = name;
    this.isFurry = true;
  }

  // prototype method
  swingFromTrees() {
    console.log(`${this.name} is swinging from tree to tree!`);
  }
}

// same `new` keyword for Object creation with constructor
const george = new Monkey('george');

george.swingFromTrees();
```

ES6 with inheritance (much cleaner!):

```js
class Mammal {
  constructor(species) {
    this.isWarmBlooded = true;
    this.species = species;
  }
  gatherKin() {
    console.log(`Hello fellow mammals, I am one of you! I am ${this.species}`);
  }
}

class Monkey extends Mammal {
  constructor(name) {
    super('monkey');
    this.name = name;
    this.isFurry = true;
  }
  swingFromTrees() {
    console.log(`${this.name} is swinging from tree to tree!`);
  };
};

const george = new Monkey('george');

george.gatherKin();
```

<a name = "lab1"></a>
## Independent Practice (50 min)

Refactor the form builder exercise we did earlier to use ES6 classes. You can use the [solution-code/formbuilder](solution-code/formbuilder) as a leaping off point as your wish or use your own files.

---

<a name = "conclusion"></a>
## Conclusion (5 min)

Review class objectives and the following questions:

- What is the difference between class-based and prototype based languages?
- When would you want to declare a literal object and when would you want to construct an object?
- Why is using a constructed object better for memory performance?
- When would you want to implement a "subclass"?
- What is the purpose of a constructor function?
- What is the purpose of the prototype property?
- How does the prototype chain work?

