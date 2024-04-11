let [x, y] = [1, 23];
console.log(x, y);

//- Rest Operator

[x, y, ...Rest] = [1, 23, 89, 876, 899, 203];

console.log(Rest);

let obj = {
  a: 1233,
  b: 33424,
  c: 3987,
};

let { a, b } = obj;
x;
console.log(a, b);

// - Spread Operator

let aaa = [1, 23, 89];

sum = (a, b, c) => {
  return a + b + c;
};

console.log(sum(aaa[0] + aaa[1] + aaa[2]));
console.log(sum(...aaa));
