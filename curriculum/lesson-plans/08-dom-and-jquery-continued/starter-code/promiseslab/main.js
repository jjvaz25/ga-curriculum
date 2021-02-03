// 1. Fetch data from the Pokemon API, parse it into json, and log the name of each monster. Handle the scenario where the API call fails.

// 2. Experiment locally and see what happens if a promise rejects with `Promise.all`. An easy way of triggering this is throwing in at least one `Promise.reject()` as one of the promises. What are some advantages and disadvantages of `Promise.all`?

// 3. What if you wanted to use `Promise.all` but you didn't want to abort if one went wrong? How could we restructure the code below (without using `Promise.allSettled`) so that we could return the results we have? 
// **Hint**: Does a promise that is rejected and then chained with `.catch(() => {})` still reject the broader `Promise.all` promise?
(async () => {
  const promise1 = Promise.resolve('success');
  const promise2 = Promise.reject('rejected');

  try {
    const results = await Promise.all([
      promise1,
      // what can you edit on the line below so that an error isn't thrown?
      promise2
    ]);
    console.log('results', results);
  } catch (err) {
    console.log('err', err);
  }
})();

// This is the same as above
// let asyncFunction = async function() {
//   const promise1 = Promise.resolve('success');
//   const promise2 = Promise.reject('rejected');

//   try {
//     const results = await Promise.all([
//       promise1,
//       // what can you edit on the line below so that an error isn't thrown?
//       promise2
//     ]);
//     console.log('results', results);
//   } catch (err) {
//     console.log('err', err);
//   }
// };
// asyncFunction();