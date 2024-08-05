const express = require("express");
const path = require("path");
const fs = require("fs");
const { log } = require("console");

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
app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    // console.log(data);
    res.render("show", { filename: req.params.filename, filedata: filedata });
  });
});

app.post("/edit", (req, res) => {
  // console.log(req.body);

  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}`, 
    (err) => {
      if (err) console.log("Internal Server Error");
      res.redirect("/");
    }
  );
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});

app.post("/create", (req, res) => {
  const sanitizedTitle = req.body.title.trim().replace(/[^a-zA-Z0-9]/g, "_");
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
