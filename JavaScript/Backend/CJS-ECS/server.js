//* Common Js
// const http = require("node:http");
// const fs = require("fs");

// import http from "http"; //*EcmaScript
/*
const hostName = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<b>Hello Fellas :D</b> ");
});

server.listen(port, hostName, () => {
  console.log(`The Server is running at http://${hostName}:${port}/`);
});
*/
/*
//# named Export
import { a } from "./mymodule.js";
console.log(a);

//# Default Export : we can use any name
import object from "./mymodule.js";
console.log(object);
*/

// using Require Syntax for Our own Modules
// const a = require('./myModules2.js');
// console.log(a);

const a = require('./myModules2.js');
console.log(a);