"use strict";
/*
! Data Types:
* 1. Primitives Data Types -> (Number,Boolean,String)
* Referance Data Type -> [] {} () -> if these Symbol occur the code will use by Referance Type
? it means if you changed the child var the changes will reflect on parent also

* 2. Arrays
* 3. Tuple
* 4. Enums
* 5. Any,Void,Null,Undefined,Never,Unknown
 */
// # Primitives DataTypes
// @ Number
let n = 10;
//@ String
let s = 'Neeraj';
//@ Boolean
let r = true;
let r2 = false;
// # Arrays : An array in TypeScript is a data structure that allows you to store multiple values of the same type in a single variable. Arrays can be defined using the Array type or the shorthand [] syntax.
let arr = [1, 2, 3, 'Peter', true, { 'name': 'Gwen' }];
//@ if you wanna declare array of specific type only then you can use this syntax
let fruits = ['apple', 'banana', 'cherry'];
// # Tuple : A tuple is a data structure that allows you to store a collection of elements of different data types.
let arrr = ['apple', 4, true];
// # Enums : Enums allow us to define a set of named constants i.e. a collection of related values that can be numeric or string values.
var UserData;
(function (UserData) {
    UserData["name"] = "Neeraj";
    UserData[UserData["age"] = 21] = "age";
})(UserData || (UserData = {}));
console.log(UserData.name);
let ab;
ab = 12;
// ab = false; // it will give error because ab is number type
// * Any: This type allows a variable to hold any value, effectively opting out of type checking. It can be useful when you don't know the type in advance, but it should be used sparingly to maintain type safety.
let ac;
ac = 12;
ac = false; // it will not give error because ac is any type
//* Unknown: This type is similar to any, but it is safer. It indicates that a variable can hold any value, but you must perform some type checking before performing operations on it. This helps maintain type safety.
let ns;
ns = 32;
ns = 'Neeraj Surnis';
if (typeof ns === 'string') {
    console.log(ns.toUpperCase());
}
//* Void: This type is used to indicate that a function does not return a value. It is commonly used as the return type for functions that perform an action but do not produce a result.
function Hello() {
    console.log('Hello World');
}
Hello();
// * Null and Undefined: These types are used to represent the primitive values null and undefined. They are often used as the default values of variables that may not have been initialized.
let nullvar = 12;
console.log(nullvar);
console.log(typeof nullvar);
//nullvar = 'Neeraj'; // it will give error because nullvar is number type or Null type.
let undefinedvar;
console.log(typeof undefinedvar);
//* Never: This type represents values that never occur. It is used for functions that throw exceptions or for infinite loops. It indicates that the function will not complete normally.
function hello() {
    while (true) {
        console.log('Hello');
    }
}
hello();
