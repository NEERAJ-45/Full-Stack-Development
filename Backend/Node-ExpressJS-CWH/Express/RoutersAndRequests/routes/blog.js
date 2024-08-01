const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("BJ home page");
});

router.get("/about", (req, res) => {
  res.send("About BJ");
});

router.get("/getHello/:ready", (req, res) => {
  res.send(
   `Getting Hello from ${req.params.ready}`
  );
});

module.exports = router;

