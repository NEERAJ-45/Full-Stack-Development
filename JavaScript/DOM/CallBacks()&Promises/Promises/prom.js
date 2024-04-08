const e = require("express");

let rohit = new Promise((resolve, reject) => {
  let score = Math.random() * 300 + 1;
  if (score < 50) {
    // console.log("Rohit Scored " + Math.floor(score) + " only😓");
    reject("Rohit Scored " + Math.floor(score) + " only😓💔");
  } else {
    setTimeout(() => {
      //   console.log("Rohit Scored " + score + " 😎🔥");
      resolve("Rohit Scored " + Math.floor(score) + " 😎🔥");
    }, 2000);
  }
});
let virat = new Promise((resolve, reject) => {
  let score = Math.random() * 300 + 1;
  if (score < 50) {
    // console.log("Rohit Scored " + Math.floor(score) + " only😓");
    reject("Virat Scored " + Math.floor(score) + " only😓💔");
  } else {
    setTimeout(() => {
      //   console.log("Rohit Scored " + score + " 😎🔥");
      resolve("Virat Scored " + Math.floor(score) + " 😎🔥");
    }, 2000);
  }
});

// player
//   .then((statement) => {
//     console.log(statement);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
/*
promiseAll = Promise.all([rohit, virat]);
promiseAll
  .then((statement) => {
    statement.forEach((statement) => {
      console.log(statement);
    });
  })
  .catch((error) => {
    console.log(error);
  });*/
let raceProm = Promise.race([rohit, virat]);
raceProm
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log("" + err);
  });

// promRace
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
