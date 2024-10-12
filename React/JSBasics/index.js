var state = [0,1, 2, 3, 4, 5];

var copy = [...state]   //Destructuring
console.log("OG:"+state);
console.log("copy:"+copy);
copy.pop()
console.log("After Popping: ");

console.log("OG:"+state);
console.log("copy:"+copy);


