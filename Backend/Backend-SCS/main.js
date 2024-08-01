const fs = require("fs");
// fs.writeFile('Hey.txt'," Jevlis ka?",(err)=>{
//     if (err) {
//         console.error(err)
//     }
//     else{
//         console.log("Done!! code Executed");

//     }
// })

// fs.rename('Hello2.txt','Hello23.txt',(err)=>{
//     if(err){
//         console.log(err);

//     }else
//         console.log("File renamed Successfully");

// })

// fs.copyFile('Hello23.txt','./Copy/copy.txt',(err)=>{
//         if(err){
//             console.log(err.message
//             );

//         }else
//             console.log("File Copied Successfully");

// })

// fs.unlink("./Hello23.txt", (err) => {
//   if (err) console.error(err.message);
//   else console.log("Deleted");
// });
// fs.rm ('./Copy',{recursive:true},(err)=>{
//     if(err){
//         console.error(err.message);
//     }
//     else console.log("removed");
    
// })


fs.readFile('Hey.txt',(err,data)=>{
    if (err) {
        console.error(err.message)
    }
    console.log(data.toString());
    
})


 