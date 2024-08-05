const express = require("express");
const app = express();
const port = 3000;

const userModel = require("./usermodel");

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Sujal",
    username: "SujalAlwaysOPPP",
    email: "sujal@gmail.com",
  });
  res.send(createdUser);
});

app.get("/readOne", async (req, res) => {
  let users = await userModel.find({ username: "SujalAlwaysOPPP" });
  res.send(users);
});
app.get("/readAll", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});
app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "neerajAlwaysOP" },
    { name: "sonalIsCute", username: "sonalAlwaysCute" },
    { new: true }
  );
  res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ username: "SujalAlwaysOPPP" });
  res.send(users);
});

app.listen(port, () => {
  console.log("Server Running on Port: " + port);
});
