const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("Public"));

app
  .get("/home", (req, res) => {
    res.send("Hello Coders!!");
  })
  .post("/", (req, res) => {
    console.log("This is a Post Request");
    res.send("This is a Post request");
  })
  .put("/", (req, res) => {
    console.log("This is a put Request");
    res.send("This is a put request");
  });
app.listen(port, () => {
  console.log("The app is opened on " + port);
});
