const fs = require("Node-ExpressJS/Node/Path-Modules/fs.js");
// console.log(fs);

// console.log("starting");

// fs.writeFileSync("harry.txt", "Neeraj is a Good Boy");


/*# The string "starting" is logged to indicate the beginning of a process, then `fs.writeFileSync` is used to synchronously create a file named `harry.txt` and write the string "Neeraj is a Good Boy" into it, blocking further execution until the file operation is complete, and finally, the string "ending" is logged to signify the end of the process
*/

// console.log("starting");

// fs.writeFile("NS.txt","Genius",()=>{
//     console.log("Done");
    
// })

// console.log("ending");

/* starting->ending->Done

first starting will print then writeFile(args) will be Sheduled to Process then first ending will printed then after writeFile(args) will be Executed and after the callback function of writeFile(args) will log Done

*/

//  Reading after Writing

// fs.writeFile("NS.txt","Genius",()=>{
//     console.log("Done");
//     fs.readFile("NS.txt",(error,data)=>{
//         console.log(error,data.toString());
        
//     })
    
// })

//Appending 
fs.appendFile('NS.txt'," Neeraj is a Genius",(er,dt)=>{
    console.log(er);
    console.log(dt);
    
})
 