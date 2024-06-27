import path, { dirname } from "path"
import { kill } from "process";
let myPath = "E:\\Study\\coding\\SigmaWebDev\\SigmaWebDev\\Node-ExpressJS\\Path-Modules\\package.json"
console.log(path.extname(myPath));
console.log("Path: "+path.dirname(myPath));
console.log("Filename: "+path.basename(myPath));

console.log(path.join('E:/',"study\\coding\\old"));
console.log(path.parse(myPath));
