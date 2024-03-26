//.while Loop
let i = 0;
while (i < 10) {
  console.log(i + 1);
  i++;
}
//# for loop
    
for (let i = 10; i > 0; i--) {
  console.log(i);
}
//# for in loop : used to iterate through Objects

let student = {
  name: "Neeraj",
  Grade: "A",
  DEPT: "CSE",
  age: 19,
};
console.clear();
for (key in student) {
  console.log(key + ": " + student[key]);
}
//#For Each Loop: used for  for iterating over the properties of an object, including inherited properties from its prototype chain.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.forEach((item) => {
  console.log(item * item * item);
});

//#for Of Loop:used for iterating over iterable objects like arrays, strings, maps, and sets

number = [1, 2, 3];

for (const iterator of number) {
  console.log(iterator + ": " + numbers[iterator]);
}
