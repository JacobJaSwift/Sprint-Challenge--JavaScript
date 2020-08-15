// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//Because internal is within the function scope, if it were outside of that function scope it would not be able to access within.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num) { // number is 8
  let counter = 0 // counter is 0
  for (i = 1; i <= num; i++) { //let i be 1 and while i less than 8 add i to counter
    counter += i;
  }
  return counter;
}
console.log(sumation(4));