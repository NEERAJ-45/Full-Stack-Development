let num1 = Number(window.prompt("Enter a number: "));
let num2 = Number(window.prompt("Enter another number: "));
console.log("Entered numbers: " + num1 + ", " + num2);

let rand = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
console.log("Random number between 1 and 100: " + rand);
if (rand < 10) {
    let result = Number(window.prompt("1. +\n2. -\n3. *\n4. \\ What Do u wanna perform? "));
    switch (result) {
        case 1:
            console.log("Faulty Addition: " + (num1 - num2));
            break;
        case 2:
            console.log("Faulty Subtraction: " + (num1 / num2));
            break;
        case 3:
            console.log("Faulty Multiplication: " + (num1 + num2));
            break;
        case 4:
            console.log("Faulty Exponentiation: " + (num1 ** num2));
            break;
        default:
            break;
    }
} else {
    let result = Number(window.prompt("1. +\n2. -\n3. *\n4. \\ \nWhat Do u wanna perform? "));
    switch (result) {
        case 1:
            console.log("Addition: " + (num1 + num2));
            break;
        case 2:
            console.log("Subtraction: " + (num1 - num2));
            break;
        case 3:
            console.log("Multiplication: " + (num1 * num2));
            break;
        case 4:
            console.log("Division: " + (num1 / num2));
            break;
        default:
            break;
    }
}
