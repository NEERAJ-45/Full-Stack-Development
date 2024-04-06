const { Promise } = require("mongoose");

console.log("Hum First Hum First");
console.log(" Amar hai hum!👿");

setTimeout(() => {
  console.log("Im... Ironman🤟🔥");
}, 2000);
setTimeout(() => {
  console.log("Genius Billionaire Playboy Philatrophist");
}, 2000);

console.log("We are In Endgame Now🥶🥵!!");

const callBack = (params) => {
  console.log("Hey " + params);
};

const loadScript = (src, callBack) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callBack("Neeraj");
  document.head.append(sc);
};
loadScript("new.js",callBack)
