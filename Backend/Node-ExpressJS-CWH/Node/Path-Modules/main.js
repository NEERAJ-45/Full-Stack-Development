import fs from "fs/promises"
let a = await fs.readFile('NS.txt')
console.log(a.toString());

let b = await fs.appendFile('NS.txt',"Neeraj is Good Boy",(error,data)=>{
    console.log(data,error);
    
})


