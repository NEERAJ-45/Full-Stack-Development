/*
-The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.*/
console.clear();
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4];
let doubles = [];

for (let iterator of arr) {
  if (iterator in doubles) {
    console.error("Duplicates Not Allowed");
  } else doubles.push(iterator * iterator);
}

console.log(doubles);
