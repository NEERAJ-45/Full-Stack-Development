const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const userModel = require("./models/user");
const path = require("path");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { log } = require("console");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // res.send("Heyy");
  res.render("index");
});

app.post("/create", (req, res) => {
  let { email, username, age, password } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await userModel.create({
        email,
        username,
        password: hash,
        age,
      });

      let token = jwt.sign({ email }, "NeerajIsGod");
      res.cookie("token", token);

      res.send(createdUser);
    });
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  // console.log(user);
  if (!user) {
    res.send("Something went wrong");
  }
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    // console.log(result);
    if (result) {
      let token = jwt.sign({ email: user.email }, "NeerajIsGod");
      res.cookie("token", token);
      res.send("Yes U can Login");
    } else res.send("No You cant login");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(port, () => {
  console.log("App is listening on:  " + port);
});
