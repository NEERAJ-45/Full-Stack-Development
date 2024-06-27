const express = require("express");
const app = express();
const port = 3000;
const blog = require("./routes/blog");

app.use(express.static("Public"));
app.use("/blog", blog);

app
  .get("/home", (req, res) => {
    res.sendFile("templates/index.html", { root: __dirname });
  })

  .post("/", (req, res) => {
    console.log("This is a Post Request");
    res.send("This is a Post request");
  })
  .put("/", (req, res) => {
    console.log("This is a put Request");
    res.send("This is a put request");
  });

app.get("/api", (req, res) => {
  res.json({ a1: 1, b1: 2, c1: 34, name: ["Neeraj", "Shreyash"] });
});

app.listen(port, () => {
  console.log("The app is opened on " + port);
});
