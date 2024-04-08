console.log("This is Promises");
console.clear();
/* 
    -  Promises in JavaScript handle asynchronous operations, representing their completion or failure. They're created using new Promise(), resolving or rejecting via resolve() and reject() functions. Promises have states: pending, fulfilled, and rejected. They simplify asynchronous code, making it easier to manage and understand.
*/

let n1 = new Promise((resolve, reject) => {
  let rand = Math.random();
  if (rand < 0.5) {
    reject(" 1st Banku Bhaiyaaa!!");
  } else {
    setTimeout(() => {
      console.log("Khada hu aaj bhi vahi");
      resolve("aaoge Tum kabhi");
    });
  }
});
let n2 = new Promise((resolve, reject) => {
  let rand = Math.random();
  if (rand < 0.5) {
    reject("rejected\nSunai de rha hai .. Bahera nahi hu main");
  } else {
    setTimeout(() => {
      console.log("Khada hu aaj bhi vahi");
      resolve("Neeraj is genius");
    });
  }
});
/* *
n1.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log("The Error is: " + err);
});*/

/* 
- resolve(): Used within a promise to indicate successful completion of an asynchronous operation. It accepts a value or an object and transitions the promise to the fulfilled state, passing the resolved value to the subsequent .then() handler.

- reject: Employed within a promise to indicate failure or an error during an asynchronous operation. It accepts an error object or an error message and transitions the promise to the rejected state, passing the error to the subsequent .catch() handler.

- then(): A method used to handle the resolved value of a promise. It takes a function as an argument, which will be executed if the promise is resolved successfully. It allows for chaining multiple asynchronous operations sequentially.

- catch(): A method used to handle errors or rejections in promises. It takes a function as an argument, which will be executed if the promise is rejected. It provides a way to handle errors without cluttering the main promise chain, enhancing code readability and maintainability.


*/

let pAll = Promise.all([n1, n2]);
pAll
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log("" + err);
  });
let SettledProm = Promise.allSettled([n1, n2]);
SettledProm.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log("" + err);
});
let raceProm = Promise.race([n1, n2]);
raceProm
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log("" + err);
  });
let anyProm = Promise.any([n1, n2]);
anyProm
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log("" + err);
  });
/*
  - Promise.allSettled(): A method that takes an array of promises and returns a single promise that resolves after all of the given promises have either resolved or rejected. The resulting promise resolves with an array of objects, each representing the outcome of the corresponding promise in the input array, whether it was fulfilled with a value or rejected with a reason. This method is useful when you want to wait for all promises to settle, regardless of whether they were fulfilled or rejected.

  - Promise.race(): A method that takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array settles, either by fulfilling with a value or rejecting with a reason. The resulting promise settles with the same outcome (fulfilled or rejected) and the same value or reason as the first promise to settle in the input array. This method is useful when you want to execute multiple asynchronous operations concurrently and respond as soon as the first one completes.

  - Promise.all(): A method that takes an array of promises and returns a single promise that resolves only when all of the promises in the array have resolved successfully. If any of the promises in the array is rejected, the resulting promise is also rejected, and its rejection reason will be the reason of the first rejected promise in the input array. This method is useful when you need to perform multiple asynchronous operations in parallel and wait for all of them to complete before proceeding.

  - Promise.any(): A method that takes an array of promises and returns a single promise that resolves as soon as any of the promises in the array fulfills. If all promises are rejected, it rejects with an AggregateError, a new subclass of Error that groups together individual errors from each promise. This method is useful when you want to respond as soon as any of the promises in the array fulfills, ignoring rejections until at least one promise succeeds.
*/
