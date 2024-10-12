let addbtn = document.querySelector(".add");
let stranger = document.querySelector(".stranger");

var flag = 0;
addbtn.addEventListener("click", () => {
  if (flag == 0) {
    stranger.textContent = "Friend🤗";
    stranger.style.color = "Green";
    addbtn.textContent = "Remove Friend";
    flag = 1;
  } else {
    stranger.textContent = "Stranger🙄";
    stranger.style.color = "red";
    addbtn.textContent = "Add Friend";
    flag = 0;
  }
});
