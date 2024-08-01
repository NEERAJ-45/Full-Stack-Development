const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello fellas My name is Neeraj Vyankatesh Surnis");
});
app.get("/contact", (req, res) => {
  res.send("Bhikmangya");
});


app.use((req,res,next)=>{
  res.send("Hacked By First Middleware");
    console.log("First Middleware");
    next()
})

app.use((req,res,next)=>{
    console.log("Second Middleware");
    next()
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
