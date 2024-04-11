const display = document.getElementsByClassName("display")[0];

function inputVal(input) {
  display.value += input;
}
function Clear() {
  display.value = "";
}

function Calculate() {
    try {
        
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR";
    }
}
