(function timedCountDown(endTime) {
  for (let i = 1; i <= endTime; i++) {
      (function runCountDown(j) {
          setTimeout( function timer() {
              console.log(j);
          }, j * 1000 );
      })( i );
  }
})(5);

// if not writing an IIFE, this would be the same as writing to invoke the function
// timedCountDown(5);