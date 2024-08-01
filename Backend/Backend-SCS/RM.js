const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware Ocurreed");
  next();
});

app.get("/home", (req, res) => {
  res.send("Hello Janeman");
  console.log("End-Point Ocurreed");

});
app.listen(5000, () => {
  console.log("App is listening non " + 5000);  
});
