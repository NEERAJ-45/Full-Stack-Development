// Immediate Invoking Function Expression

async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello, World!");
    }, 3000);
  });
}

( async function main(){
    let a = await sleep();
    console.log(a);
    
})()