// 1. Print out the phrase "C'mon hit me" with the following array
let batman = ['batman', 'joker', 'dark knight', 'me'];

console.log('C\'mon hit ' + batman[3]); // 'C'mon hit me'

// 2. Help fill the array. Transfer all items out of the "remove" array and into the "fill"
// Try it with a loop
// Try it with an array method
// Loop
let remove = ['take', 'this', 'stuff', 'out'];
let fill = [];
let loopTimes = remove.length;

for(let i = 0; i < loopTimes; i++) {
  let item = remove.shift();
  fill.push(item);
}

// Array Method
// fill = remove.slice();
// remove= [];

// ES6 method
// fill = [...remove];
// remove= [];

console.log(remove, fill); // [], ['take', 'this', 'stuff', 'out']

// 3. Fill an array with 5 numbers
let emptyArr = [];
for (let i = 0; i < 5; i++) {
  emptyArr[i] = i;
}

console.log(emptyArr); // [0, 1, 2, 3, 4]

// or 

let emptyArr = new Array(5).fill(6);
console.log(emptyArr); // [6, 6, 6, 6, 6]

// 4. Using a for loop, get the total of numbers 1 to 100
let sum = 0;
for(let i = 1; i < 101; i++) {
  sum += i;
}

console.log(sum); // 5050


// 5. Get the average of an array rounded DOWN

let array = [1000, 2, 30, 1, 10]; // answer should be 208
// other examples to check your answer, comment and uncomment the other array variables to check them
// let array = [1, 2, 3, 4]; // 2
// let array = [3, 9]; // 6

// calculates total of the array
let total = 0;
for(let i = 0; i < array.length; i++){
  total += array[i];
}

/* total divided by numbers in array
rounded down to nearest integer */
let average = Math.floor(total / array.length);

console.log(average); // 208