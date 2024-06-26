const h1 = document.getElementsByTagName("h1")[0];

const greyBox = document.getElementById("greyBox");
greyBox.addEventListener("click", () => {
  document.body.style.backgroundColor = "grey";
  h1.style.color = "aliceblue";
});
const whiteBox = document.getElementById("whiteBox");
whiteBox.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  h1.style.color = "Cyan";

});
const blueBox = document.getElementById("blueBox");
blueBox.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
  h1.style.color = "RED";

});
const yellowBox = document.getElementById("yellowBox");
yellowBox.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
  h1.style.color = "aliceblue";

});
