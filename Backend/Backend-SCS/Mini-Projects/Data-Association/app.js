const express = require("express");
const port = 3000;
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/profile", isLoggedIn, (req, res) => {
  res.render("login");
});
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});
app.post("/register", async (req, res) => {
  let { email, username, password, name, age } = req.body;
  let user = await userModel.findOne({ email });
  if (user) return res.status(500).send("User already Registered");
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      let user = await userModel.create({
        email,
        username,
        password: hash,
        name,
        age,
      });

      let token = jwt.sign({ email: email, userid: user._id }, "MONDAY");
      res.cookie("token", token);
      res.send("registered");
    });
  });
});
app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) res.status(500).send("Something went wrong!");
 
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "MONDAY");
      res.cookie("token", token);
      res.status(200).send("You can login");
    } else res.redirect("/login");
  });
});

function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") {

   return res.send("U must be logged in");
  } else {
    let data = jwt.verify(req.cookies.token, "MONDAY");
    req.user = data;
  }
  next();
}

app.listen(port, () => {
  console.log("App is Listening on port : " + port);
});
