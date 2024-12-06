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
let ab;
ab = 12;
ab = false; // it will give error because ab is number type
console.log(UserData.name);
