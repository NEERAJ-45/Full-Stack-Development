const express = require("express");
const userModel = require("./models/user");
const port = 3000;
const app = express();
const path = require("path");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/delete/:id", async (req, res) => {
    let users = await userModel.findOneAndDelete({_id:req.params.id});
    res.redirect('/read')
});
app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read",{users});
});
app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createduser = await userModel.create({
    name,
    email,
    image,
  });

  res.redirect('/read');
});

app.listen(port, () => {
  console.log("Server Listening on Port: " + port);
});
