let password = "aeerajalwaysOp69";

let validatePass = (password) => {
  if (password.length < 8) {
    return false;
  }
  let hasUpperCase = false; // Declare variables with 'let'
  let hasLowerCase = false;

  for (let i of password) { // Use 'let' to declare the loop variable
    if (i >= "A" && i <= "Z") {
      hasUpperCase = true;
    } else if (i >= "a" && i <= "z") {
      hasLowerCase = true;
    }
  }
  if (!hasUpperCase || !hasLowerCase) { // Correct variable names
    return false;
  }
  let hasDigit = false; // Declare the variable
  for (let i of password) { // Use 'let' to declare the loop variable
    if (i >= "0" && i <= "9") {
      hasDigit = true;
    }
  }
  if (!hasDigit) {
    return false;
  }
  return true;
};

console.log(validatePass(password)); // Output: true
