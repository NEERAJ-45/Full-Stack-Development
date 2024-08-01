const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("Hellll Yeahhhhhh😎");
  res.render("index");
});
app.get("/profile/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});
app.get("/profile/:author/:age", (req, res) => {
    // res.send(req.params)
  res.send(`Hello ${req.params.age} Year old ${req.params.author}`);
});

app.listen(port, (req, res) => {
  console.log("Its working broo 😁");
});
