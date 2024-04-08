async function myFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mumbai cha Raja... Rohit Sharma🔊🗣...");
    }, 2000);
  });
}

async function main() {
  console.log("Hum First.. Hum First");
  console.log("Bhupendra Jogi");
  console.log("Aayein...Baigan🍆");
  let data = await myFun();
  console.log(data);
  console.log("Par Maine Khatti Toffee Khayi hai!!.😈");
  console.log("Kuch toh gadbad hai dayaa");
}

main();
