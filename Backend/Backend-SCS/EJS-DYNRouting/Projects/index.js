const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("./Files", (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
  const sanitizedTitle = req.body.title.trim().replace(/[^a-zA-Z0-9]/g, '_');
  const details = req.body.details;

  fs.writeFile(`./Files/${sanitizedTitle}.txt`, details, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log("App listening on port:", port);
});
