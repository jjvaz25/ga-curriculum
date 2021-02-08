// 1. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
function quarterOf(month) {
    if (month <= 3) {
      return 1;
    } else if (month <= 6) {
      return 2;
    } else if (month <= 9) {
      return 3;
    } else if (month <= 12) {
      return 4;
    }
}

quarterOf(2)  // return 1
quarterOf(7)  // return 3
quarterOf(12) // return 4


// 2. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x){
    return typeof x === "number" ? x * 50 + 6 : "Error";
}

problem(2)       // return 106
problem(10)      // return 506
problem('hello') // return 'Error'


// 3. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
}

sum([1, 5.2, 4, 0, -1]) // return 9.2
sum([])                 // return 0
sum([-2])               // return -2


// 4. Write a function that returns true or false if the number passed in is even
function testEven(n) {
    return n % 2 === 0;
}

testEven(8)   // return true
testEven(7)   // return false
testEven(100) // return true


// 5. Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}

isDivisible(10, 2, 5)   // return true
isDivisible(9, 2, 4)    // return false
isDivisible(100, 20, 5) // return true



// BONUS QUESTIONS:
// 1. Write a function that determines the largest of 2 numbers
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// using ternary operator instead of if-else
// function maxOfTwoNumbers(x, y) {
//   return x >= y ? x : y;
// }

maxOfTwoNumbers(3, 9); // return 9



// 2. Write a function that determines the largest of 3 numbers
const maxOfThree = function(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else {
    return z;
  }
};

maxOfThree(5, 10, 1); // return 10

// 3. Write a function that determines if the character provide is a vowel
function isCharAVowel(s) {
  s = s.toLowerCase();
  return ('aeiouy'.indexOf(s) > -1);
  // or use ES2015's string.includes
  // return 'aeiouy'.includes(s);
}

isCharAVowel('b'); // return false


// 4. Write a function that gets the product of all numbers multiplied in an array
function multiplyArray(arr) {
  let product = 1;
  // feel free to use a for loop or forEach if you want to really be cool!
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

multiplyArray([5, 10, 2]); // return 100

// 5. Write a function that determines how many arguments are passed in
const numArgs = function(...args) {
  return args.length;
  // or, without using a rest parameter
  // return arguments.length;
};

numArgs('test', true, 5); // return 3

// 6. Write a function that reverses a string
function reverseString(s) {
  // strings don't have a reverse method - but arrays do!
  let arr = s.split('');
  // let arr = Array.from(s);  <-- another way to create an array from an array-like object or iterable
  return arr.reverse().join('');
  // Yup, you can make it a one-liner if you wish
  // return s.split('').reverse().join('');
}

reverseString('rockstar'); // return ratskcor

// 7. Write a function that determines the longest string in an array and return the length of the string
const longestStringInArray = function(arr) {
  let longest = 0;
  // using forEach this time!
  arr.forEach(function(s) {
    if (s.length > longest) longest = s.length;
  });
  return longest;
  // The Array.reduce method is cool for when you want a single 'thing' from an array
  // return arr.reduce(function(longestThusFar, currentStr) {
  //   return currentStr.length > longestThusFar.length ? currentStr.length : longestThusFar.length;
  // }, 0);
};

longestStringInArray(['say', 'hello', 'in', 'the', 'morning']); // return 7

// 8. Write a function that takes an array and number. Return an array of strings that are longer than the provided number
function stringsLongerThan(arr, len) {
  // now we're talking!
  return arr.filter(function(s) {
    return (s.length > len);
  });
  // don't sweat it - we'll be covering array iterator methods like filter quite a bit in the course
  // Without the filter method...
  // const strings = [];
  // arr.forEach(function(s) {
  //   if (s.length > len) strings.push(s);
  // });
  // return strings;
};

stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); // return ["hello", "morning"]
