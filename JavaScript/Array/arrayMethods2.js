const numbers = [23, 4, 5, 6, 7, 8, 1];

//@ Important Array Methods

//* 1. indexOf() :-  find the index of a specific value
console.clear();
console.log(numbers.indexOf(11));

//* 2. includes() :- check if a value exists in the array

console.log(numbers.includes(25));

//* 3. find()   :-  ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

console.log(numbers.find((value) => value > 5));

//* 4. findIndex() :- The findIndex() method returns the index of the first array element that passes a test function.
console.log(numbers.findIndex((value) => value > 2));

//*5.findLast() :- starts from the end of an array and return the value of the first element that satisfies a condition.
console.log(numbers.findLast((value) => value > 2));

//@ Sorting Methods:

//* 1. sort() :- Sorts the Array Alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());

//* 2.The reverse() :  reverses the elements in an array!

// console.log(fruits.reverse());

// ! By combining sort() and reverse(), you can sort an array in descending order:

console.log(fruits.sort().reverse());

// *3. toSorted() & toReversed()

//. The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

//.The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
const sorted = months.toSorted();
