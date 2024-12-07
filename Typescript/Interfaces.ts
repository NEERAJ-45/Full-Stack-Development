//@ interfaces are used to define the structure of an object. They provide a way to define the shape of an object, specifying the types of its properties
interface User {
  Username: string;
  age: number;
  password: string;
  genderMale?: boolean;
}

function set(A: number, B: string, Obj: User) {
  Obj.Username = "Neeraj";
  Obj.age = 21;
  Obj.password = "12345";
}

set(21, "Neeraj", { Username: "neer", age: 21, password: "neer1234" });

//* Extending the interfaces

interface Employee {
  empid: number;
  empname: string;
}

interface Manager extends Employee {
  department: string;
}

function wxyz(obj: Manager) {
  console.log(obj.empid);
}
wxyz({ empid: 32, empname: "Neeraj", department: "Sales" });

//@ type aliases
type custom = number | string | null;
let num: custom = 10;
function abcd(num: custom) {}

