function makeCountingFunction (predicate) { // should accept a predicate function as an argument
    // return another function
    return function(numbers) {
        let i;
        let count = 0;
        // iterate through an array and apply the predicate function to each item in that array
        for (i = 0; i < numbers.length; i++) {
            // increment a counter based on the result of applying the predicate function to that item
            if (predicate(numbers[i])) {
               count++;
            }
        }
        // return the final count.
        return count;
    };
}

// should accept a predicate function as an argument
function isOdd(number) {
    return (number % 2) === 1;
}

let countTheOdds = makeCountingFunction(isOdd);

console.log(countTheOdds([1, 2, 3, 4, 5, 6, 7]));
