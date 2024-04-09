const { text } = require("express");

let container = document.querySelector(".container");
text1 = "Initializing Hacking</br>"


setInterval(() => {
  container.innerHTML = "";
  container.innerHTML = text;

}, 2000);


function addDots(text){
  text.append('.'); 
}