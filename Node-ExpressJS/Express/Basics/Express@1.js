const express = require("express");
const app = express();
const port = 3000;

app.get("/about-me", (req, res) => {
  res.send("Hello fellas My name is Neeraj");
});
app.get("/contact", (req, res) => {
  res.send("Hello fellas Contact me");
});
app.get("/server", (req, res) => {
  res.send("Hello fellas This is my server");
});

app.get("/me/:first/:second", (req, res) => {
  res.send(`This is request to ${req.params.first} & ${req.params.second}`);
});

app.use(express.static("myFolder"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
