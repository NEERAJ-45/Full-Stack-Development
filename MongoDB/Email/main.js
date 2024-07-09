import mongoose from "mongoose";
import express from "express";
import { Cred } from "./models/Cred.js"; 

const conn = await mongoose.connect("mongodb://localhost:27017/Hackathon3");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let cred = await Cred.findOne({ email });
  if (cred) {
    return res.status(400).send("Email already exists");
  }

  cred = new Cred({ email, password });
  await cred.save();

  res.send("Credentials saved successfully!");
});

app.get("/retrieve/:email", async (req, res) => {
  const { email } = req.params;

  let cred = await Cred.findOne({ email });
  if (!cred) {
    return res.status(404).send("Credentials not found");
  }

  res.json(cred);
});
import path from "path";
const __dirname = path.resolve();

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
