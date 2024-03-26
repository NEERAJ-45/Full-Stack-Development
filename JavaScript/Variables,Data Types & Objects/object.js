/*
# 1. Objects are collections of key-value pairs, where keys are strings that uniquely identify properties and values can be of any data type.

# 2. Keys uniquely identify properties within an object.

# 3. Values associated with object properties can be of any data type, including primitives, arrays, functions, or other objects.

# 4. Objects can contain properties and methods, with methods being functions associated with the object for performing actions.

# 5. Objects in JavaScript are dynamic, allowing properties and methods to be added, modified, or deleted at runtime for flexible data manipulation.

# 5. Objects in JavaScript are dynamic, allowing properties and methods to be added, modified, or deleted at runtime for flexible data manipulation.
*/

let student = {
  name: "Neeraj",
  Grade: "A",
  DEPT: "CSE",

};


/**  
 * .properties of objects can be accessed using following syntax: 
 
* ? objectName.propertieName  
 
*/
console.log(student.name);
console.log(student.Grade);
console.log(student.DEPT);
student.DEPT = "ETC"
console.log(student.DEPT);

