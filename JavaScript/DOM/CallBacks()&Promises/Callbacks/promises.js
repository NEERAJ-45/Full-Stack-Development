console.log("This is Promises");
console.clear();
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
/*
n1.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log("The Error is: " + err);
});*/

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
