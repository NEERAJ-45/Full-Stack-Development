let arrays = [1, 2, 3, 4, 5, 6, 7];

// @ Array Methods

//*  1.length :-  The length property returns the length (size) of an array:

console.log(arrays.length);

//*  2.toString():- converts an array to a string of (comma separated) array values.
console.log(arrays.toString() + typeof arrays.toString());

//*  3.arrayAt() :- returns an indexed element from an array.
console.log(arrays.at(2));

//*  4.Join() :- joins all array elements into a string , it just behaves just like toString(), but in addition you can specify the "separator":

console.log(arrays.join(","));

//* 5.pop() :- removes the last element from an array,also this method returns the value that was "popped out"
console.log(arrays.pop());
console.log(arrays.pop());
console.log(arrays.pop());

//* 6. push() :- adds a new element to an array (at the end):
arrays.push(69);
arrays.push(85);
arrays.push(23);
console.log(arrays);

//* 7. shift() :-  removes the first array element and "shifts" all other elements to a lower index.it  returns the value that was "shifted out":

console.log(arrays.shift());
console.log(arrays);

//* 8. unshift() :- adds a new element to an array (at the beginning), and "unshifts" older elements:
arrays.unshift(45);
console.log(arrays);

//? 9. length :- provides an easy way to append a new element to an array:

arrays[arrays.length] = 345;
console.log(arrays);

//* 10. delete :- deletes the element At Provided Index

// delete arrays[7];
console.log(arrays);

//! Using delete leaves undefined holes in the array. Use pop() or shift() instead.

//* 11. concat() :- method creates a new array by merging (concatenating) existing arrays:

let newArray = [101, 98, 76, 54, 32];
console.log(arrays.concat(newArray));

//# You can concat Strings in arrays
console.log(arrays.concat("Neeraj"));

//*12. copyWithin() :- copies array elements to another position in an array:
console.log(newArray.copyWithin(2, 0));

//. Note: The copyWithin() method overwrites the existing values. it does not add items to the array.it does not change the length of the array.

//* 13. flat() :-  method creates a new array with sub-array elements concatenated to a specified depth.

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(myArr.flat());

//* 14. splice() :-  can be used to add new items to an array:method returns an array containing the deleted elements, or an empty array if no elements are removed.

console.clear();
console.log(arrays);
console.log(arrays.splice(1, 2, 99, 87));
console.log(arrays);

//#14.1 toSpliced():-  The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array

console.log(arrays.toSpliced(0, 1, 23, 42));

//* 15. slice: Slice out a part of an array starting from array index provided

console.log(arrays.slice(4));

//* The slice() method can take two arguments like slice(1, 3).The method then selects elements from the start argument, and up to (but not including) the end argument.

console.log(arrays.slice(0, 3));
