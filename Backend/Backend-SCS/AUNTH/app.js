const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.get("/check", (req, res) => {
  res.cookie("name", "Sonali");

  bcrypt.compare(
    "NeerajAlwaysOP",
    "$2b$10$RAqE/PGUKE0crbVtaismdebtojVs4hs1Iy5smZQ.Y4lNyaQZP8LbC",
    (error, result) => {
      console.log(result);
    }
  );
  res.send("working");
});

app.get("/hash", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    console.log("Salt: " + salt);
    bcrypt.hash("NeerajAlwaysOP", salt, (err, hash) => {
      console.log("hash: " + hash);
    });
  });
});

// Cookies
// app.get("/get", (req, res) => {
//   res.send("Done Again");
//   console.log(req.cookies);
// });
app.listen(3000);
