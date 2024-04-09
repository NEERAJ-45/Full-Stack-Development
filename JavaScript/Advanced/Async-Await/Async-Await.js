async function myFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mumbai cha Raja... Rohit Sharma🔊🗣...");
      // djdjdjdjd
    }, 2000);
  });
}
async function main() {
  console.log("Hum First.. Hum First");
  // djdjdjdjd
  console.log("Bhupendra Jogi");
  console.log("Aayein...Baigan🍆");
  let data = await myFun();
  console.log(data);
  console.log("Par Maine Khatti Toffee Khayi hai!!.😈");
  console.log("Kuch toh gadbad hai dayaa");
}

main();
/*

# 1.Async-await:Async-await is a modern JavaScript feature that simplifies writing and managing asynchronous code.
# 2.It allows you to write asynchronous code in a more synchronous-looking manner, making it easier to read and maintain.
# 3.The async keyword is used to define a function as asynchronous, allowing it to use the await keyword inside.
# 4.The await keyword is used to pause the execution of an asynchronous function until a promise is resolved, and it returns the resolved value.
# 5.Async functions always return a promise, and the resolved value of the promise is whatever is returned from the async function, or it can be explicitly resolved using the return statement.
# 6.Async-await is particularly useful when working with promises and allows you to write asynchronous code that resembles synchronous code, improving code clarity and maintainability.*/