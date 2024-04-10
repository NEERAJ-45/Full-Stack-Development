let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter another number: ");

if (isNaN(num1) || isNaN(num2)) {
  throw SyntaxError("Chal na Chutiye..");
}
sum = parseInt(num1) + parseInt(num2);

const a = () => {
  // x = 10;
  try {
    console.log(sum * x);
    return true;
  } catch (error) {
    console.log("Error aa gya Be ");
    console.log("Ye Error Hai: " + error.name);
    console.log("Ye Error ka Message  Hai: " + error.message);
    console.log("Ye Kya hai Pata Nahii:  " + error.stack);
    return false;
  } finally {
    console.log("Main Sone ja rha hu  !!");
  }
};
